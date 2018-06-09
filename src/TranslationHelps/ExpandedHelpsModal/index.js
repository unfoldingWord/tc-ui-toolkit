/**
* @description This component displays a modal when the user clicks the
* new-window glyphicon button on translationHelps component.
*/
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import {Glyphicon} from 'react-bootstrap';
import Markdown from 'react-remarkable';

import './ExpandedHelpsModal.styles.css';

const styles = {
  paper: {minWidth: 800, minHeight: 500}
};

const ExpandedHelpsModal = ({
  show,
  onHide,
  title,
  article,
  classes,
  translate
}) => {
  return (
    <Dialog
      classes={{
        paper: classes.paper
      }}
      open={show}
      maxWidth='md'>
      <Toolbar className="tool-bar">
        <div className="tool-bar-title">
          {title}
        </div>
        <IconButton style={{position: 'absolute', right: 10}} color="inherit" onClick={onHide} aria-label="Close" className="close-button">
          <Glyphicon glyph="remove" />
        </IconButton>
      </Toolbar>
      <DialogContent className="dialog-content">
        <Markdown options={{html: true}} source={article} />
      </DialogContent>
      <DialogActions disableActionSpacing className="dialog-actions">
        <button className="btn-prime" onClick={onHide}>
          {translate('close')}
        </button>
      </DialogActions>
    </Dialog>
  );
};


ExpandedHelpsModal.propTypes = {
  show: PropTypes.bool.isRequired,
  onHide: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  article: PropTypes.string.isRequired,
  classes: PropTypes.object.isRequired,
  translate: PropTypes.func.isRequired,
};

export default withStyles(styles)(ExpandedHelpsModal);
