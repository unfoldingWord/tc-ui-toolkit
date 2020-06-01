import React from 'react';
import PropTypes from 'prop-types';
import '../VerseCheck.styles.css';
// components
import RenderSelectionTextComponent from '../RenderSelectionTextComponent';
import {
  getReferenceStr,
  getTitleStr,
  isLTR,
} from '../..';

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
  const refStr = getReferenceStr(reference.chapter, reference.verse);
  const title = getTitleStr(bookName, refStr);
  const isLTR_ = isLTR(languageDirection);
  const style = { display: 'flex', flexDirection: 'column' };

  if (!isLTR_) { // for RTL
    style.justifyContent = 'right';
    style.width = '100%';
  }

  return (
    <div className='selection-area-root'>
      <div className='verse-title'>
        <div className='pane' style={style}>
          <span className='verse-title-title'>
            {languageName}
          </span>
          <span className='verse-title-subtitle'>
            {title}
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
