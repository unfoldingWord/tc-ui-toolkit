import React from 'react';
import PropTypes from 'prop-types';
// components
import DefaultArea from '../DefaultArea';
import SelectionArea from '../SelectionArea';
import InstructionsArea from '../InstructionsArea';
import EditVerseArea from '../EditVerseArea';
import CommentArea from '../CommentArea';
import './CheckArea.styles.css';

const CheckArea = ({
  contextId,
  mode,
  tags,
  verseText,
  unfilteredVerseText,
  isVerseChanged,
  comment,
  newSelections,
  selections,
  translate,
  invalidated,
  targetBible,
  alignedGLText,
  nothingToSelect,
  maximumSelections,
  handleTagsCheckbox,
  handleEditVerse,
  checkIfVerseChanged,
  handleComment,
  checkIfCommentChanged,
  openAlertDialog,
  changeSelectionsInLocalState,
  validateSelections,
  bookDetails,
  targetLanguageDetails,
  targetLanguageFont,
}) => {
  let modeArea;
  const { direction: languageDirection = 'ltr' } = targetLanguageDetails || {};

  switch (mode) {
  case 'edit':
    modeArea = (
      <EditVerseArea
        tags={tags}
        verseText={unfilteredVerseText}
        isVerseChanged={isVerseChanged}
        handleTagsCheckbox={handleTagsCheckbox}
        handleEditVerse={handleEditVerse}
        checkIfVerseChanged={checkIfVerseChanged}
        languageDirection={languageDirection}
        translate={translate}
        targetLanguageFont={targetLanguageFont}
      />
    );
    break;
  case 'comment':
    modeArea = (
      <CommentArea
        comment={comment}
        translate={translate}
        handleComment={handleComment}
        checkIfCommentChanged={checkIfCommentChanged}
      />
    );
    break;
  case 'select':
    modeArea = (
      <div style={{
        WebkitUserSelect: 'none', display: 'flex', flex: '1', justifyContent: 'center', alignItems: 'center', overflow: 'auto',
      }}>
        <InstructionsArea
          verseText={verseText}
          selections={selections}
          alignedGLText={alignedGLText}
          mode={mode}
          translate={translate}
          invalidated={invalidated}
          targetLanguageFont={targetLanguageFont}
        />
      </div>);
    break;
  case 'default':
  default:
    modeArea = (
      <div style={{
        WebkitUserSelect: 'none', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%',
      }}>
        <InstructionsArea
          dontShowTranslation={true}
          verseText={verseText}
          selections={selections}
          alignedGLText={alignedGLText}
          translate={translate}
          invalidated={invalidated}
          nothingToSelect={nothingToSelect}
          targetLanguageFont={targetLanguageFont}
        />
      </div>
    );
  }

  return (
    <div className='check-area'>
      {mode === 'select' ?
        <SelectionArea
          mode={mode}
          translate={translate}
          verseText={verseText}
          bookDetails={bookDetails}
          targetBible={targetBible}
          selections={newSelections}
          reference={contextId.reference}
          openAlertDialog={openAlertDialog}
          maximumSelections={maximumSelections}
          changeSelectionsInLocalState={changeSelectionsInLocalState}
          targetLanguageDetails={targetLanguageDetails}
          targetLanguageFont={targetLanguageFont}
        />
        :
        <DefaultArea
          reference={contextId.reference}
          translate={translate}
          verseText={verseText}
          selections={selections}
          targetBible={targetBible}
          validateSelections={validateSelections}
          bookDetails={bookDetails}
          targetLanguageDetails={targetLanguageDetails}
          targetLanguageFont={targetLanguageFont}
        />
      }
      <div style={{
        borderLeft: '1px solid var(--border-color)', flex: 1, overflowY: 'auto', display: 'flex', justifyContent: 'center',
      }}>
        {modeArea}
      </div>
    </div>
  );
};

CheckArea.propTypes = {
  translate: PropTypes.func.isRequired,
  mode: PropTypes.string.isRequired,
  tags: PropTypes.array.isRequired,
  invalidated: PropTypes.bool.isRequired,
  verseText: PropTypes.string.isRequired,
  unfilteredVerseText: PropTypes.string.isRequired,
  isVerseChanged: PropTypes.bool.isRequired,
  comment: PropTypes.string.isRequired,
  contextId: PropTypes.object.isRequired,
  selections: PropTypes.array.isRequired,
  newSelections: PropTypes.array.isRequired,
  targetBible: PropTypes.object.isRequired,
  alignedGLText: PropTypes.string.isRequired,
  nothingToSelect: PropTypes.bool.isRequired,
  maximumSelections: PropTypes.number.isRequired,
  bookDetails: PropTypes.object.isRequired,
  targetLanguageDetails: PropTypes.object.isRequired,
  handleTagsCheckbox: PropTypes.func.isRequired,
  handleEditVerse: PropTypes.func.isRequired,
  handleComment: PropTypes.func.isRequired,
  checkIfVerseChanged: PropTypes.func.isRequired,
  checkIfCommentChanged: PropTypes.func.isRequired,
  openAlertDialog: PropTypes.func.isRequired,
  changeSelectionsInLocalState: PropTypes.func.isRequired,
  validateSelections: PropTypes.func.isRequired,
  targetLanguageFont: PropTypes.string,
};

export default CheckArea;
