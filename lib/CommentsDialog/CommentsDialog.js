"use strict";

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

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactBootstrap = require("react-bootstrap");

var _editHelpers = require("../VerseEditor/helpers/editHelpers");

var _BaseDialog = _interopRequireDefault(require("./BaseDialog"));

/**
 * Renders a dialog to submit user feedback.
 *
 * @class
 *
 * @property {Function} translate - the localization function
 * @property {Function} onClose - callback when the dialog is closed
 * @property {Function} onSubmit - callback when the feedback is submitted.
 * @property {Function} open - controls whether the dialog is open or closed
 * @property {Function} [includeLogs=true] - indicates if logs should be included
 * @property {string} [message=''] - the feedback message
 * @property {string} [email=''] - the user's email
 * @property {string} [category=null] - the feedback category
 */
var CommentsDialog = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2["default"])(CommentsDialog, _React$Component);

  function CommentsDialog(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, CommentsDialog);
    _this = (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(CommentsDialog).call(this, props));
    _this._handleSubmit = _this._handleSubmit.bind((0, _assertThisInitialized2["default"])(_this));
    _this._handleClose = _this._handleClose.bind((0, _assertThisInitialized2["default"])(_this));
    _this._handleCommentChange = _this._handleCommentChange.bind((0, _assertThisInitialized2["default"])(_this));
    var comment = props.comment;
    _this.state = {
      comment: comment
    };
    return _this;
  }

  (0, _createClass2["default"])(CommentsDialog, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      var comment = nextProps.comment;

      if (comment !== this.state.comment) {
        // only update state if comment changed
        this.setState({
          comment: comment
        });
      }
    }
  }, {
    key: "_handleCommentChange",
    value: function _handleCommentChange(event) {
      var newComment = event.target.value;

      if (newComment !== this.state.comment) {
        // only update state if comment changed
        this.setState({
          comment: newComment
        });
      }
    }
  }, {
    key: "_handleSubmit",
    value: function _handleSubmit() {
      var onSubmit = this.props.onSubmit;
      onSubmit(this.state.comment);
    }
  }, {
    key: "_handleClose",
    value: function _handleClose() {
      var onClose = this.props.onClose;
      onClose();
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          open = _this$props.open,
          translate = _this$props.translate,
          verseTitle = _this$props.verseTitle,
          comment = _this$props.comment;
      var currentComment = this.state.comment;
      var isSaveEnabled = currentComment !== comment;

      var saveButton = _react["default"].createElement("div", null, _react["default"].createElement(_reactBootstrap.Glyphicon, {
        glyph: "ok",
        style: {
          marginRight: '10px'
        }
      }), translate('buttons.save_button'));

      return _react["default"].createElement(_BaseDialog["default"], {
        onSubmit: this._handleSubmit,
        primaryLabel: saveButton,
        primaryActionEnabled: isSaveEnabled,
        secondaryLabel: translate('buttons.cancel_button'),
        onClose: this._handleClose,
        title: translate('comment_title', {
          passage: verseTitle
        }),
        bodyStyle: {
          overflowY: 'auto',
          padding: '0 10px 0 10px'
        },
        contentStyle: {
          width: '500px'
        },
        open: open
      }, _react["default"].createElement("textarea", {
        id: "verse-editor-field",
        rows: 8,
        className: "edit-screen",
        autoFocus: true,
        onFocus: _editHelpers.moveCursorToEnd,
        onChange: this._handleCommentChange,
        value: currentComment
      }));
    }
  }]);
  return CommentsDialog;
}(_react["default"].Component);

