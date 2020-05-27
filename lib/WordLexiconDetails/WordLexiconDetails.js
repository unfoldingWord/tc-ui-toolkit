"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.generateWordLexiconDetails = generateWordLexiconDetails;
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var lexiconHelpers = _interopRequireWildcard(require("../ScripturePane/helpers/lexiconHelpers"));

// helpers

/**
 * lookup translations and convert to morph description
 * @param {string} morph - morph code to convert
 * @param {Function} translate
 * @return {Array} morph description for each part
 */
function getWordParts(morph, translate) {
  var morphKeysForParts = lexiconHelpers.getMorphKeys(morph);
  var morphStrs = [];
  morphKeysForParts.forEach(function (morphKeys) {
    var translatedMorphs = [];
    morphKeys.forEach(function (key) {
      if (key.startsWith('*')) {
        translatedMorphs.push(key.substr(1));
      } else {
        translatedMorphs.push(translate(key));
      }
    });
    morphStrs.push(translatedMorphs.join(', '));
  });
  return morphStrs;
}
/**
 * creates span with formatted html
 * @param html
 * @return {*}
 */


function getFormatted(html) {
  var props = {
    dangerouslySetInnerHTML: {
      __html: html
    }
  };
  return _react["default"].createElement("span", props);
}
/**
 * creates a data line with label, text and optionally text can be formatted html
 * @param {string} label
 * @param {string} text
 * @param {boolean} isFormatted - if true then text contains html formatting
 * @param {string} fontSize - font size to use for text
 * @return {*}
 */


function generateDataSegment(label, text) {
  var isFormatted = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  var fontSize = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '1.0em';
  return isFormatted ? _react["default"].createElement("span", null, _react["default"].createElement("strong", null, label), " ", _react["default"].createElement("span", {
    style: {
      fontSize: fontSize
    }
  }, text && getFormatted(text) || '')) : _react["default"].createElement("span", null, _react["default"].createElement("strong", null, label), " ", _react["default"].createElement("span", {
    style: {
      fontSize: fontSize
    }
  }, text));
}
/**
 * draws line between word parts
 * @param {Number} pos - order of part on screen (0 is top)
 * @return {*}
 */


function generateLine(pos) {
  return pos > 0 ? _react["default"].createElement("hr", {
    style: {
      'height': '6px',
      'borderBottom': '1px solid gray',
      'marginBottom': '5px',
      'marginTop': '0px'
    }
  }) : '';
}
/**
 * creates an html word
 * @param {boolean} multipart - if true then this is a multipart word
 * @param {string} word
 * @param {string} fontSize - font size to use for word
 * @return {*}
 */


function generateWordEntry(multipart, word) {
  var fontSize = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '1.2em';
  return multipart ? _react["default"].createElement("div", {
    style: {
      margin: '0',
      padding: '0'
    }
  }, _react["default"].createElement("strong", {
    style: {
      fontSize: fontSize
    }
  }, word), _react["default"].createElement("br", null)) : '';
}
/**
 * creates an entry for a word part
 * @param {function} translate
 * @param {string} lemma
 * @param {string} morphStr
 * @param {Number} strongsNum
 * @param {string} strongs
 * @param {string} lexicon
 * @param {string} word
 * @param {Number} itemNum - number of part in word
 * @param {Number} pos - order of part on screen (0 is top)
 * @param {Number} count - total number of parts to show
 * @param {boolean} isHebrew - if true then we adjust font size for Original language
 * @return {*}
 */


function generateWordPart(translate, lemma, morphStr, strongsNum, strongs, lexicon, word, itemNum, pos, count) {
  var isHebrew = arguments.length > 10 && arguments[10] !== undefined ? arguments[10] : false;
  morphStr = morphStr || translate('morph_missing');
  var multipart = count > 1;
  var key = 'lexicon_details_' + pos;
  var origLangFontSize = isHebrew ? '1.7em' : '1.2em';

  if (strongsNum) {
    return _react["default"].createElement("div", {
      key: key,
      style: {
        margin: '0px 10px 0px 10px',
        maxWidth: '400px'
      }
    }, generateLine(pos), generateWordEntry(multipart, word, origLangFontSize), generateDataSegment(translate('lemma'), lemma, false, origLangFontSize), _react["default"].createElement("br", null), generateDataSegment(translate('morphology'), morphStr), _react["default"].createElement("br", null), generateDataSegment(translate('strongs'), strongs), _react["default"].createElement("br", null), generateDataSegment(translate('lexicon'), lexicon, true), _react["default"].createElement("br", null));
  } else {
    // not main word
    return _react["default"].createElement("div", {
      key: key,
      style: {
        margin: '0px 0px 0px 10px',
        maxWidth: '400px'
      }
    }, generateLine(pos), generateWordEntry(multipart, word, origLangFontSize), generateDataSegment(translate('morphology'), morphStr), _react["default"].createElement("br", null));
  }
}
/**
 * find the major part of the word and move to top
 * @param {Number} partCount - actual part count
 * @param {Array} wordParts - word split into parts
 * @return {number[]}
 */


