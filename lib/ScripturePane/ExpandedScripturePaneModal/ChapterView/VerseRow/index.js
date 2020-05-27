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

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactBootstrap = require("react-bootstrap");

require("./VerseRow.styles.css");

var _Verse = _interopRequireDefault(require("../../../Verse"));

var _verseHelpers = require("../../../helpers/verseHelpers");

// components
// helpers
var VerseRow = /*#__PURE__*/function (_Component) {
  (0, _inherits2["default"])(VerseRow, _Component);

  function VerseRow(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, VerseRow);
    _this = (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(VerseRow).call(this, props));
    _this.handleEdit = _this.handleEdit.bind((0, _assertThisInitialized2["default"])(_this));
    return _this;
  }

  (0, _createClass2["default"])(VerseRow, [{
    key: "handleEdit",
    value: function handleEdit(bibleId, chapter, verse, verseText) {
      var onEditTargetVerse = this.props.onEditTargetVerse;

      if (bibleId === 'targetBible' && typeof onEditTargetVerse === 'function') {
        onEditTargetVerse(bibleId, chapter, verse, verseText);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          bibles = _this$props.bibles,
          chapter = _this$props.chapter,
          translate = _this$props.translate,
          contextId = _this$props.contextId,
          selections = _this$props.selections,
          showPopover = _this$props.showPopover,
          getLexiconData = _this$props.getLexiconData,
          targetLanguageFont = _this$props.targetLanguageFont,
          currentVerseNumber = _this$props.currentVerseNumber,
          currentPaneSettings = _this$props.currentPaneSettings;
      var verseCells = [];
      var colStyle = {
        minWidth: '240px',
        alignItems: 'stretch',
        padding: '10px',
        paddingTop: '20px',
        borderRight: '1px solid var(--border-color)'
      };
      var rowStyle = {
        display: 'flex',
        margin: '0',
        color: 'var(--text-color-dark)',
        width: '100%'
      };

      if (currentVerseNumber % 2 === 0) {
        rowStyle.backgroundColor = 'var(--background-color-light)';
      }

      if (currentPaneSettings.length > 0) {
        for (var i = 0, len = currentPaneSettings.length; i < len; i++) {
          var paneSetting = currentPaneSettings[i];
          var index = i;

          try {
            var languageId = paneSetting.languageId,
                bibleId = paneSetting.bibleId;
            var direction = bibles[languageId][bibleId].manifest.direction;
            var verseElements = [];
            var verseData = bibles[languageId][bibleId][chapter][currentVerseNumber];

            if (typeof verseData === 'string') {
              // if the verse content is string.
              var isTargetBible = bibleId === 'targetBible';
              verseElements = (0, _verseHelpers.verseString)(verseData, selections, translate, null, isTargetBible, targetLanguageFont);
            } else if (verseData) {
              // else the verse content is an array of verse objects.
              verseElements = (0, _verseHelpers.verseArray)(verseData, bibleId, contextId, getLexiconData, showPopover, translate);
            }

            var verseText = bibles[languageId][bibleId][chapter][currentVerseNumber]; // string value of the verse.

            verseCells.push(_react["default"].createElement(_reactBootstrap.Col, {
              key: index.toString(),
              md: 4,
              sm: 4,
              xs: 4,
              lg: 4,
              style: colStyle
            }, _react["default"].createElement(_Verse["default"], {
              translate: translate,
              verseElements: verseElements,
              verseText: verseText,
              bibleId: bibleId,
              direction: direction,
              chapter: chapter,
              verse: currentVerseNumber,
              onEdit: this.handleEdit
            })));
          } catch (error) {
            console.error(error);
          }
        }
      }

      return _react["default"].createElement(_reactBootstrap.Row, {
        style: rowStyle
      }, verseCells);
    }
  }]);
  return VerseRow;
}(_react.Component);

