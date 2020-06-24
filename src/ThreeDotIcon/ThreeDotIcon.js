import React from 'react';
import PropTypes from 'prop-types';
import { Glyphicon } from 'react-bootstrap';

function ThreeDotIcon({
  style,
  title,
  onClick,
}) {
  return (
    <Glyphicon
      glyph="option-vertical"
      title={title}
      onClick={onClick}
      style={{
        padding: 0,
        fontSize: '18px',
        cursor: 'pointer',
        ...style,
      }}
    />
  );
}

ThreeDotIcon.propTypes = {
  title: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  style: PropTypes.object.isRequired,
};

export default ThreeDotIcon;