function movePrimaryWordToTop(partCount, wordParts) {
  var majorHighest = 0;
  var majorPos = 0;
  var indices = Array.from({
    length: partCount
  }).map(function (u, i) {
    return i;
  });
  indices.forEach(function (i) {
    // sort by part length, longest first
    var partLen = (wordParts && wordParts.length > i && wordParts[i] || '').length;

    if (partLen > majorHighest) {
      majorHighest = partLen;
      majorPos = i;
    }
  });

  if (majorPos > 0) {
    // move
    indices.splice(majorPos, 1);
    indices.unshift(majorPos);
  }

  return indices;
}
/**
 * get the strongs and lexicon for position
 * checks for formats such as `c:d:H0776` or 'H123:H7225' and extracts the actual strongs number(s)
 * @param {String} strong - parse the strongs numbers for part
 * @param {Object} lexiconData
 * @param {number} pos - position of part to get strongs and lexicon
 * @return {strongNumber, lexicon}
 */


function getStrongsAndLexicon(strong, lexiconData, pos) {
  var lexicon = '';
  var strongNumber = 0;
  var strongsParts = lexiconHelpers.getStrongsParts(strong);

  if (strongsParts.length > pos) {
    strong = strongsParts[pos];
  } else {
    strong = '';
  }

  var lexiconId = lexiconHelpers.lexiconIdFromStrongs(strong);
  strongNumber = lexiconHelpers.lexiconEntryIdFromStrongs(strong);

  if (lexiconData && lexiconData[lexiconId] && lexiconData[lexiconId][strongNumber]) {
    lexicon = lexiconData[lexiconId][strongNumber]["long"];
  }

  return {
    strongNumber: strongNumber,
    lexicon: lexicon,
    strong: strong
  };
}
/**
 *
 * @param {Object} wordObject - word to display in lexicon
 * @param {String} lexiconData - contains lexicon for strongs
 * @param {Function} translate
 * @param {Function} generateWordPart
 * @param {boolean} isHebrew - if true then we adjust font size for Original language
 * @return {*[]}
 */


function generateWordLexiconDetails(wordObject, lexiconData, translate, generateWordPart, isHebrew) {
  var wordLexiconDetails;
  var wordParts = lexiconHelpers.getWordParts(wordObject.text);
  var morphStrs = getWordParts(wordObject.morph, translate);
  var strongsParts = lexiconHelpers.getStrongsParts(wordObject.strong);
  var partCount = Math.max(morphStrs.length, strongsParts.length, wordParts.length); // since there may be inconsistancies, use largest count

  if (partCount < 2) {
    var _getStrongsAndLexicon = getStrongsAndLexicon(wordObject.strong, lexiconData, 0),
        strongNumber = _getStrongsAndLexicon.strongNumber,
        lexicon = _getStrongsAndLexicon.lexicon,
        strongs = _getStrongsAndLexicon.strong;

    wordLexiconDetails = generateWordPart(translate, wordObject.lemma, morphStrs[0], strongNumber, strongs, lexicon, wordParts[0], 0, 0, partCount, isHebrew);
  } else {
    var indices = movePrimaryWordToTop(partCount, wordParts);
    wordLexiconDetails = indices.map(function (pos, index) {
      var morphStr = morphStrs.length > pos && morphStrs[pos] || '';
      var word = wordParts.length > pos && wordParts[pos] || '';

      var _getStrongsAndLexicon2 = getStrongsAndLexicon(wordObject.strong, lexiconData, pos),
          strongNumber = _getStrongsAndLexicon2.strongNumber,
          lexicon = _getStrongsAndLexicon2.lexicon,
          strongs = _getStrongsAndLexicon2.strong;

      var lemmaStr = index === 0 ? wordObject.lemma : '';
      return generateWordPart(translate, lemmaStr, morphStr, strongNumber, strongs, lexicon, word, pos, index, partCount, isHebrew);
    });
  }

  return wordLexiconDetails;
}

var WordLexiconDetails = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2["default"])(WordLexiconDetails, _React$Component);

  function WordLexiconDetails() {
    (0, _classCallCheck2["default"])(this, WordLexiconDetails);
    return (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(WordLexiconDetails).apply(this, arguments));
  }

  (0, _createClass2["default"])(WordLexiconDetails, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          wordObject = _this$props.wordObject,
          translate = _this$props.translate,
          lexiconData = _this$props.lexiconData,
          isHebrew = _this$props.isHebrew;
      var wordLexiconDetails = generateWordLexiconDetails(wordObject, lexiconData, translate, generateWordPart, isHebrew);
      return wordLexiconDetails;
    }
  }]);
  return WordLexiconDetails;
}(_react["default"].Component);

