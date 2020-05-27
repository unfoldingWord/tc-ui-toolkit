"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.readJSON = exports.readUSFM = void 0;

var _fs = _interopRequireDefault(require("fs"));

var _path = _interopRequireDefault(require("path"));

var verseHelpers = _interopRequireWildcard(require("../verseHelpers"));

describe('verseHelpers.verseArray', function () {
  it('should succeed with heb-12-27.el-x-koine', function () {
    generateTest('heb-12-27.el-x-koine', 'ugnt');
  });
  it('should succeed with heb-12-27.el-x-koine and tisch should not be clickable', function () {
    generateTest('heb-12-27.el-x-koine', 'tisch');
  });
  it('should succeed with mat-4-6', function () {
    generateTest('mat-4-6', 'ult');
  });
  it('should succeed with luke-22-30.ult', function () {
    var contextId = {
      'reference': {
        'bookId': 'luk',
        'chapter': 22,
        'verse': 30
      },
      'tool': 'translationWords',
      'groupId': '12tribesofisrael',
      'quote': [{
        'word': 'δώδεκα',
        'occurrence': 1
      }, {
        'word': 'φυλὰς',
        'occurrence': 1
      }, {
        'word': 'κρίνοντες',
        'occurrence': 1
      }, {
        'word': 'τοῦ',
        'occurrence': 1
      }, {
        'word': 'Ἰσραήλ',
        'occurrence': 1
      }],
      'strong': ['G14270', 'G54430', 'G29190', 'G35880', 'G24740'],
      'occurrence': 1
    };
    generateTest('luke-22-30.ult', 'ult', contextId);
  });
  it('should succeed with jhn-6-21-en-t4t', function () {
    generateTest('jhn-6-21-en-t4t', 't4t');
  });
}); //
// helpers
//

/**
 * Reads a usfm file from the resources dir
 * @param {string} filePath relative path to usfm file
 * @return {string} sdv
 */

var readUSFM = function readUSFM(filePath) {
  var fullPath = _path["default"].join('./src/ScripturePane/helpers/__test__/fixtures', filePath);

  console.log(_path["default"].resolve(fullPath));
  return _fs["default"].readFileSync(fullPath, 'UTF-8').toString();
};
/**
 * Reads a json file from the resources dir
 * @param {string} filePath relative path to json file
 * @return {object} json object
 */


exports.readUSFM = readUSFM;

var readJSON = function readJSON(filePath) {
  return JSON.parse(readUSFM(filePath));
};
/**
 * Generator for testing json to usfm migration
 * @param {string} name - the name of the test files to use. e.g. `valid` will test `valid.usfm` to `valid.json`
 * @param {string} bibleId
 * @param {Object} contextId
 */


exports.readJSON = readJSON;

