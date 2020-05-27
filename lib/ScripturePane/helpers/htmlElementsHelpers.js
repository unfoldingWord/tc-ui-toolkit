"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createHighlightedSpan = exports.createTextSpan = exports.createNonClickableSpan = exports.onWordClick = void 0;

var _react = _interopRequireDefault(require("react"));

var _WordLexiconDetails = _interopRequireDefault(require("../../WordLexiconDetails"));

var lexiconHelpers = _interopRequireWildcard(require("./lexiconHelpers"));

var _usfmHelpers = require("./usfmHelpers");

// Components
// helpers

/**
 * on word click show lexicon
 * @param {Object} e - clicked element
 * @param {Object} word
 * @param {Function} getLexiconData
 * @param {Function} showPopover
 * @param {Function} translate
 * @param {boolean} isHebrew - if true then we adjust font size
 */
var onWordClick = function onWordClick(e, word, getLexiconData, showPopover, translate, isHebrew) {
  if (word && word.strong) {
    var lexiconData = lexiconHelpers.lookupStrongsNumbers(word.strong, getLexiconData);
    var positionCoord = e.target;
    var fontSize = isHebrew ? '1.7em' : '1.2em';

    var PopoverTitle = _react["default"].createElement("strong", {
      style: {
        fontSize: fontSize
      }
    }, word.text);

    var wordDetails = _react["default"].createElement(_WordLexiconDetails["default"], {
      lexiconData: lexiconData,
      wordObject: word,
      translate: translate,
      isHebrew: !!isHebrew
    });

    showPopover(PopoverTitle, wordDetails, positionCoord);
  }
};

exports.onWordClick = onWordClick;

var createNonClickableSpan = function createNonClickableSpan(index, paddingSpanStyle, padding, isHighlightedWord, text) {
  return _react["default"].createElement("span", {
    key: index.toString()
  }, _react["default"].createElement("span", {
    style: paddingSpanStyle
  }, padding), _react["default"].createElement("span", {
    style: {
      backgroundColor: isHighlightedWord ? 'var(--highlight-color)' : ''
    }
  }, (0, _usfmHelpers.removeMarker)(text)));
};

exports.createNonClickableSpan = createNonClickableSpan;

var createTextSpan = function createTextSpan(index, text) {
  return _react["default"].createElement("span", {
    key: index
  }, (0, _usfmHelpers.removeMarker)(text));
};

exports.createTextSpan = createTextSpan;

var createHighlightedSpan = function createHighlightedSpan(index, text) {
  return _react["default"].createElement("span", {
    key: index,
    style: {
      backgroundColor: 'var(--highlight-color)'
    }
  }, (0, _usfmHelpers.removeMarker)(text));
};

