import React from 'react';
// components
import { getFontClassName } from '../../common/fontUtils';
import Pane from '../Pane';
// helpers
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
  changePaneFontSize,
  currentPaneSettings,
}) {
  const panes = [];

  for (let i = 0, len = currentPaneSettings.length; i < len; i++) {
    const paneSettings = currentPaneSettings[i];
    const index = i;

    try {
      const {
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
        fontClass = getFontClassName(targetLanguageFont);
      }

      panes.push(
        <Pane
          key={index.toString()}
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
          changePaneFontSize={changePaneFontSize}
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

export default Panes;
