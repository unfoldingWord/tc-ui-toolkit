import React from 'react';
import PropTypes from 'prop-types';
import ReasonCheckbox from './ReasonCheckbox';

export const updateReasons = (reason, checked, selectedReasons) => {
  let newReasons = [
    ...selectedReasons,
  ];

  if (checked && !newReasons.includes(reason)) {
    newReasons.push(reason);
  } else if (!checked && newReasons.includes(reason)) {
    const index = newReasons.indexOf(reason);
    newReasons.splice(index, 1);
  }
  return newReasons;
};

/**
 * @callback ReasonScreen~onChange
 * @param {string[]} newReasons - an array of reasons for editing the verse
 */

/**
 * Renders checkboxes to indicate the reason for the change
 * @property {ReasonScreen~onChange} onChange - callback when the selected reasons change
 * @property {func} translate - the locale function
 * @property {string[]} selectedReasons - an array of selected reasons
 */
class ReasonScreen extends React.Component {
  constructor(props) {
    super(props);
    this._handleCheck = this._handleCheck.bind(this);
  }

  /**
   * Checks if a checkbox is selected
   * @param {string} reason
   * @param {bool} checked
   * @return {boolean}
   * @private
   */
  _handleCheck(reason, checked) {
    const { selectedReasons, onChange } = this.props;
    const newReasons = updateReasons(reason, checked, selectedReasons);
    onChange(newReasons);
  }

  render() {
    const { translate, selectedReasons } = this.props;

    return (
      <div className='reasons-screen'>
        <div className='reasons-screen-column'>
          <ReasonCheckbox reason="spelling"
            label={translate('spelling')}
            onCheck={this._handleCheck}
            selectedReasons={selectedReasons}/>
          <ReasonCheckbox reason="punctuation"
            label={translate('punctuation')}
            onCheck={this._handleCheck}
            selectedReasons={selectedReasons}/>
          <ReasonCheckbox reason="word_choice"
            label={translate('word_choice')}
            onCheck={this._handleCheck}
            selectedReasons={selectedReasons}/>
        </div>
        <div className='reasons-screen-column'>
          <ReasonCheckbox reason="meaning"
            label={translate('meaning')}
            onCheck={this._handleCheck}
            selectedReasons={selectedReasons}/>
          <ReasonCheckbox reason="grammar"
            label={translate('grammar')}
            onCheck={this._handleCheck}
            selectedReasons={selectedReasons}/>
          <ReasonCheckbox reason="other"
            label={translate('other')}
            onCheck={this._handleCheck}
            selectedReasons={selectedReasons}/>
        </div>
      </div>
    );
  }
}

ReasonScreen.propTypes = {
  onChange: PropTypes.func.isRequired,
  translate: PropTypes.func.isRequired,
  selectedReasons: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ReasonScreen;
