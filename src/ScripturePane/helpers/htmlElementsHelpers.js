import React from 'react';
// Components
import WordLexiconDetails from '../../WordLexiconDetails';
// helpers
import * as lexiconHelpers from './lexiconHelpers';
import { removeMarker } from './usfmHelpers';
import {getStrongsParts} from "./lexiconHelpers";
import {lexiconEntryIdFromStrongs} from "./lexiconHelpers";

/**
 * looks up the strongs numbers for each part of a multipart strongs
 * @param {String} strong
 * @param {Function} getLexiconData
 * @return {*}
 */
export const lookupStrongsNumbers = (strong, getLexiconData) => {
  let lexiconData = null;
  const parts = getStrongsParts(strong);
  for (let i = 0, len = parts.length; i < len; i++) {
    const part = parts[i];
    const entryId = lexiconEntryIdFromStrongs(part);
    if (entryId) {
      const lexiconId = lexiconHelpers.lexiconIdFromStrongs(part);
      const lexiconData_ = getLexiconData(lexiconId, entryId);
      if (lexiconData_) {
        if (lexiconData) { // if already exists combine data
          lexiconData[lexiconId][entryId] = lexiconData_[lexiconId][entryId];
        } else { // copy data
          lexiconData = lexiconData_;
        }
      }
    }
  }
  return lexiconData;
};

export const onWordClick = (e, word, getLexiconData, showPopover, translate) => {
  if (word && word.strong) {
    let lexiconData = lookupStrongsNumbers(word.strong, getLexiconData);
    const positionCoord = e.target;
    const PopoverTitle = (
      <strong style={{fontSize: '1.2em'}}>{word.text}</strong>
    );
    const wordDetails = (
      <WordLexiconDetails lexiconData={lexiconData} wordObject={word} translate={translate} />
    );
    showPopover(PopoverTitle, wordDetails, positionCoord);
  }
};

export const createNonClickableSpan = (index, paddingSpanStyle, padding, isHighlightedWord, text) => {
  return (
    <span key={index.toString()}>
      <span style={paddingSpanStyle}>
        {padding}
      </span>
      <span style={{ backgroundColor: isHighlightedWord ? "var(--highlight-color)" : "" }}>
        {removeMarker(text)}
      </span>
    </span>
  );
};

export const createTextSpan = (index, text) => {
  return (
    <span key={index}>
      {removeMarker(text)}
    </span>
  );
};

export const createHighlightedSpan = (index, text) => {
  return (
    <span key={index} style={{ backgroundColor: 'var(--highlight-color)' }}>
      {removeMarker(text)}
    </span>
  );
};
