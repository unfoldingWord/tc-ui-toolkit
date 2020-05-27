import React from 'react';
import PropTypes from 'prop-types';
import ReactTooltip from 'react-tooltip';
// components
import InstructionsAreaTextSelection, { QuoatationMarks } from '../InstructionsAreaTextSelection';
// css
import './InstructionsArea.styles.css';

function getSelectionString(invalidated, translate) {
  if (invalidated) {
    return (
      <div>
        <span>{translate('selection_invalidated')}
          <strong
            data-tip={translate('invalidated_tooltip')}
            data-place="top"
            data-effect="float"
            data-type="dark"
            data-class="selection-tooltip"
            data-delay-hide="100"
            style={{ verticalAlign: 'super', fontSize: '0.8em' }}>
            1
          </strong>
        </span>
        <ReactTooltip />
      </div>
    );
  }
}

const InstructionsArea = ({
  mode,
  verseText,
  translate,
  selections,
  invalidated,
  alignedGLText,
  nothingToSelect,
  targetLanguageFont,
  dontShowTranslation,
}) => {
  if (!verseText) {
    return (
      <div className='instructions-area'>
        <span>{translate('empty_verse')}</span><br />
      </div>
    );
  }

  if (nothingToSelect) { // if nothingToSelect is true
    return (
      <div className='instructions-area'>
        <span>{translate('no_selection_needed_description')}</span><br />
        <QuoatationMarks>
          <strong className="no-selection-needed">
            {translate('no_selection_needed')}
          </strong>
        </QuoatationMarks>
      </div>
    );
  }

  if (selections.length === 0 && dontShowTranslation && !invalidated) { // if invalidated we had previous selection
    return (
      <div className='instructions-area'>
        <span>{translate('no_selection')}</span><br />
      </div>
    );
  }

  if (mode === 'select' || invalidated) { // if invalidated we had previous selection
    return (
      <div className='instructions-area'>
        {getSelectionString(invalidated, translate)}
        <span>{translate('please_select')}</span><br />
        <span>
          <strong style={{ color: 'var(--accent-color)' }}>
            {`"${alignedGLText}"`}
          </strong>
        </span><br />
      </div>
    );
  }

  return (
    <div className='instructions-area'>
      <span>
        <strong style={{ color: 'var(--accent-color)' }}>
          {`"${alignedGLText}"`}
        </strong>
      </span><br />
      <span>{translate('translated_as')}</span><br />
      <span>
        <InstructionsAreaTextSelection
          selections={selections}
          verseText={verseText}
          targetLanguageFont={targetLanguageFont}
        />
      </span>
    </div>
  );
};

InstructionsArea.propTypes = {
  translate: PropTypes.func.isRequired,
  alignedGLText: PropTypes.string.isRequired,
  selections: PropTypes.array.isRequired,
  dontShowTranslation: PropTypes.bool,
  verseText: PropTypes.string.isRequired,
  mode: PropTypes.string,
  invalidated: PropTypes.bool,
  nothingToSelect: PropTypes.bool,
  targetLanguageFont: PropTypes.string,
};

export default InstructionsArea;
