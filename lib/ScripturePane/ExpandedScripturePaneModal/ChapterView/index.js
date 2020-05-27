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

var _reactDom = _interopRequireDefault(require("react-dom"));

var _propTypes = _interopRequireDefault(require("prop-types"));

require("./ChapterView.styles.css");

var _VerseEditor = _interopRequireDefault(require("../../../VerseEditor"));

var _VerseRow = _interopRequireDefault(require("./VerseRow"));

/* eslint-disable react/no-string-refs */

/* eslint-disable react/no-find-dom-node */

/* eslint-disable no-return-assign */
// components
var ChapterView = /*#__PURE__*/function (_Component) {
  (0, _inherits2["default"])(ChapterView, _Component);

  function ChapterView() {
    (0, _classCallCheck2["default"])(this, ChapterView);
    return (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(ChapterView).apply(this, arguments));
  }

  (0, _createClass2["default"])(ChapterView, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this$props$contextId = this.props.contextId.reference,
          chapter = _this$props$contextId.chapter,
          verse = _this$props$contextId.verse;
      var verseReference = ChapterView.makeRefKey(chapter, verse);
      var currentVerse = this.verseRefs[verseReference];

      var element = _reactDom["default"].findDOMNode(currentVerse);

      if (element) {
        element.scrollIntoView();
      }
    }
    /**
     * Generates a key to use for verse ref's
     * @param chapter
     * @param verse
     * @return {string}
     */

  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.verseRefs = {};
    }
  }, {
    key: "render",
    value: function render() {
      var _this = this;

      var _this$props = this.props,
          contextId = _this$props.contextId,
          currentPaneSettings = _this$props.currentPaneSettings,
          projectDetailsReducer = _this$props.projectDetailsReducer,
          translate = _this$props.translate,
          bibles = _this$props.bibles,
          selections = _this$props.selections,
          getLexiconData = _this$props.getLexiconData,
          showPopover = _this$props.showPopover,
          handleEditTargetVerse = _this$props.handleEditTargetVerse,
          handleEditorSubmit = _this$props.handleEditorSubmit,
          handleEditorCancel = _this$props.handleEditorCancel;
      var _contextId$reference = contextId.reference,
          chapter = _contextId$reference.chapter,
          verse = _contextId$reference.verse;
      var verseNumbers = Object.keys(bibles['en']['ult'][chapter]);
      var projectManifest = projectDetailsReducer.manifest;
      var targetLanguageFont = projectManifest.languageFont || '';
      this.verseRefs = {};
      var verseRows = [];

      if (verseNumbers.length > 0) {
        var _loop = function _loop(i, len) {
          var verseNumber = verseNumbers[i];
          var refKey = ChapterView.makeRefKey(chapter, verseNumber);
          verseRows.push(_react["default"].createElement(_VerseRow["default"], {
            key: verseNumber.toString(),
            verse: verse,
            bibles: bibles,
            chapter: chapter,
            translate: translate,
            contextId: contextId,
            selections: selections,
            showPopover: showPopover,
            getLexiconData: getLexiconData,
            currentVerseNumber: verseNumber,
            targetLanguageFont: targetLanguageFont,
            currentPaneSettings: currentPaneSettings,
            onEditTargetVerse: handleEditTargetVerse,
            ref: function ref(node) {
              return _this.verseRefs[refKey] = node;
            }
          }));
        };

        for (var i = 0, len = verseNumbers.length; i < len; i++) {
          _loop(i, len);
        }
      }

      var editVerse = this.props.editVerse;
      var openEditor = editVerse !== null;
      var verseTitle = '';
      var verseText = '';

      if (openEditor) {
        var bookName = projectDetailsReducer.manifest.target_language.book.name;

        if (bookName === null) {
          console.warn('The localized book name could not be found. This is likely a bug in tC.');
          bookName = projectDetailsReducer.manifest.project.name;
        }

        verseTitle = "".concat(bookName, " ").concat(editVerse.chapter, ":").concat(editVerse.verse);
        verseText = editVerse.verseText;
      }

      return _react["default"].createElement("div", null, _react["default"].createElement("div", {
        className: "verse-row-container"
      }, verseRows), _react["default"].createElement(_VerseEditor["default"], {
        open: openEditor,
        translate: translate,
        verseText: verseText,
        verseTitle: verseTitle,
        onSubmit: handleEditorSubmit,
        onCancel: handleEditorCancel,
        targetLanguageFont: targetLanguageFont
      }));
    }
  }], [{
    key: "makeRefKey",
    value: function makeRefKey(chapter, verse) {
      return "c".concat(chapter.toString(), "v").concat(verse.toString());
    }
  }]);
  return ChapterView;
}(_react.Component);

