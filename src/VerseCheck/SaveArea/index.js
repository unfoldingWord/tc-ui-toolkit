/* eslint-disable non-constant-condition */
import React from 'react';
import PropTypes from 'prop-types';
import {Glyphicon} from 'react-bootstrap';
import '../VerseCheck.styles.css';

let SaveArea = ({
  actions,
  selections,
  translate
}) => {

  const handleNext = () => {
    selections.length > 0 ? actions.handleGoToNext() : actions.handleOpenDialog("next");
  };

  const handlePrevious = () => {
    selections.length > 0 ? actions.handleGoToPrevious() : actions.handleOpenDialog("previous");
  };

  return (
    <div className='saveArea'>
      <button className='btn-second'
              onClick={handlePrevious}
      >
        <Glyphicon glyph='share-alt' style={{marginRight: '10px', transform: 'scaleX(-1)'}} />
        {translate("save_previous")}
      </button>
      <button className='btn-prime'
              onClick={handleNext}
      >
        {translate("save_continue")}
        <Glyphicon glyph='share-alt' style={{marginLeft: '10px'}} />
      </button>
    </div>
  );
};

SaveArea.propTypes = {
  translate: PropTypes.func.isRequired,
  actions: PropTypes.shape({
    handleGoToNext: PropTypes.func,
    handleGoToPrevious: PropTypes.func,
    handleOpenDialog: PropTypes.func
  }).isRequired,
  selections: PropTypes.array,
  goToNextOrPrevious: PropTypes.string,
  skipToPrevious: PropTypes.func,
  skipToNext: PropTypes.func,
  handleClose: PropTypes.func
};

export default SaveArea;
