import React from 'react';
import PropTypes from 'prop-types';
import ContainerDimensions from 'react-container-dimensions';
import {
  getTitleWithId, getTranslation, isLTR,
} from '../helpers/utils';
import Verse from '../Verse';
import ThreeDotMenu from '../ThreeDotMenu';
import './Pane.styles.css';
// constants
const PANECHAR = 9;

/**
 * create content for title container with selected overall justification
 * @param {boolean} isLTR - justification to use, if true do LTR
 * @param {string} headingText
 * @param {string} localizedDescription
 * @param {string} fontClass
 * @return {*}
 */
function getTitleContainerContent(isLTR, headingText, localizedDescription, fontClass) {
  const styles = { textAlign: isLTR ? 'left' : 'right' };
  const paneTitleClassName = fontClass ? `pane-title-text ${fontClass}` : 'pane-title-text';
  const headingClassName = headingText.length > 21 ? `${paneTitleClassName} hint--bottom hint--medium` : paneTitleClassName;
  const paneSubtitleClassName = fontClass ? `pane-title-text ${fontClass}` : 'pane-title-text';

  return (
    <div className="pane-title-container-content" style={styles}>
      <span
        style={{ lineHeight: fontClass ? 1.4 : '' }}
        className={headingClassName}
        aria-label={headingText}>
        {headingText.length > 21 ? headingText.slice(0, 21) + '...' : headingText}
      </span>
      <ContainerDimensions>
        {
          ({ width }) => {
            const className = localizedDescription.length > width / PANECHAR ? `${paneSubtitleClassName} hint--bottom hint--medium` : paneSubtitleClassName;
            return (
              <span
                className={className}
                style={{ lineHeight: fontClass ? 1.4 : '' }}
                aria-label={localizedDescription}>
                {
                  localizedDescription.length > width / PANECHAR ?
                    localizedDescription.slice(0, Math.round(width / PANECHAR)) + '...' :
                    localizedDescription
                }
              </span>
            );
          }
        }
      </ContainerDimensions>
    </div>
  );
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
function GetTitleContainer({
  index,
  isLTR,
  fontClass,
  removePane,
  headingText,
  isTargetBible,
  removeResourceLabel,
  localizedDescription,
  clickToRemoveResourceLabel,
}) {
  if (isLTR) {
    return <>
      {getTitleContainerContent(isLTR, headingText, localizedDescription, fontClass)}
      <ThreeDotMenu
        index={index}
        removePane={removePane}
        isTargetBible={isTargetBible}
        removeResourceLabel={removeResourceLabel}
        clickToRemoveResourceLabel={clickToRemoveResourceLabel}
      />
    </>;
  } else { // arrange rtl
    return <>
      <ThreeDotMenu
        index={index}
        removePane={removePane}
        isTargetBible={isTargetBible}
        removeResourceLabel={removeResourceLabel}
        clickToRemoveResourceLabel={clickToRemoveResourceLabel}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      />
      {getTitleContainerContent(isLTR, headingText, localizedDescription, fontClass)}
    </>;
  }
}

const Pane = ({
  index,
  verse,
  chapter,
  bibleId,
  fontClass,
  direction,
  translate,
  removePane,
  description,
  languageName,
  verseElements,
  isTargetBible,
  removeResourceLabel,
  clickToRemoveResourceLabel,
}) => {
  const isLTR_ = isLTR(direction);
  const headingText = bibleId !== 'targetBible' ?
    getTitleWithId(languageName, bibleId)
    : (languageName || '');
  const localizedDescription = getTranslation(translate, `pane.${description}`, description);

  return (
    <div className="pane-container">
      <div className="pane-title-container">
        <GetTitleContainer
          index={index}
          isLTR={isLTR_}
          fontClass={fontClass}
          removePane={removePane}
          headingText={headingText}
          isTargetBible={isTargetBible}
          removeResourceLabel={removeResourceLabel}
          localizedDescription={localizedDescription}
          clickToRemoveResourceLabel={clickToRemoveResourceLabel}
        />
      </div>
      <div className={isLTR_ ? 'verse-content-container-ltr' : 'verse-content-container-rtl'}>
        <Verse
          verse={verse}
          bibleId={bibleId}
          chapter={chapter}
          translate={translate}
          direction={direction}
          verseElements={verseElements}
        />
      </div>
    </div>
  );
};

Pane.propTypes = {
  fontClass: PropTypes.string,
  index: PropTypes.number.isRequired,
  verse: PropTypes.number.isRequired,
  bibleId: PropTypes.string.isRequired,
  chapter: PropTypes.number.isRequired,
  translate: PropTypes.func.isRequired,
  removePane: PropTypes.func.isRequired,
  direction: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  isTargetBible: PropTypes.bool.isRequired,
  languageName: PropTypes.string.isRequired,
  removeResourceLabel: PropTypes.string.isRequired,
  clickToRemoveResourceLabel: PropTypes.string.isRequired,
  verseElements: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.string,
    PropTypes.array,
  ]).isRequired,
};

Pane.defaultProps = { verseElements: [] };

export default Pane;
