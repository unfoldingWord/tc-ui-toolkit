/**
 * checks for formats such as `c:d:H0776` and extracts the strongs number
 * @param {String} strong - the strong's number to get the entryId from
 * @return {String} new Strongs number
 */
export const findStrongs = (strong) => {
  if (strong.includes(':')) {
    const parts = strong.split(':');
    for (let i = 0, len = parts.length; i < len; i++) {
      const char = parts[i][0];
      if ((parts.length >= 2) && ((char === 'G') || (char === 'H'))) {
        strong = parts[i];
        break;
      }
    }
  }
  return strong;
};

/**
 * @description - Get the lexiconId from the strong's number
 * @param {String} strong - the strong's number to get the entryId from
 * @return {String} - the id of the lexicon
 */
export const lexiconIdFromStrongs = (strong) => {
  const lexiconId = (strong.replace(/\d+/,'') === 'G') ? 'ugl': 'uhl';
  return lexiconId;
};
/**
 * @description - Get the lexicon entryId from the strong's number
 * @param {String} strong - the strong's number to get the entryId from
 * @return {int} - the number of the entry
 */
export const lexiconEntryIdFromStrongs = (strong) => {
  const entryId = parseInt(strong.replace(/\w/,'').slice(0,-1));
  return entryId;
};
