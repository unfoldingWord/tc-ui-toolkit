import React from 'react';
import PropTypes from 'prop-types';
// helpers
import * as lexiconHelpers from '../helpers/lexiconHelpers';

class WordDetails extends React.Component {
  render() {
    const {lemma, morph, strong} = this.props.word;
    const { lexiconData } = this.props;
    const entryId = lexiconHelpers.lexiconEntryIdFromStrongs(strong);
    const lexiconId = lexiconHelpers.lexiconIdFromStrongs(strong);
    let lexicon;
    if (lexiconData[lexiconId] && lexiconData[lexiconId][entryId]) {
      lexicon = lexiconData[lexiconId][entryId].long;
    }

    return (
      <div style={{ margin: '-10px 10px -20px', maxWidth: '400px' }}>
        <span><strong>Lemma</strong> {lemma}</span><br/>
        <span><strong>Morphology</strong> {morph}</span><br/>
        <span><strong>Strongs</strong> {strong}</span><br/>
        <span><strong>Lexicon</strong> {lexicon}</span><br/>
      </div>
    );
  }
}

WordDetails.propTypes = {
  word: PropTypes.object.isRequired,
  lexiconData: PropTypes.object.isRequired
};

export default WordDetails;
