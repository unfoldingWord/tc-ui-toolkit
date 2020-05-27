"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactBootstrap = require("react-bootstrap");

var GroupsMenuFilterBubble = function GroupsMenuFilterBubble(_ref) {
  var onPress = _ref.onPress,
      text = _ref.text,
      name = _ref.name;
  return _react["default"].createElement("span", {
    className: "filter-bubble-wrapper"
  }, _react["default"].createElement("span", {
    className: "filter-bubble"
  }, _react["default"].createElement(_reactBootstrap.Glyphicon, {
    className: "filter-remove",
    glyph: "remove",
    onClick: function onClick() {
      return onPress(name);
    }
  }), _react["default"].createElement("span", {
    className: "filter-text"
  }, text)));
};

GroupsMenuFilterBubble.propTypes = {
  onPress: _propTypes["default"].func.isRequired,
  name: _propTypes["default"].string.isRequired,
  text: _propTypes["default"].string.isRequired
};
var _default = GroupsMenuFilterBubble;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9Hcm91cE1lbnUvR3JvdXBzTWVudUZpbHRlci9Hcm91cHNNZW51RmlsdGVyQnViYmxlL2luZGV4LmpzIl0sIm5hbWVzIjpbIkdyb3Vwc01lbnVGaWx0ZXJCdWJibGUiLCJvblByZXNzIiwidGV4dCIsIm5hbWUiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJmdW5jIiwiaXNSZXF1aXJlZCIsInN0cmluZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBRUEsSUFBTUEsc0JBQXNCLEdBQUcsU0FBekJBLHNCQUF5QjtBQUFBLE1BQzdCQyxPQUQ2QixRQUM3QkEsT0FENkI7QUFBQSxNQUU3QkMsSUFGNkIsUUFFN0JBLElBRjZCO0FBQUEsTUFHN0JDLElBSDZCLFFBRzdCQSxJQUg2QjtBQUFBLFNBSzdCO0FBQU0sSUFBQSxTQUFTLEVBQUM7QUFBaEIsS0FDRTtBQUFNLElBQUEsU0FBUyxFQUFDO0FBQWhCLEtBQ0UsZ0NBQUMseUJBQUQ7QUFBVyxJQUFBLFNBQVMsRUFBQyxlQUFyQjtBQUFxQyxJQUFBLEtBQUssRUFBQyxRQUEzQztBQUFvRCxJQUFBLE9BQU8sRUFBRTtBQUFBLGFBQU1GLE9BQU8sQ0FBQ0UsSUFBRCxDQUFiO0FBQUE7QUFBN0QsSUFERixFQUVFO0FBQU0sSUFBQSxTQUFTLEVBQUM7QUFBaEIsS0FBK0JELElBQS9CLENBRkYsQ0FERixDQUw2QjtBQUFBLENBQS9COztBQWFBRixzQkFBc0IsQ0FBQ0ksU0FBdkIsR0FBbUM7QUFDakNILEVBQUFBLE9BQU8sRUFBRUksc0JBQVVDLElBQVYsQ0FBZUMsVUFEUztBQUVqQ0osRUFBQUEsSUFBSSxFQUFFRSxzQkFBVUcsTUFBVixDQUFpQkQsVUFGVTtBQUdqQ0wsRUFBQUEsSUFBSSxFQUFFRyxzQkFBVUcsTUFBVixDQUFpQkQ7QUFIVSxDQUFuQztlQU1lUCxzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgR2x5cGhpY29uIH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJztcblxuY29uc3QgR3JvdXBzTWVudUZpbHRlckJ1YmJsZSA9ICh7XG4gIG9uUHJlc3MsXG4gIHRleHQsXG4gIG5hbWUsXG59KSA9PiAoXG4gIDxzcGFuIGNsYXNzTmFtZT1cImZpbHRlci1idWJibGUtd3JhcHBlclwiPlxuICAgIDxzcGFuIGNsYXNzTmFtZT1cImZpbHRlci1idWJibGVcIj5cbiAgICAgIDxHbHlwaGljb24gY2xhc3NOYW1lPSdmaWx0ZXItcmVtb3ZlJyBnbHlwaD0ncmVtb3ZlJyBvbkNsaWNrPXsoKSA9PiBvblByZXNzKG5hbWUpfSAvPlxuICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZmlsdGVyLXRleHRcIj57dGV4dH08L3NwYW4+XG4gICAgPC9zcGFuPlxuICA8L3NwYW4+XG4pO1xuXG5Hcm91cHNNZW51RmlsdGVyQnViYmxlLnByb3BUeXBlcyA9IHtcbiAgb25QcmVzczogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgbmFtZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICB0ZXh0OiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBHcm91cHNNZW51RmlsdGVyQnViYmxlO1xuIl19