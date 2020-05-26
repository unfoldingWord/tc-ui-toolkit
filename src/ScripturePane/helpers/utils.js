/**
 * Delays code execution for a number of ms given.
 * @param {ms} ms
 */
export function delay(ms) {
  return new Promise((resolve) =>
    setTimeout(resolve, ms),
  );
}

/**
 * lookup translation for text or key.  First looks for a static translation and then tries a dynamic translation
 * @param {Function} translate - translation function
 * @param {String} text - string or key to translate
 * @param {String} deflt - default string to use if no translation is found
 * @param {Object} params - Params to use for printing
 * @return {String} translated text
 */
export function getTranslation(translate, text, deflt) {
  let key = text.toLowerCase();
  key = key.replace(' ', '_');
  let translation;
  translation = translate(key);

  if (!translation || (translation.indexOf('Missing translation key') >= 0)) { // if not translated, return original text
    translation = deflt;
  }
  return translation;
}

/**
 * get proper text arrangement for language orientation
 * @param {string} languageName
 * @param {string} identifier
 * @param {boolean} isLTR
 * @return {string}
 */
export function getTargetBibleTitle(languageName, identifier, isLTR) {
  if (isLTR) {
    return `${languageName} (${identifier.toUpperCase()})`;
  }
  return `(${identifier.toUpperCase()}) ${languageName}`;
}
