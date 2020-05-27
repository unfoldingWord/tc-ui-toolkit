"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactTooltip = _interopRequireDefault(require("react-tooltip"));

var _InstructionsAreaTextSelection = _interopRequireWildcard(require("../InstructionsAreaTextSelection"));

require("./InstructionsArea.styles.css");

// components
// css
function getSelectionString(invalidated, translate) {
  if (invalidated) {
    return _react["default"].createElement("div", null, _react["default"].createElement("span", null, translate('selection_invalidated'), _react["default"].createElement("strong", {
      "data-tip": translate('invalidated_tooltip'),
      "data-place": "top",
      "data-effect": "float",
      "data-type": "dark",
      "data-class": "selection-tooltip",
      "data-delay-hide": "100",
      style: {
        verticalAlign: 'super',
        fontSize: '0.8em'
      }
    }, "1")), _react["default"].createElement(_reactTooltip["default"], null));
  }
}

var InstructionsArea = function InstructionsArea(_ref) {
  var mode = _ref.mode,
      verseText = _ref.verseText,
      translate = _ref.translate,
      selections = _ref.selections,
      invalidated = _ref.invalidated,
      alignedGLText = _ref.alignedGLText,
      nothingToSelect = _ref.nothingToSelect,
      targetLanguageFont = _ref.targetLanguageFont,
      dontShowTranslation = _ref.dontShowTranslation;

  if (!verseText) {
    return _react["default"].createElement("div", {
      className: "instructions-area"
    }, _react["default"].createElement("span", null, translate('empty_verse')), _react["default"].createElement("br", null));
  }

  if (nothingToSelect) {
    // if nothingToSelect is true
    return _react["default"].createElement("div", {
      className: "instructions-area"
    }, _react["default"].createElement("span", null, translate('no_selection_needed_description')), _react["default"].createElement("br", null), _react["default"].createElement(_InstructionsAreaTextSelection.QuoatationMarks, null, _react["default"].createElement("strong", {
      className: "no-selection-needed"
    }, translate('no_selection_needed'))));
  }

  if (selections.length === 0 && dontShowTranslation && !invalidated) {
    // if invalidated we had previous selection
    return _react["default"].createElement("div", {
      className: "instructions-area"
    }, _react["default"].createElement("span", null, translate('no_selection')), _react["default"].createElement("br", null));
  }

  if (mode === 'select' || invalidated) {
    // if invalidated we had previous selection
    return _react["default"].createElement("div", {
      className: "instructions-area"
    }, getSelectionString(invalidated, translate), _react["default"].createElement("span", null, translate('please_select')), _react["default"].createElement("br", null), _react["default"].createElement("span", null, _react["default"].createElement("strong", {
      style: {
        color: 'var(--accent-color)'
      }
    }, "\"".concat(alignedGLText, "\""))), _react["default"].createElement("br", null));
  }

  return _react["default"].createElement("div", {
    className: "instructions-area"
  }, _react["default"].createElement("span", null, _react["default"].createElement("strong", {
    style: {
      color: 'var(--accent-color)'
    }
  }, "\"".concat(alignedGLText, "\""))), _react["default"].createElement("br", null), _react["default"].createElement("span", null, translate('translated_as')), _react["default"].createElement("br", null), _react["default"].createElement("span", null, _react["default"].createElement(_InstructionsAreaTextSelection["default"], {
    selections: selections,
    verseText: verseText,
    targetLanguageFont: targetLanguageFont
  })));
};

