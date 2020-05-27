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

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactBootstrap = require("react-bootstrap");

require("./BibleHeadingsRow.styles.css");

var rowStyle = {
  display: 'flex',
  height: '80px',
  margin: '0',
  backgroundColor: 'var(--reverse-color)'
};

var BibleHeadingsRow = /*#__PURE__*/function (_Component) {
  (0, _inherits2["default"])(BibleHeadingsRow, _Component);

  function BibleHeadingsRow() {
    (0, _classCallCheck2["default"])(this, BibleHeadingsRow);
    return (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(BibleHeadingsRow).apply(this, arguments));
  }

  (0, _createClass2["default"])(BibleHeadingsRow, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          currentPaneSettings = _this$props.currentPaneSettings,
          projectDetailsReducer = _this$props.projectDetailsReducer,
          bibles = _this$props.bibles;
      var bibleHeadings = [];

      for (var i = 0, len = currentPaneSettings.length; i < len; i++) {
        var paneSetting = currentPaneSettings[i];
        var index = i;
        var languageId = paneSetting.languageId;
        var bibleId = paneSetting.bibleId;
        var _bibles$languageId$bi = bibles[languageId][bibleId]['manifest'],
            language_name = _bibles$languageId$bi.language_name,
            direction = _bibles$languageId$bi.direction;
        var resourceText = bibleId !== 'targetBible' ? ' (' + bibleId.toUpperCase() + ')' : '';
        var headingText = language_name + resourceText;
        var dir = direction;

        if (!dir) {
          dir = projectDetailsReducer.manifest.target_language.direction;
        }

        var colStyle = {
          minWidth: '240px',
          alignItems: 'stretch',
          padding: '10px',
          fontSize: '16px',
          fontWeight: 'bold',
          color: 'var(--text-color-dark)',
          borderRight: '1px solid var(--border-color)',
          borderBottom: '3px solid var(--border-color)',
          direction: dir
        };
        bibleHeadings.push(_react["default"].createElement(_reactBootstrap.Col, {
          key: index,
          md: 4,
          sm: 4,
          xs: 4,
          lg: 4,
          style: colStyle
        }, _react["default"].createElement("span", null, headingText)));
      }

      return _react["default"].createElement(_reactBootstrap.Row, {
        style: rowStyle
      }, bibleHeadings);
    }
  }]);
  return BibleHeadingsRow;
}(_react.Component);

