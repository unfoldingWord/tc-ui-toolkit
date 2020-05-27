"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BIBLE_BOOKS = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _fs = _interopRequireDefault(require("fs"));

var _path = _interopRequireDefault(require("path"));

var _ospath = _interopRequireDefault(require("ospath"));

var lexiconHelpers = _interopRequireWildcard(require("../lexiconHelpers"));

/* eslint-env jest */
var RESOURCE_PATH = _path["default"].join(_ospath["default"].home(), 'translationCore', 'resources');

var OT_PATH = _path["default"].join(RESOURCE_PATH, 'hbo/bibles/uhb/v1.4.1');

var outputFolder = _path["default"].join(__dirname, 'fixtures/words');

var BIBLE_BOOKS = {
  oldTestament: {
    'gen': 'Genesis',
    'exo': 'Exodus',
    'lev': 'Leviticus',
    'num': 'Numbers',
    'deu': 'Deuteronomy',
    'jos': 'Joshua',
    'jdg': 'Judges',
    'rut': 'Ruth',
    '1sa': '1 Samuel',
    '2sa': '2 Samuel',
    '1ki': '1 Kings',
    '2ki': '2 Kings',
    '1ch': '1 Chronicles',
    '2ch': '2 Chronicles',
    'ezr': 'Ezra',
    'neh': 'Nehemiah',
    'est': 'Esther',
    'job': 'Job',
    'psa': 'Psalms',
    'pro': 'Proverbs',
    'ecc': 'Ecclesiastes',
    'sng': 'Song of Solomon',
    'isa': 'Isaiah',
    'jer': 'Jeremiah',
    'lam': 'Lamentations',
    'ezk': 'Ezekiel',
    'dan': 'Daniel',
    'hos': 'Hosea',
    'jol': 'Joel',
    'amo': 'Amos',
    'oba': 'Obadiah',
    'jon': 'Jonah',
    'mic': 'Micah',
    'nam': 'Nahum',
    'hab': 'Habakkuk',
    'zep': 'Zephaniah',
    'hag': 'Haggai',
    'zec': 'Zechariah',
    'mal': 'Malachi'
  },
  newTestament: {
    'mat': 'Matthew',
    'mrk': 'Mark',
    'luk': 'Luke',
    'jhn': 'John',
    'act': 'Acts',
    'rom': 'Romans',
    '1co': '1 Corinthians',
    '2co': '2 Corinthians',
    'gal': 'Galatians',
    'eph': 'Ephesians',
    'php': 'Philippians',
    'col': 'Colossians',
    '1th': '1 Thessalonians',
    '2th': '2 Thessalonians',
    '1ti': '1 Timothy',
    '2ti': '2 Timothy',
    'tit': 'Titus',
    'phm': 'Philemon',
    'heb': 'Hebrews',
    'jas': 'James',
    '1pe': '1 Peter',
    '2pe': '2 Peter',
    '1jn': '1 John',
    '2jn': '2 John',
    '3jn': '3 John',
    'jud': 'Jude',
    'rev': 'Revelation'
  }
};
exports.BIBLE_BOOKS = BIBLE_BOOKS;
describe('lexiconHelpers', function () {
  describe('test stongs lookup', function () {
    var strongsTests = [['b:H7225', {
      'uhl': {
        '7225': 'uhl-7225'
      }
    }], ['H123:H7225', {
      'uhl': {
        '123': 'uhl-123',
        '7225': 'uhl-7225'
      }
    }], ['c:d:H0776', {
      'uhl': {
        '776': 'uhl-776'
      }
    }], ['H1961', {
      'uhl': {
        '1961': 'uhl-1961'
      }
    }], ['H5921a', {
      'uhl': {
        '5921': 'uhl-5921'
      }
    }], ['G33260', {
      'ugl': {
        '3326': 'ugl-3326'
      }
    }], ['H7225:b', {
      'uhl': {
        '7225': 'uhl-7225'
      }
    }], ['', {}], ['b', {}], [null, {}]];

    var _loop = function _loop() {
      var test = _strongsTests[_i];
      var strongs = test[0];
      var expectedResults = test[1];
      it('should succeed with "' + strongs + '"', function () {
        //when
        var results = lexiconHelpers.lookupStrongsNumbers(strongs, function (lexiconId, entryId) {
          return getLexiconData(lexiconId, entryId);
        }); // then

        expect(results).toEqual(expectedResults);
      });
    };

    for (var _i = 0, _strongsTests = strongsTests; _i < _strongsTests.length; _i++) {
      _loop();
    }
  });
  describe('test stongs parsing', function () {
    var strongsTests = [['b:H7225', [0, 7225], ['uhl', 'uhl'], 2], ['H123:H7225', [123, 7225], ['uhl', 'uhl'], 2], ['c:d:H0776', [0, 0, 776], ['uhl', 'uhl', 'uhl'], 3], ['H1961', [1961], ['uhl'], 1], ['H5921a', [5921], ['uhl'], 1], ['G33260', [3326], ['ugl'], 1], ['', [], [], 0], ['b', [0], ['uhl'], 1], [null, [], [], 0]];

    var _loop2 = function _loop2() {
      var test = _strongsTests2[_i2];
      var strongs = test[0];
      var expectedEntryIds = test[1];
      var expectedLexiconId = test[2];
      var expectedPartCount = test[3];
      it('should succeed with "' + strongs + '"', function () {
        //when
        var results = extractStrongs(strongs); // then

        expect(results.entryIds).toEqual(expectedEntryIds);
        expect(results.lexiconIds).toEqual(expectedLexiconId);
        expect(results.parts.length).toEqual(expectedPartCount);
      });
    };

    for (var _i2 = 0, _strongsTests2 = strongsTests; _i2 < _strongsTests2.length; _i2++) {
      _loop2();
    }
  });
  describe('test word parsing', function () {
    var wordTests = [['בְּ​רֵאשִׁ֖ית', ['בְּ', 'רֵאשִׁ֖ית']], ['בָּרָ֣א', ['בָּרָ֣א']], ['הַ​שָּׁמַ֖יִם', ['הַ', 'שָּׁמַ֖יִם']], ['וְ​אֵ֥ת', ['וְ', 'אֵ֥ת']], ['וְ​הָ​אָ֗רֶץ', ['וְ', 'הָ', 'אָ֗רֶץ']], ['חֲכָמֶ֑י​הָ', ['חֲכָמֶ֑י', 'הָ']], // gen 41:8
    ['Ἰάκωβος', ['Ἰάκωβος']]];

    var _loop3 = function _loop3() {
      var test = _wordTests[_i3];
      var word = test[0];
      var expectedParts = test[1];
      it('should succeed with "' + word + '"', function () {
        //when
        var results = lexiconHelpers.getWordParts(word); // then

        expect(results).toEqual(expectedParts);
      });
    };

    for (var _i3 = 0, _wordTests = wordTests; _i3 < _wordTests.length; _i3++) {
      _loop3();
    }
  });
  describe('UHB tests', function () {
    describe.skip('consistency check OT', function () {
      var _loop4 = function _loop4() {
        var bookId = _Object$keys[_i4];
        var BookName = BIBLE_BOOKS.oldTestament[bookId];
        it('check ' + BookName, function () {
          // reads all the words from book and saves parsed words to file
          var words = {};

          var bookPath = _path["default"].join(OT_PATH, bookId);

          var files = _fs["default"].readdirSync(bookPath);

          var _iteratorNormalCompletion = true;
          var _didIteratorError = false;
          var _iteratorError = undefined;

          try {
            for (var _iterator = files[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
              var file = _step.value;
              var chapter = JSON.parse(_fs["default"].readFileSync(_path["default"].join(bookPath, file), 'utf8'));
              var cRef = bookId + '-' + file.split('.')[0] + ':';
              var verses = Object.keys(chapter);

              for (var _i5 = 0, _verses = verses; _i5 < _verses.length; _i5++) {
                var verseNum = _verses[_i5];
                var verse = chapter[verseNum];
                var objects = verse.verseObjects;
                var vRef = cRef + verseNum;
                getWords(objects, words, vRef);
              }
            }
          } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion && _iterator["return"] != null) {
                _iterator["return"]();
              }
            } finally {
              if (_didIteratorError) {
                throw _iteratorError;
              }
            }
          }

          var output = '';
          var anomallies = '';
          var missingMorphs = 0;
          var invalidStrongsCount = 0;
          var invalidMorphCount = 0;
          var wordEntries = Object.keys(words).sort();
          var _iteratorNormalCompletion2 = true;
          var _didIteratorError2 = false;
          var _iteratorError2 = undefined;

          try {
            for (var _iterator2 = wordEntries[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
              var wordIndex = _step2.value;
              var word = words[wordIndex];
              var morph = word.word.morph;
              var strongs = word.word.strong;
              var morphKeys = lexiconHelpers.getMorphKeys(morph);
              var wordParts = lexiconHelpers.getWordParts(word.word.text);
              word.wordParts = wordParts;

              if (!strongs) {
                var warning = 'Missing strongs: ' + JSON.stringify(word);
                anomallies += warning + '\n'; // console.warn(warning);
              } else {
                var valid = lexiconHelpers.containsValidStrongsNumber(strongs);

                if (!valid) {
                  var _warning = 'Missing strongs Number: ' + JSON.stringify(word);

                  anomallies += _warning + '\n'; // console.warn(warning);
                }
              }

              if (!morphKeys[0].length) {
                if (++missingMorphs < 0) {
                  console.warn('Missing morph entry: ' + JSON.stringify(word));
                }
              } else {
                var strongsParts = lexiconHelpers.getStrongsParts(strongs);

                if (strongsParts.length !== morphKeys.length) {
                  var morphLen = morphKeys.length;

                  if (strongsParts.length + 1 === morphLen && morphKeys.length && morphKeys[morphKeys.length - 1][0] === 'suffix') {
                    // add exception for suffix
                    morphLen--;
                  }

                  if (strongsParts.length !== morphLen) {
                    var _warning2 = 'number of strongs parts ' + strongsParts.length + ' different than number of morph parts ' + morphKeys.length + ' : ' + JSON.stringify(word);

                    anomallies += _warning2 + '\n';

                    if (++invalidStrongsCount > 0) {// console.warn(warning);
                    }
                  }
                }

                if (wordParts.length !== morphKeys.length) {
                  var _morphLen = morphKeys.length;

                  if (wordParts.length + 1 === _morphLen && morphKeys.length && morphKeys[morphKeys.length - 1][0] === 'suffix') {
                    // add exception for suffix
                    _morphLen--;
                  }

                  if (wordParts.length !== _morphLen) {
                    var _warning3 = 'number of word parts ' + wordParts.length + ' different than number of morph parts ' + morphKeys.length + ' : ' + JSON.stringify(word);

                    anomallies += _warning3 + '\n';

                    if (++invalidMorphCount > 0) {// console.warn(warning);
                    }
                  }
                }
              }

              word.morphKeys = morphKeys;

              if (output) {
                output += ',\n';
              }

              output += '  "' + wordIndex + '": ' + JSON.stringify(word);
            }
          } catch (err) {
            _didIteratorError2 = true;
            _iteratorError2 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion2 && _iterator2["return"] != null) {
                _iterator2["return"]();
              }
            } finally {
              if (_didIteratorError2) {
                throw _iteratorError2;
              }
            }
          }

          console.log('-----------\nin ' + BookName + ':\nnumber of unique words: ' + wordEntries.length);

          if (missingMorphs) {
            console.warn('missingMorphs: ' + missingMorphs);
          }

          if (invalidStrongsCount) {
            console.warn('inconsistant Strongs Count: ' + invalidStrongsCount);
          }

          if (invalidMorphCount) {
            console.warn('inconsistant Morph Count: ' + invalidMorphCount);
          }

          if (anomallies) {
            console.warn('anomallies:\n' + anomallies);
          }

          output = '{\n' + output + '\n}\n';

          var outFile = _path["default"].join(outputFolder, bookId + '-word-checks.json');

          _fs["default"].writeFileSync(outFile, output, {
            encoding: 'utf8'
          });
        });
      };

      for (var _i4 = 0, _Object$keys = Object.keys(BIBLE_BOOKS.oldTestament); _i4 < _Object$keys.length; _i4++) {
        _loop4();
      }
    });
  });
}); //
// helpers
//

