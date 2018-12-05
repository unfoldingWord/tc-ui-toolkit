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

/**
 * creates span with formatted html
 * @param html
 * @return {*}
 */
function getFormatted(html) {
  const props = {
    dangerouslySetInnerHTML: { __html: html },
  };
  return <span {...props}></span>;
}

/**
 * creates a data line with label, text and optionally text can be formatted html
 * @param {string} label
 * @param {string} text
 * @param {boolean} isFormatted - if true then text contains html formatting
 * @return {*}
 */
function getDataSegment(label, text, isFormatted = false) {
  return (isFormatted ?
      <span><strong>{label}</strong> {(text && getFormatted(text)) || ""} </span>
      :
      <span><strong>{label}</strong> {text}</span>
  );
}

/**
 * draws line between word parts
 * @param {Number} pos - order of part on screen (0 is top)
 * @return {*}
 */
function getLine(pos) {
  return (pos > 0) ?
    <hr style={{height: '6px', 'borderBottom': '1px solid gray', 'marginBottom': '5px'}}/>
    : "";
}

/**
 * creates an html word
 * @param {boolean} multipart - if true then this is a multipart word
 * @param {string} word
 * @return {*}
 */
function getWordEntry(multipart, word) {
  return multipart ?
    <div style={{margin: '0', padding: '0'}}>
      <strong style={{fontSize: '1.2em'}}>{word}</strong>
      <br/>
    </div>
    : "";
}

/**
 * creates an entry for a word part
 * @param {function} translate
 * @param {string} lemma
 * @param {string} morphStr
 * @param {string} strong
 * @param {Number} strongNum
 * @param {string} lexicon
 * @param {string} word
 * @param {Number} itemNum - number of part in word
 * @param {Number} pos - order of part on screen (0 is top)
 * @param {Number} count - total number of parts to show
 * @return {*}
 */
function getWordPart(translate, lemma, morphStr, strong, strongNum, lexicon, word, itemNum, pos, count) {
  morphStr = morphStr || translate('morph_missing');
  const multipart = count > 1;
  const key = 'lexicon_details_' + pos;
  if (strong) {
    return <div key={key} style={{margin: '-10px 10px -20px', maxWidth: '400px'}}>
      {getLine(pos)}
      {getWordEntry(multipart, word)}
      {getDataSegment(translate('lemma'), lemma)}<br/>
      {getDataSegment(translate('morphology'), morphStr)}<br/>
      {getDataSegment(translate('strongs'), strongNum)}<br/>
      {getDataSegment(translate('lexicon'), lexicon, true)}<br/>
    </div>;
  } else { // not main word
    return <div key={key} style={{margin: '-10px 10px -20px', maxWidth: '400px'}}>
      {getLine(pos)}
      {getWordEntry(multipart, word)}
      {getDataSegment(translate('morphology'), morphStr)}<br/>
    </div>;
  }
}

/**
 * find the major part of the word and move to top
 * @param {Number} partCount - actual part count
 * @param {Array} wordParts - word split into parts
 * @return {number[]}
 */
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

/**
 * get the strongs and lexicon for position
 * checks for formats such as `c:d:H0776` or 'H123:H7225' and extracts the actual strongs number(s)
 * @param {String} strong - parse the strongs numbers for part
 * @param {Object} lexiconData
 * @param {number} pos - position of part to get strongs and lexicon
 * @return {strongNumber, lexicon}
 */
function getStrongsAndLexicon(strong, lexiconData, pos) {
  let lexicon = "";
  let strongNumber = 0;
  const strongsParts = lexiconHelpers.getStrongsParts(strong);
  if (strongsParts.length > pos) {
    strong = strongsParts[pos];
  } else {
    strong = "";
  }
  const lexiconId = lexiconHelpers.lexiconIdFromStrongs(strong);
  strongNumber = lexiconHelpers.lexiconEntryIdFromStrongs(strong);
  if (lexiconData && lexiconData[lexiconId] && lexiconData[lexiconId][strongNumber]) {
    lexicon = lexiconData[lexiconId][strongNumber].long;
  }
  return {strongNumber, lexicon, strong};
}

class WordLexiconDetails extends React.Component {

  render() {
    const { wordObject: { lemma, morph, strong, text }, translate, lexiconData } = this.props;
    const wordParts = lexiconHelpers.getWordParts(text);
    const morphStrs = getWordParts(morph, translate);
    const strongsParts = lexiconHelpers.getStrongsParts(strong);
    const partCount = Math.max(morphStrs.length, strongsParts.length, wordParts.length); // since there may be inconsistancies, use largest count
    if (partCount < 2) {
      const {strongNumber, lexicon, strong: strongs} = getStrongsAndLexicon(strong, lexiconData, 0);
      return (
        getWordPart(translate, lemma, morphStrs[0], strongNumber, strongs, lexicon, wordParts[0], 0, 0, partCount)
      );
    }
    const indices = movePrimaryWordToTop(partCount, wordParts);
    return indices.map((pos, index) => {
      const morphStr = ((morphStrs.length > pos) && morphStrs[pos]) || "";
      const word = ((wordParts.length > pos) && wordParts[pos]) || "";
      const {strongNumber, lexicon, strong: strongs} = getStrongsAndLexicon(strong, lexiconData, pos);
      return (
        getWordPart(translate, lemma, morphStr, strongNumber, strongs, lexicon, word, pos, index, partCount)
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
