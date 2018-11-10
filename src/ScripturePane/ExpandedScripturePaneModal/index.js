import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import { Glyphicon } from 'react-bootstrap';

import './ExpandedScripturePaneModal.styles.css';

// components
import ChapterView from './ChapterView';
import BibleHeadingsRow from './ChapterView/BibleHeadingsRow';
import SpinningLogo from '../../SpinningLogo';
// helpers
// import * as bibleHelpers from '../helpers/bibleHelpers';

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
  },
  progressRoot: {
    color: 'var(--accent-color-dark)',
  },
  progressSvg: {
    margin: '5px'
  }
};

class ExpandedScripturePaneModal extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     biblesWithHighlightedWords: null
  //   };
  // }

  // async componentDidMount() {
  //   const { selections, contextId, getLexiconData, showPopover, bibles, translate } = this.props;

  //   const biblesWithHighlightedWords = await bibleHelpers.getBiblesWithHighlightedWords(
  //     bibles,
  //     selections,
  //     contextId,
  //     getLexiconData,
  //     showPopover,
  //     translate
  //   );

  //   this.setState({ biblesWithHighlightedWords });
  // }

  // componentWillUnmount() {
  //   this.setState({ biblesWithHighlightedWords: null });
  // }

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
    } = this.props;

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
            bibles={bibles}
            currentPaneSettings={currentPaneSettings}
            projectDetailsReducer={projectDetailsReducer} />
          <ChapterView
            bibles={bibles}
            contextId={contextId}
            translate={translate}
            editTargetVerse={editTargetVerse}
            projectDetailsReducer={projectDetailsReducer}
            currentPaneSettings={currentPaneSettings}
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
};

export default ExpandedScripturePaneModal;
