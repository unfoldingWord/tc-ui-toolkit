import React from 'react';
import PropTypes from 'prop-types';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

const FontsDropdownMenu = ({
  open,
  onClose,
  anchorEl,
  // anchorOrigin,
  // transformOrigin,
  handleCloseParent,
  complexScriptFonts,
}) => (
  <Menu
    // keepMounted
    open={open}
    id="simple-menu"
    onClose={onClose}
    anchorEl={anchorEl}
    // anchorOrigin={anchorOrigin}
    // transformOrigin={transformOrigin}
  >
    {
      Object.keys(complexScriptFonts).map((fontName) => {
        const label = complexScriptFonts[fontName].font;
        return (
          <MenuItem key={`${fontName}-font-menu-item`} onClick={handleCloseParent}>
            {label}
          </MenuItem>
        );
      })
    }
  </Menu>
);

FontsDropdownMenu.defaultProps = {
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
