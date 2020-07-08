import React, { useState } from 'react';
import PropTypes from 'prop-types';
import RemoveCircle from '@material-ui/icons/RemoveCircle';
import TextFieldsIcon from '@material-ui/icons/TextFields';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import ThreeDotIcon from '../../ThreeDotIcon';
import FontSizeSlider from '../../FontSizeSlider';
import DropdownMenu, { MenuItem } from '../../DropdownMenu';
import FontsDropdownMenu from '../../FontsDropdownMenu';

function ThreeDotMenu({
  index,
  fontSize,
  removePane,
  anchorOrigin,
  transformOrigin,
  selectFontLabel,
  complexScriptFonts,
  changePaneFontSize,
  removeResourceLabel,
  clickToRemoveResourceLabel,
}) {
  const [anchorEl, setAnchorEl] = useState(null);
  const [subMenuAnchorEl, setSubMenuAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const submenuOpen = Boolean(subMenuAnchorEl);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleFontSizeChange = (fontSize) => {
    changePaneFontSize(index, fontSize);
  };

  const handleSubMenu = event => {
    setSubMenuAnchorEl(event.currentTarget);
  };

  const handleCloseSubmenu = () => {
    setSubMenuAnchorEl(null);
  };

  return (
    <>
      <ThreeDotIcon onClick={handleClick} style={{ margin: '0 0 0 10px' }}/>
      <DropdownMenu
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={anchorOrigin}
        transformOrigin={transformOrigin}
        style={{ margin: '-15px 0px 0px' }}
      >
        <MenuItem
          divider
          onClick={() => {
            removePane(index);
            handleClose();
          }}
          title={clickToRemoveResourceLabel}
          style={{
            display: 'flex', justifyContent: 'flex-start', alignItems: 'center',
          }}
        >
          <RemoveCircle style={{ fontSize: '20px' }}/>
          <div style={{ margin: '0px 10px', color: '#000000' }}>
            {removeResourceLabel}
          </div>
        </MenuItem>
        <MenuItem disableOnClick divider>
          <FontSizeSlider value={fontSize} onChange={handleFontSizeChange}/>
        </MenuItem>
        <MenuItem
          onClick={() => {
            handleSubMenu();
          }}
          title={selectFontLabel}
          style={{
            display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          }}
        >
          <div style={{
            display: 'flex', justifyContent: 'flex-start', alignItems: 'center',
          }}>
            <TextFieldsIcon style={{ fontSize: '24px' }}/>
            <div style={{ margin: '0px 5px', color: '#000000' }}>
              {selectFontLabel}
            </div>
            <FontsDropdownMenu
              open={submenuOpen}
              anchorEl={subMenuAnchorEl}
              onClose={handleCloseSubmenu}
              handleCloseParent={handleClose}
              complexScriptFonts={complexScriptFonts}
            />
          </div>
          <PlayArrowIcon style={{ color: '#b5b3b3', fontSize: '24px' }}/>
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
  fontSize: PropTypes.number,
  anchorOrigin: PropTypes.object,
  transformOrigin: PropTypes.object,
  index: PropTypes.number.isRequired,
  removePane: PropTypes.func.isRequired,
  selectFontLabel: PropTypes.string.isRequired,
  changePaneFontSize: PropTypes.func.isRequired,
  complexScriptFonts: PropTypes.array.isRequired,
  removeResourceLabel: PropTypes.string.isRequired,
  clickToRemoveResourceLabel: PropTypes.string.isRequired,
};

export default ThreeDotMenu;
