import { verseString, verseArray } from './verseHelpers';
import { delay } from './utils';

/**
 * Generates bible data with Highlighted Words for the current verses based on the context id.
 * @param {object} bibles
 * @param {array} selections
 * @param {object} contextId
 * @param {function} getLexiconData
 * @param {function} showPopover
 * @param {function} translate
 */
export const getCurrentVersesWithHighlightedWords = (bibles, selections, contextId, getLexiconData, showPopover, translate) => {
  try {
    const parsedBible = {};

    for (let i = 0, bLen = Object.keys(bibles).length; i < bLen; i++) {
      const languageId = Object.keys(bibles)[i];
      parsedBible[languageId] = {};
      const currentBible = bibles[languageId];

      for (let j = 0, cbLen = Object.keys(currentBible).length; j < cbLen; j++) {
        const bibleId = Object.keys(currentBible)[j];
        parsedBible[languageId][bibleId] = { bibleData: {} };

        for (let k = 0, cbiLen = Object.keys(currentBible[bibleId]).length; k < cbiLen; k++) {
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
            const { reference: { verse } } = contextId;
            const verseData = chapterData[verse];

           if (typeof verseData === 'string') { // if the verse content is string.
              parsedBible[languageId][bibleId]['bibleData'][chapterNumber][verse] = verseString(verseData, selections, translate);
            } else if (verseData) { // then the verse content is an array/verse objects.
              parsedBible[languageId][bibleId]['bibleData'][chapterNumber][verse] = verseArray(verseData, bibleId, contextId, getLexiconData, showPopover, translate);
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
  } catch (error) {
    console.error(error);
    throw error;
  }
};

/**
 * Generates bible data with Highlighted Words for the entire chapter.
 * @param {object} bibles
 * @param {array} selections
 * @param {object} contextId
 * @param {function} getLexiconData
 * @param {function} showPopover
 * @param {function} translate
 */
export const getBiblesWithHighlightedWords = async (bibles, selections, contextId, getLexiconData, showPopover, translate) => {
  await delay(40); // added extremely slight delay to allow spinner to render.
  try {
    const parsedBible = {};

    for (let i = 0, bLen = Object.keys(bibles).length; i < bLen; i++) {
      const languageId = Object.keys(bibles)[i];
      parsedBible[languageId] = {};
      const currentBible = bibles[languageId];

      for (let j = 0, cbLen = Object.keys(currentBible).length; j < cbLen; j++) {
        const bibleId = Object.keys(currentBible)[j];
        parsedBible[languageId][bibleId] = { bibleData: {} };

        for (let k = 0, cbiLen = Object.keys(currentBible[bibleId]).length; k < cbiLen; k++) {
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

            for (let l = 0, lLength = Object.keys(chapterData).length; l < lLength; l++) {
              const verseNumber = Object.keys(chapterData)[l];
              const verseData = chapterData[verseNumber];

              if (typeof verseData === 'string') { // if the verse content is string.
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
  } catch (error) {
    console.error(error);
    throw error;
  }
};
