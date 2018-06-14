import React from "react";
import PropTypes from 'prop-types';
import EditIcon from '@material-ui/icons/Edit';
import DoneIcon from '@material-ui/icons/Done';
// components
import EditScreen from './EditScreen';
import ReasonScreen from './ReasonScreen';
import BaseDialog from './BaseDialog';
import VerseEditorStepper from './VerseEditorStepper';

import './VerseEditor.styles.css';

const steps = ['edit_verse', 'select_reasons'];

/**
 * Checks if the next butt should be enabled
 * @param state
 * @return {*}
 */
export const isNextEnabled = (state) => {
  const {stepIndex, verseChanged, newVerse, reasons} = state;
  switch (stepIndex) {
    case 0:
      return verseChanged && Boolean(newVerse);
    case 1:
      return reasons.length > 0;
    default:
      return false;
  }
};

/**
 * @callback VerseEditor~submitCallback
 * @param {string} originalVerse - the original verse text
 * @param {string} newVerse - the edited version of the verse text
 * @param {string[]} reasons - an array of reasons for editing the verse
 */

/**
 * Renders a form for editing a single verse
 * @property {string} verseText - the verse text to edit
 * @property {func} translate - the locale function
 * @property {VerseEditor~submitCallback} onSubmit - callback when the edit is submitted
 * @property {func} onCancel - callback when the edit is canceled
 */
class VerseEditor extends React.Component {

  constructor(props) {
    super(props);
    this._handleBack = this._handleBack.bind(this);
    this._handleCancel = this._handleCancel.bind(this);
    this._handleNext = this._handleNext.bind(this);
    this._isLastStep = this._isLastStep.bind(this);
    this._handleVerseChange = this._handleVerseChange.bind(this);
    this._handleReasonChange = this._handleReasonChange.bind(this);
    this._resetState = this._resetState.bind(this);
    this.state = {
      stepIndex: 0,
      newVerse: '',
      verseChanged: false,
      reasons: []
    };
  }

  _resetState() {
    this.setState({
      stepIndex: 0,
      newVerse: '',
      verseChanged: false,
      reasons: []
    });
  }

  _handleBack() {
    const {stepIndex} = this.state;
    this.setState({
      stepIndex: Math.max(stepIndex - 1, 0)
    });
  }

  _handleCancel() {
    const {onCancel} = this.props;
    onCancel();
    this._resetState();
  }

  _handleNext() {
    const {stepIndex, newVerse, reasons} = this.state;
    const {verseText, onSubmit} = this.props;
    if (this._isLastStep()) {
      onSubmit(verseText, newVerse, reasons);
      this._resetState();
    } else {
      this.setState({
        stepIndex: stepIndex + 1
      });
    }
  }

  _handleVerseChange(newVerse) {
    const {verseText} = this.props;
    this.setState({
      newVerse: newVerse,
      verseChanged: newVerse !== verseText
    });
  }

  _handleReasonChange(newReasons) {
    this.setState({
      reasons: newReasons
    });
  }


  _isLastStep() {
    const {stepIndex} = this.state;
    return stepIndex === steps.length - 1;
  }

  /**
   * Checks if the next button is enabled
   * @return {*}
   */
  _isNextEnabled() {
    return isNextEnabled(this.state);
  }

  render() {
    const {translate, open, verseTitle, verseText} = this.props;
    const {stepIndex, newVerse, reasons} = this.state;
    let text = !this.state.verseChanged ? verseText : newVerse;
    let screen;
    switch (stepIndex) {
      case 0:
        screen = (<EditScreen verseText={text} onChange={this._handleVerseChange} />);
        break;
      case 1:
        screen = (<ReasonScreen translate={translate} selectedReasons={reasons} onChange={this._handleReasonChange} />);
        break;
      default:
        screen = translate('oops');
    }

    let nextStepButtonTitle = translate('buttons.next_button');
    if (this._isLastStep()) {
      nextStepButtonTitle = (
        <React.Fragment>
          <DoneIcon className='done-icon' />
          {translate('buttons.save_button')}
        </React.Fragment>
      );
    }

    const localizedSteps = [];
    for (const step of steps) {
      localizedSteps.push(translate(step));
    }

    const title = (
      <span>
        <EditIcon className='edit-icon' />
        {translate('edit_verse_title', {passage: verseTitle})}
      </span>
    );

    return (
      <BaseDialog modal={true}
        open={open}
        title={title}>
        <VerseEditorStepper stepIndex={stepIndex}
          className='stepper'
          steps={localizedSteps} />
        <div className='screen'>
          {screen}
        </div>
        <div className='actions'>
          <button className="btn btn-link"
            disabled={stepIndex === 0}
            style={{color: stepIndex === 0 ? '#777' : 'var(--accent-color-dark)'}}
            onClick={this._handleBack}>
            {translate('buttons.back_button')}
          </button>
          <button className="btn-second"
            onClick={this._handleCancel}>
            {translate('buttons.cancel_button')}
          </button>
          <button className="btn-prime"
            disabled={!this._isNextEnabled()}
            onClick={this._handleNext}>
            {nextStepButtonTitle}
          </button>
        </div>
      </BaseDialog>
    );
  }
}

VerseEditor.propTypes = {
  open: PropTypes.bool.isRequired,
  verseTitle: PropTypes.string.isRequired,
  verseText: PropTypes.string.isRequired,
  translate: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
};

export default VerseEditor;