"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Dialog = _interopRequireDefault(require("@material-ui/core/Dialog"));

var _DialogTitle = _interopRequireDefault(require("@material-ui/core/DialogTitle"));

var _DialogActions = _interopRequireDefault(require("@material-ui/core/DialogActions"));

var _styles = require("@material-ui/core/styles");

var _Paper = _interopRequireDefault(require("@material-ui/core/Paper"));

var _reactDraggable = _interopRequireDefault(require("react-draggable"));

function PaperComponent(props) {
  // component will only be draggable by element with the className in the handle prop
  return _react["default"].createElement(_reactDraggable["default"], {
    handle: ".BaseDialog-draggable-handle"
  }, _react["default"].createElement(_Paper["default"], props));
}
/**
 * Generates the dialog actions
 * @param {bool} actionsEnabled enables/disables the action buttons
 * @param {*} primaryLabel the title of the primary button
 * @param {*} secondaryLabel the title of the secondary button
 * @param {func} onPrimaryClick the click callback of the primary button
 * @param {func} onSecondaryClick the click callback of the secondary button
 * @return {*}
 */


var makeDialogActions = function makeDialogActions(_ref) {
  var actionsEnabled = _ref.actionsEnabled,
      primaryLabel = _ref.primaryLabel,
      secondaryLabel = _ref.secondaryLabel,
      onPrimaryClick = _ref.onPrimaryClick,
      onSecondaryClick = _ref.onSecondaryClick;
  var hasPrimaryLabel = Boolean(primaryLabel);
  var hasSecondaryLabel = Boolean(secondaryLabel);
  var hasPrimaryCallback = Boolean(onPrimaryClick);
  var hasSecondaryCallback = Boolean(onSecondaryClick);
  var actions = [];

  var primaryButton = _react["default"].createElement("button", {
    className: "btn-prime",
    disabled: !actionsEnabled,
    onClick: onPrimaryClick
  }, primaryLabel);

  var secondaryButton = _react["default"].createElement("button", {
    className: "btn-second",
    disabled: !actionsEnabled,
    onClick: onSecondaryClick
  }, secondaryLabel);

  if (hasSecondaryLabel && hasSecondaryCallback) {
    actions.push(secondaryButton);
  }

  if (hasPrimaryLabel && hasPrimaryCallback) {
    actions.push(primaryButton);
  }

  return actions;
};

var styles = {
  actionRoot: {
    padding: 0
  },
  paperRoot: {
    margin: '0px'
  }
};
/**
 * Represents a generic dialog.
 * You could use this to display simple information,
 * or you could create a new component that wraps this component
 * with some custom functionality.
 *
 * @class
 * @property {bool} [modal] - controls whether this dialog is modal
 * @property {Object[]} [actions] - a custom list of actions. This overrides the default secondary and primary actions.
 * @property {*} [title] - the title of the dialog
 * @property {*} [secondaryLabel] - the label of the secondary action
 * @property {*} [primaryLabel] - the label of the primary action
 * @property {bool} [actionsEnabled] - controls whether the actions are enabled or disabled
 * @property {bool} [open] - controls whether the dialog is open
 * @property {func} [onClose] - callback when the secondary button is triggered. Overridden by `actions`
 * @property {func} [onSubmit] - callback when the primary button is triggered. Overridden by `actions`
 */

