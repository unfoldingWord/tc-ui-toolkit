import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Col, Row } from 'react-bootstrap';

import './VerseRow.styles.css';

// components
import Verse from '../../../Verse';

class VerseRow extends Component {
  render () {
    const {
      chapter,
      verse,
      currentVerseNumber,
      currentPaneSettings,
      biblesWithHighlightedWords,
    } = this.props;
    let verseCells = <div />;
    const isCurrent = currentVerseNumber === verse.toString();

    let colStyle = {
      minWidth: '240px', alignItems: 'stretch', padding: '10px', paddingTop: '20px',
      borderRight: '1px solid var(--border-color)'
    };
    let rowStyle = { display: 'flex', margin: '0', color: 'var(--text-color-dark)' };
    let isGrayVerseRow = false;
    if (currentVerseNumber % 2 === 0) {
      rowStyle.backgroundColor = 'var(--background-color-light)';
      isGrayVerseRow = true;
    }
    if (currentPaneSettings.length > 0) {
      verseCells = currentPaneSettings.map((paneSetting, index) => {
        const { languageId, bibleId } = paneSetting;
        const { manifest: { direction }, bibleData } = biblesWithHighlightedWords[languageId][bibleId];
        const verseElements = bibleData[chapter][currentVerseNumber];

        return (
          <Col key={index} md={4} sm={4} xs={4} lg={4} style={colStyle}>
            <Verse
              verseElements={verseElements}
              bibleId={bibleId}
              direction={direction}
              chapter={chapter}
              verse={currentVerseNumber}
            />
          </Col>
        );
      });
    }

    return (
      <Row style={rowStyle}>
        {verseCells}
      </Row>
    );
  }
}

VerseRow.propTypes = {
  chapter: PropTypes.number.isRequired,
  verse: PropTypes.oneOfType([
    PropTypes.string.isRequired,
    PropTypes.number.isRequired,
  ]),
  currentVerseNumber: PropTypes.oneOfType([
    PropTypes.string.isRequired,
    PropTypes.number.isRequired,
  ]),
  currentPaneSettings: PropTypes.array.isRequired,
  verseElements: PropTypes.oneOfType([
    PropTypes.string.isRequired,
    PropTypes.array.isRequired,
  ]),
  biblesWithHighlightedWords: PropTypes.object.isRequired,
};

export default VerseRow;