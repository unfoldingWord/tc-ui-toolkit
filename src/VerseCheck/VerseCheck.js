/**
 * component displays the Verse so selection, edit and comments can be made.
 */
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './VerseCheck.styles.css';
import {MuiThemeProvider, createMuiTheme} from '@material-ui/core/styles';
import ActionsArea from './ActionsArea';
import CheckArea from './CheckArea';
import SaveArea from './SaveArea';
import DialogComponent from './DialogComponent';
import IconIndicators from './IconIndicators';

class VerseCheck extends Component {
  render() {
    const {
      translate,
      commentsReducer,
      remindersReducer,
      projectDetailsReducer,
      contextIdReducer,
      resourcesReducer,
      selectionsReducer,
      alignedGLText,
      verseText,
      mode,
      actions,
      dialogModalVisibility,
      commentChanged,
      findIfVerseEdited,
      tags,
      verseChanged,
      selections,
      saveSelection,
      cancelSelection,
      clearSelection,
      handleSkip
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
            actions={actions}
            selections={selectionsReducer.selections}
            translate={translate} />);
    }
    // material-ui-theme, new color themes could be added here in the future
    const theme = createMuiTheme();
    return (
      <MuiThemeProvider theme={theme}>
        <div className='verse-check'>
        <div style={{display: 'flex', flexDirection: 'column', height: '100%', width:'100%'}}>
            <div className='verse-check-card'>
              <div className='title-bar'>
                <span>{titleText}</span>
                <IconIndicators
                  verseEdited={findIfVerseEdited()}
                  selections={selectionsReducer.selections}
                  comment={commentsReducer.text}
                  bookmarkEnabled={remindersReducer.enabled}
                  translate={translate} />
              </div>
              <CheckArea
                actions={actions}
                mode={mode}
                tags={tags}
                verseText={verseText}
                verseChanged={verseChanged}
                comment={commentsReducer.text}
                newSelections={selections}
                selections={selectionsReducer.selections}
                translate={translate}
                projectDetailsReducer={projectDetailsReducer}
                contextId={contextIdReducer.contextId}
                bibles={resourcesReducer.bibles}
                alignedGLText={alignedGLText} />
              <ActionsArea
                mode={mode}
                tags={tags}
                actions={actions}
                commentChanged={commentChanged}
                selections={selectionsReducer.selections}
                newSelections={selections}
                remindersReducer={remindersReducer}
                saveSelection={saveSelection}
                cancelSelection={cancelSelection}
                clearSelection={clearSelection}
                translate={translate} />
            </div>
            {saveArea}
          </div>
          <DialogComponent
            handleSkip={handleSkip}
            dialogModalVisibility={dialogModalVisibility}
            handleClose={actions.handleCloseDialog}
            translate={translate} />
        </div>
      </MuiThemeProvider>
    );
  }
}

VerseCheck.propTypes = {
  alignedGLText: PropTypes.string.isRequired,
  commentChanged: PropTypes.bool.isRequired,
  findIfVerseEdited: PropTypes.func.isRequired,
  tags: PropTypes.array.isRequired,
  verseChanged: PropTypes.bool.isRequired,
  selections: PropTypes.array.isRequired,
  saveSelection: PropTypes.func.isRequired,
  cancelSelection: PropTypes.func.isRequired,
  clearSelection: PropTypes.func.isRequired,
  handleSkip: PropTypes.func.isRequired,
  verseText: PropTypes.string,
  remindersReducer: PropTypes.object.isRequired,
  groupsDataReducer: PropTypes.object.isRequired,
  toolsReducer: PropTypes.object.isRequired,
  translate: PropTypes.func.isRequired,
  actions: PropTypes.object.isRequired,
  contextIdReducer: PropTypes.shape({
    contextId: PropTypes.object
  }).isRequired,
  selectionsReducer: PropTypes.object.isRequired,
  commentsReducer: PropTypes.object.isRequired,
  resourcesReducer: PropTypes.object.isRequired,
  loginReducer: PropTypes.object.isRequired,
  projectDetailsReducer: PropTypes.object.isRequired,
};

VerseCheck.defaultProps = {
  contextIdReducer: {
    contextId: {
      reference: {
        chapter: 1,
        verse: 1,
        bookId: 'tit'
      }
    }
  },
  projectDetailsReducer: {
    manifest: {
      project: {
        id: 'tit'
      },
      target_language: {
        direction: 'ltr'
      }
    },
    currentProjectToolsSelectedGL: {
      tw: 'en'
    }
  },
  resourcesReducer: {
    bibles: {
      targetLanguage: {
        targetBible: {
          1: {1: ''}
        }
      }
    }
  },
  selectionsReducer: {
    selections: []
  },
  toolsReducer: {
    currentToolName: 'tw'
  },
  translate: key => key,
  groupsDataReducer: {
    groupsData: {}
  },
  commentsReducer: {
    text: ''
  },
  remindersReducer: {
    enabled: false
  },
  actions: {
    handleGoToNext: () => {},
    handleGoToPrevious: () => {},
    handleOpenDialog: () => {},
    handleCloseDialog: () => {},
    skipToNext: () => {},
    skipToPrevious: () => {},
    changeSelectionsInLocalState: () => {},
    changeMode: () => {},
    handleComment: () => {},
    checkComment: () => {},
    cancelComment: () => {},
    saveComment: () => {},
    handleTagsCheckbox: () => {},
    handleEditVerse: () => {},
    checkVerse: () => {},
    cancelEditVerse: () => {},
    saveEditVerse: () => {},
    validateSelections: () => {},
    toggleReminder: () => {},
    openAlertDialog: () => {},
    selectModalTab: () => {},
  },
  loginReducer: {},
  alignedGLText: '',
  mode: 'select',
  commentChanged: false,
  findIfVerseEdited: () => false,
  tags: [],
  verseChanged: false,
  selections: [],
  saveSelection: () => {},
  cancelSelection: () => {},
  clearSelection: () => {},
  handleSkip: () => {},
  verseText: '',
  dialogModalVisibility: false
};

export default VerseCheck;
