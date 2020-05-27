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

var _Dialog = _interopRequireDefault(require("@material-ui/core/Dialog"));

var _DialogActions = _interopRequireDefault(require("@material-ui/core/DialogActions"));

var _DialogContent = _interopRequireDefault(require("@material-ui/core/DialogContent"));

var _Toolbar = _interopRequireDefault(require("@material-ui/core/Toolbar"));

var _IconButton = _interopRequireDefault(require("@material-ui/core/IconButton"));

var _reactBootstrap = require("react-bootstrap");

var _styles = require("@material-ui/core/styles");

var _Paper = _interopRequireDefault(require("@material-ui/core/Paper"));

var _reactDraggable = _interopRequireDefault(require("react-draggable"));

var _fontUtils = require("../../common/fontUtils");

var _ChapterView = _interopRequireDefault(require("./ChapterView"));

var _BibleHeadingsRow = _interopRequireDefault(require("./ChapterView/BibleHeadingsRow"));

require("./ExpandedScripturePaneModal.styles.css");

// components
function PaperComponent(props) {
  // component will only be draggable by element with the className in the handle prop
  return _react["default"].createElement(_reactDraggable["default"], {
    handle: ".expanded-scripture-draggable-handle"
  }, _react["default"].createElement(_Paper["default"], props));
}

var styles = {
  toolBar: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'var(--reverse-color)',
    backgroundColor: 'var(--accent-color-dark)',
    padding: '15px',
    width: '100%',
    cursor: 'move'
  },
  title: {
    marginLeft: 'auto',
    fontSize: '22px',
    fontWeight: '400'
  },
  closeButton: {
    marginLeft: 'auto'
  },
  dialogContent: {
    padding: '0px',
    margin: '0px'
  },
  dialogActions: {
    height: '70px',
    padding: '10px',
    margin: '0px',
    borderTop: '1px solid var(--border-color)'
  },
  progressRoot: {
    color: 'var(--accent-color-dark)'
  },
  progressSvg: {
    margin: '5px'
  },
  paperRoot: {
    margin: '0px'
  }
};

