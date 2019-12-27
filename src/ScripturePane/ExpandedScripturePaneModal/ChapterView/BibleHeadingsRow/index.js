import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Col, Row } from 'react-bootstrap';

import './BibleHeadingsRow.styles.css';

const rowStyle = {
  display: 'flex',
  height: '80px',
  margin: '0',
  backgroundColor: 'var(--reverse-color)',
};

class BibleHeadingsRow extends Component {
  render() {
    const {
      currentPaneSettings,
      projectDetailsReducer,
      bibles,
    } = this.props;
    const bibleHeadings = [];

    for (let i = 0, len = currentPaneSettings.length; i < len; i++) {
      const paneSetting = currentPaneSettings[i];
      const index = i;
      const languageId = paneSetting.languageId;
      const bibleId = paneSetting.bibleId;
      const {
        language_name,
        direction,
      } = bibles[languageId][bibleId]['manifest'];

      const resourceText = bibleId !== 'targetBible' ? ' (' + bibleId.toUpperCase() + ')' : '' ;
      const headingText = language_name + resourceText;
      let dir = direction;

      if (!dir) {
        dir = projectDetailsReducer.manifest.target_language.direction;
      }

      const colStyle = {
        minWidth: '240px', alignItems: 'stretch', padding: '10px', fontSize: '16px', fontWeight: 'bold',
        color: 'var(--text-color-dark)', borderRight: '1px solid var(--border-color)',
        borderBottom: '3px solid var(--border-color)', direction: dir,
      };

      bibleHeadings.push(
        <Col key={index} md={4} sm={4} xs={4} lg={4} style={colStyle} >
          <span>{headingText}</span>
        </Col>
      );
    }

    return (
      <Row style={rowStyle}>
        {bibleHeadings}
      </Row>
    );
  }
}

BibleHeadingsRow.propTypes = {
  currentPaneSettings: PropTypes.array.isRequired,
  projectDetailsReducer: PropTypes.object.isRequired,
  bibles: PropTypes.object.isRequired,
};

export default BibleHeadingsRow;
