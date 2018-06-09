import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Col, Row } from 'react-bootstrap';

import './VerseRow.styles.css';

// components
import Verse from '../../../Verse';

class VerseRow extends Component {
  constructor(props) {
    super(props);
    this.handleEdit = this.handleEdit.bind(this);
  }

  handleEdit(bibleId, chapter, verse, verseText) {
    const { onEditTargetVerse } = this.props;
    if(bibleId === 'targetBible' && typeof onEditTargetVerse === 'function') {
      onEditTargetVerse(bibleId, chapter, verse, verseText);
    }
  }

  render () {
    const {
      chapter,
      verse,
      currentVerseNumber,
      currentPaneSettings,
      biblesWithHighlightedWords,
      bibles,
      translate
    } = this.props;
    let verseCells = <div />;
    const isCurrent = currentVerseNumber === verse.toString();

    let colStyle = {
      minWidth: '240px', alignItems: 'stretch', padding: '10px', paddingTop: '20px',
      borderRight: '1px solid var(--border-color)'
    };
    let rowStyle = { display: 'flex', margin: '0', color: 'var(--text-color-dark)', width: '100%' };

    if (currentVerseNumber % 2 === 0) {
      rowStyle.backgroundColor = 'var(--background-color-light)';
    }

    if (currentPaneSettings.length > 0) {
      verseCells = currentPaneSettings.map((paneSetting, index) => {
        const { languageId, bibleId } = paneSetting;
        const { manifest: { direction }, bibleData } = biblesWithHighlightedWords[languageId][bibleId];
        const verseElements = bibleData[chapter][currentVerseNumber];
        const verseText = bibles[languageId][bibleId][chapter][currentVerseNumber]; // string value of the verse.

        return (
          <Col key={index} md={4} sm={4} xs={4} lg={4} style={colStyle}>
            <Verse
              translate={translate}
              verseElements={verseElements}
              verseText={verseText}
              bibleId={bibleId}
              direction={direction}
              chapter={chapter}
              verse={currentVerseNumber}
              onEdit={this.handleEdit} />
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
  onEditTargetVerse: PropTypes.func.isRequired,
  bibles: PropTypes.object.isRequired,
};

export default VerseRow;