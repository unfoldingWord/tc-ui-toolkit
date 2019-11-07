import usfmjs from 'usfm-js';

/**
 * Method to filter usfm markers from a string
 * @param {String} verseText - The string to remove markers from
 * @return {String}
 */
export const removeMarker = (verseText) => {
  let text = usfmjs.removeMarker(verseText);
  const trimmed = verseText.trimLeft();
  const offset = verseText.indexOf(trimmed);

  if (offset > 0) { // see if we need to restore leading white space
    text = verseText.substr(0, offset) + text; // restore original leading white space
  }
  return text;
};


