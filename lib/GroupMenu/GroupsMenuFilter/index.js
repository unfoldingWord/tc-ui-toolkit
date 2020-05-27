"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _ExpandedFilter = _interopRequireDefault(require("./ExpandedFilter"));

var _CollapsedFilter = _interopRequireDefault(require("./CollapsedFilter"));

var GroupsMenuFilter = function GroupsMenuFilter(_ref) {
  var currentToolName = _ref.currentToolName,
      filters = _ref.filters,
      translate = _ref.translate,
      expandFilter = _ref.expandFilter,
      setFilter = _ref.setFilter,
      filterCount = _ref.filterCount;

  if (currentToolName === 'translationWords' && (expandFilter || filterCount)) {
    if (expandFilter) {
      return _react["default"].createElement(_ExpandedFilter["default"], {
        filters: filters,
        setFilter: setFilter,
        translate: translate
      });
    } else {
      return _react["default"].createElement(_CollapsedFilter["default"], {
        filters: filters,
        setFilter: setFilter,
        translate: translate
      });
    }
  } else {
    return null;
  }
};

GroupsMenuFilter.defaultProps = {
  expandFilter: false
};
GroupsMenuFilter.propTypes = {
  translate: _propTypes["default"].func.isRequired,
  filters: _propTypes["default"].object.isRequired,
  setFilter: _propTypes["default"].func,
  expandFilter: _propTypes["default"].bool
};
var _default = GroupsMenuFilter;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9Hcm91cE1lbnUvR3JvdXBzTWVudUZpbHRlci9pbmRleC5qcyJdLCJuYW1lcyI6WyJHcm91cHNNZW51RmlsdGVyIiwiY3VycmVudFRvb2xOYW1lIiwiZmlsdGVycyIsInRyYW5zbGF0ZSIsImV4cGFuZEZpbHRlciIsInNldEZpbHRlciIsImZpbHRlckNvdW50IiwiZGVmYXVsdFByb3BzIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwiZnVuYyIsImlzUmVxdWlyZWQiLCJvYmplY3QiLCJib29sIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFFQSxJQUFNQSxnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQW1CLE9BT25CO0FBQUEsTUFOSkMsZUFNSSxRQU5KQSxlQU1JO0FBQUEsTUFMSkMsT0FLSSxRQUxKQSxPQUtJO0FBQUEsTUFKSkMsU0FJSSxRQUpKQSxTQUlJO0FBQUEsTUFISkMsWUFHSSxRQUhKQSxZQUdJO0FBQUEsTUFGSkMsU0FFSSxRQUZKQSxTQUVJO0FBQUEsTUFESkMsV0FDSSxRQURKQSxXQUNJOztBQUNKLE1BQUlMLGVBQWUsS0FBSyxrQkFBcEIsS0FBMkNHLFlBQVksSUFBSUUsV0FBM0QsQ0FBSixFQUE2RTtBQUMzRSxRQUFJRixZQUFKLEVBQWtCO0FBQ2hCLGFBQ0UsZ0NBQUMsMEJBQUQ7QUFDRSxRQUFBLE9BQU8sRUFBRUYsT0FEWDtBQUVFLFFBQUEsU0FBUyxFQUFFRyxTQUZiO0FBR0UsUUFBQSxTQUFTLEVBQUVGO0FBSGIsUUFERjtBQUtELEtBTkQsTUFNTztBQUNMLGFBQ0UsZ0NBQUMsMkJBQUQ7QUFDRSxRQUFBLE9BQU8sRUFBRUQsT0FEWDtBQUVFLFFBQUEsU0FBUyxFQUFFRyxTQUZiO0FBR0UsUUFBQSxTQUFTLEVBQUVGO0FBSGIsUUFERjtBQU1EO0FBQ0YsR0FmRCxNQWVPO0FBQ0wsV0FBTyxJQUFQO0FBQ0Q7QUFDRixDQTFCRDs7QUE0QkFILGdCQUFnQixDQUFDTyxZQUFqQixHQUFnQztBQUFFSCxFQUFBQSxZQUFZLEVBQUU7QUFBaEIsQ0FBaEM7QUFFQUosZ0JBQWdCLENBQUNRLFNBQWpCLEdBQTZCO0FBQzNCTCxFQUFBQSxTQUFTLEVBQUVNLHNCQUFVQyxJQUFWLENBQWVDLFVBREM7QUFFM0JULEVBQUFBLE9BQU8sRUFBRU8sc0JBQVVHLE1BQVYsQ0FBaUJELFVBRkM7QUFHM0JOLEVBQUFBLFNBQVMsRUFBRUksc0JBQVVDLElBSE07QUFJM0JOLEVBQUFBLFlBQVksRUFBRUssc0JBQVVJO0FBSkcsQ0FBN0I7ZUFPZWIsZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBFeHBhbmRlZEZpbHRlciBmcm9tICcuL0V4cGFuZGVkRmlsdGVyJztcbmltcG9ydCBDb2xsYXBzZWRGaWx0ZXIgZnJvbSAnLi9Db2xsYXBzZWRGaWx0ZXInO1xuXG5jb25zdCBHcm91cHNNZW51RmlsdGVyID0gKHtcbiAgY3VycmVudFRvb2xOYW1lLFxuICBmaWx0ZXJzLFxuICB0cmFuc2xhdGUsXG4gIGV4cGFuZEZpbHRlcixcbiAgc2V0RmlsdGVyLFxuICBmaWx0ZXJDb3VudCxcbn0pID0+IHtcbiAgaWYgKGN1cnJlbnRUb29sTmFtZSA9PT0gJ3RyYW5zbGF0aW9uV29yZHMnICYmIChleHBhbmRGaWx0ZXIgfHwgZmlsdGVyQ291bnQpKSB7XG4gICAgaWYgKGV4cGFuZEZpbHRlcikge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPEV4cGFuZGVkRmlsdGVyXG4gICAgICAgICAgZmlsdGVycz17ZmlsdGVyc31cbiAgICAgICAgICBzZXRGaWx0ZXI9e3NldEZpbHRlcn1cbiAgICAgICAgICB0cmFuc2xhdGU9e3RyYW5zbGF0ZX0gLz4pO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8Q29sbGFwc2VkRmlsdGVyXG4gICAgICAgICAgZmlsdGVycz17ZmlsdGVyc31cbiAgICAgICAgICBzZXRGaWx0ZXI9e3NldEZpbHRlcn1cbiAgICAgICAgICB0cmFuc2xhdGU9e3RyYW5zbGF0ZX1cbiAgICAgICAgLz4pO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxufTtcblxuR3JvdXBzTWVudUZpbHRlci5kZWZhdWx0UHJvcHMgPSB7IGV4cGFuZEZpbHRlcjogZmFsc2UgfTtcblxuR3JvdXBzTWVudUZpbHRlci5wcm9wVHlwZXMgPSB7XG4gIHRyYW5zbGF0ZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgZmlsdGVyczogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuICBzZXRGaWx0ZXI6IFByb3BUeXBlcy5mdW5jLFxuICBleHBhbmRGaWx0ZXI6IFByb3BUeXBlcy5ib29sLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgR3JvdXBzTWVudUZpbHRlcjtcbiJdfQ==