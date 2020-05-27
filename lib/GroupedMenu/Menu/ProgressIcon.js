"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styles = require("@material-ui/core/styles");

var _CircularProgress = _interopRequireDefault(require("@material-ui/core/CircularProgress"));

var styles = function styles() {
  return {
    root: {
      position: 'relative'
    },
    progress: {
      postiion: 'absolute',
      color: 'var(--completed-color)'
    },
    shadow: {
      position: 'absolute',
      color: '#EEEEEE'
    }
  };
};
/**
 * Displays a circular progress icon with a faint background
 * @param {number} progress - a value between 0 and 100 inclusive
 */


var ProgressIcon = function ProgressIcon(_ref) {
  var classes = _ref.classes,
      progress = _ref.progress;
  return _react["default"].createElement("div", {
    className: classes.root
  }, _react["default"].createElement(_CircularProgress["default"], {
    className: classes.shadow,
    size: 22,
    thickness: 6,
    variant: "static",
    value: 100
  }), _react["default"].createElement(_CircularProgress["default"], {
    className: classes.progress,
    size: 22,
    thickness: 7,
    variant: "static",
    value: progress
  }));
};

ProgressIcon.propTypes = {
  classes: _propTypes["default"].object.isRequired,
  progress: _propTypes["default"].number.isRequired
};

var _default = (0, _styles.withStyles)(styles)(ProgressIcon);

exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9Hcm91cGVkTWVudS9NZW51L1Byb2dyZXNzSWNvbi5qcyJdLCJuYW1lcyI6WyJzdHlsZXMiLCJyb290IiwicG9zaXRpb24iLCJwcm9ncmVzcyIsInBvc3RpaW9uIiwiY29sb3IiLCJzaGFkb3ciLCJQcm9ncmVzc0ljb24iLCJjbGFzc2VzIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwib2JqZWN0IiwiaXNSZXF1aXJlZCIsIm51bWJlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBRUEsSUFBTUEsTUFBTSxHQUFHLFNBQVRBLE1BQVM7QUFBQSxTQUFPO0FBQ3BCQyxJQUFBQSxJQUFJLEVBQUU7QUFBRUMsTUFBQUEsUUFBUSxFQUFFO0FBQVosS0FEYztBQUVwQkMsSUFBQUEsUUFBUSxFQUFFO0FBQ1JDLE1BQUFBLFFBQVEsRUFBRSxVQURGO0FBRVJDLE1BQUFBLEtBQUssRUFBRTtBQUZDLEtBRlU7QUFNcEJDLElBQUFBLE1BQU0sRUFBRTtBQUNOSixNQUFBQSxRQUFRLEVBQUUsVUFESjtBQUVORyxNQUFBQSxLQUFLLEVBQUU7QUFGRDtBQU5ZLEdBQVA7QUFBQSxDQUFmO0FBWUE7Ozs7OztBQUlBLElBQU1FLFlBQVksR0FBRyxTQUFmQSxZQUFlO0FBQUEsTUFBR0MsT0FBSCxRQUFHQSxPQUFIO0FBQUEsTUFBWUwsUUFBWixRQUFZQSxRQUFaO0FBQUEsU0FDbkI7QUFBSyxJQUFBLFNBQVMsRUFBRUssT0FBTyxDQUFDUDtBQUF4QixLQUNFLGdDQUFDLDRCQUFEO0FBQ0UsSUFBQSxTQUFTLEVBQUVPLE9BQU8sQ0FBQ0YsTUFEckI7QUFFRSxJQUFBLElBQUksRUFBRSxFQUZSO0FBR0UsSUFBQSxTQUFTLEVBQUUsQ0FIYjtBQUlFLElBQUEsT0FBTyxFQUFDLFFBSlY7QUFLRSxJQUFBLEtBQUssRUFBRTtBQUxULElBREYsRUFRRSxnQ0FBQyw0QkFBRDtBQUNFLElBQUEsU0FBUyxFQUFFRSxPQUFPLENBQUNMLFFBRHJCO0FBRUUsSUFBQSxJQUFJLEVBQUUsRUFGUjtBQUdFLElBQUEsU0FBUyxFQUFFLENBSGI7QUFJRSxJQUFBLE9BQU8sRUFBQyxRQUpWO0FBS0UsSUFBQSxLQUFLLEVBQUVBO0FBTFQsSUFSRixDQURtQjtBQUFBLENBQXJCOztBQW1CQUksWUFBWSxDQUFDRSxTQUFiLEdBQXlCO0FBQ3ZCRCxFQUFBQSxPQUFPLEVBQUVFLHNCQUFVQyxNQUFWLENBQWlCQyxVQURIO0FBRXZCVCxFQUFBQSxRQUFRLEVBQUVPLHNCQUFVRyxNQUFWLENBQWlCRDtBQUZKLENBQXpCOztlQUtlLHdCQUFXWixNQUFYLEVBQW1CTyxZQUFuQixDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyB3aXRoU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcbmltcG9ydCBDaXJjdWxhclByb2dyZXNzIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NpcmN1bGFyUHJvZ3Jlc3MnO1xuXG5jb25zdCBzdHlsZXMgPSAoKSA9PiAoe1xuICByb290OiB7IHBvc2l0aW9uOiAncmVsYXRpdmUnIH0sXG4gIHByb2dyZXNzOiB7XG4gICAgcG9zdGlpb246ICdhYnNvbHV0ZScsXG4gICAgY29sb3I6ICd2YXIoLS1jb21wbGV0ZWQtY29sb3IpJyxcbiAgfSxcbiAgc2hhZG93OiB7XG4gICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgY29sb3I6ICcjRUVFRUVFJyxcbiAgfSxcbn0pO1xuXG4vKipcbiAqIERpc3BsYXlzIGEgY2lyY3VsYXIgcHJvZ3Jlc3MgaWNvbiB3aXRoIGEgZmFpbnQgYmFja2dyb3VuZFxuICogQHBhcmFtIHtudW1iZXJ9IHByb2dyZXNzIC0gYSB2YWx1ZSBiZXR3ZWVuIDAgYW5kIDEwMCBpbmNsdXNpdmVcbiAqL1xuY29uc3QgUHJvZ3Jlc3NJY29uID0gKHsgY2xhc3NlcywgcHJvZ3Jlc3MgfSkgPT4gKFxuICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fT5cbiAgICA8Q2lyY3VsYXJQcm9ncmVzc1xuICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLnNoYWRvd31cbiAgICAgIHNpemU9ezIyfVxuICAgICAgdGhpY2tuZXNzPXs2fVxuICAgICAgdmFyaWFudD1cInN0YXRpY1wiXG4gICAgICB2YWx1ZT17MTAwfVxuICAgIC8+XG4gICAgPENpcmN1bGFyUHJvZ3Jlc3NcbiAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5wcm9ncmVzc31cbiAgICAgIHNpemU9ezIyfVxuICAgICAgdGhpY2tuZXNzPXs3fVxuICAgICAgdmFyaWFudD1cInN0YXRpY1wiXG4gICAgICB2YWx1ZT17cHJvZ3Jlc3N9XG4gICAgLz5cbiAgPC9kaXY+XG4pO1xuXG5Qcm9ncmVzc0ljb24ucHJvcFR5cGVzID0ge1xuICBjbGFzc2VzOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG4gIHByb2dyZXNzOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG59O1xuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGVzKHN0eWxlcykoUHJvZ3Jlc3NJY29uKTtcbiJdfQ==