import isEqual from 'deep-equal';
import React from 'react';
import PropTypes from 'prop-types';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
// components
import DefaultArea from '../DefaultArea';
import SelectionArea from '../SelectionArea';
import InstructionsArea from '../InstructionsArea';
import EditVerseArea from '../EditVerseArea';
import CommentArea from '../CommentArea';
import './CheckArea.styles.css';
import { delay } from '../../ScripturePane/helpers/utils';
import * as selectionHelpers from '../helpers/selectionHelpers';

let counter = 0;

/**
 * Normalizes an LLM grouping value to an integer from 1 to 10, defaulting to 1 if invalid.
 * @param {number|string} value
 * @returns {number}
 */
function normalizeLlmGrouping(value) {
  const number = Math.round(Number(value));
  return Number.isFinite(number) ? Math.min(10, Math.max(1, number)) : 1;
}

/**
 * Renders the check area for a verse: the selection/default area plus the mode-specific
 * area (edit, comment, select, or default instructions), and an optional suggestions panel
 * when `getSuggestions` is provided.
 * @param {object} props
 * @param {string} props.mode - current check mode ('edit', 'comment', 'select', or 'default')
 * @param {array} props.tags
 * @param {string} props.comment
 * @param {string} props.verseText
 * @param {function} props.translate
 * @param {object} props.contextId
 * @param {array} props.selections
 * @param {boolean} props.invalidated
 * @param {object} props.targetBible
 * @param {object} props.bookDetails
 * @param {array} props.newSelections
 * @param {string} props.alignedGLText
 * @param {function} props.handleComment
 * @param {object} props.toolsSettings
 * @param {boolean} props.isVerseChanged
 * @param {boolean} props.nothingToSelect
 * @param {function} props.openAlertDialog
 * @param {function} props.handleEditVerse
 * @param {function} props.setToolSettings
 * @param {number} props.maximumSelections
 * @param {function} props.handleTagsCheckbox
 * @param {function} props.validateSelections
 * @param {string} props.targetLanguageFont
 * @param {string} props.unfilteredVerseText
 * @param {function} props.checkIfVerseChanged
 * @param {function} props.checkIfCommentChanged
 * @param {object} props.targetLanguageDetails
 * @param {function} props.changeSelectionsInLocalState
 * @param {function} [props.getSuggestions] - if defined, called to fetch selection suggestions
 * @param {function} [props.saveSettingsForChecking] - if defined, saves suggestion and AI configuration
 * @param {function} [props.readSettingsForChecking] - if defined, reads saved suggestion and AI configuration
 * @param {function} [props.getModelsForChecking] - if defined, fetches available AI models for suggestions
 * @returns {JSX.Element}
 */
