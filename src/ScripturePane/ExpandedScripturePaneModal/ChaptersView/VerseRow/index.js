import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Col, Row} from 'react-bootstrap';
import shortid from 'shortid';
import './VerseRow.styles.css';
// components
import Verse from '../../../Verse';
// helpers
import {isEqual} from 'lodash';

class VerseRow extends Component {
  constructor(props) {
    super(props);
    this.handleEdit = this.handleEdit.bind(this);
  }

  shouldComponentUpdate(nextProps) {
    if (!isEqual(nextProps.selections, this.props.selections)) {
      return true;
    }
    if (!isEqual(nextProps.bibles, this.props.bibles)) {
      return true;
    } else return false;
  }

  handleEdit(bibleId, chapter, verse, verseText) {
    const {onEditTargetVerse} = this.props;
    if (bibleId === 'targetBible' && typeof onEditTargetVerse === 'function') {
      onEditTargetVerse(bibleId, chapter, verse, verseText);
    }
  }

  render() {
    const {
      chapter,
      currentVerseNumber,
      currentPaneSettings,
      bibles,
      translate,
      contextId,
      selections,
      getLexiconData,
      showPopover,
    } = this.props;
    let verseCells = [];

    const colStyle = {
      minWidth: '240px',
      alignItems: 'stretch',
      padding: '10px',
      paddingTop: '20px',
      borderRight: '1px solid var(--border-color)'
    };

    let rowStyle = {
      display: 'flex',
      margin: '0',
      color: 'var(--text-color-dark)',
      width: '100%'
    };

    if (currentVerseNumber % 2 === 0) {
      rowStyle.backgroundColor = 'var(--background-color-light)';
    }

    if (currentPaneSettings.length > 0) {
      for (let i = 0, len = currentPaneSettings.length; i < len; i++) {
        const paneSetting = currentPaneSettings[i];
        try {
          const {languageId, bibleId} = paneSetting;
          const {manifest: {direction}} = bibles[languageId][bibleId];
          const verseData = bibles[languageId][bibleId][chapter][currentVerseNumber];
          verseCells.push(
            <Col key={shortid.generate()} md={4} sm={4} xs={4} lg={4} style={colStyle}>
              <Verse
                selections={selections}
                contextId={contextId}
                getLexiconData={getLexiconData}
                showPopover={showPopover}
                translate={translate}
                verseData={verseData}
                bibleId={bibleId}
                direction={direction}
                chapter={chapter}
                verse={currentVerseNumber}
                onEdit={this.handleEdit} />
            </Col>
          );
        } catch (error) {
          console.error(error);
        }
      }
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
  onEditTargetVerse: PropTypes.func.isRequired,
  bibles: PropTypes.object.isRequired,
  translate: PropTypes.func.isRequired,
  contextId: PropTypes.object.isRequired,
  selections: PropTypes.array.isRequired,
  getLexiconData: PropTypes.func.isRequired,
  showPopover: PropTypes.func.isRequired,
};

export default VerseRow;
