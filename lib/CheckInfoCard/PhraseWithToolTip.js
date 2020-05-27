"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _marked = _interopRequireDefault(require("marked"));

var _helpers = require("./helpers");

/* eslint-disable no-return-assign */

/**
 * Attaches click listeners to links in the ref's text
 * @param ref
 * @param onClick
 */
var useLinkEffect = function useLinkEffect(ref, onClick) {
  (0, _react.useEffect)(function () {
    // find anchors in text
    var anchors = ref.current ? ref.current.getElementsByTagName("a") : []; // add click handler

    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      var _loop = function _loop() {
        var a = _step.value;

        a.onclick = function (event) {
          event.preventDefault();

          if (typeof onClick === 'function') {
            // give the link path and title to the handler.
            onClick(a.href, a.innerHTML);
          }
        };
      };

      for (var _iterator = anchors[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        _loop();
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
  }, [ref, onClick]);
};

function PhraseWithToolTip(_ref) {
  var phrase = _ref.phrase,
      getScriptureFromReference = _ref.getScriptureFromReference,
      onClickLink = _ref.onClickLink;
  var phraseEl = (0, _react.useRef)(null);
  var toolTippedPhraseEl = (0, _react.useRef)(null);
  useLinkEffect(phraseEl, onClickLink);
  useLinkEffect(toolTippedPhraseEl, onClickLink);
  var scriptureRef;
  var tooltipRef;
  var rcMatch = phrase.match(/\[([^\]]+)\]\s*\(rc:\/\/([\w-]+)\/([\w-]+)\/book\/(\w+)\/(\d+)\/(\d+)\)/) || [];
  var showTooltip = rcMatch.length > 0;

  if (showTooltip) {
    var _rcMatch = (0, _slicedToArray2["default"])(rcMatch, 7),
        wholeMatch = _rcMatch[0],
        referenceText = _rcMatch[1],
        lang = _rcMatch[2],
        id = _rcMatch[3],
        book = _rcMatch[4],
        chapter = _rcMatch[5],
        verse = _rcMatch[6];

    var _phrase$split = phrase.split(wholeMatch),
        _phrase$split2 = (0, _slicedToArray2["default"])(_phrase$split, 2),
        preReference = _phrase$split2[0],
        postReference = _phrase$split2[1];

    var tooltipLabel = getScriptureFromReference(lang, id, book, chapter, verse);
    return _react["default"].createElement("div", null, _react["default"].createElement("span", {
      dangerouslySetInnerHTML: {
        __html: preReference
      }
    }), _react["default"].createElement("span", {
      onMouseEnter: function onMouseEnter() {
        var _getOffset = (0, _helpers.getOffset)(scriptureRef),
            top = _getOffset.top,
            left = _getOffset.left;

        tooltipRef.style.top = "".concat(top, "px");
        tooltipRef.style.left = "".concat(left, "px");
        tooltipRef.style.width = "".concat(scriptureRef.offsetWidth, "px");
        tooltipRef.style.height = "".concat(scriptureRef.offsetHeight, "px");
      },
      style: {
        position: 'relative'
      }
    }, _react["default"].createElement("div", {
      ref: function ref(_ref2) {
        return tooltipRef = _ref2;
      },
      "aria-label": tooltipLabel,
      className: "hint--top hint--medium",
      style: {
        position: 'fixed'
      }
    }), _react["default"].createElement("span", {
      style: {
        whiteSpace: 'nowrap',
        textDecoration: 'underline'
      },
      ref: function ref(_ref3) {
        return scriptureRef = _ref3;
      }
    }, referenceText)), _react["default"].createElement("span", {
      ref: toolTippedPhraseEl,
      style: {
        color: '#fff'
      },
      dangerouslySetInnerHTML: {
        __html: (0, _marked["default"])(postReference)
      }
    }));
  } else {
    return _react["default"].createElement("div", {
      ref: phraseEl,
      style: {
        color: '#fff'
      },
      dangerouslySetInnerHTML: {
        __html: (0, _marked["default"])(phrase)
      }
    });
  }
}

var _default = PhraseWithToolTip;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9DaGVja0luZm9DYXJkL1BocmFzZVdpdGhUb29sVGlwLmpzIl0sIm5hbWVzIjpbInVzZUxpbmtFZmZlY3QiLCJyZWYiLCJvbkNsaWNrIiwiYW5jaG9ycyIsImN1cnJlbnQiLCJnZXRFbGVtZW50c0J5VGFnTmFtZSIsImEiLCJvbmNsaWNrIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImhyZWYiLCJpbm5lckhUTUwiLCJQaHJhc2VXaXRoVG9vbFRpcCIsInBocmFzZSIsImdldFNjcmlwdHVyZUZyb21SZWZlcmVuY2UiLCJvbkNsaWNrTGluayIsInBocmFzZUVsIiwidG9vbFRpcHBlZFBocmFzZUVsIiwic2NyaXB0dXJlUmVmIiwidG9vbHRpcFJlZiIsInJjTWF0Y2giLCJtYXRjaCIsInNob3dUb29sdGlwIiwibGVuZ3RoIiwid2hvbGVNYXRjaCIsInJlZmVyZW5jZVRleHQiLCJsYW5nIiwiaWQiLCJib29rIiwiY2hhcHRlciIsInZlcnNlIiwic3BsaXQiLCJwcmVSZWZlcmVuY2UiLCJwb3N0UmVmZXJlbmNlIiwidG9vbHRpcExhYmVsIiwiX19odG1sIiwidG9wIiwibGVmdCIsInN0eWxlIiwid2lkdGgiLCJvZmZzZXRXaWR0aCIsImhlaWdodCIsIm9mZnNldEhlaWdodCIsInBvc2l0aW9uIiwid2hpdGVTcGFjZSIsInRleHREZWNvcmF0aW9uIiwiY29sb3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFDQTs7QUFDQTs7QUFDQTs7QUFIQTs7QUFLQTs7Ozs7QUFLQSxJQUFNQSxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLENBQUNDLEdBQUQsRUFBTUMsT0FBTixFQUFrQjtBQUN0Qyx3QkFBVSxZQUFNO0FBQ2Q7QUFDQSxRQUFNQyxPQUFPLEdBQUdGLEdBQUcsQ0FBQ0csT0FBSixHQUFjSCxHQUFHLENBQUNHLE9BQUosQ0FBWUMsb0JBQVosS0FBZCxHQUFzRCxFQUF0RSxDQUZjLENBSWQ7O0FBSmM7QUFBQTtBQUFBOztBQUFBO0FBQUE7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LEtBQUssRUFBRTtBQUFFUyxRQUFBQSxRQUFRLEVBQUU7QUFBWjtBQUhULE1BUEYsRUFXRTtBQUFNLE1BQUEsS0FBSyxFQUFFO0FBQ1hDLFFBQUFBLFVBQVUsRUFBRSxRQUREO0FBRVhDLFFBQUFBLGNBQWMsRUFBRTtBQUZMLE9BQWI7QUFHRyxNQUFBLEdBQUcsRUFBRSxhQUFDNUMsS0FBRDtBQUFBLGVBQVNpQixZQUFZLEdBQUdqQixLQUF4QjtBQUFBO0FBSFIsT0FJR3dCLGFBSkgsQ0FYRixDQUZGLEVBb0JFO0FBQU0sTUFBQSxHQUFHLEVBQUVSLGtCQUFYO0FBQStCLE1BQUEsS0FBSyxFQUFFO0FBQUU2QixRQUFBQSxLQUFLLEVBQUU7QUFBVCxPQUF0QztBQUNFLE1BQUEsdUJBQXVCLEVBQUU7QUFBRVgsUUFBQUEsTUFBTSxFQUFFLHdCQUFPRixhQUFQO0FBQVY7QUFEM0IsTUFwQkYsQ0FERjtBQXlCRCxHQTdCRCxNQTZCTztBQUNMLFdBQ0U7QUFBSyxNQUFBLEdBQUcsRUFBRWpCLFFBQVY7QUFBb0IsTUFBQSxLQUFLLEVBQUU7QUFBRThCLFFBQUFBLEtBQUssRUFBRTtBQUFULE9BQTNCO0FBQThDLE1BQUEsdUJBQXVCLEVBQUU7QUFBRVgsUUFBQUEsTUFBTSxFQUFFLHdCQUFPdEIsTUFBUDtBQUFWO0FBQXZFLE1BREY7QUFHRDtBQUNGOztlQUVjRCxpQiIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIG5vLXJldHVybi1hc3NpZ24gKi9cbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBtYXJrZWQgZnJvbSAnbWFya2VkJztcbmltcG9ydCB7IGdldE9mZnNldCB9IGZyb20gJy4vaGVscGVycyc7XG5cbi8qKlxuICogQXR0YWNoZXMgY2xpY2sgbGlzdGVuZXJzIHRvIGxpbmtzIGluIHRoZSByZWYncyB0ZXh0XG4gKiBAcGFyYW0gcmVmXG4gKiBAcGFyYW0gb25DbGlja1xuICovXG5jb25zdCB1c2VMaW5rRWZmZWN0ID0gKHJlZiwgb25DbGljaykgPT4ge1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIC8vIGZpbmQgYW5jaG9ycyBpbiB0ZXh0XG4gICAgY29uc3QgYW5jaG9ycyA9IHJlZi5jdXJyZW50ID8gcmVmLmN1cnJlbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoYGFgKSA6IFtdO1xuXG4gICAgLy8gYWRkIGNsaWNrIGhhbmRsZXJcbiAgICBmb3IgKGNvbnN0IGEgb2YgYW5jaG9ycykge1xuICAgICAgYS5vbmNsaWNrID0gKGV2ZW50KSA9PiB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgaWYgKHR5cGVvZiBvbkNsaWNrID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgLy8gZ2l2ZSB0aGUgbGluayBwYXRoIGFuZCB0aXRsZSB0byB0aGUgaGFuZGxlci5cbiAgICAgICAgICBvbkNsaWNrKGEuaHJlZiwgYS5pbm5lckhUTUwpO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgIH1cbiAgfSwgW3JlZiwgb25DbGlja10pO1xufTtcblxuZnVuY3Rpb24gUGhyYXNlV2l0aFRvb2xUaXAoe1xuICBwaHJhc2UsIGdldFNjcmlwdHVyZUZyb21SZWZlcmVuY2UsIG9uQ2xpY2tMaW5rLFxufSkge1xuICBjb25zdCBwaHJhc2VFbCA9IHVzZVJlZihudWxsKTtcbiAgY29uc3QgdG9vbFRpcHBlZFBocmFzZUVsID0gdXNlUmVmKG51bGwpO1xuXG4gIHVzZUxpbmtFZmZlY3QocGhyYXNlRWwsIG9uQ2xpY2tMaW5rKTtcbiAgdXNlTGlua0VmZmVjdCh0b29sVGlwcGVkUGhyYXNlRWwsIG9uQ2xpY2tMaW5rKTtcblxuICBsZXQgc2NyaXB0dXJlUmVmO1xuICBsZXQgdG9vbHRpcFJlZjtcbiAgY29uc3QgcmNNYXRjaCA9IHBocmFzZS5tYXRjaCgvXFxbKFteXFxdXSspXFxdXFxzKlxcKHJjOlxcL1xcLyhbXFx3LV0rKVxcLyhbXFx3LV0rKVxcL2Jvb2tcXC8oXFx3KylcXC8oXFxkKylcXC8oXFxkKylcXCkvKSB8fCBbXTtcbiAgY29uc3Qgc2hvd1Rvb2x0aXAgPSByY01hdGNoLmxlbmd0aCA+IDA7XG5cbiAgaWYgKHNob3dUb29sdGlwKSB7XG4gICAgY29uc3QgW3dob2xlTWF0Y2gsIHJlZmVyZW5jZVRleHQsIGxhbmcsIGlkLCBib29rLCBjaGFwdGVyLCB2ZXJzZV0gPSByY01hdGNoO1xuICAgIGNvbnN0IFtwcmVSZWZlcmVuY2UsIHBvc3RSZWZlcmVuY2VdID0gcGhyYXNlLnNwbGl0KHdob2xlTWF0Y2gpO1xuICAgIGNvbnN0IHRvb2x0aXBMYWJlbCA9IGdldFNjcmlwdHVyZUZyb21SZWZlcmVuY2UobGFuZywgaWQsIGJvb2ssIGNoYXB0ZXIsIHZlcnNlKTtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPHNwYW4gZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiBwcmVSZWZlcmVuY2UgfX0vPlxuICAgICAgICA8c3BhbiBvbk1vdXNlRW50ZXI9eygpID0+IHtcbiAgICAgICAgICBjb25zdCB7IHRvcCwgbGVmdCB9ID0gZ2V0T2Zmc2V0KHNjcmlwdHVyZVJlZik7XG4gICAgICAgICAgdG9vbHRpcFJlZi5zdHlsZS50b3AgPSBgJHt0b3B9cHhgO1xuICAgICAgICAgIHRvb2x0aXBSZWYuc3R5bGUubGVmdCA9IGAke2xlZnR9cHhgO1xuICAgICAgICAgIHRvb2x0aXBSZWYuc3R5bGUud2lkdGggPSBgJHtzY3JpcHR1cmVSZWYub2Zmc2V0V2lkdGh9cHhgO1xuICAgICAgICAgIHRvb2x0aXBSZWYuc3R5bGUuaGVpZ2h0ID0gYCR7c2NyaXB0dXJlUmVmLm9mZnNldEhlaWdodH1weGA7XG4gICAgICAgIH19IHN0eWxlPXt7IHBvc2l0aW9uOiAncmVsYXRpdmUnIH19PlxuICAgICAgICAgIDxkaXYgcmVmPXsocmVmKSA9PiB0b29sdGlwUmVmID0gcmVmfVxuICAgICAgICAgICAgYXJpYS1sYWJlbD17dG9vbHRpcExhYmVsfVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiaGludC0tdG9wIGhpbnQtLW1lZGl1bVwiXG4gICAgICAgICAgICBzdHlsZT17eyBwb3NpdGlvbjogJ2ZpeGVkJyB9fS8+XG4gICAgICAgICAgPHNwYW4gc3R5bGU9e3tcbiAgICAgICAgICAgIHdoaXRlU3BhY2U6ICdub3dyYXAnLFxuICAgICAgICAgICAgdGV4dERlY29yYXRpb246ICd1bmRlcmxpbmUnLFxuICAgICAgICAgIH19IHJlZj17KHJlZikgPT4gc2NyaXB0dXJlUmVmID0gcmVmfT5cbiAgICAgICAgICAgIHtyZWZlcmVuY2VUZXh0fVxuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPC9zcGFuPlxuICAgICAgICA8c3BhbiByZWY9e3Rvb2xUaXBwZWRQaHJhc2VFbH0gc3R5bGU9e3sgY29sb3I6ICcjZmZmJyB9fVxuICAgICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogbWFya2VkKHBvc3RSZWZlcmVuY2UpIH19Lz5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgcmVmPXtwaHJhc2VFbH0gc3R5bGU9e3sgY29sb3I6ICcjZmZmJyB9fSBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IG1hcmtlZChwaHJhc2UpIH19Lz5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFBocmFzZVdpdGhUb29sVGlwO1xuIl19