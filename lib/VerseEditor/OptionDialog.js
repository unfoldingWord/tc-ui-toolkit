"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Dialog = _interopRequireDefault(require("@material-ui/core/Dialog"));

var _DialogActions = _interopRequireDefault(require("@material-ui/core/DialogActions"));

var _DialogContent = _interopRequireDefault(require("@material-ui/core/DialogContent"));

var _Toolbar = _interopRequireDefault(require("@material-ui/core/Toolbar"));

var _reactBootstrap = require("react-bootstrap");

var OptionDialog = function OptionDialog(_ref) {
  var isOpen = _ref.isOpen,
      primaryOnclick = _ref.primaryOnclick,
      content = _ref.content,
      handleClose = _ref.handleClose,
      headerTitleText = _ref.headerTitleText,
      primaryButtonText = _ref.primaryButtonText,
      secondaryButtonText = _ref.secondaryButtonText;
  var actions = [_react["default"].createElement("button", {
    key: 1,
    className: "btn-second",
    onClick: handleClose
  }, secondaryButtonText), _react["default"].createElement("button", {
    key: 2,
    className: "btn-prime",
    onClick: primaryOnclick
  }, primaryButtonText)];

  var headerContent = _react["default"].createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      width: '100%',
      marginLeft: 20,
      marginRight: 20
    }
  }, _react["default"].createElement("span", {
    style: {
      color: 'var(--reverse-color)'
    }
  }, headerTitleText), _react["default"].createElement(_reactBootstrap.Glyphicon, {
    onClick: handleClose,
    glyph: 'remove',
    style: {
      color: 'var(--reverse-color)',
      cursor: 'pointer',
      fontSize: '18px',
      "float": 'right'
    }
  }));

  return _react["default"].createElement("div", null, _react["default"].createElement(_Dialog["default"], {
    open: isOpen,
    fullWidth: true,
    onClose: handleClose
  }, _react["default"].createElement(_Toolbar["default"], {
    disableGutters: true,
    style: {
      backgroundColor: 'var(--accent-color-dark)'
    }
  }, headerContent), _react["default"].createElement("br", null), _react["default"].createElement(_DialogContent["default"], {
    style: {
      padding: '0 18px 18px'
    }
  }, content), _react["default"].createElement(_DialogActions["default"], {
    disableActionSpacing: true
  }, actions)));
};

