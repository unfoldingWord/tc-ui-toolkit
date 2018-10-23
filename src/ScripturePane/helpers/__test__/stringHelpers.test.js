import * as stringHelpers from '../stringHelpers';

describe('stringHelpers.isDeepNestedChild', () => {
  it('Returns true with a nested array as argument', () => {
    expect(stringHelpers.isDeepNestedChild(deepNestedChild)).toBeTruthy();
  });

  it('Returns false without a nested array as argument', () => {
    expect(stringHelpers.isDeepNestedChild([])).toBeFalsy();
  });
});

describe('stringHelpers.punctuationWordSpacing', () => {
  const tests = [
    { test: "", expected: " "},
    { test: " .'", expected: ""},
    { test: " ,\"  ", expected: " "},
    { test: "    , '", expected: ""},
    { test: ":”  ", expected: " "},
    { test: "  ;\"", expected: ""},
    { test: "   “", expected: ""},
    { test: "\" ; '", expected: ""},
  ];

  for (let test of tests) {
    it('test: "' + test.test + '"', () => {
      expect(stringHelpers.punctuationWordSpacing({ text: test.test})).toEqual(test.expected);
    });
  }
});

describe('stringHelpers.padQuotes', () => {
  const tests = [
    { test: "", expected: ""},
    { test: null, expected: null},
    { test: " .'", expected: " . '"},
    { test: " ,\"  ", expected: " ,\"  "},
    { test: " ,\"", expected: " , \""},
    { test: "    , '", expected: "    , '"},
    { test: ":”  ", expected: ":”  "},
    { test: ":”", expected: ": ”"},
    { test: "  ;\"", expected: "  ; \""},
    { test: "   ?“  ", expected: "   ?“  "},
    { test: "?“", expected: "? “"},
    { test: "\" ; '", expected: "\" ; '"},
  ];

  for (let test of tests) {
    it('test: "' + test.test + '"', () => {
      expect(stringHelpers.padQuotes(test.test)).toEqual(test.expected);
    });
  }
});


// test data
const deepNestedChild = [
  [
    {
      content: [
        {
          children: [
            {
              content: [{}],
              occurrence: 1,
              occurrences: 2,
              tag: "w",
              text: "this",
              type: "word"
            },
            {
              content: [{}],
              occurrence: 1,
              occurrences: 1,
              tag: "w",
              text: "message",
              type: "word"
            }
          ],
          content: "αὐτοῦ",
          lemma: "αὐτός",
          morph: "Gr,RP,,,3GMS,",
          occurrence: 1,
          occurrences: 1,
          strong: "G08460",
          tag: "zaln",
          type: "milestone"
        },
        {
          children: [
            {
              children: [{}],
              content: "αὐτοῦ",
              lemma: "αὐτός",
              morph: "Gr,RP,,,3GMS,",
              occurrence: 1,
              occurrences: 1,
              strong: "G08460",
              tag: "zaln",
              type: "milestone"
            }
          ],
          content: "λόγον",
          lemma: "λόγος",
          morph: "Gr,N,,,,,AMS,",
          occurrence: 1,
          occurrences: 1,
          strong: "G30560",
          tag: "zaln",
          type: "milestone"
        }
      ],
      occurrence: 1,
      occurrences: 2,
      tag: "w",
      text: "this",
      type: "word",
    }
  ]
];
