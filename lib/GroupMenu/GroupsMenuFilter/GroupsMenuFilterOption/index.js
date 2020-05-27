"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var GroupsMenuFilterOption = function GroupsMenuFilterOption(_ref) {
  var name = _ref.name,
      text = _ref.text,
      icon = _ref.icon,
      checked = _ref.checked,
      disabled = _ref.disabled,
      onCheck = _ref.onCheck;
  return _react["default"].createElement("label", {
    className: 'option' + (disabled ? ' disabled' : '')
  }, _react["default"].createElement("span", {
    className: "option-checkbox"
  }, _react["default"].createElement("input", {
    type: "checkbox",
    name: name,
    checked: checked,
    disabled: disabled,
    onChange: function onChange(_ref2) {
      var value = _ref2.target;
      return onCheck(name, value.checked);
    }
  })), _react["default"].createElement("span", {
    className: "option-icon"
  }, icon), _react["default"].createElement("span", {
    className: "option-text"
  }, text));
};

GroupsMenuFilterOption.defaultProps = {
  checked: false,
  disabled: false
};
GroupsMenuFilterOption.propTypes = {
  name: _propTypes["default"].string.isRequired,
  text: _propTypes["default"].string.isRequired,
  icon: _propTypes["default"].object.isRequired,
  setFilter: _propTypes["default"].func.isRequired,
  checked: _propTypes["default"].bool,
  disabled: _propTypes["default"].bool,
  onCheck: _propTypes["default"].func.isRequired
};
var _default = GroupsMenuFilterOption;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9Hcm91cE1lbnUvR3JvdXBzTWVudUZpbHRlci9Hcm91cHNNZW51RmlsdGVyT3B0aW9uL2luZGV4LmpzIl0sIm5hbWVzIjpbIkdyb3Vwc01lbnVGaWx0ZXJPcHRpb24iLCJuYW1lIiwidGV4dCIsImljb24iLCJjaGVja2VkIiwiZGlzYWJsZWQiLCJvbkNoZWNrIiwidmFsdWUiLCJ0YXJnZXQiLCJkZWZhdWx0UHJvcHMiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJzdHJpbmciLCJpc1JlcXVpcmVkIiwib2JqZWN0Iiwic2V0RmlsdGVyIiwiZnVuYyIsImJvb2wiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUVBLElBQU1BLHNCQUFzQixHQUFHLFNBQXpCQSxzQkFBeUI7QUFBQSxNQUM3QkMsSUFENkIsUUFDN0JBLElBRDZCO0FBQUEsTUFFN0JDLElBRjZCLFFBRTdCQSxJQUY2QjtBQUFBLE1BRzdCQyxJQUg2QixRQUc3QkEsSUFINkI7QUFBQSxNQUk3QkMsT0FKNkIsUUFJN0JBLE9BSjZCO0FBQUEsTUFLN0JDLFFBTDZCLFFBSzdCQSxRQUw2QjtBQUFBLE1BTTdCQyxPQU42QixRQU03QkEsT0FONkI7QUFBQSxTQVE3QjtBQUFPLElBQUEsU0FBUyxFQUFFLFlBQVlELFFBQVEsR0FBRyxXQUFILEdBQWlCLEVBQXJDO0FBQWxCLEtBQ0U7QUFBTSxJQUFBLFNBQVMsRUFBQztBQUFoQixLQUNFO0FBQU8sSUFBQSxJQUFJLEVBQUMsVUFBWjtBQUF1QixJQUFBLElBQUksRUFBRUosSUFBN0I7QUFBbUMsSUFBQSxPQUFPLEVBQUVHLE9BQTVDO0FBQXFELElBQUEsUUFBUSxFQUFFQyxRQUEvRDtBQUF5RSxJQUFBLFFBQVEsRUFDL0U7QUFBQSxVQUFXRSxLQUFYLFNBQUdDLE1BQUg7QUFBQSxhQUF1QkYsT0FBTyxDQUFDTCxJQUFELEVBQU9NLEtBQUssQ0FBQ0gsT0FBYixDQUE5QjtBQUFBO0FBREYsSUFERixDQURGLEVBS0U7QUFBTSxJQUFBLFNBQVMsRUFBQztBQUFoQixLQUNHRCxJQURILENBTEYsRUFRRTtBQUFNLElBQUEsU0FBUyxFQUFDO0FBQWhCLEtBQ0dELElBREgsQ0FSRixDQVI2QjtBQUFBLENBQS9COztBQXNCQUYsc0JBQXNCLENBQUNTLFlBQXZCLEdBQXNDO0FBQ3BDTCxFQUFBQSxPQUFPLEVBQUUsS0FEMkI7QUFFcENDLEVBQUFBLFFBQVEsRUFBRTtBQUYwQixDQUF0QztBQUtBTCxzQkFBc0IsQ0FBQ1UsU0FBdkIsR0FBbUM7QUFDakNULEVBQUFBLElBQUksRUFBRVUsc0JBQVVDLE1BQVYsQ0FBaUJDLFVBRFU7QUFFakNYLEVBQUFBLElBQUksRUFBRVMsc0JBQVVDLE1BQVYsQ0FBaUJDLFVBRlU7QUFHakNWLEVBQUFBLElBQUksRUFBRVEsc0JBQVVHLE1BQVYsQ0FBaUJELFVBSFU7QUFJakNFLEVBQUFBLFNBQVMsRUFBRUosc0JBQVVLLElBQVYsQ0FBZUgsVUFKTztBQUtqQ1QsRUFBQUEsT0FBTyxFQUFFTyxzQkFBVU0sSUFMYztBQU1qQ1osRUFBQUEsUUFBUSxFQUFFTSxzQkFBVU0sSUFOYTtBQU9qQ1gsRUFBQUEsT0FBTyxFQUFFSyxzQkFBVUssSUFBVixDQUFlSDtBQVBTLENBQW5DO2VBVWViLHNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmNvbnN0IEdyb3Vwc01lbnVGaWx0ZXJPcHRpb24gPSAoe1xuICBuYW1lLFxuICB0ZXh0LFxuICBpY29uLFxuICBjaGVja2VkLFxuICBkaXNhYmxlZCxcbiAgb25DaGVjayxcbn0pID0+IChcbiAgPGxhYmVsIGNsYXNzTmFtZT17J29wdGlvbicgKyAoZGlzYWJsZWQgPyAnIGRpc2FibGVkJyA6ICcnKX0+XG4gICAgPHNwYW4gY2xhc3NOYW1lPVwib3B0aW9uLWNoZWNrYm94XCI+XG4gICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgbmFtZT17bmFtZX0gY2hlY2tlZD17Y2hlY2tlZH0gZGlzYWJsZWQ9e2Rpc2FibGVkfSBvbkNoYW5nZT17XG4gICAgICAgICh7IHRhcmdldDogdmFsdWUgfSkgPT4gb25DaGVjayhuYW1lLCB2YWx1ZS5jaGVja2VkKX0gLz5cbiAgICA8L3NwYW4+XG4gICAgPHNwYW4gY2xhc3NOYW1lPVwib3B0aW9uLWljb25cIj5cbiAgICAgIHtpY29ufVxuICAgIDwvc3Bhbj5cbiAgICA8c3BhbiBjbGFzc05hbWU9XCJvcHRpb24tdGV4dFwiPlxuICAgICAge3RleHR9XG4gICAgPC9zcGFuPlxuICA8L2xhYmVsPlxuKTtcblxuR3JvdXBzTWVudUZpbHRlck9wdGlvbi5kZWZhdWx0UHJvcHMgPSB7XG4gIGNoZWNrZWQ6IGZhbHNlLFxuICBkaXNhYmxlZDogZmFsc2UsXG59O1xuXG5Hcm91cHNNZW51RmlsdGVyT3B0aW9uLnByb3BUeXBlcyA9IHtcbiAgbmFtZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICB0ZXh0OiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gIGljb246IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgc2V0RmlsdGVyOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICBjaGVja2VkOiBQcm9wVHlwZXMuYm9vbCxcbiAgZGlzYWJsZWQ6IFByb3BUeXBlcy5ib29sLFxuICBvbkNoZWNrOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgR3JvdXBzTWVudUZpbHRlck9wdGlvbjtcbiJdfQ==