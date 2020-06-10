import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';

const useStyles = makeStyles({
  formControlLabelRoot: { height: 30 },
  formControlLabel: {
    justifyContent: 'flex-start',
    fontWeight: 700,
    fontSize: 16,
  },
  checkBoxRoot: {
    'fontSize': '24px',
    '&$checked': { color: 'var(--accent-color-dark)' },
  },
  checked:{},
});

function ReasonCheckbox({
  label,
  reason,
  onCheck,
  selectedReasons,
}) {
  function handleCheck(e, checked) {
    onCheck(reason, checked);
  }

  const classes = useStyles();

  return (
    <FormControlLabel
      classes={{
        root: classes.formControlLabelRoot,
        label: classes.formControlLabel,
      }}
      control={
        <Checkbox
          // classes={{
          //   root: classes.checkBoxRoot,
          //   checked: classes.checked,
          // }}
          checked={selectedReasons.includes(reason)}
          onChange={handleCheck}
        />
      }
      label={label}
    />
  );
}

ReasonCheckbox.propTypes = {
  label: PropTypes.string.isRequired,
  onCheck: PropTypes.func.isRequired,
  reason: PropTypes.string.isRequired,
  selectedReasons: PropTypes.arrayOf(PropTypes.string),
};

ReasonCheckbox.defaultProps = { selectedReasons: [] };

export default ReasonCheckbox;
