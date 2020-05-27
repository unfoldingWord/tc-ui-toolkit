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

var _List = _interopRequireDefault(require("@material-ui/core/List"));

var _Collapse = _interopRequireDefault(require("@material-ui/core/Collapse"));

var _ListItem = _interopRequireDefault(require("@material-ui/core/ListItem"));

var _ListSubheader = _interopRequireDefault(require("@material-ui/core/ListSubheader"));

var _ListItemIcon = _interopRequireDefault(require("@material-ui/core/ListItemIcon"));

var _Divider = _interopRequireDefault(require("@material-ui/core/Divider"));

var _CheckBoxOutlineBlank = _interopRequireDefault(require("@material-ui/icons/CheckBoxOutlineBlank"));

var _CheckBox = _interopRequireDefault(require("@material-ui/icons/CheckBox"));

var _ListItemText = _interopRequireDefault(require("@material-ui/core/ListItemText"));

var _Chip = _interopRequireDefault(require("@material-ui/core/Chip"));

var _MenuFilterIcon = _interopRequireDefault(require("./MenuFilterIcon"));

var styles = function styles() {
  return {
    root: {
      backgroundColor: '#19579E',
      zIndex: 10,
      color: '#FFFFFF',
      paddingTop: 5,
      paddingBottom: 5
    },
    filterItemRoot: {
      paddingTop: 4,
      paddingBottom: 4,
      minHeight: 'auto'
    },
    divider: {
      borderBottom: 'solid 1px #FFFFFF9e'
    },
    text: {
      color: '#FFFFFF',
      fontWeight: 'bold',
      fontSize: 16
    },
    filterText: {
      color: '#FFFFFF',
      fontWeight: 700,
      fontSize: 14
    },
    checkbox: {
      color: '#FFFFFF'
    },
    chip: {
      color: '#19579E',
      margin: 5
    },
    chipLabel: {
      fontSize: 12,
      fontWeight: 'bold'
    },
    chipDeleteIcon: {
      'color': '#19579E99',
      '&:hover': {
        color: '#19579E'
      }
    },
    hover: {}
  };
};
/**
 * A list of filter controls
 * @param {object[]} filters - an array of filters
 * @param {function} onToggle - callback to receive filter events
 * @param {string} [title] - the menu title
 * @param {object[]} [selected] - an array of selected filters
 *
 */


