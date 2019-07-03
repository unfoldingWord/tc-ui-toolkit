import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import { Glyphicon } from 'react-bootstrap';
import {withStyles} from '@material-ui/core/styles';
// components
import ChapterView from './ChapterView';
import BibleHeadingsRow from './ChapterView/BibleHeadingsRow';
import Paper from '@material-ui/core/Paper';
import Draggable from 'react-draggable';

import './ExpandedScripturePaneModal.styles.css';

function PaperComponent(props) {
  // component will only be draggable by element with the className in the handle prop
  return (
    <Draggable bounds="body" handle=".expanded-scripture-draggable-handle">
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
  },
  progressRoot: {
    color: 'var(--accent-color-dark)',
  },
  progressSvg: {
    margin: '5px'
  },
  paperRoot: {
    margin: '0px'
  }
};

class ExpandedScripturePaneModal extends Component {
  constructor(props) {
    super(props);
    this.handleEditTargetVerse = this.handleEditTargetVerse.bind(this);
    this.handleEditorCancel = this.handleEditorCancel.bind(this);
    this.handleEditorSubmit = this.handleEditorSubmit.bind(this);
    this.state = {
      editVerse: null
    };
  }

  componentDidCatch(error, info) {
    console.error(error, info);
  }

 /**
   * Handles events to edit the target verse
   * @param bibleId
   * @param chapter
   * @param verse
   * @param verseText
   */
  handleEditTargetVerse(bibleId, chapter, verse, verseText) {
    this.setState({
      editVerse: {
        bibleId,
        chapter,
        verse,
        verseText
      }
    });
  }

  handleEditorSubmit(originalVerse, newVerse, reasons) {
    const { editTargetVerse } = this.props;
    const {editVerse} = this.state;
    if(editVerse === null) return;
    const {chapter, verse} = editVerse;
    if(typeof editTargetVerse === 'function') {
      editTargetVerse(chapter, verse, originalVerse, newVerse, reasons);
    } else {
      console.warn('Unable to edit verse. Callback is not a function.');
    }
    this.setState({
      editVerse: null
    });
  }

  handleEditorCancel() {
    this.setState({
      editVerse: null
    });
  }

  render() {
    const {
      show,
      onHide,
      title,
      contextId,
      currentPaneSettings,
      editTargetVerse,
      translate,
      projectDetailsReducer,
      bibles,
      selections,
      getLexiconData,
      showPopover,
      classes,
    } = this.props;
    const { editVerse } = this.state;

    return (
      <Dialog
        open={show}
        onClose={onHide}
        fullWidth
        maxWidth='md'
        PaperComponent={PaperComponent}
        PaperProps={{ className: classes.paperRoot}}
        aria-labelledby="draggable-expanded-scripture-pane"
      >
        <Toolbar style={styles.toolBar} className="expanded-scripture-draggable-handle">
          <div style={styles.title}>
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
            editVerse={editVerse}
            editTargetVerse={editTargetVerse}
            projectDetailsReducer={projectDetailsReducer}
            currentPaneSettings={currentPaneSettings}
            handleEditTargetVerse={this.handleEditTargetVerse}
            handleEditorSubmit={this.handleEditorSubmit}
            handleEditorCancel={this.handleEditorCancel}
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
}

ExpandedScripturePaneModal.propTypes = {
  show: PropTypes.bool.isRequired,
  onHide: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  primaryLabel: PropTypes.string.isRequired,
  contextId: PropTypes.object.isRequired,
  currentPaneSettings: PropTypes.array.isRequired,
  editTargetVerse: PropTypes.func.isRequired,
  translate: PropTypes.func.isRequired,
  projectDetailsReducer: PropTypes.object.isRequired,
  bibles: PropTypes.object.isRequired,
  selections: PropTypes.array.isRequired,
  getLexiconData: PropTypes.func.isRequired,
  showPopover: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ExpandedScripturePaneModal);
