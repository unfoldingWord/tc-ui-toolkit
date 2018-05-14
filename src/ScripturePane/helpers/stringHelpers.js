
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
  words.forEach(wordItem => {
    if (wordItem.type === 'word') {
      deepNestedChild = true;
      return;
    } else {
      deepNestedChild = isDeepNestedChild(wordItem);
    }
  });
  return deepNestedChild;
};

export function punctuationWordSpacing(word) {
  const lastChar = word.text.substr(word.text.length - 1);
  return ((lastChar === '"') || (lastChar === "'") || (lastChar === "-")) ? '' : ' ';
}

export function textIsEmptyInVerseObject(verseText) {
  const emptyVerse = !verseText.verseObjects.some((word) => word.type === "word" && word.text.length > 0);

  return typeof verseText === 'object' && emptyVerse;
}
