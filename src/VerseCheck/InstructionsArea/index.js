import React from 'react';
import PropTypes from 'prop-types';
import './InstructionsArea.styles.css';
import InstructionsAreaTextSelection from '../InstructionsAreaTextSelection';


let InstructionsArea = ({
  alignedGLText,
  selections,
  dontShowTranslation,
  verseText,
  mode,
  translate,
  invalidated
}) => {

  if (!verseText) {
    return (
      <div className='instructions-area'>
        <span>{translate("empty_verse")}</span><br />
      </div>
    );
  }

  if (selections.length === 0 && dontShowTranslation) {
    return (
      <div className='instructions-area'>
        <span>{translate("no_selection")}</span><br />
      </div>
    );
  }

  function getSelectionString() {
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
              style={{ 'vertical-align': 'super', 'font-size': '0.8em' }}>
              1 
            </strong>
          </span>
        </div>
      );
    }
  }

  if (mode === 'select') {
    return (
      <div className='instructions-area'>
        {getSelectionString()}
        <span>{translate("please_select")}</span><br />
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
      <span>{translate("translated_as")}</span><br />
      <span>
        <InstructionsAreaTextSelection
          selections={selections}
          verseText={verseText} />
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
  mode: PropTypes.string
};

export default InstructionsArea;