import isEqual from 'deep-equal';
import React from 'react';
import PropTypes from 'prop-types';
// components
import DefaultArea from '../DefaultArea';
import SelectionArea from '../SelectionArea';
import InstructionsArea from '../InstructionsArea';
import EditVerseArea from '../EditVerseArea';
import CommentArea from '../CommentArea';
import './CheckArea.styles.css';

let counter = 0;

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
  saveSattingsForChecking, // if defined will call save latest settings
  readSettingsForChecking, // if defined will get latest settings
  getModelsForChecking, // if defined will fetch available models
}) => {
  const [bestSuggestion, setBestSuggestion] = React.useState(false);
  const [suggestionsEnabled, setSuggestionsEnabled] = React.useState(false);
  const [llmSuggestionsEnabled, setLlmSuggestionsEnabled] = React.useState(false);
  const [llmQueryUrl, setLlmQueryUrl] = React.useState('');
  const [suggestionsInit, setSuggestionsInit] = React.useState(false);
  const [availableModels, setAvailableModels] = React.useState(null);
  const [currentModel, setCurrentModel] = React.useState(null);

  let modeArea;
  const { direction: targetLanguageDirection = 'ltr' } = targetLanguageDetails || {};

  /**
   * Initializes available models by fetching them from getModelsForChecking if LLM suggestions
   * are enabled. Sets the default model if none is currently selected and marks initialization complete.
   * @param {boolean} llmSuggestionsEnabled - whether LLM suggestions are enabled
   * @param {string} llmQueryUrl - the URL for LLM queries
   * @param {string} currentModel - the currently selected model ID
   */
  function initializeModels(llmSuggestionsEnabled, llmQueryUrl, currentModel) {
    if (llmSuggestionsEnabled && llmSuggestionsEnabled && llmQueryUrl && getModelsForChecking) {
      getModelsForChecking({ baseUrl: llmQueryUrl }).then(results => {
        const { models, error } = results;

        if (!error) {
          const _availableModels = models || [];

          setAvailableModels(_availableModels);
          const modelNotValid = !currentModel || !_availableModels.includes(currentModel);

          if (modelNotValid && _availableModels.length) {
            const defaultModel = _availableModels[0].id || _availableModels[0].name || _availableModels[0];
            setCurrentModel(defaultModel);
            saveSattingsForChecking_({ currentModel: defaultModel });
          }
          setSuggestionsInit(true);
        } else {
          console.log(`Error fetching models`, error);
          setAvailableModels(null);
          setCurrentModel(null);
          saveSattingsForChecking_({ currentModel: null });
          setSuggestionsInit(true);
        }
      });
    } else {
      setSuggestionsInit(true);
    }
  }

// do initialization of settings
  React.useEffect(() => {
    if (!suggestionsInit) {
      const data = readSettingsForChecking?.();
      console.log(data);

      const {
        currentModel = '',
        llmSuggestionsEnabled = false,
        llmQueryUrl = null,
        suggestionsEnabled = false,
      } = data || {};
      console.log('restoring original settings', data);
      setSuggestionsEnabled(suggestionsEnabled);
      setLlmSuggestionsEnabled(llmSuggestionsEnabled);
      setLlmQueryUrl(llmQueryUrl);
      setCurrentModel(currentModel);

      if (data) {
        initializeModels(llmSuggestionsEnabled, llmQueryUrl, currentModel);
      } else {
        console.log('Error fetching settings');
        setSuggestionsInit(true);
      }
    }
  }, [
    suggestionsInit,
  ]);

  React.useEffect(() => {
    setBestSuggestion(null);
  }, [
    contextId,
  ]);

  /**
   * Saves the current checking settings (suggestions and LLM configuration).
   * @param {object} newData - Optional partial settings to merge with current state
   */
  function saveSattingsForChecking_(newData = {}) {
    const data = {
      suggestionsEnabled,
      llmSuggestionsEnabled,
      llmQueryUrl,
      currentModel,
      ...newData,
    };

    // eslint-disable-next-line no-unused-expressions
    saveSattingsForChecking?.(data);
  }

  /**
   * Fetches selection suggestions from the getSuggestions API and updates the best suggestion.
   * If in 'select' mode with no current selections, automatically applies the best suggestion.
   */
  function fetchSelectionSuggestions() {
    const alreadyHaveNewSelections = newSelections && newSelections.length;

    if (suggestionsInit && suggestionsEnabled && !alreadyHaveNewSelections && getSuggestions) {
      getSuggestions({
        alignedGLText,
        bookDetails,
        contextId,
        currentModel,
        llmSuggestionsEnabled,
        llmQueryUrl,
        targetLanguageDetails,
        verseText,
      }).then(results => {
        const {
          error,
          bestSelections: _suggestions,
          elapsedStr,
          model,
        } = results;

        // TRICKY - expects the _suggestions to be sorted with the best first
        const _bestSuggestion = _suggestions?.length && _suggestions[0] || { selections: false };

        setBestSuggestion({
          ..._bestSuggestion,
          elapsedStr,
          model,
        });

        if (mode === 'select' && _bestSuggestion?.confidence && _bestSuggestion?.selections?.length) {
          if (newSelections?.length === 0) {
            if (!isEqual(_bestSuggestion.selections, newSelections)) {
              changeSelectionsInLocalState(_bestSuggestion.selections);
            }
          }
        }

        console.log(`CheckArea getSuggestions=${!!getSuggestions} suggestionsEnabled=${suggestionsEnabled} suggestions`, {
          bestSuggestions: _suggestions,
          newSelections,
        });
      });
    }
  }

  React.useEffect(() => {
    fetchSelectionSuggestions();
  }, [
    contextId,
    suggestionsEnabled,
    llmSuggestionsEnabled,
    currentModel,
    suggestionsInit,
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
      saveSattingsForChecking_({ suggestionsEnabled: checked });

      if (checked) {
        initializeModels(llmSuggestionsEnabled, llmQueryUrl, currentModel);
      }
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
      saveSattingsForChecking_({ llmSuggestionsEnabled: checked });

      if (suggestionsEnabled && checked) {
        initializeModels(checked, llmQueryUrl, currentModel);
      }
    }
  }

  /**
   * Updates llmQueryUrl state from the LLM query URL input.
   * @param {object} e - input change event
   */
  function handleLlmQueryUrlChange(e) {
    const value = e.target.value;

    if (value !== llmQueryUrl) {
      setLlmQueryUrl(value);
      saveSattingsForChecking_({ llmQueryUrl: value });

      if (suggestionsEnabled && value) {
        initializeModels(llmSuggestionsEnabled, value, currentModel);
      }
    }
  }

  /**
   * Updates currentModel state from the available models selector.
   * @param {object} e - select change event
   */
  function handleCurrentModelChange(e) {
    const value = e.target.value;

    if (value !== currentModel) {
      setCurrentModel(value);
      saveSattingsForChecking_({ currentModel: value });
    }
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
            gap: '12px',
          }}>
            <label>
              <input
                type='checkbox'
                checked={suggestionsEnabled}
                onChange={handleSuggestionsCheckbox}
              />
              {' Enable Suggestions'}
            </label>

            <label>
              <input
                type='checkbox'
                checked={llmSuggestionsEnabled}
                onChange={handleLlmSuggestionsCheckbox}
              />
              {' LLM Suggestions'}
            </label>

            <input
              type='text'
              value={llmQueryUrl}
              onChange={handleLlmQueryUrlChange}
              placeholder='LLM query URL'
            />

            {availableModels && availableModels.length > 0 &&
              <select
                value={currentModel}
                onChange={handleCurrentModelChange}
              >
                {availableModels.map(model => {
                  const value = model.id || model.name || model;
                  const label = model.label || model.name || model.id || model;

                  return (
                    <option key={value} value={value}>
                      {label}
                    </option>
                  );
                })}
              </select>
            }

            {bestSuggestion &&
              <div
                style={{
                  flexBasis: '100%',
                  maxWidth: '100%',
                  overflowWrap: 'anywhere',
                  wordBreak: 'break-word',
                  whiteSpace: 'normal',
                }}
              >
                {`${++counter} - Received Suggestions: ` + JSON.stringify(bestSuggestion)}
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
  suggestionsEnabled: PropTypes.bool.isRequired,
  setSuggestionsEnabled: PropTypes.func.isRequired,
  saveSattingsForChecking: PropTypes.func,
  readSettingsForChecking: PropTypes.func,
  getModelsForChecking: PropTypes.func,
};

export default CheckArea;
