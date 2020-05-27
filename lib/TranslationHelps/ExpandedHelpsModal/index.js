"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styles = require("@material-ui/core/styles");

var _Dialog = _interopRequireDefault(require("@material-ui/core/Dialog"));

var _DialogActions = _interopRequireDefault(require("@material-ui/core/DialogActions"));

var _DialogContent = _interopRequireDefault(require("@material-ui/core/DialogContent"));

var _Toolbar = _interopRequireDefault(require("@material-ui/core/Toolbar"));

var _IconButton = _interopRequireDefault(require("@material-ui/core/IconButton"));

var _reactBootstrap = require("react-bootstrap");

var _marked = _interopRequireDefault(require("marked"));

var _Paper = _interopRequireDefault(require("@material-ui/core/Paper"));

var _reactDraggable = _interopRequireDefault(require("react-draggable"));

require("./ExpandedHelpsModal.styles.css");

/**
* @description This component displays a modal when the user clicks the
* new-window glyphicon button on translationHelps component.
*/
function PaperComponent(props) {
  // component will only be draggable by element with the className in the handle prop
  return _react["default"].createElement(_reactDraggable["default"], {
    handle: ".thelps-tool-bar "
  }, _react["default"].createElement(_Paper["default"], props));
}

var styles = {
  paper: {
    minWidth: 800,
    minHeight: 500
  },
  paperRoot: {
    margin: '0px'
  }
};

var ExpandedHelpsModal = function ExpandedHelpsModal(_ref) {
  var show = _ref.show,
      onHide = _ref.onHide,
      title = _ref.title,
      article = _ref.article,
      classes = _ref.classes,
      translate = _ref.translate;
  return _react["default"].createElement(_Dialog["default"], {
    classes: {
      paper: classes.paper
    },
    open: show,
    onClose: onHide,
    maxWidth: "md",
    PaperComponent: PaperComponent,
    PaperProps: {
      className: classes.paperRoot
    },
    "aria-labelledby": "thelps-dialog"
  }, _react["default"].createElement(_Toolbar["default"], {
    className: "thelps-tool-bar"
  }, _react["default"].createElement("div", {
    className: "tool-bar-title"
  }, title), _react["default"].createElement(_IconButton["default"], {
    style: {
      position: 'absolute',
      right: 10
    },
    color: "inherit",
    onClick: onHide,
    "aria-label": "Close",
    className: "close-button"
  }, _react["default"].createElement(_reactBootstrap.Glyphicon, {
    glyph: "remove"
  }))), _react["default"].createElement(_DialogContent["default"], {
    className: "dialog-content"
  }, _react["default"].createElement("div", {
    dangerouslySetInnerHTML: {
      __html: (0, _marked["default"])(article)
    }
  })), _react["default"].createElement(_DialogActions["default"], {
    disableActionSpacing: true,
    className: "dialog-actions"
  }, _react["default"].createElement("button", {
    className: "btn-prime",
    onClick: onHide
  }, translate('close'))));
};

ExpandedHelpsModal.propTypes = {
  show: _propTypes["default"].bool.isRequired,
  onHide: _propTypes["default"].func.isRequired,
  title: _propTypes["default"].string.isRequired,
  article: _propTypes["default"].string.isRequired,
  classes: _propTypes["default"].object.isRequired,
  translate: _propTypes["default"].func.isRequired
};

var _default = (0, _styles.withStyles)(styles)(ExpandedHelpsModal);

exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9UcmFuc2xhdGlvbkhlbHBzL0V4cGFuZGVkSGVscHNNb2RhbC9pbmRleC5qcyJdLCJuYW1lcyI6WyJQYXBlckNvbXBvbmVudCIsInByb3BzIiwic3R5bGVzIiwicGFwZXIiLCJtaW5XaWR0aCIsIm1pbkhlaWdodCIsInBhcGVyUm9vdCIsIm1hcmdpbiIsIkV4cGFuZGVkSGVscHNNb2RhbCIsInNob3ciLCJvbkhpZGUiLCJ0aXRsZSIsImFydGljbGUiLCJjbGFzc2VzIiwidHJhbnNsYXRlIiwiY2xhc3NOYW1lIiwicG9zaXRpb24iLCJyaWdodCIsIl9faHRtbCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsImJvb2wiLCJpc1JlcXVpcmVkIiwiZnVuYyIsInN0cmluZyIsIm9iamVjdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBSUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBRUE7O0FBakJBOzs7O0FBbUJBLFNBQVNBLGNBQVQsQ0FBd0JDLEtBQXhCLEVBQStCO0FBQzdCO0FBQ0EsU0FDRSxnQ0FBQywwQkFBRDtBQUFXLElBQUEsTUFBTSxFQUFDO0FBQWxCLEtBQ0UsZ0NBQUMsaUJBQUQsRUFBV0EsS0FBWCxDQURGLENBREY7QUFLRDs7QUFFRCxJQUFNQyxNQUFNLEdBQUc7QUFDYkMsRUFBQUEsS0FBSyxFQUFFO0FBQ0xDLElBQUFBLFFBQVEsRUFBRSxHQURMO0FBRUxDLElBQUFBLFNBQVMsRUFBRTtBQUZOLEdBRE07QUFLYkMsRUFBQUEsU0FBUyxFQUFFO0FBQUVDLElBQUFBLE1BQU0sRUFBRTtBQUFWO0FBTEUsQ0FBZjs7QUFRQSxJQUFNQyxrQkFBa0IsR0FBRyxTQUFyQkEsa0JBQXFCO0FBQUEsTUFDekJDLElBRHlCLFFBQ3pCQSxJQUR5QjtBQUFBLE1BRXpCQyxNQUZ5QixRQUV6QkEsTUFGeUI7QUFBQSxNQUd6QkMsS0FIeUIsUUFHekJBLEtBSHlCO0FBQUEsTUFJekJDLE9BSnlCLFFBSXpCQSxPQUp5QjtBQUFBLE1BS3pCQyxPQUx5QixRQUt6QkEsT0FMeUI7QUFBQSxNQU16QkMsU0FOeUIsUUFNekJBLFNBTnlCO0FBQUEsU0FRekIsZ0NBQUMsa0JBQUQ7QUFDRSxJQUFBLE9BQU8sRUFBRTtBQUFFWCxNQUFBQSxLQUFLLEVBQUVVLE9BQU8sQ0FBQ1Y7QUFBakIsS0FEWDtBQUVFLElBQUEsSUFBSSxFQUFFTSxJQUZSO0FBR0UsSUFBQSxPQUFPLEVBQUVDLE1BSFg7QUFJRSxJQUFBLFFBQVEsRUFBQyxJQUpYO0FBS0UsSUFBQSxjQUFjLEVBQUVWLGNBTGxCO0FBTUUsSUFBQSxVQUFVLEVBQUU7QUFBRWUsTUFBQUEsU0FBUyxFQUFFRixPQUFPLENBQUNQO0FBQXJCLEtBTmQ7QUFPRSx1QkFBZ0I7QUFQbEIsS0FTRSxnQ0FBQyxtQkFBRDtBQUFTLElBQUEsU0FBUyxFQUFDO0FBQW5CLEtBQ0U7QUFBSyxJQUFBLFNBQVMsRUFBQztBQUFmLEtBQ0dLLEtBREgsQ0FERixFQUlFLGdDQUFDLHNCQUFEO0FBQVksSUFBQSxLQUFLLEVBQUU7QUFBRUssTUFBQUEsUUFBUSxFQUFFLFVBQVo7QUFBd0JDLE1BQUFBLEtBQUssRUFBRTtBQUEvQixLQUFuQjtBQUF3RCxJQUFBLEtBQUssRUFBQyxTQUE5RDtBQUF3RSxJQUFBLE9BQU8sRUFBRVAsTUFBakY7QUFBeUYsa0JBQVcsT0FBcEc7QUFBNEcsSUFBQSxTQUFTLEVBQUM7QUFBdEgsS0FDRSxnQ0FBQyx5QkFBRDtBQUFXLElBQUEsS0FBSyxFQUFDO0FBQWpCLElBREYsQ0FKRixDQVRGLEVBaUJFLGdDQUFDLHlCQUFEO0FBQWUsSUFBQSxTQUFTLEVBQUM7QUFBekIsS0FDRTtBQUFLLElBQUEsdUJBQXVCLEVBQUU7QUFBRVEsTUFBQUEsTUFBTSxFQUFFLHdCQUFPTixPQUFQO0FBQVY7QUFBOUIsSUFERixDQWpCRixFQW9CRSxnQ0FBQyx5QkFBRDtBQUFlLElBQUEsb0JBQW9CLE1BQW5DO0FBQW9DLElBQUEsU0FBUyxFQUFDO0FBQTlDLEtBQ0U7QUFBUSxJQUFBLFNBQVMsRUFBQyxXQUFsQjtBQUE4QixJQUFBLE9BQU8sRUFBRUY7QUFBdkMsS0FDR0ksU0FBUyxDQUFDLE9BQUQsQ0FEWixDQURGLENBcEJGLENBUnlCO0FBQUEsQ0FBM0I7O0FBcUNBTixrQkFBa0IsQ0FBQ1csU0FBbkIsR0FBK0I7QUFDN0JWLEVBQUFBLElBQUksRUFBRVcsc0JBQVVDLElBQVYsQ0FBZUMsVUFEUTtBQUU3QlosRUFBQUEsTUFBTSxFQUFFVSxzQkFBVUcsSUFBVixDQUFlRCxVQUZNO0FBRzdCWCxFQUFBQSxLQUFLLEVBQUVTLHNCQUFVSSxNQUFWLENBQWlCRixVQUhLO0FBSTdCVixFQUFBQSxPQUFPLEVBQUVRLHNCQUFVSSxNQUFWLENBQWlCRixVQUpHO0FBSzdCVCxFQUFBQSxPQUFPLEVBQUVPLHNCQUFVSyxNQUFWLENBQWlCSCxVQUxHO0FBTTdCUixFQUFBQSxTQUFTLEVBQUVNLHNCQUFVRyxJQUFWLENBQWVEO0FBTkcsQ0FBL0I7O2VBU2Usd0JBQVdwQixNQUFYLEVBQW1CTSxrQkFBbkIsQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuKiBAZGVzY3JpcHRpb24gVGhpcyBjb21wb25lbnQgZGlzcGxheXMgYSBtb2RhbCB3aGVuIHRoZSB1c2VyIGNsaWNrcyB0aGVcbiogbmV3LXdpbmRvdyBnbHlwaGljb24gYnV0dG9uIG9uIHRyYW5zbGF0aW9uSGVscHMgY29tcG9uZW50LlxuKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgd2l0aFN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XG5pbXBvcnQgRGlhbG9nIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0RpYWxvZyc7XG5pbXBvcnQgRGlhbG9nQWN0aW9ucyBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9EaWFsb2dBY3Rpb25zJztcbmltcG9ydCBEaWFsb2dDb250ZW50IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0RpYWxvZ0NvbnRlbnQnO1xuaW1wb3J0IFRvb2xiYXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVG9vbGJhcic7XG5pbXBvcnQgSWNvbkJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9JY29uQnV0dG9uJztcbmltcG9ydCB7IEdseXBoaWNvbiB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCc7XG5pbXBvcnQgbWFya2VkIGZyb20gJ21hcmtlZCc7XG5pbXBvcnQgUGFwZXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvUGFwZXInO1xuaW1wb3J0IERyYWdnYWJsZSBmcm9tICdyZWFjdC1kcmFnZ2FibGUnO1xuXG5pbXBvcnQgJy4vRXhwYW5kZWRIZWxwc01vZGFsLnN0eWxlcy5jc3MnO1xuXG5mdW5jdGlvbiBQYXBlckNvbXBvbmVudChwcm9wcykge1xuICAvLyBjb21wb25lbnQgd2lsbCBvbmx5IGJlIGRyYWdnYWJsZSBieSBlbGVtZW50IHdpdGggdGhlIGNsYXNzTmFtZSBpbiB0aGUgaGFuZGxlIHByb3BcbiAgcmV0dXJuIChcbiAgICA8RHJhZ2dhYmxlIGhhbmRsZT1cIi50aGVscHMtdG9vbC1iYXIgXCI+XG4gICAgICA8UGFwZXIgey4uLnByb3BzfS8+XG4gICAgPC9EcmFnZ2FibGU+XG4gICk7XG59XG5cbmNvbnN0IHN0eWxlcyA9IHtcbiAgcGFwZXI6IHtcbiAgICBtaW5XaWR0aDogODAwLFxuICAgIG1pbkhlaWdodDogNTAwLFxuICB9LFxuICBwYXBlclJvb3Q6IHsgbWFyZ2luOiAnMHB4JyB9LFxufTtcblxuY29uc3QgRXhwYW5kZWRIZWxwc01vZGFsID0gKHtcbiAgc2hvdyxcbiAgb25IaWRlLFxuICB0aXRsZSxcbiAgYXJ0aWNsZSxcbiAgY2xhc3NlcyxcbiAgdHJhbnNsYXRlLFxufSkgPT4gKFxuICA8RGlhbG9nXG4gICAgY2xhc3Nlcz17eyBwYXBlcjogY2xhc3Nlcy5wYXBlciB9fVxuICAgIG9wZW49e3Nob3d9XG4gICAgb25DbG9zZT17b25IaWRlfVxuICAgIG1heFdpZHRoPSdtZCdcbiAgICBQYXBlckNvbXBvbmVudD17UGFwZXJDb21wb25lbnR9XG4gICAgUGFwZXJQcm9wcz17eyBjbGFzc05hbWU6IGNsYXNzZXMucGFwZXJSb290IH19XG4gICAgYXJpYS1sYWJlbGxlZGJ5PVwidGhlbHBzLWRpYWxvZ1wiXG4gID5cbiAgICA8VG9vbGJhciBjbGFzc05hbWU9XCJ0aGVscHMtdG9vbC1iYXJcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidG9vbC1iYXItdGl0bGVcIj5cbiAgICAgICAge3RpdGxlfVxuICAgICAgPC9kaXY+XG4gICAgICA8SWNvbkJ1dHRvbiBzdHlsZT17eyBwb3NpdGlvbjogJ2Fic29sdXRlJywgcmlnaHQ6IDEwIH19IGNvbG9yPVwiaW5oZXJpdFwiIG9uQ2xpY2s9e29uSGlkZX0gYXJpYS1sYWJlbD1cIkNsb3NlXCIgY2xhc3NOYW1lPVwiY2xvc2UtYnV0dG9uXCI+XG4gICAgICAgIDxHbHlwaGljb24gZ2x5cGg9XCJyZW1vdmVcIiAvPlxuICAgICAgPC9JY29uQnV0dG9uPlxuICAgIDwvVG9vbGJhcj5cbiAgICA8RGlhbG9nQ29udGVudCBjbGFzc05hbWU9XCJkaWFsb2ctY29udGVudFwiPlxuICAgICAgPGRpdiBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IG1hcmtlZChhcnRpY2xlKSB9fSAvPlxuICAgIDwvRGlhbG9nQ29udGVudD5cbiAgICA8RGlhbG9nQWN0aW9ucyBkaXNhYmxlQWN0aW9uU3BhY2luZyBjbGFzc05hbWU9XCJkaWFsb2ctYWN0aW9uc1wiPlxuICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4tcHJpbWVcIiBvbkNsaWNrPXtvbkhpZGV9PlxuICAgICAgICB7dHJhbnNsYXRlKCdjbG9zZScpfVxuICAgICAgPC9idXR0b24+XG4gICAgPC9EaWFsb2dBY3Rpb25zPlxuICA8L0RpYWxvZz5cbik7XG5cblxuRXhwYW5kZWRIZWxwc01vZGFsLnByb3BUeXBlcyA9IHtcbiAgc2hvdzogUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZCxcbiAgb25IaWRlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICB0aXRsZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICBhcnRpY2xlOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gIGNsYXNzZXM6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgdHJhbnNsYXRlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlcyhzdHlsZXMpKEV4cGFuZGVkSGVscHNNb2RhbCk7XG4iXX0=