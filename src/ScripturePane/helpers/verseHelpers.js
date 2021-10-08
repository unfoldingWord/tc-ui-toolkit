'use strict';
import React from 'react';
import isEqual from 'deep-equal';
import * as stringTokenizer from 'string-punctuation-tokenizer';
import { VerseObjectUtils } from 'word-aligner';
// helpers
import * as highlightHelpers from './highlightHelpers';
import {
  onWordClick, createNonClickableSpan, createTextSpan, createHighlightedSpan,
} from './htmlElementsHelpers';
import {
  removeMarker, hasLeadingSpace, hasTrailingSpace,
} from './usfmHelpers';
import {
  isWord, isNestedMilestone, punctuationWordSpacing, textIsEmptyInVerseObject,
  isIsolatedLeftQuote,
} from './stringHelpers';

/**
 *
 * @param {String} verseText
 * @param {Array} selections - text selections to highlight
 * @param {Function} translate
 * @param {Object} fontStyle - font specific styling
 * @param {String} isTargetBible
 * @param {String} fontClass
 * @return {*}
 */
export const verseString = (verseText, selections, translate, fontStyle = null, isTargetBible, fontClass) => {
  let newVerseText = removeMarker(verseText);
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
          {selection.text}
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
  let words = VerseObjectUtils.getWordListForVerse(verseText);
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
    words = Array.isArray(words) ? words : words.verseObject;

    for (let i = 0, len = words.length; i < len; i++) {
      const word = words[i];
      const index = i;
      const wordsArray = words;
      const nextWord = wordsArray[index + 1];

      if (word.type === 'html') {
        verseSpan.push(word.html);
      } else if (isWord(word)) {
        const padding = wordSpacing;
        wordSpacing = ' '; // spacing between words
        const text = (word.word || word.text);
        let isHighlightedWord = false;
        let isBetweenHighlightedWord = false;

        if (origLangBible && contextId.quote && word.text) {
          isHighlightedWord = highlightHelpers.isWordMatch(word, contextId, words, index);
          isBetweenHighlightedWord = previousWord && !isEqual(previousWord, word) &&
            highlightHelpers.isWordMatch(previousWord, contextId, words, index - 1) && isHighlightedWord;
        } else if (contextId.quote && word.content) {
          const highlightedDetails = highlightHelpers.getWordHighlightedDetails(contextId, previousWord, word);
          isHighlightedWord = highlightedDetails.isHighlightedWord;
          isBetweenHighlightedWord = highlightedDetails.isBetweenHighlightedWord;
        }
        // Save word to be used as previousWord in next word.
        previousWord = word;
        const paddingSpanStyle = { backgroundColor: isBetweenHighlightedWord ? 'var(--highlight-color)' : 'transparent' };

        // TRICKY: for now we are disabling lexicon popups for any bible that is not ugnt or uhb. The reason for
        // this is than some bibles have different strongs format. We are waiting on long term solution.
        if (word.strong && origLangBible) { // if clickable
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
              onClick={(e) => onWordClick(e, word, getLexiconData, showPopover, translate, isHebrew)}
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
      } else if (isNestedMilestone(word)) { // if nested milestone
        const nestedMilestone = highlightHelpers.getWordsFromNestedMilestone(word, contextId, index, previousWord, wordSpacing, fontClass);

        for (let j = 0, nLen = nestedMilestone.wordSpans.length; j < nLen; j++) {
          const nestedWordSpan = nestedMilestone.wordSpans[j];
          verseSpan.push(nestedWordSpan);
        }
        previousWord = nestedMilestone.nestedPreviousWord;
        wordSpacing = nestedMilestone.nestedWordSpacing;
      } else if (word.text) { // if not word, show punctuation, etc. but not clickable
        let text = word.text;

        if (hasLeadingSpace(text)) { // leading spaces are not significant in html, so we need to replace with a hard space
          text = text.substr(1);
          highlightHelpers.addSpace(verseSpan, fontClass);
        }

        const trailingSpace = hasTrailingSpace(text);

        if (trailingSpace && text) { // trailing spaces are not significant in html, so we need to replace with a hard space
          text = text.substr(0, text.length - 1);
        }

        const isUsfmTagNotSpan = word.tag && !word.endTag; // see if USFM tag does not have a matching end tag.

        if (isUsfmTagNotSpan || isIsolatedLeftQuote(text)) { // if this was not just simple text marker, need to add whitespace
          highlightHelpers.addSpace(verseSpan);
        }
        wordSpacing = punctuationWordSpacing(word); // spacing before words

        if (highlightHelpers.isPunctuationHighlighted(previousWord, nextWord, contextId, words, index)) {
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
 * @param verseIndex
 * @return {{}|{hi: number, low: number}}
 */
export function getVerseRangeFromSpan(verseIndex) {
  const span = verseIndex.split('-');

  if (span.length >= 2) {
    // see if verse contained in span
    const low = parseInt(span[0]);
    const hi = parseInt(span[1]);
    return { low, hi };
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
 * try to find verse from chapter.  If not found look for verse spans
 * @param {string} verseLabel - label to display
 * @param {string|number} verse - verse number to check if first verse in span
 * @return {object|null}
 */
export function isVerseSpan(verseLabel, verse) {
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
 * get string tag for verse
 * @param {string} chapter
 * @param {string} verse
 * @return {string}
 */
export function getVerseTag(chapter, verse) {
  return `[[${chapter}:${verse}]]`;
}
