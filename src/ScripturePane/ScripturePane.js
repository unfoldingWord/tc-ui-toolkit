import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Glyphicon } from 'react-bootstrap';
import deepEqual from 'deep-equal';
// components
import { getFontClassName } from '../common/fontUtils';
import Pane from './Pane';
import ExpandedScripturePaneModal from './ExpandedScripturePaneModal';
import AddBibleButton from './AddBibleButton';
import AddPaneModal from './AddPaneModal';
// helpers
import { verseString, verseArray } from './helpers/verseHelpers';
import { getTitleWithId } from './helpers/utils';
import './ScripturePane.styles.css';
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
    setSelectedPane({});
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
        const targetLanguageFont = projectManifest.projectFont || '';
        const { chapter, verse } = contextId.reference;
        const verseData = bibles[languageId][bibleId][chapter][verse];
        let verseElements = [];

        // TODO: this is temporary hack, there is a later issue to make font size user adjustable
        const fontStyle = (manifest.language_id === 'hbo') ? { fontSize: '175%',  WebkitFontSmoothing: 'antialiased' } : null;

        if ((languageId === 'targetLanguage') && (bibleId === 'targetBible')) { // if target bible/language, pull up actual name
          language_name = getTitleWithId(manifest.language_name, manifest.language_id);
        }

        let description = manifest.description;

        if (languageId === 'originalLanguage') {
          description = 'original_language';
        }

        const isTargetBible = bibleId === 'targetBible';

        if (typeof verseData === 'string') { // if the verse content is string.
          verseElements = verseString(verseData, selections, translate, setFontSize, isTargetBible, targetLanguageFont);
        } else if (verseData) { // else the verse content is an array of verse objects.
          verseElements = verseArray(verseData, bibleId, contextId, getLexiconData, showPopover, translate, fontStyle);
        }

        let fontClass = '';

        if (isTargetBible) {
          fontClass = getFontClassName(targetLanguageFont);
        }

        panes.push(
          <Pane
            key={index.toString()}
            index={index}
            verse={verse}
            chapter={chapter}
            bibleId={bibleId}
            fontClass={fontClass}
            translate={translate}
            removePane={removePane}
            description={description}
            languageName={language_name}
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
  const targetLanguageFont = projectManifest.projectFont || '';

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
  bibles: PropTypes.object.isRequired,
  contextId: PropTypes.object.isRequired,
  selections: PropTypes.array.isRequired,
  currentPaneSettings: PropTypes.array.isRequired,
  projectDetailsReducer: PropTypes.object.isRequired,
  expandedScripturePaneTitle: PropTypes.string.isRequired,
  handleModalOpen: PropTypes.func,
  translate: PropTypes.func.isRequired,
  showPopover: PropTypes.func.isRequired,
  getLexiconData: PropTypes.func.isRequired,
  editTargetVerse: PropTypes.func.isRequired,
  setToolSettings: PropTypes.func.isRequired,
  makeSureBiblesLoadedForTool: PropTypes.func.isRequired,
  getAvailableScripturePaneSelections: PropTypes.func.isRequired,
};

/**
 * Custom comparison function to determine if component should rerender.
 * @param {object} prevProps
 * @param {object} nextProps
 */
function areEqual(prevProps, nextProps) {
  /*
    Return true if passing nextProps.bibles to
    render would return the same result as passing
    prevProps.bibles to render, otherwise return false
  */

  const result = deepEqual(prevProps.bibles, nextProps.bibles) &&
    deepEqual(prevProps.contextId, nextProps.contextId) &&
    deepEqual(prevProps.currentPaneSettings, nextProps.currentPaneSettings) &&
    deepEqual(prevProps.projectDetailsReducer, nextProps.projectDetailsReducer) &&
    deepEqual(prevProps.projectDetailsReducer, nextProps.projectDetailsReducer) &&
    prevProps.expandedScripturePaneTitle === prevProps.expandedScripturePaneTitle &&
    deepEqual(prevProps.selections, nextProps.selections);

  return result;
}

// using React.memo to boost performance by memoizing the result
export default React.memo(ScripturePane, areEqual);
