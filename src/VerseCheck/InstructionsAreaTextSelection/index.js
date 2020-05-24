import React from 'react';
import PropTypes from 'prop-types';
import * as windowSelectionHelpers from '../helpers/windowSelectionHelpers';
import { getFontClassName } from '../../common/fontUtils';

const ELLIPSIS = '…';

export const QuoatationMarks = ({ children }) => <strong style={{ color: 'var(--accent-color)' }}>{'"'}{children}{'"'}</strong>;

QuoatationMarks.propTypes = { children: PropTypes.object.isRequired };

const getSelectionSpans = (selections, targetLanguageFont) => {
  const results = [];

  for (let i = 0, len = selections.length; i < len; i++) {
    const selection = selections[i];
    const index = i;

    results.push(
      <span key={index} >
        <strong style={{ color: 'var(--accent-color)' }}>
          {`${selection.text.trim()}`}
        </strong>
        {selections[index + 1] ? <span>{' '}</span> : null}
      </span>,
    );
  }

  return results;
};

const InstructionsAreaTextSelection = ({
  verseText,
  selections,
  targetLanguageFont,
}) => {
  const fontClass = getFontClassName(targetLanguageFont);

  if (windowSelectionHelpers.shouldRenderEllipsis(selections, verseText)) {
    return (
      <QuoatationMarks>
        {selections[0].text.trim()}
        <strong style={{ color: 'var(--accent-color)' }} className={fontClass}>
          {` ${ELLIPSIS} `}
        </strong>
        {selections[selections.length - 1].text.trim()}
      </QuoatationMarks>
    );
  } else {
    return (
      <QuoatationMarks>
        {getSelectionSpans(selections, targetLanguageFont)}
      </QuoatationMarks>
    );
  }
};

InstructionsAreaTextSelection.propTypes = {
  selections: PropTypes.array.isRequired,
  verseText: PropTypes.string.isRequired,
  targetLanguageFont: PropTypes.string,
};

export default InstructionsAreaTextSelection;
