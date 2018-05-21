import React from 'react';
import isEqual from 'deep-equal';
import stringTokenizer from 'string-punctuation-tokenizer';
import { VerseObjectUtils } from 'word-aligner';
// helpers
import * as highlightHelpers from './highlightHelpers';
import { onWordClick, createNonClickableSpan, createTextSpan, createHighlightedSpan } from './htmlElementsHelpers';
import { removeMarker } from './usfmHelpers';
import { isWord, isNestedMilestone, punctuationWordSpacing, textIsEmptyInVerseObject } from './stringHelpers';
// constants
const PLACE_HOLDER_TEXT = '[WARNING: This Bible version does not include text for this reference.]';

export const verseString = (verseText, selections) => {
  verseText = removeMarker(verseText);
  verseText = verseText.replace(/\s+/g, ' ');
  // if empty string then verseText = place holder warning.
  if (verseText.length === 0) verseText = PLACE_HOLDER_TEXT;
  let verseTextSpans = <span>{verseText}</span>;

  if (selections && selections.length > 0) {
    const _selectionArray = stringTokenizer.selectionArray(verseText, selections);

    verseTextSpans = _selectionArray.map((selection, index) => {
      return (
        <span key={index} style={{ backgroundColor: selection.selected ? 'var(--highlight-color)' : '' }}>
          {selection.text}
        </span>
      );
    });
  }

  return verseTextSpans;
};

export const verseArray = (verseText = [], bibleId, contextId, getLexiconData, showPopover, isGrayVerseRow) => {
  // TODO: isGrayVerseRow
  const words = VerseObjectUtils.getWordListForVerse(verseText);
  let wordSpacing = '';
  let previousWord = null;
  const verseSpan = [];

  if (verseText.verseObjects && textIsEmptyInVerseObject(verseText)) { // if empty verse string.
    verseSpan.push(<span key={PLACE_HOLDER_TEXT}>{PLACE_HOLDER_TEXT}</span>);
  } else {
    words.forEach((word, index, wordsArray) => {
      const nextWord = wordsArray[index + 1];
      if (isWord(word)) {
        const padding = wordSpacing;
        wordSpacing = ' '; // spacing between words
        const text = (word.word || word.text);
        let isHighlightedWord = false;
        let isBetweenHighlightedWord = false;
  
        if (bibleId === 'ugnt' && contextId.quote && word.text) {
          isHighlightedWord = highlightHelpers.isWordMatch(word, contextId, words, index);
          isBetweenHighlightedWord = previousWord && !isEqual(previousWord, word) &&
            highlightHelpers.isWordMatch(previousWord, contextId, words, index - 1) && isHighlightedWord;
        } else if (bibleId === 'ulb' || bibleId === 'ult' || bibleId === 'udt' && contextId.quote && word.content) {
          const highlightedDetails = highlightHelpers.getWordHighlightedDetails(contextId, previousWord, word);
          isHighlightedWord = highlightedDetails.isHighlightedWord;
          isBetweenHighlightedWord = highlightedDetails.isBetweenHighlightedWord;
        }
        // Save word to be used as previousWord in next word.
        previousWord = word;
        // if isGrayVerseRow is true then background is gray in the ChapterViewModal.
        const paddingSpanStyle = {
          backgroundColor: isBetweenHighlightedWord ? "var(--highlight-color)" :
            isGrayVerseRow ? 'var(--background-color-light)' : '#FFFFFF'
        };
  
        if (word.strong) { // if clickable
          verseSpan.push(
            <span
              key={index.toString()}
              onClick={(e) => onWordClick(e, word, getLexiconData, showPopover)}
              style={{ cursor: 'pointer' }}
            >
              <span style={paddingSpanStyle}>
                {padding}
              </span>
              <span style={{ backgroundColor: isHighlightedWord ? "var(--highlight-color)" : "" }}>
                {text}
              </span>
            </span>
          );
        } else {
          verseSpan.push(createNonClickableSpan(index, paddingSpanStyle, padding, isHighlightedWord, text));
        }
      } else if (isNestedMilestone(word)) { // if nested milestone
        const nestedMilestone = highlightHelpers.getWordsFromNestedMilestone(word, contextId, index, isGrayVerseRow, previousWord, wordSpacing);
        nestedMilestone.wordSpans.forEach((nestedWordSpan) => verseSpan.push(nestedWordSpan));
        previousWord = nestedMilestone.nestedPreviousWord;
        wordSpacing = nestedMilestone.nestedWordSpacing;
      } else if (word.text) { // if not word, show punctuation, etc. but not clickable
        wordSpacing = punctuationWordSpacing(word); // spacing before words
        if (highlightHelpers.isPunctuationHighlighted(previousWord, nextWord, contextId)) {
          verseSpan.push(createHighlightedSpan(index, word.text));
        } else {
          verseSpan.push(createTextSpan(index, word.text));
        }
      }
    });
  }

  return verseSpan;
};