const CheckArea = ({
  mode,
  tags,
  comment,
  verseText,
  translate,
  contextId,
  selections,
  invalidated,
  targetBible,
  bookDetails,
  newSelections,
  alignedGLText,
  handleComment,
  toolsSettings,
  isVerseChanged,
  nothingToSelect,
  openAlertDialog,
  handleEditVerse,
  setToolSettings,
  maximumSelections,
  handleTagsCheckbox,
  validateSelections,
  targetLanguageFont,
  unfilteredVerseText,
  checkIfVerseChanged,
  checkIfCommentChanged,
  targetLanguageDetails,
  changeSelectionsInLocalState,
  getSuggestions, // if defined will call to get suggestions
  saveSettingsForChecking, // if defined will call save latest settings
  readSettingsForChecking, // if defined will get latest settings
  getModelsForChecking, // if defined will fetch available models
}) => {
  const [bestSuggestion, setBestSuggestion] = React.useState(false);
  const [suggestionsEnabled, setSuggestionsEnabled] = React.useState(false);
  const [llmSuggestionsEnabled, setLlmSuggestionsEnabled] = React.useState(false);
  const [llmQueryUrl, setLlmQueryUrl] = React.useState('');
  const [llmApiToken, setLlmApiToken] = React.useState('');
  const [llmMaximizeRequests, setLlmMaximizeRequests] = React.useState(false);
  const [llmTemperature, setLlmTemperature] = React.useState(0.7);
  const [llmGrouping, setLlmGrouping] = React.useState(1);
  const [suggestionsInit, setSuggestionsInit] = React.useState(false);
  const [availableModels, setAvailableModels] = React.useState(null);
  const [currentModel, setCurrentModel] = React.useState(null);
  const [suggestionsExpanded, setSuggestionsExpanded] = React.useState(true);
  const [aiDialogOpen, setAiDialogOpen] = React.useState(false);
  const [draftLlmQueryUrl, setDraftLlmQueryUrl] = React.useState('');
  const [draftLlmApiToken, setDraftLlmApiToken] = React.useState('');
  const [draftLlmMaximizeRequests, setDraftLlmMaximizeRequests] = React.useState(false);
  const [draftLlmTemperature, setDraftLlmTemperature] = React.useState(0.7);
  const [draftLlmGrouping, setDraftLlmGrouping] = React.useState(1);
  const [draftCurrentModel, setDraftCurrentModel] = React.useState('');
  const [draftAvailableModels, setDraftAvailableModels] = React.useState(null);
  const [fetchingModels, setFetchingModels] = React.useState(false);
  const [fetching, setFetching] = React.useState(false);
  const suggestionsChangeTimeoutRef = React.useRef(null);
  const llmSuggestionsChangeTimeoutRef = React.useRef(null);

  React.useEffect(() => () => {
    [
      suggestionsChangeTimeoutRef,
      llmSuggestionsChangeTimeoutRef,
    ].forEach(timeoutRef => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    });
  }, []);

  let modeArea;
  const { direction: targetLanguageDirection = 'ltr' } = targetLanguageDetails || {};

  /**
   * Debounces a checking settings update.
   * @param {object} timeoutRef - React ref that stores the timeout ID
   * @param {object} newData - partial settings to save
   * @param {boolean} noRestart - true to save without restarting checks
   * @param {function} callback - optional function to run after saving
   */
  function debounceSettingsChange(timeoutRef, newData = {}, noRestart = false, callback) {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = setTimeout(() => {
      saveSettingsForChecking_(newData, noRestart);

      if (callback) {
        callback();
      }
    }, 500);
  }

  /**
   * Returns the stable identifier for an AI model option.
   * @param {object|string} model - model object or model identifier
   * @returns {string|*} model ID, model name, or the original model value
   */
  function getModelId(model) {
    return model && (model.id || model.name) || model;
  }

  /**
   * Converts model response data into a list of non-empty model identifiers.
   * @param {Array<object|string>} models - model objects or model identifiers
   * @returns {string[]} normalized model identifiers
   */
  function normalizeModels(models = []) {
    return models
      .map(getModelId)
      .filter(model => !!model);
  }

  /**
   * Fetches available AI models for the configure AI dialog.
   * Updates the draft model list and selects the first returned model when the current
   * draft/current model is not available.
   * @param {string} baseUrl - base URL for the AI suggestion server
   * @param {string} apiToken - API token used by the AI suggestion server
   * @returns {Promise<void>}
   */
  async function fetchAvailableModels(baseUrl = llmQueryUrl, apiToken = llmApiToken) {
    if (!getModelsForChecking || !baseUrl) {
      return;
    }

    setFetchingModels(true);

    try {
      await delay(1);
      const results = await getModelsForChecking({ baseUrl, apiToken });
      const { models, error } = results || {};

      if (error) {
        console.log('fetchAvailableModels - Error fetching models', error);
        setDraftAvailableModels(null);
      } else {
        const _availableModels = normalizeModels(models);

        setDraftAvailableModels(_availableModels);

        if (_availableModels.length && !_availableModels.includes(draftCurrentModel || currentModel)) {
          setDraftCurrentModel(_availableModels[0]);
        }
      }
    } catch (e) {
      console.warn('fetchAvailableModels - error calling getModelsForChecking', e);
      setDraftAvailableModels(null);
    } finally {
      setFetchingModels(false);
    }
  }

  /**
   * Initializes available models by fetching them from getModelsForChecking if LLM suggestions
   * are enabled. Sets the default model if none is currently selected and marks initialization complete.
   * @param {boolean} suggestionsEnabled - whether suggestions are enabled
   * @param {boolean} llmSuggestionsEnabled - whether LLM suggestions are enabled
   * @param {string} llmQueryUrl - the URL for LLM queries
   * @param {string} currentModel - the currently selected model ID
   * @param {string} llmApiToken - the API token for LLM queries
   */
  function initializeModels(suggestionsEnabled, llmSuggestionsEnabled, llmQueryUrl, currentModel, llmApiToken ) {
    if (suggestionsEnabled && llmSuggestionsEnabled && llmQueryUrl && getModelsForChecking) {
      getModelsForChecking({ baseUrl: llmQueryUrl, apiToken: llmApiToken }).then(results => {
        const { models, error } = results;

        if (!error) {
          const _availableModels = normalizeModels(models);

          setAvailableModels(_availableModels);
          const modelNotValid = !currentModel || !_availableModels.includes(currentModel);

          if (modelNotValid && _availableModels.length) {
            const defaultModel = _availableModels[0] || 'local-model';
            console.log(`initializeModels - setting model to`, defaultModel);
            setCurrentModel(defaultModel);
          }
          setSuggestionsInit(true);
        } else {
          console.log(`initializeModels - Error fetching models`, error);
          setAvailableModels(null);
          setCurrentModel('local-model');
          // saveSettingsForChecking_({ currentModel: null });
          setSuggestionsInit(true);
        }
      });
    } else {
      setSuggestionsInit(true);
    }
  }

  // Initialize suggestions settings on mount by reading saved configuration
  React.useEffect(() => {
    if (!suggestionsInit) {
      const data = readSettingsForChecking?.();
      console.log(data);

      const {
        currentModel = '',
        llmSuggestionsEnabled = false,
        llmQueryUrl = null,
        llmApiToken = '',
        llmMaximizeRequests = false,
        llmTemperature = 0.7,
        llmGrouping = 1,
        suggestionsEnabled = false,
        suggestionsExpanded = true,
      } = data || {};
      console.log('restoring original settings', data);
      setSuggestionsEnabled(suggestionsEnabled);
      setLlmSuggestionsEnabled(llmSuggestionsEnabled);
      setLlmQueryUrl(llmQueryUrl);
      setLlmApiToken(llmApiToken);
      setLlmMaximizeRequests(llmMaximizeRequests);
      setLlmTemperature(Number.isFinite(Number(llmTemperature)) ? Number(llmTemperature) : 0.7);
      setLlmGrouping(normalizeLlmGrouping(llmGrouping));
      setCurrentModel(currentModel);
      setSuggestionsExpanded(suggestionsExpanded);

      if (data) {
        initializeModels(suggestionsEnabled, llmSuggestionsEnabled, llmQueryUrl, currentModel, llmApiToken);
      } else {
        console.log('Error fetching settings');
        setSuggestionsInit(true);
      }
    }
  }, [
    suggestionsInit,
  ]);

  /**
   * Saves the current checking settings (suggestions and LLM configuration).
   * @param {object} newData - Optional partial settings to merge with current state
   * @param {boolean} noRestart - true to save without restarting checks
   */
  function saveSettingsForChecking_(newData = {}, noRestart = false) {
    const data = {
      suggestionsEnabled,
      llmSuggestionsEnabled,
      llmQueryUrl,
      llmApiToken,
      llmMaximizeRequests,
      llmTemperature,
      llmGrouping,
      currentModel,
      suggestionsExpanded,
      ...newData,
    };

    // eslint-disable-next-line no-unused-expressions
    saveSettingsForChecking?.(data, noRestart);
  }

  /**
   * Applies suggestion results to component state.
   * If the result still matches the active context and the component is in select mode,
   * optionally applies the best suggestion to local selection state.
   * @param {object} results - suggestion response returned by getSuggestions
   * @param {boolean} force - true to replace current selections with the best suggestion
   * @returns {Promise<void>}
   */
  async function applySuggestions(contextId, results, force) {
    const {
      algorithmFallback,
      bestSelections: _suggestions,
      cached,
      contextId: _contextId,
      elapsedStr,
      error,
      llmError,
      model,
    } = results;

    // TRICKY - expects the _suggestions to be sorted with the best first
    const _bestSuggestion = _suggestions?.length && _suggestions[0] || { selections: false };
    const isInSelectMode = mode === 'select';
    await delay(1);

    if (isEqual(contextId, _contextId)) { // in case this is an older response
      if (_bestSuggestion?.selections?.length > 1) {
        // group adjacent suggestions
        let _selections = [];

        for (const selection of _bestSuggestion.selections) {
          _selections = selectionHelpers.addSelectionToSelections(selection, _selections, verseText);
        }
        _bestSuggestion.selections = _selections;
      }

      setBestSuggestion({
        ..._bestSuggestion,
        algorithmFallback,
        cached,
        elapsedStr,
        error: error || llmError,
        model,
      });

      // console.log(`applySuggestions - same context - isInSelectMode=${isInSelectMode} confidence=${_bestSuggestion?.confidence} newSelections=`, { contextId, selections: _bestSuggestion?.selections });

      if (isInSelectMode && _bestSuggestion?.confidence && _bestSuggestion?.selections?.length) {
        const isSelectionCurrentlyEmpty = newSelections?.length === 0;
        const isSuggestionSame = isEqual(_bestSuggestion.selections, newSelections);

        const apply = force || (isSelectionCurrentlyEmpty && !isSuggestionSame);

        // console.log('applySuggestions - continuing =', {
        //   force, isSelectionCurrentlyEmpty, isSuggestionSame, apply,
        // });

        if (apply) {
          await delay(1);
          changeSelectionsInLocalState(_bestSuggestion.selections);
        } else {
          console.log('applySuggestions - not applying =', {
            force, isSelectionCurrentlyEmpty, isSuggestionSame, apply,
          });
        }

        await delay(1);
      } else {
        console.log('applySuggestions - selections not applicable');
      }
    } else {
      console.log('applySuggestions - not using result - context changed from', { from: contextId, to: _contextId });
    }

    // console.log(`applySuggestions - CheckArea getSuggestions=${!!getSuggestions} suggestionsEnabled=${suggestionsEnabled} suggestions`, {
    //   bestSuggestions: _suggestions,
    //   newSelections,
    // });
    setFetching(false);
  }

  /**
   * Fetches selection suggestions from the getSuggestions API and updates the best suggestion.
   * If in 'select' mode with no current selections, automatically applies the best suggestion.
   * @param {boolean} force - if true, ignores existing selections and fetches suggestions regardless
   */
  function fetchSelectionSuggestions(force = false) {
    // if force is true, we ignore if we already have selections
    const alreadyHaveNewSelections = force ? false : (newSelections && newSelections.length);

    const isReadyForFetch = force || !fetching;

    if (isReadyForFetch && suggestionsInit && suggestionsEnabled && !alreadyHaveNewSelections && getSuggestions) {
      setFetching({ ...contextId });

      delay(1).then(() => { // delay so that state is updated
        try {
          getSuggestions({
            alignedGLText,
            bookDetails,
            contextId,
            currentModel,
            force,
            llmApiToken,
            llmSuggestionsEnabled,
            llmQueryUrl,
            llmTemperature,
            llmGrouping,
            llmMaximizeRequests,
            targetLanguageDetails,
            verseText,
          }).then(results => {
            applySuggestions(contextId, results, force);
          });
        } catch (e) {
          console.warn(`fetchSelectionSuggestions - error calling getSuggestions`, e);
          setFetching(false);
        }
      });
    }
  }

  function initiateSuggestions() {
    if (suggestionsInit) {
      const alreadyHaveSelections = selections?.length > 0;
      const alreadyFetchingCurrentContext = isEqual(contextId, fetching);

      if (!alreadyHaveSelections && !alreadyFetchingCurrentContext) {
        fetchSelectionSuggestions();
      }
    }
  }

  /**
   * Automatically fetches selection suggestions when the context changes or initialization completes.
   * Reset suggestion state when context changes to a new verse
   * Triggers fetchSelectionSuggestions if:
   * - Suggestions have not already been fetched for this context
   * - No existing selections are present
   * - Not currently fetching suggestions for this context
   *
   * Dependencies:
   * - contextId: triggers when verse context changes
   * - suggestionsInit: waits for initialization to complete before fetching
   */
  React.useEffect(() => {
    setBestSuggestion(null);

    if (suggestionsInit) {
      initiateSuggestions();
    } else {
      setFetching(false);
    }
  }, [
    contextId,
  ]);

  React.useEffect(() => {
    if (suggestionsInit) {
      initiateSuggestions();
    }
  }, [
    suggestionsInit,
  ]);

  React.useEffect(() => {
    const haveAlreadyMadeSelections = newSelections?.length > 0;

    if (suggestionsInit && !haveAlreadyMadeSelections) {
      initiateSuggestions();
    }
  }, [
    newSelections,
  ]);


  /**
   * Updates suggestionsEnabled state from the "Enable Suggestions" checkbox.
   * @param {object} e - checkbox change event
   */
  function handleSuggestionsCheckbox(e) {
    const checked = !!e.target.checked;

    if (suggestionsEnabled !== checked) {
      setSuggestionsEnabled(checked);
      debounceSettingsChange(suggestionsChangeTimeoutRef, { suggestionsEnabled: checked }, false, () => {
        initializeModels(checked, llmSuggestionsEnabled, llmQueryUrl, currentModel, llmApiToken);
      });
    } else {
      debounceSettingsChange(suggestionsChangeTimeoutRef, {}, false, () => {
        initializeModels(checked, llmSuggestionsEnabled, llmQueryUrl, currentModel, llmApiToken);
      });
    }
  }

  /**
   * Updates llmSuggestionsEnabled state from the "LLM Suggestions" checkbox.
   * @param {object} e - checkbox change event
   */
  function handleLlmSuggestionsCheckbox(e) {
    const checked = !!e.target.checked;

    if (llmSuggestionsEnabled !== checked) {
      setLlmSuggestionsEnabled(checked);
      debounceSettingsChange(llmSuggestionsChangeTimeoutRef, { llmSuggestionsEnabled: checked }, false, () => {
        initializeModels(suggestionsEnabled, checked, llmQueryUrl, currentModel, llmApiToken);
      });
    } else {
      debounceSettingsChange(llmSuggestionsChangeTimeoutRef, {}, false, () => {
        initializeModels(suggestionsEnabled, checked, llmQueryUrl, currentModel, llmApiToken);
      });
    }
  }

  /**
   * Updates llmQueryUrl state from the LLM query URL input.
   * @param {object} e - input change event
   */
  function handleLlmQueryUrlChange(e) {
    setDraftLlmQueryUrl(e.target.value);
  }

  /**
   * Updates llmApiToken state from the AI API token input.
   * @param {object} e - input change event
   */
  function handleLlmApiTokenChange(e) {
    setDraftLlmApiToken(e.target.value);
  }

  /**
   * Updates llmMaximizeRequests state from the maximum AI requests checkbox.
   * @param {object} e - checkbox change event
   */
  function handleMaximumAiRequestsCheckbox(e) {
    setDraftLlmMaximizeRequests(!!e.target.checked);
  }

  /**
   * Updates llmTemperature state from the LLM temperature input.
   * @param {object} e - input change event
   */
  function handleLlmTemperatureChange(e) {
    const value = Number(e.target.value);
    const normalizedValue = Math.min(1, Math.max(0, value));

    if (Number.isFinite(value)) {
      setDraftLlmTemperature(normalizedValue);
    }
  }

  /**
   * Updates draftLlmGrouping state from the LLM grouping input.
   * @param {object} e - input change event
   */
  function handleLlmGroupingChange(e) {
    const value = Number(e.target.value);

    if (Number.isFinite(value)) {
      setDraftLlmGrouping(normalizeLlmGrouping(value));
    }
  }

  /**
   * Toggles the expanded/collapsed state of the suggestions settings panel.
   * @param {boolean} enable - true to expand the panel, false to collapse it
   */
  function handleSuggestionsExpanded(enable) {
    if (enable !== suggestionsExpanded) {
      setSuggestionsExpanded(enable);
      saveSettingsForChecking_({ suggestionsExpanded: enable });
    }
  }

  /**
   * Updates currentModel state from the available models selector.
   * @param {object} e - select change event
   */
  function handleCurrentModelChange(e) {
    setDraftCurrentModel(e.target.value || 'local-model');
  }

  switch (mode) {
  case 'edit':
    var fontSize = (toolsSettings['CheckArea'] && toolsSettings['CheckArea'].fontSize) || 100;

    modeArea = (
      <EditVerseArea
        tags={tags}
        verseText={unfilteredVerseText}
        isVerseChanged={isVerseChanged}
        handleTagsCheckbox={handleTagsCheckbox}
        handleEditVerse={handleEditVerse}
        checkIfVerseChanged={checkIfVerseChanged}
        languageDirection={targetLanguageDirection}
        translate={translate}
        targetLanguageFont={targetLanguageFont}
        targetLanguageFontSize={`${fontSize}%`}
      />
    );
    break;
  case 'comment':
    modeArea = (
      <CommentArea
        comment={comment}
        translate={translate}
        handleComment={handleComment}
        checkIfCommentChanged={checkIfCommentChanged}
      />
    );
    break;
  case 'select':
    modeArea = (
      <div style={{
        WebkitUserSelect: 'none', display: 'flex', flex: '1', justifyContent: 'center', alignItems: 'center', overflow: 'auto',
      }}>
        <InstructionsArea
          verseText={verseText}
          selections={selections}
          alignedGLText={alignedGLText}
          mode={mode}
          translate={translate}
          invalidated={invalidated}
          targetLanguageFont={targetLanguageFont}
          targetLanguageDirection={targetLanguageDirection}
        />
      </div>);
    break;
  case 'default':
  default:
    modeArea = (
      <div style={{
        WebkitUserSelect: 'none', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%',
      }}>
        <InstructionsArea
          dontShowTranslation={true}
          verseText={verseText}
          selections={selections}
          alignedGLText={alignedGLText}
          translate={translate}
          invalidated={invalidated}
          nothingToSelect={nothingToSelect}
          targetLanguageFont={targetLanguageFont}
          targetLanguageDirection={targetLanguageDirection}
        />
      </div>
    );
  }

  let reference = contextId.reference;

  if (contextId.verseSpan) { // if are in a verse span, use it
    reference = {
      ...contextId.reference,
      verse: contextId.verseSpan,
    };
  }

  const isInSelectMode = mode === 'select';
  const expandSuggestionsDetails = suggestionsExpanded && isInSelectMode;

  /**
   * Opens the AI configuration dialog and copies saved AI settings into draft state.
   */
  function openAiDialog() {
    setDraftLlmQueryUrl(llmQueryUrl || '');
    setDraftLlmApiToken(llmApiToken || '');
    setDraftLlmMaximizeRequests(llmMaximizeRequests);
    setDraftLlmTemperature(llmTemperature);
    setDraftLlmGrouping(llmGrouping);
    setDraftCurrentModel(currentModel || '');
    setAiDialogOpen(true);
    setDraftAvailableModels(availableModels);
  }

  /**
   * Closes the AI configuration dialog without saving draft changes.
   */
  function cancelAiDialog() {
    setAiDialogOpen(false);
  }

  /**
   * Saves draft AI configuration to component state and persisted checking settings.
   * Reinitializes available models with the saved AI server configuration.
   */
  function saveAiDialog() {
    const normalizedModel = draftCurrentModel || 'local-model';

    setLlmQueryUrl(draftLlmQueryUrl);
    setLlmApiToken(draftLlmApiToken);
    setLlmMaximizeRequests(draftLlmMaximizeRequests);
    setLlmTemperature(draftLlmTemperature);
    setLlmGrouping(draftLlmGrouping);
    setCurrentModel(normalizedModel);
    setAvailableModels(draftAvailableModels);

    saveSettingsForChecking_({
      llmQueryUrl: draftLlmQueryUrl,
      llmApiToken: draftLlmApiToken,
      llmMaximizeRequests: draftLlmMaximizeRequests,
      llmTemperature: draftLlmTemperature,
      llmGrouping: draftLlmGrouping,
      currentModel: normalizedModel,
    }, true);

    initializeModels(
      suggestionsEnabled,
      llmSuggestionsEnabled,
      draftLlmQueryUrl,
      normalizedModel,
      draftLlmApiToken,
    );

    setAiDialogOpen(false);
  }

  return (
    <div className='check-area'>
      {mode === 'select' ?
        <SelectionArea
          mode={mode}
          translate={translate}
          verseText={verseText}
          bookDetails={bookDetails}
          targetBible={targetBible}
          selections={newSelections}
          toolsSettings={toolsSettings}
          reference={reference}
          setToolSettings={setToolSettings}
          openAlertDialog={openAlertDialog}
          maximumSelections={maximumSelections}
          targetLanguageFont={targetLanguageFont}
          targetLanguageDetails={targetLanguageDetails}
          changeSelectionsInLocalState={changeSelectionsInLocalState}
        />
        :
        <DefaultArea
          translate={translate}
          verseText={verseText}
          selections={selections}
          targetBible={targetBible}
          bookDetails={bookDetails}
          toolsSettings={toolsSettings}
          reference={reference}
          setToolSettings={setToolSettings}
          validateSelections={validateSelections}
          targetLanguageFont={targetLanguageFont}
          targetLanguageDetails={targetLanguageDetails}
        />
      }
      <div style={{
        borderLeft: '1px solid var(--border-color)',
        flex: 1,
        overflowY: 'auto',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        {getSuggestions &&
          <div style={{
            display: 'flex',
            alignItems: 'center',
            flexWrap: 'wrap',
            flexDirection: 'column',
            gap: 0,
            flexShrink: 0,
          }}>
            {isInSelectMode &&
              <button
                type='button'
                title={suggestionsExpanded ? 'Hide suggestion settings and details' : 'Show suggestion settings and details'}
                onClick={() => handleSuggestionsExpanded(!suggestionsExpanded)}
                style={{ cursor: 'pointer' }}
              >
                {suggestionsExpanded ? 'Hide Suggestion Settings' : 'Show Suggestion Settings'}
              </button>
            }

            {expandSuggestionsDetails &&
              <React.Fragment>
                <label title='Enable or disable automatic selection suggestions'>
                  <input
                    type='checkbox'
                    checked={suggestionsEnabled}
                    onChange={handleSuggestionsCheckbox}
                  />
                  {' Enable Suggestions'}
                </label>

                <label title='Use AI-powered suggestions from the configured AI server. This will run slower and may be too creative.  If this is turned off the suggestions will only be based on previous selections and will run very quickly.'>
                  <input
                    type='checkbox'
                    checked={llmSuggestionsEnabled}
                    onChange={handleLlmSuggestionsCheckbox}
                  />
                  {' Use AI Suggestions'}
                </label>

                <button
                  type='button'
                  title='Configure AI suggestion server settings'
                  onClick={openAiDialog}
                  style={{ cursor: 'pointer', margin: '10px' }}
                >
                  {'Configure AI'}
                </button>

                <Dialog
                  open={aiDialogOpen}
                  onClose={cancelAiDialog}
                  fullWidth
                >
                  <DialogTitle>{'Configure AI'}</DialogTitle>
                  <DialogContent>
                    <div style={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '10px',
                    }}>
                      <label title='Enter the base URL for the AI suggestion server.'>
                        {' ' + 'URL for AI server:' + ' '}
                        <input
                          type='text'
                          value={draftLlmQueryUrl}
                          onChange={handleLlmQueryUrlChange}
                          placeholder='AI query URL'
                        />
                      </label>

                      <label title='If enabled AI requests will be made in background to get suggestions for all empty checks.  Otherwise it will only be done for current group.'>
                        <input
                          type='checkbox'
                          checked={draftLlmMaximizeRequests}
                          onChange={handleMaximumAiRequestsCheckbox}
                        />
                        {' Maximum AI requests'}
                      </label>

                      <label title='Enter the AI API token used by the suggestion server.'>
                        {' ' + 'AI API Token:' + ' '}
                        <input
                          type='password'
                          value={draftLlmApiToken}
                          onChange={handleLlmApiTokenChange}
                          placeholder='AI API token'
                        />
                      </label>

                      <label title='Set the AI temperature from 0.0 to 1.0. Lower values are more consistent; higher values are more creative. 0.7 is default'>
                        {' ' + 'AI Temperature:' + ' '}
                        <input
                          type='number'
                          min='0'
                          max='1'
                          step='0.1'
                          value={draftLlmTemperature}
                          onChange={handleLlmTemperatureChange}
                        />
                      </label>

                      <label title='Set Number of Suggestion requests to group together. Range is from 1 to 10. 1 is default.  This is how many suggestion requests that will be sent at the same time. Only large models can only handle more than 1'>
                        {' ' + 'Suggestion Request group size:' + ' '}
                        <input
                          type='number'
                          min='1'
                          max='10'
                          step='1'
                          value={draftLlmGrouping}
                          onChange={handleLlmGroupingChange}
                        />
                      </label>

                      <div
                        style={{ marginLeft: '50px' }}
                      >
                        <label title='Select or enter the AI model to use for suggestions.'>
                          {' ' + 'AI Model:' + ' '}
                          <input
                            type='text'
                            value={draftCurrentModel || ''}
                            onChange={handleCurrentModelChange}
                            placeholder='AI model'
                          />
                          {draftAvailableModels && draftAvailableModels.length > 0 &&
                            <select
                              value={draftAvailableModels.includes(draftCurrentModel) ? draftCurrentModel : ''}
                              onChange={handleCurrentModelChange}
                              title='Choose from available AI models'
                            >
                              <option value=''>{'Available models'}</option>
                              {draftAvailableModels.map(model => (
                                <option key={model} value={model}>
                                  {model}
                                </option>
                              ))}
                            </select>
                          }
                        </label>

                        <button
                          type='button'
                          title='Get the list of AI models from the configured AI server'
                          onClick={() => fetchAvailableModels(draftLlmQueryUrl, draftLlmApiToken)}
                          disabled={fetchingModels || !draftLlmQueryUrl || !getModelsForChecking}
                          style={{ cursor: fetchingModels ? 'default' : 'pointer' }}
                        >
                          {fetchingModels ? 'Getting AI Models...' : 'Get AI Models'}
                        </button>
                      </div>
                    </div>
                  </DialogContent>
                  <DialogActions>
                    <button
                      type='button'
                      className='btn-second'
                      onClick={() => cancelAiDialog()}
                    >
                      {'Cancel'}
                    </button>
                    <button
                      type='button'
                      className='btn-prime'
                      onClick={() => saveAiDialog()}
                    >
                      {'Save'}
                    </button>
                  </DialogActions>
                </Dialog>

                { fetching &&
                  <div>{'Fetch in process...'}</div>
                }

                <button
                  type='button'
                  title='Fetch fresh selection suggestions now'
                  onClick={() => fetchSelectionSuggestions(true)}
                  style={{ cursor: 'pointer', margin: '10px' }}
                >
                  {'Refresh Suggestions'}
                </button>

                {bestSuggestion &&
                  <div style={{
                    flex: 1,
                    overflowY: 'auto',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    paddingLeft: '16px',
                    paddingRight: '16px',
                    boxSizing: 'border-box',
                    overflowWrap: 'anywhere',
                    wordBreak: 'break-word',
                    whiteSpace: 'normal',
                  }}>
                    <div>{`${++counter} - Received Suggestions:`}</div>
                    <div>
                      {'Suggested Words: '}
                      {bestSuggestion.selections && bestSuggestion.selections.length
                        ? bestSuggestion.selections
                          .map(selection => `"${selection.text}" occurrence ${selection.occurrence}`)
                          .join(', ')
                        : 'No suggestions'}
                    </div>
                    <div>
                      {`Confidence: ${bestSuggestion.confidence || 0}%`}
                      {bestSuggestion.error ? ' <AI ERROR>' : ''}
                      {bestSuggestion.algorithmFallback ? ' no results, so fell back to algorithm' : ''}
                    </div>
                    <div>
                      {`Elapsed: ${bestSuggestion.elapsedStr || '0'} seconds`}
                      {bestSuggestion.cached && ` <= Cached Suggestion`}
                    </div>
                    <div>{`Model: ${bestSuggestion.model || 'Unknown'}`}</div>
                  </div>
                }
              </React.Fragment>
            }
          </div>
        }
        {modeArea}
      </div>
    </div>
  );
};

