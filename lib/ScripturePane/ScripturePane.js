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

require("./ScripturePane.styles.css");

var _Pane = _interopRequireDefault(require("./Pane"));

var _ExpandedScripturePaneModal = _interopRequireDefault(require("./ExpandedScripturePaneModal"));

var _AddBibleButton = _interopRequireDefault(require("./AddBibleButton"));

var _AddPaneModal = _interopRequireDefault(require("./AddPaneModal"));

var _verseHelpers = require("./helpers/verseHelpers");

// components
// helpers
// constant
var NAMESPACE = 'ScripturePane';

var ScripturePane = /*#__PURE__*/function (_Component) {
  (0, _inherits2["default"])(ScripturePane, _Component);

  function ScripturePane(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, ScripturePane);
    _this = (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(ScripturePane).call(this, props));
    _this.state = {
      showExpandedScripturePane: false,
      showAddPaneModal: false,
      selectedPane: false
    };
    _this.openExpandedScripturePane = _this.openExpandedScripturePane.bind((0, _assertThisInitialized2["default"])(_this));
    _this.closeExpandedScripturePane = _this.closeExpandedScripturePane.bind((0, _assertThisInitialized2["default"])(_this));
    _this.showAddBibleModal = _this.showAddBibleModal.bind((0, _assertThisInitialized2["default"])(_this));
    _this.hideAddBibleModal = _this.hideAddBibleModal.bind((0, _assertThisInitialized2["default"])(_this));
    _this.selectSourceLanguage = _this.selectSourceLanguage.bind((0, _assertThisInitialized2["default"])(_this));
    _this.addNewBibleResource = _this.addNewBibleResource.bind((0, _assertThisInitialized2["default"])(_this));
    _this.removePane = _this.removePane.bind((0, _assertThisInitialized2["default"])(_this));
    return _this;
  }

  (0, _createClass2["default"])(ScripturePane, [{
    key: "openExpandedScripturePane",
    value: function openExpandedScripturePane() {
      this.setState({
        showExpandedScripturePane: true
      });
      this.props.handleModalOpen(true);
    }
  }, {
    key: "closeExpandedScripturePane",
    value: function closeExpandedScripturePane() {
      this.setState({
        showExpandedScripturePane: false
      });
      this.props.handleModalOpen(false);
    }
  }, {
    key: "showAddBibleModal",
    value: function showAddBibleModal() {
      this.setState({
        showAddPaneModal: true
      });
      this.props.handleModalOpen(true);
    }
  }, {
    key: "hideAddBibleModal",
    value: function hideAddBibleModal() {
      this.setState({
        showAddPaneModal: false
      });
      this.props.handleModalOpen(false);
    }
  }, {
    key: "selectSourceLanguage",
    value: function selectSourceLanguage(value) {
      var identifier = value.split('_');
      var selectedBibleId = {
        languageId: identifier[0],
        bibleId: identifier[1]
      };
      this.setState({
        selectedPane: value ? selectedBibleId : false
      });
    }
  }, {
    key: "addNewBibleResource",
    value: function addNewBibleResource() {
      var _this$props = this.props,
          currentPaneSettings = _this$props.currentPaneSettings,
          setToolSettings = _this$props.setToolSettings,
          makeSureBiblesLoadedForTool = _this$props.makeSureBiblesLoadedForTool;

      try {
        if (currentPaneSettings) {
          if (this.state.selectedPane) {
            currentPaneSettings.push(this.state.selectedPane);
            setToolSettings(NAMESPACE, 'currentPaneSettings', currentPaneSettings);
            makeSureBiblesLoadedForTool();
            this.hideAddBibleModal();
          }
        }
      } catch (e) {
        console.warn(e);
      }
    }
  }, {
    key: "removePane",
    value: function removePane(key) {
      var _this$props2 = this.props,
          currentPaneSettings = _this$props2.currentPaneSettings,
          setToolSettings = _this$props2.setToolSettings;

      try {
        if (currentPaneSettings) {
          currentPaneSettings.splice(key, 1);
          setToolSettings(NAMESPACE, 'currentPaneSettings', currentPaneSettings);
        }
      } catch (e) {
        console.warn(e);
      }
    }
  }, {
    key: "getPanes",
    value: function getPanes() {
      var _this$props3 = this.props,
          currentPaneSettings = _this$props3.currentPaneSettings,
          contextId = _this$props3.contextId,
          translate = _this$props3.translate,
          bibles = _this$props3.bibles,
          selections = _this$props3.selections,
          getLexiconData = _this$props3.getLexiconData,
          showPopover = _this$props3.showPopover,
          projectManifest = _this$props3.projectDetailsReducer.manifest;
      var panes = [];

      for (var i = 0, len = currentPaneSettings.length; i < len; i++) {
        var paneSettings = currentPaneSettings[i];
        var index = i;

        try {
          var languageId = paneSettings.languageId,
              bibleId = paneSettings.bibleId;
          var manifest = bibles[languageId][bibleId].manifest;
          var language_name = manifest.language_name;
          var targetLanguageFont = projectManifest.languageFont || '';
          var _contextId$reference = contextId.reference,
              chapter = _contextId$reference.chapter,
              verse = _contextId$reference.verse;
          var verseData = bibles[languageId][bibleId][chapter][verse];
          var verseElements = []; // TODO: this is temporary hack, there is a later issue to make font size user adjustable

          var setFontSize = manifest.language_id === 'hbo' ? 175 : 0;

          if (languageId === 'targetLanguage' && bibleId === 'targetBible') {
            // if target bible/language, pull up actual name
            language_name = manifest.language_name + ' (' + manifest.language_id.toUpperCase() + ')';
          }

          var description = manifest.description;

          if (languageId === 'originalLanguage') {
            description = 'original_language';
          }

          if (typeof verseData === 'string') {
            // if the verse content is string.
            var isTargetBible = bibleId === 'targetBible';
            verseElements = (0, _verseHelpers.verseString)(verseData, selections, translate, setFontSize, isTargetBible, targetLanguageFont);
          } else if (verseData) {
            // else the verse content is an array of verse objects.
            verseElements = (0, _verseHelpers.verseArray)(verseData, bibleId, contextId, getLexiconData, showPopover, translate, setFontSize);
          }

          panes.push(_react["default"].createElement(_Pane["default"], {
            key: index.toString(),
            index: index,
            verse: verse,
            chapter: chapter,
            bibleId: bibleId,
            translate: translate,
            description: description,
            languageName: language_name,
            removePane: this.removePane,
            verseElements: verseElements,
            direction: manifest.direction,
            clickToRemoveResourceLabel: translate('pane.remove_resource')
          }));
        } catch (err) {
          console.warn(err);
        }
      }

      return panes;
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props4 = this.props,
          bibles = _this$props4.bibles,
          contextId = _this$props4.contextId,
          translate = _this$props4.translate,
          selections = _this$props4.selections,
          showPopover = _this$props4.showPopover,
          getLexiconData = _this$props4.getLexiconData,
          editTargetVerse = _this$props4.editTargetVerse,
          currentPaneSettings = _this$props4.currentPaneSettings,
          projectDetailsReducer = _this$props4.projectDetailsReducer,
          expandedScripturePaneTitle = _this$props4.expandedScripturePaneTitle,
          getAvailableScripturePaneSelections = _this$props4.getAvailableScripturePaneSelections;
      var projectManifest = projectDetailsReducer.manifest;
      var targetLanguageFont = projectManifest.languageFont || ''; // make sure bibles in currentPaneSettings are found in the bibles object in the resourcesReducer

      currentPaneSettings = currentPaneSettings.filter(function (paneSetting) {
        return bibles[paneSetting.languageId] && bibles[paneSetting.languageId][paneSetting.bibleId] ? true : false;
      });
      return _react["default"].createElement("div", {
        className: "scripture-pane-container"
      }, _react["default"].createElement("div", {
        className: "inner-container"
      }, _react["default"].createElement("div", {
        className: "title-bar"
      }, _react["default"].createElement("span", null, translate('pane.title')), _react["default"].createElement(_reactBootstrap.Glyphicon, {
        onClick: this.openExpandedScripturePane,
        glyph: 'fullscreen',
        style: {
          cursor: 'pointer'
        },
        title: translate('pane.expand_hover')
      })), _react["default"].createElement("div", {
        className: "panes-container"
      }, this.getPanes(), _react["default"].createElement(_AddBibleButton["default"], {
        showAddBibleModal: this.showAddBibleModal,
        clickAddResource: translate('pane.add_resource')
      }))), this.state.showExpandedScripturePane ? _react["default"].createElement(_ExpandedScripturePaneModal["default"], {
        bibles: bibles,
        contextId: contextId,
        translate: translate,
        selections: selections,
        showPopover: showPopover,
        getLexiconData: getLexiconData,
        editTargetVerse: editTargetVerse,
        primaryLabel: translate('close'),
        title: expandedScripturePaneTitle,
        targetLanguageFont: targetLanguageFont,
        onHide: this.closeExpandedScripturePane,
        currentPaneSettings: currentPaneSettings,
        show: this.state.showExpandedScripturePane,
        projectDetailsReducer: projectDetailsReducer,
        onFinishLoad: function onFinishLoad() {
          return _this2.setState({
            loadingExpandedScripturePane: false
          });
        }
      }) : _react["default"].createElement("div", null), this.state.showAddPaneModal ? _react["default"].createElement(_AddPaneModal["default"], {
        translate: translate,
        onHide: this.hideAddBibleModal,
        selectLabel: translate('select'),
        show: this.state.showAddPaneModal,
        selectedPane: this.state.selectedPane,
        currentPaneSettings: currentPaneSettings,
        title: translate('pane.add_resource_label'),
        addNewBibleResource: this.addNewBibleResource,
        selectSourceLanguage: this.selectSourceLanguage,
        selectLanguageLabel: translate('pane.select_language'),
        getAvailableScripturePaneSelections: getAvailableScripturePaneSelections
      }) : _react["default"].createElement("div", null));
    }
  }]);
  return ScripturePane;
}(_react.Component);

