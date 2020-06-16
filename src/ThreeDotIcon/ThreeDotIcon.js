import React from 'react';
import PropTypes from 'prop-types';
// import IconButton from '@material-ui/core/IconButton';
// import MoreVertIcon from '@material-ui/icons/MoreVert';
import { Glyphicon } from 'react-bootstrap';

function ThreeDotIcon({
  onClick, style, title,
}) {
  return (
    <Glyphicon
      glyph="option-vertical"
      title={title}
      onClick={onClick}
      style={{ padding: 0, ...style }}
    />
    // <IconButton
    //   aria-label="more"
    //   aria-controls="long-menu"
    //   aria-haspopup="true"
    //   onClick={onClick}
    //   style={{ padding: 0, ...style }}
    // >
    // <MoreVertIcon onClick={onClick} style={{ padding: 0, ...style }}/>
    // </IconButton>
  );
}

ThreeDotIcon.propTypes = {
  title: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  style: PropTypes.object.isRequired,
};

export default ThreeDotIcon;
