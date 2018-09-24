import { verseString, verseArray } from './verseHelpers';

export const getBiblesWithHighlightedWords = (bibles, selections, contextId, getLexiconData, showPopover, translate) => {
  const parsedBible = {};

  for (let i = 0; i < Object.keys(bibles).length; i++) {
    const languageId = Object.keys(bibles)[i];
    parsedBible[languageId] = {};
    const currentBible = bibles[languageId];


    for (let j = 0; j < Object.keys(currentBible).length; j++) {
      const bibleId = Object.keys(currentBible)[j];
      parsedBible[languageId][bibleId] = { bibleData: {} };

      for (let k = 0; k < Object.keys(currentBible[bibleId]).length; k++) {
        const chapterNumber = Object.keys(currentBible[bibleId])[k];
        if (chapterNumber !== 'manifest') {
          parsedBible[languageId][bibleId] = {
            ...parsedBible[languageId][bibleId],
            bibleData: {
              ...parsedBible[languageId][bibleId]['bibleData'],
              [chapterNumber]: {}
            }
          };
          const chapterData = currentBible[bibleId][chapterNumber];

          for (let l = 0; l < Object.keys(chapterData).length; l++) {
            const verseNumber = Object.keys(chapterData)[l];
            const verseData = chapterData[verseNumber];
            if (verseData && typeof verseData === 'string') { // if the verse content is string.
              parsedBible[languageId][bibleId]['bibleData'][chapterNumber][verseNumber] = verseString(verseData, selections, translate);
            } else if (verseData) { // then the verse content is an array/verse objects.
              parsedBible[languageId][bibleId]['bibleData'][chapterNumber][verseNumber] = verseArray(verseData, bibleId, contextId, getLexiconData, showPopover, translate);
            }
          }
        } else {// is manifest
          const manifest = currentBible[bibleId][chapterNumber];
          parsedBible[languageId][bibleId] = {
            ...parsedBible[languageId][bibleId],
            [chapterNumber]: manifest,
          };
        }
      }
    }
  }
  return parsedBible;
};
