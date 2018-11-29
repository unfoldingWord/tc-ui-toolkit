import * as htmlElementsHelpers from '../htmlElementsHelpers';

describe('htmlElementsHelpers', () => {
  describe('test stongs parsing', () => {
    const strongsTests = [
      ['b:H7225', {"uhl": {"7225": "uhl-7225"}}],
      ['H123:H7225', {"uhl": {"123": "uhl-123", "7225": "uhl-7225"}}],
      ['c:d:H0776', {"uhl": {"776": "uhl-776"}}],
      ['H1961', {"uhl": {"1961": "uhl-1961"}}],
      ['H5921a', {"uhl": {"5921": "uhl-5921"}}],
      ['G33260', {"ugl": {"3326": "ugl-3326"}}],
      [null, null]
    ];

    for (let test of strongsTests) {
      const strongs = test[0];
      const expectedResults = test[1];


      it('should succeed with "' + strongs + '"', () => {
        //when
        const results = htmlElementsHelpers.lookupStrongsNumbers(strongs, (lexiconId, entryId) => (getLexiconData(lexiconId, entryId)));

        // then
        expect(results).toEqual(expectedResults);
      });
    }
  });
});

//
// helpers
//

export function getLexiconData(lexiconId, entryId) {
  return {
    [lexiconId]: {
      [entryId]: lexiconId + '-' + entryId
    }
  };
}
