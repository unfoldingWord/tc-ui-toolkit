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
}) => {
  const [suggestionsEnabled, setSuggestionsEnabled] = React.useState(false);
  const [bestSuggestion, setBestSuggestion] = React.useState(false);
  let modeArea;
  const { direction: targetLanguageDirection = 'ltr' } = targetLanguageDetails || {};

  React.useEffect(() => {
    setBestSuggestion(null);
  }, [
    contextId,
  ]);

  React.useEffect(() => {
    const haveNewSelections = newSelections && newSelections.length;

    if (suggestionsEnabled && !haveNewSelections && getSuggestions) {
      getSuggestions({
        alignedGLText,
        bookDetails,
        contextId,
        targetLanguageDetails,
        verseText,
      }).then(_suggestions => {
        // TRICKY - expects the _suggestions to be sorted with the best first
        const _bestSuggestion = _suggestions?.length && _suggestions[0] || false;
        setBestSuggestion(_bestSuggestion);

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
  }, [
    contextId,
    suggestionsEnabled,
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
          <div>
            <label>
              <input
                type='checkbox'
                checked={suggestionsEnabled}
                onChange={handleSuggestionsCheckbox}
              />
              {' Enable Suggestions'}
            </label>

            {bestSuggestion &&
              <div>{`${++counter} - Received Suggestions: ` + JSON.stringify(bestSuggestion)}</div>
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
};

export default CheckArea;
