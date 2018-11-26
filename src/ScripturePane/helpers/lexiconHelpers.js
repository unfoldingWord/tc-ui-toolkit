/**
 * checks for formats such as `c:d:H0776` and extracts the strongs number
 * @param {String} strong_ - the strong's number to get the entryId from
 * @return {{string, number}} - actual Strongs number and position
 */
export const findStrongs = (strong) => {
  let pos = -1;
  if (strong.includes(':')) {
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
 * @return {{string, number}} - actual Strongs number and position
 */
export const getStrongsParts = (strong) => {
  let parts = null;
  if (strong.includes(':')) {
    parts = strong.split(':');
  } else {
    parts = [strong];
  }
  return parts;
};

/**
 * @description - Get the lexiconId from the strong's number
 * @param {String} strong - the strong's number to get the entryId from
 * @return {String} - the id of the lexicon
 */
export const lexiconIdFromStrongs = (strong) => {
  const lexiconId = strong.startsWith('G') ? 'ugl': 'uhl';
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
