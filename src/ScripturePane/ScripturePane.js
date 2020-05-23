import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Glyphicon } from 'react-bootstrap';
import './ScripturePane.styles.css';
// components
import Pane from './Pane';
import ExpandedScripturePaneModal from './ExpandedScripturePaneModal';
import AddBibleButton from './AddBibleButton';
import AddPaneModal from './AddPaneModal';
// helpers
import { verseString, verseArray } from './helpers/verseHelpers';
// constant
const NAMESPACE = 'ScripturePane';

class ScripturePane extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showExpandedScripturePane: false,
      showAddPaneModal: false,
      selectedPane: false,
    };
    this.openExpandedScripturePane = this.openExpandedScripturePane.bind(this);
    this.closeExpandedScripturePane = this.closeExpandedScripturePane.bind(this);
    this.showAddBibleModal = this.showAddBibleModal.bind(this);
    this.hideAddBibleModal = this.hideAddBibleModal.bind(this);
    this.selectSourceLanguage = this.selectSourceLanguage.bind(this);
    this.addNewBibleResource = this.addNewBibleResource.bind(this);
    this.removePane = this.removePane.bind(this);
  }

  openExpandedScripturePane() {
    this.setState({ showExpandedScripturePane: true });
    this.props.handleModalOpen(true);
  }

  closeExpandedScripturePane() {
    this.setState({ showExpandedScripturePane: false });
    this.props.handleModalOpen(false);
  }

  showAddBibleModal() {
    this.setState({ showAddPaneModal: true });
    this.props.handleModalOpen(true);
  }

  hideAddBibleModal() {
    this.setState({ showAddPaneModal: false });
    this.props.handleModalOpen(false);
  }

  selectSourceLanguage(value) {
    const identifier = value.split('_');
    const selectedBibleId = {
      languageId: identifier[0],
      bibleId: identifier[1],
    };
    this.setState({ selectedPane: value ? selectedBibleId : false });
  }

  addNewBibleResource() {
    let {
      currentPaneSettings, setToolSettings, makeSureBiblesLoadedForTool,
    } = this.props;

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
    let { currentPaneSettings, setToolSettings } = this.props;

    try {
      if (currentPaneSettings) {
        currentPaneSettings.splice(key, 1);
        setToolSettings(NAMESPACE, 'currentPaneSettings', currentPaneSettings);
      }
    } catch (e) {
      console.warn(e);
    }
  }

  getPanes() {
    const {
      currentPaneSettings,
      contextId,
      translate,
      bibles,
      selections,
      getLexiconData,
      showPopover,
      projectDetailsReducer: { manifest: projectManifest },
    } = this.props;

    const panes = [];

    for (let i = 0, len = currentPaneSettings.length; i < len; i++) {
      const paneSettings = currentPaneSettings[i];
      const index = i;

      try {
        console.log('====================================');
        console.log('projectManifest', projectManifest);
        console.log('====================================');
        const { languageId, bibleId } = paneSettings;
        const { manifest } = bibles[languageId][bibleId];
        let language_name = manifest.language_name;
        const targetLanguageFont = projectManifest.languageFont || '';
        const { chapter, verse } = contextId.reference;
        const verseData = bibles[languageId][bibleId][chapter][verse];
        let verseElements = [];

        // TODO: this is temporary hack, there is a later issue to make font size user adjustable
        const setFontSize = (manifest.language_id === 'hbo') ? 175 : 0;

        if ((languageId === 'targetLanguage') && (bibleId === 'targetBible')) { // if target bible/language, pull up actual name
          language_name = manifest.language_name + ' (' + manifest.language_id.toUpperCase() + ')';
        }

        let description = manifest.description;

        if (languageId === 'originalLanguage') {
          description = 'original_language';
        }

        if (typeof verseData === 'string') { // if the verse content is string.
          verseElements = verseString(verseData, selections, translate, setFontSize);
        } else if (verseData) { // else the verse content is an array of verse objects.
          verseElements = verseArray(verseData, bibleId, contextId, getLexiconData, showPopover, translate, setFontSize);
        }

        console.log('====================================');
        console.log('ScripturePane targetLanguageFont', targetLanguageFont);
        console.log('====================================');

        panes.push(
          <Pane
            key={index.toString()}
            index={index}
            verse={verse}
            chapter={chapter}
            bibleId={bibleId}
            translate={translate}
            description={description}
            languageName={language_name}
            removePane={this.removePane}
            verseElements={verseElements}
            direction={manifest.direction}
            targetLanguageFont={targetLanguageFont}
            clickToRemoveResourceLabel={translate('pane.remove_resource')}
          />,
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
      selections,
      getLexiconData,
      showPopover,
    } = this.props;

    // make sure bibles in currentPaneSettings are found in the bibles object in the resourcesReducer
    currentPaneSettings = currentPaneSettings.filter((paneSetting) => bibles[paneSetting.languageId] && bibles[paneSetting.languageId][paneSetting.bibleId] ? true : false);

    return (
      <div className="scripture-pane-container">
        <div className="inner-container">
          <div className="title-bar">
            <span>{translate('pane.title')}</span>
            <Glyphicon
              onClick={this.openExpandedScripturePane}
              glyph={'fullscreen'}
              style={{ cursor: 'pointer' }}
              title={translate('pane.expand_hover')}
            />
          </div>
          <div className="panes-container">
            {
              this.getPanes()
            }
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
              currentPaneSettings={currentPaneSettings}
              contextId={contextId}
              bibles={bibles}
              editTargetVerse={editTargetVerse}
              translate={translate}
              projectDetailsReducer={projectDetailsReducer}
              selections={selections}
              getLexiconData={getLexiconData}
              showPopover={showPopover}
              onFinishLoad={() => this.setState({ loadingExpandedScripturePane: false })}
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
    );
  }
}

ScripturePane.defaultProps = {
  handleModalOpen: () => {
    console.info('handleModalOpen prop was not passed.');
  },
};

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
  handleModalOpen: PropTypes.func,
};

export default ScripturePane;
