"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactBootstrap = require("react-bootstrap");

var _ExpandedHelpsModal = _interopRequireDefault(require("./ExpandedHelpsModal"));

var _THelpsMarkDown = _interopRequireDefault(require("./THelpsMarkDown"));

require("./TranslationHelps.styles.css");

/**
 *  TranslationHelps is a feature of the TranslationWords tool and consists of:
 *   A collapible sidebar showing the complete artical sumarized in panel
 *     The sidebar has a sash that expands to about 20% of the application window
 *     The sash can collapse to about 0.25in
 *     The expanded sidebar vertically wraps article text and can scroll entire article
 *     When expanded the "See More" button in panel is hidden
 *
 *
 *   It interoperates with CheckInfoCard
 */
// components
var TranslationHelps = function TranslationHelps(_ref) {
  var modalArticle = _ref.modalArticle,
      article = _ref.article,
      expandedHelpsButtonHoverText = _ref.expandedHelpsButtonHoverText,
      openExpandedHelpsModal = _ref.openExpandedHelpsModal,
      isShowHelpsSidebar = _ref.isShowHelpsSidebar,
      sidebarToggle = _ref.sidebarToggle,
      isShowHelpsExpanded = _ref.isShowHelpsExpanded,
      modalTitle = _ref.modalTitle,
      translate = _ref.translate;

  if (isShowHelpsSidebar) {
    return _react["default"].createElement("div", {
      className: "helps-sash-container"
    }, _react["default"].createElement("div", {
      className: "helps-sash-closed",
      onClick: sidebarToggle
    }, _react["default"].createElement(_reactBootstrap.Glyphicon, {
      glyph: "chevron-right",
      style: {
        cursor: 'pointer'
      }
    })), _react["default"].createElement("div", {
      className: "helps"
    }, _react["default"].createElement("div", {
      className: "helps-title-bar"
    }, _react["default"].createElement(_reactBootstrap.Glyphicon, {
      onClick: openExpandedHelpsModal,
      glyph: 'fullscreen',
      style: {
        cursor: 'pointer'
      },
      title: expandedHelpsButtonHoverText
    })), _react["default"].createElement(_THelpsMarkDown["default"], {
      article: article
    })), _react["default"].createElement(_ExpandedHelpsModal["default"], {
      translate: translate,
      show: isShowHelpsExpanded,
      onHide: openExpandedHelpsModal,
      title: modalTitle,
      article: modalArticle || article
    }));
  } else {
    return _react["default"].createElement("div", {
      className: "helps-sash-closed",
      onClick: sidebarToggle
    }, _react["default"].createElement(_reactBootstrap.Glyphicon, {
      glyph: "chevron-left",
      style: {
        cursor: 'pointer'
      },
      onClick: sidebarToggle
    }));
  }
};