function extractStrongs(strongs) {
  var parts = lexiconHelpers.getStrongsParts(strongs);
  var lexiconIds = [];
  var entryIds = [];
  var _iteratorNormalCompletion3 = true;
  var _didIteratorError3 = false;
  var _iteratorError3 = undefined;

  try {
    for (var _iterator3 = parts[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
      var found = _step3.value;
      var lexiconId = lexiconHelpers.lexiconIdFromStrongs(found);
      lexiconIds.push(lexiconId);
      var entryId = lexiconHelpers.lexiconEntryIdFromStrongs(found);
      entryIds.push(entryId);
    }
  } catch (err) {
    _didIteratorError3 = true;
    _iteratorError3 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion3 && _iterator3["return"] != null) {
        _iterator3["return"]();
      }
    } finally {
      if (_didIteratorError3) {
        throw _iteratorError3;
      }
    }
  }

  return {
    entryIds: entryIds,
    lexiconIds: lexiconIds,
    parts: parts
  };
}

function getWords(objects, words, ref) {
  for (var i = 0, len = objects.length; i < len; i++) {
    var object = objects[i];

    if (object.type === 'word' && object.text && !words[object.text]) {
      var data = {
        word: object,
        ref: ref + '.' + i
      };
      words[object.text] = data;
    }

    if (object.children) {
      getWords(object.children, words, ref + '.' + i);
    }
  }
}

