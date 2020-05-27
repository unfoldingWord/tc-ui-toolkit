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

var _styles = require("@material-ui/core/styles");

var _Dialog = _interopRequireDefault(require("@material-ui/core/Dialog"));

var _DialogTitle = _interopRequireDefault(require("@material-ui/core/DialogTitle"));

var _DialogActions = _interopRequireDefault(require("@material-ui/core/DialogActions"));

var _DialogContent = _interopRequireDefault(require("@material-ui/core/DialogContent"));

var _Toolbar = _interopRequireDefault(require("@material-ui/core/Toolbar"));

var _reactBootstrap = require("react-bootstrap");

var _Paper = _interopRequireDefault(require("@material-ui/core/Paper"));

var _reactDraggable = _interopRequireDefault(require("react-draggable"));

var _MyTargetVerse = _interopRequireDefault(require("../MyTargetVerse"));

require("./MyLanguageModal.styles.css");

function PaperComponent(props) {
  // component will only be draggable by element with the className in the handle prop
  return _react["default"].createElement(_reactDraggable["default"], {
    handle: ".my-language-modal-draggable-handle"
  }, _react["default"].createElement(_Paper["default"], props));
}

var styles = {
  paperRoot: {
    margin: '0px'
  }
};

var MyLanguageModal = /*#__PURE__*/function (_Component) {
  (0, _inherits2["default"])(MyLanguageModal, _Component);

  function MyLanguageModal(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, MyLanguageModal);
    _this = (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(MyLanguageModal).call(this, props));
    _this.scrollToCurrentVerse = _this.scrollToCurrentVerse.bind((0, _assertThisInitialized2["default"])(_this));
    return _this;
  }

  (0, _createClass2["default"])(MyLanguageModal, [{
    key: "scrollToCurrentVerse",
    value: function scrollToCurrentVerse() {
      var _this$props = this.props,
          chapter = _this$props.chapter,
          currentVerse = _this$props.currentVerse;
      var verseReference = 'MyTargetVerse:' + chapter.toString() + currentVerse.toString();
      var element = document.getElementById(verseReference);

      if (element) {
        element.scrollIntoView();
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          show = _this$props2.show,
          onHide = _this$props2.onHide,
          targetBible = _this$props2.targetBible,
          chapter = _this$props2.chapter,
          currentVerse = _this$props2.currentVerse,
          translate = _this$props2.translate,
          classes = _this$props2.classes,
          bookName = _this$props2.bookName,
          languageDirection = _this$props2.languageDirection,
          targetLanguageFont = _this$props2.targetLanguageFont;
      var title = bookName;
      var MyTargetLanguage = [];

      if (show) {
        for (var key in targetBible[chapter]) {
          if (targetBible[chapter].hasOwnProperty(key)) {
            var verseText = targetBible[chapter][key];
            var versePaneStyle = {};

            if (key == currentVerse) {
              if (key % 2 == 0) {
                versePaneStyle = {
                  borderLeft: '6px solid var(--accent-color)',
                  backgroundColor: 'var(--background-color-light)',
                  marginTop: '10px',
                  color: 'var(--text-color-dark)',
                  padding: '10px'
                };
              } else {
                versePaneStyle = {
                  borderLeft: '6px solid var(--accent-color)',
                  marginTop: '10px',
                  color: 'var(--text-color-dark)',
                  padding: '10px'
                };
              }
            } else if (key % 2 == 0) {
              versePaneStyle = {
                backgroundColor: 'var(--background-color-light)',
                marginTop: '10px',
                color: 'var(--text-color-dark)',
                padding: '10px'
              };
            } else {
              versePaneStyle = {
                marginTop: '10px',
                color: 'var(--text-color-dark)',
                padding: '10px'
              };
            }

            MyTargetLanguage.push(_react["default"].createElement("div", {
              key: key,
              id: 'MyTargetVerse:' + chapter.toString() + key.toString()
            }, _react["default"].createElement(_MyTargetVerse["default"], {
              chapter: chapter,
              verse: parseInt(key, 10),
              verseText: verseText,
              styles: versePaneStyle,
              dir: languageDirection,
              targetLanguageFont: targetLanguageFont
            })));
          }
        }
      }

      return _react["default"].createElement(_Dialog["default"], {
        onEntered: this.scrollToCurrentVerse,
        maxWidth: 'md',
        fullWidth: true,
        open: show,
        onClose: onHide,
        PaperComponent: PaperComponent,
        PaperProps: {
          className: classes.paperRoot
        }
      }, _react["default"].createElement(_Toolbar["default"], {
        className: "my-language-modal-draggable-handle",
        disableGutters: true,
        style: {
          display: 'flex',
          justifyContent: 'flex-end',
          backgroundColor: 'var(--accent-color-dark)',
          cursor: 'move'
        }
      }, _react["default"].createElement(_DialogTitle["default"], {
        disableTypography: true,
        className: "verse-check-modal-title"
      }, _react["default"].createElement("h4", {
        style: {
          color: 'var(--reverse-color)'
        }
      }, title), _react["default"].createElement(_reactBootstrap.Glyphicon, {
        onClick: onHide,
        glyph: 'remove',
        style: {
          position: 'absolute',
          right: 0,
          margin: 24,
          color: 'var(--reverse-color)',
          cursor: 'pointer',
          fontSize: '18px'
        }
      }))), _react["default"].createElement(_DialogContent["default"], {
        style: {
          padding: '0px',
          height: '500px',
          backgroundColor: 'var(--reverse-color)',
          overflowY: 'auto'
        }
      }, MyTargetLanguage), _react["default"].createElement(_DialogActions["default"], {
        disableActionSpacing: true
      }, _react["default"].createElement("button", {
        className: "btn-prime",
        onClick: onHide
      }, translate('close'))));
    }
  }]);
  return MyLanguageModal;
}(_react.Component);

