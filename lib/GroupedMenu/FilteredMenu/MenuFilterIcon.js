"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styles = require("@material-ui/core/styles");

var _Badge = _interopRequireDefault(require("@material-ui/core/Badge"));

var _Funnel = _interopRequireDefault(require("../../icons/Funnel"));

var styles = function styles() {
  return {
    badge: {
      border: '2px solid #19579E',
      backgroundColor: '#933',
      color: '#ffffff',
      fontWeight: 'bold',
      fontSize: '13px',
      margin: 8,
      width: 20,
      height: 20
    },
    root: {
      padding: 5
    },
    rootOpen: {
      padding: 5,
      borderRadius: '50%',
      backgroundColor: '#fff'
    },
    colorPrimary: {
      color: '#fff'
    },
    colorPrimaryOpen: {
      color: '#933'
    }
  };
};
/**
 * A badged filter icon
 * @param {number} enabledFilterCount - the number of filters that have been selected
 */


var MenuFilterIcon = function MenuFilterIcon(_ref) {
  var enabledFilterCount = _ref.enabledFilterCount,
      open = _ref.open,
      classes = _ref.classes;
  var count = enabledFilterCount > 0 ? enabledFilterCount : 0;
  var rootClass = open ? classes.rootOpen : classes.root;
  return _react["default"].createElement(_Badge["default"], {
    badgeContent: count,
    invisible: count <= 0,
    classes: {
      badge: classes.badge,
      root: rootClass
    }
  }, _react["default"].createElement(_Funnel["default"], {
    style: {
      color: open ? '#19579E' : '#ffffff'
    }
  }));
};

MenuFilterIcon.propTypes = {
  classes: _propTypes["default"].object.isRequired,
  open: _propTypes["default"].bool,
  enabledFilterCount: _propTypes["default"].number.isRequired
};
MenuFilterIcon.defaultProps = {
  open: false
};

var _default = (0, _styles.withStyles)(styles)(MenuFilterIcon);

exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9Hcm91cGVkTWVudS9GaWx0ZXJlZE1lbnUvTWVudUZpbHRlckljb24uanMiXSwibmFtZXMiOlsic3R5bGVzIiwiYmFkZ2UiLCJib3JkZXIiLCJiYWNrZ3JvdW5kQ29sb3IiLCJjb2xvciIsImZvbnRXZWlnaHQiLCJmb250U2l6ZSIsIm1hcmdpbiIsIndpZHRoIiwiaGVpZ2h0Iiwicm9vdCIsInBhZGRpbmciLCJyb290T3BlbiIsImJvcmRlclJhZGl1cyIsImNvbG9yUHJpbWFyeSIsImNvbG9yUHJpbWFyeU9wZW4iLCJNZW51RmlsdGVySWNvbiIsImVuYWJsZWRGaWx0ZXJDb3VudCIsIm9wZW4iLCJjbGFzc2VzIiwiY291bnQiLCJyb290Q2xhc3MiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJvYmplY3QiLCJpc1JlcXVpcmVkIiwiYm9vbCIsIm51bWJlciIsImRlZmF1bHRQcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBRUEsSUFBTUEsTUFBTSxHQUFHLFNBQVRBLE1BQVM7QUFBQSxTQUFPO0FBQ3BCQyxJQUFBQSxLQUFLLEVBQUU7QUFDTEMsTUFBQUEsTUFBTSxFQUFFLG1CQURIO0FBRUxDLE1BQUFBLGVBQWUsRUFBRSxNQUZaO0FBR0xDLE1BQUFBLEtBQUssRUFBRSxTQUhGO0FBSUxDLE1BQUFBLFVBQVUsRUFBRSxNQUpQO0FBS0xDLE1BQUFBLFFBQVEsRUFBRSxNQUxMO0FBTUxDLE1BQUFBLE1BQU0sRUFBRSxDQU5IO0FBT0xDLE1BQUFBLEtBQUssRUFBRSxFQVBGO0FBUUxDLE1BQUFBLE1BQU0sRUFBRTtBQVJILEtBRGE7QUFXcEJDLElBQUFBLElBQUksRUFBRTtBQUFFQyxNQUFBQSxPQUFPLEVBQUU7QUFBWCxLQVhjO0FBWXBCQyxJQUFBQSxRQUFRLEVBQUU7QUFDUkQsTUFBQUEsT0FBTyxFQUFFLENBREQ7QUFFUkUsTUFBQUEsWUFBWSxFQUFFLEtBRk47QUFHUlYsTUFBQUEsZUFBZSxFQUFFO0FBSFQsS0FaVTtBQWlCcEJXLElBQUFBLFlBQVksRUFBRTtBQUFFVixNQUFBQSxLQUFLLEVBQUU7QUFBVCxLQWpCTTtBQWtCcEJXLElBQUFBLGdCQUFnQixFQUFFO0FBQUVYLE1BQUFBLEtBQUssRUFBRTtBQUFUO0FBbEJFLEdBQVA7QUFBQSxDQUFmO0FBcUJBOzs7Ozs7QUFJQSxJQUFNWSxjQUFjLEdBQUcsU0FBakJBLGNBQWlCLE9BRWpCO0FBQUEsTUFESkMsa0JBQ0ksUUFESkEsa0JBQ0k7QUFBQSxNQURnQkMsSUFDaEIsUUFEZ0JBLElBQ2hCO0FBQUEsTUFEc0JDLE9BQ3RCLFFBRHNCQSxPQUN0QjtBQUNKLE1BQU1DLEtBQUssR0FBR0gsa0JBQWtCLEdBQUcsQ0FBckIsR0FBeUJBLGtCQUF6QixHQUE4QyxDQUE1RDtBQUNBLE1BQU1JLFNBQVMsR0FBR0gsSUFBSSxHQUFHQyxPQUFPLENBQUNQLFFBQVgsR0FBc0JPLE9BQU8sQ0FBQ1QsSUFBcEQ7QUFDQSxTQUNFLGdDQUFDLGlCQUFEO0FBQ0UsSUFBQSxZQUFZLEVBQUVVLEtBRGhCO0FBRUUsSUFBQSxTQUFTLEVBQUVBLEtBQUssSUFBSSxDQUZ0QjtBQUdFLElBQUEsT0FBTyxFQUFFO0FBQUVuQixNQUFBQSxLQUFLLEVBQUVrQixPQUFPLENBQUNsQixLQUFqQjtBQUF3QlMsTUFBQUEsSUFBSSxFQUFFVztBQUE5QjtBQUhYLEtBS0UsZ0NBQUMsa0JBQUQ7QUFBWSxJQUFBLEtBQUssRUFBRTtBQUFFakIsTUFBQUEsS0FBSyxFQUFFYyxJQUFJLEdBQUcsU0FBSCxHQUFlO0FBQTVCO0FBQW5CLElBTEYsQ0FERjtBQVNELENBZEQ7O0FBZ0JBRixjQUFjLENBQUNNLFNBQWYsR0FBMkI7QUFDekJILEVBQUFBLE9BQU8sRUFBRUksc0JBQVVDLE1BQVYsQ0FBaUJDLFVBREQ7QUFFekJQLEVBQUFBLElBQUksRUFBRUssc0JBQVVHLElBRlM7QUFHekJULEVBQUFBLGtCQUFrQixFQUFFTSxzQkFBVUksTUFBVixDQUFpQkY7QUFIWixDQUEzQjtBQUtBVCxjQUFjLENBQUNZLFlBQWYsR0FBOEI7QUFBRVYsRUFBQUEsSUFBSSxFQUFFO0FBQVIsQ0FBOUI7O2VBRWUsd0JBQVdsQixNQUFYLEVBQW1CZ0IsY0FBbkIsQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgd2l0aFN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XG5pbXBvcnQgQmFkZ2UgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQmFkZ2UnO1xuaW1wb3J0IEZ1bm5lbEljb24gZnJvbSAnLi4vLi4vaWNvbnMvRnVubmVsJztcblxuY29uc3Qgc3R5bGVzID0gKCkgPT4gKHtcbiAgYmFkZ2U6IHtcbiAgICBib3JkZXI6ICcycHggc29saWQgIzE5NTc5RScsXG4gICAgYmFja2dyb3VuZENvbG9yOiAnIzkzMycsXG4gICAgY29sb3I6ICcjZmZmZmZmJyxcbiAgICBmb250V2VpZ2h0OiAnYm9sZCcsXG4gICAgZm9udFNpemU6ICcxM3B4JyxcbiAgICBtYXJnaW46IDgsXG4gICAgd2lkdGg6IDIwLFxuICAgIGhlaWdodDogMjAsXG4gIH0sXG4gIHJvb3Q6IHsgcGFkZGluZzogNSB9LFxuICByb290T3Blbjoge1xuICAgIHBhZGRpbmc6IDUsXG4gICAgYm9yZGVyUmFkaXVzOiAnNTAlJyxcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjZmZmJyxcbiAgfSxcbiAgY29sb3JQcmltYXJ5OiB7IGNvbG9yOiAnI2ZmZicgfSxcbiAgY29sb3JQcmltYXJ5T3BlbjogeyBjb2xvcjogJyM5MzMnIH0sXG59KTtcblxuLyoqXG4gKiBBIGJhZGdlZCBmaWx0ZXIgaWNvblxuICogQHBhcmFtIHtudW1iZXJ9IGVuYWJsZWRGaWx0ZXJDb3VudCAtIHRoZSBudW1iZXIgb2YgZmlsdGVycyB0aGF0IGhhdmUgYmVlbiBzZWxlY3RlZFxuICovXG5jb25zdCBNZW51RmlsdGVySWNvbiA9ICh7XG4gIGVuYWJsZWRGaWx0ZXJDb3VudCwgb3BlbiwgY2xhc3Nlcyxcbn0pID0+IHtcbiAgY29uc3QgY291bnQgPSBlbmFibGVkRmlsdGVyQ291bnQgPiAwID8gZW5hYmxlZEZpbHRlckNvdW50IDogMDtcbiAgY29uc3Qgcm9vdENsYXNzID0gb3BlbiA/IGNsYXNzZXMucm9vdE9wZW4gOiBjbGFzc2VzLnJvb3Q7XG4gIHJldHVybiAoXG4gICAgPEJhZGdlXG4gICAgICBiYWRnZUNvbnRlbnQ9e2NvdW50fVxuICAgICAgaW52aXNpYmxlPXtjb3VudCA8PSAwfVxuICAgICAgY2xhc3Nlcz17eyBiYWRnZTogY2xhc3Nlcy5iYWRnZSwgcm9vdDogcm9vdENsYXNzIH19XG4gICAgPlxuICAgICAgPEZ1bm5lbEljb24gc3R5bGU9e3sgY29sb3I6IG9wZW4gPyAnIzE5NTc5RScgOiAnI2ZmZmZmZicgfX0gLz5cbiAgICA8L0JhZGdlPlxuICApO1xufTtcblxuTWVudUZpbHRlckljb24ucHJvcFR5cGVzID0ge1xuICBjbGFzc2VzOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG4gIG9wZW46IFByb3BUeXBlcy5ib29sLFxuICBlbmFibGVkRmlsdGVyQ291bnQ6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbn07XG5NZW51RmlsdGVySWNvbi5kZWZhdWx0UHJvcHMgPSB7IG9wZW46IGZhbHNlIH07XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZXMoc3R5bGVzKShNZW51RmlsdGVySWNvbik7XG4iXX0=