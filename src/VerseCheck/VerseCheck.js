/**
 * This component displays the Verse so selection, edit and comments can be made.
 */
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import usfmjs from 'usfm-js';
import './VerseCheck.styles.css';
import { MuiThemeProvider, createMuiTheme} from 'material-ui/styles';
import {optimizeSelections, normalizeString} from './utils/selectionHelpers';
import isEqual from 'deep-equal';
import CheckArea from './CheckArea';
import ActionsArea from './ActionsArea';
import SaveArea from './SaveArea';
import DialogComponent from './DialogComponent';
import IconIndicators from './IconIndicators';
//helpers
import * as checkAreaHelpers from './helpers/checkAreaHelpers';

class VerseCheck extends Component {
  constructor(props) {
    super(props);
    let verseText = usfmjs.removeMarker(this.verseText());
    const mode = props.selectionsReducer.selections.length > 0 || verseText.length === 0 ? 'default' : 'select';
    this.state = {
      mode: mode,
      comment: undefined,
      commentChanged: false,
      verseText: undefined,
      verseChanged: false,
      selections: [],
      tags: [],
      dialogModalVisibility: false,
      goToNextOrPrevious: null
    };
    this.saveSelection = this.saveSelection.bind(this);
    this.cancelSelection = this.cancelSelection.bind(this);
    this.clearSelection = this.clearSelection.bind(this);
    this.handleSkip = this.handleSkip.bind(this);

    let _this = this;

    this.tagList = [
      ["spelling", "Spelling"],
      ["punctuation", "Punctuation"],
      ["grammar", "Grammar"],
      ["meaning", "Meaning"],
      ["wordChoice", "Word Choice"],
      ["other", "Other"]
    ];

    this.actions = {
      handleGoToNext() {
        if (!_this.props.loginReducer.loggedInUser) {
          _this.props.actions.selectModalTab(1, 1, true);
          _this.props.actions.openAlertDialog("You must be logged in to save progress");
          return;
        }
        props.actions.goToNext();
      },
      handleGoToPrevious() {
        if (!_this.props.loginReducer.loggedInUser) {
          _this.props.actions.selectModalTab(1, 1, true);
          _this.props.actions.openAlertDialog("You must be logged in to save progress");
          return;
        }
        props.actions.goToPrevious();
      },
      handleOpenDialog(goToNextOrPrevious) {
        _this.setState({goToNextOrPrevious});
        _this.setState({dialogModalVisibility: true});
      },
      handleCloseDialog() {
        _this.setState({dialogModalVisibility: false});
      },
      skipToNext() {
        _this.setState({dialogModalVisibility: false});
        props.actions.goToNext();
      },
      skipToPrevious() {
        _this.setState({dialogModalVisibility: false});
        props.actions.goToPrevious();
      },
      changeSelectionsInLocalState(selections) {
        _this.setState({selections});
      },
      changeMode(mode) {
        _this.setState({
          mode: mode,
          selections: _this.props.selectionsReducer.selections
        });
      },
      handleComment(e) {
        const comment = e.target.value;
        _this.setState({
          comment: comment
        });
      },
      checkComment(e) {
        const newcomment = e.target.value || "";
        const oldcomment = _this.props.commentsReducer.text || "";
        _this.setState({
          commentChanged: newcomment !== oldcomment
        });
      },
      cancelComment() {
        _this.setState({
          mode: 'default',
          selections: _this.props.selectionsReducer.selections,
          comment: undefined,
          commentChanged: false
        });
      },
      saveComment() {
        if (!_this.props.loginReducer.loggedInUser) {
          _this.props.actions.selectModalTab(1, 1, true);
          _this.props.actions.openAlertDialog("You must be logged in to leave a comment", 5);
          return;
        }
        _this.props.actions.addComment(_this.state.comment, _this.props.loginReducer.userdata.username);
        _this.setState({
          mode: 'default',
          selections: _this.props.selectionsReducer.selections,
          comment: undefined,
          commentChanged: false
        });
      },
      handleTagsCheckbox(tag) {
        let newState = _this.state;
        if (newState.tags === undefined) newState.tags = [];
        if (!newState.tags.includes(tag)) {
          newState.tags.push(tag);
        } else {
          newState.tags = newState.tags.filter(_tag => _tag !== tag);
        }
        _this.setState(newState);
      },
      handleEditVerse(e) {
        const verseText = e.target.value;
        _this.setState({
          verseText: verseText
        });
      },
      checkVerse(e) {
        let {chapter, verse} = _this.props.contextIdReducer.contextId.reference;
        const newverse = e.target.value || "";
        const oldverse = _this.props.resourcesReducer.bibles.targetLanguage.targetBible[chapter][verse] || "";
        if (newverse === oldverse) {
          _this.setState({
            verseChanged: false,
            tags: []
          });
        } else {
          _this.setState({
            verseChanged: true
          });
        }
      },
      cancelEditVerse() {
        _this.setState({
          mode: 'default',
          selections: _this.props.selectionsReducer.selections,
          verseText: undefined,
          verseChanged: false,
          tags: []
        });
      },
      saveEditVerse() {
        let {loginReducer, actions, contextIdReducer, resourcesReducer} = _this.props;
        let {chapter, verse} = contextIdReducer.contextId.reference;
        let before = resourcesReducer.bibles.targetLanguage.targetBible[chapter][verse];
        let username = loginReducer.userdata.username;
        // verseText state is undefined if no changes are made in the text box.
        if (!loginReducer.loggedInUser) {
          _this.props.actions.selectModalTab(1, 1, true);
          _this.props.actions.openAlertDialog("You must be logged in to edit a verse");
          return;
        }

        const save = () => {
          actions.editTargetVerse(chapter, verse, before, _this.state.verseText, _this.state.tags, username);
          _this.setState({
            mode: 'default',
            selections: _this.props.selectionsReducer.selections,
            verseText: undefined,
            verseChanged: false,
            tags: []
          });
        };
        if (_this.state.verseText) {  // if verseText === "" is false
          save();
        } else {
          // alert the user if the text is blank
          let message = 'You are saving a blank verse. Please confirm.';
          _this.props.actions.openOptionDialog(message, (option) => {
            if (option !== "Cancel") save();
            _this.props.actions.closeAlertDialog();
          }, "Save Blank Verse", "Cancel");
        }
      },
      validateSelections(verseText) {
        _this.props.actions.validateSelections(verseText);
      },
      toggleReminder() {
        _this.props.actions.toggleReminder(_this.props.loginReducer.userdata.username);
      },
      openAlertDialog(message) {
        _this.props.actions.openAlertDialog(message);
      },
      selectModalTab(tab, section, vis) {
        _this.props.actions.selectModalTab(tab, section, vis);
      }
    };
  }