WordLexiconDetails.propTypes = {
  translate: _propTypes["default"].func.isRequired,
  wordObject: _propTypes["default"].shape({
    lemma: _propTypes["default"].string.isRequired,
    morph: _propTypes["default"].string.isRequired,
    strong: _propTypes["default"].string.isRequired
  }).isRequired,
  lexiconData: _propTypes["default"].object.isRequired,
  isHebrew: _propTypes["default"].bool.isRequired
};
var _default = WordLexiconDetails;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9Xb3JkTGV4aWNvbkRldGFpbHMvV29yZExleGljb25EZXRhaWxzLmpzIl0sIm5hbWVzIjpbImdldFdvcmRQYXJ0cyIsIm1vcnBoIiwidHJhbnNsYXRlIiwibW9ycGhLZXlzRm9yUGFydHMiLCJsZXhpY29uSGVscGVycyIsImdldE1vcnBoS2V5cyIsIm1vcnBoU3RycyIsImZvckVhY2giLCJtb3JwaEtleXMiLCJ0cmFuc2xhdGVkTW9ycGhzIiwia2V5Iiwic3RhcnRzV2l0aCIsInB1c2giLCJzdWJzdHIiLCJqb2luIiwiZ2V0Rm9ybWF0dGVkIiwiaHRtbCIsInByb3BzIiwiZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwiLCJfX2h0bWwiLCJnZW5lcmF0ZURhdGFTZWdtZW50IiwibGFiZWwiLCJ0ZXh0IiwiaXNGb3JtYXR0ZWQiLCJmb250U2l6ZSIsImdlbmVyYXRlTGluZSIsInBvcyIsImdlbmVyYXRlV29yZEVudHJ5IiwibXVsdGlwYXJ0Iiwid29yZCIsIm1hcmdpbiIsInBhZGRpbmciLCJnZW5lcmF0ZVdvcmRQYXJ0IiwibGVtbWEiLCJtb3JwaFN0ciIsInN0cm9uZ3NOdW0iLCJzdHJvbmdzIiwibGV4aWNvbiIsIml0ZW1OdW0iLCJjb3VudCIsImlzSGVicmV3Iiwib3JpZ0xhbmdGb250U2l6ZSIsIm1heFdpZHRoIiwibW92ZVByaW1hcnlXb3JkVG9Ub3AiLCJwYXJ0Q291bnQiLCJ3b3JkUGFydHMiLCJtYWpvckhpZ2hlc3QiLCJtYWpvclBvcyIsImluZGljZXMiLCJBcnJheSIsImZyb20iLCJsZW5ndGgiLCJtYXAiLCJ1IiwiaSIsInBhcnRMZW4iLCJzcGxpY2UiLCJ1bnNoaWZ0IiwiZ2V0U3Ryb25nc0FuZExleGljb24iLCJzdHJvbmciLCJsZXhpY29uRGF0YSIsInN0cm9uZ051bWJlciIsInN0cm9uZ3NQYXJ0cyIsImdldFN0cm9uZ3NQYXJ0cyIsImxleGljb25JZCIsImxleGljb25JZEZyb21TdHJvbmdzIiwibGV4aWNvbkVudHJ5SWRGcm9tU3Ryb25ncyIsImdlbmVyYXRlV29yZExleGljb25EZXRhaWxzIiwid29yZE9iamVjdCIsIndvcmRMZXhpY29uRGV0YWlscyIsIk1hdGgiLCJtYXgiLCJpbmRleCIsImxlbW1hU3RyIiwiV29yZExleGljb25EZXRhaWxzIiwiUmVhY3QiLCJDb21wb25lbnQiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJmdW5jIiwiaXNSZXF1aXJlZCIsInNoYXBlIiwic3RyaW5nIiwib2JqZWN0IiwiYm9vbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUVBOztBQURBOztBQUdBOzs7Ozs7QUFNQSxTQUFTQSxZQUFULENBQXNCQyxLQUF0QixFQUE2QkMsU0FBN0IsRUFBd0M7QUFDdEMsTUFBTUMsaUJBQWlCLEdBQUdDLGNBQWMsQ0FBQ0MsWUFBZixDQUE0QkosS0FBNUIsQ0FBMUI7QUFDQSxNQUFNSyxTQUFTLEdBQUcsRUFBbEI7QUFFQUgsRUFBQUEsaUJBQWlCLENBQUNJLE9BQWxCLENBQTBCLFVBQUFDLFNBQVMsRUFBSTtBQUNyQyxRQUFNQyxnQkFBZ0IsR0FBRyxFQUF6QjtBQUVBRCxJQUFBQSxTQUFTLENBQUNELE9BQVYsQ0FBa0IsVUFBQUcsR0FBRyxFQUFJO0FBQ3ZCLFVBQUlBLEdBQUcsQ0FBQ0MsVUFBSixDQUFlLEdBQWYsQ0FBSixFQUF5QjtBQUN2QkYsUUFBQUEsZ0JBQWdCLENBQUNHLElBQWpCLENBQXNCRixHQUFHLENBQUNHLE1BQUosQ0FBVyxDQUFYLENBQXRCO0FBQ0QsT0FGRCxNQUVPO0FBQ0xKLFFBQUFBLGdCQUFnQixDQUFDRyxJQUFqQixDQUFzQlYsU0FBUyxDQUFDUSxHQUFELENBQS9CO0FBQ0Q7QUFDRixLQU5EO0FBT0FKLElBQUFBLFNBQVMsQ0FBQ00sSUFBVixDQUFlSCxnQkFBZ0IsQ0FBQ0ssSUFBakIsQ0FBc0IsSUFBdEIsQ0FBZjtBQUNELEdBWEQ7QUFZQSxTQUFPUixTQUFQO0FBQ0Q7QUFFRDs7Ozs7OztBQUtBLFNBQVNTLFlBQVQs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QVZvQixDQUFyQjtBQVdEOztBQUNELFNBQU82QixrQkFBUDtBQUNEOztJQUVLSyxrQjs7Ozs7Ozs7Ozs2QkFDSztBQUFBLHdCQUdILEtBQUt6RCxLQUhGO0FBQUEsVUFFTG1ELFVBRkssZUFFTEEsVUFGSztBQUFBLFVBRU9sRSxTQUZQLGVBRU9BLFNBRlA7QUFBQSxVQUVrQjBELFdBRmxCLGVBRWtCQSxXQUZsQjtBQUFBLFVBRStCcEIsUUFGL0IsZUFFK0JBLFFBRi9CO0FBSVAsVUFBSTZCLGtCQUFrQixHQUFHRiwwQkFBMEIsQ0FBQ0MsVUFBRCxFQUFhUixXQUFiLEVBQTBCMUQsU0FBMUIsRUFBcUM4QixnQkFBckMsRUFBdURRLFFBQXZELENBQW5EO0FBQ0EsYUFBTzZCLGtCQUFQO0FBQ0Q7OztFQVA4Qk0sa0JBQU1DLFM7O0FBVXZDRixrQkFBa0IsQ0FBQ0csU0FBbkIsR0FBK0I7QUFDN0IzRSxFQUFBQSxTQUFTLEVBQUU0RSxzQkFBVUMsSUFBVixDQUFlQyxVQURHO0FBRTdCWixFQUFBQSxVQUFVLEVBQUVVLHNCQUFVRyxLQUFWLENBQWdCO0FBQzFCaEQsSUFBQUEsS0FBSyxFQUFFNkMsc0JBQVVJLE1BQVYsQ0FBaUJGLFVBREU7QUFFMUIvRSxJQUFBQSxLQUFLLEVBQUU2RSxzQkFBVUksTUFBVixDQUFpQkYsVUFGRTtBQUcxQnJCLElBQUFBLE1BQU0sRUFBRW1CLHNCQUFVSSxNQUFWLENBQWlCRjtBQUhDLEdBQWhCLEVBSVRBLFVBTjBCO0FBTzdCcEIsRUFBQUEsV0FBVyxFQUFFa0Isc0JBQVVLLE1BQVYsQ0FBaUJILFVBUEQ7QUFRN0J4QyxFQUFBQSxRQUFRLEVBQUVzQyxzQkFBVU0sSUFBVixDQUFlSjtBQVJJLENBQS9CO2VBV2VOLGtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG4vLyBoZWxwZXJzXG5pbXBvcnQgKiBhcyBsZXhpY29uSGVscGVycyBmcm9tICcuLi9TY3JpcHR1cmVQYW5lL2hlbHBlcnMvbGV4aWNvbkhlbHBlcnMnO1xuXG4vKipcbiAqIGxvb2t1cCB0cmFuc2xhdGlvbnMgYW5kIGNvbnZlcnQgdG8gbW9ycGggZGVzY3JpcHRpb25cbiAqIEBwYXJhbSB7c3RyaW5nfSBtb3JwaCAtIG1vcnBoIGNvZGUgdG8gY29udmVydFxuICogQHBhcmFtIHtGdW5jdGlvbn0gdHJhbnNsYXRlXG4gKiBAcmV0dXJuIHtBcnJheX0gbW9ycGggZGVzY3JpcHRpb24gZm9yIGVhY2ggcGFydFxuICovXG5mdW5jdGlvbiBnZXRXb3JkUGFydHMobW9ycGgsIHRyYW5zbGF0ZSkge1xuICBjb25zdCBtb3JwaEtleXNGb3JQYXJ0cyA9IGxleGljb25IZWxwZXJzLmdldE1vcnBoS2V5cyhtb3JwaCk7XG4gIGNvbnN0IG1vcnBoU3RycyA9IFtdO1xuXG4gIG1vcnBoS2V5c0ZvclBhcnRzLmZvckVhY2gobW9ycGhLZXlzID0+IHtcbiAgICBjb25zdCB0cmFuc2xhdGVkTW9ycGhzID0gW107XG5cbiAgICBtb3JwaEtleXMuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgaWYgKGtleS5zdGFydHNXaXRoKCcqJykpIHtcbiAgICAgICAgdHJhbnNsYXRlZE1vcnBocy5wdXNoKGtleS5zdWJzdHIoMSkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdHJhbnNsYXRlZE1vcnBocy5wdXNoKHRyYW5zbGF0ZShrZXkpKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBtb3JwaFN0cnMucHVzaCh0cmFuc2xhdGVkTW9ycGhzLmpvaW4oJywgJykpO1xuICB9KTtcbiAgcmV0dXJuIG1vcnBoU3Rycztcbn1cblxuLyoqXG4gKiBjcmVhdGVzIHNwYW4gd2l0aCBmb3JtYXR0ZWQgaHRtbFxuICogQHBhcmFtIGh0bWxcbiAqIEByZXR1cm4geyp9XG4gKi9cbmZ1bmN0aW9uIGdldEZvcm1hdHRlZChodG1sKSB7XG4gIGNvbnN0IHByb3BzID0geyBkYW5nZXJvdXNseVNldElubmVySFRNTDogeyBfX2h0bWw6IGh0bWwgfSB9O1xuICByZXR1cm4gPHNwYW4gey4uLnByb3BzfT48L3NwYW4+O1xufVxuXG4vKipcbiAqIGNyZWF0ZXMgYSBkYXRhIGxpbmUgd2l0aCBsYWJlbCwgdGV4dCBhbmQgb3B0aW9uYWxseSB0ZXh0IGNhbiBiZSBmb3JtYXR0ZWQgaHRtbFxuICogQHBhcmFtIHtzdHJpbmd9IGxhYmVsXG4gKiBAcGFyYW0ge3N0cmluZ30gdGV4dFxuICogQHBhcmFtIHtib29sZWFufSBpc0Zvcm1hdHRlZCAtIGlmIHRydWUgdGhlbiB0ZXh0IGNvbnRhaW5zIGh0bWwgZm9ybWF0dGluZ1xuICogQHBhcmFtIHtzdHJpbmd9IGZvbnRTaXplIC0gZm9udCBzaXplIHRvIHVzZSBmb3IgdGV4dFxuICogQHJldHVybiB7Kn1cbiAqL1xuZnVuY3Rpb24gZ2VuZXJhdGVEYXRhU2VnbWVudChsYWJlbCwgdGV4dCwgaXNGb3JtYXR0ZWQgPSBmYWxzZSwgZm9udFNpemUgPSAnMS4wZW0nKSB7XG4gIHJldHVybiAoaXNGb3JtYXR0ZWQgP1xuICAgIDxzcGFuPjxzdHJvbmc+e2xhYmVsfTwvc3Ryb25nPiA8c3BhbiBzdHlsZT17eyBmb250U2l6ZSB9fT57KHRleHQgJiYgZ2V0Rm9ybWF0dGVkKHRleHQpKSB8fCAnJ308L3NwYW4+PC9zcGFuPlxuICAgIDpcbiAgICA8c3Bhbj48c3Ryb25nPntsYWJlbH08L3N0cm9uZz4gPHNwYW4gc3R5bGU9e3sgZm9udFNpemUgfX0+e3RleHR9PC9zcGFuPjwvc3Bhbj5cbiAgKTtcbn1cblxuLyoqXG4gKiBkcmF3cyBsaW5lIGJldHdlZW4gd29yZCBwYXJ0c1xuICogQHBhcmFtIHtOdW1iZXJ9IHBvcyAtIG9yZGVyIG9mIHBhcnQgb24gc2NyZWVuICgwIGlzIHRvcClcbiAqIEByZXR1cm4geyp9XG4gKi9cbmZ1bmN0aW9uIGdlbmVyYXRlTGluZShwb3MpIHtcbiAgcmV0dXJuIChwb3MgPiAwKSA/XG4gICAgPGhyIHN0eWxlPXt7XG4gICAgICAnaGVpZ2h0JzogJzZweCcsICdib3JkZXJCb3R0b20nOiAnMXB4IHNvbGlkIGdyYXknLCAnbWFyZ2luQm90dG9tJzogJzVweCcsICdtYXJnaW5Ub3AnOiAnMHB4JyxcbiAgICB9fS8+XG4gICAgOiAnJztcbn1cblxuLyoqXG4gKiBjcmVhdGVzIGFuIGh0bWwgd29yZFxuICogQHBhcmFtIHtib29sZWFufSBtdWx0aXBhcnQgLSBpZiB0cnVlIHRoZW4gdGhpcyBpcyBhIG11bHRpcGFydCB3b3JkXG4gKiBAcGFyYW0ge3N0cmluZ30gd29yZFxuICogQHBhcmFtIHtzdHJpbmd9IGZvbnRTaXplIC0gZm9udCBzaXplIHRvIHVzZSBmb3Igd29yZFxuICogQHJldHVybiB7Kn1cbiAqL1xuZnVuY3Rpb24gZ2VuZXJhdGVXb3JkRW50cnkobXVsdGlwYXJ0LCB3b3JkLCBmb250U2l6ZSA9ICcxLjJlbScpIHtcbiAgcmV0dXJuIG11bHRpcGFydCA/XG4gICAgPGRpdiBzdHlsZT17eyBtYXJnaW46ICcwJywgcGFkZGluZzogJzAnIH19PlxuICAgICAgPHN0cm9uZyBzdHlsZT17eyBmb250U2l6ZSB9fT57d29yZH08L3N0cm9uZz5cbiAgICAgIDxici8+XG4gICAgPC9kaXY+XG4gICAgOiAnJztcbn1cblxuLyoqXG4gKiBjcmVhdGVzIGFuIGVudHJ5IGZvciBhIHdvcmQgcGFydFxuICogQHBhcmFtIHtmdW5jdGlvbn0gdHJhbnNsYXRlXG4gKiBAcGFyYW0ge3N0cmluZ30gbGVtbWFcbiAqIEBwYXJhbSB7c3RyaW5nfSBtb3JwaFN0clxuICogQHBhcmFtIHtOdW1iZXJ9IHN0cm9uZ3NOdW1cbiAqIEBwYXJhbSB7c3RyaW5nfSBzdHJvbmdzXG4gKiBAcGFyYW0ge3N0cmluZ30gbGV4aWNvblxuICogQHBhcmFtIHtzdHJpbmd9IHdvcmRcbiAqIEBwYXJhbSB7TnVtYmVyfSBpdGVtTnVtIC0gbnVtYmVyIG9mIHBhcnQgaW4gd29yZFxuICogQHBhcmFtIHtOdW1iZXJ9IHBvcyAtIG9yZGVyIG9mIHBhcnQgb24gc2NyZWVuICgwIGlzIHRvcClcbiAqIEBwYXJhbSB7TnVtYmVyfSBjb3VudCAtIHRvdGFsIG51bWJlciBvZiBwYXJ0cyB0byBzaG93XG4gKiBAcGFyYW0ge2Jvb2xlYW59IGlzSGVicmV3IC0gaWYgdHJ1ZSB0aGVuIHdlIGFkanVzdCBmb250IHNpemUgZm9yIE9yaWdpbmFsIGxhbmd1YWdlXG4gKiBAcmV0dXJuIHsqfVxuICovXG5mdW5jdGlvbiBnZW5lcmF0ZVdvcmRQYXJ0KHRyYW5zbGF0ZSwgbGVtbWEsIG1vcnBoU3RyLCBzdHJvbmdzTnVtLCBzdHJvbmdzLCBsZXhpY29uLCB3b3JkLCBpdGVtTnVtLCBwb3MsIGNvdW50LFxuICBpc0hlYnJldyA9IGZhbHNlKSB7XG4gIG1vcnBoU3RyID0gbW9ycGhTdHIgfHwgdHJhbnNsYXRlKCdtb3JwaF9taXNzaW5nJyk7XG4gIGNvbnN0IG11bHRpcGFydCA9IGNvdW50ID4gMTtcbiAgY29uc3Qga2V5ID0gJ2xleGljb25fZGV0YWlsc18nICsgcG9zO1xuICBjb25zdCBvcmlnTGFuZ0ZvbnRTaXplID0gaXNIZWJyZXcgPyAnMS43ZW0nIDogJzEuMmVtJztcblxuICBpZiAoc3Ryb25nc051bSkge1xuICAgIHJldHVybiA8ZGl2IGtleT17a2V5fSBzdHlsZT17eyBtYXJnaW46ICcwcHggMTBweCAwcHggMTBweCcsIG1heFdpZHRoOiAnNDAwcHgnIH19PlxuICAgICAge2dlbmVyYXRlTGluZShwb3MpfVxuICAgICAge2dlbmVyYXRlV29yZEVudHJ5KG11bHRpcGFydCwgd29yZCwgb3JpZ0xhbmdGb250U2l6ZSl9XG4gICAgICB7Z2VuZXJhdGVEYXRhU2VnbWVudCh0cmFuc2xhdGUoJ2xlbW1hJyksIGxlbW1hLCBmYWxzZSwgb3JpZ0xhbmdGb250U2l6ZSl9PGJyLz5cbiAgICAgIHtnZW5lcmF0ZURhdGFTZWdtZW50KHRyYW5zbGF0ZSgnbW9ycGhvbG9neScpLCBtb3JwaFN0cil9PGJyLz5cbiAgICAgIHtnZW5lcmF0ZURhdGFTZWdtZW50KHRyYW5zbGF0ZSgnc3Ryb25ncycpLCBzdHJvbmdzKX08YnIvPlxuICAgICAge2dlbmVyYXRlRGF0YVNlZ21lbnQodHJhbnNsYXRlKCdsZXhpY29uJyksIGxleGljb24sIHRydWUpfTxici8+XG4gICAgPC9kaXY+O1xuICB9IGVsc2UgeyAvLyBub3QgbWFpbiB3b3JkXG4gICAgcmV0dXJuIDxkaXYga2V5PXtrZXl9IHN0eWxlPXt7IG1hcmdpbjogJzBweCAwcHggMHB4IDEwcHgnLCBtYXhXaWR0aDogJzQwMHB4JyB9fT5cbiAgICAgIHtnZW5lcmF0ZUxpbmUocG9zKX1cbiAgICAgIHtnZW5lcmF0ZVdvcmRFbnRyeShtdWx0aXBhcnQsIHdvcmQsIG9yaWdMYW5nRm9udFNpemUpfVxuICAgICAge2dlbmVyYXRlRGF0YVNlZ21lbnQodHJhbnNsYXRlKCdtb3JwaG9sb2d5JyksIG1vcnBoU3RyKX08YnIvPlxuICAgIDwvZGl2PjtcbiAgfVxufVxuXG4vKipcbiAqIGZpbmQgdGhlIG1ham9yIHBhcnQgb2YgdGhlIHdvcmQgYW5kIG1vdmUgdG8gdG9wXG4gKiBAcGFyYW0ge051bWJlcn0gcGFydENvdW50IC0gYWN0dWFsIHBhcnQgY291bnRcbiAqIEBwYXJhbSB7QXJyYXl9IHdvcmRQYXJ0cyAtIHdvcmQgc3BsaXQgaW50byBwYXJ0c1xuICogQHJldHVybiB7bnVtYmVyW119XG4gKi9cbmZ1bmN0aW9uIG1vdmVQcmltYXJ5V29yZFRvVG9wKHBhcnRDb3VudCwgd29yZFBhcnRzKSB7XG4gIGxldCBtYWpvckhpZ2hlc3QgPSAwO1xuICBsZXQgbWFqb3JQb3MgPSAwO1xuICBsZXQgaW5kaWNlcyA9IEFycmF5LmZyb20oeyBsZW5ndGg6IHBhcnRDb3VudCB9KS5tYXAoKHUsIGkpID0+IGkpO1xuXG4gIGluZGljZXMuZm9yRWFjaChpID0+IHtcbiAgICAvLyBzb3J0IGJ5IHBhcnQgbGVuZ3RoLCBsb25nZXN0IGZpcnN0XG4gICAgY29uc3QgcGFydExlbiA9ICgod29yZFBhcnRzICYmICh3b3JkUGFydHMubGVuZ3RoID4gaSkgJiYgd29yZFBhcnRzW2ldKSB8fCAnJykubGVuZ3RoO1xuXG4gICAgaWYgKHBhcnRMZW4gPiBtYWpvckhpZ2hlc3QpIHtcbiAgICAgIG1ham9ySGlnaGVzdCA9IHBhcnRMZW47XG4gICAgICBtYWpvclBvcyA9IGk7XG4gICAgfVxuICB9KTtcblxuICBpZiAobWFqb3JQb3MgPiAwKSB7IC8vIG1vdmVcbiAgICBpbmRpY2VzLnNwbGljZShtYWpvclBvcywgMSk7XG4gICAgaW5kaWNlcy51bnNoaWZ0KG1ham9yUG9zKTtcbiAgfVxuICByZXR1cm4gaW5kaWNlcztcbn1cblxuLyoqXG4gKiBnZXQgdGhlIHN0cm9uZ3MgYW5kIGxleGljb24gZm9yIHBvc2l0aW9uXG4gKiBjaGVja3MgZm9yIGZvcm1hdHMgc3VjaCBhcyBgYzpkOkgwNzc2YCBvciAnSDEyMzpINzIyNScgYW5kIGV4dHJhY3RzIHRoZSBhY3R1YWwgc3Ryb25ncyBudW1iZXIocylcbiAqIEBwYXJhbSB7U3RyaW5nfSBzdHJvbmcgLSBwYXJzZSB0aGUgc3Ryb25ncyBudW1iZXJzIGZvciBwYXJ0XG4gKiBAcGFyYW0ge09iamVjdH0gbGV4aWNvbkRhdGFcbiAqIEBwYXJhbSB7bnVtYmVyfSBwb3MgLSBwb3NpdGlvbiBvZiBwYXJ0IHRvIGdldCBzdHJvbmdzIGFuZCBsZXhpY29uXG4gKiBAcmV0dXJuIHtzdHJvbmdOdW1iZXIsIGxleGljb259XG4gKi9cbmZ1bmN0aW9uIGdldFN0cm9uZ3NBbmRMZXhpY29uKHN0cm9uZywgbGV4aWNvbkRhdGEsIHBvcykge1xuICBsZXQgbGV4aWNvbiA9ICcnO1xuICBsZXQgc3Ryb25nTnVtYmVyID0gMDtcbiAgY29uc3Qgc3Ryb25nc1BhcnRzID0gbGV4aWNvbkhlbHBlcnMuZ2V0U3Ryb25nc1BhcnRzKHN0cm9uZyk7XG5cbiAgaWYgKHN0cm9uZ3NQYXJ0cy5sZW5ndGggPiBwb3MpIHtcbiAgICBzdHJvbmcgPSBzdHJvbmdzUGFydHNbcG9zXTtcbiAgfSBlbHNlIHtcbiAgICBzdHJvbmcgPSAnJztcbiAgfVxuXG4gIGNvbnN0IGxleGljb25JZCA9IGxleGljb25IZWxwZXJzLmxleGljb25JZEZyb21TdHJvbmdzKHN0cm9uZyk7XG4gIHN0cm9uZ051bWJlciA9IGxleGljb25IZWxwZXJzLmxleGljb25FbnRyeUlkRnJvbVN0cm9uZ3Moc3Ryb25nKTtcblxuICBpZiAobGV4aWNvbkRhdGEgJiYgbGV4aWNvbkRhdGFbbGV4aWNvbklkXSAmJiBsZXhpY29uRGF0YVtsZXhpY29uSWRdW3N0cm9uZ051bWJlcl0pIHtcbiAgICBsZXhpY29uID0gbGV4aWNvbkRhdGFbbGV4aWNvbklkXVtzdHJvbmdOdW1iZXJdLmxvbmc7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICBzdHJvbmdOdW1iZXIsIGxleGljb24sIHN0cm9uZyxcbiAgfTtcbn1cblxuLyoqXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IHdvcmRPYmplY3QgLSB3b3JkIHRvIGRpc3BsYXkgaW4gbGV4aWNvblxuICogQHBhcmFtIHtTdHJpbmd9IGxleGljb25EYXRhIC0gY29udGFpbnMgbGV4aWNvbiBmb3Igc3Ryb25nc1xuICogQHBhcmFtIHtGdW5jdGlvbn0gdHJhbnNsYXRlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBnZW5lcmF0ZVdvcmRQYXJ0XG4gKiBAcGFyYW0ge2Jvb2xlYW59IGlzSGVicmV3IC0gaWYgdHJ1ZSB0aGVuIHdlIGFkanVzdCBmb250IHNpemUgZm9yIE9yaWdpbmFsIGxhbmd1YWdlXG4gKiBAcmV0dXJuIHsqW119XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZW5lcmF0ZVdvcmRMZXhpY29uRGV0YWlscyh3b3JkT2JqZWN0LCBsZXhpY29uRGF0YSwgdHJhbnNsYXRlLCBnZW5lcmF0ZVdvcmRQYXJ0LCBpc0hlYnJldykge1xuICBsZXQgd29yZExleGljb25EZXRhaWxzO1xuICBjb25zdCB3b3JkUGFydHMgPSBsZXhpY29uSGVscGVycy5nZXRXb3JkUGFydHMod29yZE9iamVjdC50ZXh0KTtcbiAgY29uc3QgbW9ycGhTdHJzID0gZ2V0V29yZFBhcnRzKHdvcmRPYmplY3QubW9ycGgsIHRyYW5zbGF0ZSk7XG4gIGNvbnN0IHN0cm9uZ3NQYXJ0cyA9IGxleGljb25IZWxwZXJzLmdldFN0cm9uZ3NQYXJ0cyh3b3JkT2JqZWN0LnN0cm9uZyk7XG4gIGNvbnN0IHBhcnRDb3VudCA9IE1hdGgubWF4KG1vcnBoU3Rycy5sZW5ndGgsIHN0cm9uZ3NQYXJ0cy5sZW5ndGgsIHdvcmRQYXJ0cy5sZW5ndGgpOyAvLyBzaW5jZSB0aGVyZSBtYXkgYmUgaW5jb25zaXN0YW5jaWVzLCB1c2UgbGFyZ2VzdCBjb3VudFxuXG4gIGlmIChwYXJ0Q291bnQgPCAyKSB7XG4gICAgY29uc3Qge1xuICAgICAgc3Ryb25nTnVtYmVyLCBsZXhpY29uLCBzdHJvbmc6IHN0cm9uZ3MsXG4gICAgfSA9IGdldFN0cm9uZ3NBbmRMZXhpY29uKHdvcmRPYmplY3Quc3Ryb25nLCBsZXhpY29uRGF0YSwgMCk7XG4gICAgd29yZExleGljb25EZXRhaWxzID0gZ2VuZXJhdGVXb3JkUGFydCh0cmFuc2xhdGUsIHdvcmRPYmplY3QubGVtbWEsIG1vcnBoU3Ryc1swXSwgc3Ryb25nTnVtYmVyLCBzdHJvbmdzLCBsZXhpY29uLCB3b3JkUGFydHNbMF0sIDAsIDAsIHBhcnRDb3VudCwgaXNIZWJyZXcpO1xuICB9IGVsc2Uge1xuICAgIGNvbnN0IGluZGljZXMgPSBtb3ZlUHJpbWFyeVdvcmRUb1RvcChwYXJ0Q291bnQsIHdvcmRQYXJ0cyk7XG5cbiAgICB3b3JkTGV4aWNvbkRldGFpbHMgPSBpbmRpY2VzLm1hcCgocG9zLCBpbmRleCkgPT4ge1xuICAgICAgY29uc3QgbW9ycGhTdHIgPSAoKG1vcnBoU3Rycy5sZW5ndGggPiBwb3MpICYmIG1vcnBoU3Ryc1twb3NdKSB8fCAnJztcbiAgICAgIGNvbnN0IHdvcmQgPSAoKHdvcmRQYXJ0cy5sZW5ndGggPiBwb3MpICYmIHdvcmRQYXJ0c1twb3NdKSB8fCAnJztcbiAgICAgIGNvbnN0IHtcbiAgICAgICAgc3Ryb25nTnVtYmVyLCBsZXhpY29uLCBzdHJvbmc6IHN0cm9uZ3MsXG4gICAgICB9ID0gZ2V0U3Ryb25nc0FuZExleGljb24od29yZE9iamVjdC5zdHJvbmcsIGxleGljb25EYXRhLCBwb3MpO1xuICAgICAgY29uc3QgbGVtbWFTdHIgPSAoaW5kZXggPT09IDApID8gd29yZE9iamVjdC5sZW1tYSA6ICcnO1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgZ2VuZXJhdGVXb3JkUGFydCh0cmFuc2xhdGUsIGxlbW1hU3RyLCBtb3JwaFN0ciwgc3Ryb25nTnVtYmVyLCBzdHJvbmdzLCBsZXhpY29uLCB3b3JkLCBwb3MsIGluZGV4LCBwYXJ0Q291bnQsIGlzSGVicmV3KVxuICAgICAgKTtcbiAgICB9KTtcbiAgfVxuICByZXR1cm4gd29yZExleGljb25EZXRhaWxzO1xufVxuXG5jbGFzcyBXb3JkTGV4aWNvbkRldGFpbHMgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgd29yZE9iamVjdCwgdHJhbnNsYXRlLCBsZXhpY29uRGF0YSwgaXNIZWJyZXcsXG4gICAgfSA9IHRoaXMucHJvcHM7XG4gICAgbGV0IHdvcmRMZXhpY29uRGV0YWlscyA9IGdlbmVyYXRlV29yZExleGljb25EZXRhaWxzKHdvcmRPYmplY3QsIGxleGljb25EYXRhLCB0cmFuc2xhdGUsIGdlbmVyYXRlV29yZFBhcnQsIGlzSGVicmV3KTtcbiAgICByZXR1cm4gd29yZExleGljb25EZXRhaWxzO1xuICB9XG59XG5cbldvcmRMZXhpY29uRGV0YWlscy5wcm9wVHlwZXMgPSB7XG4gIHRyYW5zbGF0ZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgd29yZE9iamVjdDogUHJvcFR5cGVzLnNoYXBlKHtcbiAgICBsZW1tYTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgIG1vcnBoOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgc3Ryb25nOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gIH0pLmlzUmVxdWlyZWQsXG4gIGxleGljb25EYXRhOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG4gIGlzSGVicmV3OiBQcm9wVHlwZXMuYm9vbC5pc1JlcXVpcmVkLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgV29yZExleGljb25EZXRhaWxzO1xuIl19