import React from 'react';
import PropTypes from 'prop-types';
import DropdownMenu, { MenuItem } from '../DropdownMenu';

const FontsDropdownMenu = ({
  open,
  onClose,
  anchorEl,
  anchorOrigin,
  transformOrigin,
  handleCloseParent,
  complexScriptFonts,
}) => (
  <DropdownMenu
    open={open}
    anchorEl={anchorEl}
    onClose={onClose}
    anchorOrigin={anchorOrigin}
    transformOrigin={transformOrigin}
    // style={{ margin: '-15px 0px 0px' }}
  >
    {
      Object.keys(complexScriptFonts).map((fontName) => {
        const label = complexScriptFonts[fontName].font;
        return (
          <MenuItem key={`${fontName}-font-menu-item`} onClick={handleCloseParent}>
            <div>{label}</div>
          </MenuItem>
        );
      })
    }
  </DropdownMenu>
);

DropdownMenu.defaultProps = {
  anchorOrigin: { vertical: 'bottom', horizontal: 'left' },
  transformOrigin: { vertical: 'top', horizontal: 'right' },
};

FontsDropdownMenu.propTypes = {
  anchorOrigin: PropTypes.object,
  open: PropTypes.bool.isRequired,
  transformOrigin: PropTypes.object,
  onClose: PropTypes.func.isRequired,
  handleCloseParent: PropTypes.func.isRequired,
  complexScriptFonts: PropTypes.array.isRequired,
  anchorEl: PropTypes.oneOfType([
    PropTypes.node.isRequired,
    PropTypes.bool.isRequired,
  ]),
};

export default FontsDropdownMenu;
