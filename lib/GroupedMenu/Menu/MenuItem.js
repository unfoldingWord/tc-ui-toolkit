"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf3 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styles = require("@material-ui/core/styles");

var _ListItem = _interopRequireDefault(require("@material-ui/core/ListItem"));

var _RootRef = _interopRequireDefault(require("@material-ui/core/RootRef"));

var _ListItemIcon = _interopRequireDefault(require("@material-ui/core/ListItemIcon"));

var _ListItemText = _interopRequireDefault(require("@material-ui/core/ListItemText"));

var _Tooltip = _interopRequireDefault(require("@material-ui/core/Tooltip"));

var _Badge = _interopRequireDefault(require("@material-ui/core/Badge"));

var _memoizeOne = _interopRequireDefault(require("memoize-one"));

var _lodash = _interopRequireDefault(require("lodash"));

var _fontUtils = require("../../common/fontUtils");

/**
 * Utility to generate styles for a tooltip arrow
 */
function arrowGenerator(color) {
  return {
    '&[x-placement*="bottom"] $arrow': {
      'top': 0,
      'left': 0,
      'marginTop': '-0.9em',
      'width': '3em',
      'height': '1em',
      '&::before': {
        borderWidth: '0 1em 1em 1em',
        borderColor: "transparent transparent ".concat(color, " transparent")
      }
    },
    '&[x-placement*="top"] $arrow': {
      'bottom': 0,
      'left': 0,
      'marginBottom': '-0.9em',
      'width': '3em',
      'height': '1em',
      '&::before': {
        borderWidth: '1em 1em 0 1em',
        borderColor: "".concat(color, " transparent transparent transparent")
      }
    },
    '&[x-placement*="right"] $arrow': {
      'left': 0,
      'marginLeft': '-0.9em',
      'height': '3em',
      'width': '1em',
      '&::before': {
        borderWidth: '1em 1em 1em 0',
        borderColor: "transparent ".concat(color, " transparent transparent")
      }
    },
    '&[x-placement*="left"] $arrow': {
      'right': 0,
      'marginRight': '-0.9em',
      'height': '3em',
      'width': '1em',
      '&::before': {
        borderWidth: '1em 0 1em 1em',
        borderColor: "transparent transparent transparent ".concat(color)
      }
    }
  };
}
/**
 * Utility to apply styles based on props
 */
// const styledBy = (property, mapping) => props => mapping[props[property]];


var styles = {
  root: {
    'borderBottom': 'solid #333333 1px',
    'backgroundColor': '#747474',
    '&$selected': {
      'backgroundColor': '#2196F3',
      '&:hover': {
        backgroundColor: '#2196F3'
      }
    }
  },
  selected: {},
  textRoot: {
    paddingRight: 0
  },
  text: {
    color: '#FFFFFF',
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    fontSize: 12
  },
  badge: {
    backgroundColor: '#ffffff',
    border: 'solid 2px #747474',
    borderColor: '#747474',
    color: '#747474',
    fontWeight: 'bold',
    fontSize: '75%',
    width: 18,
    height: 18,
    marginTop: 2,
    marginRight: 2
  },
  selectedBadge: {
    backgroundColor: '#ffffff',
    border: 'solid 2px #747474',
    borderColor: '#2196F3',
    color: '#2196F3',
    fontWeight: 'bold',
    fontSize: '75%',
    width: 18,
    height: 18,
    marginTop: 2,
    marginRight: 2
  },
  lightTooltip: {
    backgroundColor: '#fff',
    color: '#000',
    boxShadow: '1px 1px 5px 0px rgba(0,0,0,0.75)',
    fontSize: 14,
    padding: 15
  },
  lightTooltipSmall: {
    backgroundColor: '#fff',
    color: '#333333',
    boxShadow: '1px 1px 5px 0px rgba(0,0,0,0.75)'
  },
  arrowPopper: arrowGenerator('#fff'),
  arrow: {
    'position': 'absolute',
    'fontSize': 7,
    'width': '3em',
    'height': '3em',
    '&::before': {
      content: '""',
      margin: 'auto',
      display: 'block',
      width: 0,
      height: 0,
      borderStyle: 'solid'
    }
  },
  bootstrapPopper: arrowGenerator('#000'),
  bootstrapTooltip: {
    backgroundColor: '#000'
  },
  bootstrapPlacementLeft: {
    margin: '0 8px'
  },
  bootstrapPlacementRight: {
    margin: '0 8px'
  },
  bootstrapPlacementTop: {
    margin: '8px 40px'
  },
  bootstrapPlacementBottom: {
    margin: '8px 40px'
  }
};
/**
 * Renders a single item within the menu
 * @param {string} title - the menu item text
 * @param {function} [onClick] - a callback that receives click events from the menu item
 * @param {boolean} [selected] - indicates if this item is selected
 * @param {object} [status] - a dictionary of boolean values indicating the item's status
 * @param {object[]} [statusIcons] - an array if icons that may be mapped to the item's current status
 */

