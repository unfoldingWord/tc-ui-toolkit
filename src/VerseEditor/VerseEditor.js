import React from 'react';
import PropTypes from 'prop-types';
import EditIcon from '@material-ui/icons/Edit';
import { Glyphicon } from 'react-bootstrap';
// components
import EditScreen from './EditScreen';
import ReasonScreen from './ReasonScreen';
import BaseDialog from './BaseDialog';

import './VerseEditor.styles.css';

const styles = {
  screen: {
    display: 'flex', flexDirection: 'row', padding: '12px 12px 0 12px',
  },
  editor: {
    fontWeight: 'bold', fontSize: '16px', width: '320px', padding: '6px',
  },
  editHeading: {
    paddingLeft: '6px', fontWeight: 'bold', fontSize: '16px',
  },
  reasonHeading: {
    margin: '0 0 0 10px',
    fontWeight: 'bold',
    fontSize: '16px',
    width: '240px',
  },

};

/**
 * Renders a form for editing a single verse
 * @property {string} verseText - the verse text to edit
 * @property {function} translate - the locale function
 * @property {function} onSubmit - callback when the edit is submitted
 * @property {function} onCancel - callback when the edit is canceled
 */
class VerseEditor extends React.Component {
  constructor(props) {
    super(props);
    this._handleCancel = this._handleCancel.bind(this);
    this._handleSubmit = this._handleSubmit.bind(this);
    this._handleVerseChange = this._handleVerseChange.bind(this);
    this._handleReasonChange = this._handleReasonChange.bind(this);
    this._handleReset = this._handleReset.bind(this);
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

  isVerseChangedAndHaveReasons() {
    const { reasons, verseChanged } = this.state;
    return verseChanged && reasons && reasons.length;
  }

  isVerseChanged() {
    const { verseChanged } = this.state;
    return verseChanged;
  }

  _handleCancel() {
    const { onCancel } = this.props;
    onCancel();
    this._resetState();
  }

  _handleReset() {
    const { verseText } = this.props;

    this.setState({
      newVerse: verseText,
      verseChanged: false,
    });
  }

  _handleSubmit() {
    const { verseText, onSubmit } = this.props;

    if (this.isVerseChangedAndHaveReasons() && onSubmit) {
      const { newVerse, reasons } = this.state;
      onSubmit(verseText, newVerse, reasons);
      this._resetState();
      this._handleCancel();
    }
  }

  _handleVerseChange(newVerse) {
    const { verseText } = this.props;

    this.setState({
      newVerse,
      verseChanged: newVerse !== verseText,
    });
  }

  _handleReasonChange(newReasons) {
    this.setState({ reasons: newReasons });
  }

  render() {
    const {
      translate, open, verseTitle, verseText, targetLanguage,
    } = this.props;
    const {
      newVerse, reasons, verseChanged,
    } = this.state;
    let text = !verseChanged ? verseText : newVerse;
    const isVerseChangedAndHaveReason = this.isVerseChangedAndHaveReasons();
    const isVerseChanged = this.isVerseChanged();

    const title = (
      <span>
        <EditIcon className='edit-icon' />
        {translate('edit_verse_title', { passage: verseTitle })}
      </span>
    );

    const rows = 9 + (!targetLanguage ? 1 : 0); // make taller if no language label

    return (
      <BaseDialog
        modal={true}
        open={open}
        title={title}
        onClose={this._handleCancel}
        actionsEnabled={false}
      >
        <div className='screen' style={styles.screen}>
          <div>
            { targetLanguage ? (
              <div style={styles.editHeading}>
                {targetLanguage}
              </div>
            ) : ''}
            <EditScreen
              verseText={text}
              rows={rows}
              align={'left'}
              onChange={this._handleVerseChange}
              style={styles.editor}
            />
          </div>
          <div style={styles.reasonHeading}>
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
          <button className="btn-second"
            disabled={!isVerseChanged}
            onClick={this._handleReset}>
            <Glyphicon glyph='repeat' style={{ marginRight: '10px', transform: 'scaleX(-1)' }} />
            {translate('buttons.reset_button')}
          </button>
          <button className="btn-prime"
            disabled={!isVerseChangedAndHaveReason}
            onClick={this._handleSubmit}>
            <Glyphicon glyph='ok' style={{ marginRight: '10px' }} />
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
