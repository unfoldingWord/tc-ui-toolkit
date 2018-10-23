
const quotesRegex = /[.,:;?]["”“']$/; // look for quote following line punctuation

export const isWord = word => {
  return (typeof word !== 'string') && (word.word || (word.type === 'word'));
};

export const isNestedMilestone = word => {
  let deepNestedChild = false;
  if (word[0] && word[0][0]) deepNestedChild = isDeepNestedChild(word);
  return Array.isArray(word) && word.length > 0 && word[0].type === 'word' || deepNestedChild;
};

export const isDeepNestedChild = words => {
  let deepNestedChild = false;

  for (let i = 0, len = words.length; i < len; i++) {
    const wordItem = words[i];

    if (wordItem.type === 'word') {
      deepNestedChild = true;
      return deepNestedChild;
    } else {
      deepNestedChild = isDeepNestedChild(wordItem);
    }
  }

  return deepNestedChild;
};

/**
 * checks to see if there should be space before next word.  Returns space unless character
 *    is type of punctuation.  In that case an empty string is returned
 * @param {string} word
 * @return {string} spacing before word
 */
export function punctuationWordSpacing(word) {
  const lastChar = word.text.substr(word.text.length - 1);
  return (['"', "'", '-', '”', '“'].includes(lastChar)) ? '' : ' '; // check if punctuation and return spacing
}

/**
 * checks for quotes crammed against punctuation (e.g. ` ," `) and adds a space for readability
 * @param {String} text - string to pad
 * @return {String} padded string
 */
export function padQuotes(text) {
  if (text) {
    quotesRegex.lastIndex = 0; // reset state if previous execs
    const match = quotesRegex.exec(text);
    if (match) {
      const pos = match.index + 1;
      text = text.substr(0, pos) + '°' + text.substr(pos);
    }
  }
  return text;
}

export function textIsEmptyInVerseObject(verseText) {
  const emptyVerse = !verseText.verseObjects.some((word) => {
    const condition1 = (word.type === "word" || word.type === "text") && word.text.length > 0;
    const condition2 = (word.text !== '↵↵' && word.text !== '↵' && word.text !== '↵↵↵') && (word.text !== '\n\n' && word.text !== '\n' && word.text !== '\n\n\n'); // exclude empty verses that inlcude the return character.
    const condition3 = word.type === "milestone" || condition1;

    return condition3 && condition2;
  });

  return typeof verseText === 'object' && emptyVerse;
}
