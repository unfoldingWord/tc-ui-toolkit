import React from 'react';
import isEqual from 'deep-equal';
import stringTokenizer from 'string-punctuation-tokenizer';
import { VerseObjectUtils } from 'word-aligner';
// helpers
import * as highlightHelpers from './highlightHelpers';
import { onWordClick, createNonClickableSpan, createTextSpan, createHighlightedSpan } from './htmlElementsHelpers';
import { removeMarker } from './usfmHelpers';
import { isWord, isNestedMilestone, punctuationWordSpacing, textIsEmptyInVerseObject } from './stringHelpers';

export const verseString = (verseText, selections, translate) => {
  verseText = removeMarker(verseText);
  verseText = verseText.replace(/\s+/g, ' ');
  // remove \pi marker
  verseText = verseText.replace(/\\pi/g, '');
  // remove \s5 and \p markers from string
  const regString = '\\\\\\w[0-9]*';
  const regex = new RegExp(regString, 'g');
  verseText = verseText.replace(regex, '');
  // if string only contains spaces then make it an empty string
  verseText.replace(/\s/g, '').length == 0 ? verseText = '' : verseText;

  // if empty string then verseText = place holder warning.
  if (verseText.length === 0) verseText = translate('pane.missing_verse_warning');
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

export const verseArray = (verseText = [], bibleId, contextId, getLexiconData, showPopover, translate) => {
  let words = VerseObjectUtils.getWordListForVerse(verseText);
  let wordSpacing = '';
  let previousWord = null;
  const verseSpan = [];

  if (verseText.verseObjects && textIsEmptyInVerseObject(verseText, bibleId)) { // if empty verse string.
    verseSpan.push(
      <span key={translate('pane.missing_verse_warning')}>
        {translate('pane.missing_verse_warning')}
      </span>
    );
  } else {
    words = Array.isArray(words) ? words : words.verseObject;
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
          verseSpan.push(
            <span
              key={index.toString()}
              onClick={(e) => onWordClick(e, word, getLexiconData, showPopover, translate)}
              style={{ cursor: 'pointer' }}
            >
              <span style={paddingSpanStyle}>
                {padding}
              </span>
              <span style={{ backgroundColor: isHighlightedWord ? "var(--highlight-color)" : "" }}>
                {removeMarker(text)}
              </span>
            </span>
          );
        } else {
          verseSpan.push(createNonClickableSpan(index, paddingSpanStyle, padding, isHighlightedWord, text));
        }
      } else if (isNestedMilestone(word)) { // if nested milestone
        const nestedMilestone = highlightHelpers.getWordsFromNestedMilestone(word, contextId, index, previousWord, wordSpacing);
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
