"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styles = require("@material-ui/core/styles");

var _reactBootstrap = require("react-bootstrap");

var _Checkbox = _interopRequireDefault(require("@material-ui/core/Checkbox"));

var _FormControlLabel = _interopRequireDefault(require("@material-ui/core/FormControlLabel"));

var _editHelpers = require("../../VerseEditor/helpers/editHelpers");

require("./EditVerseArea.styles.css");

var _fontUtils = require("../../common/fontUtils");

var styles = {
  formControlLabelRoot: {
    height: 30
  },
  formControlLabel: {
    justifyContent: 'flex-start',
    fontSize: 16,
    color: 'var(--text-color-dark)'
  },
  checkBox: {
    '&$checked': {
      color: 'var(--accent-color-dark)'
    }
  },
  checked: {}
};

var EditVerseArea = function EditVerseArea(_ref) {
  var tags = _ref.tags,
      isVerseChanged = _ref.isVerseChanged,
      verseText = _ref.verseText,
      languageDirection = _ref.languageDirection,
      translate = _ref.translate,
      classes = _ref.classes,
      handleTagsCheckbox = _ref.handleTagsCheckbox,
      handleEditVerse = _ref.handleEditVerse,
      checkIfVerseChanged = _ref.checkIfVerseChanged,
      targetLanguageFont = _ref.targetLanguageFont;
  var tagList1 = [['spelling', translate('spelling')], ['punctuation', translate('punctuation')], ['wordChoice', translate('word_choice')]];
  var tagList2 = [['meaning', translate('meaning')], ['grammar', translate('grammar')], ['other', translate('other')]];
  var checkboxesColumn1 = tagList1.map(function (tag) {
    return _react["default"].createElement(_FormControlLabel["default"], {
      key: tag[0],
      disabled: !isVerseChanged,
      classes: {
        root: classes.formControlLabelRoot,
        label: classes.formControlLabel
      },
      control: _react["default"].createElement(_Checkbox["default"], {
        classes: {
          root: classes.checkBox,
          checked: classes.checked
        },
        checked: tags.includes(tag[0]),
        onChange: function onChange() {
          return handleTagsCheckbox(tag[0]);
        }
      }),
      label: tag[1]
    });
  });
  var checkboxesColumn2 = tagList2.map(function (tag) {
    return _react["default"].createElement(_FormControlLabel["default"], {
      key: tag[0],
      disabled: !isVerseChanged,
      classes: {
        root: classes.formControlLabelRoot,
        label: classes.formControlLabel
      },
      control: _react["default"].createElement(_Checkbox["default"], {
        classes: {
          root: classes.checkBox,
          checked: classes.checked
        },
        checked: tags.includes(tag[0]),
        onChange: function onChange() {
          return handleTagsCheckbox(tag[0]);
        }
      }),
      label: tag[1]
    });
  });
  var checkBoxText = isVerseChanged ? translate('next_change_reason') : translate('first_make_change');
  var fontClass = (0, _fontUtils.getFontClassName)(targetLanguageFont);
  return _react["default"].createElement("div", {
    className: "edit-area"
  }, _react["default"].createElement("div", {
    style: {
      fontWeight: 'bold'
    }
  }, _react["default"].createElement(_reactBootstrap.Glyphicon, {
    glyph: "pencil",
    style: {
      marginRight: '5px'
    }
  }), translate('edit_verse')), _react["default"].createElement(_reactBootstrap.FormGroup, {
    style: {
      flex: 'auto',
      display: 'flex',
      flexDirection: 'column',
      marginBottom: '5px'
    },
    controlId: "formControlsTextarea"
  }, _react["default"].createElement(_reactBootstrap.FormControl, {
    autoFocus: true,
    onFocus: _editHelpers.moveCursorToEnd,
    componentClass: "textarea",
    type: "text",
    defaultValue: verseText,
    className: fontClass,
    style: {
      flex: 'auto',
      minHeight: '110px',
      direction: languageDirection
    },
    onBlur: handleEditVerse,
    onInput: checkIfVerseChanged
  }), _react["default"].createElement("div", {
    style: {
      flex: '0 0 65px',
      marginTop: '5px',
      fontSize: '0.9em'
    }
  }, checkBoxText, _react["default"].createElement("br", null), _react["default"].createElement("div", {
    style: {
      display: 'flex'
    }
  }, _react["default"].createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      margin: '0px 0px 0px 15px'
    }
  }, checkboxesColumn1), _react["default"].createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      margin: '0px 0px 0px 15px'
    }
  }, checkboxesColumn2)))));
};

