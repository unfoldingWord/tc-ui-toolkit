import usfmjs from 'usfm-js';

/**
 * Method to filter usfm markers from a string
 * @param {String} verseText - The string to remove markers from
 * @return {String}
 */
export const removeMarker = (verseText) => {
  const cleaned = usfmjs.removeMarker(verseText, ['f', 'q(\\d)?', 's(\\d)?', 'p(\\d)?']); // remove these markers, 'f' is predefined
  // the rest are regex (these will be prefixed with '\\\\')
  return cleaned;
};