  componentWillMount() {
    let selections = Array.from(this.props.selectionsReducer.selections);
    this.setState({selections});
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.contextIdReducer.contextId != this.props.contextIdReducer.contextId) {
      let selections = Array.from(nextProps.selectionsReducer.selections);
      const {chapter, verse} = nextProps.contextIdReducer.contextId.reference || {};
      const {targetBible} = nextProps.resourcesReducer.bibles.targetLanguage || {};
      let verseText = targetBible && targetBible[chapter] ? targetBible[chapter][verse] : "";
      if (Array.isArray(verseText)) verseText = verseText[0];
      // normalize whitespace in case selection has contiguous whitespace _this isn't captured
      verseText = normalizeString(verseText);
      const mode = nextProps.selectionsReducer.selections.length > 0 || verseText.length === 0 ? 'default' : 'select';
      this.setState({
        mode: mode,
        comments: undefined,
        verseText: undefined,
        selections,
        tags: []
      });
    }
  }

  cancelSelection() {
    this.actions.changeSelectionsInLocalState(this.props.selectionsReducer.selections);
    this.actions.changeMode('default');
  }

  clearSelection() {
    this.setState({
      selections: []
    });
  }

  saveSelection() {
    let verseText = this.verseText();
    // optimize the selections to address potential issues and save
    let selections = optimizeSelections(verseText, this.state.selections);
    this.props.actions.changeSelections(selections, this.props.loginReducer.userdata.username);
    this.actions.changeMode('default');
  }

  verseText() {
    const {chapter, verse, bookId} = this.props.contextIdReducer.contextId.reference;
    const bookAbbr = this.props.projectDetailsReducer.manifest.project.id;
    const {targetBible} = this.props.resourcesReducer.bibles.targetLanguage;
    let verseText = "";
    if (targetBible && targetBible[chapter] && bookId == bookAbbr) {
      verseText = targetBible && targetBible[chapter] ? targetBible[chapter][verse] : "";
      if (Array.isArray(verseText)) verseText = verseText[0];
      // normalize whitespace in case selection has contiguous whitespace _this isn't captured
      verseText = normalizeString(verseText);
    }
    return verseText;
  }


  findIfVerseEdited() {
    const {contextIdReducer: {contextId}, groupsDataReducer: {groupsData}} = this.props;
    let result = false;

    if (groupsData[contextId.groupId]) {
      let groupData = groupsData[contextId.groupId].filter(groupData => {
        return isEqual(groupData.contextId, contextId);
      });
      result = groupData[0].verseEdits;
    }
    return result;
  }

  handleSkip(e) {
    e.preventDefault();
    if (this.state.goToNextOrPrevious == "next") {
      this.actions.skipToNext();
    } else if (this.state.goToNextOrPrevious == "previous") {
      this.actions.skipToPrevious();
    }
  }

  render() {
    const verseText = usfmjs.removeMarker(this.verseText());
    const {
      translate,
      commentsReducer,
      remindersReducer,
      projectDetailsReducer,
      contextIdReducer,
      resourcesReducer,
      selectionsReducer,
      alignedGLText
    } = this.props;

    let titleText;
    let saveArea;
    switch (this.state.mode) {
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
            actions={this.actions}
            selections={selectionsReducer.selections}
            translate={translate} />);
    }
    // material-ui-theme, new color themes could be added here in the future
    const theme = createMuiTheme();
    return (
      <MuiThemeProvider theme={theme}>
        <div className='verseCheck'>
          <div style={{display: 'flex', flexDirection: 'column', height: '100%', width:'100%'}}>
            <div className='verseCheckCard'>
              <div className='titleBar'>
                <span>{titleText}</span>
                <IconIndicators
                  verseEdited={this.findIfVerseEdited()}
                  selections={selectionsReducer.selections}
                  comment={commentsReducer.text}
                  bookmarkEnabled={remindersReducer.enabled}
                  translate={translate} />
              </div>
              <CheckArea
                actions={this.actions}
                mode={this.state.mode}
                tags={this.state.tags}
                verseText={verseText}
                verseChanged={this.state.verseChanged}
                comment={commentsReducer.text}
                newSelections={this.state.selections}
                selections={selectionsReducer.selections}
                translate={translate}
                projectDetailsReducer={projectDetailsReducer}
                contextId={contextIdReducer.contextId}
                bibles={resourcesReducer.bibles}
                alignedGLText={alignedGLText} />
              <ActionsArea
                mode={this.state.mode}
                tags={this.state.tags}
                actions={this.actions}
                commentChanged={this.state.commentChanged}
                selections={selectionsReducer.selections}
                newSelections={this.state.selections}
                remindersReducer={remindersReducer}
                saveSelection={this.saveSelection}
                cancelSelection={this.cancelSelection}
                clearSelection={this.clearSelection}
                translate={translate} />
            </div>
            {saveArea}
          </div>
          <DialogComponent
            handleSkip={this.handleSkip}
            dialogModalVisibility={this.state.dialogModalVisibility}
            handleClose={this.actions.handleCloseDialog}
            translate={translate} />
        </div>
      </MuiThemeProvider>
    );
  }
}

VerseCheck.propTypes = {
  alignedGLText: PropTypes.string.isRequired,
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

export default VerseCheck;
