import React from 'react';
import PropTypes from 'prop-types';
import ContainerDimensions from 'react-container-dimensions';
import { Glyphicon } from 'react-bootstrap';
import {
  getTargetBibleTitle, getTranslation, isLTR,
} from '../helpers/utils';

import './Pane.styles.css';

// components
import Verse from '../Verse';

// constants
const PANECHAR = 9;

/**
 * create remove icon
 * @param {function} clickToRemoveResourceLabel
 * @param {number} index
 * @param {function} removePane
 * @return {*}
 */
function getRemoveicon(clickToRemoveResourceLabel, index, removePane) {
  return <Glyphicon
    className="remove-glyph-icon"
    glyph={'remove'}
    title={clickToRemoveResourceLabel}
    onClick={() => removePane(index)}
  />;
}

/**
 * create content for title container with selected overall justification
 * @param {boolean} isLTR - justification to use, if true do LTR
 * @param {string} headingText
 * @param {string} localizedDescription
 * @return {*}
 */
function getTitleContainerContent(isLTR, headingText, localizedDescription) {
  const styles = { textAlign: isLTR ? 'left' : 'right' };
  return <div className="pane-title-container-content" style={styles}>
    <span
      className={headingText.length > 21 ? 'pane-title-text hint--bottom hint--medium' : 'pane-title-text'}
      aria-label={headingText}>
      {headingText.length > 21 ? headingText.slice(0, 21) + '...' : headingText}
    </span>
    <ContainerDimensions>
      {
        ({ width }) =>
          <span
            className={localizedDescription.length > width / PANECHAR ? 'pane-subtitle-text hint--bottom hint--medium' : 'pane-subtitle-text'}
            aria-label={localizedDescription}>
            {
              localizedDescription.length > width / PANECHAR ?
                localizedDescription.slice(0, Math.round(width / PANECHAR)) + '...' :
                localizedDescription
            }
          </span>
      }
    </ContainerDimensions>
  </div>;
}

/**
 * create title container content with selected justification
 * @param {boolean} isLTR - justification to use
 * @param {string} headingText
 * @param {string} localizedDescription
 * @param {function} clickToRemoveResourceLabel
 * @param {number} index
 * @param {function} removePane
 * @return {*}
 */
function getTitleContainer(isLTR, headingText, localizedDescription, clickToRemoveResourceLabel, index, removePane) {
  if (isLTR) {
    return <>
      {getTitleContainerContent(isLTR, headingText, localizedDescription)}
      {getRemoveicon(clickToRemoveResourceLabel, index, removePane)}
    </>;
  } else { // arrange rtl
    return <>
      {getRemoveicon(clickToRemoveResourceLabel, index, removePane)}
      {getTitleContainerContent(isLTR, headingText, localizedDescription)}
    </>;
  }
}

const Pane = ({
  index,
  bibleId,
  languageName,
  direction,
  description,
  chapter,
  verse,
  removePane,
  verseElements,
  clickToRemoveResourceLabel,
  translate,
}) => {
  const isLTR_ = isLTR(direction);
  const headingText = bibleId !== 'targetBible' ?
    getTargetBibleTitle(languageName, bibleId, isLTR_)
    : (languageName || '');
  const localizedDescription = getTranslation(translate, `pane.${description}`, description);

  return (
    <div className="pane-container">
      <div className="pane-title-container">
        {getTitleContainer(isLTR_, headingText, localizedDescription,
          clickToRemoveResourceLabel, index, removePane)}
      </div>
      <div className={isLTR_ ? 'verse-content-container-ltr' : 'verse-content-container-rtl'}>
        <Verse
          translate={translate}
          verseElements={verseElements}
          bibleId={bibleId}
          direction={direction}
          chapter={chapter}
          verse={verse}
        />
      </div>
    </div>
  );
};

Pane.propTypes = {
  index: PropTypes.number.isRequired,
  bibleId: PropTypes.string.isRequired,
  languageName: PropTypes.string.isRequired,
  direction: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  chapter: PropTypes.number.isRequired,
  verse: PropTypes.number.isRequired,
  removePane: PropTypes.func.isRequired,
  translate: PropTypes.func.isRequired,
  clickToRemoveResourceLabel: PropTypes.string.isRequired,
  verseElements: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.string,
    PropTypes.array,
  ]).isRequired,
};

Pane.defaultProps = { verseElements: [] };

export default Pane;
