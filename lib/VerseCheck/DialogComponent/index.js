"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Dialog = _interopRequireDefault(require("@material-ui/core/Dialog"));

var _DialogActions = _interopRequireDefault(require("@material-ui/core/DialogActions"));

var _DialogContent = _interopRequireDefault(require("@material-ui/core/DialogContent"));

var _Toolbar = _interopRequireDefault(require("@material-ui/core/Toolbar"));

var _reactBootstrap = require("react-bootstrap");

var _localizationHelpers = require("../helpers/localizationHelpers");

var DialogComponent = function DialogComponent(_ref) {
  var dialogModalVisibility = _ref.dialogModalVisibility,
      translate = _ref.translate,
      handleSkip = _ref.handleSkip,
      handleClose = _ref.handleClose;
  var actions = [_react["default"].createElement("button", {
    key: 1,
    className: "btn-second",
    onClick: handleSkip
  }, translate('skip')), _react["default"].createElement("button", {
    key: 2,
    className: "btn-prime",
    onClick: handleClose
  }, translate('close'))];

  var headerContent = _react["default"].createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      width: '100%',
      marginLeft: 20,
      marginRight: 20
    }
  }, _react["default"].createElement("span", {
    style: {
      color: 'var(--reverse-color)'
    }
  }, translate('attention')), _react["default"].createElement(_reactBootstrap.Glyphicon, {
    onClick: handleClose,
    glyph: 'remove',
    style: {
      color: 'var(--reverse-color)',
      cursor: 'pointer',
      fontSize: '18px',
      "float": 'right'
    }
  }));

  var select = (0, _localizationHelpers.getTranslatedParts)(translate, 'select_translation', '${span}', 3);
  var skip = (0, _localizationHelpers.getTranslatedParts)(translate, 'can_skip', '${span}', 3);
  return _react["default"].createElement("div", null, _react["default"].createElement(_Dialog["default"], {
    open: dialogModalVisibility,
    onClose: handleClose
  }, _react["default"].createElement(_Toolbar["default"], {
    disableGutters: true,
    style: {
      backgroundColor: 'var(--accent-color-dark)'
    }
  }, headerContent), _react["default"].createElement("br", null), _react["default"].createElement("br", null), _react["default"].createElement(_DialogContent["default"], null, _react["default"].createElement("p", null, select[0], " ", _react["default"].createElement("span", {
    style: {
      color: 'var(--accent-color)',
      fontWeight: 'bold'
    }
  }, " ", select[1], " "), " ", select[2]), _react["default"].createElement("p", null, skip[0], " ", _react["default"].createElement("span", {
    style: {
      color: 'var(--accent-color)',
      fontWeight: 'bold'
    }
  }, " ", skip[1], " "), " ", skip[2])), _react["default"].createElement(_DialogActions["default"], {
    disableActionSpacing: true
  }, actions)));
};

