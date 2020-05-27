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

var GroupItem = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2["default"])(GroupItem, _React$Component);

  function GroupItem() {
    (0, _classCallCheck2["default"])(this, GroupItem);
    return (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(GroupItem).apply(this, arguments));
  }

  (0, _createClass2["default"])(GroupItem, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          changeCurrentContextId = _this$props.changeCurrentContextId,
          contextId = _this$props.contextId,
          active = _this$props.active,
          statusBadge = _this$props.statusBadge,
          selectionText = _this$props.selectionText,
          bookName = _this$props.bookName,
          activeGroupItemRef = _this$props.activeGroupItemRef;
      var reference = contextId.reference;
      var bookTitle = selectionText ? reference.bookId : bookName;
      return _react["default"].createElement("div", {
        ref: activeGroupItemRef,
        onClick: function onClick() {
          return changeCurrentContextId(contextId);
        },
        className: 'group-item' + (active ? ' active active-submenu-item' : ' submenu-item')
      }, statusBadge, _react["default"].createElement("span", {
        className: "selection",
        "data-for": "groups-tooltip",
        "data-tip": selectionText,
        "data-place": "bottom",
        "data-effect": "float",
        "data-type": "light",
        style: {
          minWidth: 0
        },
        "data-class": "selection-tooltip",
        "data-delay-hide": "100"
      }, reference.chapterVerseMenu ? _react["default"].createElement("span", {
        className: 'group-item-text'
      }, "".concat(reference.text, " ").concat(reference.verse)) : _react["default"].createElement("span", {
        className: 'group-item-text'
      }, ' ' + bookTitle + ' ' + reference.chapter + ':' + reference.verse + ' ' + selectionText)));
    }
  }]);
  return GroupItem;
}(_react["default"].Component);

