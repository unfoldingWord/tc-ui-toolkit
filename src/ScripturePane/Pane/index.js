import React from 'react';
import PropTypes from 'prop-types';
import ContainerDimensions from 'react-container-dimensions';
import { Glyphicon } from 'react-bootstrap';
import {getTranslation} from '../helpers/utils';

import './Pane.styles.css';

// components
import Verse from '../Verse';

const Pane = ({
  index,
  bibleId,
  languageName,
  direction,
  description,
  chapter,
  verse,
  removePane,
  verseData,
  clickToRemoveResourceLabel,
  translate,
  setFontSize,
  getLexiconData,
  showPopover,
  contextId,
  selections
}) => {
  const headingText = bibleId !== "targetBible" ? languageName + " (" + bibleId.toUpperCase() + ")" : (languageName || '');
  const PANECHAR = 9;
  const localizedDescription = getTranslation(translate, `pane.${description}`, description);
  return (
    <div className="pane-container">
      <div className="pane-title-container">
        <div className="pane-title-container-content">
          <span
            className={headingText.length > 21 ? 'pane-title-text hint--bottom hint--medium' : 'pane-title-text'}
            aria-label={headingText}>
            {headingText.length > 21 ? headingText.slice(0, 21) + '...' : headingText}
          </span>
          <ContainerDimensions>
            {
              ({ width }) =>
              <span
                className={localizedDescription.length > width/PANECHAR ? 'pane-subtitle-text hint--bottom hint--medium' : 'pane-subtitle-text'}
                aria-label={localizedDescription}>
                {
                  localizedDescription.length > width/PANECHAR ?
                    localizedDescription.slice(0, Math.round(width/PANECHAR)) + "..." :
                    localizedDescription
                }
              </span>
            }
          </ContainerDimensions>
        </div>
        <Glyphicon
          className="remove-glyph-icon"
          glyph={"remove"}
          title={clickToRemoveResourceLabel}
          onClick={() => removePane(index)}
        />
      </div>
      <div className={direction === 'ltr' ? 'verse-content-container-ltr' : 'verse-content-container-rtl'}>
        <Verse
          showPopover={showPopover}
          getLexiconData={getLexiconData}
          translate={translate}
          verseData={verseData}
          bibleId={bibleId}
          direction={direction}
          chapter={chapter}
          verse={verse}
          setFontSize={setFontSize}
          selections={selections}
          contextId={contextId}
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
  verseData: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
  ]).isRequired,
  setFontSize: PropTypes.func,
  getLexiconData: PropTypes.func.isRequired,
  showPopover: PropTypes.func.isRequired,
  selections: PropTypes.array.isRequired,
  contextId: PropTypes.object.isRequired,
};

Pane.defaultProps = {
  verseElements: []
};

export default Pane;
