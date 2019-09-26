import React from 'react';
import PropTypes from 'prop-types';
import {
  FormGroup, FormControl, Glyphicon,
} from 'react-bootstrap';
import './CommentArea.styles.css';

const CommentArea = ({
  comment,
  translate,
  handleComment,
  hasCommentChanged,
}) => (
  <div className='comment-area'>
    <div style={{ fontWeight: 'bold' }}>
      <Glyphicon glyph='comment' style={{ marginRight: '5px' }} />
      {translate('comment')}
    </div>
    <FormGroup style={{ flex: 'auto', display: 'flex' }} controlId="formControlsTextarea">
      <FormControl autoFocus
        componentClass='textarea'
        type='text'
        defaultValue={comment}
        style={{ flex: 'auto' }}
        onBlur={handleComment}
        onInput={hasCommentChanged}
      />
    </FormGroup>
  </div>
);

CommentArea.propTypes = {
  translate: PropTypes.func.isRequired,
  comment: PropTypes.string.isRequired,
  handleComment: PropTypes.func.isRequired,
  hasCommentChanged: PropTypes.func.isRequired,
};

export default CommentArea;