DialogComponent.propTypes = {
  translate: _propTypes["default"].func.isRequired,
  handleClose: _propTypes["default"].func.isRequired,
  dialogModalVisibility: _propTypes["default"].bool.isRequired,
  handleSkip: _propTypes["default"].func.isRequired
};
var _default = DialogComponent;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9WZXJzZUNoZWNrL0RpYWxvZ0NvbXBvbmVudC9pbmRleC5qcyJdLCJuYW1lcyI6WyJEaWFsb2dDb21wb25lbnQiLCJkaWFsb2dNb2RhbFZpc2liaWxpdHkiLCJ0cmFuc2xhdGUiLCJoYW5kbGVTa2lwIiwiaGFuZGxlQ2xvc2UiLCJhY3Rpb25zIiwiaGVhZGVyQ29udGVudCIsImRpc3BsYXkiLCJqdXN0aWZ5Q29udGVudCIsIndpZHRoIiwibWFyZ2luTGVmdCIsIm1hcmdpblJpZ2h0IiwiY29sb3IiLCJjdXJzb3IiLCJmb250U2l6ZSIsInNlbGVjdCIsInNraXAiLCJiYWNrZ3JvdW5kQ29sb3IiLCJmb250V2VpZ2h0IiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwiZnVuYyIsImlzUmVxdWlyZWQiLCJib29sIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFFQSxJQUFJQSxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLE9BRWhCO0FBQUEsTUFESkMscUJBQ0ksUUFESkEscUJBQ0k7QUFBQSxNQURtQkMsU0FDbkIsUUFEbUJBLFNBQ25CO0FBQUEsTUFEOEJDLFVBQzlCLFFBRDhCQSxVQUM5QjtBQUFBLE1BRDBDQyxXQUMxQyxRQUQwQ0EsV0FDMUM7QUFDSixNQUFNQyxPQUFPLEdBQUcsQ0FDZDtBQUNFLElBQUEsR0FBRyxFQUFFLENBRFA7QUFFRSxJQUFBLFNBQVMsRUFBQyxZQUZaO0FBR0UsSUFBQSxPQUFPLEVBQUVGO0FBSFgsS0FJR0QsU0FBUyxDQUFDLE1BQUQsQ0FKWixDQURjLEVBT2Q7QUFDRSxJQUFBLEdBQUcsRUFBRSxDQURQO0FBRUUsSUFBQSxTQUFTLEVBQUMsV0FGWjtBQUdFLElBQUEsT0FBTyxFQUFFRTtBQUhYLEtBSUdGLFNBQVMsQ0FBQyxPQUFELENBSlosQ0FQYyxDQUFoQjs7QUFlQSxNQUFNSSxhQUFhLEdBQ2pCO0FBQUssSUFBQSxLQUFLLEVBQUU7QUFDVkMsTUFBQUEsT0FBTyxFQUFFLE1BREM7QUFDT0MsTUFBQUEsY0FBYyxFQUFFLGVBRHZCO0FBQ3dDQyxNQUFBQSxLQUFLLEVBQUMsTUFEOUM7QUFDc0RDLE1BQUFBLFVBQVUsRUFBQyxFQURqRTtBQUNxRUMsTUFBQUEsV0FBVyxFQUFDO0FBRGpGO0FBQVosS0FHRTtBQUFNLElBQUEsS0FBSyxFQUFFO0FBQUVDLE1BQUFBLEtBQUssRUFBRTtBQUFUO0FBQWIsS0FBaURWLFNBQVMsQ0FBQyxXQUFELENBQTFELENBSEYsRUFJRSxnQ0FBQyx5QkFBRDtBQUNFLElBQUEsT0FBTyxFQUFFRSxXQURYO0FBRUUsSUFBQSxLQUFLLEVBQUUsUUFGVDtBQUdFLElBQUEsS0FBSyxFQUFFO0FBQ0xRLE1BQUFBLEtBQUssRUFBRSxzQkFERjtBQUMwQkMsTUFBQUEsTUFBTSxFQUFFLFNBRGxDO0FBQzZDQyxNQUFBQSxRQUFRLEVBQUUsTUFEdkQ7QUFDK0QsZUFBTztBQUR0RTtBQUhULElBSkYsQ0FERjs7QUFlQSxNQUFJQyxNQUFNLEdBQUcsNkNBQW1CYixTQUFuQixFQUE4QixvQkFBOUIsRUFBb0QsU0FBcEQsRUFBK0QsQ0FBL0QsQ0FBYjtBQUNBLE1BQUljLElBQUksR0FBRyw2Q0FBbUJkLFNBQW5CLEVBQThCLFVBQTlCLEVBQTBDLFNBQTFDLEVBQXFELENBQXJELENBQVg7QUFDQSxTQUNFLDZDQUNFLGdDQUFDLGtCQUFEO0FBQ0UsSUFBQSxJQUFJLEVBQUVELHFCQURSO0FBRUUsSUFBQSxPQUFPLEVBQUVHO0FBRlgsS0FHRSxnQ0FBQyxtQkFBRDtBQUFTLElBQUEsY0FBYyxFQUFFLElBQXpCO0FBQStCLElBQUEsS0FBSyxFQUFFO0FBQUVhLE1BQUFBLGVBQWUsRUFBRTtBQUFuQjtBQUF0QyxLQUNHWCxhQURILENBSEYsRUFNRSwyQ0FORixFQU9FLDJDQVBGLEVBUUUsZ0NBQUMseUJBQUQsUUFDRSwyQ0FDR1MsTUFBTSxDQUFDLENBQUQsQ0FEVCxPQUNjO0FBQU0sSUFBQSxLQUFLLEVBQUU7QUFBRUgsTUFBQUEsS0FBSyxFQUFFLHFCQUFUO0FBQWdDTSxNQUFBQSxVQUFVLEVBQUU7QUFBNUM7QUFBYixVQUFxRUgsTUFBTSxDQUFDLENBQUQsQ0FBM0UsTUFEZCxPQUN1R0EsTUFBTSxDQUFDLENBQUQsQ0FEN0csQ0FERixFQUlFLDJDQUNHQyxJQUFJLENBQUMsQ0FBRCxDQURQLE9BQ1k7QUFBTSxJQUFBLEtBQUssRUFBRTtBQUFFSixNQUFBQSxLQUFLLEVBQUUscUJBQVQ7QUFBZ0NNLE1BQUFBLFVBQVUsRUFBRTtBQUE1QztBQUFiLFVBQXFFRixJQUFJLENBQUMsQ0FBRCxDQUF6RSxNQURaLE9BQ21HQSxJQUFJLENBQUMsQ0FBRCxDQUR2RyxDQUpGLENBUkYsRUFnQkUsZ0NBQUMseUJBQUQ7QUFBZSxJQUFBLG9CQUFvQixFQUFFO0FBQXJDLEtBQ0dYLE9BREgsQ0FoQkYsQ0FERixDQURGO0FBd0JELENBM0REOztBQTZEQUwsZUFBZSxDQUFDbUIsU0FBaEIsR0FBNEI7QUFDMUJqQixFQUFBQSxTQUFTLEVBQUVrQixzQkFBVUMsSUFBVixDQUFlQyxVQURBO0FBRTFCbEIsRUFBQUEsV0FBVyxFQUFFZ0Isc0JBQVVDLElBQVYsQ0FBZUMsVUFGRjtBQUcxQnJCLEVBQUFBLHFCQUFxQixFQUFFbUIsc0JBQVVHLElBQVYsQ0FBZUQsVUFIWjtBQUkxQm5CLEVBQUFBLFVBQVUsRUFBRWlCLHNCQUFVQyxJQUFWLENBQWVDO0FBSkQsQ0FBNUI7ZUFPZXRCLGUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBEaWFsb2cgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvRGlhbG9nJztcbmltcG9ydCBEaWFsb2dBY3Rpb25zIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0RpYWxvZ0FjdGlvbnMnO1xuaW1wb3J0IERpYWxvZ0NvbnRlbnQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvRGlhbG9nQ29udGVudCc7XG5pbXBvcnQgVG9vbGJhciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Ub29sYmFyJztcbmltcG9ydCB7IEdseXBoaWNvbiB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCc7XG5pbXBvcnQgeyBnZXRUcmFuc2xhdGVkUGFydHMgfSBmcm9tICcuLi9oZWxwZXJzL2xvY2FsaXphdGlvbkhlbHBlcnMnO1xuXG5sZXQgRGlhbG9nQ29tcG9uZW50ID0gKHtcbiAgZGlhbG9nTW9kYWxWaXNpYmlsaXR5LCB0cmFuc2xhdGUsIGhhbmRsZVNraXAsIGhhbmRsZUNsb3NlLFxufSkgPT4ge1xuICBjb25zdCBhY3Rpb25zID0gW1xuICAgIDxidXR0b25cbiAgICAgIGtleT17MX1cbiAgICAgIGNsYXNzTmFtZT1cImJ0bi1zZWNvbmRcIlxuICAgICAgb25DbGljaz17aGFuZGxlU2tpcH0+XG4gICAgICB7dHJhbnNsYXRlKCdza2lwJyl9XG4gICAgPC9idXR0b24+LFxuICAgIDxidXR0b25cbiAgICAgIGtleT17Mn1cbiAgICAgIGNsYXNzTmFtZT1cImJ0bi1wcmltZVwiXG4gICAgICBvbkNsaWNrPXtoYW5kbGVDbG9zZX0gPlxuICAgICAge3RyYW5zbGF0ZSgnY2xvc2UnKX1cbiAgICA8L2J1dHRvbj4sXG4gIF07XG5cbiAgY29uc3QgaGVhZGVyQ29udGVudCA9IChcbiAgICA8ZGl2IHN0eWxlPXt7XG4gICAgICBkaXNwbGF5OiAnZmxleCcsIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYmV0d2VlbicsIHdpZHRoOicxMDAlJywgbWFyZ2luTGVmdDoyMCwgbWFyZ2luUmlnaHQ6MjAsXG4gICAgfX0+XG4gICAgICA8c3BhbiBzdHlsZT17eyBjb2xvcjogJ3ZhcigtLXJldmVyc2UtY29sb3IpJyB9fT57dHJhbnNsYXRlKCdhdHRlbnRpb24nKX08L3NwYW4+XG4gICAgICA8R2x5cGhpY29uXG4gICAgICAgIG9uQ2xpY2s9e2hhbmRsZUNsb3NlfVxuICAgICAgICBnbHlwaD17J3JlbW92ZSd9XG4gICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgY29sb3I6ICd2YXIoLS1yZXZlcnNlLWNvbG9yKScsIGN1cnNvcjogJ3BvaW50ZXInLCBmb250U2l6ZTogJzE4cHgnLCBmbG9hdDogJ3JpZ2h0JyxcbiAgICAgICAgfX1cbiAgICAgIC8+XG4gICAgPC9kaXY+XG4gICk7XG5cbiAgbGV0IHNlbGVjdCA9IGdldFRyYW5zbGF0ZWRQYXJ0cyh0cmFuc2xhdGUsICdzZWxlY3RfdHJhbnNsYXRpb24nLCAnJHtzcGFufScsIDMpO1xuICBsZXQgc2tpcCA9IGdldFRyYW5zbGF0ZWRQYXJ0cyh0cmFuc2xhdGUsICdjYW5fc2tpcCcsICcke3NwYW59JywgMyk7XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxEaWFsb2dcbiAgICAgICAgb3Blbj17ZGlhbG9nTW9kYWxWaXNpYmlsaXR5fVxuICAgICAgICBvbkNsb3NlPXtoYW5kbGVDbG9zZX0+XG4gICAgICAgIDxUb29sYmFyIGRpc2FibGVHdXR0ZXJzPXt0cnVlfSBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6ICd2YXIoLS1hY2NlbnQtY29sb3ItZGFyayknIH19PlxuICAgICAgICAgIHtoZWFkZXJDb250ZW50fVxuICAgICAgICA8L1Rvb2xiYXI+XG4gICAgICAgIDxiciAvPlxuICAgICAgICA8YnIgLz5cbiAgICAgICAgPERpYWxvZ0NvbnRlbnQ+XG4gICAgICAgICAgPHA+XG4gICAgICAgICAgICB7c2VsZWN0WzBdfSA8c3BhbiBzdHlsZT17eyBjb2xvcjogJ3ZhcigtLWFjY2VudC1jb2xvciknLCBmb250V2VpZ2h0OiAnYm9sZCcgfX0+IHtzZWxlY3RbMV19IDwvc3Bhbj4ge3NlbGVjdFsyXX1cbiAgICAgICAgICA8L3A+XG4gICAgICAgICAgPHA+XG4gICAgICAgICAgICB7c2tpcFswXX0gPHNwYW4gc3R5bGU9e3sgY29sb3I6ICd2YXIoLS1hY2NlbnQtY29sb3IpJywgZm9udFdlaWdodDogJ2JvbGQnIH19PiB7c2tpcFsxXX0gPC9zcGFuPiB7c2tpcFsyXX1cbiAgICAgICAgICA8L3A+XG4gICAgICAgIDwvRGlhbG9nQ29udGVudD5cbiAgICAgICAgPERpYWxvZ0FjdGlvbnMgZGlzYWJsZUFjdGlvblNwYWNpbmc9e3RydWV9PlxuICAgICAgICAgIHthY3Rpb25zfVxuICAgICAgICA8L0RpYWxvZ0FjdGlvbnM+XG4gICAgICA8L0RpYWxvZz5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbkRpYWxvZ0NvbXBvbmVudC5wcm9wVHlwZXMgPSB7XG4gIHRyYW5zbGF0ZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgaGFuZGxlQ2xvc2U6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIGRpYWxvZ01vZGFsVmlzaWJpbGl0eTogUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZCxcbiAgaGFuZGxlU2tpcDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IERpYWxvZ0NvbXBvbmVudDtcbiJdfQ==