"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

require("./CheckInfoCard.styles.css");

var _PhraseWithToolTip = _interopRequireDefault(require("./PhraseWithToolTip"));

var CheckInfoCard = function CheckInfoCard(_ref) {
  var title = _ref.title,
      phrase = _ref.phrase,
      seeMoreLabel = _ref.seeMoreLabel,
      onSeeMoreClick = _ref.onSeeMoreClick,
      onLinkClick = _ref.onLinkClick,
      showSeeMoreButton = _ref.showSeeMoreButton,
      getScriptureFromReference = _ref.getScriptureFromReference;
  return _react["default"].createElement("div", {
    className: "checkInfo"
  }, _react["default"].createElement("div", {
    className: "leftSide"
  }, _react["default"].createElement("div", {
    className: "title"
  }, title)), _react["default"].createElement("div", {
    className: "rightSide"
  }, _react["default"].createElement("div", {
    className: "phrase"
  }, _react["default"].createElement(_PhraseWithToolTip["default"], {
    getScriptureFromReference: getScriptureFromReference,
    phrase: phrase,
    onClickLink: onLinkClick
  })), _react["default"].createElement("div", {
    onClick: showSeeMoreButton ? onSeeMoreClick : null,
    className: showSeeMoreButton ? 'linkActive' : 'linkInactive'
  }, seeMoreLabel)));
};

