import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import TextFieldsIcon from '@material-ui/icons/TextFields';

const FontSelectionMenu = ({
  // anchorOrigin,
  // transformOrigin,
  selectFontLabel,
  handleCloseParent,
  complexScriptFonts,
}) => {
  const [anchorEl, setAnchorEl] = useState(null);
  // const [selectedIndex, setSelectedIndex] = useState(1);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = (_, index) => {
    // setSelectedIndex(index);
    console.log(index);
    setAnchorEl(null);
    handleCloseParent();
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <div
        onClick={handleClick}
        style={{
          display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%', height: '100%',
        }}
      >
        <TextFieldsIcon style={{ fontSize: '24px' }}/>
        <div style={{ margin: '0px 5px', color: '#000000' }}>
          {selectFontLabel}
        </div>
        <PlayArrowIcon style={{ color: '#b5b3b3', fontSize: '24px' }}/>
      </div>
      <Menu
        // keepMounted
        id='simple-menu'
        anchorEl={anchorEl}
        onClose={handleClose}
        open={Boolean(anchorEl)}
        // anchorOrigin={anchorOrigin}
        // transformOrigin={transformOrigin}
      >
        {
          Object.keys(complexScriptFonts).map((fontName) => {
            const label = complexScriptFonts[fontName].font;
            return (
              <MenuItem key={`${fontName}-font-menu-item`} onClick={handleMenuItemClick}>
                {label}
              </MenuItem>
            );
          })
        }
      </Menu>
    </>
  );
};

FontSelectionMenu.defaultProps = {
  anchorOrigin: { vertical: 'bottom', horizontal: 'left' },
  transformOrigin: { vertical: 'top', horizontal: 'right' },
};

FontSelectionMenu.propTypes = {
  anchorOrigin: PropTypes.object,
  transformOrigin: PropTypes.object,
  selectFontLabel: PropTypes.string.isRequired,
  handleCloseParent: PropTypes.func.isRequired,
  complexScriptFonts: PropTypes.array.isRequired,
};

export default FontSelectionMenu;
