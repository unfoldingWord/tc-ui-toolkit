'use strict';
import React from 'react';
import isEqual from 'deep-equal';
import stringTokenizer from 'string-punctuation-tokenizer';
import { VerseObjectUtils } from 'word-aligner';
// helpers
import * as highlightHelpers from './highlightHelpers';
import { onWordClick, createNonClickableSpan, createTextSpan, createHighlightedSpan } from './htmlElementsHelpers';
import { removeMarker } from './usfmHelpers';
import { isWord, isNestedMilestone, punctuationWordSpacing, textIsEmptyInVerseObject,
          isIsolatedLeftQuote} from './stringHelpers';

/**
 *
 * @param {String} verseText
 * @param {Array} selections - text selections to highlight
 * @param {Function} translate
 * @param {Number} fontSize
 * @return {*}
 */
export const verseString = (verseText, selections, translate, fontSize = 0) => {
  let newVerseText = removeMarker(verseText);
  newVerseText = newVerseText.replace(/\s+/g, ' ');
  // if string only contains spaces then make it an empty string
  newVerseText.replace(/\s/g, '').length === 0 ? newVerseText = '' : newVerseText;

  // if empty string then newVerseText = place holder warning.
  if (newVerseText.length === 0) newVerseText = translate('pane.missing_verse_warning');
  let verseTextSpans = <span>{newVerseText}</span>;

  if (selections && selections.length > 0) {
    const _selectionArray = stringTokenizer.selectionArray(newVerseText, selections);
    verseTextSpans = [];
    verseTextSpans.length = 0;

    for (let i = 0, len = _selectionArray.length; i < len; i++) {
      const selection = _selectionArray[i];
      const index = i;
      const spanStyle = { backgroundColor: selection.selected ? 'var(--highlight-color)' : '' };
      if (fontSize) {
        spanStyle.fontSize = Math.round(fontSize) + '%';
      }
      verseTextSpans.push(
        <span key={index} style={spanStyle}>
          {selection.text}
        </span>
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
 * @param {Number} fontSize - if zero, will default to 100%
 * @return {Array} - verse elements to display
 */
export function verseArray(verseText = [], bibleId, contextId, getLexiconData, showPopover, translate, fontSize = 0) {
  let words = VerseObjectUtils.getWordListForVerse(verseText);
  let wordSpacing = '';
  let previousWord = null;
  const verseSpan = [];
  verseSpan.length = 0;

  if (verseText.verseObjects && textIsEmptyInVerseObject(verseText, bibleId)) { // if empty verse string.
    verseSpan.push(
      <span key={translate('pane.missing_verse_warning')}>
        {translate('pane.missing_verse_warning')}
      </span>
    );
  } else {
    words = Array.isArray(words) ? words : words.verseObject;
    for (let i = 0, len = words.length; i < len; i++) {
      const word = words[i];
      const index = i;
      const wordsArray = words;
      const nextWord = wordsArray[index + 1];
      if (isWord(word)) {
        const padding = wordSpacing;
        wordSpacing = ' '; // spacing between words
        const text = (word.word || word.text);
        let isHighlightedWord = false;
        let isBetweenHighlightedWord = false;

        if ((bibleId === 'ugnt' || bibleId === 'uhb') && contextId.quote && word.text) {
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
        const paddingSpanStyle = {
          backgroundColor: isBetweenHighlightedWord ? "var(--highlight-color)" : "transparent"
        };

        if (word.strong) { // if clickable
          const spanStyle = { backgroundColor: isHighlightedWord ? "var(--highlight-color)" : "" };
          if (fontSize) {
            spanStyle.fontSize = Math.round(fontSize) + '%';
          }
          verseSpan.push(
            <span
              key={index.toString()}
              onClick={(e) => onWordClick(e, word, getLexiconData, showPopover, translate)}
              style={{ cursor: 'pointer' }}
            >
              <span style={paddingSpanStyle}>
                {padding}
              </span>
              <span style={spanStyle}>
                {removeMarker(text)}
              </span>
            </span>
          );
        } else {
          verseSpan.push(createNonClickableSpan(index, paddingSpanStyle, padding, isHighlightedWord, text));
        }
      } else if (isNestedMilestone(word)) { // if nested milestone
        const nestedMilestone = highlightHelpers.getWordsFromNestedMilestone(word, contextId, index, previousWord, wordSpacing);

        for (let j = 0, nLen = nestedMilestone.wordSpans.length; j < nLen; j++) {
          const nestedWordSpan = nestedMilestone.wordSpans[j];
          verseSpan.push(nestedWordSpan);
        }
        previousWord = nestedMilestone.nestedPreviousWord;
        wordSpacing = nestedMilestone.nestedWordSpacing;
      } else if (word.text) { // if not word, show punctuation, etc. but not clickable
        const text = word.text;
        if (word.tag || isIsolatedLeftQuote(text)) { // if this was not just simple text marker, need to add whitespace
          highlightHelpers.addSpace(verseSpan);
        }
        wordSpacing = punctuationWordSpacing(word); // spacing before words

        console.log('is not Word');
        console.log('word', word);
        console.log('previousWord', previousWord);
        console.log('isPunctuationHighlighted', highlightHelpers.isPunctuationHighlighted(previousWord, nextWord, contextId));

        if (highlightHelpers.isPunctuationHighlighted(previousWord, nextWord, contextId, words, index)) {
          verseSpan.push(createHighlightedSpan(index, text));
        } else {
          verseSpan.push(createTextSpan(index, text));
        }
      }
    }
  }

  return verseSpan;
}