ScripturePane.defaultProps = {
  handleModalOpen: function handleModalOpen() {
    console.info('handleModalOpen prop was not passed.');
  }
};
ScripturePane.propTypes = {
  titleLabel: _propTypes["default"].string.isRequired,
  closeButtonLabel: _propTypes["default"].string.isRequired,
  addResourceLabel: _propTypes["default"].string.isRequired,
  clickToRemoveResourceLabel: _propTypes["default"].string.isRequired,
  expandedScripturePaneTitle: _propTypes["default"].string.isRequired,
  expandButtonHoverText: _propTypes["default"].string.isRequired,
  clickAddResource: _propTypes["default"].string.isRequired,
  currentPaneSettings: _propTypes["default"].array.isRequired,
  selectLanguageLabel: _propTypes["default"].string.isRequired,
  selectLabel: _propTypes["default"].string.isRequired,
  setToolSettings: _propTypes["default"].func.isRequired,
  contextId: _propTypes["default"].object.isRequired,
  selections: _propTypes["default"].array.isRequired,
  getLexiconData: _propTypes["default"].func.isRequired,
  showPopover: _propTypes["default"].func.isRequired,
  projectDetailsReducer: _propTypes["default"].object.isRequired,
  editTargetVerse: _propTypes["default"].func.isRequired,
  translate: _propTypes["default"].func.isRequired,
  bibles: _propTypes["default"].object.isRequired,
  getAvailableScripturePaneSelections: _propTypes["default"].func.isRequired,
  makeSureBiblesLoadedForTool: _propTypes["default"].func.isRequired,
  handleModalOpen: _propTypes["default"].func
};
var _default = ScripturePane;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9TY3JpcHR1cmVQYW5lL1NjcmlwdHVyZVBhbmUuanMiXSwibmFtZXMiOlsiTkFNRVNQQUNFIiwiU2NyaXB0dXJlUGFuZSIsInByb3BzIiwic3RhdGUiLCJzaG93RXhwYW5kZWRTY3JpcHR1cmVQYW5lIiwic2hvd0FkZFBhbmVNb2RhbCIsInNlbGVjdGVkUGFuZSIsIm9wZW5FeHBhbmRlZFNjcmlwdHVyZVBhbmUiLCJiaW5kIiwiY2xvc2VFeHBhbmRlZFNjcmlwdHVyZVBhbmUiLCJzaG93QWRkQmlibGVNb2RhbCIsImhpZGVBZGRCaWJsZU1vZGFsIiwic2VsZWN0U291cmNlTGFuZ3VhZ2UiLCJhZGROZXdCaWJsZVJlc291cmNlIiwicmVtb3ZlUGFuZSIsInNldFN0YXRlIiwiaGFuZGxlTW9kYWxPcGVuIiwidmFsdWUiLCJpZGVudGlmaWVyIiwic3BsaXQiLCJzZWxlY3RlZEJpYmxlSWQiLCJsYW5ndWFnZUlkIiwiYmlibGVJZCIsImN1cnJlbnRQYW5lU2V0dGluZ3MiLCJzZXRUb29sU2V0dGluZ3MiLCJtYWtlU3VyZUJpYmxlc0xvYWRlZEZvclRvb2wiLCJwdXNoIiwiZSIsImNvbnNvbGUiLCJ3YXJuIiwia2V5Iiwic3BsaWNlIiwiY29udGV4dElkIiwidHJhbnNsYXRlIiwiYmlibGVzIiwic2VsZWN0aW9ucyIsImdldExleGljb25EYXRhIiwic2hvd1BvcG92ZXIiLCJwcm9qZWN0TWFuaWZlc3QiLCJwcm9qZWN0RGV0YWlsc1JlZHVjZXIiLCJtYW5pZmVzdCIsInBhbmVzIiwiaSIsImxlbiIsImxlbmd0aCIsInBhbmVTZXR0aW5ncyIsImluZGV4IiwibGFuZ3VhZ2VfbmFtZSIsInRhcmdldExhbmd1YWdlRm9udCIsImxhbmd1YWdlRm9udCIsInJlZmVyZW5jZSIsImNoYXB0ZXIiLCJ2ZXJzZSIsInZlcnNlRGF0YSIsInZlcnNlRWxlbWVudHMiLCJzZXRGb250U2l6ZSIsImxhbmd1YWdlX2lkIiwidG9VcHBlckNhc2UiLCJkZXNjcmlwdGlvbiIsImlzVGFyZ2V0QmlibGUiLCJ0b1N0cmluZyIsImRpcmVjdGlvbiIsImVyciIsImVkaXRUYXJnZXRWZXJzZSIsImV4cGFuZGVkU2NyaXB0dXJlUGFuZVRpdGxlIiwiZ2V0QXZhaWxhYmxlU2NyaXB0dXJlUGFuZVNlbGVjdGlvbnMiLCJmaWx0ZXIiLCJwYW5lU2V0dGluZyIsImN1cnNvciIsImdldFBhbmVzIiwibG9hZGluZ0V4cGFuZGVkU2NyaXB0dXJlUGFuZSIsIkNvbXBvbmVudCIsImRlZmF1bHRQcm9wcyIsImluZm8iLCJwcm9wVHlwZXMiLCJ0aXRsZUxhYmVsIiwiUHJvcFR5cGVzIiwic3RyaW5nIiwiaXNSZXF1aXJlZCIsImNsb3NlQnV0dG9uTGFiZWwiLCJhZGRSZXNvdXJjZUxhYmVsIiwiY2xpY2tUb1JlbW92ZVJlc291cmNlTGFiZWwiLCJleHBhbmRCdXR0b25Ib3ZlclRleHQiLCJjbGlja0FkZFJlc291cmNlIiwiYXJyYXkiLCJzZWxlY3RMYW5ndWFnZUxhYmVsIiwic2VsZWN0TGFiZWwiLCJmdW5jIiwib2JqZWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOztBQUVBOztBQUNBOztBQUNBOztBQUNBOztBQUVBOztBQU5BO0FBS0E7QUFFQTtBQUNBLElBQU1BLFNBQVMsR0FBRyxlQUFsQjs7SUFFTUMsYTs7O0FBQ0oseUJBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQTtBQUNqQix5SEFBTUEsS0FBTjtBQUNBLFVBQUtDLEtBQUwsR0FBYTtBQUNYQyxNQUFBQSx5QkFBeUIsRUFBRSxLQURoQjtBQUVYQyxNQUFBQSxnQkFBZ0IsRUFBRSxLQUZQO0FBR1hDLE1BQUFBLFlBQVksRUFBRTtBQUhILEtBQWI7QUFLQSxVQUFLQyx5QkFBTCxHQUFpQyxNQUFLQSx5QkFBTCxDQUErQkMsSUFBL0IsZ0RBQWpDO0FBQ0EsVUFBS0MsMEJBQUwsR0FBa0MsTUFBS0EsMEJBQUwsQ0FBZ0NELElBQWhDLGdEQUFsQztBQUNBLFVBQUtFLGlC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cUMsc0JBQVVZLE1BQVYsQ0FBaUJWLFVBaEJoQjtBQWlCeEJmLEVBQUFBLGVBQWUsRUFBRWEsc0JBQVVXLElBQVYsQ0FBZVQsVUFqQlI7QUFrQnhCN0MsRUFBQUEsU0FBUyxFQUFFMkMsc0JBQVVXLElBQVYsQ0FBZVQsVUFsQkY7QUFtQnhCNUMsRUFBQUEsTUFBTSxFQUFFMEMsc0JBQVVZLE1BQVYsQ0FBaUJWLFVBbkJEO0FBb0J4QmIsRUFBQUEsbUNBQW1DLEVBQUVXLHNCQUFVVyxJQUFWLENBQWVULFVBcEI1QjtBQXFCeEJyRCxFQUFBQSwyQkFBMkIsRUFBRW1ELHNCQUFVVyxJQUFWLENBQWVULFVBckJwQjtBQXNCeEI5RCxFQUFBQSxlQUFlLEVBQUU0RCxzQkFBVVc7QUF0QkgsQ0FBMUI7ZUF5QmV0RixhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyBHbHlwaGljb24gfSBmcm9tICdyZWFjdC1ib290c3RyYXAnO1xuaW1wb3J0ICcuL1NjcmlwdHVyZVBhbmUuc3R5bGVzLmNzcyc7XG4vLyBjb21wb25lbnRzXG5pbXBvcnQgUGFuZSBmcm9tICcuL1BhbmUnO1xuaW1wb3J0IEV4cGFuZGVkU2NyaXB0dXJlUGFuZU1vZGFsIGZyb20gJy4vRXhwYW5kZWRTY3JpcHR1cmVQYW5lTW9kYWwnO1xuaW1wb3J0IEFkZEJpYmxlQnV0dG9uIGZyb20gJy4vQWRkQmlibGVCdXR0b24nO1xuaW1wb3J0IEFkZFBhbmVNb2RhbCBmcm9tICcuL0FkZFBhbmVNb2RhbCc7XG4vLyBoZWxwZXJzXG5pbXBvcnQgeyB2ZXJzZVN0cmluZywgdmVyc2VBcnJheSB9IGZyb20gJy4vaGVscGVycy92ZXJzZUhlbHBlcnMnO1xuLy8gY29uc3RhbnRcbmNvbnN0IE5BTUVTUEFDRSA9ICdTY3JpcHR1cmVQYW5lJztcblxuY2xhc3MgU2NyaXB0dXJlUGFuZSBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBzaG93RXhwYW5kZWRTY3JpcHR1cmVQYW5lOiBmYWxzZSxcbiAgICAgIHNob3dBZGRQYW5lTW9kYWw6IGZhbHNlLFxuICAgICAgc2VsZWN0ZWRQYW5lOiBmYWxzZSxcbiAgICB9O1xuICAgIHRoaXMub3BlbkV4cGFuZGVkU2NyaXB0dXJlUGFuZSA9IHRoaXMub3BlbkV4cGFuZGVkU2NyaXB0dXJlUGFuZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMuY2xvc2VFeHBhbmRlZFNjcmlwdHVyZVBhbmUgPSB0aGlzLmNsb3NlRXhwYW5kZWRTY3JpcHR1cmVQYW5lLmJpbmQodGhpcyk7XG4gICAgdGhpcy5zaG93QWRkQmlibGVNb2RhbCA9IHRoaXMuc2hvd0FkZEJpYmxlTW9kYWwuYmluZCh0aGlzKTtcbiAgICB0aGlzLmhpZGVBZGRCaWJsZU1vZGFsID0gdGhpcy5oaWRlQWRkQmlibGVNb2RhbC5iaW5kKHRoaXMpO1xuICAgIHRoaXMuc2VsZWN0U291cmNlTGFuZ3VhZ2UgPSB0aGlzLnNlbGVjdFNvdXJjZUxhbmd1YWdlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5hZGROZXdCaWJsZVJlc291cmNlID0gdGhpcy5hZGROZXdCaWJsZVJlc291cmNlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5yZW1vdmVQYW5lID0gdGhpcy5yZW1vdmVQYW5lLmJpbmQodGhpcyk7XG4gIH1cblxuICBvcGVuRXhwYW5kZWRTY3JpcHR1cmVQYW5lKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBzaG93RXhwYW5kZWRTY3JpcHR1cmVQYW5lOiB0cnVlIH0pO1xuICAgIHRoaXMucHJvcHMuaGFuZGxlTW9kYWxPcGVuKHRydWUpO1xuICB9XG5cbiAgY2xvc2VFeHBhbmRlZFNjcmlwdHVyZVBhbmUoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IHNob3dFeHBhbmRlZFNjcmlwdHVyZVBhbmU6IGZhbHNlIH0pO1xuICAgIHRoaXMucHJvcHMuaGFuZGxlTW9kYWxPcGVuKGZhbHNlKTtcbiAgfVxuXG4gIHNob3dBZGRCaWJsZU1vZGFsKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBzaG93QWRkUGFuZU1vZGFsOiB0cnVlIH0pO1xuICAgIHRoaXMucHJvcHMuaGFuZGxlTW9kYWxPcGVuKHRydWUpO1xuICB9XG5cbiAgaGlkZUFkZEJpYmxlTW9kYWwoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IHNob3dBZGRQYW5lTW9kYWw6IGZhbHNlIH0pO1xuICAgIHRoaXMucHJvcHMuaGFuZGxlTW9kYWxPcGVuKGZhbHNlKTtcbiAgfVxuXG4gIHNlbGVjdFNvdXJjZUxhbmd1YWdlKHZhbHVlKSB7XG4gICAgY29uc3QgaWRlbnRpZmllciA9IHZhbHVlLnNwbGl0KCdfJyk7XG4gICAgY29uc3Qgc2VsZWN0ZWRCaWJsZUlkID0ge1xuICAgICAgbGFuZ3VhZ2VJZDogaWRlbnRpZmllclswXSxcbiAgICAgIGJpYmxlSWQ6IGlkZW50aWZpZXJbMV0sXG4gICAgfTtcbiAgICB0aGlzLnNldFN0YXRlKHsgc2VsZWN0ZWRQYW5lOiB2YWx1ZSA/IHNlbGVjdGVkQmlibGVJZCA6IGZhbHNlIH0pO1xuICB9XG5cbiAgYWRkTmV3QmlibGVSZXNvdXJjZSgpIHtcbiAgICBsZXQge1xuICAgICAgY3VycmVudFBhbmVTZXR0aW5ncywgc2V0VG9vbFNldHRpbmdzLCBtYWtlU3VyZUJpYmxlc0xvYWRlZEZvclRvb2wsXG4gICAgfSA9IHRoaXMucHJvcHM7XG5cbiAgICB0cnkge1xuICAgICAgaWYgKGN1cnJlbnRQYW5lU2V0dGluZ3MpIHtcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUuc2VsZWN0ZWRQYW5lKSB7XG4gICAgICAgICAgY3VycmVudFBhbmVTZXR0aW5ncy5wdXNoKHRoaXMuc3RhdGUuc2VsZWN0ZWRQYW5lKTtcbiAgICAgICAgICBzZXRUb29sU2V0dGluZ3MoTkFNRVNQQUNFLCAnY3VycmVudFBhbmVTZXR0aW5ncycsIGN1cnJlbnRQYW5lU2V0dGluZ3MpO1xuICAgICAgICAgIG1ha2VTdXJlQmlibGVzTG9hZGVkRm9yVG9vbCgpO1xuICAgICAgICAgIHRoaXMuaGlkZUFkZEJpYmxlTW9kYWwoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGNvbnNvbGUud2FybihlKTtcbiAgICB9XG4gIH1cblxuICByZW1vdmVQYW5lKGtleSkge1xuICAgIGxldCB7IGN1cnJlbnRQYW5lU2V0dGluZ3MsIHNldFRvb2xTZXR0aW5ncyB9ID0gdGhpcy5wcm9wcztcblxuICAgIHRyeSB7XG4gICAgICBpZiAoY3VycmVudFBhbmVTZXR0aW5ncykge1xuICAgICAgICBjdXJyZW50UGFuZVNldHRpbmdzLnNwbGljZShrZXksIDEpO1xuICAgICAgICBzZXRUb29sU2V0dGluZ3MoTkFNRVNQQUNFLCAnY3VycmVudFBhbmVTZXR0aW5ncycsIGN1cnJlbnRQYW5lU2V0dGluZ3MpO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGNvbnNvbGUud2FybihlKTtcbiAgICB9XG4gIH1cblxuICBnZXRQYW5lcygpIHtcbiAgICBjb25zdCB7XG4gICAgICBjdXJyZW50UGFuZVNldHRpbmdzLFxuICAgICAgY29udGV4dElkLFxuICAgICAgdHJhbnNsYXRlLFxuICAgICAgYmlibGVzLFxuICAgICAgc2VsZWN0aW9ucyxcbiAgICAgIGdldExleGljb25EYXRhLFxuICAgICAgc2hvd1BvcG92ZXIsXG4gICAgICBwcm9qZWN0RGV0YWlsc1JlZHVjZXI6IHsgbWFuaWZlc3Q6IHByb2plY3RNYW5pZmVzdCB9LFxuICAgIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgY29uc3QgcGFuZXMgPSBbXTtcblxuICAgIGZvciAobGV0IGkgPSAwLCBsZW4gPSBjdXJyZW50UGFuZVNldHRpbmdzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICBjb25zdCBwYW5lU2V0dGluZ3MgPSBjdXJyZW50UGFuZVNldHRpbmdzW2ldO1xuICAgICAgY29uc3QgaW5kZXggPSBpO1xuXG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCB7IGxhbmd1YWdlSWQsIGJpYmxlSWQgfSA9IHBhbmVTZXR0aW5ncztcbiAgICAgICAgY29uc3QgeyBtYW5pZmVzdCB9ID0gYmlibGVzW2xhbmd1YWdlSWRdW2JpYmxlSWRdO1xuICAgICAgICBsZXQgbGFuZ3VhZ2VfbmFtZSA9IG1hbmlmZXN0Lmxhbmd1YWdlX25hbWU7XG4gICAgICAgIGNvbnN0IHRhcmdldExhbmd1YWdlRm9udCA9IHByb2plY3RNYW5pZmVzdC5sYW5ndWFnZUZvbnQgfHwgJyc7XG4gICAgICAgIGNvbnN0IHsgY2hhcHRlciwgdmVyc2UgfSA9IGNvbnRleHRJZC5yZWZlcmVuY2U7XG4gICAgICAgIGNvbnN0IHZlcnNlRGF0YSA9IGJpYmxlc1tsYW5ndWFnZUlkXVtiaWJsZUlkXVtjaGFwdGVyXVt2ZXJzZV07XG4gICAgICAgIGxldCB2ZXJzZUVsZW1lbnRzID0gW107XG5cbiAgICAgICAgLy8gVE9ETzogdGhpcyBpcyB0ZW1wb3JhcnkgaGFjaywgdGhlcmUgaXMgYSBsYXRlciBpc3N1ZSB0byBtYWtlIGZvbnQgc2l6ZSB1c2VyIGFkanVzdGFibGVcbiAgICAgICAgY29uc3Qgc2V0Rm9udFNpemUgPSAobWFuaWZlc3QubGFuZ3VhZ2VfaWQgPT09ICdoYm8nKSA/IDE3NSA6IDA7XG5cbiAgICAgICAgaWYgKChsYW5ndWFnZUlkID09PSAndGFyZ2V0TGFuZ3VhZ2UnKSAmJiAoYmlibGVJZCA9PT0gJ3RhcmdldEJpYmxlJykpIHsgLy8gaWYgdGFyZ2V0IGJpYmxlL2xhbmd1YWdlLCBwdWxsIHVwIGFjdHVhbCBuYW1lXG4gICAgICAgICAgbGFuZ3VhZ2VfbmFtZSA9IG1hbmlmZXN0Lmxhbmd1YWdlX25hbWUgKyAnICgnICsgbWFuaWZlc3QubGFuZ3VhZ2VfaWQudG9VcHBlckNhc2UoKSArICcpJztcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBkZXNjcmlwdGlvbiA9IG1hbmlmZXN0LmRlc2NyaXB0aW9uO1xuXG4gICAgICAgIGlmIChsYW5ndWFnZUlkID09PSAnb3JpZ2luYWxMYW5ndWFnZScpIHtcbiAgICAgICAgICBkZXNjcmlwdGlvbiA9ICdvcmlnaW5hbF9sYW5ndWFnZSc7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodHlwZW9mIHZlcnNlRGF0YSA9PT0gJ3N0cmluZycpIHsgLy8gaWYgdGhlIHZlcnNlIGNvbnRlbnQgaXMgc3RyaW5nLlxuICAgICAgICAgIGNvbnN0IGlzVGFyZ2V0QmlibGUgPSBiaWJsZUlkID09PSAndGFyZ2V0QmlibGUnO1xuICAgICAgICAgIHZlcnNlRWxlbWVudHMgPSB2ZXJzZVN0cmluZyh2ZXJzZURhdGEsIHNlbGVjdGlvbnMsIHRyYW5zbGF0ZSwgc2V0Rm9udFNpemUsIGlzVGFyZ2V0QmlibGUsIHRhcmdldExhbmd1YWdlRm9udCk7XG4gICAgICAgIH0gZWxzZSBpZiAodmVyc2VEYXRhKSB7IC8vIGVsc2UgdGhlIHZlcnNlIGNvbnRlbnQgaXMgYW4gYXJyYXkgb2YgdmVyc2Ugb2JqZWN0cy5cbiAgICAgICAgICB2ZXJzZUVsZW1lbnRzID0gdmVyc2VBcnJheSh2ZXJzZURhdGEsIGJpYmxlSWQsIGNvbnRleHRJZCwgZ2V0TGV4aWNvbkRhdGEsIHNob3dQb3BvdmVyLCB0cmFuc2xhdGUsIHNldEZvbnRTaXplKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHBhbmVzLnB1c2goXG4gICAgICAgICAgPFBhbmVcbiAgICAgICAgICAgIGtleT17aW5kZXgudG9TdHJpbmcoKX1cbiAgICAgICAgICAgIGluZGV4PXtpbmRleH1cbiAgICAgICAgICAgIHZlcnNlPXt2ZXJzZX1cbiAgICAgICAgICAgIGNoYXB0ZXI9e2NoYXB0ZXJ9XG4gICAgICAgICAgICBiaWJsZUlkPXtiaWJsZUlkfVxuICAgICAgICAgICAgdHJhbnNsYXRlPXt0cmFuc2xhdGV9XG4gICAgICAgICAgICBkZXNjcmlwdGlvbj17ZGVzY3JpcHRpb259XG4gICAgICAgICAgICBsYW5ndWFnZU5hbWU9e2xhbmd1YWdlX25hbWV9XG4gICAgICAgICAgICByZW1vdmVQYW5lPXt0aGlzLnJlbW92ZVBhbmV9XG4gICAgICAgICAgICB2ZXJzZUVsZW1lbnRzPXt2ZXJzZUVsZW1lbnRzfVxuICAgICAgICAgICAgZGlyZWN0aW9uPXttYW5pZmVzdC5kaXJlY3Rpb259XG4gICAgICAgICAgICBjbGlja1RvUmVtb3ZlUmVzb3VyY2VMYWJlbD17dHJhbnNsYXRlKCdwYW5lLnJlbW92ZV9yZXNvdXJjZScpfVxuICAgICAgICAgIC8+LFxuICAgICAgICApO1xuICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIGNvbnNvbGUud2FybihlcnIpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBwYW5lcztcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBsZXQge1xuICAgICAgYmlibGVzLFxuICAgICAgY29udGV4dElkLFxuICAgICAgdHJhbnNsYXRlLFxuICAgICAgc2VsZWN0aW9ucyxcbiAgICAgIHNob3dQb3BvdmVyLFxuICAgICAgZ2V0TGV4aWNvbkRhdGEsXG4gICAgICBlZGl0VGFyZ2V0VmVyc2UsXG4gICAgICBjdXJyZW50UGFuZVNldHRpbmdzLFxuICAgICAgcHJvamVjdERldGFpbHNSZWR1Y2VyLFxuICAgICAgZXhwYW5kZWRTY3JpcHR1cmVQYW5lVGl0bGUsXG4gICAgICBnZXRBdmFpbGFibGVTY3JpcHR1cmVQYW5lU2VsZWN0aW9ucyxcbiAgICB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB7IG1hbmlmZXN0OiBwcm9qZWN0TWFuaWZlc3QgfSA9IHByb2plY3REZXRhaWxzUmVkdWNlcjtcbiAgICBjb25zdCB0YXJnZXRMYW5ndWFnZUZvbnQgPSBwcm9qZWN0TWFuaWZlc3QubGFuZ3VhZ2VGb250IHx8ICcnO1xuXG4gICAgLy8gbWFrZSBzdXJlIGJpYmxlcyBpbiBjdXJyZW50UGFuZVNldHRpbmdzIGFyZSBmb3VuZCBpbiB0aGUgYmlibGVzIG9iamVjdCBpbiB0aGUgcmVzb3VyY2VzUmVkdWNlclxuICAgIGN1cnJlbnRQYW5lU2V0dGluZ3MgPSBjdXJyZW50UGFuZVNldHRpbmdzLmZpbHRlcigocGFuZVNldHRpbmcpID0+IGJpYmxlc1twYW5lU2V0dGluZy5sYW5ndWFnZUlkXSAmJiBiaWJsZXNbcGFuZVNldHRpbmcubGFuZ3VhZ2VJZF1bcGFuZVNldHRpbmcuYmlibGVJZF0gPyB0cnVlIDogZmFsc2UpO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2NyaXB0dXJlLXBhbmUtY29udGFpbmVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5uZXItY29udGFpbmVyXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aXRsZS1iYXJcIj5cbiAgICAgICAgICAgIDxzcGFuPnt0cmFuc2xhdGUoJ3BhbmUudGl0bGUnKX08L3NwYW4+XG4gICAgICAgICAgICA8R2x5cGhpY29uXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMub3BlbkV4cGFuZGVkU2NyaXB0dXJlUGFuZX1cbiAgICAgICAgICAgICAgZ2x5cGg9eydmdWxsc2NyZWVuJ31cbiAgICAgICAgICAgICAgc3R5bGU9e3sgY3Vyc29yOiAncG9pbnRlcicgfX1cbiAgICAgICAgICAgICAgdGl0bGU9e3RyYW5zbGF0ZSgncGFuZS5leHBhbmRfaG92ZXInKX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYW5lcy1jb250YWluZXJcIj5cbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgdGhpcy5nZXRQYW5lcygpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICA8QWRkQmlibGVCdXR0b25cbiAgICAgICAgICAgICAgc2hvd0FkZEJpYmxlTW9kYWw9e3RoaXMuc2hvd0FkZEJpYmxlTW9kYWx9XG4gICAgICAgICAgICAgIGNsaWNrQWRkUmVzb3VyY2U9e3RyYW5zbGF0ZSgncGFuZS5hZGRfcmVzb3VyY2UnKX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICB7XG4gICAgICAgICAgdGhpcy5zdGF0ZS5zaG93RXhwYW5kZWRTY3JpcHR1cmVQYW5lID9cbiAgICAgICAgICAgIDxFeHBhbmRlZFNjcmlwdHVyZVBhbmVNb2RhbFxuICAgICAgICAgICAgICBiaWJsZXM9e2JpYmxlc31cbiAgICAgICAgICAgICAgY29udGV4dElkPXtjb250ZXh0SWR9XG4gICAgICAgICAgICAgIHRyYW5zbGF0ZT17dHJhbnNsYXRlfVxuICAgICAgICAgICAgICBzZWxlY3Rpb25zPXtzZWxlY3Rpb25zfVxuICAgICAgICAgICAgICBzaG93UG9wb3Zlcj17c2hvd1BvcG92ZXJ9XG4gICAgICAgICAgICAgIGdldExleGljb25EYXRhPXtnZXRMZXhpY29uRGF0YX1cbiAgICAgICAgICAgICAgZWRpdFRhcmdldFZlcnNlPXtlZGl0VGFyZ2V0VmVyc2V9XG4gICAgICAgICAgICAgIHByaW1hcnlMYWJlbD17dHJhbnNsYXRlKCdjbG9zZScpfVxuICAgICAgICAgICAgICB0aXRsZT17ZXhwYW5kZWRTY3JpcHR1cmVQYW5lVGl0bGV9XG4gICAgICAgICAgICAgIHRhcmdldExhbmd1YWdlRm9udD17dGFyZ2V0TGFuZ3VhZ2VGb250fVxuICAgICAgICAgICAgICBvbkhpZGU9e3RoaXMuY2xvc2VFeHBhbmRlZFNjcmlwdHVyZVBhbmV9XG4gICAgICAgICAgICAgIGN1cnJlbnRQYW5lU2V0dGluZ3M9e2N1cnJlbnRQYW5lU2V0dGluZ3N9XG4gICAgICAgICAgICAgIHNob3c9e3RoaXMuc3RhdGUuc2hvd0V4cGFuZGVkU2NyaXB0dXJlUGFuZX1cbiAgICAgICAgICAgICAgcHJvamVjdERldGFpbHNSZWR1Y2VyPXtwcm9qZWN0RGV0YWlsc1JlZHVjZXJ9XG4gICAgICAgICAgICAgIG9uRmluaXNoTG9hZD17KCkgPT4gdGhpcy5zZXRTdGF0ZSh7IGxvYWRpbmdFeHBhbmRlZFNjcmlwdHVyZVBhbmU6IGZhbHNlIH0pfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDpcbiAgICAgICAgICAgIDxkaXYvPlxuICAgICAgICB9XG4gICAgICAgIHtcbiAgICAgICAgICB0aGlzLnN0YXRlLnNob3dBZGRQYW5lTW9kYWwgP1xuICAgICAgICAgICAgPEFkZFBhbmVNb2RhbFxuICAgICAgICAgICAgICB0cmFuc2xhdGU9e3RyYW5zbGF0ZX1cbiAgICAgICAgICAgICAgb25IaWRlPXt0aGlzLmhpZGVBZGRCaWJsZU1vZGFsfVxuICAgICAgICAgICAgICBzZWxlY3RMYWJlbD17dHJhbnNsYXRlKCdzZWxlY3QnKX1cbiAgICAgICAgICAgICAgc2hvdz17dGhpcy5zdGF0ZS5zaG93QWRkUGFuZU1vZGFsfVxuICAgICAgICAgICAgICBzZWxlY3RlZFBhbmU9e3RoaXMuc3RhdGUuc2VsZWN0ZWRQYW5lfVxuICAgICAgICAgICAgICBjdXJyZW50UGFuZVNldHRpbmdzPXtjdXJyZW50UGFuZVNldHRpbmdzfVxuICAgICAgICAgICAgICB0aXRsZT17dHJhbnNsYXRlKCdwYW5lLmFkZF9yZXNvdXJjZV9sYWJlbCcpfVxuICAgICAgICAgICAgICBhZGROZXdCaWJsZVJlc291cmNlPXt0aGlzLmFkZE5ld0JpYmxlUmVzb3VyY2V9XG4gICAgICAgICAgICAgIHNlbGVjdFNvdXJjZUxhbmd1YWdlPXt0aGlzLnNlbGVjdFNvdXJjZUxhbmd1YWdlfVxuICAgICAgICAgICAgICBzZWxlY3RMYW5ndWFnZUxhYmVsPXt0cmFuc2xhdGUoJ3BhbmUuc2VsZWN0X2xhbmd1YWdlJyl9XG4gICAgICAgICAgICAgIGdldEF2YWlsYWJsZVNjcmlwdHVyZVBhbmVTZWxlY3Rpb25zPXtnZXRBdmFpbGFibGVTY3JpcHR1cmVQYW5lU2VsZWN0aW9uc31cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA6XG4gICAgICAgICAgICA8ZGl2Lz5cbiAgICAgICAgfVxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5TY3JpcHR1cmVQYW5lLmRlZmF1bHRQcm9wcyA9IHtcbiAgaGFuZGxlTW9kYWxPcGVuOiAoKSA9PiB7XG4gICAgY29uc29sZS5pbmZvKCdoYW5kbGVNb2RhbE9wZW4gcHJvcCB3YXMgbm90IHBhc3NlZC4nKTtcbiAgfSxcbn07XG5cblNjcmlwdHVyZVBhbmUucHJvcFR5cGVzID0ge1xuICB0aXRsZUxhYmVsOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gIGNsb3NlQnV0dG9uTGFiZWw6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgYWRkUmVzb3VyY2VMYWJlbDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICBjbGlja1RvUmVtb3ZlUmVzb3VyY2VMYWJlbDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICBleHBhbmRlZFNjcmlwdHVyZVBhbmVUaXRsZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICBleHBhbmRCdXR0b25Ib3ZlclRleHQ6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgY2xpY2tBZGRSZXNvdXJjZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICBjdXJyZW50UGFuZVNldHRpbmdzOiBQcm9wVHlwZXMuYXJyYXkuaXNSZXF1aXJlZCxcbiAgc2VsZWN0TGFuZ3VhZ2VMYWJlbDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICBzZWxlY3RMYWJlbDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICBzZXRUb29sU2V0dGluZ3M6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIGNvbnRleHRJZDogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuICBzZWxlY3Rpb25zOiBQcm9wVHlwZXMuYXJyYXkuaXNSZXF1aXJlZCxcbiAgZ2V0TGV4aWNvbkRhdGE6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIHNob3dQb3BvdmVyOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICBwcm9qZWN0RGV0YWlsc1JlZHVjZXI6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgZWRpdFRhcmdldFZlcnNlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICB0cmFuc2xhdGU6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIGJpYmxlczogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuICBnZXRBdmFpbGFibGVTY3JpcHR1cmVQYW5lU2VsZWN0aW9uczogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgbWFrZVN1cmVCaWJsZXNMb2FkZWRGb3JUb29sOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICBoYW5kbGVNb2RhbE9wZW46IFByb3BUeXBlcy5mdW5jLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgU2NyaXB0dXJlUGFuZTtcbiJdfQ==