import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Glyphicon } from 'react-bootstrap';
import deepEqual from 'deep-equal';
import _ from 'lodash';
// components
import Panes from './Panes';
import ExpandedScripturePaneModal from './ExpandedScripturePaneModal';
import AddBibleButton from './AddBibleButton';
import AddPaneModal from './AddPaneModal';
import { getBibleElement } from './helpers/verseHelpers';

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
  addObjectPropertyToManifest,
  getAvailableScripturePaneSelections,
  onExpandedScripturePaneShow,
  editVerseRef,
}) {
  const [showExpandedScripturePane, toggleExpandedScripturePane] = useState(false);
  const [showAddPaneModal, toggleAddPaneModal] = useState(false);
  const [selectedPane, setSelectedPane] = useState({});

  useEffect(() => {
    if (editVerseRef) { // if verse is to be edited
      openExpandedScripturePane();
    }
  }, [editVerseRef]);

  function openExpandedScripturePane() {
    toggleExpandedScripturePane(true);
    handleModalOpen(true);
    // eslint-disable-next-line no-unused-expressions
    onExpandedScripturePaneShow && onExpandedScripturePaneShow(true);
  }

  function closeExpandedScripturePane() {
    toggleExpandedScripturePane(false);
    handleModalOpen(false);
    // eslint-disable-next-line no-unused-expressions
    onExpandedScripturePaneShow && onExpandedScripturePaneShow(false);
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
    const parts = value.split('_');
    let [ languageId, bibleId] = parts;
    let isPreRelease = false;

    if (languageId.substring(0,1) === '*') {
      languageId = languageId.substring(1);
      isPreRelease = translate('pre-release');
    }

    const owner = parts.slice(2).join('_'); // remainder is owner
    const selectedBibleId = {
      languageId,
      bibleId,
      owner,
      isPreRelease,
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

  function changePaneFontType(index, fontType) {
    try {
      if (currentPaneSettings) {
        const paneSettings = _.cloneDeep(currentPaneSettings);
        const newCurrentPaneSettings = paneSettings.map((paneSetting, i) => {
          if (index === i) {
            paneSetting.font = fontType;
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
  let foundViewUrl = false;

  // make sure not a viewUrl pane
  currentPaneSettings = currentPaneSettings.filter((paneSetting) => {
    if (paneSetting.bibleId === 'viewURL') {
      if (!foundViewUrl) {
        if (paneSetting.description === projectManifest?.view_url) {
          const bibleId = Object.keys(bibles).find(langId => {
            let found = false;

            if (langId.split('_')[0] === 'url') {
              if (bibles[langId]?.viewURL?.manifest) {
                found = true;
              }
            }
            return found;
          });

          if (bibleId) {
            foundViewUrl = true;
            return true;
          }
        }
      }
      return false;
    }
    return true;
  });

  if (bibles && !foundViewUrl && projectManifest?.view_url) { // check for additional url to show
    for (const lang of Object.keys(bibles)) {
      const languageId = 'url'; // to match

      if (lang.split('_')[0] === languageId) {
        const langBibles = bibles[lang];

        for (const bibleId of Object.keys(langBibles)) {
          if (bibleId === 'viewURL') {
            const bible = langBibles[bibleId];
            const view_url = bible?.manifest?.view_url;

            if (view_url && (view_url === projectManifest?.view_url)) { // found bible with matching url
              if (bible?.[1]) { // have content
                // paneSetting.languageId, paneSetting.bibleId, paneSetting.owner
                currentPaneSettings.push({
                  bibleId,
                  languageId,
                  owner: lang.substring(4),
                  description: view_url,
                  actualLanguage: bible?.manifest?.language_id,
                });
              }
            }
          }
        }
      }
    }
  }

  // make sure bibles in currentPaneSettings are found in the bibles object in the resourcesReducer
  currentPaneSettings = currentPaneSettings.filter((paneSetting) => {
    const found = getBibleElement(bibles, paneSetting.languageId, paneSetting.bibleId, paneSetting.owner);

    if (!found) {
      console.log(`Pane not loaded in bible: ${JSON.stringify(paneSetting)}`);
    }
    return found;
  });

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
            changePaneFontType={changePaneFontType}
            currentPaneSettings={currentPaneSettings}
            addObjectPropertyToManifest={addObjectPropertyToManifest}
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
            editVerseRef={editVerseRef}
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
  onExpandedScripturePaneShow: null,
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
  complexScriptFonts: PropTypes.object.isRequired,
  currentPaneSettings: PropTypes.array.isRequired,
  projectDetailsReducer: PropTypes.object.isRequired,
  addObjectPropertyToManifest: PropTypes.func.isRequired,
  makeSureBiblesLoadedForTool: PropTypes.func.isRequired,
  expandedScripturePaneTitle: PropTypes.string.isRequired,
  getAvailableScripturePaneSelections: PropTypes.func.isRequired,
  onExpandedScripturePaneShow: PropTypes.func, // called when expanded Scripture Pane as shown or hidden
  editVerseRef: PropTypes.string, // if given then open verse for edit (single verse)
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
    deepEqual(prevProps.selections, nextProps.selections) &&
    (prevProps.editVerseRef === nextProps.editVerseRef);
}

// using React.memo to boost performance by memoizing the result
export default React.memo(ScripturePane, areEqual);
