import React from 'react';
// Components
import WordLexiconDetails from '../../WordLexiconDetails';
// helpers
import * as lexiconHelpers from './lexiconHelpers';
import { removeMarker } from './usfmHelpers';

const ZERO_WIDTH_SPACE = '\u200B';

export const onWordClick = (e, word, getLexiconData, showPopover, translate) => {
  if (word && word.strong) {
    const {strong} = word;
    const {strong: strongs_} = lexiconHelpers.findStrongs(strong);
    const entryId = lexiconHelpers.lexiconEntryIdFromStrongs(strongs_);
    const lexiconId = lexiconHelpers.lexiconIdFromStrongs(strongs_);
    const lexiconData = getLexiconData(lexiconId, entryId);
    const positionCoord = e.target;
    const wordParts = word.text.split(ZERO_WIDTH_SPACE);
    for (let i = 0; i < word.text.length; i++) {
      console.log("char " + i + " = " + word.text.charCodeAt(i));
    }
    const wordText = wordParts.join('\u00A0\u00A0-\u00A0\u00A0');
    const PopoverTitle = (
      <strong style={{fontSize: '1.2em'}}>{wordText}</strong>
    );
    const wordDetails = (
      <WordLexiconDetails lexiconData={lexiconData} wordObject={word}
                          translate={translate} wordParts={wordParts} />
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
