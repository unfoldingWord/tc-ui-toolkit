/* eslint-disable no-unused-expressions */
import React from 'react';
import PropTypes from 'prop-types';
import { Glyphicon } from 'react-bootstrap';
import './SaveArea.styles.css';

const SaveArea = ({
  translate,
  selections,
  nothingToSelect,
  handleGoToNext,
  handleGoToPrevious,
  handleOpenDialog,
}) => {
  const handleNext = () => {
    selections.length > 0 || nothingToSelect ? handleGoToNext() : handleOpenDialog('next');
  };

  const handlePrevious = () => {
    selections.length > 0 || nothingToSelect ? handleGoToPrevious() : handleOpenDialog('previous');
  };

  return (
    <div className='save-area'>
      <button className='btn-second'
        onClick={handlePrevious}
      >
        <Glyphicon glyph='share-alt' style={{ marginRight: '10px', transform: 'scaleX(-1)' }} />
        {translate('save_previous')}
      </button>
      <button className='btn-prime'
        onClick={handleNext}
      >
        {translate('save_continue')}
        <Glyphicon glyph='share-alt' style={{ marginLeft: '10px' }} />
      </button>
    </div>
  );
};

SaveArea.propTypes = {
  translate: PropTypes.func.isRequired,
  selections: PropTypes.array.isRequired,
  nothingToSelect: PropTypes.bool.isRequired,
  handleGoToNext: PropTypes.func.isRequired,
  handleGoToPrevious: PropTypes.func.isRequired,
  handleOpenDialog: PropTypes.func.isRequired,
};

export default SaveArea;