exports.createHighlightedSpan = createHighlightedSpan;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9TY3JpcHR1cmVQYW5lL2hlbHBlcnMvaHRtbEVsZW1lbnRzSGVscGVycy5qcyJdLCJuYW1lcyI6WyJvbldvcmRDbGljayIsImUiLCJ3b3JkIiwiZ2V0TGV4aWNvbkRhdGEiLCJzaG93UG9wb3ZlciIsInRyYW5zbGF0ZSIsImlzSGVicmV3Iiwic3Ryb25nIiwibGV4aWNvbkRhdGEiLCJsZXhpY29uSGVscGVycyIsImxvb2t1cFN0cm9uZ3NOdW1iZXJzIiwicG9zaXRpb25Db29yZCIsInRhcmdldCIsImZvbnRTaXplIiwiUG9wb3ZlclRpdGxlIiwidGV4dCIsIndvcmREZXRhaWxzIiwiY3JlYXRlTm9uQ2xpY2thYmxlU3BhbiIsImluZGV4IiwicGFkZGluZ1NwYW5TdHlsZSIsInBhZGRpbmciLCJpc0hpZ2hsaWdodGVkV29yZCIsInRvU3RyaW5nIiwiYmFja2dyb3VuZENvbG9yIiwiY3JlYXRlVGV4dFNwYW4iLCJjcmVhdGVIaWdobGlnaHRlZFNwYW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7O0FBRUE7O0FBRUE7O0FBQ0E7O0FBSkE7QUFFQTs7QUFJQTs7Ozs7Ozs7O0FBU08sSUFBTUEsV0FBVyxHQUFHLFNBQWRBLFdBQWMsQ0FBQ0MsQ0FBRCxFQUFJQyxJQUFKLEVBQVVDLGNBQVYsRUFBMEJDLFdBQTFCLEVBQXVDQyxTQUF2QyxFQUFrREMsUUFBbEQsRUFBK0Q7QUFDeEYsTUFBSUosSUFBSSxJQUFJQSxJQUFJLENBQUNLLE1BQWpCLEVBQXlCO0FBQ3ZCLFFBQUlDLFdBQVcsR0FBR0MsY0FBYyxDQUFDQyxvQkFBZixDQUFvQ1IsSUFBSSxDQUFDSyxNQUF6QyxFQUFpREosY0FBakQsQ0FBbEI7QUFDQSxRQUFNUSxhQUFhLEdBQUdWLENBQUMsQ0FBQ1csTUFBeEI7QUFDQSxRQUFNQyxRQUFRLEdBQUdQLFFBQVEsR0FBRyxPQUFILEdBQWEsT0FBdEM7O0FBQ0EsUUFBTVEsWUFBWSxHQUNoQjtBQUFRLE1BQUEsS0FBSyxFQUFFO0FBQUVELFFBQUFBLFFBQVEsRUFBUkE7QUFBRjtBQUFmLE9BQThCWCxJQUFJLENBQUNhLElBQW5DLENBREY7O0FBR0EsUUFBTUMsV0FBVyxHQUNmLGdDQUFDLDhCQUFEO0FBQW9CLE1BQUEsV0FBVyxFQUFFUixXQUFqQztBQUE4QyxNQUFBLFVBQVUsRUFBRU4sSUFBMUQ7QUFBZ0UsTUFBQSxTQUFTLEVBQUVHLFNBQTNFO0FBQ0UsTUFBQSxRQUFRLEVBQUUsQ0FBQyxDQUFDQztBQURkLE1BREY7O0FBSUFGLElBQUFBLFdBQVcsQ0FBQ1UsWUFBRCxFQUFlRSxXQUFmLEVBQTRCTCxhQUE1QixDQUFYO0FBQ0Q7QUFDRixDQWRNOzs7O0FBZ0JBLElBQU1NLHNCQUFzQixHQUFHLFNBQXpCQSxzQkFBeUIsQ0FBQ0MsS0FBRCxFQUFRQyxnQkFBUixFQUEwQkMsT0FBMUIsRUFBbUNDLGlCQUFuQyxFQUFzRE4sSUFBdEQ7QUFBQSxTQUNwQztBQUFNLElBQUEsR0FBRyxFQUFFRyxLQUFLLENBQUNJLFFBQU47QUFBWCxLQUNFO0FBQU0sSUFBQSxLQUFLLEVBQUVIO0FBQWIsS0FDR0MsT0FESCxDQURGLEVBSUU7QUFBTSxJQUFBLEtBQUssRUFBRTtBQUFFRyxNQUFBQSxlQUFlLEVBQUVGLGlCQUFpQixHQUFHLHdCQUFILEdBQThCO0FBQWxFO0FBQWIsS0FDRywrQkFBYU4sSUFBYixDQURILENBSkYsQ0FEb0M7QUFBQSxDQUEvQjs7OztBQVdBLElBQU1TLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUIsQ0FBQ04sS0FBRCxFQUFRSCxJQUFSO0FBQUEsU0FDNUI7QUFBTSxJQUFBLEdBQUcsRUFBRUc7QUFBWCxLQUNHLCtCQUFhSCxJQUFiLENBREgsQ0FENEI7QUFBQSxDQUF2Qjs7OztBQU1BLElBQU1VLHFCQUFxQixHQUFHLFNBQXhCQSxxQkFBd0IsQ0FBQ1AsS0FBRCxFQUFRSCxJQUFSO0FBQUEsU0FDbkM7QUFBTSxJQUFBLEdBQUcsRUFBRUcsS0FBWDtBQUFrQixJQUFBLEtBQUssRUFBRTtBQUFFSyxNQUFBQSxlQUFlLEVBQUU7QUFBbkI7QUFBekIsS0FDRywrQkFBYVIsSUFBYixDQURILENBRG1DO0FBQUEsQ0FBOUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuLy8gQ29tcG9uZW50c1xuaW1wb3J0IFdvcmRMZXhpY29uRGV0YWlscyBmcm9tICcuLi8uLi9Xb3JkTGV4aWNvbkRldGFpbHMnO1xuLy8gaGVscGVyc1xuaW1wb3J0ICogYXMgbGV4aWNvbkhlbHBlcnMgZnJvbSAnLi9sZXhpY29uSGVscGVycyc7XG5pbXBvcnQgeyByZW1vdmVNYXJrZXIgfSBmcm9tICcuL3VzZm1IZWxwZXJzJztcblxuLyoqXG4gKiBvbiB3b3JkIGNsaWNrIHNob3cgbGV4aWNvblxuICogQHBhcmFtIHtPYmplY3R9IGUgLSBjbGlja2VkIGVsZW1lbnRcbiAqIEBwYXJhbSB7T2JqZWN0fSB3b3JkXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBnZXRMZXhpY29uRGF0YVxuICogQHBhcmFtIHtGdW5jdGlvbn0gc2hvd1BvcG92ZXJcbiAqIEBwYXJhbSB7RnVuY3Rpb259IHRyYW5zbGF0ZVxuICogQHBhcmFtIHtib29sZWFufSBpc0hlYnJldyAtIGlmIHRydWUgdGhlbiB3ZSBhZGp1c3QgZm9udCBzaXplXG4gKi9cbmV4cG9ydCBjb25zdCBvbldvcmRDbGljayA9IChlLCB3b3JkLCBnZXRMZXhpY29uRGF0YSwgc2hvd1BvcG92ZXIsIHRyYW5zbGF0ZSwgaXNIZWJyZXcpID0+IHtcbiAgaWYgKHdvcmQgJiYgd29yZC5zdHJvbmcpIHtcbiAgICBsZXQgbGV4aWNvbkRhdGEgPSBsZXhpY29uSGVscGVycy5sb29rdXBTdHJvbmdzTnVtYmVycyh3b3JkLnN0cm9uZywgZ2V0TGV4aWNvbkRhdGEpO1xuICAgIGNvbnN0IHBvc2l0aW9uQ29vcmQgPSBlLnRhcmdldDtcbiAgICBjb25zdCBmb250U2l6ZSA9IGlzSGVicmV3ID8gJzEuN2VtJyA6ICcxLjJlbSc7XG4gICAgY29uc3QgUG9wb3ZlclRpdGxlID0gKFxuICAgICAgPHN0cm9uZyBzdHlsZT17eyBmb250U2l6ZSB9fT57d29yZC50ZXh0fTwvc3Ryb25nPlxuICAgICk7XG4gICAgY29uc3Qgd29yZERldGFpbHMgPSAoXG4gICAgICA8V29yZExleGljb25EZXRhaWxzIGxleGljb25EYXRhPXtsZXhpY29uRGF0YX0gd29yZE9iamVjdD17d29yZH0gdHJhbnNsYXRlPXt0cmFuc2xhdGV9XG4gICAgICAgIGlzSGVicmV3PXshIWlzSGVicmV3fS8+XG4gICAgKTtcbiAgICBzaG93UG9wb3ZlcihQb3BvdmVyVGl0bGUsIHdvcmREZXRhaWxzLCBwb3NpdGlvbkNvb3JkKTtcbiAgfVxufTtcblxuZXhwb3J0IGNvbnN0IGNyZWF0ZU5vbkNsaWNrYWJsZVNwYW4gPSAoaW5kZXgsIHBhZGRpbmdTcGFuU3R5bGUsIHBhZGRpbmcsIGlzSGlnaGxpZ2h0ZWRXb3JkLCB0ZXh0KSA9PiAoXG4gIDxzcGFuIGtleT17aW5kZXgudG9TdHJpbmcoKX0+XG4gICAgPHNwYW4gc3R5bGU9e3BhZGRpbmdTcGFuU3R5bGV9PlxuICAgICAge3BhZGRpbmd9XG4gICAgPC9zcGFuPlxuICAgIDxzcGFuIHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogaXNIaWdobGlnaHRlZFdvcmQgPyAndmFyKC0taGlnaGxpZ2h0LWNvbG9yKScgOiAnJyB9fT5cbiAgICAgIHtyZW1vdmVNYXJrZXIodGV4dCl9XG4gICAgPC9zcGFuPlxuICA8L3NwYW4+XG4pO1xuXG5leHBvcnQgY29uc3QgY3JlYXRlVGV4dFNwYW4gPSAoaW5kZXgsIHRleHQpID0+IChcbiAgPHNwYW4ga2V5PXtpbmRleH0+XG4gICAge3JlbW92ZU1hcmtlcih0ZXh0KX1cbiAgPC9zcGFuPlxuKTtcblxuZXhwb3J0IGNvbnN0IGNyZWF0ZUhpZ2hsaWdodGVkU3BhbiA9IChpbmRleCwgdGV4dCkgPT4gKFxuICA8c3BhbiBrZXk9e2luZGV4fSBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6ICd2YXIoLS1oaWdobGlnaHQtY29sb3IpJyB9fT5cbiAgICB7cmVtb3ZlTWFya2VyKHRleHQpfVxuICA8L3NwYW4+XG4pO1xuIl19