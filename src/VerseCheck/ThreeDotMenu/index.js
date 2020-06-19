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
  namespace,
  anchorOrigin,
  toolsSettings,
  setToolSettings,
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

  const handleFontSizeChange = (fontSize) => {
    setToolSettings(namespace, 'fontSize', fontSize);
  };

  const { fontSize } = toolsSettings[namespace] || {};

  return (
    <>
      <ThreeDotIcon onClick={handleClick}/>
      <DropdownMenu
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={anchorOrigin}
        transformOrigin={transformOrigin}
        style={{ margin: '-23px 0px 0px' }}
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
          <FontSizeSlider value={fontSize} onChange={handleFontSizeChange}/>
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
  namespace: PropTypes.string.isRequired,
  anchorOrigin: PropTypes.object.isRequired,
  toolsSettings: PropTypes.object.isRequired,
  setToolSettings: PropTypes.func.isRequired,
  transformOrigin: PropTypes.object.isRequired,
};

export default ThreeDotMenu;