InstructionsArea.propTypes = {
  translate: _propTypes["default"].func.isRequired,
  alignedGLText: _propTypes["default"].string.isRequired,
  selections: _propTypes["default"].array.isRequired,
  dontShowTranslation: _propTypes["default"].bool,
  verseText: _propTypes["default"].string.isRequired,
  mode: _propTypes["default"].string,
  invalidated: _propTypes["default"].bool,
  nothingToSelect: _propTypes["default"].bool,
  targetLanguageFont: _propTypes["default"].string
};
var _default = InstructionsArea;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9WZXJzZUNoZWNrL0luc3RydWN0aW9uc0FyZWEvaW5kZXguanMiXSwibmFtZXMiOlsiZ2V0U2VsZWN0aW9uU3RyaW5nIiwiaW52YWxpZGF0ZWQiLCJ0cmFuc2xhdGUiLCJ2ZXJ0aWNhbEFsaWduIiwiZm9udFNpemUiLCJJbnN0cnVjdGlvbnNBcmVhIiwibW9kZSIsInZlcnNlVGV4dCIsInNlbGVjdGlvbnMiLCJhbGlnbmVkR0xUZXh0Iiwibm90aGluZ1RvU2VsZWN0IiwidGFyZ2V0TGFuZ3VhZ2VGb250IiwiZG9udFNob3dUcmFuc2xhdGlvbiIsImxlbmd0aCIsImNvbG9yIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwiZnVuYyIsImlzUmVxdWlyZWQiLCJzdHJpbmciLCJhcnJheSIsImJvb2wiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBRUE7O0FBRUE7O0FBSEE7QUFFQTtBQUdBLFNBQVNBLGtCQUFULENBQTRCQyxXQUE1QixFQUF5Q0MsU0FBekMsRUFBb0Q7QUFDbEQsTUFBSUQsV0FBSixFQUFpQjtBQUNmLFdBQ0UsNkNBQ0UsOENBQU9DLFNBQVMsQ0FBQyx1QkFBRCxDQUFoQixFQUNFO0FBQ0Usa0JBQVVBLFNBQVMsQ0FBQyxxQkFBRCxDQURyQjtBQUVFLG9CQUFXLEtBRmI7QUFHRSxxQkFBWSxPQUhkO0FBSUUsbUJBQVUsTUFKWjtBQUtFLG9CQUFXLG1CQUxiO0FBTUUseUJBQWdCLEtBTmxCO0FBT0UsTUFBQSxLQUFLLEVBQUU7QUFBRUMsUUFBQUEsYUFBYSxFQUFFLE9BQWpCO0FBQTBCQyxRQUFBQSxRQUFRLEVBQUU7QUFBcEM7QUFQVCxXQURGLENBREYsRUFhRSxnQ0FBQyx3QkFBRCxPQWJGLENBREY7QUFpQkQ7QUFDRjs7QUFFRCxJQUFNQyxnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQW1CLE9BVW5CO0FBQUEsTUFUSkMsSUFTSSxRQVRKQSxJQVNJO0FBQUEsTUFSSkMsU0FRSSxRQVJKQSxT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ZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgUmVhY3RUb29sdGlwIGZyb20gJ3JlYWN0LXRvb2x0aXAnO1xuLy8gY29tcG9uZW50c1xuaW1wb3J0IEluc3RydWN0aW9uc0FyZWFUZXh0U2VsZWN0aW9uLCB7IFF1b2F0YXRpb25NYXJrcyB9IGZyb20gJy4uL0luc3RydWN0aW9uc0FyZWFUZXh0U2VsZWN0aW9uJztcbi8vIGNzc1xuaW1wb3J0ICcuL0luc3RydWN0aW9uc0FyZWEuc3R5bGVzLmNzcyc7XG5cbmZ1bmN0aW9uIGdldFNlbGVjdGlvblN0cmluZyhpbnZhbGlkYXRlZCwgdHJhbnNsYXRlKSB7XG4gIGlmIChpbnZhbGlkYXRlZCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8c3Bhbj57dHJhbnNsYXRlKCdzZWxlY3Rpb25faW52YWxpZGF0ZWQnKX1cbiAgICAgICAgICA8c3Ryb25nXG4gICAgICAgICAgICBkYXRhLXRpcD17dHJhbnNsYXRlKCdpbnZhbGlkYXRlZF90b29sdGlwJyl9XG4gICAgICAgICAgICBkYXRhLXBsYWNlPVwidG9wXCJcbiAgICAgICAgICAgIGRhdGEtZWZmZWN0PVwiZmxvYXRcIlxuICAgICAgICAgICAgZGF0YS10eXBlPVwiZGFya1wiXG4gICAgICAgICAgICBkYXRhLWNsYXNzPVwic2VsZWN0aW9uLXRvb2x0aXBcIlxuICAgICAgICAgICAgZGF0YS1kZWxheS1oaWRlPVwiMTAwXCJcbiAgICAgICAgICAgIHN0eWxlPXt7IHZlcnRpY2FsQWxpZ246ICdzdXBlcicsIGZvbnRTaXplOiAnMC44ZW0nIH19PlxuICAgICAgICAgICAgMVxuICAgICAgICAgIDwvc3Ryb25nPlxuICAgICAgICA8L3NwYW4+XG4gICAgICAgIDxSZWFjdFRvb2x0aXAgLz5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuY29uc3QgSW5zdHJ1Y3Rpb25zQXJlYSA9ICh7XG4gIG1vZGUsXG4gIHZlcnNlVGV4dCxcbiAgdHJhbnNsYXRlLFxuICBzZWxlY3Rpb25zLFxuICBpbnZhbGlkYXRlZCxcbiAgYWxpZ25lZEdMVGV4dCxcbiAgbm90aGluZ1RvU2VsZWN0LFxuICB0YXJnZXRMYW5ndWFnZUZvbnQsXG4gIGRvbnRTaG93VHJhbnNsYXRpb24sXG59KSA9PiB7XG4gIGlmICghdmVyc2VUZXh0KSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdpbnN0cnVjdGlvbnMtYXJlYSc+XG4gICAgICAgIDxzcGFuPnt0cmFuc2xhdGUoJ2VtcHR5X3ZlcnNlJyl9PC9zcGFuPjxiciAvPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxuXG4gIGlmIChub3RoaW5nVG9TZWxlY3QpIHsgLy8gaWYgbm90aGluZ1RvU2VsZWN0IGlzIHRydWVcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9J2luc3RydWN0aW9ucy1hcmVhJz5cbiAgICAgICAgPHNwYW4+e3RyYW5zbGF0ZSgnbm9fc2VsZWN0aW9uX25lZWRlZF9kZXNjcmlwdGlvbicpfTwvc3Bhbj48YnIgLz5cbiAgICAgICAgPFF1b2F0YXRpb25NYXJrcz5cbiAgICAgICAgICA8c3Ryb25nIGNsYXNzTmFtZT1cIm5vLXNlbGVjdGlvbi1uZWVkZWRcIj5cbiAgICAgICAgICAgIHt0cmFuc2xhdGUoJ25vX3NlbGVjdGlvbl9uZWVkZWQnKX1cbiAgICAgICAgICA8L3N0cm9uZz5cbiAgICAgICAgPC9RdW9hdGF0aW9uTWFya3M+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG5cbiAgaWYgKHNlbGVjdGlvbnMubGVuZ3RoID09PSAwICYmIGRvbnRTaG93VHJhbnNsYXRpb24gJiYgIWludmFsaWRhdGVkKSB7IC8vIGlmIGludmFsaWRhdGVkIHdlIGhhZCBwcmV2aW91cyBzZWxlY3Rpb25cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9J2luc3RydWN0aW9ucy1hcmVhJz5cbiAgICAgICAgPHNwYW4+e3RyYW5zbGF0ZSgnbm9fc2VsZWN0aW9uJyl9PC9zcGFuPjxiciAvPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxuXG4gIGlmIChtb2RlID09PSAnc2VsZWN0JyB8fCBpbnZhbGlkYXRlZCkgeyAvLyBpZiBpbnZhbGlkYXRlZCB3ZSBoYWQgcHJldmlvdXMgc2VsZWN0aW9uXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdpbnN0cnVjdGlvbnMtYXJlYSc+XG4gICAgICAgIHtnZXRTZWxlY3Rpb25TdHJpbmcoaW52YWxpZGF0ZWQsIHRyYW5zbGF0ZSl9XG4gICAgICAgIDxzcGFuPnt0cmFuc2xhdGUoJ3BsZWFzZV9zZWxlY3QnKX08L3NwYW4+PGJyIC8+XG4gICAgICAgIDxzcGFuPlxuICAgICAgICAgIDxzdHJvbmcgc3R5bGU9e3sgY29sb3I6ICd2YXIoLS1hY2NlbnQtY29sb3IpJyB9fT5cbiAgICAgICAgICAgIHtgXCIke2FsaWduZWRHTFRleHR9XCJgfVxuICAgICAgICAgIDwvc3Ryb25nPlxuICAgICAgICA8L3NwYW4+PGJyIC8+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT0naW5zdHJ1Y3Rpb25zLWFyZWEnPlxuICAgICAgPHNwYW4+XG4gICAgICAgIDxzdHJvbmcgc3R5bGU9e3sgY29sb3I6ICd2YXIoLS1hY2NlbnQtY29sb3IpJyB9fT5cbiAgICAgICAgICB7YFwiJHthbGlnbmVkR0xUZXh0fVwiYH1cbiAgICAgICAgPC9zdHJvbmc+XG4gICAgICA8L3NwYW4+PGJyIC8+XG4gICAgICA8c3Bhbj57dHJhbnNsYXRlKCd0cmFuc2xhdGVkX2FzJyl9PC9zcGFuPjxiciAvPlxuICAgICAgPHNwYW4+XG4gICAgICAgIDxJbnN0cnVjdGlvbnNBcmVhVGV4dFNlbGVjdGlvblxuICAgICAgICAgIHNlbGVjdGlvbnM9e3NlbGVjdGlvbnN9XG4gICAgICAgICAgdmVyc2VUZXh0PXt2ZXJzZVRleHR9XG4gICAgICAgICAgdGFyZ2V0TGFuZ3VhZ2VGb250PXt0YXJnZXRMYW5ndWFnZUZvbnR9XG4gICAgICAgIC8+XG4gICAgICA8L3NwYW4+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5JbnN0cnVjdGlvbnNBcmVhLnByb3BUeXBlcyA9IHtcbiAgdHJhbnNsYXRlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICBhbGlnbmVkR0xUZXh0OiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gIHNlbGVjdGlvbnM6IFByb3BUeXBlcy5hcnJheS5pc1JlcXVpcmVkLFxuICBkb250U2hvd1RyYW5zbGF0aW9uOiBQcm9wVHlwZXMuYm9vbCxcbiAgdmVyc2VUZXh0OiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gIG1vZGU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGludmFsaWRhdGVkOiBQcm9wVHlwZXMuYm9vbCxcbiAgbm90aGluZ1RvU2VsZWN0OiBQcm9wVHlwZXMuYm9vbCxcbiAgdGFyZ2V0TGFuZ3VhZ2VGb250OiBQcm9wVHlwZXMuc3RyaW5nLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgSW5zdHJ1Y3Rpb25zQXJlYTtcbiJdfQ==