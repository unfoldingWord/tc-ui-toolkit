import usfmjs from 'usfm-js';

/**
 * Method to filter usfm markers from a string
 * @param {String} verseText - The string to remove markers from
 * @return {String}
 */
export const removeMarker = (verseText) =>
  usfmjs.removeMarker(verseText);

