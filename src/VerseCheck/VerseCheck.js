/* eslint-disable indent */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ActionsArea from './ActionsArea';
import CheckArea from './CheckArea';
import SaveArea from './SaveArea';
import DialogComponent from './DialogComponent';
import IconIndicators from './IconIndicators';

import './VerseCheck.styles.css';

class VerseCheck extends Component {
  render() {
    const {
      translate,
      alignedGLText,
      verseText,
      unfilteredVerseText,
      mode,
      dialogModalVisibility,
      commentChanged,
      tags,
      verseChanged,
      saveSelection,
      cancelSelection,
      clearSelection,
      handleSkip,
      toggleNothingToSelect,
      localNothingToSelect,
      maximumSelections,
      selections,
      newSelections,
      nothingToSelect,
      verseEdited,
      commentText,
      bookmarkEnabled,
      isVerseInvalidated,
      contextId,
      targetBible,
      handleCloseDialog,
      handleGoToNext,
      handleGoToPrevious,
      handleOpenDialog,
      openAlertDialog,
      changeSelectionsInLocalState,
      toggleReminder,
      changeMode,
      cancelEditVerse,
      saveEditVerse,
      handleComment,
      cancelComment,
      saveComment,
      bookDetails,
      targetLanguageDetails,
      handleTagsCheckbox,
      handleEditVerse,
      hasVerseChanged,
      hasCommentChanged,
      validateSelections,
    } = this.props;

    let titleText;
    let saveArea;

    switch (mode) {
      case 'edit':
        titleText = translate('edit_verse');
        saveArea = <div />;
        break;
      case 'comment':
        titleText = translate('comment');
        saveArea = <div />;
        break;
      case 'select':
        titleText = translate('select');
        saveArea = <div />;
        break;
      default:
        titleText = translate('step2_check');
        saveArea = (
          <SaveArea
            translate={translate}
            selections={selections}
            nothingToSelect={nothingToSelect}
            handleGoToNext={handleGoToNext}
            handleGoToPrevious={handleGoToPrevious}
            handleOpenDialog={handleOpenDialog}
          />
        );
    }

    return (
      <div className='verse-check'>
        <div className='verse-check-flex'>
          <div className='verse-check-card'>
            <div className='title-bar'>
              <span>{titleText}</span>
              <IconIndicators
                verseEdited={verseEdited}
                selections={selections}
                comment={commentText}
                bookmarkEnabled={bookmarkEnabled}
                translate={translate}
                nothingToSelect={nothingToSelect}
                invalidated={isVerseInvalidated}
              />
            </div>
            <CheckArea
              mode={mode}
              tags={tags}
              verseText={verseText}
              unfilteredVerseText={unfilteredVerseText}
              verseChanged={verseChanged}
              comment={commentText}
              newSelections={newSelections}
              selections={selections}
              translate={translate}
              nothingToSelect={nothingToSelect}
              targetLanguageDetails={targetLanguageDetails}
              bookDetails={bookDetails}
              contextId={contextId}
              targetBible={targetBible}// TODO:
              alignedGLText={alignedGLText}
              invalidated={isVerseInvalidated}
              maximumSelections={maximumSelections}
              handleComment={handleComment}
              openAlertDialog={openAlertDialog}
              handleEditVerse={handleEditVerse}
              hasVerseChanged={hasVerseChanged}
              hasCommentChanged={hasCommentChanged}
              handleTagsCheckbox={handleTagsCheckbox}
              validateSelections={validateSelections}
              changeSelectionsInLocalState={changeSelectionsInLocalState}
            />
            <ActionsArea
              mode={mode}
              tags={tags}
              toggleNothingToSelect={toggleNothingToSelect}
              localNothingToSelect={localNothingToSelect}
              nothingToSelect={nothingToSelect}
              commentChanged={commentChanged}
              selections={selections}
              newSelections={newSelections}
              translate={translate}
              bookmarkEnabled={bookmarkEnabled}
              saveSelection={saveSelection}
              cancelSelection={cancelSelection}
              clearSelection={clearSelection}
              toggleReminder={toggleReminder}
              changeMode={changeMode}
              cancelEditVerse={cancelEditVerse}
              saveEditVerse={saveEditVerse}
              cancelComment={cancelComment}
              saveComment={saveComment}
            />
          </div>
          {saveArea}
        </div>
        <DialogComponent
          handleSkip={handleSkip}
          dialogModalVisibility={dialogModalVisibility}
          handleClose={handleCloseDialog}
          translate={translate} />
      </div>
    );
  }
}


VerseCheck.propTypes = {
  translate: PropTypes.func.isRequired,
  mode: PropTypes.string.isRequired,
  tags: PropTypes.array.isRequired,
  selections: PropTypes.array.isRequired,
  newSelections: PropTypes.array.isRequired,
  nothingToSelect: PropTypes.bool.isRequired,
  verseEdited: PropTypes.bool.isRequired,
  commentText: PropTypes.string.isRequired,
  bookmarkEnabled: PropTypes.bool.isRequired,
  isVerseInvalidated: PropTypes.bool.isRequired,
  contextId: PropTypes.object.isRequired,
  targetBible: PropTypes.object.isRequired,
  bookDetails: PropTypes.object.isRequired,
  targetLanguageDetails: PropTypes.object.isRequired,
  alignedGLText: PropTypes.string.isRequired,
  commentChanged: PropTypes.bool.isRequired,
  verseChanged: PropTypes.bool.isRequired,
  verseText: PropTypes.string.isRequired,
  unfilteredVerseText: PropTypes.string.isRequired,
  dialogModalVisibility: PropTypes.bool.isRequired,
  localNothingToSelect: PropTypes.bool.isRequired,
  maximumSelections: PropTypes.number.isRequired,
  handleCloseDialog: PropTypes.func.isRequired,
  handleGoToNext: PropTypes.func.isRequired,
  handleGoToPrevious: PropTypes.func.isRequired,
  handleOpenDialog: PropTypes.func.isRequired,
  openAlertDialog: PropTypes.func.isRequired,
  toggleReminder: PropTypes.func.isRequired,
  changeMode: PropTypes.func.isRequired,
  cancelEditVerse: PropTypes.func.isRequired,
  saveEditVerse: PropTypes.func.isRequired,
  handleComment: PropTypes.func.isRequired,
  cancelComment: PropTypes.func.isRequired,
  saveComment: PropTypes.func.isRequired,
  toggleNothingToSelect: PropTypes.func.isRequired,
  saveSelection: PropTypes.func.isRequired,
  cancelSelection: PropTypes.func.isRequired,
  clearSelection: PropTypes.func.isRequired,
  handleSkip: PropTypes.func.isRequired,
  handleEditVerse: PropTypes.func.isRequired,
  hasVerseChanged: PropTypes.func.isRequired,
  hasCommentChanged: PropTypes.func.isRequired,
  validateSelections: PropTypes.func.isRequired,
  handleTagsCheckbox: PropTypes.func.isRequired,
  changeSelectionsInLocalState: PropTypes.func.isRequired,
};

VerseCheck.defaultProps = {
  translate: key => key,
  verseText: '',
  unfilteredVerseText: '',
  commentText: '',
};

export default VerseCheck;
