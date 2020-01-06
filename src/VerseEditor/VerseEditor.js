import React from 'react';
import PropTypes from 'prop-types';
import EditIcon from '@material-ui/icons/Edit';
// components
import EditScreen from './EditScreen';
import ReasonScreen from './ReasonScreen';
import BaseDialog from './BaseDialog';

import './VerseEditor.styles.css';

/**
 * Checks if the next butt should be enabled
 * @param state
 * @return {*}
 */
export const isNextEnabled = (state) => {
  const {
    stepIndex, verseChanged, newVerse, reasons,
  } = state;

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
 * Renders a form for editing a single verse
 * @property {string} verseText - the verse text to edit
 * @property {func} translate - the locale function
 * @property {VerseEditor~submitCallback} onSubmit - callback when the edit is submitted
 * @property {func} onCancel - callback when the edit is canceled
 */
class VerseEditor extends React.Component {
  constructor(props) {
    super(props);
    this._handleCancel = this._handleCancel.bind(this);
    this._handleVerseChange = this._handleVerseChange.bind(this);
    this._handleReasonChange = this._handleReasonChange.bind(this);
    this._resetState = this._resetState.bind(this);
    this.state = {
      newVerse: '',
      verseChanged: false,
      reasons: [],
      isOptionDialogOpen: false,
    };
  }

  _resetState() {
    this.setState({
      newVerse: '',
      verseChanged: false,
      reasons: [],
      isOptionDialogOpen: false,
    });
  }

  _handleCancel() {
    const { onCancel } = this.props;
    onCancel();
    this._resetState();
  }

  _handleVerseChange(newVerse) {
    const { verseText } = this.props;

    this.setState({
      newVerse: newVerse,
      verseChanged: newVerse !== verseText,
    });
  }

  _handleReasonChange(newReasons) {
    this.setState({ reasons: newReasons });
  }

  /**
   * Checks if the next button is enabled
   * @return {*}
   */
  _isNextEnabled() {
    return isNextEnabled(this.state);
  }

  render() {
    const {
      translate, open, verseTitle, verseText, targetLanguage,
    } = this.props;
    const {
      newVerse, reasons, verseChanged,
    } = this.state;
    let text = !verseChanged ? verseText : newVerse;
    const isVerseChangedAndHaveReason = verseChanged && reasons && reasons.length;

    const title = (
      <span>
        <EditIcon className='edit-icon' />
        {translate('edit_verse_title', { passage: verseTitle })}
      </span>
    );

    const rows = 10 + (targetLanguage ? 1 : 0); // make taller if no language label

    return (
      <BaseDialog
        modal={true}
        open={open}
        title={title}
        onClose={this._handleCancel}
      >
        <div className='screen' style={{ display: 'flex', flexDirection: 'row' }}>
          <div>
            { targetLanguage ? (
              <div>
                {translate('select_reasons')}
              </div>
            ) : ''}
            <EditScreen
              verseText={text}
              rows={rows}
              align={'left'}
              onChange={this._handleVerseChange}
              style={{ fontSize: '16px' }}
            />
          </div>
          <div style={{
            margin: '0 0 0 10px',
            fontWeight: 'bold',
            fontSize: '1.1em',
            width: '280px',
          }}>
            <div>
              {translate('select_reasons')}
            </div>
            <ReasonScreen
              translate={translate}
              selectedReasons={reasons}
              columns={1}
              onChange={this._handleReasonChange}
            />
          </div>
        </div>
        <div className='actions'>
          <button className="btn-second"
            onClick={this._handleCancel}>
            {translate('buttons.cancel_button')}
          </button>
          <button className="btn-prime"
            disabled={!isVerseChangedAndHaveReason}
            onClick={this._handleNext}>
            {translate('buttons.save_button')}
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
  onSubmit: PropTypes.func.isRequired,
  targetLanguage: PropTypes.string.isRequired,
};

VerseEditor.defaultProps = { targetLanguage: '' };

export default VerseEditor;
