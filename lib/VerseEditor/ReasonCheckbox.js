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

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styles = require("@material-ui/core/styles");

var _Checkbox = _interopRequireDefault(require("@material-ui/core/Checkbox"));

var _FormControlLabel = _interopRequireDefault(require("@material-ui/core/FormControlLabel"));

var styles = {
  formControlLabelRoot: {
    height: 30
  },
  formControlLabel: {
    justifyContent: 'flex-start',
    fontWeight: 700,
    fontSize: 16
  },
  checkBox: {
    '&$checked': {
      color: 'var(--accent-color-dark)'
    }
  },
  checked: {}
};
/**
 * @callback ReasonCheckbox~onCheck
 * @param {string} reason - the reason being checked
 * @param {bool} checked - indicates if the reason is checked
 */

/**
 * Renders a reason checkbox
 * @property {string} reason - the reason for the edit
 * @property {string} label - the checkbox label
 * @property {string[]} selectedReasons - an array of selected reasons
 * @property {ReasonCheckbox~onCheck} onCheck - callback when the checkbox is changed
 */

var ReasonCheckbox = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2["default"])(ReasonCheckbox, _React$Component);

  function ReasonCheckbox(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, ReasonCheckbox);
    _this = (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(ReasonCheckbox).call(this, props));
    _this._handleCheck = _this._handleCheck.bind((0, _assertThisInitialized2["default"])(_this));
    return _this;
  }

  (0, _createClass2["default"])(ReasonCheckbox, [{
    key: "_handleCheck",
    value: function _handleCheck(e, checked) {
      var _this$props = this.props,
          reason = _this$props.reason,
          onCheck = _this$props.onCheck;
      onCheck(reason, checked);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          reason = _this$props2.reason,
          label = _this$props2.label,
          selectedReasons = _this$props2.selectedReasons,
          classes = _this$props2.classes;
      return _react["default"].createElement(_FormControlLabel["default"], {
        classes: {
          root: classes.formControlLabelRoot,
          label: classes.formControlLabel
        },
        control: _react["default"].createElement(_Checkbox["default"], {
          classes: {
            root: classes.checkBox,
            checked: classes.checked
          },
          checked: selectedReasons.includes(reason),
          onChange: this._handleCheck
        }),
        label: label
      });
    }
  }]);
  return ReasonCheckbox;
}(_react["default"].Component);

ReasonCheckbox.propTypes = {
  reason: _propTypes["default"].string.isRequired,
  label: _propTypes["default"].string.isRequired,
  selectedReasons: _propTypes["default"].arrayOf(_propTypes["default"].string),
  onCheck: _propTypes["default"].func.isRequired,
  classes: _propTypes["default"].object.isRequired
};
ReasonCheckbox.defaultProps = {
  selectedReasons: []
};

var _default = (0, _styles.withStyles)(styles)(ReasonCheckbox);

exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9WZXJzZUVkaXRvci9SZWFzb25DaGVja2JveC5qcyJdLCJuYW1lcyI6WyJzdHlsZXMiLCJmb3JtQ29udHJvbExhYmVsUm9vdCIsImhlaWdodCIsImZvcm1Db250cm9sTGFiZWwiLCJqdXN0aWZ5Q29udGVudCIsImZvbnRXZWlnaHQiLCJmb250U2l6ZSIsImNoZWNrQm94IiwiY29sb3IiLCJjaGVja2VkIiwiUmVhc29uQ2hlY2tib3giLCJwcm9wcyIsIl9oYW5kbGVDaGVjayIsImJpbmQiLCJlIiwicmVhc29uIiwib25DaGVjayIsImxhYmVsIiwic2VsZWN0ZWRSZWFzb25zIiwiY2xhc3NlcyIsInJvb3QiLCJpbmNsdWRlcyIsIlJlYWN0IiwiQ29tcG9uZW50IiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwic3RyaW5nIiwiaXNSZXF1aXJlZCIsImFycmF5T2YiLCJmdW5jIiwib2JqZWN0IiwiZGVmYXVsdFByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFFQSxJQUFNQSxNQUFNLEdBQUc7QUFDYkMsRUFBQUEsb0JBQW9CLEVBQUU7QUFBRUMsSUFBQUEsTUFBTSxFQUFFO0FBQVYsR0FEVDtBQUViQyxFQUFBQSxnQkFBZ0IsRUFBRTtBQUNoQkMsSUFBQUEsY0FBYyxFQUFFLFlBREE7QUFFaEJDLElBQUFBLFVBQVUsRUFBRSxHQUZJO0FBR2hCQyxJQUFBQSxRQUFRLEVBQUU7QUFITSxHQUZMO0FBT2JDLEVBQUFBLFFBQVEsRUFBRTtBQUFFLGlCQUFhO0FBQUVDLE1BQUFBLEtBQUssRUFBRTtBQUFUO0FBQWYsR0FQRztBQVFiQyxFQUFBQSxPQUFPLEVBQUM7QUFSSyxDQUFmO0FBV0E7Ozs7OztBQU1BOzs7Ozs7OztJQVFNQyxjOzs7QUFDSiwwQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBO0FBQ2pCLDBIQUFNQSxLQUFOO0FBQ0EsVUFBS0MsWUFBTCxHQUFvQixNQUFLQSxZQUFMLENBQWtCQyxJQUFsQixnREFBcEI7QUFGaUI7QUFHbEI7Ozs7aUNBRVlDLEMsRUFBR0wsTyxFQUFTO0FBQUEsd0JBQ0ssS0FBS0UsS0FEVjtBQUFBLFVBQ2ZJLE1BRGUsZUFDZkEsTUFEZTtBQUFBLFVBQ1BDLE9BRE8sZUFDUEEsT0FETztBQUV2QkEsTUFBQUEsT0FBTyxDQUFDRCxNQUFELEVBQVNOLE9BQVQsQ0FBUDtBQUNEOzs7NkJBR1E7QUFBQSx5QkFHSCxLQUFLRSxLQUhGO0FBQUEsVUFFTEksTUFGSyxnQkFFTEEsTUFGSztBQUFBLFVBRUdFLEtBRkgsZ0JBRUdBLEtBRkg7QUFBQSxVQUVVQyxlQUZWLGdCQUVVQSxlQUZWO0FBQUEsVUFFMkJDLE9BRjNCLGdCQUUyQkEsT0FGM0I7QUFJUCxhQUNFLGdDQUFDLDRCQUFEO0FBQ0UsUUFBQSxPQUFPLEVBQUU7QUFDUEMsVUFBQUEsSUFBSSxFQUFFRCxPQUFPLENBQUNsQixvQkFEUDtBQUVQZ0IsVUFBQUEsS0FBSyxFQUFFRSxPQUFPLENBQUNoQjtBQUZSLFNBRFg7QUFLRSxRQUFBLE9BQU8sRUFDTCxnQ0FBQyxvQkFBRDtBQUNFLFVBQUEsT0FBTyxFQUFFO0FBQ1BpQixZQUFBQSxJQUFJLEVBQUVELE9BQU8sQ0FBQ1osUUFEUDtBQUVQRSxZQUFBQSxPQUFPLEVBQUNVLE9BQU8sQ0FBQ1Y7QUFGVCxXQURYO0FBS0UsVUFBQSxPQUFPLEVBQUVTLGVBQWUsQ0FBQ0csUUFBaEIsQ0FBeUJOLE1BQXpCLENBTFg7QUFNRSxVQUFBLFFBQVEsRUFBRSxLQUFLSDtBQU5qQixVQU5KO0FBZUUsUUFBQSxLQUFLLEVBQUVLO0FBZlQsUUFERjtBQW1CRDs7O0VBbkMwQkssa0JBQU1DLFM7O0FBc0NuQ2IsY0FBYyxDQUFDYyxTQUFmLEdBQTJCO0FBQ3pCVCxFQUFBQSxNQUFNLEVBQUVVLHNCQUFVQyxNQUFWLENBQWlCQyxVQURBO0FBRXpCVixFQUFBQSxLQUFLLEVBQUVRLHNCQUFVQyxNQUFWLENBQWlCQyxVQUZDO0FBR3pCVCxFQUFBQSxlQUFlLEVBQUVPLHNCQUFVRyxPQUFWLENBQWtCSCxzQkFBVUMsTUFBNUIsQ0FIUTtBQUl6QlYsRUFBQUEsT0FBTyxFQUFFUyxzQkFBVUksSUFBVixDQUFlRixVQUpDO0FBS3pCUixFQUFBQSxPQUFPLEVBQUVNLHNCQUFVSyxNQUFWLENBQWlCSDtBQUxELENBQTNCO0FBUUFqQixjQUFjLENBQUNxQixZQUFmLEdBQThCO0FBQUViLEVBQUFBLGVBQWUsRUFBRTtBQUFuQixDQUE5Qjs7ZUFFZSx3QkFBV2xCLE1BQVgsRUFBbUJVLGNBQW5CLEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IHdpdGhTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xuaW1wb3J0IENoZWNrYm94IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NoZWNrYm94JztcbmltcG9ydCBGb3JtQ29udHJvbExhYmVsIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0Zvcm1Db250cm9sTGFiZWwnO1xuXG5jb25zdCBzdHlsZXMgPSB7XG4gIGZvcm1Db250cm9sTGFiZWxSb290OiB7IGhlaWdodDogMzAgfSxcbiAgZm9ybUNvbnRyb2xMYWJlbDoge1xuICAgIGp1c3RpZnlDb250ZW50OiAnZmxleC1zdGFydCcsXG4gICAgZm9udFdlaWdodDogNzAwLFxuICAgIGZvbnRTaXplOiAxNixcbiAgfSxcbiAgY2hlY2tCb3g6IHsgJyYkY2hlY2tlZCc6IHsgY29sb3I6ICd2YXIoLS1hY2NlbnQtY29sb3ItZGFyayknIH0gfSxcbiAgY2hlY2tlZDp7fSxcbn07XG5cbi8qKlxuICogQGNhbGxiYWNrIFJlYXNvbkNoZWNrYm94fm9uQ2hlY2tcbiAqIEBwYXJhbSB7c3RyaW5nfSByZWFzb24gLSB0aGUgcmVhc29uIGJlaW5nIGNoZWNrZWRcbiAqIEBwYXJhbSB7Ym9vbH0gY2hlY2tlZCAtIGluZGljYXRlcyBpZiB0aGUgcmVhc29uIGlzIGNoZWNrZWRcbiAqL1xuXG4vKipcbiAqIFJlbmRlcnMgYSByZWFzb24gY2hlY2tib3hcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSByZWFzb24gLSB0aGUgcmVhc29uIGZvciB0aGUgZWRpdFxuICogQHByb3BlcnR5IHtzdHJpbmd9IGxhYmVsIC0gdGhlIGNoZWNrYm94IGxhYmVsXG4gKiBAcHJvcGVydHkge3N0cmluZ1tdfSBzZWxlY3RlZFJlYXNvbnMgLSBhbiBhcnJheSBvZiBzZWxlY3RlZCByZWFzb25zXG4gKiBAcHJvcGVydHkge1JlYXNvbkNoZWNrYm94fm9uQ2hlY2t9IG9uQ2hlY2sgLSBjYWxsYmFjayB3aGVuIHRoZSBjaGVja2JveCBpcyBjaGFuZ2VkXG4gKi9cblxuY2xhc3MgUmVhc29uQ2hlY2tib3ggZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLl9oYW5kbGVDaGVjayA9IHRoaXMuX2hhbmRsZUNoZWNrLmJpbmQodGhpcyk7XG4gIH1cblxuICBfaGFuZGxlQ2hlY2soZSwgY2hlY2tlZCkge1xuICAgIGNvbnN0IHsgcmVhc29uLCBvbkNoZWNrIH0gPSB0aGlzLnByb3BzO1xuICAgIG9uQ2hlY2socmVhc29uLCBjaGVja2VkKTtcbiAgfVxuXG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIHJlYXNvbiwgbGFiZWwsIHNlbGVjdGVkUmVhc29ucywgY2xhc3NlcyxcbiAgICB9ID0gdGhpcy5wcm9wcztcbiAgICByZXR1cm4gKFxuICAgICAgPEZvcm1Db250cm9sTGFiZWxcbiAgICAgICAgY2xhc3Nlcz17e1xuICAgICAgICAgIHJvb3Q6IGNsYXNzZXMuZm9ybUNvbnRyb2xMYWJlbFJvb3QsXG4gICAgICAgICAgbGFiZWw6IGNsYXNzZXMuZm9ybUNvbnRyb2xMYWJlbCxcbiAgICAgICAgfX1cbiAgICAgICAgY29udHJvbD17XG4gICAgICAgICAgPENoZWNrYm94XG4gICAgICAgICAgICBjbGFzc2VzPXt7XG4gICAgICAgICAgICAgIHJvb3Q6IGNsYXNzZXMuY2hlY2tCb3gsXG4gICAgICAgICAgICAgIGNoZWNrZWQ6Y2xhc3Nlcy5jaGVja2VkLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIGNoZWNrZWQ9e3NlbGVjdGVkUmVhc29ucy5pbmNsdWRlcyhyZWFzb24pfVxuICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuX2hhbmRsZUNoZWNrfVxuICAgICAgICAgIC8+XG4gICAgICAgIH1cbiAgICAgICAgbGFiZWw9e2xhYmVsfVxuICAgICAgLz5cbiAgICApO1xuICB9XG59XG5cblJlYXNvbkNoZWNrYm94LnByb3BUeXBlcyA9IHtcbiAgcmVhc29uOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gIGxhYmVsOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gIHNlbGVjdGVkUmVhc29uczogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLnN0cmluZyksXG4gIG9uQ2hlY2s6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIGNsYXNzZXM6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbn07XG5cblJlYXNvbkNoZWNrYm94LmRlZmF1bHRQcm9wcyA9IHsgc2VsZWN0ZWRSZWFzb25zOiBbXSB9O1xuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGVzKHN0eWxlcykoUmVhc29uQ2hlY2tib3gpO1xuIl19