var MenuItem = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2["default"])(MenuItem, _React$Component);

  function MenuItem() {
    var _getPrototypeOf2;

    var _this;

    (0, _classCallCheck2["default"])(this, MenuItem);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = (0, _possibleConstructorReturn2["default"])(this, (_getPrototypeOf2 = (0, _getPrototypeOf3["default"])(MenuItem)).call.apply(_getPrototypeOf2, [this].concat(args)));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "state", {
      arrowRef: null,
      overflow: false
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "textRef", _react["default"].createRef());
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "listItemTextRef", _react["default"].createRef());
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleArrowRef", function (node) {
      _this.setState({
        arrowRef: node
      });
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "checkOverflow", function () {
      var overflow = _this.listItemTextRef.current.offsetWidth < _this.textRef.current.offsetWidth;

      if (overflow !== _this.state.overflow) {
        _this.setState({
          overflow: overflow
        });
      }
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleClick", function (e) {
      var onClick = _this.props.onClick;

      if (typeof onClick === 'function') {
        onClick(e);
      }
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "generateStatusIcon", (0, _memoizeOne["default"])(function (status, statusIcons, selected) {
      var classes = _this.props.classes;

      if (!statusIcons || !status) {
        return null;
      }

      var icons = [];

      for (var i = 0, len = statusIcons.length; i < len; i++) {
        var icon = statusIcons[i];
        var s = status[icon.key];

        if (Boolean(s) === icon.value) {
          icons.push(icon.icon);
        }
      }

      if (icons.length === 1) {
        return _react["default"].createElement(_ListItemIcon["default"], null, icons[0]);
      } else if (icons.length > 1) {
        // display badged icon with tooltip
        return _react["default"].createElement(_ListItemIcon["default"], null, _react["default"].createElement(_Tooltip["default"], {
          placement: "right",
          classes: {
            tooltip: _this.props.classes.lightTooltipSmall
          },
          title: _react["default"].createElement(_react["default"].Fragment, null, icons.map(function (i, key) {
            return _react["default"].cloneElement(i, {
              key: key,
              style: {
                color: '#333333'
              }
            });
          }))
        }, _react["default"].createElement(_Badge["default"], {
          badgeContent: icons.length,
          classes: {
            badge: selected ? classes.selectedBadge : classes.badge
          }
        }, icons[0])));
      } else {
        return null;
      }
    }));
    return _this;
  }

  (0, _createClass2["default"])(MenuItem, [{
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(nextProps, nextState) {
      // TRICKY: we should technically check for an update to statusIcons
      // however that is not a known use case and it's faster to ignore it.
      var _this$props = this.props,
          title = _this$props.title,
          key = _this$props.key,
          selected = _this$props.selected,
          status = _this$props.status;
      var overflow = this.state.overflow;
      return overflow !== nextState.overflow || title !== nextProps.title || key !== nextProps.key || selected !== nextProps.selected || !_lodash["default"].isEqual(status, nextProps.status);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      this.checkOverflow();
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.checkOverflow();
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.title !== this.props.title) {
        this.setState({
          overflow: false
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          key = _this$props2.key,
          title = _this$props2.title,
          status = _this$props2.status,
          tooltip = _this$props2.tooltip,
          classes = _this$props2.classes,
          selected = _this$props2.selected,
          statusIcons = _this$props2.statusIcons,
          targetLanguageFont = _this$props2.targetLanguageFont;
      var overflow = this.state.overflow;
      var tooltipText = tooltip ? tooltip : title;
      var icon = this.generateStatusIcon(status, statusIcons, selected);
      var fontClass = (0, _fontUtils.getFontClassName)(targetLanguageFont);
      return _react["default"].createElement(_ListItem["default"], {
        key: key,
        disableGutters: false,
        selected: selected,
        onClick: this.handleClick,
        classes: {
          root: classes.root,
          selected: classes.selected
        }
      }, icon, _react["default"].createElement(_RootRef["default"], {
        rootRef: this.listItemTextRef
      }, _react["default"].createElement(_Tooltip["default"], {
        enterDelay: 300,
        title: _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement("span", {
          className: fontClass
        }, tooltipText), _react["default"].createElement("span", {
          className: classes.arrow,
          ref: this.handleArrowRef
        })),
        disableFocusListener: !overflow,
        disableHoverListener: !overflow,
        disableTouchListener: !overflow,
        classes: {
          tooltip: classes.lightTooltip,
          popper: classes.arrowPopper,
          tooltipPlacementLeft: classes.bootstrapPlacementLeft,
          tooltipPlacementRight: classes.bootstrapPlacementRight,
          tooltipPlacementTop: classes.bootstrapPlacementTop,
          tooltipPlacementBottom: classes.bootstrapPlacementBottom
        },
        PopperProps: {
          popperOptions: {
            modifiers: {
              arrow: {
                enabled: Boolean(this.state.arrowRef),
                element: this.state.arrowRef
              }
            }
          }
        }
      }, _react["default"].createElement(_ListItemText["default"], {
        inset: !icon,
        classes: {
          root: classes.textRoot,
          primary: classes.text
        },
        primary: _react["default"].createElement("span", {
          className: fontClass,
          ref: this.textRef
        }, title)
      }))));
    }
  }]);
  return MenuItem;
}(_react["default"].Component);

MenuItem.propTypes = {
  classes: _propTypes["default"].object.isRequired,
  title: _propTypes["default"].string.isRequired,
  tooltip: _propTypes["default"].string,
  key: _propTypes["default"].any,
  onClick: _propTypes["default"].func,
  selected: _propTypes["default"].bool,
  statusIcons: _propTypes["default"].arrayOf(_propTypes["default"].object),
  status: _propTypes["default"].object,
  targetLanguageFont: _propTypes["default"].string
};

var _default = (0, _styles.withStyles)(styles)(MenuItem);

exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9Hcm91cGVkTWVudS9NZW51L01lbnVJdGVtLmpzIl0sIm5hbWVzIjpbImFycm93R2VuZXJhdG9yIiwiY29sb3IiLCJib3JkZXJXaWR0aCIsImJvcmRlckNvbG9yIiwic3R5bGVzIiwicm9vdCIsImJhY2tncm91bmRDb2xvciIsInNlbGVjdGVkIiwidGV4dFJvb3QiLCJwYWRkaW5nUmlnaHQiLCJ0ZXh0IiwidGV4dE92ZXJmbG93Iiwib3ZlcmZsb3ciLCJ3aGl0ZVNwYWNlIiwiZm9udFNpemUiLCJiYWRnZSIsImJvcmRlciIsImZvbnRXZWlnaHQiLCJ3aWR0aCIsImhlaWdodCIsIm1hcmdpblRvcCIsIm1hcmdpblJpZ2h0Iiwic2VsZWN0ZWRCYWRnZSIsImxpZ2h0VG9vbHRpcCIsImJveFNoYWRvdyIsInBhZGRpbmciLCJsaWdodFRvb2x0aXBTbWFsbCIsImFycm93UG9wcGVyIiwiYXJyb3ciLCJjb250ZW50IiwibWFyZ2luIiwiZGlzcGxheSIsImJvcmRlclN0eWxlIiwiYm9vdHN0cmFwUG9wcGVyIiwiYm9vdHN0cmFwVG9vbHRpcCIsImJvb3RzdHJhcFBsYWNlbWVudExlZnQiLCJib290c3RyYXBQbGFjZW1lbnRSaWdodCIsImJvb3RzdHJhcFBsYWNlbWVudFRvcCIsImJvb3RzdHJhcFBsYWNlbWVudEJvdHRvbSIsIk1lbnVJdGVtIiwiYXJyb3dSZWYiLCJSZWFjdCIsImNyZWF0ZVJlZiIsIm5vZGUiLCJzZXRTdGF0ZSIsImxpc3RJdGVtVGV4dFJlZiIsImN1cnJlbnQiLCJvZmZzZXRXaWR0aCIsInRleHRSZWYiLCJzdGF0ZSIsImUiLCJvbkNsaWNrIiwicHJvcHMiLCJzdGF0dXMiLCJzdGF0dXNJY29ucyIsImNsYXNzZXMiLCJpY29ucyIsImkiLCJsZW4iLCJsZW5ndGgiLCJpY29uIiwicyIsImtleSIsIkJvb2xlYW4iLCJ2YWx1ZSIsInB1c2giLCJ0b29sdGlwIiwibWFwIiwiY2xvbmVFbGVtZW50Iiwic3R5bGUiLCJuZXh0UHJvcHMiLCJuZXh0U3RhdGUiLCJ0aXRsZSIsIl8iLCJpc0VxdWFsIiwiY2hlY2tPdmVyZmxvdyIsInRhcmdldExhbmd1YWdlRm9udCIsInRvb2x0aXBUZXh0IiwiZ2VuZXJhdGVTdGF0dXNJY29uIiwiZm9udENsYXNzIiwiaGFuZGxlQ2xpY2siLCJoYW5kbGVBcnJvd1JlZiIsInBvcHBlciIsInRvb2x0aXBQbGFjZW1lbnRMZWZ0IiwidG9vbHRpcFBsYWNlbWVudFJpZ2h0IiwidG9vbHRpcFBsYWNlbWVudFRvcCIsInRvb2x0aXBQbGFjZW1lbnRCb3R0b20iLCJwb3BwZXJPcHRpb25zIiwibW9kaWZpZXJzIiwiZW5hYmxlZCIsImVsZW1lbnQiLCJwcmltYXJ5IiwiQ29tcG9uZW50IiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwib2JqZWN0IiwiaXNSZXF1aXJlZCIsInN0cmluZyIsImFueSIsImZ1bmMiLCJib29sIiwiYXJyYXlPZiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFFQTs7O0FBR0EsU0FBU0EsY0FBVCxDQUF3QkMsS0FBeEIsRUFBK0I7QUFDN0IsU0FBTztBQUNMLHVDQUFtQztBQUNqQyxhQUFPLENBRDBCO0FBRWpDLGNBQVEsQ0FGeUI7QUFHakMsbUJBQWEsUUFIb0I7QUFJakMsZUFBUyxLQUp3QjtBQUtqQyxnQkFBVSxLQUx1QjtBQU1qQyxtQkFBYTtBQUNYQyxRQUFBQSxXQUFXLEVBQUUsZUFERjtBQUVYQyxRQUFBQSxXQUFXLG9DQUE2QkYsS0FBN0I7QUFGQTtBQU5vQixLQUQ5QjtBQVlMLG9DQUFnQztBQUM5QixnQkFBVSxDQURvQjtBQUU5QixjQUFRLENBRnNCO0FBRzlCLHNCQUFnQixRQUhjO0FBSTlCLGVBQVMsS0FKcUI7QUFLOUIsZ0JBQVUsS0FMb0I7QUFNOUIsbUJBQWE7QUFDWEMsUUFBQUEsV0FBVyxFQUFFLGVBREY7QUFF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QVEsRUFBRXVGLHNCQUFVTSxJQU5EO0FBT25COUMsRUFBQUEsV0FBVyxFQUFFd0Msc0JBQVVPLE9BQVYsQ0FBa0JQLHNCQUFVQyxNQUE1QixDQVBNO0FBUW5CMUMsRUFBQUEsTUFBTSxFQUFFeUMsc0JBQVVDLE1BUkM7QUFTbkJuQixFQUFBQSxrQkFBa0IsRUFBRWtCLHNCQUFVRztBQVRYLENBQXJCOztlQVllLHdCQUFXN0YsTUFBWCxFQUFtQm1DLFFBQW5CLEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IHdpdGhTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xuaW1wb3J0IExpc3RJdGVtIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0xpc3RJdGVtJztcbmltcG9ydCBSb290UmVmIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1Jvb3RSZWYnO1xuaW1wb3J0IExpc3RJdGVtSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9MaXN0SXRlbUljb24nO1xuaW1wb3J0IExpc3RJdGVtVGV4dCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9MaXN0SXRlbVRleHQnO1xuaW1wb3J0IFRvb2x0aXAgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVG9vbHRpcCc7XG5pbXBvcnQgQmFkZ2UgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQmFkZ2UnO1xuaW1wb3J0IG1lbW9pemUgZnJvbSAnbWVtb2l6ZS1vbmUnO1xuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcbmltcG9ydCB7IGdldEZvbnRDbGFzc05hbWUgfSBmcm9tICcuLi8uLi9jb21tb24vZm9udFV0aWxzJztcblxuLyoqXG4gKiBVdGlsaXR5IHRvIGdlbmVyYXRlIHN0eWxlcyBmb3IgYSB0b29sdGlwIGFycm93XG4gKi9cbmZ1bmN0aW9uIGFycm93R2VuZXJhdG9yKGNvbG9yKSB7XG4gIHJldHVybiB7XG4gICAgJyZbeC1wbGFjZW1lbnQqPVwiYm90dG9tXCJdICRhcnJvdyc6IHtcbiAgICAgICd0b3AnOiAwLFxuICAgICAgJ2xlZnQnOiAwLFxuICAgICAgJ21hcmdpblRvcCc6ICctMC45ZW0nLFxuICAgICAgJ3dpZHRoJzogJzNlbScsXG4gICAgICAnaGVpZ2h0JzogJzFlbScsXG4gICAgICAnJjo6YmVmb3JlJzoge1xuICAgICAgICBib3JkZXJXaWR0aDogJzAgMWVtIDFlbSAxZW0nLFxuICAgICAgICBib3JkZXJDb2xvcjogYHRyYW5zcGFyZW50IHRyYW5zcGFyZW50ICR7Y29sb3J9IHRyYW5zcGFyZW50YCxcbiAgICAgIH0sXG4gICAgfSxcbiAgICAnJlt4LXBsYWNlbWVudCo9XCJ0b3BcIl0gJGFycm93Jzoge1xuICAgICAgJ2JvdHRvbSc6IDAsXG4gICAgICAnbGVmdCc6IDAsXG4gICAgICAnbWFyZ2luQm90dG9tJzogJy0wLjllbScsXG4gICAgICAnd2lkdGgnOiAnM2VtJyxcbiAgICAgICdoZWlnaHQnOiAnMWVtJyxcbiAgICAgICcmOjpiZWZvcmUnOiB7XG4gICAgICAgIGJvcmRlcldpZHRoOiAnMWVtIDFlbSAwIDFlbScsXG4gICAgICAgIGJvcmRlckNvbG9yOiBgJHtjb2xvcn0gdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnRgLFxuICAgICAgfSxcbiAgICB9LFxuICAgICcmW3gtcGxhY2VtZW50Kj1cInJpZ2h0XCJdICRhcnJvdyc6IHtcbiAgICAgICdsZWZ0JzogMCxcbiAgICAgICdtYXJnaW5MZWZ0JzogJy0wLjllbScsXG4gICAgICAnaGVpZ2h0JzogJzNlbScsXG4gICAgICAnd2lkdGgnOiAnMWVtJyxcbiAgICAgICcmOjpiZWZvcmUnOiB7XG4gICAgICAgIGJvcmRlcldpZHRoOiAnMWVtIDFlbSAxZW0gMCcsXG4gICAgICAgIGJvcmRlckNvbG9yOiBgdHJhbnNwYXJlbnQgJHtjb2xvcn0gdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnRgLFxuICAgICAgfSxcbiAgICB9LFxuICAgICcmW3gtcGxhY2VtZW50Kj1cImxlZnRcIl0gJGFycm93Jzoge1xuICAgICAgJ3JpZ2h0JzogMCxcbiAgICAgICdtYXJnaW5SaWdodCc6ICctMC45ZW0nLFxuICAgICAgJ2hlaWdodCc6ICczZW0nLFxuICAgICAgJ3dpZHRoJzogJzFlbScsXG4gICAgICAnJjo6YmVmb3JlJzoge1xuICAgICAgICBib3JkZXJXaWR0aDogJzFlbSAwIDFlbSAxZW0nLFxuICAgICAgICBib3JkZXJDb2xvcjogYHRyYW5zcGFyZW50IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50ICR7Y29sb3J9YCxcbiAgICAgIH0sXG4gICAgfSxcbiAgfTtcbn1cblxuLyoqXG4gKiBVdGlsaXR5IHRvIGFwcGx5IHN0eWxlcyBiYXNlZCBvbiBwcm9wc1xuICovXG4vLyBjb25zdCBzdHlsZWRCeSA9IChwcm9wZXJ0eSwgbWFwcGluZykgPT4gcHJvcHMgPT4gbWFwcGluZ1twcm9wc1twcm9wZXJ0eV1dO1xuXG5jb25zdCBzdHlsZXMgPSB7XG4gIHJvb3Q6IHtcbiAgICAnYm9yZGVyQm90dG9tJzogJ3NvbGlkICMzMzMzMzMgMXB4JyxcbiAgICAnYmFja2dyb3VuZENvbG9yJzogJyM3NDc0NzQnLFxuICAgICcmJHNlbGVjdGVkJzoge1xuICAgICAgJ2JhY2tncm91bmRDb2xvcic6ICcjMjE5NkYzJyxcbiAgICAgICcmOmhvdmVyJzogeyBiYWNrZ3JvdW5kQ29sb3I6ICcjMjE5NkYzJyB9LFxuICAgIH0sXG4gIH0sXG4gIHNlbGVjdGVkOiB7fSxcbiAgdGV4dFJvb3Q6IHsgcGFkZGluZ1JpZ2h0OiAwIH0sXG4gIHRleHQ6IHtcbiAgICBjb2xvcjogJyNGRkZGRkYnLFxuICAgIHRleHRPdmVyZmxvdzogJ2VsbGlwc2lzJyxcbiAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gICAgd2hpdGVTcGFjZTogJ25vd3JhcCcsXG4gICAgZm9udFNpemU6IDEyLFxuICB9LFxuICBiYWRnZToge1xuICAgIGJhY2tncm91bmRDb2xvcjogJyNmZmZmZmYnLFxuICAgIGJvcmRlcjogJ3NvbGlkIDJweCAjNzQ3NDc0JyxcbiAgICBib3JkZXJDb2xvcjogJyM3NDc0NzQnLFxuICAgIGNvbG9yOiAnIzc0NzQ3NCcsXG4gICAgZm9udFdlaWdodDogJ2JvbGQnLFxuICAgIGZvbnRTaXplOiAnNzUlJyxcbiAgICB3aWR0aDogMTgsXG4gICAgaGVpZ2h0OiAxOCxcbiAgICBtYXJnaW5Ub3A6IDIsXG4gICAgbWFyZ2luUmlnaHQ6IDIsXG4gIH0sXG4gIHNlbGVjdGVkQmFkZ2U6IHtcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjZmZmZmZmJyxcbiAgICBib3JkZXI6ICdzb2xpZCAycHggIzc0NzQ3NCcsXG4gICAgYm9yZGVyQ29sb3I6ICcjMjE5NkYzJyxcbiAgICBjb2xvcjogJyMyMTk2RjMnLFxuICAgIGZvbnRXZWlnaHQ6ICdib2xkJyxcbiAgICBmb250U2l6ZTogJzc1JScsXG4gICAgd2lkdGg6IDE4LFxuICAgIGhlaWdodDogMTgsXG4gICAgbWFyZ2luVG9wOiAyLFxuICAgIG1hcmdpblJpZ2h0OiAyLFxuICB9LFxuICBsaWdodFRvb2x0aXA6IHtcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjZmZmJyxcbiAgICBjb2xvcjogJyMwMDAnLFxuICAgIGJveFNoYWRvdzogJzFweCAxcHggNXB4IDBweCByZ2JhKDAsMCwwLDAuNzUpJyxcbiAgICBmb250U2l6ZTogMTQsXG4gICAgcGFkZGluZzogMTUsXG4gIH0sXG4gIGxpZ2h0VG9vbHRpcFNtYWxsOiB7XG4gICAgYmFja2dyb3VuZENvbG9yOiAnI2ZmZicsXG4gICAgY29sb3I6ICcjMzMzMzMzJyxcbiAgICBib3hTaGFkb3c6ICcxcHggMXB4IDVweCAwcHggcmdiYSgwLDAsMCwwLjc1KScsXG4gIH0sXG4gIGFycm93UG9wcGVyOiBhcnJvd0dlbmVyYXRvcignI2ZmZicpLFxuICBhcnJvdzoge1xuICAgICdwb3NpdGlvbic6ICdhYnNvbHV0ZScsXG4gICAgJ2ZvbnRTaXplJzogNyxcbiAgICAnd2lkdGgnOiAnM2VtJyxcbiAgICAnaGVpZ2h0JzogJzNlbScsXG4gICAgJyY6OmJlZm9yZSc6IHtcbiAgICAgIGNvbnRlbnQ6ICdcIlwiJyxcbiAgICAgIG1hcmdpbjogJ2F1dG8nLFxuICAgICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICAgIHdpZHRoOiAwLFxuICAgICAgaGVpZ2h0OiAwLFxuICAgICAgYm9yZGVyU3R5bGU6ICdzb2xpZCcsXG4gICAgfSxcbiAgfSxcbiAgYm9vdHN0cmFwUG9wcGVyOiBhcnJvd0dlbmVyYXRvcignIzAwMCcpLFxuICBib290c3RyYXBUb29sdGlwOiB7IGJhY2tncm91bmRDb2xvcjogJyMwMDAnIH0sXG4gIGJvb3RzdHJhcFBsYWNlbWVudExlZnQ6IHsgbWFyZ2luOiAnMCA4cHgnIH0sXG4gIGJvb3RzdHJhcFBsYWNlbWVudFJpZ2h0OiB7IG1hcmdpbjogJzAgOHB4JyB9LFxuICBib290c3RyYXBQbGFjZW1lbnRUb3A6IHsgbWFyZ2luOiAnOHB4IDQwcHgnIH0sXG4gIGJvb3RzdHJhcFBsYWNlbWVudEJvdHRvbTogeyBtYXJnaW46ICc4cHggNDBweCcgfSxcbn07XG5cbi8qKlxuICogUmVuZGVycyBhIHNpbmdsZSBpdGVtIHdpdGhpbiB0aGUgbWVudVxuICogQHBhcmFtIHtzdHJpbmd9IHRpdGxlIC0gdGhlIG1lbnUgaXRlbSB0ZXh0XG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBbb25DbGlja10gLSBhIGNhbGxiYWNrIHRoYXQgcmVjZWl2ZXMgY2xpY2sgZXZlbnRzIGZyb20gdGhlIG1lbnUgaXRlbVxuICogQHBhcmFtIHtib29sZWFufSBbc2VsZWN0ZWRdIC0gaW5kaWNhdGVzIGlmIHRoaXMgaXRlbSBpcyBzZWxlY3RlZFxuICogQHBhcmFtIHtvYmplY3R9IFtzdGF0dXNdIC0gYSBkaWN0aW9uYXJ5IG9mIGJvb2xlYW4gdmFsdWVzIGluZGljYXRpbmcgdGhlIGl0ZW0ncyBzdGF0dXNcbiAqIEBwYXJhbSB7b2JqZWN0W119IFtzdGF0dXNJY29uc10gLSBhbiBhcnJheSBpZiBpY29ucyB0aGF0IG1heSBiZSBtYXBwZWQgdG8gdGhlIGl0ZW0ncyBjdXJyZW50IHN0YXR1c1xuICovXG5jbGFzcyBNZW51SXRlbSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHN0YXRlID0ge1xuICAgIGFycm93UmVmOiBudWxsLFxuICAgIG92ZXJmbG93OiBmYWxzZSxcbiAgfTtcbiAgdGV4dFJlZiA9IFJlYWN0LmNyZWF0ZVJlZigpO1xuICBsaXN0SXRlbVRleHRSZWYgPSBSZWFjdC5jcmVhdGVSZWYoKTtcblxuICAvKipcbiAgICogSGFuZGxlcyB0aGUgbm9kZSByZWYgdXNlZCBmb3IgdGhlIHRvb2x0aXAgYXJyb3dcbiAgICogQHBhcmFtIHtvYmplY3R9IG5vZGUgLSBhIHJlYWN0IHJlZlxuICAgKi9cbiAgaGFuZGxlQXJyb3dSZWYgPSBub2RlID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHsgYXJyb3dSZWY6IG5vZGUgfSk7XG4gIH07XG5cbiAgLyoqXG4gICAqIENoZWNrIGZvciB0aGUgdG9vbHRpcCB0ZXh0IG92ZXJmbG93XG4gICAqL1xuICBjaGVja092ZXJmbG93ID0gKCkgPT4ge1xuICAgIGNvbnN0IG92ZXJmbG93ID1cbiAgICAgIHRoaXMubGlzdEl0ZW1UZXh0UmVmLmN1cnJlbnQub2Zmc2V0V2lkdGggPFxuICAgICAgdGhpcy50ZXh0UmVmLmN1cnJlbnQub2Zmc2V0V2lkdGg7XG5cbiAgICBpZiAob3ZlcmZsb3cgIT09IHRoaXMuc3RhdGUub3ZlcmZsb3cpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBvdmVyZmxvdyB9KTtcbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIEhhbmRsZXMgY2xpY2tzIG9uIHRoZSBpdGVtXG4gICAqL1xuICBoYW5kbGVDbGljayA9IGUgPT4ge1xuICAgIGNvbnN0IHsgb25DbGljayB9ID0gdGhpcy5wcm9wcztcblxuICAgIGlmICh0eXBlb2Ygb25DbGljayA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgb25DbGljayhlKTtcbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIEJ1aWxkcyB0aGUgY29ycmVjdCBzdGF0dXMgaWNvbiB0byBkaXNwbGF5XG4gICAqIEBwYXJhbSB7b2JqZWN0fSBzdGF0dXMgLSB0aGUgaXRlbSBzdGF0dXMuIHRoaXMgaXMgYW4gb2JqZWN0IG9mIGJvb2xlYW4ga2V5c1xuICAgKiBAcGFyYW0ge29iamVjdFtdfSBzdGF0dXNJY29ucyAtIGFuIGFycmF5IG9mIGF2YWlsYWJsZSBzdGF0dXMgaWNvbnNcbiAgICovXG4gIGdlbmVyYXRlU3RhdHVzSWNvbiA9IG1lbW9pemUoKHN0YXR1cywgc3RhdHVzSWNvbnMsIHNlbGVjdGVkKSA9PiB7XG4gICAgY29uc3QgeyBjbGFzc2VzIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgaWYgKCFzdGF0dXNJY29ucyB8fCAhc3RhdHVzKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBjb25zdCBpY29ucyA9IFtdO1xuXG4gICAgZm9yIChsZXQgaSA9IDAsIGxlbiA9IHN0YXR1c0ljb25zLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICBjb25zdCBpY29uID0gc3RhdHVzSWNvbnNbaV07XG4gICAgICBjb25zdCBzID0gc3RhdHVzW2ljb24ua2V5XTtcblxuICAgICAgaWYgKEJvb2xlYW4ocykgPT09IGljb24udmFsdWUpIHtcbiAgICAgICAgaWNvbnMucHVzaChpY29uLmljb24pO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChpY29ucy5sZW5ndGggPT09IDEpIHtcbiAgICAgIHJldHVybiA8TGlzdEl0ZW1JY29uPntpY29uc1swXX08L0xpc3RJdGVtSWNvbj47XG4gICAgfSBlbHNlIGlmIChpY29ucy5sZW5ndGggPiAxKSB7XG4gICAgICAvLyBkaXNwbGF5IGJhZGdlZCBpY29uIHdpdGggdG9vbHRpcFxuICAgICAgcmV0dXJuIChcbiAgICAgICAgPExpc3RJdGVtSWNvbj5cbiAgICAgICAgICA8VG9vbHRpcFxuICAgICAgICAgICAgcGxhY2VtZW50PVwicmlnaHRcIlxuICAgICAgICAgICAgY2xhc3Nlcz17eyB0b29sdGlwOiB0aGlzLnByb3BzLmNsYXNzZXMubGlnaHRUb29sdGlwU21hbGwgfX1cbiAgICAgICAgICAgIHRpdGxlPXtcbiAgICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgICAgIHtpY29ucy5tYXAoKGksIGtleSkgPT5cbiAgICAgICAgICAgICAgICAgIFJlYWN0LmNsb25lRWxlbWVudChpLCB7XG4gICAgICAgICAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU6IHsgY29sb3I6ICcjMzMzMzMzJyB9LFxuICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8QmFkZ2VcbiAgICAgICAgICAgICAgYmFkZ2VDb250ZW50PXtpY29ucy5sZW5ndGh9XG4gICAgICAgICAgICAgIGNsYXNzZXM9e3sgYmFkZ2U6IHNlbGVjdGVkID8gY2xhc3Nlcy5zZWxlY3RlZEJhZGdlIDogY2xhc3Nlcy5iYWRnZSB9fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7aWNvbnNbMF19XG4gICAgICAgICAgICA8L0JhZGdlPlxuICAgICAgICAgIDwvVG9vbHRpcD5cbiAgICAgICAgPC9MaXN0SXRlbUljb24+XG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gIH0pO1xuXG4gIHNob3VsZENvbXBvbmVudFVwZGF0ZShuZXh0UHJvcHMsIG5leHRTdGF0ZSkge1xuICAgIC8vIFRSSUNLWTogd2Ugc2hvdWxkIHRlY2huaWNhbGx5IGNoZWNrIGZvciBhbiB1cGRhdGUgdG8gc3RhdHVzSWNvbnNcbiAgICAvLyBob3dldmVyIHRoYXQgaXMgbm90IGEga25vd24gdXNlIGNhc2UgYW5kIGl0J3MgZmFzdGVyIHRvIGlnbm9yZSBpdC5cbiAgICBjb25zdCB7XG4gICAgICB0aXRsZSwga2V5LCBzZWxlY3RlZCwgc3RhdHVzLFxuICAgIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHsgb3ZlcmZsb3cgfSA9IHRoaXMuc3RhdGU7XG4gICAgcmV0dXJuIChcbiAgICAgIG92ZXJmbG93ICE9PSBuZXh0U3RhdGUub3ZlcmZsb3cgfHxcbiAgICAgIHRpdGxlICE9PSBuZXh0UHJvcHMudGl0bGUgfHxcbiAgICAgIGtleSAhPT0gbmV4dFByb3BzLmtleSB8fFxuICAgICAgc2VsZWN0ZWQgIT09IG5leHRQcm9wcy5zZWxlY3RlZCB8fFxuICAgICAgIV8uaXNFcXVhbChzdGF0dXMsIG5leHRQcm9wcy5zdGF0dXMpXG4gICAgKTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZFVwZGF0ZSgpIHtcbiAgICB0aGlzLmNoZWNrT3ZlcmZsb3coKTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHRoaXMuY2hlY2tPdmVyZmxvdygpO1xuICB9XG5cbiAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHtcbiAgICBpZiAobmV4dFByb3BzLnRpdGxlICE9PSB0aGlzLnByb3BzLnRpdGxlKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgb3ZlcmZsb3c6IGZhbHNlIH0pO1xuICAgIH1cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICBrZXksXG4gICAgICB0aXRsZSxcbiAgICAgIHN0YXR1cyxcbiAgICAgIHRvb2x0aXAsXG4gICAgICBjbGFzc2VzLFxuICAgICAgc2VsZWN0ZWQsXG4gICAgICBzdGF0dXNJY29ucyxcbiAgICAgIHRhcmdldExhbmd1YWdlRm9udCxcbiAgICB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB7IG92ZXJmbG93IH0gPSB0aGlzLnN0YXRlO1xuICAgIGNvbnN0IHRvb2x0aXBUZXh0ID0gdG9vbHRpcCA/IHRvb2x0aXAgOiB0aXRsZTtcbiAgICBjb25zdCBpY29uID0gdGhpcy5nZW5lcmF0ZVN0YXR1c0ljb24oc3RhdHVzLCBzdGF0dXNJY29ucywgc2VsZWN0ZWQpO1xuICAgIGNvbnN0IGZvbnRDbGFzcyA9IGdldEZvbnRDbGFzc05hbWUodGFyZ2V0TGFuZ3VhZ2VGb250KTtcblxuICAgIHJldHVybiAoXG4gICAgICA8TGlzdEl0ZW1cbiAgICAgICAga2V5PXtrZXl9XG4gICAgICAgIGRpc2FibGVHdXR0ZXJzPXtmYWxzZX1cbiAgICAgICAgc2VsZWN0ZWQ9e3NlbGVjdGVkfVxuICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZUNsaWNrfVxuICAgICAgICBjbGFzc2VzPXt7XG4gICAgICAgICAgcm9vdDogY2xhc3Nlcy5yb290LFxuICAgICAgICAgIHNlbGVjdGVkOiBjbGFzc2VzLnNlbGVjdGVkLFxuICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICB7aWNvbn1cbiAgICAgICAgPFJvb3RSZWYgcm9vdFJlZj17dGhpcy5saXN0SXRlbVRleHRSZWZ9PlxuICAgICAgICAgIDxUb29sdGlwXG4gICAgICAgICAgICBlbnRlckRlbGF5PXszMDB9XG4gICAgICAgICAgICB0aXRsZT17XG4gICAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2ZvbnRDbGFzc30+e3Rvb2x0aXBUZXh0fTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2NsYXNzZXMuYXJyb3d9IHJlZj17dGhpcy5oYW5kbGVBcnJvd1JlZn0vPlxuICAgICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZGlzYWJsZUZvY3VzTGlzdGVuZXI9eyFvdmVyZmxvd31cbiAgICAgICAgICAgIGRpc2FibGVIb3Zlckxpc3RlbmVyPXshb3ZlcmZsb3d9XG4gICAgICAgICAgICBkaXNhYmxlVG91Y2hMaXN0ZW5lcj17IW92ZXJmbG93fVxuICAgICAgICAgICAgY2xhc3Nlcz17e1xuICAgICAgICAgICAgICB0b29sdGlwOiBjbGFzc2VzLmxpZ2h0VG9vbHRpcCxcbiAgICAgICAgICAgICAgcG9wcGVyOiBjbGFzc2VzLmFycm93UG9wcGVyLFxuICAgICAgICAgICAgICB0b29sdGlwUGxhY2VtZW50TGVmdDogY2xhc3Nlcy5ib290c3RyYXBQbGFjZW1lbnRMZWZ0LFxuICAgICAgICAgICAgICB0b29sdGlwUGxhY2VtZW50UmlnaHQ6IGNsYXNzZXMuYm9vdHN0cmFwUGxhY2VtZW50UmlnaHQsXG4gICAgICAgICAgICAgIHRvb2x0aXBQbGFjZW1lbnRUb3A6IGNsYXNzZXMuYm9vdHN0cmFwUGxhY2VtZW50VG9wLFxuICAgICAgICAgICAgICB0b29sdGlwUGxhY2VtZW50Qm90dG9tOiBjbGFzc2VzLmJvb3RzdHJhcFBsYWNlbWVudEJvdHRvbSxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgICBQb3BwZXJQcm9wcz17e1xuICAgICAgICAgICAgICBwb3BwZXJPcHRpb25zOiB7XG4gICAgICAgICAgICAgICAgbW9kaWZpZXJzOiB7XG4gICAgICAgICAgICAgICAgICBhcnJvdzoge1xuICAgICAgICAgICAgICAgICAgICBlbmFibGVkOiBCb29sZWFuKHRoaXMuc3RhdGUuYXJyb3dSZWYpLFxuICAgICAgICAgICAgICAgICAgICBlbGVtZW50OiB0aGlzLnN0YXRlLmFycm93UmVmLFxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8TGlzdEl0ZW1UZXh0XG4gICAgICAgICAgICAgIGluc2V0PXshaWNvbn1cbiAgICAgICAgICAgICAgY2xhc3Nlcz17e1xuICAgICAgICAgICAgICAgIHJvb3Q6IGNsYXNzZXMudGV4dFJvb3QsXG4gICAgICAgICAgICAgICAgcHJpbWFyeTogY2xhc3Nlcy50ZXh0LFxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICBwcmltYXJ5PXs8c3BhbiBjbGFzc05hbWU9e2ZvbnRDbGFzc30gcmVmPXt0aGlzLnRleHRSZWZ9Pnt0aXRsZX08L3NwYW4+fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L1Rvb2x0aXA+XG4gICAgICAgIDwvUm9vdFJlZj5cbiAgICAgIDwvTGlzdEl0ZW0+XG4gICAgKTtcbiAgfVxufVxuXG5NZW51SXRlbS5wcm9wVHlwZXMgPSB7XG4gIGNsYXNzZXM6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgdGl0bGU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgdG9vbHRpcDogUHJvcFR5cGVzLnN0cmluZyxcbiAga2V5OiBQcm9wVHlwZXMuYW55LFxuICBvbkNsaWNrOiBQcm9wVHlwZXMuZnVuYyxcbiAgc2VsZWN0ZWQ6IFByb3BUeXBlcy5ib29sLFxuICBzdGF0dXNJY29uczogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLm9iamVjdCksXG4gIHN0YXR1czogUHJvcFR5cGVzLm9iamVjdCxcbiAgdGFyZ2V0TGFuZ3VhZ2VGb250OiBQcm9wVHlwZXMuc3RyaW5nLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlcyhzdHlsZXMpKE1lbnVJdGVtKTtcbiJdfQ==