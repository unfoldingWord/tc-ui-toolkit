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

var _styles = require("@material-ui/core/styles");

var _Paper = _interopRequireDefault(require("@material-ui/core/Paper"));

var _reactDraggable = _interopRequireDefault(require("react-draggable"));

var _DialogActions = _interopRequireDefault(require("@material-ui/core/DialogActions"));

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
  var primaryActionEnabled = _ref.primaryActionEnabled,
      secondaryActionEnabled = _ref.secondaryActionEnabled,
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
    disabled: !primaryActionEnabled,
    onClick: onPrimaryClick
  }, primaryLabel);

  var secondaryButton = _react["default"].createElement("button", {
    className: "btn-second",
    disabled: !secondaryActionEnabled,
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
          primaryActionEnabled = _this$props.primaryActionEnabled,
          secondaryActionEnabled = _this$props.secondaryActionEnabled,
          modal = _this$props.modal,
          title = _this$props.title,
          bodyStyle = _this$props.bodyStyle,
          secondaryLabel = _this$props.secondaryLabel,
          primaryLabel = _this$props.primaryLabel,
          onClose = _this$props.onClose,
          onSubmit = _this$props.onSubmit,
          open = _this$props.open,
          children = _this$props.children,
          actions = _this$props.actions,
          scrollableContent = _this$props.scrollableContent,
          contentStyle = _this$props.contentStyle,
          classes = _this$props.classes;
      var dialogActions = actions ? actions : makeDialogActions({
        primaryActionEnabled: primaryActionEnabled,
        secondaryActionEnabled: secondaryActionEnabled,
        primaryLabel: primaryLabel,
        secondaryLabel: secondaryLabel,
        onPrimaryClick: onSubmit,
        onSecondaryClick: onClose
      });
      var isModal = dialogActions.length !== 0;

      if (typeof modal !== 'undefined') {
        isModal = modal;
      }

      return _react["default"].createElement(_Dialog["default"], {
        open: open,
        modal: isModal,
        bodyStyle: bodyStyle,
        contentStyle: contentStyle,
        autoScrollBodyContent: scrollableContent,
        onRequestClose: onClose,
        actions: dialogActions,
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
      }, title), children, _react["default"].createElement(_DialogActions["default"], {
        disableActionSpacing: true
      }, dialogActions));
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
  primaryActionEnabled: _propTypes["default"].bool,
  secondaryActionEnabled: _propTypes["default"].bool,
  open: _propTypes["default"].bool,
  onClose: _propTypes["default"].func,
  onSubmit: _propTypes["default"].func,
  scrollableContent: _propTypes["default"].bool,
  titleStyle: _propTypes["default"].object,
  children: _propTypes["default"].any,
  bodyStyle: _propTypes["default"].object,
  contentStyle: _propTypes["default"].object,
  classes: _propTypes["default"].object
};
BaseDialog.defaultProps = {
  primaryActionEnabled: true,
  secondaryActionEnabled: true,
  titleStyle: {},
  modal: false
};

var _default = (0, _styles.withStyles)(styles)(BaseDialog);

exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9Db21tZW50c0RpYWxvZy9CYXNlRGlhbG9nLmpzIl0sIm5hbWVzIjpbIlBhcGVyQ29tcG9uZW50IiwicHJvcHMiLCJtYWtlRGlhbG9nQWN0aW9ucyIsInByaW1hcnlBY3Rpb25FbmFibGVkIiwic2Vjb25kYXJ5QWN0aW9uRW5hYmxlZCIsInByaW1hcnlMYWJlbCIsInNlY29uZGFyeUxhYmVsIiwib25QcmltYXJ5Q2xpY2siLCJvblNlY29uZGFyeUNsaWNrIiwiaGFzUHJpbWFyeUxhYmVsIiwiQm9vbGVhbiIsImhhc1NlY29uZGFyeUxhYmVsIiwiaGFzUHJpbWFyeUNhbGxiYWNrIiwiaGFzU2Vjb25kYXJ5Q2FsbGJhY2siLCJhY3Rpb25zIiwicHJpbWFyeUJ1dHRvbiIsInNlY29uZGFyeUJ1dHRvbiIsInB1c2giLCJzdHlsZXMiLCJhY3Rpb25Sb290IiwicGFkZGluZyIsInBhcGVyUm9vdCIsIm1hcmdpbiIsIkJhc2VEaWFsb2ciLCJlcnJvciIsImluZm8iLCJjb25zb2xlIiwid2FybiIsIm1vZGFsIiwidGl0bGUiLCJib2R5U3R5bGUiLCJvbkNsb3NlIiwib25TdWJtaXQiLCJvcGVuIiwiY2hpbGRyZW4iLCJzY3JvbGxhYmxlQ29udGVudCIsImNvbnRlbnRTdHlsZSIsImNsYXNzZXMiLCJkaWFsb2dBY3Rpb25zIiwiaXNNb2RhbCIsImxlbmd0aCIsImNsYXNzTmFtZSIsImNvbG9yIiwiYmFja2dyb3VuZENvbG9yIiwiZGlzcGxheSIsIndpZHRoIiwiZm9udFNpemUiLCJmb250V2VpZ2h0IiwiY3Vyc29yIiwiUmVhY3QiLCJDb21wb25lbnQiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJib29sIiwiYXJyYXkiLCJhbnkiLCJmdW5jIiwidGl0bGVTdHlsZSIsIm9iamVjdCIsImRlZmF1bHRQcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNB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QUFtQkFuQyxVQUFVLENBQUNvQyxZQUFYLEdBQTBCO0FBQ3hCeEQsRUFBQUEsb0JBQW9CLEVBQUUsSUFERTtBQUV4QkMsRUFBQUEsc0JBQXNCLEVBQUUsSUFGQTtBQUd4QnFELEVBQUFBLFVBQVUsRUFBRSxFQUhZO0FBSXhCN0IsRUFBQUEsS0FBSyxFQUFFO0FBSmlCLENBQTFCOztlQU9lLHdCQUFXVixNQUFYLEVBQW1CSyxVQUFuQixDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgRGlhbG9nIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0RpYWxvZyc7XG5pbXBvcnQgRGlhbG9nVGl0bGUgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvRGlhbG9nVGl0bGUnO1xuaW1wb3J0IHsgd2l0aFN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XG5pbXBvcnQgUGFwZXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvUGFwZXInO1xuaW1wb3J0IERyYWdnYWJsZSBmcm9tICdyZWFjdC1kcmFnZ2FibGUnO1xuaW1wb3J0IERpYWxvZ0FjdGlvbnMgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvRGlhbG9nQWN0aW9ucyc7XG5cbmZ1bmN0aW9uIFBhcGVyQ29tcG9uZW50KHByb3BzKSB7XG4gIC8vIGNvbXBvbmVudCB3aWxsIG9ubHkgYmUgZHJhZ2dhYmxlIGJ5IGVsZW1lbnQgd2l0aCB0aGUgY2xhc3NOYW1lIGluIHRoZSBoYW5kbGUgcHJvcFxuICByZXR1cm4gKFxuICAgIDxEcmFnZ2FibGUgaGFuZGxlPVwiLkJhc2VEaWFsb2ctZHJhZ2dhYmxlLWhhbmRsZVwiPlxuICAgICAgPFBhcGVyIHsuLi5wcm9wc30gLz5cbiAgICA8L0RyYWdnYWJsZT5cbiAgKTtcbn1cblxuLyoqXG4gKiBHZW5lcmF0ZXMgdGhlIGRpYWxvZyBhY3Rpb25zXG4gKiBAcGFyYW0ge2Jvb2x9IGFjdGlvbnNFbmFibGVkIGVuYWJsZXMvZGlzYWJsZXMgdGhlIGFjdGlvbiBidXR0b25zXG4gKiBAcGFyYW0geyp9IHByaW1hcnlMYWJlbCB0aGUgdGl0bGUgb2YgdGhlIHByaW1hcnkgYnV0dG9uXG4gKiBAcGFyYW0geyp9IHNlY29uZGFyeUxhYmVsIHRoZSB0aXRsZSBvZiB0aGUgc2Vjb25kYXJ5IGJ1dHRvblxuICogQHBhcmFtIHtmdW5jfSBvblByaW1hcnlDbGljayB0aGUgY2xpY2sgY2FsbGJhY2sgb2YgdGhlIHByaW1hcnkgYnV0dG9uXG4gKiBAcGFyYW0ge2Z1bmN9IG9uU2Vjb25kYXJ5Q2xpY2sgdGhlIGNsaWNrIGNhbGxiYWNrIG9mIHRoZSBzZWNvbmRhcnkgYnV0dG9uXG4gKiBAcmV0dXJuIHsqfVxuICovXG5jb25zdCBtYWtlRGlhbG9nQWN0aW9ucyA9ICh7XG4gIHByaW1hcnlBY3Rpb25FbmFibGVkLFxuICBzZWNvbmRhcnlBY3Rpb25FbmFibGVkLFxuICBwcmltYXJ5TGFiZWwsXG4gIHNlY29uZGFyeUxhYmVsLFxuICBvblByaW1hcnlDbGljayxcbiAgb25TZWNvbmRhcnlDbGljayxcbn0pID0+IHtcbiAgY29uc3QgaGFzUHJpbWFyeUxhYmVsID0gQm9vbGVhbihwcmltYXJ5TGFiZWwpO1xuICBjb25zdCBoYXNTZWNvbmRhcnlMYWJlbCA9IEJvb2xlYW4oc2Vjb25kYXJ5TGFiZWwpO1xuICBjb25zdCBoYXNQcmltYXJ5Q2FsbGJhY2sgPSBCb29sZWFuKG9uUHJpbWFyeUNsaWNrKTtcbiAgY29uc3QgaGFzU2Vjb25kYXJ5Q2FsbGJhY2sgPSBCb29sZWFuKG9uU2Vjb25kYXJ5Q2xpY2spO1xuICBjb25zdCBhY3Rpb25zID0gW107XG5cbiAgY29uc3QgcHJpbWFyeUJ1dHRvbiA9IChcbiAgICA8YnV0dG9uXG4gICAgICBjbGFzc05hbWU9XCJidG4tcHJpbWVcIlxuICAgICAgZGlzYWJsZWQ9eyFwcmltYXJ5QWN0aW9uRW5hYmxlZH1cbiAgICAgIG9uQ2xpY2s9e29uUHJpbWFyeUNsaWNrfVxuICAgID5cbiAgICAgIHtwcmltYXJ5TGFiZWx9XG4gICAgPC9idXR0b24+XG4gICk7XG4gIGNvbnN0IHNlY29uZGFyeUJ1dHRvbiA9IChcbiAgICA8YnV0dG9uXG4gICAgICBjbGFzc05hbWU9XCJidG4tc2Vjb25kXCJcbiAgICAgIGRpc2FibGVkPXshc2Vjb25kYXJ5QWN0aW9uRW5hYmxlZH1cbiAgICAgIG9uQ2xpY2s9e29uU2Vjb25kYXJ5Q2xpY2t9XG4gICAgPlxuICAgICAge3NlY29uZGFyeUxhYmVsfVxuICAgIDwvYnV0dG9uPlxuICApO1xuXG4gIGlmIChoYXNTZWNvbmRhcnlMYWJlbCAmJiBoYXNTZWNvbmRhcnlDYWxsYmFjaykge1xuICAgIGFjdGlvbnMucHVzaChzZWNvbmRhcnlCdXR0b24pO1xuICB9XG5cbiAgaWYgKGhhc1ByaW1hcnlMYWJlbCAmJiBoYXNQcmltYXJ5Q2FsbGJhY2spIHtcbiAgICBhY3Rpb25zLnB1c2gocHJpbWFyeUJ1dHRvbik7XG4gIH1cbiAgcmV0dXJuIGFjdGlvbnM7XG59O1xuXG5jb25zdCBzdHlsZXMgPSB7XG4gIGFjdGlvblJvb3Q6IHsgcGFkZGluZzogMCB9LFxuICBwYXBlclJvb3Q6IHsgbWFyZ2luOiAnMHB4JyB9LFxufTtcblxuXG4vKipcbiAqIFJlcHJlc2VudHMgYSBnZW5lcmljIGRpYWxvZy5cbiAqIFlvdSBjb3VsZCB1c2UgdGhpcyB0byBkaXNwbGF5IHNpbXBsZSBpbmZvcm1hdGlvbixcbiAqIG9yIHlvdSBjb3VsZCBjcmVhdGUgYSBuZXcgY29tcG9uZW50IHRoYXQgd3JhcHMgdGhpcyBjb21wb25lbnRcbiAqIHdpdGggc29tZSBjdXN0b20gZnVuY3Rpb25hbGl0eS5cbiAqXG4gKiBAY2xhc3NcbiAqIEBwcm9wZXJ0eSB7Ym9vbH0gW21vZGFsXSAtIGNvbnRyb2xzIHdoZXRoZXIgdGhpcyBkaWFsb2cgaXMgbW9kYWxcbiAqIEBwcm9wZXJ0eSB7T2JqZWN0W119IFthY3Rpb25zXSAtIGEgY3VzdG9tIGxpc3Qgb2YgYWN0aW9ucy4gVGhpcyBvdmVycmlkZXMgdGhlIGRlZmF1bHQgc2Vjb25kYXJ5IGFuZCBwcmltYXJ5IGFjdGlvbnMuXG4gKiBAcHJvcGVydHkgeyp9IFt0aXRsZV0gLSB0aGUgdGl0bGUgb2YgdGhlIGRpYWxvZ1xuICogQHByb3BlcnR5IHsqfSBbc2Vjb25kYXJ5TGFiZWxdIC0gdGhlIGxhYmVsIG9mIHRoZSBzZWNvbmRhcnkgYWN0aW9uXG4gKiBAcHJvcGVydHkgeyp9IFtwcmltYXJ5TGFiZWxdIC0gdGhlIGxhYmVsIG9mIHRoZSBwcmltYXJ5IGFjdGlvblxuICogQHByb3BlcnR5IHtib29sfSBbYWN0aW9uc0VuYWJsZWRdIC0gY29udHJvbHMgd2hldGhlciB0aGUgYWN0aW9ucyBhcmUgZW5hYmxlZCBvciBkaXNhYmxlZFxuICogQHByb3BlcnR5IHtib29sfSBbb3Blbl0gLSBjb250cm9scyB3aGV0aGVyIHRoZSBkaWFsb2cgaXMgb3BlblxuICogQHByb3BlcnR5IHtmdW5jfSBbb25DbG9zZV0gLSBjYWxsYmFjayB3aGVuIHRoZSBzZWNvbmRhcnkgYnV0dG9uIGlzIHRyaWdnZXJlZC4gT3ZlcnJpZGRlbiBieSBgYWN0aW9uc2BcbiAqIEBwcm9wZXJ0eSB7ZnVuY30gW29uU3VibWl0XSAtIGNhbGxiYWNrIHdoZW4gdGhlIHByaW1hcnkgYnV0dG9uIGlzIHRyaWdnZXJlZC4gT3ZlcnJpZGRlbiBieSBgYWN0aW9uc2BcbiAqL1xuY2xhc3MgQmFzZURpYWxvZyBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbXBvbmVudERpZENhdGNoKGVycm9yLCBpbmZvKSB7XG4gICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgY29uc29sZS53YXJuKGluZm8pO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIHByaW1hcnlBY3Rpb25FbmFibGVkLFxuICAgICAgc2Vjb25kYXJ5QWN0aW9uRW5hYmxlZCxcbiAgICAgIG1vZGFsLFxuICAgICAgdGl0bGUsXG4gICAgICBib2R5U3R5bGUsXG4gICAgICBzZWNvbmRhcnlMYWJlbCxcbiAgICAgIHByaW1hcnlMYWJlbCxcbiAgICAgIG9uQ2xvc2UsXG4gICAgICBvblN1Ym1pdCxcbiAgICAgIG9wZW4sXG4gICAgICBjaGlsZHJlbixcbiAgICAgIGFjdGlvbnMsXG4gICAgICBzY3JvbGxhYmxlQ29udGVudCxcbiAgICAgIGNvbnRlbnRTdHlsZSxcbiAgICAgIGNsYXNzZXMsXG4gICAgfSA9IHRoaXMucHJvcHM7XG5cbiAgICBsZXQgZGlhbG9nQWN0aW9ucyA9IGFjdGlvbnNcbiAgICAgID8gYWN0aW9uc1xuICAgICAgOiBtYWtlRGlhbG9nQWN0aW9ucyh7XG4gICAgICAgIHByaW1hcnlBY3Rpb25FbmFibGVkLFxuICAgICAgICBzZWNvbmRhcnlBY3Rpb25FbmFibGVkLFxuICAgICAgICBwcmltYXJ5TGFiZWwsXG4gICAgICAgIHNlY29uZGFyeUxhYmVsLFxuICAgICAgICBvblByaW1hcnlDbGljazogb25TdWJtaXQsXG4gICAgICAgIG9uU2Vjb25kYXJ5Q2xpY2s6IG9uQ2xvc2UsXG4gICAgICB9KTtcblxuICAgIGxldCBpc01vZGFsID0gZGlhbG9nQWN0aW9ucy5sZW5ndGggIT09IDA7XG5cbiAgICBpZiAodHlwZW9mIG1vZGFsICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgaXNNb2RhbCA9IG1vZGFsO1xuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICA8RGlhbG9nXG4gICAgICAgIG9wZW49e29wZW59XG4gICAgICAgIG1vZGFsPXtpc01vZGFsfVxuICAgICAgICBib2R5U3R5bGU9e2JvZHlTdHlsZX1cbiAgICAgICAgY29udGVudFN0eWxlPXtjb250ZW50U3R5bGV9XG4gICAgICAgIGF1dG9TY3JvbGxCb2R5Q29udGVudD17c2Nyb2xsYWJsZUNvbnRlbnR9XG4gICAgICAgIG9uUmVxdWVzdENsb3NlPXtvbkNsb3NlfVxuICAgICAgICBhY3Rpb25zPXtkaWFsb2dBY3Rpb25zfVxuICAgICAgICBvbkNsb3NlPXtvbkNsb3NlfVxuICAgICAgICBmdWxsV2lkdGg9e3RydWV9XG4gICAgICAgIFBhcGVyQ29tcG9uZW50PXtQYXBlckNvbXBvbmVudH1cbiAgICAgICAgUGFwZXJQcm9wcz17eyBjbGFzc05hbWU6IGNsYXNzZXMucGFwZXJSb290IH19XG4gICAgICAgIGFyaWEtbGFiZWxsZWRieT17YGRyYWdnYWJsZS0ke3RpdGxlfS1kaWFsb2dgfVxuICAgICAgPlxuICAgICAgICA8RGlhbG9nVGl0bGVcbiAgICAgICAgICBkaXNhYmxlVHlwb2dyYXBoeT17dHJ1ZX1cbiAgICAgICAgICBjbGFzc05hbWU9XCJCYXNlRGlhbG9nLWRyYWdnYWJsZS1oYW5kbGVcIlxuICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICBjb2xvcjogJ3ZhcigtLXJldmVyc2UtY29sb3IpJyxcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJ3ZhcigtLWFjY2VudC1jb2xvci1kYXJrKScsXG4gICAgICAgICAgICBwYWRkaW5nOiAnMTVweCcsXG4gICAgICAgICAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgICAgICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgICAgICAgIGZvbnRTaXplOiAyMixcbiAgICAgICAgICAgIGZvbnRXZWlnaHQ6IDQwMCxcbiAgICAgICAgICAgIGN1cnNvcjogJ21vdmUnLFxuICAgICAgICAgIH19PlxuICAgICAgICAgIHt0aXRsZX1cbiAgICAgICAgPC9EaWFsb2dUaXRsZT5cbiAgICAgICAge2NoaWxkcmVufVxuICAgICAgICA8RGlhbG9nQWN0aW9ucyBkaXNhYmxlQWN0aW9uU3BhY2luZz17dHJ1ZX0+XG4gICAgICAgICAge2RpYWxvZ0FjdGlvbnN9XG4gICAgICAgIDwvRGlhbG9nQWN0aW9ucz5cbiAgICAgIDwvRGlhbG9nPlxuICAgICk7XG4gIH1cbn1cblxuQmFzZURpYWxvZy5wcm9wVHlwZXMgPSB7XG4gIG1vZGFsOiBQcm9wVHlwZXMuYm9vbCxcbiAgYWN0aW9uczogUHJvcFR5cGVzLmFycmF5LFxuICB0aXRsZTogUHJvcFR5cGVzLmFueSxcbiAgc2Vjb25kYXJ5TGFiZWw6IFByb3BUeXBlcy5hbnksXG4gIHByaW1hcnlMYWJlbDogUHJvcFR5cGVzLmFueSxcbiAgcHJpbWFyeUFjdGlvbkVuYWJsZWQ6IFByb3BUeXBlcy5ib29sLFxuICBzZWNvbmRhcnlBY3Rpb25FbmFibGVkOiBQcm9wVHlwZXMuYm9vbCxcbiAgb3BlbjogUHJvcFR5cGVzLmJvb2wsXG4gIG9uQ2xvc2U6IFByb3BUeXBlcy5mdW5jLFxuICBvblN1Ym1pdDogUHJvcFR5cGVzLmZ1bmMsXG4gIHNjcm9sbGFibGVDb250ZW50OiBQcm9wVHlwZXMuYm9vbCxcbiAgdGl0bGVTdHlsZTogUHJvcFR5cGVzLm9iamVjdCxcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5hbnksXG4gIGJvZHlTdHlsZTogUHJvcFR5cGVzLm9iamVjdCxcbiAgY29udGVudFN0eWxlOiBQcm9wVHlwZXMub2JqZWN0LFxuICBjbGFzc2VzOiBQcm9wVHlwZXMub2JqZWN0LFxufTtcblxuQmFzZURpYWxvZy5kZWZhdWx0UHJvcHMgPSB7XG4gIHByaW1hcnlBY3Rpb25FbmFibGVkOiB0cnVlLFxuICBzZWNvbmRhcnlBY3Rpb25FbmFibGVkOiB0cnVlLFxuICB0aXRsZVN0eWxlOiB7fSxcbiAgbW9kYWw6IGZhbHNlLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlcyhzdHlsZXMpKEJhc2VEaWFsb2cpO1xuIl19