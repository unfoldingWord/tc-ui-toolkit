import * as lexiconHelpers from '../lexiconHelpers';

describe('lexiconHelpers', () => {
  describe('test stongs parsing', () => {
    const strongsTests = [
      ['b:H7225', 7225, 'uhl', 2],
      ['c:d:H0776', 776, 'uhl', 3],
      ['H1961', 1961, 'uhl', 1],
      ['H5921a', 5921, 'uhl', 1],
      ['G33260', 3326, 'ugl', 1]
    ];

    for (let test of strongsTests) {
      const strongs = test[0];
      const expectedEntryId = test[1];
      const expectedLexiconId = test[2];
      const expectedPartCount = test[3];


      it('should succeed with "' + strongs + '"', () => {
        //when
        const results = extractStrongs(strongs);

        // then
        expect(results.entryId).toEqual(expectedEntryId);
        expect(results.lexiconId).toEqual(expectedLexiconId);
        expect(results.parts.length).toEqual(expectedPartCount);
      });
    }
  });
  describe('test word parsing', () => {
    const wordTests = [
      ["בְּ​רֵאשִׁ֖ית", ["בְּ", "רֵאשִׁ֖ית"]],
      ["בָּרָ֣א", ["בָּרָ֣א"]],
      ["הַ​שָּׁמַ֖יִם", ["הַ", "שָּׁמַ֖יִם"]],
      ["וְ​אֵ֥ת", ["וְ", "אֵ֥ת"]],
      ["וְ​הָ​אָ֗רֶץ", ["וְ", "הָ", "אָ֗רֶץ"]],
      ["חֲכָמֶ֑י​הָ",["חֲכָמֶ֑י", "הָ"]], // gen 41:8
    ];
    for (let test of wordTests) {
      const word = test[0];
      const expectedParts = test[1];

      it('should succeed with "' + word + '"', () => {
        //when
        const results = lexiconHelpers.getWordParts(word);

        // then
        expect(results).toEqual(expectedParts);
      });
    }
  });
});

//
// helpers
//

function extractStrongs(strongs) {
  const {strong: strongs_} = lexiconHelpers.findStrongs(strongs);
  const entryId = lexiconHelpers.lexiconEntryIdFromStrongs(strongs_);
  const lexiconId = lexiconHelpers.lexiconIdFromStrongs(strongs_);
  const parts = lexiconHelpers.getStrongsParts(strongs);
  return {entryId, lexiconId, parts};
}
