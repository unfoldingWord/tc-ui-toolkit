import React from 'react';
import PropTypes from 'prop-types';
import * as windowSelectionHelpers from '../helpers/windowSelectionHelpers';
const ELLIPSIS = '…';

let InstructionsAreaTextSelection = ({ selections, verseText }) => {
  if (windowSelectionHelpers.shouldRenderEllipsis(selections, verseText)) {
    return (
      <QuoatationMarks>
        {selections[0].text.trim()}
        <strong style={{ color: 'var(--accent-color)' }}>{` ${ELLIPSIS} `}</strong>
        {selections[selections.length - 1].text.trim()}
      </QuoatationMarks>
    );
  } else {
    return (
      <QuoatationMarks>
        {selections.map((selection, index) =>
          <span key={index}>
            <strong style={{ color: 'var(--accent-color)' }}>
              {`${selection.text.trim()}`}
            </strong>
            {selections[index + 1] ? <span>{" "}</span> : null}
          </span>
        )}
      </QuoatationMarks>
    );
  }
};

export default InstructionsAreaTextSelection;
InstructionsAreaTextSelection.propTypes = {
  selections: PropTypes.array.isRequired,
  verseText: PropTypes.string.isRequired
};

const QuoatationMarks = ({ children }) => <strong style={{ color: 'var(--accent-color)' }}>{'"'}{children}{'"'}</strong>;

QuoatationMarks.propTypes = {
  children: PropTypes.array.isRequired
};
