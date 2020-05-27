"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _fontUtils = require("../common/fontUtils");

var _editHelpers = require("./helpers/editHelpers");

/**
 * @callback EditScreen~onChange
 * @param {string} newVerse - the edited verse
 */

/**
 * Renders a text area for editing the verse
 * @property {string} verseText - the verse text to edit
 * @property {EditScreen~onChange} onChange - callback when the text has changed
 */
var EditScreen = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2["default"])(EditScreen, _React$Component);

  function EditScreen(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, EditScreen);
    _this = (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(EditScreen).call(this, props));
    _this._handleChange = _this._handleChange.bind((0, _assertThisInitialized2["default"])(_this));
    return _this;
  }

  (0, _createClass2["default"])(EditScreen, [{
    key: "_handleChange",
    value: function _handleChange(event) {
      var onChange = this.props.onChange;
      onChange(event.target.value);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          rows = _this$props.rows,
          style = _this$props.style,
          verseText = _this$props.verseText,
          targetLanguageFont = _this$props.targetLanguageFont;
      var fontClass = (0, _fontUtils.getFontClassName)(targetLanguageFont);
      var className = fontClass ? "edit-screen ".concat(fontClass) : 'edit-screen';
      return _react["default"].createElement("textarea", {
        id: "verse-editor-field",
        rows: rows,
        className: className,
        autoFocus: true,
        onFocus: _editHelpers.moveCursorToEnd,
        onChange: this._handleChange,
        value: verseText,
        style: style
      });
    }
  }]);
  return EditScreen;
}(_react["default"].Component);

