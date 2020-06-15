import React from 'react';
import PropTypes from 'prop-types';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

function DropdownMenu({
  open,
  options,
  selected,
  anchorEl,
  handleClose,
}) {
  return (
    <Menu
      id='dropdown-menu'
      anchorEl={anchorEl}
      keepMounted
      open={open}
      onClose={handleClose}
      // PaperProps={{
      //   style: {
      //     maxHeight: ITEM_HEIGHT * 4.5,
      //     width: '20ch',
      //   },
      // }}
    >
      {options.map((option) => (
        <MenuItem key={option} selected={option.value === selected} onClick={handleClose}>
          {option.node}
        </MenuItem>
      ))}
    </Menu>
  );
}

DropdownMenu.propTypes = {
  open: PropTypes.bool.isRequired,
  options: PropTypes.array.isRequired,
  selected: PropTypes.string.isRequired,
  anchorEl: PropTypes.oneOfType([
    PropTypes.node.isRequired,
    PropTypes.bool.isRequired,
  ]),
  handleClose: PropTypes.func.isRequired,
};

export default DropdownMenu;
