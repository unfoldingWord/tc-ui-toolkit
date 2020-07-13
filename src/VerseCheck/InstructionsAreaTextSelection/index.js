import React from 'react';
import PropTypes from 'prop-types';
import * as windowSelectionHelpers from '../helpers/windowSelectionHelpers';
import { getFontClassName } from '../../common/fontUtils';

const ELLIPSIS = '…';

export const SelectedText = ({ children }) => <strong style={{ color: 'var(--accent-color)' }}>{children}</strong>;

SelectedText.propTypes = { children: PropTypes.node.isRequired };

const getSelectionSpans = (selections, targetLanguageFont) => {
  const results = [];
  const fontClass = getFontClassName(targetLanguageFont);

  for (let i = 0, len = selections.length; i < len; i++) {
    const selection = selections[i];
    const index = i;

    results.push(
      <span key={index} >
        <strong style={{ color: 'var(--accent-color)' }} className={fontClass}>
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
  languageDirection,
}) => {
  const fontClass = getFontClassName(targetLanguageFont);

  if (windowSelectionHelpers.shouldRenderEllipsis(selections, verseText)) {
    return (
      <strong style={{ color: 'var(--accent-color)', direction: languageDirection }}>
        <span className={fontClass}>{selections[0].text.trim()}</span>
        <strong className={fontClass} style={{ color: 'var(--accent-color)' }}>
          {` ${ELLIPSIS} `}
        </strong>
        <span className={fontClass}>{selections[selections.length - 1].text.trim()}</span>
      </strong>
    );
  } else {
    return (
      <strong style={{ color: 'var(--accent-color)', direction: languageDirection }}>
        {getSelectionSpans(selections, targetLanguageFont)}
      </strong>
    );
  }
};

InstructionsAreaTextSelection.propTypes = {
  selections: PropTypes.array.isRequired,
  verseText: PropTypes.string.isRequired,
  targetLanguageFont: PropTypes.string,
  languageDirection: PropTypes.string,
};

InstructionsAreaTextSelection.defaultProps = { languageDirection: 'ltr' };

export default InstructionsAreaTextSelection;
