import React from 'react';
import PropTypes from 'prop-types';
import ReasonCheckbox from './ReasonCheckbox';

const styles = {
  root: {
    display: 'flex'
  },
  content: {
    display: 'flex',
    flexGrow: 1
  },
  column: {
    flexGrow: 1
  },
  spacer: {
    flexGrow: 2
  }
};

export const updateReasons = (reason, checked, selectedReasons) => {
  let newReasons = [
    ...selectedReasons
  ];
  if(checked && !newReasons.includes(reason)) {
    newReasons.push(reason);
  } else if(!checked && newReasons.includes(reason)) {
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
    const {selectedReasons, onChange} = this.props;
    const newReasons = updateReasons(reason, checked, selectedReasons);
    onChange(newReasons);
  }

  render() {
    const {translate, selectedReasons} = this.props;

    return (
      <div style={styles.root}>
        <div style={styles.spacer}/>
        <div style={styles.content}>
          <div style={styles.column}>
            <ReasonCheckbox reason="spelling"
                            label={translate('editor.spelling')}
                            onCheck={this._handleCheck}
                            selectedReasons={selectedReasons}/>
            <ReasonCheckbox reason="punctuation"
                            label={translate('editor.punctuation')}
                            onCheck={this._handleCheck}
                            selectedReasons={selectedReasons}/>
            <ReasonCheckbox reason="word_choice"
                            label={translate('editor.word_choice')}
                            onCheck={this._handleCheck}
                            selectedReasons={selectedReasons}/>
          </div>
          <div style={styles.column}>
            <ReasonCheckbox reason="meaning"
                            label={translate('editor.meaning')}
                            onCheck={this._handleCheck}
                            selectedReasons={selectedReasons}/>
            <ReasonCheckbox reason="grammar"
                            label={translate('editor.grammar')}
                            onCheck={this._handleCheck}
                            selectedReasons={selectedReasons}/>
            <ReasonCheckbox reason="other"
                            label={translate('editor.other')}
                            onCheck={this._handleCheck}
                            selectedReasons={selectedReasons}/>
          </div>
        </div>
        <div style={styles.spacer}/>
      </div>

    );
  }
}

ReasonScreen.propTypes = {
  onChange: PropTypes.func.isRequired,
  translate: PropTypes.func.isRequired,
  selectedReasons: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default ReasonScreen;
