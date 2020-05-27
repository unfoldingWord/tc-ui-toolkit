'use strict';

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.verseArray = verseArray;
exports.verseString = void 0;

var _react = _interopRequireDefault(require("react"));

var _deepEqual = _interopRequireDefault(require("deep-equal"));

var stringTokenizer = _interopRequireWildcard(require("string-punctuation-tokenizer"));

var _wordAligner = require("word-aligner");

var _fontUtils = require("../../common/fontUtils");

var highlightHelpers = _interopRequireWildcard(require("./highlightHelpers"));

var _htmlElementsHelpers = require("./htmlElementsHelpers");

var _usfmHelpers = require("./usfmHelpers");

var _stringHelpers = require("./stringHelpers");

// helpers

/**
 *
 * @param {String} verseText
 * @param {Array} selections - text selections to highlight
 * @param {Function} translate
 * @param {Number} fontSize
 * @param {String} isTargetBible
 * @param {String} targetLanguageFont
 * @return {*}
 */
var verseString = function verseString(verseText, selections, translate) {
  var fontSize = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
  var isTargetBible = arguments.length > 4 ? arguments[4] : undefined;
  var targetLanguageFont = arguments.length > 5 ? arguments[5] : undefined;
  var newVerseText = (0, _usfmHelpers.removeMarker)(verseText);
  newVerseText = newVerseText.replace(/\s+/g, ' '); // if string only contains spaces then make it an empty string

  newVerseText = newVerseText.replace(/\s/g, '').length === 0 ? '' : newVerseText; // if empty string then newVerseText = place holder warning.

  if (newVerseText.length === 0) {
    newVerseText = translate('pane.missing_verse_warning');
  }

  var fontClass = '';

  if (isTargetBible) {
    fontClass = (0, _fontUtils.getFontClassName)(targetLanguageFont);
  }

  var verseTextSpans = _react["default"].createElement("span", {
    className: fontClass
  }, newVerseText);

  if (selections && selections.length > 0) {
    var _selectionArray = stringTokenizer.selectionArray(newVerseText, selections);

    verseTextSpans = [];
    verseTextSpans.length = 0;

    for (var i = 0, len = _selectionArray.length; i < len; i++) {
      var selection = _selectionArray[i];
      var index = i;
      var spanStyle = {
        backgroundColor: selection.selected ? 'var(--highlight-color)' : ''
      };

      if (fontSize) {
        spanStyle.fontSize = Math.round(fontSize) + '%';
      }

      verseTextSpans.push(_react["default"].createElement("span", {
        key: index,
        className: fontClass,
        style: spanStyle
      }, selection.text));
    }
  }

  return verseTextSpans;
};
/**
 * create verse elements from an array of verse objects
 * @param {Array|Object} verseText - verse data
 * @param {String} bibleId
 * @param {Object} contextId
 * @param {Function} getLexiconData
 * @param {Boolean} showPopover
 * @param {Function} translate
 * @param {Number} fontSize - if zero, will default to 100%
 * @return {Array} - verse elements to display
 */


exports.verseString = verseString;

