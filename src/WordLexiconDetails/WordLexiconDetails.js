import React from 'react';
import PropTypes from 'prop-types';
// helpers
import * as lexiconHelpers from '../ScripturePane/helpers/lexiconHelpers';

/**
 * lookup translations and convert to morph description
 * @param {string} morph - morph code to convert
 * @param {Function} translate
 * @return {Array} morph description for each part
 */
function getWordParts(morph, translate) {
  const morphKeysForParts = lexiconHelpers.getMorphKeys(morph);
  const morphStrs = [];
  morphKeysForParts.forEach(morphKeys => {
    const translatedMorphs = [];
    morphKeys.forEach(key => {
      if (key.startsWith('*')) {
        translatedMorphs.push(key.substr(1));
      } else {
        translatedMorphs.push(translate(key));
      }
    });
    morphStrs.push(translatedMorphs.join(', '));
  });
  return morphStrs;
}

function getFormatted(html) {
  const props = {
    dangerouslySetInnerHTML: { __html: html },
  };
  return <span {...props}></span>;
}

function getDataSegment(label, text, isFormatted = false) {
  return (isFormatted ?
      <span><strong>{label}</strong> {(text && getFormatted(text)) || ""} </span>
      :
      <span><strong>{label}</strong> {text}</span>
  );
}

function getLine(pos) {
  return (pos > 0) ?
    <hr style={{height: '6px', 'border-bottom': '1px solid gray', 'margin-bottom': '5px'}}/>
    : "";
}

function getWordEntry(multipart, word) {
  return multipart ?
    <div style={{margin: '0', padding: '0'}}>
      <strong style={{fontSize: '1.2em'}}>{word}</strong>
      <br/>
    </div>
    : "";
}

function getWordPart(translate, lemma, morphStr, strong, lexicon, word, itemNum, pos, count) {
  const strongsParts = lexiconHelpers.getStrongsParts(strong);
  let strong_ = ((strongsParts.length > itemNum) && strongsParts[itemNum]);
  if (!strong_) {
    strong_ = ((strongsParts.length === 1) && (pos === 0)) ? strongsParts[0] : ""; // if strongs was not split into parts, use first
  }
  const showStrongs = strong_ && (['H','G'].includes(strong_[0])); // make sure actual strongs number
  const multipart = count > 1;
  if (showStrongs) {
    return <div style={{margin: '-10px 10px -20px', maxWidth: '400px'}}>
      {getLine(pos)}
      {getWordEntry(multipart, word)}
      {getDataSegment(translate('lemma'), lemma)}<br/>
      {getDataSegment(translate('morphology'), morphStr)}<br/>
      {getDataSegment(translate('strongs'), strong_)}<br/>
      {getDataSegment(translate('lexicon'), lexicon, true)}<br/>
    </div>;
  } else { // not main word
    return <div style={{margin: '-10px 10px -20px', maxWidth: '400px'}}>
      {getLine(pos)}
      {getWordEntry(multipart, word)}
      {getDataSegment(translate('morphology'), morphStr)}<br/>
    </div>;
  }
}

function movePrimaryWordToTop(partCount, wordParts) {
  let majorHighest = 0;
  let majorPos = 0;
  let indices = Array.from({length: partCount}).map((u, i) => i);
  indices.forEach(i => {
    // sort by part length, longest first
    const partLen = ((wordParts && (wordParts.length > i) && wordParts[i]) || "").length;
    if (partLen > majorHighest) {
      majorHighest = partLen;
      majorPos = i;
    }
  });
  if (majorPos > 0) { // move
    indices.splice(majorPos, 1);
    indices.unshift(majorPos);
  }
  return indices;
}

class WordLexiconDetails extends React.Component {

  render() {
    const { wordObject: { lemma, morph, strong, text }, translate, lexiconData } = this.props;
    let lexicon;
    const wordParts = lexiconHelpers.getWordParts(text);
    if (strong) {
      const {strong: strong_} = lexiconHelpers.findStrongs(strong);
      const entryId = lexiconHelpers.lexiconEntryIdFromStrongs(strong_);
      const lexiconId = lexiconHelpers.lexiconIdFromStrongs(strong_);
      if (lexiconData[lexiconId] && lexiconData[lexiconId][entryId]) {
        lexicon = lexiconData[lexiconId][entryId].long;
      }
    }
    const morphStrs = getWordParts(morph, translate);
    const strongsParts = lexiconHelpers.getStrongsParts(strong);
    const partCount = Math.max(morphStrs.length, strongsParts.length, wordParts.length); // since there may be inconsistancies, use largest count
    if (partCount < 2) {
      return (
        getWordPart(translate, lemma, morphStrs[0], strong, lexicon, wordParts[0], 0, 0, partCount)
      );
    }
    const indices = movePrimaryWordToTop(partCount, wordParts);
    return indices.map((pos, index) => {
      const morphStr = ((morphStrs.length > pos) && morphStrs[pos]) || translate('morph_missing');
      const word = ((wordParts.length > pos) && wordParts[pos]) || "";
      return (
        getWordPart(translate, lemma, morphStr, strong, lexicon, word, pos, index, partCount)
      );
    });
  }
}

WordLexiconDetails.propTypes = {
  translate: PropTypes.func.isRequired,
  wordObject: PropTypes.shape({
    lemma: PropTypes.string.isRequired,
    morph: PropTypes.string.isRequired,
    strong: PropTypes.string.isRequired
  }).isRequired,
  lexiconData: PropTypes.object.isRequired
};

export default WordLexiconDetails;
