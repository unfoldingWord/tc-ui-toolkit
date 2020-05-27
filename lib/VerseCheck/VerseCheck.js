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

var _ActionsArea = _interopRequireDefault(require("./ActionsArea"));

var _CheckArea = _interopRequireDefault(require("./CheckArea"));

var _SaveArea = _interopRequireDefault(require("./SaveArea"));

var _DialogComponent = _interopRequireDefault(require("./DialogComponent"));

var _IconIndicators = _interopRequireDefault(require("./IconIndicators"));

require("./VerseCheck.styles.css");

/* eslint-disable indent */
var VerseCheck = /*#__PURE__*/function (_Component) {
  (0, _inherits2["default"])(VerseCheck, _Component);

  function VerseCheck() {
    (0, _classCallCheck2["default"])(this, VerseCheck);
    return (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(VerseCheck).apply(this, arguments));
  }

  (0, _createClass2["default"])(VerseCheck, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          translate = _this$props.translate,
          alignedGLText = _this$props.alignedGLText,
          verseText = _this$props.verseText,
          unfilteredVerseText = _this$props.unfilteredVerseText,
          mode = _this$props.mode,
          dialogModalVisibility = _this$props.dialogModalVisibility,
          isCommentChanged = _this$props.isCommentChanged,
          tags = _this$props.tags,
          isVerseChanged = _this$props.isVerseChanged,
          saveSelection = _this$props.saveSelection,
          cancelSelection = _this$props.cancelSelection,
          clearSelection = _this$props.clearSelection,
          handleSkip = _this$props.handleSkip,
          toggleNothingToSelect = _this$props.toggleNothingToSelect,
          localNothingToSelect = _this$props.localNothingToSelect,
          maximumSelections = _this$props.maximumSelections,
          selections = _this$props.selections,
          newSelections = _this$props.newSelections,
          nothingToSelect = _this$props.nothingToSelect,
          isVerseEdited = _this$props.isVerseEdited,
          commentText = _this$props.commentText,
          bookmarkEnabled = _this$props.bookmarkEnabled,
          isVerseInvalidated = _this$props.isVerseInvalidated,
          contextId = _this$props.contextId,
          targetBible = _this$props.targetBible,
          handleCloseDialog = _this$props.handleCloseDialog,
          handleGoToNext = _this$props.handleGoToNext,
          handleGoToPrevious = _this$props.handleGoToPrevious,
          handleOpenDialog = _this$props.handleOpenDialog,
          openAlertDialog = _this$props.openAlertDialog,
          changeSelectionsInLocalState = _this$props.changeSelectionsInLocalState,
          toggleBookmark = _this$props.toggleBookmark,
          changeMode = _this$props.changeMode,
          cancelEditVerse = _this$props.cancelEditVerse,
          saveEditVerse = _this$props.saveEditVerse,
          handleComment = _this$props.handleComment,
          cancelComment = _this$props.cancelComment,
          saveComment = _this$props.saveComment,
          bookDetails = _this$props.bookDetails,
          targetLanguageDetails = _this$props.targetLanguageDetails,
          handleTagsCheckbox = _this$props.handleTagsCheckbox,
          handleEditVerse = _this$props.handleEditVerse,
          checkIfVerseChanged = _this$props.checkIfVerseChanged,
          checkIfCommentChanged = _this$props.checkIfCommentChanged,
          validateSelections = _this$props.validateSelections,
          manifest = _this$props.manifest;
      var targetLanguageFont = manifest.languageFont || '';
      var titleText;
      var saveArea;

      switch (mode) {
        case 'edit':
          titleText = translate('edit_verse');
          saveArea = _react["default"].createElement("div", null);
          break;

        case 'comment':
          titleText = translate('comment');
          saveArea = _react["default"].createElement("div", null);
          break;

        case 'select':
          titleText = translate('select');
          saveArea = _react["default"].createElement("div", null);
          break;

        default:
          titleText = translate('step2_check');
          saveArea = _react["default"].createElement(_SaveArea["default"], {
            translate: translate,
            selections: selections,
            nothingToSelect: nothingToSelect,
            handleGoToNext: handleGoToNext,
            handleGoToPrevious: handleGoToPrevious,
            handleOpenDialog: handleOpenDialog
          });
      }

      return _react["default"].createElement("div", {
        className: "verse-check"
      }, _react["default"].createElement("div", {
        className: "verse-check-flex"
      }, _react["default"].createElement("div", {
        className: "verse-check-card"
      }, _react["default"].createElement("div", {
        className: "title-bar"
      }, _react["default"].createElement("span", null, titleText), _react["default"].createElement(_IconIndicators["default"], {
        isVerseEdited: isVerseEdited,
        selections: selections,
        comment: commentText,
        bookmarkEnabled: bookmarkEnabled,
        translate: translate,
        nothingToSelect: nothingToSelect,
        invalidated: isVerseInvalidated
      })), _react["default"].createElement(_CheckArea["default"], {
        mode: mode,
        tags: tags,
        verseText: verseText,
        comment: commentText,
        translate: translate,
        contextId: contextId,
        selections: selections,
        bookDetails: bookDetails,
        targetBible: targetBible,
        newSelections: newSelections,
        alignedGLText: alignedGLText,
        handleComment: handleComment,
        isVerseChanged: isVerseChanged,
        invalidated: isVerseInvalidated,
        nothingToSelect: nothingToSelect,
        openAlertDialog: openAlertDialog,
        handleEditVerse: handleEditVerse,
        maximumSelections: maximumSelections,
        handleTagsCheckbox: handleTagsCheckbox,
        validateSelections: validateSelections,
        targetLanguageFont: targetLanguageFont,
        unfilteredVerseText: unfilteredVerseText,
        checkIfVerseChanged: checkIfVerseChanged,
        targetLanguageDetails: targetLanguageDetails,
        checkIfCommentChanged: checkIfCommentChanged,
        changeSelectionsInLocalState: changeSelectionsInLocalState
      }), _react["default"].createElement(_ActionsArea["default"], {
        mode: mode,
        tags: tags,
        toggleNothingToSelect: toggleNothingToSelect,
        localNothingToSelect: localNothingToSelect,
        nothingToSelect: nothingToSelect,
        isCommentChanged: isCommentChanged,
        selections: selections,
        newSelections: newSelections,
        translate: translate,
        bookmarkEnabled: bookmarkEnabled,
        saveSelection: saveSelection,
        cancelSelection: cancelSelection,
        clearSelection: clearSelection,
        toggleBookmark: toggleBookmark,
        changeMode: changeMode,
        cancelEditVerse: cancelEditVerse,
        saveEditVerse: saveEditVerse,
        cancelComment: cancelComment,
        saveComment: saveComment
      })), saveArea), _react["default"].createElement(_DialogComponent["default"], {
        handleSkip: handleSkip,
        dialogModalVisibility: dialogModalVisibility,
        handleClose: handleCloseDialog,
        translate: translate
      }));
    }
  }]);
  return VerseCheck;
}(_react.Component);