var generateTest = function generateTest(name, bibleId) {
  var contextId = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
  var input = readJSON("".concat(name, ".json"));
  contextId = contextId || name;
  expect(input).toBeTruthy(); // const expectedBaseName = expectedName ? expectedName : name;
  // const expected = readUSFM(`${expectedBaseName}.usfm`);
  // expect(expected).toBeTruthy();

  var output = verseHelpers.verseArray(input, bibleId, contextId);
  expect(output).toMatchSnapshot();
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9TY3JpcHR1cmVQYW5lL2hlbHBlcnMvX190ZXN0X18vdmVyc2VIZWxwZXJzLnRlc3QuanMiXSwibmFtZXMiOlsiZGVzY3JpYmUiLCJpdCIsImdlbmVyYXRlVGVzdCIsImNvbnRleHRJZCIsInJlYWRVU0ZNIiwiZmlsZVBhdGgiLCJmdWxsUGF0aCIsInBhdGgiLCJqb2luIiwiY29uc29sZSIsImxvZyIsInJlc29sdmUiLCJmcyIsInJlYWRGaWxlU3luYyIsInRvU3RyaW5nIiwicmVhZEpTT04iLCJKU09OIiwicGFyc2UiLCJuYW1lIiwiYmlibGVJZCIsImlucHV0IiwiZXhwZWN0IiwidG9CZVRydXRoeSIsIm91dHB1dCIsInZlcnNlSGVscGVycyIsInZlcnNlQXJyYXkiLCJ0b01hdGNoU25hcHNob3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBRUFBLFFBQVEsQ0FBQyx5QkFBRCxFQUE0QixZQUFNO0FBQ3hDQyxFQUFBQSxFQUFFLENBQUMsMENBQUQsRUFBNkMsWUFBTTtBQUNuREMsSUFBQUEsWUFBWSxDQUFDLHNCQUFELEVBQXlCLE1BQXpCLENBQVo7QUFDRCxHQUZDLENBQUY7QUFHQUQsRUFBQUEsRUFBRSxDQUFDLDRFQUFELEVBQStFLFlBQU07QUFDckZDLElBQUFBLFlBQVksQ0FBQyxzQkFBRCxFQUF5QixPQUF6QixDQUFaO0FBQ0QsR0FGQyxDQUFGO0FBR0FELEVBQUFBLEVBQUUsQ0FBQyw2QkFBRCxFQUFnQyxZQUFNO0FBQ3RDQyxJQUFBQSxZQUFZLENBQUMsU0FBRCxFQUFZLEtBQVosQ0FBWjtBQUNELEdBRkMsQ0FBRjtBQUdBRCxFQUFBQSxFQUFFLENBQUMsb0NBQUQsRUFBdUMsWUFBTTtBQUM3QyxRQUFNRSxTQUFTLEdBQUc7QUFDaEIsbUJBQWE7QUFDWCxrQkFBVSxLQURDO0FBRVgsbUJBQVcsRUFGQTtBQUdYLGlCQUFTO0FBSEUsT0FERztBQU1oQixjQUFRLGtCQU5RO0FBT2hCLGlCQUFXLGtCQVBLO0FBUWhCLGVBQVMsQ0FDUDtBQUNFLGdCQUFRLFFBRFY7QUFFRSxzQkFBYztBQUZoQixPQURPLEVBS1A7QUFDRSxnQkFBUSxPQURWO0FBRUUsc0JBQWM7QUFGaEIsT0FMTyxFQVNQO0FBQ0UsZ0JBQVEsV0FEVjtBQUVFLHNCQUFjO0FBRmhCLE9BVE8sRUFhUDtBQUNFLGdCQUFRLEtBRFY7QUFFRSxzQkFBYztBQUZoQixPQWJPLEVBaUJQO0FBQ0UsZ0JBQVEsUUFEVjtBQUVFLHNCQUFjO0FBRmhCLE9BakJPLENBUk87QUE4QmhCLGdCQUFVLENBQ1IsUUFEUSxFQUVSLFFBRlEsRUFHUixRQUhRLEVBSVIsUUFKUSxFQUtSLFFBTFEsQ0E5Qk07QUFxQ2hCLG9CQUFjO0FBckNFLEtBQWxCO0FBdUNBRCxJQUFBQSxZQUFZLENBQUMsZ0JBQUQsRUFBbUIsS0FBbkIsRUFBMEJDLFNBQTFCLENBQVo7QUFDRCxHQXpDQyxDQUFGO0FBMENBRixFQUFBQSxFQUFFLENBQUMscUNBQUQsRUFBd0MsWUFBTTtBQUM5Q0MsSUFBQUEsWUFBWSxDQUFDLGlCQUFELEVBQW9CLEtBQXBCLENBQVo7QUFDRCxHQUZDLENBQUY7QUFHRCxDQXZETyxDQUFSLEMsQ0F5REE7QUFDQTtBQUNBOztBQUVBOzs7Ozs7QUFLTyxJQUFNRSxRQUFRLEdBQUcsU0FBWEEsUUFBVyxDQUFBQyxRQUFRLEVBQUk7QUFDbEMsTUFBTUMsUUFBUSxHQUFHQyxpQkFBS0MsSUFBTCxDQUFVLCtDQUFWLEVBQTJESCxRQUEzRCxDQUFqQjs7QUFDQUksRUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlILGlCQUFLSSxPQUFMLENBQWFMLFFBQWIsQ0FBWjtBQUNBLFNBQU9NLGVBQUdDLFlBQUgsQ0FBZ0JQLFFBQWhCLEVBQTBCLE9BQTFCLEVBQW1DUSxRQUFuQyxFQUFQO0FBQ0QsQ0FKTTtBQU1QOzs7Ozs7Ozs7QUFLTyxJQUFNQyxRQUFRLEdBQUcsU0FBWEEsUUFBVyxDQUFBVixRQUFRO0FBQUEsU0FBSVcsSUFBSSxDQUFDQyxLQUFMLENBQVdiLFFBQVEsQ0FBQ0MsUUFBRCxDQUFuQixDQUFKO0FBQUEsQ0FBekI7QUFFUDs7Ozs7Ozs7OztBQU1BLElBQU1ILFlBQVksR0FBRyxTQUFmQSxZQUFlLENBQUNnQixJQUFELEVBQU9DLE9BQVAsRUFBaUM7QUFBQSxNQUFqQmhCLFNBQWlCLHVFQUFQLEVBQU87QUFDcEQsTUFBTWlCLEtBQUssR0FBR0wsUUFBUSxXQUFJRyxJQUFKLFdBQXRCO0FBQ0FmLEVBQUFBLFNBQVMsR0FBR0EsU0FBUyxJQUFJZSxJQUF6QjtBQUNBRyxFQUFBQSxNQUFNLENBQUNELEtBQUQsQ0FBTixDQUFjRSxVQUFkLEdBSG9ELENBSXBEO0FBQ0E7QUFDQTs7QUFDQSxNQUFNQyxNQUFNLEdBQUdDLFlBQVksQ0FBQ0MsVUFBYixDQUF3QkwsS0FBeEIsRUFBK0JELE9BQS9CLEVBQXdDaEIsU0FBeEMsQ0FBZjtBQUNBa0IsRUFBQUEsTUFBTSxDQUFDRSxNQUFELENBQU4sQ0FBZUcsZUFBZjtBQUNELENBVEQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZnMgZnJvbSAnZnMnO1xuaW1wb3J0IHBhdGggZnJvbSAncGF0aCc7XG5pbXBvcnQgKiBhcyB2ZXJzZUhlbHBlcnMgZnJvbSAnLi4vdmVyc2VIZWxwZXJzJztcblxuZGVzY3JpYmUoJ3ZlcnNlSGVscGVycy52ZXJzZUFycmF5JywgKCkgPT4ge1xuICBpdCgnc2hvdWxkIHN1Y2NlZWQgd2l0aCBoZWItMTItMjcuZWwteC1rb2luZScsICgpID0+IHtcbiAgICBnZW5lcmF0ZVRlc3QoJ2hlYi0xMi0yNy5lbC14LWtvaW5lJywgJ3VnbnQnKTtcbiAgfSk7XG4gIGl0KCdzaG91bGQgc3VjY2VlZCB3aXRoIGhlYi0xMi0yNy5lbC14LWtvaW5lIGFuZCB0aXNjaCBzaG91bGQgbm90IGJlIGNsaWNrYWJsZScsICgpID0+IHtcbiAgICBnZW5lcmF0ZVRlc3QoJ2hlYi0xMi0yNy5lbC14LWtvaW5lJywgJ3Rpc2NoJyk7XG4gIH0pO1xuICBpdCgnc2hvdWxkIHN1Y2NlZWQgd2l0aCBtYXQtNC02JywgKCkgPT4ge1xuICAgIGdlbmVyYXRlVGVzdCgnbWF0LTQtNicsICd1bHQnKTtcbiAgfSk7XG4gIGl0KCdzaG91bGQgc3VjY2VlZCB3aXRoIGx1a2UtMjItMzAudWx0JywgKCkgPT4ge1xuICAgIGNvbnN0IGNvbnRleHRJZCA9IHtcbiAgICAgICdyZWZlcmVuY2UnOiB7XG4gICAgICAgICdib29rSWQnOiAnbHVrJyxcbiAgICAgICAgJ2NoYXB0ZXInOiAyMixcbiAgICAgICAgJ3ZlcnNlJzogMzAsXG4gICAgICB9LFxuICAgICAgJ3Rvb2wnOiAndHJhbnNsYXRpb25Xb3JkcycsXG4gICAgICAnZ3JvdXBJZCc6ICcxMnRyaWJlc29maXNyYWVsJyxcbiAgICAgICdxdW90ZSc6IFtcbiAgICAgICAge1xuICAgICAgICAgICd3b3JkJzogJ860z47OtM61zrrOsScsXG4gICAgICAgICAgJ29jY3VycmVuY2UnOiAxLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgJ3dvcmQnOiAnz4bPhc674b2wz4InLFxuICAgICAgICAgICdvY2N1cnJlbmNlJzogMSxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICd3b3JkJzogJ866z4HOr869zr/Ovc+EzrXPgicsXG4gICAgICAgICAgJ29jY3VycmVuY2UnOiAxLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgJ3dvcmQnOiAnz4TOv+G/picsXG4gICAgICAgICAgJ29jY3VycmVuY2UnOiAxLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgJ3dvcmQnOiAn4by4z4PPgc6xzq7OuycsXG4gICAgICAgICAgJ29jY3VycmVuY2UnOiAxLFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICAgICdzdHJvbmcnOiBbXG4gICAgICAgICdHMTQyNzAnLFxuICAgICAgICAnRzU0NDMwJyxcbiAgICAgICAgJ0cyOTE5MCcsXG4gICAgICAgICdHMzU4ODAnLFxuICAgICAgICAnRzI0NzQwJyxcbiAgICAgIF0sXG4gICAgICAnb2NjdXJyZW5jZSc6IDEsXG4gICAgfTtcbiAgICBnZW5lcmF0ZVRlc3QoJ2x1a2UtMjItMzAudWx0JywgJ3VsdCcsIGNvbnRleHRJZCk7XG4gIH0pO1xuICBpdCgnc2hvdWxkIHN1Y2NlZWQgd2l0aCBqaG4tNi0yMS1lbi10NHQnLCAoKSA9PiB7XG4gICAgZ2VuZXJhdGVUZXN0KCdqaG4tNi0yMS1lbi10NHQnLCAndDR0Jyk7XG4gIH0pO1xufSk7XG5cbi8vXG4vLyBoZWxwZXJzXG4vL1xuXG4vKipcbiAqIFJlYWRzIGEgdXNmbSBmaWxlIGZyb20gdGhlIHJlc291cmNlcyBkaXJcbiAqIEBwYXJhbSB7c3RyaW5nfSBmaWxlUGF0aCByZWxhdGl2ZSBwYXRoIHRvIHVzZm0gZmlsZVxuICogQHJldHVybiB7c3RyaW5nfSBzZHZcbiAqL1xuZXhwb3J0IGNvbnN0IHJlYWRVU0ZNID0gZmlsZVBhdGggPT4ge1xuICBjb25zdCBmdWxsUGF0aCA9IHBhdGguam9pbignLi9zcmMvU2NyaXB0dXJlUGFuZS9oZWxwZXJzL19fdGVzdF9fL2ZpeHR1cmVzJywgZmlsZVBhdGgpO1xuICBjb25zb2xlLmxvZyhwYXRoLnJlc29sdmUoZnVsbFBhdGgpKTtcbiAgcmV0dXJuIGZzLnJlYWRGaWxlU3luYyhmdWxsUGF0aCwgJ1VURi04JykudG9TdHJpbmcoKTtcbn07XG5cbi8qKlxuICogUmVhZHMgYSBqc29uIGZpbGUgZnJvbSB0aGUgcmVzb3VyY2VzIGRpclxuICogQHBhcmFtIHtzdHJpbmd9IGZpbGVQYXRoIHJlbGF0aXZlIHBhdGggdG8ganNvbiBmaWxlXG4gKiBAcmV0dXJuIHtvYmplY3R9IGpzb24gb2JqZWN0XG4gKi9cbmV4cG9ydCBjb25zdCByZWFkSlNPTiA9IGZpbGVQYXRoID0+IEpTT04ucGFyc2UocmVhZFVTRk0oZmlsZVBhdGgpKTtcblxuLyoqXG4gKiBHZW5lcmF0b3IgZm9yIHRlc3RpbmcganNvbiB0byB1c2ZtIG1pZ3JhdGlvblxuICogQHBhcmFtIHtzdHJpbmd9IG5hbWUgLSB0aGUgbmFtZSBvZiB0aGUgdGVzdCBmaWxlcyB0byB1c2UuIGUuZy4gYHZhbGlkYCB3aWxsIHRlc3QgYHZhbGlkLnVzZm1gIHRvIGB2YWxpZC5qc29uYFxuICogQHBhcmFtIHtzdHJpbmd9IGJpYmxlSWRcbiAqIEBwYXJhbSB7T2JqZWN0fSBjb250ZXh0SWRcbiAqL1xuY29uc3QgZ2VuZXJhdGVUZXN0ID0gKG5hbWUsIGJpYmxlSWQsIGNvbnRleHRJZD0nJykgPT4ge1xuICBjb25zdCBpbnB1dCA9IHJlYWRKU09OKGAke25hbWV9Lmpzb25gKTtcbiAgY29udGV4dElkID0gY29udGV4dElkIHx8IG5hbWU7XG4gIGV4cGVjdChpbnB1dCkudG9CZVRydXRoeSgpO1xuICAvLyBjb25zdCBleHBlY3RlZEJhc2VOYW1lID0gZXhwZWN0ZWROYW1lID8gZXhwZWN0ZWROYW1lIDogbmFtZTtcbiAgLy8gY29uc3QgZXhwZWN0ZWQgPSByZWFkVVNGTShgJHtleHBlY3RlZEJhc2VOYW1lfS51c2ZtYCk7XG4gIC8vIGV4cGVjdChleHBlY3RlZCkudG9CZVRydXRoeSgpO1xuICBjb25zdCBvdXRwdXQgPSB2ZXJzZUhlbHBlcnMudmVyc2VBcnJheShpbnB1dCwgYmlibGVJZCwgY29udGV4dElkKTtcbiAgZXhwZWN0KG91dHB1dCkudG9NYXRjaFNuYXBzaG90KCk7XG59O1xuIl19