MyLanguageModal.propTypes = {
  show: _propTypes["default"].bool.isRequired,
  onHide: _propTypes["default"].func.isRequired,
  targetBible: _propTypes["default"].object.isRequired,
  chapter: _propTypes["default"].number.isRequired,
  currentVerse: _propTypes["default"].number.isRequired,
  languageDirection: _propTypes["default"].string.isRequired,
  translate: _propTypes["default"].func.isRequired,
  classes: _propTypes["default"].object.isRequired,
  bookName: _propTypes["default"].string.isRequired,
  targetLanguageFont: _propTypes["default"].string
};

var _default = (0, _styles.withStyles)(styles)(MyLanguageModal);

exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9WZXJzZUNoZWNrL015TGFuZ3VhZ2VNb2RhbC9pbmRleC5qcyJdLCJuYW1lcyI6WyJQYXBlckNvbXBvbmVudCIsInByb3BzIiwic3R5bGVzIiwicGFwZXJSb290IiwibWFyZ2luIiwiTXlMYW5ndWFnZU1vZGFsIiwic2Nyb2xsVG9DdXJyZW50VmVyc2UiLCJiaW5kIiwiY2hhcHRlciIsImN1cnJlbnRWZXJzZSIsInZlcnNlUmVmZXJlbmNlIiwidG9TdHJpbmciLCJlbGVtZW50IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInNjcm9sbEludG9WaWV3Iiwic2hvdyIsIm9uSGlkZSIsInRhcmdldEJpYmxlIiwidHJhbnNsYXRlIiwiY2xhc3NlcyIsImJvb2tOYW1lIiwibGFuZ3VhZ2VEaXJlY3Rpb24iLCJ0YXJnZXRMYW5ndWFnZUZvbnQiLCJ0aXRsZSIsIk15VGFyZ2V0TGFuZ3VhZ2UiLCJrZXkiLCJoYXNPd25Qcm9wZXJ0eSIsInZlcnNlVGV4dCIsInZlcnNlUGFuZVN0eWxlIiwiYm9yZGVyTGVmdCIsImJhY2tncm91bmRDb2xvciIsIm1hcmdpblRvcCIsImNvbG9yIiwicGFkZGluZyIsInB1c2giLCJwYXJzZUludCIsImNsYXNzTmFtZSIsImRpc3BsYXkiLCJqdXN0aWZ5Q29udGVudCIsImN1cnNvciIsInBvc2l0aW9uIiwicmlnaHQiLCJmb250U2l6ZSIsImhlaWdodCIsIm92ZXJmbG93WSIsIkNvbXBvbmVudCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsImJvb2wiLCJpc1JlcXVpcmVkIiwiZnVuYyIsIm9iamVjdCIsIm51bWJlciIsInN0cmluZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFFQTs7QUFFQSxTQUFTQSxjQUFULENBQXdCQyxLQUF4QixFQUErQjtBQUM3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QzBDLFNBQWhCLEdBQTRCO0FBQzFCL0IsRUFBQUEsSUFBSSxFQUFFZ0Msc0JBQVVDLElBQVYsQ0FBZUMsVUFESztBQUUxQmpDLEVBQUFBLE1BQU0sRUFBRStCLHNCQUFVRyxJQUFWLENBQWVELFVBRkc7QUFHMUJoQyxFQUFBQSxXQUFXLEVBQUU4QixzQkFBVUksTUFBVixDQUFpQkYsVUFISjtBQUkxQjFDLEVBQUFBLE9BQU8sRUFBRXdDLHNCQUFVSyxNQUFWLENBQWlCSCxVQUpBO0FBSzFCekMsRUFBQUEsWUFBWSxFQUFFdUMsc0JBQVVLLE1BQVYsQ0FBaUJILFVBTEw7QUFNMUI1QixFQUFBQSxpQkFBaUIsRUFBRTBCLHNCQUFVTSxNQUFWLENBQWlCSixVQU5WO0FBTzFCL0IsRUFBQUEsU0FBUyxFQUFFNkIsc0JBQVVHLElBQVYsQ0FBZUQsVUFQQTtBQVExQjlCLEVBQUFBLE9BQU8sRUFBRTRCLHNCQUFVSSxNQUFWLENBQWlCRixVQVJBO0FBUzFCN0IsRUFBQUEsUUFBUSxFQUFFMkIsc0JBQVVNLE1BQVYsQ0FBaUJKLFVBVEQ7QUFVMUIzQixFQUFBQSxrQkFBa0IsRUFBRXlCLHNCQUFVTTtBQVZKLENBQTVCOztlQWFlLHdCQUFXcEQsTUFBWCxFQUFtQkcsZUFBbkIsQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgd2l0aFN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XG5pbXBvcnQgRGlhbG9nIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0RpYWxvZyc7XG5pbXBvcnQgRGlhbG9nVGl0bGUgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvRGlhbG9nVGl0bGUnO1xuaW1wb3J0IERpYWxvZ0FjdGlvbnMgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvRGlhbG9nQWN0aW9ucyc7XG5pbXBvcnQgRGlhbG9nQ29udGVudCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9EaWFsb2dDb250ZW50JztcbmltcG9ydCBUb29sYmFyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1Rvb2xiYXInO1xuaW1wb3J0IHsgR2x5cGhpY29uIH0gZnJvbSAncmVhY3QtYm9vdHN0cmFwJztcbmltcG9ydCBQYXBlciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9QYXBlcic7XG5pbXBvcnQgRHJhZ2dhYmxlIGZyb20gJ3JlYWN0LWRyYWdnYWJsZSc7XG5pbXBvcnQgTXlUYXJnZXRWZXJzZSBmcm9tICcuLi9NeVRhcmdldFZlcnNlJztcblxuaW1wb3J0ICcuL015TGFuZ3VhZ2VNb2RhbC5zdHlsZXMuY3NzJztcblxuZnVuY3Rpb24gUGFwZXJDb21wb25lbnQocHJvcHMpIHtcbiAgLy8gY29tcG9uZW50IHdpbGwgb25seSBiZSBkcmFnZ2FibGUgYnkgZWxlbWVudCB3aXRoIHRoZSBjbGFzc05hbWUgaW4gdGhlIGhhbmRsZSBwcm9wXG4gIHJldHVybiAoXG4gICAgPERyYWdnYWJsZSBoYW5kbGU9XCIubXktbGFuZ3VhZ2UtbW9kYWwtZHJhZ2dhYmxlLWhhbmRsZVwiPlxuICAgICAgPFBhcGVyIHsuLi5wcm9wc30vPlxuICAgIDwvRHJhZ2dhYmxlPlxuICApO1xufVxuXG5jb25zdCBzdHlsZXMgPSB7IHBhcGVyUm9vdDogeyBtYXJnaW46ICcwcHgnIH0gfTtcblxuY2xhc3MgTXlMYW5ndWFnZU1vZGFsIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zY3JvbGxUb0N1cnJlbnRWZXJzZSA9IHRoaXMuc2Nyb2xsVG9DdXJyZW50VmVyc2UuYmluZCh0aGlzKTtcbiAgfVxuXG4gIHNjcm9sbFRvQ3VycmVudFZlcnNlKCkge1xuICAgIGxldCB7IGNoYXB0ZXIsIGN1cnJlbnRWZXJzZSB9ID0gdGhpcy5wcm9wcztcbiAgICBsZXQgdmVyc2VSZWZlcmVuY2UgPSAnTXlUYXJnZXRWZXJzZTonICsgY2hhcHRlci50b1N0cmluZygpICsgY3VycmVudFZlcnNlLnRvU3RyaW5nKCk7XG4gICAgbGV0IGVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh2ZXJzZVJlZmVyZW5jZSk7XG5cbiAgICBpZiAoZWxlbWVudCkge1xuICAgICAgZWxlbWVudC5zY3JvbGxJbnRvVmlldygpO1xuICAgIH1cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBsZXQge1xuICAgICAgc2hvdyxcbiAgICAgIG9uSGlkZSxcbiAgICAgIHRhcmdldEJpYmxlLFxuICAgICAgY2hhcHRlcixcbiAgICAgIGN1cnJlbnRWZXJzZSxcbiAgICAgIHRyYW5zbGF0ZSxcbiAgICAgIGNsYXNzZXMsXG4gICAgICBib29rTmFtZSxcbiAgICAgIGxhbmd1YWdlRGlyZWN0aW9uLFxuICAgICAgdGFyZ2V0TGFuZ3VhZ2VGb250LFxuICAgIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHRpdGxlID0gYm9va05hbWU7XG4gICAgbGV0IE15VGFyZ2V0TGFuZ3VhZ2UgPSBbXTtcblxuICAgIGlmIChzaG93KSB7XG4gICAgICBmb3IgKGxldCBrZXkgaW4gdGFyZ2V0QmlibGVbY2hhcHRlcl0pIHtcbiAgICAgICAgaWYgKHRhcmdldEJpYmxlW2NoYXB0ZXJdLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICBsZXQgdmVyc2VUZXh0ID0gdGFyZ2V0QmlibGVbY2hhcHRlcl1ba2V5XTtcbiAgICAgICAgICBsZXQgdmVyc2VQYW5lU3R5bGUgPSB7fTtcblxuICAgICAgICAgIGlmIChrZXkgPT0gY3VycmVudFZlcnNlKSB7XG4gICAgICAgICAgICBpZiAoa2V5ICUgMiA9PSAwKSB7XG4gICAgICAgICAgICAgIHZlcnNlUGFuZVN0eWxlID0ge1xuICAgICAgICAgICAgICAgIGJvcmRlckxlZnQ6ICc2cHggc29saWQgdmFyKC0tYWNjZW50LWNvbG9yKScsIGJhY2tncm91bmRDb2xvcjogJ3ZhcigtLWJhY2tncm91bmQtY29sb3ItbGlnaHQpJywgbWFyZ2luVG9wOiAnMTBweCcsIGNvbG9yOiAndmFyKC0tdGV4dC1jb2xvci1kYXJrKScsIHBhZGRpbmc6ICcxMHB4JyxcbiAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHZlcnNlUGFuZVN0eWxlID0ge1xuICAgICAgICAgICAgICAgIGJvcmRlckxlZnQ6ICc2cHggc29saWQgdmFyKC0tYWNjZW50LWNvbG9yKScsIG1hcmdpblRvcDogJzEwcHgnLCBjb2xvcjogJ3ZhcigtLXRleHQtY29sb3ItZGFyayknLCBwYWRkaW5nOiAnMTBweCcsXG4gICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIGlmIChrZXkgJSAyID09IDApIHtcbiAgICAgICAgICAgIHZlcnNlUGFuZVN0eWxlID0ge1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICd2YXIoLS1iYWNrZ3JvdW5kLWNvbG9yLWxpZ2h0KScsIG1hcmdpblRvcDogJzEwcHgnLCBjb2xvcjogJ3ZhcigtLXRleHQtY29sb3ItZGFyayknLCBwYWRkaW5nOiAnMTBweCcsXG4gICAgICAgICAgICB9O1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB2ZXJzZVBhbmVTdHlsZSA9IHtcbiAgICAgICAgICAgICAgbWFyZ2luVG9wOiAnMTBweCcsIGNvbG9yOiAndmFyKC0tdGV4dC1jb2xvci1kYXJrKScsIHBhZGRpbmc6ICcxMHB4JyxcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgfVxuICAgICAgICAgIE15VGFyZ2V0TGFuZ3VhZ2UucHVzaChcbiAgICAgICAgICAgIDxkaXYga2V5PXtrZXl9IGlkPXsnTXlUYXJnZXRWZXJzZTonICsgY2hhcHRlci50b1N0cmluZygpICsga2V5LnRvU3RyaW5nKCl9PlxuICAgICAgICAgICAgICA8TXlUYXJnZXRWZXJzZVxuICAgICAgICAgICAgICAgIGNoYXB0ZXI9e2NoYXB0ZXJ9XG4gICAgICAgICAgICAgICAgdmVyc2U9e3BhcnNlSW50KGtleSwgMTApfVxuICAgICAgICAgICAgICAgIHZlcnNlVGV4dD17dmVyc2VUZXh0fVxuICAgICAgICAgICAgICAgIHN0eWxlcz17dmVyc2VQYW5lU3R5bGV9XG4gICAgICAgICAgICAgICAgZGlyPXtsYW5ndWFnZURpcmVjdGlvbn1cbiAgICAgICAgICAgICAgICB0YXJnZXRMYW5ndWFnZUZvbnQ9e3RhcmdldExhbmd1YWdlRm9udH1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PixcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxEaWFsb2dcbiAgICAgICAgb25FbnRlcmVkPXt0aGlzLnNjcm9sbFRvQ3VycmVudFZlcnNlfVxuICAgICAgICBtYXhXaWR0aD17J21kJ31cbiAgICAgICAgZnVsbFdpZHRoPXt0cnVlfVxuICAgICAgICBvcGVuPXtzaG93fVxuICAgICAgICBvbkNsb3NlPXtvbkhpZGV9XG4gICAgICAgIFBhcGVyQ29tcG9uZW50PXtQYXBlckNvbXBvbmVudH1cbiAgICAgICAgUGFwZXJQcm9wcz17eyBjbGFzc05hbWU6IGNsYXNzZXMucGFwZXJSb290IH19XG4gICAgICA+XG4gICAgICAgIDxUb29sYmFyXG4gICAgICAgICAgY2xhc3NOYW1lPVwibXktbGFuZ3VhZ2UtbW9kYWwtZHJhZ2dhYmxlLWhhbmRsZVwiXG4gICAgICAgICAgZGlzYWJsZUd1dHRlcnM9e3RydWV9XG4gICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JywganVzdGlmeUNvbnRlbnQ6ICdmbGV4LWVuZCcsIGJhY2tncm91bmRDb2xvcjogJ3ZhcigtLWFjY2VudC1jb2xvci1kYXJrKScsIGN1cnNvcjogJ21vdmUnLFxuICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICA8RGlhbG9nVGl0bGUgZGlzYWJsZVR5cG9ncmFwaHk9e3RydWV9IGNsYXNzTmFtZT0ndmVyc2UtY2hlY2stbW9kYWwtdGl0bGUnPlxuICAgICAgICAgICAgPGg0IHN0eWxlPXt7IGNvbG9yOiAndmFyKC0tcmV2ZXJzZS1jb2xvciknIH19Pnt0aXRsZX08L2g0PlxuICAgICAgICAgICAgPEdseXBoaWNvblxuICAgICAgICAgICAgICBvbkNsaWNrPXtvbkhpZGV9XG4gICAgICAgICAgICAgIGdseXBoPXsncmVtb3ZlJ31cbiAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjonYWJzb2x1dGUnLCByaWdodDogMCwgbWFyZ2luOiAyNCwgY29sb3I6ICd2YXIoLS1yZXZlcnNlLWNvbG9yKScsIGN1cnNvcjogJ3BvaW50ZXInLCBmb250U2l6ZTogJzE4cHgnLFxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L0RpYWxvZ1RpdGxlPlxuICAgICAgICA8L1Rvb2xiYXI+XG4gICAgICAgIDxEaWFsb2dDb250ZW50IHN0eWxlPXt7XG4gICAgICAgICAgcGFkZGluZzogJzBweCcsIGhlaWdodDogJzUwMHB4JywgYmFja2dyb3VuZENvbG9yOiAndmFyKC0tcmV2ZXJzZS1jb2xvciknLCBvdmVyZmxvd1k6ICdhdXRvJyxcbiAgICAgICAgfX0+XG4gICAgICAgICAge015VGFyZ2V0TGFuZ3VhZ2V9XG4gICAgICAgIDwvRGlhbG9nQ29udGVudD5cbiAgICAgICAgPERpYWxvZ0FjdGlvbnMgZGlzYWJsZUFjdGlvblNwYWNpbmc9e3RydWV9PlxuICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPSdidG4tcHJpbWUnIG9uQ2xpY2s9e29uSGlkZX0+e3RyYW5zbGF0ZSgnY2xvc2UnKX08L2J1dHRvbj5cbiAgICAgICAgPC9EaWFsb2dBY3Rpb25zPlxuICAgICAgPC9EaWFsb2c+XG4gICAgKTtcbiAgfVxufVxuXG5NeUxhbmd1YWdlTW9kYWwucHJvcFR5cGVzID0ge1xuICBzaG93OiBQcm9wVHlwZXMuYm9vbC5pc1JlcXVpcmVkLFxuICBvbkhpZGU6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIHRhcmdldEJpYmxlOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG4gIGNoYXB0ZXI6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgY3VycmVudFZlcnNlOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4gIGxhbmd1YWdlRGlyZWN0aW9uOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gIHRyYW5zbGF0ZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgY2xhc3NlczogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuICBib29rTmFtZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICB0YXJnZXRMYW5ndWFnZUZvbnQ6IFByb3BUeXBlcy5zdHJpbmcsXG59O1xuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGVzKHN0eWxlcykoTXlMYW5ndWFnZU1vZGFsKTtcbiJdfQ==