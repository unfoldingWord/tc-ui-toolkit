'use strict';
import React from 'react';
import isEqual from 'lodash/isEqual';
import {isWord, punctuationWordSpacing} from './stringHelpers';
import {removeMarker} from './usfmHelpers';

export function isWordArrayMatch(word, contextId) {
  let isMatch = false;
  if (word && word.content && Array.isArray(word.content) && contextId && contextId.quote) {
    isMatch = word.content.some(wordItem => {
      let foundMatch = false;
      if (Array.isArray(contextId.quote)) {
        for (let i = 0, l = contextId.quote.length; i < l; i++) {
          const quote = contextId.quote[i];
          if ((quote.word === word.occurrence) && (quote.occurrence === wordItem.occurrence)) {
            foundMatch = true;
            break;
          }
        }
      } else if (contextId.quote.split(' ').includes(wordItem.content)) {
        foundMatch = (contextId.occurrence === wordItem.occurrence);
      }
      return foundMatch;
    });
  }
  return isMatch;
}

/**
 * search word list to find occurrence of word
 * @param {number} index - position of word
 * @param {Array} words - list of word objects to search
 * @param {String} wordText - text to match
 * @param {number} occurrence - to match
 * @return {Boolean} - true if same occurrence
 */
function getOccurrenceOfWord(index, words, wordText, occurrence) {
// get occurrence of word
  let _occurrence = 0;
  for (let i = 0; i <= index; i++) {
    const wordItem = words[i];
    if ((wordItem.type === "word") && (wordItem.text === wordText)) {
      _occurrence++;
    }
  }
  const isMatch = (_occurrence === occurrence);
  return isMatch;
}

/**
 * see if this word is part of quote for current context
 * @param {Object} word
 * @param {Object} contextId
 * @param {Array} words
 * @param {number} index
 * @return {boolean} - true if in quote
 */
export function isWordMatch(word, contextId, words, index) {
  let isMatch = false;
  if (word && word.text && contextId && contextId.quote) {
    if (Array.isArray(contextId.quote)) {
      // if list of words in quote see if this word matches one of the words
      for (let i = 0, l = contextId.quote.length; i < l; i++) {
        const quote = contextId.quote[i];
        if (quote.word === word.text) {
          isMatch = getOccurrenceOfWord(index, words, word.text, quote.occurrence);
          if (isMatch) {
            break;
          }
        }
      }
    } else { // is string with one or more words
      const quotes = contextId.quote.split(' ');
      for (let i = 0, l = quotes.length; i < l; i++) {
        const quote = quotes[i];
        if (quote === word.text) {
          isMatch = getOccurrenceOfWord(index, words, quote, contextId.occurrence);
        }
      }
    }
  }
  return isMatch;
}

export function getWordHighlightedDetails(contextId, previousWord, word) {
  const isHighlightedWord = isWordArrayMatch(word, contextId);
  const isBetweenHighlightedWord = isHighlightedWord && previousWord && !isEqual(previousWord, word)
      && isWordArrayMatch(previousWord, contextId);
  return {
    isHighlightedWord,
    isBetweenHighlightedWord
  };
}

