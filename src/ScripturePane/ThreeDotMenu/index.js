import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Glyphicon } from 'react-bootstrap';
import ThreeDotIcon from '../../ThreeDotIcon';
import FontSizeSlider from '../../FontSizeSlider';
import DropdownMenu, { MenuItem } from '../../DropdownMenu';

function ThreeDotMenu({
  index,
  fontSize,
  removePane,
  anchorOrigin,
  transformOrigin,
  changePaneFontSize,
  removeResourceLabel,
  clickToRemoveResourceLabel,
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
    changePaneFontSize(index, fontSize);
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
          onClose={handleClose}
          onClick={() => removePane(index)}
          style={{
            display: 'flex', justifyContent: 'flex-start', alignItems: 'center',
          }}
        >
          <Glyphicon
            glyph={'remove'}
            style={{ fontSize: '20px', color: '#000000' }}
            className='remove-glyph-icon'
            title={clickToRemoveResourceLabel}
          />
          <div title={clickToRemoveResourceLabel} style={{ margin: '0px 10px', color: '#000000' }}>
            {removeResourceLabel}
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
  fontSize: PropTypes.number,
  index: PropTypes.number.isRequired,
  removePane: PropTypes.func.isRequired,
  anchorOrigin: PropTypes.object.isRequired,
  transformOrigin: PropTypes.object.isRequired,
  changePaneFontSize: PropTypes.func.isRequired,
  removeResourceLabel: PropTypes.string.isRequired,
  clickToRemoveResourceLabel: PropTypes.string.isRequired,
};

export default ThreeDotMenu;