var ExpandedScripturePaneModal = /*#__PURE__*/function (_Component) {
  (0, _inherits2["default"])(ExpandedScripturePaneModal, _Component);

  function ExpandedScripturePaneModal(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, ExpandedScripturePaneModal);
    _this = (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(ExpandedScripturePaneModal).call(this, props));
    _this.handleEditTargetVerse = _this.handleEditTargetVerse.bind((0, _assertThisInitialized2["default"])(_this));
    _this.handleEditorCancel = _this.handleEditorCancel.bind((0, _assertThisInitialized2["default"])(_this));
    _this.handleEditorSubmit = _this.handleEditorSubmit.bind((0, _assertThisInitialized2["default"])(_this));
    _this.state = {
      editVerse: null
    };
    return _this;
  }

  (0, _createClass2["default"])(ExpandedScripturePaneModal, [{
    key: "componentDidCatch",
    value: function componentDidCatch(error, info) {
      console.error(error, info);
    }
    /**
     * Handles events to edit the target verse
     * @param bibleId
     * @param chapter
     * @param verse
     * @param verseText
     */

  }, {
    key: "handleEditTargetVerse",
    value: function handleEditTargetVerse(bibleId, chapter, verse, verseText) {
      this.setState({
        editVerse: {
          bibleId: bibleId,
          chapter: chapter,
          verse: verse,
          verseText: verseText
        }
      });
    }
  }, {
    key: "handleEditorSubmit",
    value: function handleEditorSubmit(originalVerse, newVerse, reasons) {
      var editTargetVerse = this.props.editTargetVerse;
      var editVerse = this.state.editVerse;

      if (editVerse === null) {
        return;
      }

      var chapter = editVerse.chapter,
          verse = editVerse.verse;

      if (typeof editTargetVerse === 'function') {
        editTargetVerse(chapter, verse, originalVerse, newVerse, reasons);
      } else {
        console.warn('Unable to edit verse. Callback is not a function.');
      }

      this.setState({
        editVerse: null
      });
    }
  }, {
    key: "handleEditorCancel",
    value: function handleEditorCancel() {
      this.setState({
        editVerse: null
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          show = _this$props.show,
          title = _this$props.title,
          onHide = _this$props.onHide,
          bibles = _this$props.bibles,
          classes = _this$props.classes,
          contextId = _this$props.contextId,
          translate = _this$props.translate,
          selections = _this$props.selections,
          showPopover = _this$props.showPopover,
          getLexiconData = _this$props.getLexiconData,
          editTargetVerse = _this$props.editTargetVerse,
          targetLanguageFont = _this$props.targetLanguageFont,
          currentPaneSettings = _this$props.currentPaneSettings,
          projectDetailsReducer = _this$props.projectDetailsReducer;
      var editVerse = this.state.editVerse;
      var fontClass = (0, _fontUtils.getFontClassName)(targetLanguageFont);
      return _react["default"].createElement(_Dialog["default"], {
        open: show,
        onClose: onHide,
        fullWidth: true,
        maxWidth: "md",
        PaperComponent: PaperComponent,
        PaperProps: {
          className: classes.paperRoot
        },
        "aria-labelledby": "draggable-expanded-scripture-pane"
      }, _react["default"].createElement(_Toolbar["default"], {
        style: styles.toolBar,
        className: "expanded-scripture-draggable-handle"
      }, _react["default"].createElement("div", {
        style: styles.title,
        className: fontClass
      }, title), _react["default"].createElement(_IconButton["default"], {
        color: "inherit",
        onClick: onHide,
        "aria-label": "Close",
        style: styles.closeButton
      }, _react["default"].createElement(_reactBootstrap.Glyphicon, {
        glyph: "remove"
      }))), _react["default"].createElement(_DialogContent["default"], {
        style: styles.dialogContent
      }, _react["default"].createElement(_BibleHeadingsRow["default"], {
        bibles: bibles,
        currentPaneSettings: currentPaneSettings,
        projectDetailsReducer: projectDetailsReducer
      }), _react["default"].createElement(_ChapterView["default"], {
        bibles: bibles,
        contextId: contextId,
        translate: translate,
        editVerse: editVerse,
        editTargetVerse: editTargetVerse,
        projectDetailsReducer: projectDetailsReducer,
        currentPaneSettings: currentPaneSettings,
        handleEditTargetVerse: this.handleEditTargetVerse,
        handleEditorSubmit: this.handleEditorSubmit,
        handleEditorCancel: this.handleEditorCancel,
        selections: selections,
        showPopover: showPopover,
        getLexiconData: getLexiconData
      })), _react["default"].createElement(_DialogActions["default"], {
        disableActionSpacing: true,
        style: styles.dialogActions
      }, _react["default"].createElement("button", {
        className: "btn-prime",
        onClick: onHide
      }, translate('close'))));
    }
  }]);
  return ExpandedScripturePaneModal;
}(_react.Component);

ExpandedScripturePaneModal.propTypes = {
  show: _propTypes["default"].bool.isRequired,
  onHide: _propTypes["default"].func.isRequired,
  title: _propTypes["default"].string.isRequired,
  bibles: _propTypes["default"].object.isRequired,
  translate: _propTypes["default"].func.isRequired,
  classes: _propTypes["default"].object.isRequired,
  targetLanguageFont: _propTypes["default"].string,
  contextId: _propTypes["default"].object.isRequired,
  showPopover: _propTypes["default"].func.isRequired,
  selections: _propTypes["default"].array.isRequired,
  primaryLabel: _propTypes["default"].string.isRequired,
  getLexiconData: _propTypes["default"].func.isRequired,
  editTargetVerse: _propTypes["default"].func.isRequired,
  currentPaneSettings: _propTypes["default"].array.isRequired,
  projectDetailsReducer: _propTypes["default"].object.isRequired
};

var _default = (0, _styles.withStyles)(styles)(ExpandedScripturePaneModal);

exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9TY3JpcHR1cmVQYW5lL0V4cGFuZGVkU2NyaXB0dXJlUGFuZU1vZGFsL2luZGV4LmpzIl0sIm5hbWVzIjpbIlBhcGVyQ29tcG9uZW50IiwicHJvcHMiLCJzdHlsZXMiLCJ0b29sQmFyIiwiZGlzcGxheSIsImp1c3RpZnlDb250ZW50IiwiYWxpZ25JdGVtcyIsImNvbG9yIiwiYmFja2dyb3VuZENvbG9yIiwicGFkZGluZyIsIndpZHRoIiwiY3Vyc29yIiwidGl0bGUiLCJtYXJnaW5MZWZ0IiwiZm9udFNpemUiLCJmb250V2VpZ2h0IiwiY2xvc2VCdXR0b24iLCJkaWFsb2dDb250ZW50IiwibWFyZ2luIiwiZGlhbG9nQWN0aW9ucyIsImhlaWdodCIsImJvcmRlclRvcCIsInByb2dyZXNzUm9vdCIsInByb2dyZXNzU3ZnIiwicGFwZXJSb290IiwiRXhwYW5kZWRTY3JpcHR1cmVQYW5lTW9kYWwiLCJoYW5kbGVFZGl0VGFyZ2V0VmVyc2UiLCJiaW5kIiwiaGFuZGxlRWRpdG9yQ2FuY2VsIiwiaGFuZGxlRWRpdG9yU3VibWl0Iiwic3RhdGUiLCJlZGl0VmVyc2UiLCJlcnJvciIsImluZm8iLCJjb25zb2xlIiwiYmlibGVJZCIsImNoYXB0ZXIiLCJ2ZXJzZSIsInZlcnNlVGV4dCIsInNldFN0YXRlIiwib3JpZ2luYWxWZXJzZSIsIm5ld1ZlcnNlIiwicmVhc29ucyIsImVkaXRUYXJnZXRWZXJzZSIsIndhcm4iLCJzaG93Iiwib25IaWRlIiwiYmlibGVzIiwiY2xhc3NlcyIsImNvbnRleHRJZCIsInRyYW5zbGF0ZSIsInNlbGVjdGlvbnMiLCJzaG93UG9wb3ZlciIsImdldExleGljb25EYXRhIiwidGFyZ2V0TGFuZ3VhZ2VGb250IiwiY3VycmVudFBhbmVTZXR0aW5ncyIsInByb2plY3REZXRhaWxzUmVkdWNlciIsImZvbnRDbGFzcyIsImNsYXNzTmFtZSIsIkNvbXBvbmVudCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsImJvb2wiLCJpc1Jl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LE9BQU8sRUFBRWEsc0JBQVVLLE1BQVYsQ0FBaUJILFVBTlc7QUFPckNULEVBQUFBLGtCQUFrQixFQUFFTyxzQkFBVUksTUFQTztBQVFyQ2hCLEVBQUFBLFNBQVMsRUFBRVksc0JBQVVLLE1BQVYsQ0FBaUJILFVBUlM7QUFTckNYLEVBQUFBLFdBQVcsRUFBRVMsc0JBQVVHLElBQVYsQ0FBZUQsVUFUUztBQVVyQ1osRUFBQUEsVUFBVSxFQUFFVSxzQkFBVU0sS0FBVixDQUFnQkosVUFWUztBQVdyQ0ssRUFBQUEsWUFBWSxFQUFFUCxzQkFBVUksTUFBVixDQUFpQkYsVUFYTTtBQVlyQ1YsRUFBQUEsY0FBYyxFQUFFUSxzQkFBVUcsSUFBVixDQUFlRCxVQVpNO0FBYXJDcEIsRUFBQUEsZUFBZSxFQUFFa0Isc0JBQVVHLElBQVYsQ0FBZUQsVUFiSztBQWNyQ1IsRUFBQUEsbUJBQW1CLEVBQUVNLHNCQUFVTSxLQUFWLENBQWdCSixVQWRBO0FBZXJDUCxFQUFBQSxxQkFBcUIsRUFBRUssc0JBQVVLLE1BQVYsQ0FBaUJIO0FBZkgsQ0FBdkM7O2VBa0JlLHdCQUFXN0QsTUFBWCxFQUFtQnVCLDBCQUFuQixDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgRGlhbG9nIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0RpYWxvZyc7XG5pbXBvcnQgRGlhbG9nQWN0aW9ucyBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9EaWFsb2dBY3Rpb25zJztcbmltcG9ydCBEaWFsb2dDb250ZW50IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0RpYWxvZ0NvbnRlbnQnO1xuaW1wb3J0IFRvb2xiYXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVG9vbGJhcic7XG5pbXBvcnQgSWNvbkJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9JY29uQnV0dG9uJztcbmltcG9ydCB7IEdseXBoaWNvbiB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCc7XG5pbXBvcnQgeyB3aXRoU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcbi8vIGNvbXBvbmVudHNcbmltcG9ydCBQYXBlciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9QYXBlcic7XG5pbXBvcnQgRHJhZ2dhYmxlIGZyb20gJ3JlYWN0LWRyYWdnYWJsZSc7XG5pbXBvcnQgeyBnZXRGb250Q2xhc3NOYW1lIH0gZnJvbSAnLi4vLi4vY29tbW9uL2ZvbnRVdGlscyc7XG5pbXBvcnQgQ2hhcHRlclZpZXcgZnJvbSAnLi9DaGFwdGVyVmlldyc7XG5pbXBvcnQgQmlibGVIZWFkaW5nc1JvdyBmcm9tICcuL0NoYXB0ZXJWaWV3L0JpYmxlSGVhZGluZ3NSb3cnO1xuXG5pbXBvcnQgJy4vRXhwYW5kZWRTY3JpcHR1cmVQYW5lTW9kYWwuc3R5bGVzLmNzcyc7XG5cbmZ1bmN0aW9uIFBhcGVyQ29tcG9uZW50KHByb3BzKSB7XG4gIC8vIGNvbXBvbmVudCB3aWxsIG9ubHkgYmUgZHJhZ2dhYmxlIGJ5IGVsZW1lbnQgd2l0aCB0aGUgY2xhc3NOYW1lIGluIHRoZSBoYW5kbGUgcHJvcFxuICByZXR1cm4gKFxuICAgIDxEcmFnZ2FibGUgaGFuZGxlPVwiLmV4cGFuZGVkLXNjcmlwdHVyZS1kcmFnZ2FibGUtaGFuZGxlXCI+XG4gICAgICA8UGFwZXIgey4uLnByb3BzfS8+XG4gICAgPC9EcmFnZ2FibGU+XG4gICk7XG59XG5cbmNvbnN0IHN0eWxlcyA9IHtcbiAgdG9vbEJhcjoge1xuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgY29sb3I6ICd2YXIoLS1yZXZlcnNlLWNvbG9yKScsXG4gICAgYmFja2dyb3VuZENvbG9yOiAndmFyKC0tYWNjZW50LWNvbG9yLWRhcmspJyxcbiAgICBwYWRkaW5nOiAnMTVweCcsXG4gICAgd2lkdGg6ICcxMDAlJyxcbiAgICBjdXJzb3I6ICdtb3ZlJyxcbiAgfSxcbiAgdGl0bGU6IHtcbiAgICBtYXJnaW5MZWZ0OiAnYXV0bycsXG4gICAgZm9udFNpemU6ICcyMnB4JyxcbiAgICBmb250V2VpZ2h0OiAnNDAwJyxcbiAgfSxcbiAgY2xvc2VCdXR0b246IHsgbWFyZ2luTGVmdDogJ2F1dG8nIH0sXG4gIGRpYWxvZ0NvbnRlbnQ6IHtcbiAgICBwYWRkaW5nOiAnMHB4JyxcbiAgICBtYXJnaW46ICcwcHgnLFxuICB9LFxuICBkaWFsb2dBY3Rpb25zOiB7XG4gICAgaGVpZ2h0OiAnNzBweCcsXG4gICAgcGFkZGluZzogJzEwcHgnLFxuICAgIG1hcmdpbjogJzBweCcsXG4gICAgYm9yZGVyVG9wOiAnMXB4IHNvbGlkIHZhcigtLWJvcmRlci1jb2xvciknLFxuICB9LFxuICBwcm9ncmVzc1Jvb3Q6IHsgY29sb3I6ICd2YXIoLS1hY2NlbnQtY29sb3ItZGFyayknIH0sXG4gIHByb2dyZXNzU3ZnOiB7IG1hcmdpbjogJzVweCcgfSxcbiAgcGFwZXJSb290OiB7IG1hcmdpbjogJzBweCcgfSxcbn07XG5cbmNsYXNzIEV4cGFuZGVkU2NyaXB0dXJlUGFuZU1vZGFsIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5oYW5kbGVFZGl0VGFyZ2V0VmVyc2UgPSB0aGlzLmhhbmRsZUVkaXRUYXJnZXRWZXJzZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMuaGFuZGxlRWRpdG9yQ2FuY2VsID0gdGhpcy5oYW5kbGVFZGl0b3JDYW5jZWwuYmluZCh0aGlzKTtcbiAgICB0aGlzLmhhbmRsZUVkaXRvclN1Ym1pdCA9IHRoaXMuaGFuZGxlRWRpdG9yU3VibWl0LmJpbmQodGhpcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHsgZWRpdFZlcnNlOiBudWxsIH07XG4gIH1cblxuICBjb21wb25lbnREaWRDYXRjaChlcnJvciwgaW5mbykge1xuICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IsIGluZm8pO1xuICB9XG5cbiAgLyoqXG4gICAqIEhhbmRsZXMgZXZlbnRzIHRvIGVkaXQgdGhlIHRhcmdldCB2ZXJzZVxuICAgKiBAcGFyYW0gYmlibGVJZFxuICAgKiBAcGFyYW0gY2hhcHRlclxuICAgKiBAcGFyYW0gdmVyc2VcbiAgICogQHBhcmFtIHZlcnNlVGV4dFxuICAgKi9cbiAgaGFuZGxlRWRpdFRhcmdldFZlcnNlKGJpYmxlSWQsIGNoYXB0ZXIsIHZlcnNlLCB2ZXJzZVRleHQpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGVkaXRWZXJzZToge1xuICAgICAgICBiaWJsZUlkLFxuICAgICAgICBjaGFwdGVyLFxuICAgICAgICB2ZXJzZSxcbiAgICAgICAgdmVyc2VUZXh0LFxuICAgICAgfSxcbiAgICB9KTtcbiAgfVxuXG4gIGhhbmRsZUVkaXRvclN1Ym1pdChvcmlnaW5hbFZlcnNlLCBuZXdWZXJzZSwgcmVhc29ucykge1xuICAgIGNvbnN0IHsgZWRpdFRhcmdldFZlcnNlIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHsgZWRpdFZlcnNlIH0gPSB0aGlzLnN0YXRlO1xuXG4gICAgaWYgKGVkaXRWZXJzZSA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IHsgY2hhcHRlciwgdmVyc2UgfSA9IGVkaXRWZXJzZTtcblxuICAgIGlmICh0eXBlb2YgZWRpdFRhcmdldFZlcnNlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBlZGl0VGFyZ2V0VmVyc2UoY2hhcHRlciwgdmVyc2UsIG9yaWdpbmFsVmVyc2UsIG5ld1ZlcnNlLCByZWFzb25zKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc29sZS53YXJuKCdVbmFibGUgdG8gZWRpdCB2ZXJzZS4gQ2FsbGJhY2sgaXMgbm90IGEgZnVuY3Rpb24uJyk7XG4gICAgfVxuICAgIHRoaXMuc2V0U3RhdGUoeyBlZGl0VmVyc2U6IG51bGwgfSk7XG4gIH1cblxuICBoYW5kbGVFZGl0b3JDYW5jZWwoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGVkaXRWZXJzZTogbnVsbCB9KTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICBzaG93LFxuICAgICAgdGl0bGUsXG4gICAgICBvbkhpZGUsXG4gICAgICBiaWJsZXMsXG4gICAgICBjbGFzc2VzLFxuICAgICAgY29udGV4dElkLFxuICAgICAgdHJhbnNsYXRlLFxuICAgICAgc2VsZWN0aW9ucyxcbiAgICAgIHNob3dQb3BvdmVyLFxuICAgICAgZ2V0TGV4aWNvbkRhdGEsXG4gICAgICBlZGl0VGFyZ2V0VmVyc2UsXG4gICAgICB0YXJnZXRMYW5ndWFnZUZvbnQsXG4gICAgICBjdXJyZW50UGFuZVNldHRpbmdzLFxuICAgICAgcHJvamVjdERldGFpbHNSZWR1Y2VyLFxuICAgIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHsgZWRpdFZlcnNlIH0gPSB0aGlzLnN0YXRlO1xuICAgIGNvbnN0IGZvbnRDbGFzcyA9IGdldEZvbnRDbGFzc05hbWUodGFyZ2V0TGFuZ3VhZ2VGb250KTtcblxuICAgIHJldHVybiAoXG4gICAgICA8RGlhbG9nXG4gICAgICAgIG9wZW49e3Nob3d9XG4gICAgICAgIG9uQ2xvc2U9e29uSGlkZX1cbiAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgIG1heFdpZHRoPSdtZCdcbiAgICAgICAgUGFwZXJDb21wb25lbnQ9e1BhcGVyQ29tcG9uZW50fVxuICAgICAgICBQYXBlclByb3BzPXt7IGNsYXNzTmFtZTogY2xhc3Nlcy5wYXBlclJvb3QgfX1cbiAgICAgICAgYXJpYS1sYWJlbGxlZGJ5PVwiZHJhZ2dhYmxlLWV4cGFuZGVkLXNjcmlwdHVyZS1wYW5lXCJcbiAgICAgID5cbiAgICAgICAgPFRvb2xiYXIgc3R5bGU9e3N0eWxlcy50b29sQmFyfSBjbGFzc05hbWU9XCJleHBhbmRlZC1zY3JpcHR1cmUtZHJhZ2dhYmxlLWhhbmRsZVwiPlxuICAgICAgICAgIDxkaXYgc3R5bGU9e3N0eWxlcy50aXRsZX0gY2xhc3NOYW1lPXtmb250Q2xhc3N9PlxuICAgICAgICAgICAge3RpdGxlfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxJY29uQnV0dG9uIGNvbG9yPVwiaW5oZXJpdFwiIG9uQ2xpY2s9e29uSGlkZX0gYXJpYS1sYWJlbD1cIkNsb3NlXCIgc3R5bGU9e3N0eWxlcy5jbG9zZUJ1dHRvbn0+XG4gICAgICAgICAgICA8R2x5cGhpY29uIGdseXBoPVwicmVtb3ZlXCIgLz5cbiAgICAgICAgICA8L0ljb25CdXR0b24+XG4gICAgICAgIDwvVG9vbGJhcj5cbiAgICAgICAgPERpYWxvZ0NvbnRlbnQgc3R5bGU9e3N0eWxlcy5kaWFsb2dDb250ZW50fT5cbiAgICAgICAgICA8QmlibGVIZWFkaW5nc1Jvd1xuICAgICAgICAgICAgYmlibGVzPXtiaWJsZXN9XG4gICAgICAgICAgICBjdXJyZW50UGFuZVNldHRpbmdzPXtjdXJyZW50UGFuZVNldHRpbmdzfVxuICAgICAgICAgICAgcHJvamVjdERldGFpbHNSZWR1Y2VyPXtwcm9qZWN0RGV0YWlsc1JlZHVjZXJ9IC8+XG4gICAgICAgICAgPENoYXB0ZXJWaWV3XG4gICAgICAgICAgICBiaWJsZXM9e2JpYmxlc31cbiAgICAgICAgICAgIGNvbnRleHRJZD17Y29udGV4dElkfVxuICAgICAgICAgICAgdHJhbnNsYXRlPXt0cmFuc2xhdGV9XG4gICAgICAgICAgICBlZGl0VmVyc2U9e2VkaXRWZXJzZX1cbiAgICAgICAgICAgIGVkaXRUYXJnZXRWZXJzZT17ZWRpdFRhcmdldFZlcnNlfVxuICAgICAgICAgICAgcHJvamVjdERldGFpbHNSZWR1Y2VyPXtwcm9qZWN0RGV0YWlsc1JlZHVjZXJ9XG4gICAgICAgICAgICBjdXJyZW50UGFuZVNldHRpbmdzPXtjdXJyZW50UGFuZVNldHRpbmdzfVxuICAgICAgICAgICAgaGFuZGxlRWRpdFRhcmdldFZlcnNlPXt0aGlzLmhhbmRsZUVkaXRUYXJnZXRWZXJzZX1cbiAgICAgICAgICAgIGhhbmRsZUVkaXRvclN1Ym1pdD17dGhpcy5oYW5kbGVFZGl0b3JTdWJtaXR9XG4gICAgICAgICAgICBoYW5kbGVFZGl0b3JDYW5jZWw9e3RoaXMuaGFuZGxlRWRpdG9yQ2FuY2VsfVxuICAgICAgICAgICAgc2VsZWN0aW9ucz17c2VsZWN0aW9uc31cbiAgICAgICAgICAgIHNob3dQb3BvdmVyPXtzaG93UG9wb3Zlcn1cbiAgICAgICAgICAgIGdldExleGljb25EYXRhPXtnZXRMZXhpY29uRGF0YX0gLz5cbiAgICAgICAgPC9EaWFsb2dDb250ZW50PlxuICAgICAgICA8RGlhbG9nQWN0aW9ucyBkaXNhYmxlQWN0aW9uU3BhY2luZyBzdHlsZT17c3R5bGVzLmRpYWxvZ0FjdGlvbnN9PlxuICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuLXByaW1lXCIgb25DbGljaz17b25IaWRlfT5cbiAgICAgICAgICAgIHt0cmFuc2xhdGUoJ2Nsb3NlJyl9XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvRGlhbG9nQWN0aW9ucz5cbiAgICAgIDwvRGlhbG9nPlxuICAgICk7XG4gIH1cbn1cblxuRXhwYW5kZWRTY3JpcHR1cmVQYW5lTW9kYWwucHJvcFR5cGVzID0ge1xuICBzaG93OiBQcm9wVHlwZXMuYm9vbC5pc1JlcXVpcmVkLFxuICBvbkhpZGU6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIHRpdGxlOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gIGJpYmxlczogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuICB0cmFuc2xhdGU6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIGNsYXNzZXM6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgdGFyZ2V0TGFuZ3VhZ2VGb250OiBQcm9wVHlwZXMuc3RyaW5nLFxuICBjb250ZXh0SWQ6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgc2hvd1BvcG92ZXI6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIHNlbGVjdGlvbnM6IFByb3BUeXBlcy5hcnJheS5pc1JlcXVpcmVkLFxuICBwcmltYXJ5TGFiZWw6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgZ2V0TGV4aWNvbkRhdGE6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIGVkaXRUYXJnZXRWZXJzZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgY3VycmVudFBhbmVTZXR0aW5nczogUHJvcFR5cGVzLmFycmF5LmlzUmVxdWlyZWQsXG4gIHByb2plY3REZXRhaWxzUmVkdWNlcjogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlcyhzdHlsZXMpKEV4cGFuZGVkU2NyaXB0dXJlUGFuZU1vZGFsKTtcbiJdfQ==