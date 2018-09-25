import * as bibleHelpers from '../bibleHelpers';
// fixtures
import parsedCurrentVerseFixture from './fixtures/parsedCurrentVerse.json';
import bibles from './fixtures/bibles.json';

describe('bibleHelpers.getCurrentVersesWithHighlightedWords()', () => {
  it('works with good data', () => {
    const contextId = {
      groupId: "apostle",
      occurrence: 1,
      quote: "ἀπόστολος",
      reference: {
        bookId: "tit",
        chapter: 1,
        verse: 1
      }
    };
    const getLexiconData = (d) => d;
    const showPopover = (d) => d;
    const translate = (d) => d;

    const parsedCurrentVerse = bibleHelpers.getCurrentVersesWithHighlightedWords(bibles, [], contextId, getLexiconData, showPopover, translate);
    expect(parsedCurrentVerse).toMatchObject(parsedCurrentVerseFixture);
  });
});
