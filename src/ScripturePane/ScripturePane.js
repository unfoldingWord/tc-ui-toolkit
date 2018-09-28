import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {MuiThemeProvider, createMuiTheme, withStyles} from '@material-ui/core/styles';
import isEqual from 'deep-equal';
import {Glyphicon} from 'react-bootstrap';

import './ScripturePane.styles.css';
// components
import CircularProgress from '@material-ui/core/CircularProgress';
import Pane from './Pane';
import ExpandedScripturePaneModal from './ExpandedScripturePaneModal';
import AddBibleButton from './AddBibleButton';
import AddPaneModal from './AddPaneModal';
// helpers
import * as bibleHelpers from './helpers/bibleHelpers';
// constant
const NAMESPACE = 'ScripturePane';

const styles = {
  progressRoot: {
    color: '#ffffff',
  },
  progressSvg: {
    margin: '5px'
  }
};

class ScripturePane extends Component {
  constructor() {
    super();
    this.state = {
      showExpandedScripturePane: false,
      showAddPaneModal: false,
      selectedPane: false,
      biblesWithHighlightedWords: null,
      expandedBiblesWithHighlightedWords: null,
      loadingExpandedScripturePane: false
    };
    this.openExpandedScripturePane = this.openExpandedScripturePane.bind(this);
    this.closeExpandedScripturePane = this.closeExpandedScripturePane.bind(this);
    this.showAddBibleModal = this.showAddBibleModal.bind(this);
    this.hideAddBibleModal = this.hideAddBibleModal.bind(this);
    this.selectSourceLanguage = this.selectSourceLanguage.bind(this);
    this.addNewBibleResource = this.addNewBibleResource.bind(this);
    this.removePane = this.removePane.bind(this);
  }

  componentWillMount() {
    const { selections, contextId, getLexiconData, showPopover, bibles, translate } = this.props;
    const biblesWithHighlightedWords = bibleHelpers.getCurrentVersesWithHighlightedWords(
      bibles,
      selections,
      contextId,
      getLexiconData,
      showPopover,
      translate
    );

    this.setState({biblesWithHighlightedWords});
  }

  componentWillReceiveProps(nextProps) {
    const reParseBibleData = !isEqual(this.props.selections, nextProps.selections) ||
      !isEqual(this.props.contextId, nextProps.contextId) || !isEqual(this.props.bibles, nextProps.bibles);
    if (reParseBibleData) {
      const { selections, contextId, getLexiconData, showPopover, bibles, translate } = nextProps;
      const biblesWithHighlightedWords = bibleHelpers.getBiblesWithHighlightedWords(
        bibles,
        selections,
        contextId,
        getLexiconData,
        showPopover,
        translate
      );
      this.setState({biblesWithHighlightedWords});
    }
  }

   async openExpandedScripturePane() {
    this.setState({ loadingExpandedScripturePane: true});
    const { selections, contextId, getLexiconData, showPopover, bibles, translate } = this.props;
    const expandedBiblesWithHighlightedWords = await bibleHelpers.getBiblesWithHighlightedWords(
      bibles,
      selections,
      contextId,
      getLexiconData,
      showPopover,
      translate
    );
    console.log(expandedBiblesWithHighlightedWords);
    this.setState({ loadingExpandedScripturePane: false});
    this.setState({showExpandedScripturePane: true, expandedBiblesWithHighlightedWords});
  }

  closeExpandedScripturePane() {this.setState({showExpandedScripturePane: false})}

  showAddBibleModal() {this.setState({showAddPaneModal: true})}

  hideAddBibleModal() {this.setState({showAddPaneModal: false})}

  selectSourceLanguage(value) {
    const identifier = value.split('_');
    const selectedBibleId = {
      languageId: identifier[0],
      bibleId: identifier[1]
    };
    this.setState({selectedPane: value ? selectedBibleId : false});
  }

  addNewBibleResource() {
    let {currentPaneSettings, setToolSettings, makeSureBiblesLoadedForTool} = this.props;
    try {
      if (currentPaneSettings) {
        if (this.state.selectedPane) {
          currentPaneSettings.push(this.state.selectedPane);
          setToolSettings(NAMESPACE, 'currentPaneSettings', currentPaneSettings);
          makeSureBiblesLoadedForTool();
          this.hideAddBibleModal();
        }
      }
    } catch (e) {
      console.warn(e);
    }
  }

  removePane(key) {
    let {currentPaneSettings, setToolSettings} = this.props;
    try {
      if (currentPaneSettings) {
        currentPaneSettings.splice(key, 1);
        setToolSettings(NAMESPACE, 'currentPaneSettings', currentPaneSettings);
      }
    } catch (e) {
      console.warn(e);
    }
  }


  getPanes(currentPaneSettings, biblesWithHighlightedWords, contextId, translate) {
    const panes = [];

    for (let i = 0, len = currentPaneSettings.length; i < len; i++) {
      const paneSettings = currentPaneSettings[i];
      const index = i;

      try {
        const {languageId, bibleId} = paneSettings;
        const {
          manifest: {
            language_name,
            direction,
            description,
          },
          bibleData
        } = biblesWithHighlightedWords[languageId][bibleId];
        const {chapter, verse} = contextId.reference;
        const verseElements = bibleData[chapter][verse];

        panes.push(
          <Pane
            key={index.toString()}
            translate={translate}
            index={index}
            chapter={chapter}
            verse={verse}
            bibleId={bibleId}
            languageName={language_name}
            direction={direction}
            description={description}
            verseElements={verseElements}
            clickToRemoveResourceLabel={translate('pane.remove_resource')}
            removePane={this.removePane}
          />
        );
      } catch (err) {
        console.warn(err);
      }
    }

    return panes;
  }