function verseArray() {
  var verseText = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var bibleId = arguments.length > 1 ? arguments[1] : undefined;
  var contextId = arguments.length > 2 ? arguments[2] : undefined;
  var getLexiconData = arguments.length > 3 ? arguments[3] : undefined;
  var showPopover = arguments.length > 4 ? arguments[4] : undefined;
  var translate = arguments.length > 5 ? arguments[5] : undefined;
  var fontSize = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : 0;

  var words = _wordAligner.VerseObjectUtils.getWordListForVerse(verseText);

  var wordSpacing = '';
  var previousWord = null;
  var verseSpan = [];
  verseSpan.length = 0;

  if (verseText.verseObjects && (0, _stringHelpers.textIsEmptyInVerseObject)(verseText, bibleId)) {
    // if empty verse string.
    verseSpan.push(_react["default"].createElement("span", {
      key: translate('pane.missing_verse_warning')
    }, translate('pane.missing_verse_warning')));
  } else {
    (function () {
      var isHebrew = bibleId === 'uhb';
      var origLangBible = isHebrew || bibleId === 'ugnt';
      words = Array.isArray(words) ? words : words.verseObject;

      var _loop = function _loop(i, len) {
        var word = words[i];
        var index = i;
        var wordsArray = words;
        var nextWord = wordsArray[index + 1];

        if ((0, _stringHelpers.isWord)(word)) {
          var padding = wordSpacing;
          wordSpacing = ' '; // spacing between words

          var text = word.word || word.text;
          var isHighlightedWord = false;
          var isBetweenHighlightedWord = false;

          if (origLangBible && contextId.quote && word.text) {
            isHighlightedWord = highlightHelpers.isWordMatch(word, contextId, words, index);
            isBetweenHighlightedWord = previousWord && !(0, _deepEqual["default"])(previousWord, word) && highlightHelpers.isWordMatch(previousWord, contextId, words, index - 1) && isHighlightedWord;
          } else if (contextId.quote && word.content) {
            var highlightedDetails = highlightHelpers.getWordHighlightedDetails(contextId, previousWord, word);
            isHighlightedWord = highlightedDetails.isHighlightedWord;
            isBetweenHighlightedWord = highlightedDetails.isBetweenHighlightedWord;
          } // Save word to be used as previousWord in next word.


          previousWord = word;
          var paddingSpanStyle = {
            backgroundColor: isBetweenHighlightedWord ? 'var(--highlight-color)' : 'transparent'
          }; // TRICKY: for now we are disabling lexicon popups for any bible that is not ugnt or uhb.  The reason for
          //            this is than some bibles have different strongs format.  We are waiting on long term solution.

          if (word.strong && origLangBible) {
            // if clickable
            var spanStyle = {
              backgroundColor: isHighlightedWord ? 'var(--highlight-color)' : ''
            };

            if (fontSize) {
              spanStyle.fontSize = Math.round(fontSize) + '%';
            }

            verseSpan.push(_react["default"].createElement("span", {
              key: index.toString(),
              onClick: function onClick(e) {
                return (0, _htmlElementsHelpers.onWordClick)(e, word, getLexiconData, showPopover, translate, isHebrew);
              },
              style: {
                cursor: 'pointer'
              }
            }, _react["default"].createElement("span", {
              style: paddingSpanStyle
            }, padding), _react["default"].createElement("span", {
              style: spanStyle
            }, (0, _usfmHelpers.removeMarker)(text))));
          } else {
            verseSpan.push((0, _htmlElementsHelpers.createNonClickableSpan)(index, paddingSpanStyle, padding, isHighlightedWord, text));
          }
        } else if ((0, _stringHelpers.isNestedMilestone)(word)) {
          // if nested milestone
          var nestedMilestone = highlightHelpers.getWordsFromNestedMilestone(word, contextId, index, previousWord, wordSpacing);

          for (var j = 0, nLen = nestedMilestone.wordSpans.length; j < nLen; j++) {
            var nestedWordSpan = nestedMilestone.wordSpans[j];
            verseSpan.push(nestedWordSpan);
          }

          previousWord = nestedMilestone.nestedPreviousWord;
          wordSpacing = nestedMilestone.nestedWordSpacing;
        } else if (word.text) {
          // if not word, show punctuation, etc. but not clickable
          var _text = word.text;

          if ((0, _usfmHelpers.hasLeadingSpace)(_text)) {
            // leading spaces are not significant in html, so we need to replace with a hard space
            _text = _text.substr(1);
            highlightHelpers.addSpace(verseSpan);
          }

          var trailingSpace = (0, _usfmHelpers.hasTrailingSpace)(_text);

          if (trailingSpace && _text) {
            // trailing spaces are not significant in html, so we need to replace with a hard space
            _text = _text.substr(0, _text.length - 1);
          }

          var isUsfmTagNotSpan = word.tag && !word.endTag; // see if USFM tag does not have a matching end tag.

          if (isUsfmTagNotSpan || (0, _stringHelpers.isIsolatedLeftQuote)(_text)) {
            // if this was not just simple text marker, need to add whitespace
            highlightHelpers.addSpace(verseSpan);
          }

          wordSpacing = (0, _stringHelpers.punctuationWordSpacing)(word); // spacing before words

          if (highlightHelpers.isPunctuationHighlighted(previousWord, nextWord, contextId, words, index)) {
            verseSpan.push((0, _htmlElementsHelpers.createHighlightedSpan)(index, _text));
          } else {
            verseSpan.push((0, _htmlElementsHelpers.createTextSpan)(index, _text));
          }

          if (trailingSpace) {
            // add the trailing space after the text span
            highlightHelpers.addSpace(verseSpan);
          }
        }
      };

      for (var i = 0, len = words.length; i < len; i++) {
        _loop(i, len);
      }
    })();
  }

  return verseSpan;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9TY3JpcHR1cmVQYW5lL2hlbHBlcnMvdmVyc2VIZWxwZXJzLmpzIl0sIm5hbWVzIjpbInZlcnNlU3RyaW5nIiwidmVyc2VUZXh0Iiwic2VsZWN0aW9ucyIsInRyYW5zbGF0ZSIsImZvbnRTaXplIiwiaXNUYXJnZXRCaWJsZSIsInRhcmdldExhbmd1YWdlRm9udCIsIm5ld1ZlcnNlVGV4dCIsInJlcGxhY2UiLCJsZW5ndGgiLCJmb250Q2xhc3MiLCJ2ZXJzZVRleHRTcGFucyIsIl9zZWxlY3Rpb25BcnJheSIsInN0cmluZ1Rva2VuaXplciIsInNlbGVjdGlvbkFycmF5IiwiaSIsImxlbiIsInNlbGVjdGlvbiIsImluZGV4Iiwic3BhblN0eWxlIiwiYmFja2dyb3VuZENvbG9yIiwic2VsZWN0ZWQiLCJNYXRoIiwicm91bmQiLCJwdXNoIiwidGV4dCIsInZlcnNlQXJyYXkiLCJiaWJsZUlkIiwiY29udGV4dElkIiwiZ2V0TGV4aWNvbkRhdGEiLCJzaG93UG9wb3ZlciIsIndvcmRzIiwiVmVyc2VPYmplY3RVdGlscyIsImdldFdvcmRMaXN0Rm9yVmVyc2UiLCJ3b3JkU3BhY2luZyIsInByZXZpb3VzV29yZCIsInZlcnNlU3BhbiIsInZlcnNlT2JqZWN0cyIsImlzSGVicmV3Iiwib3JpZ0xhbmdCaWJsZSIsIkFycmF5IiwiaXNBcnJheSIsInZlcnNlT2JqZWN0Iiwid29yZCIsIndvcmRzQXJyYXkiLCJuZXh0V29yZCIsInBhZGRpbmciLCJpc0hpZ2hsaWdodGVkV29yZCIsImlzQmV0d2VlbkhpZ2hsaWdodGVkV29yZCIsInF1b3RlIiwiaGlnaGxpZ2h0SGVscGVycyIsImlzV29yZE1hdGNoIiwiY29udGVudCIsImhpZ2hsaWdodGVkRGV0YWlscyIsImdldFdvcmRIaWdobGlnaHRlZERldGFpbHMiLCJwYWRkaW5nU3BhblN0eWxlIiwic3Ryb25nIiwidG9TdHJpbmciLCJlIiwiY3Vyc29yIiwibmVzdGVkTWlsZXN0b25lIiwiZ2V0V29yZHNGcm9tTmVzdGVkTWlsZXN0b25lIiwiaiIsIm5MZW4iLCJ3b3JkU3BhbnMiLCJuZXN0ZWRXb3JkU3BhbiIsIm5lc3RlZFByZXZpb3VzV29yZCIsIm5lc3RlZFdvcmRTcGFjaW5nIiwic3Vic3RyIiwiYWRkU3BhY2UiLCJ0cmFpbGluZ1NwYWNlIiwiaXNVc2ZtVGFnTm90U3BhbiIsInRhZyIsImVuZFRhZyIsImlzUHVuY3R1YXRpb25IaWdobGlnaHRlZCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7OztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUVBOztBQUNBOztBQUNBOztBQUdBOztBQUdBOztBQVRBOztBQWNBOzs7Ozs7Ozs7O0FBVU8sSUFBTUEsV0FBVyxHQUFHLFNBQWRBLFdBQWMsQ0FBQ0MsU0FBRCxFQUFZQyxVQUFaLEVBQXdCQyxTQUF4QixFQUF1RjtBQUFBLE1BQXBEQyxRQUFvRCx1RUFBekMsQ0FBeUM7QUFBQSxNQUF0Q0MsYUFBc0M7QUFBQSxNQUF2QkMsa0JBQXVCO0FBQ2hILE1BQUlDLFlBQVksR0FBRywrQkFBYU4sU0FBYixDQUFuQjtBQUNBTSxFQUFBQSxZQUFZLEdBQUdBLFlBQVksQ0FBQ0MsT0FBYixDQUFxQixNQUFyQixFQUE2QixHQUE3QixDQUFmLENBRmdILENBR2hIOztBQUNBRCxFQUFBQSxZQUFZLEdBQUdBLFlBQVksQ0FBQ0MsT0FBYixDQUFxQixLQUFyQixFQUE0QixFQUE1QixFQUFnQ0MsTUFBaEMsS0FBMkMsQ0FBM0MsR0FBK0MsRUFBL0MsR0FBb0RGLFlBQW5FLENBSmdILENBTWhIOztBQUNBLE1BQUlBLFlBQVksQ0FBQ0UsTUFBYixLQUF3QixDQUE1QixFQUErQjtBQUM3QkYsSUFBQUEsWUFBWSxHQUFHSixTQUFTLENBQUMsNEJBQUQsQ0FBeEI7QUFDRDs7QUFFRCxNQUFJTyxTQUFTLEdBQUcsRUFBaEI7O0FBRUEsTUFBSUwsYUFBSixFQUFtQjtBQUNqQkssSUFBQUEsU0FBUyxHQUFHLGlDQUFpQkosa0JBQWpCLENBQVo7QUFDRDs7QUFFRCxNQUFJSyxjQUFj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bkQsY0FBSUYsZ0JBQWdCLElBQUksd0NBQW9COUMsS0FBcEIsQ0FBeEIsRUFBbUQ7QUFBRTtBQUNuRHlCLFlBQUFBLGdCQUFnQixDQUFDbUIsUUFBakIsQ0FBMEJqQyxTQUExQjtBQUNEOztBQUNERixVQUFBQSxXQUFXLEdBQUcsMkNBQXVCUyxJQUF2QixDQUFkLENBbkJvQixDQW1Cd0I7O0FBRTVDLGNBQUlPLGdCQUFnQixDQUFDd0Isd0JBQWpCLENBQTBDdkMsWUFBMUMsRUFBd0RVLFFBQXhELEVBQWtFakIsU0FBbEUsRUFBNkVHLEtBQTdFLEVBQW9GYixLQUFwRixDQUFKLEVBQWdHO0FBQzlGa0IsWUFBQUEsU0FBUyxDQUFDWixJQUFWLENBQWUsZ0RBQXNCTixLQUF0QixFQUE2Qk8sS0FBN0IsQ0FBZjtBQUNELFdBRkQsTUFFTztBQUNMVyxZQUFBQSxTQUFTLENBQUNaLElBQVYsQ0FBZSx5Q0FBZU4sS0FBZixFQUFzQk8sS0FBdEIsQ0FBZjtBQUNEOztBQUVELGNBQUk2QyxhQUFKLEVBQW1CO0FBQUU7QUFDbkJwQixZQUFBQSxnQkFBZ0IsQ0FBQ21CLFFBQWpCLENBQTBCakMsU0FBMUI7QUFDRDtBQUNGO0FBL0ZFOztBQUtMLFdBQUssSUFBSXJCLENBQUMsR0FBRyxDQUFSLEVBQVdDLEdBQUcsR0FBR2UsS0FBSyxDQUFDdEIsTUFBNUIsRUFBb0NNLENBQUMsR0FBR0MsR0FBeEMsRUFBNkNELENBQUMsRUFBOUMsRUFBa0Q7QUFBQSxjQUF6Q0EsQ0FBeUMsRUFBbENDLEdBQWtDO0FBMkZqRDtBQWhHSTtBQWlHTjs7QUFFRCxTQUFPb0IsU0FBUDtBQUNEIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBpc0VxdWFsIGZyb20gJ2RlZXAtZXF1YWwnO1xuaW1wb3J0ICogYXMgc3RyaW5nVG9rZW5pemVyIGZyb20gJ3N0cmluZy1wdW5jdHVhdGlvbi10b2tlbml6ZXInO1xuaW1wb3J0IHsgVmVyc2VPYmplY3RVdGlscyB9IGZyb20gJ3dvcmQtYWxpZ25lcic7XG4vLyBoZWxwZXJzXG5pbXBvcnQgeyBnZXRGb250Q2xhc3NOYW1lIH0gZnJvbSAnLi4vLi4vY29tbW9uL2ZvbnRVdGlscyc7XG5pbXBvcnQgKiBhcyBoaWdobGlnaHRIZWxwZXJzIGZyb20gJy4vaGlnaGxpZ2h0SGVscGVycyc7XG5pbXBvcnQge1xuICBvbldvcmRDbGljaywgY3JlYXRlTm9uQ2xpY2thYmxlU3BhbiwgY3JlYXRlVGV4dFNwYW4sIGNyZWF0ZUhpZ2hsaWdodGVkU3Bhbixcbn0gZnJvbSAnLi9odG1sRWxlbWVudHNIZWxwZXJzJztcbmltcG9ydCB7XG4gIHJlbW92ZU1hcmtlciwgaGFzTGVhZGluZ1NwYWNlLCBoYXNUcmFpbGluZ1NwYWNlLFxufSBmcm9tICcuL3VzZm1IZWxwZXJzJztcbmltcG9ydCB7XG4gIGlzV29yZCwgaXNOZXN0ZWRNaWxlc3RvbmUsIHB1bmN0dWF0aW9uV29yZFNwYWNpbmcsIHRleHRJc0VtcHR5SW5WZXJzZU9iamVjdCxcbiAgaXNJc29sYXRlZExlZnRRdW90ZSxcbn0gZnJvbSAnLi9zdHJpbmdIZWxwZXJzJztcblxuLyoqXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHZlcnNlVGV4dFxuICogQHBhcmFtIHtBcnJheX0gc2VsZWN0aW9ucyAtIHRleHQgc2VsZWN0aW9ucyB0byBoaWdobGlnaHRcbiAqIEBwYXJhbSB7RnVuY3Rpb259IHRyYW5zbGF0ZVxuICogQHBhcmFtIHtOdW1iZXJ9IGZvbnRTaXplXG4gKiBAcGFyYW0ge1N0cmluZ30gaXNUYXJnZXRCaWJsZVxuICogQHBhcmFtIHtTdHJpbmd9IHRhcmdldExhbmd1YWdlRm9udFxuICogQHJldHVybiB7Kn1cbiAqL1xuZXhwb3J0IGNvbnN0IHZlcnNlU3RyaW5nID0gKHZlcnNlVGV4dCwgc2VsZWN0aW9ucywgdHJhbnNsYXRlLCBmb250U2l6ZSA9IDAsIGlzVGFyZ2V0QmlibGUsIHRhcmdldExhbmd1YWdlRm9udCkgPT4ge1xuICBsZXQgbmV3VmVyc2VUZXh0ID0gcmVtb3ZlTWFya2VyKHZlcnNlVGV4dCk7XG4gIG5ld1ZlcnNlVGV4dCA9IG5ld1ZlcnNlVGV4dC5yZXBsYWNlKC9cXHMrL2csICcgJyk7XG4gIC8vIGlmIHN0cmluZyBvbmx5IGNvbnRhaW5zIHNwYWNlcyB0aGVuIG1ha2UgaXQgYW4gZW1wdHkgc3RyaW5nXG4gIG5ld1ZlcnNlVGV4dCA9IG5ld1ZlcnNlVGV4dC5yZXBsYWNlKC9cXHMvZywgJycpLmxlbmd0aCA9PT0gMCA/ICcnIDogbmV3VmVyc2VUZXh0O1xuXG4gIC8vIGlmIGVtcHR5IHN0cmluZyB0aGVuIG5ld1ZlcnNlVGV4dCA9IHBsYWNlIGhvbGRlciB3YXJuaW5nLlxuICBpZiAobmV3VmVyc2VUZXh0Lmxlbmd0aCA9PT0gMCkge1xuICAgIG5ld1ZlcnNlVGV4dCA9IHRyYW5zbGF0ZSgncGFuZS5taXNzaW5nX3ZlcnNlX3dhcm5pbmcnKTtcbiAgfVxuXG4gIGxldCBmb250Q2xhc3MgPSAnJztcblxuICBpZiAoaXNUYXJnZXRCaWJsZSkge1xuICAgIGZvbnRDbGFzcyA9IGdldEZvbnRDbGFzc05hbWUodGFyZ2V0TGFuZ3VhZ2VGb250KTtcbiAgfVxuXG4gIGxldCB2ZXJzZVRleHRTcGFucyA9IDxzcGFuIGNsYXNzTmFtZT17Zm9udENsYXNzfT57bmV3VmVyc2VUZXh0fTwvc3Bhbj47XG5cbiAgaWYgKHNlbGVjdGlvbnMgJiYgc2VsZWN0aW9ucy5sZW5ndGggPiAwKSB7XG4gICAgY29uc3QgX3NlbGVjdGlvbkFycmF5ID0gc3RyaW5nVG9rZW5pemVyLnNlbGVjdGlvbkFycmF5KG5ld1ZlcnNlVGV4dCwgc2VsZWN0aW9ucyk7XG4gICAgdmVyc2VUZXh0U3BhbnMgPSBbXTtcbiAgICB2ZXJzZVRleHRTcGFucy5sZW5ndGggPSAwO1xuXG4gICAgZm9yIChsZXQgaSA9IDAsIGxlbiA9IF9zZWxlY3Rpb25BcnJheS5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgY29uc3Qgc2VsZWN0aW9uID0gX3NlbGVjdGlvbkFycmF5W2ldO1xuICAgICAgY29uc3QgaW5kZXggPSBpO1xuICAgICAgY29uc3Qgc3BhblN0eWxlID0geyBiYWNrZ3JvdW5kQ29sb3I6IHNlbGVjdGlvbi5zZWxlY3RlZCA/ICd2YXIoLS1oaWdobGlnaHQtY29sb3IpJyA6ICcnIH07XG5cbiAgICAgIGlmIChmb250U2l6ZSkge1xuICAgICAgICBzcGFuU3R5bGUuZm9udFNpemUgPSBNYXRoLnJvdW5kKGZvbnRTaXplKSArICclJztcbiAgICAgIH1cbiAgICAgIHZlcnNlVGV4dFNwYW5zLnB1c2goXG4gICAgICAgIDxzcGFuIGtleT17aW5kZXh9IGNsYXNzTmFtZT17Zm9udENsYXNzfSBzdHlsZT17c3BhblN0eWxlfT5cbiAgICAgICAgICB7c2VsZWN0aW9uLnRleHR9XG4gICAgICAgIDwvc3Bhbj4sXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB2ZXJzZVRleHRTcGFucztcbn07XG5cbi8qKlxuICogY3JlYXRlIHZlcnNlIGVsZW1lbnRzIGZyb20gYW4gYXJyYXkgb2YgdmVyc2Ugb2JqZWN0c1xuICogQHBhcmFtIHtBcnJheXxPYmplY3R9IHZlcnNlVGV4dCAtIHZlcnNlIGRhdGFcbiAqIEBwYXJhbSB7U3RyaW5nfSBiaWJsZUlkXG4gKiBAcGFyYW0ge09iamVjdH0gY29udGV4dElkXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBnZXRMZXhpY29uRGF0YVxuICogQHBhcmFtIHtCb29sZWFufSBzaG93UG9wb3ZlclxuICogQHBhcmFtIHtGdW5jdGlvbn0gdHJhbnNsYXRlXG4gKiBAcGFyYW0ge051bWJlcn0gZm9udFNpemUgLSBpZiB6ZXJvLCB3aWxsIGRlZmF1bHQgdG8gMTAwJVxuICogQHJldHVybiB7QXJyYXl9IC0gdmVyc2UgZWxlbWVudHMgdG8gZGlzcGxheVxuICovXG5leHBvcnQgZnVuY3Rpb24gdmVyc2VBcnJheSh2ZXJzZVRleHQgPSBbXSwgYmlibGVJZCwgY29udGV4dElkLCBnZXRMZXhpY29uRGF0YSwgc2hvd1BvcG92ZXIsIHRyYW5zbGF0ZSwgZm9udFNpemUgPSAwKSB7XG4gIGxldCB3b3JkcyA9IFZlcnNlT2JqZWN0VXRpbHMuZ2V0V29yZExpc3RGb3JWZXJzZSh2ZXJzZVRleHQpO1xuICBsZXQgd29yZFNwYWNpbmcgPSAnJztcbiAgbGV0IHByZXZpb3VzV29yZCA9IG51bGw7XG4gIGNvbnN0IHZlcnNlU3BhbiA9IFtdO1xuICB2ZXJzZVNwYW4ubGVuZ3RoID0gMDtcblxuICBpZiAodmVyc2VUZXh0LnZlcnNlT2JqZWN0cyAmJiB0ZXh0SXNFbXB0eUluVmVyc2VPYmplY3QodmVyc2VUZXh0LCBiaWJsZUlkKSkgeyAvLyBpZiBlbXB0eSB2ZXJzZSBzdHJpbmcuXG4gICAgdmVyc2VTcGFuLnB1c2goXG4gICAgICA8c3BhbiBrZXk9e3RyYW5zbGF0ZSgncGFuZS5taXNzaW5nX3ZlcnNlX3dhcm5pbmcnKX0+XG4gICAgICAgIHt0cmFuc2xhdGUoJ3BhbmUubWlzc2luZ192ZXJzZV93YXJuaW5nJyl9XG4gICAgICA8L3NwYW4+LFxuICAgICk7XG4gIH0gZWxzZSB7XG4gICAgY29uc3QgaXNIZWJyZXcgPSAoYmlibGVJZCA9PT0gJ3VoYicpO1xuICAgIGNvbnN0IG9yaWdMYW5nQmlibGUgPSBpc0hlYnJldyB8fCBiaWJsZUlkID09PSAndWdudCc7XG4gICAgd29yZHMgPSBBcnJheS5pc0FycmF5KHdvcmRzKSA/IHdvcmRzIDogd29yZHMudmVyc2VPYmplY3Q7XG5cbiAgICBmb3IgKGxldCBpID0gMCwgbGVuID0gd29yZHMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgIGNvbnN0IHdvcmQgPSB3b3Jkc1tpXTtcbiAgICAgIGNvbnN0IGluZGV4ID0gaTtcbiAgICAgIGNvbnN0IHdvcmRzQXJyYXkgPSB3b3JkcztcbiAgICAgIGNvbnN0IG5leHRXb3JkID0gd29yZHNBcnJheVtpbmRleCArIDFdO1xuXG4gICAgICBpZiAoaXNXb3JkKHdvcmQpKSB7XG4gICAgICAgIGNvbnN0IHBhZGRpbmcgPSB3b3JkU3BhY2luZztcbiAgICAgICAgd29yZFNwYWNpbmcgPSAnICc7IC8vIHNwYWNpbmcgYmV0d2VlbiB3b3Jkc1xuICAgICAgICBjb25zdCB0ZXh0ID0gKHdvcmQud29yZCB8fCB3b3JkLnRleHQpO1xuICAgICAgICBsZXQgaXNIaWdobGlnaHRlZFdvcmQgPSBmYWxzZTtcbiAgICAgICAgbGV0IGlzQmV0d2VlbkhpZ2hsaWdodGVkV29yZCA9IGZhbHNlO1xuXG4gICAgICAgIGlmIChvcmlnTGFuZ0JpYmxlICYmIGNvbnRleHRJZC5xdW90ZSAmJiB3b3JkLnRleHQpIHtcbiAgICAgICAgICBpc0hpZ2hsaWdodGVkV29yZCA9IGhpZ2hsaWdodEhlbHBlcnMuaXNXb3JkTWF0Y2god29yZCwgY29udGV4dElkLCB3b3JkcywgaW5kZXgpO1xuICAgICAgICAgIGlzQmV0d2VlbkhpZ2hsaWdodGVkV29yZCA9IHByZXZpb3VzV29yZCAmJiAhaXNFcXVhbChwcmV2aW91c1dvcmQsIHdvcmQpICYmXG4gICAgICAgICAgICBoaWdobGlnaHRIZWxwZXJzLmlzV29yZE1hdGNoKHByZXZpb3VzV29yZCwgY29udGV4dElkLCB3b3JkcywgaW5kZXggLSAxKSAmJiBpc0hpZ2hsaWdodGVkV29yZDtcbiAgICAgICAgfSBlbHNlIGlmIChjb250ZXh0SWQucXVvdGUgJiYgd29yZC5jb250ZW50KSB7XG4gICAgICAgICAgY29uc3QgaGlnaGxpZ2h0ZWREZXRhaWxzID0gaGlnaGxpZ2h0SGVscGVycy5nZXRXb3JkSGlnaGxpZ2h0ZWREZXRhaWxzKGNvbnRleHRJZCwgcHJldmlvdXNXb3JkLCB3b3JkKTtcbiAgICAgICAgICBpc0hpZ2hsaWdodGVkV29yZCA9IGhpZ2hsaWdodGVkRGV0YWlscy5pc0hpZ2hsaWdodGVkV29yZDtcbiAgICAgICAgICBpc0JldHdlZW5IaWdobGlnaHRlZFdvcmQgPSBoaWdobGlnaHRlZERldGFpbHMuaXNCZXR3ZWVuSGlnaGxpZ2h0ZWRXb3JkO1xuICAgICAgICB9XG4gICAgICAgIC8vIFNhdmUgd29yZCB0byBiZSB1c2VkIGFzIHByZXZpb3VzV29yZCBpbiBuZXh0IHdvcmQuXG4gICAgICAgIHByZXZpb3VzV29yZCA9IHdvcmQ7XG4gICAgICAgIGNvbnN0IHBhZGRpbmdTcGFuU3R5bGUgPSB7IGJhY2tncm91bmRDb2xvcjogaXNCZXR3ZWVuSGlnaGxpZ2h0ZWRXb3JkID8gJ3ZhcigtLWhpZ2hsaWdodC1jb2xvciknIDogJ3RyYW5zcGFyZW50JyB9O1xuXG4gICAgICAgIC8vIFRSSUNLWTogZm9yIG5vdyB3ZSBhcmUgZGlzYWJsaW5nIGxleGljb24gcG9wdXBzIGZvciBhbnkgYmlibGUgdGhhdCBpcyBub3QgdWdudCBvciB1aGIuICBUaGUgcmVhc29uIGZvclxuICAgICAgICAvLyAgICAgICAgICAgIHRoaXMgaXMgdGhhbiBzb21lIGJpYmxlcyBoYXZlIGRpZmZlcmVudCBzdHJvbmdzIGZvcm1hdC4gIFdlIGFyZSB3YWl0aW5nIG9uIGxvbmcgdGVybSBzb2x1dGlvbi5cbiAgICAgICAgaWYgKHdvcmQuc3Ryb25nICYmIG9yaWdMYW5nQmlibGUpIHsgLy8gaWYgY2xpY2thYmxlXG4gICAgICAgICAgY29uc3Qgc3BhblN0eWxlID0geyBiYWNrZ3JvdW5kQ29sb3I6IGlzSGlnaGxpZ2h0ZWRXb3JkID8gJ3ZhcigtLWhpZ2hsaWdodC1jb2xvciknIDogJycgfTtcblxuICAgICAgICAgIGlmIChmb250U2l6ZSkge1xuICAgICAgICAgICAgc3BhblN0eWxlLmZvbnRTaXplID0gTWF0aC5yb3VuZChmb250U2l6ZSkgKyAnJSc7XG4gICAgICAgICAgfVxuICAgICAgICAgIHZlcnNlU3Bhbi5wdXNoKFxuICAgICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgICAga2V5PXtpbmRleC50b1N0cmluZygpfVxuICAgICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4gb25Xb3JkQ2xpY2soZSwgd29yZCwgZ2V0TGV4aWNvbkRhdGEsIHNob3dQb3BvdmVyLCB0cmFuc2xhdGUsIGlzSGVicmV3KX1cbiAgICAgICAgICAgICAgc3R5bGU9e3sgY3Vyc29yOiAncG9pbnRlcicgfX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3BhZGRpbmdTcGFuU3R5bGV9PlxuICAgICAgICAgICAgICAgIHtwYWRkaW5nfVxuICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXtzcGFuU3R5bGV9PlxuICAgICAgICAgICAgICAgIHtyZW1vdmVNYXJrZXIodGV4dCl9XG4gICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgIDwvc3Bhbj4sXG4gICAgICAgICAgKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB2ZXJzZVNwYW4ucHVzaChjcmVhdGVOb25DbGlja2FibGVTcGFuKGluZGV4LCBwYWRkaW5nU3BhblN0eWxlLCBwYWRkaW5nLCBpc0hpZ2hsaWdodGVkV29yZCwgdGV4dCkpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKGlzTmVzdGVkTWlsZXN0b25lKHdvcmQpKSB7IC8vIGlmIG5lc3RlZCBtaWxlc3RvbmVcbiAgICAgICAgY29uc3QgbmVzdGVkTWlsZXN0b25lID0gaGlnaGxpZ2h0SGVscGVycy5nZXRXb3Jkc0Zyb21OZXN0ZWRNaWxlc3RvbmUod29yZCwgY29udGV4dElkLCBpbmRleCwgcHJldmlvdXNXb3JkLCB3b3JkU3BhY2luZyk7XG5cbiAgICAgICAgZm9yIChsZXQgaiA9IDAsIG5MZW4gPSBuZXN0ZWRNaWxlc3RvbmUud29yZFNwYW5zLmxlbmd0aDsgaiA8IG5MZW47IGorKykge1xuICAgICAgICAgIGNvbnN0IG5lc3RlZFdvcmRTcGFuID0gbmVzdGVkTWlsZXN0b25lLndvcmRTcGFuc1tqXTtcbiAgICAgICAgICB2ZXJzZVNwYW4ucHVzaChuZXN0ZWRXb3JkU3Bhbik7XG4gICAgICAgIH1cbiAgICAgICAgcHJldmlvdXNXb3JkID0gbmVzdGVkTWlsZXN0b25lLm5lc3RlZFByZXZpb3VzV29yZDtcbiAgICAgICAgd29yZFNwYWNpbmcgPSBuZXN0ZWRNaWxlc3RvbmUubmVzdGVkV29yZFNwYWNpbmc7XG4gICAgICB9IGVsc2UgaWYgKHdvcmQudGV4dCkgeyAvLyBpZiBub3Qgd29yZCwgc2hvdyBwdW5jdHVhdGlvbiwgZXRjLiBidXQgbm90IGNsaWNrYWJsZVxuICAgICAgICBsZXQgdGV4dCA9IHdvcmQudGV4dDtcblxuICAgICAgICBpZiAoaGFzTGVhZGluZ1NwYWNlKHRleHQpKSB7IC8vIGxlYWRpbmcgc3BhY2VzIGFyZSBub3Qgc2lnbmlmaWNhbnQgaW4gaHRtbCwgc28gd2UgbmVlZCB0byByZXBsYWNlIHdpdGggYSBoYXJkIHNwYWNlXG4gICAgICAgICAgdGV4dCA9IHRleHQuc3Vic3RyKDEpO1xuICAgICAgICAgIGhpZ2hsaWdodEhlbHBlcnMuYWRkU3BhY2UodmVyc2VTcGFuKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHRyYWlsaW5nU3BhY2UgPSBoYXNUcmFpbGluZ1NwYWNlKHRleHQpO1xuXG4gICAgICAgIGlmICh0cmFpbGluZ1NwYWNlICYmIHRleHQpIHsgLy8gdHJhaWxpbmcgc3BhY2VzIGFyZSBub3Qgc2lnbmlmaWNhbnQgaW4gaHRtbCwgc28gd2UgbmVlZCB0byByZXBsYWNlIHdpdGggYSBoYXJkIHNwYWNlXG4gICAgICAgICAgdGV4dCA9IHRleHQuc3Vic3RyKDAsIHRleHQubGVuZ3RoIC0gMSk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBpc1VzZm1UYWdOb3RTcGFuID0gd29yZC50YWcgJiYgIXdvcmQuZW5kVGFnOyAvLyBzZWUgaWYgVVNGTSB0YWcgZG9lcyBub3QgaGF2ZSBhIG1hdGNoaW5nIGVuZCB0YWcuXG5cbiAgICAgICAgaWYgKGlzVXNmbVRhZ05vdFNwYW4gfHwgaXNJc29sYXRlZExlZnRRdW90ZSh0ZXh0KSkgeyAvLyBpZiB0aGlzIHdhcyBub3QganVzdCBzaW1wbGUgdGV4dCBtYXJrZXIsIG5lZWQgdG8gYWRkIHdoaXRlc3BhY2VcbiAgICAgICAgICBoaWdobGlnaHRIZWxwZXJzLmFkZFNwYWNlKHZlcnNlU3Bhbik7XG4gICAgICAgIH1cbiAgICAgICAgd29yZFNwYWNpbmcgPSBwdW5jdHVhdGlvbldvcmRTcGFjaW5nKHdvcmQpOyAvLyBzcGFjaW5nIGJlZm9yZSB3b3Jkc1xuXG4gICAgICAgIGlmIChoaWdobGlnaHRIZWxwZXJzLmlzUHVuY3R1YXRpb25IaWdobGlnaHRlZChwcmV2aW91c1dvcmQsIG5leHRXb3JkLCBjb250ZXh0SWQsIHdvcmRzLCBpbmRleCkpIHtcbiAgICAgICAgICB2ZXJzZVNwYW4ucHVzaChjcmVhdGVIaWdobGlnaHRlZFNwYW4oaW5kZXgsIHRleHQpKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB2ZXJzZVNwYW4ucHVzaChjcmVhdGVUZXh0U3BhbihpbmRleCwgdGV4dCkpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRyYWlsaW5nU3BhY2UpIHsgLy8gYWRkIHRoZSB0cmFpbGluZyBzcGFjZSBhZnRlciB0aGUgdGV4dCBzcGFuXG4gICAgICAgICAgaGlnaGxpZ2h0SGVscGVycy5hZGRTcGFjZSh2ZXJzZVNwYW4pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHZlcnNlU3Bhbjtcbn1cbiJdfQ==