CommentsDialog.propTypes = {
  comment: _propTypes["default"].string.isRequired,
  verseTitle: _propTypes["default"].string.isRequired,
  translate: _propTypes["default"].func.isRequired,
  onClose: _propTypes["default"].func.isRequired,
  onSubmit: _propTypes["default"].func.isRequired,
  open: _propTypes["default"].bool.isRequired
};
var _default = CommentsDialog;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9Db21tZW50c0RpYWxvZy9Db21tZW50c0RpYWxvZy5qcyJdLCJuYW1lcyI6WyJDb21tZW50c0RpYWxvZyIsInByb3BzIiwiX2hhbmRsZVN1Ym1pdCIsImJpbmQiLCJfaGFuZGxlQ2xvc2UiLCJfaGFuZGxlQ29tbWVudENoYW5nZSIsImNvbW1lbnQiLCJzdGF0ZSIsIm5leHRQcm9wcyIsInNldFN0YXRlIiwiZXZlbnQiLCJuZXdDb21tZW50IiwidGFyZ2V0IiwidmFsdWUiLCJvblN1Ym1pdCIsIm9uQ2xvc2UiLCJvcGVuIiwidHJhbnNsYXRlIiwidmVyc2VUaXRsZSIsImN1cnJlbnRDb21tZW50IiwiaXNTYXZlRW5hYmxlZCIsInNhdmVCdXR0b24iLCJtYXJnaW5SaWdodCIsInBhc3NhZ2UiLCJvdmVyZmxvd1kiLCJwYWRkaW5nIiwid2lkdGgiLCJtb3ZlQ3Vyc29yVG9FbmQiLCJSZWFjdCIsIkNvbXBvbmVudCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsInN0cmluZyIsImlzUmVxdWlyZWQiLCJmdW5jIiwiYm9vbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7Ozs7O0lBY01BLGM7OztBQUNKLDBCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUE7QUFDakIsMEhBQU1BLEtBQU47QUFDQSxVQUFLQyxhQUFMLEdBQXFCLE1BQUtBLGFBQUwsQ0FBbUJDLElBQW5CLGdEQUFyQjtBQUNBLFVBQUtDLFlBQUwsR0FBb0IsTUFBS0EsWUFBTCxDQUFrQkQsSUFBbEIsZ0RBQXBCO0FBQ0EsVUFBS0Usb0JBQUwsR0FBNEIsTUFBS0Esb0JBQUwsQ0FBMEJGLElBQTFCLGdEQUE1QjtBQUppQixRQU1URyxPQU5TLEdBTUdMLEtBTkgsQ0FNVEssT0FOUztBQVFqQixVQUFLQyxLQUFMLEdBQWE7QUFBRUQsTUFBQUEsT0FBTyxFQUFQQTtBQUFGLEtBQWI7QUFSaUI7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c0JBQVVHLElBQVYsQ0FBZUQsVUFKQztBQUt6Qm5CLEVBQUFBLFFBQVEsRUFBRWlCLHNCQUFVRyxJQUFWLENBQWVELFVBTEE7QUFNekJqQixFQUFBQSxJQUFJLEVBQUVlLHNCQUFVSSxJQUFWLENBQWVGO0FBTkksQ0FBM0I7ZUFTZWpDLGMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IEdseXBoaWNvbiB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCc7XG5pbXBvcnQgeyBtb3ZlQ3Vyc29yVG9FbmQgfSBmcm9tICcuLi9WZXJzZUVkaXRvci9oZWxwZXJzL2VkaXRIZWxwZXJzJztcbmltcG9ydCBCYXNlRGlhbG9nIGZyb20gJy4vQmFzZURpYWxvZyc7XG5cbi8qKlxuICogUmVuZGVycyBhIGRpYWxvZyB0byBzdWJtaXQgdXNlciBmZWVkYmFjay5cbiAqXG4gKiBAY2xhc3NcbiAqXG4gKiBAcHJvcGVydHkge0Z1bmN0aW9ufSB0cmFuc2xhdGUgLSB0aGUgbG9jYWxpemF0aW9uIGZ1bmN0aW9uXG4gKiBAcHJvcGVydHkge0Z1bmN0aW9ufSBvbkNsb3NlIC0gY2FsbGJhY2sgd2hlbiB0aGUgZGlhbG9nIGlzIGNsb3NlZFxuICogQHByb3BlcnR5IHtGdW5jdGlvbn0gb25TdWJtaXQgLSBjYWxsYmFjayB3aGVuIHRoZSBmZWVkYmFjayBpcyBzdWJtaXR0ZWQuXG4gKiBAcHJvcGVydHkge0Z1bmN0aW9ufSBvcGVuIC0gY29udHJvbHMgd2hldGhlciB0aGUgZGlhbG9nIGlzIG9wZW4gb3IgY2xvc2VkXG4gKiBAcHJvcGVydHkge0Z1bmN0aW9ufSBbaW5jbHVkZUxvZ3M9dHJ1ZV0gLSBpbmRpY2F0ZXMgaWYgbG9ncyBzaG91bGQgYmUgaW5jbHVkZWRcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBbbWVzc2FnZT0nJ10gLSB0aGUgZmVlZGJhY2sgbWVzc2FnZVxuICogQHByb3BlcnR5IHtzdHJpbmd9IFtlbWFpbD0nJ10gLSB0aGUgdXNlcidzIGVtYWlsXG4gKiBAcHJvcGVydHkge3N0cmluZ30gW2NhdGVnb3J5PW51bGxdIC0gdGhlIGZlZWRiYWNrIGNhdGVnb3J5XG4gKi9cbmNsYXNzIENvbW1lbnRzRGlhbG9nIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5faGFuZGxlU3VibWl0ID0gdGhpcy5faGFuZGxlU3VibWl0LmJpbmQodGhpcyk7XG4gICAgdGhpcy5faGFuZGxlQ2xvc2UgPSB0aGlzLl9oYW5kbGVDbG9zZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMuX2hhbmRsZUNvbW1lbnRDaGFuZ2UgPSB0aGlzLl9oYW5kbGVDb21tZW50Q2hhbmdlLmJpbmQodGhpcyk7XG5cbiAgICBjb25zdCB7IGNvbW1lbnQgfSA9IHByb3BzO1xuXG4gICAgdGhpcy5zdGF0ZSA9IHsgY29tbWVudCB9O1xuICB9XG5cbiAgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMpIHtcbiAgICBjb25zdCB7IGNvbW1lbnQgfSA9IG5leHRQcm9wcztcblxuICAgIGlmIChjb21tZW50ICE9PSB0aGlzLnN0YXRlLmNvbW1lbnQpIHsgLy8gb25seSB1cGRhdGUgc3RhdGUgaWYgY29tbWVudCBjaGFuZ2VkXG4gICAgICB0aGlzLnNldFN0YXRlKHsgY29tbWVudCB9KTtcbiAgICB9XG4gIH1cblxuICBfaGFuZGxlQ29tbWVudENoYW5nZShldmVudCkge1xuICAgIGNvbnN0IG5ld0NvbW1lbnQgPSBldmVudC50YXJnZXQudmFsdWU7XG5cbiAgICBpZiAobmV3Q29tbWVudCAhPT0gdGhpcy5zdGF0ZS5jb21tZW50KSB7IC8vIG9ubHkgdXBkYXRlIHN0YXRlIGlmIGNvbW1lbnQgY2hhbmdlZFxuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGNvbW1lbnQ6IG5ld0NvbW1lbnQgfSk7XG4gICAgfVxuICB9XG5cbiAgX2hhbmRsZVN1Ym1pdCgpIHtcbiAgICBjb25zdCB7IG9uU3VibWl0IH0gPSB0aGlzLnByb3BzO1xuICAgIG9uU3VibWl0KHRoaXMuc3RhdGUuY29tbWVudCk7XG4gIH1cblxuICBfaGFuZGxlQ2xvc2UoKSB7XG4gICAgY29uc3QgeyBvbkNsb3NlIH0gPSB0aGlzLnByb3BzO1xuICAgIG9uQ2xvc2UoKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICBvcGVuLFxuICAgICAgdHJhbnNsYXRlLFxuICAgICAgdmVyc2VUaXRsZSxcbiAgICAgIGNvbW1lbnQsXG4gICAgfSA9IHRoaXMucHJvcHM7XG5cbiAgICBjb25zdCB7IGNvbW1lbnQ6IGN1cnJlbnRDb21tZW50IH0gPSB0aGlzLnN0YXRlO1xuICAgIGNvbnN0IGlzU2F2ZUVuYWJsZWQgPSBjdXJyZW50Q29tbWVudCAhPT0gY29tbWVudDtcblxuICAgIGNvbnN0IHNhdmVCdXR0b24gPSA8ZGl2PlxuICAgICAgPEdseXBoaWNvbiBnbHlwaD0nb2snIHN0eWxlPXt7IG1hcmdpblJpZ2h0OiAnMTBweCcgfX0gLz5cbiAgICAgIHt0cmFuc2xhdGUoJ2J1dHRvbnMuc2F2ZV9idXR0b24nKX1cbiAgICA8L2Rpdj47XG5cbiAgICByZXR1cm4gKFxuICAgICAgPEJhc2VEaWFsb2cgb25TdWJtaXQ9e3RoaXMuX2hhbmRsZVN1Ym1pdH1cbiAgICAgICAgcHJpbWFyeUxhYmVsPXtzYXZlQnV0dG9ufVxuICAgICAgICBwcmltYXJ5QWN0aW9uRW5hYmxlZD17aXNTYXZlRW5hYmxlZH1cbiAgICAgICAgc2Vjb25kYXJ5TGFiZWw9e3RyYW5zbGF0ZSgnYnV0dG9ucy5jYW5jZWxfYnV0dG9uJyl9XG4gICAgICAgIG9uQ2xvc2U9e3RoaXMuX2hhbmRsZUNsb3NlfVxuICAgICAgICB0aXRsZT17dHJhbnNsYXRlKCdjb21tZW50X3RpdGxlJywgeyBwYXNzYWdlOiB2ZXJzZVRpdGxlIH0pfVxuICAgICAgICBib2R5U3R5bGU9e3sgb3ZlcmZsb3dZOiAnYXV0bycsIHBhZGRpbmc6ICcwIDEwcHggMCAxMHB4JyB9fVxuICAgICAgICBjb250ZW50U3R5bGU9e3sgd2lkdGg6ICc1MDBweCcgfX1cbiAgICAgICAgb3Blbj17b3Blbn0+XG4gICAgICAgIDx0ZXh0YXJlYVxuICAgICAgICAgIGlkPVwidmVyc2UtZWRpdG9yLWZpZWxkXCJcbiAgICAgICAgICByb3dzPXs4fVxuICAgICAgICAgIGNsYXNzTmFtZT0nZWRpdC1zY3JlZW4nXG4gICAgICAgICAgYXV0b0ZvY3VzPXt0cnVlfVxuICAgICAgICAgIG9uRm9jdXM9e21vdmVDdXJzb3JUb0VuZH1cbiAgICAgICAgICBvbkNoYW5nZT17dGhpcy5faGFuZGxlQ29tbWVudENoYW5nZX1cbiAgICAgICAgICB2YWx1ZT17Y3VycmVudENvbW1lbnR9Lz5cbiAgICAgIDwvQmFzZURpYWxvZz5cbiAgICApO1xuICB9XG59XG5cbkNvbW1lbnRzRGlhbG9nLnByb3BUeXBlcyA9IHtcbiAgY29tbWVudDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICB2ZXJzZVRpdGxlOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gIHRyYW5zbGF0ZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgb25DbG9zZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgb25TdWJtaXQ6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIG9wZW46IFByb3BUeXBlcy5ib29sLmlzUmVxdWlyZWQsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBDb21tZW50c0RpYWxvZztcbiJdfQ==