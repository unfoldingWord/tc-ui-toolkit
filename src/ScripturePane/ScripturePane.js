import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Glyphicon } from 'react-bootstrap';
import deepEqual from 'deep-equal';
import _ from 'lodash';
// components
import Panes from './Panes';
import ExpandedScripturePaneModal from './ExpandedScripturePaneModal';
import AddBibleButton from './AddBibleButton';
import AddPaneModal from './AddPaneModal';

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
  complexScriptFonts,
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

  function changePaneFontSize(index, fontSize) {
    try {
      if (currentPaneSettings) {
        const paneSettings = _.cloneDeep(currentPaneSettings);
        const newCurrentPaneSettings = paneSettings.map((paneSetting, i) => {
          if (index === i) {
            paneSetting.fontSize = fontSize;
          }

          return paneSetting;
        });
        setToolSettings(NAMESPACE, 'currentPaneSettings', newCurrentPaneSettings);
      }
    } catch (e) {
      console.warn(e);
    }
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
          <Panes
            bibles={bibles}
            contextId={contextId}
            translate={translate}
            removePane={removePane}
            selections={selections}
            showPopover={showPopover}
            getLexiconData={getLexiconData}
            projectManifest={projectManifest}
            complexScriptFonts={complexScriptFonts}
            changePaneFontSize={changePaneFontSize}
            currentPaneSettings={currentPaneSettings}
          />
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
            show={showExpandedScripturePane}
            editTargetVerse={editTargetVerse}
            primaryLabel={translate('close')}
            title={expandedScripturePaneTitle}
            onHide={closeExpandedScripturePane}
            targetLanguageFont={targetLanguageFont}
            currentPaneSettings={currentPaneSettings}
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
  handleModalOpen: PropTypes.func,
  bibles: PropTypes.object.isRequired,
  translate: PropTypes.func.isRequired,
  showPopover: PropTypes.func.isRequired,
  contextId: PropTypes.object.isRequired,
  selections: PropTypes.array.isRequired,
  getLexiconData: PropTypes.func.isRequired,
  editTargetVerse: PropTypes.func.isRequired,
  setToolSettings: PropTypes.func.isRequired,
  complexScriptFonts: PropTypes.array.isRequired,
  currentPaneSettings: PropTypes.array.isRequired,
  projectDetailsReducer: PropTypes.object.isRequired,
  makeSureBiblesLoadedForTool: PropTypes.func.isRequired,
  expandedScripturePaneTitle: PropTypes.string.isRequired,
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
  return deepEqual(prevProps.bibles, nextProps.bibles) &&
    deepEqual(prevProps.contextId, nextProps.contextId) &&
    deepEqual(prevProps.currentPaneSettings, nextProps.currentPaneSettings) &&
    deepEqual(prevProps.projectDetailsReducer, nextProps.projectDetailsReducer) &&
    prevProps.expandedScripturePaneTitle === prevProps.expandedScripturePaneTitle &&
    deepEqual(prevProps.selections, nextProps.selections);
}

// using React.memo to boost performance by memoizing the result
export default React.memo(ScripturePane, areEqual);
