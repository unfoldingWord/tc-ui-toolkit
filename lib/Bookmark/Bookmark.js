"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Switch = _interopRequireDefault(require("@material-ui/core/Switch"));

var _FormControlLabel = _interopRequireDefault(require("@material-ui/core/FormControlLabel"));

var _styles = require("@material-ui/core/styles");

var styles = {
  colorSwitchBase: {
    '&$colorChecked': {
      'color': 'var(--accent-color-dark)',
      '& + $colorBar': {
        backgroundColor: 'var(--accent-color-dark)'
      }
    }
  },
  colorBar: {},
  colorChecked: {},
  label: {
    color: 'var(--accent-color-dark)',
    fontWeight: 'normal',
    fontSize: 14
  }
};

var Bookmark = function Bookmark(_ref) {
  var value = _ref.value,
      label = _ref.label,
      checked = _ref.checked,
      color = _ref.color,
      onChange = _ref.onChange,
      disabled = _ref.disabled,
      classes = _ref.classes;
  return _react["default"].createElement(_FormControlLabel["default"], {
    style: {
      paddingLeft: 10
    },
    control: _react["default"].createElement(_Switch["default"], {
      value: value,
      checked: checked,
      color: color,
      onChange: onChange,
      disabled: disabled,
      classes: {
        switchBase: classes.colorSwitchBase,
        checked: classes.colorChecked,
        bar: classes.colorBar
      }
    }),
    classes: {
      label: classes.label
    },
    label: label
  });
};

Bookmark.defaultProps = {
  checked: false,
  disabled: false,
  color: 'primary'
};
Bookmark.propTypes = {
  value: _propTypes["default"].string,
  checked: _propTypes["default"].bool,
  disabled: _propTypes["default"].bool,
  label: _propTypes["default"].string,
  onChange: _propTypes["default"].func,
  color: _propTypes["default"].string,
  classes: _propTypes["default"].object
};

var _default = (0, _styles.withStyles)(styles)(Bookmark);

exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9Cb29rbWFyay9Cb29rbWFyay5qcyJdLCJuYW1lcyI6WyJzdHlsZXMiLCJjb2xvclN3aXRjaEJhc2UiLCJiYWNrZ3JvdW5kQ29sb3IiLCJjb2xvckJhciIsImNvbG9yQ2hlY2tlZCIsImxhYmVsIiwiY29sb3IiLCJmb250V2VpZ2h0IiwiZm9udFNpemUiLCJCb29rbWFyayIsInZhbHVlIiwiY2hlY2tlZCIsIm9uQ2hhbmdlIiwiZGlzYWJsZWQiLCJjbGFzc2VzIiwicGFkZGluZ0xlZnQiLCJzd2l0Y2hCYXNlIiwiYmFyIiwiZGVmYXVsdFByb3BzIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwic3RyaW5nIiwiYm9vbCIsImZ1bmMiLCJvYmplY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUVBLElBQU1BLE1BQU0sR0FBRztBQUNiQyxFQUFBQSxlQUFlLEVBQUU7QUFDZixzQkFBa0I7QUFDaEIsZUFBUywwQkFETztBQUVoQix1QkFBaUI7QUFBRUMsUUFBQUEsZUFBZSxFQUFFO0FBQW5CO0FBRkQ7QUFESCxHQURKO0FBT2JDLEVBQUFBLFFBQVEsRUFBRSxFQVBHO0FBUWJDLEVBQUFBLFlBQVksRUFBRSxFQVJEO0FBU2JDLEVBQUFBLEtBQUssRUFBRTtBQUNMQyxJQUFBQSxLQUFLLEVBQUUsMEJBREY7QUFFTEMsSUFBQUEsVUFBVSxFQUFFLFFBRlA7QUFHTEMsSUFBQUEsUUFBUSxFQUFFO0FBSEw7QUFUTSxDQUFmOztBQWdCQSxJQUFNQyxRQUFRLEdBQUcsU0FBWEEsUUFBVztBQUFBLE1BQ2ZDLEtBRGUsUUFDZkEsS0FEZTtBQUFBLE1BRWZMLEtBRmUsUUFFZkEsS0FGZTtBQUFBLE1BR2ZNLE9BSGUsUUFHZkEsT0FIZTtBQUFBLE1BSWZMLEtBSmUsUUFJZkEsS0FKZTtBQUFBLE1BS2ZNLFFBTGUsUUFLZkEsUUFMZTtBQUFBLE1BTWZDLFFBTmUsUUFNZkEsUUFOZTtBQUFBLE1BT2ZDLE9BUGUsUUFPZkEsT0FQZTtBQUFBLFNBU2YsZ0NBQUMsNEJBQUQ7QUFDRSxJQUFBLEtBQUssRUFBRTtBQUFFQyxNQUFBQSxXQUFXLEVBQUM7QUFBZCxLQURUO0FBRUUsSUFBQSxPQUFPLEVBQ0wsZ0NBQUMsa0JBQUQ7QUFDRSxNQUFBLEtBQUssRUFBRUwsS0FEVDtBQUVFLE1BQUEsT0FBTyxFQUFFQyxPQUZYO0FBR0UsTUFBQSxLQUFLLEVBQUVMLEtBSFQ7QUFJRSxNQUFBLFFBQVEsRUFBRU0sUUFKWjtBQUtFLE1BQUEsUUFBUSxFQUFFQyxRQUxaO0FBTUUsTUFBQSxPQUFPLEVBQUU7QUFDUEcsUUFBQUEsVUFBVSxFQUFFRixPQUFPLENBQUNiLGVBRGI7QUFFUFUsUUFBQUEsT0FBTyxFQUFFRyxPQUFPLENBQUNWLFlBRlY7QUFHUGEsUUFBQUEsR0FBRyxFQUFFSCxPQUFPLENBQUNYO0FBSE47QUFOWCxNQUhKO0FBZ0JFLElBQUEsT0FBTyxFQUFFO0FBQUVFLE1BQUFBLEtBQUssRUFBRVMsT0FBTyxDQUFDVDtBQUFqQixLQWhCWDtBQWlCRSxJQUFBLEtBQUssRUFBRUE7QUFqQlQsSUFUZTtBQUFBLENBQWpCOztBQThCQUksUUFBUSxDQUFDUyxZQUFULEdBQXdCO0FBQ3RCUCxFQUFBQSxPQUFPLEVBQUUsS0FEYTtBQUV0QkUsRUFBQUEsUUFBUSxFQUFFLEtBRlk7QUFHdEJQLEVBQUFBLEtBQUssRUFBRTtBQUhlLENBQXhCO0FBTUFHLFFBQVEsQ0FBQ1UsU0FBVCxHQUFxQjtBQUNuQlQsRUFBQUEsS0FBSyxFQUFFVSxzQkFBVUMsTUFERTtBQUVuQlYsRUFBQUEsT0FBTyxFQUFFUyxzQkFBVUUsSUFGQTtBQUduQlQsRUFBQUEsUUFBUSxFQUFFTyxzQkFBVUUsSUFIRDtBQUluQmpCLEVBQUFBLEtBQUssRUFBRWUsc0JBQVVDLE1BSkU7QUFLbkJULEVBQUFBLFFBQVEsRUFBRVEsc0JBQVVHLElBTEQ7QUFNbkJqQixFQUFBQSxLQUFLLEVBQUVjLHNCQUFVQyxNQU5FO0FBT25CUCxFQUFBQSxPQUFPLEVBQUVNLHNCQUFVSTtBQVBBLENBQXJCOztlQVVlLHdCQUFXeEIsTUFBWCxFQUFtQlMsUUFBbkIsQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IFN3aXRjaCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Td2l0Y2gnO1xuaW1wb3J0IEZvcm1Db250cm9sTGFiZWwgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvRm9ybUNvbnRyb2xMYWJlbCc7XG5pbXBvcnQgeyB3aXRoU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcblxuY29uc3Qgc3R5bGVzID0ge1xuICBjb2xvclN3aXRjaEJhc2U6IHtcbiAgICAnJiRjb2xvckNoZWNrZWQnOiB7XG4gICAgICAnY29sb3InOiAndmFyKC0tYWNjZW50LWNvbG9yLWRhcmspJyxcbiAgICAgICcmICsgJGNvbG9yQmFyJzogeyBiYWNrZ3JvdW5kQ29sb3I6ICd2YXIoLS1hY2NlbnQtY29sb3ItZGFyayknIH0sXG4gICAgfSxcbiAgfSxcbiAgY29sb3JCYXI6IHt9LFxuICBjb2xvckNoZWNrZWQ6IHt9LFxuICBsYWJlbDoge1xuICAgIGNvbG9yOiAndmFyKC0tYWNjZW50LWNvbG9yLWRhcmspJyxcbiAgICBmb250V2VpZ2h0OiAnbm9ybWFsJyxcbiAgICBmb250U2l6ZTogMTQsXG4gIH0sXG59O1xuXG5jb25zdCBCb29rbWFyayA9ICh7XG4gIHZhbHVlLFxuICBsYWJlbCxcbiAgY2hlY2tlZCxcbiAgY29sb3IsXG4gIG9uQ2hhbmdlLFxuICBkaXNhYmxlZCxcbiAgY2xhc3Nlcyxcbn0pID0+IChcbiAgPEZvcm1Db250cm9sTGFiZWxcbiAgICBzdHlsZT17eyBwYWRkaW5nTGVmdDoxMCB9fVxuICAgIGNvbnRyb2w9e1xuICAgICAgPFN3aXRjaFxuICAgICAgICB2YWx1ZT17dmFsdWV9XG4gICAgICAgIGNoZWNrZWQ9e2NoZWNrZWR9XG4gICAgICAgIGNvbG9yPXtjb2xvcn1cbiAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlfVxuICAgICAgICBkaXNhYmxlZD17ZGlzYWJsZWR9XG4gICAgICAgIGNsYXNzZXM9e3tcbiAgICAgICAgICBzd2l0Y2hCYXNlOiBjbGFzc2VzLmNvbG9yU3dpdGNoQmFzZSxcbiAgICAgICAgICBjaGVja2VkOiBjbGFzc2VzLmNvbG9yQ2hlY2tlZCxcbiAgICAgICAgICBiYXI6IGNsYXNzZXMuY29sb3JCYXIsXG4gICAgICAgIH19XG4gICAgICAvPlxuICAgIH1cbiAgICBjbGFzc2VzPXt7IGxhYmVsOiBjbGFzc2VzLmxhYmVsIH19XG4gICAgbGFiZWw9e2xhYmVsfVxuICAvPlxuKTtcblxuQm9va21hcmsuZGVmYXVsdFByb3BzID0ge1xuICBjaGVja2VkOiBmYWxzZSxcbiAgZGlzYWJsZWQ6IGZhbHNlLFxuICBjb2xvcjogJ3ByaW1hcnknLFxufTtcblxuQm9va21hcmsucHJvcFR5cGVzID0ge1xuICB2YWx1ZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgY2hlY2tlZDogUHJvcFR5cGVzLmJvb2wsXG4gIGRpc2FibGVkOiBQcm9wVHlwZXMuYm9vbCxcbiAgbGFiZWw6IFByb3BUeXBlcy5zdHJpbmcsXG4gIG9uQ2hhbmdlOiBQcm9wVHlwZXMuZnVuYyxcbiAgY29sb3I6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGNsYXNzZXM6IFByb3BUeXBlcy5vYmplY3QsXG59O1xuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGVzKHN0eWxlcykoQm9va21hcmspO1xuIl19