VerseRow.propTypes = {
  chapter: _propTypes["default"].number.isRequired,
  verse: _propTypes["default"].oneOfType([_propTypes["default"].string.isRequired, _propTypes["default"].number.isRequired]),
  currentVerseNumber: _propTypes["default"].oneOfType([_propTypes["default"].string.isRequired, _propTypes["default"].number.isRequired]),
  currentPaneSettings: _propTypes["default"].array.isRequired,
  verseElements: _propTypes["default"].oneOfType([_propTypes["default"].string.isRequired, _propTypes["default"].array.isRequired]),
  onEditTargetVerse: _propTypes["default"].func.isRequired,
  bibles: _propTypes["default"].object.isRequired,
  translate: _propTypes["default"].func.isRequired,
  contextId: _propTypes["default"].object.isRequired,
  selections: _propTypes["default"].array.isRequired,
  getLexiconData: _propTypes["default"].func.isRequired,
  showPopover: _propTypes["default"].func.isRequired,
  targetLanguageFont: _propTypes["default"].string
};
var _default = VerseRow;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9TY3JpcHR1cmVQYW5lL0V4cGFuZGVkU2NyaXB0dXJlUGFuZU1vZGFsL0NoYXB0ZXJWaWV3L1ZlcnNlUm93L2luZGV4LmpzIl0sIm5hbWVzIjpbIlZlcnNlUm93IiwicHJvcHMiLCJoYW5kbGVFZGl0IiwiYmluZCIsImJpYmxlSWQiLCJjaGFwdGVyIiwidmVyc2UiLCJ2ZXJzZVRleHQiLCJvbkVkaXRUYXJnZXRWZXJzZSIsImJpYmxlcyIsInRyYW5zbGF0ZSIsImNvbnRleHRJZCIsInNlbGVjdGlvbnMiLCJzaG93UG9wb3ZlciIsImdldExleGljb25EYXRhIiwidGFyZ2V0TGFuZ3VhZ2VGb250IiwiY3VycmVudFZlcnNlTnVtYmVyIiwiY3VycmVudFBhbmVTZXR0aW5ncyIsInZlcnNlQ2VsbHMiLCJjb2xTdHlsZSIsIm1pbldpZHRoIiwiYWxpZ25JdGVtcyIsInBhZGRpbmciLCJwYWRkaW5nVG9wIiwiYm9yZGVyUmlnaHQiLCJyb3dTdHlsZSIsImRpc3BsYXkiLCJtYXJnaW4iLCJjb2xvciIsIndpZHRoIiwiYmFja2dyb3VuZENvbG9yIiwibGVuZ3RoIiwiaSIsImxlbiIsInBhbmVTZXR0aW5nIiwiaW5kZXgiLCJsYW5ndWFnZUlkIiwiZGlyZWN0aW9uIiwibWFuaWZlc3QiLCJ2ZXJzZUVsZW1lbnRzIiwidmVyc2VEYXRhIiwiaXNUYXJnZXRCaWJsZSIsInB1c2giLCJ0b1N0cmluZyIsImVycm9yIiwiY29uc29sZSIsIkNvbXBvbmVudCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsIm51bWJlciIsImlzUmVxdWlyZWQiLCJvbmVPZlR5cGUiLCJzdHJpbmciLCJhcnJheSIsImZ1bmMiLCJvYmplY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBRUE7O0FBRUE7O0FBSEE7QUFFQTtJQUdNQSxROzs7QUFDSixvQkFBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFB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QXlCZXBELFEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IENvbCwgUm93IH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJztcbmltcG9ydCAnLi9WZXJzZVJvdy5zdHlsZXMuY3NzJztcbi8vIGNvbXBvbmVudHNcbmltcG9ydCBWZXJzZSBmcm9tICcuLi8uLi8uLi9WZXJzZSc7XG4vLyBoZWxwZXJzXG5pbXBvcnQgeyB2ZXJzZVN0cmluZywgdmVyc2VBcnJheSB9IGZyb20gJy4uLy4uLy4uL2hlbHBlcnMvdmVyc2VIZWxwZXJzJztcblxuY2xhc3MgVmVyc2VSb3cgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLmhhbmRsZUVkaXQgPSB0aGlzLmhhbmRsZUVkaXQuYmluZCh0aGlzKTtcbiAgfVxuXG4gIGhhbmRsZUVkaXQoYmlibGVJZCwgY2hhcHRlciwgdmVyc2UsIHZlcnNlVGV4dCkge1xuICAgIGNvbnN0IHsgb25FZGl0VGFyZ2V0VmVyc2UgfSA9IHRoaXMucHJvcHM7XG5cbiAgICBpZiAoYmlibGVJZCA9PT0gJ3RhcmdldEJpYmxlJyAmJiB0eXBlb2Ygb25FZGl0VGFyZ2V0VmVyc2UgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIG9uRWRpdFRhcmdldFZlcnNlKGJpYmxlSWQsIGNoYXB0ZXIsIHZlcnNlLCB2ZXJzZVRleHQpO1xuICAgIH1cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICBiaWJsZXMsXG4gICAgICBjaGFwdGVyLFxuICAgICAgdHJhbnNsYXRlLFxuICAgICAgY29udGV4dElkLFxuICAgICAgc2VsZWN0aW9ucyxcbiAgICAgIHNob3dQb3BvdmVyLFxuICAgICAgZ2V0TGV4aWNvbkRhdGEsXG4gICAgICB0YXJnZXRMYW5ndWFnZUZvbnQsXG4gICAgICBjdXJyZW50VmVyc2VOdW1iZXIsXG4gICAgICBjdXJyZW50UGFuZVNldHRpbmdzLFxuICAgIH0gPSB0aGlzLnByb3BzO1xuICAgIGxldCB2ZXJzZUNlbGxzID0gW107XG5cbiAgICBjb25zdCBjb2xTdHlsZSA9IHtcbiAgICAgIG1pbldpZHRoOiAnMjQwcHgnLFxuICAgICAgYWxpZ25JdGVtczogJ3N0cmV0Y2gnLFxuICAgICAgcGFkZGluZzogJzEwcHgnLFxuICAgICAgcGFkZGluZ1RvcDogJzIwcHgnLFxuICAgICAgYm9yZGVyUmlnaHQ6ICcxcHggc29saWQgdmFyKC0tYm9yZGVyLWNvbG9yKScsXG4gICAgfTtcblxuICAgIGxldCByb3dTdHlsZSA9IHtcbiAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgIG1hcmdpbjogJzAnLFxuICAgICAgY29sb3I6ICd2YXIoLS10ZXh0LWNvbG9yLWRhcmspJyxcbiAgICAgIHdpZHRoOiAnMTAwJScsXG4gICAgfTtcblxuICAgIGlmIChjdXJyZW50VmVyc2VOdW1iZXIgJSAyID09PSAwKSB7XG4gICAgICByb3dTdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAndmFyKC0tYmFja2dyb3VuZC1jb2xvci1saWdodCknO1xuICAgIH1cblxuICAgIGlmIChjdXJyZW50UGFuZVNldHRpbmdzLmxlbmd0aCA+IDApIHtcbiAgICAgIGZvciAobGV0IGkgPSAwLCBsZW4gPSBjdXJyZW50UGFuZVNldHRpbmdzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgIGNvbnN0IHBhbmVTZXR0aW5nID0gY3VycmVudFBhbmVTZXR0aW5nc1tpXTtcbiAgICAgICAgY29uc3QgaW5kZXggPSBpO1xuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgY29uc3QgeyBsYW5ndWFnZUlkLCBiaWJsZUlkIH0gPSBwYW5lU2V0dGluZztcbiAgICAgICAgICBjb25zdCB7IG1hbmlmZXN0OiB7IGRpcmVjdGlvbiB9IH0gPSBiaWJsZXNbbGFuZ3VhZ2VJZF1bYmlibGVJZF07XG4gICAgICAgICAgbGV0IHZlcnNlRWxlbWVudHMgPSBbXTtcbiAgICAgICAgICBjb25zdCB2ZXJzZURhdGEgPSBiaWJsZXNbbGFuZ3VhZ2VJZF1bYmlibGVJZF1bY2hhcHRlcl1bY3VycmVudFZlcnNlTnVtYmVyXTtcblxuICAgICAgICAgIGlmICh0eXBlb2YgdmVyc2VEYXRhID09PSAnc3RyaW5nJykgeyAvLyBpZiB0aGUgdmVyc2UgY29udGVudCBpcyBzdHJpbmcuXG4gICAgICAgICAgICBjb25zdCBpc1RhcmdldEJpYmxlID0gYmlibGVJZCA9PT0gJ3RhcmdldEJpYmxlJztcbiAgICAgICAgICAgIHZlcnNlRWxlbWVudHMgPSB2ZXJzZVN0cmluZyh2ZXJzZURhdGEsIHNlbGVjdGlvbnMsIHRyYW5zbGF0ZSwgbnVsbCwgaXNUYXJnZXRCaWJsZSwgdGFyZ2V0TGFuZ3VhZ2VGb250KTtcbiAgICAgICAgICB9IGVsc2UgaWYgKHZlcnNlRGF0YSkgeyAvLyBlbHNlIHRoZSB2ZXJzZSBjb250ZW50IGlzIGFuIGFycmF5IG9mIHZlcnNlIG9iamVjdHMuXG4gICAgICAgICAgICB2ZXJzZUVsZW1lbnRzID0gdmVyc2VBcnJheSh2ZXJzZURhdGEsIGJpYmxlSWQsIGNvbnRleHRJZCwgZ2V0TGV4aWNvbkRhdGEsIHNob3dQb3BvdmVyLCB0cmFuc2xhdGUpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGNvbnN0IHZlcnNlVGV4dCA9IGJpYmxlc1tsYW5ndWFnZUlkXVtiaWJsZUlkXVtjaGFwdGVyXVtjdXJyZW50VmVyc2VOdW1iZXJdOyAvLyBzdHJpbmcgdmFsdWUgb2YgdGhlIHZlcnNlLlxuXG4gICAgICAgICAgdmVyc2VDZWxscy5wdXNoKFxuICAgICAgICAgICAgPENvbCBrZXk9e2luZGV4LnRvU3RyaW5nKCl9IG1kPXs0fSBzbT17NH0geHM9ezR9IGxnPXs0fSBzdHlsZT17Y29sU3R5bGV9PlxuICAgICAgICAgICAgICA8VmVyc2VcbiAgICAgICAgICAgICAgICB0cmFuc2xhdGU9e3RyYW5zbGF0ZX1cbiAgICAgICAgICAgICAgICB2ZXJzZUVsZW1lbnRzPXt2ZXJzZUVsZW1lbnRzfVxuICAgICAgICAgICAgICAgIHZlcnNlVGV4dD17dmVyc2VUZXh0fVxuICAgICAgICAgICAgICAgIGJpYmxlSWQ9e2JpYmxlSWR9XG4gICAgICAgICAgICAgICAgZGlyZWN0aW9uPXtkaXJlY3Rpb259XG4gICAgICAgICAgICAgICAgY2hhcHRlcj17Y2hhcHRlcn1cbiAgICAgICAgICAgICAgICB2ZXJzZT17Y3VycmVudFZlcnNlTnVtYmVyfVxuICAgICAgICAgICAgICAgIG9uRWRpdD17dGhpcy5oYW5kbGVFZGl0fSAvPlxuICAgICAgICAgICAgPC9Db2w+LFxuICAgICAgICAgICk7XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgPFJvdyBzdHlsZT17cm93U3R5bGV9PlxuICAgICAgICB7dmVyc2VDZWxsc31cbiAgICAgIDwvUm93PlxuICAgICk7XG4gIH1cbn1cblxuVmVyc2VSb3cucHJvcFR5cGVzID0ge1xuICBjaGFwdGVyOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4gIHZlcnNlOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICBdKSxcbiAgY3VycmVudFZlcnNlTnVtYmVyOiBQcm9wVHlwZXMub25lT2ZUeXBlKFtcbiAgICBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICBdKSxcbiAgY3VycmVudFBhbmVTZXR0aW5nczogUHJvcFR5cGVzLmFycmF5LmlzUmVxdWlyZWQsXG4gIHZlcnNlRWxlbWVudHM6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1xuICAgIFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICBQcm9wVHlwZXMuYXJyYXkuaXNSZXF1aXJlZCxcbiAgXSksXG4gIG9uRWRpdFRhcmdldFZlcnNlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICBiaWJsZXM6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgdHJhbnNsYXRlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICBjb250ZXh0SWQ6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgc2VsZWN0aW9uczogUHJvcFR5cGVzLmFycmF5LmlzUmVxdWlyZWQsXG4gIGdldExleGljb25EYXRhOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICBzaG93UG9wb3ZlcjogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgdGFyZ2V0TGFuZ3VhZ2VGb250OiBQcm9wVHlwZXMuc3RyaW5nLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgVmVyc2VSb3c7XG4iXX0=