CheckArea.propTypes = {
  tags: PropTypes.array.isRequired,
  mode: PropTypes.string.isRequired,
  targetLanguageFont: PropTypes.string,
  translate: PropTypes.func.isRequired,
  comment: PropTypes.string.isRequired,
  invalidated: PropTypes.bool.isRequired,
  verseText: PropTypes.string.isRequired,
  contextId: PropTypes.object.isRequired,
  selections: PropTypes.array.isRequired,
  bookDetails: PropTypes.object.isRequired,
  handleComment: PropTypes.func.isRequired,
  targetBible: PropTypes.object.isRequired,
  newSelections: PropTypes.array.isRequired,
  isVerseChanged: PropTypes.bool.isRequired,
  alignedGLText: PropTypes.string.isRequired,
  nothingToSelect: PropTypes.bool.isRequired,
  handleEditVerse: PropTypes.func.isRequired,
  openAlertDialog: PropTypes.func.isRequired,
  toolsSettings: PropTypes.object.isRequired,
  setToolSettings: PropTypes.func.isRequired,
  validateSelections: PropTypes.func.isRequired,
  handleTagsCheckbox: PropTypes.func.isRequired,
  checkIfVerseChanged: PropTypes.func.isRequired,
  maximumSelections: PropTypes.number.isRequired,
  unfilteredVerseText: PropTypes.string.isRequired,
  checkIfCommentChanged: PropTypes.func.isRequired,
  targetLanguageDetails: PropTypes.object.isRequired,
  changeSelectionsInLocalState: PropTypes.func.isRequired,
  getSuggestions: PropTypes.func,
  suggestionsEnabled: PropTypes.bool.isRequired,
  setSuggestionsEnabled: PropTypes.func.isRequired,
  saveSettingsForChecking: PropTypes.func,
  readSettingsForChecking: PropTypes.func,
  getModelsForChecking: PropTypes.func,
};

export default CheckArea;
