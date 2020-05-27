"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

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

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _IconButton = _interopRequireDefault(require("@material-ui/core/IconButton"));

var _Edit = _interopRequireDefault(require("@material-ui/icons/Edit"));

require("./Verse.styles.css");

var styles = {
  edit_wrapper: {
    textAlign: 'right'
  },
  edit_button: {
    padding: 0,
    width: 28,
    height: 28
  }
};

var Verse = /*#__PURE__*/function (_Component) {
  (0, _inherits2["default"])(Verse, _Component);

  function Verse(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, Verse);
    _this = (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(Verse).call(this, props));
    _this.handleEdit = _this.handleEdit.bind((0, _assertThisInitialized2["default"])(_this));
    return _this;
  }

  (0, _createClass2["default"])(Verse, [{
    key: "handleEdit",
    value: function handleEdit() {
      var _this$props = this.props,
          bibleId = _this$props.bibleId,
          chapter = _this$props.chapter,
          verse = _this$props.verse,
          verseText = _this$props.verseText,
          onEdit = _this$props.onEdit;

      if (typeof onEdit === 'function') {
        onEdit(bibleId, chapter, verse, verseText);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          verseElements = _this$props2.verseElements,
          bibleId = _this$props2.bibleId,
          direction = _this$props2.direction,
          chapter = _this$props2.chapter,
          verse = _this$props2.verse,
          onEdit = _this$props2.onEdit,
          translate = _this$props2.translate;
      var chapterVerseContent = "".concat(chapter, ":").concat(verse, " ");

      var chapterVerse = _react["default"].createElement("strong", null, chapterVerseContent);

      var isEditable = bibleId === 'targetBible';
      var verseSpan = verseElements;

      if (!verseElements) {
        verseSpan = _react["default"].createElement("span", {
          className: "placeholder-text"
        }, translate('pane.missing_verse_warning'));
      }

      var edit = null;

      if (isEditable && onEdit) {
        edit = _react["default"].createElement("div", {
          style: styles.edit_wrapper
        }, _react["default"].createElement(_IconButton["default"], {
          style: styles.edit_button,
          onClick: this.handleEdit
        }, _react["default"].createElement(_Edit["default"], null)));
      }

      var directionClassName = direction === 'ltr' ? 'verse-content-ltr' : 'verse-content-rtl';
      var fontClass = '';
      return _react["default"].createElement("div", {
        className: "verse-container"
      }, _react["default"].createElement("div", {
        className: directionClassName
      }, chapterVerse, _react["default"].createElement("span", {
        className: fontClass
      }, verseSpan)), edit);
    }
  }]);
  return Verse;
}(_react.Component);

