"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Logo = _interopRequireDefault(require("../SpinningLogo/Logo"));

var WarningDialogContent = function WarningDialogContent(_ref) {
  var translate = _ref.translate;
  return _react["default"].createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center'
    }
  }, _react["default"].createElement(_Logo["default"], {
    height: "100px",
    width: "150px",
    style: {
      margin: '15px 18px'
    }
  }), _react["default"].createElement("p", {
    style: {
      margin: '0 0 0 10px'
    }
  }, translate('unsaved_changes')));
};

WarningDialogContent.propTypes = {
  translate: _propTypes["default"].func.isRequired
};
var _default = WarningDialogContent;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9WZXJzZUVkaXRvci9XYXJuaW5nRGlhbG9nQ29udGVudC5qcyJdLCJuYW1lcyI6WyJXYXJuaW5nRGlhbG9nQ29udGVudCIsInRyYW5zbGF0ZSIsImRpc3BsYXkiLCJhbGlnbkl0ZW1zIiwibWFyZ2luIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwiZnVuYyIsImlzUmVxdWlyZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUVBLElBQU1BLG9CQUFvQixHQUFHLFNBQXZCQSxvQkFBdUI7QUFBQSxNQUFHQyxTQUFILFFBQUdBLFNBQUg7QUFBQSxTQUMzQjtBQUFLLElBQUEsS0FBSyxFQUFFO0FBQUVDLE1BQUFBLE9BQU8sRUFBRSxNQUFYO0FBQW1CQyxNQUFBQSxVQUFVLEVBQUU7QUFBL0I7QUFBWixLQUNFLGdDQUFDLGdCQUFEO0FBQ0UsSUFBQSxNQUFNLEVBQUMsT0FEVDtBQUVFLElBQUEsS0FBSyxFQUFDLE9BRlI7QUFHRSxJQUFBLEtBQUssRUFBRTtBQUFFQyxNQUFBQSxNQUFNLEVBQUU7QUFBVjtBQUhULElBREYsRUFNRTtBQUFHLElBQUEsS0FBSyxFQUFFO0FBQUVBLE1BQUFBLE1BQU0sRUFBRTtBQUFWO0FBQVYsS0FDR0gsU0FBUyxDQUFDLGlCQUFELENBRFosQ0FORixDQUQyQjtBQUFBLENBQTdCOztBQWFBRCxvQkFBb0IsQ0FBQ0ssU0FBckIsR0FBaUM7QUFBRUosRUFBQUEsU0FBUyxFQUFFSyxzQkFBVUMsSUFBVixDQUFlQztBQUE1QixDQUFqQztlQUVlUixvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IExvZ28gZnJvbSAnLi4vU3Bpbm5pbmdMb2dvL0xvZ28nO1xuXG5jb25zdCBXYXJuaW5nRGlhbG9nQ29udGVudCA9ICh7IHRyYW5zbGF0ZSB9KSA9PiAoXG4gIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCBhbGlnbkl0ZW1zOiAnY2VudGVyJyB9fT5cbiAgICA8TG9nb1xuICAgICAgaGVpZ2h0PVwiMTAwcHhcIlxuICAgICAgd2lkdGg9XCIxNTBweFwiXG4gICAgICBzdHlsZT17eyBtYXJnaW46ICcxNXB4IDE4cHgnIH19XG4gICAgLz5cbiAgICA8cCBzdHlsZT17eyBtYXJnaW46ICcwIDAgMCAxMHB4JyB9fT5cbiAgICAgIHt0cmFuc2xhdGUoJ3Vuc2F2ZWRfY2hhbmdlcycpfVxuICAgIDwvcD5cbiAgPC9kaXY+XG4pO1xuXG5XYXJuaW5nRGlhbG9nQ29udGVudC5wcm9wVHlwZXMgPSB7IHRyYW5zbGF0ZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCB9O1xuXG5leHBvcnQgZGVmYXVsdCBXYXJuaW5nRGlhbG9nQ29udGVudDtcbiJdfQ==