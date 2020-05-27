"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.updateReasons = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _ReasonCheckbox = _interopRequireDefault(require("./ReasonCheckbox"));

/* eslint-disable react/jsx-key */
var updateReasons = function updateReasons(reason, checked, selectedReasons) {
  var newReasons = (0, _toConsumableArray2["default"])(selectedReasons);

  if (checked && !newReasons.includes(reason)) {
    newReasons.push(reason);
  } else if (!checked && newReasons.includes(reason)) {
    var index = newReasons.indexOf(reason);
    newReasons.splice(index, 1);
  }

  return newReasons;
};
/**
 * @callback ReasonScreen~onChange
 * @param {string[]} newReasons - an array of reasons for editing the verse
 */

/**
 * Renders checkboxes to indicate the reason for the change
 * @property {ReasonScreen~onChange} onChange - callback when the selected reasons change
 * @property {func} translate - the locale function
 * @property {string[]} selectedReasons - an array of selected reasons
 */


exports.updateReasons = updateReasons;

var ReasonScreen = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2["default"])(ReasonScreen, _React$Component);

  function ReasonScreen(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, ReasonScreen);
    _this = (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(ReasonScreen).call(this, props));
    _this._handleCheck = _this._handleCheck.bind((0, _assertThisInitialized2["default"])(_this));
    return _this;
  }
  /**
   * Checks if a checkbox is selected
   * @param {string} reason
   * @param {bool} checked
   * @return {boolean}
   * @private
   */


  (0, _createClass2["default"])(ReasonScreen, [{
    key: "_handleCheck",
    value: function _handleCheck(reason, checked) {
      var _this$props = this.props,
          selectedReasons = _this$props.selectedReasons,
          onChange = _this$props.onChange;
      var newReasons = updateReasons(reason, checked, selectedReasons);
      onChange(newReasons);
    }
    /**
     * get reasons as an array, so easy to separate into columns
     * @param {Function} translate
     * @param {Object} selectedReasons - selections state
     * @return {*[]}
     */

  }, {
    key: "getReasons",
    value: function getReasons(translate, selectedReasons) {
      var reasons = [_react["default"].createElement(_ReasonCheckbox["default"], {
        reason: "spelling",
        label: translate('spelling'),
        key: 'spelling',
        onCheck: this._handleCheck,
        selectedReasons: selectedReasons
      }), _react["default"].createElement(_ReasonCheckbox["default"], {
        reason: "punctuation",
        label: translate('punctuation'),
        key: 'punctuation',
        onCheck: this._handleCheck,
        selectedReasons: selectedReasons
      }), _react["default"].createElement(_ReasonCheckbox["default"], {
        reason: "word_choice",
        label: translate('word_choice'),
        key: 'word_choice',
        onCheck: this._handleCheck,
        selectedReasons: selectedReasons
      }), _react["default"].createElement(_ReasonCheckbox["default"], {
        reason: "meaning",
        label: translate('meaning'),
        key: 'meaning',
        onCheck: this._handleCheck,
        selectedReasons: selectedReasons
      }), _react["default"].createElement(_ReasonCheckbox["default"], {
        reason: "grammar",
        label: translate('grammar'),
        key: 'grammar',
        onCheck: this._handleCheck,
        selectedReasons: selectedReasons
      }), _react["default"].createElement(_ReasonCheckbox["default"], {
        reason: "other",
        label: translate('other'),
        key: 'other',
        onCheck: this._handleCheck,
        selectedReasons: selectedReasons
      })];
      return reasons;
    }
    /**
     * formats layout based on number of columns
     * @param {int} columns
     * @param {Array} reasons
     * @return {*}
     */

  }, {
    key: "getLayout",
    value: function getLayout(columns, reasons) {
      var perColumn = reasons.length / columns;
      var perColumnInt = Math.floor(perColumn);

      if (perColumnInt !== perColumn) {
        perColumn = perColumnInt + 1; // if not whole count
      }

      if (columns > 1) {
        return _react["default"].createElement("div", {
          className: "reasons-screen"
        }, Array(columns).fill(0).map(function (value, index) {
          // for each column
          var column = reasons.slice(index * perColumn, perColumn);
          return _react["default"].createElement("div", {
            className: "reasons-screen-column"
          }, column);
        }));
      } // else single column


      return _react["default"].createElement("div", {
        className: "reasons-screen-column"
      }, reasons);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          translate = _this$props2.translate,
          selectedReasons = _this$props2.selectedReasons,
          columns = _this$props2.columns;
      var reasons = this.getReasons(translate, selectedReasons);
      return this.getLayout(columns, reasons);
    }
  }]);
  return ReasonScreen;
}(_react["default"].Component);

