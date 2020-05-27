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

var _CircularProgress = _interopRequireDefault(require("@material-ui/core/CircularProgress"));

var _reactBootstrap = require("react-bootstrap");

var _GroupItems = _interopRequireDefault(require("../GroupItems"));

var _helpers = require("../helpers");

// components
// helpers
var Group = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2["default"])(Group, _React$Component);

  function Group(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, Group);
    _this = (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(Group).call(this, props));
    _this.activeGroupItemRef = _react["default"].createRef();
    _this.groupRef = _react["default"].createRef();
    _this.scrollToCurrentCheck = _this.scrollToCurrentCheck.bind((0, _assertThisInitialized2["default"])(_this));
    _this.onExpandClick = _this.onExpandClick.bind((0, _assertThisInitialized2["default"])(_this));
    return _this;
  }

  (0, _createClass2["default"])(Group, [{
    key: "scrollToCurrentCheck",
    value: function scrollToCurrentCheck() {
      var _this2 = this;

      // TRICKY: push scrolling onto the timing thread so the ui thread can flush out the dom
      setTimeout(function () {
        if ((0, _helpers.inView)(_this2.groupRef, _this2.activeGroupItemRef)) {
          //If the menu and current check are able to be rendered in the
          //same window scroll to the group menu item
          (0, _helpers.scrollIntoView)(_this2.groupRef);
        } else {
          //Scroll to the current check item
          (0, _helpers.scrollIntoView)(_this2.activeGroupItemRef);
        }
      }, 200);
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.props.active) {
        this.scrollToCurrentCheck();
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      var active = this.props.active;

      if (active) {
        // scroll to menu if out of view
        if (!(0, _helpers.isInViewport)(this.activeGroupItemRef)) {
          this.scrollToCurrentCheck(this.activeGroupItemRef);
        }
      }
    }
  }, {
    key: "onExpandClick",
    value: function onExpandClick() {
      var _this$props = this.props,
          active = _this$props.active,
          openGroup = _this$props.openGroup,
          groupMenuExpandSubMenu = _this$props.groupMenuExpandSubMenu;

      if (active) {
        groupMenuExpandSubMenu(true);
      } else {
        openGroup(true);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          changeCurrentContextId = _this$props2.changeCurrentContextId,
          active = _this$props2.active,
          openGroup = _this$props2.openGroup,
          groupMenuExpandSubMenu = _this$props2.groupMenuExpandSubMenu,
          isSubMenuExpanded = _this$props2.isSubMenuExpanded,
          progress = _this$props2.progress,
          groupIndex = _this$props2.groupIndex,
          groupData = _this$props2.groupData,
          filters = _this$props2.filters,
          manifest = _this$props2.manifest,
          contextId = _this$props2.contextId,
          getSelections = _this$props2.getSelections,
          isVerseFinished = _this$props2.isVerseFinished,
          isVerseValid = _this$props2.isVerseValid,
          currentToolName = _this$props2.currentToolName;
      var groupMenuItemHeadingClassName = active ? 'menu-item-heading-current' : 'menu-item-heading-normal';

      var expandedGlyph = _react["default"].createElement(_reactBootstrap.Glyphicon, {
        glyph: "chevron-down",
        style: {
          "float": 'right',
          marginTop: '3px'
        },
        onClick: function onClick() {
          return groupMenuExpandSubMenu(false);
        }
      });

      var collapsedGlyph = _react["default"].createElement(_reactBootstrap.Glyphicon, {
        glyph: "chevron-right",
        style: {
          "float": 'right',
          marginTop: '3px'
        },
        onClick: this.onExpandClick
      });

      return _react["default"].createElement("div", {
        className: "group"
      }, _react["default"].createElement("div", {
        ref: this.groupRef,
        className: groupMenuItemHeadingClassName
      }, active && isSubMenuExpanded ? expandedGlyph : collapsedGlyph, _react["default"].createElement("div", {
        style: {
          display: 'flex'
        },
        onClick: function onClick() {
          return openGroup(true);
        }
      }, _react["default"].createElement("div", {
        style: {
          position: 'relative',
          justifyContent: 'center',
          height: 20,
          width: 20,
          display: 'flex',
          marginRight: '10px',
          "float": 'left'
        }
      }, _react["default"].createElement("div", {
        style: {
          height: 20,
          width: 20,
          border: 'white solid 3px',
          borderRadius: '50%'
        }
      }), _react["default"].createElement(_CircularProgress["default"], {
        variant: "static",
        value: progress * 100,
        thickness: 10,
        size: 15,
        color: 'primary',
        style: {
          alignSelf: 'center',
          position: 'absolute',
          width: 20,
          height: 20,
          color: '#40BDF2'
        }
      })), groupIndex.name)), active && isSubMenuExpanded ? _react["default"].createElement(_GroupItems["default"], {
        currentToolName: currentToolName,
        isVerseFinished: isVerseFinished,
        isVerseValid: isVerseValid,
        getSelections: getSelections,
        changeCurrentContextId: changeCurrentContextId,
        contextId: contextId,
        groupData: groupData,
        activeGroupItemRef: this.activeGroupItemRef,
        filters: filters,
        manifest: manifest
      }) : null);
    }
  }]);
  return Group;
}(_react["default"].Component);

