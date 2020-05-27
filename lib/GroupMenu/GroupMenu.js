"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

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

var _reactTooltip = _interopRequireDefault(require("react-tooltip"));

var helpers = _interopRequireWildcard(require("./helpers/"));

var _Groups = _interopRequireDefault(require("./Groups"));

var _FilterMenuHeader = _interopRequireDefault(require("./FilterMenuHeader"));

var _GroupsMenuFilter = _interopRequireDefault(require("./GroupsMenuFilter"));

require("./GroupMenu.styles.css");

//helpers
//components
var GroupMenu = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2["default"])(GroupMenu, _React$Component);

  function GroupMenu(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, GroupMenu);
    _this = (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(GroupMenu).call(this, props));
    _this.state = {
      expandFilter: false,
      isSubMenuExpanded: false
    };
    _this.handleFilterShowHideToggle = _this.handleFilterShowHideToggle.bind((0, _assertThisInitialized2["default"])(_this));
    return _this;
  }

  (0, _createClass2["default"])(GroupMenu, [{
    key: "handleFilterShowHideToggle",
    value: function handleFilterShowHideToggle() {
      this.setState({
        expandFilter: !this.state.expandFilter
      });
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      _reactTooltip["default"].rebuild();
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          translate = _this$props.translate,
          currentToolName = _this$props.toolsReducer.currentToolName,
          _this$props$groupMenu = _this$props.groupMenuReducer,
          filters = _this$props$groupMenu.filters,
          isSubMenuExpanded = _this$props$groupMenu.isSubMenuExpanded,
          groupsIndex = _this$props.groupsIndexReducer.groupsIndex,
          groupsData = _this$props.groupsDataReducer.groupsData,
          contextId = _this$props.contextIdReducer.contextId,
          _this$props$projectDe = _this$props.projectDetailsReducer,
          projectSaveLocation = _this$props$projectDe.projectSaveLocation,
          manifest = _this$props$projectDe.manifest,
          actions = _this$props.actions,
          getSelections = _this$props.getSelections,
          isVerseFinished = _this$props.isVerseFinished,
          isVerseValid = _this$props.isVerseValid,
          getGroupProgress = _this$props.getGroupProgress;
      var filterCount = helpers.getFilterCount(filters); // const showFilterMenu = currentToolName === "translationWords" && (this.state.expandFilter || filterCount);

      return _react["default"].createElement("div", {
        id: "groups-menu-container"
      }, _react["default"].createElement("div", {
        id: "groups-menu-top"
      }, _react["default"].createElement("div", {
        id: "groups-menu-header"
      }, _react["default"].createElement("span", {
        id: "groups-menu-title"
      }, translate('menu.menu')), _react["default"].createElement(_FilterMenuHeader["default"], {
        filterCount: filterCount,
        handleFilterShowHideToggle: this.handleFilterShowHideToggle,
        currentToolName: currentToolName,
        expandFilter: this.state.expandFilter
      })), _react["default"].createElement(_GroupsMenuFilter["default"], {
        filterCount: filterCount,
        currentToolName: currentToolName,
        expandFilter: this.state.expandFilter,
        filters: filters,
        translate: translate,
        setFilter: actions.setFilter
      })), _react["default"].createElement(_reactTooltip["default"], {
        id: "groups-tooltip"
      }), _react["default"].createElement(_Groups["default"], {
        currentToolName: currentToolName,
        isVerseFinished: isVerseFinished,
        isVerseValid: isVerseValid,
        getSelections: getSelections,
        translate: translate,
        changeCurrentContextId: actions.changeCurrentContextId,
        getGroupProgress: getGroupProgress,
        isSubMenuExpanded: isSubMenuExpanded,
        groupsIndex: groupsIndex,
        groupsData: groupsData,
        contextId: contextId,
        manifest: manifest,
        projectSaveLocation: projectSaveLocation,
        groupMenuExpandSubMenu: actions.groupMenuExpandSubMenu,
        groupMenuChangeGroup: actions.groupMenuChangeGroup,
        filters: filters
      }));
    }
  }]);
  return GroupMenu;
}(_react["default"].Component);