ReasonScreen.propTypes = {
  onChange: _propTypes["default"].func.isRequired,
  translate: _propTypes["default"].func.isRequired,
  selectedReasons: _propTypes["default"].arrayOf(_propTypes["default"].string).isRequired,
  columns: _propTypes["default"].number.isRequired
};
ReasonScreen.defaultProps = {
  columns: 2
};
var _default = ReasonScreen;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9WZXJzZUVkaXRvci9SZWFzb25TY3JlZW4uanMiXSwibmFtZXMiOlsidXBkYXRlUmVhc29ucyIsInJlYXNvbiIsImNoZWNrZWQiLCJzZWxlY3RlZFJlYXNvbnMiLCJuZXdSZWFzb25zIiwiaW5jbHVkZXMiLCJwdXNoIiwiaW5kZXgiLCJpbmRleE9mIiwic3BsaWNlIiwiUmVhc29uU2NyZWVuIiwicHJvcHMiLCJfaGFuZGxlQ2hlY2siLCJiaW5kIiwib25DaGFuZ2UiLCJ0cmFuc2xhdGUiLCJyZWFzb25zIiwiY29sdW1ucyIsInBlckNvbHVtbiIsImxlbmd0aCIsInBlckNvbHVtbkludCIsIk1hdGgiLCJmbG9vciIsIkFycmF5IiwiZmlsbCIsIm1hcCIsInZhbHVlIiwiY29sdW1uIiwic2xpY2UiLCJnZXRSZWFzb25zIiwiZ2V0TGF5b3V0IiwiUmVhY3QiLCJDb21wb25lbnQiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJmdW5jIiwiaXNSZXF1aXJlZCIsImFycmF5T2YiLCJzdHJpbmciLCJudW1iZXIiLCJkZWZhdWx0UHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBSEE7QUFLTyxJQUFNQSxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLENBQUNDLE1BQUQsRUFBU0MsT0FBVCxFQUFrQkMsZUFBbEIsRUFBc0M7QUFDakUsTUFBSUMsVUFBVSx1Q0FDVEQsZUFEUyxDQUFkOztBQUlBLE1BQUlELE9BQU8sSUFBSSxDQUFDRSxVQUFVLENBQUNDLFFBQVgsQ0FBb0JKLE1BQXBCLENBQWhCLEVBQTZDO0FBQzNDRyxJQUFBQSxVQUFVLENBQUNFLElBQVgsQ0FBZ0JMLE1BQWhCO0FBQ0QsR0FGRCxNQUVPLElBQUksQ0FBQ0MsT0FBRCxJQUFZRSxVQUFVLENBQUNDLFFBQVgsQ0FBb0JKLE1BQXBCLENBQWhCLEVBQTZDO0FBQ2xELFFBQU1NLEtBQUssR0FBR0gsVUFBVSxDQUFDSSxPQUFYLENB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QUFvQ0YsVUFIOUI7QUFJdkJuQixFQUFBQSxPQUFPLEVBQUVpQixzQkFBVUssTUFBVixDQUFpQkg7QUFKSCxDQUF6QjtBQU9BMUIsWUFBWSxDQUFDOEIsWUFBYixHQUE0QjtBQUFFdkIsRUFBQUEsT0FBTyxFQUFFO0FBQVgsQ0FBNUI7ZUFFZVAsWSIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIHJlYWN0L2pzeC1rZXkgKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IFJlYXNvbkNoZWNrYm94IGZyb20gJy4vUmVhc29uQ2hlY2tib3gnO1xuXG5leHBvcnQgY29uc3QgdXBkYXRlUmVhc29ucyA9IChyZWFzb24sIGNoZWNrZWQsIHNlbGVjdGVkUmVhc29ucykgPT4ge1xuICBsZXQgbmV3UmVhc29ucyA9IFtcbiAgICAuLi5zZWxlY3RlZFJlYXNvbnMsXG4gIF07XG5cbiAgaWYgKGNoZWNrZWQgJiYgIW5ld1JlYXNvbnMuaW5jbHVkZXMocmVhc29uKSkge1xuICAgIG5ld1JlYXNvbnMucHVzaChyZWFzb24pO1xuICB9IGVsc2UgaWYgKCFjaGVja2VkICYmIG5ld1JlYXNvbnMuaW5jbHVkZXMocmVhc29uKSkge1xuICAgIGNvbnN0IGluZGV4ID0gbmV3UmVhc29ucy5pbmRleE9mKHJlYXNvbik7XG4gICAgbmV3UmVhc29ucy5zcGxpY2UoaW5kZXgsIDEpO1xuICB9XG4gIHJldHVybiBuZXdSZWFzb25zO1xufTtcblxuLyoqXG4gKiBAY2FsbGJhY2sgUmVhc29uU2NyZWVufm9uQ2hhbmdlXG4gKiBAcGFyYW0ge3N0cmluZ1tdfSBuZXdSZWFzb25zIC0gYW4gYXJyYXkgb2YgcmVhc29ucyBmb3IgZWRpdGluZyB0aGUgdmVyc2VcbiAqL1xuXG4vKipcbiAqIFJlbmRlcnMgY2hlY2tib3hlcyB0byBpbmRpY2F0ZSB0aGUgcmVhc29uIGZvciB0aGUgY2hhbmdlXG4gKiBAcHJvcGVydHkge1JlYXNvblNjcmVlbn5vbkNoYW5nZX0gb25DaGFuZ2UgLSBjYWxsYmFjayB3aGVuIHRoZSBzZWxlY3RlZCByZWFzb25zIGNoYW5nZVxuICogQHByb3BlcnR5IHtmdW5jfSB0cmFuc2xhdGUgLSB0aGUgbG9jYWxlIGZ1bmN0aW9uXG4gKiBAcHJvcGVydHkge3N0cmluZ1tdfSBzZWxlY3RlZFJlYXNvbnMgLSBhbiBhcnJheSBvZiBzZWxlY3RlZCByZWFzb25zXG4gKi9cbmNsYXNzIFJlYXNvblNjcmVlbiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuX2hhbmRsZUNoZWNrID0gdGhpcy5faGFuZGxlQ2hlY2suYmluZCh0aGlzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVja3MgaWYgYSBjaGVja2JveCBpcyBzZWxlY3RlZFxuICAgKiBAcGFyYW0ge3N0cmluZ30gcmVhc29uXG4gICAqIEBwYXJhbSB7Ym9vbH0gY2hlY2tlZFxuICAgKiBAcmV0dXJuIHtib29sZWFufVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgX2hhbmRsZUNoZWNrKHJlYXNvbiwgY2hlY2tlZCkge1xuICAgIGNvbnN0IHsgc2VsZWN0ZWRSZWFzb25zLCBvbkNoYW5nZSB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCBuZXdSZWFzb25zID0gdXBkYXRlUmVhc29ucyhyZWFzb24sIGNoZWNrZWQsIHNlbGVjdGVkUmVhc29ucyk7XG4gICAgb25DaGFuZ2UobmV3UmVhc29ucyk7XG4gIH1cblxuICAvKipcbiAgICogZ2V0IHJlYXNvbnMgYXMgYW4gYXJyYXksIHNvIGVhc3kgdG8gc2VwYXJhdGUgaW50byBjb2x1bW5zXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IHRyYW5zbGF0ZVxuICAgKiBAcGFyYW0ge09iamVjdH0gc2VsZWN0ZWRSZWFzb25zIC0gc2VsZWN0aW9ucyBzdGF0ZVxuICAgKiBAcmV0dXJuIHsqW119XG4gICAqL1xuICBnZXRSZWFzb25zKHRyYW5zbGF0ZSwgc2VsZWN0ZWRSZWFzb25zKSB7XG4gICAgY29uc3QgcmVhc29ucyA9IFtcbiAgICAgIDxSZWFzb25DaGVja2JveCByZWFzb249XCJzcGVsbGluZ1wiXG4gICAgICAgIGxhYmVsPXt0cmFuc2xhdGUoJ3NwZWxsaW5nJyl9XG4gICAgICAgIGtleT17J3NwZWxsaW5nJ31cbiAgICAgICAgb25DaGVjaz17dGhpcy5faGFuZGxlQ2hlY2t9XG4gICAgICAgIHNlbGVjdGVkUmVhc29ucz17c2VsZWN0ZWRSZWFzb25zfS8+LFxuICAgICAgPFJlYXNvbkNoZWNrYm94IHJlYXNvbj1cInB1bmN0dWF0aW9uXCJcbiAgICAgICAgbGFiZWw9e3RyYW5zbGF0ZSgncHVuY3R1YXRpb24nKX1cbiAgICAgICAga2V5PXsncHVuY3R1YXRpb24nfVxuICAgICAgICBvbkNoZWNrPXt0aGlzLl9oYW5kbGVDaGVja31cbiAgICAgICAgc2VsZWN0ZWRSZWFzb25zPXtzZWxlY3RlZFJlYXNvbnN9Lz4sXG4gICAgICA8UmVhc29uQ2hlY2tib3ggcmVhc29uPVwid29yZF9jaG9pY2VcIlxuICAgICAgICBsYWJlbD17dHJhbnNsYXRlKCd3b3JkX2Nob2ljZScpfVxuICAgICAgICBrZXk9eyd3b3JkX2Nob2ljZSd9XG4gICAgICAgIG9uQ2hlY2s9e3RoaXMuX2hhbmRsZUNoZWNrfVxuICAgICAgICBzZWxlY3RlZFJlYXNvbnM9e3NlbGVjdGVkUmVhc29uc30vPixcbiAgICAgIDxSZWFzb25DaGVja2JveCByZWFzb249XCJtZWFuaW5nXCJcbiAgICAgICAgbGFiZWw9e3RyYW5zbGF0ZSgnbWVhbmluZycpfVxuICAgICAgICBrZXk9eydtZWFuaW5nJ31cbiAgICAgICAgb25DaGVjaz17dGhpcy5faGFuZGxlQ2hlY2t9XG4gICAgICAgIHNlbGVjdGVkUmVhc29ucz17c2VsZWN0ZWRSZWFzb25zfS8+LFxuICAgICAgPFJlYXNvbkNoZWNrYm94IHJlYXNvbj1cImdyYW1tYXJcIlxuICAgICAgICBsYWJlbD17dHJhbnNsYXRlKCdncmFtbWFyJyl9XG4gICAgICAgIGtleT17J2dyYW1tYXInfVxuICAgICAgICBvbkNoZWNrPXt0aGlzLl9oYW5kbGVDaGVja31cbiAgICAgICAgc2VsZWN0ZWRSZWFzb25zPXtzZWxlY3RlZFJlYXNvbnN9Lz4sXG4gICAgICA8UmVhc29uQ2hlY2tib3ggcmVhc29uPVwib3RoZXJcIlxuICAgICAgICBsYWJlbD17dHJhbnNsYXRlKCdvdGhlcicpfVxuICAgICAgICBrZXk9eydvdGhlcid9XG4gICAgICAgIG9uQ2hlY2s9e3RoaXMuX2hhbmRsZUNoZWNrfVxuICAgICAgICBzZWxlY3RlZFJlYXNvbnM9e3NlbGVjdGVkUmVhc29uc30vPixcbiAgICBdO1xuICAgIHJldHVybiByZWFzb25zO1xuICB9XG5cbiAgLyoqXG4gICAqIGZvcm1hdHMgbGF5b3V0IGJhc2VkIG9uIG51bWJlciBvZiBjb2x1bW5zXG4gICAqIEBwYXJhbSB7aW50fSBjb2x1bW5zXG4gICAqIEBwYXJhbSB7QXJyYXl9IHJlYXNvbnNcbiAgICogQHJldHVybiB7Kn1cbiAgICovXG4gIGdldExheW91dChjb2x1bW5zLCByZWFzb25zKSB7XG4gICAgbGV0IHBlckNvbHVtbiA9IHJlYXNvbnMubGVuZ3RoIC8gY29sdW1ucztcbiAgICBjb25zdCBwZXJDb2x1bW5JbnQgPSBNYXRoLmZsb29yKHBlckNvbHVtbik7XG5cbiAgICBpZiAocGVyQ29sdW1uSW50ICE9PSBwZXJDb2x1bW4pIHtcbiAgICAgIHBlckNvbHVtbiA9IHBlckNvbHVtbkludCArIDE7IC8vIGlmIG5vdCB3aG9sZSBjb3VudFxuICAgIH1cblxuICAgIGlmIChjb2x1bW5zID4gMSkge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3JlYXNvbnMtc2NyZWVuJz5cbiAgICAgICAgICB7XG4gICAgICAgICAgICBBcnJheShjb2x1bW5zKS5maWxsKDApLm1hcCgodmFsdWUsIGluZGV4KSA9PiB7IC8vIGZvciBlYWNoIGNvbHVtblxuICAgICAgICAgICAgICBjb25zdCBjb2x1bW4gPSByZWFzb25zLnNsaWNlKGluZGV4ICogcGVyQ29sdW1uLCBwZXJDb2x1bW4pO1xuICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdyZWFzb25zLXNjcmVlbi1jb2x1bW4nPlxuICAgICAgICAgICAgICAgICAge2NvbHVtbn1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICk7XG4gICAgfVxuICAgIC8vIGVsc2Ugc2luZ2xlIGNvbHVtblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0ncmVhc29ucy1zY3JlZW4tY29sdW1uJz5cbiAgICAgICAge3JlYXNvbnN9XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIHRyYW5zbGF0ZSwgc2VsZWN0ZWRSZWFzb25zLCBjb2x1bW5zLFxuICAgIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHJlYXNvbnMgPSB0aGlzLmdldFJlYXNvbnModHJhbnNsYXRlLCBzZWxlY3RlZFJlYXNvbnMpO1xuICAgIHJldHVybiB0aGlzLmdldExheW91dChjb2x1bW5zLCByZWFzb25zKTtcbiAgfVxufVxuXG5SZWFzb25TY3JlZW4ucHJvcFR5cGVzID0ge1xuICBvbkNoYW5nZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgdHJhbnNsYXRlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICBzZWxlY3RlZFJlYXNvbnM6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5zdHJpbmcpLmlzUmVxdWlyZWQsXG4gIGNvbHVtbnM6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbn07XG5cblJlYXNvblNjcmVlbi5kZWZhdWx0UHJvcHMgPSB7IGNvbHVtbnM6IDIgfTtcblxuZXhwb3J0IGRlZmF1bHQgUmVhc29uU2NyZWVuO1xuIl19