Verse.propTypes = {
  verseText: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].array, _propTypes["default"].object]),
  verseElements: _propTypes["default"].oneOfType([_propTypes["default"].element, _propTypes["default"].string, _propTypes["default"].array]),
  bibleId: _propTypes["default"].string.isRequired,
  direction: _propTypes["default"].string.isRequired,
  chapter: _propTypes["default"].number.isRequired,
  verse: _propTypes["default"].oneOfType([_propTypes["default"].string.isRequired, _propTypes["default"].number.isRequired]),
  onEdit: _propTypes["default"].func,
  translate: _propTypes["default"].func.isRequired
};
var _default = Verse;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9TY3JpcHR1cmVQYW5lL1ZlcnNlL2luZGV4LmpzIl0sIm5hbWVzIjpbInN0eWxlcyIsImVkaXRfd3JhcHBlciIsInRleHRBbGlnbiIsImVkaXRfYnV0dG9uIiwicGFkZGluZyIsIndpZHRoIiwiaGVpZ2h0IiwiVmVyc2UiLCJwcm9wcyIsImhhbmRsZUVkaXQiLCJiaW5kIiwiYmlibGVJZCIsImNoYXB0ZXIiLCJ2ZXJzZSIsInZlcnNlVGV4dCIsIm9uRWRpdCIsInZlcnNlRWxlbWVudHMiLCJkaXJlY3Rpb24iLCJ0cmFuc2xhdGUiLCJjaGFwdGVyVmVyc2VDb250ZW50IiwiY2hhcHRlclZlcnNlIiwiaXNFZGl0YWJsZSIsInZlcnNlU3BhbiIsImVkaXQiLCJkaXJlY3Rpb25DbGFzc05hbWUiLCJmb250Q2xhc3MiLCJDb21wb25lbnQiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJvbmVPZlR5cGUiLCJzdHJpbmciLCJhcnJheSIsIm9iamVjdCIsImVsZW1lbnQiLCJpc1JlcXVpcmVkIiwibnVtYmVyIiwiZnVuYyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFFQTs7QUFFQSxJQUFNQSxNQUFNLEdBQUc7QUFDYkMsRUFBQUEsWUFBWSxFQUFFO0FBQUVDLElBQUFBLFNBQVMsRUFBRTtBQUFiLEdBREQ7QUFFYkMsRUFBQUEsV0FBVyxFQUFFO0FBQ1hDLElBQUFBLE9BQU8sRUFBRSxDQURFO0FBRVhDLElBQUFBLEtBQUssRUFBRSxFQUZJO0FBR1hDLElBQUFBLE1BQU0sRUFBRTtBQUhHO0FBRkEsQ0FBZjs7SUFTTUMsSzs7O0FBQ0osaUJBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQTtBQUNqQixpSEFBTUEsS0FBTjtBQUNBLFVBQUtDLFVBQUwsR0FBa0IsTUFBS0EsVUFBTCxDQUFnQkMsSUFBaEIsZ0RBQWxCO0FBRmlCO0FBR2xCOzs7O2lDQUVZO0FBQUEsd0JBR1AsS0FB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UztBQWtCaEJuQixFQUFBQSxNQUFNLEVBQUVhLHNCQUFVUSxJQWxCRjtBQW1CaEJsQixFQUFBQSxTQUFTLEVBQUVVLHNCQUFVUSxJQUFWLENBQWVGO0FBbkJWLENBQWxCO2VBc0JlM0IsSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IEljb25CdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvSWNvbkJ1dHRvbic7XG5pbXBvcnQgRWRpdEljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0VkaXQnO1xuXG5pbXBvcnQgJy4vVmVyc2Uuc3R5bGVzLmNzcyc7XG5cbmNvbnN0IHN0eWxlcyA9IHtcbiAgZWRpdF93cmFwcGVyOiB7IHRleHRBbGlnbjogJ3JpZ2h0JyB9LFxuICBlZGl0X2J1dHRvbjoge1xuICAgIHBhZGRpbmc6IDAsXG4gICAgd2lkdGg6IDI4LFxuICAgIGhlaWdodDogMjgsXG4gIH0sXG59O1xuXG5jbGFzcyBWZXJzZSBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuaGFuZGxlRWRpdCA9IHRoaXMuaGFuZGxlRWRpdC5iaW5kKHRoaXMpO1xuICB9XG5cbiAgaGFuZGxlRWRpdCgpIHtcbiAgICBjb25zdCB7XG4gICAgICBiaWJsZUlkLCBjaGFwdGVyLCB2ZXJzZSwgdmVyc2VUZXh0LCBvbkVkaXQsXG4gICAgfSA9IHRoaXMucHJvcHM7XG5cbiAgICBpZiAodHlwZW9mIG9uRWRpdCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgb25FZGl0KGJpYmxlSWQsIGNoYXB0ZXIsIHZlcnNlLCB2ZXJzZVRleHQpO1xuICAgIH1cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICB2ZXJzZUVsZW1lbnRzLFxuICAgICAgYmlibGVJZCxcbiAgICAgIGRpcmVjdGlvbixcbiAgICAgIGNoYXB0ZXIsXG4gICAgICB2ZXJzZSxcbiAgICAgIG9uRWRpdCxcbiAgICAgIHRyYW5zbGF0ZSxcbiAgICB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCBjaGFwdGVyVmVyc2VDb250ZW50ID0gYCR7Y2hhcHRlcn06JHt2ZXJzZX0gYDtcbiAgICBjb25zdCBjaGFwdGVyVmVyc2UgPSA8c3Ryb25nPntjaGFwdGVyVmVyc2VDb250ZW50fTwvc3Ryb25nPjtcbiAgICBjb25zdCBpc0VkaXRhYmxlID0gYmlibGVJZCA9PT0gJ3RhcmdldEJpYmxlJztcbiAgICBsZXQgdmVyc2VTcGFuID0gdmVyc2VFbGVtZW50cztcblxuICAgIGlmICghdmVyc2VFbGVtZW50cykge1xuICAgICAgdmVyc2VTcGFuID0gKFxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9J3BsYWNlaG9sZGVyLXRleHQnPlxuICAgICAgICAgIHt0cmFuc2xhdGUoJ3BhbmUubWlzc2luZ192ZXJzZV93YXJuaW5nJyl9XG4gICAgICAgIDwvc3Bhbj5cbiAgICAgICk7XG4gICAgfVxuXG4gICAgbGV0IGVkaXQgPSBudWxsO1xuXG4gICAgaWYgKGlzRWRpdGFibGUgJiYgb25FZGl0KSB7XG4gICAgICBlZGl0ID0gKFxuICAgICAgICA8ZGl2IHN0eWxlPXtzdHlsZXMuZWRpdF93cmFwcGVyfT5cbiAgICAgICAgICA8SWNvbkJ1dHRvbiBzdHlsZT17c3R5bGVzLmVkaXRfYnV0dG9ufSBvbkNsaWNrPXt0aGlzLmhhbmRsZUVkaXR9PlxuICAgICAgICAgICAgPEVkaXRJY29uLz5cbiAgICAgICAgICA8L0ljb25CdXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKTtcbiAgICB9XG5cbiAgICBjb25zdCBkaXJlY3Rpb25DbGFzc05hbWUgPSBkaXJlY3Rpb24gPT09ICdsdHInID8gJ3ZlcnNlLWNvbnRlbnQtbHRyJyA6ICd2ZXJzZS1jb250ZW50LXJ0bCc7XG4gICAgbGV0IGZvbnRDbGFzcyA9ICcnO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidmVyc2UtY29udGFpbmVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtkaXJlY3Rpb25DbGFzc05hbWV9PlxuICAgICAgICAgIHtjaGFwdGVyVmVyc2V9XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtmb250Q2xhc3N9Pnt2ZXJzZVNwYW59PC9zcGFuPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAge2VkaXR9XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cblZlcnNlLnByb3BUeXBlcyA9IHtcbiAgdmVyc2VUZXh0OiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIFByb3BUeXBlcy5hcnJheSxcbiAgICBQcm9wVHlwZXMub2JqZWN0LFxuICBdKSxcbiAgdmVyc2VFbGVtZW50czogUHJvcFR5cGVzLm9uZU9mVHlwZShbXG4gICAgUHJvcFR5cGVzLmVsZW1lbnQsXG4gICAgUHJvcFR5cGVzLnN0cmluZyxcbiAgICBQcm9wVHlwZXMuYXJyYXksXG4gIF0pLFxuICBiaWJsZUlkOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gIGRpcmVjdGlvbjogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICBjaGFwdGVyOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4gIHZlcnNlOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICBdKSxcbiAgb25FZGl0OiBQcm9wVHlwZXMuZnVuYyxcbiAgdHJhbnNsYXRlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgVmVyc2U7XG4iXX0=