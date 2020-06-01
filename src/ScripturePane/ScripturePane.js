import React, { useState } from 'react';
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
import { getTitleWithId, isLTR } from './helpers/utils';
// constant
const NAMESPACE = 'ScripturePane';

function ScripturePane({
  bibles,
  contextId,
  translate,
  selections,
  showPopover,
  getLexiconData,
  setToolSettings,
  editTargetVerse,
  handleModalOpen,
  currentPaneSettings,
  projectDetailsReducer,
  expandedScripturePaneTitle,
  makeSureBiblesLoadedForTool,
  getAvailableScripturePaneSelections,
}) {
  const [showExpandedScripturePane, toggleExpandedScripturePane] = useState(false);
  const [showAddPaneModal, toggleAddPaneModal] = useState(false);
  const [selectedPane, setSelectedPane] = useState({});

  function openExpandedScripturePane() {
    toggleExpandedScripturePane(true);
    handleModalOpen(true);
  }

  function closeExpandedScripturePane() {
    toggleExpandedScripturePane(false);
    handleModalOpen(false);
  }

  function showAddBibleModal() {
    toggleAddPaneModal(true);
    handleModalOpen(true);
  }

  function hideAddBibleModal() {
    toggleAddPaneModal(false);
    handleModalOpen(false);
  }

  function selectSourceLanguage(value) {
    const identifier = value.split('_');
    const selectedBibleId = {
      languageId: identifier[0],
      bibleId: identifier[1],
    };

    setSelectedPane(() => value ? selectedBibleId : {});
  }

  function addNewBibleResource() {
    try {
      if (currentPaneSettings) {
        if (Object.keys(selectedPane).length) {
          currentPaneSettings.push(selectedPane);
          setToolSettings(NAMESPACE, 'currentPaneSettings', currentPaneSettings);
          makeSureBiblesLoadedForTool();
          hideAddBibleModal();
        }
      }
    } catch (e) {
      console.warn(e);
    }
  }

  function removePane(key) {
    try {
      if (currentPaneSettings) {
        currentPaneSettings.splice(key, 1);
        setToolSettings(NAMESPACE, 'currentPaneSettings', currentPaneSettings);
      }
    } catch (e) {
      console.warn(e);
    }
  }

  function getPanes() {
    const panes = [];

    for (let i = 0, len = currentPaneSettings.length; i < len; i++) {
      const paneSettings = currentPaneSettings[i];
      const index = i;

      try {
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
          language_name = getTitleWithId(manifest.language_name, manifest.language_id, isLTR(manifest.direction));
        }

        let description = manifest.description;

        if (languageId === 'originalLanguage') {
          description = 'original_language';
        }

        if (typeof verseData === 'string') { // if the verse content is string.
          const isTargetBible = bibleId === 'targetBible';
          verseElements = verseString(verseData, selections, translate, setFontSize, isTargetBible, targetLanguageFont);
        } else if (verseData) { // else the verse content is an array of verse objects.
          verseElements = verseArray(verseData, bibleId, contextId, getLexiconData, showPopover, translate, setFontSize);
        }

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
            removePane={removePane}
            verseElements={verseElements}
            direction={manifest.direction}
            clickToRemoveResourceLabel={translate('pane.remove_resource')}
          />,
        );
      } catch (err) {
        console.warn(err);
      }
    }

    return panes;
  }

  const { manifest: projectManifest } = projectDetailsReducer;
  const targetLanguageFont = projectManifest.languageFont || '';

  // make sure bibles in currentPaneSettings are found in the bibles object in the resourcesReducer
  currentPaneSettings = currentPaneSettings.filter((paneSetting) => bibles[paneSetting.languageId] && bibles[paneSetting.languageId][paneSetting.bibleId] ? true : false);

  return (
    <div className="scripture-pane-container">
      <div className="inner-container">
        <div className="title-bar">
          <span>{translate('pane.title')}</span>
          <Glyphicon
            onClick={openExpandedScripturePane}
            glyph={'fullscreen'}
            style={{ cursor: 'pointer' }}
            title={translate('pane.expand_hover')}
          />
        </div>
        <div className="panes-container">
          {
            getPanes()
          }
          <AddBibleButton
            showAddBibleModal={showAddBibleModal}
            clickAddResource={translate('pane.add_resource')}
          />
        </div>
      </div>
      {
        showExpandedScripturePane ?
          <ExpandedScripturePaneModal
            bibles={bibles}
            contextId={contextId}
            translate={translate}
            selections={selections}
            showPopover={showPopover}
            getLexiconData={getLexiconData}
            editTargetVerse={editTargetVerse}
            primaryLabel={translate('close')}
            title={expandedScripturePaneTitle}
            targetLanguageFont={targetLanguageFont}
            onHide={closeExpandedScripturePane}
            currentPaneSettings={currentPaneSettings}
            show={showExpandedScripturePane}
            projectDetailsReducer={projectDetailsReducer}
          />
          :
          <div/>
      }
      {
        showAddPaneModal ?
          <AddPaneModal
            translate={translate}
            onHide={hideAddBibleModal}
            selectLabel={translate('select')}
            show={showAddPaneModal}
            selectedPane={selectedPane}
            currentPaneSettings={currentPaneSettings}
            title={translate('pane.add_resource_label')}
            addNewBibleResource={addNewBibleResource}
            selectSourceLanguage={selectSourceLanguage}
            selectLanguageLabel={translate('pane.select_language')}
            getAvailableScripturePaneSelections={getAvailableScripturePaneSelections}
          />
          :
          <div/>
      }
    </div>
  );
}

ScripturePane.defaultProps = {
  handleModalOpen: () => {
    console.info('handleModalOpen prop was not passed.');
  },
};

ScripturePane.propTypes = {
  expandedScripturePaneTitle: PropTypes.string.isRequired,
  currentPaneSettings: PropTypes.array.isRequired,
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
