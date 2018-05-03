import React from 'react';
import PropTypes from 'prop-types';

const GroupsMenuFilterOption = ({
  name,
  text,
  icon,
  checked,
  disabled,
  onCheck
}) => (
    <label className={"option" + (disabled ? " disabled" : "")}>
      <span className="option-checkbox">
        <input type="checkbox" name={name} checked={checked} disabled={disabled} onChange={
          ({target: value}) => onCheck(name, value)} />
      </span>
      <span className="option-icon">
        {icon}
      </span>
      <span className="option-text">
        {text}
      </span>
    </label>
  );

GroupsMenuFilterOption.defaultProps = {
  checked: false,
  disabled: false
};

GroupsMenuFilterOption.propTypes = {
  name: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  icon: PropTypes.object.isRequired,
  setFilter: PropTypes.func.isRequired,
  checked: PropTypes.bool,
  disabled: PropTypes.bool,
  onCheck: PropTypes.func.isRequired
};

export default GroupsMenuFilterOption;