export function getWordsFromNestedMilestone(nestedWords, contextId, index, previousWord, wordSpacing) {
  // if its an array of an array thus get deep nested words array.
  if (Array.isArray(nestedWords[0])) nestedWords = getDeepNestedWords(nestedWords);

  let isHighlightedWord = false;
  let isBetweenHighlightedWord = false;
  let nestedPreviousWord = previousWord;
  let nestedWordSpacing = wordSpacing;
  const wordSpans =[];

  for (let i = 0, len = nestedWords.length; i < len; i++) {
    const nestedWord = nestedWords[i];
    const nestedWordIndex = i;
    const wordsArray = nestedWords;

    const nestedWordSpanIndex = `${index.toString()}_${nestedWordIndex.toString()}_${nestedWord.text}`;
    const nestedNextWord = wordsArray[index + 1];
    if (isWord(nestedWord)) {
      let padding = nestedWordSpacing;
      nestedWordSpacing = ' '; // spacing between words
      if (nestedPreviousWord && isPuntuationAndNeedsNoSpace(nestedPreviousWord)) padding = '';
      const highlightedDetails = getWordHighlightedDetails(
        contextId,
        nestedPreviousWord,
        nestedWord
      );
      isHighlightedWord = highlightedDetails.isHighlightedWord;
      isBetweenHighlightedWord = highlightedDetails.isBetweenHighlightedWord;
      nestedPreviousWord = nestedWord;
      const paddingSpanStyle = {
        backgroundColor: isBetweenHighlightedWord ? "var(--highlight-color)" : "transparent"
      };
      wordSpans.push(
        <span key={nestedWordSpanIndex.toString()}>
          <span style={paddingSpanStyle}>
            {padding}
          </span>
          <span style={{ backgroundColor: isHighlightedWord ? "var(--highlight-color)" : "" }}>
            {removeMarker(nestedWord.text)}
          </span>
        </span>
      );
    } else if (nestedWord.text) {
      nestedWordSpacing = punctuationWordSpacing(nestedWord); // spacing before words
      const text = removeMarker(nestedWord.text);
      if (isPunctuationHighlighted(nestedPreviousWord, nestedNextWord, contextId)) {
        wordSpans.push(
          <span key={nestedWordSpanIndex} style={{ backgroundColor: 'var(--highlight-color)' }}>
            {text}
          </span>
        );
      } else {
        wordSpans.push(
          <span key={nestedWordSpanIndex}>
            {text}
          </span>
        );
      }
    }
  }

  return {
    wordSpans,
    nestedPreviousWord,
    nestedWordSpacing
  };
}

/**
 * Determines if the previous word is a punctuation that
 * doesnt need spacing after it.
 * @param {Object} wordObject
 */
function isPuntuationAndNeedsNoSpace(wordObject) {
  return !isWord(wordObject) && (wordObject.text === '"') || (wordObject.text === "'");
}

/**
 * Gets a words object array from a deep nested milestone.
 * @param {array} nestedWords
 */
export function getDeepNestedWords(nestedWords) {
  let deepNestedWords = null;

  for (let i = 0, len = nestedWords.length; i < len; i++) {
    const nestedWord = nestedWords[i];

    if (nestedWord.text) {
      deepNestedWords = nestedWords;
    } else {
      deepNestedWords = getDeepNestedWords(nestedWord);
    }
  }

  return deepNestedWords;
}

/**
 * Determines if a punctuation should be highlighted or not.
 * @param {object} previousWord
 * @param {object} nextWord
 * @param {object} contextId
 * @returns {bool} true or false. highlighted or not highlighted.
 */
export function isPunctuationHighlighted(previousWord, nextWord, contextId) {
  // handle nested previous words
  if (previousWord && Array.isArray(previousWord[0])) {
    const nestedPreviousWord = getDeepNestedWords(previousWord);
    // get the last item in the array
    previousWord = nestedPreviousWord[nestedPreviousWord.length - 1];
  }
  // handle nested next words
  if (nextWord) {
    if (Array.isArray(nextWord) || Array.isArray(nextWord[0])) {
      let nestedNextWords = getDeepNestedWords(nextWord);
      nextWord = nestedNextWords[0];
    }
  }

  if (previousWord && nextWord) {
    return isWordArrayMatch(previousWord, contextId) && isWordArrayMatch(nextWord, contextId);
  } else if (previousWord) {
    return isWordArrayMatch(previousWord, contextId);
  } else if (nextWord) {
    return isWordArrayMatch(nextWord, contextId);
  } else {
    return false;
  }
}

let spaceCounter = 0;
/**
 * pushes a span to the array
 * @param {Array} verseSpan
 */
export function addSpace(verseSpan) {
  verseSpan.push(
    <span key={'space_' +(++spaceCounter)} style={{ backgroundColor: "transparent"}}>
      {' '}
    </span>
  );
}