VerseCheck.propTypes = {
  translate: _propTypes["default"].func.isRequired,
  mode: _propTypes["default"].string.isRequired,
  tags: _propTypes["default"].array.isRequired,
  selections: _propTypes["default"].array.isRequired,
  newSelections: _propTypes["default"].array.isRequired,
  nothingToSelect: _propTypes["default"].bool.isRequired,
  isVerseEdited: _propTypes["default"].bool.isRequired,
  commentText: _propTypes["default"].string.isRequired,
  bookmarkEnabled: _propTypes["default"].bool.isRequired,
  isVerseInvalidated: _propTypes["default"].bool.isRequired,
  contextId: _propTypes["default"].object.isRequired,
  targetBible: _propTypes["default"].object.isRequired,
  bookDetails: _propTypes["default"].object.isRequired,
  targetLanguageDetails: _propTypes["default"].object.isRequired,
  alignedGLText: _propTypes["default"].string.isRequired,
  isCommentChanged: _propTypes["default"].bool.isRequired,
  isVerseChanged: _propTypes["default"].bool.isRequired,
  verseText: _propTypes["default"].string.isRequired,
  unfilteredVerseText: _propTypes["default"].string.isRequired,
  dialogModalVisibility: _propTypes["default"].bool.isRequired,
  localNothingToSelect: _propTypes["default"].bool.isRequired,
  maximumSelections: _propTypes["default"].number.isRequired,
  handleCloseDialog: _propTypes["default"].func.isRequired,
  handleGoToNext: _propTypes["default"].func.isRequired,
  handleGoToPrevious: _propTypes["default"].func.isRequired,
  handleOpenDialog: _propTypes["default"].func.isRequired,
  openAlertDialog: _propTypes["default"].func.isRequired,
  toggleBookmark: _propTypes["default"].func.isRequired,
  changeMode: _propTypes["default"].func.isRequired,
  cancelEditVerse: _propTypes["default"].func.isRequired,
  saveEditVerse: _propTypes["default"].func.isRequired,
  handleComment: _propTypes["default"].func.isRequired,
  cancelComment: _propTypes["default"].func.isRequired,
  saveComment: _propTypes["default"].func.isRequired,
  toggleNothingToSelect: _propTypes["default"].func.isRequired,
  saveSelection: _propTypes["default"].func.isRequired,
  cancelSelection: _propTypes["default"].func.isRequired,
  clearSelection: _propTypes["default"].func.isRequired,
  handleSkip: _propTypes["default"].func.isRequired,
  handleEditVerse: _propTypes["default"].func.isRequired,
  checkIfVerseChanged: _propTypes["default"].func.isRequired,
  checkIfCommentChanged: _propTypes["default"].func.isRequired,
  validateSelections: _propTypes["default"].func.isRequired,
  handleTagsCheckbox: _propTypes["default"].func.isRequired,
  changeSelectionsInLocalState: _propTypes["default"].func.isRequired,
  manifest: _propTypes["default"].object
};
VerseCheck.defaultProps = {
  translate: function translate(key) {
    return key;
  },
  verseText: '',
  unfilteredVerseText: '',
  commentText: ''
};
var _default = VerseCheck;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9WZXJzZUNoZWNrL1ZlcnNlQ2hlY2suanMiXSwibmFtZXMiOlsiVmVyc2VDaGVjayIsInByb3BzIiwidHJhbnNsYXRlIiwiYWxpZ25lZEdMVGV4dCIsInZlcnNlVGV4dCIsInVuZmlsdGVyZWRWZXJzZVRleHQiLCJtb2RlIiwiZGlhbG9nTW9kYWxWaXNpYmlsaXR5IiwiaXNDb21tZW50Q2hhbmdlZCIsInRhZ3MiLCJpc1ZlcnNlQ2hhbmdlZCIsInNhdmVTZWxlY3Rpb24iLCJjYW5jZWxTZWxlY3Rpb24iLCJjbGVhclNlbGVjdGlvbiIsImhhbmRsZVNraXAiLCJ0b2dnbGVOb3RoaW5nVG9TZWxlY3QiLCJsb2NhbE5vdGhpbmdUb1NlbGVjdCIsIm1heGltdW1TZWxlY3Rpb25zIiwic2VsZWN0aW9ucyIsIm5ld1NlbGVjdGlvbnMiLCJub3RoaW5nVG9TZWxlY3QiLCJpc1ZlcnNlRWRpdGVkIiwiY29tbWVudFRleHQiLCJib29rbWFya0VuYWJsZWQiLCJpc1ZlcnNlSW52YWxpZGF0ZWQiLCJjb250ZXh0SWQiLCJ0YXJnZXRCaWJsZSIsImhhbmRsZUNsb3NlRGlhbG9nIiwiaGFuZGxlR29Ub05leHQiLCJoYW5kbGVHb1RvUHJldmlvdXMiLCJoYW5kbGVPcGVuRGlhbG9nIiwib3BlbkFsZXJ0RGlhbG9nIiwiY2hhbmdlU2VsZWN0aW9uc0luTG9jYWxTdGF0ZSIsInRvZ2dsZUJvb2ttYXJrIiwiY2hhbmdlTW9kZSIsImNhbmNlbEVkaXRWZXJzZSIsInNhdmVFZGl0VmVyc2UiLCJoYW5kbGVDb21tZW50IiwiY2FuY2VsQ29tbWVudCIsInNhdmVDb21tZW50IiwiYm9va0RldGFpbHMiLCJ0YXJnZXRMYW5ndWFnZURldGFpbHMiLCJoYW5kbGVUYWdzQ2hlY2tib3giLCJoYW5kbGVFZGl0VmVyc2UiLCJjaGVja0lmVmVyc2VDaGFuZ2VkIiwiY2hlY2tJZkNvbW1lbnRDaGFuZ2VkIiwidmFsaWRhdGVTZWxlY3Rpb25zIiwibWFuaWZlc3QiLCJ0YXJnZXRMYW5ndWFnZUZvbnQiLCJsYW5ndWFnZUZvbnQiLCJ0aXRsZVRleHQiLCJzYXZlQXJlYSIsIkNvbXBvbmVudCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsImZ1bmMiLCJpc1JlcXVpcmVkIiwic3RyaW5nIiwiYXJyYXkiLCJib29sIiwib2JqZWN0IiwibnVtYmVyIiwiZGVmYXVsdFByb3BzIiwia2V5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFFQTs7QUFUQTtJQVdNQSxVOzs7Ozs7Ozs7OzZCQUNLO0FBQUEsd0JBZ0RILEtBQUtDLEtBaERGO0FBQUEsVUFFTEMsU0FGSyxlQUVMQSxTQUZLO0FBQUEsVUFHTEMsYUFISyxlQUdMQSxhQUhLO0FBQUEsVUFJTEMsU0FKSyxlQUlMQSxTQUpLO0FBQUEsVUFLTEMsbUJBTEssZUFLTEEsbUJBTEs7QUFBQSxVQU1MQyxJQU5LLGVBTUxBLElBTks7QUFBQSxVQU9MQyxxQkFQSyxlQU9MQSxxQkFQSztBQUFBLFVBUUxDLGdCQVJLLGVBUUxBLGdCQVJLO0FBQUEsVUFTTEMsSUFUSyxlQVNMQSxJQVRLO0FBQUEsVUFVTEMsY0FWSyxlQVVMQSxjQVZLO0FBQUEsVUFXTEMsYUFYSyxlQVdMQSxhQVhLO0FBQUEsVUFZTEMsZUFaSyxlQVlMQSxlQVpLO0FBQUEsVUFhTEMsY0FiSyxlQWFMQSxjQWJLO0FBQUEsVUFjTEMsVUFkSyxlQWNMQSxVQWRLO0FBQUEsVUFlTEMscUJBZkssZUFlTEEscUJBZks7QUFBQSxVQWdCTEMsb0JBaEJLLGVBZ0JMQSxvQkFoQks7QUFBQSxVQWlCTEMsaUJBakJLLGVBaUJMQSxpQkFqQks7QUFBQSxVQWtCTEMsVUFsQkssZUFrQkxBLFVBbEJLO0FBQUEsVUFtQkxDLGFBbkJLLGVBbUJMQSxhQW5CSztBQUFBLFVBb0JMQyxlQXBCSyxlQW9CTEEsZUFwQks7QUFBQSxVQXFCTEMsYUFyQkssZUFxQkxBLGFBckJLO0FBQUEsVUFzQkxDLFdBdEJLLGVB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QWVDLFVBeENYO0FBeUNyQlosRUFBQUEsbUJBQW1CLEVBQUVVLHNCQUFVQyxJQUFWLENBQWVDLFVBekNmO0FBMENyQlgsRUFBQUEscUJBQXFCLEVBQUVTLHNCQUFVQyxJQUFWLENBQWVDLFVBMUNqQjtBQTJDckJWLEVBQUFBLGtCQUFrQixFQUFFUSxzQkFBVUMsSUFBVixDQUFlQyxVQTNDZDtBQTRDckJkLEVBQUFBLGtCQUFrQixFQUFFWSxzQkFBVUMsSUFBVixDQUFlQyxVQTVDZDtBQTZDckJ4QixFQUFBQSw0QkFBNEIsRUFBRXNCLHNCQUFVQyxJQUFWLENBQWVDLFVBN0N4QjtBQThDckJULEVBQUFBLFFBQVEsRUFBRU8sc0JBQVVNO0FBOUNDLENBQXZCO0FBaURBNUQsVUFBVSxDQUFDOEQsWUFBWCxHQUEwQjtBQUN4QjVELEVBQUFBLFNBQVMsRUFBRSxtQkFBQTZELEdBQUc7QUFBQSxXQUFJQSxHQUFKO0FBQUEsR0FEVTtBQUV4QjNELEVBQUFBLFNBQVMsRUFBRSxFQUZhO0FBR3hCQyxFQUFBQSxtQkFBbUIsRUFBRSxFQUhHO0FBSXhCaUIsRUFBQUEsV0FBVyxFQUFFO0FBSlcsQ0FBMUI7ZUFPZXRCLFUiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBpbmRlbnQgKi9cbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IEFjdGlvbnNBcmVhIGZyb20gJy4vQWN0aW9uc0FyZWEnO1xuaW1wb3J0IENoZWNrQXJlYSBmcm9tICcuL0NoZWNrQXJlYSc7XG5pbXBvcnQgU2F2ZUFyZWEgZnJvbSAnLi9TYXZlQXJlYSc7XG5pbXBvcnQgRGlhbG9nQ29tcG9uZW50IGZyb20gJy4vRGlhbG9nQ29tcG9uZW50JztcbmltcG9ydCBJY29uSW5kaWNhdG9ycyBmcm9tICcuL0ljb25JbmRpY2F0b3JzJztcblxuaW1wb3J0ICcuL1ZlcnNlQ2hlY2suc3R5bGVzLmNzcyc7XG5cbmNsYXNzIFZlcnNlQ2hlY2sgZXh0ZW5kcyBDb21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgdHJhbnNsYXRlLFxuICAgICAgYWxpZ25lZEdMVGV4dCxcbiAgICAgIHZlcnNlVGV4dCxcbiAgICAgIHVuZmlsdGVyZWRWZXJzZVRleHQsXG4gICAgICBtb2RlLFxuICAgICAgZGlhbG9nTW9kYWxWaXNpYmlsaXR5LFxuICAgICAgaXNDb21tZW50Q2hhbmdlZCxcbiAgICAgIHRhZ3MsXG4gICAgICBpc1ZlcnNlQ2hhbmdlZCxcbiAgICAgIHNhdmVTZWxlY3Rpb24sXG4gICAgICBjYW5jZWxTZWxlY3Rpb24sXG4gICAgICBjbGVhclNlbGVjdGlvbixcbiAgICAgIGhhbmRsZVNraXAsXG4gICAgICB0b2dnbGVOb3RoaW5nVG9TZWxlY3QsXG4gICAgICBsb2NhbE5vdGhpbmdUb1NlbGVjdCxcbiAgICAgIG1heGltdW1TZWxlY3Rpb25zLFxuICAgICAgc2VsZWN0aW9ucyxcbiAgICAgIG5ld1NlbGVjdGlvbnMsXG4gICAgICBub3RoaW5nVG9TZWxlY3QsXG4gICAgICBpc1ZlcnNlRWRpdGVkLFxuICAgICAgY29tbWVudFRleHQsXG4gICAgICBib29rbWFya0VuYWJsZWQsXG4gICAgICBpc1ZlcnNlSW52YWxpZGF0ZWQsXG4gICAgICBjb250ZXh0SWQsXG4gICAgICB0YXJnZXRCaWJsZSxcbiAgICAgIGhhbmRsZUNsb3NlRGlhbG9nLFxuICAgICAgaGFuZGxlR29Ub05leHQsXG4gICAgICBoYW5kbGVHb1RvUHJldmlvdXMsXG4gICAgICBoYW5kbGVPcGVuRGlhbG9nLFxuICAgICAgb3BlbkFsZXJ0RGlhbG9nLFxuICAgICAgY2hhbmdlU2VsZWN0aW9uc0luTG9jYWxTdGF0ZSxcbiAgICAgIHRvZ2dsZUJvb2ttYXJrLFxuICAgICAgY2hhbmdlTW9kZSxcbiAgICAgIGNhbmNlbEVkaXRWZXJzZSxcbiAgICAgIHNhdmVFZGl0VmVyc2UsXG4gICAgICBoYW5kbGVDb21tZW50LFxuICAgICAgY2FuY2VsQ29tbWVudCxcbiAgICAgIHNhdmVDb21tZW50LFxuICAgICAgYm9va0RldGFpbHMsXG4gICAgICB0YXJnZXRMYW5ndWFnZURldGFpbHMsXG4gICAgICBoYW5kbGVUYWdzQ2hlY2tib3gsXG4gICAgICBoYW5kbGVFZGl0VmVyc2UsXG4gICAgICBjaGVja0lmVmVyc2VDaGFuZ2VkLFxuICAgICAgY2hlY2tJZkNvbW1lbnRDaGFuZ2VkLFxuICAgICAgdmFsaWRhdGVTZWxlY3Rpb25zLFxuICAgICAgbWFuaWZlc3QsXG4gICAgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgdGFyZ2V0TGFuZ3VhZ2VGb250ID0gbWFuaWZlc3QubGFuZ3VhZ2VGb250IHx8ICcnO1xuICAgIGxldCB0aXRsZVRleHQ7XG4gICAgbGV0IHNhdmVBcmVhO1xuXG4gICAgc3dpdGNoIChtb2RlKSB7XG4gICAgICBjYXNlICdlZGl0JzpcbiAgICAgICAgdGl0bGVUZXh0ID0gdHJhbnNsYXRlKCdlZGl0X3ZlcnNlJyk7XG4gICAgICAgIHNhdmVBcmVhID0gPGRpdiAvPjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdjb21tZW50JzpcbiAgICAgICAgdGl0bGVUZXh0ID0gdHJhbnNsYXRlKCdjb21tZW50Jyk7XG4gICAgICAgIHNhdmVBcmVhID0gPGRpdiAvPjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdzZWxlY3QnOlxuICAgICAgICB0aXRsZVRleHQgPSB0cmFuc2xhdGUoJ3NlbGVjdCcpO1xuICAgICAgICBzYXZlQXJlYSA9IDxkaXYgLz47XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgdGl0bGVUZXh0ID0gdHJhbnNsYXRlKCdzdGVwMl9jaGVjaycpO1xuICAgICAgICBzYXZlQXJlYSA9IChcbiAgICAgICAgICA8U2F2ZUFyZWFcbiAgICAgICAgICAgIHRyYW5zbGF0ZT17dHJhbnNsYXRlfVxuICAgICAgICAgICAgc2VsZWN0aW9ucz17c2VsZWN0aW9uc31cbiAgICAgICAgICAgIG5vdGhpbmdUb1NlbGVjdD17bm90aGluZ1RvU2VsZWN0fVxuICAgICAgICAgICAgaGFuZGxlR29Ub05leHQ9e2hhbmRsZUdvVG9OZXh0fVxuICAgICAgICAgICAgaGFuZGxlR29Ub1ByZXZpb3VzPXtoYW5kbGVHb1RvUHJldmlvdXN9XG4gICAgICAgICAgICBoYW5kbGVPcGVuRGlhbG9nPXtoYW5kbGVPcGVuRGlhbG9nfVxuICAgICAgICAgIC8+XG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSd2ZXJzZS1jaGVjayc+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSd2ZXJzZS1jaGVjay1mbGV4Jz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndmVyc2UtY2hlY2stY2FyZCc+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndGl0bGUtYmFyJz5cbiAgICAgICAgICAgICAgPHNwYW4+e3RpdGxlVGV4dH08L3NwYW4+XG4gICAgICAgICAgICAgIDxJY29uSW5kaWNhdG9yc1xuICAgICAgICAgICAgICAgIGlzVmVyc2VFZGl0ZWQ9e2lzVmVyc2VFZGl0ZWR9XG4gICAgICAgICAgICAgICAgc2VsZWN0aW9ucz17c2VsZWN0aW9uc31cbiAgICAgICAgICAgICAgICBjb21tZW50PXtjb21tZW50VGV4dH1cbiAgICAgICAgICAgICAgICBib29rbWFya0VuYWJsZWQ9e2Jvb2ttYXJrRW5hYmxlZH1cbiAgICAgICAgICAgICAgICB0cmFuc2xhdGU9e3RyYW5zbGF0ZX1cbiAgICAgICAgICAgICAgICBub3RoaW5nVG9TZWxlY3Q9e25vdGhpbmdUb1NlbGVjdH1cbiAgICAgICAgICAgICAgICBpbnZhbGlkYXRlZD17aXNWZXJzZUludmFsaWRhdGVkfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8Q2hlY2tBcmVhXG4gICAgICAgICAgICAgIG1vZGU9e21vZGV9XG4gICAgICAgICAgICAgIHRhZ3M9e3RhZ3N9XG4gICAgICAgICAgICAgIHZlcnNlVGV4dD17dmVyc2VUZXh0fVxuICAgICAgICAgICAgICBjb21tZW50PXtjb21tZW50VGV4dH1cbiAgICAgICAgICAgICAgdHJhbnNsYXRlPXt0cmFuc2xhdGV9XG4gICAgICAgICAgICAgIGNvbnRleHRJZD17Y29udGV4dElkfVxuICAgICAgICAgICAgICBzZWxlY3Rpb25zPXtzZWxlY3Rpb25zfVxuICAgICAgICAgICAgICBib29rRGV0YWlscz17Ym9va0RldGFpbHN9XG4gICAgICAgICAgICAgIHRhcmdldEJpYmxlPXt0YXJnZXRCaWJsZX1cbiAgICAgICAgICAgICAgbmV3U2VsZWN0aW9ucz17bmV3U2VsZWN0aW9uc31cbiAgICAgICAgICAgICAgYWxpZ25lZEdMVGV4dD17YWxpZ25lZEdMVGV4dH1cbiAgICAgICAgICAgICAgaGFuZGxlQ29tbWVudD17aGFuZGxlQ29tbWVudH1cbiAgICAgICAgICAgICAgaXNWZXJzZUNoYW5nZWQ9e2lzVmVyc2VDaGFuZ2VkfVxuICAgICAgICAgICAgICBpbnZhbGlkYXRlZD17aXNWZXJzZUludmFsaWRhdGVkfVxuICAgICAgICAgICAgICBub3RoaW5nVG9TZWxlY3Q9e25vdGhpbmdUb1NlbGVjdH1cbiAgICAgICAgICAgICAgb3BlbkFsZXJ0RGlhbG9nPXtvcGVuQWxlcnREaWFsb2d9XG4gICAgICAgICAgICAgIGhhbmRsZUVkaXRWZXJzZT17aGFuZGxlRWRpdFZlcnNlfVxuICAgICAgICAgICAgICBtYXhpbXVtU2VsZWN0aW9ucz17bWF4aW11bVNlbGVjdGlvbnN9XG4gICAgICAgICAgICAgIGhhbmRsZVRhZ3NDaGVja2JveD17aGFuZGxlVGFnc0NoZWNrYm94fVxuICAgICAgICAgICAgICB2YWxpZGF0ZVNlbGVjdGlvbnM9e3ZhbGlkYXRlU2VsZWN0aW9uc31cbiAgICAgICAgICAgICAgdGFyZ2V0TGFuZ3VhZ2VGb250PXt0YXJnZXRMYW5ndWFnZUZvbnR9XG4gICAgICAgICAgICAgIHVuZmlsdGVyZWRWZXJzZVRleHQ9e3VuZmlsdGVyZWRWZXJzZVRleHR9XG4gICAgICAgICAgICAgIGNoZWNrSWZWZXJzZUNoYW5nZWQ9e2NoZWNrSWZWZXJzZUNoYW5nZWR9XG4gICAgICAgICAgICAgIHRhcmdldExhbmd1YWdlRGV0YWlscz17dGFyZ2V0TGFuZ3VhZ2VEZXRhaWxzfVxuICAgICAgICAgICAgICBjaGVja0lmQ29tbWVudENoYW5nZWQ9e2NoZWNrSWZDb21tZW50Q2hhbmdlZH1cbiAgICAgICAgICAgICAgY2hhbmdlU2VsZWN0aW9uc0luTG9jYWxTdGF0ZT17Y2hhbmdlU2VsZWN0aW9uc0luTG9jYWxTdGF0ZX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8QWN0aW9uc0FyZWFcbiAgICAgICAgICAgICAgbW9kZT17bW9kZX1cbiAgICAgICAgICAgICAgdGFncz17dGFnc31cbiAgICAgICAgICAgICAgdG9nZ2xlTm90aGluZ1RvU2VsZWN0PXt0b2dnbGVOb3RoaW5nVG9TZWxlY3R9XG4gICAgICAgICAgICAgIGxvY2FsTm90aGluZ1RvU2VsZWN0PXtsb2NhbE5vdGhpbmdUb1NlbGVjdH1cbiAgICAgICAgICAgICAgbm90aGluZ1RvU2VsZWN0PXtub3RoaW5nVG9TZWxlY3R9XG4gICAgICAgICAgICAgIGlzQ29tbWVudENoYW5nZWQ9e2lzQ29tbWVudENoYW5nZWR9XG4gICAgICAgICAgICAgIHNlbGVjdGlvbnM9e3NlbGVjdGlvbnN9XG4gICAgICAgICAgICAgIG5ld1NlbGVjdGlvbnM9e25ld1NlbGVjdGlvbnN9XG4gICAgICAgICAgICAgIHRyYW5zbGF0ZT17dHJhbnNsYXRlfVxuICAgICAgICAgICAgICBib29rbWFya0VuYWJsZWQ9e2Jvb2ttYXJrRW5hYmxlZH1cbiAgICAgICAgICAgICAgc2F2ZVNlbGVjdGlvbj17c2F2ZVNlbGVjdGlvbn1cbiAgICAgICAgICAgICAgY2FuY2VsU2VsZWN0aW9uPXtjYW5jZWxTZWxlY3Rpb259XG4gICAgICAgICAgICAgIGNsZWFyU2VsZWN0aW9uPXtjbGVhclNlbGVjdGlvbn1cbiAgICAgICAgICAgICAgdG9nZ2xlQm9va21hcms9e3RvZ2dsZUJvb2ttYXJrfVxuICAgICAgICAgICAgICBjaGFuZ2VNb2RlPXtjaGFuZ2VNb2RlfVxuICAgICAgICAgICAgICBjYW5jZWxFZGl0VmVyc2U9e2NhbmNlbEVkaXRWZXJzZX1cbiAgICAgICAgICAgICAgc2F2ZUVkaXRWZXJzZT17c2F2ZUVkaXRWZXJzZX1cbiAgICAgICAgICAgICAgY2FuY2VsQ29tbWVudD17Y2FuY2VsQ29tbWVudH1cbiAgICAgICAgICAgICAgc2F2ZUNvbW1lbnQ9e3NhdmVDb21tZW50fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICB7c2F2ZUFyZWF9XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8RGlhbG9nQ29tcG9uZW50XG4gICAgICAgICAgaGFuZGxlU2tpcD17aGFuZGxlU2tpcH1cbiAgICAgICAgICBkaWFsb2dNb2RhbFZpc2liaWxpdHk9e2RpYWxvZ01vZGFsVmlzaWJpbGl0eX1cbiAgICAgICAgICBoYW5kbGVDbG9zZT17aGFuZGxlQ2xvc2VEaWFsb2d9XG4gICAgICAgICAgdHJhbnNsYXRlPXt0cmFuc2xhdGV9IC8+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cblxuVmVyc2VDaGVjay5wcm9wVHlwZXMgPSB7XG4gIHRyYW5zbGF0ZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgbW9kZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICB0YWdzOiBQcm9wVHlwZXMuYXJyYXkuaXNSZXF1aXJlZCxcbiAgc2VsZWN0aW9uczogUHJvcFR5cGVzLmFycmF5LmlzUmVxdWlyZWQsXG4gIG5ld1NlbGVjdGlvbnM6IFByb3BUeXBlcy5hcnJheS5pc1JlcXVpcmVkLFxuICBub3RoaW5nVG9TZWxlY3Q6IFByb3BUeXBlcy5ib29sLmlzUmVxdWlyZWQsXG4gIGlzVmVyc2VFZGl0ZWQ6IFByb3BUeXBlcy5ib29sLmlzUmVxdWlyZWQsXG4gIGNvbW1lbnRUZXh0OiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gIGJvb2ttYXJrRW5hYmxlZDogUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZCxcbiAgaXNWZXJzZUludmFsaWRhdGVkOiBQcm9wVHlwZXMuYm9vbC5pc1JlcXVpcmVkLFxuICBjb250ZXh0SWQ6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgdGFyZ2V0QmlibGU6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgYm9va0RldGFpbHM6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgdGFyZ2V0TGFuZ3VhZ2VEZXRhaWxzOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG4gIGFsaWduZWRHTFRleHQ6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgaXNDb21tZW50Q2hhbmdlZDogUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZCxcbiAgaXNWZXJzZUNoYW5nZWQ6IFByb3BUeXBlcy5ib29sLmlzUmVxdWlyZWQsXG4gIHZlcnNlVGV4dDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICB1bmZpbHRlcmVkVmVyc2VUZXh0OiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gIGRpYWxvZ01vZGFsVmlzaWJpbGl0eTogUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZCxcbiAgbG9jYWxOb3RoaW5nVG9TZWxlY3Q6IFByb3BUeXBlcy5ib29sLmlzUmVxdWlyZWQsXG4gIG1heGltdW1TZWxlY3Rpb25zOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4gIGhhbmRsZUNsb3NlRGlhbG9nOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICBoYW5kbGVHb1RvTmV4dDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgaGFuZGxlR29Ub1ByZXZpb3VzOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICBoYW5kbGVPcGVuRGlhbG9nOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICBvcGVuQWxlcnREaWFsb2c6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIHRvZ2dsZUJvb2ttYXJrOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICBjaGFuZ2VNb2RlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICBjYW5jZWxFZGl0VmVyc2U6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIHNhdmVFZGl0VmVyc2U6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIGhhbmRsZUNvbW1lbnQ6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIGNhbmNlbENvbW1lbnQ6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIHNhdmVDb21tZW50OiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICB0b2dnbGVOb3RoaW5nVG9TZWxlY3Q6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIHNhdmVTZWxlY3Rpb246IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIGNhbmNlbFNlbGVjdGlvbjogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgY2xlYXJTZWxlY3Rpb246IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIGhhbmRsZVNraXA6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIGhhbmRsZUVkaXRWZXJzZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgY2hlY2tJZlZlcnNlQ2hhbmdlZDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgY2hlY2tJZkNvbW1lbnRDaGFuZ2VkOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICB2YWxpZGF0ZVNlbGVjdGlvbnM6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIGhhbmRsZVRhZ3NDaGVja2JveDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgY2hhbmdlU2VsZWN0aW9uc0luTG9jYWxTdGF0ZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgbWFuaWZlc3Q6IFByb3BUeXBlcy5vYmplY3QsXG59O1xuXG5WZXJzZUNoZWNrLmRlZmF1bHRQcm9wcyA9IHtcbiAgdHJhbnNsYXRlOiBrZXkgPT4ga2V5LFxuICB2ZXJzZVRleHQ6ICcnLFxuICB1bmZpbHRlcmVkVmVyc2VUZXh0OiAnJyxcbiAgY29tbWVudFRleHQ6ICcnLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgVmVyc2VDaGVjaztcbiJdfQ==