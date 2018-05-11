/**
* @description This component displays a modal when the user clicks the
* new-window glyphicon button on translationHelps component.
*/
import React from 'react';
import PropTypes from 'prop-types';
import Dialog, { DialogActions, DialogTitle, DialogContent } from 'material-ui/Dialog';
import Toolbar from 'material-ui/Toolbar';
import IconButton from 'material-ui/IconButton';
import { Glyphicon } from 'react-bootstrap';

//import './ExpandedHelpsModal.styles.css';

// components
const styles = {
  toolBar: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'var(--reverse-color)',
    backgroundColor: 'var(--accent-color-dark)',
    padding: '15px',
    width: '100%',
  },
  title: {
    marginLeft: 'auto',
    fontSize: '22px',
    fontWeight: '400'
  },
  closeButton: {
    marginLeft: 'auto'
  },
  dialogContent: {
    padding: '7px',
  },
  dialogActions: {
    height: '50px',
    padding: '10px',
    margin: '0px',
    borderTop: '1px solid var(--border-color)'
  }
};

const ExpandedHelpsModal = ({
  show,
  onHide, 
  title,
  article, 
}) => {
  return (
    <Dialog 
        open={show} 
        maxWidth='md'
    >
      <Toolbar style={styles.toolBar}>
        <div style={styles.title}>
          {title}
        </div>
        <IconButton color="inherit" onClick={onHide} aria-label="Close" style={styles.closeButton}>
          <Glyphicon glyph="remove" />
        </IconButton>
      </Toolbar>
      <DialogContent style={styles.dialogContent}>
        {article}
      </DialogContent>
      <DialogActions disableActionSpacing style={styles.dialogActions}>
        <button className="btn-prime" onClick={onHide}>
          Close
        </button> 
      </DialogActions>
    </Dialog>  
  );
};


ExpandedHelpsModal.propTypes = {
  show: PropTypes.bool.isRequired,
  /*onHide: PropTypes.func.isRequired,
   title: PropTypes.string.isRequired, 
  article: PropTypes.string.isRequired, 
*/ };

export default ExpandedHelpsModal;