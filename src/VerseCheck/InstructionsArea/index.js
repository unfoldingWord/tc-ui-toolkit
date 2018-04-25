import React from 'react';
import PropTypes from 'prop-types';
import '../VerseCheck.styles.css';
import InstructionsAreaTextSelection from '../InstructionsAreaTextSelection';


let InstructionsArea = ({
  alignedGLText,
  selections,
  dontShowTranslation,
  verseText,
  mode,
  translate
}) => {

  if (!verseText) {
    return (
      <div className='InstructionsArea'>
        <span>{translate("empty_verse")}</span><br />
      </div>
    );
  }

  if (selections.length === 0 && dontShowTranslation) {
    return (
      <div className='InstructionsArea'>
        <span>{translate("no_selection")}</span><br />
      </div>
    );
  }

  if (mode === 'select') {
    return (
      <div className='InstructionsArea'>
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
    <div className='InstructionsArea'>
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