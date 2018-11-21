import React from 'react';
import PropTypes from 'prop-types';
// helpers
import * as lexiconHelpers from '../ScripturePane/helpers/lexiconHelpers';
import {MorphUtils} from 'word-aligner';

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
    const morphKeys = MorphUtils.getMorphLocalizationKeys(morph);
    const translatedMorphs = [];
    morphKeys.forEach(key => {
      if (key.startsWith('*')) {
        translatedMorphs.push(key.substr(1));
      } else {
        translatedMorphs.push(translate(key));
      }
    });
    const morphStr = translatedMorphs.join(', ');

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