var MenuFilter = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2["default"])(MenuFilter, _React$Component);

  function MenuFilter() {
    var _getPrototypeOf2;

    var _this;

    (0, _classCallCheck2["default"])(this, MenuFilter);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = (0, _possibleConstructorReturn2["default"])(this, (_getPrototypeOf2 = (0, _getPrototypeOf3["default"])(MenuFilter)).call.apply(_getPrototypeOf2, [this].concat(args)));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "state", {
      open: false
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleOpen", function () {
      _this.setState(function (state) {
        return {
          open: !state.open
        };
      });
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleToggle", function (filter) {
      return function () {
        var onToggle = _this.props.onToggle;
        onToggle(filter);
      };
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "isChecked", function (filter) {
      var selected = _this.props.selected;

      for (var i = 0, len = selected.length; i < len; i++) {
        if (selected[i].id === filter.id) {
          return true;
        }
      }

      return false;
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "isEnabled", function (filter) {
      var selected = _this.props.selected;
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = selected[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var f = _step.value;

          if (f.disables.indexOf(filter.id) >= 0) {
            return false;
          }
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator["return"] != null) {
            _iterator["return"]();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      return true;
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "getOrder", function (filter) {
      if (!(filter.order > 0)) {
        // if order not defined or invalid, set it
        var filters = _this.props.filters;
        filter.order = -1;

        for (var i = 0, l = filters.length; i < l; i++) {
          var f = filters[i];

          if (f.id === filter.id) {
            filter.order = i + 1; // cache order of filter

            break;
          }
        }
      }

      return filter.order;
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "getChip", function (filter, classes) {
      return _react["default"].createElement("td", {
        key: 'chip_td_' + filter.id
      }, _react["default"].createElement(_Chip["default"], {
        key: filter.id,
        label: filter.label,
        classes: {
          deleteIcon: classes.chipDeleteIcon,
          label: classes.chipLabel
        },
        onDelete: _this.handleToggle(filter),
        className: classes.chip
      }));
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "getRow", function (selected, start, count, classes) {
      var chips = [];

      for (var i = start, l = selected.length; i < l && i < start + count; i++) {
        chips.push(_this.getChip(selected[i], classes));
      }

      return _react["default"].createElement("tr", {
        key: 'chip_tr_' + start
      }, chips);
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "getChips", function (selected, classes) {
      if (selected && selected.length) {
        var sortedSelected = selected.sort(function (a, b) {
          return _this.getOrder(a) - _this.getOrder(b);
        });
        var rows = [];
        var columns = 2;

        for (var i = 0, l = sortedSelected.length; i < l; i += columns) {
          rows.push(_this.getRow(selected, i, columns, classes));
        }

        return _react["default"].createElement("table", null, _react["default"].createElement("tbody", null, rows));
      }
    });
    return _this;
  }

  (0, _createClass2["default"])(MenuFilter, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          selected = _this$props.selected,
          classes = _this$props.classes,
          filters = _this$props.filters,
          title = _this$props.title;
      var open = this.state.open;
      var filterCount = open ? 0 : selected.length;
      return _react["default"].createElement(_ListSubheader["default"], {
        disableGutters: true,
        className: classes.root
      }, _react["default"].createElement(_ListItem["default"], {
        button: true,
        className: classes.header,
        onClick: this.handleOpen
      }, _react["default"].createElement(_ListItemText["default"], {
        classes: {
          primary: classes.text
        },
        primary: title
      }), _react["default"].createElement(_MenuFilterIcon["default"], {
        enabledFilterCount: filterCount,
        open: open
      })), _react["default"].createElement(_Collapse["default"], {
        "in": !open && selected.length > 0,
        timeout: "auto",
        unmountOnExit: true
      }, _react["default"].createElement(_Divider["default"], {
        variant: "middle",
        classes: {
          middle: classes.divider
        }
      }), _react["default"].createElement("div", null, this.getChips(selected, classes))), _react["default"].createElement(_Collapse["default"], {
        "in": open,
        timeout: "auto",
        unmountOnExit: true
      }, _react["default"].createElement(_Divider["default"], {
        variant: "middle",
        classes: {
          middle: classes.divider
        }
      }), _react["default"].createElement(_List["default"], {
        component: "div",
        disablePadding: true
      }, filters.map(function (item, index) {
        return _react["default"].createElement(_ListItem["default"], {
          key: index,
          button: true,
          classes: {
            root: classes.filterItemRoot
          },
          disabled: !_this2.isEnabled(item),
          onClick: _this2.handleToggle(item)
        }, _react["default"].createElement(_ListItemIcon["default"], null, _this2.isChecked(item) ? _react["default"].createElement(_CheckBox["default"], {
          className: classes.checkbox
        }) : _react["default"].createElement(_CheckBoxOutlineBlank["default"], {
          className: classes.checkbox
        })), item.icon ? _react["default"].cloneElement(item.icon, {
          style: {
            color: '#ffffff'
          }
        }) : null, _react["default"].createElement(_ListItemText["default"], {
          classes: {
            primary: classes.filterText
          },
          primary: item.label
        }));
      }))));
    }
  }]);
  return MenuFilter;
}(_react["default"].Component);

MenuFilter.propTypes = {
  classes: _propTypes["default"].object.isRequired,
  filters: _propTypes["default"].array.isRequired,
  onToggle: _propTypes["default"].func.isRequired,
  title: _propTypes["default"].string,
  selected: _propTypes["default"].arrayOf(_propTypes["default"].object)
};
MenuFilter.defaultProps = {
  selected: []
};

var _default = (0, _styles.withStyles)(styles)(MenuFilter);

exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9Hcm91cGVkTWVudS9GaWx0ZXJlZE1lbnUvTWVudUZpbHRlci5qcyJdLCJuYW1lcyI6WyJzdHlsZXMiLCJyb290IiwiYmFja2dyb3VuZENvbG9yIiwiekluZGV4IiwiY29sb3IiLCJwYWRkaW5nVG9wIiwicGFkZGluZ0JvdHRvbSIsImZpbHRlckl0ZW1Sb290IiwibWluSGVpZ2h0IiwiZGl2aWRlciIsImJvcmRlckJvdHRvbSIsInRleHQiLCJmb250V2VpZ2h0IiwiZm9udFNpemUiLCJmaWx0ZXJUZXh0IiwiY2hlY2tib3giLCJjaGlwIiwibWFyZ2luIiwiY2hpcExhYmVsIiwiY2hpcERlbGV0ZUljb24iLCJob3ZlciIsIk1lbnVGaWx0ZXIiLCJvcGVuIiwic2V0U3RhdGUiLCJzdGF0ZSIsImZpbHRlciIsIm9uVG9nZ2xlIiwicHJvcHMiLCJzZWxlY3RlZCIsImkiLCJsZW4iLCJsZW5ndGgiLCJpZCIsImYiLCJkaXNhYmxlcyIsImluZGV4T2YiLCJvcmRlciIsImZpbHRlcnMiLCJsIiwiY2xhc3NlcyIsImxhYmVsIiwiZGVsZXRlSWNvbiIsImhhbmRsZVRvZ2dsZSIsInN0YXJ0IiwiY291bnQiLCJjaGlwcyIsInB1c2giLCJnZXRDaGlwIiwic29ydGVkU2VsZWN0ZWQiLCJzb3J0IiwiYSIsImIiLCJnZXRPcmRlciIsInJvd3MiLCJjb2x1bW5zIiwiZ2V0Um93IiwidGl0bGUiLCJmaWx0ZXJDb3VudCIsImhlYWRlciIsImhhbmRsZU9wZW4iLCJwcmltYXJ5IiwibWlkZGxlIiwiZ2V0Q2hpcHMiLCJtYXAiLCJpdGVtIiwiaW5kZXgiLCJpc0VuYWJsZWQiLCJpc0NoZWNrZWQiLCJpY29uIiwiUmVhY3QiLCJjbG9uZUVsZW1lbnQiLCJzdHlsZSIsIkNvbXBvbmVudCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsIm9iamVjdCIsImlzUmVxdWlyZWQiLCJhcnJheSIsImZ1bmMiLCJzdHJpbmciLCJhcnJheU9mIiwiZGVmYXVsdFByb3BzIl0s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QVgsRUFBbUJxQixVQUFuQixDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyB3aXRoU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcbmltcG9ydCBMaXN0IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0xpc3QnO1xuaW1wb3J0IENvbGxhcHNlIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NvbGxhcHNlJztcbmltcG9ydCBMaXN0SXRlbSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9MaXN0SXRlbSc7XG5pbXBvcnQgTGlzdFN1YmhlYWRlciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9MaXN0U3ViaGVhZGVyJztcbmltcG9ydCBMaXN0SXRlbUljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTGlzdEl0ZW1JY29uJztcbmltcG9ydCBEaXZpZGVyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0RpdmlkZXInO1xuaW1wb3J0IENoZWNrQm94T3V0bGluZUljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0NoZWNrQm94T3V0bGluZUJsYW5rJztcbmltcG9ydCBDaGVja0JveEljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0NoZWNrQm94JztcbmltcG9ydCBMaXN0SXRlbVRleHQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTGlzdEl0ZW1UZXh0JztcbmltcG9ydCBDaGlwIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NoaXAnO1xuaW1wb3J0IE1lbnVGaWx0ZXJJY29uIGZyb20gJy4vTWVudUZpbHRlckljb24nO1xuXG5jb25zdCBzdHlsZXMgPSAoKSA9PiAoe1xuICByb290OiB7XG4gICAgYmFja2dyb3VuZENvbG9yOiAnIzE5NTc5RScsXG4gICAgekluZGV4OiAxMCxcbiAgICBjb2xvcjogJyNGRkZGRkYnLFxuICAgIHBhZGRpbmdUb3A6IDUsXG4gICAgcGFkZGluZ0JvdHRvbTogNSxcbiAgfSxcbiAgZmlsdGVySXRlbVJvb3Q6IHtcbiAgICBwYWRkaW5nVG9wOiA0LFxuICAgIHBhZGRpbmdCb3R0b206IDQsXG4gICAgbWluSGVpZ2h0OiAnYXV0bycsXG4gIH0sXG4gIGRpdmlkZXI6IHsgYm9yZGVyQm90dG9tOiAnc29saWQgMXB4ICNGRkZGRkY5ZScgfSxcbiAgdGV4dDoge1xuICAgIGNvbG9yOiAnI0ZGRkZGRicsXG4gICAgZm9udFdlaWdodDogJ2JvbGQnLFxuICAgIGZvbnRTaXplOiAxNixcbiAgfSxcbiAgZmlsdGVyVGV4dDoge1xuICAgIGNvbG9yOiAnI0ZGRkZGRicsXG4gICAgZm9udFdlaWdodDogNzAwLFxuICAgIGZvbnRTaXplOiAxNCxcbiAgfSxcbiAgY2hlY2tib3g6IHsgY29sb3I6ICcjRkZGRkZGJyB9LFxuICBjaGlwOiB7XG4gICAgY29sb3I6ICcjMTk1NzlFJyxcbiAgICBtYXJnaW46IDUsXG4gIH0sXG4gIGNoaXBMYWJlbDoge1xuICAgIGZvbnRTaXplOiAxMixcbiAgICBmb250V2VpZ2h0OiAnYm9sZCcsXG4gIH0sXG4gIGNoaXBEZWxldGVJY29uOiB7XG4gICAgJ2NvbG9yJzogJyMxOTU3OUU5OScsXG4gICAgJyY6aG92ZXInOiB7IGNvbG9yOiAnIzE5NTc5RScgfSxcbiAgfSxcbiAgaG92ZXI6IHt9LFxufSk7XG5cbi8qKlxuICogQSBsaXN0IG9mIGZpbHRlciBjb250cm9sc1xuICogQHBhcmFtIHtvYmplY3RbXX0gZmlsdGVycyAtIGFuIGFycmF5IG9mIGZpbHRlcnNcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IG9uVG9nZ2xlIC0gY2FsbGJhY2sgdG8gcmVjZWl2ZSBmaWx0ZXIgZXZlbnRzXG4gKiBAcGFyYW0ge3N0cmluZ30gW3RpdGxlXSAtIHRoZSBtZW51IHRpdGxlXG4gKiBAcGFyYW0ge29iamVjdFtdfSBbc2VsZWN0ZWRdIC0gYW4gYXJyYXkgb2Ygc2VsZWN0ZWQgZmlsdGVyc1xuICpcbiAqL1xuY2xhc3MgTWVudUZpbHRlciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIHN0YXRlID0geyBvcGVuOiBmYWxzZSB9O1xuXG4gIC8qKlxuICAgKiBIYW5kbGVzIG9wZW5pbmcgdGhlIGZpbHRlciBtZW51XG4gICAqL1xuICBoYW5kbGVPcGVuID0gKCkgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoc3RhdGUgPT4gKHsgb3BlbjogIXN0YXRlLm9wZW4gfSkpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBIYW5kbGVzIHRvZ2dsaW5nIGEgZmlsdGVyXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBmaWx0ZXIgLSB0aGUgZmlsdGVyIGJlaW5nIHRvZ2dsZWRcbiAgICovXG4gIGhhbmRsZVRvZ2dsZSA9IGZpbHRlciA9PiAoKSA9PiB7XG4gICAgY29uc3QgeyBvblRvZ2dsZSB9ID0gdGhpcy5wcm9wcztcbiAgICBvblRvZ2dsZShmaWx0ZXIpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBDaGVja3MgaWYgdGhlIGZpbHRlciBpcyBzZWxlY3RlZFxuICAgKiBAcGFyYW0ge29iamVjdH0gZmlsdGVyIC0gdGhlIGZpbHRlciBiZWluZyBpbnNwZWN0ZWRcbiAgICogQHJldHVybiB7Ym9vbGVhbn0gdHJ1ZSBpZiB0aGUgZmlsdGVyIGlzIHNlbGVjdGVkXG4gICAqL1xuICBpc0NoZWNrZWQgPSBmaWx0ZXIgPT4ge1xuICAgIGNvbnN0IHsgc2VsZWN0ZWQgfSA9IHRoaXMucHJvcHM7XG5cbiAgICBmb3IgKGxldCBpID0gMCwgbGVuID0gc2VsZWN0ZWQubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgIGlmIChzZWxlY3RlZFtpXS5pZCA9PT0gZmlsdGVyLmlkKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH07XG5cbiAgLyoqXG4gICAqIENoZWNrcyBpZiBhIGZpbHRlciBpcyBlbmFibGVkXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBmaWx0ZXIgLSB0aGUgZmlsdGVyXG4gICAqL1xuICBpc0VuYWJsZWQgPSBmaWx0ZXIgPT4ge1xuICAgIGNvbnN0IHsgc2VsZWN0ZWQgfSA9IHRoaXMucHJvcHM7XG5cbiAgICBmb3IgKGNvbnN0IGYgb2Ygc2VsZWN0ZWQpIHtcbiAgICAgIGlmIChmLmRpc2FibGVzLmluZGV4T2YoZmlsdGVyLmlkKSA+PSAwKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH07XG5cbiAgZ2V0T3JkZXIgPSBmaWx0ZXIgPT4ge1xuICAgIGlmICghKGZpbHRlci5vcmRlciA+IDApKSB7IC8vIGlmIG9yZGVyIG5vdCBkZWZpbmVkIG9yIGludmFsaWQsIHNldCBpdFxuICAgICAgY29uc3QgeyBmaWx0ZXJzIH0gPSB0aGlzLnByb3BzO1xuICAgICAgZmlsdGVyLm9yZGVyID0gLTE7XG5cbiAgICAgIGZvciAobGV0IGkgPSAwLCBsID0gZmlsdGVycy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgY29uc3QgZiA9IGZpbHRlcnNbaV07XG5cbiAgICAgICAgaWYgKGYuaWQgPT09IGZpbHRlci5pZCkge1xuICAgICAgICAgIGZpbHRlci5vcmRlciA9IGkgKyAxOyAvLyBjYWNoZSBvcmRlciBvZiBmaWx0ZXJcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZmlsdGVyLm9yZGVyO1xuICB9O1xuXG4gIC8qKlxuICAgKiBjcmVhdGUgYSBjaGlwIGluIGEgdGFibGUgZWxlbWVudFxuICAgKiBAcGFyYW0ge09iamVjdH0gZmlsdGVyIC0gdG8gY3JlYXRlIGNoaXAgZm9yXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBjbGFzc2VzIC0gdG8gYXBwbHkgdG8gZmlsdGVyXG4gICAqIEByZXR1cm4geyp9XG4gICAqL1xuICBnZXRDaGlwID0gKGZpbHRlciwgY2xhc3NlcykgPT4gKFxuICAgIDx0ZCBrZXk9eydjaGlwX3RkXycgKyBmaWx0ZXIuaWR9PlxuICAgICAgPENoaXBcbiAgICAgICAga2V5PXtmaWx0ZXIuaWR9XG4gICAgICAgIGxhYmVsPXtmaWx0ZXIubGFiZWx9XG4gICAgICAgIGNsYXNzZXM9e3tcbiAgICAgICAgICBkZWxldGVJY29uOiBjbGFzc2VzLmNoaXBEZWxldGVJY29uLFxuICAgICAgICAgIGxhYmVsOiBjbGFzc2VzLmNoaXBMYWJlbCxcbiAgICAgICAgfX1cbiAgICAgICAgb25EZWxldGU9e3RoaXMuaGFuZGxlVG9nZ2xlKGZpbHRlcil9XG4gICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5jaGlwfVxuICAgICAgLz5cbiAgICA8L3RkPik7XG5cbiAgLyoqXG4gICAqIGdldCBhIHNpbmdsZSB0YWJsZSByb3dcbiAgICogQHBhcmFtIHtBcnJheX0gc2VsZWN0ZWQgLSBhcnJheSBvZiBmaWx0ZXJzXG4gICAqIEBwYXJhbSB7TnVtYmVyfSBzdGFydCAtIGZpbHRlciBudW1iZXIgZm9yIHN0YXJ0IG9mIHJvd1xuICAgKiBAcGFyYW0ge051bWJlcn0gY291bnQgLSBudW1iZXIgb2YgaXRlbXMgaW4gYSByb3dcbiAgICogQHBhcmFtIHtPYmplY3R9IGNsYXNzZXMgLSB0byBhcHBseSB0byBmaWx0ZXJcbiAgICogQHJldHVybiB7Kn0gdGFibGUgcm93XG4gICAqL1xuICBnZXRSb3cgPSAoc2VsZWN0ZWQsIHN0YXJ0LCBjb3VudCwgY2xhc3NlcykgPT4ge1xuICAgIGNvbnN0IGNoaXBzID0gW107XG5cbiAgICBmb3IgKGxldCBpID0gc3RhcnQsIGwgPSBzZWxlY3RlZC5sZW5ndGg7IChpIDwgbCkgJiYgKGkgPCBzdGFydCArIGNvdW50KTsgaSsrKSB7XG4gICAgICBjaGlwcy5wdXNoKHRoaXMuZ2V0Q2hpcChzZWxlY3RlZFtpXSwgY2xhc3NlcykpO1xuICAgIH1cbiAgICByZXR1cm4gKCA8dHIga2V5PXsnY2hpcF90cl8nICsgc3RhcnR9PlxuICAgICAge2NoaXBzfVxuICAgIDwvdHI+ICk7XG4gIH07XG5cbiAgLyoqXG4gICAqIGdldCBhbGwgdGhlIGNoaXBzIHNvcnQgdGhlbSBhbmQgZm9ybWF0IGluIGEgdGFibGVcbiAgICogQHBhcmFtIHtBcnJheX0gc2VsZWN0ZWQgLSBhcnJheSBvZiBmaWx0ZXJzXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBjbGFzc2VzIC0gdG8gYXBwbHkgdG8gZmlsdGVyXG4gICAqIEByZXR1cm4geyp9IHRhYmxlXG4gICAqL1xuICBnZXRDaGlwcyA9IChzZWxlY3RlZCwgY2xhc3NlcykgPT4ge1xuICAgIGlmIChzZWxlY3RlZCAmJiBzZWxlY3RlZC5sZW5ndGgpIHtcbiAgICAgIGNvbnN0IHNvcnRlZFNlbGVjdGVkID0gc2VsZWN0ZWQuc29ydCgoYSwgYikgPT4gKHRoaXMuZ2V0T3JkZXIoYSkgLSB0aGlzLmdldE9yZGVyKGIpKSk7XG4gICAgICBjb25zdCByb3dzID0gW107XG4gICAgICBjb25zdCBjb2x1bW5zID0gMjtcblxuICAgICAgZm9yIChsZXQgaSA9IDAsIGwgPSBzb3J0ZWRTZWxlY3RlZC5sZW5ndGg7IGkgPCBsOyBpKz1jb2x1bW5zKSB7XG4gICAgICAgIHJvd3MucHVzaCh0aGlzLmdldFJvdyhzZWxlY3RlZCwgaSwgY29sdW1ucywgY2xhc3NlcykpO1xuICAgICAgfVxuICAgICAgcmV0dXJuICg8dGFibGU+XG4gICAgICAgIDx0Ym9keT57cm93c308L3Rib2R5PlxuICAgICAgPC90YWJsZT4pO1xuICAgIH1cbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgc2VsZWN0ZWQsIGNsYXNzZXMsIGZpbHRlcnMsIHRpdGxlLFxuICAgIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHsgb3BlbiB9ID0gdGhpcy5zdGF0ZTtcblxuICAgIGNvbnN0IGZpbHRlckNvdW50ID0gb3BlbiA/IDAgOiBzZWxlY3RlZC5sZW5ndGg7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPExpc3RTdWJoZWFkZXIgZGlzYWJsZUd1dHRlcnMgY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9PlxuICAgICAgICA8TGlzdEl0ZW0gYnV0dG9uIGNsYXNzTmFtZT17Y2xhc3Nlcy5oZWFkZXJ9IG9uQ2xpY2s9e3RoaXMuaGFuZGxlT3Blbn0+XG4gICAgICAgICAgPExpc3RJdGVtVGV4dFxuICAgICAgICAgICAgY2xhc3Nlcz17eyBwcmltYXJ5OiBjbGFzc2VzLnRleHQgfX1cbiAgICAgICAgICAgIHByaW1hcnk9e3RpdGxlfVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPE1lbnVGaWx0ZXJJY29uIGVuYWJsZWRGaWx0ZXJDb3VudD17ZmlsdGVyQ291bnR9IG9wZW49e29wZW59Lz5cbiAgICAgICAgPC9MaXN0SXRlbT5cbiAgICAgICAgPENvbGxhcHNlXG4gICAgICAgICAgaW49eyFvcGVuICYmIHNlbGVjdGVkLmxlbmd0aCA+IDB9XG4gICAgICAgICAgdGltZW91dD1cImF1dG9cIlxuICAgICAgICAgIHVubW91bnRPbkV4aXRcbiAgICAgICAgPlxuICAgICAgICAgIDxEaXZpZGVyIHZhcmlhbnQ9XCJtaWRkbGVcIiBjbGFzc2VzPXt7IG1pZGRsZTogY2xhc3Nlcy5kaXZpZGVyIH19Lz5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAge3RoaXMuZ2V0Q2hpcHMoc2VsZWN0ZWQsIGNsYXNzZXMpfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L0NvbGxhcHNlPlxuICAgICAgICA8Q29sbGFwc2UgaW49e29wZW59IHRpbWVvdXQ9XCJhdXRvXCIgdW5tb3VudE9uRXhpdD5cbiAgICAgICAgICA8RGl2aWRlciB2YXJpYW50PVwibWlkZGxlXCIgY2xhc3Nlcz17eyBtaWRkbGU6IGNsYXNzZXMuZGl2aWRlciB9fS8+XG4gICAgICAgICAgPExpc3QgY29tcG9uZW50PVwiZGl2XCIgZGlzYWJsZVBhZGRpbmc+XG4gICAgICAgICAgICB7ZmlsdGVycy5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgIDxMaXN0SXRlbVxuICAgICAgICAgICAgICAgIGtleT17aW5kZXh9XG4gICAgICAgICAgICAgICAgYnV0dG9uXG4gICAgICAgICAgICAgICAgY2xhc3Nlcz17eyByb290OiBjbGFzc2VzLmZpbHRlckl0ZW1Sb290IH19XG4gICAgICAgICAgICAgICAgZGlzYWJsZWQ9eyF0aGlzLmlzRW5hYmxlZChpdGVtKX1cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmhhbmRsZVRvZ2dsZShpdGVtKX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxMaXN0SXRlbUljb24+XG4gICAgICAgICAgICAgICAgICB7dGhpcy5pc0NoZWNrZWQoaXRlbSkgPyAoXG4gICAgICAgICAgICAgICAgICAgIDxDaGVja0JveEljb24gY2xhc3NOYW1lPXtjbGFzc2VzLmNoZWNrYm94fS8+XG4gICAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgICA8Q2hlY2tCb3hPdXRsaW5lSWNvbiBjbGFzc05hbWU9e2NsYXNzZXMuY2hlY2tib3h9Lz5cbiAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgPC9MaXN0SXRlbUljb24+XG4gICAgICAgICAgICAgICAge2l0ZW0uaWNvblxuICAgICAgICAgICAgICAgICAgPyBSZWFjdC5jbG9uZUVsZW1lbnQoaXRlbS5pY29uLCB7IHN0eWxlOiB7IGNvbG9yOiAnI2ZmZmZmZicgfSB9KVxuICAgICAgICAgICAgICAgICAgOiBudWxsfVxuICAgICAgICAgICAgICAgIDxMaXN0SXRlbVRleHRcbiAgICAgICAgICAgICAgICAgIGNsYXNzZXM9e3sgcHJpbWFyeTogY2xhc3Nlcy5maWx0ZXJUZXh0IH19XG4gICAgICAgICAgICAgICAgICBwcmltYXJ5PXtpdGVtLmxhYmVsfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvTGlzdEl0ZW0+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L0xpc3Q+XG4gICAgICAgIDwvQ29sbGFwc2U+XG4gICAgICA8L0xpc3RTdWJoZWFkZXI+XG4gICAgKTtcbiAgfVxufVxuXG5NZW51RmlsdGVyLnByb3BUeXBlcyA9IHtcbiAgY2xhc3NlczogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuICBmaWx0ZXJzOiBQcm9wVHlwZXMuYXJyYXkuaXNSZXF1aXJlZCxcbiAgb25Ub2dnbGU6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIHRpdGxlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBzZWxlY3RlZDogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLm9iamVjdCksXG59O1xuTWVudUZpbHRlci5kZWZhdWx0UHJvcHMgPSB7IHNlbGVjdGVkOiBbXSB9O1xuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGVzKHN0eWxlcykoTWVudUZpbHRlcik7XG4iXX0=