ChapterView.propTypes = {
  contextId: _propTypes["default"].object.isRequired,
  currentPaneSettings: _propTypes["default"].array.isRequired,
  editTargetVerse: _propTypes["default"].func.isRequired,
  projectDetailsReducer: _propTypes["default"].object.isRequired,
  translate: _propTypes["default"].func.isRequired,
  bibles: _propTypes["default"].object.isRequired,
  selections: _propTypes["default"].array.isRequired,
  getLexiconData: _propTypes["default"].func.isRequired,
  showPopover: _propTypes["default"].func.isRequired,
  editVerse: _propTypes["default"].object,
  handleEditTargetVerse: _propTypes["default"].func.isRequired,
  handleEditorSubmit: _propTypes["default"].func.isRequired,
  handleEditorCancel: _propTypes["default"].func.isRequired
};
var _default = ChapterView;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9TY3JpcHR1cmVQYW5lL0V4cGFuZGVkU2NyaXB0dXJlUGFuZU1vZGFsL0NoYXB0ZXJWaWV3L2luZGV4LmpzIl0sIm5hbWVzIjpbIkNoYXB0ZXJWaWV3IiwicHJvcHMiLCJjb250ZXh0SWQiLCJyZWZlcmVuY2UiLCJjaGFwdGVyIiwidmVyc2UiLCJ2ZXJzZVJlZmVyZW5jZSIsIm1ha2VSZWZLZXkiLCJjdXJyZW50VmVyc2UiLCJ2ZXJzZVJlZnMiLCJlbGVtZW50IiwiUmVhY3RET00iLCJmaW5kRE9NTm9kZSIsInNjcm9sbEludG9WaWV3IiwiY3VycmVudFBhbmVTZXR0aW5ncyIsInByb2plY3REZXRhaWxzUmVkdWNlciIsInRyYW5zbGF0ZSIsImJpYmxlcyIsInNlbGVjdGlvbnMiLCJnZXRMZXhpY29uRGF0YSIsInNob3dQb3BvdmVyIiwiaGFuZGxlRWRpdFRhcmdldFZlcnNlIiwiaGFuZGxlRWRpdG9yU3VibWl0IiwiaGFuZGxlRWRpdG9yQ2FuY2VsIiwidmVyc2VOdW1iZXJzIiwiT2JqZWN0Iiwia2V5cyIsInByb2plY3RNYW5pZmVzdCIsIm1hbmlmZXN0IiwidGFyZ2V0TGFuZ3VhZ2VGb250IiwibGFuZ3VhZ2VGb250IiwidmVyc2VSb3dzIiwibGVuZ3RoIiwiaSIsImxlbiIsInZlcnNlTnVtYmVyIiwicmVmS2V5IiwicHVzaCIsInRvU3RyaW5nIiwibm9kZSIsImVkaXRWZXJzZSIsIm9wZW5FZGl0b3IiLCJ2ZXJzZVRpdGxlIiwidmVyc2VUZXh0IiwiYm9va05hbWUiLCJ0YXJnZXRfbGFuZ3VhZ2UiLCJib29rIiwibmFtZSIsImNvbnNvbGUiLCJ3YXJuIiwicHJvamVjdCIsIkNvbXBvbmVudCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsIm9iamVjdCIsImlzUmVxdWlyZWQiLCJhcnJheSIsImVkaXRUYXJnZXRWZXJzZSIsImZ1bmMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUdBOztBQUNBOztBQUNBOztBQUVBOztBQUdBOztBQUNBOztBQVhBOztBQUNBOztBQUNBO0FBT0E7SUFJTUEsVzs7Ozs7Ozs7Ozt3Q0FDZ0I7QUFBQSxrQ0FDTyxLQUFLQyxLQUFMLENBQVdDLFNBQVgsQ0FBcUJDLFNBRDVCO0FBQUEsVUFDWkMsT0FEWSx5QkFDWkEsT0FEWTtBQUFBLFVBQ0hDLEtBREcseUJBQ0hBLEtBREc7QUFFbEIsVUFBSUMsY0FBYyxHQUFHTixXQUFXLENBQUNPLFVBQVosQ0FBdUJILE9BQXZCLEVBQWdDQyxLQUFoQyxDQUFyQjtBQUNBLFVBQUlHLFlBQVksR0FBRyxLQUFLQyxTQUFMLENBQWVILGNBQWYsQ0FBbkI7O0FBQ0EsVUFBSUksT0FBTyxHQUFHQyxxQkFBU0MsV0FBVCxDQUFxQkosWUFBckIsQ0FBZDs7QUFFQSxVQUFJRSxPQUFKLEVBQWE7QUFDWEEsUUFBQUEsT0FBTyxDQUFDRyxjQUFSO0FBQ0Q7QUFDRjtBQUVEOzs7Ozs7Ozs7MkNBVXVCO0FBQ3JCLFdBQUtKLFNBQUwsR0FBaUIsRUFBakI7QUFDRDs7OzZCQUVRO0FBQUE7O0FBQUEsd0JBYUgsS0FBS1IsS0FiRjtBQUFBLFVBRUxDLFNBRkssZUFFTEEsU0FGSztBQUFBLFVBR0xZLG1CQUhLLGVBR0xBLG1CQUhLO0FBQUEsVUFJTEMscUJBSkssZUFJTEEscUJBSks7QUFBQSxVQUtMQyxTQUxLLGVBS0xBLFNBTEs7QUFBQSxVQU1MQyxNQU5LLGVBTUxBLE1BTks7QUFBQSxVQU9MQyxVQVBLLGVBT0xBLFVBUEs7QUFBQSxVQVFMQyxjQVJLLGVBUUxBLGNBUks7QUFBQSxVQVNMQyxXQVRLLGVBU0xBLFdBVEs7QUFBQSxVQVVMQyxxQkFWSyxlQVVMQSxxQkFWSztBQUFBLFVBV0xDLGtCQVhLLGVBV0xBLGtCQVhLO0FBQUEsVUFZTEMsa0JBWkssZUFZTEEsa0JBWks7QUFBQSxpQ0Flb0JyQixTQUFTLENBQUNDLFNBZjlCO0FBQUEsVUFlQ0MsT0FmRCx3QkFlQ0EsT0FmRDtBQUFBLFVBZVVDLEtBZlYsd0JBZVVBLEtBZlY7QUFnQlAsVUFBTW1CLFlBQVksR0FBR0MsTUFBTSxDQUFDQyxJQUFQLENBQVlULE1BQU0sQ0FBQyxJQUFELENBQU4sQ0FBYSxLQUFiLEVBQW9CYixPQUFwQixDQUFaLENBQXJCO0FBaEJPLFVBaUJXdUIsZUFqQlgsR0FpQitCWixxQkFqQi9CLENBaUJDYSxRQWpCRDtBQWtCUCxVQUFNQyxrQkFBa0IsR0FBR0YsZUFBZSxDQUFDRyxZQUFoQixJQUFnQyxFQUEzRDtBQUNBLFdBQUtyQixTQUFMLEdBQWlCLEVBQWpCO0FBQ0EsVUFBSXNCLFNBQVMsR0FBRyxFQUFoQjs7QUFFQSxVQUFJUCxZQUFZLENBQUNRLE1BQWIsR0FBc0IsQ0FBMUIsRUFBNkI7QUFBQSxtQ0FDbEJDLENBRGtCLEVBQ1hDLEdBRFc7QUFFekIsY0FBTUMsV0FBVyxHQUFHWCxZQUFZLENBQUNTLENBQUQsQ0FBaEM7QUFDQSxjQUFNRyxNQUFNLEdBQUdwQyxXQUFXLENBQUNPLFVBQVosQ0FBdUJILE9BQXZCLEVBQWdDK0IsV0FBaEMsQ0FBZjtBQUVBSixVQUFBQSxTQUFTLENBQUNNLElBQVYsQ0FDRSxnQ0FBQyxvQkFBRDtBQUNFLFlBQUEsR0FBRyxFQUFFRixXQUFXLENBQUNHLFFBQVosRUFEUDtBQUVFLFlBQUEsS0FBSyxFQUFFakMsS0FGVDtBQUdFLFlBQUEsTUFBTSxFQUFFWSxNQUhWO0FBSUUsWUFBQSxPQUFPLEVBQUViLE9BSlg7QUFLRSxZQUFBLFNBQVMsRUFBRVksU0FMYjtBQU1FLFlBQUEsU0FBUyxFQUFFZCxTQU5iO0FBT0UsWUFBQSxVQUFVLEVBQUVnQixVQVBkO0FBUUUsWUFBQSxXQUFXLEVBQUVFLFdBUmY7QUFTRSxZQUFBLGNBQWMsRUFBRUQsY0FUbEI7QUFVRSxZQUFBLGtCQUFrQixFQUFFZ0IsV0FWdEI7QUFXRSxZQUFBLGtCQUFrQixFQUFFTixrQkFYdEI7QUFZRSxZQUFBLG1CQUFtQixFQUFFZixtQkFadkI7QUFhRSxZQUFBLGlCQUFpQixFQUFFTyxxQkFickI7QUFjRSxZQUFBLEdBQUcsRUFBRSxhQUFBa0IsSUFBSTtBQUFBLHFCQUFJLEtBQUksQ0FBQzlCLFNBQUwsQ0FBZTJCLE1BQWYsSUFBeUJHLElBQTdCO0FBQUE7QUFkWCxZQURGO0FBTHlCOztBQUMzQixhQUFLLElBQUlOLENBQUMsR0FBRyxDQUFSLEVBQVdDLEdBQUcsR0FBR1YsWUFBWSxDQUFDUSxNQUFuQyxFQUEyQ0MsQ0FBQyxHQUFHQyxHQUEvQyxFQUFvREQsQ0FBQyxFQUFyRCxFQUF5RDtBQUFBLGdCQUFoREEsQ0FBZ0QsRUFBekNDLEdBQXlDO0FBc0J4RDtBQUNGOztBQTlDTSxVQWdEQ00sU0FoREQsR0FnRGUsS0FBS3ZDLEtBaERwQixDQWdEQ3VDLFNBaEREO0FBaURQLFVBQU1DLFVBQVUsR0FBR0QsU0FBUyxLQUFLLElBQWpDO0FBQ0EsVUFBSUUsVUFBVSxHQUFHLEVBQWpCO0FBQ0EsVUFBSUMsU0FBUyxHQUFHLEVBQWhCOztBQUVBLFVBQUlGLFVBQUosRUFBZ0I7QUFDZCxZQUFJRyxRQUFRLEdBQUc3QixxQkFBcUIsQ0FBQ2EsUUFBdEIsQ0FBK0JpQixlQUEvQixDQUErQ0MsSUFBL0MsQ0FBb0RDLElBQW5FOztBQUVBLFlBQUlILFFBQVEsS0FBSyxJQUFqQixFQUF1QjtBQUNyQkksVUFBQUEsT0FBTyxDQUFDQyxJQUFSLENBQWEseUVBQWI7QUFDQUwsVUFBQUEsUUFBUSxHQUFHN0IscUJBQXFCLENBQUNhLFFBQXRCLENBQStCc0IsT0FBL0IsQ0FBdUNILElBQWxEO0FBQ0Q7O0FBQ0RMLFFBQUFBLFVBQVUsYUFBTUUsUUFBTixjQUFrQkosU0FBUyxDQUFDcEMsT0FBNUIsY0FBdUNvQyxTQUFTLENBQUNuQyxLQUFqRCxDQUFWO0FBQ0FzQyxRQUFBQSxTQUFTLEdBQUdILFNBQVMsQ0FBQ0csU0FBdEI7QUFDRDs7QUFFRCxhQUNFLDZDQUNFO0FBQUssUUFBQSxTQUFTLEVBQUM7QUFBZixTQUNHWixTQURILENBREYsRUFJRSxnQ0FBQyx1QkFBRDtBQUNFLFFBQUEsSUFBSSxFQUFFVSxVQURSO0FBRUUsUUFBQSxTQUFTLEVBQUV6QixTQUZiO0FBR0UsUUFBQSxTQUFTLEVBQUUyQixTQUhiO0FBSUUsUUFBQSxVQUFVLEVBQUVELFVBSmQ7QUFLRSxRQUFBLFFBQVEsRUFBRXBCLGtCQUxaO0FBTUUsUUFBQSxRQUFRLEVBQUVDLGtCQU5aO0FBT0UsUUFBQSxrQkFBa0IsRUFBRU07QUFQdEIsUUFKRixDQURGO0FBZ0JEOzs7K0JBeEZpQnpCLE8sRUFBU0MsSyxFQUFPO0FBQ2hDLHdCQUFXRCxPQUFPLENBQUNrQyxRQUFSLEVBQVgsY0FBaUNqQyxLQUFLLENBQUNpQyxRQUFOLEVBQWpDO0FBQ0Q7OztFQXBCdUJhLGdCOztBQTZHMUJuRCxXQUFXLENBQUNvRCxTQUFaLEdBQXdCO0FBQ3RCbEQsRUFBQUEsU0FBUyxFQUFFbUQsc0JBQVVDLE1BQVYsQ0FBaUJDLFVBRE47QUFFdEJ6QyxFQUFBQSxtQkFBbUIsRUFBRXVDLHNCQUFVRyxLQUFWLENBQWdCRCxVQUZmO0FBR3RCRSxFQUFBQSxlQUFlLEVBQUVKLHNCQUFVSyxJQUFWLENBQWVILFVBSFY7QUFJdEJ4QyxFQUFBQSxxQkFBcUIsRUFBRXNDLHNCQUFVQyxNQUFWLENBQWlCQyxVQUpsQjtBQUt0QnZDLEVBQUFBLFNBQVMsRUFBRXFDLHNCQUFVSyxJQUFWLENBQWVILFVBTEo7QUFNdEJ0QyxFQUFBQSxNQUFNLEVBQUVvQyxzQkFBVUMsTUFBVixDQUFpQkMsVUFOSDtBQU90QnJDLEVBQUFBLFVBQVUsRUFBRW1DLHNCQUFVRyxLQUFWLENBQWdCRCxVQVBOO0FBUXRCcEMsRUFBQUEsY0FBYyxFQUFFa0Msc0JBQVVLLElBQVYsQ0FBZUgsVUFSVDtBQVN0Qm5DLEVBQUFBLFdBQVcsRUFBRWlDLHNCQUFVSyxJQUFWLENBQWVILFVBVE47QUFVdEJmLEVBQUFBLFNBQVMsRUFBRWEsc0JBQVVDLE1BVkM7QUFXdEJqQyxFQUFBQSxxQkFBcUIsRUFBRWdDLHNCQUFVSyxJQUFWLENBQWVILFVBWGhCO0FBWXRCakMsRUFBQUEsa0JBQWtCLEVBQUUrQixzQkFBVUssSUFBVixDQUFlSCxVQVpiO0FBYXRCaEMsRUFBQUEsa0JBQWtCLEVBQUU4QixzQkFBVUssSUFBVixDQUFlSDtBQWJiLENBQXhCO2VBZ0JldkQsVyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIHJlYWN0L25vLXN0cmluZy1yZWZzICovXG4vKiBlc2xpbnQtZGlzYWJsZSByZWFjdC9uby1maW5kLWRvbS1ub2RlICovXG4vKiBlc2xpbnQtZGlzYWJsZSBuby1yZXR1cm4tYXNzaWduICovXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5pbXBvcnQgJy4vQ2hhcHRlclZpZXcuc3R5bGVzLmNzcyc7XG5cbi8vIGNvbXBvbmVudHNcbmltcG9ydCBWZXJzZUVkaXRvckRpYWxvZyBmcm9tICcuLi8uLi8uLi9WZXJzZUVkaXRvcic7XG5pbXBvcnQgVmVyc2VSb3cgZnJvbSAnLi9WZXJzZVJvdyc7XG5cbmNsYXNzIENoYXB0ZXJWaWV3IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgbGV0IHsgY2hhcHRlciwgdmVyc2UgfSA9IHRoaXMucHJvcHMuY29udGV4dElkLnJlZmVyZW5jZTtcbiAgICBsZXQgdmVyc2VSZWZlcmVuY2UgPSBDaGFwdGVyVmlldy5tYWtlUmVmS2V5KGNoYXB0ZXIsIHZlcnNlKTtcbiAgICBsZXQgY3VycmVudFZlcnNlID0gdGhpcy52ZXJzZVJlZnNbdmVyc2VSZWZlcmVuY2VdO1xuICAgIGxldCBlbGVtZW50ID0gUmVhY3RET00uZmluZERPTU5vZGUoY3VycmVudFZlcnNlKTtcblxuICAgIGlmIChlbGVtZW50KSB7XG4gICAgICBlbGVtZW50LnNjcm9sbEludG9WaWV3KCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEdlbmVyYXRlcyBhIGtleSB0byB1c2UgZm9yIHZlcnNlIHJlZidzXG4gICAqIEBwYXJhbSBjaGFwdGVyXG4gICAqIEBwYXJhbSB2ZXJzZVxuICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAqL1xuICBzdGF0aWMgbWFrZVJlZktleShjaGFwdGVyLCB2ZXJzZSkge1xuICAgIHJldHVybiBgYyR7Y2hhcHRlci50b1N0cmluZygpfXYke3ZlcnNlLnRvU3RyaW5nKCl9YDtcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIHRoaXMudmVyc2VSZWZzID0ge307XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgY29udGV4dElkLFxuICAgICAgY3VycmVudFBhbmVTZXR0aW5ncyxcbiAgICAgIHByb2plY3REZXRhaWxzUmVkdWNlcixcbiAgICAgIHRyYW5zbGF0ZSxcbiAgICAgIGJpYmxlcyxcbiAgICAgIHNlbGVjdGlvbnMsXG4gICAgICBnZXRMZXhpY29uRGF0YSxcbiAgICAgIHNob3dQb3BvdmVyLFxuICAgICAgaGFuZGxlRWRpdFRhcmdldFZlcnNlLFxuICAgICAgaGFuZGxlRWRpdG9yU3VibWl0LFxuICAgICAgaGFuZGxlRWRpdG9yQ2FuY2VsLFxuICAgIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgY29uc3QgeyBjaGFwdGVyLCB2ZXJzZSB9ID0gY29udGV4dElkLnJlZmVyZW5jZTtcbiAgICBjb25zdCB2ZXJzZU51bWJlcnMgPSBPYmplY3Qua2V5cyhiaWJsZXNbJ2VuJ11bJ3VsdCddW2NoYXB0ZXJdKTtcbiAgICBjb25zdCB7IG1hbmlmZXN0OiBwcm9qZWN0TWFuaWZlc3QgfSA9IHByb2plY3REZXRhaWxzUmVkdWNlcjtcbiAgICBjb25zdCB0YXJnZXRMYW5ndWFnZUZvbnQgPSBwcm9qZWN0TWFuaWZlc3QubGFuZ3VhZ2VGb250IHx8ICcnO1xuICAgIHRoaXMudmVyc2VSZWZzID0ge307XG4gICAgbGV0IHZlcnNlUm93cyA9IFtdO1xuXG4gICAgaWYgKHZlcnNlTnVtYmVycy5sZW5ndGggPiAwKSB7XG4gICAgICBmb3IgKGxldCBpID0gMCwgbGVuID0gdmVyc2VOdW1iZXJzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgIGNvbnN0IHZlcnNlTnVtYmVyID0gdmVyc2VOdW1iZXJzW2ldO1xuICAgICAgICBjb25zdCByZWZLZXkgPSBDaGFwdGVyVmlldy5tYWtlUmVmS2V5KGNoYXB0ZXIsIHZlcnNlTnVtYmVyKTtcblxuICAgICAgICB2ZXJzZVJvd3MucHVzaChcbiAgICAgICAgICA8VmVyc2VSb3dcbiAgICAgICAgICAgIGtleT17dmVyc2VOdW1iZXIudG9TdHJpbmcoKX1cbiAgICAgICAgICAgIHZlcnNlPXt2ZXJzZX1cbiAgICAgICAgICAgIGJpYmxlcz17YmlibGVzfVxuICAgICAgICAgICAgY2hhcHRlcj17Y2hhcHRlcn1cbiAgICAgICAgICAgIHRyYW5zbGF0ZT17dHJhbnNsYXRlfVxuICAgICAgICAgICAgY29udGV4dElkPXtjb250ZXh0SWR9XG4gICAgICAgICAgICBzZWxlY3Rpb25zPXtzZWxlY3Rpb25zfVxuICAgICAgICAgICAgc2hvd1BvcG92ZXI9e3Nob3dQb3BvdmVyfVxuICAgICAgICAgICAgZ2V0TGV4aWNvbkRhdGE9e2dldExleGljb25EYXRhfVxuICAgICAgICAgICAgY3VycmVudFZlcnNlTnVtYmVyPXt2ZXJzZU51bWJlcn1cbiAgICAgICAgICAgIHRhcmdldExhbmd1YWdlRm9udD17dGFyZ2V0TGFuZ3VhZ2VGb250fVxuICAgICAgICAgICAgY3VycmVudFBhbmVTZXR0aW5ncz17Y3VycmVudFBhbmVTZXR0aW5nc31cbiAgICAgICAgICAgIG9uRWRpdFRhcmdldFZlcnNlPXtoYW5kbGVFZGl0VGFyZ2V0VmVyc2V9XG4gICAgICAgICAgICByZWY9e25vZGUgPT4gdGhpcy52ZXJzZVJlZnNbcmVmS2V5XSA9IG5vZGV9XG4gICAgICAgICAgLz4sXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgeyBlZGl0VmVyc2UgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3Qgb3BlbkVkaXRvciA9IGVkaXRWZXJzZSAhPT0gbnVsbDtcbiAgICBsZXQgdmVyc2VUaXRsZSA9ICcnO1xuICAgIGxldCB2ZXJzZVRleHQgPSAnJztcblxuICAgIGlmIChvcGVuRWRpdG9yKSB7XG4gICAgICBsZXQgYm9va05hbWUgPSBwcm9qZWN0RGV0YWlsc1JlZHVjZXIubWFuaWZlc3QudGFyZ2V0X2xhbmd1YWdlLmJvb2submFtZTtcblxuICAgICAgaWYgKGJvb2tOYW1lID09PSBudWxsKSB7XG4gICAgICAgIGNvbnNvbGUud2FybignVGhlIGxvY2FsaXplZCBib29rIG5hbWUgY291bGQgbm90IGJlIGZvdW5kLiBUaGlzIGlzIGxpa2VseSBhIGJ1ZyBpbiB0Qy4nKTtcbiAgICAgICAgYm9va05hbWUgPSBwcm9qZWN0RGV0YWlsc1JlZHVjZXIubWFuaWZlc3QucHJvamVjdC5uYW1lO1xuICAgICAgfVxuICAgICAgdmVyc2VUaXRsZSA9IGAke2Jvb2tOYW1lfSAke2VkaXRWZXJzZS5jaGFwdGVyfToke2VkaXRWZXJzZS52ZXJzZX1gO1xuICAgICAgdmVyc2VUZXh0ID0gZWRpdFZlcnNlLnZlcnNlVGV4dDtcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ2ZXJzZS1yb3ctY29udGFpbmVyXCI+XG4gICAgICAgICAge3ZlcnNlUm93c31cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxWZXJzZUVkaXRvckRpYWxvZ1xuICAgICAgICAgIG9wZW49e29wZW5FZGl0b3J9XG4gICAgICAgICAgdHJhbnNsYXRlPXt0cmFuc2xhdGV9XG4gICAgICAgICAgdmVyc2VUZXh0PXt2ZXJzZVRleHR9XG4gICAgICAgICAgdmVyc2VUaXRsZT17dmVyc2VUaXRsZX1cbiAgICAgICAgICBvblN1Ym1pdD17aGFuZGxlRWRpdG9yU3VibWl0fVxuICAgICAgICAgIG9uQ2FuY2VsPXtoYW5kbGVFZGl0b3JDYW5jZWx9XG4gICAgICAgICAgdGFyZ2V0TGFuZ3VhZ2VGb250PXt0YXJnZXRMYW5ndWFnZUZvbnR9XG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbkNoYXB0ZXJWaWV3LnByb3BUeXBlcyA9IHtcbiAgY29udGV4dElkOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG4gIGN1cnJlbnRQYW5lU2V0dGluZ3M6IFByb3BUeXBlcy5hcnJheS5pc1JlcXVpcmVkLFxuICBlZGl0VGFyZ2V0VmVyc2U6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIHByb2plY3REZXRhaWxzUmVkdWNlcjogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuICB0cmFuc2xhdGU6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIGJpYmxlczogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuICBzZWxlY3Rpb25zOiBQcm9wVHlwZXMuYXJyYXkuaXNSZXF1aXJlZCxcbiAgZ2V0TGV4aWNvbkRhdGE6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIHNob3dQb3BvdmVyOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICBlZGl0VmVyc2U6IFByb3BUeXBlcy5vYmplY3QsXG4gIGhhbmRsZUVkaXRUYXJnZXRWZXJzZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgaGFuZGxlRWRpdG9yU3VibWl0OiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICBoYW5kbGVFZGl0b3JDYW5jZWw6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBDaGFwdGVyVmlldztcbiJdfQ==