  render() {
    let {
      expandedScripturePaneTitle,
      currentPaneSettings,
      contextId,
      editTargetVerse,
      translate,
      projectDetailsReducer,
      bibles,
      getAvailableScripturePaneSelections,
      classes
    } = this.props;
    // material-ui-theme, new color themes could be added here in the future
    const theme = createMuiTheme();
    const biblesWithHighlightedWords = this.state.biblesWithHighlightedWords || {};
    // make sure bibles in currentPaneSettings are found in the bibles object in the resourcesReducer
    currentPaneSettings = currentPaneSettings.filter((paneSetting) => {
      return bibles[paneSetting.languageId] && bibles[paneSetting.languageId][paneSetting.bibleId] ? true : false;
    });

    return (
      <MuiThemeProvider theme={theme}>
        <div className="scripture-pane-container">
          <div className="inner-container">
            <div className="title-bar">
              <span>{translate('pane.title')}</span>
              {
                this.state.loadingExpandedScripturePane ?
                  <CircularProgress classes={{root: classes.progressRoot, svg: classes.progressSvg}} thickness={7} />
                :
                  <Glyphicon
                    onClick={this.openExpandedScripturePane}
                    glyph={"fullscreen"}
                    style={{cursor: "pointer"}}
                    title={translate('pane.expand_hover')}
                  />
              }
            </div>
            <div className="panes-container">
              {this.getPanes(currentPaneSettings, biblesWithHighlightedWords, contextId, translate)}
              <AddBibleButton
                showAddBibleModal={this.showAddBibleModal}
                clickAddResource={translate('pane.add_resource')}
              />
            </div>
          </div>
          {
            this.state.showExpandedScripturePane ?
              <ExpandedScripturePaneModal
                show={this.state.showExpandedScripturePane}
                onHide={this.closeExpandedScripturePane}
                title={expandedScripturePaneTitle}
                primaryLabel={translate('close')}
                biblesWithHighlightedWords={this.state.expandedBiblesWithHighlightedWords}
                currentPaneSettings={currentPaneSettings}
                contextId={contextId}
                bibles={bibles}
                editTargetVerse={editTargetVerse}
                translate={translate}
                projectDetailsReducer={projectDetailsReducer}
            />
            :
              <div/>
          }
          {
            this.state.showAddPaneModal ?
              <AddPaneModal
                translate={translate}
                show={this.state.showAddPaneModal}
                onHide={this.hideAddBibleModal}
                title={translate('pane.add_resource_label')}
                selectedPane={this.state.selectedPane}
                selectLanguageLabel={translate('pane.select_language')}
                selectLabel={translate('select')}
                selectSourceLanguage={this.selectSourceLanguage}
                addNewBibleResource={this.addNewBibleResource}
                currentPaneSettings={currentPaneSettings}
                getAvailableScripturePaneSelections={getAvailableScripturePaneSelections}
              />
            :
              <div/>
          }
        </div>
      </MuiThemeProvider>
    );
  }
}

ScripturePane.propTypes = {
  titleLabel: PropTypes.string.isRequired,
  closeButtonLabel: PropTypes.string.isRequired,
  addResourceLabel: PropTypes.string.isRequired,
  clickToRemoveResourceLabel: PropTypes.string.isRequired,
  expandedScripturePaneTitle: PropTypes.string.isRequired,
  expandButtonHoverText: PropTypes.string.isRequired,
  clickAddResource: PropTypes.string.isRequired,
  currentPaneSettings: PropTypes.array.isRequired,
  selectLanguageLabel: PropTypes.string.isRequired,
  selectLabel: PropTypes.string.isRequired,
  setToolSettings: PropTypes.func.isRequired,
  contextId: PropTypes.object.isRequired,
  selections: PropTypes.array.isRequired,
  getLexiconData: PropTypes.func.isRequired,
  showPopover: PropTypes.func.isRequired,
  projectDetailsReducer: PropTypes.object.isRequired,
  editTargetVerse: PropTypes.func.isRequired,
  translate: PropTypes.func.isRequired,
  bibles: PropTypes.object.isRequired,
  getAvailableScripturePaneSelections: PropTypes.func.isRequired,
  makeSureBiblesLoadedForTool: PropTypes.func.isRequired,
  classes: PropTypes.object.isRequired,
};

ScripturePane.defaultProps = {
  titleLabel: '',
  closeButtonLabel: '',
  addResourceLabel: '',
  clickToRemoveResourceLabel: '',
  expandedScripturePaneTitle: '',
  expandButtonHoverText: '',
  clickAddResource: '',
  currentPaneSettings: [],
  selectLanguageLabel: '',
  selectLabel: '',
  setToolSettings: () => {},
  contextId: {},
  selections: [],
  getLexiconData: () => {},
  showPopover: () => {},
  projectDetailsReducer: {},
  editTargetVerse: () => {},
  translate: k => k,
  bibles: {},
  getAvailableScripturePaneSelections: () => {},
  makeSureBiblesLoadedForTool: () => {},
};

export default withStyles(styles)(ScripturePane);
