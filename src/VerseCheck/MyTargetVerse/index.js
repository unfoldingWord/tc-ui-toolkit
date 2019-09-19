import React from 'react';
import PropTypes from 'prop-types';
import { Col } from 'react-bootstrap';

const MyTargetVerse = ({
  chapter,
  verse,
  verseText,
  styles,
  dir,
}) => {
  let chapterVerse;

  if (dir == 'rtl'){
    chapterVerse = verse + ':' + chapter + ' ';
  } else {
    chapterVerse = chapter + ':' + verse + ' ';
  }

  return (
    <Col md={12} sm={12} xs={12} lg={12} style={styles}>
      <div style={{ direction: dir }}>
        <b>{chapterVerse}</b>
        {verseText}
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
};

export default MyTargetVerse;
