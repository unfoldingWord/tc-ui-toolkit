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
function TitleContainer({
  index,
  isLTR,
  fontSize,
  fontClass,
  removePane,
  headingText,
  changePaneFontSize,
  removeResourceLabel,
  localizedDescription,
  clickToRemoveResourceLabel,
}) {
  if (isLTR) {
    return <>
      {getTitleContainerContent(isLTR, headingText, localizedDescription, fontClass)}
      <ThreeDotMenu
        index={index}
        fontSize={fontSize}
        removePane={removePane}
        changePaneFontSize={changePaneFontSize}
        removeResourceLabel={removeResourceLabel}
        clickToRemoveResourceLabel={clickToRemoveResourceLabel}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      />
    </>;
  } else { // arrange rtl
    return <>
      <ThreeDotMenu
        index={index}
        fontSize={fontSize}
        removePane={removePane}
        changePaneFontSize={changePaneFontSize}
        removeResourceLabel={removeResourceLabel}
        clickToRemoveResourceLabel={clickToRemoveResourceLabel}
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
  fontSize,
  fontClass,
  direction,
  translate,
  removePane,
  description,
  languageName,
  verseElements,
  changePaneFontSize,
  removeResourceLabel,
  clickToRemoveResourceLabel,
}) => {
  const isLTR_ = isLTR(direction);
  const headingText = bibleId !== 'targetBible' ?
    getTitleWithId(languageName, bibleId)
    : (languageName || '');
  const localizedDescription = getTranslation(translate, `pane.${description}`, description);
  const verseContainerStyle = fontSize ? { fontSize: `${fontSize}%` } : {};

  return (
    <div className="pane-container">
      <div className="pane-title-container">
        <TitleContainer
          index={index}
          isLTR={isLTR_}
          fontSize={fontSize}
          fontClass={fontClass}
          removePane={removePane}
          headingText={headingText}
          changePaneFontSize={changePaneFontSize}
          removeResourceLabel={removeResourceLabel}
          localizedDescription={localizedDescription}
          clickToRemoveResourceLabel={clickToRemoveResourceLabel}
        />
      </div>
      <div className={isLTR_ ? 'verse-content-container-ltr' : 'verse-content-container-rtl'} style={verseContainerStyle}>
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
  fontSize: PropTypes.number,
  fontClass: PropTypes.string,
  index: PropTypes.number.isRequired,
  verse: PropTypes.number.isRequired,
  bibleId: PropTypes.string.isRequired,
  chapter: PropTypes.number.isRequired,
  translate: PropTypes.func.isRequired,
  removePane: PropTypes.func.isRequired,
  direction: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  languageName: PropTypes.string.isRequired,
  changePaneFontSize: PropTypes.func.isRequired,
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