GroupMenu.propTypes = {
  isVerseValid: _propTypes["default"].func.isRequired,
  isVerseFinished: _propTypes["default"].func.isRequired,
  translate: _propTypes["default"].func.isRequired,
  toolsReducer: _propTypes["default"].shape({
    currentToolName: _propTypes["default"].string.isRequired
  }),
  groupMenuReducer: _propTypes["default"].shape({
    filters: _propTypes["default"].object.isRequired,
    isSubMenuExpanded: _propTypes["default"].bool.isRequired
  }),
  groupsIndexReducer: _propTypes["default"].shape({
    groupsIndex: _propTypes["default"].array.isRequired
  }),
  groupsDataReducer: _propTypes["default"].shape({
    groupsData: _propTypes["default"].object.isRequired
  }),
  contextIdReducer: _propTypes["default"].shape({
    contextId: _propTypes["default"].object.isRequired
  }),
  projectDetailsReducer: _propTypes["default"].shape({
    projectSaveLocation: _propTypes["default"].string.isRequired,
    manifest: _propTypes["default"].object.isRequired
  }),
  actions: _propTypes["default"].shape({
    setFilter: _propTypes["default"].func.isRequired,
    groupMenuChangeGroup: _propTypes["default"].func.isRequired,
    groupMenuExpandSubMenu: _propTypes["default"].func.isRequired,
    changeCurrentContextId: _propTypes["default"].func.isRequired
  }),
  getGroupProgress: _propTypes["default"].func.isRequired,
  getSelections: _propTypes["default"].func.isRequired
};
var _default = GroupMenu;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9Hcm91cE1lbnUvR3JvdXBNZW51LmpzIl0sIm5hbWVzIjpbIkdyb3VwTWVudSIsInByb3BzIiwic3RhdGUiLCJleHBhbmRGaWx0ZXIiLCJpc1N1Yk1lbnVFeHBhbmRlZCIsImhhbmRsZUZpbHRlclNob3dIaWRlVG9nZ2xlIiwiYmluZCIsInNldFN0YXRlIiwiUmVhY3RUb29sdGlwIiwicmVidWlsZCIsInRyYW5zbGF0ZSIsImN1cnJlbnRUb29sTmFtZSIsInRvb2xzUmVkdWNlciIsImdyb3VwTWVudVJlZHVjZXIiLCJmaWx0ZXJzIiwiZ3JvdXBzSW5kZXgiLCJncm91cHNJbmRleFJlZHVjZXIiLCJncm91cHNEYXRhIiwiZ3JvdXBzRGF0YVJlZHVjZXIiLCJjb250ZXh0SWQiLCJjb250ZXh0SWRSZWR1Y2VyIiwicHJvamVjdERldGFpbHNSZWR1Y2VyIiwicHJvamVjdFNhdmVMb2NhdGlvbiIsIm1hbmlmZXN0IiwiYWN0aW9ucyIsImdldFNlbGVjdGlvbnMiLCJpc1ZlcnNlRmluaXNoZWQiLCJpc1ZlcnNlVmFsaWQiLCJnZXRHcm91cFByb2dyZXNzIiwiZmlsdGVyQ291bnQiLCJoZWxwZXJzIiwiZ2V0RmlsdGVyQ291bnQiLCJzZXRGaWx0ZXIiLCJjaGFuZ2VDdXJyZW50Q29udGV4dElkIiwiZ3JvdXBNZW51RXhwYW5kU3ViTWVudSIsImdyb3VwTWVudUNoYW5nZUdyb3VwIiwiUmVhY3QiLCJDb21wb25lbnQiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJmdW5jIiwiaXNSZXF1aXJlZCIsInNoYXBlIiwic3RyaW5nIiwib2JqZWN0IiwiYm9vbCIsImFycmF5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUVBOztBQUVBOztBQUNBOztBQUNBOztBQUVBOztBQVBBO0FBRUE7SUFPTUEsUzs7O0FBQ0oscUJBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQTtBQUNqQixxSEFBTUEsS0FBTjtB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QUFFb0Isc0JBQVVLLE1BQVYsQ0FBaUJIO0FBQTlCLEdBQWhCLENBWEU7QUFZcEJwQixFQUFBQSxxQkFBcUIsRUFBRWtCLHNCQUFVRyxLQUFWLENBQWdCO0FBQ3JDcEIsSUFBQUEsbUJBQW1CLEVBQUVpQixzQkFBVUksTUFBVixDQUFpQkYsVUFERDtBQUVyQ2xCLElBQUFBLFFBQVEsRUFBRWdCLHNCQUFVSyxNQUFWLENBQWlCSDtBQUZVLEdBQWhCLENBWkg7QUFnQnBCakIsRUFBQUEsT0FBTyxFQUFFZSxzQkFBVUcsS0FBVixDQUFnQjtBQUN2QlYsSUFBQUEsU0FBUyxFQUFFTyxzQkFBVUMsSUFBVixDQUFlQyxVQURIO0FBRXZCTixJQUFBQSxvQkFBb0IsRUFBRUksc0JBQVVDLElBQVYsQ0FBZUMsVUFGZDtBQUd2QlAsSUFBQUEsc0JBQXNCLEVBQUVLLHNCQUFVQyxJQUFWLENBQWVDLFVBSGhCO0FBSXZCUixJQUFBQSxzQkFBc0IsRUFBRU0sc0JBQVVDLElBQVYsQ0FBZUM7QUFKaEIsR0FBaEIsQ0FoQlc7QUFzQnBCYixFQUFBQSxnQkFBZ0IsRUFBRVcsc0JBQVVDLElBQVYsQ0FBZUMsVUF0QmI7QUF1QnBCaEIsRUFBQUEsYUFBYSxFQUFFYyxzQkFBVUMsSUFBVixDQUFlQztBQXZCVixDQUF0QjtlQTBCZXpDLFMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBSZWFjdFRvb2x0aXAgZnJvbSAncmVhY3QtdG9vbHRpcCc7XG4vL2hlbHBlcnNcbmltcG9ydCAqIGFzIGhlbHBlcnMgZnJvbSAnLi9oZWxwZXJzLyc7XG4vL2NvbXBvbmVudHNcbmltcG9ydCBHcm91cHMgZnJvbSAnLi9Hcm91cHMnO1xuaW1wb3J0IEZpbHRlck1lbnVIZWFkZXIgZnJvbSAnLi9GaWx0ZXJNZW51SGVhZGVyJztcbmltcG9ydCBHcm91cHNNZW51RmlsdGVyIGZyb20gJy4vR3JvdXBzTWVudUZpbHRlcic7XG5cbmltcG9ydCAnLi9Hcm91cE1lbnUuc3R5bGVzLmNzcyc7XG5cbmNsYXNzIEdyb3VwTWVudSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBleHBhbmRGaWx0ZXI6IGZhbHNlLFxuICAgICAgaXNTdWJNZW51RXhwYW5kZWQ6IGZhbHNlLFxuICAgIH07XG4gICAgdGhpcy5oYW5kbGVGaWx0ZXJTaG93SGlkZVRvZ2dsZSA9IHRoaXMuaGFuZGxlRmlsdGVyU2hvd0hpZGVUb2dnbGUuYmluZCh0aGlzKTtcbiAgfVxuXG4gIGhhbmRsZUZpbHRlclNob3dIaWRlVG9nZ2xlKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBleHBhbmRGaWx0ZXI6ICF0aGlzLnN0YXRlLmV4cGFuZEZpbHRlciB9KTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZFVwZGF0ZSgpIHtcbiAgICBSZWFjdFRvb2x0aXAucmVidWlsZCgpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIHRyYW5zbGF0ZSxcbiAgICAgIHRvb2xzUmVkdWNlcjogeyBjdXJyZW50VG9vbE5hbWUgfSxcbiAgICAgIGdyb3VwTWVudVJlZHVjZXI6IHsgZmlsdGVycywgaXNTdWJNZW51RXhwYW5kZWQgfSxcbiAgICAgIGdyb3Vwc0luZGV4UmVkdWNlcjogeyBncm91cHNJbmRleCB9LFxuICAgICAgZ3JvdXBzRGF0YVJlZHVjZXI6IHsgZ3JvdXBzRGF0YSB9LFxuICAgICAgY29udGV4dElkUmVkdWNlcjogeyBjb250ZXh0SWQgfSxcbiAgICAgIHByb2plY3REZXRhaWxzUmVkdWNlcjogeyBwcm9qZWN0U2F2ZUxvY2F0aW9uLCBtYW5pZmVzdCB9LFxuICAgICAgYWN0aW9ucyxcbiAgICAgIGdldFNlbGVjdGlvbnMsXG4gICAgICBpc1ZlcnNlRmluaXNoZWQsXG4gICAgICBpc1ZlcnNlVmFsaWQsXG4gICAgICBnZXRHcm91cFByb2dyZXNzLFxuICAgIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IGZpbHRlckNvdW50ID0gaGVscGVycy5nZXRGaWx0ZXJDb3VudChmaWx0ZXJzKTtcbiAgICAvLyBjb25zdCBzaG93RmlsdGVyTWVudSA9IGN1cnJlbnRUb29sTmFtZSA9PT0gXCJ0cmFuc2xhdGlvbldvcmRzXCIgJiYgKHRoaXMuc3RhdGUuZXhwYW5kRmlsdGVyIHx8IGZpbHRlckNvdW50KTtcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGlkPVwiZ3JvdXBzLW1lbnUtY29udGFpbmVyXCI+XG4gICAgICAgIDxkaXYgaWQ9XCJncm91cHMtbWVudS10b3BcIj5cbiAgICAgICAgICA8ZGl2IGlkPVwiZ3JvdXBzLW1lbnUtaGVhZGVyXCI+XG4gICAgICAgICAgICA8c3BhbiBpZD1cImdyb3Vwcy1tZW51LXRpdGxlXCI+XG4gICAgICAgICAgICAgIHt0cmFuc2xhdGUoJ21lbnUubWVudScpfVxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgPEZpbHRlck1lbnVIZWFkZXJcbiAgICAgICAgICAgICAgZmlsdGVyQ291bnQ9e2ZpbHRlckNvdW50fVxuICAgICAgICAgICAgICBoYW5kbGVGaWx0ZXJTaG93SGlkZVRvZ2dsZT17dGhpcy5oYW5kbGVGaWx0ZXJTaG93SGlkZVRvZ2dsZX1cbiAgICAgICAgICAgICAgY3VycmVudFRvb2xOYW1lPXtjdXJyZW50VG9vbE5hbWV9XG4gICAgICAgICAgICAgIGV4cGFuZEZpbHRlcj17dGhpcy5zdGF0ZS5leHBhbmRGaWx0ZXJ9IC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPEdyb3Vwc01lbnVGaWx0ZXJcbiAgICAgICAgICAgIGZpbHRlckNvdW50PXtmaWx0ZXJDb3VudH1cbiAgICAgICAgICAgIGN1cnJlbnRUb29sTmFtZT17Y3VycmVudFRvb2xOYW1lfVxuICAgICAgICAgICAgZXhwYW5kRmlsdGVyPXt0aGlzLnN0YXRlLmV4cGFuZEZpbHRlcn1cbiAgICAgICAgICAgIGZpbHRlcnM9e2ZpbHRlcnN9XG4gICAgICAgICAgICB0cmFuc2xhdGU9e3RyYW5zbGF0ZX1cbiAgICAgICAgICAgIHNldEZpbHRlcj17YWN0aW9ucy5zZXRGaWx0ZXJ9IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8UmVhY3RUb29sdGlwIGlkPVwiZ3JvdXBzLXRvb2x0aXBcIi8+XG4gICAgICAgIDxHcm91cHNcbiAgICAgICAgICBjdXJyZW50VG9vbE5hbWU9e2N1cnJlbnRUb29sTmFtZX1cbiAgICAgICAgICBpc1ZlcnNlRmluaXNoZWQ9e2lzVmVyc2VGaW5pc2hlZH1cbiAgICAgICAgICBpc1ZlcnNlVmFsaWQ9e2lzVmVyc2VWYWxpZH1cbiAgICAgICAgICBnZXRTZWxlY3Rpb25zPXtnZXRTZWxlY3Rpb25zfVxuICAgICAgICAgIHRyYW5zbGF0ZT17dHJhbnNsYXRlfVxuICAgICAgICAgIGNoYW5nZUN1cnJlbnRDb250ZXh0SWQ9e2FjdGlvbnMuY2hhbmdlQ3VycmVudENvbnRleHRJZH1cbiAgICAgICAgICBnZXRHcm91cFByb2dyZXNzPXtnZXRHcm91cFByb2dyZXNzfVxuICAgICAgICAgIGlzU3ViTWVudUV4cGFuZGVkPXtpc1N1Yk1lbnVFeHBhbmRlZH1cbiAgICAgICAgICBncm91cHNJbmRleD17Z3JvdXBzSW5kZXh9XG4gICAgICAgICAgZ3JvdXBzRGF0YT17Z3JvdXBzRGF0YX1cbiAgICAgICAgICBjb250ZXh0SWQ9e2NvbnRleHRJZH1cbiAgICAgICAgICBtYW5pZmVzdD17bWFuaWZlc3R9XG4gICAgICAgICAgcHJvamVjdFNhdmVMb2NhdGlvbj17cHJvamVjdFNhdmVMb2NhdGlvbn1cbiAgICAgICAgICBncm91cE1lbnVFeHBhbmRTdWJNZW51PXthY3Rpb25zLmdyb3VwTWVudUV4cGFuZFN1Yk1lbnV9XG4gICAgICAgICAgZ3JvdXBNZW51Q2hhbmdlR3JvdXA9e2FjdGlvbnMuZ3JvdXBNZW51Q2hhbmdlR3JvdXB9XG4gICAgICAgICAgZmlsdGVycz17ZmlsdGVyc30gLz5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuR3JvdXBNZW51LnByb3BUeXBlcyA9IHtcbiAgaXNWZXJzZVZhbGlkOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICBpc1ZlcnNlRmluaXNoZWQ6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIHRyYW5zbGF0ZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgdG9vbHNSZWR1Y2VyOiBQcm9wVHlwZXMuc2hhcGUoeyBjdXJyZW50VG9vbE5hbWU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCB9KSxcbiAgZ3JvdXBNZW51UmVkdWNlcjogUHJvcFR5cGVzLnNoYXBlKHtcbiAgICBmaWx0ZXJzOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG4gICAgaXNTdWJNZW51RXhwYW5kZWQ6IFByb3BUeXBlcy5ib29sLmlzUmVxdWlyZWQsXG4gIH0pLFxuICBncm91cHNJbmRleFJlZHVjZXI6IFByb3BUeXBlcy5zaGFwZSh7IGdyb3Vwc0luZGV4OiBQcm9wVHlwZXMuYXJyYXkuaXNSZXF1aXJlZCB9KSxcbiAgZ3JvdXBzRGF0YVJlZHVjZXI6IFByb3BUeXBlcy5zaGFwZSh7IGdyb3Vwc0RhdGE6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCB9KSxcbiAgY29udGV4dElkUmVkdWNlcjogUHJvcFR5cGVzLnNoYXBlKHsgY29udGV4dElkOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQgfSksXG4gIHByb2plY3REZXRhaWxzUmVkdWNlcjogUHJvcFR5cGVzLnNoYXBlKHtcbiAgICBwcm9qZWN0U2F2ZUxvY2F0aW9uOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgbWFuaWZlc3Q6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgfSksXG4gIGFjdGlvbnM6IFByb3BUeXBlcy5zaGFwZSh7XG4gICAgc2V0RmlsdGVyOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAgIGdyb3VwTWVudUNoYW5nZUdyb3VwOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICAgIGdyb3VwTWVudUV4cGFuZFN1Yk1lbnU6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gICAgY2hhbmdlQ3VycmVudENvbnRleHRJZDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgfSksXG4gIGdldEdyb3VwUHJvZ3Jlc3M6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIGdldFNlbGVjdGlvbnM6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBHcm91cE1lbnU7XG4iXX0=