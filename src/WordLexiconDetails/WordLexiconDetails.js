import React from 'react';
import PropTypes from 'prop-types';
// helpers
import * as lexiconHelpers from '../ScripturePane/helpers/lexiconHelpers';
import {MorphUtils} from 'word-aligner';

/**
 * splits compound word into parts
 * @param morph
 * @return {*}
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

class WordLexiconDetails extends React.Component {
  render() {
    const { wordObject: { lemma, morph, strong }, translate, lexiconData } = this.props;
    let lexicon;

    if (strong) {
      const strong_ = lexiconHelpers.findStrongs(strong);
      const entryId = lexiconHelpers.lexiconEntryIdFromStrongs(strong_);
      const lexiconId = lexiconHelpers.lexiconIdFromStrongs(strong_);
      if (lexiconData[lexiconId] && lexiconData[lexiconId][entryId]) {
        lexicon = lexiconData[lexiconId][entryId].long;
      }
    }
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
    const morphStr = morphStrs.join(': ');

    return (
      <div style={{ margin: '-10px 10px -20px', maxWidth: '400px' }}>
        <span><strong>{translate('lemma')}</strong> {lemma}</span><br/>
        <span><strong>{translate('morphology')}</strong> {morphStr}</span><br/>
        <span><strong>{translate('strongs')}</strong> {strong}</span><br/>
        <span><strong>{translate('lexicon')}</strong> {lexicon}</span><br/>
      </div>
    );
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