CheckInfoCard.propTypes = {
  phrase: _propTypes["default"].string,
  title: _propTypes["default"].string,
  seeMoreLabel: _propTypes["default"].string,
  onSeeMoreClick: _propTypes["default"].func,
  onLinkClick: _propTypes["default"].func,
  showSeeMoreButton: _propTypes["default"].bool,
  getScriptureFromReference: _propTypes["default"].func
};
var _default = CheckInfoCard;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9DaGVja0luZm9DYXJkL0NoZWNrSW5mb0NhcmQuanMiXSwibmFtZXMiOlsiQ2hlY2tJbmZvQ2FyZCIsInRpdGxlIiwicGhyYXNlIiwic2VlTW9yZUxhYmVsIiwib25TZWVNb3JlQ2xpY2siLCJvbkxpbmtDbGljayIsInNob3dTZWVNb3JlQnV0dG9uIiwiZ2V0U2NyaXB0dXJlRnJvbVJlZmVyZW5jZSIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsInN0cmluZyIsImZ1bmMiLCJib29sIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFFQTs7QUFDQTs7QUFHQSxJQUFNQSxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCO0FBQUEsTUFDcEJDLEtBRG9CLFFBQ3BCQSxLQURvQjtBQUFBLE1BRXBCQyxNQUZvQixRQUVwQkEsTUFGb0I7QUFBQSxNQUdwQkMsWUFIb0IsUUFHcEJBLFlBSG9CO0FBQUEsTUFJcEJDLGNBSm9CLFFBSXBCQSxjQUpvQjtBQUFBLE1BS3BCQyxXQUxvQixRQUtwQkEsV0FMb0I7QUFBQSxNQU1wQkMsaUJBTm9CLFFBTXBCQSxpQkFOb0I7QUFBQSxNQU9wQkMseUJBUG9CLFFBT3BCQSx5QkFQb0I7QUFBQSxTQVNwQjtBQUFLLElBQUEsU0FBUyxFQUFDO0FBQWYsS0FDRTtBQUFLLElBQUEsU0FBUyxFQUFDO0FBQWYsS0FDRTtBQUFLLElBQUEsU0FBUyxFQUFDO0FBQWYsS0FDR04sS0FESCxDQURGLENBREYsRUFNRTtBQUFLLElBQUEsU0FBUyxFQUFDO0FBQWYsS0FDRTtBQUFLLElBQUEsU0FBUyxFQUFDO0FBQWYsS0FDRSxnQ0FBQyw2QkFBRDtBQUFtQixJQUFBLHlCQUF5QixFQUFFTSx5QkFBOUM7QUFBeUUsSUFBQSxNQUFNLEVBQUVMLE1BQWpGO0FBQXlGLElBQUEsV0FBVyxFQUFFRztBQUF0RyxJQURGLENBREYsRUFJRTtBQUFLLElBQUEsT0FBTyxFQUFFQyxpQkFBaUIsR0FBR0YsY0FBSCxHQUFvQixJQUFuRDtBQUF5RCxJQUFBLFNBQVMsRUFBRUUsaUJBQWlCLEdBQUcsWUFBSCxHQUFrQjtBQUF2RyxLQUNHSCxZQURILENBSkYsQ0FORixDQVRvQjtBQUFBLENBQXRCOztBQTBCQUgsYUFBYSxDQUFDUSxTQUFkLEdBQTBCO0FBQ3hCTixFQUFBQSxNQUFNLEVBQUVPLHNCQUFVQyxNQURNO0FBRXhCVCxFQUFBQSxLQUFLLEVBQUVRLHNCQUFVQyxNQUZPO0FBR3hCUCxFQUFBQSxZQUFZLEVBQUVNLHNCQUFVQyxNQUhBO0FBSXhCTixFQUFBQSxjQUFjLEVBQUVLLHNCQUFVRSxJQUpGO0FBS3hCTixFQUFBQSxXQUFXLEVBQUVJLHNCQUFVRSxJQUxDO0FBTXhCTCxFQUFBQSxpQkFBaUIsRUFBRUcsc0JBQVVHLElBTkw7QUFPeEJMLEVBQUFBLHlCQUF5QixFQUFFRSxzQkFBVUU7QUFQYixDQUExQjtlQVVlWCxhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmltcG9ydCAnLi9DaGVja0luZm9DYXJkLnN0eWxlcy5jc3MnO1xuaW1wb3J0IFBocmFzZVdpdGhUb29sVGlwIGZyb20gJy4vUGhyYXNlV2l0aFRvb2xUaXAnO1xuXG5cbmNvbnN0IENoZWNrSW5mb0NhcmQgPSAoe1xuICB0aXRsZSxcbiAgcGhyYXNlLFxuICBzZWVNb3JlTGFiZWwsXG4gIG9uU2VlTW9yZUNsaWNrLFxuICBvbkxpbmtDbGljayxcbiAgc2hvd1NlZU1vcmVCdXR0b24sXG4gIGdldFNjcmlwdHVyZUZyb21SZWZlcmVuY2UsXG59KSA9PiAoXG4gIDxkaXYgY2xhc3NOYW1lPVwiY2hlY2tJbmZvXCI+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJsZWZ0U2lkZVwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aXRsZVwiPlxuICAgICAgICB7dGl0bGV9XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cInJpZ2h0U2lkZVwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwaHJhc2VcIj5cbiAgICAgICAgPFBocmFzZVdpdGhUb29sVGlwIGdldFNjcmlwdHVyZUZyb21SZWZlcmVuY2U9e2dldFNjcmlwdHVyZUZyb21SZWZlcmVuY2V9IHBocmFzZT17cGhyYXNlfSBvbkNsaWNrTGluaz17b25MaW5rQ2xpY2t9IC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgb25DbGljaz17c2hvd1NlZU1vcmVCdXR0b24gPyBvblNlZU1vcmVDbGljayA6IG51bGx9IGNsYXNzTmFtZT17c2hvd1NlZU1vcmVCdXR0b24gPyAnbGlua0FjdGl2ZScgOiAnbGlua0luYWN0aXZlJ30+XG4gICAgICAgIHtzZWVNb3JlTGFiZWx9XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG4pO1xuXG5DaGVja0luZm9DYXJkLnByb3BUeXBlcyA9IHtcbiAgcGhyYXNlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICB0aXRsZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgc2VlTW9yZUxhYmVsOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBvblNlZU1vcmVDbGljazogUHJvcFR5cGVzLmZ1bmMsXG4gIG9uTGlua0NsaWNrOiBQcm9wVHlwZXMuZnVuYyxcbiAgc2hvd1NlZU1vcmVCdXR0b246IFByb3BUeXBlcy5ib29sLFxuICBnZXRTY3JpcHR1cmVGcm9tUmVmZXJlbmNlOiBQcm9wVHlwZXMuZnVuYyxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENoZWNrSW5mb0NhcmQ7XG4iXX0=