Group.propTypes = {
  manifest: _propTypes["default"].object.isRequired,
  contextId: _propTypes["default"].object.isRequired,
  filters: _propTypes["default"].object.isRequired,
  groupData: _propTypes["default"].array.isRequired,
  isSubMenuExpanded: _propTypes["default"].bool.isRequired,
  groupMenuExpandSubMenu: _propTypes["default"].func.isRequired,
  openGroup: _propTypes["default"].func.isRequired,
  progress: _propTypes["default"].number.isRequired,
  groupIndex: _propTypes["default"].object.isRequired,
  active: _propTypes["default"].bool.isRequired,
  changeCurrentContextId: _propTypes["default"].func.isRequired,
  getSelections: _propTypes["default"].func.isRequired,
  isVerseFinished: _propTypes["default"].func.isRequired,
  isVerseValid: _propTypes["default"].func.isRequired,
  currentToolName: _propTypes["default"].string.isRequired
};
var _default = Group;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9Hcm91cE1lbnUvR3JvdXAvaW5kZXguanMiXSwibmFtZXMiOlsiR3JvdXAiLCJwcm9wcyIsImFjdGl2ZUdyb3VwSXRlbVJlZiIsIlJlYWN0IiwiY3JlYXRlUmVmIiwiZ3JvdXBSZWYiLCJzY3JvbGxUb0N1cnJlbnRDaGVjayIsImJpbmQiLCJvbkV4cGFuZENsaWNrIiwic2V0VGltZW91dCIsImFjdGl2ZSIsIm9wZW5Hcm91cCIsImdyb3VwTWVudUV4cGFuZFN1Yk1lbnUiLCJjaGFuZ2VDdXJyZW50Q29udGV4dElkIiwiaXNTdWJNZW51RXhwYW5kZWQiLCJwcm9ncmVzcyIsImdyb3VwSW5kZXgiLCJncm91cERhdGEiLCJmaWx0ZXJzIiwibWFuaWZlc3QiLCJjb250ZXh0SWQiLCJnZXRTZWxlY3Rpb25zIiwiaXNWZXJzZUZpbmlzaGVkIiwiaXNWZXJzZVZhbGlkIiwiY3VycmVudFRvb2xOYW1lIiwiZ3JvdXBNZW51SXRlbUhlYWRpbmdDbGFzc05hbWUiLCJleHBhbmRlZEdseXBoIiwibWFyZ2luVG9wIiwiY29sbGFwc2VkR2x5cGgiLCJkaXNwbGF5IiwicG9zaXRpb24iLCJqdXN0aWZ5Q29udGVudCIsImhlaWdodCIsIndpZHRoIiwibWFyZ2luUmlnaHQiLCJib3JkZXIiLCJib3JkZXJSYWRpdXMiLCJhbGlnblNlbGYiLCJjb2xvciIsIm5hbWUiLCJDb21wb25lbnQiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJvYmplY3QiLCJpc1JlcXVpcmVkIiwiYXJyYXkiLCJib29sIiwiZnVuYyIsIm51bWJlciIsInN0cmluZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBRUE7O0FBRUE7O0FBSEE7QUFFQTtJQUtNQSxLOzs7QUFDSixpQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBO0FBQ2pCLGlIQUFNQSxLQUFOO0FBQ0EsVUFBS0Msa0JBQUwsR0FBMEJDLGtCQUFNQyxTQUFO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QUEsVUFBVSxFQUFFMEIsc0JBQVVDLE1BQVYsQ0FBaUJDLFVBVGI7QUFVaEJsQyxFQUFBQSxNQUFNLEVBQUVnQyxzQkFBVUksSUFBVixDQUFlRixVQVZQO0FBV2hCL0IsRUFBQUEsc0JBQXNCLEVBQUU2QixzQkFBVUssSUFBVixDQUFlSCxVQVh2QjtBQVloQnZCLEVBQUFBLGFBQWEsRUFBRXFCLHNCQUFVSyxJQUFWLENBQWVILFVBWmQ7QUFhaEJ0QixFQUFBQSxlQUFlLEVBQUVvQixzQkFBVUssSUFBVixDQUFlSCxVQWJoQjtBQWNoQnJCLEVBQUFBLFlBQVksRUFBRW1CLHNCQUFVSyxJQUFWLENBQWVILFVBZGI7QUFlaEJwQixFQUFBQSxlQUFlLEVBQUVrQixzQkFBVU8sTUFBVixDQUFpQkw7QUFmbEIsQ0FBbEI7ZUFrQmU1QyxLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgQ2lyY3VsYXJQcm9ncmVzcyBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9DaXJjdWxhclByb2dyZXNzJztcbmltcG9ydCB7IEdseXBoaWNvbiB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCc7XG4vLyBjb21wb25lbnRzXG5pbXBvcnQgR3JvdXBJdGVtcyBmcm9tICcuLi9Hcm91cEl0ZW1zJztcbi8vIGhlbHBlcnNcbmltcG9ydCB7XG4gIHNjcm9sbEludG9WaWV3LCBpblZpZXcsIGlzSW5WaWV3cG9ydCxcbn0gZnJvbSAnLi4vaGVscGVycyc7XG5cbmNsYXNzIEdyb3VwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5hY3RpdmVHcm91cEl0ZW1SZWYgPSBSZWFjdC5jcmVhdGVSZWYoKTtcbiAgICB0aGlzLmdyb3VwUmVmID0gUmVhY3QuY3JlYXRlUmVmKCk7XG4gICAgdGhpcy5zY3JvbGxUb0N1cnJlbnRDaGVjayA9IHRoaXMuc2Nyb2xsVG9DdXJyZW50Q2hlY2suYmluZCh0aGlzKTtcbiAgICB0aGlzLm9uRXhwYW5kQ2xpY2sgPSB0aGlzLm9uRXhwYW5kQ2xpY2suYmluZCh0aGlzKTtcbiAgfVxuXG4gIHNjcm9sbFRvQ3VycmVudENoZWNrKCkge1xuICAgIC8vIFRSSUNLWTogcHVzaCBzY3JvbGxpbmcgb250byB0aGUgdGltaW5nIHRocmVhZCBzbyB0aGUgdWkgdGhyZWFkIGNhbiBmbHVzaCBvdXQgdGhlIGRvbVxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgaWYgKGluVmlldyh0aGlzLmdyb3VwUmVmLCB0aGlzLmFjdGl2ZUdyb3VwSXRlbVJlZikpIHtcbiAgICAgICAgLy9JZiB0aGUgbWVudSBhbmQgY3VycmVudCBjaGVjayBhcmUgYWJsZSB0byBiZSByZW5kZXJlZCBpbiB0aGVcbiAgICAgICAgLy9zYW1lIHdpbmRvdyBzY3JvbGwgdG8gdGhlIGdyb3VwIG1lbnUgaXRlbVxuICAgICAgICBzY3JvbGxJbnRvVmlldyh0aGlzLmdyb3VwUmVmKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vU2Nyb2xsIHRvIHRoZSBjdXJyZW50IGNoZWNrIGl0ZW1cbiAgICAgICAgc2Nyb2xsSW50b1ZpZXcodGhpcy5hY3RpdmVHcm91cEl0ZW1SZWYpO1xuICAgICAgfVxuICAgIH0sIDIwMCk7XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBpZiAodGhpcy5wcm9wcy5hY3RpdmUpIHtcbiAgICAgIHRoaXMuc2Nyb2xsVG9DdXJyZW50Q2hlY2soKTtcbiAgICB9XG4gIH1cblxuICBjb21wb25lbnREaWRVcGRhdGUoKSB7XG4gICAgY29uc3QgeyBhY3RpdmUgfSA9IHRoaXMucHJvcHM7XG5cbiAgICBpZiAoYWN0aXZlKSB7XG4gICAgICAvLyBzY3JvbGwgdG8gbWVudSBpZiBvdXQgb2Ygdmlld1xuICAgICAgaWYgKCFpc0luVmlld3BvcnQodGhpcy5hY3RpdmVHcm91cEl0ZW1SZWYpKSB7XG4gICAgICAgIHRoaXMuc2Nyb2xsVG9DdXJyZW50Q2hlY2sodGhpcy5hY3RpdmVHcm91cEl0ZW1SZWYpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG9uRXhwYW5kQ2xpY2soKSB7XG4gICAgY29uc3Qge1xuICAgICAgYWN0aXZlLFxuICAgICAgb3Blbkdyb3VwLFxuICAgICAgZ3JvdXBNZW51RXhwYW5kU3ViTWVudSxcbiAgICB9ID0gdGhpcy5wcm9wcztcblxuICAgIGlmIChhY3RpdmUpIHtcbiAgICAgIGdyb3VwTWVudUV4cGFuZFN1Yk1lbnUodHJ1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG9wZW5Hcm91cCh0cnVlKTtcbiAgICB9XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgY2hhbmdlQ3VycmVudENvbnRleHRJZCxcbiAgICAgIGFjdGl2ZSxcbiAgICAgIG9wZW5Hcm91cCxcbiAgICAgIGdyb3VwTWVudUV4cGFuZFN1Yk1lbnUsXG4gICAgICBpc1N1Yk1lbnVFeHBhbmRlZCxcbiAgICAgIHByb2dyZXNzLFxuICAgICAgZ3JvdXBJbmRleCxcbiAgICAgIGdyb3VwRGF0YSxcbiAgICAgIGZpbHRlcnMsXG4gICAgICBtYW5pZmVzdCxcbiAgICAgIGNvbnRleHRJZCxcbiAgICAgIGdldFNlbGVjdGlvbnMsXG4gICAgICBpc1ZlcnNlRmluaXNoZWQsXG4gICAgICBpc1ZlcnNlVmFsaWQsXG4gICAgICBjdXJyZW50VG9vbE5hbWUsXG4gICAgfSA9IHRoaXMucHJvcHM7XG4gICAgbGV0IGdyb3VwTWVudUl0ZW1IZWFkaW5nQ2xhc3NOYW1lID0gYWN0aXZlID8gJ21lbnUtaXRlbS1oZWFkaW5nLWN1cnJlbnQnIDogJ21lbnUtaXRlbS1oZWFkaW5nLW5vcm1hbCc7XG5cbiAgICBsZXQgZXhwYW5kZWRHbHlwaCA9IChcbiAgICAgIDxHbHlwaGljb24gZ2x5cGg9XCJjaGV2cm9uLWRvd25cIiBzdHlsZT17eyBmbG9hdDogJ3JpZ2h0JywgbWFyZ2luVG9wOiAnM3B4JyB9fSBvbkNsaWNrPXsoKSA9PiBncm91cE1lbnVFeHBhbmRTdWJNZW51KGZhbHNlKX0gLz5cbiAgICApO1xuICAgIGxldCBjb2xsYXBzZWRHbHlwaCA9IChcbiAgICAgIDxHbHlwaGljb24gZ2x5cGg9XCJjaGV2cm9uLXJpZ2h0XCIgc3R5bGU9e3sgZmxvYXQ6ICdyaWdodCcsIG1hcmdpblRvcDogJzNweCcgfX0gb25DbGljaz17dGhpcy5vbkV4cGFuZENsaWNrfSAvPlxuICAgICk7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JvdXBcIj5cbiAgICAgICAgPGRpdiByZWY9e3RoaXMuZ3JvdXBSZWZ9XG4gICAgICAgICAgY2xhc3NOYW1lPXtncm91cE1lbnVJdGVtSGVhZGluZ0NsYXNzTmFtZX0+XG4gICAgICAgICAge2FjdGl2ZSAmJiBpc1N1Yk1lbnVFeHBhbmRlZCA/IGV4cGFuZGVkR2x5cGggOiBjb2xsYXBzZWRHbHlwaH1cbiAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JyB9fVxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gb3Blbkdyb3VwKHRydWUpfT5cbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tcbiAgICAgICAgICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJywgaGVpZ2h0OiAyMCwgd2lkdGg6IDIwLCBkaXNwbGF5OiAnZmxleCcsIG1hcmdpblJpZ2h0OiAnMTBweCcsIGZsb2F0OiAnbGVmdCcsXG4gICAgICAgICAgICB9fT5cbiAgICAgICAgICAgICAgPGRpdiBzdHlsZT17e1xuICAgICAgICAgICAgICAgIGhlaWdodDogMjAsIHdpZHRoOiAyMCwgYm9yZGVyOiAnd2hpdGUgc29saWQgM3B4JywgYm9yZGVyUmFkaXVzOiAnNTAlJyxcbiAgICAgICAgICAgICAgfX0gLz5cbiAgICAgICAgICAgICAgPENpcmN1bGFyUHJvZ3Jlc3NcbiAgICAgICAgICAgICAgICB2YXJpYW50PVwic3RhdGljXCJcbiAgICAgICAgICAgICAgICB2YWx1ZT17cHJvZ3Jlc3MgKiAxMDB9XG4gICAgICAgICAgICAgICAgdGhpY2tuZXNzPXsxMH1cbiAgICAgICAgICAgICAgICBzaXplPXsxNX1cbiAgICAgICAgICAgICAgICBjb2xvcj17J3ByaW1hcnknfVxuICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICBhbGlnblNlbGY6ICdjZW50ZXInLCBwb3NpdGlvbjogJ2Fic29sdXRlJywgd2lkdGg6IDIwLCBoZWlnaHQ6IDIwLCBjb2xvcjonIzQwQkRGMicsXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAge2dyb3VwSW5kZXgubmFtZX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIHthY3RpdmUgJiYgaXNTdWJNZW51RXhwYW5kZWQgP1xuICAgICAgICAgICg8R3JvdXBJdGVtc1xuICAgICAgICAgICAgY3VycmVudFRvb2xOYW1lPXtjdXJyZW50VG9vbE5hbWV9XG4gICAgICAgICAgICBpc1ZlcnNlRmluaXNoZWQ9e2lzVmVyc2VGaW5pc2hlZH1cbiAgICAgICAgICAgIGlzVmVyc2VWYWxpZD17aXNWZXJzZVZhbGlkfVxuICAgICAgICAgICAgZ2V0U2VsZWN0aW9ucz17Z2V0U2VsZWN0aW9uc31cbiAgICAgICAgICAgIGNoYW5nZUN1cnJlbnRDb250ZXh0SWQ9e2NoYW5nZUN1cnJlbnRDb250ZXh0SWR9XG4gICAgICAgICAgICBjb250ZXh0SWQ9e2NvbnRleHRJZH1cbiAgICAgICAgICAgIGdyb3VwRGF0YT17Z3JvdXBEYXRhfVxuICAgICAgICAgICAgYWN0aXZlR3JvdXBJdGVtUmVmPXt0aGlzLmFjdGl2ZUdyb3VwSXRlbVJlZn1cbiAgICAgICAgICAgIGZpbHRlcnM9e2ZpbHRlcnN9XG4gICAgICAgICAgICBtYW5pZmVzdD17bWFuaWZlc3R9IC8+KVxuICAgICAgICAgIDogbnVsbH1cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuR3JvdXAucHJvcFR5cGVzID0ge1xuICBtYW5pZmVzdDogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuICBjb250ZXh0SWQ6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgZmlsdGVyczogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuICBncm91cERhdGE6IFByb3BUeXBlcy5hcnJheS5pc1JlcXVpcmVkLFxuICBpc1N1Yk1lbnVFeHBhbmRlZDogUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZCxcbiAgZ3JvdXBNZW51RXhwYW5kU3ViTWVudTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgb3Blbkdyb3VwOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICBwcm9ncmVzczogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICBncm91cEluZGV4OiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG4gIGFjdGl2ZTogUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZCxcbiAgY2hhbmdlQ3VycmVudENvbnRleHRJZDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgZ2V0U2VsZWN0aW9uczogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgaXNWZXJzZUZpbmlzaGVkOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICBpc1ZlcnNlVmFsaWQ6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIGN1cnJlbnRUb29sTmFtZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgR3JvdXA7XG4iXX0=