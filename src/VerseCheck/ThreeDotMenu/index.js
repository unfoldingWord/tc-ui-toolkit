import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Glyphicon } from 'react-bootstrap';
import ThreeDotIcon from '../../ThreeDotIcon';
import FontSizeSlider from '../../FontSizeSlider';
import DropdownMenu, { MenuItem } from '../../DropdownMenu';

function ThreeDotMenu({
  title,
  label,
  onClick,
  anchorOrigin,
  transformOrigin,
}) {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <ThreeDotIcon onClick={handleClick}/>
      <DropdownMenu
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={anchorOrigin}
        transformOrigin={transformOrigin}
        style={{ margin: '-22px 0px 0px' }}
      >
        <MenuItem
          divider
          onClick={onClick}
          onClose={handleClose}
          style={{
            display: 'flex', justifyContent: 'flex-start', alignItems: 'center',
          }}
        >
          <Glyphicon
            title={title}
            glyph='fullscreen'
            style={{ fontSize: '20px', color: '#000000' }}
          />
          <div title={title} style={{ margin: '0px 10px', color: '#000000' }}>
            {label}
          </div>
        </MenuItem>
        <MenuItem onClose={handleClose} disableOnClick>
          <FontSizeSlider initialValue={90} />
        </MenuItem>
      </DropdownMenu>
    </>
  );
}

ThreeDotMenu.defaultProps = {
  anchorOrigin: { vertical: 'bottom', horizontal: 'left' },
  transformOrigin: { vertical: 'top', horizontal: 'right' },
};

ThreeDotMenu.propTypes = {
  title: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  anchorOrigin: PropTypes.object.isRequired,
  transformOrigin: PropTypes.object.isRequired,
};

export default ThreeDotMenu;
