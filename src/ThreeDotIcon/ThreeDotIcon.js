import React from 'react';
import PropTypes from 'prop-types';
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';

function ThreeDotIcon({ onClick, style }) {
  return (
    // <IconButton
    //   aria-label="more"
    //   aria-controls="long-menu"
    //   aria-haspopup="true"
    //   onClick={onClick}
    //   style={{ padding: 0, ...style }}
    // >
    <MoreVertIcon onClick={onClick} style={{ padding: 0, ...style }}/>
    // </IconButton>
  );
}

ThreeDotIcon.propTypes = {
  onClick: PropTypes.func.isRequired,
  style: PropTypes.object.isRequired,
};

export default ThreeDotIcon;
