import { verseString, verseArray } from './verseHelpers';

export const getBiblesWithHighlightedWords = (bibles, selections, contextId, getLexiconData, showPopover, translate) => {
  const parsedBible = {};
  Object.keys(bibles).forEach((languageId) => {
    parsedBible[languageId] = {};
    const currentBible = bibles[languageId];
    Object.keys(currentBible).forEach(bibleId => {
      parsedBible[languageId][bibleId] = { bibleData: {} };
      Object.keys(currentBible[bibleId]).forEach(chapterNumber => {
        if (chapterNumber !== 'manifest') {
          parsedBible[languageId][bibleId] = {
            ...parsedBible[languageId][bibleId],
            bibleData: {
              ...parsedBible[languageId][bibleId]['bibleData'],
              [chapterNumber]: {}
            }
          };
          const chapterData = currentBible[bibleId][chapterNumber];
          Object.keys(chapterData).forEach(verseNumber => {
            const verseData = chapterData[verseNumber];
            if (verseData && typeof verseData === 'string') { // if the verse content is string.
              parsedBible[languageId][bibleId]['bibleData'][chapterNumber][verseNumber] = verseString(verseData, selections);
            } else if (verseData) { // then the verse content is an array/verse objects.
              parsedBible[languageId][bibleId]['bibleData'][chapterNumber][verseNumber] = verseArray(verseData, bibleId, contextId, getLexiconData, showPopover, translate);
            }
          });
        } else {// is manifest
          const manifest = currentBible[bibleId][chapterNumber];
          parsedBible[languageId][bibleId] = {
            ...parsedBible[languageId][bibleId],
            [chapterNumber]: manifest,
          };
        }
      });
    });
  });

  return parsedBible;
};
