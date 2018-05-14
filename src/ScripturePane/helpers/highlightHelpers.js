import React from 'react';
import isEqual from 'lodash/isEqual';
import { isWord, punctuationWordSpacing } from './stringHelpers';

export function isWordArrayMatch(word, contextId) {
  let isMatch = false;
  if (word && word.content && contextId && contextId.quote) {
    isMatch = word.content.some(wordItem => {
      let foundMatch = false;
      if (contextId.quote.split(' ').includes(wordItem.content)) {
        foundMatch = (contextId.occurrence === wordItem.occurrence);
      }
      return foundMatch;
    });
  }
  return isMatch;
}

export function isWordMatch(word, contextId, words, index) {
  let isMatch = false;
  if (word && word.text && contextId && contextId.quote) {
    if (contextId.quote.split(' ').includes(word.text)) {
      // get occurrence of word
      let occurrence = 0;
      for (let i = 0; i <= index; i++) {
        const wordItem = words[i];
        if (wordItem.text === word.text) {
          occurrence++;
        }
      }
      isMatch = (occurrence === contextId.occurrence);
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

export function getWordsFromNestedMilestone(nestedWords, contextId, index, isGrayVerseRow, previousWord, wordSpacing) {
  // if its an array of an array thus get deep nested words array.
  if (Array.isArray(nestedWords[0])) nestedWords = getDeepNestedWords(nestedWords);

  let isHighlightedWord = false;
  let isBetweenHighlightedWord = false;
  let nestedPreviousWord = previousWord;
  let nestedWordSpacing = wordSpacing;

  const wordSpans = nestedWords.map((nestedWord, nestedWordIndex, wordsArray) => {
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
        backgroundColor: isBetweenHighlightedWord ? "var(--highlight-color)" :
          isGrayVerseRow ? 'var(--background-color-light)' : '#FFFFFF'
      };
      return (
        <span key={nestedWordSpanIndex.toString()}>
          <span style={paddingSpanStyle}>
            {padding}
          </span>
          <span style={{ backgroundColor: isHighlightedWord ? "var(--highlight-color)" : "" }}>
            {nestedWord.text}
          </span>
        </span>
      );
    } else if (nestedWord.text) {
      nestedWordSpacing = punctuationWordSpacing(nestedWord); // spacing before words

      if (isPunctuationHighlighted(nestedPreviousWord, nestedNextWord, contextId)) {
        return (
          <span key={nestedWordSpanIndex} style={{ backgroundColor: 'var(--highlight-color)' }}>
            {nestedWord.text}
          </span>
        );
      } else {
        return (
          <span key={nestedWordSpanIndex}>
            {nestedWord.text}
          </span>
        );
      }
    }
  });

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
  nestedWords.forEach(nestedWord => {
    if (nestedWord.text) {
      deepNestedWords = nestedWords;
    } else {
      deepNestedWords = getDeepNestedWords(nestedWord);
    }
  });
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
