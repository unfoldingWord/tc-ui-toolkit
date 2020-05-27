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

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styles = require("@material-ui/core/styles");

var _List = _interopRequireDefault(require("@material-ui/core/List"));

var _RootRef = _interopRequireDefault(require("@material-ui/core/RootRef"));

var _MuiThemeProvider = _interopRequireDefault(require("@material-ui/core/styles/MuiThemeProvider"));

var _memoizeOne = _interopRequireDefault(require("memoize-one"));

var _MenuItem = _interopRequireDefault(require("./MenuItem"));

var _MenuGroup = _interopRequireDefault(require("./MenuGroup"));

var _EmptyItem = _interopRequireDefault(require("./EmptyItem"));

var theme = (0, _styles.createMuiTheme)({
  typography: {
    useNextVariants: true,
    fontFamily: ['"Noto Sans"', 'Roboto', 'Arial'].join(','),
    fontSize: 12
  },
  props: {
    MuiButtonBase: {
      disableRipple: true
    }
  },
  overrides: {
    MuiListItem: {
      root: {
        paddingTop: 6,
        paddingBottom: 6,
        minHeight: 40
      },
      gutters: {
        paddingLeft: 10,
        paddingRight: 5
      }
    },
    MuiSvgIcon: {
      root: {
        fontSize: 22
      }
    },
    MuiListItemText: {
      root: {
        paddingLeft: 5
      },
      inset: {
        paddingLeft: '32px!important'
      }
    },
    MuiListItemIcon: {
      root: {
        marginRight: 5
      }
    },
    MuiChip: {
      root: {
        margin: 2,
        height: 26
      },
      label: {
        paddingLeft: 8,
        paddingRight: 8
      },
      deleteIcon: {
        marginRight: 2
      }
    },
    MuiListSubheader: {
      root: {
        lineHeight: 'inherit'
      }
    }
  }
});

var styles = function styles() {
  return {
    root: {
      overflowY: 'scroll',
      color: '#FFFFFF',
      backgroundColor: '#333333'
    },
    header: {
      borderBottom: 'solid #ffffff4d 1px'
    },
    text: {
      color: '#FFFFFF',
      fontSize: 'inherit'
    }
  };
};
/**
 * Displays a list of grouped menu items
 * @param {[]} entries - an array of menu entries
 * @param {object} [active=null] - the active menu item object
 * @param {object[]} [statusIcons=[]] - an array of status configurations to control menu item icons
 * @param {*} [header=null] - a component to display as the menu header
 * @param {*} [height="auto"] - the height of the menu
 * @param {*} [width=250] - the width of the menu
 * @param {boolean} [autoSelect=true] - controls whether or not opening a group will automatically select the first child
 * @param {boolean} [autoScroll=true] - controls whether or not the menu will automatically scroll to the active item
 * @param {string} [emptyNotice=""] - an optional message to display when the menu is empty
 */