EditScreen.propTypes = {
  rows: _propTypes["default"].number.isRequired,
  style: _propTypes["default"].object.isRequired,
  onChange: _propTypes["default"].func.isRequired,
  verseText: _propTypes["default"].string.isRequired,
  targetLanguageFont: _propTypes["default"].string
};
EditScreen.defaultProps = {
  rows: 4,
  style: {}
};
var _default = EditScreen;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9WZXJzZUVkaXRvci9FZGl0U2NyZWVuLmpzIl0sIm5hbWVzIjpbIkVkaXRTY3JlZW4iLCJwcm9wcyIsIl9oYW5kbGVDaGFuZ2UiLCJiaW5kIiwiZXZlbnQiLCJvbkNoYW5nZSIsInRhcmdldCIsInZhbHVlIiwicm93cyIsInN0eWxlIiwidmVyc2VUZXh0IiwidGFyZ2V0TGFuZ3VhZ2VGb250IiwiZm9udENsYXNzIiwiY2xhc3NOYW1lIiwibW92ZUN1cnNvclRvRW5kIiwiUmVhY3QiLCJDb21wb25lbnQiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJudW1iZXIiLCJpc1JlcXVpcmVkIiwib2JqZWN0IiwiZnVuYyIsInN0cmluZyIsImRlZmF1bHRQcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBRUE7Ozs7O0FBS0E7Ozs7O0lBS01BLFU7OztBQUNKLHNCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUE7QUFDakIsc0hBQU1BLEtBQU47QUFDQSxVQUFLQyxhQUFMLEdBQXFCLE1BQUtBLGFBQUwsQ0FBbUJDLElBQW5CLGdEQUFyQjtBQUZpQjtBQUdsQjs7OztrQ0FFYUMsSyxFQUFPO0FBQUEsVUFDWEMsUUFEVyxHQUNFLEtBQUtKLEtBRFAsQ0FDWEksUUFEVztBQUVuQkEsTUFBQUEsUUFBUSxDQUFDRCxLQUFLLENBQUNFLE1BQU4sQ0FBYUMsS0FBZCxDQUFSO0FBQ0Q7Ozs2QkFFUTtBQUFBLHdCQU1ILEtBQUtOLEtBTkY7QUFBQSxVQUVMTyxJQUZLLGVBRUxBLElBRks7QUFBQSxVQUdMQyxLQUhLLGVBR0xBLEtBSEs7QUFBQSxVQUlMQyxTQUpLLGVBSUxBLFNBSks7QUFBQSxVQUtMQyxrQkFMSyxlQUtMQSxrQkFMSztBQU9QLFVBQU1DLFNBQVMsR0FBRyxpQ0FBaUJELGtCQUFqQixDQUFsQjtBQUNBLFVBQU1FLFNBQVMsR0FBR0QsU0FBUyx5QkFBa0JBLFNBQWxCLElBQWdDLGFBQTNEO0FBRUEsYUFDRTtBQUNFLFFBQUEsRUFBRSxFQUFDLG9CQURMO0FBRUUsUUFBQSxJQUFJLEVBQUVKLElBRlI7QUFHRSxRQUFBLFNBQVMsRUFBRUssU0FIYjtBQUlFLFFBQUEsU0FBUyxFQUFFLElBSmI7QUFLRSxRQUFBLE9BQU8sRUFBRUMsNEJBTFg7QUFNRSxRQUFBLFFBQVEsRUFBRSxLQUFLWixhQU5qQjtBQU9FLFFBQUEsS0FBSyxFQUFFUSxTQVBUO0FBUUUsUUFBQSxLQUFLLEVBQUVEO0FBUlQsUUFERjtBQVlEOzs7RUFqQ3NCTSxrQkFBTUMsUzs7QUFvQy9CaEIsVUFBVSxDQUFDaUIsU0FBWCxHQUF1QjtBQUNyQlQsRUFBQUEsSUFBSSxFQUFFVSxzQkFBVUMsTUFBVixDQUFpQkMsVUFERjtBQUVyQlgsRUFBQUEsS0FBSyxFQUFFUyxzQkFBVUcsTUFBVixDQUFpQkQsVUFGSDtBQUdyQmYsRUFBQUEsUUFBUSxFQUFFYSxzQkFBVUksSUFBVixDQUFlRixVQUhKO0FBSXJCVixFQUFBQSxTQUFTLEVBQUVRLHNCQUFVSyxNQUFWLENBQWlCSCxVQUpQO0FBS3JCVCxFQUFBQSxrQkFBa0IsRUFBRU8sc0JBQVVLO0FBTFQsQ0FBdkI7QUFRQXZCLFVBQVUsQ0FBQ3dCLFlBQVgsR0FBMEI7QUFDeEJoQixFQUFBQSxJQUFJLEVBQUUsQ0FEa0I7QUFFeEJDLEVBQUFBLEtBQUssRUFBRTtBQUZpQixDQUExQjtlQUtlVCxVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyBnZXRGb250Q2xhc3NOYW1lIH0gZnJvbSAnLi4vY29tbW9uL2ZvbnRVdGlscyc7XG5pbXBvcnQgeyBtb3ZlQ3Vyc29yVG9FbmQgfSBmcm9tICcuL2hlbHBlcnMvZWRpdEhlbHBlcnMnO1xuXG4vKipcbiAqIEBjYWxsYmFjayBFZGl0U2NyZWVufm9uQ2hhbmdlXG4gKiBAcGFyYW0ge3N0cmluZ30gbmV3VmVyc2UgLSB0aGUgZWRpdGVkIHZlcnNlXG4gKi9cblxuLyoqXG4gKiBSZW5kZXJzIGEgdGV4dCBhcmVhIGZvciBlZGl0aW5nIHRoZSB2ZXJzZVxuICogQHByb3BlcnR5IHtzdHJpbmd9IHZlcnNlVGV4dCAtIHRoZSB2ZXJzZSB0ZXh0IHRvIGVkaXRcbiAqIEBwcm9wZXJ0eSB7RWRpdFNjcmVlbn5vbkNoYW5nZX0gb25DaGFuZ2UgLSBjYWxsYmFjayB3aGVuIHRoZSB0ZXh0IGhhcyBjaGFuZ2VkXG4gKi9cbmNsYXNzIEVkaXRTY3JlZW4gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLl9oYW5kbGVDaGFuZ2UgPSB0aGlzLl9oYW5kbGVDaGFuZ2UuYmluZCh0aGlzKTtcbiAgfVxuXG4gIF9oYW5kbGVDaGFuZ2UoZXZlbnQpIHtcbiAgICBjb25zdCB7IG9uQ2hhbmdlIH0gPSB0aGlzLnByb3BzO1xuICAgIG9uQ2hhbmdlKGV2ZW50LnRhcmdldC52YWx1ZSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgcm93cyxcbiAgICAgIHN0eWxlLFxuICAgICAgdmVyc2VUZXh0LFxuICAgICAgdGFyZ2V0TGFuZ3VhZ2VGb250LFxuICAgIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IGZvbnRDbGFzcyA9IGdldEZvbnRDbGFzc05hbWUodGFyZ2V0TGFuZ3VhZ2VGb250KTtcbiAgICBjb25zdCBjbGFzc05hbWUgPSBmb250Q2xhc3MgPyBgZWRpdC1zY3JlZW4gJHtmb250Q2xhc3N9YCA6ICdlZGl0LXNjcmVlbic7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPHRleHRhcmVhXG4gICAgICAgIGlkPVwidmVyc2UtZWRpdG9yLWZpZWxkXCJcbiAgICAgICAgcm93cz17cm93c31cbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWV9XG4gICAgICAgIGF1dG9Gb2N1cz17dHJ1ZX1cbiAgICAgICAgb25Gb2N1cz17bW92ZUN1cnNvclRvRW5kfVxuICAgICAgICBvbkNoYW5nZT17dGhpcy5faGFuZGxlQ2hhbmdlfVxuICAgICAgICB2YWx1ZT17dmVyc2VUZXh0fVxuICAgICAgICBzdHlsZT17c3R5bGV9XG4gICAgICAvPlxuICAgICk7XG4gIH1cbn1cblxuRWRpdFNjcmVlbi5wcm9wVHlwZXMgPSB7XG4gIHJvd3M6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgc3R5bGU6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgb25DaGFuZ2U6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIHZlcnNlVGV4dDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICB0YXJnZXRMYW5ndWFnZUZvbnQ6IFByb3BUeXBlcy5zdHJpbmcsXG59O1xuXG5FZGl0U2NyZWVuLmRlZmF1bHRQcm9wcyA9IHtcbiAgcm93czogNCxcbiAgc3R5bGU6IHt9LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgRWRpdFNjcmVlbjtcbiJdfQ==