GroupItem.propTypes = {
  bookName: _propTypes["default"].string.isRequired,
  selectionText: _propTypes["default"].string.isRequired,
  contextId: _propTypes["default"].object.isRequired,
  changeCurrentContextId: _propTypes["default"].func.isRequired,
  statusBadge: _propTypes["default"].object.isRequired,
  active: _propTypes["default"].bool.isRequired,
  groupMenuHeader: _propTypes["default"].object,
  activeGroupItemRef: _propTypes["default"].object
};
var _default = GroupItem;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9Hcm91cE1lbnUvR3JvdXBJdGVtL2luZGV4LmpzIl0sIm5hbWVzIjpbIkdyb3VwSXRlbSIsInByb3BzIiwiY2hhbmdlQ3VycmVudENvbnRleHRJZCIsImNvbnRleHRJZCIsImFjdGl2ZSIsInN0YXR1c0JhZGdlIiwic2VsZWN0aW9uVGV4dCIsImJvb2tOYW1lIiwiYWN0aXZlR3JvdXBJdGVtUmVmIiwicmVmZXJlbmNlIiwiYm9va1RpdGxlIiwiYm9va0lkIiwibWluV2lkdGgiLCJjaGFwdGVyVmVyc2VNZW51IiwidGV4dCIsInZlcnNlIiwiY2hhcHRlciIsIlJlYWN0IiwiQ29tcG9uZW50IiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwic3RyaW5nIiwiaXNSZXF1aXJlZCIsIm9iamVjdCIsImZ1bmMiLCJib29sIiwiZ3JvdXBNZW51SGVhZGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0lBRU1BLFM7Ozs7Ozs7Ozs7NkJBQ0s7QUFBQSx3QkFTSCxLQUFLQyxLQVRGO0FBQUEsVUFFTEMsc0JBRkssZUFFTEEsc0JBRks7QUFBQSxVQUdMQyxTQUhLLGVBR0xBLFNBSEs7QUFBQSxVQUlMQyxNQUpLLGVBSUxBLE1BSks7QUFBQSxVQUtMQyxXQUxLLGVBS0xBLFdBTEs7QUFBQSxVQU1MQyxhQU5LLGVBTUxBLGFBTks7QUFBQSxVQU9MQyxRQVBLLGVBT0xBLFFBUEs7QUFBQSxVQVFMQyxrQkFSSyxlQVFMQSxrQkFSSztBQUFBLFVBVUNDLFNBVkQsR0FVZU4sU0FWZixDQVVDTSxTQVZEO0FBV1AsVUFBTUMsU0FBUyxHQUFHSixhQUFhLEdBQUdHLFNBQVMsQ0FBQ0UsTUFBYixHQUFzQkosUUFBckQ7QUFDQSxhQUNFO0FBQUssUUFBQSxHQUFHLEVBQUVDLGtCQUFWO0FBQThCLFFBQUEsT0FBTyxFQUFFO0FBQUEsaUJBQU1OLHNCQUFzQixDQUFDQyxTQUFELENBQTVCO0FBQUEsU0FBdkM7QUFDRSxRQUFBLFNBQVMsRUFBRSxnQkFBZ0JDLE1BQU0sR0FBRyw2QkFBSCxHQUFtQyxlQUF6RDtBQURiLFNBRUdDLFdBRkgsRUFHRTtBQUNFLFFBQUEsU0FBUyxFQUFDLFdBRFo7QUFFRSxvQkFBUyxnQkFGWDtBQUdFLG9CQUFVQyxhQUhaO0FBSUUsc0JBQVcsUUFKYjtBQUtFLHVCQUFZLE9BTGQ7QUFNRSxxQkFBVSxPQU5aO0FBT0UsUUFBQSxLQUFLLEVBQUU7QUFBRU0sVUFBQUEsUUFBUSxFQUFFO0FBQVosU0FQVDtBQVFFLHNCQUFXLG1CQVJiO0FBU0UsMkJBQWdCO0FBVGxCLFNBVUdILFNBQVMsQ0FBQ0ksZ0JBQVYsR0FDQztBQUFNLFFBQUEsU0FBUyxFQUFFO0FBQWpCLG1CQUNNSixTQUFTLENBQUNLLElBRGhCLGNBQ3dCTCxTQUFTLENBQUNNLEtBRGxDLEVBREQsR0FLQztBQUFNLFFBQUEsU0FBUyxFQUFFO0FBQWpCLFNBQ0csTUFBTUwsU0FBTixHQUFrQixHQUFsQixHQUF3QkQsU0FBUyxDQUFDTyxPQUFsQyxHQUE0QyxHQUE1QyxHQUFrRFAsU0FBUyxDQUFDTSxLQUE1RCxHQUFvRSxHQUFwRSxHQUEwRVQsYUFEN0UsQ0FmSixDQUhGLENBREY7QUEwQkQ7OztFQXZDcUJXLGtCQUFNQyxTOztBQTBDOUJsQixTQUFTLENBQUNtQixTQUFWLEdBQXNCO0FBQ3BCWixFQUFBQSxRQUFRLEVBQUVhLHNCQUFVQyxNQUFWLENBQWlCQyxVQURQO0FBRXBCaEIsRUFBQUEsYUFBYSxFQUFFYyxzQkFBVUMsTUFBVixDQUFpQkMsVUFGWjtBQUdwQm5CLEVBQUFBLFNBQVMsRUFBRWlCLHNCQUFVRyxNQUFWLENBQWlCRCxVQUhSO0FBSXBCcEIsRUFBQUEsc0JBQXNCLEVBQUVrQixzQkFBVUksSUFBVixDQUFlRixVQUpuQjtBQUtwQmpCLEVBQUFBLFdBQVcsRUFBRWUsc0JBQVVHLE1BQVYsQ0FBaUJELFVBTFY7QUFNcEJsQixFQUFBQSxNQUFNLEVBQUVnQixzQkFBVUssSUFBVixDQUFlSCxVQU5IO0FBT3BCSSxFQUFBQSxlQUFlLEVBQUVOLHNCQUFVRyxNQVBQO0FBUXBCZixFQUFBQSxrQkFBa0IsRUFBRVksc0JBQVVHO0FBUlYsQ0FBdEI7ZUFXZXZCLFMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuY2xhc3MgR3JvdXBJdGVtIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIGNoYW5nZUN1cnJlbnRDb250ZXh0SWQsXG4gICAgICBjb250ZXh0SWQsXG4gICAgICBhY3RpdmUsXG4gICAgICBzdGF0dXNCYWRnZSxcbiAgICAgIHNlbGVjdGlvblRleHQsXG4gICAgICBib29rTmFtZSxcbiAgICAgIGFjdGl2ZUdyb3VwSXRlbVJlZixcbiAgICB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB7IHJlZmVyZW5jZSB9ID0gY29udGV4dElkO1xuICAgIGNvbnN0IGJvb2tUaXRsZSA9IHNlbGVjdGlvblRleHQgPyByZWZlcmVuY2UuYm9va0lkIDogYm9va05hbWU7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgcmVmPXthY3RpdmVHcm91cEl0ZW1SZWZ9IG9uQ2xpY2s9eygpID0+IGNoYW5nZUN1cnJlbnRDb250ZXh0SWQoY29udGV4dElkKX1cbiAgICAgICAgY2xhc3NOYW1lPXsnZ3JvdXAtaXRlbScgKyAoYWN0aXZlID8gJyBhY3RpdmUgYWN0aXZlLXN1Ym1lbnUtaXRlbScgOiAnIHN1Ym1lbnUtaXRlbScpfT5cbiAgICAgICAge3N0YXR1c0JhZGdlfVxuICAgICAgICA8c3BhblxuICAgICAgICAgIGNsYXNzTmFtZT1cInNlbGVjdGlvblwiXG4gICAgICAgICAgZGF0YS1mb3I9XCJncm91cHMtdG9vbHRpcFwiXG4gICAgICAgICAgZGF0YS10aXA9e3NlbGVjdGlvblRleHR9XG4gICAgICAgICAgZGF0YS1wbGFjZT1cImJvdHRvbVwiXG4gICAgICAgICAgZGF0YS1lZmZlY3Q9XCJmbG9hdFwiXG4gICAgICAgICAgZGF0YS10eXBlPVwibGlnaHRcIlxuICAgICAgICAgIHN0eWxlPXt7IG1pbldpZHRoOiAwIH19XG4gICAgICAgICAgZGF0YS1jbGFzcz1cInNlbGVjdGlvbi10b29sdGlwXCJcbiAgICAgICAgICBkYXRhLWRlbGF5LWhpZGU9XCIxMDBcIj5cbiAgICAgICAgICB7cmVmZXJlbmNlLmNoYXB0ZXJWZXJzZU1lbnUgP1xuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXsnZ3JvdXAtaXRlbS10ZXh0J30+XG4gICAgICAgICAgICAgIHtgJHtyZWZlcmVuY2UudGV4dH0gJHtyZWZlcmVuY2UudmVyc2V9YH1cbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgIDpcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17J2dyb3VwLWl0ZW0tdGV4dCd9PlxuICAgICAgICAgICAgICB7JyAnICsgYm9va1RpdGxlICsgJyAnICsgcmVmZXJlbmNlLmNoYXB0ZXIgKyAnOicgKyByZWZlcmVuY2UudmVyc2UgKyAnICcgKyBzZWxlY3Rpb25UZXh0fVxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgIH1cbiAgICAgICAgPC9zcGFuPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5Hcm91cEl0ZW0ucHJvcFR5cGVzID0ge1xuICBib29rTmFtZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICBzZWxlY3Rpb25UZXh0OiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gIGNvbnRleHRJZDogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuICBjaGFuZ2VDdXJyZW50Q29udGV4dElkOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICBzdGF0dXNCYWRnZTogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuICBhY3RpdmU6IFByb3BUeXBlcy5ib29sLmlzUmVxdWlyZWQsXG4gIGdyb3VwTWVudUhlYWRlcjogUHJvcFR5cGVzLm9iamVjdCxcbiAgYWN0aXZlR3JvdXBJdGVtUmVmOiBQcm9wVHlwZXMub2JqZWN0LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgR3JvdXBJdGVtO1xuIl19