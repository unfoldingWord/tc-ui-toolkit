import React from 'react';
import PropTypes from 'prop-types';
import {FormGroup, FormControl, Glyphicon} from 'react-bootstrap';
import './CommentArea.styles.css';

const CommentArea = ({
  actions,
  comment,
  translate
}) => {
  return (
    <div className='comment-area'>
      <div style={{fontWeight: 'bold'}}>
        <Glyphicon glyph='comment' style={{marginRight: '5px'}} />
        {translate("comment")}
      </div>
      <FormGroup style={{flex: 'auto', display: 'flex' }} controlId="formControlsTextarea">
        <FormControl autoFocus
          componentClass='textarea'
          type='text'
          defaultValue={comment}
          style={{flex: 'auto'}}
          onBlur={actions.handleComment.bind(this)}
          onInput={actions.checkComment.bind(this)}
        />
      </FormGroup>
    </div>
  );
};

CommentArea.propTypes = {
  translate: PropTypes.func.isRequired,
  actions: PropTypes.shape({
    handleComment: PropTypes.func,
    checkComment: PropTypes.func,
  }).isRequired,
  comment: PropTypes.string.isRequired
};

export default CommentArea;
