import React from 'react';
import PropTypes from 'prop-types';
import '../VerseCheck.styles.css';
// components
import RenderSelectionTextComponent from '../RenderSelectionTextComponent';

const SelectionArea = ({
  translate,
  mode,
  reference,
  verseText,
  selections,
  maximumSelections,
  openAlertDialog,
  changeSelectionsInLocalState,
  bookDetails,
  targetLanguageDetails,
  targetLanguageFont,
}) => {
  const { book, direction: languageDirection } = targetLanguageDetails;
  const bookName = book && book.name ? book.name : bookDetails.name;
  const languageName = targetLanguageDetails.name || null;

  return (
    <div className='selection-area-root'>
      <div className='verse-title'>
        <div className='pane' style={{ display: 'flex', flexDirection: 'column' }}>
          <span className='verse-title-title'>
            {languageName}
          </span>
          <span className='verse-title-subtitle'>
            {bookName} {reference.chapter + ':' + reference.verse}
          </span>
        </div>
      </div>
      <div style={{ overflow: 'auto' }}>
        <div className={languageDirection === 'ltr' ? 'ltr-content' : 'rtl-content'}>
          <RenderSelectionTextComponent
            mode={mode}
            translate={translate}
            verseText={verseText}
            selections={selections}
            openAlertDialog={openAlertDialog}
            maximumSelections={maximumSelections}
            targetLanguageFont={targetLanguageFont}
            changeSelectionsInLocalState={changeSelectionsInLocalState}
          />
        </div>
      </div>
    </div>
  );
};


SelectionArea.propTypes = {
  reference: PropTypes.object.isRequired,
  mode: PropTypes.string.isRequired,
  verseText: PropTypes.string.isRequired,
  selections: PropTypes.array.isRequired,
  translate: PropTypes.func.isRequired,
  maximumSelections: PropTypes.number.isRequired,
  changeSelectionsInLocalState: PropTypes.func.isRequired,
  openAlertDialog: PropTypes.func.isRequired,
  bookDetails: PropTypes.object.isRequired,
  targetLanguageDetails: PropTypes.object.isRequired,
  targetLanguageFont: PropTypes.string,
};

export default SelectionArea;
