"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getLexiconDataSimulate = getLexiconDataSimulate;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _path = _interopRequireDefault(require("path"));

var _fs = _interopRequireDefault(require("fs"));

var _react = _interopRequireDefault(require("react"));

var _reactTestRenderer = _interopRequireDefault(require("react-test-renderer"));

var _ospath = _interopRequireDefault(require("ospath"));

var lexiconHelpers = _interopRequireWildcard(require("../ScripturePane/helpers/lexiconHelpers"));

var _WordLexiconDetails = _interopRequireWildcard(require("./WordLexiconDetails"));

/* eslint-disable no-unused-vars */

/* eslint-env jest */
var RESOURCE_PATH = _path["default"].join(_ospath["default"].home(), 'translationCore', 'resources');

describe('WordLexiconDetails', function () {
  describe('rendering ', function () {
    it('renders Greek', function () {
      var wrapper = _reactTestRenderer["default"].create(_react["default"].createElement(_WordLexiconDetails["default"], {
        lexiconData: {},
        wordObject: {
          lemma: 'lemma',
          morph: 'Gr,NS,,,,GMPF',
          strong: 'G1230'
        },
        translate: function translate(k) {
          return k;
        }
      }));

      expect(wrapper).toMatchSnapshot();
    });
    it('renders Hebrew two part', function () {
      // Gen 1:1 word 1
      var wrapper = _reactTestRenderer["default"].create(_react["default"].createElement(_WordLexiconDetails["default"], {
        lexiconData: {},
        wordObject: {
          text: 'בְּ​רֵאשִׁ֖ית',
          lemma: 'אשִׁירֵת',
          morph: 'He,R:Ncfsa',
          strong: 'b:H7225'
        },
        translate: function translate(k) {
          return k;
        },
        isHebrew: true
      }));

      expect(wrapper).toMatchSnapshot();
    });
    it('renders Hebrew single part', function () {
      // Gen 1:1 word 2
      var wrapper = _reactTestRenderer["default"].create(_react["default"].createElement(_WordLexiconDetails["default"], {
        lexiconData: {},
        wordObject: {
          text: 'בָּרָ֣א',
          lemma: 'בָּרָא',
          morph: 'He,Vqp3ms',
          strong: 'H1254a'
        },
        translate: function translate(k) {
          return k;
        },
        isHebrew: true
      }));

      expect(wrapper).toMatchSnapshot();
    });
    it('renders Hebrew three part', function () {
      // Gen 1:2 word 1
      var wrapper = _reactTestRenderer["default"].create(_react["default"].createElement(_WordLexiconDetails["default"], {
        lexiconData: {},
        wordObject: {
          text: 'וְ​הָ​אָ֗רֶץ',
          lemma: 'אֶרֶץ',
          morph: 'He,C:Td:Ncbsa',
          strong: 'c:d:H0776'
        },
        translate: function translate(k) {
          return k;
        },
        isHebrew: true
      }));

      expect(wrapper).toMatchSnapshot();
    });
    it('renders Hebrew two part with suffix', function () {
      // Gen 1:11 word 15
      var wrapper = _reactTestRenderer["default"].create(_react["default"].createElement(_WordLexiconDetails["default"], {
        lexiconData: {},
        wordObject: {
          text: 'זַרְע​וֹ',
          lemma: 'זֶרַע',
          morph: 'He,Ncmsc:Sp3ms',
          strong: 'H2233'
        },
        translate: function translate(k) {
          return k;
        },
        isHebrew: true
      }));

      expect(wrapper).toMatchSnapshot();
    });
    it('renders Hebrew three part with suffix', function () {
      // Gen 1:12 word 14
      var wrapper = _reactTestRenderer["default"].create(_react["default"].createElement(_WordLexiconDetails["default"], {
        lexiconData: {},
        wordObject: {
          text: 'לְ​מִינ֔​וֹ',
          lemma: 'מִין',
          morph: 'He,R:Ncmsc:Sp3ms',
          strong: 'l:H4327'
        },
        translate: function translate(k) {
          return k;
        },
        isHebrew: true
      }));

      expect(wrapper).toMatchSnapshot();
    });
    it('renders Hebrew extra word part', function () {
      // 2ki-20:17.16
      var wrapper = _reactTestRenderer["default"].create(_react["default"].createElement(_WordLexiconDetails["default"], {
        lexiconData: {},
        wordObject: {
          text: 'בָּבֶֽלָ​ה',
          lemma: 'בָּבֶל',
          morph: 'He,Np',
          strong: 'H0894'
        },
        translate: function translate(k) {
          return k;
        },
        isHebrew: true
      }));

      expect(wrapper).toMatchSnapshot();
    });
    it('renders Hebrew missing strongs part', function () {
      // dan-3:16.6
      var wrapper = _reactTestRenderer["default"].create(_react["default"].createElement(_WordLexiconDetails["default"], {
        lexiconData: {},
        wordObject: {
          text: 'לְ​מַלְכָּ֣​א',
          lemma: 'מֶלֶךְ',
          morph: 'Ar,R:Ncmsd:Td',
          strong: 'l:H4430'
        },
        translate: function translate(k) {
          return k;
        },
        isHebrew: true
      }));

      expect(wrapper).toMatchSnapshot();
    });
    it('renders Hebrew with no strongs number', function () {
      // jdg-1:1 last
      var wrapper = _reactTestRenderer["default"].create(_react["default"].createElement(_WordLexiconDetails["default"], {
        lexiconData: {},
        wordObject: {
          text: 'בּֽ​וֹ',
          lemma: '',
          morph: 'He,R:Sp3ms',
          strong: 'b'
        },
        translate: function translate(k) {
          return k;
        },
        isHebrew: true
      }));

      expect(wrapper).toMatchSnapshot();
    });
  });
  describe('test popup layout for single and multipart', function () {
    var strongsTests = [{
      text: 'בּֽ​וֹ',
      lemma: '',
      morph: 'He,R:Sp3ms',
      strong: '',
      // empty strongs number
      results: [{
        'word': 'בּֽ',
        'itemNum': 0,
        'morph': 'preposition'
      }, {
        'word': 'וֹ',
        'itemNum': 1,
        'morph': 'suffix, pronominal, third, masculine, singular'
      }]
    }, {
      text: 'בּֽ​וֹ',
      lemma: '',
      morph: 'He,R:Sp3ms',
      strong: 'b',
      // jdg-1:1 last word - no actual strongs number
      results: [{
        'word': 'בּֽ',
        'itemNum': 0,
        'strong': 'b',
        'morph': 'preposition'
      }, {
        'word': 'וֹ',
        'itemNum': 1,
        'morph': 'suffix, pronominal, third, masculine, singular'
      }]
    }, {
      text: 'לְ​מַלְכָּ֣​א',
      lemma: 'מֶלֶךְ',
      morph: 'Ar,R:Ncmsd:Td',
      strong: 'l:H4430',
      // dan-3:16.6 - missing strongs part
      results: [{
        'word': 'מַלְכָּ֣',
        'itemNum': 1,
        'strongNum': 4430,
        'strong': 'H4430',
        'lemma': 'מֶלֶךְ',
        'morph': 'noun, common, masculine, singular, determined',
        'lexicon': 'uhl-4430'
      }, {
        'word': 'לְ',
        'itemNum': 0,
        'strong': 'l',
        'morph': 'preposition'
      }, {
        'word': 'א',
        'itemNum': 2,
        'morph': 'particle, definite_article'
      }]
    }, {
      text: 'בָּבֶֽלָ​ה',
      lemma: 'בָּבֶל',
      morph: 'He,Np',
      strong: 'H0894',
      // 2ki-20:17.16 - extra word part not in strongs or morph
      results: [{
        'word': 'בָּבֶֽלָ',
        'itemNum': 0,
        'strongNum': 894,
        'strong': 'H0894',
        'lemma': 'בָּבֶל',
        'morph': 'noun, proper_name',
        'lexicon': 'uhl-894'
      }, {
        'word': 'ה',
        'itemNum': 1,
        'morph': 'morph_missing'
      }]
    }, {
      text: 'לְ​מִינ֔​וֹ',
      lemma: 'מִין',
      morph: 'He,R:Ncmsc:Sp3ms',
      strong: 'l:H4327',
      // Gen 1:12 word 14 - three part with suffix
      results: [{
        'word': 'מִינ֔',
        'itemNum': 1,
        'strongNum': 4327,
        'strong': 'H4327',
        'lemma': 'מִין',
        'morph': 'noun, common, masculine, singular, construct',
        'lexicon': 'uhl-4327'
      }, {
        'word': 'לְ',
        'itemNum': 0,
        'strong': 'l',
        'morph': 'preposition'
      }, {
        'word': 'וֹ',
        'itemNum': 2,
        'morph': 'suffix, pronominal, third, masculine, singular'
      }]
    }, {
      text: 'זַרְע​וֹ',
      lemma: 'זֶרַע',
      morph: 'He,Ncmsc:Sp3ms',
      strong: 'H2233',
      // Gen 1:11 word 15 - two part with suffix
      results: [{
        'word': 'זַרְע',
        'itemNum': 0,
        'strongNum': 2233,
        'strong': 'H2233',
        'lemma': 'זֶרַע',
        'morph': 'noun, common, masculine, singular, construct',
        'lexicon': 'uhl-2233'
      }, {
        'word': 'וֹ',
        'itemNum': 1,
        'morph': 'suffix, pronominal, third, masculine, singular'
      }]
    }, {
      text: 'בָּרָ֣א',
      lemma: 'בָּרָא',
      morph: 'He,Vqp3ms',
      strong: 'H1254a',
      // Gen 1:1 word 2
      results: {
        'word': 'בָּרָ֣א',
        'itemNum': 0,
        'strongNum': 1254,
        'strong': 'H1254a',
        'lemma': 'בָּרָא',
        'morph': 'verb, qal, perfect_qatal, third, masculine, singular',
        'lexicon': 'uhl-1254'
      }
    }, {
      text: 'בְּ​רֵאשִׁ֖ית',
      lemma: 'אשִׁירֵת',
      morph: 'He,R:Ncfsa',
      strong: 'b:H7225',
      // Gen 1:1 word 1
      results: [{
        'word': 'רֵאשִׁ֖ית',
        'itemNum': 1,
        'strongNum': 7225,
        'strong': 'H7225',
        'lemma': 'אשִׁירֵת',
        'morph': 'noun, common, feminine, singular, absolute',
        'lexicon': 'uhl-7225'
      }, {
        'word': 'בְּ',
        'itemNum': 0,
        'strong': 'b',
        'morph': 'preposition'
      }]
    }, {
      'text': 'Παῦλος',
      'lemma': 'Παῦλος',
      'strong': 'G39720',
      'morph': 'Gr,N,,,,,NMS,',
      // Titus 1:1 word 1
      'results': {
        'word': 'Παῦλος',
        'itemNum': 0,
        'strongNum': 3972,
        'strong': 'G39720',
        'lemma': 'Παῦλος',
        'morph': 'noun, nominative, masculine, singular',
        'lexicon': 'ugl-3972'
      }
    }, {
      'text': 'וְ​הָ​אָ֗רֶץ',
      'lemma': 'אֶרֶץ',
      'strong': 'c:d:H0776',
      'morph': 'He,C:Td:Ncbsa',
      // Gen 1:2 word 1
      'results': [{
        'word': 'אָ֗רֶץ',
        'itemNum': 2,
        'strongNum': 776,
        'strong': 'H0776',
        'lemma': 'אֶרֶץ',
        'morph': 'noun, common, both_genders, singular, absolute',
        'lexicon': 'uhl-776'
      }, {
        'word': 'וְ',
        'itemNum': 0,
        'strong': 'c',
        'morph': 'conjunction'
      }, {
        'word': 'הָ',
        'itemNum': 1,
        'strong': 'd',
        'morph': 'particle, definite_article'
      }]
    }, {
      'text': 'רֵאשִׁיתְ​ךָ֣',
      'tag': 'w',
      'type': 'word',
      'lemma': 'רֵאשִׁית',
      'strong': 'H7225:H123',
      'results': [{
        'word': 'רֵאשִׁיתְ',
        'strongNum': 7225,
        'strong': 'H7225',
        'lemma': 'רֵאשִׁית',
        'morph': 'morph_missing',
        'lexicon': 'uhl-7225',
        'itemNum': 0
      }, {
        'word': 'ךָ֣',
        'strongNum': 123,
        'strong': 'H123',
        'morph': 'morph_missing',
        'lexicon': 'uhl-123',
        'itemNum': 1
      }]
    }, {
      text: 'בַּ​תְּחִלָּ֖ה',
      strong: 'b:H8462',
      morph: 'He,Rd:Ncfsa',
      lemma: 'תְּחִלָּה',
      results: [{
        'word': 'תְּחִלָּ֖ה',
        'strongNum': 8462,
        'strong': 'H8462',
        'lexicon': 'uhl-8462',
        'lemma': 'תְּחִלָּה',
        'morph': 'noun, common, feminine, singular, absolute',
        'itemNum': 1
      }, {
        'word': 'בַּ',
        'strong': 'b',
        'morph': 'preposition, definite_article',
        'itemNum': 0
      }]
    }, {
      'text': 'מֵ​רֵאשִׁת֑​וֹ',
      'lemma': 'רֵאשִׁית',
      'strong': 'm:H7225',
      // morph missing
      'results': [{
        'word': 'רֵאשִׁת֑',
        'strongNum': 7225,
        'strong': 'H7225',
        'lemma': 'רֵאשִׁית',
        'morph': 'morph_missing',
        'itemNum': 1,
        'lexicon': 'uhl-7225'
      }, {
        'word': 'מֵ',
        'strong': 'm',
        'morph': 'morph_missing',
        'itemNum': 0
      }, {
        'word': 'וֹ',
        'morph': 'morph_missing',
        'itemNum': 2
      }]
    }, {
      'text': 'רֵאשִׁיתְ​ךָ֣',
      'tag': 'w',
      'type': 'word',
      'lemma': 'רֵאשִׁית',
      'strong': 'H7225',
      // missing morph
      'results': [{
        'word': 'רֵאשִׁיתְ',
        'strongNum': 7225,
        'strong': 'H7225',
        'lemma': 'רֵאשִׁית',
        'morph': 'morph_missing',
        'lexicon': 'uhl-7225',
        'itemNum': 0
      }, {
        'word': 'ךָ֣',
        'morph': 'morph_missing',
        'itemNum': 1
      }]
    }, {
      'text': 'הַ⁠שֹּׁפְטִ֔ים',
      'lemma': 'שָׁפַט',
      'strong': 'd:H8199',
      'morph': 'He,Td:Vqrmpa',
      // Ruth 1:1 - zero space joiner
      'results': [{
        'word': 'שֹּׁפְטִ֔ים',
        'strongNum': 8199,
        'strong': 'H8199',
        'lemma': 'שָׁפַט',
        'morph': 'verb, qal, participle_active, masculine, plural, absolute',
        'lexicon': 'uhl-8199',
        'itemNum': 1
      }, {
        'word': 'הַ',
        'strong': 'd',
        'morph': 'particle, definite_article',
        'itemNum': 0
      }]
    }];

    var _loop = function _loop() {
      var test = _strongsTests[_i];
      var text = test.text,
          strong = test.strong,
          morph = test.morph,
          lemma = test.lemma,
          results = test.results;
      var expectedResults = results;
      it('should succeed with "' + strong + '"', function () {
        //when
        var lexiconData = lexiconHelpers.lookupStrongsNumbers(strong, function (lexiconId, entryId) {
          return getLexiconDataSimulate(lexiconId, entryId);
        });
        var word = {
          text: text,
          strong: strong,
          morph: morph,
          lemma: lemma
        };
        var isHebrew = strong.charAt(0).toUpperCase() === 'H';
        var wordLexiconDetails = (0, _WordLexiconDetails.generateWordLexiconDetails)(word, lexiconData, function (t) {
          return t;
        }, generateWordPart, isHebrew); // then

        expect(wordLexiconDetails).toEqual(expectedResults);
      });
    };

    for (var _i = 0, _strongsTests = strongsTests; _i < _strongsTests.length; _i++) {
      _loop();
    }
  });
}); //
// helpers
//

