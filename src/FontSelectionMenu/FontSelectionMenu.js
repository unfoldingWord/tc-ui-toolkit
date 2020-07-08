import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import TextFieldsIcon from '@material-ui/icons/TextFields';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  menu: { marginLeft: '180px' },
  menuItem: { fontSize: '14px', width: '150px' },
});

const FontSelectionMenu = ({
  selectFontLabel,
  handleCloseParent,
  complexScriptFonts,
}) => {
  const classes = useStyles();
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
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          width: '100%',
          height: '100%',
          padding: '4px',
          margin: '6px',
          cursor: 'pointer',
        }}
      >
        <TextFieldsIcon style={{ fontSize: '24px' }}/>
        <div style={{ margin: '0px 5px', color: '#000000' }}>
          {selectFontLabel}
        </div>
        <PlayArrowIcon style={{ color: '#b5b3b3', fontSize: '24px' }}/>
      </div>
      <Menu
        id='simple-menu'
        anchorEl={anchorEl}
        onClose={handleClose}
        open={Boolean(anchorEl)}
        classes={{ paper: classes.menu }}
      >
        {
          Object.keys(complexScriptFonts).map((fontName) => {
            {/* const value = complexScriptFonts[fontName].font; */}
            return (
              <MenuItem
                onClick={handleMenuItemClick}
                classes={{ root: classes.menuItem }}
                key={`${fontName}-font-menu-item`}
              >
                {fontName}
              </MenuItem>
            );
          })
        }
      </Menu>
    </>
  );
};

FontSelectionMenu.propTypes = {
  selectFontLabel: PropTypes.string.isRequired,
  handleCloseParent: PropTypes.func.isRequired,
  complexScriptFonts: PropTypes.array.isRequired,
};

export default FontSelectionMenu;
