import React from 'react';
import PropTypes from 'prop-types';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  label: {
    color: 'var(--accent-color-dark)',
    fontWeight: "normal",
    fontSize: 14,
  },
  colorPrimary: 'var(--accent-color-dark)'
};

const Bookmark = ({
  value,
  label,
  checked,
  color,
  onChange,
  disabled,
  classes
}) => {
  return (
    <FormControlLabel
      control={
        <Switch
          value={value}
          checked={checked}
          color={color}
          onChange={onChange}
          disabled={disabled}
          classes={{colorPrimary: classes.colorPrimary}}
        />
      }
      classes={{label: classes.label}}
      label={label}
    />
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
  color: PropTypes.string,
  classes: PropTypes.object
};

export default withStyles(styles)(Bookmark);
