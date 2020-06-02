import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import { Glyphicon } from 'react-bootstrap';
import { withStyles } from '@material-ui/core/styles';
// components
import Paper from '@material-ui/core/Paper';
import Draggable from 'react-draggable';
import deepEqual from 'deep-equal';
import { getFontClassName } from '../../common/fontUtils';
import ChapterView from './ChapterView';
import BibleHeadingsRow from './ChapterView/BibleHeadingsRow';

import './ExpandedScripturePaneModal.styles.css';

function PaperComponent(props) {
  // component will only be draggable by element with the className in the handle prop
  return (
    <Draggable handle=".expanded-scripture-draggable-handle">
      <Paper {...props}/>
    </Draggable>
  );
}

const styles = {
  toolBar: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'var(--reverse-color)',
    backgroundColor: 'var(--accent-color-dark)',
    padding: '15px',
    width: '100%',
    cursor: 'move',
  },
  title: {
    marginLeft: 'auto',
    fontSize: '22px',
    fontWeight: '400',
  },
  closeButton: { marginLeft: 'auto' },
  dialogContent: {
    padding: '0px',
    margin: '0px',
  },
  dialogActions: {
    height: '70px',
    padding: '10px',
    margin: '0px',
    borderTop: '1px solid var(--border-color)',
  },
  progressRoot: { color: 'var(--accent-color-dark)' },
  progressSvg: { margin: '5px' },
  paperRoot: { margin: '0px' },
};

function ExpandedScripturePaneModal({
  show,
  title,
  onHide,
  bibles,
  classes,
  contextId,
  translate,
  selections,
  showPopover,
  getLexiconData,
  editTargetVerse,
  targetLanguageFont,
  currentPaneSettings,
  projectDetailsReducer,
}) {
  const [verseTextReference, editVerseText] = useState({});

  function handleEditTargetVerse(bibleId, chapter, verse, verseText) {
    editVerseText(prevState => ({
      ...prevState,
      bibleId,
      chapter,
      verse,
      verseText,
    }));
  };

  function handleEditorSubmit(originalVerse, newVerse, reasons) {
    if (Object.keys(verseTextReference).length === 0) {
      return;
    }

    const { chapter, verse } = verseTextReference;

    if (typeof editTargetVerse === 'function') {
      editTargetVerse(chapter, verse, originalVerse, newVerse, reasons);
    } else {
      console.warn('Unable to edit verse. Callback is not a function.');
    }
    editVerseText({});
  }

  function handleEditorCancel() {
    editVerseText({});
  }

  const fontClass = getFontClassName(targetLanguageFont);

  return (
    <Dialog
      open={show}
      onClose={onHide}
      fullWidth
      maxWidth='md'
      PaperComponent={PaperComponent}
      PaperProps={{ className: classes.paperRoot }}
      aria-labelledby="draggable-expanded-scripture-pane"
    >
      <Toolbar style={styles.toolBar} className="expanded-scripture-draggable-handle">
        <div style={styles.title} className={fontClass}>
          {title}
        </div>
        <IconButton color="inherit" onClick={onHide} aria-label="Close" style={styles.closeButton}>
          <Glyphicon glyph="remove" />
        </IconButton>
      </Toolbar>
      <DialogContent style={styles.dialogContent}>
        <BibleHeadingsRow
          bibles={bibles}
          currentPaneSettings={currentPaneSettings}
          projectDetailsReducer={projectDetailsReducer} />
        <ChapterView
          bibles={bibles}
          contextId={contextId}
          translate={translate}
          editVerse={Object.keys(verseTextReference).length === 0 ? null : verseTextReference}
          editTargetVerse={editTargetVerse}
          projectDetailsReducer={projectDetailsReducer}
          currentPaneSettings={currentPaneSettings}
          handleEditTargetVerse={handleEditTargetVerse}
          handleEditorSubmit={handleEditorSubmit}
          handleEditorCancel={handleEditorCancel}
          selections={selections}
          showPopover={showPopover}
          getLexiconData={getLexiconData} />
      </DialogContent>
      <DialogActions disableActionSpacing style={styles.dialogActions}>
        <button className="btn-prime" onClick={onHide}>
          {translate('close')}
        </button>
      </DialogActions>
    </Dialog>
  );
}

ExpandedScripturePaneModal.propTypes = {
  show: PropTypes.bool.isRequired,
  onHide: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  bibles: PropTypes.object.isRequired,
  translate: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired,
  targetLanguageFont: PropTypes.string,
  contextId: PropTypes.object.isRequired,
  showPopover: PropTypes.func.isRequired,
  selections: PropTypes.array.isRequired,
  primaryLabel: PropTypes.string.isRequired,
  getLexiconData: PropTypes.func.isRequired,
  editTargetVerse: PropTypes.func.isRequired,
  currentPaneSettings: PropTypes.array.isRequired,
  projectDetailsReducer: PropTypes.object.isRequired,
};

/**
 * Custom comparison function to determine if component should rerender.
 * @param {object} prevProps
 * @param {object} nextProps
 */
// function areEqual(prevProps, nextProps) {
//   /*
//   Return true if passing nextProps.bibles to
//   render would return the same result as passing
//   prevProps.bibles to render, otherwise return false
//   */
//   return deepEqual(prevProps.bibles, nextProps.bibles);
// }
// using React.memo to boost performance by memoizing the result
// export default React.memo(withStyles(styles)(ExpandedScripturePaneModal), areEqual);

export default withStyles(styles)(ExpandedScripturePaneModal);
