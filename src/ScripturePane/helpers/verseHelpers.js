'use strict';
import React from 'react';
import isEqual from 'deep-equal';
import * as stringTokenizer from 'string-punctuation-tokenizer';
import { VerseObjectUtils } from 'word-aligner';
// helpers
import * as highlightHelpers from './highlightHelpers';
import {
  createHighlightedSpan,
  createNonClickableSpan,
  createTextSpan,
  onWordClick,
} from './htmlElementsHelpers';
import {
  hasLeadingSpace,
  hasTrailingSpace,
  removeMarker,
} from './usfmHelpers';
import {
  isIsolatedLeftQuote,
  isNestedMilestone,
  isWord,
  punctuationWordSpacing,
  textIsEmptyInVerseObject,
} from './stringHelpers';

/**
 * if showing html, replace
 * @param {object} selection
 * @param {boolean} showUsfm
 * @return {JSX.Element}
 */
function textToHtml(selection, showUsfm) {
  if (showUsfm && (selection.text.indexOf('\n') >= 0)) {
    const parts = selection.text.split('\n');
    const html = [parts[0]];

    for (let i = 1; i < parts.length; i++) {
      html.push(<br/>);
      html.push(parts[i]);
    }
    return <> {html} </>;
  }
  return <>{selection.text}</>;
}

/**
 *
 * @param {String} verseText
 * @param {Array} selections - text selections to highlight
 * @param {Function} translate
 * @param {Object} fontStyle - font specific styling
 * @param {String} isTargetBible
 * @param {String} fontClass
 * @param {boolean} showUsfm
 * @return {*}
 */
export const verseString = (verseText, selections, translate, fontStyle = null, isTargetBible, fontClass, showUsfm) => {
  let newVerseText = showUsfm ? verseText : removeMarker(verseText);
  newVerseText = newVerseText.replace(/\s+/g, ' ');
  // if string only contains spaces then make it an empty string
  newVerseText = newVerseText.replace(/\s/g, '').length === 0 ? '' : newVerseText;

  // if empty string then newVerseText = place holder warning.
  if (newVerseText.length === 0) {
    newVerseText = translate('pane.missing_verse_warning');
  }

  let verseTextSpans = <span className={fontClass}>{newVerseText}</span>;

  if (selections && selections.length > 0) {
    const _selectionArray = stringTokenizer.selectionArray(newVerseText, selections);
    verseTextSpans = [];
    verseTextSpans.length = 0;

    for (let i = 0, len = _selectionArray.length; i < len; i++) {
      const selection = _selectionArray[i];
      const index = i;
      let spanStyle = { backgroundColor: selection.selected ? 'var(--highlight-color)' : '' };

      if (fontStyle) {
        spanStyle = {
          ...spanStyle,
          ...fontStyle,
        };
      }
      verseTextSpans.push(
        <span key={index} className={fontClass} style={spanStyle}>
          {textToHtml(selection, showUsfm)}
        </span>,
      );
    }
  }

  return verseTextSpans;
};

/**
 * create verse elements from an array of verse objects
 * @param {Array|Object} verseText - verse data
 * @param {String} bibleId
 * @param {Object} contextId
 * @param {Function} getLexiconData
 * @param {Boolean} showPopover
 * @param {Function} translate
 * @param {Object} fontStyle - font specific styling
 * @param {String} fontClass - font class name
 * @return {Array} - verse elements to display
 */