BibleHeadingsRow.propTypes = {
  currentPaneSettings: _propTypes["default"].array.isRequired,
  projectDetailsReducer: _propTypes["default"].object.isRequired,
  bibles: _propTypes["default"].object.isRequired
};
var _default = BibleHeadingsRow;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9TY3JpcHR1cmVQYW5lL0V4cGFuZGVkU2NyaXB0dXJlUGFuZU1vZGFsL0NoYXB0ZXJWaWV3L0JpYmxlSGVhZGluZ3NSb3cvaW5kZXguanMiXSwibmFtZXMiOlsicm93U3R5bGUiLCJkaXNwbGF5IiwiaGVpZ2h0IiwibWFyZ2luIiwiYmFja2dyb3VuZENvbG9yIiwiQmlibGVIZWFkaW5nc1JvdyIsInByb3BzIiwiY3VycmVudFBhbmVTZXR0aW5ncyIsInByb2plY3REZXRhaWxzUmVkdWNlciIsImJpYmxlcyIsImJpYmxlSGVhZGluZ3MiLCJpIiwibGVuIiwibGVuZ3RoIiwicGFuZVNldHRpbmciLCJpbmRleCIsImxhbmd1YWdlSWQiLCJiaWJsZUlkIiwibGFuZ3VhZ2VfbmFtZSIsImRpcmVjdGlvbiIsInJlc291cmNlVGV4dCIsInRvVXBwZXJDYXNlIiwiaGVhZGluZ1RleHQiLCJkaXIiLCJtYW5pZmVzdCIsInRhcmdldF9sYW5ndWFnZSIsImNvbFN0eWxlIiwibWluV2lkdGgiLCJhbGlnbkl0ZW1zIiwicGFkZGluZyIsImZvbnRTaXplIiwiZm9udFdlaWdodCIsImNvbG9yIiwiYm9yZGVyUmlnaHQiLCJib3JkZXJCb3R0b20iLCJwdXNoIiwiQ29tcG9uZW50IiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwiYXJyYXkiLCJpc1JlcXVpcmVkIiwib2JqZWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFFQTs7QUFFQSxJQUFNQSxRQUFRLEdBQUc7QUFDZkMsRUFBQUEsT0FBTyxFQUFFLE1BRE07QUFFZkMsRUFBQUEsTUFBTSxFQUFFLE1BRk87QUFHZkMsRUFBQUEsTUFBTSxFQUFFLEdBSE87QUFJZkMsRUFBQUEsZUFBZSxFQUFFO0FBSkYsQ0FBakI7O0lBT01DLGdCOzs7Ozs7Ozs7OzZCQUNLO0FBQUEsd0JBS0gsS0FBS0MsS0FMRjtBQUFBLFVBRUxDLG1CQUZLLGVBRUxBLG1CQUZLO0FBQUEsVUFHTEMscUJBSEssZUFHTEEscUJBSEs7QUFBQSxVQUlMQyxNQUpLLGVBSUxBLE1BSks7QUFNUCxVQUFNQyxhQUFhLEdBQUcsRUFBdEI7O0FBRUEsV0FBSyxJQUFJQyxDQUFDLEdBQUcsQ0FBUixFQUFXQyxHQUFHLEdBQUdMLG1CQUFtQixDQUFDTSxNQUExQyxFQUFrREYsQ0FBQyxHQUFHQyxHQUF0RCxFQUEyREQsQ0FBQyxFQUE1RCxFQUFnRTtBQUM5RCxZQUFNRyxXQUFXLEdBQUdQLG1CQUFtQixDQUFDSSxDQUFELENBQXZDO0FBQ0EsWUFBTUksS0FBSyxHQUFHSixDQUFkO0FBQ0EsWUFBTUssVUFBVSxHQUFHRixXQUFXLENBQUNFLFVBQS9CO0FBQ0EsWUFBTUMsT0FBTyxHQUFHSCxXQUFXLENBQUNHLE9BQTVCO0FBSjhELG9DQVExRFIsTUFBTSxDQUFDTyxVQUFELENBQU4sQ0FBbUJDLE9BQW5CLEVBQTRCLFVBQTVCLENBUjBEO0FBQUEsWUFNNURDLGFBTjRELHlCQU01REEsYUFONEQ7QUFBQSxZQU81REMsU0FQNEQseUJBTzVEQSxTQVA0RDtBQVU5RCxZQUFNQyxZQUFZLEdBQUdILE9BQU8sS0FBSyxhQUFaLEdBQTRCLE9BQU9BLE9BQU8sQ0FBQ0ksV0FBUixFQUFQLEdBQStCLEdBQTNELEdBQWlFLEVBQXRGO0FBQ0EsWUFBTUMsV0FBVyxHQUFHSixhQUFhLEdBQUdFLFlBQXBDO0FBQ0EsWUFBSUcsR0FBRyxHQUFHSixTQUFWOztBQUVBLFlBQUksQ0FBQ0ksR0FBTCxFQUFVO0FBQ1JBLFVBQUFBLEdBQUcsR0FBR2YscUJBQXFCLENBQUNnQixRQUF0QixDQUErQkMsZUFBL0IsQ0FBK0NOLFNBQXJEO0FBQ0Q7O0FBRUQsWUFBTU8sUUFBUSxHQUFHO0FBQ2ZDLFVBQUFBLFFBQVEsRUFBRSxPQURLO0FBQ0lDLFVBQUFBLFVBQVUsRUFBRSxTQURoQjtBQUMyQkMsVUFBQUEsT0FBTyxFQUFFLE1BRHBDO0FBQzRDQyxVQUFBQSxRQUFRLEVBQUUsTUFEdEQ7QUFDOERDLFVBQUFBLFVBQVUsRUFBRSxNQUQxRTtBQUVmQyxVQUFBQSxLQUFLLEVBQUUsd0JBRlE7QUFFa0JDLFVBQUFBLFdBQVcsRUFBRSwrQkFGL0I7QUFHZkMsVUFBQUEsWUFBWSxFQUFFLCtCQUhDO0FBR2dDZixVQUFBQSxTQUFTLEVBQUVJO0FBSDNDLFNBQWpCO0FBTUFiLFFBQUFBLGFBQWEsQ0FBQ3lCLElBQWQsQ0FDRSxnQ0FBQyxtQkFBRDtBQUFLLFVBQUEsR0FBRyxFQUFFcEIsS0FBVjtBQUFpQixVQUFBLEVBQUUsRUFBRSxDQUFyQjtBQUF3QixVQUFBLEVBQUUsRUFBRSxDQUE1QjtBQUErQixVQUFBLEVBQUUsRUFBRSxDQUFuQztBQUFzQyxVQUFBLEVBQUUsRUFBRSxDQUExQztBQUE2QyxVQUFBLEtBQUssRUFBRVc7QUFBcEQsV0FDRSw4Q0FBT0osV0FBUCxDQURGLENBREY7QUFLRDs7QUFFRCxhQUNFLGdDQUFDLG1CQUFEO0FBQUssUUFBQSxLQUFLLEVBQUV0QjtBQUFaLFNBQ0dVLGFBREgsQ0FERjtBQUtEOzs7RUE3QzRCMEIsZ0I7O0FBZ0QvQi9CLGdCQUFnQixDQUFDZ0MsU0FBakIsR0FBNkI7QUFDM0I5QixFQUFBQSxtQkFBbUIsRUFBRStCLHNCQUFVQyxLQUFWLENBQWdCQyxVQURWO0FBRTNCaEMsRUFBQUEscUJBQXFCLEVBQUU4QixzQkFBVUcsTUFBVixDQUFpQkQsVUFGYjtBQUczQi9CLEVBQUFBLE1BQU0sRUFBRTZCLHNCQUFVRyxNQUFWLENBQWlCRDtBQUhFLENBQTdCO2VBTWVuQyxnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgQ29sLCBSb3cgfSBmcm9tICdyZWFjdC1ib290c3RyYXAnO1xuXG5pbXBvcnQgJy4vQmlibGVIZWFkaW5nc1Jvdy5zdHlsZXMuY3NzJztcblxuY29uc3Qgcm93U3R5bGUgPSB7XG4gIGRpc3BsYXk6ICdmbGV4JyxcbiAgaGVpZ2h0OiAnODBweCcsXG4gIG1hcmdpbjogJzAnLFxuICBiYWNrZ3JvdW5kQ29sb3I6ICd2YXIoLS1yZXZlcnNlLWNvbG9yKScsXG59O1xuXG5jbGFzcyBCaWJsZUhlYWRpbmdzUm93IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIGN1cnJlbnRQYW5lU2V0dGluZ3MsXG4gICAgICBwcm9qZWN0RGV0YWlsc1JlZHVjZXIsXG4gICAgICBiaWJsZXMsXG4gICAgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgYmlibGVIZWFkaW5ncyA9IFtdO1xuXG4gICAgZm9yIChsZXQgaSA9IDAsIGxlbiA9IGN1cnJlbnRQYW5lU2V0dGluZ3MubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgIGNvbnN0IHBhbmVTZXR0aW5nID0gY3VycmVudFBhbmVTZXR0aW5nc1tpXTtcbiAgICAgIGNvbnN0IGluZGV4ID0gaTtcbiAgICAgIGNvbnN0IGxhbmd1YWdlSWQgPSBwYW5lU2V0dGluZy5sYW5ndWFnZUlkO1xuICAgICAgY29uc3QgYmlibGVJZCA9IHBhbmVTZXR0aW5nLmJpYmxlSWQ7XG4gICAgICBjb25zdCB7XG4gICAgICAgIGxhbmd1YWdlX25hbWUsXG4gICAgICAgIGRpcmVjdGlvbixcbiAgICAgIH0gPSBiaWJsZXNbbGFuZ3VhZ2VJZF1bYmlibGVJZF1bJ21hbmlmZXN0J107XG5cbiAgICAgIGNvbnN0IHJlc291cmNlVGV4dCA9IGJpYmxlSWQgIT09ICd0YXJnZXRCaWJsZScgPyAnICgnICsgYmlibGVJZC50b1VwcGVyQ2FzZSgpICsgJyknIDogJycgO1xuICAgICAgY29uc3QgaGVhZGluZ1RleHQgPSBsYW5ndWFnZV9uYW1lICsgcmVzb3VyY2VUZXh0O1xuICAgICAgbGV0IGRpciA9IGRpcmVjdGlvbjtcblxuICAgICAgaWYgKCFkaXIpIHtcbiAgICAgICAgZGlyID0gcHJvamVjdERldGFpbHNSZWR1Y2VyLm1hbmlmZXN0LnRhcmdldF9sYW5ndWFnZS5kaXJlY3Rpb247XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGNvbFN0eWxlID0ge1xuICAgICAgICBtaW5XaWR0aDogJzI0MHB4JywgYWxpZ25JdGVtczogJ3N0cmV0Y2gnLCBwYWRkaW5nOiAnMTBweCcsIGZvbnRTaXplOiAnMTZweCcsIGZvbnRXZWlnaHQ6ICdib2xkJyxcbiAgICAgICAgY29sb3I6ICd2YXIoLS10ZXh0LWNvbG9yLWRhcmspJywgYm9yZGVyUmlnaHQ6ICcxcHggc29saWQgdmFyKC0tYm9yZGVyLWNvbG9yKScsXG4gICAgICAgIGJvcmRlckJvdHRvbTogJzNweCBzb2xpZCB2YXIoLS1ib3JkZXItY29sb3IpJywgZGlyZWN0aW9uOiBkaXIsXG4gICAgICB9O1xuXG4gICAgICBiaWJsZUhlYWRpbmdzLnB1c2goXG4gICAgICAgIDxDb2wga2V5PXtpbmRleH0gbWQ9ezR9IHNtPXs0fSB4cz17NH0gbGc9ezR9IHN0eWxlPXtjb2xTdHlsZX0gPlxuICAgICAgICAgIDxzcGFuPntoZWFkaW5nVGV4dH08L3NwYW4+XG4gICAgICAgIDwvQ29sPixcbiAgICAgICk7XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxSb3cgc3R5bGU9e3Jvd1N0eWxlfT5cbiAgICAgICAge2JpYmxlSGVhZGluZ3N9XG4gICAgICA8L1Jvdz5cbiAgICApO1xuICB9XG59XG5cbkJpYmxlSGVhZGluZ3NSb3cucHJvcFR5cGVzID0ge1xuICBjdXJyZW50UGFuZVNldHRpbmdzOiBQcm9wVHlwZXMuYXJyYXkuaXNSZXF1aXJlZCxcbiAgcHJvamVjdERldGFpbHNSZWR1Y2VyOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG4gIGJpYmxlczogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgQmlibGVIZWFkaW5nc1JvdztcbiJdfQ==