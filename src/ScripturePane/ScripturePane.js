import React, {Component} from 'react';
import PropTypes from 'prop-types';
import isEqual from 'deep-equal';
import {MuiThemeProvider, createMuiTheme} from '@material-ui/core/styles';
import {Glyphicon} from 'react-bootstrap';

import './ScripturePane.styles.css';
// components
import Pane from './Pane';
import ExpandedScripturePaneModal from './ExpandedScripturePaneModal';
import AddBibleButton from './AddBibleButton';
import AddPaneModal from './AddPaneModal';
// helpers
import * as bibleHelpers from './helpers/bibleHelpers';
// constant
const NAMESPACE = 'ScripturePane';

class ScripturePane extends Component {
  constructor() {
    super();
    this.state = {
      showExpandedScripturePane: false,
      showAddPaneModal: false,
      selectedPane: false,
      biblesWithHighlightedWords: null,
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

  openExpandedScripturePane() {this.setState({showExpandedScripturePane: true})}

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
    let {currentPaneSettings, setToolSettings} = this.props;
    try {
      if (currentPaneSettings) {
        if (this.state.selectedPane) {
          currentPaneSettings.push(this.state.selectedPane);
          setToolSettings(NAMESPACE, 'currentPaneSettings', currentPaneSettings);
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

  render() {
    const {
      expandedScripturePaneTitle,
      currentPaneSettings,
      contextId,
      editTargetVerse,
      translate,
      projectDetailsReducer,
      bibles,
    } = this.props;

    // material-ui-theme, new color themes could be added here in the future
    const theme = createMuiTheme();
    const biblesWithHighlightedWords = this.state.biblesWithHighlightedWords || {};

    return (
      <MuiThemeProvider theme={theme}>
        <div className="scripture-pane-container">
          <div className="inner-container">
            <div className="title-bar">
              <span>{translate('pane.title')}</span>
              <Glyphicon
                onClick={this.openExpandedScripturePane}
                glyph={"fullscreen"}
                style={{cursor: "pointer"}}
                title={translate('pane.expand_hover')}
              />
            </div>
            <div className="panes-container">
              {
                currentPaneSettings.map((paneSettings, index) => {
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

                  return (
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
                })
              }
              <AddBibleButton
                showAddBibleModal={this.showAddBibleModal}
                clickAddResource={translate('pane.add_resource')}
              />
            </div>
          </div>
          <ExpandedScripturePaneModal
            show={this.state.showExpandedScripturePane}
            onHide={this.closeExpandedScripturePane}
            title={expandedScripturePaneTitle}
            primaryLabel={translate('close')}
            biblesWithHighlightedWords={biblesWithHighlightedWords}
            currentPaneSettings={currentPaneSettings}
            contextId={contextId}
            bibles={bibles}
            editTargetVerse={editTargetVerse}
            translate={translate}
            projectDetailsReducer={projectDetailsReducer}
          />
          <AddPaneModal
            translate={translate}
            show={this.state.showAddPaneModal}
            onHide={this.hideAddBibleModal}
            title={translate('pane.add_resource_label')}
            selectedPane={this.state.selectedPane}
            selectLanguageLabel={translate('pane.select_language')}
            selectLabel={translate('select')}
            selectSourceLanguage={this.selectSourceLanguage}
            biblesWithHighlightedWords={biblesWithHighlightedWords}
            addNewBibleResource={this.addNewBibleResource}
            currentPaneSettings={currentPaneSettings}
          />
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
  translate: () => {},
  bibles: {},
};

export default ScripturePane;