export function verseArray(verseText = [], bibleId, contextId, getLexiconData, showPopover, translate, fontStyle = null, fontClass) {
  let verseObjects = VerseObjectUtils.getWordListForVerse(verseText);
  let wordSpacing = '';
  let previousWord = null;
  const verseSpan = [];
  verseSpan.length = 0;

  if (verseText.verseObjects && textIsEmptyInVerseObject(verseText, bibleId)) { // if empty verse string.
    verseSpan.push(
      <span key={translate('pane.missing_verse_warning')}>
        {translate('pane.missing_verse_warning')}
      </span>,
    );
  } else {
    const isHebrew = (bibleId === 'uhb');
    const origLangBible = isHebrew || bibleId === 'ugnt';
    verseObjects = Array.isArray(verseObjects) ? verseObjects : verseObjects.verseObject;

    for (let i = 0, len = verseObjects.length; i < len; i++) {
      const object = verseObjects[i];
      const index = i;
      const nextWord = verseObjects[index + 1];

      if (object.type === 'html') {
        verseSpan.push(object.html);
      } else if (isWord(object)) {
        const padding = wordSpacing;
        wordSpacing = ' '; // spacing between words
        const text = (object.word || object.text);
        let isHighlightedWord = false;
        let isBetweenHighlightedWord = false;

        if (origLangBible && contextId.quote && object.text) {
          isHighlightedWord = highlightHelpers.isWordMatch(object, contextId, verseObjects, index);
          isBetweenHighlightedWord = previousWord && !isEqual(previousWord, object) &&
            highlightHelpers.isWordMatch(previousWord, contextId, verseObjects, index - 1) && isHighlightedWord;
        } else if (contextId.quote && object.content) {
          const highlightedDetails = highlightHelpers.getWordHighlightedDetails(contextId, previousWord, object);
          isHighlightedWord = highlightedDetails.isHighlightedWord;
          isBetweenHighlightedWord = highlightedDetails.isBetweenHighlightedWord;
        }
        // Save word to be used as previousWord in next word.
        previousWord = object;
        const paddingSpanStyle = { backgroundColor: isBetweenHighlightedWord ? 'var(--highlight-color)' : 'transparent' };

        // TRICKY: for now we are disabling lexicon popups for any bible that is not ugnt or uhb. The reason for
        // this is than some bibles have different strongs format. We are waiting on long term solution.
        if (object.strong && origLangBible) { // if clickable
          let spanStyle = { backgroundColor: isHighlightedWord ? 'var(--highlight-color)' : '' };

          if (fontStyle) {
            spanStyle = {
              ...spanStyle,
              ...fontStyle,
            };
          }
          verseSpan.push(
            <span
              key={index.toString()}
              onClick={(e) => onWordClick(e, object, getLexiconData, showPopover, translate, isHebrew)}
              style={{ cursor: 'pointer' }}
            >
              <span className={fontClass} style={paddingSpanStyle}>
                {padding}
              </span>
              <span className={fontClass} style={spanStyle}>
                {removeMarker(text)}
              </span>
            </span>,
          );
        } else {
          verseSpan.push(createNonClickableSpan(index, paddingSpanStyle, padding, isHighlightedWord, text, fontClass));
        }
      } else if (isNestedMilestone(object)) { // if nested milestone
        const nestedMilestone = highlightHelpers.getWordsFromNestedMilestone(object, contextId, index, previousWord, wordSpacing, fontClass);

        for (let j = 0, nLen = nestedMilestone.wordSpans.length; j < nLen; j++) {
          const nestedWordSpan = nestedMilestone.wordSpans[j];
          verseSpan.push(nestedWordSpan);
        }
        previousWord = nestedMilestone.nestedPreviousWord;
        wordSpacing = nestedMilestone.nestedWordSpacing;
      } else if (object.text) { // if not word, show punctuation, etc. but not clickable
        let text = object.text;

        if (hasLeadingSpace(text)) { // leading spaces are not significant in html, so we need to replace with a hard space
          text = text.substr(1);
          highlightHelpers.addSpace(verseSpan, fontClass);
        }

        const trailingSpace = hasTrailingSpace(text);

        if (trailingSpace && text) { // trailing spaces are not significant in html, so we need to replace with a hard space
          text = text.substr(0, text.length - 1);
        }

        const isUsfmTagNotSpan = object.tag && !object.endTag; // see if USFM tag does not have a matching end tag.

        if (isUsfmTagNotSpan || isIsolatedLeftQuote(text)) { // if this was not just simple text marker, need to add whitespace
          highlightHelpers.addSpace(verseSpan);
        }
        wordSpacing = punctuationWordSpacing(object); // spacing before words

        if (highlightHelpers.isPunctuationHighlighted(previousWord, nextWord, contextId, verseObjects, index)) {
          verseSpan.push(createHighlightedSpan(index, text, fontClass));
        } else {
          verseSpan.push(createTextSpan(index, text, fontClass));
        }

        if (trailingSpace) { // add the trailing space after the text span
          highlightHelpers.addSpace(verseSpan);
        }
      }
    }
  }

  return verseSpan;
}

/**
 * get verse range from span
 * @param {string} verseIndex
 * @return {{}|{hi: number, low: number}}
 */
export function getVerseRangeFromSpan(verseIndex) {
  const span = verseIndex.split('-');

  if (span.length >= 2) { // see if verse contained in span
    if (span[0] && span[1]) {
      const low = parseInt(span[0]);
      const hi = parseInt(span[1]);
      return { low, hi };
    }
  }
  return {};
}

/**
 * try to find verse from chapter.  If not found look for verse spans
 * @param {object} bibles
 * @param {string} languageId
 * @param {string} bibleId
 * @param {string} chapter
 * @param {string} verse
 * @return {object|null}
 */
export function getVerseData(bibles, languageId, bibleId, chapter, verse) {
  let verseData = null;
  let verseLabel = null;

  try {
    const chapterData = bibles[languageId][bibleId][chapter];

    if (chapterData) {
      verseData = chapterData[verse];

      if (verseData) {
        verseLabel = verse;
      } else { // search for verse span that contains verse
        const verseVal = parseInt(verse);

        for (let verseIndex in chapterData) {
          if (verseIndex.includes('-')) {
            const { low, hi } = getVerseRangeFromSpan(verseIndex);

            if ( (verseVal >= low) && (verseVal <= hi) ) {
              verseData = chapterData[verseIndex];
              verseLabel = verseIndex;
              break;
            }
          }
        }
      }
    }
    // eslint-disable-next-line no-empty
  } catch (e) {}
  return { verseData, verseLabel };
}

/**
 * check to see if verseLabel is a span, if so see if verse is the first verse in the span
 * @param {string} verseLabel - verse label to test for span
 * @param {string|number} verse - verse number to check if first verse in span
 * @return {object|null}
 */
export function isVerseInSpan(verseLabel, verse) {
  let isVerseSpan = false, isFirstVerse = false;

  if (verseLabel) {
    try {
      const [, hi] = verseLabel.split('-');
      isVerseSpan = !!hi;

      if (isVerseSpan) {
        if (typeof verse === 'string') {
          verse = parseInt(verse);
        }

        const startVerse = parseInt(verseLabel);
        isFirstVerse = (verse === startVerse);
      }
      // eslint-disable-next-line no-empty
    } catch (e) {
    }
  }
  return { isVerseSpan, isFirstVerse };
}

/**
 * create html to mark verse
 * @param verse
 * @return {JSX.Element}
 */
export function getVerseMarker(verse) {
  return <><br/><b>{verse}</b> </>;
}

/**
 * create an html object to insert into scripture pane
 * @param {JSX.Element} html
 * @return {{html, text: string, type: string}}
 */
function createHtmlInsert(html) {
  return {
    type: 'html',
    html: html,
    text: '',
  };
}

/**
 * create an object to mark the beginning of a verse
 * @param {string} verse
 * @return {object}
 */
export function createVerseMarker(verse) {
  return createHtmlInsert(getVerseMarker(verse));
}
