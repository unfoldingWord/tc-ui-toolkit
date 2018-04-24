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
}) => {
  return (
    <Dialog open={show} onClose={onHide}>
      <ChapterView />
    </Dialog>
  );
};

ExpandedScripturePaneModal.propTypes = {
  show: PropTypes.bool.isRequired,
  onHide: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  primaryLabel: PropTypes.string.isRequired,
};

export default ExpandedScripturePaneModal;