TranslationHelps.propTypes = {
  modalArticle: _propTypes["default"].string.isRequired,
  article: _propTypes["default"].string.isRequired,
  expandedHelpsButtonHoverText: _propTypes["default"].string.isRequired,
  openExpandedHelpsModal: _propTypes["default"].func.isRequired,
  isShowHelpsSidebar: _propTypes["default"].bool.isRequired,
  sidebarToggle: _propTypes["default"].func.isRequired,
  isShowHelpsExpanded: _propTypes["default"].bool.isRequired,
  translate: _propTypes["default"].func.isRequired
};
TranslationHelps.defaultProps = {
  modalTitle: 'translationHelps',
  article: '',
  modalArticle: ''
};
var _default = TranslationHelps;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9UcmFuc2xhdGlvbkhlbHBzL1RyYW5zbGF0aW9uSGVscHMuanMiXSwibmFtZXMiOlsiVHJhbnNsYXRpb25IZWxwcyIsIm1vZGFsQXJ0aWNsZSIsImFydGljbGUiLCJleHBhbmRlZEhlbHBzQnV0dG9uSG92ZXJUZXh0Iiwib3BlbkV4cGFuZGVkSGVscHNNb2RhbCIsImlzU2hvd0hlbHBzU2lkZWJhciIsInNpZGViYXJUb2dnbGUiLCJpc1Nob3dIZWxwc0V4cGFuZGVkIiwibW9kYWxUaXRsZSIsInRyYW5zbGF0ZSIsImN1cnNvciIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsInN0cmluZyIsImlzUmVxdWlyZWQiLCJmdW5jIiwiYm9vbCIsImRlZmF1bHRQcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBWUE7O0FBQ0E7O0FBQ0E7O0FBRUE7O0FBQ0E7O0FBRUE7O0FBbkJBOzs7Ozs7Ozs7OztBQWVBO0FBTUEsSUFBTUEsZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFtQixPQVVuQjtBQUFBLE1BVEpDLFlBU0ksUUFUSkEsWUFTSTtBQUFBLE1BUkpDLE9BUUksUUFSSkEsT0FRSTtBQUFBLE1BUEpDLDRCQU9JLFFBUEpBLDRCQU9JO0FBQUEsTUFOSkMsc0JBTUksUUFOSkEsc0JBTUk7QUFBQSxNQUxKQyxrQkFLSSxRQUxKQSxrQkFLSTtBQUFBLE1BSkpDLGFBSUksUUFKSkEsYUFJSTtBQUFBLE1BSEpDLG1CQUdJLFFBSEpBLG1CQUdJO0FBQUEsTUFGSkMsVUFFSSxRQUZKQSxVQUVJO0FBQUEsTUFESkMsU0FDSSxRQURKQSxTQUNJOztBQUNKLE1BQUlKLGtCQUFKLEVBQXdCO0FBQ3RCLFdBQ0U7QUFBSyxNQUFBLFNBQVMsRUFBQztBQUFmLE9BQ0U7QUFBSyxNQUFBLFNBQVMsRUFBQyxtQkFBZjtBQUFtQyxNQUFBLE9BQU8sRUFBRUM7QUFBNUMsT0FDRSxnQ0FBQyx5QkFBRDtBQUNFLE1BQUEsS0FBSyxFQUFDLGVBRFI7QUFFRSxNQUFBLEtBQUssRUFBRTtBQUFFSSxRQUFBQSxNQUFNLEVBQUU7QUFBVjtBQUZULE1BREYsQ0FERixFQU1FO0FBQUssTUFBQSxTQUFTLEVBQUM7QUFBZixPQUNFO0FBQUssTUFBQSxTQUFTLEVBQUM7QUFBZixPQUNFLGdDQUFDLHlCQUFEO0FBQ0UsTUFBQSxPQUFPLEVBQUVOLHNCQURYO0FBRUUsTUFBQSxLQUFLLEVBQUUsWUFGVDtBQUdFLE1BQUEsS0FBSyxFQUFFO0FBQUVNLFFBQUFBLE1BQU0sRUFBRTtBQUFWLE9BSFQ7QUFJRSxNQUFBLEtBQUssRUFBRVA7QUFKVCxNQURGLENBREYsRUFRRSxnQ0FBQywwQkFBRDtBQUFnQixNQUFBLE9BQU8sRUFBRUQ7QUFBekIsTUFSRixDQU5GLEVBZ0JFLGdDQUFDLDhCQUFEO0FBQ0UsTUFBQSxTQUFTLEVBQUVPLFNBRGI7QUFFRSxNQUFBLElBQUksRUFBRUYsbUJBRlI7QUFHRSxNQUFBLE1BQU0sRUFBRUgsc0JBSFY7QUFJRSxNQUFBLEtBQUssRUFBRUksVUFKVDtBQUtFLE1BQUEsT0FBTyxFQUFFUCxZQUFZLElBQUlDO0FBTDNCLE1BaEJGLENBREY7QUF5QkQsR0ExQkQsTUEwQk87QUFDTCxXQUNFO0FBQUssTUFBQSxTQUFTLEVBQUMsbUJBQWY7QUFBbUMsTUFBQSxPQUFPLEVBQUVJO0FBQTVDLE9BQ0UsZ0NBQUMseUJBQUQ7QUFDRSxNQUFBLEtBQUssRUFBQyxjQURSO0FBRUUsTUFBQSxLQUFLLEVBQUU7QUFBRUksUUFBQUEsTUFBTSxFQUFFO0FBQVYsT0FGVDtBQUdFLE1BQUEsT0FBTyxFQUFFSjtBQUhYLE1BREYsQ0FERjtBQVNEO0FBQ0YsQ0FoREQ7O0FBa0RBTixnQkFBZ0IsQ0FBQ1csU0FBakIsR0FBNkI7QUFDM0JWLEVBQUFBLFlBQVksRUFBRVcsc0JBQVVDLE1BQVYsQ0FBaUJDLFVBREo7QUFFM0JaLEVBQUFBLE9BQU8sRUFBRVUsc0JBQVVDLE1BQVYsQ0FBaUJDLFVBRkM7QUFHM0JYLEVBQUFBLDRCQUE0QixFQUFFUyxzQkFBVUMsTUFBVixDQUFpQkMsVUFIcEI7QUFJM0JWLEVBQUFBLHNCQUFzQixFQUFFUSxzQkFBVUcsSUFBVixDQUFlRCxVQUpaO0FBSzNCVCxFQUFBQSxrQkFBa0IsRUFBRU8sc0JBQVVJLElBQVYsQ0FBZUYsVUFMUjtBQU0zQlIsRUFBQUEsYUFBYSxFQUFFTSxzQkFBVUcsSUFBVixDQUFlRCxVQU5IO0FBTzNCUCxFQUFBQSxtQkFBbUIsRUFBRUssc0JBQVVJLElBQVYsQ0FBZUYsVUFQVDtBQVEzQkwsRUFBQUEsU0FBUyxFQUFFRyxzQkFBVUcsSUFBVixDQUFlRDtBQVJDLENBQTdCO0FBV0FkLGdCQUFnQixDQUFDaUIsWUFBakIsR0FBZ0M7QUFDOUJULEVBQUFBLFVBQVUsRUFBRSxrQkFEa0I7QUFFOUJOLEVBQUFBLE9BQU8sRUFBRSxFQUZxQjtBQUc5QkQsRUFBQUEsWUFBWSxFQUFFO0FBSGdCLENBQWhDO2VBTWVELGdCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiAgVHJhbnNsYXRpb25IZWxwcyBpcyBhIGZlYXR1cmUgb2YgdGhlIFRyYW5zbGF0aW9uV29yZHMgdG9vbCBhbmQgY29uc2lzdHMgb2Y6XG4gKiAgIEEgY29sbGFwaWJsZSBzaWRlYmFyIHNob3dpbmcgdGhlIGNvbXBsZXRlIGFydGljYWwgc3VtYXJpemVkIGluIHBhbmVsXG4gKiAgICAgVGhlIHNpZGViYXIgaGFzIGEgc2FzaCB0aGF0IGV4cGFuZHMgdG8gYWJvdXQgMjAlIG9mIHRoZSBhcHBsaWNhdGlvbiB3aW5kb3dcbiAqICAgICBUaGUgc2FzaCBjYW4gY29sbGFwc2UgdG8gYWJvdXQgMC4yNWluXG4gKiAgICAgVGhlIGV4cGFuZGVkIHNpZGViYXIgdmVydGljYWxseSB3cmFwcyBhcnRpY2xlIHRleHQgYW5kIGNhbiBzY3JvbGwgZW50aXJlIGFydGljbGVcbiAqICAgICBXaGVuIGV4cGFuZGVkIHRoZSBcIlNlZSBNb3JlXCIgYnV0dG9uIGluIHBhbmVsIGlzIGhpZGRlblxuICpcbiAqXG4gKiAgIEl0IGludGVyb3BlcmF0ZXMgd2l0aCBDaGVja0luZm9DYXJkXG4gKi9cblxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyBHbHlwaGljb24gfSBmcm9tICdyZWFjdC1ib290c3RyYXAnO1xuLy8gY29tcG9uZW50c1xuaW1wb3J0IEV4cGFuZGVkSGVscHNNb2RhbCBmcm9tICcuL0V4cGFuZGVkSGVscHNNb2RhbCc7XG5pbXBvcnQgVEhlbHBzTWFya0Rvd24gZnJvbSAnLi9USGVscHNNYXJrRG93bic7XG5cbmltcG9ydCAnLi9UcmFuc2xhdGlvbkhlbHBzLnN0eWxlcy5jc3MnO1xuXG5jb25zdCBUcmFuc2xhdGlvbkhlbHBzID0gKHtcbiAgbW9kYWxBcnRpY2xlLFxuICBhcnRpY2xlLCAvLyBBcnRpY2xlIHRvIGRpc3BsYXkgaW4gc2lkZWJhciBhbmQgZXhwYW5kZWQgbW9kYWxcbiAgZXhwYW5kZWRIZWxwc0J1dHRvbkhvdmVyVGV4dCwgLy8gVGV4dCB0byBkaXNwbGF5IHdoZW4gaG92ZXJpbmcgb3ZlciBzYXNoIGFuZCBleHBhbnNpb24gYnV0dG9uXG4gIG9wZW5FeHBhbmRlZEhlbHBzTW9kYWwsIC8vIEZ1bmN0aW9uIHRvIG9wZW4gdGhlIGV4cGFuZGVkIFRyYW5zbGF0aW9uIEhlbHBzIE1vZGFsXG4gIGlzU2hvd0hlbHBzU2lkZWJhciwgLy8gaXMgdGhlIFRyYW5zbGF0aW9uIGhlbHBzIHNpZGViYXIgZGlzcGxheWVkXG4gIHNpZGViYXJUb2dnbGUsIC8vIHRvZ2dsZSB0aGUgdHJhbnNsYXRpb24gaGVscHMgc2lkZWJhclxuICBpc1Nob3dIZWxwc0V4cGFuZGVkLCAvLyBpcyB0aGUgZXhwYW5kZWQgVHJhbnNsYXRpb24gSGVscHMgbW9kYWwgZGlzcGxheWVkP1xuICBtb2RhbFRpdGxlLCAvLyBUaXRsZSBmb3IgdGhlIGV4cGFuZGVkIGhlbHBzIG1vZGFsXG4gIHRyYW5zbGF0ZSxcbn0pID0+IHtcbiAgaWYgKGlzU2hvd0hlbHBzU2lkZWJhcikge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlbHBzLXNhc2gtY29udGFpbmVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVscHMtc2FzaC1jbG9zZWRcIiBvbkNsaWNrPXtzaWRlYmFyVG9nZ2xlfT5cbiAgICAgICAgICA8R2x5cGhpY29uXG4gICAgICAgICAgICBnbHlwaD1cImNoZXZyb24tcmlnaHRcIlxuICAgICAgICAgICAgc3R5bGU9e3sgY3Vyc29yOiAncG9pbnRlcicgfX0gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVscHNcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlbHBzLXRpdGxlLWJhclwiPlxuICAgICAgICAgICAgPEdseXBoaWNvblxuICAgICAgICAgICAgICBvbkNsaWNrPXtvcGVuRXhwYW5kZWRIZWxwc01vZGFsfVxuICAgICAgICAgICAgICBnbHlwaD17J2Z1bGxzY3JlZW4nfVxuICAgICAgICAgICAgICBzdHlsZT17eyBjdXJzb3I6ICdwb2ludGVyJyB9fVxuICAgICAgICAgICAgICB0aXRsZT17ZXhwYW5kZWRIZWxwc0J1dHRvbkhvdmVyVGV4dH0gLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8VEhlbHBzTWFya0Rvd24gYXJ0aWNsZT17YXJ0aWNsZX0gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxFeHBhbmRlZEhlbHBzTW9kYWxcbiAgICAgICAgICB0cmFuc2xhdGU9e3RyYW5zbGF0ZX1cbiAgICAgICAgICBzaG93PXtpc1Nob3dIZWxwc0V4cGFuZGVkfVxuICAgICAgICAgIG9uSGlkZT17b3BlbkV4cGFuZGVkSGVscHNNb2RhbH1cbiAgICAgICAgICB0aXRsZT17bW9kYWxUaXRsZX1cbiAgICAgICAgICBhcnRpY2xlPXttb2RhbEFydGljbGUgfHwgYXJ0aWNsZX0gLz5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVscHMtc2FzaC1jbG9zZWRcIiBvbkNsaWNrPXtzaWRlYmFyVG9nZ2xlfT5cbiAgICAgICAgPEdseXBoaWNvblxuICAgICAgICAgIGdseXBoPVwiY2hldnJvbi1sZWZ0XCJcbiAgICAgICAgICBzdHlsZT17eyBjdXJzb3I6ICdwb2ludGVyJyB9fVxuICAgICAgICAgIG9uQ2xpY2s9e3NpZGViYXJUb2dnbGV9XG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59O1xuXG5UcmFuc2xhdGlvbkhlbHBzLnByb3BUeXBlcyA9IHtcbiAgbW9kYWxBcnRpY2xlOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gIGFydGljbGU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgZXhwYW5kZWRIZWxwc0J1dHRvbkhvdmVyVGV4dDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICBvcGVuRXhwYW5kZWRIZWxwc01vZGFsOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICBpc1Nob3dIZWxwc1NpZGViYXI6IFByb3BUeXBlcy5ib29sLmlzUmVxdWlyZWQsXG4gIHNpZGViYXJUb2dnbGU6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIGlzU2hvd0hlbHBzRXhwYW5kZWQ6IFByb3BUeXBlcy5ib29sLmlzUmVxdWlyZWQsXG4gIHRyYW5zbGF0ZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbn07XG5cblRyYW5zbGF0aW9uSGVscHMuZGVmYXVsdFByb3BzID0ge1xuICBtb2RhbFRpdGxlOiAndHJhbnNsYXRpb25IZWxwcycsXG4gIGFydGljbGU6ICcnLFxuICBtb2RhbEFydGljbGU6ICcnLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgVHJhbnNsYXRpb25IZWxwcztcbiJdfQ==