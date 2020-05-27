"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _marked = _interopRequireDefault(require("marked"));

var THelpsMarkDown = function THelpsMarkDown(_ref) {
  var article = _ref.article;
  return _react["default"].createElement("div", {
    className: "helps-article"
  }, _react["default"].createElement("style", {
    dangerouslySetInnerHTML: {
      __html: ['.remarkableStyling h1{', 'font-size: 19px;', 'font-weight: bold;', '}', '.remarkableStyling h2{', 'font-size: 14px;', 'font-weight: normal;', '}', '.remarkableStyling h3{', 'font-size: 16px;', 'font-weight: bold;', '}', '.remarkableStyling h4{', 'font-size: 16px;', 'font-weight: bold;', '}', '.remarkableStyling blockquote {', 'font-size: small;', 'padding: 0 20px;', 'margin: 0 0 10px;', '}', '.remarkableStyling blockquote strong {', 'text-decoration: underline;', 'font-weight: normal;', '}'].join('\n')
    }
  }), _react["default"].createElement("div", {
    id: "helpsbody",
    className: "remarkableStyling helpsBody"
  }, _react["default"].createElement("div", {
    dangerouslySetInnerHTML: {
      __html: (0, _marked["default"])(article)
    }
  })));
};

THelpsMarkDown.propTypes = {
  article: _propTypes["default"].string.isRequired
};
var _default = THelpsMarkDown;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9UcmFuc2xhdGlvbkhlbHBzL1RIZWxwc01hcmtEb3duL2luZGV4LmpzIl0sIm5hbWVzIjpbIlRIZWxwc01hcmtEb3duIiwiYXJ0aWNsZSIsIl9faHRtbCIsImpvaW4iLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJzdHJpbmciLCJpc1JlcXVpcmVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFFQSxJQUFNQSxjQUFjLEdBQUcsU0FBakJBLGNBQWlCO0FBQUEsTUFBR0MsT0FBSCxRQUFHQSxPQUFIO0FBQUEsU0FDckI7QUFBSyxJQUFBLFNBQVMsRUFBQztBQUFmLEtBQ0U7QUFBTyxJQUFBLHVCQUF1QixFQUFFO0FBQzlCQyxNQUFBQSxNQUFNLEVBQUUsQ0FDTix3QkFETSxFQUVOLGtCQUZNLEVBR04sb0JBSE0sRUFJTixHQUpNLEVBS04sd0JBTE0sRUFNTixrQkFOTSxFQU9OLHNCQVBNLEVBUU4sR0FSTSxFQVNOLHdCQVRNLEVBVU4sa0JBVk0sRUFXTixvQkFYTSxFQVlOLEdBWk0sRUFhTix3QkFiTSxFQWNOLGtCQWRNLEVBZU4sb0JBZk0sRUFnQk4sR0FoQk0sRUFpQk4saUNBakJNLEVBa0JOLG1CQWxCTSxFQW1CTixrQkFuQk0sRUFvQk4sbUJBcEJNLEVBcUJOLEdBckJNLEVBc0JOLHdDQXRCTSxFQXVCTiw2QkF2Qk0sRUF3Qk4sc0JBeEJNLEVBeUJOLEdBekJNLEVBMEJOQyxJQTFCTSxDQTBCRCxJQTFCQztBQURzQjtBQUFoQyxJQURGLEVBK0JFO0FBQUssSUFBQSxFQUFFLEVBQUMsV0FBUjtBQUFvQixJQUFBLFNBQVMsRUFBQztBQUE5QixLQUNFO0FBQUssSUFBQSx1QkFBdUIsRUFBRTtBQUFFRCxNQUFBQSxNQUFNLEVBQUUsd0JBQU9ELE9BQVA7QUFBVjtBQUE5QixJQURGLENBL0JGLENBRHFCO0FBQUEsQ0FBdkI7O0FBc0NBRCxjQUFjLENBQUNJLFNBQWYsR0FBMkI7QUFBRUgsRUFBQUEsT0FBTyxFQUFFSSxzQkFBVUMsTUFBVixDQUFpQkM7QUFBNUIsQ0FBM0I7ZUFFZVAsYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IG1hcmtlZCBmcm9tICdtYXJrZWQnO1xuXG5jb25zdCBUSGVscHNNYXJrRG93biA9ICh7IGFydGljbGUgfSkgPT4gKFxuICA8ZGl2IGNsYXNzTmFtZT1cImhlbHBzLWFydGljbGVcIj5cbiAgICA8c3R5bGUgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tcbiAgICAgIF9faHRtbDogW1xuICAgICAgICAnLnJlbWFya2FibGVTdHlsaW5nIGgxeycsXG4gICAgICAgICdmb250LXNpemU6IDE5cHg7JyxcbiAgICAgICAgJ2ZvbnQtd2VpZ2h0OiBib2xkOycsXG4gICAgICAgICd9JyxcbiAgICAgICAgJy5yZW1hcmthYmxlU3R5bGluZyBoMnsnLFxuICAgICAgICAnZm9udC1zaXplOiAxNHB4OycsXG4gICAgICAgICdmb250LXdlaWdodDogbm9ybWFsOycsXG4gICAgICAgICd9JyxcbiAgICAgICAgJy5yZW1hcmthYmxlU3R5bGluZyBoM3snLFxuICAgICAgICAnZm9udC1zaXplOiAxNnB4OycsXG4gICAgICAgICdmb250LXdlaWdodDogYm9sZDsnLFxuICAgICAgICAnfScsXG4gICAgICAgICcucmVtYXJrYWJsZVN0eWxpbmcgaDR7JyxcbiAgICAgICAgJ2ZvbnQtc2l6ZTogMTZweDsnLFxuICAgICAgICAnZm9udC13ZWlnaHQ6IGJvbGQ7JyxcbiAgICAgICAgJ30nLFxuICAgICAgICAnLnJlbWFya2FibGVTdHlsaW5nIGJsb2NrcXVvdGUgeycsXG4gICAgICAgICdmb250LXNpemU6IHNtYWxsOycsXG4gICAgICAgICdwYWRkaW5nOiAwIDIwcHg7JyxcbiAgICAgICAgJ21hcmdpbjogMCAwIDEwcHg7JyxcbiAgICAgICAgJ30nLFxuICAgICAgICAnLnJlbWFya2FibGVTdHlsaW5nIGJsb2NrcXVvdGUgc3Ryb25nIHsnLFxuICAgICAgICAndGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7JyxcbiAgICAgICAgJ2ZvbnQtd2VpZ2h0OiBub3JtYWw7JyxcbiAgICAgICAgJ30nLFxuICAgICAgXS5qb2luKCdcXG4nKSxcbiAgICB9fT5cbiAgICA8L3N0eWxlPlxuICAgIDxkaXYgaWQ9XCJoZWxwc2JvZHlcIiBjbGFzc05hbWU9XCJyZW1hcmthYmxlU3R5bGluZyBoZWxwc0JvZHlcIj5cbiAgICAgIDxkaXYgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiBtYXJrZWQoYXJ0aWNsZSkgfX0gLz5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG4pO1xuXG5USGVscHNNYXJrRG93bi5wcm9wVHlwZXMgPSB7IGFydGljbGU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCB9O1xuXG5leHBvcnQgZGVmYXVsdCBUSGVscHNNYXJrRG93bjtcbiJdfQ==