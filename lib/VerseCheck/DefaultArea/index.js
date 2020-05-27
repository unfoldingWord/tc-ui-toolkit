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

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactBootstrap = require("react-bootstrap");

var _selectionHelpers = require("../helpers/selectionHelpers");

var _stringHelpers = require("../helpers/stringHelpers");

var _MyLanguageModal = _interopRequireDefault(require("../MyLanguageModal"));

require("../VerseCheck.styles.css");

var _fontUtils = require("../../common/fontUtils");

// helpers
// components
// styling
var DefaultArea = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2["default"])(DefaultArea, _React$Component);

  function DefaultArea() {
    var _this;

    (0, _classCallCheck2["default"])(this, DefaultArea);
    _this = (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(DefaultArea).call(this));
    _this.state = {
      inBox: false,
      modalVisibility: false
    };
    return _this;
  }

  (0, _createClass2["default"])(DefaultArea, [{
    key: "displayText",
    value: function displayText(verseText, selections, targetLanguageFont) {
      var validateSelections = this.props.validateSelections; // normalize whitespace for text rendering in order to display highlights with more than one space since html selections show one space

      verseText = (0, _selectionHelpers.normalizeString)(verseText);
      var fontClass = (0, _fontUtils.getFontClassName)(targetLanguageFont);

      var verseTextSpans = _react["default"].createElement("span", {
        className: fontClass
      }, verseText);

      if (selections && selections.length > 0) {
        var _selectionArray = (0, _selectionHelpers.selectionArray)(verseText, selections);

        for (var j = 0, len = selections.length; j < len; j++) {
          var selection = selections[j];

          if ((0, _stringHelpers.occurrencesInString)(verseText, selection.text) !== selection.occurrences) {
            // validate selections and remove ones that do not apply
            validateSelections(verseText);
          }
        }

        verseTextSpans = [];

        for (var i = 0, _len = _selectionArray.length; i < _len; i++) {
          var _selection = _selectionArray[i];
          var index = i;
          var style = _selection.selected ? {
            backgroundColor: 'var(--highlight-color)'
          } : {};
          verseTextSpans.push(_react["default"].createElement("span", {
            key: index,
            className: fontClass,
            style: style
          }, _selection.text));
        }
      }

      return _react["default"].createElement("div", {
        style: {
          userSelect: 'none',
          color: 'var(--text-color-light)'
        }
      }, verseTextSpans);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          translate = _this$props.translate,
          reference = _this$props.reference,
          verseText = _this$props.verseText,
          selections = _this$props.selections,
          targetBible = _this$props.targetBible,
          bookDetails = _this$props.bookDetails,
          targetLanguageDetails = _this$props.targetLanguageDetails,
          targetLanguageFont = _this$props.targetLanguageFont;
      var book = targetLanguageDetails.book,
          direction = targetLanguageDetails.direction;
      var bookName = book && book.name ? book.name : bookDetails.name;
      var languageName = targetLanguageDetails.name || null;
      var languageDirection = direction || null;
      return _react["default"].createElement("div", {
        style: {
          WebkitUserSelect: 'none',
          flex: 1,
          display: 'flex',
          flexDirection: 'column'
        }
      }, _react["default"].createElement("div", {
        className: "verse-title"
      }, _react["default"].createElement("div", {
        className: "pane",
        style: {
          display: 'flex',
          flexDirection: 'column'
        }
      }, _react["default"].createElement("span", {
        className: "verse-title-title"
      }, languageName), _react["default"].createElement("span", {
        className: "verse-title-subtitle"
      }, bookName, " ", reference.chapter + ':' + reference.verse)), _react["default"].createElement("div", {
        onClick: function onClick() {
          return _this2.setState({
            modalVisibility: true
          });
        }
      }, _react["default"].createElement(_reactBootstrap.Glyphicon, {
        glyph: "fullscreen",
        title: translate('click_show_expanded'),
        style: {
          cursor: 'pointer'
        }
      })), _react["default"].createElement(_MyLanguageModal["default"], {
        bookName: bookName,
        translate: translate,
        targetBible: targetBible,
        chapter: reference.chapter,
        currentVerse: reference.verse,
        show: this.state.modalVisibility,
        targetLanguageFont: targetLanguageFont,
        targetLanguageDetails: targetLanguageDetails,
        languageDirection: languageDirection || 'ltr',
        onHide: function onHide() {
          return _this2.setState({
            modalVisibility: false
          });
        }
      })), _react["default"].createElement("div", {
        className: languageDirection === 'ltr' ? 'ltr-content' : 'rtl-content'
      }, this.displayText(verseText, selections, targetLanguageFont)));
    }
  }]);
  return DefaultArea;
}(_react["default"].Component);

