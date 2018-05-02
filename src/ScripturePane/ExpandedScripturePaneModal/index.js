import React, { Children } from 'react';
import PropTypes from 'prop-types';
import Dialog, { DialogActions, DialogTitle, DialogContent } from 'material-ui/Dialog';
import Toolbar from 'material-ui/Toolbar';
import IconButton from 'material-ui/IconButton';

import { Glyphicon } from 'react-bootstrap';

import './ExpandedScripturePaneModal.styles.css';

// components
import ChapterView from './ChapterView';
import BibleHeadingsRow from './ChapterView/BibleHeadingsRow';

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
    padding: '0px',
    margin: '0px'
  },
  dialogActions: {
    height: '70px',
    padding: '10px',
    margin: '0px',
    borderTop: '1px solid var(--border-color)'
  }
}

const ExpandedScripturePaneModal = ({
  show,
  onHide,
  title,
  primaryLabel,
  contextId,
  biblesWithHighlightedWords,
  currentPaneSettings,
}) => {
  return (
    <Dialog open={show} onClose={onHide} fullWidth maxWidth='md'>
      <Toolbar style={styles.toolBar}>
        <div style={styles.title}>
          {title}
        </div>
        <IconButton color="inherit" onClick={onHide} aria-label="Close" style={styles.closeButton}>
          <Glyphicon glyph="remove" />
        </IconButton>
      </Toolbar>
      <DialogContent style={styles.dialogContent}>
      <BibleHeadingsRow
        currentPaneSettings={currentPaneSettings}
        biblesWithHighlightedWords={biblesWithHighlightedWords} />
        <ChapterView
          contextId={contextId}
          currentPaneSettings={currentPaneSettings}
          biblesWithHighlightedWords={biblesWithHighlightedWords}
        />
      </DialogContent>
      <DialogActions disableActionSpacing style={styles.dialogActions}>
        <button className="btn-prime" onClick={onHide}>
          Close
        </button>
      </DialogActions>
    </Dialog>
  );
};

ExpandedScripturePaneModal.propTypes = {
  show: PropTypes.bool.isRequired,
  onHide: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  primaryLabel: PropTypes.string.isRequired,
  contextId: PropTypes.object.isRequired,
  biblesWithHighlightedWords: PropTypes.object.isRequired,
  currentPaneSettings: PropTypes.array.isRequired,
};

export default ExpandedScripturePaneModal;