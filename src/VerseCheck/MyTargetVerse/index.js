import React from 'react';
import PropTypes from 'prop-types';
import { Col } from 'react-bootstrap';
import { getFontClassName } from '../../common/fontUtils';
import { getReferenceStr } from '../..';

const MyTargetVerse = ({
  chapter,
  verse,
  verseText,
  styles,
  dir,
  targetLanguageFont,
}) => {
  const chapterVerse = getReferenceStr(chapter, verse);
  const fontClass = getFontClassName(targetLanguageFont);

  return (
    <Col md={12} sm={12} xs={12} lg={12} style={styles}>
      <div style={{ direction: dir }}>
        <b>{chapterVerse}</b>
        <span className={fontClass}>{verseText}</span>
      </div>
    </Col>
  );
};

MyTargetVerse.propTypes = {
  chapter: PropTypes.number.isRequired,
  verse: PropTypes.number.isRequired,
  verseText: PropTypes.string.isRequired,
  styles: PropTypes.object.isRequired,
  dir: PropTypes.string.isRequired,
  targetLanguageFont: PropTypes.string,
};

export default MyTargetVerse;
