import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Glyphicon } from 'react-bootstrap';
import ThreeDotIcon from '../../ThreeDotIcon';
import FontSizeSlider from '../../FontSizeSlider';
import DropdownMenu, { MenuItem } from '../../DropdownMenu';

function ThreeDotMenu({
  index,
  removePane,
  isTargetBible,
  transformOrigin,
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

  return (
    <>
      <ThreeDotIcon onClick={handleClick} style={{ margin: '0 0 0 10px' }}/>
      <DropdownMenu
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        transformOrigin={transformOrigin}
      >
        <MenuItem
          onClose={handleClose}
          divider={isTargetBible}
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
          <div style={{ margin: '0px 10px', color: '#000000' }}>{removeResourceLabel}</div>
        </MenuItem>
        {
          isTargetBible &&
          <MenuItem onClose={handleClose} divider disableOnClick>
            <FontSizeSlider initialValue={90} />
          </MenuItem>
        }
      </DropdownMenu>
    </>
  );
}

ThreeDotMenu.defaultProps = { transformOrigin: { vertical: 'top', horizontal: 'right' } };

ThreeDotMenu.propTypes = {
  index: PropTypes.number.isRequired,
  removePane: PropTypes.func.isRequired,
  isTargetBible: PropTypes.bool.isRequired,
  transformOrigin: PropTypes.object.isRequired,
  removeResourceLabel: PropTypes.string.isRequired,
  clickToRemoveResourceLabel: PropTypes.string.isRequired,
};

export default ThreeDotMenu;
