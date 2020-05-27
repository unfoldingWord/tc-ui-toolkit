"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styles = require("@material-ui/core/styles");

var _ListItem = _interopRequireDefault(require("@material-ui/core/ListItem"));

var _ListItemText = _interopRequireDefault(require("@material-ui/core/ListItemText"));

var _ListSubheader = _interopRequireDefault(require("@material-ui/core/ListSubheader"));

var styles = function styles() {
  return {
    root: {
      backgroundColor: '#19579E',
      color: '#FFFFFF',
      zIndex: 10,
      paddingTop: 5,
      paddingBottom: 5
    },
    text: {
      color: '#FFFFFF',
      fontWeight: 'bold',
      fontSize: 16
    }
  };
};
/**
 * A plain header to display when there are no filters.
 * @param {string} title - the menu title
 */


var MenuHeader = function MenuHeader(_ref) {
  var classes = _ref.classes,
      title = _ref.title;
  return _react["default"].createElement(_ListSubheader["default"], {
    disableGutters: true,
    className: classes.root
  }, _react["default"].createElement(_ListItem["default"], {
    className: classes.header
  }, _react["default"].createElement(_ListItemText["default"], {
    classes: {
      primary: classes.text
    },
    primary: title
  })));
};

MenuHeader.propTypes = {
  classes: _propTypes["default"].object.isRequired,
  title: _propTypes["default"].string.isRequired
};

var _default = (0, _styles.withStyles)(styles)(MenuHeader);

exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9Hcm91cGVkTWVudS9GaWx0ZXJlZE1lbnUvTWVudUhlYWRlci5qcyJdLCJuYW1lcyI6WyJzdHlsZXMiLCJyb290IiwiYmFja2dyb3VuZENvbG9yIiwiY29sb3IiLCJ6SW5kZXgiLCJwYWRkaW5nVG9wIiwicGFkZGluZ0JvdHRvbSIsInRleHQiLCJmb250V2VpZ2h0IiwiZm9udFNpemUiLCJNZW51SGVhZGVyIiwiY2xhc3NlcyIsInRpdGxlIiwiaGVhZGVyIiwicHJpbWFyeSIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsIm9iamVjdCIsImlzUmVxdWlyZWQiLCJzdHJpbmciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUVBLElBQU1BLE1BQU0sR0FBRyxTQUFUQSxNQUFTO0FBQUEsU0FBTztBQUNwQkMsSUFBQUEsSUFBSSxFQUFFO0FBQ0pDLE1BQUFBLGVBQWUsRUFBRSxTQURiO0FBRUpDLE1BQUFBLEtBQUssRUFBRSxTQUZIO0FBR0pDLE1BQUFBLE1BQU0sRUFBRSxFQUhKO0FBSUpDLE1BQUFBLFVBQVUsRUFBRSxDQUpSO0FBS0pDLE1BQUFBLGFBQWEsRUFBRTtBQUxYLEtBRGM7QUFRcEJDLElBQUFBLElBQUksRUFBRTtBQUNKSixNQUFBQSxLQUFLLEVBQUUsU0FESDtBQUVKSyxNQUFBQSxVQUFVLEVBQUUsTUFGUjtBQUdKQyxNQUFBQSxRQUFRLEVBQUU7QUFITjtBQVJjLEdBQVA7QUFBQSxDQUFmO0FBZUE7Ozs7OztBQUlBLElBQU1DLFVBQVUsR0FBRyxTQUFiQSxVQUFhO0FBQUEsTUFBR0MsT0FBSCxRQUFHQSxPQUFIO0FBQUEsTUFBWUMsS0FBWixRQUFZQSxLQUFaO0FBQUEsU0FDakIsZ0NBQUMseUJBQUQ7QUFBZSxJQUFBLGNBQWMsTUFBN0I7QUFBOEIsSUFBQSxTQUFTLEVBQUVELE9BQU8sQ0FBQ1Y7QUFBakQsS0FDRSxnQ0FBQyxvQkFBRDtBQUFVLElBQUEsU0FBUyxFQUFFVSxPQUFPLENBQUNFO0FBQTdCLEtBQ0UsZ0NBQUMsd0JBQUQ7QUFDRSxJQUFBLE9BQU8sRUFBRTtBQUFFQyxNQUFBQSxPQUFPLEVBQUVILE9BQU8sQ0FBQ0o7QUFBbkIsS0FEWDtBQUVFLElBQUEsT0FBTyxFQUFFSztBQUZYLElBREYsQ0FERixDQURpQjtBQUFBLENBQW5COztBQVdBRixVQUFVLENBQUNLLFNBQVgsR0FBdUI7QUFDckJKLEVBQUFBLE9BQU8sRUFBRUssc0JBQVVDLE1BQVYsQ0FBaUJDLFVBREw7QUFFckJOLEVBQUFBLEtBQUssRUFBRUksc0JBQVVHLE1BQVYsQ0FBaUJEO0FBRkgsQ0FBdkI7O2VBS2Usd0JBQVdsQixNQUFYLEVBQW1CVSxVQUFuQixDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyB3aXRoU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcbmltcG9ydCBMaXN0SXRlbSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9MaXN0SXRlbSc7XG5pbXBvcnQgTGlzdEl0ZW1UZXh0IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0xpc3RJdGVtVGV4dCc7XG5pbXBvcnQgTGlzdFN1YmhlYWRlciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9MaXN0U3ViaGVhZGVyJztcblxuY29uc3Qgc3R5bGVzID0gKCkgPT4gKHtcbiAgcm9vdDoge1xuICAgIGJhY2tncm91bmRDb2xvcjogJyMxOTU3OUUnLFxuICAgIGNvbG9yOiAnI0ZGRkZGRicsXG4gICAgekluZGV4OiAxMCxcbiAgICBwYWRkaW5nVG9wOiA1LFxuICAgIHBhZGRpbmdCb3R0b206IDUsXG4gIH0sXG4gIHRleHQ6IHtcbiAgICBjb2xvcjogJyNGRkZGRkYnLFxuICAgIGZvbnRXZWlnaHQ6ICdib2xkJyxcbiAgICBmb250U2l6ZTogMTYsXG4gIH0sXG59KTtcblxuLyoqXG4gKiBBIHBsYWluIGhlYWRlciB0byBkaXNwbGF5IHdoZW4gdGhlcmUgYXJlIG5vIGZpbHRlcnMuXG4gKiBAcGFyYW0ge3N0cmluZ30gdGl0bGUgLSB0aGUgbWVudSB0aXRsZVxuICovXG5jb25zdCBNZW51SGVhZGVyID0gKHsgY2xhc3NlcywgdGl0bGUgfSkgPT4gKFxuICA8TGlzdFN1YmhlYWRlciBkaXNhYmxlR3V0dGVycyBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0+XG4gICAgPExpc3RJdGVtIGNsYXNzTmFtZT17Y2xhc3Nlcy5oZWFkZXJ9PlxuICAgICAgPExpc3RJdGVtVGV4dFxuICAgICAgICBjbGFzc2VzPXt7IHByaW1hcnk6IGNsYXNzZXMudGV4dCB9fVxuICAgICAgICBwcmltYXJ5PXt0aXRsZX1cbiAgICAgIC8+XG4gICAgPC9MaXN0SXRlbT5cbiAgPC9MaXN0U3ViaGVhZGVyPlxuKTtcblxuTWVudUhlYWRlci5wcm9wVHlwZXMgPSB7XG4gIGNsYXNzZXM6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgdGl0bGU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZXMoc3R5bGVzKShNZW51SGVhZGVyKTtcbiJdfQ==