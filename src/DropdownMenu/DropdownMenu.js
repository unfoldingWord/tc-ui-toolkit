import React from 'react';
import PropTypes from 'prop-types';
import Popover from '@material-ui/core/Popover';

export default function DropdownMenu({
  open,
  style,
  onClose,
  anchorEl,
  children,
  anchorOrigin,
  transformOrigin,
}) {
  return (
    <Popover
      open={open}
      onClose={onClose}
      style={{ ...style }}
      anchorEl={anchorEl}
      anchorOrigin={anchorOrigin}
      transformOrigin={transformOrigin}
    >
      {children}
    </Popover>
  );
}

DropdownMenu.defaultProps = {
  transformOrigin: { vertical: 'top', horizontal: 'left' },
  anchorOrigin: { vertical: 'bottom', horizontal: 'right' },
};

DropdownMenu.propTypes = {
  style: PropTypes.object,
  anchorOrigin: PropTypes.object,
  open: PropTypes.bool.isRequired,
  transformOrigin: PropTypes.object,
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  anchorEl: PropTypes.oneOfType([
    PropTypes.node.isRequired,
    PropTypes.bool.isRequired,
  ]),
};

export function MenuItem({
  style,
  title,
  divider,
  onClose,
  onClick,
  children,
  disableOnClick,
}) {
  const menuItemStyle = {
    display: 'flex',
    padding: '4px',
    margin: '6px',
    cursor: disableOnClick ? '' : 'pointer',
    ...style,
  };

  function handleOnClick() {
    if (!disableOnClick) {
      if (onClose) {
        onClose();
      }

      if (onClick) {
        onClick();
      }
    }
  }

  return (
    <>
      <div style={menuItemStyle} onClick={handleOnClick} title={title}>
        {children}
      </div>
      {divider && <hr style={{ margin: '4px 4px 0' }} />}
    </>
  );
}

MenuItem.propTypes = {
  style: PropTypes.object,
  title: PropTypes.string,
  divider: PropTypes.bool,
  disableOnClick: PropTypes.bool,
  onClose: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  anchorEl: PropTypes.oneOfType([
    PropTypes.node.isRequired,
    PropTypes.bool.isRequired,
  ]),
};