EditVerseArea.propTypes = {
  translate: _propTypes["default"].func.isRequired,
  tags: _propTypes["default"].array.isRequired,
  isVerseChanged: _propTypes["default"].bool.isRequired,
  verseText: _propTypes["default"].string.isRequired,
  languageDirection: _propTypes["default"].string.isRequired,
  classes: _propTypes["default"].object.isRequired,
  handleTagsCheckbox: _propTypes["default"].func.isRequired,
  handleEditVerse: _propTypes["default"].func.isRequired,
  checkIfVerseChanged: _propTypes["default"].func.isRequired,
  targetLanguageFont: _propTypes["default"].string
};

var _default = (0, _styles.withStyles)(styles)(EditVerseArea);

exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9WZXJzZUNoZWNrL0VkaXRWZXJzZUFyZWEvaW5kZXguanMiXSwibmFtZXMiOlsic3R5bGVzIiwiZm9ybUNvbnRyb2xMYWJlbFJvb3QiLCJoZWlnaHQiLCJmb3JtQ29udHJvbExhYmVsIiwianVzdGlmeUNvbnRlbnQiLCJmb250U2l6ZSIsImNvbG9yIiwiY2hlY2tCb3giLCJjaGVja2VkIiwiRWRpdFZlcnNlQXJlYSIsInRhZ3MiLCJpc1ZlcnNlQ2hhbmdlZCIsInZlcnNlVGV4dCIsImxhbmd1YWdlRGlyZWN0aW9uIiwidHJhbnNsYXRlIiwiY2xhc3NlcyIsImhhbmRsZVRhZ3NDaGVja2JveCIsImhhbmRsZUVkaXRWZXJzZSIsImNoZWNrSWZWZXJzZUNoYW5nZWQiLCJ0YXJnZXRMYW5ndWFnZUZvbnQiLCJ0YWdMaXN0MSIsInRhZ0xpc3QyIiwiY2hlY2tib3hlc0NvbHVtbjEiLCJtYXAiLCJ0YWciLCJyb290IiwibGFiZWwiLCJpbmNsdWRlcyIsImNoZWNrYm94ZXNDb2x1bW4yIiwiY2hlY2tCb3hUZXh0IiwiZm9udENsYXNzIiwiZm9udFdlaWdodCIsIm1hcmdpblJpZ2h0IiwiZmxleCIsImRpc3BsYXkiLCJmbGV4RGlyZWN0aW9uIiwibWFyZ2luQm90dG9tIiwibW92ZUN1cnNvclRvRW5kIiwibWluSGVpZ2h0IiwiZGlyZWN0aW9uIiwibWFyZ2luVG9wIiwibWFyZ2luIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwiZnVuYyIsImlzUmVxdWlyZWQiLCJhcnJheSIsImJvb2wiLCJzdHJpbmciLCJvYmplY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOztBQUdBOztBQUNBOztBQUNBOztBQUVBOztBQUNBOztBQUVBLElBQU1BLE1BQU0sR0FBRztBQUNiQyxFQUFBQSxvQkFBb0IsRUFBRTtBQUFFQyxJQUFBQSxNQUFNLEVBQUU7QUFBVixHQURUO0FBRWJDLEVBQUFBLGdCQUFnQixFQUFFO0FBQ2hC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VixDQUFlRixVQUhQO0FBSXhCakMsRUFBQUEsU0FBUyxFQUFFK0Isc0JBQVVLLE1BQVYsQ0FBaUJILFVBSko7QUFLeEJoQyxFQUFBQSxpQkFBaUIsRUFBRThCLHNCQUFVSyxNQUFWLENBQWlCSCxVQUxaO0FBTXhCOUIsRUFBQUEsT0FBTyxFQUFFNEIsc0JBQVVNLE1BQVYsQ0FBaUJKLFVBTkY7QUFPeEI3QixFQUFBQSxrQkFBa0IsRUFBRTJCLHNCQUFVQyxJQUFWLENBQWVDLFVBUFg7QUFReEI1QixFQUFBQSxlQUFlLEVBQUUwQixzQkFBVUMsSUFBVixDQUFlQyxVQVJSO0FBU3hCM0IsRUFBQUEsbUJBQW1CLEVBQUV5QixzQkFBVUMsSUFBVixDQUFlQyxVQVRaO0FBVXhCMUIsRUFBQUEsa0JBQWtCLEVBQUV3QixzQkFBVUs7QUFWTixDQUExQjs7ZUFhZSx3QkFBV2hELE1BQVgsRUFBbUJTLGFBQW5CLEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IHdpdGhTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xuaW1wb3J0IHtcbiAgR2x5cGhpY29uLCBGb3JtR3JvdXAsIEZvcm1Db250cm9sLFxufSBmcm9tICdyZWFjdC1ib290c3RyYXAnO1xuaW1wb3J0IENoZWNrYm94IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NoZWNrYm94JztcbmltcG9ydCBGb3JtQ29udHJvbExhYmVsIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0Zvcm1Db250cm9sTGFiZWwnO1xuaW1wb3J0IHsgbW92ZUN1cnNvclRvRW5kIH0gZnJvbSAnLi4vLi4vVmVyc2VFZGl0b3IvaGVscGVycy9lZGl0SGVscGVycyc7XG5cbmltcG9ydCAnLi9FZGl0VmVyc2VBcmVhLnN0eWxlcy5jc3MnO1xuaW1wb3J0IHsgZ2V0Rm9udENsYXNzTmFtZSB9IGZyb20gJy4uLy4uL2NvbW1vbi9mb250VXRpbHMnO1xuXG5jb25zdCBzdHlsZXMgPSB7XG4gIGZvcm1Db250cm9sTGFiZWxSb290OiB7IGhlaWdodDogMzAgfSxcbiAgZm9ybUNvbnRyb2xMYWJlbDoge1xuICAgIGp1c3RpZnlDb250ZW50OiAnZmxleC1zdGFydCcsXG4gICAgZm9udFNpemU6IDE2LFxuICAgIGNvbG9yOiAndmFyKC0tdGV4dC1jb2xvci1kYXJrKScsXG4gIH0sXG4gIGNoZWNrQm94OiB7ICcmJGNoZWNrZWQnOiB7IGNvbG9yOiAndmFyKC0tYWNjZW50LWNvbG9yLWRhcmspJyB9IH0sXG4gIGNoZWNrZWQ6e30sXG59O1xuXG5jb25zdCBFZGl0VmVyc2VBcmVhID0gKHtcbiAgdGFncyxcbiAgaXNWZXJzZUNoYW5nZWQsXG4gIHZlcnNlVGV4dCxcbiAgbGFuZ3VhZ2VEaXJlY3Rpb24sXG4gIHRyYW5zbGF0ZSxcbiAgY2xhc3NlcyxcbiAgaGFuZGxlVGFnc0NoZWNrYm94LFxuICBoYW5kbGVFZGl0VmVyc2UsXG4gIGNoZWNrSWZWZXJzZUNoYW5nZWQsXG4gIHRhcmdldExhbmd1YWdlRm9udCxcbn0pID0+IHtcbiAgY29uc3QgdGFnTGlzdDEgPSBbXG4gICAgWydzcGVsbGluZycsIHRyYW5zbGF0ZSgnc3BlbGxpbmcnKV0sXG4gICAgWydwdW5jdHVhdGlvbicsIHRyYW5zbGF0ZSgncHVuY3R1YXRpb24nKV0sXG4gICAgWyd3b3JkQ2hvaWNlJywgdHJhbnNsYXRlKCd3b3JkX2Nob2ljZScpXSxcbiAgXTtcblxuICBjb25zdCB0YWdMaXN0MiA9IFtcbiAgICBbJ21lYW5pbmcnLCB0cmFuc2xhdGUoJ21lYW5pbmcnKV0sXG4gICAgWydncmFtbWFyJywgdHJhbnNsYXRlKCdncmFtbWFyJyldLFxuICAgIFsnb3RoZXInLCB0cmFuc2xhdGUoJ290aGVyJyldLFxuICBdO1xuXG4gIGNvbnN0IGNoZWNrYm94ZXNDb2x1bW4xID0gdGFnTGlzdDEubWFwKHRhZyA9PlxuICAgIDxGb3JtQ29udHJvbExhYmVsXG4gICAgICBrZXk9e3RhZ1swXX1cbiAgICAgIGRpc2FibGVkPXshaXNWZXJzZUNoYW5nZWR9XG4gICAgICBjbGFzc2VzPXt7XG4gICAgICAgIHJvb3Q6IGNsYXNzZXMuZm9ybUNvbnRyb2xMYWJlbFJvb3QsXG4gICAgICAgIGxhYmVsOiBjbGFzc2VzLmZvcm1Db250cm9sTGFiZWwsXG4gICAgICB9fVxuICAgICAgY29udHJvbD17XG4gICAgICAgIDxDaGVja2JveFxuICAgICAgICAgIGNsYXNzZXM9e3tcbiAgICAgICAgICAgIHJvb3Q6IGNsYXNzZXMuY2hlY2tCb3gsXG4gICAgICAgICAgICBjaGVja2VkOmNsYXNzZXMuY2hlY2tlZCxcbiAgICAgICAgICB9fVxuICAgICAgICAgIGNoZWNrZWQ9e3RhZ3MuaW5jbHVkZXModGFnWzBdKX1cbiAgICAgICAgICBvbkNoYW5nZT17KCkgPT4gaGFuZGxlVGFnc0NoZWNrYm94KHRhZ1swXSl9XG4gICAgICAgIC8+XG4gICAgICB9XG4gICAgICBsYWJlbD17dGFnWzFdfVxuICAgIC8+LFxuICApO1xuXG4gIGNvbnN0IGNoZWNrYm94ZXNDb2x1bW4yID0gdGFnTGlzdDIubWFwKHRhZyA9PlxuICAgIDxGb3JtQ29udHJvbExhYmVsXG4gICAgICBrZXk9e3RhZ1swXX1cbiAgICAgIGRpc2FibGVkPXshaXNWZXJzZUNoYW5nZWR9XG4gICAgICBjbGFzc2VzPXt7XG4gICAgICAgIHJvb3Q6IGNsYXNzZXMuZm9ybUNvbnRyb2xMYWJlbFJvb3QsXG4gICAgICAgIGxhYmVsOiBjbGFzc2VzLmZvcm1Db250cm9sTGFiZWwsXG4gICAgICB9fVxuICAgICAgY29udHJvbD17XG4gICAgICAgIDxDaGVja2JveFxuICAgICAgICAgIGNsYXNzZXM9e3tcbiAgICAgICAgICAgIHJvb3Q6IGNsYXNzZXMuY2hlY2tCb3gsXG4gICAgICAgICAgICBjaGVja2VkOmNsYXNzZXMuY2hlY2tlZCxcbiAgICAgICAgICB9fVxuICAgICAgICAgIGNoZWNrZWQ9e3RhZ3MuaW5jbHVkZXModGFnWzBdKX1cbiAgICAgICAgICBvbkNoYW5nZT17KCkgPT4gaGFuZGxlVGFnc0NoZWNrYm94KHRhZ1swXSl9XG4gICAgICAgIC8+XG4gICAgICB9XG4gICAgICBsYWJlbD17dGFnWzFdfVxuICAgIC8+LFxuICApO1xuICBjb25zdCBjaGVja0JveFRleHQgPSBpc1ZlcnNlQ2hhbmdlZCA/IHRyYW5zbGF0ZSgnbmV4dF9jaGFuZ2VfcmVhc29uJykgOiB0cmFuc2xhdGUoJ2ZpcnN0X21ha2VfY2hhbmdlJyk7XG4gIGNvbnN0IGZvbnRDbGFzcyA9IGdldEZvbnRDbGFzc05hbWUodGFyZ2V0TGFuZ3VhZ2VGb250KTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPSdlZGl0LWFyZWEnPlxuICAgICAgPGRpdiBzdHlsZT17eyBmb250V2VpZ2h0OiAnYm9sZCcgfX0+XG4gICAgICAgIDxHbHlwaGljb24gZ2x5cGg9J3BlbmNpbCcgc3R5bGU9e3sgbWFyZ2luUmlnaHQ6ICc1cHgnIH19IC8+XG4gICAgICAgIHt0cmFuc2xhdGUoJ2VkaXRfdmVyc2UnKX1cbiAgICAgIDwvZGl2PlxuICAgICAgPEZvcm1Hcm91cCBzdHlsZT17e1xuICAgICAgICBmbGV4OiAnYXV0bycsIGRpc3BsYXk6ICdmbGV4JywgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsIG1hcmdpbkJvdHRvbTogJzVweCcsXG4gICAgICB9fSBjb250cm9sSWQ9J2Zvcm1Db250cm9sc1RleHRhcmVhJz5cbiAgICAgICAgPEZvcm1Db250cm9sXG4gICAgICAgICAgYXV0b0ZvY3VzXG4gICAgICAgICAgb25Gb2N1cz17bW92ZUN1cnNvclRvRW5kfVxuICAgICAgICAgIGNvbXBvbmVudENsYXNzPSd0ZXh0YXJlYSdcbiAgICAgICAgICB0eXBlPSd0ZXh0J1xuICAgICAgICAgIGRlZmF1bHRWYWx1ZT17dmVyc2VUZXh0fVxuICAgICAgICAgIGNsYXNzTmFtZT17Zm9udENsYXNzfVxuICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICBmbGV4OiAnYXV0bycsXG4gICAgICAgICAgICBtaW5IZWlnaHQ6ICcxMTBweCcsXG4gICAgICAgICAgICBkaXJlY3Rpb246IGxhbmd1YWdlRGlyZWN0aW9uLFxuICAgICAgICAgIH19XG4gICAgICAgICAgb25CbHVyPXtoYW5kbGVFZGl0VmVyc2V9XG4gICAgICAgICAgb25JbnB1dD17Y2hlY2tJZlZlcnNlQ2hhbmdlZH1cbiAgICAgICAgLz5cbiAgICAgICAgPGRpdiBzdHlsZT17e1xuICAgICAgICAgIGZsZXg6ICcwIDAgNjVweCcsIG1hcmdpblRvcDogJzVweCcsIGZvbnRTaXplOiAnMC45ZW0nLFxuICAgICAgICB9fT5cbiAgICAgICAgICB7Y2hlY2tCb3hUZXh0fVxuICAgICAgICAgIDxiciAvPlxuICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnIH19PlxuICAgICAgICAgICAgPGRpdiBzdHlsZT17e1xuICAgICAgICAgICAgICBkaXNwbGF5OiAnZmxleCcsIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLCBtYXJnaW46ICcwcHggMHB4IDBweCAxNXB4JyxcbiAgICAgICAgICAgIH19PlxuICAgICAgICAgICAgICB7Y2hlY2tib3hlc0NvbHVtbjF9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tcbiAgICAgICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLCBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJywgbWFyZ2luOiAnMHB4IDBweCAwcHggMTVweCcsXG4gICAgICAgICAgICB9fT5cbiAgICAgICAgICAgICAge2NoZWNrYm94ZXNDb2x1bW4yfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9Gb3JtR3JvdXA+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5FZGl0VmVyc2VBcmVhLnByb3BUeXBlcyA9IHtcbiAgdHJhbnNsYXRlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICB0YWdzOiBQcm9wVHlwZXMuYXJyYXkuaXNSZXF1aXJlZCxcbiAgaXNWZXJzZUNoYW5nZWQ6IFByb3BUeXBlcy5ib29sLmlzUmVxdWlyZWQsXG4gIHZlcnNlVGV4dDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICBsYW5ndWFnZURpcmVjdGlvbjogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICBjbGFzc2VzOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG4gIGhhbmRsZVRhZ3NDaGVja2JveDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgaGFuZGxlRWRpdFZlcnNlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICBjaGVja0lmVmVyc2VDaGFuZ2VkOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICB0YXJnZXRMYW5ndWFnZUZvbnQ6IFByb3BUeXBlcy5zdHJpbmcsXG59O1xuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGVzKHN0eWxlcykoRWRpdFZlcnNlQXJlYSk7XG4iXX0=