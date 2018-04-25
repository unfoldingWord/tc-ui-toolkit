import React from 'react';
import PropTypes from 'prop-types';
import Checkbox from 'material-ui/Checkbox';

const styles = {
  root: {
    marginBottom: 16
  }
};

/**
 * @callback ReasonCheckbox~onCheck
 * @param {string} reason - the reason being checked
 * @param {bool} checked - indicates if the reason is checked
 */

/**
 * Renders a reason checkbox
 * @property {string} reason - the reason for the edit
 * @property {string} label - the checkbox label
 * @property {string[]} selectedReasons - an array of selected reasons
 * @property {ReasonCheckbox~onCheck} onCheck - callback when the checkbox is changed
 */
class ReasonCheckbox extends React.Component {

  constructor(props) {
    super(props);
    this._handleCheck = this._handleCheck.bind(this);
  }

  _handleCheck(e, checked) {
    const {reason, onCheck} = this.props;
    onCheck(reason, checked);
  }

  render() {
    const {reason, label, selectedReasons} = this.props;
    return (
      <Checkbox style={styles.root}
                checked={selectedReasons.includes(reason)}
                onCheck={this._handleCheck}
                label={label}/>
    );
  }
}

ReasonCheckbox.propTypes = {
  reason: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  selectedReasons: PropTypes.arrayOf(PropTypes.string),
  onCheck: PropTypes.func.isRequired
};

ReasonCheckbox.defaultProps = {
  selectedReasons: []
};

export default ReasonCheckbox;
