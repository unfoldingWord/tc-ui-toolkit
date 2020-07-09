import React from 'react';
import PropTypes from 'prop-types';
// components
import Pane from '../Pane';
// helpers
import { getFontClassName } from '../../common/fontUtils';
import { verseString, verseArray } from '../helpers/verseHelpers';
import { getTitleWithId } from '../helpers/utils';

function Panes({
  bibles,
  contextId,
  translate,
  removePane,
  selections,
  showPopover,
  getLexiconData,
  projectManifest,
  complexScriptFonts,
  changePaneFontSize,
  changePaneFontType,
  currentPaneSettings,
}) {
  const panes = [];

  for (let i = 0, len = currentPaneSettings.length; i < len; i++) {
    const paneSettings = currentPaneSettings[i];
    const index = i;

    try {
      let {
        font,
        bibleId,
        fontSize,
        languageId,
      } = paneSettings;
      const { manifest } = bibles[languageId][bibleId];
      let language_name = manifest.language_name;
      const targetLanguageFont = projectManifest.projectFont || '';
      const { chapter, verse } = contextId.reference;
      const verseData = bibles[languageId][bibleId][chapter][verse];
      let verseElements = [];

      if ((languageId === 'targetLanguage') && (bibleId === 'targetBible')) { // if target bible/language, pull up actual name
        language_name = getTitleWithId(manifest.language_name, manifest.language_id);
      }

      let description = manifest.description;

      if (languageId === 'originalLanguage') {
        description = 'original_language';
      }

      const isTargetBible = bibleId === 'targetBible';

      if (typeof verseData === 'string') { // if the verse content is string.
        verseElements = verseString(verseData, selections, translate, {}, isTargetBible, targetLanguageFont);
      } else if (verseData) { // else the verse content is an array of verse objects.
        verseElements = verseArray(verseData, bibleId, contextId, getLexiconData, showPopover, translate, {});
      }

      let fontClass = '';

      if (isTargetBible) {
        font = targetLanguageFont;
        fontClass = getFontClassName(targetLanguageFont);
      }

      panes.push(
        <Pane
          key={index.toString()}
          font={font}
          index={index}
          verse={verse}
          chapter={chapter}
          bibleId={bibleId}
          fontSize={fontSize}
          fontClass={fontClass}
          translate={translate}
          removePane={removePane}
          description={description}
          languageName={language_name}
          verseElements={verseElements}
          direction={manifest.direction}
          complexScriptFonts={complexScriptFonts}
          changePaneFontSize={changePaneFontSize}
          changePaneFontType={changePaneFontType}
          selectFontLabel={translate('pane.select_font_label')}
          removeResourceLabel={translate('pane.remove_resource_label')}
          clickToRemoveResourceLabel={translate('pane.remove_resource')}
        />,
      );
    } catch (err) {
      console.warn(err);
    }
  }

  return panes;
}

Panes.propTypes = {
  bibles: PropTypes.object.isRequired,
  translate: PropTypes.func.isRequired,
  removePane: PropTypes.func.isRequired,
  contextId: PropTypes.object.isRequired,
  selections: PropTypes.array.isRequired,
  showPopover: PropTypes.func.isRequired,
  getLexiconData: PropTypes.func.isRequired,
  changePaneFontType: PropTypes.func.isRequired,
  changePaneFontSize: PropTypes.func.isRequired,
  projectManifest: PropTypes.object.isRequired,
  complexScriptFonts: PropTypes.array.isRequired,
  currentPaneSettings: PropTypes.array.isRequired,
};

export default Panes;