OptionDialog.propTypes = {
  handleClose: _propTypes["default"].func.isRequired,
  isOpen: _propTypes["default"].bool.isRequired,
  primaryOnclick: _propTypes["default"].func.isRequired,
  content: _propTypes["default"].any,
  headerTitleText: _propTypes["default"].string.isRequired,
  primaryButtonText: _propTypes["default"].string.isRequired,
  secondaryButtonText: _propTypes["default"].string.isRequired
};
var _default = OptionDialog;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9WZXJzZUVkaXRvci9PcHRpb25EaWFsb2cuanMiXSwibmFtZXMiOlsiT3B0aW9uRGlhbG9nIiwiaXNPcGVuIiwicHJpbWFyeU9uY2xpY2siLCJjb250ZW50IiwiaGFuZGxlQ2xvc2UiLCJoZWFkZXJUaXRsZVRleHQiLCJwcmltYXJ5QnV0dG9uVGV4dCIsInNlY29uZGFyeUJ1dHRvblRleHQiLCJhY3Rpb25zIiwiaGVhZGVyQ29udGVudCIsImRpc3BsYXkiLCJqdXN0aWZ5Q29udGVudCIsIndpZHRoIiwibWFyZ2luTGVmdCIsIm1hcmdpblJpZ2h0IiwiY29sb3IiLCJjdXJzb3IiLCJmb250U2l6ZSIsImJhY2tncm91bmRDb2xvciIsInBhZGRpbmciLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJmdW5jIiwiaXNSZXF1aXJlZCIsImJvb2wiLCJhbnkiLCJzdHJpbmciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUVBLElBQU1BLFlBQVksR0FBRyxTQUFmQSxZQUFlLE9BUWY7QUFBQSxNQVBKQyxNQU9JLFFBUEpBLE1BT0k7QUFBQSxNQU5KQyxjQU1JLFFBTkpBLGNBTUk7QUFBQSxNQUxKQyxPQUtJLFFBTEpBLE9BS0k7QUFBQSxNQUpKQyxXQUlJLFFBSkpBLFdBSUk7QUFBQSxNQUhKQyxlQUdJLFFBSEpBLGVBR0k7QUFBQSxNQUZKQyxpQkFFSSxRQUZKQSxpQkFFSTtBQUFBLE1BREpDLG1CQUNJLFFBREpBLG1CQUNJO0FBQ0osTUFBTUMsT0FBTyxHQUFHLENBQ2Q7QUFDRSxJQUFBLEdBQUcsRUFBRSxDQURQO0FBRUUsSUFBQSxTQUFTLEVBQUMsWUFGWjtBQUdFLElBQUEsT0FBTyxFQUFFSjtBQUhYLEtBS0dHLG1CQUxILENBRGMsRUFRZDtBQUNFLElBQUEsR0FBRyxFQUFFLENBRFA7QUFFRSxJQUFBLFNBQVMsRUFBQyxXQUZaO0FBR0UsSUFBQSxPQUFPLEVBQUVMO0FBSFgsS0FLR0ksaUJBTEgsQ0FSYyxDQUFoQjs7QUFpQkEsTUFBTUcsYUFBYSxHQUNqQjtBQUFLLElBQUEsS0FBSyxFQUFFO0FBQ1ZDLE1BQUFBLE9BQU8sRUFBRSxNQURDO0FBQ09DLE1BQUFBLGNBQWMsRUFBRSxlQUR2QjtBQUN3Q0MsTUFBQUEsS0FBSyxFQUFDLE1BRDlDO0FBQ3NEQyxNQUFBQSxVQUFVLEVBQUMsRUFEakU7QUFDcUVDLE1BQUFBLFdBQVcsRUFBQztBQURqRjtBQUFaLEtBR0U7QUFBTSxJQUFBLEtBQUssRUFBRTtBQUFFQyxNQUFBQSxLQUFLLEVBQUU7QUFBVDtBQUFiLEtBQWlEVixlQUFqRCxDQUhGLEVBSUUsZ0NBQUMseUJBQUQ7QUFDRSxJQUFBLE9BQU8sRUFBRUQsV0FEWDtBQUVFLElBQUEsS0FBSyxFQUFFLFFBRlQ7QUFHRSxJQUFBLEtBQUssRUFBRTtBQUNMVyxNQUFBQSxLQUFLLEVBQUUsc0JBREY7QUFDMEJDLE1BQUFBLE1BQU0sRUFBRSxTQURsQztBQUM2Q0MsTUFBQUEsUUFBUSxFQUFFLE1BRHZEO0FBQytELGVBQU87QUFEdEU7QUFIVCxJQUpGLENBREY7O0FBZUEsU0FDRSw2Q0FDRSxnQ0FBQyxrQkFBRDtBQUNFLElBQUEsSUFBSSxFQUFFaEIsTUFEUjtBQUVFLElBQUEsU0FBUyxNQUZYO0FBR0UsSUFBQSxPQUFPLEVBQUVHO0FBSFgsS0FJRSxnQ0FBQyxtQkFBRDtBQUFTLElBQUEsY0FBYyxFQUFFLElBQXpCO0FBQStCLElBQUEsS0FBSyxFQUFFO0FBQUVjLE1BQUFBLGVBQWUsRUFBRTtBQUFuQjtBQUF0QyxLQUNHVCxhQURILENBSkYsRUFPRSwyQ0FQRixFQVFFLGdDQUFDLHlCQUFEO0FBQWUsSUFBQSxLQUFLLEVBQUU7QUFBRVUsTUFBQUEsT0FBTyxFQUFFO0FBQVg7QUFBdEIsS0FDR2hCLE9BREgsQ0FSRixFQVdFLGdDQUFDLHlCQUFEO0FBQWUsSUFBQSxvQkFBb0IsRUFBRTtBQUFyQyxLQUNHSyxPQURILENBWEYsQ0FERixDQURGO0FBbUJELENBNUREOztBQThEQVIsWUFBWSxDQUFDb0IsU0FBYixHQUF5QjtBQUN2QmhCLEVBQUFBLFdBQVcsRUFBRWlCLHNCQUFVQyxJQUFWLENBQWVDLFVBREw7QUFFdkJ0QixFQUFBQSxNQUFNLEVBQUVvQixzQkFBVUcsSUFBVixDQUFlRCxVQUZBO0FBR3ZCckIsRUFBQUEsY0FBYyxFQUFFbUIsc0JBQVVDLElBQVYsQ0FBZUMsVUFIUjtBQUl2QnBCLEVBQUFBLE9BQU8sRUFBRWtCLHNCQUFVSSxHQUpJO0FBS3ZCcEIsRUFBQUEsZUFBZSxFQUFFZ0Isc0JBQVVLLE1BQVYsQ0FBaUJILFVBTFg7QUFNdkJqQixFQUFBQSxpQkFBaUIsRUFBRWUsc0JBQVVLLE1BQVYsQ0FBaUJILFVBTmI7QUFPdkJoQixFQUFBQSxtQkFBbUIsRUFBRWMsc0JBQVVLLE1BQVYsQ0FBaUJIO0FBUGYsQ0FBekI7ZUFVZXZCLFkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBEaWFsb2cgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvRGlhbG9nJztcbmltcG9ydCBEaWFsb2dBY3Rpb25zIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0RpYWxvZ0FjdGlvbnMnO1xuaW1wb3J0IERpYWxvZ0NvbnRlbnQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvRGlhbG9nQ29udGVudCc7XG5pbXBvcnQgVG9vbGJhciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Ub29sYmFyJztcbmltcG9ydCB7IEdseXBoaWNvbiB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCc7XG5cbmNvbnN0IE9wdGlvbkRpYWxvZyA9ICh7XG4gIGlzT3BlbixcbiAgcHJpbWFyeU9uY2xpY2ssXG4gIGNvbnRlbnQsXG4gIGhhbmRsZUNsb3NlLFxuICBoZWFkZXJUaXRsZVRleHQsXG4gIHByaW1hcnlCdXR0b25UZXh0LFxuICBzZWNvbmRhcnlCdXR0b25UZXh0LFxufSkgPT4ge1xuICBjb25zdCBhY3Rpb25zID0gW1xuICAgIDxidXR0b25cbiAgICAgIGtleT17MX1cbiAgICAgIGNsYXNzTmFtZT1cImJ0bi1zZWNvbmRcIlxuICAgICAgb25DbGljaz17aGFuZGxlQ2xvc2V9XG4gICAgPlxuICAgICAge3NlY29uZGFyeUJ1dHRvblRleHR9XG4gICAgPC9idXR0b24+LFxuICAgIDxidXR0b25cbiAgICAgIGtleT17Mn1cbiAgICAgIGNsYXNzTmFtZT1cImJ0bi1wcmltZVwiXG4gICAgICBvbkNsaWNrPXtwcmltYXJ5T25jbGlja31cbiAgICA+XG4gICAgICB7cHJpbWFyeUJ1dHRvblRleHR9XG4gICAgPC9idXR0b24+LFxuICBdO1xuXG4gIGNvbnN0IGhlYWRlckNvbnRlbnQgPSAoXG4gICAgPGRpdiBzdHlsZT17e1xuICAgICAgZGlzcGxheTogJ2ZsZXgnLCBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWJldHdlZW4nLCB3aWR0aDonMTAwJScsIG1hcmdpbkxlZnQ6MjAsIG1hcmdpblJpZ2h0OjIwLFxuICAgIH19PlxuICAgICAgPHNwYW4gc3R5bGU9e3sgY29sb3I6ICd2YXIoLS1yZXZlcnNlLWNvbG9yKScgfX0+e2hlYWRlclRpdGxlVGV4dH08L3NwYW4+XG4gICAgICA8R2x5cGhpY29uXG4gICAgICAgIG9uQ2xpY2s9e2hhbmRsZUNsb3NlfVxuICAgICAgICBnbHlwaD17J3JlbW92ZSd9XG4gICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgY29sb3I6ICd2YXIoLS1yZXZlcnNlLWNvbG9yKScsIGN1cnNvcjogJ3BvaW50ZXInLCBmb250U2l6ZTogJzE4cHgnLCBmbG9hdDogJ3JpZ2h0JyxcbiAgICAgICAgfX1cbiAgICAgIC8+XG4gICAgPC9kaXY+XG4gICk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPERpYWxvZ1xuICAgICAgICBvcGVuPXtpc09wZW59XG4gICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICBvbkNsb3NlPXtoYW5kbGVDbG9zZX0+XG4gICAgICAgIDxUb29sYmFyIGRpc2FibGVHdXR0ZXJzPXt0cnVlfSBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6ICd2YXIoLS1hY2NlbnQtY29sb3ItZGFyayknIH19PlxuICAgICAgICAgIHtoZWFkZXJDb250ZW50fVxuICAgICAgICA8L1Rvb2xiYXI+XG4gICAgICAgIDxiciAvPlxuICAgICAgICA8RGlhbG9nQ29udGVudCBzdHlsZT17eyBwYWRkaW5nOiAnMCAxOHB4IDE4cHgnIH19PlxuICAgICAgICAgIHtjb250ZW50fVxuICAgICAgICA8L0RpYWxvZ0NvbnRlbnQ+XG4gICAgICAgIDxEaWFsb2dBY3Rpb25zIGRpc2FibGVBY3Rpb25TcGFjaW5nPXt0cnVlfT5cbiAgICAgICAgICB7YWN0aW9uc31cbiAgICAgICAgPC9EaWFsb2dBY3Rpb25zPlxuICAgICAgPC9EaWFsb2c+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5PcHRpb25EaWFsb2cucHJvcFR5cGVzID0ge1xuICBoYW5kbGVDbG9zZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgaXNPcGVuOiBQcm9wVHlwZXMuYm9vbC5pc1JlcXVpcmVkLFxuICBwcmltYXJ5T25jbGljazogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgY29udGVudDogUHJvcFR5cGVzLmFueSxcbiAgaGVhZGVyVGl0bGVUZXh0OiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gIHByaW1hcnlCdXR0b25UZXh0OiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gIHNlY29uZGFyeUJ1dHRvblRleHQ6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE9wdGlvbkRpYWxvZztcbiJdfQ==