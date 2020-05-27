"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

require("./NoResults.styles.css");

var NoResults = function NoResults(_ref) {
  var translate = _ref.translate;
  return _react["default"].createElement("div", {
    className: "no-results"
  }, translate('menu.no_results'));
};

NoResults.propTypes = {
  translate: _propTypes["default"].func.isRequired
};
var _default = NoResults;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9Hcm91cE1lbnUvTm9SZXN1bHRzL2luZGV4LmpzIl0sIm5hbWVzIjpbIk5vUmVzdWx0cyIsInRyYW5zbGF0ZSIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsImZ1bmMiLCJpc1JlcXVpcmVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFFQTs7QUFFQSxJQUFNQSxTQUFTLEdBQUcsU0FBWkEsU0FBWTtBQUFBLE1BQUdDLFNBQUgsUUFBR0EsU0FBSDtBQUFBLFNBQW9CO0FBQUssSUFBQSxTQUFTLEVBQUM7QUFBZixLQUE2QkEsU0FBUyxDQUFDLGlCQUFELENBQXRDLENBQXBCO0FBQUEsQ0FBbEI7O0FBRUFELFNBQVMsQ0FBQ0UsU0FBVixHQUFzQjtBQUFFRCxFQUFBQSxTQUFTLEVBQUVFLHNCQUFVQyxJQUFWLENBQWVDO0FBQTVCLENBQXRCO2VBRWVMLFMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuaW1wb3J0ICcuL05vUmVzdWx0cy5zdHlsZXMuY3NzJztcblxuY29uc3QgTm9SZXN1bHRzID0gKHsgdHJhbnNsYXRlIH0pID0+ICg8ZGl2IGNsYXNzTmFtZT0nbm8tcmVzdWx0cyc+e3RyYW5zbGF0ZSgnbWVudS5ub19yZXN1bHRzJyl9PC9kaXY+KTtcblxuTm9SZXN1bHRzLnByb3BUeXBlcyA9IHsgdHJhbnNsYXRlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkIH07XG5cbmV4cG9ydCBkZWZhdWx0IE5vUmVzdWx0cztcbiJdfQ==