DefaultArea.propTypes = {
  translate: _propTypes["default"].func.isRequired,
  reference: _propTypes["default"].object.isRequired,
  targetBible: _propTypes["default"].object.isRequired,
  selections: _propTypes["default"].array.isRequired,
  verseText: _propTypes["default"].string.isRequired,
  validateSelections: _propTypes["default"].func.isRequired,
  bookDetails: _propTypes["default"].object.isRequired,
  targetLanguageDetails: _propTypes["default"].object.isRequired,
  targetLanguageFont: _propTypes["default"].string
};
var _default = DefaultArea;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9WZXJzZUNoZWNrL0RlZmF1bHRBcmVhL2luZGV4LmpzIl0sIm5hbWVzIjpbIkRlZmF1bHRBcmVhIiwic3RhdGUiLCJpbkJveCIsIm1vZGFsVmlzaWJpbGl0eSIsInZlcnNlVGV4dCIsInNlbGVjdGlvbnMiLCJ0YXJnZXRMYW5ndWFnZUZvbnQiLCJ2YWxpZGF0ZVNlbGVjdGlvbnMiLCJwcm9wcyIsImZvbnRDbGFzcyIsInZlcnNlVGV4dFNwYW5zIiwibGVuZ3RoIiwiX3NlbGVjdGlvbkFycmF5IiwiaiIsImxlbiIsInNlbGVjdGlvbiIsInRleHQiLCJvY2N1cnJlbmNlcyIsImkiLCJpbmRleCIsInN0eWxlIiwic2VsZWN0ZWQiLCJiYWNrZ3JvdW5kQ29sb3IiLCJwdXNoIiwidXNlclNlbGVjdCIsImNvbG9yIiwidHJhbnNsYXRlIiwicmVmZXJlbmNlIiwidGFyZ2V0QmlibGUiLCJib29rRGV0YWlscyIsInRhcmdldExhbmd1YWdlRGV0YWlscyIsImJvb2siLCJkaXJlY3Rpb24iLCJib29rTmFtZSIsIm5hbWUiLCJsYW5ndWFnZU5hbWUiLCJsYW5ndWFnZURpcmVjdGlvbiIsIldlYmtpdFVzZXJTZWxlY3QiLCJmbGV4IiwiZGlzcGxheSIsImZsZXhEaXJlY3Rpb24iLCJjaGFwdGVyIiwidmVyc2UiLCJzZXRTdGF0ZSIsImN1cnNvciIsImRpc3BsYXlUZXh0IiwiUmVhY3QiLCJDb21wb25lbnQiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJmdW5jIiwiaXNSZXF1aXJlZCIsIm9iamVjdCIsImFycmF5Iiwic3RyaW5nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBRUE7O0FBQ0E7O0FBQ0E7O0FBRUE7O0FBRUE7O0FBQ0E7O0FBUkE7QUFJQTtBQUVBO0lBSU1BLFc7OztBQUNKLHlCQUFjO0FBQUE7O0FBQUE7QUFDWjtBQUNBLFVBQUtDLEtBQUwsR0FBYTtBQUNYQyxNQUFBQSxLQUFLLEVBQUUsS0FE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bnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG4vLyBoZWxwZXJzXG5pbXBvcnQgeyBHbHlwaGljb24gfSBmcm9tICdyZWFjdC1ib290c3RyYXAnO1xuaW1wb3J0IHsgc2VsZWN0aW9uQXJyYXksIG5vcm1hbGl6ZVN0cmluZyB9IGZyb20gJy4uL2hlbHBlcnMvc2VsZWN0aW9uSGVscGVycyc7XG5pbXBvcnQgeyBvY2N1cnJlbmNlc0luU3RyaW5nIH0gZnJvbSAnLi4vaGVscGVycy9zdHJpbmdIZWxwZXJzJztcbi8vIGNvbXBvbmVudHNcbmltcG9ydCBNeUxhbmd1YWdlTW9kYWwgZnJvbSAnLi4vTXlMYW5ndWFnZU1vZGFsJztcbi8vIHN0eWxpbmdcbmltcG9ydCAnLi4vVmVyc2VDaGVjay5zdHlsZXMuY3NzJztcbmltcG9ydCB7IGdldEZvbnRDbGFzc05hbWUgfSBmcm9tICcuLi8uLi9jb21tb24vZm9udFV0aWxzJztcblxuY2xhc3MgRGVmYXVsdEFyZWEgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBpbkJveDogZmFsc2UsXG4gICAgICBtb2RhbFZpc2liaWxpdHk6IGZhbHNlLFxuICAgIH07XG4gIH1cblxuICBkaXNwbGF5VGV4dCh2ZXJzZVRleHQsIHNlbGVjdGlvbnMsIHRhcmdldExhbmd1YWdlRm9udCkge1xuICAgIGNvbnN0IHsgdmFsaWRhdGVTZWxlY3Rpb25zIH0gPSB0aGlzLnByb3BzO1xuICAgIC8vIG5vcm1hbGl6ZSB3aGl0ZXNwYWNlIGZvciB0ZXh0IHJlbmRlcmluZyBpbiBvcmRlciB0byBkaXNwbGF5IGhpZ2hsaWdodHMgd2l0aCBtb3JlIHRoYW4gb25lIHNwYWNlIHNpbmNlIGh0bWwgc2VsZWN0aW9ucyBzaG93IG9uZSBzcGFjZVxuICAgIHZlcnNlVGV4dCA9IG5vcm1hbGl6ZVN0cmluZyh2ZXJzZVRleHQpO1xuICAgIGNvbnN0IGZvbnRDbGFzcyA9IGdldEZvbnRDbGFzc05hbWUodGFyZ2V0TGFuZ3VhZ2VGb250KTtcbiAgICBsZXQgdmVyc2VUZXh0U3BhbnMgPSA8c3BhbiBjbGFzc05hbWU9e2ZvbnRDbGFzc30+e3ZlcnNlVGV4dH08L3NwYW4+O1xuXG4gICAgaWYgKHNlbGVjdGlvbnMgJiYgc2VsZWN0aW9ucy5sZW5ndGggPiAwKSB7XG4gICAgICBsZXQgX3NlbGVjdGlvbkFycmF5ID0gc2VsZWN0aW9uQXJyYXkodmVyc2VUZXh0LCBzZWxlY3Rpb25zKTtcblxuICAgICAgZm9yIChsZXQgaiA9IDAsIGxlbiA9IHNlbGVjdGlvbnMubGVuZ3RoOyBqIDwgbGVuOyBqKyspIHtcbiAgICAgICAgY29uc3Qgc2VsZWN0aW9uID0gc2VsZWN0aW9uc1tqXTtcblxuICAgICAgICBpZiAob2NjdXJyZW5jZXNJblN0cmluZyh2ZXJzZVRleHQsIHNlbGVjdGlvbi50ZXh0KSAhPT0gc2VsZWN0aW9uLm9jY3VycmVuY2VzKSB7XG4gICAgICAgICAgLy8gdmFsaWRhdGUgc2VsZWN0aW9ucyBhbmQgcmVtb3ZlIG9uZXMgdGhhdCBkbyBub3QgYXBwbHlcbiAgICAgICAgICB2YWxpZGF0ZVNlbGVjdGlvbnModmVyc2VUZXh0KTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB2ZXJzZVRleHRTcGFucyA9IFtdO1xuXG4gICAgICBmb3IgKGxldCBpID0gMCwgbGVuID0gX3NlbGVjdGlvbkFycmF5Lmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgIGNvbnN0IHNlbGVjdGlvbiA9IF9zZWxlY3Rpb25BcnJheVtpXTtcbiAgICAgICAgY29uc3QgaW5kZXggPSBpO1xuICAgICAgICBsZXQgc3R5bGUgPSBzZWxlY3Rpb24uc2VsZWN0ZWQgPyB7IGJhY2tncm91bmRDb2xvcjogJ3ZhcigtLWhpZ2hsaWdodC1jb2xvciknIH0gOiB7fTtcblxuICAgICAgICB2ZXJzZVRleHRTcGFucy5wdXNoKFxuICAgICAgICAgIDxzcGFuIGtleT17aW5kZXh9IGNsYXNzTmFtZT17Zm9udENsYXNzfSBzdHlsZT17c3R5bGV9PlxuICAgICAgICAgICAge3NlbGVjdGlvbi50ZXh0fVxuICAgICAgICAgIDwvc3Bhbj4sXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IHN0eWxlPXt7IHVzZXJTZWxlY3Q6ICdub25lJywgY29sb3I6ICd2YXIoLS10ZXh0LWNvbG9yLWxpZ2h0KScgfX0+XG4gICAgICAgIHt2ZXJzZVRleHRTcGFuc31cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgdHJhbnNsYXRlLFxuICAgICAgcmVmZXJlbmNlLFxuICAgICAgdmVyc2VUZXh0LFxuICAgICAgc2VsZWN0aW9ucyxcbiAgICAgIHRhcmdldEJpYmxlLFxuICAgICAgYm9va0RldGFpbHMsXG4gICAgICB0YXJnZXRMYW5ndWFnZURldGFpbHMsXG4gICAgICB0YXJnZXRMYW5ndWFnZUZvbnQsXG4gICAgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgeyBib29rLCBkaXJlY3Rpb24gfSA9IHRhcmdldExhbmd1YWdlRGV0YWlscztcbiAgICBjb25zdCBib29rTmFtZSA9IGJvb2sgJiYgYm9vay5uYW1lID8gYm9vay5uYW1lIDogYm9va0RldGFpbHMubmFtZTtcbiAgICBjb25zdCBsYW5ndWFnZU5hbWUgPSB0YXJnZXRMYW5ndWFnZURldGFpbHMubmFtZSB8fCBudWxsO1xuICAgIGNvbnN0IGxhbmd1YWdlRGlyZWN0aW9uID0gZGlyZWN0aW9uIHx8IG51bGw7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBzdHlsZT17e1xuICAgICAgICBXZWJraXRVc2VyU2VsZWN0OiAnbm9uZScsIGZsZXg6IDEsIGRpc3BsYXk6ICdmbGV4JywgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXG4gICAgICB9fT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3ZlcnNlLXRpdGxlJz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ncGFuZScgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyB9fT5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0ndmVyc2UtdGl0bGUtdGl0bGUnPlxuICAgICAgICAgICAgICB7bGFuZ3VhZ2VOYW1lfVxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSd2ZXJzZS10aXRsZS1zdWJ0aXRsZSc+XG4gICAgICAgICAgICAgIHtib29rTmFtZX0ge3JlZmVyZW5jZS5jaGFwdGVyICsgJzonICsgcmVmZXJlbmNlLnZlcnNlfVxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgb25DbGljaz17KCkgPT4gdGhpcy5zZXRTdGF0ZSh7IG1vZGFsVmlzaWJpbGl0eTogdHJ1ZSB9KX0+XG4gICAgICAgICAgICA8R2x5cGhpY29uIGdseXBoPVwiZnVsbHNjcmVlblwiIHRpdGxlPXt0cmFuc2xhdGUoJ2NsaWNrX3Nob3dfZXhwYW5kZWQnKX0gc3R5bGU9e3sgY3Vyc29yOiAncG9pbnRlcicgfX0gLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8TXlMYW5ndWFnZU1vZGFsXG4gICAgICAgICAgICBib29rTmFtZT17Ym9va05hbWV9XG4gICAgICAgICAgICB0cmFuc2xhdGU9e3RyYW5zbGF0ZX1cbiAgICAgICAgICAgIHRhcmdldEJpYmxlPXt0YXJnZXRCaWJsZX1cbiAgICAgICAgICAgIGNoYXB0ZXI9e3JlZmVyZW5jZS5jaGFwdGVyfVxuICAgICAgICAgICAgY3VycmVudFZlcnNlPXtyZWZlcmVuY2UudmVyc2V9XG4gICAgICAgICAgICBzaG93PXt0aGlzLnN0YXRlLm1vZGFsVmlzaWJpbGl0eX1cbiAgICAgICAgICAgIHRhcmdldExhbmd1YWdlRm9udD17dGFyZ2V0TGFuZ3VhZ2VGb250fVxuICAgICAgICAgICAgdGFyZ2V0TGFuZ3VhZ2VEZXRhaWxzPXt0YXJnZXRMYW5ndWFnZURldGFpbHN9XG4gICAgICAgICAgICBsYW5ndWFnZURpcmVjdGlvbj17bGFuZ3VhZ2VEaXJlY3Rpb24gfHwgJ2x0cid9XG4gICAgICAgICAgICBvbkhpZGU9eygpID0+IHRoaXMuc2V0U3RhdGUoeyBtb2RhbFZpc2liaWxpdHk6IGZhbHNlIH0pfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17bGFuZ3VhZ2VEaXJlY3Rpb24gPT09ICdsdHInID8gJ2x0ci1jb250ZW50JyA6ICdydGwtY29udGVudCd9PlxuICAgICAgICAgIHt0aGlzLmRpc3BsYXlUZXh0KHZlcnNlVGV4dCwgc2VsZWN0aW9ucywgdGFyZ2V0TGFuZ3VhZ2VGb250KX1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbkRlZmF1bHRBcmVhLnByb3BUeXBlcyA9IHtcbiAgdHJhbnNsYXRlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICByZWZlcmVuY2U6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgdGFyZ2V0QmlibGU6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgc2VsZWN0aW9uczogUHJvcFR5cGVzLmFycmF5LmlzUmVxdWlyZWQsXG4gIHZlcnNlVGV4dDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICB2YWxpZGF0ZVNlbGVjdGlvbnM6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIGJvb2tEZXRhaWxzOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG4gIHRhcmdldExhbmd1YWdlRGV0YWlsczogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuICB0YXJnZXRMYW5ndWFnZUZvbnQ6IFByb3BUeXBlcy5zdHJpbmcsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBEZWZhdWx0QXJlYTtcbiJdfQ==