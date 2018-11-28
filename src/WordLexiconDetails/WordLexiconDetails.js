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

function getSegment(label, text, isFormatted = false) {
  return (isFormatted ?
      <span><strong>{label}</strong> {getFormatted(text)} </span>
      :
      <span><strong>{label}</strong> {text}</span>
  );
}

function getLine(pos) {
  return (pos > 0) ?
    <hr style={{height: '6px', 'border-bottom': '1px solid gray', 'margin-bottom': '5px'}}/>
    : "";
}

function getWordLine(multipart, word) {
  return multipart ?
    <div style={{margin: '0', padding: '0'}}>
      <strong style={{fontSize: '1.2em'}}>{word}</strong>
      <br/>
    </div>
    : "";
}

function getWordPart(translate, lemma, morphStr, strong, lexicon, word, pos, mainPos) {
  const isMainPos = (pos === mainPos);
  const strongsParts = lexiconHelpers.getStrongsParts(strong);
  let strong_ = ((strongsParts.length > pos) && strongsParts[pos]);
  if (!strong_) {
    strong_ = (strongsParts.length === 1) ? strongsParts[0] : ""; // if strongs was not split into parts, use first
  }
  const multipart = strongsParts.length > 1;
  if (isMainPos) {
    return <div style={{margin: '-10px 10px -20px', maxWidth: '400px'}}>
      {getLine(pos)}
      {getWordLine(multipart, word)}
      {getSegment(translate('lemma'), lemma)}<br/>
      {getSegment(translate('morphology'), morphStr)}<br/>
      {getSegment(translate('strongs'), strong_)}<br/>
      {getSegment(translate('lexicon'), lexicon, true)}<br/>
    </div>;
  } else { // not main word
    return <div style={{margin: '-10px 10px -20px', maxWidth: '400px'}}>
      {getLine(pos)}
      {getWordLine(multipart, word)}
      {getSegment(translate('morphology'), morphStr)}<br/>
    </div>;
  }
}

class WordLexiconDetails extends React.Component {

  render() {
    const { wordObject: { lemma, morph, strong }, translate, lexiconData, wordParts } = this.props;
    let lexicon;
    let mainPos = -1;
    const wordParts_ = wordParts || [];

    if (strong) {
      const {strong: strong_, pos} = lexiconHelpers.findStrongs(strong);
      const entryId = lexiconHelpers.lexiconEntryIdFromStrongs(strong_);
      const lexiconId = lexiconHelpers.lexiconIdFromStrongs(strong_);
      if (lexiconData[lexiconId] && lexiconData[lexiconId][entryId]) {
        lexicon = lexiconData[lexiconId][entryId].long;
      }
      mainPos = pos;
    }
    const morphStrs = getWordParts(morph, translate);
    if (morphStrs.length < 2) {
      return (
        getWordPart(translate, lemma, morphStrs[0], strong, lexicon, wordParts[0], 0, 0)
      );
    }

    return morphStrs.map((morphStr, pos) => {
      const word = ((wordParts_.length > pos) && wordParts_[pos]) || "";
      return (
        getWordPart(translate, lemma, morphStr, strong, lexicon, word, pos, mainPos)
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
  lexiconData: PropTypes.object.isRequired,
  wordParts: PropTypes.array.optional
};

export default WordLexiconDetails;
