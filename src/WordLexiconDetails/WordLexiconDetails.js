import React from 'react';
import PropTypes from 'prop-types';
import DOMPurify from 'dompurify';
// helpers
import * as lexiconHelpers from '../ScripturePane/helpers/lexiconHelpers';
import {MorphUtils} from 'word-aligner';

/**
 * splits compound word into parts
 * @param {string} morph - morph code to convert
 * @return {Array} locale code for each key
 */
function getMorphKeys(morph) {
  const morphKeys = MorphUtils.getMorphLocalizationKeys(morph);
  const morphKeysForParts = [];
  let lastPos = 0;
  let pos = 0;
  let part;
  const divider = '*:';
  if ((pos = morphKeys.indexOf(divider)) >= 0) {
    while (pos >= 0) {
      part = morphKeys.slice(lastPos, pos);
      morphKeysForParts.push(part);
      lastPos = pos + 1;
      pos = morphKeys.indexOf(divider, lastPos);
    }
    part = morphKeys.slice(lastPos);
    if (part.length) {
      morphKeysForParts.push(part);
    }
  } else {
    morphKeysForParts.push(morphKeys);
  }
  return morphKeysForParts;
}

/**
 * lookup translations and convert to morph description
 * @param {string} morph - morph code to convert
 * @param {Function} translate
 * @return {Array} morph description for each part
 */
function getWordParts(morph, translate) {
  const morphKeysForParts = getMorphKeys(morph);
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
    dangerouslySetInnerHTML: { __html: DOMPurify.sanitize(html) },
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

function getWordPart(translate, lemma, morphStr, strong, lexicon, word, pos, mainPos) {
  const isMainPos = (pos === mainPos);
  if (isMainPos) {
    return <div style={{margin: '-10px 10px -20px', maxWidth: '400px'}}>
      {(pos > 0) ? <hr/> : ""}
      {getSegment(translate('lemma'), lemma)}<br/>
      {getSegment(translate('morphology'), morphStr)}<br/>
      {getSegment(translate('strongs'), strong)}<br/>
      {getSegment(translate('lexicon'), lexicon)}<br/>
    </div>;
  } else {
    return <div style={{margin: '-10px 10px -20px', maxWidth: '400px'}}>
      {(pos > 0) ? <hr/> : ""}
      {getSegment(translate('morphology'), morphStr)}<br/>
      {getSegment(translate('strongs'), strong)}<br/>
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
        getWordPart(translate, lemma, morphStrs[0], strong, lexicon, 0, 0)
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
