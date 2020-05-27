"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _ListItemText = _interopRequireDefault(require("@material-ui/core/ListItemText"));

var _ListItem = _interopRequireDefault(require("@material-ui/core/ListItem"));

var _styles = require("@material-ui/core/styles");

var styles = function styles() {
  return {
    root: {
      borderBottom: 'solid #ffffff4d 1px'
    },
    primary: {
      color: '#FFFFFF',
      fontSize: 'inherit'
    }
  };
};
/**
 * Renders an empty menu item with some basic text
 * @param {string} label - the text to display
 * @param {boolean} enabled - indicates if the item should be rendered
 * @param classes
 * @returns {*}
 * @constructor
 */


var EmptyItem = function EmptyItem(_ref) {
  var label = _ref.label,
      enabled = _ref.enabled,
      classes = _ref.classes;

  if (enabled && label) {
    return _react["default"].createElement(_ListItem["default"], {
      className: classes.root
    }, _react["default"].createElement(_ListItemText["default"], {
      classes: {
        primary: classes.primary
      },
      primary: label
    }));
  } else {
    return null;
  }
};

EmptyItem.propTypes = {
  classes: _propTypes["default"].object.isRequired,
  enabled: _propTypes["default"].bool.isRequired,
  label: _propTypes["default"].string
};

var _default = (0, _styles.withStyles)(styles)(EmptyItem);

exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9Hcm91cGVkTWVudS9NZW51L0VtcHR5SXRlbS5qcyJdLCJuYW1lcyI6WyJzdHlsZXMiLCJyb290IiwiYm9yZGVyQm90dG9tIiwicHJpbWFyeSIsImNvbG9yIiwiZm9udFNpemUiLCJFbXB0eUl0ZW0iLCJsYWJlbCIsImVuYWJsZWQiLCJjbGFzc2VzIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwib2JqZWN0IiwiaXNSZXF1aXJlZCIsImJvb2wiLCJzdHJpbmciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUVBLElBQU1BLE1BQU0sR0FBRyxTQUFUQSxNQUFTO0FBQUEsU0FBTztBQUNwQkMsSUFBQUEsSUFBSSxFQUFFO0FBQUVDLE1BQUFBLFlBQVksRUFBRTtBQUFoQixLQURjO0FBRXBCQyxJQUFBQSxPQUFPLEVBQUU7QUFDUEMsTUFBQUEsS0FBSyxFQUFFLFNBREE7QUFFUEMsTUFBQUEsUUFBUSxFQUFFO0FBRkg7QUFGVyxHQUFQO0FBQUEsQ0FBZjtBQVFBOzs7Ozs7Ozs7O0FBUUEsSUFBTUMsU0FBUyxHQUFHLFNBQVpBLFNBQVksT0FFWjtBQUFBLE1BREpDLEtBQ0ksUUFESkEsS0FDSTtBQUFBLE1BREdDLE9BQ0gsUUFER0EsT0FDSDtBQUFBLE1BRFlDLE9BQ1osUUFEWUEsT0FDWjs7QUFDSixNQUFJRCxPQUFPLElBQUlELEtBQWYsRUFBc0I7QUFDcEIsV0FDRSxnQ0FBQyxvQkFBRDtBQUFVLE1BQUEsU0FBUyxFQUFFRSxPQUFPLENBQUNSO0FBQTdCLE9BQ0UsZ0NBQUMsd0JBQUQ7QUFDRSxNQUFBLE9BQU8sRUFBRTtBQUFFRSxRQUFBQSxPQUFPLEVBQUVNLE9BQU8sQ0FBQ047QUFBbkIsT0FEWDtBQUVFLE1BQUEsT0FBTyxFQUFFSTtBQUZYLE1BREYsQ0FERjtBQVFELEdBVEQsTUFTTztBQUNMLFdBQU8sSUFBUDtBQUNEO0FBQ0YsQ0FmRDs7QUFpQkFELFNBQVMsQ0FBQ0ksU0FBVixHQUFzQjtBQUNwQkQsRUFBQUEsT0FBTyxFQUFFRSxzQkFBVUMsTUFBVixDQUFpQkMsVUFETjtBQUVwQkwsRUFBQUEsT0FBTyxFQUFFRyxzQkFBVUcsSUFBVixDQUFlRCxVQUZKO0FBR3BCTixFQUFBQSxLQUFLLEVBQUVJLHNCQUFVSTtBQUhHLENBQXRCOztlQU1lLHdCQUFXZixNQUFYLEVBQW1CTSxTQUFuQixDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgTGlzdEl0ZW1UZXh0IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0xpc3RJdGVtVGV4dCc7XG5pbXBvcnQgTGlzdEl0ZW0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTGlzdEl0ZW0nO1xuaW1wb3J0IHsgd2l0aFN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XG5cbmNvbnN0IHN0eWxlcyA9ICgpID0+ICh7XG4gIHJvb3Q6IHsgYm9yZGVyQm90dG9tOiAnc29saWQgI2ZmZmZmZjRkIDFweCcgfSxcbiAgcHJpbWFyeToge1xuICAgIGNvbG9yOiAnI0ZGRkZGRicsXG4gICAgZm9udFNpemU6ICdpbmhlcml0JyxcbiAgfSxcbn0pO1xuXG4vKipcbiAqIFJlbmRlcnMgYW4gZW1wdHkgbWVudSBpdGVtIHdpdGggc29tZSBiYXNpYyB0ZXh0XG4gKiBAcGFyYW0ge3N0cmluZ30gbGFiZWwgLSB0aGUgdGV4dCB0byBkaXNwbGF5XG4gKiBAcGFyYW0ge2Jvb2xlYW59IGVuYWJsZWQgLSBpbmRpY2F0ZXMgaWYgdGhlIGl0ZW0gc2hvdWxkIGJlIHJlbmRlcmVkXG4gKiBAcGFyYW0gY2xhc3Nlc1xuICogQHJldHVybnMgeyp9XG4gKiBAY29uc3RydWN0b3JcbiAqL1xuY29uc3QgRW1wdHlJdGVtID0gKHtcbiAgbGFiZWwsIGVuYWJsZWQsIGNsYXNzZXMsXG59KSA9PiB7XG4gIGlmIChlbmFibGVkICYmIGxhYmVsKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxMaXN0SXRlbSBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0+XG4gICAgICAgIDxMaXN0SXRlbVRleHRcbiAgICAgICAgICBjbGFzc2VzPXt7IHByaW1hcnk6IGNsYXNzZXMucHJpbWFyeSB9fVxuICAgICAgICAgIHByaW1hcnk9e2xhYmVsfVxuICAgICAgICAvPlxuICAgICAgPC9MaXN0SXRlbT5cbiAgICApO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBudWxsO1xuICB9XG59O1xuXG5FbXB0eUl0ZW0ucHJvcFR5cGVzID0ge1xuICBjbGFzc2VzOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG4gIGVuYWJsZWQ6IFByb3BUeXBlcy5ib29sLmlzUmVxdWlyZWQsXG4gIGxhYmVsOiBQcm9wVHlwZXMuc3RyaW5nLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlcyhzdHlsZXMpKEVtcHR5SXRlbSk7XG4iXX0=