import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import TextFieldsIcon from '@material-ui/icons/TextFields';
// import ArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import { makeStyles } from '@material-ui/core/styles';
import { useInView } from 'react-intersection-observer';

const useStyles = makeStyles({
  menu: { marginLeft: '180px' },
  menuOutOfView: { margin: '180px 0px 0px 38px' },
  menuItem: { fontSize: '14px', width: '150px' },
  menuItemSelected: { color: '#FF4081' },
});

const FontSelectionMenu = ({
  paneIndex,
  currentFont,
  isTargetBible,
  selectFontLabel,
  handleCloseParent,
  changePaneFontType,
  complexScriptFonts,
  addObjectPropertyToManifest,
}) => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const [ref, inView] = useInView({ threshold: 0.90 });

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = (font) => {
    handleClose();

    if (isTargetBible) {
      addObjectPropertyToManifest('projectFont', font);
    } else {
      changePaneFontType(paneIndex, font);
    }
  };

  const handleClose = () => {
    setAnchorEl(null);
    handleCloseParent();
  };

  const getFontList = (isHebrew) => {
    // add all complex script fonts to font list
    const fontList = Object.keys(complexScriptFonts).map((fontName) => ({
      key: `${fontName}-font-menu-item`,
      value: complexScriptFonts[fontName].font,
      primaryText: fontName,
      selected: currentFont === complexScriptFonts[fontName].font,
    }));

    // add default font
    fontList.push({
      key: 'NotoSans-font-menu-item',
      value: 'default',
      primaryText: isHebrew ? 'Ezra (Default)' : 'Noto Sans (Default)',
      selected: currentFont === '' || currentFont === 'default',
    });

    // return sorted font list
    return fontList.sort((a, b) => a.primaryText < b.primaryText ? -1 : 1);
  };

  console.log('inView', inView);

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
        ref={ref}
        id='simple-menu'
        anchorEl={anchorEl}
        onClose={handleClose}
        open={Boolean(anchorEl)}
        classes={{ paper: inView ? classes.menu : classes.menuOutOfView }}
      >
        {
          getFontList().map(({
            key, value, selected, primaryText,
          }) => (
            <MenuItem
              key={key}
              selected={selected}
              classes={{
                root: classes.menuItem,
                selected: classes.menuItemSelected,
              }}
              onClick={() => handleMenuItemClick(value)}
            >
              {primaryText}
            </MenuItem>
          ))
        }
      </Menu>
    </>
  );
};

FontSelectionMenu.propTypes = {
  paneIndex: PropTypes.number.isRequired,
  currentFont: PropTypes.string.isRequired,
  isTargetBible: PropTypes.bool.isRequired,
  selectFontLabel: PropTypes.string.isRequired,
  handleCloseParent: PropTypes.func.isRequired,
  changePaneFontType: PropTypes.func.isRequired,
  complexScriptFonts: PropTypes.object.isRequired,
  addObjectPropertyToManifest: PropTypes.func.isRequired,
};

export default FontSelectionMenu;
