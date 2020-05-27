"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Logo = _interopRequireDefault(require("./Logo"));

require("./SpinningLogo.styles.css");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var SpinningLogo = function SpinningLogo(_ref) {
  var height = _ref.height,
      style = _ref.style;

  var styles = _objectSpread({
    margin: '25px 20px 0px 55px'
  }, style);

  return _react["default"].createElement("div", {
    className: "container"
  }, _react["default"].createElement(_Logo["default"], {
    className: "App-logo-component",
    height: height,
    style: styles
  }));
};

SpinningLogo.propTypes = {
  height: _propTypes["default"].string.isRequired,
  style: _propTypes["default"].object
};
SpinningLogo.defaultProps = {
  height: '300px',
  style: {}
};
var _default = SpinningLogo;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9TcGlubmluZ0xvZ28vaW5kZXguanMiXSwibmFtZXMiOlsiU3Bpbm5pbmdMb2dvIiwiaGVpZ2h0Iiwic3R5bGUiLCJzdHlsZXMiLCJtYXJnaW4iLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJzdHJpbmciLCJpc1JlcXVpcmVkIiwib2JqZWN0IiwiZGVmYXVsdFByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7QUFFQSxJQUFNQSxZQUFZLEdBQUcsU0FBZkEsWUFBZSxPQUdmO0FBQUEsTUFGSkMsTUFFSSxRQUZKQSxNQUVJO0FBQUEsTUFESkMsS0FDSSxRQURKQSxLQUNJOztBQUNKLE1BQU1DLE1BQU07QUFDVkMsSUFBQUEsTUFBTSxFQUFFO0FBREUsS0FFUEYsS0FGTyxDQUFaOztBQUtBLFNBQ0U7QUFBSyxJQUFBLFNBQVMsRUFBQztBQUFmLEtBQ0UsZ0NBQUMsZ0JBQUQ7QUFDRSxJQUFBLFNBQVMsRUFBQyxvQkFEWjtBQUVFLElBQUEsTUFBTSxFQUFFRCxNQUZWO0FBR0UsSUFBQSxLQUFLLEVBQUVFO0FBSFQsSUFERixDQURGO0FBU0QsQ0FsQkQ7O0FBb0JBSCxZQUFZLENBQUNLLFNBQWIsR0FBeUI7QUFDdkJKLEVBQUFBLE1BQU0sRUFBRUssc0JBQVVDLE1BQVYsQ0FBaUJDLFVBREY7QUFFdkJOLEVBQUFBLEtBQUssRUFBRUksc0JBQVVHO0FBRk0sQ0FBekI7QUFLQVQsWUFBWSxDQUFDVSxZQUFiLEdBQTRCO0FBQzFCVCxFQUFBQSxNQUFNLEVBQUUsT0FEa0I7QUFFMUJDLEVBQUFBLEtBQUssRUFBRTtBQUZtQixDQUE1QjtlQUtlRixZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgTG9nbyBmcm9tICcuL0xvZ28nO1xuaW1wb3J0ICcuL1NwaW5uaW5nTG9nby5zdHlsZXMuY3NzJztcblxuY29uc3QgU3Bpbm5pbmdMb2dvID0gKHtcbiAgaGVpZ2h0LFxuICBzdHlsZSxcbn0pID0+IHtcbiAgY29uc3Qgc3R5bGVzID0ge1xuICAgIG1hcmdpbjogJzI1cHggMjBweCAwcHggNTVweCcsXG4gICAgLi4uc3R5bGUsXG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgPExvZ29cbiAgICAgICAgY2xhc3NOYW1lPVwiQXBwLWxvZ28tY29tcG9uZW50XCJcbiAgICAgICAgaGVpZ2h0PXtoZWlnaHR9XG4gICAgICAgIHN0eWxlPXtzdHlsZXN9XG4gICAgICAvPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuU3Bpbm5pbmdMb2dvLnByb3BUeXBlcyA9IHtcbiAgaGVpZ2h0OiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gIHN0eWxlOiBQcm9wVHlwZXMub2JqZWN0LFxufTtcblxuU3Bpbm5pbmdMb2dvLmRlZmF1bHRQcm9wcyA9IHtcbiAgaGVpZ2h0OiAnMzAwcHgnLFxuICBzdHlsZToge30sXG59O1xuXG5leHBvcnQgZGVmYXVsdCBTcGlubmluZ0xvZ287XG4iXX0=