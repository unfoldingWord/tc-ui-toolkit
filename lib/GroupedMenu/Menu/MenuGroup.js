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

var _styles = require("@material-ui/core/styles");

var _ListItem = _interopRequireDefault(require("@material-ui/core/ListItem"));

var _ListItemIcon = _interopRequireDefault(require("@material-ui/core/ListItemIcon"));

var _ListItemText = _interopRequireDefault(require("@material-ui/core/ListItemText"));

var _ExpandMore = _interopRequireDefault(require("@material-ui/icons/ExpandMore"));

var _ChevronRight = _interopRequireDefault(require("@material-ui/icons/ChevronRight"));

var _ProgressIcon = _interopRequireDefault(require("./ProgressIcon"));

/**
 * Utility to apply styles based on props
 */
// const styledBy = (property, mapping) => props => mapping[props[property]];
var styles = {
  textRoot: {
    paddingRight: 0
  },
  text: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: 'normal'
  },
  selectedText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: 700
  },
  root: {
    // paddingRight: 0,
    'borderBottom': 'solid #ffffff4d 1px',
    'cursor': 'pointer',
    '&$selected': {
      'backgroundColor': '#2196F3',
      '&:hover': {
        backgroundColor: '#2196F3'
      }
    }
  },
  selected: {}
};
/**
 * Renders a group within the menu
 * @param {string} label - the group text
 * @param {function} onClick - a callback to receive group click events
 * @param {boolean} [selected=false] - indicates if the group is selected
 * @param {boolean} [open=false] - indicates if the group is open/expanded
 * @param {number} [progress=0] - a value between 0 and 100 inclusive
 */

var MenuGroup = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2["default"])(MenuGroup, _React$Component);

  function MenuGroup() {
    (0, _classCallCheck2["default"])(this, MenuGroup);
    return (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(MenuGroup).apply(this, arguments));
  }

  (0, _createClass2["default"])(MenuGroup, [{
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(nextProps) {
      var _this$props = this.props,
          selected = _this$props.selected,
          open = _this$props.open,
          label = _this$props.label,
          progress = _this$props.progress;
      return selected !== nextProps.selected || open !== nextProps.open || label !== nextProps.label || progress !== nextProps.progress;
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          classes = _this$props2.classes,
          selected = _this$props2.selected,
          open = _this$props2.open,
          onClick = _this$props2.onClick,
          label = _this$props2.label,
          progress = _this$props2.progress;
      return _react["default"].createElement(_ListItem["default"], {
        disableGutters: false,
        selected: selected,
        classes: {
          root: classes.root,
          selected: classes.selected
        },
        onClick: onClick
      }, _react["default"].createElement(_ListItemIcon["default"], null, _react["default"].createElement(_ProgressIcon["default"], {
        progress: progress
      })), _react["default"].createElement(_ListItemText["default"], {
        inset: false,
        classes: {
          root: classes.textRoot,
          primary: selected ? classes.selectedText : classes.text
        },
        primary: label
      }), open ? _react["default"].createElement(_ExpandMore["default"], null) : _react["default"].createElement(_ChevronRight["default"], null));
    }
  }]);
  return MenuGroup;
}(_react["default"].Component);

MenuGroup.propTypes = {
  classes: _propTypes["default"].object.isRequired,
  label: _propTypes["default"].string.isRequired,
  onClick: _propTypes["default"].func.isRequired,
  selected: _propTypes["default"].bool,
  open: _propTypes["default"].bool,
  progress: _propTypes["default"].number
};
MenuGroup.defaultProps = {
  selected: false,
  open: false,
  progress: 0
};

var _default = (0, _styles.withStyles)(styles)(MenuGroup);

exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9Hcm91cGVkTWVudS9NZW51L01lbnVHcm91cC5qcyJdLCJuYW1lcyI6WyJzdHlsZXMiLCJ0ZXh0Um9vdCIsInBhZGRpbmdSaWdodCIsInRleHQiLCJjb2xvciIsImZvbnRTaXplIiwiZm9udFdlaWdodCIsInNlbGVjdGVkVGV4dCIsInJvb3QiLCJiYWNrZ3JvdW5kQ29sb3IiLCJzZWxlY3RlZCIsIk1lbnVHcm91cCIsIm5leHRQcm9wcyIsInByb3BzIiwib3BlbiIsImxhYmVsIiwicHJvZ3Jlc3MiLCJjbGFzc2VzIiwib25DbGljayIsInByaW1hcnkiLCJSZWFjdCIsIkNvbXBvbmVudCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsIm9iamVjdCIsImlzUmVxdWlyZWQiLCJzdHJpbmciLCJmdW5jIiwiYm9vbCIsIm51bWJlciIsImRlZmF1bHRQcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUVBOzs7QUFHQTtBQUVBLElBQU1BLE1BQU0sR0FBRztBQUNiQyxFQUFBQSxRQUFRLEVBQUU7QUFBRUMsSUFBQUEsWUFBWSxFQUFFO0FBQWhCLEdBREc7QUFFYkMsRUFBQUEsSUFBSSxFQUFFO0FBQ0pDLElBQUFBLEtBQUssRUFBRSxTQURIO0FBRUpDLElBQUFBLFFBQVEsRUFBRSxFQUZOO0FBR0pDLElBQUFBLFVBQVUsRUFBRTtBQUhSLEdBRk87QUFPYkMsRUFBQUEsWUFBWSxFQUFFO0FBQ1pILElBQUFBLEtBQUssRUFBRSxTQURLO0FBRVpDLElBQUFBLFFBQVEsRUFBRSxFQUZFO0FBR1pDLElBQUFBLFVBQVUsRUFBRTtBQUhBLEdBUEQ7QUFZYkUsRUFBQUEsSUFBSSxFQUFFO0FBQ0o7QUFDQSxvQkFBZ0IscUJBRlo7QUFHSixjQUFVLFNBSE47QUFJSixrQkFBYztBQUNaLHlCQUFtQixTQURQO0FBRVosaUJBQVc7QUFBRUMsUUFBQUEsZUFBZSxFQUFFO0FBQW5CO0FBRkM7QUFKVixHQVpPO0FBcUJiQyxFQUFBQSxRQUFRLEVBQUU7QUFyQkcsQ0FBZjtBQXdCQTs7Ozs7Ozs7O0lBUU1DLFM7Ozs7Ozs7Ozs7MENBQ2tCQyxTLEVBQVc7QUFBQSx3QkFHM0IsS0FBS0MsS0FIc0I7QUFBQSxVQUU3QkgsUUFGNkIsZUFFN0JBLFFBRjZCO0FBQUEsVUFFbkJJLElBRm1CLGVBRW5CQSxJQUZtQjtBQUFBLFVBRWJDLEtBRmEsZUFFYkEsS0FGYTtBQUFBLFVBRU5DLFFBRk0sZUFFTkEsUUFGTTtBQUkvQixhQUFPTixRQUFRLEtBQUtFLFNBQVMsQ0FBQ0YsUUFBdkIsSUFBbUNJLElBQUksS0FBS0YsU0FBUyxDQUFDRSxJQUF0RCxJQUNMQyxLQUFLLEtBQUtILFNBQVMsQ0FBQ0csS0FEZixJQUN3QkMsUUFBUSxLQUFLSixTQUFTLENBQUNJLFFBRHREO0FBRUQ7Ozs2QkFFUTtBQUFBLHlCQUdILEtBQUtILEtBSEY7QUFBQSxVQUVMSSxPQUZLLGdCQUVMQSxPQUZLO0FBQUEsVUFFSVAsUUFGSixnQkFFSUEsUUFGSjtBQUFBLFVBRWNJLElBRmQsZ0JBRWNBLElBRmQ7QUFBQSxVQUVvQkksT0FGcEIsZ0JBRW9CQSxPQUZwQjtBQUFBLFVBRTZCSCxLQUY3QixnQkFFNkJBLEtBRjdCO0FBQUEsVUFFb0NDLFFBRnBDLGdCQUVvQ0EsUUFGcEM7QUFLUCxhQUNFLGdDQUFDLG9CQUFEO0FBQ0UsUUFBQSxjQUFjLEVBQUUsS0FEbEI7QUFFRSxRQUFBLFFBQVEsRUFBRU4sUUFGWjtBQUdFLFFBQUEsT0FBTyxFQUFFO0FBQ1BGLFVBQUFBLElBQUksRUFBRVMsT0FBTyxDQUFDVCxJQURQO0FBRVBFLFVBQUFBLFFBQVEsRUFBRU8sT0FBTyxDQUFDUDtBQUZYLFNBSFg7QUFPRSxRQUFBLE9BQU8sRUFBRVE7QUFQWCxTQVNFLGdDQUFDLHdCQUFELFFBQ0UsZ0NBQUMsd0JBQUQ7QUFBYyxRQUFBLFFBQVEsRUFBRUY7QUFBeEIsUUFERixDQVRGLEVBWUUsZ0NBQUMsd0JBQUQ7QUFDRSxRQUFBLEtBQUssRUFBRSxLQURUO0FBRUUsUUFBQSxPQUFPLEVBQUU7QUFDUFIsVUFBQUEsSUFBSSxFQUFFUyxPQUFPLENBQUNoQixRQURQO0FBRVBrQixVQUFBQSxPQUFPLEVBQUVULFFBQVEsR0FBR08sT0FBTyxDQUFDVixZQUFYLEdBQTBCVSxPQUFPLENBQUNkO0FBRjVDLFNBRlg7QUFNRSxRQUFBLE9BQU8sRUFBRVk7QUFOWCxRQVpGLEVBb0JHRCxJQUFJLEdBQUcsZ0NBQUMsc0JBQUQsT0FBSCxHQUFtQixnQ0FBQyx3QkFBRCxPQXBCMUIsQ0FERjtBQXdCRDs7O0VBdENxQk0sa0JBQU1DLFM7O0FBeUM5QlYsU0FBUyxDQUFDVyxTQUFWLEdBQXNCO0FBQ3BCTCxFQUFBQSxPQUFPLEVBQUVNLHNCQUFVQyxNQUFWLENBQWlCQyxVQUROO0FBRXBCVixFQUFBQSxLQUFLLEVBQUVRLHNCQUFVRyxNQUFWLENBQWlCRCxVQUZKO0FBR3BCUCxFQUFBQSxPQUFPLEVBQUVLLHNCQUFVSSxJQUFWLENBQWVGLFVBSEo7QUFJcEJmLEVBQUFBLFFBQVEsRUFBRWEsc0JBQVVLLElBSkE7QUFLcEJkLEVBQUFBLElBQUksRUFBRVMsc0JBQVVLLElBTEk7QUFNcEJaLEVBQUFBLFFBQVEsRUFBRU8sc0JBQVVNO0FBTkEsQ0FBdEI7QUFTQWxCLFNBQVMsQ0FBQ21CLFlBQVYsR0FBeUI7QUFDdkJwQixFQUFBQSxRQUFRLEVBQUUsS0FEYTtBQUV2QkksRUFBQUEsSUFBSSxFQUFFLEtBRmlCO0FBR3ZCRSxFQUFBQSxRQUFRLEVBQUU7QUFIYSxDQUF6Qjs7ZUFNZSx3QkFBV2hCLE1BQVgsRUFBbUJXLFNBQW5CLEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IHdpdGhTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xuaW1wb3J0IExpc3RJdGVtIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0xpc3RJdGVtJztcbmltcG9ydCBMaXN0SXRlbUljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTGlzdEl0ZW1JY29uJztcbmltcG9ydCBMaXN0SXRlbVRleHQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTGlzdEl0ZW1UZXh0JztcbmltcG9ydCBFeHBhbmRNb3JlIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9FeHBhbmRNb3JlJztcbmltcG9ydCBDaGV2cm9uUmlnaHQgZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0NoZXZyb25SaWdodCc7XG5pbXBvcnQgUHJvZ3Jlc3NJY29uIGZyb20gJy4vUHJvZ3Jlc3NJY29uJztcblxuLyoqXG4gKiBVdGlsaXR5IHRvIGFwcGx5IHN0eWxlcyBiYXNlZCBvbiBwcm9wc1xuICovXG4vLyBjb25zdCBzdHlsZWRCeSA9IChwcm9wZXJ0eSwgbWFwcGluZykgPT4gcHJvcHMgPT4gbWFwcGluZ1twcm9wc1twcm9wZXJ0eV1dO1xuXG5jb25zdCBzdHlsZXMgPSB7XG4gIHRleHRSb290OiB7IHBhZGRpbmdSaWdodDogMCB9LFxuICB0ZXh0OiB7XG4gICAgY29sb3I6ICcjRkZGRkZGJyxcbiAgICBmb250U2l6ZTogMTIsXG4gICAgZm9udFdlaWdodDogJ25vcm1hbCcsXG4gIH0sXG4gIHNlbGVjdGVkVGV4dDoge1xuICAgIGNvbG9yOiAnI0ZGRkZGRicsXG4gICAgZm9udFNpemU6IDEyLFxuICAgIGZvbnRXZWlnaHQ6IDcwMCxcbiAgfSxcbiAgcm9vdDoge1xuICAgIC8vIHBhZGRpbmdSaWdodDogMCxcbiAgICAnYm9yZGVyQm90dG9tJzogJ3NvbGlkICNmZmZmZmY0ZCAxcHgnLFxuICAgICdjdXJzb3InOiAncG9pbnRlcicsXG4gICAgJyYkc2VsZWN0ZWQnOiB7XG4gICAgICAnYmFja2dyb3VuZENvbG9yJzogJyMyMTk2RjMnLFxuICAgICAgJyY6aG92ZXInOiB7IGJhY2tncm91bmRDb2xvcjogJyMyMTk2RjMnIH0sXG4gICAgfSxcbiAgfSxcbiAgc2VsZWN0ZWQ6IHt9LFxufTtcblxuLyoqXG4gKiBSZW5kZXJzIGEgZ3JvdXAgd2l0aGluIHRoZSBtZW51XG4gKiBAcGFyYW0ge3N0cmluZ30gbGFiZWwgLSB0aGUgZ3JvdXAgdGV4dFxuICogQHBhcmFtIHtmdW5jdGlvbn0gb25DbGljayAtIGEgY2FsbGJhY2sgdG8gcmVjZWl2ZSBncm91cCBjbGljayBldmVudHNcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW3NlbGVjdGVkPWZhbHNlXSAtIGluZGljYXRlcyBpZiB0aGUgZ3JvdXAgaXMgc2VsZWN0ZWRcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW29wZW49ZmFsc2VdIC0gaW5kaWNhdGVzIGlmIHRoZSBncm91cCBpcyBvcGVuL2V4cGFuZGVkXG4gKiBAcGFyYW0ge251bWJlcn0gW3Byb2dyZXNzPTBdIC0gYSB2YWx1ZSBiZXR3ZWVuIDAgYW5kIDEwMCBpbmNsdXNpdmVcbiAqL1xuY2xhc3MgTWVudUdyb3VwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgc2hvdWxkQ29tcG9uZW50VXBkYXRlKG5leHRQcm9wcykge1xuICAgIGNvbnN0IHtcbiAgICAgIHNlbGVjdGVkLCBvcGVuLCBsYWJlbCwgcHJvZ3Jlc3MsXG4gICAgfSA9IHRoaXMucHJvcHM7XG4gICAgcmV0dXJuIHNlbGVjdGVkICE9PSBuZXh0UHJvcHMuc2VsZWN0ZWQgfHwgb3BlbiAhPT0gbmV4dFByb3BzLm9wZW4gfHxcbiAgICAgIGxhYmVsICE9PSBuZXh0UHJvcHMubGFiZWwgfHwgcHJvZ3Jlc3MgIT09IG5leHRQcm9wcy5wcm9ncmVzcztcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICBjbGFzc2VzLCBzZWxlY3RlZCwgb3Blbiwgb25DbGljaywgbGFiZWwsIHByb2dyZXNzLFxuICAgIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxMaXN0SXRlbVxuICAgICAgICBkaXNhYmxlR3V0dGVycz17ZmFsc2V9XG4gICAgICAgIHNlbGVjdGVkPXtzZWxlY3RlZH1cbiAgICAgICAgY2xhc3Nlcz17e1xuICAgICAgICAgIHJvb3Q6IGNsYXNzZXMucm9vdCxcbiAgICAgICAgICBzZWxlY3RlZDogY2xhc3Nlcy5zZWxlY3RlZCxcbiAgICAgICAgfX1cbiAgICAgICAgb25DbGljaz17b25DbGlja31cbiAgICAgID5cbiAgICAgICAgPExpc3RJdGVtSWNvbj5cbiAgICAgICAgICA8UHJvZ3Jlc3NJY29uIHByb2dyZXNzPXtwcm9ncmVzc30vPlxuICAgICAgICA8L0xpc3RJdGVtSWNvbj5cbiAgICAgICAgPExpc3RJdGVtVGV4dFxuICAgICAgICAgIGluc2V0PXtmYWxzZX1cbiAgICAgICAgICBjbGFzc2VzPXt7XG4gICAgICAgICAgICByb290OiBjbGFzc2VzLnRleHRSb290LFxuICAgICAgICAgICAgcHJpbWFyeTogc2VsZWN0ZWQgPyBjbGFzc2VzLnNlbGVjdGVkVGV4dCA6IGNsYXNzZXMudGV4dCxcbiAgICAgICAgICB9fVxuICAgICAgICAgIHByaW1hcnk9e2xhYmVsfVxuICAgICAgICAvPlxuICAgICAgICB7b3BlbiA/IDxFeHBhbmRNb3JlLz4gOiA8Q2hldnJvblJpZ2h0Lz59XG4gICAgICA8L0xpc3RJdGVtPlxuICAgICk7XG4gIH1cbn1cblxuTWVudUdyb3VwLnByb3BUeXBlcyA9IHtcbiAgY2xhc3NlczogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuICBsYWJlbDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICBvbkNsaWNrOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICBzZWxlY3RlZDogUHJvcFR5cGVzLmJvb2wsXG4gIG9wZW46IFByb3BUeXBlcy5ib29sLFxuICBwcm9ncmVzczogUHJvcFR5cGVzLm51bWJlcixcbn07XG5cbk1lbnVHcm91cC5kZWZhdWx0UHJvcHMgPSB7XG4gIHNlbGVjdGVkOiBmYWxzZSxcbiAgb3BlbjogZmFsc2UsXG4gIHByb2dyZXNzOiAwLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlcyhzdHlsZXMpKE1lbnVHcm91cCk7XG4iXX0=