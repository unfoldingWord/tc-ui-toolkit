import React from 'react';
import PropTypes from 'prop-types';
import { Glyphicon } from 'react-bootstrap';
import BaseDialog from './BaseDialog';

/**
 * Renders a dialog to submit user feedback.
 *
 * @class
 *
 * @property {Function} translate - the localization function
 * @property {Function} onClose - callback when the dialog is closed
 * @property {Function} onSubmit - callback when the feedback is submitted.
 * @property {Function} open - controls whether the dialog is open or closed
 * @property {Function} [includeLogs=true] - indicates if logs should be included
 * @property {string} [message=''] - the feedback message
 * @property {string} [email=''] - the user's email
 * @property {string} [category=null] - the feedback category
 */
class CommentsDialog extends React.Component {
  constructor(props) {
    super(props);
    this._handleSubmit = this._handleSubmit.bind(this);
    this._handleClose = this._handleClose.bind(this);
    this._handleCommentChange = this._handleCommentChange.bind(this);
    this.onFocus = this.onFocus.bind(this);

    const { comment } = props;

    this.state = { comment };
  }

  componentWillReceiveProps(nextProps) {
    const { comment } = nextProps;

    if (comment !== this.state.comment) { // only update state if comment changed
      this.setState({ comment });
    }
  }

  _handleCommentChange(event) {
    const newComment = event.target.value;

    if (newComment !== this.state.comment) { // only update state if comment changed
      this.setState({ comment: newComment });
    }
  }

  _handleSubmit() {
    const { onSubmit } = this.props;
    onSubmit(this.state.comment);
  }

  _handleClose() {
    const { onClose } = this.props;
    onClose();
  }

  onFocus(e) {
    const length = (e.target && e.target.value && e.target.value.length) || 0;

    if ( length > 0 ) {
      e.target.setSelectionRange(length, length); // TRICKY: we need to move cursor to end of text to match behavior of electron 3
    }
  }

  render() {
    const {
      open,
      translate,
      verseTitle,
      comment,
    } = this.props;

    const { comment: currentComment } = this.state;
    const isSaveEnabled = currentComment !== comment;

    const saveButton = <div>
      <Glyphicon glyph='ok' style={{ marginRight: '10px' }} />
      {translate('buttons.save_button')}
    </div>;

    return (
      <BaseDialog onSubmit={this._handleSubmit}
        primaryLabel={saveButton}
        primaryActionEnabled={isSaveEnabled}
        secondaryLabel={translate('buttons.cancel_button')}
        onClose={this._handleClose}
        title={translate('comment_title', { passage: verseTitle })}
        bodyStyle={{ overflowY: 'auto', padding: '0 10px 0 10px' }}
        contentStyle={{ width: '500px' }}
        open={open}>
        <textarea
          id="verse-editor-field"
          rows={8}
          className='edit-screen'
          autoFocus={true}
          onFocus={this.onFocus}
          onChange={this._handleCommentChange}
          value={currentComment}/>
      </BaseDialog>
    );
  }
}

CommentsDialog.propTypes = {
  comment: PropTypes.string.isRequired,
  verseTitle: PropTypes.string.isRequired,
  translate: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
};

export default CommentsDialog;