function getLexiconDataSimulate(lexiconId, entryId) {
  var key = lexiconId + '-' + entryId;
  return (0, _defineProperty2["default"])({}, lexiconId, (0, _defineProperty2["default"])({}, entryId, {
    brief: key,
    "long": key
  }));
}

function generateWordPart(translate, lemma, morph, strongNum, strong, lexicon, word, itemNum, pos, count) {
  morph = morph || 'morph_missing';
  var data = {
    word: word,
    itemNum: itemNum
  };

  if (strongNum) {
    data.strongNum = strongNum;
  }

  if (strong) {
    data.strong = strong;
  }

  if (lemma) {
    data.lemma = lemma;
  }

  if (morph) {
    data.morph = morph;
  }

  if (lexicon) {
    data.lexicon = lexicon;
  }

  return data;
}

function getLexiconDataReal(lexiconId, entryId) {
  try {
    var languageId = 'en';
    var resourceVersion = 'v0'; // generate path from resourceType and articleId

    var lexiconPath = _path["default"].join(RESOURCE_PATH, languageId, 'lexicons', lexiconId, resourceVersion, 'content');

    var entryPath = _path["default"].join(lexiconPath, entryId + '.json');

    var entryData;

    if (_fs["default"].existsSync(entryPath)) {
      entryData = JSON.parse(_fs["default"].readFileSync(entryPath, 'utf8'));
    }

    return (0, _defineProperty2["default"])({}, lexiconId, (0, _defineProperty2["default"])({}, entryId, entryData));
  } catch (error) {
    console.error(error);
  }
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9Xb3JkTGV4aWNvbkRldGFpbHMvV29yZExleGljb25EZXRhaWxzLnRlc3QuanMiXSwibmFtZXMiOlsiUkVTT1VSQ0VfUEFUSCIsInBhdGgiLCJqb2luIiwib3NwYXRoIiwiaG9tZSIsImRlc2NyaWJlIiwiaXQiLCJ3cmFwcGVyIiwicmVuZGVyZXIiLCJjcmVhdGUiLCJsZW1tYSIsIm1vcnBoIiwic3Ryb25nIiwiayIsImV4cGVjdCIsInRvTWF0Y2hTbmFwc2hvdCIsInRleHQiLCJzdHJvbmdzVGVzdHMiLCJyZXN1bHRzIiwidGVzdCIsImV4cGVjdGVkUmVzdWx0cyIsImxleGljb25EYXRhIiwibGV4aWNvbkhlbHBlcnMiLCJsb29rdXBTdHJvbmdzTnVtYmVycyIsImxleGljb25JZCIsImVudHJ5SWQiLCJnZXRMZXhpY29uRGF0YVNpbXVsYXRlIiwid29yZCIsImlzSGVicmV3IiwiY2hhckF0IiwidG9VcHBlckNhc2UiLCJ3b3JkTGV4aWNvbkRldGFpbHMiLCJ0IiwiZ2VuZXJhdGVXb3JkUGFydCIsInRvRXF1YWwiLCJrZXkiLCJicmllZiIsInRyYW5zbGF0ZSIsInN0cm9uZ051bSIsImxleGljb24iLCJpdGVtTnVtIiwicG9zIiwiY291bnQiLCJkYXRhIiwiZ2V0TGV4aWNvbkRhdGFSZWFsIiwibGFuZ3VhZ2VJZCIsInJlc291cmNlVmVyc2lvbiIsImxleGljb25QYXRoIiwiZW50cnlQYXRoIiwiZW50cnlEYXRhIiwiZnMiLCJleGlzdHNTeW5jIiwiSlNPTiIsInBhcnNlIiwicmVhZEZpbGVTeW5jIiwiZXJyb3IiLCJjb25zb2xlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBRUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBUkE7O0FBQ0E7QUFTQSxJQUFNQSxhQUFhLEdBQUdDLGlCQUFLQyxJQUFMLENBQVVDLG1CQUFPQyxJQUFQLEVBQVYsRUFBeUIsaUJBQXpCLEVBQTRDLFdBQTVDLENBQXRCOztBQUVBQyxRQUFRLENBQUMsb0JBQUQsRUFBdUIsWUFBTTtBQUNuQ0EsRUFBQUEsUUFBUSxDQUFDLFlBQUQsRUFBZSxZQUFNO0FBQzNCQyxJQUFBQSxFQUFFLENBQUMsZUFBRCxFQUFrQixZQUFNO0FBQ3hCLFVBQU1DLE9BQU8sR0FBR0MsOEJBQVNDLE1BQVQsQ0FDZCxnQ0FBQyw4QkFBRDtBQUNFLFFBQUEsV0FBVyxFQUFFLEVBRGY7QUFFRSxRQUFBLFVBQVUsRUFBRTtBQUNWQyxVQUFBQSxLQUFLLEVBQUUsT0FERztBQUVWQyxVQUFBQSxLQUFLLEVBQUUsZUFGRztBQUdWQyxVQUFBQSxNQUFNLEVBQUU7QUFIRSxTQUZkO0FBT0UsUUFBQSxTQUFTLEVBQUUsbUJBQUFDLENBQUM7QUFBQSxpQkFBSUEsQ0FBSjtBQUFBO0FBUGQsUUFEYyxDQUFoQjs7QUFVQUMsTUFBQUEsTUFBTSxDQUFDUCxPQUFELENBQU4sQ0FBZ0JRLGVBQWhCO0FBQ0QsS0FaQyxDQUFGO0FBY0FULElBQUFBLEVBQUUsQ0FBQyx5QkFBRCxFQUE0QixZQUFNO0FBQUU7QUFDcEMsVUFBTUMsT0FBTyxHQUFHQyw4QkFBU0MsTUFBVCxDQUNkLGdDQUFDLDhCQUFEO0FBQ0UsUUFBQSxXQUFXLEVBQUUsRUFEZjtBQUVFLFFBQUEsVUFBVSxFQUFFO0FBQ1ZPLFVBQUFBLElBQUksRUFBRSxlQURJO0FBRVZOLFVBQUFBLEtBQUssRUFBRSxVQUZHO0FBR1ZDLFVBQUFBLEtBQUssRUFBRSxZQUhHO0FBSVZDLFVBQUFBLE1BQU0sRUFBRTtBQUpFLFNBRmQ7QUFRRSxRQUFBLFNBQVMsRUFBRSxtQkFBQUMsQ0FBQztBQUFBLGlCQUFJQSxDQUFKO0FBQUEsU0FSZDtBQVNFLFFBQUEsUUFBUSxFQUFFO0FBVFosUUFEYyxDQUFoQjs7QUFZQUMsTUFBQUEsTUFBTSxDQUFDUCxPQUFELENBQU4sQ0FBZ0JRLGVBQWhCO0FBQ0QsS0FkQyxDQUFGO0FBZ0JBVCxJQUFBQSxFQUFFLENBQUMsNEJBQUQsRUFBK0IsWUFBTTtBQUFFO0FBQ3ZDLFVBQU1DLE9BQU8sR0FBR0MsOEJBQVNDLE1BQVQsQ0FDZCxnQ0FBQyw4QkFBRDtBQUNFLFFBQUEsV0FBVyxFQUFFLEVBRGY7QUFFRSxRQUFBLFVBQVUsRUFBRTtBQUNWTyxVQUFBQSxJQUFJLEVBQUUsU0FESTtBQUVWTixVQUFBQSxLQUFLLEVBQUUsUUFGRztBQUdWQyxVQUFBQSxLQUFLLEVBQUUsV0FIRztBQUlWQyxVQUFBQSxNQUFNLEVBQUU7QUFKRSxTQUZkO0FBUUUsUUFBQSxTQUFTLEVBQUUsbUJBQUFDLENBQUM7QUFBQSxpQkFBSUEsQ0FBSjtBQUFBLFNBUmQ7QUFTRSxRQUFBLFFBQVEsRUFBRTtBQVRaLFFBRGMsQ0FBaEI7O0FBWUFDLE1BQUFBLE1BQU0sQ0FBQ1AsT0FBRCxDQUFOLENBQWdCUSxlQUFoQjtBQUNELEtBZEMsQ0FBRjtBQWdCQVQsSUFBQUEsRUFBRSxDQUFDLDJCQUFELEVBQThCLFlBQU07QUFBRTtBQUN0QyxVQUFNQyxPQUFPLEdBQUdDLDhCQUFTQyxNQUFULENBQ2QsZ0NBQUMsOEJBQUQ7QUFDRSxRQUFBLFdBQVcsRUFBRSxFQURmO0FBRUUsUUFBQSxVQUFVLEVBQUU7QUFDVk8sVUFBQUEsSUFBSSxFQUFFLGNBREk7QUFFVk4sVUFBQUEsS0FBSyxFQUFFLE9BRkc7QUFHVkMsVUFBQUEsS0FBSyxFQUFFLGVBSEc7QUFJVkMsVUFBQUEsTUFBTSxFQUFFO0FBSkUsU0FGZDtBQVFFLFFBQUEsU0FBUyxFQUFFLG1CQUFBQyxDQUFDO0FBQUEsaUJBQUlBLENBQUo7QUFBQSxTQVJkO0FBU0UsUUFBQSxRQUFRLEVBQUU7QUFUWixRQURjLENBQWhCOztBQVlBQyxNQUFBQSxNQUFNLENBQUNQLE9BQUQsQ0FBTixDQUFnQlEsZUFBaEI7QUFDRCxLQWRDLENBQUY7QUFnQkFULElBQUFBLEVBQUUsQ0FBQyxxQ0FBRCxFQUF3QyxZQUFNO0FBQUU7QUFDaEQsVUFBTUMsT0FBTyxHQUFHQyw4QkFBU0MsTUFBVCxDQUNkLGdDQUFDLDhCQUFEO0FBQ0UsUUFBQSxXQUFXLEVBQUUsRUFEZjtBQUVFLFFBQUEsVUFBVSxFQUFFO0FBQ1ZPLFVBQUFBLElBQUksRUFBRSxVQURJO0FBRVZOLFVBQUFBLEtBQUssRUFBRSxPQUZHO0FBR1ZDLFVBQUFBLEtBQUssRUFBRSxnQkFIRztBQUlWQyxVQUFBQSxNQUFNLEVBQUU7QUFKRSxTQUZkO0FBUUUsUUFBQSxTQUFTLEVBQUUsbUJBQUFDLENBQUM7QUFBQSxpQkFBSUEsQ0FBSjtBQUFBLFNBUmQ7QUFTRSxRQUFBLFFBQVEsRUFBRTtBQVRaLFFBRGMsQ0FBaEI7O0FBWUFDLE1BQUFBLE1BQU0sQ0FBQ1AsT0FBRCxDQUFOLENBQWdCUSxlQUFoQjtBQUNELEtBZEMsQ0FBRjtBQWdCQVQsSUFBQUEsRUFBRSxDQUFDLHVDQUFELEVBQTBDLFlBQU07QUFBRTtBQUNsRCxVQUFNQyxPQUFPLEdBQUdDLDhCQUFTQyxNQUFULENBQ2QsZ0NBQUMsOEJBQUQ7QUFDRSxRQUFBLFdBQVcsRUFBRSxFQURmO0FBRUUsUUFBQSxVQUFVLEVBQUU7QUFDVk8sVUFBQUEsSUFBSSxFQUFFLGFBREk7QUFFVk4sVUFBQUEsS0FBSyxFQUFFLE1BRkc7QUFHVkMsVUFBQUEsS0FBSyxFQUFFLGtCQUhHO0FBSVZDLFVBQUFBLE1BQU0sRUFBRTtBQUpFLFNBRmQ7QUFRRSxRQUFBLFNBQVMsRUFBRSxtQkFBQUMsQ0FBQztBQUFBLGlCQUFJQSxDQUFKO0FBQUEsU0FSZDtBQVNFLFFBQUEsUUFBUSxFQUFFO0FBVFosUUFEYyxDQUFoQjs7QUFZQUMsTUFBQUEsTUFBTSxDQUFDUCxPQUFELENBQU4sQ0FBZ0JRLGVBQWhCO0FBQ0QsS0FkQyxDQUFGO0FBZ0JBVCxJQUFBQSxFQUFFLENBQUMsZ0NBQUQsRUFBbUMsWUFBTTtBQUFFO0FBQzNDLFVBQU1DLE9BQU8sR0FBR0MsOEJBQVNDLE1BQVQsQ0FDZCxnQ0FBQyw4QkFBRDtBQUNFLFFBQUEsV0FBVyxFQUFFLEVBRGY7QUFFRSxRQUFBLFVBQVUsRUFBRTtBQUNWTyxVQUFBQSxJQUFJLEVBQUUsWUFESTtBQUVWTixVQUFBQSxLQUFLLEVBQUUsUUFGRztBQUdWQyxVQUFBQSxLQUFLLEVBQUUsT0FIRztBQUlWQyxVQUFBQSxNQUFNLEVBQUU7QUFKRSxTQUZkO0FBUUUsUUFBQSxTQUFTLEVBQUUsbUJBQUFDLENBQUM7QUFBQSxpQkFBSUEsQ0FBSjtBQUFBLFNBUmQ7QUFTRSxRQUFBLFFBQVEsRUFBRTtBQVRaLFFBRGMsQ0FBaEI7O0FBWUFDLE1BQUFBLE1BQU0sQ0FBQ1AsT0FBRCxDQUFOLENBQWdCUSxlQUFoQjtBQUNELEtBZEMsQ0FBRjtBQWdCQVQsSUFBQUEsRUFBRSxDQUFDLHFDQUFELEVBQXdDLFlBQU07QUFBRTtBQUNoRCxVQUFNQyxPQUFPLEdBQUdDLDhCQUFTQyxNQUFULENBQ2QsZ0NBQUMsOEJBQUQ7QUFDRSxRQUFBLFdBQVcsRUFBRSxFQURmO0FBRUUsUUFBQSxVQUFVLEVBQUU7QUFDVk8sVUFBQUEsSUFBSSxFQUFFLGVBREk7QUFFVk4sVUFBQUEsS0FBSyxFQUFFLFFBRkc7QUFHVkMsVUFBQUEsS0FBSyxFQUFFLGVBSEc7QUFJVkMsVUFBQUEsTUFBTSxFQUFFO0FBSkUsU0FGZDtBQVFFLFFBQUEsU0FBUyxFQUFFLG1CQUFBQyxDQUFDO0FBQUEsaUJBQUlBLENBQUo7QUFBQSxTQVJkO0FBU0UsUUFBQSxRQUFRLEVBQUU7QUFUWixRQURjLENBQWhCOztBQVlBQyxNQUFBQSxNQUFNLENBQUNQLE9BQUQsQ0FBTixDQUFnQlEsZUFBaEI7QUFDRCxLQWRDLENBQUY7QUFnQkFULElBQUFBLEVBQUUsQ0FBQyx1Q0FBRCxFQUEwQyxZQUFNO0FBQUU7QUFDbEQsVUFBTUMsT0FBTyxHQUFHQyw4QkFBU0MsTUFBVCxDQUNkLGdDQUFDLDhCQUFEO0FBQ0UsUUFBQSxXQUFXLEVBQUUsRUFEZjtBQUVFLFFBQUEsVUFBVSxFQUFFO0FBQ1ZPLFVBQUFBLElBQUksRUFBRSxRQURJO0FBRVZOLFVBQUFBLEtBQUssRUFBRSxFQUZHO0FBR1ZDLFVBQUFBLEtBQUssRUFBRSxZQUhHO0FBSVZDLFVBQUFBLE1BQU0sRUFBRTtBQUpFLFNBRmQ7QUFRRSxRQUFBLFNBQVMsRUFBRSxtQkFBQUMsQ0FBQztBQUFBLGlCQUFFQSxDQUFGO0FBQUEsU0FSZDtBQVNFLFFBQUEsUUFBUSxFQUFFO0FBVFosUUFEYyxDQUFoQjs7QUFZQUMsTUFBQUEsTUFBTSxDQUFDUCxPQUFELENBQU4sQ0FBZ0JRLGVBQWhCO0FBQ0QsS0FkQyxDQUFGO0FBZUQsR0E5SU8sQ0FBUjtBQWdKQVYsRUFBQUEsUUFBUSxDQUFDLDRDQUFELEVBQStDLFlBQU07QUFDM0QsUUFBTVksWUFBWSxHQUFHLENBQ25CO0FBQ0VELE1BQUFBLElBQUksRUFBRSxRQURSO0FBQ2tCTixNQUFBQSxLQUFLLEVBQUUsRUFEekI7QUFDNkJDLE1BQUFBLEtBQUssRUFBRSxZQURwQztBQUNrREMsTUFBQUEsTUFBTSxFQUFFLEVBRDFEO0FBQzhEO0FBQzVETSxNQUFBQSxPQUFPLEVBQUUsQ0FDUDtBQUNFLGdCQUFRLEtBRFY7QUFFRSxtQkFBVyxDQUZiO0FBR0UsaUJBQVM7QUFIWCxPQURPLEVBTVA7QUFDRSxnQkFBUSxJQURWO0FBRUUsbUJBQVcsQ0FGYjtBQUdFLGlCQUFTO0FBSFgsT0FOTztBQUZYLEtBRG1CLEVBZ0JuQjtBQUNFRixNQUFBQSxJQUFJLEVBQUUsUUFEUjtBQUNrQk4sTUFBQUEsS0FBSyxFQUFFLEVBRHpCO0FBQzZCQyxNQUFBQSxLQUFLLEVBQUUsWUFEcEM7QUFDa0RDLE1BQUFBLE1BQU0sRUFBRSxHQUQxRDtBQUMrRDtBQUM3RE0sTUFBQUEsT0FBTyxFQUFFLENBQ1A7QUFDRSxnQkFBUSxLQURWO0FBRUUsbUJBQVcsQ0FGYjtBQUdFLGtCQUFVLEdBSFo7QUFJRSxpQkFBUztBQUpYLE9BRE8sRUFPUDtBQUNFLGdCQUFRLElBRFY7QUFFRSxtQkFBVyxDQUZiO0FBR0UsaUJBQVM7QUFIWCxPQVBPO0FBRlgsS0FoQm1CLEVBZ0NuQjtBQUNFRixNQUFBQSxJQUFJLEVBQUUsZUFEUjtBQUN5Qk4sTUFBQUEsS0FBSyxFQUFFLFFBRGhDO0FBQzBDQyxNQUFBQSxLQUFLLEVBQUUsZUFEakQ7QUFDa0VDLE1BQUFBLE1BQU0sRUFBRSxTQUQxRTtBQUNxRjtBQUNuRk0sTUFBQUEsT0FBTyxFQUFFLENBQ1A7QUFDRSxnQkFBUSxVQURWO0FBRUUsbUJBQVcsQ0FGYjtBQUdFLHFCQUFhLElBSGY7QUFJRSxrQkFBVSxPQUpaO0FBS0UsaUJBQVMsUUFMWDtBQU1FLGlCQUFTLCtDQU5YO0FBT0UsbUJBQVc7QUFQYixPQURPLEVBVVA7QUFDRSxnQkFBUSxJQURWO0FBRUUsbUJBQVcsQ0FGYjtBQUdFLGtCQUFVLEdBSFo7QUFJRSxpQkFBUztBQUpYLE9BVk8sRUFnQlA7QUFDRSxnQkFBUSxHQURWO0FBRUUsbUJBQVcsQ0FGYjtBQUdFLGlCQUFTO0FBSFgsT0FoQk87QUFGWCxLQWhDbUIsRUF5RG5CO0FBQ0VGLE1BQUFBLElBQUksRUFBRSxZQURSO0FBQ3NCTixNQUFBQSxLQUFLLEVBQUUsUUFEN0I7QUFDdUNDLE1BQUFBLEtBQUssRUFBRSxPQUQ5QztBQUN1REMsTUFBQUEsTUFBTSxFQUFFLE9BRC9EO0FBQ3dFO0FBQ3RFTSxNQUFBQSxPQUFPLEVBQUUsQ0FDUDtBQUNFLGdCQUFRLFVBRFY7QUFFRSxtQkFBVyxDQUZiO0FBR0UscUJBQWEsR0FIZjtBQUlFLGtCQUFVLE9BSlo7QUFLRSxpQkFBUyxRQUxYO0FBTUUsaUJBQVMsbUJBTlg7QUFPRSxtQkFBVztBQVBiLE9BRE8sRUFVUDtBQUNFLGdCQUFRLEdBRFY7QUFFRSxtQkFBVyxDQUZiO0FBR0UsaUJBQVM7QUFIWCxPQVZPO0FBRlgsS0F6RG1CLEVBNEVuQjtBQUNFRixNQUFBQSxJQUFJLEVBQUUsYUFEUjtBQUN1Qk4sTUFBQUEsS0FBSyxFQUFFLE1BRDlCO0FBQ3NDQyxNQUFBQSxLQUFLLEVBQUUsa0JBRDdDO0FBQ2lFQyxNQUFBQSxNQUFNLEVBQUUsU0FEekU7QUFDb0Y7QUFDbEZNLE1BQUFBLE9BQU8sRUFBRSxDQUNQO0FBQ0UsZ0JBQVEsT0FEVjtBQUVFLG1CQUFXLENBRmI7QUFHRSxxQkFBYSxJQUhmO0FBSUUsa0JBQVUsT0FKWjtBQUtFLGlCQUFTLE1BTFg7QUFNRSxpQkFBUyw4Q0FOWDtBQU9FLG1CQUFXO0FBUGIsT0FETyxFQVVQO0FBQ0UsZ0JBQVEsSUFEVjtBQUVFLG1CQUFXLENBRmI7QUFHRSxrQkFBVSxHQUhaO0FBSUUsaUJBQVM7QUFKWCxPQVZPLEVBZ0JQO0FBQ0UsZ0JBQVEsSUFEVjtBQUVFLG1CQUFXLENBRmI7QUFHRSxpQkFBUztBQUhYLE9BaEJPO0FBRlgsS0E1RW1CLEVBcUduQjtBQUNFRixNQUFBQSxJQUFJLEVBQUUsVUFEUjtBQUNvQk4sTUFBQUEsS0FBSyxFQUFFLE9BRDNCO0FBQ29DQyxNQUFBQSxLQUFLLEVBQUUsZ0JBRDNDO0FBQzZEQyxNQUFBQSxNQUFNLEVBQUUsT0FEckU7QUFDOEU7QUFDNUVNLE1BQUFBLE9BQU8sRUFBRSxDQUNQO0FBQ0UsZ0JBQVEsT0FEVjtBQUVFLG1CQUFXLENBRmI7QUFHRSxxQkFBYSxJQUhmO0FBSUUsa0JBQVUsT0FKWjtBQUtFLGlCQUFTLE9BTFg7QUFNRSxpQkFBUyw4Q0FOWDtBQU9FLG1CQUFXO0FBUGIsT0FETyxFQVVQO0FBQ0UsZ0JBQVEsSUFEVjtBQUVFLG1CQUFXLENBRmI7QUFHRSxpQkFBUztBQUhYLE9BVk87QUFGWCxLQXJHbUIsRUF3SG5CO0FBQ0VGLE1BQUFBLElBQUksRUFBRSxTQURSO0FBQ21CTixNQUFBQSxLQUFLLEVBQUUsUUFEMUI7QUFDb0NDLE1BQUFBLEtBQUssRUFBRSxXQUQzQztBQUN3REMsTUFBQUEsTUFBTSxFQUFFLFFBRGhFO0FBQzBFO0FBQ3hFTSxNQUFBQSxPQUFPLEVBQUU7QUFDUCxnQkFBUSxTQUREO0FBRVAsbUJBQVcsQ0FGSjtBQUdQLHFCQUFhLElBSE47QUFJUCxrQkFBVSxRQUpIO0FBS1AsaUJBQVMsUUFMRjtBQU1QLGlCQUFTLHNEQU5GO0FBT1AsbUJBQVc7QUFQSjtBQUZYLEtBeEhtQixFQW9JbkI7QUFDRUYsTUFBQUEsSUFBSSxFQUFFLGVBRFI7QUFDeUJOLE1BQUFBLEtBQUssRUFBRSxVQURoQztBQUM0Q0MsTUFBQUEsS0FBSyxFQUFFLFlBRG5EO0FBQ2lFQyxNQUFBQSxNQUFNLEVBQUUsU0FEekU7QUFDb0Y7QUFDbEZNLE1BQUFBLE9BQU8sRUFBRSxDQUNQO0FBQ0UsZ0JBQVEsV0FEVjtBQUVFLG1CQUFXLENBRmI7QUFHRSxxQkFBYSxJQUhmO0FBSUUsa0JBQVUsT0FKWjtBQUtFLGlCQUFTLFVBTFg7QUFNRSxpQkFBUyw0Q0FOWDtBQU9FLG1CQUFXO0FBUGIsT0FETyxFQVVQO0FBQ0UsZ0JBQVEsS0FEVjtBQUVFLG1CQUFXLENBRmI7QUFHRSxrQkFBVSxHQUhaO0FBSUUsaUJBQVM7QUFKWCxPQVZPO0FBRlgsS0FwSW1CLEVBd0puQjtBQUNFLGNBQVEsUUFEVjtBQUNvQixlQUFTLFFBRDdCO0FBQ3VDLGdCQUFVLFFBRGpEO0FBQzJELGVBQVMsZUFEcEU7QUFDcUY7QUFDbkYsaUJBQVc7QUFDVCxnQkFBUSxRQURDO0FBRVQsbUJBQVcsQ0FGRjtBQUdULHFCQUFhLElBSEo7QUFJVCxrQkFBVSxRQUpEO0FBS1QsaUJBQVMsUUFMQTtBQU1ULGlCQUFTLHVDQU5BO0FBT1QsbUJBQVc7QUFQRjtBQUZiLEtBeEptQixFQW9LbkI7QUFDRSxjQUFRLGNBRFY7QUFDMEIsZUFBUyxPQURuQztBQUM0QyxnQkFBVSxXQUR0RDtBQUNtRSxlQUFTLGVBRDVFO0FBQzZGO0FBQzNGLGlCQUFXLENBQ1Q7QUFDRSxnQkFBUSxRQURWO0FBRUUsbUJBQVcsQ0FGYjtBQUdFLHFCQUFhLEdBSGY7QUFJRSxrQkFBVSxPQUpaO0FBS0UsaUJBQVMsT0FMWDtBQU1FLGlCQUFTLGdEQU5YO0FBT0UsbUJBQVc7QUFQYixPQURTLEVBVVQ7QUFDRSxnQkFBUSxJQURWO0FBRUUsbUJBQVcsQ0FGYjtBQUdFLGtCQUFVLEdBSFo7QUFJRSxpQkFBUztBQUpYLE9BVlMsRUFnQlQ7QUFDRSxnQkFBUSxJQURWO0FBRUUsbUJBQVcsQ0FGYjtBQUdFLGtCQUFVLEdBSFo7QUFJRSxpQkFBUztBQUpYLE9BaEJTO0FBRmIsS0FwS21CLEVBOExuQjtBQUNFLGNBQU8sZUFEVDtBQUN5QixhQUFNLEdBRC9CO0FBQ21DLGNBQU8sTUFEMUM7QUFDaUQsZUFBUSxVQUR6RDtBQUNvRSxnQkFBUyxZQUQ3RTtBQUVFLGlCQUFXLENBQ1Q7QUFDRSxnQkFBUSxXQURWO0FBRUUscUJBQWEsSUFGZjtBQUdFLGtCQUFVLE9BSFo7QUFJRSxpQkFBUyxVQUpYO0FBS0UsaUJBQVMsZUFMWDtBQU1FLG1CQUFXLFVBTmI7QUFPRSxtQkFBVztBQVBiLE9BRFMsRUFVVDtBQUNFLGdCQUFRLEtBRFY7QUFFRSxxQkFBYSxHQUZmO0FBR0Usa0JBQVUsTUFIWjtBQUlFLGlCQUFTLGVBSlg7QUFLRSxtQkFBVyxTQUxiO0FBTUUsbUJBQVc7QUFOYixPQVZTO0FBRmIsS0E5TG1CLEVBb05uQjtBQUNFRixNQUFBQSxJQUFJLEVBQUUsZ0JBRFI7QUFDMEJKLE1BQUFBLE1BQU0sRUFBRSxTQURsQztBQUM2Q0QsTUFBQUEsS0FBSyxFQUFFLGFBRHBEO0FBQ21FRCxNQUFBQSxLQUFLLEVBQUUsV0FEMUU7QUFFRVEsTUFBQUEsT0FBTyxFQUFFLENBQ1A7QUFDRSxnQkFBUSxZQURWO0FBRUUscUJBQWEsSUFGZjtBQUdFLGtCQUFVLE9BSFo7QUFJRSxtQkFBVyxVQUpiO0FBS0UsaUJBQVMsV0FMWDtBQU1FLGlCQUFTLDRDQU5YO0FBT0UsbUJBQVc7QUFQYixPQURPLEVBVVA7QUFDRSxnQkFBUSxLQURWO0FBRUUsa0JBQVUsR0FGWjtBQUdFLGlCQUFTLCtCQUhYO0FBSUUsbUJBQVc7QUFKYixPQVZPO0FBRlgsS0FwTm1CLEVBd09uQjtBQUNFLGNBQU8sZ0JBRFQ7QUFDMEIsZUFBUSxVQURsQztBQUM2QyxnQkFBUyxTQUR0RDtBQUNpRTtBQUMvRCxpQkFBVyxDQUNUO0FBQ0UsZ0JBQVEsVUFEVjtBQUVFLHFCQUFhLElBRmY7QUFHRSxrQkFBVSxPQUhaO0FBSUUsaUJBQVMsVUFKWDtBQUtFLGlCQUFTLGVBTFg7QUFNRSxtQkFBVyxDQU5iO0FBT0UsbUJBQVc7QUFQYixPQURTLEVBVVQ7QUFDRSxnQkFBUSxJQURWO0FBRUUsa0JBQVUsR0FGWjtBQUdFLGlCQUFTLGVBSFg7QUFJRSxtQkFBVztBQUpiLE9BVlMsRUFnQlQ7QUFDRSxnQkFBUSxJQURWO0FBRUUsaUJBQVMsZUFGWDtBQUdFLG1CQUFXO0FBSGIsT0FoQlM7QUFGYixLQXhPbUIsRUFpUW5CO0FBQ0UsY0FBTyxlQURUO0FBQ3lCLGFBQU0sR0FEL0I7QUFDbUMsY0FBTyxNQUQxQztBQUNpRCxlQUFRLFVBRHpEO0FBQ29FLGdCQUFTLE9BRDdFO0FBQ3NGO0FBQ3BGLGlCQUFXLENBQ1Q7QUFDRSxnQkFBUSxXQURWO0FBRUUscUJBQWEsSUFGZjtBQUdFLGtCQUFVLE9BSFo7QUFJRSxpQkFBUyxVQUpYO0FBS0UsaUJBQVMsZUFMWDtBQU1FLG1CQUFXLFVBTmI7QUFPRSxtQkFBVztBQVBiLE9BRFMsRUFVVDtBQUNFLGdCQUFRLEtBRFY7QUFFRSxpQkFBUyxlQUZYO0FBR0UsbUJBQVc7QUFIYixPQVZTO0FBRmIsS0FqUW1CLEVBb1JuQjtBQUNFLGNBQU8sZ0JBRFQ7QUFDMEIsZUFBUSxRQURsQztBQUMyQyxnQkFBUyxTQURwRDtBQUM4RCxlQUFTLGNBRHZFO0FBQ3VGO0FBQ3JGLGlCQUFXLENBQ1Q7QUFDRSxnQkFBUSxhQURWO0FBRUUscUJBQWEsSUFGZjtBQUdFLGtCQUFVLE9BSFo7QUFJRSxpQkFBUyxRQUpYO0FBS0UsaUJBQVMsMkRBTFg7QUFNRSxtQkFBVyxVQU5iO0FBT0UsbUJBQVc7QUFQYixPQURTLEVBVVQ7QUFDRSxnQkFBUSxJQURWO0FBRUUsa0JBQVUsR0FGWjtBQUdFLGlCQUFTLDRCQUhYO0FBSUUsbUJBQVc7QUFKYixPQVZTO0FBRmIsS0FwUm1CLENBQXJCOztBQUQyRDtBQTRTdEQsVUFBSUMsSUFBSSxvQkFBUjtBQTVTc0QsVUE4U3ZESCxJQTlTdUQsR0ErU3JERyxJQS9TcUQsQ0E4U3ZESCxJQTlTdUQ7QUFBQSxVQThTakRKLE1BOVNpRCxHQStTckRPLElBL1NxRCxDQThTakRQLE1BOVNpRDtBQUFBLFVBOFN6Q0QsS0E5U3lDLEdBK1NyRFEsSUEvU3FELENBOFN6Q1IsS0E5U3lDO0FBQUEsVUE4U2xDRCxLQTlTa0MsR0ErU3JEUyxJQS9TcUQsQ0E4U2xDVCxLQTlTa0M7QUFBQSxVQThTM0JRLE9BOVMyQixHQStTckRDLElBL1NxRCxDQThTM0JELE9BOVMyQjtBQWdUekQsVUFBTUUsZUFBZSxHQUFHRixPQUF4QjtBQUdBWixNQUFBQSxFQUFFLENBQUMsMEJBQTBCTSxNQUExQixHQUFtQyxHQUFwQyxFQUF5QyxZQUFNO0FBQy9DO0FBQ0EsWUFBTVMsV0FBVyxHQUFHQyxjQUFjLENBQUNDLG9CQUFmLENBQW9DWCxNQUFwQyxFQUE0QyxVQUFDWSxTQUFELEVBQVlDLE9BQVo7QUFBQSxpQkFBeUJDLHNCQUFzQixDQUFDRixTQUFELEVBQVlDLE9BQVosQ0FBL0M7QUFBQSxTQUE1QyxDQUFwQjtBQUNBLFlBQU1FLElBQUksR0FBRztBQUNYWCxVQUFBQSxJQUFJLEVBQUpBLElBRFc7QUFDTEosVUFBQUEsTUFBTSxFQUFOQSxNQURLO0FBQ0dELFVBQUFBLEtBQUssRUFBTEEsS0FESDtBQUNVRCxVQUFBQSxLQUFLLEVBQUxBO0FBRFYsU0FBYjtBQUdBLFlBQU1rQixRQUFRLEdBQUdoQixNQUFNLENBQUNpQixNQUFQLENBQWMsQ0FBZCxFQUFpQkMsV0FBakIsT0FBbUMsR0FBcEQ7QUFDQSxZQUFJQyxrQkFBa0IsR0FBRyxvREFBMkJKLElBQTNCLEVBQWlDTixXQUFqQyxFQUE4QyxVQUFBVyxDQUFDO0FBQUEsaUJBQUtBLENBQUw7QUFBQSxTQUEvQyxFQUF3REMsZ0JBQXhELEVBQTBFTCxRQUExRSxDQUF6QixDQVArQyxDQVMvQzs7QUFDQWQsUUFBQUEsTUFBTSxDQUFDaUIsa0JBQUQsQ0FBTixDQUEyQkcsT0FBM0IsQ0FBbUNkLGVBQW5DO0FBQ0QsT0FYQyxDQUFGO0FBblR5RDs7QUE0UzNELHFDQUFpQkgsWUFBakIsbUNBQStCO0FBQUE7QUFtQjlCO0FBQ0YsR0FoVU8sQ0FBUjtBQWlVRCxDQWxkTyxDQUFSLEMsQ0FvZEE7QUFDQTtBQUNBOztBQUVPLFNBQVNTLHNCQUFULENBQWdDRixTQUFoQyxFQUEyQ0MsT0FBM0MsRUFBb0Q7QUFDekQsTUFBTVUsR0FBRyxHQUFHWCxTQUFTLEdBQUcsR0FBWixHQUFrQkMsT0FBOUI7QUFDQSw4Q0FBVUQsU0FBVix1Q0FBeUJDLE9BQXpCLEVBQW1DO0FBQUVXLElBQUFBLEtBQUssRUFBRUQsR0FBVDtBQUFjLFlBQU1BO0FBQXBCLEdBQW5DO0FBQ0Q7O0FBRUQsU0FBU0YsZ0JBQVQsQ0FBMEJJLFNBQTFCLEVBQXFDM0IsS0FBckMsRUFBNENDLEtBQTVDLEVBQW1EMkIsU0FBbkQsRUFBOEQxQixNQUE5RCxFQUFzRTJCLE9BQXRFLEVBQStFWixJQUEvRSxFQUFxRmEsT0FBckYsRUFBOEZDLEdBQTlGLEVBQW1HQyxLQUFuRyxFQUEwRztBQUN4Ry9CLEVBQUFBLEtBQUssR0FBR0EsS0FBSyxJQUFJLGVBQWpCO0FBQ0EsTUFBTWdDLElBQUksR0FBRztBQUNYaEIsSUFBQUEsSUFBSSxFQUFKQSxJQURXO0FBRVhhLElBQUFBLE9BQU8sRUFBUEE7QUFGVyxHQUFiOztBQUtBLE1BQUlGLFNBQUosRUFBZTtBQUNiSyxJQUFBQSxJQUFJLENBQUNMLFNBQUwsR0FBaUJBLFNBQWpCO0FBQ0Q7O0FBRUQsTUFBSTFCLE1BQUosRUFBWTtBQUNWK0IsSUFBQUEsSUFBSSxDQUFDL0IsTUFBTCxHQUFjQSxNQUFkO0FBQ0Q7O0FBRUQsTUFBSUYsS0FBSixFQUFXO0FBQ1RpQyxJQUFBQSxJQUFJLENBQUNqQyxLQUFMLEdBQWFBLEtBQWI7QUFDRDs7QUFFRCxNQUFJQyxLQUFKLEVBQVc7QUFDVGdDLElBQUFBLElBQUksQ0FBQ2hDLEtBQUwsR0FBYUEsS0FBYjtBQUNEOztBQUVELE1BQUk0QixPQUFKLEVBQWE7QUFDWEksSUFBQUEsSUFBSSxDQUFDSixPQUFMLEdBQWVBLE9BQWY7QUFDRDs7QUFDRCxTQUFPSSxJQUFQO0FBQ0Q7O0FBRUQsU0FBU0Msa0JBQVQsQ0FBNEJwQixTQUE1QixFQUF1Q0MsT0FBdkMsRUFBZ0Q7QUFDOUMsTUFBSTtBQUNGLFFBQU1vQixVQUFVLEdBQUcsSUFBbkI7QUFDQSxRQUFNQyxlQUFlLEdBQUcsSUFBeEIsQ0FGRSxDQUdGOztBQUNBLFFBQU1DLFdBQVcsR0FBRzlDLGlCQUFLQyxJQUFMLENBQVVGLGFBQVYsRUFBeUI2QyxVQUF6QixFQUFxQyxVQUFyQyxFQUFpRHJCLFNBQWpELEVBQTREc0IsZUFBNUQsRUFBNkUsU0FBN0UsQ0FBcEI7O0FBQ0EsUUFBTUUsU0FBUyxHQUFHL0MsaUJBQUtDLElBQUwsQ0FBVTZDLFdBQVYsRUFBdUJ0QixPQUFPLEdBQUcsT0FBakMsQ0FBbEI7O0FBQ0EsUUFBSXdCLFNBQUo7O0FBRUEsUUFBSUMsZUFBR0MsVUFBSCxDQUFjSCxTQUFkLENBQUosRUFBOEI7QUFDNUJDLE1BQUFBLFNBQVMsR0FBR0csSUFBSSxDQUFDQyxLQUFMLENBQVdILGVBQUdJLFlBQUgsQ0FBZ0JOLFNBQWhCLEVBQTJCLE1BQTNCLENBQVgsQ0FBWjtBQUNEOztBQUNELGdEQUFVeEIsU0FBVix1Q0FBeUJDLE9BQXpCLEVBQW1Dd0IsU0FBbkM7QUFDRCxHQVpELENBWUUsT0FBT00sS0FBUCxFQUFjO0FBQ2RDLElBQUFBLE9BQU8sQ0FBQ0QsS0FBUixDQUFjQSxLQUFkO0FBQ0Q7QUFDRiIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIG5vLXVudXNlZC12YXJzICovXG4vKiBlc2xpbnQtZW52IGplc3QgKi9cbmltcG9ydCBwYXRoIGZyb20gJ3BhdGgnO1xuaW1wb3J0IGZzIGZyb20gJ2ZzJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgcmVuZGVyZXIgZnJvbSAncmVhY3QtdGVzdC1yZW5kZXJlcic7XG5pbXBvcnQgb3NwYXRoIGZyb20gJ29zcGF0aCc7XG5pbXBvcnQgKiBhcyBsZXhpY29uSGVscGVycyBmcm9tICcuLi9TY3JpcHR1cmVQYW5lL2hlbHBlcnMvbGV4aWNvbkhlbHBlcnMnO1xuaW1wb3J0IFdvcmREZXRhaWxzLCB7IGdlbmVyYXRlV29yZExleGljb25EZXRhaWxzIH0gZnJvbSAnLi9Xb3JkTGV4aWNvbkRldGFpbHMnO1xuXG5jb25zdCBSRVNPVVJDRV9QQVRIID0gcGF0aC5qb2luKG9zcGF0aC5ob21lKCksICd0cmFuc2xhdGlvbkNvcmUnLCAncmVzb3VyY2VzJyk7XG5cbmRlc2NyaWJlKCdXb3JkTGV4aWNvbkRldGFpbHMnLCAoKSA9PiB7XG4gIGRlc2NyaWJlKCdyZW5kZXJpbmcgJywgKCkgPT4ge1xuICAgIGl0KCdyZW5kZXJzIEdyZWVrJywgKCkgPT4ge1xuICAgICAgY29uc3Qgd3JhcHBlciA9IHJlbmRlcmVyLmNyZWF0ZShcbiAgICAgICAgPFdvcmREZXRhaWxzXG4gICAgICAgICAgbGV4aWNvbkRhdGE9e3t9fVxuICAgICAgICAgIHdvcmRPYmplY3Q9e3tcbiAgICAgICAgICAgIGxlbW1hOiAnbGVtbWEnLFxuICAgICAgICAgICAgbW9ycGg6ICdHcixOUywsLCxHTVBGJyxcbiAgICAgICAgICAgIHN0cm9uZzogJ0cxMjMwJyxcbiAgICAgICAgICB9fVxuICAgICAgICAgIHRyYW5zbGF0ZT17ayA9PiBrfS8+LFxuICAgICAgKTtcbiAgICAgIGV4cGVjdCh3cmFwcGVyKS50b01hdGNoU25hcHNob3QoKTtcbiAgICB9KTtcblxuICAgIGl0KCdyZW5kZXJzIEhlYnJldyB0d28gcGFydCcsICgpID0+IHsgLy8gR2VuIDE6MSB3b3JkIDFcbiAgICAgIGNvbnN0IHdyYXBwZXIgPSByZW5kZXJlci5jcmVhdGUoXG4gICAgICAgIDxXb3JkRGV0YWlsc1xuICAgICAgICAgIGxleGljb25EYXRhPXt7fX1cbiAgICAgICAgICB3b3JkT2JqZWN0PXt7XG4gICAgICAgICAgICB0ZXh0OiAn15HWvNaw4oCL16jWtdeQ16nXgda01pbXmdeqJyxcbiAgICAgICAgICAgIGxlbW1hOiAn15DXqdeB1rTXmdeo1rXXqicsXG4gICAgICAgICAgICBtb3JwaDogJ0hlLFI6TmNmc2EnLFxuICAgICAgICAgICAgc3Ryb25nOiAnYjpINzIyNScsXG4gICAgICAgICAgfX1cbiAgICAgICAgICB0cmFuc2xhdGU9e2sgPT4ga31cbiAgICAgICAgICBpc0hlYnJldz17dHJ1ZX0vPixcbiAgICAgICk7XG4gICAgICBleHBlY3Qod3JhcHBlcikudG9NYXRjaFNuYXBzaG90KCk7XG4gICAgfSk7XG5cbiAgICBpdCgncmVuZGVycyBIZWJyZXcgc2luZ2xlIHBhcnQnLCAoKSA9PiB7IC8vIEdlbiAxOjEgd29yZCAyXG4gICAgICBjb25zdCB3cmFwcGVyID0gcmVuZGVyZXIuY3JlYXRlKFxuICAgICAgICA8V29yZERldGFpbHNcbiAgICAgICAgICBsZXhpY29uRGF0YT17e319XG4gICAgICAgICAgd29yZE9iamVjdD17e1xuICAgICAgICAgICAgdGV4dDogJ9eR1rzWuNeo1rjWo9eQJyxcbiAgICAgICAgICAgIGxlbW1hOiAn15HWvNa416jWuNeQJyxcbiAgICAgICAgICAgIG1vcnBoOiAnSGUsVnFwM21zJyxcbiAgICAgICAgICAgIHN0cm9uZzogJ0gxMjU0YScsXG4gICAgICAgICAgfX1cbiAgICAgICAgICB0cmFuc2xhdGU9e2sgPT4ga31cbiAgICAgICAgICBpc0hlYnJldz17dHJ1ZX0vPixcbiAgICAgICk7XG4gICAgICBleHBlY3Qod3JhcHBlcikudG9NYXRjaFNuYXBzaG90KCk7XG4gICAgfSk7XG5cbiAgICBpdCgncmVuZGVycyBIZWJyZXcgdGhyZWUgcGFydCcsICgpID0+IHsgLy8gR2VuIDE6MiB3b3JkIDFcbiAgICAgIGNvbnN0IHdyYXBwZXIgPSByZW5kZXJlci5jcmVhdGUoXG4gICAgICAgIDxXb3JkRGV0YWlsc1xuICAgICAgICAgIGxleGljb25EYXRhPXt7fX1cbiAgICAgICAgICB3b3JkT2JqZWN0PXt7XG4gICAgICAgICAgICB0ZXh0OiAn15XWsOKAi9eU1rjigIvXkNa41pfXqNa216UnLFxuICAgICAgICAgICAgbGVtbWE6ICfXkNa216jWttelJyxcbiAgICAgICAgICAgIG1vcnBoOiAnSGUsQzpUZDpOY2JzYScsXG4gICAgICAgICAgICBzdHJvbmc6ICdjOmQ6SDA3NzYnLFxuICAgICAgICAgIH19XG4gICAgICAgICAgdHJhbnNsYXRlPXtrID0+IGt9XG4gICAgICAgICAgaXNIZWJyZXc9e3RydWV9Lz4sXG4gICAgICApO1xuICAgICAgZXhwZWN0KHdyYXBwZXIpLnRvTWF0Y2hTbmFwc2hvdCgpO1xuICAgIH0pO1xuXG4gICAgaXQoJ3JlbmRlcnMgSGVicmV3IHR3byBwYXJ0IHdpdGggc3VmZml4JywgKCkgPT4geyAvLyBHZW4gMToxMSB3b3JkIDE1XG4gICAgICBjb25zdCB3cmFwcGVyID0gcmVuZGVyZXIuY3JlYXRlKFxuICAgICAgICA8V29yZERldGFpbHNcbiAgICAgICAgICBsZXhpY29uRGF0YT17e319XG4gICAgICAgICAgd29yZE9iamVjdD17e1xuICAgICAgICAgICAgdGV4dDogJ9eW1rfXqNaw16LigIvXlda5JyxcbiAgICAgICAgICAgIGxlbW1hOiAn15bWtteo1rfXoicsXG4gICAgICAgICAgICBtb3JwaDogJ0hlLE5jbXNjOlNwM21zJyxcbiAgICAgICAgICAgIHN0cm9uZzogJ0gyMjMzJyxcbiAgICAgICAgICB9fVxuICAgICAgICAgIHRyYW5zbGF0ZT17ayA9PiBrfVxuICAgICAgICAgIGlzSGVicmV3PXt0cnVlfS8+LFxuICAgICAgKTtcbiAgICAgIGV4cGVjdCh3cmFwcGVyKS50b01hdGNoU25hcHNob3QoKTtcbiAgICB9KTtcblxuICAgIGl0KCdyZW5kZXJzIEhlYnJldyB0aHJlZSBwYXJ0IHdpdGggc3VmZml4JywgKCkgPT4geyAvLyBHZW4gMToxMiB3b3JkIDE0XG4gICAgICBjb25zdCB3cmFwcGVyID0gcmVuZGVyZXIuY3JlYXRlKFxuICAgICAgICA8V29yZERldGFpbHNcbiAgICAgICAgICBsZXhpY29uRGF0YT17e319XG4gICAgICAgICAgd29yZE9iamVjdD17e1xuICAgICAgICAgICAgdGV4dDogJ9ec1rDigIvXnta015nXoNaU4oCL15XWuScsXG4gICAgICAgICAgICBsZW1tYTogJ9ee1rTXmdefJyxcbiAgICAgICAgICAgIG1vcnBoOiAnSGUsUjpOY21zYzpTcDNtcycsXG4gICAgICAgICAgICBzdHJvbmc6ICdsOkg0MzI3JyxcbiAgICAgICAgICB9fVxuICAgICAgICAgIHRyYW5zbGF0ZT17ayA9PiBrfVxuICAgICAgICAgIGlzSGVicmV3PXt0cnVlfS8+LFxuICAgICAgKTtcbiAgICAgIGV4cGVjdCh3cmFwcGVyKS50b01hdGNoU25hcHNob3QoKTtcbiAgICB9KTtcblxuICAgIGl0KCdyZW5kZXJzIEhlYnJldyBleHRyYSB3b3JkIHBhcnQnLCAoKSA9PiB7IC8vIDJraS0yMDoxNy4xNlxuICAgICAgY29uc3Qgd3JhcHBlciA9IHJlbmRlcmVyLmNyZWF0ZShcbiAgICAgICAgPFdvcmREZXRhaWxzXG4gICAgICAgICAgbGV4aWNvbkRhdGE9e3t9fVxuICAgICAgICAgIHdvcmRPYmplY3Q9e3tcbiAgICAgICAgICAgIHRleHQ6ICfXkda81rjXkda21r3XnNa44oCL15QnLFxuICAgICAgICAgICAgbGVtbWE6ICfXkda81rjXkda215wnLFxuICAgICAgICAgICAgbW9ycGg6ICdIZSxOcCcsXG4gICAgICAgICAgICBzdHJvbmc6ICdIMDg5NCcsXG4gICAgICAgICAgfX1cbiAgICAgICAgICB0cmFuc2xhdGU9e2sgPT4ga31cbiAgICAgICAgICBpc0hlYnJldz17dHJ1ZX0vPixcbiAgICAgICk7XG4gICAgICBleHBlY3Qod3JhcHBlcikudG9NYXRjaFNuYXBzaG90KCk7XG4gICAgfSk7XG5cbiAgICBpdCgncmVuZGVycyBIZWJyZXcgbWlzc2luZyBzdHJvbmdzIHBhcnQnLCAoKSA9PiB7IC8vIGRhbi0zOjE2LjZcbiAgICAgIGNvbnN0IHdyYXBwZXIgPSByZW5kZXJlci5jcmVhdGUoXG4gICAgICAgIDxXb3JkRGV0YWlsc1xuICAgICAgICAgIGxleGljb25EYXRhPXt7fX1cbiAgICAgICAgICB3b3JkT2JqZWN0PXt7XG4gICAgICAgICAgICB0ZXh0OiAn15zWsOKAi9ee1rfXnNaw15vWvNa41qPigIvXkCcsXG4gICAgICAgICAgICBsZW1tYTogJ9ee1rbXnNa215rWsCcsXG4gICAgICAgICAgICBtb3JwaDogJ0FyLFI6TmNtc2Q6VGQnLFxuICAgICAgICAgICAgc3Ryb25nOiAnbDpINDQzMCcsXG4gICAgICAgICAgfX1cbiAgICAgICAgICB0cmFuc2xhdGU9e2sgPT4ga31cbiAgICAgICAgICBpc0hlYnJldz17dHJ1ZX0vPixcbiAgICAgICk7XG4gICAgICBleHBlY3Qod3JhcHBlcikudG9NYXRjaFNuYXBzaG90KCk7XG4gICAgfSk7XG5cbiAgICBpdCgncmVuZGVycyBIZWJyZXcgd2l0aCBubyBzdHJvbmdzIG51bWJlcicsICgpID0+IHsgLy8gamRnLTE6MSBsYXN0XG4gICAgICBjb25zdCB3cmFwcGVyID0gcmVuZGVyZXIuY3JlYXRlKFxuICAgICAgICA8V29yZERldGFpbHNcbiAgICAgICAgICBsZXhpY29uRGF0YT17e319XG4gICAgICAgICAgd29yZE9iamVjdD17e1xuICAgICAgICAgICAgdGV4dDogJ9eR1rzWveKAi9eV1rknLFxuICAgICAgICAgICAgbGVtbWE6ICcnLFxuICAgICAgICAgICAgbW9ycGg6ICdIZSxSOlNwM21zJyxcbiAgICAgICAgICAgIHN0cm9uZzogJ2InLFxuICAgICAgICAgIH19XG4gICAgICAgICAgdHJhbnNsYXRlPXtrPT5rfVxuICAgICAgICAgIGlzSGVicmV3PXt0cnVlfS8+LFxuICAgICAgKTtcbiAgICAgIGV4cGVjdCh3cmFwcGVyKS50b01hdGNoU25hcHNob3QoKTtcbiAgICB9KTtcbiAgfSk7XG5cbiAgZGVzY3JpYmUoJ3Rlc3QgcG9wdXAgbGF5b3V0IGZvciBzaW5nbGUgYW5kIG11bHRpcGFydCcsICgpID0+IHtcbiAgICBjb25zdCBzdHJvbmdzVGVzdHMgPSBbXG4gICAgICB7XG4gICAgICAgIHRleHQ6ICfXkda81r3igIvXlda5JywgbGVtbWE6ICcnLCBtb3JwaDogJ0hlLFI6U3AzbXMnLCBzdHJvbmc6ICcnLCAvLyBlbXB0eSBzdHJvbmdzIG51bWJlclxuICAgICAgICByZXN1bHRzOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgJ3dvcmQnOiAn15HWvNa9JyxcbiAgICAgICAgICAgICdpdGVtTnVtJzogMCxcbiAgICAgICAgICAgICdtb3JwaCc6ICdwcmVwb3NpdGlvbicsXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICAnd29yZCc6ICfXlda5JyxcbiAgICAgICAgICAgICdpdGVtTnVtJzogMSxcbiAgICAgICAgICAgICdtb3JwaCc6ICdzdWZmaXgsIHByb25vbWluYWwsIHRoaXJkLCBtYXNjdWxpbmUsIHNpbmd1bGFyJyxcbiAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdGV4dDogJ9eR1rzWveKAi9eV1rknLCBsZW1tYTogJycsIG1vcnBoOiAnSGUsUjpTcDNtcycsIHN0cm9uZzogJ2InLCAvLyBqZGctMToxIGxhc3Qgd29yZCAtIG5vIGFjdHVhbCBzdHJvbmdzIG51bWJlclxuICAgICAgICByZXN1bHRzOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgJ3dvcmQnOiAn15HWvNa9JyxcbiAgICAgICAgICAgICdpdGVtTnVtJzogMCxcbiAgICAgICAgICAgICdzdHJvbmcnOiAnYicsXG4gICAgICAgICAgICAnbW9ycGgnOiAncHJlcG9zaXRpb24nLFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgJ3dvcmQnOiAn15XWuScsXG4gICAgICAgICAgICAnaXRlbU51bSc6IDEsXG4gICAgICAgICAgICAnbW9ycGgnOiAnc3VmZml4LCBwcm9ub21pbmFsLCB0aGlyZCwgbWFzY3VsaW5lLCBzaW5ndWxhcicsXG4gICAgICAgICAgfSxcbiAgICAgICAgXSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHRleHQ6ICfXnNaw4oCL157Wt9ec1rDXm9a81rjWo+KAi9eQJywgbGVtbWE6ICfXnta215zWttea1rAnLCBtb3JwaDogJ0FyLFI6TmNtc2Q6VGQnLCBzdHJvbmc6ICdsOkg0NDMwJywgLy8gZGFuLTM6MTYuNiAtIG1pc3Npbmcgc3Ryb25ncyBwYXJ0XG4gICAgICAgIHJlc3VsdHM6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICAnd29yZCc6ICfXnta315zWsNeb1rzWuNajJyxcbiAgICAgICAgICAgICdpdGVtTnVtJzogMSxcbiAgICAgICAgICAgICdzdHJvbmdOdW0nOiA0NDMwLFxuICAgICAgICAgICAgJ3N0cm9uZyc6ICdINDQzMCcsXG4gICAgICAgICAgICAnbGVtbWEnOiAn157Wttec1rbXmtawJyxcbiAgICAgICAgICAgICdtb3JwaCc6ICdub3VuLCBjb21tb24sIG1hc2N1bGluZSwgc2luZ3VsYXIsIGRldGVybWluZWQnLFxuICAgICAgICAgICAgJ2xleGljb24nOiAndWhsLTQ0MzAnLFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgJ3dvcmQnOiAn15zWsCcsXG4gICAgICAgICAgICAnaXRlbU51bSc6IDAsXG4gICAgICAgICAgICAnc3Ryb25nJzogJ2wnLFxuICAgICAgICAgICAgJ21vcnBoJzogJ3ByZXBvc2l0aW9uJyxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgICd3b3JkJzogJ9eQJyxcbiAgICAgICAgICAgICdpdGVtTnVtJzogMixcbiAgICAgICAgICAgICdtb3JwaCc6ICdwYXJ0aWNsZSwgZGVmaW5pdGVfYXJ0aWNsZScsXG4gICAgICAgICAgfSxcbiAgICAgICAgXSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHRleHQ6ICfXkda81rjXkda21r3XnNa44oCL15QnLCBsZW1tYTogJ9eR1rzWuNeR1rbXnCcsIG1vcnBoOiAnSGUsTnAnLCBzdHJvbmc6ICdIMDg5NCcsIC8vIDJraS0yMDoxNy4xNiAtIGV4dHJhIHdvcmQgcGFydCBub3QgaW4gc3Ryb25ncyBvciBtb3JwaFxuICAgICAgICByZXN1bHRzOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgJ3dvcmQnOiAn15HWvNa415HWtta915zWuCcsXG4gICAgICAgICAgICAnaXRlbU51bSc6IDAsXG4gICAgICAgICAgICAnc3Ryb25nTnVtJzogODk0LFxuICAgICAgICAgICAgJ3N0cm9uZyc6ICdIMDg5NCcsXG4gICAgICAgICAgICAnbGVtbWEnOiAn15HWvNa415HWttecJyxcbiAgICAgICAgICAgICdtb3JwaCc6ICdub3VuLCBwcm9wZXJfbmFtZScsXG4gICAgICAgICAgICAnbGV4aWNvbic6ICd1aGwtODk0JyxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgICd3b3JkJzogJ9eUJyxcbiAgICAgICAgICAgICdpdGVtTnVtJzogMSxcbiAgICAgICAgICAgICdtb3JwaCc6ICdtb3JwaF9taXNzaW5nJyxcbiAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdGV4dDogJ9ec1rDigIvXnta015nXoNaU4oCL15XWuScsIGxlbW1hOiAn157WtNeZ158nLCBtb3JwaDogJ0hlLFI6TmNtc2M6U3AzbXMnLCBzdHJvbmc6ICdsOkg0MzI3JywgLy8gR2VuIDE6MTIgd29yZCAxNCAtIHRocmVlIHBhcnQgd2l0aCBzdWZmaXhcbiAgICAgICAgcmVzdWx0czogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgICd3b3JkJzogJ9ee1rTXmdeg1pQnLFxuICAgICAgICAgICAgJ2l0ZW1OdW0nOiAxLFxuICAgICAgICAgICAgJ3N0cm9uZ051bSc6IDQzMjcsXG4gICAgICAgICAgICAnc3Ryb25nJzogJ0g0MzI3JyxcbiAgICAgICAgICAgICdsZW1tYSc6ICfXnta015nXnycsXG4gICAgICAgICAgICAnbW9ycGgnOiAnbm91biwgY29tbW9uLCBtYXNjdWxpbmUsIHNpbmd1bGFyLCBjb25zdHJ1Y3QnLFxuICAgICAgICAgICAgJ2xleGljb24nOiAndWhsLTQzMjcnLFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgJ3dvcmQnOiAn15zWsCcsXG4gICAgICAgICAgICAnaXRlbU51bSc6IDAsXG4gICAgICAgICAgICAnc3Ryb25nJzogJ2wnLFxuICAgICAgICAgICAgJ21vcnBoJzogJ3ByZXBvc2l0aW9uJyxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgICd3b3JkJzogJ9eV1rknLFxuICAgICAgICAgICAgJ2l0ZW1OdW0nOiAyLFxuICAgICAgICAgICAgJ21vcnBoJzogJ3N1ZmZpeCwgcHJvbm9taW5hbCwgdGhpcmQsIG1hc2N1bGluZSwgc2luZ3VsYXInLFxuICAgICAgICAgIH0sXG4gICAgICAgIF0sXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB0ZXh0OiAn15bWt9eo1rDXouKAi9eV1rknLCBsZW1tYTogJ9eW1rbXqNa316InLCBtb3JwaDogJ0hlLE5jbXNjOlNwM21zJywgc3Ryb25nOiAnSDIyMzMnLCAvLyBHZW4gMToxMSB3b3JkIDE1IC0gdHdvIHBhcnQgd2l0aCBzdWZmaXhcbiAgICAgICAgcmVzdWx0czogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgICd3b3JkJzogJ9eW1rfXqNaw16InLFxuICAgICAgICAgICAgJ2l0ZW1OdW0nOiAwLFxuICAgICAgICAgICAgJ3N0cm9uZ051bSc6IDIyMzMsXG4gICAgICAgICAgICAnc3Ryb25nJzogJ0gyMjMzJyxcbiAgICAgICAgICAgICdsZW1tYSc6ICfXlta216jWt9eiJyxcbiAgICAgICAgICAgICdtb3JwaCc6ICdub3VuLCBjb21tb24sIG1hc2N1bGluZSwgc2luZ3VsYXIsIGNvbnN0cnVjdCcsXG4gICAgICAgICAgICAnbGV4aWNvbic6ICd1aGwtMjIzMycsXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICAnd29yZCc6ICfXlda5JyxcbiAgICAgICAgICAgICdpdGVtTnVtJzogMSxcbiAgICAgICAgICAgICdtb3JwaCc6ICdzdWZmaXgsIHByb25vbWluYWwsIHRoaXJkLCBtYXNjdWxpbmUsIHNpbmd1bGFyJyxcbiAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdGV4dDogJ9eR1rzWuNeo1rjWo9eQJywgbGVtbWE6ICfXkda81rjXqNa415AnLCBtb3JwaDogJ0hlLFZxcDNtcycsIHN0cm9uZzogJ0gxMjU0YScsIC8vIEdlbiAxOjEgd29yZCAyXG4gICAgICAgIHJlc3VsdHM6IHtcbiAgICAgICAgICAnd29yZCc6ICfXkda81rjXqNa41qPXkCcsXG4gICAgICAgICAgJ2l0ZW1OdW0nOiAwLFxuICAgICAgICAgICdzdHJvbmdOdW0nOiAxMjU0LFxuICAgICAgICAgICdzdHJvbmcnOiAnSDEyNTRhJyxcbiAgICAgICAgICAnbGVtbWEnOiAn15HWvNa416jWuNeQJyxcbiAgICAgICAgICAnbW9ycGgnOiAndmVyYiwgcWFsLCBwZXJmZWN0X3FhdGFsLCB0aGlyZCwgbWFzY3VsaW5lLCBzaW5ndWxhcicsXG4gICAgICAgICAgJ2xleGljb24nOiAndWhsLTEyNTQnLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdGV4dDogJ9eR1rzWsOKAi9eo1rXXkNep14HWtNaW15nXqicsIGxlbW1hOiAn15DXqdeB1rTXmdeo1rXXqicsIG1vcnBoOiAnSGUsUjpOY2ZzYScsIHN0cm9uZzogJ2I6SDcyMjUnLCAvLyBHZW4gMToxIHdvcmQgMVxuICAgICAgICByZXN1bHRzOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgJ3dvcmQnOiAn16jWtdeQ16nXgda01pbXmdeqJyxcbiAgICAgICAgICAgICdpdGVtTnVtJzogMSxcbiAgICAgICAgICAgICdzdHJvbmdOdW0nOiA3MjI1LFxuICAgICAgICAgICAgJ3N0cm9uZyc6ICdINzIyNScsXG4gICAgICAgICAgICAnbGVtbWEnOiAn15DXqdeB1rTXmdeo1rXXqicsXG4gICAgICAgICAgICAnbW9ycGgnOiAnbm91biwgY29tbW9uLCBmZW1pbmluZSwgc2luZ3VsYXIsIGFic29sdXRlJyxcbiAgICAgICAgICAgICdsZXhpY29uJzogJ3VobC03MjI1JyxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgICd3b3JkJzogJ9eR1rzWsCcsXG4gICAgICAgICAgICAnaXRlbU51bSc6IDAsXG4gICAgICAgICAgICAnc3Ryb25nJzogJ2InLFxuICAgICAgICAgICAgJ21vcnBoJzogJ3ByZXBvc2l0aW9uJyxcbiAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgJ3RleHQnOiAnzqDOseG/ps67zr/PgicsICdsZW1tYSc6ICfOoM6x4b+mzrvOv8+CJywgJ3N0cm9uZyc6ICdHMzk3MjAnLCAnbW9ycGgnOiAnR3IsTiwsLCwsTk1TLCcsIC8vIFRpdHVzIDE6MSB3b3JkIDFcbiAgICAgICAgJ3Jlc3VsdHMnOiB7XG4gICAgICAgICAgJ3dvcmQnOiAnzqDOseG/ps67zr/PgicsXG4gICAgICAgICAgJ2l0ZW1OdW0nOiAwLFxuICAgICAgICAgICdzdHJvbmdOdW0nOiAzOTcyLFxuICAgICAgICAgICdzdHJvbmcnOiAnRzM5NzIwJyxcbiAgICAgICAgICAnbGVtbWEnOiAnzqDOseG/ps67zr/PgicsXG4gICAgICAgICAgJ21vcnBoJzogJ25vdW4sIG5vbWluYXRpdmUsIG1hc2N1bGluZSwgc2luZ3VsYXInLFxuICAgICAgICAgICdsZXhpY29uJzogJ3VnbC0zOTcyJyxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgICd0ZXh0JzogJ9eV1rDigIvXlNa44oCL15DWuNaX16jWttelJywgJ2xlbW1hJzogJ9eQ1rbXqNa216UnLCAnc3Ryb25nJzogJ2M6ZDpIMDc3NicsICdtb3JwaCc6ICdIZSxDOlRkOk5jYnNhJywgLy8gR2VuIDE6MiB3b3JkIDFcbiAgICAgICAgJ3Jlc3VsdHMnOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgJ3dvcmQnOiAn15DWuNaX16jWttelJyxcbiAgICAgICAgICAgICdpdGVtTnVtJzogMixcbiAgICAgICAgICAgICdzdHJvbmdOdW0nOiA3NzYsXG4gICAgICAgICAgICAnc3Ryb25nJzogJ0gwNzc2JyxcbiAgICAgICAgICAgICdsZW1tYSc6ICfXkNa216jWttelJyxcbiAgICAgICAgICAgICdtb3JwaCc6ICdub3VuLCBjb21tb24sIGJvdGhfZ2VuZGVycywgc2luZ3VsYXIsIGFic29sdXRlJyxcbiAgICAgICAgICAgICdsZXhpY29uJzogJ3VobC03NzYnLFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgJ3dvcmQnOiAn15XWsCcsXG4gICAgICAgICAgICAnaXRlbU51bSc6IDAsXG4gICAgICAgICAgICAnc3Ryb25nJzogJ2MnLFxuICAgICAgICAgICAgJ21vcnBoJzogJ2Nvbmp1bmN0aW9uJyxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgICd3b3JkJzogJ9eU1rgnLFxuICAgICAgICAgICAgJ2l0ZW1OdW0nOiAxLFxuICAgICAgICAgICAgJ3N0cm9uZyc6ICdkJyxcbiAgICAgICAgICAgICdtb3JwaCc6ICdwYXJ0aWNsZSwgZGVmaW5pdGVfYXJ0aWNsZScsXG4gICAgICAgICAgfSxcbiAgICAgICAgXSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgICd0ZXh0Jzon16jWtdeQ16nXgda015nXqtaw4oCL15rWuNajJywndGFnJzondycsJ3R5cGUnOid3b3JkJywnbGVtbWEnOifXqNa115DXqdeB1rTXmdeqJywnc3Ryb25nJzonSDcyMjU6SDEyMycsXG4gICAgICAgICdyZXN1bHRzJzogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgICd3b3JkJzogJ9eo1rXXkNep14HWtNeZ16rWsCcsXG4gICAgICAgICAgICAnc3Ryb25nTnVtJzogNzIyNSxcbiAgICAgICAgICAgICdzdHJvbmcnOiAnSDcyMjUnLFxuICAgICAgICAgICAgJ2xlbW1hJzogJ9eo1rXXkNep14HWtNeZ16onLFxuICAgICAgICAgICAgJ21vcnBoJzogJ21vcnBoX21pc3NpbmcnLFxuICAgICAgICAgICAgJ2xleGljb24nOiAndWhsLTcyMjUnLFxuICAgICAgICAgICAgJ2l0ZW1OdW0nOiAwLFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgJ3dvcmQnOiAn15rWuNajJyxcbiAgICAgICAgICAgICdzdHJvbmdOdW0nOiAxMjMsXG4gICAgICAgICAgICAnc3Ryb25nJzogJ0gxMjMnLFxuICAgICAgICAgICAgJ21vcnBoJzogJ21vcnBoX21pc3NpbmcnLFxuICAgICAgICAgICAgJ2xleGljb24nOiAndWhsLTEyMycsXG4gICAgICAgICAgICAnaXRlbU51bSc6IDEsXG4gICAgICAgICAgfSxcbiAgICAgICAgXSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHRleHQ6ICfXkda81rfigIvXqta81rDXl9a015zWvNa41pbXlCcsIHN0cm9uZzogJ2I6SDg0NjInLCBtb3JwaDogJ0hlLFJkOk5jZnNhJywgbGVtbWE6ICfXqta81rDXl9a015zWvNa415QnLFxuICAgICAgICByZXN1bHRzOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgJ3dvcmQnOiAn16rWvNaw15fWtNec1rzWuNaW15QnLFxuICAgICAgICAgICAgJ3N0cm9uZ051bSc6IDg0NjIsXG4gICAgICAgICAgICAnc3Ryb25nJzogJ0g4NDYyJyxcbiAgICAgICAgICAgICdsZXhpY29uJzogJ3VobC04NDYyJyxcbiAgICAgICAgICAgICdsZW1tYSc6ICfXqta81rDXl9a015zWvNa415QnLFxuICAgICAgICAgICAgJ21vcnBoJzogJ25vdW4sIGNvbW1vbiwgZmVtaW5pbmUsIHNpbmd1bGFyLCBhYnNvbHV0ZScsXG4gICAgICAgICAgICAnaXRlbU51bSc6IDEsXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICAnd29yZCc6ICfXkda81rcnLFxuICAgICAgICAgICAgJ3N0cm9uZyc6ICdiJyxcbiAgICAgICAgICAgICdtb3JwaCc6ICdwcmVwb3NpdGlvbiwgZGVmaW5pdGVfYXJ0aWNsZScsXG4gICAgICAgICAgICAnaXRlbU51bSc6IDAsXG4gICAgICAgICAgfSxcbiAgICAgICAgXSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgICd0ZXh0Jzon157WteKAi9eo1rXXkNep14HWtNeq1pHigIvXlda5JywnbGVtbWEnOifXqNa115DXqdeB1rTXmdeqJywnc3Ryb25nJzonbTpINzIyNScsIC8vIG1vcnBoIG1pc3NpbmdcbiAgICAgICAgJ3Jlc3VsdHMnOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgJ3dvcmQnOiAn16jWtdeQ16nXgda016rWkScsXG4gICAgICAgICAgICAnc3Ryb25nTnVtJzogNzIyNSxcbiAgICAgICAgICAgICdzdHJvbmcnOiAnSDcyMjUnLFxuICAgICAgICAgICAgJ2xlbW1hJzogJ9eo1rXXkNep14HWtNeZ16onLFxuICAgICAgICAgICAgJ21vcnBoJzogJ21vcnBoX21pc3NpbmcnLFxuICAgICAgICAgICAgJ2l0ZW1OdW0nOiAxLFxuICAgICAgICAgICAgJ2xleGljb24nOiAndWhsLTcyMjUnLFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgJ3dvcmQnOiAn157WtScsXG4gICAgICAgICAgICAnc3Ryb25nJzogJ20nLFxuICAgICAgICAgICAgJ21vcnBoJzogJ21vcnBoX21pc3NpbmcnLFxuICAgICAgICAgICAgJ2l0ZW1OdW0nOiAwLFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgJ3dvcmQnOiAn15XWuScsXG4gICAgICAgICAgICAnbW9ycGgnOiAnbW9ycGhfbWlzc2luZycsXG4gICAgICAgICAgICAnaXRlbU51bSc6IDIsXG4gICAgICAgICAgfSxcbiAgICAgICAgXSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgICd0ZXh0Jzon16jWtdeQ16nXgda015nXqtaw4oCL15rWuNajJywndGFnJzondycsJ3R5cGUnOid3b3JkJywnbGVtbWEnOifXqNa115DXqdeB1rTXmdeqJywnc3Ryb25nJzonSDcyMjUnLCAvLyBtaXNzaW5nIG1vcnBoXG4gICAgICAgICdyZXN1bHRzJzogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgICd3b3JkJzogJ9eo1rXXkNep14HWtNeZ16rWsCcsXG4gICAgICAgICAgICAnc3Ryb25nTnVtJzogNzIyNSxcbiAgICAgICAgICAgICdzdHJvbmcnOiAnSDcyMjUnLFxuICAgICAgICAgICAgJ2xlbW1hJzogJ9eo1rXXkNep14HWtNeZ16onLFxuICAgICAgICAgICAgJ21vcnBoJzogJ21vcnBoX21pc3NpbmcnLFxuICAgICAgICAgICAgJ2xleGljb24nOiAndWhsLTcyMjUnLFxuICAgICAgICAgICAgJ2l0ZW1OdW0nOiAwLFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgJ3dvcmQnOiAn15rWuNajJyxcbiAgICAgICAgICAgICdtb3JwaCc6ICdtb3JwaF9taXNzaW5nJyxcbiAgICAgICAgICAgICdpdGVtTnVtJzogMSxcbiAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgJ3RleHQnOifXlNa34oGg16nXgda81rnXpNaw15jWtNaU15nXnScsJ2xlbW1hJzon16nXgda416TWt9eYJywnc3Ryb25nJzonZDpIODE5OScsJ21vcnBoJzogJ0hlLFRkOlZxcm1wYScsIC8vIFJ1dGggMToxIC0gemVybyBzcGFjZSBqb2luZXJcbiAgICAgICAgJ3Jlc3VsdHMnOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgJ3dvcmQnOiAn16nXgda81rnXpNaw15jWtNaU15nXnScsXG4gICAgICAgICAgICAnc3Ryb25nTnVtJzogODE5OSxcbiAgICAgICAgICAgICdzdHJvbmcnOiAnSDgxOTknLFxuICAgICAgICAgICAgJ2xlbW1hJzogJ9ep14HWuNek1rfXmCcsXG4gICAgICAgICAgICAnbW9ycGgnOiAndmVyYiwgcWFsLCBwYXJ0aWNpcGxlX2FjdGl2ZSwgbWFzY3VsaW5lLCBwbHVyYWwsIGFic29sdXRlJyxcbiAgICAgICAgICAgICdsZXhpY29uJzogJ3VobC04MTk5JyxcbiAgICAgICAgICAgICdpdGVtTnVtJzogMSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgICd3b3JkJzogJ9eU1rcnLFxuICAgICAgICAgICAgJ3N0cm9uZyc6ICdkJyxcbiAgICAgICAgICAgICdtb3JwaCc6ICdwYXJ0aWNsZSwgZGVmaW5pdGVfYXJ0aWNsZScsXG4gICAgICAgICAgICAnaXRlbU51bSc6IDAsXG4gICAgICAgICAgfSxcblxuICAgICAgICBdLFxuICAgICAgfSxcbiAgICBdO1xuXG4gICAgZm9yIChsZXQgdGVzdCBvZiBzdHJvbmdzVGVzdHMpIHtcbiAgICAgIGNvbnN0IHtcbiAgICAgICAgdGV4dCwgc3Ryb25nLCBtb3JwaCwgbGVtbWEsIHJlc3VsdHMsXG4gICAgICB9ID0gdGVzdDtcbiAgICAgIGNvbnN0IGV4cGVjdGVkUmVzdWx0cyA9IHJlc3VsdHM7XG5cblxuICAgICAgaXQoJ3Nob3VsZCBzdWNjZWVkIHdpdGggXCInICsgc3Ryb25nICsgJ1wiJywgKCkgPT4ge1xuICAgICAgICAvL3doZW5cbiAgICAgICAgY29uc3QgbGV4aWNvbkRhdGEgPSBsZXhpY29uSGVscGVycy5sb29rdXBTdHJvbmdzTnVtYmVycyhzdHJvbmcsIChsZXhpY29uSWQsIGVudHJ5SWQpID0+IChnZXRMZXhpY29uRGF0YVNpbXVsYXRlKGxleGljb25JZCwgZW50cnlJZCkpKTtcbiAgICAgICAgY29uc3Qgd29yZCA9IHtcbiAgICAgICAgICB0ZXh0LCBzdHJvbmcsIG1vcnBoLCBsZW1tYSxcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgaXNIZWJyZXcgPSBzdHJvbmcuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgPT09ICdIJztcbiAgICAgICAgbGV0IHdvcmRMZXhpY29uRGV0YWlscyA9IGdlbmVyYXRlV29yZExleGljb25EZXRhaWxzKHdvcmQsIGxleGljb25EYXRhLCB0ID0+ICh0KSwgZ2VuZXJhdGVXb3JkUGFydCwgaXNIZWJyZXcpO1xuXG4gICAgICAgIC8vIHRoZW5cbiAgICAgICAgZXhwZWN0KHdvcmRMZXhpY29uRGV0YWlscykudG9FcXVhbChleHBlY3RlZFJlc3VsdHMpO1xuICAgICAgfSk7XG4gICAgfVxuICB9KTtcbn0pO1xuXG4vL1xuLy8gaGVscGVyc1xuLy9cblxuZXhwb3J0IGZ1bmN0aW9uIGdldExleGljb25EYXRhU2ltdWxhdGUobGV4aWNvbklkLCBlbnRyeUlkKSB7XG4gIGNvbnN0IGtleSA9IGxleGljb25JZCArICctJyArIGVudHJ5SWQ7XG4gIHJldHVybiB7IFtsZXhpY29uSWRdOiB7IFtlbnRyeUlkXTogeyBicmllZjoga2V5LCBsb25nOiBrZXkgfSB9IH07XG59XG5cbmZ1bmN0aW9uIGdlbmVyYXRlV29yZFBhcnQodHJhbnNsYXRlLCBsZW1tYSwgbW9ycGgsIHN0cm9uZ051bSwgc3Ryb25nLCBsZXhpY29uLCB3b3JkLCBpdGVtTnVtLCBwb3MsIGNvdW50KSB7XG4gIG1vcnBoID0gbW9ycGggfHwgJ21vcnBoX21pc3NpbmcnO1xuICBjb25zdCBkYXRhID0ge1xuICAgIHdvcmQsXG4gICAgaXRlbU51bSxcbiAgfTtcblxuICBpZiAoc3Ryb25nTnVtKSB7XG4gICAgZGF0YS5zdHJvbmdOdW0gPSBzdHJvbmdOdW07XG4gIH1cblxuICBpZiAoc3Ryb25nKSB7XG4gICAgZGF0YS5zdHJvbmcgPSBzdHJvbmc7XG4gIH1cblxuICBpZiAobGVtbWEpIHtcbiAgICBkYXRhLmxlbW1hID0gbGVtbWE7XG4gIH1cblxuICBpZiAobW9ycGgpIHtcbiAgICBkYXRhLm1vcnBoID0gbW9ycGg7XG4gIH1cblxuICBpZiAobGV4aWNvbikge1xuICAgIGRhdGEubGV4aWNvbiA9IGxleGljb247XG4gIH1cbiAgcmV0dXJuIGRhdGE7XG59XG5cbmZ1bmN0aW9uIGdldExleGljb25EYXRhUmVhbChsZXhpY29uSWQsIGVudHJ5SWQpIHtcbiAgdHJ5IHtcbiAgICBjb25zdCBsYW5ndWFnZUlkID0gJ2VuJztcbiAgICBjb25zdCByZXNvdXJjZVZlcnNpb24gPSAndjAnO1xuICAgIC8vIGdlbmVyYXRlIHBhdGggZnJvbSByZXNvdXJjZVR5cGUgYW5kIGFydGljbGVJZFxuICAgIGNvbnN0IGxleGljb25QYXRoID0gcGF0aC5qb2luKFJFU09VUkNFX1BBVEgsIGxhbmd1YWdlSWQsICdsZXhpY29ucycsIGxleGljb25JZCwgcmVzb3VyY2VWZXJzaW9uLCAnY29udGVudCcpO1xuICAgIGNvbnN0IGVudHJ5UGF0aCA9IHBhdGguam9pbihsZXhpY29uUGF0aCwgZW50cnlJZCArICcuanNvbicpO1xuICAgIGxldCBlbnRyeURhdGE7XG5cbiAgICBpZiAoZnMuZXhpc3RzU3luYyhlbnRyeVBhdGgpKSB7XG4gICAgICBlbnRyeURhdGEgPSBKU09OLnBhcnNlKGZzLnJlYWRGaWxlU3luYyhlbnRyeVBhdGgsICd1dGY4JykpO1xuICAgIH1cbiAgICByZXR1cm4geyBbbGV4aWNvbklkXTogeyBbZW50cnlJZF06IGVudHJ5RGF0YSB9IH07XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gIH1cbn1cbiJdfQ==