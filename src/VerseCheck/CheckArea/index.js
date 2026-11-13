/* eslint-disable react-hooks/exhaustive-deps */
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

// let counter = 0;

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
  const [bestSuggestions, setBestSuggestions] = React.useState(null);
  const [suggestionsEnabled, setSuggestionsEnabled] = React.useState(false);
  const [llmSuggestionsEnabled, setLlmSuggestionsEnabled] = React.useState(false);
  const [llmQueryUrl, setLlmQueryUrl] = React.useState('');
  const [llmApiToken, setLlmApiToken] = React.useState('');
  const [llmMaximizeRequests, setLlmMaximizeRequests] = React.useState(false);
  const [llmTemperature, setLlmTemperature] = React.useState(0.7);
  const [llmGrouping, setLlmGrouping] = React.useState(1);
  // extra chat-completion request fields (e.g. { seed: 42 }); no UI - set by editing the settings file
  const [llmExtraParams, setLlmExtraParams] = React.useState(undefined);
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
  // last `newSelections` seen for the current context; null right after a context change, so the
  // selections loading for the new check aren't mistaken for the user clearing them
  const prevNewSelectionsRef = React.useRef(null);
  // context in which the user removed all their selections (Clear, or deselecting every word);
  // suggestions are still fetched and listed there but not auto-applied over the user's choice
  const userClearedContextRef = React.useRef(null);
  // latest props, read when an async suggestion fetch finishes so its result is checked against the
  // check shown now rather than the values captured when the fetch started
  const latestRef = React.useRef({});

  latestRef.current = {
    contextId, mode, newSelections,
  };

  // On unmount, clear any pending debounced settings saves so they don't fire after the component is gone
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
   * @param {function} [callback] - optional function to run after saving
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
   * Initializes available models by fetching them from getModelsForChecking if suggestions and LLM
   * suggestions are enabled and a query URL is set. Switches to the first available model if the
   * current model is missing or not in the list; if fetching fails, clears the list and falls back
   * to 'local-model'. Always marks initialization complete (once the fetch, if any, returns).
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

  // If suggestions are not initialized (i.e. on mount), read the saved checking settings, restore them
  // into state, then initialize the available models (which marks suggestionsInit complete).
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
        llmTemperature = 0.1,
        llmGrouping = 1,
        llmExtraParams: savedLlmExtraParams,
        suggestionsEnabled = true,
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
      setLlmExtraParams(savedLlmExtraParams);
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
      llmExtraParams, // kept so saving the other settings doesn't drop it
      currentModel,
      suggestionsExpanded,
      ...newData,
    };

    // eslint-disable-next-line no-unused-expressions
    saveSettingsForChecking?.(data, noRestart);
  }

  /**
   * Applies suggestion results to component state (see {@link applySuggestionsForCurrentContext}).
   * Ignores the results if they are not for the check shown now (the user moved on while fetching).
   * Otherwise, groups adjacent selections in the best suggestion and stores all suggestions in bestSuggestions.
   * If in select mode and the suggestion has confidence and selections, applies it to local selection
   * state when forced, or when there are no current selections, the suggestion differs, and the user
   * hasn't cleared their selections for this check.
   * When done, even on error, clears the fetching state if it is still for `contextId`.
   * @param {object} contextId - context the suggestions were requested for
   * @param {object} results - suggestion response returned by getSuggestions
   * @param {boolean} force - true to replace current selections with the best suggestion
   * @returns {Promise<void>}
   */
  async function applySuggestions(contextId, results, force) {
    try {
      await applySuggestionsForCurrentContext(results, force);
    } finally {
      clearFetchingFor(contextId);
    }
  }

  /**
   * Clears the fetching state if it is still for `contextId`, so a fetch that finishes for a check
   * the user has left doesn't clear the fetching state of the check now shown.
   * @param {object} contextId - context the finished fetch was for
   */
  function clearFetchingFor(contextId) {
    setFetching(prevFetching => (isEqual(prevFetching, contextId) ? false : prevFetching));
  }

  /**
   * Shows the suggestion results and, when appropriate, applies the best one, but only if they are
   * for the check shown now. Uses the latest `mode` and `newSelections`, since they may have changed
   * while the suggestions were being fetched.
   * @param {object} results - suggestion response returned by getSuggestions
   * @param {boolean} force - true to replace current selections with the best suggestion
   * @returns {Promise<void>}
   */
  async function applySuggestionsForCurrentContext(results, force) {
    const {
      algorithmFallback,
      bestSelections: _suggestions,
      cached,
      contextId: _contextId,
      elapsedStr,
      error,
      llmError,
      model,
    } = results || {};

    // TRICKY - expects the _suggestions to be sorted with the best first
    const _bestSuggestion = _suggestions?.length && _suggestions[0] || { selections: false };
    await delay(1);

    const {
      contextId: currentContextId,
      mode: currentMode,
      newSelections: currentNewSelections,
    } = latestRef.current;
    const isInSelectMode = currentMode === 'select';

    if (isEqual(currentContextId, _contextId)) { // ignore a response for a check the user has left
      if (_bestSuggestion?.selections?.length > 1) {
        // group adjacent suggestions
        let _selections = [];

        for (const selection of _bestSuggestion.selections) {
          _selections = selectionHelpers.addSelectionToSelections(selection, _selections, verseText);
        }
        _bestSuggestion.selections = _selections;
      }

      // keep all suggestions
      setBestSuggestions({
        suggestions: _suggestions,
        algorithmFallback,
        cached,
        elapsedStr,
        error: error || llmError,
        model,
      });

      // console.log(`applySuggestions - same context - isInSelectMode=${isInSelectMode} confidence=${_bestSuggestion?.confidence} newSelections=`, { contextId, selections: _bestSuggestion?.selections });

      if (isInSelectMode && _bestSuggestion?.confidence && _bestSuggestion?.selections?.length) {
        const isSelectionCurrentlyEmpty = currentNewSelections?.length === 0;
        const isSuggestionSame = isEqual(_bestSuggestion.selections, currentNewSelections);
        const userClearedSelections = isEqual(userClearedContextRef.current, currentContextId);

        const apply = force || (isSelectionCurrentlyEmpty && !isSuggestionSame && !userClearedSelections);

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
      console.log('applySuggestions - not using result - context changed', { result: _contextId, current: currentContextId });
    }

    // console.log(`applySuggestions - CheckArea getSuggestions=${!!getSuggestions} suggestionsEnabled=${suggestionsEnabled} suggestions`, {
    //   bestSuggestions: _suggestions,
    //   newSelections,
    // });
  }

  /**
   * Fetches selection suggestions for the current context by calling getSuggestions with the
   * current suggestion and LLM settings, then passes the results to applySuggestions.
   * Does nothing unless suggestions are initialized and enabled and getSuggestions is defined.
   * Unless forced, also skips if a fetch is already in progress for the current context or there are
   * already new selections. A fetch still running for a different context does not block this one.
   * @param {boolean} [force=false] - if true, fetches even if there are existing selections or a fetch in progress
   */
  function fetchSelectionSuggestions(force = false) {
    // if force is true, we ignore if we already have selections
    const alreadyHaveNewSelections = force ? false : (newSelections && newSelections.length);

    // a fetch still running for a check the user has left must not block this one
    const isReadyForFetch = force || !isEqual(fetching, contextId);

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
            llmExtraParams,
            llmMaximizeRequests,
            targetLanguageDetails,
            verseText,
          }).then(results => applySuggestions(contextId, results, force))
            .catch(e => {
              console.warn(`fetchSelectionSuggestions - error getting suggestions`, e);
              clearFetchingFor(contextId);
            });
        } catch (e) {
          console.warn(`fetchSelectionSuggestions - error calling getSuggestions`, e);
          clearFetchingFor(contextId);
        }
      });
    }
  }

  /**
   * Starts a suggestion fetch if suggestions are initialized, the check has no saved selections,
   * and suggestions are not already being fetched for the current context.
   */
  function initiateSuggestions() {
    if (suggestionsInit) {
      const alreadyHaveSelections = selections?.length > 0;
      const alreadyFetchingCurrentContext = isEqual(contextId, fetching);

      if (!alreadyHaveSelections && !alreadyFetchingCurrentContext) {
        fetchSelectionSuggestions();
      }
    }
  }

  // When the context changes to a new check, clear the previous suggestions. If suggestions are
  // initialized, try to fetch suggestions for the new context; otherwise just clear the fetching state.
  React.useEffect(() => {
    setBestSuggestions(null);
    prevNewSelectionsRef.current = null;
    userClearedContextRef.current = null;

    if (suggestionsInit) {
      initiateSuggestions();
    } else {
      setFetching(false);
    }
  }, [
    contextId,
  ]);

  // Once suggestions initialization completes, try to fetch suggestions for the current context
  React.useEffect(() => {
    if (suggestionsInit) {
      initiateSuggestions();
    }
  }, [
    suggestionsInit,
  ]);

  // When the user's new selections are cleared (or change to empty), try to fetch suggestions again.
  // If the user emptied them in select mode for this same check, remember that so the fetched
  // suggestion is listed but not applied straight back over what they just cleared.
  React.useEffect(() => {
    const haveAlreadyMadeSelections = newSelections?.length > 0;
    const hadSelections = prevNewSelectionsRef.current?.length > 0;

    if (mode === 'select' && hadSelections && !haveAlreadyMadeSelections) {
      userClearedContextRef.current = { ...contextId };
    }
    prevNewSelectionsRef.current = newSelections;

    if (suggestionsInit && !haveAlreadyMadeSelections) {
      initiateSuggestions();
    }
  }, [
    newSelections,
  ]);


  /**
   * Updates suggestionsEnabled state from the "Enable Suggestions" checkbox, then debounces
   * saving the settings and reinitializing the available models.
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
   * Updates llmSuggestionsEnabled state from the "Use AI Suggestions" checkbox, then debounces
   * saving the settings and reinitializing the available models.
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
   * Updates draftLlmQueryUrl state from the AI server URL input in the configure AI dialog.
   * @param {object} e - input change event
   */
  function handleLlmQueryUrlChange(e) {
    setDraftLlmQueryUrl(e.target.value);
  }

  /**
   * Updates draftLlmApiToken state from the AI API token input in the configure AI dialog.
   * @param {object} e - input change event
   */
  function handleLlmApiTokenChange(e) {
    setDraftLlmApiToken(e.target.value);
  }

  /**
   * Updates draftLlmMaximizeRequests state from the maximum AI requests checkbox in the configure AI dialog.
   * @param {object} e - checkbox change event
   */
  function handleMaximumAiRequestsCheckbox(e) {
    setDraftLlmMaximizeRequests(!!e.target.checked);
  }

  /**
   * Updates draftLlmTemperature state from the AI temperature input in the configure AI dialog,
   * clamped to the range 0 to 1. Non-numeric input is ignored.
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
   * Updates draftLlmGrouping state from the suggestion request group size input in the configure AI
   * dialog, normalized to an integer from 1 to 10. Non-numeric input is ignored.
   * @param {object} e - input change event
   */
  function handleLlmGroupingChange(e) {
    const value = Number(e.target.value);

    if (Number.isFinite(value)) {
      setDraftLlmGrouping(normalizeLlmGrouping(value));
    }
  }

  /**
   * Toggles the expanded/collapsed state of the suggestions settings panel and saves it to settings.
   * @param {boolean} enable - true to expand the panel, false to collapse it
   */
  function handleSuggestionsExpanded(enable) {
    if (enable !== suggestionsExpanded) {
      setSuggestionsExpanded(enable);
      saveSettingsForChecking_({ suggestionsExpanded: enable });
    }
  }

  /**
   * Updates draftCurrentModel state from the AI model text input or available models selector
   * in the configure AI dialog. Falls back to 'local-model' if empty.
   * @param {object} e - input or select change event
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
   * Saves draft AI configuration (URL, API token, maximize requests, temperature, grouping, and model)
   * to component state and persisted checking settings (without restarting checks).
   * Reinitializes available models with the saved AI server configuration and closes the dialog.
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

  /**
   * Renders one suggestion as a numbered line listing its selected text and confidence.
   * @param {object} suggestion - a suggestion from bestSuggestions.suggestions
   * @param {object[]} [suggestion.selections] - suggested selections, each with a `text` property
   * @param {number} [suggestion.confidence] - confidence percentage (0-100)
   * @param {number} index - position of the suggestion in the list; also used as the React key
   * @returns {JSX.Element}
   */
  function showSuggestion(suggestion, index) {
    const hasSelections = !!suggestion?.selections?.length;

    return <div key={index}>
      {hasSelections
        ? translate('suggestions.suggestion_item', {
          number: index + 1,
          selections: suggestion.selections.map(selection => selection.text).join(', '),
          confidence: suggestion.confidence || 0,
        })
        : translate('suggestions.no_selections_item', { number: index + 1 })}
      {hasSelections &&
        <button
          type='button'
          title={translate('suggestions.apply_tooltip')}
          onClick={() => applySuggestion(suggestion)}
          style={{ cursor: 'pointer', marginLeft: '8px' }}
        >
          {translate('suggestions.apply')}
        </button>
      }
    </div>;
  }

  /**
   * Replaces the current selections with the selections from a suggestion. Adjacent and
   * overlapping selections are merged first, the same way the best suggestion is grouped.
   * @param {object} suggestion - a suggestion from bestSuggestions.suggestions
   * @param {object[]} suggestion.selections - suggested selections to apply
   */
  function applySuggestion(suggestion) {
    const selections = selectionHelpers.optimizeSelections(verseText, suggestion.selections);
    changeSelectionsInLocalState(selections);
  }

  /**
   * Gets the model reported for the current suggestions and whether they came from the
   * selection-history algorithm (model '_ALGORITHM_') rather than an AI model.
   * @returns {{model: string, isAlgorithmSuggestion: boolean}} the model name (localized 'Unknown' if
   *   none was reported), and true if the suggestions came from the algorithm
   */
  function checkIfAlgorithm() {
    let model = bestSuggestions?.model || translate('suggestions.unknown_model');
    const isAlgorithmSuggestion = model === '_ALGORITHM_';
    return { model, isAlgorithmSuggestion };
  }

  /**
   * Returns a label for the source of the current suggestions, used in the suggestions heading.
   * Results from the selection-history algorithm (model '_ALGORITHM_') are labeled 'Previous Selections';
   * otherwise the model name is quoted and followed by ' Model' ('Unknown' if no model was reported).
   * @returns {string} display label for the suggestion source
   */
  function showSuggestionModel() {
    const { model, isAlgorithmSuggestion } = checkIfAlgorithm();

    if (isAlgorithmSuggestion) { // this actually did not come from a model, but algorithm on selection history
      return translate('suggestions.previous_selections');
    }
    return translate('suggestions.model_name', { model });
  }

  /**
   * Renders every suggestion in bestSuggestions, followed by the response details: error or
   * algorithm-fallback notice, elapsed time, whether the result was cached, and the model used.
   * Shows 'No suggestions' when the list is empty.
   * @returns {JSX.Element}
   */
  function showSuggestions() {
    const suggestions = bestSuggestions?.suggestions || [];

    return <>
      {suggestions.length
        ? suggestions.map((suggestion, index) => showSuggestion(suggestion, index))
        : <div>{translate('suggestions.no_suggestions')}</div>
      }
      { (bestSuggestions?.error || bestSuggestions?.algorithmFallback) &&
        <div>
          {bestSuggestions.error && ' ' + translate('suggestions.ai_error')}
          {bestSuggestions.algorithmFallback && ' ' + translate('suggestions.algorithm_fallback')}
        </div>
      }
      <div>
        {translate('suggestions.elapsed', { seconds: bestSuggestions?.elapsedStr || '0' })}
        {bestSuggestions?.cached && ' ' + translate('suggestions.cached')}
      </div>
    </>;
  }

  const modelText = showSuggestionModel();

  /**
   * Renders the bold heading above the suggestions list, naming where the suggestions came from:
   * 'Suggestions from Previous Selections:' for algorithm results, otherwise 'Suggestions From <model>:'.
   * @returns {JSX.Element}
   */
  function showHeading() {
    const { isAlgorithmSuggestion } = checkIfAlgorithm();
    const messageText = isAlgorithmSuggestion ?
      translate('suggestions.heading_previous_selections') :
      translate('suggestions.heading_model', { source: modelText });
    return <div><strong>{messageText}</strong></div>;
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
                title={suggestionsExpanded ? translate('suggestions.hide_settings_tooltip') : translate('suggestions.show_settings_tooltip')}
                onClick={() => handleSuggestionsExpanded(!suggestionsExpanded)}
                style={{ cursor: 'pointer' }}
              >
                {suggestionsExpanded ? translate('suggestions.hide_settings') : translate('suggestions.show_settings')}
              </button>
            }

            {expandSuggestionsDetails &&
              <React.Fragment>
                <label title={translate('suggestions.enable_suggestions_tooltip')}>
                  <input
                    type='checkbox'
                    checked={suggestionsEnabled}
                    onChange={handleSuggestionsCheckbox}
                  />
                  {' ' + translate('suggestions.enable_suggestions')}
                </label>

                <label title={translate('suggestions.use_ai_tooltip')}>
                  <input
                    type='checkbox'
                    checked={llmSuggestionsEnabled}
                    onChange={handleLlmSuggestionsCheckbox}
                  />
                  {' ' + translate('suggestions.use_ai')}
                </label>

                <button
                  type='button'
                  title={translate('suggestions.configure_ai_tooltip')}
                  onClick={openAiDialog}
                  style={{ cursor: 'pointer', margin: '10px' }}
                >
                  {translate('suggestions.configure_ai')}
                </button>

                <Dialog
                  open={aiDialogOpen}
                  onClose={cancelAiDialog}
                  fullWidth
                >
                  <DialogTitle>{translate('suggestions.configure_ai')}</DialogTitle>
                  <DialogContent>
                    <div style={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '10px',
                    }}>
                      <label title={translate('suggestions.ai_server_url_tooltip')}>
                        {' ' + translate('suggestions.ai_server_url') + ' '}
                        <input
                          type='text'
                          value={draftLlmQueryUrl}
                          onChange={handleLlmQueryUrlChange}
                          placeholder={translate('suggestions.ai_server_url_placeholder')}
                        />
                      </label>

                      <label title={translate('suggestions.maximize_requests_tooltip')}>
                        <input
                          type='checkbox'
                          checked={draftLlmMaximizeRequests}
                          onChange={handleMaximumAiRequestsCheckbox}
                        />
                        {' ' + translate('suggestions.maximize_requests')}
                      </label>

                      <label title={translate('suggestions.api_token_tooltip')}>
                        {' ' + translate('suggestions.api_token') + ' '}
                        <input
                          type='password'
                          value={draftLlmApiToken}
                          onChange={handleLlmApiTokenChange}
                          placeholder={translate('suggestions.api_token_placeholder')}
                        />
                      </label>

                      <label title={translate('suggestions.temperature_tooltip')}>
                        {' ' + translate('suggestions.temperature') + ' '}
                        <input
                          type='number'
                          min='0'
                          max='1'
                          step='0.1'
                          value={draftLlmTemperature}
                          onChange={handleLlmTemperatureChange}
                        />
                      </label>

                      <label title={translate('suggestions.group_size_tooltip')}>
                        {' ' + translate('suggestions.group_size') + ' '}
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
                        <label title={translate('suggestions.ai_model_tooltip')}>
                          {' ' + translate('suggestions.ai_model') + ' '}
                          <input
                            type='text'
                            value={draftCurrentModel || ''}
                            onChange={handleCurrentModelChange}
                            placeholder={translate('suggestions.ai_model_placeholder')}
                          />
                          {draftAvailableModels && draftAvailableModels.length > 0 &&
                            <select
                              value={draftAvailableModels.includes(draftCurrentModel) ? draftCurrentModel : ''}
                              onChange={handleCurrentModelChange}
                              title={translate('suggestions.available_models_tooltip')}
                            >
                              <option value=''>{translate('suggestions.available_models')}</option>
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
                          title={translate('suggestions.get_models_tooltip')}
                          onClick={() => fetchAvailableModels(draftLlmQueryUrl, draftLlmApiToken)}
                          disabled={fetchingModels || !draftLlmQueryUrl || !getModelsForChecking}
                          style={{ cursor: fetchingModels ? 'default' : 'pointer' }}
                        >
                          {fetchingModels ? translate('suggestions.getting_models') : translate('suggestions.get_models')}
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
                      {translate('suggestions.cancel')}
                    </button>
                    <button
                      type='button'
                      className='btn-prime'
                      onClick={() => saveAiDialog()}
                    >
                      {translate('suggestions.save')}
                    </button>
                  </DialogActions>
                </Dialog>

                { isEqual(fetching, contextId) &&
                  <div>{translate('suggestions.fetching')}</div>
                }

                <button
                  type='button'
                  title={translate('suggestions.refresh_tooltip')}
                  onClick={() => fetchSelectionSuggestions(true)}
                  style={{ cursor: 'pointer', margin: '10px' }}
                >
                  {translate('suggestions.refresh')}
                </button>

              </React.Fragment>
            }

            {bestSuggestions &&
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
                {showHeading()}
                {showSuggestions()}
              </div>
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
  saveSettingsForChecking: PropTypes.func,
  readSettingsForChecking: PropTypes.func,
  getModelsForChecking: PropTypes.func,
};

export default CheckArea;
