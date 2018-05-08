import React from 'react';
import Switch from 'material-ui/Switch';
import PropTypes from 'prop-types';

import './Bookmark.styles.css';

const Bookmark = ({
  value,
  label,
  checked,
  color,
  onChange,
  disabled
}) => {
  return (
    <label id={"bookmark-"+value} className="bookmark">
      <Switch
        value={value}
        checked={checked}
        color={color}
        onChange={onChange}
        disabled={disabled}
      />
      {label}
    </label>
  );
};

Bookmark.defaultProps = {
  checked: false,
  disabled: false,
  color: 'primary',
};

Bookmark.propTypes = {
  value: PropTypes.string,
  checked: PropTypes.bool,
  disabled: PropTypes.bool,
  label: PropTypes.string,
  onChange: PropTypes.func,
  color: PropTypes.string
};

export default Bookmark;
