"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactBootstrap = require("react-bootstrap");

var _fontUtils = require("../../common/fontUtils");

var MyTargetVerse = function MyTargetVerse(_ref) {
  var chapter = _ref.chapter,
      verse = _ref.verse,
      verseText = _ref.verseText,
      styles = _ref.styles,
      dir = _ref.dir,
      targetLanguageFont = _ref.targetLanguageFont;
  var chapterVerse;

  if (dir == 'rtl') {
    chapterVerse = verse + ':' + chapter + ' ';
  } else {
    chapterVerse = chapter + ':' + verse + ' ';
  }

  var fontClass = (0, _fontUtils.getFontClassName)(targetLanguageFont);
  return _react["default"].createElement(_reactBootstrap.Col, {
    md: 12,
    sm: 12,
    xs: 12,
    lg: 12,
    style: styles
  }, _react["default"].createElement("div", {
    style: {
      direction: dir
    }
  }, _react["default"].createElement("b", null, chapterVerse), _react["default"].createElement("span", {
    className: fontClass
  }, verseText)));
};

MyTargetVerse.propTypes = {
  chapter: _propTypes["default"].number.isRequired,
  verse: _propTypes["default"].number.isRequired,
  verseText: _propTypes["default"].string.isRequired,
  styles: _propTypes["default"].object.isRequired,
  dir: _propTypes["default"].string.isRequired,
  targetLanguageFont: _propTypes["default"].string
};
var _default = MyTargetVerse;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9WZXJzZUNoZWNrL015VGFyZ2V0VmVyc2UvaW5kZXguanMiXSwibmFtZXMiOlsiTXlUYXJnZXRWZXJzZSIsImNoYXB0ZXIiLCJ2ZXJzZSIsInZlcnNlVGV4dCIsInN0eWxlcyIsImRpciIsInRhcmdldExhbmd1YWdlRm9udCIsImNoYXB0ZXJWZXJzZSIsImZvbnRDbGFzcyIsImRpcmVjdGlvbiIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsIm51bWJlciIsImlzUmVxdWlyZWQiLCJzdHJpbmciLCJvYmplY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOztBQUVBLElBQU1BLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsT0FPaEI7QUFBQSxNQU5KQyxPQU1JLFFBTkpBLE9BTUk7QUFBQSxNQUxKQyxLQUtJLFFBTEpBLEtBS0k7QUFBQSxNQUpKQyxTQUlJLFFBSkpBLFNBSUk7QUFBQSxNQUhKQyxNQUdJLFFBSEpBLE1BR0k7QUFBQSxNQUZKQyxHQUVJLFFBRkpBLEdBRUk7QUFBQSxNQURKQyxrQkFDSSxRQURKQSxrQkFDSTtBQUNKLE1BQUlDLFlBQUo7O0FBRUEsTUFBSUYsR0FBRyxJQUFJLEtBQVgsRUFBaUI7QUFDZkUsSUFBQUEsWUFBWSxHQUFHTCxLQUFLLEdBQUcsR0FBUixHQUFjRCxPQUFkLEdBQXdCLEdBQXZDO0FBQ0QsR0FGRCxNQUVPO0FBQ0xNLElBQUFBLFlBQVksR0FBR04sT0FBTyxHQUFHLEdBQVYsR0FBZ0JDLEtBQWhCLEdBQXdCLEdBQXZDO0FBQ0Q7O0FBRUQsTUFBTU0sU0FBUyxHQUFHLGlDQUFpQkYsa0JBQWpCLENBQWxCO0FBRUEsU0FDRSxnQ0FBQyxtQkFBRDtBQUFLLElBQUEsRUFBRSxFQUFFLEVBQVQ7QUFBYSxJQUFBLEVBQUUsRUFBRSxFQUFqQjtBQUFxQixJQUFBLEVBQUUsRUFBRSxFQUF6QjtBQUE2QixJQUFBLEVBQUUsRUFBRSxFQUFqQztBQUFxQyxJQUFBLEtBQUssRUFBRUY7QUFBNUMsS0FDRTtBQUFLLElBQUEsS0FBSyxFQUFFO0FBQUVLLE1BQUFBLFNBQVMsRUFBRUo7QUFBYjtBQUFaLEtBQ0UsMkNBQUlFLFlBQUosQ0FERixFQUVFO0FBQU0sSUFBQSxTQUFTLEVBQUVDO0FBQWpCLEtBQTZCTCxTQUE3QixDQUZGLENBREYsQ0FERjtBQVFELENBMUJEOztBQTRCQUgsYUFBYSxDQUFDVSxTQUFkLEdBQTBCO0FBQ3hCVCxFQUFBQSxPQUFPLEVBQUVVLHNCQUFVQyxNQUFWLENBQWlCQyxVQURGO0FBRXhCWCxFQUFBQSxLQUFLLEVBQUVTLHNCQUFVQyxNQUFWLENBQWlCQyxVQUZBO0FBR3hCVixFQUFBQSxTQUFTLEVBQUVRLHNCQUFVRyxNQUFWLENBQWlCRCxVQUhKO0FBSXhCVCxFQUFBQSxNQUFNLEVBQUVPLHNCQUFVSSxNQUFWLENBQWlCRixVQUpEO0FBS3hCUixFQUFBQSxHQUFHLEVBQUVNLHNCQUFVRyxNQUFWLENBQWlCRCxVQUxFO0FBTXhCUCxFQUFBQSxrQkFBa0IsRUFBRUssc0JBQVVHO0FBTk4sQ0FBMUI7ZUFTZWQsYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgQ29sIH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJztcbmltcG9ydCB7IGdldEZvbnRDbGFzc05hbWUgfSBmcm9tICcuLi8uLi9jb21tb24vZm9udFV0aWxzJztcblxuY29uc3QgTXlUYXJnZXRWZXJzZSA9ICh7XG4gIGNoYXB0ZXIsXG4gIHZlcnNlLFxuICB2ZXJzZVRleHQsXG4gIHN0eWxlcyxcbiAgZGlyLFxuICB0YXJnZXRMYW5ndWFnZUZvbnQsXG59KSA9PiB7XG4gIGxldCBjaGFwdGVyVmVyc2U7XG5cbiAgaWYgKGRpciA9PSAncnRsJyl7XG4gICAgY2hhcHRlclZlcnNlID0gdmVyc2UgKyAnOicgKyBjaGFwdGVyICsgJyAnO1xuICB9IGVsc2Uge1xuICAgIGNoYXB0ZXJWZXJzZSA9IGNoYXB0ZXIgKyAnOicgKyB2ZXJzZSArICcgJztcbiAgfVxuXG4gIGNvbnN0IGZvbnRDbGFzcyA9IGdldEZvbnRDbGFzc05hbWUodGFyZ2V0TGFuZ3VhZ2VGb250KTtcblxuICByZXR1cm4gKFxuICAgIDxDb2wgbWQ9ezEyfSBzbT17MTJ9IHhzPXsxMn0gbGc9ezEyfSBzdHlsZT17c3R5bGVzfT5cbiAgICAgIDxkaXYgc3R5bGU9e3sgZGlyZWN0aW9uOiBkaXIgfX0+XG4gICAgICAgIDxiPntjaGFwdGVyVmVyc2V9PC9iPlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2ZvbnRDbGFzc30+e3ZlcnNlVGV4dH08L3NwYW4+XG4gICAgICA8L2Rpdj5cbiAgICA8L0NvbD5cbiAgKTtcbn07XG5cbk15VGFyZ2V0VmVyc2UucHJvcFR5cGVzID0ge1xuICBjaGFwdGVyOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4gIHZlcnNlOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4gIHZlcnNlVGV4dDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICBzdHlsZXM6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgZGlyOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gIHRhcmdldExhbmd1YWdlRm9udDogUHJvcFR5cGVzLnN0cmluZyxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE15VGFyZ2V0VmVyc2U7XG4iXX0=