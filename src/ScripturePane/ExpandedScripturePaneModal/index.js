import React, { Children } from 'react';
import PropTypes from 'prop-types';
import Dialog from 'material-ui/Dialog';
import { Glyphicon } from 'react-bootstrap';

import './ExpandedScripturePaneModal.styles.css';

// components
import ChapterView from './ChapterView';

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
      <ChapterView
        contextId={contextId}
        currentPaneSettings={currentPaneSettings}
        biblesWithHighlightedWords={biblesWithHighlightedWords}
      />
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