var Menu = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2["default"])(Menu, _React$Component);

  function Menu(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, Menu);
    _this = (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(Menu).call(this, props));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "menuRef", _react["default"].createRef());
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "selectedGroupRef", _react["default"].createRef());
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "selectedItemRef", _react["default"].createRef());
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "scrollToSelectedGroup", function () {
      var instant = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

      _this.scrollIntoView(_this.selectedGroupRef, instant);
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "scrollToSelectedItem", function () {
      var instant = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

      _this.scrollIntoView(_this.selectedItemRef, instant);
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "scrollIntoView", function (ref) {
      var instant = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

      if (ref && ref.scrollIntoView && !_this.isRefInView(ref)) {
        ref.scrollIntoView({
          block: 'center',
          behavior: instant ? 'instant' : 'smooth'
        });
      }
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "isRefInView", function (ref) {
      if (ref && ref.getBoundingClientRect && _this.menuRef && _this.menuRef.current && _this.menuRef.current.getBoundingClientRect) {
        var rect = ref.getBoundingClientRect();

        var menuRect = _this.menuRef.current.getBoundingClientRect();

        return rect.top >= menuRect.top && rect.bottom <= menuRect.bottom;
      } else {
        return false;
      }
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "normalizeStatusIcons", (0, _memoizeOne["default"])(function (statusIcons) {
      var normalized = [];

      for (var i = 0, len = statusIcons.length; i < len; i++) {
        var icon = Object.assign({}, {
          value: true
        }, statusIcons[i]);
        normalized.push(icon);
      }

      return normalized;
    }));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleOpen", function (group) {
      return function () {
        var autoSelect = _this.props.autoSelect;

        if (_this.state.opened === group.id) {
          _this.setState({
            opened: -1
          });
        } else {
          _this.setState({
            opened: group.id
          }); // auto select newly opened groups if not controlled elsewhere


          var firstChild = group.children[0];

          if (autoSelect && firstChild && !_this.isGroupSelected(group)) {
            _this.handleClick(firstChild)();
          }
        }
      };
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleClick", function (item) {
      return function () {
        var _this$props = _this.props,
            onItemClick = _this$props.onItemClick,
            active = _this$props.active;

        if (typeof onItemClick === 'function') {
          onItemClick(item);
        } // skip internal state if managed externally.


        if (!active) {
          _this.setState({
            active: item
          });
        }
      };
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "isGroupOpen", function (group) {
      return _this.state.opened === group.id;
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "isGroupSelected", function (group) {
      var active = _this.getActive();

      return active && group.id === active.groupId;
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "isItemSelected", function (item) {
      var activeItem = _this.getActive();

      var groupId = item.groupId,
          itemId = item.itemId;
      return activeItem && activeItem.groupId === groupId && activeItem.itemId === itemId;
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "getActive", function () {
      return _this.props.active ? _this.props.active : _this.state.active;
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleGroupRef", function (group) {
      return function (ref) {
        if (_this.isGroupSelected(group)) {
          _this.selectedGroupRef = ref;
        }
      };
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleItemRef", function (item) {
      return function (ref) {
        if (_this.isItemSelected(item)) {
          _this.selectedItemRef = ref;
        }
      };
    });
    var autoOpen = null; // TRICKY: start with the controlled group open

    var _active = props.active,
        _autoSelect = props.autoSelect;

    if (_active && _autoSelect) {
      autoOpen = _active.groupId;
    }

    _this.state = {
      opened: autoOpen,
      active: null
    };
    return _this;
  }

  (0, _createClass2["default"])(Menu, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var opened = this.state.opened;
      var autoScroll = this.props.autoScroll; // scroll to the selection

      if (autoScroll && opened) {
        this.scrollToSelectedItem();
      } else if (autoScroll) {
        this.scrollToSelectedGroup();
      }
    }
    /**
     *
     * @param prevProps
     * @param prevState
     * @param nextContent
     */
    // eslint-disable-next-line no-unused-vars

  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState, nextContent) {
      var opened = this.state.opened;
      var autoScroll = this.props.autoScroll;
      var prevActive = prevProps.active ? prevProps.active : prevState.active;
      var active = this.getActive();

      if (active && prevActive && prevActive.groupId !== active.groupId && active.groupId !== opened) {
        // open the active group if it was changed externally
        this.setState({
          opened: active.groupId
        });
      } else if (autoScroll && this.state.opened) {
        // scroll to the current selection
        this.scrollToSelectedItem();
      }
    }
    /**
     * Scrolls the selected group into view
     * @param {boolean} [instant=true] - makes the scroll execute instantly.
     */

  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props2 = this.props,
          classes = _this$props2.classes,
          header = _this$props2.header,
          height = _this$props2.height,
          width = _this$props2.width,
          entries = _this$props2.entries,
          statusIcons = _this$props2.statusIcons,
          emptyNotice = _this$props2.emptyNotice,
          targetLanguageFont = _this$props2.targetLanguageFont;
      var normalizedStatusIcons = this.normalizeStatusIcons(statusIcons);
      return _react["default"].createElement(_MuiThemeProvider["default"], {
        theme: theme
      }, _react["default"].createElement(_RootRef["default"], {
        rootRef: this.menuRef
      }, _react["default"].createElement(_List["default"], {
        component: "nav",
        subheader: header,
        className: classes.root,
        style: {
          height: height,
          width: width,
          minWidth: width
        }
      }, entries.map(function (group, index) {
        return _react["default"].createElement(_RootRef["default"], {
          key: index,
          rootRef: _this2.handleGroupRef(group)
        }, _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(_MenuGroup["default"], {
          selected: _this2.isGroupSelected(group),
          onClick: _this2.handleOpen(group),
          progress: group.progress,
          open: _this2.isGroupOpen(group),
          label: group.title
        }), _this2.isGroupOpen(group) ? _react["default"].createElement(_List["default"], {
          component: "div",
          disablePadding: true
        }, group.children.map(function (item, index) {
          return _react["default"].createElement(_RootRef["default"], {
            key: index,
            rootRef: _this2.handleItemRef(item)
          }, _react["default"].createElement(_MenuItem["default"], {
            status: item,
            selected: _this2.isItemSelected(item),
            statusIcons: normalizedStatusIcons,
            onClick: _this2.handleClick(item),
            tooltip: item.tooltip ? item.tooltip : item.title,
            title: item.title,
            targetLanguageFont: targetLanguageFont
          }));
        })) : null));
      }), _react["default"].createElement(_EmptyItem["default"], {
        key: "empty",
        label: emptyNotice,
        enabled: entries.length === 0
      }))));
    }
  }]);
  return Menu;
}(_react["default"].Component);

Menu.propTypes = {
  classes: _propTypes["default"].object.isRequired,
  entries: _propTypes["default"].array,
  active: _propTypes["default"].object,
  header: _propTypes["default"].element,
  height: _propTypes["default"].any,
  onItemClick: _propTypes["default"].func,
  width: _propTypes["default"].number,
  statusIcons: _propTypes["default"].array,
  emptyNotice: _propTypes["default"].string,
  autoSelect: _propTypes["default"].bool,
  autoScroll: _propTypes["default"].bool,
  targetLanguageFont: _propTypes["default"].string
};
Menu.defaultProps = {
  active: null,
  height: 'auto',
  entries: [],
  width: 250,
  emptyNotice: '',
  autoSelect: true,
  autoScroll: true,
  statusIcons: []
};
Menu.muiName = 'List';

var _default = (0, _styles.withStyles)(styles)(Menu);

exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9Hcm91cGVkTWVudS9NZW51L2luZGV4LmpzIl0sIm5hbWVzIjpbInRoZW1lIiwidHlwb2dyYXBoeSIsInVzZU5leHRWYXJpYW50cyIsImZvbnRGYW1pbHkiLCJqb2luIiwiZm9udFNpemUiLCJwcm9wcyIsIk11aUJ1dHRvbkJhc2UiLCJkaXNhYmxlUmlwcGxlIiwib3ZlcnJpZGVzIiwiTXVpTGlzdEl0ZW0iLCJyb290IiwicGFkZGluZ1RvcCIsInBhZGRpbmdCb3R0b20iLCJtaW5IZWlnaHQiLCJndXR0ZXJzIiwicGFkZGluZ0xlZnQiLCJwYWRkaW5nUmlnaHQiLCJNdWlTdmdJY29uIiwiTXVpTGlzdEl0ZW1UZXh0IiwiaW5zZXQiLCJNdWlMaXN0SXRlbUljb24iLCJtYXJnaW5SaWdodCIsIk11aUNoaXAiLCJtYXJnaW4iLCJoZWlnaHQiLCJsYWJlbCIsImRlbGV0ZUljb24iLCJNdWlMaXN0U3ViaGVhZGVyIiwibGluZUhlaWdodCIsInN0eWxlcyIsIm92ZXJmbG93WSIsImNvbG9yIiwiYmFja2dyb3VuZENvbG9yIiwiaGVhZGVyIiwiYm9yZGVyQm90dG9tIiwidGV4dCIsIk1lbnUiLCJSZWFjdCIsImNyZWF0ZVJlZiIsImluc3RhbnQiLCJzY3JvbGxJbnRvVmlldyIsInNlbGVjdGVkR3JvdXBSZWYiLCJzZWxlY3RlZEl0ZW1SZWYiLCJyZWYiLCJpc1JlZkluVmlldyIsImJsb2NrIiwiYmVoYXZpb3IiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJtZW51UmVmIiwiY3VycmVudCIsInJlY3QiLCJtZW51UmVjdCIsInRvcCIsImJvdHRvbSIsInN0YXR1c0ljb25zIiwibm9ybWFsaXplZCIsImkiLCJsZW4iLCJsZW5ndGgiLCJpY29uIiwiT2JqZWN0IiwiYXNzaWduIiwidmFsdWUiLCJwdXNoIiwiZ3JvdXAiLCJhdXRvU2VsZWN0Iiwic3RhdGUiLCJvcGVuZWQiLCJpZCIsInNldFN0YXRlIiwiZmlyc3RDaGlsZCIsImNoaWxkcmVuIiwiaXNHcm91cFNlbGVjdGVkIiwiaGFuZGxlQ2xpY2siLCJpdGVtIiwib25JdGVtQ2xpY2siLCJhY3RpdmUiLCJnZXRBY3RpdmUiLCJncm91cElkIiwiYWN0aXZlSXRlbSIsIml0ZW1JZCIsImlzSXRlbVNlbGVjdGVkIiwiYXV0b09wZW4iLCJhdXRvU2Nyb2xsIiwic2Nyb2xsVG9TZWxlY3RlZEl0ZW0iLCJzY3JvbGxUb1NlbGVjdGVkR3JvdXAiLCJwcmV2UHJvcHMiLCJwcmV2U3RhdGUiLCJuZXh0Q29udGVudCIsInByZXZBY3RpdmUiLCJjbGFzc2VzIiwid2lkdGgiLCJlbnRyaWVzIiwiZW1wdHlOb3RpY2UiLCJ0YXJnZXRMYW5ndWFnZUZvbnQiLCJub3JtYWxpemVkU3RhdHVzSWNvbnMiLCJub3JtYWxpemVTdGF0dXNJY29ucyIsIm1pbldpZHRoIiwibWFwIiwiaW5kZXgiLCJoYW5kbGVHcm91cFJlZiIsImhhbmRsZU9wZW4iLCJwcm9ncmVzcyIsImlzR3JvdXBPcGVuIiwidGl0bGUiLCJoYW5kbGVJdGVtUmVmIiwidG9vbHRpcCIsIkNvbXBvbmVudCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsIm9iamVjdCIsImlzUmVxdWlyZWQiLCJhcnJheSIsImVsZW1lbnQiLCJhbnkiLCJmdW5jIiwibnVtYmVyIiwic3RyaW5nIiwiYm9vbCIsImRlZmF1bHRQcm9wcyIsIm11aU5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBRUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBRUEsSUFBTUEsS0FBSyxHQUFHLDRCQUFlO0FBQzNCQyxFQUFBQSxVQUFVLEVBQUU7QUFDVkMsSUFBQUEsZUFBZSxFQUFFLElBRFA7QUFFVkMsSUFBQUEsVUFBVSxFQUFFLENBQ1YsYUFEVSxFQUVWLFFBRlUsRUFHVixPQUhVLEVBSVZDLElBSlUsQ0FJTCxHQUpLLENBRkY7QUFPVkMsSUFBQUEsUUFBUSxFQUFFO0FBUEEsR0FEZTtBQVUzQkMsRUFB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LEVBQUFBLEtBQUssRUFBRSxHQUpXO0FBS2xCRSxFQUFBQSxXQUFXLEVBQUUsRUFMSztBQU1sQjVCLEVBQUFBLFVBQVUsRUFBRSxJQU5NO0FBT2xCa0IsRUFBQUEsVUFBVSxFQUFFLElBUE07QUFRbEI3QixFQUFBQSxXQUFXLEVBQUU7QUFSSyxDQUFwQjtBQVdBbEIsSUFBSSxDQUFDb0YsT0FBTCxHQUFlLE1BQWY7O2VBRWUsd0JBQVczRixNQUFYLEVBQW1CTyxJQUFuQixDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyB3aXRoU3R5bGVzICwgY3JlYXRlTXVpVGhlbWUgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xuaW1wb3J0IExpc3QgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTGlzdCc7XG5pbXBvcnQgUm9vdFJlZiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Sb290UmVmJztcblxuaW1wb3J0IE11aVRoZW1lUHJvdmlkZXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzL011aVRoZW1lUHJvdmlkZXInO1xuaW1wb3J0IG1lbW9pemUgZnJvbSAnbWVtb2l6ZS1vbmUnO1xuaW1wb3J0IE1lbnVJdGVtIGZyb20gJy4vTWVudUl0ZW0nO1xuaW1wb3J0IE1lbnVHcm91cCBmcm9tICcuL01lbnVHcm91cCc7XG5pbXBvcnQgRW1wdHlJdGVtIGZyb20gJy4vRW1wdHlJdGVtJztcblxuY29uc3QgdGhlbWUgPSBjcmVhdGVNdWlUaGVtZSh7XG4gIHR5cG9ncmFwaHk6IHtcbiAgICB1c2VOZXh0VmFyaWFudHM6IHRydWUsXG4gICAgZm9udEZhbWlseTogW1xuICAgICAgJ1wiTm90byBTYW5zXCInLFxuICAgICAgJ1JvYm90bycsXG4gICAgICAnQXJpYWwnLFxuICAgIF0uam9pbignLCcpLFxuICAgIGZvbnRTaXplOiAxMixcbiAgfSxcbiAgcHJvcHM6IHsgTXVpQnV0dG9uQmFzZTogeyBkaXNhYmxlUmlwcGxlOiB0cnVlIH0gfSxcbiAgb3ZlcnJpZGVzOiB7XG4gICAgTXVpTGlzdEl0ZW06IHtcbiAgICAgIHJvb3Q6IHtcbiAgICAgICAgcGFkZGluZ1RvcDogNixcbiAgICAgICAgcGFkZGluZ0JvdHRvbTogNixcbiAgICAgICAgbWluSGVpZ2h0OiA0MCxcbiAgICAgIH0sXG4gICAgICBndXR0ZXJzOiB7XG4gICAgICAgIHBhZGRpbmdMZWZ0OiAxMCxcbiAgICAgICAgcGFkZGluZ1JpZ2h0OiA1LFxuICAgICAgfSxcbiAgICB9LFxuICAgIE11aVN2Z0ljb246IHsgcm9vdDogeyBmb250U2l6ZTogMjIgfSB9LFxuICAgIE11aUxpc3RJdGVtVGV4dDoge1xuICAgICAgcm9vdDogeyBwYWRkaW5nTGVmdDogNSB9LFxuICAgICAgaW5zZXQ6IHsgcGFkZGluZ0xlZnQ6ICczMnB4IWltcG9ydGFudCcgfSxcbiAgICB9LFxuICAgIE11aUxpc3RJdGVtSWNvbjogeyByb290OiB7IG1hcmdpblJpZ2h0OiA1IH0gfSxcbiAgICBNdWlDaGlwOiB7XG4gICAgICByb290OiB7XG4gICAgICAgIG1hcmdpbjogMixcbiAgICAgICAgaGVpZ2h0OiAyNixcbiAgICAgIH0sXG4gICAgICBsYWJlbDoge1xuICAgICAgICBwYWRkaW5nTGVmdDogOCxcbiAgICAgICAgcGFkZGluZ1JpZ2h0OiA4LFxuICAgICAgfSxcbiAgICAgIGRlbGV0ZUljb246IHsgbWFyZ2luUmlnaHQ6IDIgfSxcbiAgICB9LFxuICAgIE11aUxpc3RTdWJoZWFkZXI6IHsgcm9vdDogeyBsaW5lSGVpZ2h0OiAnaW5oZXJpdCcgfSB9LFxuICB9LFxufSk7XG5cbmNvbnN0IHN0eWxlcyA9ICgpID0+ICh7XG4gIHJvb3Q6IHtcbiAgICBvdmVyZmxvd1k6ICdzY3JvbGwnLFxuICAgIGNvbG9yOiAnI0ZGRkZGRicsXG4gICAgYmFja2dyb3VuZENvbG9yOiAnIzMzMzMzMycsXG4gIH0sXG4gIGhlYWRlcjogeyBib3JkZXJCb3R0b206ICdzb2xpZCAjZmZmZmZmNGQgMXB4JyB9LFxuICB0ZXh0OiB7XG4gICAgY29sb3I6ICcjRkZGRkZGJyxcbiAgICBmb250U2l6ZTogJ2luaGVyaXQnLFxuICB9LFxufSk7XG5cbi8qKlxuICogRGlzcGxheXMgYSBsaXN0IG9mIGdyb3VwZWQgbWVudSBpdGVtc1xuICogQHBhcmFtIHtbXX0gZW50cmllcyAtIGFuIGFycmF5IG9mIG1lbnUgZW50cmllc1xuICogQHBhcmFtIHtvYmplY3R9IFthY3RpdmU9bnVsbF0gLSB0aGUgYWN0aXZlIG1lbnUgaXRlbSBvYmplY3RcbiAqIEBwYXJhbSB7b2JqZWN0W119IFtzdGF0dXNJY29ucz1bXV0gLSBhbiBhcnJheSBvZiBzdGF0dXMgY29uZmlndXJhdGlvbnMgdG8gY29udHJvbCBtZW51IGl0ZW0gaWNvbnNcbiAqIEBwYXJhbSB7Kn0gW2hlYWRlcj1udWxsXSAtIGEgY29tcG9uZW50IHRvIGRpc3BsYXkgYXMgdGhlIG1lbnUgaGVhZGVyXG4gKiBAcGFyYW0geyp9IFtoZWlnaHQ9XCJhdXRvXCJdIC0gdGhlIGhlaWdodCBvZiB0aGUgbWVudVxuICogQHBhcmFtIHsqfSBbd2lkdGg9MjUwXSAtIHRoZSB3aWR0aCBvZiB0aGUgbWVudVxuICogQHBhcmFtIHtib29sZWFufSBbYXV0b1NlbGVjdD10cnVlXSAtIGNvbnRyb2xzIHdoZXRoZXIgb3Igbm90IG9wZW5pbmcgYSBncm91cCB3aWxsIGF1dG9tYXRpY2FsbHkgc2VsZWN0IHRoZSBmaXJzdCBjaGlsZFxuICogQHBhcmFtIHtib29sZWFufSBbYXV0b1Njcm9sbD10cnVlXSAtIGNvbnRyb2xzIHdoZXRoZXIgb3Igbm90IHRoZSBtZW51IHdpbGwgYXV0b21hdGljYWxseSBzY3JvbGwgdG8gdGhlIGFjdGl2ZSBpdGVtXG4gKiBAcGFyYW0ge3N0cmluZ30gW2VtcHR5Tm90aWNlPVwiXCJdIC0gYW4gb3B0aW9uYWwgbWVzc2FnZSB0byBkaXNwbGF5IHdoZW4gdGhlIG1lbnUgaXMgZW1wdHlcbiAqL1xuY2xhc3MgTWVudSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIG1lbnVSZWYgPSBSZWFjdC5jcmVhdGVSZWYoKTtcbiAgc2VsZWN0ZWRHcm91cFJlZiA9IFJlYWN0LmNyZWF0ZVJlZigpO1xuICBzZWxlY3RlZEl0ZW1SZWYgPSBSZWFjdC5jcmVhdGVSZWYoKTtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICBsZXQgYXV0b09wZW4gPSBudWxsO1xuXG4gICAgLy8gVFJJQ0tZOiBzdGFydCB3aXRoIHRoZSBjb250cm9sbGVkIGdyb3VwIG9wZW5cbiAgICBjb25zdCB7IGFjdGl2ZSwgYXV0b1NlbGVjdCB9ID0gcHJvcHM7XG5cbiAgICBpZiAoYWN0aXZlICYmIGF1dG9TZWxlY3QpIHtcbiAgICAgIGF1dG9PcGVuID0gYWN0aXZlLmdyb3VwSWQ7XG4gICAgfVxuXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIG9wZW5lZDogYXV0b09wZW4sXG4gICAgICBhY3RpdmU6IG51bGwsXG4gICAgfTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGNvbnN0IHsgb3BlbmVkIH0gPSB0aGlzLnN0YXRlO1xuICAgIGNvbnN0IHsgYXV0b1Njcm9sbCB9ID0gdGhpcy5wcm9wcztcblxuICAgIC8vIHNjcm9sbCB0byB0aGUgc2VsZWN0aW9uXG4gICAgaWYgKGF1dG9TY3JvbGwgJiYgb3BlbmVkKSB7XG4gICAgICB0aGlzLnNjcm9sbFRvU2VsZWN0ZWRJdGVtKCk7XG4gICAgfSBlbHNlIGlmIChhdXRvU2Nyb2xsKSB7XG4gICAgICB0aGlzLnNjcm9sbFRvU2VsZWN0ZWRHcm91cCgpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKiBAcGFyYW0gcHJldlByb3BzXG4gICAqIEBwYXJhbSBwcmV2U3RhdGVcbiAgICogQHBhcmFtIG5leHRDb250ZW50XG4gICAqL1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcbiAgY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wcywgcHJldlN0YXRlLCBuZXh0Q29udGVudCkge1xuICAgIGNvbnN0IHsgb3BlbmVkIH0gPSB0aGlzLnN0YXRlO1xuICAgIGNvbnN0IHsgYXV0b1Njcm9sbCB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCBwcmV2QWN0aXZlID0gcHJldlByb3BzLmFjdGl2ZSA/IHByZXZQcm9wcy5hY3RpdmUgOiBwcmV2U3RhdGUuYWN0aXZlO1xuICAgIGNvbnN0IGFjdGl2ZSA9IHRoaXMuZ2V0QWN0aXZlKCk7XG5cbiAgICBpZiAoXG4gICAgICBhY3RpdmUgJiZcbiAgICAgIHByZXZBY3RpdmUgJiZcbiAgICAgIHByZXZBY3RpdmUuZ3JvdXBJZCAhPT0gYWN0aXZlLmdyb3VwSWQgJiZcbiAgICAgIGFjdGl2ZS5ncm91cElkICE9PSBvcGVuZWRcbiAgICApIHtcbiAgICAgIC8vIG9wZW4gdGhlIGFjdGl2ZSBncm91cCBpZiBpdCB3YXMgY2hhbmdlZCBleHRlcm5hbGx5XG4gICAgICB0aGlzLnNldFN0YXRlKHsgb3BlbmVkOiBhY3RpdmUuZ3JvdXBJZCB9KTtcbiAgICB9IGVsc2UgaWYgKGF1dG9TY3JvbGwgJiYgdGhpcy5zdGF0ZS5vcGVuZWQpIHtcbiAgICAgIC8vIHNjcm9sbCB0byB0aGUgY3VycmVudCBzZWxlY3Rpb25cbiAgICAgIHRoaXMuc2Nyb2xsVG9TZWxlY3RlZEl0ZW0oKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogU2Nyb2xscyB0aGUgc2VsZWN0ZWQgZ3JvdXAgaW50byB2aWV3XG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gW2luc3RhbnQ9dHJ1ZV0gLSBtYWtlcyB0aGUgc2Nyb2xsIGV4ZWN1dGUgaW5zdGFudGx5LlxuICAgKi9cbiAgc2Nyb2xsVG9TZWxlY3RlZEdyb3VwID0gKGluc3RhbnQgPSB0cnVlKSA9PiB7XG4gICAgdGhpcy5zY3JvbGxJbnRvVmlldyh0aGlzLnNlbGVjdGVkR3JvdXBSZWYsIGluc3RhbnQpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBTY3JvbGxzIHRoZSBzZWxlY3RlZCBpdGVtIGludG8gdmlld1xuICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtpbnN0YW50PXRydWVdIC0gbWFrZXMgdGhlIHNjcm9sbCBleGVjdXRlIGluc3RhbnRseS5cbiAgICovXG4gIHNjcm9sbFRvU2VsZWN0ZWRJdGVtID0gKGluc3RhbnQgPSB0cnVlKSA9PiB7XG4gICAgdGhpcy5zY3JvbGxJbnRvVmlldyh0aGlzLnNlbGVjdGVkSXRlbVJlZiwgaW5zdGFudCk7XG4gIH07XG5cbiAgLyoqXG4gICAqIFNjcm9sbHMgYSByZWYgaW50byB2aWV3XG4gICAqIEBwYXJhbSByZWZcbiAgICogQHBhcmFtIHtib29sZWFufSBbaW5zdGFudD10cnVlXSAtIG1ha2VzIHRoZSBzY3JvbGwgZXhlY3V0ZSBpbnN0YW50bHlcbiAgICovXG4gIHNjcm9sbEludG9WaWV3ID0gKHJlZiwgaW5zdGFudCA9IHRydWUpID0+IHtcbiAgICBpZiAoXG4gICAgICByZWYgJiZcbiAgICAgIHJlZi5zY3JvbGxJbnRvVmlldyAmJlxuICAgICAgIXRoaXMuaXNSZWZJblZpZXcocmVmKVxuICAgICkge1xuICAgICAgcmVmLnNjcm9sbEludG9WaWV3KHtcbiAgICAgICAgYmxvY2s6ICdjZW50ZXInLFxuICAgICAgICBiZWhhdmlvcjogaW5zdGFudCA/ICdpbnN0YW50JyA6ICdzbW9vdGgnLFxuICAgICAgfSk7XG4gICAgfVxuICB9O1xuXG4gIC8qKlxuICAgKiBDaGVja3MgaWYgYSBkb20gcmVjdCBpcyB3aXRoaW4gYW5vdGhlclxuICAgKiBAcGFyYW0gcmVmIC0gYSByZWFjdCByZWZcbiAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAqL1xuICBpc1JlZkluVmlldyA9IChyZWYpID0+IHtcbiAgICBpZiAocmVmICYmIHJlZi5nZXRCb3VuZGluZ0NsaWVudFJlY3QgJiYgdGhpcy5tZW51UmVmICYmXG4gICAgICB0aGlzLm1lbnVSZWYuY3VycmVudCAmJiB0aGlzLm1lbnVSZWYuY3VycmVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QpIHtcbiAgICAgIGNvbnN0IHJlY3QgPSByZWYuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICBjb25zdCBtZW51UmVjdCA9IHRoaXMubWVudVJlZi5jdXJyZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgcmV0dXJuIHJlY3QudG9wID49IG1lbnVSZWN0LnRvcCAmJiByZWN0LmJvdHRvbSA8PSBtZW51UmVjdC5ib3R0b207XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIEFwcGxpZXMgZGVmYXVsdCBrZXkgdmFsdWVzIHRvIHRoZSBzdGF0dXMgaWNvbnMuXG4gICAqIFRoaXMgcHJlcGFyZXMgc3RhdHVzIGljb25zIGZvciB1c2UgaW4gdGhlIG1lbnUuXG4gICAqIEBwYXJhbSB7b2JqZWN0W119IHN0YXR1c0ljb25zIC0gYW4gYXJyYXkgb2Ygc3RhdHVzIGljb24gb2JqZWN0c1xuICAgKiBAcmV0dXJucyB7b2JqZWN0W119IC0gYW4gYXJyYXkgb2Ygbm9ybWFsaXplZCBzdGF0dXMgaWNvbiBvYmplY3RzLlxuICAgKi9cbiAgbm9ybWFsaXplU3RhdHVzSWNvbnMgPSBtZW1vaXplKHN0YXR1c0ljb25zID0+IHtcbiAgICBjb25zdCBub3JtYWxpemVkID0gW107XG5cbiAgICBmb3IgKGxldCBpID0gMCwgbGVuID0gc3RhdHVzSWNvbnMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgIGNvbnN0IGljb24gPSBPYmplY3QuYXNzaWduKHt9LCB7IHZhbHVlOiB0cnVlIH0sIHN0YXR1c0ljb25zW2ldKTtcbiAgICAgIG5vcm1hbGl6ZWQucHVzaChpY29uKTtcbiAgICB9XG4gICAgcmV0dXJuIG5vcm1hbGl6ZWQ7XG4gIH0pO1xuXG4gIC8qKlxuICAgKiBIYW5kbGVzIG9wZW5pbmcgYSBncm91cCB3aXRoaW4gdGhlIG1lbnUuXG4gICAqIElmIGF1dG8gc2VsZWN0ZWQgaXMgZW5hYmxlZCB0aGlzIHdpbGwgYWxzbyBzZWxlY3QgdGhlIGZpcnN0IGNoaWxkXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBncm91cCAtIHRoZSBncm91cCBiZWluZyBvcGVuZWRcbiAgICovXG4gIGhhbmRsZU9wZW4gPSBncm91cCA9PiAoKSA9PiB7XG4gICAgY29uc3QgeyBhdXRvU2VsZWN0IH0gPSB0aGlzLnByb3BzO1xuXG4gICAgaWYgKHRoaXMuc3RhdGUub3BlbmVkID09PSBncm91cC5pZCkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IG9wZW5lZDogLTEgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBvcGVuZWQ6IGdyb3VwLmlkIH0pO1xuXG4gICAgICAvLyBhdXRvIHNlbGVjdCBuZXdseSBvcGVuZWQgZ3JvdXBzIGlmIG5vdCBjb250cm9sbGVkIGVsc2V3aGVyZVxuICAgICAgY29uc3QgZmlyc3RDaGlsZCA9IGdyb3VwLmNoaWxkcmVuWzBdO1xuXG4gICAgICBpZiAoYXV0b1NlbGVjdCAmJiBmaXJzdENoaWxkICYmICF0aGlzLmlzR3JvdXBTZWxlY3RlZChncm91cCkpIHtcbiAgICAgICAgdGhpcy5oYW5kbGVDbGljayhmaXJzdENoaWxkKSgpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICAvKipcbiAgICogSGFuZGxlcyBtZW51IGl0ZW0gY2xpY2tzLlxuICAgKiBJZiB0aGUgYWN0aXZlIG1lbnUgaXRlbSBpcyBjb250cm9sbGVkIGV4dGVybmFsbHkgdGhpcyB3aWxsIGRlZmVyIGNvbnRyb2wgdG8gdGhlIHBhcmVudFxuICAgKiBvdGhlcndpc2UgbWVudSBzZWxlY3Rpb25zIHdpbGwgYmUgbWFuYWdlZCBpbnRlcm5hbGx5LlxuICAgKiBAcGFyYW0ge29iamVjdH0gaXRlbSAtIHRoZSBjbGlja2VkIG1lbnUgaXRlbSBvYmplY3RcbiAgICovXG4gIGhhbmRsZUNsaWNrID0gaXRlbSA9PiAoKSA9PiB7XG4gICAgY29uc3QgeyBvbkl0ZW1DbGljaywgYWN0aXZlIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgaWYgKHR5cGVvZiBvbkl0ZW1DbGljayA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgb25JdGVtQ2xpY2soaXRlbSk7XG4gICAgfVxuXG4gICAgLy8gc2tpcCBpbnRlcm5hbCBzdGF0ZSBpZiBtYW5hZ2VkIGV4dGVybmFsbHkuXG4gICAgaWYgKCFhY3RpdmUpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBhY3RpdmU6IGl0ZW0gfSk7XG4gICAgfVxuICB9O1xuXG4gIC8qKlxuICAgKiBDaGVja3MgaWYgYSBncm91cCBpcyBvcGVuZWRcbiAgICogQHBhcmFtIHtvYmplY3R9IGdyb3VwIC0gdGhlIG1lbnUgZ3JvdXBcbiAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAqL1xuICBpc0dyb3VwT3BlbiA9IGdyb3VwID0+IHRoaXMuc3RhdGUub3BlbmVkID09PSBncm91cC5pZDtcblxuICAvKipcbiAgICogQ2hlY2tzIGlmIGEgZ3JvdXAgaXMgc2VsZWN0ZWRcbiAgICogQHBhcmFtIHtvYmplY3R9IGdyb3VwIC0gdGhlIG1lbnUgZ3JvdXBcbiAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAqL1xuICBpc0dyb3VwU2VsZWN0ZWQgPSBncm91cCA9PiB7XG4gICAgY29uc3QgYWN0aXZlID0gdGhpcy5nZXRBY3RpdmUoKTtcbiAgICByZXR1cm4gYWN0aXZlICYmIGdyb3VwLmlkID09PSBhY3RpdmUuZ3JvdXBJZDtcbiAgfTtcblxuICAvKipcbiAgICogQ2hlY2tzIGlmIGEgbWVudSBpdGVtIGlzIHNlbGVjdGVkXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBpdGVtIC0gdGhlIG1lbnUgaXRlbVxuICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICovXG4gIGlzSXRlbVNlbGVjdGVkID0gaXRlbSA9PiB7XG4gICAgY29uc3QgYWN0aXZlSXRlbSA9IHRoaXMuZ2V0QWN0aXZlKCk7XG4gICAgY29uc3Qge1xuICAgICAgZ3JvdXBJZCxcbiAgICAgIGl0ZW1JZCxcbiAgICB9ID0gaXRlbTtcbiAgICByZXR1cm4gKFxuICAgICAgYWN0aXZlSXRlbSAmJlxuICAgICAgYWN0aXZlSXRlbS5ncm91cElkID09PSBncm91cElkICYmXG4gICAgICBhY3RpdmVJdGVtLml0ZW1JZCA9PT0gaXRlbUlkXG4gICAgKTtcbiAgfTtcblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgYWN0aXZlIGNvbnRleHQuXG4gICAqIElmIHRoZSBhY3RpdmUgaXRlbSBpcyBjb250cm9sbGVkIGV4dGVybmFsbHkgaXQgd2lsbCB0YWtlIHByZWNlZGVuY2UuXG4gICAqIEByZXR1cm5zIHtvYmplY3R8bnVsbH1cbiAgICovXG4gIGdldEFjdGl2ZSA9ICgpID0+IHRoaXMucHJvcHMuYWN0aXZlID8gdGhpcy5wcm9wcy5hY3RpdmUgOiB0aGlzLnN0YXRlLmFjdGl2ZTtcblxuICAvKipcbiAgICogQ29sbGVjdHMgdGhlIHJlYWN0IHJlZiB0byB0aGUgZ3JvdXAuXG4gICAqIFRoaXMgZGV0ZXJtaW5lcyBpZiB0aGUgZ3JvdXAgaXMgc2VsZWN0ZWQgYW5kIHN0b3JlcyBpdCdzIHJlZlxuICAgKiBAcGFyYW0ge29iamVjdH0gZ3JvdXAgLSB0aGUgbWVudSBncm91cFxuICAgKi9cbiAgaGFuZGxlR3JvdXBSZWYgPSBncm91cCA9PiByZWYgPT4ge1xuICAgIGlmICh0aGlzLmlzR3JvdXBTZWxlY3RlZChncm91cCkpIHtcbiAgICAgIHRoaXMuc2VsZWN0ZWRHcm91cFJlZiA9IHJlZjtcbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIENvbGxlY3RzIHRoZSByZWFjdCByZWYgdG8gdGhlIGl0ZW0uXG4gICAqIFRoaXMgZGV0ZXJtaW5lcyBpZiB0aGUgbWVudSBpdGVtIGlzIHNlbGVjdGVkIGFuZCBzdG9yZXMgaXQncyByZWZcbiAgICogQHBhcmFtIHtvYmplY3R9IGl0ZW0gLSB0aGUgbWVudSBpdGVtXG4gICAqL1xuICBoYW5kbGVJdGVtUmVmID0gaXRlbSA9PiByZWYgPT4ge1xuICAgIGlmICh0aGlzLmlzSXRlbVNlbGVjdGVkKGl0ZW0pKSB7XG4gICAgICB0aGlzLnNlbGVjdGVkSXRlbVJlZiA9IHJlZjtcbiAgICB9XG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIGNsYXNzZXMsXG4gICAgICBoZWFkZXIsXG4gICAgICBoZWlnaHQsXG4gICAgICB3aWR0aCxcbiAgICAgIGVudHJpZXMsXG4gICAgICBzdGF0dXNJY29ucyxcbiAgICAgIGVtcHR5Tm90aWNlLFxuICAgICAgdGFyZ2V0TGFuZ3VhZ2VGb250LFxuICAgIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IG5vcm1hbGl6ZWRTdGF0dXNJY29ucyA9IHRoaXMubm9ybWFsaXplU3RhdHVzSWNvbnMoc3RhdHVzSWNvbnMpO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxNdWlUaGVtZVByb3ZpZGVyIHRoZW1lPXt0aGVtZX0+XG4gICAgICAgIDxSb290UmVmIHJvb3RSZWY9e3RoaXMubWVudVJlZn0+XG4gICAgICAgICAgPExpc3RcbiAgICAgICAgICAgIGNvbXBvbmVudD1cIm5hdlwiXG4gICAgICAgICAgICBzdWJoZWFkZXI9e2hlYWRlcn1cbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fVxuICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgaGVpZ2h0LCB3aWR0aCwgbWluV2lkdGg6IHdpZHRoLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7ZW50cmllcy5tYXAoKGdyb3VwLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICA8Um9vdFJlZiBrZXk9e2luZGV4fSByb290UmVmPXt0aGlzLmhhbmRsZUdyb3VwUmVmKGdyb3VwKX0+XG4gICAgICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgICAgICAgPE1lbnVHcm91cFxuICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZD17dGhpcy5pc0dyb3VwU2VsZWN0ZWQoZ3JvdXApfVxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZU9wZW4oZ3JvdXApfVxuICAgICAgICAgICAgICAgICAgICBwcm9ncmVzcz17Z3JvdXAucHJvZ3Jlc3N9XG4gICAgICAgICAgICAgICAgICAgIG9wZW49e3RoaXMuaXNHcm91cE9wZW4oZ3JvdXApfVxuICAgICAgICAgICAgICAgICAgICBsYWJlbD17Z3JvdXAudGl0bGV9XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAge3RoaXMuaXNHcm91cE9wZW4oZ3JvdXApID8gKFxuICAgICAgICAgICAgICAgICAgICA8TGlzdCBjb21wb25lbnQ9XCJkaXZcIiBkaXNhYmxlUGFkZGluZz5cbiAgICAgICAgICAgICAgICAgICAgICB7Z3JvdXAuY2hpbGRyZW4ubWFwKChpdGVtLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPFJvb3RSZWYga2V5PXtpbmRleH0gcm9vdFJlZj17dGhpcy5oYW5kbGVJdGVtUmVmKGl0ZW0pfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnVJdGVtXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdHVzPXtpdGVtfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkPXt0aGlzLmlzSXRlbVNlbGVjdGVkKGl0ZW0pfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXR1c0ljb25zPXtub3JtYWxpemVkU3RhdHVzSWNvbnN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5oYW5kbGVDbGljayhpdGVtKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b29sdGlwPXtpdGVtLnRvb2x0aXAgPyBpdGVtLnRvb2x0aXAgOiBpdGVtLnRpdGxlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPXtpdGVtLnRpdGxlfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldExhbmd1YWdlRm9udD17dGFyZ2V0TGFuZ3VhZ2VGb250fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Sb290UmVmPlxuICAgICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgICAgICA8L0xpc3Q+XG4gICAgICAgICAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICAgICA8L1Jvb3RSZWY+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDxFbXB0eUl0ZW0ga2V5PVwiZW1wdHlcIiBsYWJlbD17ZW1wdHlOb3RpY2V9XG4gICAgICAgICAgICAgIGVuYWJsZWQ9e2VudHJpZXMubGVuZ3RoID09PSAwfS8+XG4gICAgICAgICAgPC9MaXN0PlxuICAgICAgICA8L1Jvb3RSZWY+XG4gICAgICA8L011aVRoZW1lUHJvdmlkZXI+XG4gICAgKTtcbiAgfVxufVxuXG5NZW51LnByb3BUeXBlcyA9IHtcbiAgY2xhc3NlczogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuICBlbnRyaWVzOiBQcm9wVHlwZXMuYXJyYXksXG4gIGFjdGl2ZTogUHJvcFR5cGVzLm9iamVjdCxcbiAgaGVhZGVyOiBQcm9wVHlwZXMuZWxlbWVudCxcbiAgaGVpZ2h0OiBQcm9wVHlwZXMuYW55LFxuICBvbkl0ZW1DbGljazogUHJvcFR5cGVzLmZ1bmMsXG4gIHdpZHRoOiBQcm9wVHlwZXMubnVtYmVyLFxuICBzdGF0dXNJY29uczogUHJvcFR5cGVzLmFycmF5LFxuICBlbXB0eU5vdGljZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgYXV0b1NlbGVjdDogUHJvcFR5cGVzLmJvb2wsXG4gIGF1dG9TY3JvbGw6IFByb3BUeXBlcy5ib29sLFxuICB0YXJnZXRMYW5ndWFnZUZvbnQ6IFByb3BUeXBlcy5zdHJpbmcsXG59O1xuXG5NZW51LmRlZmF1bHRQcm9wcyA9IHtcbiAgYWN0aXZlOiBudWxsLFxuICBoZWlnaHQ6ICdhdXRvJyxcbiAgZW50cmllczogW10sXG4gIHdpZHRoOiAyNTAsXG4gIGVtcHR5Tm90aWNlOiAnJyxcbiAgYXV0b1NlbGVjdDogdHJ1ZSxcbiAgYXV0b1Njcm9sbDogdHJ1ZSxcbiAgc3RhdHVzSWNvbnM6IFtdLFxufTtcblxuTWVudS5tdWlOYW1lID0gJ0xpc3QnO1xuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGVzKHN0eWxlcykoTWVudSk7XG4iXX0=