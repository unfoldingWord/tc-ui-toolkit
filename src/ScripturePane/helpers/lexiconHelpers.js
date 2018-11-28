import {MorphUtils} from "word-aligner";

const ZERO_WIDTH_SPACE = '\u200B';

/**
 * splits a word by zero width spaces
 * @param {String} word - compound word to split
 * @return {Array} split parts
 */
export const getWordParts = (word) => {
  if (word) {
    const wordParts = word.split(ZERO_WIDTH_SPACE);
    return wordParts;
  }
  return [];
};

/**
 * splits morph of compound word into parts
 * @param {string} morph - morph string to convert
 * @return {Array} morphology for each part
 */
export const getMorphKeys = (morph) => {
  const morphKeys = MorphUtils.getMorphLocalizationKeys(morph);
  const morphKeysForParts = [];
  let lastPos = 0;
  let pos = 0;
  let part;
  const divider = '*:';
  if ((pos = morphKeys.indexOf(divider)) >= 0) {
    while (pos >= 0) {
      part = morphKeys.slice(lastPos, pos);
      morphKeysForParts.push(part);
      lastPos = pos + 1;
      pos = morphKeys.indexOf(divider, lastPos);
    }
    part = morphKeys.slice(lastPos);
    if (part.length) {
      morphKeysForParts.push(part);
    }
  } else {
    morphKeysForParts.push(morphKeys);
  }
  return morphKeysForParts;
};

/**
 * checks for formats such as `c:d:H0776` and extracts the strongs number
 * @param {String} strong - the strong's number to get the entryId from
 * @return {{string, number}} - actual Strongs number and position
 */
export const findStrongs = (strong) => {
  let pos = 0;
  if (strong && strong.includes(':')) {
    const parts = strong.split(':');
    for (let i = 0, len = parts.length; i < len; i++) {
      const char = parts[i][0];
      if ((parts.length >= 2) && ((char === 'G') || (char === 'H'))) {
        strong = parts[i];
        pos = i;
        break;
      }
    }
  }
  return {strong, pos};
};

/**
 * checks for formats such as `c:d:H0776` and splits into parts
 * @param {String} strong - the strong's number to get the entryId from
 * @return {Array} - list of parts
 */
export const getStrongsParts = (strong) => {
  if (strong) {
    let parts = null;
    if (strong.includes(':')) {
      parts = strong.split(':');
    } else {
      parts = [strong];
    }
    return parts;
  }
  return [];
};

/**
 * @description - Get the lexiconId from the strong's number
 * @param {String} strong - the strong's number to get the entryId from
 * @return {String} - the id of the lexicon
 */
export const lexiconIdFromStrongs = (strong) => {
  const lexiconId = (strong && strong.startsWith('G')) ? 'ugl': 'uhl';
  return lexiconId;
};
/**
 * @description - Get the lexicon entryId from the strong's number
 * @param {String} strong - the strong's number to get the entryId from
 * @return {int} - the number of the entry
 */
export const lexiconEntryIdFromStrongs = (strong) => {
  let strongsCode = strong.replace(/\w/,'');
  if (!strong.startsWith('H')) { // Greek has an extra 0 at end
    strongsCode = strongsCode.slice(0,-1);
  }
  const entryId = parseInt(strongsCode);
  return entryId;
};
