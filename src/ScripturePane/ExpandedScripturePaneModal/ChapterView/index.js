import React, { Component } from 'react'
import PropTypes from 'prop-types';

import './ChapterView.styles.css';

// components
import BibleHeadingsRow from './BibleHeadingsRow';
import VerseRow from './VerseRow';

class ChapterView extends Component {
  render () {
    const {
      contextId,
      currentPaneSettings,
      biblesWithHighlightedWords
    } = this.props;
    const { chapter, verse } = contextId.refecerence;
    const verseNumbers = Object.keys(biblesWithHighlightedWords['en']['ult'].bibleData[chapter]);
    let verseRows = <div/>;

    if (verseNumbers.length > 0) {
      
      verseRows = verseNumbers.map(verseNumber => {
        return (
          <VerseRow key={verseNumber}
                    chapter={chapter}
                    verse={verse}
                    currentVerseNumber={verseNumber}
                    currentPaneSettings={currentPaneSettings}
                    biblesWithHighlightedWords={biblesWithHighlightedWords} />
        );
      });
    }


    return (
      <div>
        <div className="bible-heading-container">
            <BibleHeadingsRow />
          <div className="verse-row-container">
            {verseRows}
          </div>
        </div>
      </div>
    )
  }
}

ChapterView.propTypes = {
  contextId: PropTypes.object.isRequired,
  currentPaneSettings: PropTypes.array.isRequired,
  biblesWithHighlightedWords: PropTypes.object.isRequired,
};

export default ChapterView;
