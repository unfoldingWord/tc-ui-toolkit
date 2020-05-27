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

var _Edit = _interopRequireDefault(require("@material-ui/icons/Edit"));

var _reactBootstrap = require("react-bootstrap");

var _EditScreen = _interopRequireDefault(require("./EditScreen"));

var _ReasonScreen = _interopRequireDefault(require("./ReasonScreen"));

var _BaseDialog = _interopRequireDefault(require("./BaseDialog"));

require("./VerseEditor.styles.css");

// components
var styles = {
  screen: {
    display: 'flex',
    flexDirection: 'row',
    padding: '12px 12px 0 12px'
  },
  editor: {
    fontSize: '16px',
    width: '320px',
    padding: '6px'
  },
  editHeading: {
    paddingLeft: '6px',
    fontWeight: 'bold',
    fontSize: '16px'
  },
  reasonHeading: {
    margin: '0 0 0 10px',
    fontWeight: 'bold',
    fontSize: '16px',
    width: '240px'
  }
};
/**
 * Renders a form for editing a single verse
 * @property {string} verseText - the verse text to edit
 * @property {function} translate - the locale function
 * @property {function} onSubmit - callback when the edit is submitted
 * @property {function} onCancel - callback when the edit is canceled
 */

var VerseEditor = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2["default"])(VerseEditor, _React$Component);

  function VerseEditor(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, VerseEditor);
    _this = (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(VerseEditor).call(this, props));
    _this._handleCancel = _this._handleCancel.bind((0, _assertThisInitialized2["default"])(_this));
    _this._handleSubmit = _this._handleSubmit.bind((0, _assertThisInitialized2["default"])(_this));
    _this._handleVerseChange = _this._handleVerseChange.bind((0, _assertThisInitialized2["default"])(_this));
    _this._handleReasonChange = _this._handleReasonChange.bind((0, _assertThisInitialized2["default"])(_this));
    _this._handleReset = _this._handleReset.bind((0, _assertThisInitialized2["default"])(_this));
    _this._resetState = _this._resetState.bind((0, _assertThisInitialized2["default"])(_this));
    _this.state = {
      newVerse: '',
      verseChanged: false,
      reasons: [],
      isOptionDialogOpen: false
    };
    return _this;
  }

  (0, _createClass2["default"])(VerseEditor, [{
    key: "_resetState",
    value: function _resetState() {
      this.setState({
        newVerse: '',
        verseChanged: false,
        reasons: [],
        isOptionDialogOpen: false
      });
    }
  }, {
    key: "isVerseChangedAndHaveReasons",
    value: function isVerseChangedAndHaveReasons() {
      var _this$state = this.state,
          reasons = _this$state.reasons,
          verseChanged = _this$state.verseChanged;
      return verseChanged && reasons && reasons.length;
    }
  }, {
    key: "isVerseChanged",
    value: function isVerseChanged() {
      var verseChanged = this.state.verseChanged;
      return verseChanged;
    }
  }, {
    key: "_handleCancel",
    value: function _handleCancel() {
      var onCancel = this.props.onCancel;
      onCancel();

      this._resetState();
    }
  }, {
    key: "_handleReset",
    value: function _handleReset() {
      var verseText = this.props.verseText;
      this.setState({
        newVerse: verseText,
        verseChanged: false
      });
    }
  }, {
    key: "_handleSubmit",
    value: function _handleSubmit() {
      var _this$props = this.props,
          verseText = _this$props.verseText,
          onSubmit = _this$props.onSubmit;

      if (this.isVerseChangedAndHaveReasons() && onSubmit) {
        var _this$state2 = this.state,
            newVerse = _this$state2.newVerse,
            reasons = _this$state2.reasons;
        onSubmit(verseText, newVerse, reasons);

        this._resetState();

        this._handleCancel();
      }
    }
  }, {
    key: "_handleVerseChange",
    value: function _handleVerseChange(newVerse) {
      var verseText = this.props.verseText;
      this.setState({
        newVerse: newVerse,
        verseChanged: newVerse !== verseText
      });
    }
  }, {
    key: "_handleReasonChange",
    value: function _handleReasonChange(newReasons) {
      this.setState({
        reasons: newReasons
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          open = _this$props2.open,
          verseText = _this$props2.verseText,
          translate = _this$props2.translate,
          verseTitle = _this$props2.verseTitle,
          targetLanguage = _this$props2.targetLanguage,
          targetLanguageFont = _this$props2.targetLanguageFont;
      var _this$state3 = this.state,
          newVerse = _this$state3.newVerse,
          reasons = _this$state3.reasons,
          verseChanged = _this$state3.verseChanged;
      var text = !verseChanged ? verseText : newVerse;
      var isVerseChangedAndHaveReason = this.isVerseChangedAndHaveReasons();
      var isVerseChanged = this.isVerseChanged();

      var title = _react["default"].createElement("span", null, _react["default"].createElement(_Edit["default"], {
        className: "edit-icon"
      }), translate('edit_verse_title', {
        passage: verseTitle
      }));

      var rows = 9 + (!targetLanguage ? 1 : 0); // make taller if no language label

      return _react["default"].createElement(_BaseDialog["default"], {
        modal: true,
        open: open,
        title: title,
        onClose: this._handleCancel,
        actionsEnabled: false
      }, _react["default"].createElement("div", {
        className: "screen",
        style: styles.screen
      }, _react["default"].createElement("div", null, targetLanguage ? _react["default"].createElement("div", {
        style: styles.editHeading
      }, targetLanguage) : '', _react["default"].createElement(_EditScreen["default"], {
        rows: rows,
        align: 'left',
        verseText: text,
        style: styles.editor,
        onChange: this._handleVerseChange,
        targetLanguageFont: targetLanguageFont
      })), _react["default"].createElement("div", {
        style: styles.reasonHeading
      }, _react["default"].createElement("div", null, translate('select_reasons')), _react["default"].createElement(_ReasonScreen["default"], {
        translate: translate,
        selectedReasons: reasons,
        columns: 1,
        onChange: this._handleReasonChange
      }))), _react["default"].createElement("div", {
        className: "actions"
      }, _react["default"].createElement("button", {
        className: "btn-second",
        onClick: this._handleCancel
      }, translate('buttons.cancel_button')), _react["default"].createElement("button", {
        className: "btn-second",
        disabled: !isVerseChanged,
        onClick: this._handleReset
      }, _react["default"].createElement(_reactBootstrap.Glyphicon, {
        glyph: "repeat",
        style: {
          marginRight: '10px',
          transform: 'scaleX(-1)'
        }
      }), translate('buttons.reset_button')), _react["default"].createElement("button", {
        className: "btn-prime",
        disabled: !isVerseChangedAndHaveReason,
        onClick: this._handleSubmit
      }, _react["default"].createElement(_reactBootstrap.Glyphicon, {
        glyph: "ok",
        style: {
          marginRight: '10px'
        }
      }), translate('buttons.save_button'))));
    }
  }]);
  return VerseEditor;
}(_react["default"].Component);

VerseEditor.propTypes = {
  open: _propTypes["default"].bool.isRequired,
  verseTitle: _propTypes["default"].string.isRequired,
  verseText: _propTypes["default"].string.isRequired,
  translate: _propTypes["default"].func.isRequired,
  onCancel: _propTypes["default"].func.isRequired,
  onSubmit: _propTypes["default"].func.isRequired,
  targetLanguage: _propTypes["default"].string.isRequired,
  targetLanguageFont: _propTypes["default"].string
};
VerseEditor.defaultProps = {
  targetLanguage: ''
};
var _default = VerseEditor;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9WZXJzZUVkaXRvci9WZXJzZUVkaXRvci5qcyJdLCJuYW1lcyI6WyJzdHlsZXMiLCJzY3JlZW4iLCJkaXNwbGF5IiwiZmxleERpcmVjdGlvbiIsInBhZGRpbmciLCJlZGl0b3IiLCJmb250U2l6ZSIsIndpZHRoIiwiZWRpdEhlYWRpbmciLCJwYWRkaW5nTGVmdCIsImZvbnRXZWlnaHQiLCJyZWFzb25IZWFkaW5nIiwibWFyZ2luIiwiVmVyc2VFZGl0b3IiLCJwcm9wcyIsIl9oYW5kbGVDYW5jZWwiLCJiaW5kIiwiX2hhbmRsZVN1Ym1pdCIsIl9oYW5kbGVWZXJzZUNoYW5nZSIsIl9oYW5kbGVSZWFzb25DaGFuZ2UiLCJfaGFuZGxlUmVzZXQiLCJfcmVzZXRTdGF0ZSIsInN0YXRlIiwibmV3VmVyc2UiLCJ2ZXJzZUNoYW5nZWQiLCJyZWFzb25zIiwiaXNPcHRpb25EaWFsb2dPcGVuIiwic2V0U3RhdGUiLCJsZW5ndGgiLCJvbkNhbmNlbCIsInZlcnNlVGV4dCIsIm9uU3VibWl0IiwiaXNWZXJzZUNoYW5nZWRBbmRIYXZlUmVhc29ucyIsIm5ld1JlYXNvbnMiLCJvcGVuIiwidHJhbnNsYXRlIiwidmVyc2VUaXRsZSIsInRhcmdldExhbmd1YWdlIiwidGFyZ2V0TGFuZ3VhZ2VGb250IiwidGV4dCIsImlzVmVyc2VDaGFuZ2VkQW5kSGF2ZVJlYXNvbiIsImlzVmVyc2VDaGFuZ2VkIiwidGl0bGUiLCJwYXNzYWdlIiwicm93cyIsIm1hcmdpblJpZ2h0IiwidHJhbnNmb3JtIiwiUmVhY3QiLCJDb21wb25lbnQiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJib29sIiwiaXNSZXF1aXJlZCIsInN0cmluZyIsImZ1bmMiLCJkZWZhdWx0UHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOztBQUVBOztBQUNBOztBQUNBOztBQUVBOztBQUxBO0FBT0EsSUFBTUEsTUFBTSxHQUFHO0FBQ2JD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LHNCQUFVSSxJQUFWLENBQWVGLFVBTEg7QUFNdEJyQixFQUFBQSxRQUFRLEVBQUVtQixzQkFBVUksSUFBVixDQUFlRixVQU5IO0FBT3RCZixFQUFBQSxjQUFjLEVBQUVhLHNCQUFVRyxNQUFWLENBQWlCRCxVQVBYO0FBUXRCZCxFQUFBQSxrQkFBa0IsRUFBRVksc0JBQVVHO0FBUlIsQ0FBeEI7QUFXQXhDLFdBQVcsQ0FBQzBDLFlBQVosR0FBMkI7QUFBRWxCLEVBQUFBLGNBQWMsRUFBRTtBQUFsQixDQUEzQjtlQUVleEIsVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IEVkaXRJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9FZGl0JztcbmltcG9ydCB7IEdseXBoaWNvbiB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCc7XG4vLyBjb21wb25lbnRzXG5pbXBvcnQgRWRpdFNjcmVlbiBmcm9tICcuL0VkaXRTY3JlZW4nO1xuaW1wb3J0IFJlYXNvblNjcmVlbiBmcm9tICcuL1JlYXNvblNjcmVlbic7XG5pbXBvcnQgQmFzZURpYWxvZyBmcm9tICcuL0Jhc2VEaWFsb2cnO1xuXG5pbXBvcnQgJy4vVmVyc2VFZGl0b3Iuc3R5bGVzLmNzcyc7XG5cbmNvbnN0IHN0eWxlcyA9IHtcbiAgc2NyZWVuOiB7XG4gICAgZGlzcGxheTogJ2ZsZXgnLCBmbGV4RGlyZWN0aW9uOiAncm93JywgcGFkZGluZzogJzEycHggMTJweCAwIDEycHgnLFxuICB9LFxuICBlZGl0b3I6IHtcbiAgICBmb250U2l6ZTogJzE2cHgnLCB3aWR0aDogJzMyMHB4JywgcGFkZGluZzogJzZweCcsXG4gIH0sXG4gIGVkaXRIZWFkaW5nOiB7XG4gICAgcGFkZGluZ0xlZnQ6ICc2cHgnLCBmb250V2VpZ2h0OiAnYm9sZCcsIGZvbnRTaXplOiAnMTZweCcsXG4gIH0sXG4gIHJlYXNvbkhlYWRpbmc6IHtcbiAgICBtYXJnaW46ICcwIDAgMCAxMHB4JyxcbiAgICBmb250V2VpZ2h0OiAnYm9sZCcsXG4gICAgZm9udFNpemU6ICcxNnB4JyxcbiAgICB3aWR0aDogJzI0MHB4JyxcbiAgfSxcblxufTtcblxuLyoqXG4gKiBSZW5kZXJzIGEgZm9ybSBmb3IgZWRpdGluZyBhIHNpbmdsZSB2ZXJzZVxuICogQHByb3BlcnR5IHtzdHJpbmd9IHZlcnNlVGV4dCAtIHRoZSB2ZXJzZSB0ZXh0IHRvIGVkaXRcbiAqIEBwcm9wZXJ0eSB7ZnVuY3Rpb259IHRyYW5zbGF0ZSAtIHRoZSBsb2NhbGUgZnVuY3Rpb25cbiAqIEBwcm9wZXJ0eSB7ZnVuY3Rpb259IG9uU3VibWl0IC0gY2FsbGJhY2sgd2hlbiB0aGUgZWRpdCBpcyBzdWJtaXR0ZWRcbiAqIEBwcm9wZXJ0eSB7ZnVuY3Rpb259IG9uQ2FuY2VsIC0gY2FsbGJhY2sgd2hlbiB0aGUgZWRpdCBpcyBjYW5jZWxlZFxuICovXG5jbGFzcyBWZXJzZUVkaXRvciBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuX2hhbmRsZUNhbmNlbCA9IHRoaXMuX2hhbmRsZUNhbmNlbC5iaW5kKHRoaXMpO1xuICAgIHRoaXMuX2hhbmRsZVN1Ym1pdCA9IHRoaXMuX2hhbmRsZVN1Ym1pdC5iaW5kKHRoaXMpO1xuICAgIHRoaXMuX2hhbmRsZVZlcnNlQ2hhbmdlID0gdGhpcy5faGFuZGxlVmVyc2VDaGFuZ2UuYmluZCh0aGlzKTtcbiAgICB0aGlzLl9oYW5kbGVSZWFzb25DaGFuZ2UgPSB0aGlzLl9oYW5kbGVSZWFzb25DaGFuZ2UuYmluZCh0aGlzKTtcbiAgICB0aGlzLl9oYW5kbGVSZXNldCA9IHRoaXMuX2hhbmRsZVJlc2V0LmJpbmQodGhpcyk7XG4gICAgdGhpcy5fcmVzZXRTdGF0ZSA9IHRoaXMuX3Jlc2V0U3RhdGUuYmluZCh0aGlzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgbmV3VmVyc2U6ICcnLFxuICAgICAgdmVyc2VDaGFuZ2VkOiBmYWxzZSxcbiAgICAgIHJlYXNvbnM6IFtdLFxuICAgICAgaXNPcHRpb25EaWFsb2dPcGVuOiBmYWxzZSxcbiAgICB9O1xuICB9XG5cbiAgX3Jlc2V0U3RhdGUoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBuZXdWZXJzZTogJycsXG4gICAgICB2ZXJzZUNoYW5nZWQ6IGZhbHNlLFxuICAgICAgcmVhc29uczogW10sXG4gICAgICBpc09wdGlvbkRpYWxvZ09wZW46IGZhbHNlLFxuICAgIH0pO1xuICB9XG5cbiAgaXNWZXJzZUNoYW5nZWRBbmRIYXZlUmVhc29ucygpIHtcbiAgICBjb25zdCB7IHJlYXNvbnMsIHZlcnNlQ2hhbmdlZCB9ID0gdGhpcy5zdGF0ZTtcbiAgICByZXR1cm4gdmVyc2VDaGFuZ2VkICYmIHJlYXNvbnMgJiYgcmVhc29ucy5sZW5ndGg7XG4gIH1cblxuICBpc1ZlcnNlQ2hhbmdlZCgpIHtcbiAgICBjb25zdCB7IHZlcnNlQ2hhbmdlZCB9ID0gdGhpcy5zdGF0ZTtcbiAgICByZXR1cm4gdmVyc2VDaGFuZ2VkO1xuICB9XG5cbiAgX2hhbmRsZUNhbmNlbCgpIHtcbiAgICBjb25zdCB7IG9uQ2FuY2VsIH0gPSB0aGlzLnByb3BzO1xuICAgIG9uQ2FuY2VsKCk7XG4gICAgdGhpcy5fcmVzZXRTdGF0ZSgpO1xuICB9XG5cbiAgX2hhbmRsZVJlc2V0KCkge1xuICAgIGNvbnN0IHsgdmVyc2VUZXh0IH0gPSB0aGlzLnByb3BzO1xuXG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBuZXdWZXJzZTogdmVyc2VUZXh0LFxuICAgICAgdmVyc2VDaGFuZ2VkOiBmYWxzZSxcbiAgICB9KTtcbiAgfVxuXG4gIF9oYW5kbGVTdWJtaXQoKSB7XG4gICAgY29uc3QgeyB2ZXJzZVRleHQsIG9uU3VibWl0IH0gPSB0aGlzLnByb3BzO1xuXG4gICAgaWYgKHRoaXMuaXNWZXJzZUNoYW5nZWRBbmRIYXZlUmVhc29ucygpICYmIG9uU3VibWl0KSB7XG4gICAgICBjb25zdCB7IG5ld1ZlcnNlLCByZWFzb25zIH0gPSB0aGlzLnN0YXRlO1xuICAgICAgb25TdWJtaXQodmVyc2VUZXh0LCBuZXdWZXJzZSwgcmVhc29ucyk7XG4gICAgICB0aGlzLl9yZXNldFN0YXRlKCk7XG4gICAgICB0aGlzLl9oYW5kbGVDYW5jZWwoKTtcbiAgICB9XG4gIH1cblxuICBfaGFuZGxlVmVyc2VDaGFuZ2UobmV3VmVyc2UpIHtcbiAgICBjb25zdCB7IHZlcnNlVGV4dCB9ID0gdGhpcy5wcm9wcztcblxuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgbmV3VmVyc2UsXG4gICAgICB2ZXJzZUNoYW5nZWQ6IG5ld1ZlcnNlICE9PSB2ZXJzZVRleHQsXG4gICAgfSk7XG4gIH1cblxuICBfaGFuZGxlUmVhc29uQ2hhbmdlKG5ld1JlYXNvbnMpIHtcbiAgICB0aGlzLnNldFN0YXRlKHsgcmVhc29uczogbmV3UmVhc29ucyB9KTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICBvcGVuLFxuICAgICAgdmVyc2VUZXh0LFxuICAgICAgdHJhbnNsYXRlLFxuICAgICAgdmVyc2VUaXRsZSxcbiAgICAgIHRhcmdldExhbmd1YWdlLFxuICAgICAgdGFyZ2V0TGFuZ3VhZ2VGb250LFxuICAgIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHtcbiAgICAgIG5ld1ZlcnNlLCByZWFzb25zLCB2ZXJzZUNoYW5nZWQsXG4gICAgfSA9IHRoaXMuc3RhdGU7XG4gICAgbGV0IHRleHQgPSAhdmVyc2VDaGFuZ2VkID8gdmVyc2VUZXh0IDogbmV3VmVyc2U7XG4gICAgY29uc3QgaXNWZXJzZUNoYW5nZWRBbmRIYXZlUmVhc29uID0gdGhpcy5pc1ZlcnNlQ2hhbmdlZEFuZEhhdmVSZWFzb25zKCk7XG4gICAgY29uc3QgaXNWZXJzZUNoYW5nZWQgPSB0aGlzLmlzVmVyc2VDaGFuZ2VkKCk7XG5cbiAgICBjb25zdCB0aXRsZSA9IChcbiAgICAgIDxzcGFuPlxuICAgICAgICA8RWRpdEljb24gY2xhc3NOYW1lPSdlZGl0LWljb24nIC8+XG4gICAgICAgIHt0cmFuc2xhdGUoJ2VkaXRfdmVyc2VfdGl0bGUnLCB7IHBhc3NhZ2U6IHZlcnNlVGl0bGUgfSl9XG4gICAgICA8L3NwYW4+XG4gICAgKTtcblxuICAgIGNvbnN0IHJvd3MgPSA5ICsgKCF0YXJnZXRMYW5ndWFnZSA/IDEgOiAwKTsgLy8gbWFrZSB0YWxsZXIgaWYgbm8gbGFuZ3VhZ2UgbGFiZWxcblxuICAgIHJldHVybiAoXG4gICAgICA8QmFzZURpYWxvZ1xuICAgICAgICBtb2RhbD17dHJ1ZX1cbiAgICAgICAgb3Blbj17b3Blbn1cbiAgICAgICAgdGl0bGU9e3RpdGxlfVxuICAgICAgICBvbkNsb3NlPXt0aGlzLl9oYW5kbGVDYW5jZWx9XG4gICAgICAgIGFjdGlvbnNFbmFibGVkPXtmYWxzZX1cbiAgICAgID5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3NjcmVlbicgc3R5bGU9e3N0eWxlcy5zY3JlZW59PlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICB7IHRhcmdldExhbmd1YWdlID8gKFxuICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXtzdHlsZXMuZWRpdEhlYWRpbmd9PlxuICAgICAgICAgICAgICAgIHt0YXJnZXRMYW5ndWFnZX1cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApIDogJyd9XG4gICAgICAgICAgICA8RWRpdFNjcmVlblxuICAgICAgICAgICAgICByb3dzPXtyb3dzfVxuICAgICAgICAgICAgICBhbGlnbj17J2xlZnQnfVxuICAgICAgICAgICAgICB2ZXJzZVRleHQ9e3RleHR9XG4gICAgICAgICAgICAgIHN0eWxlPXtzdHlsZXMuZWRpdG9yfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5faGFuZGxlVmVyc2VDaGFuZ2V9XG4gICAgICAgICAgICAgIHRhcmdldExhbmd1YWdlRm9udD17dGFyZ2V0TGFuZ3VhZ2VGb250fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IHN0eWxlPXtzdHlsZXMucmVhc29uSGVhZGluZ30+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICB7dHJhbnNsYXRlKCdzZWxlY3RfcmVhc29ucycpfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8UmVhc29uU2NyZWVuXG4gICAgICAgICAgICAgIHRyYW5zbGF0ZT17dHJhbnNsYXRlfVxuICAgICAgICAgICAgICBzZWxlY3RlZFJlYXNvbnM9e3JlYXNvbnN9XG4gICAgICAgICAgICAgIGNvbHVtbnM9ezF9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLl9oYW5kbGVSZWFzb25DaGFuZ2V9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2FjdGlvbnMnPlxuICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuLXNlY29uZFwiXG4gICAgICAgICAgICBvbkNsaWNrPXt0aGlzLl9oYW5kbGVDYW5jZWx9PlxuICAgICAgICAgICAge3RyYW5zbGF0ZSgnYnV0dG9ucy5jYW5jZWxfYnV0dG9uJyl9XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4tc2Vjb25kXCJcbiAgICAgICAgICAgIGRpc2FibGVkPXshaXNWZXJzZUNoYW5nZWR9XG4gICAgICAgICAgICBvbkNsaWNrPXt0aGlzLl9oYW5kbGVSZXNldH0+XG4gICAgICAgICAgICB7IC8qIFRSSUNLWSAtIGRvIG1pcnJvciBpbWFnZSBvZiByZXBlYXQgdG8gbWFrZSByZXNldCBpY29uICovIH1cbiAgICAgICAgICAgIDxHbHlwaGljb24gZ2x5cGg9J3JlcGVhdCcgc3R5bGU9e3sgbWFyZ2luUmlnaHQ6ICcxMHB4JywgdHJhbnNmb3JtOiAnc2NhbGVYKC0xKScgfX0gLz5cbiAgICAgICAgICAgIHt0cmFuc2xhdGUoJ2J1dHRvbnMucmVzZXRfYnV0dG9uJyl9XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4tcHJpbWVcIlxuICAgICAgICAgICAgZGlzYWJsZWQ9eyFpc1ZlcnNlQ2hhbmdlZEFuZEhhdmVSZWFzb259XG4gICAgICAgICAgICBvbkNsaWNrPXt0aGlzLl9oYW5kbGVTdWJtaXR9PlxuICAgICAgICAgICAgPEdseXBoaWNvbiBnbHlwaD0nb2snIHN0eWxlPXt7IG1hcmdpblJpZ2h0OiAnMTBweCcgfX0gLz5cbiAgICAgICAgICAgIHt0cmFuc2xhdGUoJ2J1dHRvbnMuc2F2ZV9idXR0b24nKX1cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L0Jhc2VEaWFsb2c+XG4gICAgKTtcbiAgfVxufVxuXG5WZXJzZUVkaXRvci5wcm9wVHlwZXMgPSB7XG4gIG9wZW46IFByb3BUeXBlcy5ib29sLmlzUmVxdWlyZWQsXG4gIHZlcnNlVGl0bGU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgdmVyc2VUZXh0OiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gIHRyYW5zbGF0ZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgb25DYW5jZWw6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIG9uU3VibWl0OiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICB0YXJnZXRMYW5ndWFnZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICB0YXJnZXRMYW5ndWFnZUZvbnQ6IFByb3BUeXBlcy5zdHJpbmcsXG59O1xuXG5WZXJzZUVkaXRvci5kZWZhdWx0UHJvcHMgPSB7IHRhcmdldExhbmd1YWdlOiAnJyB9O1xuXG5leHBvcnQgZGVmYXVsdCBWZXJzZUVkaXRvcjtcbiJdfQ==