var BaseDialog = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2["default"])(BaseDialog, _React$Component);

  function BaseDialog() {
    (0, _classCallCheck2["default"])(this, BaseDialog);
    return (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(BaseDialog).apply(this, arguments));
  }

  (0, _createClass2["default"])(BaseDialog, [{
    key: "componentDidCatch",
    value: function componentDidCatch(error, info) {
      console.error(error);
      console.warn(info);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          actionsEnabled = _this$props.actionsEnabled,
          title = _this$props.title,
          secondaryLabel = _this$props.secondaryLabel,
          primaryLabel = _this$props.primaryLabel,
          onClose = _this$props.onClose,
          onSubmit = _this$props.onSubmit,
          open = _this$props.open,
          children = _this$props.children,
          actions = _this$props.actions,
          classes = _this$props.classes;
      var dialogActions = actions ? actions : makeDialogActions({
        actionsEnabled: actionsEnabled,
        primaryLabel: primaryLabel,
        secondaryLabel: secondaryLabel,
        onPrimaryClick: onSubmit,
        onSecondaryClick: onClose
      });
      return _react["default"].createElement(_Dialog["default"], {
        open: open,
        onClose: onClose,
        fullWidth: true,
        PaperComponent: PaperComponent,
        PaperProps: {
          className: classes.paperRoot
        },
        "aria-labelledby": "draggable-".concat(title, "-dialog")
      }, _react["default"].createElement(_DialogTitle["default"], {
        disableTypography: true,
        className: "BaseDialog-draggable-handle",
        style: {
          color: 'var(--reverse-color)',
          backgroundColor: 'var(--accent-color-dark)',
          padding: '15px',
          display: 'block',
          width: '100%',
          fontSize: 22,
          fontWeight: 400,
          cursor: 'move'
        }
      }, title), children, actionsEnabled ? _react["default"].createElement(_DialogActions["default"], {
        disableActionSpacing: true
      }, dialogActions) : '');
    }
  }]);
  return BaseDialog;
}(_react["default"].Component);

BaseDialog.propTypes = {
  modal: _propTypes["default"].bool,
  actions: _propTypes["default"].array,
  title: _propTypes["default"].any,
  secondaryLabel: _propTypes["default"].any,
  primaryLabel: _propTypes["default"].any,
  actionsEnabled: _propTypes["default"].bool,
  open: _propTypes["default"].bool,
  onClose: _propTypes["default"].func,
  onSubmit: _propTypes["default"].func,
  children: _propTypes["default"].any,
  classes: _propTypes["default"].object
};
BaseDialog.defaultProps = {
  actionsEnabled: true,
  modal: false
};

var _default = (0, _styles.withStyles)(styles)(BaseDialog);

exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9WZXJzZUVkaXRvci9CYXNlRGlhbG9nLmpzIl0sIm5hbWVzIjpbIlBhcGVyQ29tcG9uZW50IiwicHJvcHMiLCJtYWtlRGlhbG9nQWN0aW9ucyIsImFjdGlvbnNFbmFibGVkIiwicHJpbWFyeUxhYmVsIiwic2Vjb25kYXJ5TGFiZWwiLCJvblByaW1hcnlDbGljayIsIm9uU2Vjb25kYXJ5Q2xpY2siLCJoYXNQcmltYXJ5TGFiZWwiLCJCb29sZWFuIiwiaGFzU2Vjb25kYXJ5TGFiZWwiLCJoYXNQcmltYXJ5Q2FsbGJhY2siLCJoYXNTZWNvbmRhcnlDYWxsYmFjayIsImFjdGlvbnMiLCJwcmltYXJ5QnV0dG9uIiwic2Vjb25kYXJ5QnV0dG9uIiwicHVzaCIsInN0eWxlcyIsImFjdGlvblJvb3QiLCJwYWRkaW5nIiwicGFwZXJSb290IiwibWFyZ2luIiwiQmFzZURpYWxvZyIsImVycm9yIiwiaW5mbyIsImNvbnNvbGUiLCJ3YXJuIiwidGl0bGUiLCJvbkNsb3NlIiwib25TdWJtaXQiLCJvcGVuIiwiY2hpbGRyZW4iLCJjbGFzc2VzIiwiZGlhbG9nQWN0aW9ucyIsImNsYXNzTmFtZSIsImNvbG9yIiwiYmFja2dyb3VuZENvbG9yIiwiZGlzcGxheSIsIndpZHRoIiwiZm9udFNpemUiLCJmb250V2VpZ2h0IiwiY3Vyc29yIiwiUmVhY3QiLCJDb21wb25lbnQiLCJwcm9wVHlwZXMiLCJtb2RhbCIsIlByb3BUeXBlcyIsImJvb2wiLCJhcnJheSIsImFueSIsImZ1bmMiLCJvYmplY3QiLCJkZWZhdWx0UHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFFQSxTQUFTQSxjQUFULENBQXdCQyxLQUF4QixFQUErQjtBQUM3QjtBQUNBLFNBQ0UsZ0NBQUMsMEJBQUQ7QUFBVyxJQUFBLE1BQU0sRUFBQztBQUFsQixLQUNFLGdDQUFDLGlCQUFELEVBQVdBLEtBQVgsQ0FERixDQURGO0FBS0Q7QUFFRDs7Ozs7Ozs7Ozs7QUFTQSxJQUFNQyxpQkFBaUIsR0FBRyxTQUFwQkEsaUJBQW9CLE9BRXBCO0FBQUEsTUFESkMsY0FDSSxRQURKQSxjQUNJO0FBQUEsTUFEWUMsWUFDWixRQURZQSxZQUNaO0FBQUEsTUFEMEJDLGNBQzFCLFFBRDBCQSxjQUMxQjtBQUFBLE1BRDBDQyxjQUMxQyxRQUQwQ0EsY0FDMUM7QUFBQSxNQUQwREMsZ0JBQzFELFFBRDBEQSxnQkFDMUQ7QUFDSixNQUFNQyxlQUFlLEdBQUdDLE9BQU8sQ0FBQ0wsWUFBRCxDQUEvQjtBQUNBLE1BQU1NLGlCQUFpQixHQUFHRCxPQUFPLENBQUNKLGNBQUQsQ0FBakM7QUFDQSxNQUFNTSxrQkFBa0IsR0FBR0YsT0FBTyxDQUFDSCxjQUFELENBQWxDO0FBQ0EsTUFBTU0sb0JBQW9CLEdBQUdILE9BQU8sQ0FBQ0YsZ0JBQUQsQ0FBcEM7QUFDQSxNQUFNTSxPQUFPLEdBQUcsRUFBaEI7O0FBRUEsTUFBTUMsYUFBYSxHQUNqQjtBQUFRLElBQUEsU0FBUyxFQUFDLFdBQWxCO0FBQ0UsSUFBQSxRQUFRLEVBQUUsQ0FBQ1gsY0FEYjtBQUVFLElBQUEsT0FBTyxFQUFFRztBQUZYLEtBR0dGLFlBSEgsQ0FERjs7QUFPQSxNQUFNVyxlQUFlLEdBQ25CO0FBQVEsSUFBQSxTQUFTLEVBQUMsWUFBbEI7QUFDRSxJQUFBLFFBQVEsRUFBRSxDQUFDWixjQURiO0FBRUUsSUFBQSxPQUFPLEVBQUVJO0FBRlgsS0FHR0YsY0FISCxDQURGOztBQVFBLE1BQUlLLGlCQUFpQixJQUFJRSxvQkFBekIsRUFBK0M7QUFDN0NDLElBQUFBLE9BQU8sQ0FBQ0csSUFBUixDQUFhRCxlQUFiO0FBQ0Q7O0FBRUQsTUFBSVAsZUFBZSxJQUFJRyxrQkFBdkIsRUFBMkM7QUFDekNFLElBQUFBLE9BQU8sQ0FBQ0csSUFBUixDQUFhRixhQUFiO0FBQ0Q7O0FBQ0QsU0FBT0QsT0FBUDtBQUNELENBaENEOztBQWtDQSxJQUFNSSxNQUFNLEdBQUc7QUFDYkMsRUFBQUEsVUFBVSxFQUFFO0FBQUVDLElBQUFBLE9BQU8sRUFBRTtBQUFYLEdBREM7QUFFYkMsRUFBQUEsU0FBUyxFQUFFO0FBQUVDLElBQUFBLE1BQU0sRUFBRTtBQUFWO0FBRkUsQ0FBZjtBQU1BOzs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFpQk1DLFU7Ozs7Ozs7Ozs7c0NBQ2NDLEssRUFBT0MsSSxFQUFNO0FBQzdCQyxNQUFBQSxPQUFPLENBQUNGLEtBQVIsQ0FBY0EsS0FBZDtBQUNBRSxNQUFBQSxPQUFPLENBQUNDLElBQVIsQ0FBYUYsSUFBYjtBQUNEOzs7NkJBRVE7QUFBQSx3QkFZSCxLQUFLdkIsS0FaRjtBQUFBLFVBRUxFLGNBRkssZUFFTEEsY0FGSztBQUFBLFVBR0x3QixLQUhLLGVBR0xBLEtBSEs7QUFBQSxVQUlMdEIsY0FKSyxlQUlMQSxjQUpLO0FBQUEsVUFLTEQsWUFMSyxlQUtMQSxZQUxLO0FBQUEsVUFNTHdCLE9BTkssZUFNTEEsT0FOSztBQUFBLFVBT0xDLFFBUEssZUFPTEEsUUFQSztBQUFBLFVBUUxDLElBUkssZUFRTEEsSUFSSztBQUFBLFVBU0xDLFFBVEssZUFTTEEsUUFUSztBQUFBLFVBVUxsQixPQVZLLGVBVUxBLE9BVks7QUFBQSxVQVdMbUIsT0FYSyxlQVdMQSxPQVhLO0FBY1AsVUFBSUMsYUFBYSxHQUFHcEIsT0FBTyxHQUFHQSxPQUFILEdBQWFYLGlCQUFpQixDQUFDO0FBQ3hEQyxRQUFBQSxjQUFjLEVBQWRBLGNBRHdEO0FBRXhEQyxRQUFBQSxZQUFZLEVBQVpBLFlBRndEO0FBR3hEQyxRQUFBQSxjQUFjLEVBQWRBLGNBSHdEO0FBSXhEQyxRQUFBQSxjQUFjLEVBQUV1QixRQUp3QztBQUt4RHRCLFFBQUFBLGdCQUFnQixFQUFFcUI7QUFMc0MsT0FBRCxDQUF6RDtBQVFBLGFBQ0UsZ0NBQUMsa0JBQUQ7QUFDRSxRQUFBLElBQUksRUFBRUUsSUFEUjtBQUVFLFFBQUEsT0FBTyxFQUFFRixPQUZYO0FBR0UsUUFBQSxTQUFTLEVBQUUsSUFIYjtBQUlFLFFBQUEsY0FBYyxFQUFFNUIsY0FKbEI7QUFLRSxRQUFBLFVBQVUsRUFBRTtBQUFFa0MsVUFBQUEsU0FBUyxFQUFFRixPQUFPLENBQUNaO0FBQXJCLFNBTGQ7QUFNRSwrQ0FBOEJPLEtBQTlCO0FBTkYsU0FRRSxnQ0FBQyx1QkFBRDtBQUNFLFFBQUEsaUJBQWlCLEVBQUUsSUFEckI7QUFFRSxRQUFBLFNBQVMsRUFBQyw2QkFGWjtBQUdFLFFBQUEsS0FBSyxFQUFFO0FBQ0xRLFVBQUFBLEtBQUssRUFBRSxzQkFERjtBQUVMQyxVQUFBQSxlQUFlLEVBQUUsMEJBRlo7QUFHTGpCLFVBQUFBLE9BQU8sRUFBRSxNQUhKO0FBSUxrQixVQUFBQSxPQUFPLEVBQUUsT0FKSjtBQUtMQyxVQUFBQSxLQUFLLEVBQUUsTUFMRjtBQU1MQyxVQUFBQSxRQUFRLEVBQUUsRUFOTDtBQU9MQyxVQUFBQSxVQUFVLEVBQUUsR0FQUDtBQVFMQyxVQUFBQSxNQUFNLEVBQUU7QUFSSDtBQUhULFNBYUdkLEtBYkgsQ0FSRixFQXVCR0ksUUF2QkgsRUF3Qkk1QixjQUFjLEdBQ2QsZ0NBQUMseUJBQUQ7QUFBZSxRQUFBLG9CQUFvQixFQUFFO0FBQXJDLFNBQ0c4QixhQURILENBRGMsR0FHSyxFQTNCdkIsQ0FERjtBQStCRDs7O0VBM0RzQlMsa0JBQU1DLFM7O0FBOEQvQnJCLFVBQVUsQ0FBQ3NCLFNBQVgsR0FBdUI7QUFDckJDLEVBQUFBLEtBQUssRUFBRUMsc0JBQVVDLElBREk7QUFFckJsQyxFQUFBQSxPQUFPLEVBQUVpQyxzQkFBVUUsS0FGRTtBQUdyQnJCLEVBQUFBLEtBQUssRUFBRW1CLHNCQUFVRyxHQUhJO0FBSXJCNUMsRUFBQUEsY0FBYyxFQUFFeUMsc0JBQVVHLEdBSkw7QUFLckI3QyxFQUFBQSxZQUFZLEVBQUUwQyxzQkFBVUcsR0FMSDtBQU1yQjlDLEVBQUFBLGNBQWMsRUFBRTJDLHNCQUFVQyxJQU5MO0FBT3JCakIsRUFBQUEsSUFBSSxFQUFFZ0Isc0JBQVVDLElBUEs7QUFRckJuQixFQUFBQSxPQUFPLEVBQUVrQixzQkFBVUksSUFSRTtBQVNyQnJCLEVBQUFBLFFBQVEsRUFBRWlCLHNCQUFVSSxJQVRDO0FBVXJCbkIsRUFBQUEsUUFBUSxFQUFFZSxzQkFBVUcsR0FWQztBQVdyQmpCLEVBQUFBLE9BQU8sRUFBRWMsc0JBQVVLO0FBWEUsQ0FBdkI7QUFjQTdCLFVBQVUsQ0FBQzhCLFlBQVgsR0FBMEI7QUFDeEJqRCxFQUFBQSxjQUFjLEVBQUUsSUFEUTtBQUV4QjBDLEVBQUFBLEtBQUssRUFBRTtBQUZpQixDQUExQjs7ZUFLZSx3QkFBVzVCLE1BQVgsRUFBbUJLLFVBQW5CLEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBEaWFsb2cgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvRGlhbG9nJztcbmltcG9ydCBEaWFsb2dUaXRsZSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9EaWFsb2dUaXRsZSc7XG5pbXBvcnQgRGlhbG9nQWN0aW9ucyBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9EaWFsb2dBY3Rpb25zJztcbmltcG9ydCB7IHdpdGhTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xuaW1wb3J0IFBhcGVyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1BhcGVyJztcbmltcG9ydCBEcmFnZ2FibGUgZnJvbSAncmVhY3QtZHJhZ2dhYmxlJztcblxuZnVuY3Rpb24gUGFwZXJDb21wb25lbnQocHJvcHMpIHtcbiAgLy8gY29tcG9uZW50IHdpbGwgb25seSBiZSBkcmFnZ2FibGUgYnkgZWxlbWVudCB3aXRoIHRoZSBjbGFzc05hbWUgaW4gdGhlIGhhbmRsZSBwcm9wXG4gIHJldHVybiAoXG4gICAgPERyYWdnYWJsZSBoYW5kbGU9XCIuQmFzZURpYWxvZy1kcmFnZ2FibGUtaGFuZGxlXCI+XG4gICAgICA8UGFwZXIgey4uLnByb3BzfSAvPlxuICAgIDwvRHJhZ2dhYmxlPlxuICApO1xufVxuXG4vKipcbiAqIEdlbmVyYXRlcyB0aGUgZGlhbG9nIGFjdGlvbnNcbiAqIEBwYXJhbSB7Ym9vbH0gYWN0aW9uc0VuYWJsZWQgZW5hYmxlcy9kaXNhYmxlcyB0aGUgYWN0aW9uIGJ1dHRvbnNcbiAqIEBwYXJhbSB7Kn0gcHJpbWFyeUxhYmVsIHRoZSB0aXRsZSBvZiB0aGUgcHJpbWFyeSBidXR0b25cbiAqIEBwYXJhbSB7Kn0gc2Vjb25kYXJ5TGFiZWwgdGhlIHRpdGxlIG9mIHRoZSBzZWNvbmRhcnkgYnV0dG9uXG4gKiBAcGFyYW0ge2Z1bmN9IG9uUHJpbWFyeUNsaWNrIHRoZSBjbGljayBjYWxsYmFjayBvZiB0aGUgcHJpbWFyeSBidXR0b25cbiAqIEBwYXJhbSB7ZnVuY30gb25TZWNvbmRhcnlDbGljayB0aGUgY2xpY2sgY2FsbGJhY2sgb2YgdGhlIHNlY29uZGFyeSBidXR0b25cbiAqIEByZXR1cm4geyp9XG4gKi9cbmNvbnN0IG1ha2VEaWFsb2dBY3Rpb25zID0gKHtcbiAgYWN0aW9uc0VuYWJsZWQsIHByaW1hcnlMYWJlbCwgc2Vjb25kYXJ5TGFiZWwsIG9uUHJpbWFyeUNsaWNrLCBvblNlY29uZGFyeUNsaWNrLFxufSkgPT4ge1xuICBjb25zdCBoYXNQcmltYXJ5TGFiZWwgPSBCb29sZWFuKHByaW1hcnlMYWJlbCk7XG4gIGNvbnN0IGhhc1NlY29uZGFyeUxhYmVsID0gQm9vbGVhbihzZWNvbmRhcnlMYWJlbCk7XG4gIGNvbnN0IGhhc1ByaW1hcnlDYWxsYmFjayA9IEJvb2xlYW4ob25QcmltYXJ5Q2xpY2spO1xuICBjb25zdCBoYXNTZWNvbmRhcnlDYWxsYmFjayA9IEJvb2xlYW4ob25TZWNvbmRhcnlDbGljayk7XG4gIGNvbnN0IGFjdGlvbnMgPSBbXTtcblxuICBjb25zdCBwcmltYXJ5QnV0dG9uID0gKFxuICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuLXByaW1lXCJcbiAgICAgIGRpc2FibGVkPXshYWN0aW9uc0VuYWJsZWR9XG4gICAgICBvbkNsaWNrPXtvblByaW1hcnlDbGlja30+XG4gICAgICB7cHJpbWFyeUxhYmVsfVxuICAgIDwvYnV0dG9uPlxuICApO1xuICBjb25zdCBzZWNvbmRhcnlCdXR0b24gPSAoXG4gICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4tc2Vjb25kXCJcbiAgICAgIGRpc2FibGVkPXshYWN0aW9uc0VuYWJsZWR9XG4gICAgICBvbkNsaWNrPXtvblNlY29uZGFyeUNsaWNrfT5cbiAgICAgIHtzZWNvbmRhcnlMYWJlbH1cbiAgICA8L2J1dHRvbj5cbiAgKTtcblxuICBpZiAoaGFzU2Vjb25kYXJ5TGFiZWwgJiYgaGFzU2Vjb25kYXJ5Q2FsbGJhY2spIHtcbiAgICBhY3Rpb25zLnB1c2goc2Vjb25kYXJ5QnV0dG9uKTtcbiAgfVxuXG4gIGlmIChoYXNQcmltYXJ5TGFiZWwgJiYgaGFzUHJpbWFyeUNhbGxiYWNrKSB7XG4gICAgYWN0aW9ucy5wdXNoKHByaW1hcnlCdXR0b24pO1xuICB9XG4gIHJldHVybiBhY3Rpb25zO1xufTtcblxuY29uc3Qgc3R5bGVzID0ge1xuICBhY3Rpb25Sb290OiB7IHBhZGRpbmc6IDAgfSxcbiAgcGFwZXJSb290OiB7IG1hcmdpbjogJzBweCcgfSxcbn07XG5cblxuLyoqXG4gKiBSZXByZXNlbnRzIGEgZ2VuZXJpYyBkaWFsb2cuXG4gKiBZb3UgY291bGQgdXNlIHRoaXMgdG8gZGlzcGxheSBzaW1wbGUgaW5mb3JtYXRpb24sXG4gKiBvciB5b3UgY291bGQgY3JlYXRlIGEgbmV3IGNvbXBvbmVudCB0aGF0IHdyYXBzIHRoaXMgY29tcG9uZW50XG4gKiB3aXRoIHNvbWUgY3VzdG9tIGZ1bmN0aW9uYWxpdHkuXG4gKlxuICogQGNsYXNzXG4gKiBAcHJvcGVydHkge2Jvb2x9IFttb2RhbF0gLSBjb250cm9scyB3aGV0aGVyIHRoaXMgZGlhbG9nIGlzIG1vZGFsXG4gKiBAcHJvcGVydHkge09iamVjdFtdfSBbYWN0aW9uc10gLSBhIGN1c3RvbSBsaXN0IG9mIGFjdGlvbnMuIFRoaXMgb3ZlcnJpZGVzIHRoZSBkZWZhdWx0IHNlY29uZGFyeSBhbmQgcHJpbWFyeSBhY3Rpb25zLlxuICogQHByb3BlcnR5IHsqfSBbdGl0bGVdIC0gdGhlIHRpdGxlIG9mIHRoZSBkaWFsb2dcbiAqIEBwcm9wZXJ0eSB7Kn0gW3NlY29uZGFyeUxhYmVsXSAtIHRoZSBsYWJlbCBvZiB0aGUgc2Vjb25kYXJ5IGFjdGlvblxuICogQHByb3BlcnR5IHsqfSBbcHJpbWFyeUxhYmVsXSAtIHRoZSBsYWJlbCBvZiB0aGUgcHJpbWFyeSBhY3Rpb25cbiAqIEBwcm9wZXJ0eSB7Ym9vbH0gW2FjdGlvbnNFbmFibGVkXSAtIGNvbnRyb2xzIHdoZXRoZXIgdGhlIGFjdGlvbnMgYXJlIGVuYWJsZWQgb3IgZGlzYWJsZWRcbiAqIEBwcm9wZXJ0eSB7Ym9vbH0gW29wZW5dIC0gY29udHJvbHMgd2hldGhlciB0aGUgZGlhbG9nIGlzIG9wZW5cbiAqIEBwcm9wZXJ0eSB7ZnVuY30gW29uQ2xvc2VdIC0gY2FsbGJhY2sgd2hlbiB0aGUgc2Vjb25kYXJ5IGJ1dHRvbiBpcyB0cmlnZ2VyZWQuIE92ZXJyaWRkZW4gYnkgYGFjdGlvbnNgXG4gKiBAcHJvcGVydHkge2Z1bmN9IFtvblN1Ym1pdF0gLSBjYWxsYmFjayB3aGVuIHRoZSBwcmltYXJ5IGJ1dHRvbiBpcyB0cmlnZ2VyZWQuIE92ZXJyaWRkZW4gYnkgYGFjdGlvbnNgXG4gKi9cbmNsYXNzIEJhc2VEaWFsb2cgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb21wb25lbnREaWRDYXRjaChlcnJvciwgaW5mbykge1xuICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgIGNvbnNvbGUud2FybihpbmZvKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICBhY3Rpb25zRW5hYmxlZCxcbiAgICAgIHRpdGxlLFxuICAgICAgc2Vjb25kYXJ5TGFiZWwsXG4gICAgICBwcmltYXJ5TGFiZWwsXG4gICAgICBvbkNsb3NlLFxuICAgICAgb25TdWJtaXQsXG4gICAgICBvcGVuLFxuICAgICAgY2hpbGRyZW4sXG4gICAgICBhY3Rpb25zLFxuICAgICAgY2xhc3NlcyxcbiAgICB9ID0gdGhpcy5wcm9wcztcblxuICAgIGxldCBkaWFsb2dBY3Rpb25zID0gYWN0aW9ucyA/IGFjdGlvbnMgOiBtYWtlRGlhbG9nQWN0aW9ucyh7XG4gICAgICBhY3Rpb25zRW5hYmxlZCxcbiAgICAgIHByaW1hcnlMYWJlbCxcbiAgICAgIHNlY29uZGFyeUxhYmVsLFxuICAgICAgb25QcmltYXJ5Q2xpY2s6IG9uU3VibWl0LFxuICAgICAgb25TZWNvbmRhcnlDbGljazogb25DbG9zZSxcbiAgICB9KTtcblxuICAgIHJldHVybiAoXG4gICAgICA8RGlhbG9nXG4gICAgICAgIG9wZW49e29wZW59XG4gICAgICAgIG9uQ2xvc2U9e29uQ2xvc2V9XG4gICAgICAgIGZ1bGxXaWR0aD17dHJ1ZX1cbiAgICAgICAgUGFwZXJDb21wb25lbnQ9e1BhcGVyQ29tcG9uZW50fVxuICAgICAgICBQYXBlclByb3BzPXt7IGNsYXNzTmFtZTogY2xhc3Nlcy5wYXBlclJvb3QgfX1cbiAgICAgICAgYXJpYS1sYWJlbGxlZGJ5PXtgZHJhZ2dhYmxlLSR7dGl0bGV9LWRpYWxvZ2B9XG4gICAgICA+XG4gICAgICAgIDxEaWFsb2dUaXRsZVxuICAgICAgICAgIGRpc2FibGVUeXBvZ3JhcGh5PXt0cnVlfVxuICAgICAgICAgIGNsYXNzTmFtZT1cIkJhc2VEaWFsb2ctZHJhZ2dhYmxlLWhhbmRsZVwiXG4gICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgIGNvbG9yOiAndmFyKC0tcmV2ZXJzZS1jb2xvciknLFxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAndmFyKC0tYWNjZW50LWNvbG9yLWRhcmspJyxcbiAgICAgICAgICAgIHBhZGRpbmc6ICcxNXB4JyxcbiAgICAgICAgICAgIGRpc3BsYXk6ICdibG9jaycsXG4gICAgICAgICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgICAgICAgZm9udFNpemU6IDIyLFxuICAgICAgICAgICAgZm9udFdlaWdodDogNDAwLFxuICAgICAgICAgICAgY3Vyc29yOiAnbW92ZScsXG4gICAgICAgICAgfX0+XG4gICAgICAgICAge3RpdGxlfVxuICAgICAgICA8L0RpYWxvZ1RpdGxlPlxuICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgIHsgYWN0aW9uc0VuYWJsZWQgP1xuICAgICAgICAgIDxEaWFsb2dBY3Rpb25zIGRpc2FibGVBY3Rpb25TcGFjaW5nPXt0cnVlfT5cbiAgICAgICAgICAgIHtkaWFsb2dBY3Rpb25zfVxuICAgICAgICAgIDwvRGlhbG9nQWN0aW9ucz4gOiAnJ31cbiAgICAgIDwvRGlhbG9nPlxuICAgICk7XG4gIH1cbn1cblxuQmFzZURpYWxvZy5wcm9wVHlwZXMgPSB7XG4gIG1vZGFsOiBQcm9wVHlwZXMuYm9vbCxcbiAgYWN0aW9uczogUHJvcFR5cGVzLmFycmF5LFxuICB0aXRsZTogUHJvcFR5cGVzLmFueSxcbiAgc2Vjb25kYXJ5TGFiZWw6IFByb3BUeXBlcy5hbnksXG4gIHByaW1hcnlMYWJlbDogUHJvcFR5cGVzLmFueSxcbiAgYWN0aW9uc0VuYWJsZWQ6IFByb3BUeXBlcy5ib29sLFxuICBvcGVuOiBQcm9wVHlwZXMuYm9vbCxcbiAgb25DbG9zZTogUHJvcFR5cGVzLmZ1bmMsXG4gIG9uU3VibWl0OiBQcm9wVHlwZXMuZnVuYyxcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5hbnksXG4gIGNsYXNzZXM6IFByb3BUeXBlcy5vYmplY3QsXG59O1xuXG5CYXNlRGlhbG9nLmRlZmF1bHRQcm9wcyA9IHtcbiAgYWN0aW9uc0VuYWJsZWQ6IHRydWUsXG4gIG1vZGFsOiBmYWxzZSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZXMoc3R5bGVzKShCYXNlRGlhbG9nKTtcbiJdfQ==