function getLexiconData(lexiconId, entryId) {
  return (0, _defineProperty2["default"])({}, lexiconId, (0, _defineProperty2["default"])({}, entryId, lexiconId + '-' + entryId));
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9TY3JpcHR1cmVQYW5lL2hlbHBlcnMvX190ZXN0X18vbGV4aWNvbkhlbHBlcnMudGVzdC5qcyJdLCJuYW1lcyI6WyJSRVNPVVJDRV9QQVRIIiwicGF0aCIsImpvaW4iLCJvc3BhdGgiLCJob21lIiwiT1RfUEFUSCIsIm91dHB1dEZvbGRlciIsIl9fZGlybmFtZSIsIkJJQkxFX0JPT0tTIiwib2xkVGVzdGFtZW50IiwibmV3VGVzdGFtZW50IiwiZGVzY3JpYmUiLCJzdHJvbmdzVGVzdHMiLCJ0ZXN0Iiwic3Ryb25ncyIsImV4cGVjdGVkUmVzdWx0cyIsIml0IiwicmVzdWx0cyIsImxleGljb25IZWxwZXJzIiwibG9va3VwU3Ryb25nc051bWJlcnMiLCJsZXhpY29uSWQiLCJlbnRyeUlkIiwiZ2V0TGV4aWNvbkRhdGEiLCJleHBlY3QiLCJ0b0VxdWFsIiwiZXhwZWN0ZWRFbnRyeUlkcyIsImV4cGVjdGVkTGV4aWNvbklkIiwiZXhwZWN0ZWRQYXJ0Q291bnQiLCJleHRyYWN0U3Ryb25ncyIsImVudHJ5SWRzIiwibGV4aWNvbklkcyIsInBhcnRzIiwibGVuZ3RoIiwid29yZFRlc3RzIiwid29yZCIsImV4cGVjdGVkUGFydHMiLCJnZXRXb3JkUGFydHMiLCJza2lwIiwiYm9va0lkIiwiQm9va05hbWUiLCJ3b3JkcyIsImJvb2tQYXRoIiwiZmlsZXMiLCJmcyIsInJlYWRkaXJTeW5jIiwiZmlsZSIsImNoYXB0ZXIiLCJKU09OIiwicGFyc2UiLCJyZWFkRmlsZVN5bmMiLCJjUmVmIiwic3BsaXQiLCJ2ZXJzZXMiLCJPYmplY3QiLCJrZXlzIiwidmVyc2VOdW0iLCJ2ZXJzZSIsIm9iamVjdHMiLCJ2ZXJzZU9iamVjdHMiLCJ2UmVmIiwiZ2V0V29yZHMiLCJvdXRwdXQiLCJhbm9tYWxsaWVzIiwibWlzc2luZ01vcnBocyIsImludmFsaWRTdHJvbmdzQ291bnQiLCJpbnZhbGlkTW9ycGhDb3VudCIsIndvcmRFbnRyaWVzIiwic29ydCIsIndvcmRJbmRleCIsIm1vcnBoIiwic3Ryb25nIiwibW9ycGhLZXlzIiwiZ2V0TW9ycGhLZXlzIiwid29yZFBhcnRzIiwidGV4dCIsIndhcm5pbmciLCJzdHJpbmdpZnkiLCJ2YWxpZCIsImNvbnRhaW5zVmFsaWRTdHJvbmdzTnVtYmVyIiwiY29uc29sZSIsIndhcm4iLCJzdHJvbmdzUGFydHMiLCJnZXRTdHJvbmdzUGFydHMiLCJtb3JwaExlbiIsImxvZyIsIm91dEZpbGUiLCJ3cml0ZUZpbGVTeW5jIiwiZW5jb2RpbmciLCJmb3VuZCIsImxleGljb25JZEZyb21TdHJvbmdzIiwicHVzaCIsImxleGljb25FbnRyeUlkRnJvbVN0cm9uZ3MiLCJyZWYiLCJpIiwibGVuIiwib2JqZWN0IiwidHlwZSIsImRhdGEiLCJjaGlsZHJlbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUpBO0FBTUEsSUFBTUEsYUFBYSxHQUFHQyxpQkFBS0MsSUFBTCxDQUFVQyxtQkFBT0MsSUFBUCxFQUFWLEVBQXlCLGlCQUF6QixFQUE0QyxXQUE1QyxDQUF0Qjs7QUFDQSxJQUFNQyxPQUFPLEdBQUdKLGlCQUFLQyxJQUFMLENBQVVGLGFBQVYsRUFBeUIsdUJBQXpCLENBQWhCOztBQUNBLElBQU1NLFlBQVksR0FBR0wsaUJBQUtDLElBQUwsQ0FBVUssU0FBVixFQUFxQixnQkFBckIsQ0FBckI7O0FBRU8sSUFBTUMsV0FBVyxHQUFHO0FBQ3pCQyxFQUFBQSxZQUFZLEVBQUU7QUFDWixXQUFPLFNBREs7QUFFWixXQUFPLFFBRks7QUFHWixXQUFPLFdBSEs7QUFJWixXQUFPLFNBSks7QUFLWixXQUFPLGFBTEs7QUFNWixXQUFPLFFBTks7QUFPWixXQUFPLFFBUEs7QUFRWixXQUFPLE1BUks7QUFTWixXQUFPLFVBVEs7QUFVWixXQUFPLFVBVks7QUFXWixXQUFPLFNBWEs7QUFZWixXQUFPLFNBWks7QUFhWixXQUFNLGNBYk07QUFjWixXQUFPLGNBZEs7QUFlWixXQUFPLE1BZks7QUFnQlos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LElBQVIsQ0FBTCxHQUFxQnVCLElBQXJCO0FBQ0Q7O0FBRUQsUUFBSUYsTUFBTSxDQUFDRyxRQUFYLEVBQXFCO0FBQ25CdEMsTUFBQUEsUUFBUSxDQUFDbUMsTUFBTSxDQUFDRyxRQUFSLEVBQWtCMUQsS0FBbEIsRUFBeUJvRCxHQUFHLEdBQUcsR0FBTixHQUFZQyxDQUFyQyxDQUFSO0FBQ0Q7QUFDRjtBQUNGOztBQUVELFNBQVN2RSxjQUFULENBQXdCRixTQUF4QixFQUFtQ0MsT0FBbkMsRUFBNEM7QUFDMUMsOENBQVVELFNBQVYsdUNBQXlCQyxPQUF6QixFQUFtQ0QsU0FBUyxHQUFHLEdBQVosR0FBa0JDLE9BQXJEO0FBQ0QiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZW52IGplc3QgKi9cbmltcG9ydCBmcyBmcm9tICdmcyc7XG5pbXBvcnQgcGF0aCBmcm9tICdwYXRoJztcbmltcG9ydCBvc3BhdGggZnJvbSAnb3NwYXRoJztcbmltcG9ydCAqIGFzIGxleGljb25IZWxwZXJzIGZyb20gJy4uL2xleGljb25IZWxwZXJzJztcblxuY29uc3QgUkVTT1VSQ0VfUEFUSCA9IHBhdGguam9pbihvc3BhdGguaG9tZSgpLCAndHJhbnNsYXRpb25Db3JlJywgJ3Jlc291cmNlcycpO1xuY29uc3QgT1RfUEFUSCA9IHBhdGguam9pbihSRVNPVVJDRV9QQVRILCAnaGJvL2JpYmxlcy91aGIvdjEuNC4xJyk7XG5jb25zdCBvdXRwdXRGb2xkZXIgPSBwYXRoLmpvaW4oX19kaXJuYW1lLCAnZml4dHVyZXMvd29yZHMnKTtcblxuZXhwb3J0IGNvbnN0IEJJQkxFX0JPT0tTID0ge1xuICBvbGRUZXN0YW1lbnQ6IHtcbiAgICAnZ2VuJzogJ0dlbmVzaXMnLFxuICAgICdleG8nOiAnRXhvZHVzJyxcbiAgICAnbGV2JzogJ0xldml0aWN1cycsXG4gICAgJ251bSc6ICdOdW1iZXJzJyxcbiAgICAnZGV1JzogJ0RldXRlcm9ub215JyxcbiAgICAnam9zJzogJ0pvc2h1YScsXG4gICAgJ2pkZyc6ICdKdWRnZXMnLFxuICAgICdydXQnOiAnUnV0aCcsXG4gICAgJzFzYSc6ICcxIFNhbXVlbCcsXG4gICAgJzJzYSc6ICcyIFNhbXVlbCcsXG4gICAgJzFraSc6ICcxIEtpbmdzJyxcbiAgICAnMmtpJzogJzIgS2luZ3MnLFxuICAgICcxY2gnOicxIENocm9uaWNsZXMnLFxuICAgICcyY2gnOiAnMiBDaHJvbmljbGVzJyxcbiAgICAnZXpyJzogJ0V6cmEnLFxuICAgICduZWgnOiAnTmVoZW1pYWgnLFxuICAgICdlc3QnOiAnRXN0aGVyJyxcbiAgICAnam9iJzogJ0pvYicsXG4gICAgJ3BzYSc6ICdQc2FsbXMnLFxuICAgICdwcm8nOiAnUHJvdmVyYnMnLFxuICAgICdlY2MnOiAnRWNjbGVzaWFzdGVzJyxcbiAgICAnc25nJzogJ1Nvbmcgb2YgU29sb21vbicsXG4gICAgJ2lzYSc6ICdJc2FpYWgnLFxuICAgICdqZXInOiAnSmVyZW1pYWgnLFxuICAgICdsYW0nOiAnTGFtZW50YXRpb25zJyxcbiAgICAnZXprJzogJ0V6ZWtpZWwnLFxuICAgICdkYW4nOiAnRGFuaWVsJyxcbiAgICAnaG9zJzogJ0hvc2VhJyxcbiAgICAnam9sJzogJ0pvZWwnLFxuICAgICdhbW8nOiAnQW1vcycsXG4gICAgJ29iYSc6ICdPYmFkaWFoJyxcbiAgICAnam9uJzogJ0pvbmFoJyxcbiAgICAnbWljJzogJ01pY2FoJyxcbiAgICAnbmFtJzogJ05haHVtJyxcbiAgICAnaGFiJzogJ0hhYmFra3VrJyxcbiAgICAnemVwJzogJ1plcGhhbmlhaCcsXG4gICAgJ2hhZyc6ICdIYWdnYWknLFxuICAgICd6ZWMnOiAnWmVjaGFyaWFoJyxcbiAgICAnbWFsJzonTWFsYWNoaScsXG4gIH0sXG4gIG5ld1Rlc3RhbWVudDoge1xuICAgICdtYXQnOiAnTWF0dGhldycsXG4gICAgJ21yayc6ICdNYXJrJyxcbiAgICAnbHVrJzogJ0x1a2UnLFxuICAgICdqaG4nOiAnSm9obicsXG4gICAgJ2FjdCc6ICdBY3RzJyxcbiAgICAncm9tJzogJ1JvbWFucycsXG4gICAgJzFjbyc6ICcxIENvcmludGhpYW5zJyxcbiAgICAnMmNvJzogJzIgQ29yaW50aGlhbnMnLFxuICAgICdnYWwnOiAnR2FsYXRpYW5zJyxcbiAgICAnZXBoJzogJ0VwaGVzaWFucycsXG4gICAgJ3BocCc6ICdQaGlsaXBwaWFucycsXG4gICAgJ2NvbCc6ICdDb2xvc3NpYW5zJyxcbiAgICAnMXRoJzogJzEgVGhlc3NhbG9uaWFucycsXG4gICAgJzJ0aCc6ICcyIFRoZXNzYWxvbmlhbnMnLFxuICAgICcxdGknOiAnMSBUaW1vdGh5JyxcbiAgICAnMnRpJzogJzIgVGltb3RoeScsXG4gICAgJ3RpdCc6ICdUaXR1cycsXG4gICAgJ3BobSc6ICdQaGlsZW1vbicsXG4gICAgJ2hlYic6ICdIZWJyZXdzJyxcbiAgICAnamFzJzogJ0phbWVzJyxcbiAgICAnMXBlJzogJzEgUGV0ZXInLFxuICAgICcycGUnOiAnMiBQZXRlcicsXG4gICAgJzFqbic6ICcxIEpvaG4nLFxuICAgICcyam4nOiAnMiBKb2huJyxcbiAgICAnM2puJzogJzMgSm9obicsXG4gICAgJ2p1ZCc6ICdKdWRlJyxcbiAgICAncmV2JzogJ1JldmVsYXRpb24nLFxuICB9LFxufTtcblxuZGVzY3JpYmUoJ2xleGljb25IZWxwZXJzJywgKCkgPT4ge1xuICBkZXNjcmliZSgndGVzdCBzdG9uZ3MgbG9va3VwJywgKCkgPT4ge1xuICAgIGNvbnN0IHN0cm9uZ3NUZXN0cyA9IFtcbiAgICAgIFsnYjpINzIyNScsIHsgJ3VobCc6IHsgJzcyMjUnOiAndWhsLTcyMjUnIH0gfV0sXG4gICAgICBbJ0gxMjM6SDcyMjUnLCB7ICd1aGwnOiB7ICcxMjMnOiAndWhsLTEyMycsICc3MjI1JzogJ3VobC03MjI1JyB9IH1dLFxuICAgICAgWydjOmQ6SDA3NzYnLCB7ICd1aGwnOiB7ICc3NzYnOiAndWhsLTc3NicgfSB9XSxcbiAgICAgIFsnSDE5NjEnLCB7ICd1aGwnOiB7ICcxOTYxJzogJ3VobC0xOTYxJyB9IH1dLFxuICAgICAgWydINTkyMWEnLCB7ICd1aGwnOiB7ICc1OTIxJzogJ3VobC01OTIxJyB9IH1dLFxuICAgICAgWydHMzMyNjAnLCB7ICd1Z2wnOiB7ICczMzI2JzogJ3VnbC0zMzI2JyB9IH1dLFxuICAgICAgWydINzIyNTpiJywgeyAndWhsJzogeyAnNzIyNSc6ICd1aGwtNzIyNScgfSB9XSxcbiAgICAgIFsnJywge31dLFxuICAgICAgWydiJywge31dLFxuICAgICAgW251bGwsIHt9XSxcbiAgICBdO1xuXG4gICAgZm9yIChsZXQgdGVzdCBvZiBzdHJvbmdzVGVzdHMpIHtcbiAgICAgIGNvbnN0IHN0cm9uZ3MgPSB0ZXN0WzBdO1xuICAgICAgY29uc3QgZXhwZWN0ZWRSZXN1bHRzID0gdGVzdFsxXTtcblxuXG4gICAgICBpdCgnc2hvdWxkIHN1Y2NlZWQgd2l0aCBcIicgKyBzdHJvbmdzICsgJ1wiJywgKCkgPT4ge1xuICAgICAgICAvL3doZW5cbiAgICAgICAgY29uc3QgcmVzdWx0cyA9IGxleGljb25IZWxwZXJzLmxvb2t1cFN0cm9uZ3NOdW1iZXJzKHN0cm9uZ3MsIChsZXhpY29uSWQsIGVudHJ5SWQpID0+IChnZXRMZXhpY29uRGF0YShsZXhpY29uSWQsIGVudHJ5SWQpKSk7XG5cbiAgICAgICAgLy8gdGhlblxuICAgICAgICBleHBlY3QocmVzdWx0cykudG9FcXVhbChleHBlY3RlZFJlc3VsdHMpO1xuICAgICAgfSk7XG4gICAgfVxuICB9KTtcblxuICBkZXNjcmliZSgndGVzdCBzdG9uZ3MgcGFyc2luZycsICgpID0+IHtcbiAgICBjb25zdCBzdHJvbmdzVGVzdHMgPSBbXG4gICAgICBbJ2I6SDcyMjUnLCBbMCwgNzIyNV0sIFsndWhsJywgJ3VobCddLCAyXSxcbiAgICAgIFsnSDEyMzpINzIyNScsIFsxMjMsIDcyMjVdLCBbJ3VobCcsICd1aGwnXSwgMl0sXG4gICAgICBbJ2M6ZDpIMDc3NicsIFswLCAwLCA3NzZdLCBbJ3VobCcsICd1aGwnLCAndWhsJ10sIDNdLFxuICAgICAgWydIMTk2MScsIFsxOTYxXSwgWyd1aGwnXSwgMV0sXG4gICAgICBbJ0g1OTIxYScsIFs1OTIxXSwgWyd1aGwnXSwgMV0sXG4gICAgICBbJ0czMzI2MCcsIFszMzI2XSwgWyd1Z2wnXSwgMV0sXG4gICAgICBbJycsIFtdLCBbXSwgMF0sXG4gICAgICBbJ2InLCBbMF0sIFsndWhsJ10sIDFdLFxuICAgICAgW251bGwsIFtdLCBbXSwgMF0sXG4gICAgXTtcblxuICAgIGZvciAobGV0IHRlc3Qgb2Ygc3Ryb25nc1Rlc3RzKSB7XG4gICAgICBjb25zdCBzdHJvbmdzID0gdGVzdFswXTtcbiAgICAgIGNvbnN0IGV4cGVjdGVkRW50cnlJZHMgPSB0ZXN0WzFdO1xuICAgICAgY29uc3QgZXhwZWN0ZWRMZXhpY29uSWQgPSB0ZXN0WzJdO1xuICAgICAgY29uc3QgZXhwZWN0ZWRQYXJ0Q291bnQgPSB0ZXN0WzNdO1xuXG5cbiAgICAgIGl0KCdzaG91bGQgc3VjY2VlZCB3aXRoIFwiJyArIHN0cm9uZ3MgKyAnXCInLCAoKSA9PiB7XG4gICAgICAgIC8vd2hlblxuICAgICAgICBjb25zdCByZXN1bHRzID0gZXh0cmFjdFN0cm9uZ3Moc3Ryb25ncyk7XG5cbiAgICAgICAgLy8gdGhlblxuICAgICAgICBleHBlY3QocmVzdWx0cy5lbnRyeUlkcykudG9FcXVhbChleHBlY3RlZEVudHJ5SWRzKTtcbiAgICAgICAgZXhwZWN0KHJlc3VsdHMubGV4aWNvbklkcykudG9FcXVhbChleHBlY3RlZExleGljb25JZCk7XG4gICAgICAgIGV4cGVjdChyZXN1bHRzLnBhcnRzLmxlbmd0aCkudG9FcXVhbChleHBlY3RlZFBhcnRDb3VudCk7XG4gICAgICB9KTtcbiAgICB9XG4gIH0pO1xuICBkZXNjcmliZSgndGVzdCB3b3JkIHBhcnNpbmcnLCAoKSA9PiB7XG4gICAgY29uc3Qgd29yZFRlc3RzID0gW1xuICAgICAgWyfXkda81rDigIvXqNa115DXqdeB1rTWlteZ16onLCBbJ9eR1rzWsCcsICfXqNa115DXqdeB1rTWlteZ16onXV0sXG4gICAgICBbJ9eR1rzWuNeo1rjWo9eQJywgWyfXkda81rjXqNa41qPXkCddXSxcbiAgICAgIFsn15TWt+KAi9ep14HWvNa4157Wt9aW15nWtNedJywgWyfXlNa3JywgJ9ep14HWvNa4157Wt9aW15nWtNedJ11dLFxuICAgICAgWyfXldaw4oCL15DWtdal16onLCBbJ9eV1rAnLCAn15DWtdal16onXV0sXG4gICAgICBbJ9eV1rDigIvXlNa44oCL15DWuNaX16jWttelJywgWyfXldawJywgJ9eU1rgnLCAn15DWuNaX16jWttelJ11dLFxuICAgICAgWyfXl9ay15vWuNee1rbWkdeZ4oCL15TWuCcsIFsn15fWsteb1rjXnta21pHXmScsICfXlNa4J11dLCAvLyBnZW4gNDE6OFxuICAgICAgWyfhvLjOrM66z4nOss6/z4InLCBbJ+G8uM6szrrPic6yzr/PgiddXSxcbiAgICBdO1xuXG4gICAgZm9yIChsZXQgdGVzdCBvZiB3b3JkVGVzdHMpIHtcbiAgICAgIGNvbnN0IHdvcmQgPSB0ZXN0WzBdO1xuICAgICAgY29uc3QgZXhwZWN0ZWRQYXJ0cyA9IHRlc3RbMV07XG5cbiAgICAgIGl0KCdzaG91bGQgc3VjY2VlZCB3aXRoIFwiJyArIHdvcmQgKyAnXCInLCAoKSA9PiB7XG4gICAgICAgIC8vd2hlblxuICAgICAgICBjb25zdCByZXN1bHRzID0gbGV4aWNvbkhlbHBlcnMuZ2V0V29yZFBhcnRzKHdvcmQpO1xuXG4gICAgICAgIC8vIHRoZW5cbiAgICAgICAgZXhwZWN0KHJlc3VsdHMpLnRvRXF1YWwoZXhwZWN0ZWRQYXJ0cyk7XG4gICAgICB9KTtcbiAgICB9XG4gIH0pO1xuXG4gIGRlc2NyaWJlKCdVSEIgdGVzdHMnLCAoKSA9PiB7XG4gICAgZGVzY3JpYmUuc2tpcCgnY29uc2lzdGVuY3kgY2hlY2sgT1QnLCAoKSA9PiB7XG4gICAgICBmb3IgKGxldCBib29rSWQgb2YgT2JqZWN0LmtleXMoQklCTEVfQk9PS1Mub2xkVGVzdGFtZW50KSkge1xuICAgICAgICBjb25zdCBCb29rTmFtZSA9IEJJQkxFX0JPT0tTLm9sZFRlc3RhbWVudFtib29rSWRdO1xuXG4gICAgICAgIGl0KCdjaGVjayAnICsgQm9va05hbWUsICgpID0+IHsgLy8gcmVhZHMgYWxsIHRoZSB3b3JkcyBmcm9tIGJvb2sgYW5kIHNhdmVzIHBhcnNlZCB3b3JkcyB0byBmaWxlXG4gICAgICAgICAgY29uc3Qgd29yZHMgPSB7fTtcbiAgICAgICAgICBjb25zdCBib29rUGF0aCA9IHBhdGguam9pbihPVF9QQVRILCBib29rSWQpO1xuICAgICAgICAgIGNvbnN0IGZpbGVzID0gZnMucmVhZGRpclN5bmMoYm9va1BhdGgpO1xuXG4gICAgICAgICAgZm9yIChsZXQgZmlsZSBvZiBmaWxlcykge1xuICAgICAgICAgICAgY29uc3QgY2hhcHRlciA9IEpTT04ucGFyc2UoZnMucmVhZEZpbGVTeW5jKHBhdGguam9pbihib29rUGF0aCwgZmlsZSksICd1dGY4JykpO1xuICAgICAgICAgICAgY29uc3QgY1JlZiA9IGJvb2tJZCArICctJyArIGZpbGUuc3BsaXQoJy4nKVswXSArICc6JztcbiAgICAgICAgICAgIGNvbnN0IHZlcnNlcyA9IE9iamVjdC5rZXlzKGNoYXB0ZXIpO1xuXG4gICAgICAgICAgICBmb3IgKGxldCB2ZXJzZU51bSBvZiB2ZXJzZXMpIHtcbiAgICAgICAgICAgICAgY29uc3QgdmVyc2UgPSBjaGFwdGVyW3ZlcnNlTnVtXTtcbiAgICAgICAgICAgICAgY29uc3Qgb2JqZWN0cyA9IHZlcnNlLnZlcnNlT2JqZWN0cztcbiAgICAgICAgICAgICAgY29uc3QgdlJlZiA9IGNSZWYgKyB2ZXJzZU51bTtcbiAgICAgICAgICAgICAgZ2V0V29yZHMob2JqZWN0cywgd29yZHMsIHZSZWYpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGxldCBvdXRwdXQgPSAnJztcbiAgICAgICAgICBsZXQgYW5vbWFsbGllcyA9ICcnO1xuICAgICAgICAgIGxldCBtaXNzaW5nTW9ycGhzID0gMDtcbiAgICAgICAgICBsZXQgaW52YWxpZFN0cm9uZ3NDb3VudCA9IDA7XG4gICAgICAgICAgbGV0IGludmFsaWRNb3JwaENvdW50ID0gMDtcbiAgICAgICAgICBjb25zdCB3b3JkRW50cmllcyA9IE9iamVjdC5rZXlzKHdvcmRzKS5zb3J0KCk7XG5cbiAgICAgICAgICBmb3IgKGxldCB3b3JkSW5kZXggb2Ygd29yZEVudHJpZXMpIHtcbiAgICAgICAgICAgIGNvbnN0IHdvcmQgPSB3b3Jkc1t3b3JkSW5kZXhdO1xuICAgICAgICAgICAgY29uc3QgbW9ycGggPSB3b3JkLndvcmQubW9ycGg7XG4gICAgICAgICAgICBjb25zdCBzdHJvbmdzID0gd29yZC53b3JkLnN0cm9uZztcbiAgICAgICAgICAgIGNvbnN0IG1vcnBoS2V5cyA9IGxleGljb25IZWxwZXJzLmdldE1vcnBoS2V5cyhtb3JwaCk7XG4gICAgICAgICAgICBjb25zdCB3b3JkUGFydHMgPSBsZXhpY29uSGVscGVycy5nZXRXb3JkUGFydHMod29yZC53b3JkLnRleHQpO1xuICAgICAgICAgICAgd29yZC53b3JkUGFydHMgPSB3b3JkUGFydHM7XG5cbiAgICAgICAgICAgIGlmICghc3Ryb25ncykge1xuICAgICAgICAgICAgICBjb25zdCB3YXJuaW5nID0gJ01pc3Npbmcgc3Ryb25nczogJyArIEpTT04uc3RyaW5naWZ5KHdvcmQpO1xuICAgICAgICAgICAgICBhbm9tYWxsaWVzICs9IHdhcm5pbmcgKyAnXFxuJztcbiAgICAgICAgICAgICAgLy8gY29uc29sZS53YXJuKHdhcm5pbmcpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgY29uc3QgdmFsaWQgPSBsZXhpY29uSGVscGVycy5jb250YWluc1ZhbGlkU3Ryb25nc051bWJlcihzdHJvbmdzKTtcblxuICAgICAgICAgICAgICBpZiAoIXZhbGlkKSB7XG4gICAgICAgICAgICAgICAgY29uc3Qgd2FybmluZyA9ICdNaXNzaW5nIHN0cm9uZ3MgTnVtYmVyOiAnICsgSlNPTi5zdHJpbmdpZnkod29yZCk7XG4gICAgICAgICAgICAgICAgYW5vbWFsbGllcyArPSB3YXJuaW5nICsgJ1xcbic7XG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS53YXJuKHdhcm5pbmcpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICghbW9ycGhLZXlzWzBdLmxlbmd0aCkge1xuICAgICAgICAgICAgICBpZiAoKyttaXNzaW5nTW9ycGhzIDwgMCkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybignTWlzc2luZyBtb3JwaCBlbnRyeTogJyArIEpTT04uc3RyaW5naWZ5KHdvcmQpKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgY29uc3Qgc3Ryb25nc1BhcnRzID0gbGV4aWNvbkhlbHBlcnMuZ2V0U3Ryb25nc1BhcnRzKHN0cm9uZ3MpO1xuXG4gICAgICAgICAgICAgIGlmIChzdHJvbmdzUGFydHMubGVuZ3RoICE9PSBtb3JwaEtleXMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgbGV0IG1vcnBoTGVuID0gbW9ycGhLZXlzLmxlbmd0aDtcblxuICAgICAgICAgICAgICAgIGlmICgoc3Ryb25nc1BhcnRzLmxlbmd0aCArIDEgPT09IG1vcnBoTGVuKSAmJiAobW9ycGhLZXlzLmxlbmd0aCAmJiBtb3JwaEtleXNbbW9ycGhLZXlzLmxlbmd0aCAtIDFdWzBdID09PSAnc3VmZml4JykpIHsgLy8gYWRkIGV4Y2VwdGlvbiBmb3Igc3VmZml4XG4gICAgICAgICAgICAgICAgICBtb3JwaExlbi0tO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChzdHJvbmdzUGFydHMubGVuZ3RoICE9PSBtb3JwaExlbikge1xuICAgICAgICAgICAgICAgICAgY29uc3Qgd2FybmluZyA9ICdudW1iZXIgb2Ygc3Ryb25ncyBwYXJ0cyAnICsgc3Ryb25nc1BhcnRzLmxlbmd0aCArICcgZGlmZmVyZW50IHRoYW4gbnVtYmVyIG9mIG1vcnBoIHBhcnRzICcgKyBtb3JwaEtleXMubGVuZ3RoICsgJyA6ICcgKyBKU09OLnN0cmluZ2lmeSh3b3JkKTtcbiAgICAgICAgICAgICAgICAgIGFub21hbGxpZXMgKz0gd2FybmluZyArICdcXG4nO1xuXG4gICAgICAgICAgICAgICAgICBpZiAoKytpbnZhbGlkU3Ryb25nc0NvdW50ID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLndhcm4od2FybmluZyk7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgaWYgKHdvcmRQYXJ0cy5sZW5ndGggIT09IG1vcnBoS2V5cy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBsZXQgbW9ycGhMZW4gPSBtb3JwaEtleXMubGVuZ3RoO1xuXG4gICAgICAgICAgICAgICAgaWYgKCh3b3JkUGFydHMubGVuZ3RoICsgMSA9PT0gbW9ycGhMZW4pICYmIChtb3JwaEtleXMubGVuZ3RoICYmIG1vcnBoS2V5c1ttb3JwaEtleXMubGVuZ3RoIC0gMV1bMF0gPT09ICdzdWZmaXgnKSkgeyAvLyBhZGQgZXhjZXB0aW9uIGZvciBzdWZmaXhcbiAgICAgICAgICAgICAgICAgIG1vcnBoTGVuLS07XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKHdvcmRQYXJ0cy5sZW5ndGggIT09IG1vcnBoTGVuKSB7XG4gICAgICAgICAgICAgICAgICBjb25zdCB3YXJuaW5nID0gJ251bWJlciBvZiB3b3JkIHBhcnRzICcgKyB3b3JkUGFydHMubGVuZ3RoICsgJyBkaWZmZXJlbnQgdGhhbiBudW1iZXIgb2YgbW9ycGggcGFydHMgJyArIG1vcnBoS2V5cy5sZW5ndGggKyAnIDogJyArIEpTT04uc3RyaW5naWZ5KHdvcmQpO1xuICAgICAgICAgICAgICAgICAgYW5vbWFsbGllcyArPSB3YXJuaW5nICsgJ1xcbic7XG5cbiAgICAgICAgICAgICAgICAgIGlmICgrK2ludmFsaWRNb3JwaENvdW50ID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLndhcm4od2FybmluZyk7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB3b3JkLm1vcnBoS2V5cyA9IG1vcnBoS2V5cztcblxuICAgICAgICAgICAgaWYgKG91dHB1dCkge1xuICAgICAgICAgICAgICBvdXRwdXQgKz0gJyxcXG4nO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgb3V0cHV0ICs9ICcgIFwiJyArIHdvcmRJbmRleCArICdcIjogJyArIEpTT04uc3RyaW5naWZ5KHdvcmQpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBjb25zb2xlLmxvZygnLS0tLS0tLS0tLS1cXG5pbiAnICsgQm9va05hbWUgKyAnOlxcbm51bWJlciBvZiB1bmlxdWUgd29yZHM6ICcgKyB3b3JkRW50cmllcy5sZW5ndGgpO1xuXG4gICAgICAgICAgaWYgKG1pc3NpbmdNb3JwaHMpIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybignbWlzc2luZ01vcnBoczogJyArIG1pc3NpbmdNb3JwaHMpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChpbnZhbGlkU3Ryb25nc0NvdW50KSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oJ2luY29uc2lzdGFudCBTdHJvbmdzIENvdW50OiAnICsgaW52YWxpZFN0cm9uZ3NDb3VudCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKGludmFsaWRNb3JwaENvdW50KSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oJ2luY29uc2lzdGFudCBNb3JwaCBDb3VudDogJyArIGludmFsaWRNb3JwaENvdW50KTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoYW5vbWFsbGllcykge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKCdhbm9tYWxsaWVzOlxcbicgKyBhbm9tYWxsaWVzKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgb3V0cHV0ID0gJ3tcXG4nICsgb3V0cHV0ICsgJ1xcbn1cXG4nO1xuICAgICAgICAgIGNvbnN0IG91dEZpbGUgPSBwYXRoLmpvaW4ob3V0cHV0Rm9sZGVyLCBib29rSWQgKyAnLXdvcmQtY2hlY2tzLmpzb24nKTtcbiAgICAgICAgICBmcy53cml0ZUZpbGVTeW5jKG91dEZpbGUsIG91dHB1dCwgeyBlbmNvZGluZzogJ3V0ZjgnIH0pO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSk7XG59KTtcblxuLy9cbi8vIGhlbHBlcnNcbi8vXG5cbmZ1bmN0aW9uIGV4dHJhY3RTdHJvbmdzKHN0cm9uZ3MpIHtcbiAgY29uc3QgcGFydHMgPSBsZXhpY29uSGVscGVycy5nZXRTdHJvbmdzUGFydHMoc3Ryb25ncyk7XG4gIGNvbnN0IGxleGljb25JZHMgPSBbXTtcbiAgY29uc3QgZW50cnlJZHMgPSBbXTtcblxuICBmb3IgKGxldCBmb3VuZCBvZiBwYXJ0cykge1xuICAgIGNvbnN0IGxleGljb25JZCA9IGxleGljb25IZWxwZXJzLmxleGljb25JZEZyb21TdHJvbmdzKGZvdW5kKTtcbiAgICBsZXhpY29uSWRzLnB1c2gobGV4aWNvbklkKTtcbiAgICBjb25zdCBlbnRyeUlkID0gbGV4aWNvbkhlbHBlcnMubGV4aWNvbkVudHJ5SWRGcm9tU3Ryb25ncyhmb3VuZCk7XG4gICAgZW50cnlJZHMucHVzaChlbnRyeUlkKTtcbiAgfVxuICByZXR1cm4ge1xuICAgIGVudHJ5SWRzLCBsZXhpY29uSWRzLCBwYXJ0cyxcbiAgfTtcbn1cblxuZnVuY3Rpb24gZ2V0V29yZHMob2JqZWN0cywgd29yZHMsIHJlZikge1xuICBmb3IgKGxldCBpID0gMCwgbGVuID0gb2JqZWN0cy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgIGNvbnN0IG9iamVjdCA9IG9iamVjdHNbaV07XG5cbiAgICBpZiAoKG9iamVjdC50eXBlID09PSAnd29yZCcpICYmIG9iamVjdC50ZXh0ICYmICF3b3Jkc1tvYmplY3QudGV4dF0pIHtcbiAgICAgIGNvbnN0IGRhdGEgPSB7XG4gICAgICAgIHdvcmQ6IG9iamVjdCxcbiAgICAgICAgcmVmOiByZWYgKyAnLicgKyBpLFxuICAgICAgfTtcbiAgICAgIHdvcmRzW29iamVjdC50ZXh0XSA9IGRhdGE7XG4gICAgfVxuXG4gICAgaWYgKG9iamVjdC5jaGlsZHJlbikge1xuICAgICAgZ2V0V29yZHMob2JqZWN0LmNoaWxkcmVuLCB3b3JkcywgcmVmICsgJy4nICsgaSk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGdldExleGljb25EYXRhKGxleGljb25JZCwgZW50cnlJZCkge1xuICByZXR1cm4geyBbbGV4aWNvbklkXTogeyBbZW50cnlJZF06IGxleGljb25JZCArICctJyArIGVudHJ5SWQgfSB9O1xufVxuIl19