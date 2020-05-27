"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _path = _interopRequireDefault(require("path"));

var _fsExtra = _interopRequireDefault(require("fs-extra"));

var _react = _interopRequireDefault(require("react"));

var _reactTestRenderer = _interopRequireDefault(require("react-test-renderer"));

var _VerseCheck = _interopRequireDefault(require("../VerseCheck"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var mock_translate = function mock_translate(text) {
  return text;
};

var base_props = _fsExtra["default"].readJsonSync(_path["default"].join('./src/VerseCheck/__tests__/fixtures/project/loadedProjectShortened.json'));

var currentInvalidated = false;
var currentEdited = false;
describe('VerseCheck component:', function () {
  currentInvalidated = false;
  currentEdited = false;
  test('Integrated View test', function () {
    // given
    var props = getBasePropertiesAndMockActions();
    currentInvalidated = false;
    currentEdited = false; // when

    var component = _reactTestRenderer["default"].create(_react["default"].createElement(_VerseCheck["default"], props)); // then


    expect(component.toJSON()).toMatchSnapshot();
  });
  test('Integrated View test with verseEdit', function () {
    // given
    var props = getBasePropertiesAndMockActions();
    currentInvalidated = false;
    currentEdited = true; // when

    var component = _reactTestRenderer["default"].create(_react["default"].createElement(_VerseCheck["default"], props)); // then


    expect(component.toJSON()).toMatchSnapshot();
  });
  test('Integrated View test with invalidated', function () {
    // given
    var props = getBasePropertiesAndMockActions();
    currentInvalidated = true;
    currentEdited = false; // when

    var component = _reactTestRenderer["default"].create(_react["default"].createElement(_VerseCheck["default"], props)); // then


    expect(component.toJSON()).toMatchSnapshot();
  });
  test('Integrated View test with default and invalidated', function () {
    // given
    var props = getBasePropertiesAndMockActions();
    props.mode = ''; // default mode

    currentInvalidated = true;
    currentEdited = false; // when

    var component = _reactTestRenderer["default"].create(_react["default"].createElement(_VerseCheck["default"], props)); // then


    expect(component.toJSON()).toMatchSnapshot();
  });
  test('Integrated View test - edit mode', function () {
    // given
    var props = getBasePropertiesAndMockActions();
    currentInvalidated = false;
    currentEdited = false;
    props.mode = 'edit'; // when

    var component = _reactTestRenderer["default"].create(_react["default"].createElement(_VerseCheck["default"], props)); // then


    expect(component.toJSON()).toMatchSnapshot();
  });
}); //
// helpers
//

function addMockActions(props) {
  props.actions = {
    handleGoToNext: function handleGoToNext() {
      return jest.fn();
    },
    handleGoToPrevious: function handleGoToPrevious() {
      return jest.fn();
    },
    handleOpenDialog: function handleOpenDialog() {
      return jest.fn();
    },
    handleCloseDialog: function handleCloseDialog() {
      return jest.fn();
    },
    skipToNext: function skipToNext() {
      return jest.fn();
    },
    skipToPrevious: function skipToPrevious() {
      return jest.fn();
    },
    changeSelectionsInLocalState: function changeSelectionsInLocalState() {
      return jest.fn();
    },
    changeMode: function changeMode() {
      return jest.fn();
    },
    handleComment: function handleComment() {
      return jest.fn();
    },
    checkComment: function checkComment() {
      return jest.fn();
    },
    cancelComment: function cancelComment() {
      return jest.fn();
    },
    saveComment: function saveComment() {
      return jest.fn();
    },
    handleTagsCheckbox: function handleTagsCheckbox() {
      return jest.fn();
    },
    handleEditVerse: function handleEditVerse() {
      return jest.fn();
    },
    checkVerse: function checkVerse() {
      return jest.fn();
    },
    cancelEditVerse: function cancelEditVerse() {
      return jest.fn();
    },
    saveEditVerse: function saveEditVerse() {
      return jest.fn();
    },
    validateSelections: function validateSelections() {
      return jest.fn();
    },
    toggleBookmark: function toggleBookmark() {
      return jest.fn();
    },
    openAlertDialog: function openAlertDialog() {
      return jest.fn();
    },
    selectModalTab: function selectModalTab() {
      return jest.fn();
    },
    cancelSelection: function cancelSelection() {
      return jest.fn();
    },
    clearSelection: function clearSelection() {
      return jest.fn();
    },
    saveSelection: function saveSelection() {
      return jest.fn();
    }
  };
  return _objectSpread({}, props, {
    translate: mock_translate,
    cancelSelection: function cancelSelection() {
      return jest.fn();
    },
    clearSelection: function clearSelection() {
      return jest.fn();
    },
    saveSelection: function saveSelection() {
      return jest.fn();
    },
    toggleNothingToSelect: function toggleNothingToSelect() {
      return jest.fn();
    },
    goToNextOrPrevious: 'next',
    findIfVerseEdited: jest.fn(function () {
      return currentEdited;
    }),
    findIfVerseInvalidated: jest.fn(function () {
      return currentInvalidated;
    }),
    manifest: {
      languageFont: 'default'
    }
  });
}

function getBasePropertiesAndMockActions() {
  // clone properties so we can modify before test
  var props = base_props;
  console.log(base_props);
  console.log('base_props');
  props = addMockActions(props);
  return props;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9WZXJzZUNoZWNrL19fdGVzdHNfXy9WaWV3Q2hlY2sudGVzdC5qcyJdLCJuYW1lcyI6WyJtb2NrX3RyYW5zbGF0ZSIsInRleHQiLCJiYXNlX3Byb3BzIiwiZnMiLCJyZWFkSnNvblN5bmMiLCJwYXRoIiwiam9pbiIsImN1cnJlbnRJbnZhbGlkYXRlZCIsImN1cnJlbnRFZGl0ZWQiLCJkZXNjcmliZSIsInRlc3QiLCJwcm9wcyIsImdldEJhc2VQcm9wZXJ0aWVzQW5kTW9ja0FjdGlvbnMiLCJjb21wb25lbnQiLCJyZW5kZXJlciIsImNyZWF0ZSIsImV4cGVjdCIsInRvSlNPTiIsInRvTWF0Y2hTbmFwc2hvdCIsIm1vZGUiLCJhZGRNb2NrQWN0aW9ucyIsImFjdGlvbnMiLCJoYW5kbGVHb1RvTmV4dCIsImplc3QiLCJmbiIsImhhbmRsZUdvVG9QcmV2aW91cyIsImhhbmRsZU9wZW5EaWFsb2ciLCJoYW5kbGVDbG9zZURpYWxvZyIsInNraXBUb05leHQiLCJza2lwVG9QcmV2aW91cyIsImNoYW5nZVNlbGVjdGlvbnNJbkxvY2FsU3RhdGUiLCJjaGFuZ2VNb2RlIiwiaGFuZGxlQ29tbWVudCIsImNoZWNrQ29tbWVudCIsImNhbmNlbENvbW1lbnQiLCJzYXZlQ29tbWVudCIsImhhbmRsZVRhZ3NDaGVja2JveCIsImhhbmRsZUVkaXRWZXJzZSIsImNoZWNrVmVyc2UiLCJjYW5jZWxFZGl0VmVyc2UiLCJzYXZlRWRpdFZlcnNlIiwidmFsaWRhdGVTZWxlY3Rpb25zIiwidG9nZ2xlQm9va21hcmsiLCJvcGVuQWxlcnREaWFsb2ciLCJzZWxlY3RNb2RhbFRhYiIsImNhbmNlbFNlbGVjdGlvbiIsImNsZWFyU2VsZWN0aW9uIiwic2F2ZVNlbGVjdGlvbiIsInRyYW5zbGF0ZSIsInRvZ2dsZU5vdGhpbmdUb1NlbGVjdCIsImdvVG9OZXh0T3JQcmV2aW91cyIsImZpbmRJZlZlcnNlRWRpdGVkIiwiZmluZElmVmVyc2VJbnZhbGlkYXRlZCIsIm1hbmlm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UyxjQUFjLENBQUNULEtBQUQsQ0FBdEI7QUFDQSxTQUFPQSxLQUFQO0FBQ0QiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZW52IGplc3QgKi9cbmltcG9ydCBwYXRoIGZyb20gJ3BhdGgnO1xuaW1wb3J0IGZzIGZyb20gJ2ZzLWV4dHJhJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgcmVuZGVyZXIgZnJvbSAncmVhY3QtdGVzdC1yZW5kZXJlcic7XG5pbXBvcnQgVmVyc2VDaGVjayBmcm9tICcuLi9WZXJzZUNoZWNrJztcblxuY29uc3QgbW9ja190cmFuc2xhdGUgPSAodGV4dCkgPT4gKHRleHQpO1xuY29uc3QgYmFzZV9wcm9wcyA9IGZzLnJlYWRKc29uU3luYyhwYXRoLmpvaW4oJy4vc3JjL1ZlcnNlQ2hlY2svX190ZXN0c19fL2ZpeHR1cmVzL3Byb2plY3QvbG9hZGVkUHJvamVjdFNob3J0ZW5lZC5qc29uJykpO1xubGV0IGN1cnJlbnRJbnZhbGlkYXRlZCA9IGZhbHNlO1xubGV0IGN1cnJlbnRFZGl0ZWQgPSBmYWxzZTtcblxuZGVzY3JpYmUoJ1ZlcnNlQ2hlY2sgY29tcG9uZW50OicsICgpID0+IHtcbiAgY3VycmVudEludmFsaWRhdGVkID0gZmFsc2U7XG4gIGN1cnJlbnRFZGl0ZWQgPSBmYWxzZTtcblxuICB0ZXN0KCdJbnRlZ3JhdGVkIFZpZXcgdGVzdCcsICgpID0+IHtcbiAgICAvLyBnaXZlblxuICAgIGNvbnN0IHByb3BzID0gZ2V0QmFzZVByb3BlcnRpZXNBbmRNb2NrQWN0aW9ucygpO1xuICAgIGN1cnJlbnRJbnZhbGlkYXRlZCA9IGZhbHNlO1xuICAgIGN1cnJlbnRFZGl0ZWQgPSBmYWxzZTtcblxuICAgIC8vIHdoZW5cbiAgICBjb25zdCBjb21wb25lbnQgPSByZW5kZXJlci5jcmVhdGUoXG4gICAgICA8VmVyc2VDaGVjayB7Li4ucHJvcHN9IC8+LFxuICAgICk7XG5cbiAgICAvLyB0aGVuXG4gICAgZXhwZWN0KGNvbXBvbmVudC50b0pTT04oKSkudG9NYXRjaFNuYXBzaG90KCk7XG4gIH0pO1xuXG4gIHRlc3QoJ0ludGVncmF0ZWQgVmlldyB0ZXN0IHdpdGggdmVyc2VFZGl0JywgKCkgPT4ge1xuICAgIC8vIGdpdmVuXG4gICAgY29uc3QgcHJvcHMgPSBnZXRCYXNlUHJvcGVydGllc0FuZE1vY2tBY3Rpb25zKCk7XG4gICAgY3VycmVudEludmFsaWRhdGVkID0gZmFsc2U7XG4gICAgY3VycmVudEVkaXRlZCA9IHRydWU7XG5cbiAgICAvLyB3aGVuXG4gICAgY29uc3QgY29tcG9uZW50ID0gcmVuZGVyZXIuY3JlYXRlKFxuICAgICAgPFZlcnNlQ2hlY2sgey4uLnByb3BzfSAvPixcbiAgICApO1xuXG4gICAgLy8gdGhlblxuICAgIGV4cGVjdChjb21wb25lbnQudG9KU09OKCkpLnRvTWF0Y2hTbmFwc2hvdCgpO1xuICB9KTtcblxuICB0ZXN0KCdJbnRlZ3JhdGVkIFZpZXcgdGVzdCB3aXRoIGludmFsaWRhdGVkJywgKCkgPT4ge1xuICAgIC8vIGdpdmVuXG4gICAgY29uc3QgcHJvcHMgPSBnZXRCYXNlUHJvcGVydGllc0FuZE1vY2tBY3Rpb25zKCk7XG4gICAgY3VycmVudEludmFsaWRhdGVkID0gdHJ1ZTtcbiAgICBjdXJyZW50RWRpdGVkID0gZmFsc2U7XG5cbiAgICAvLyB3aGVuXG4gICAgY29uc3QgY29tcG9uZW50ID0gcmVuZGVyZXIuY3JlYXRlKFxuICAgICAgPFZlcnNlQ2hlY2sgey4uLnByb3BzfSAvPixcbiAgICApO1xuXG4gICAgLy8gdGhlblxuICAgIGV4cGVjdChjb21wb25lbnQudG9KU09OKCkpLnRvTWF0Y2hTbmFwc2hvdCgpO1xuICB9KTtcblxuICB0ZXN0KCdJbnRlZ3JhdGVkIFZpZXcgdGVzdCB3aXRoIGRlZmF1bHQgYW5kIGludmFsaWRhdGVkJywgKCkgPT4ge1xuICAgIC8vIGdpdmVuXG4gICAgY29uc3QgcHJvcHMgPSBnZXRCYXNlUHJvcGVydGllc0FuZE1vY2tBY3Rpb25zKCk7XG4gICAgcHJvcHMubW9kZSA9ICcnOyAvLyBkZWZhdWx0IG1vZGVcbiAgICBjdXJyZW50SW52YWxpZGF0ZWQgPSB0cnVlO1xuICAgIGN1cnJlbnRFZGl0ZWQgPSBmYWxzZTtcblxuICAgIC8vIHdoZW5cbiAgICBjb25zdCBjb21wb25lbnQgPSByZW5kZXJlci5jcmVhdGUoXG4gICAgICA8VmVyc2VDaGVjayB7Li4ucHJvcHN9IC8+LFxuICAgICk7XG5cbiAgICAvLyB0aGVuXG4gICAgZXhwZWN0KGNvbXBvbmVudC50b0pTT04oKSkudG9NYXRjaFNuYXBzaG90KCk7XG4gIH0pO1xuXG4gIHRlc3QoJ0ludGVncmF0ZWQgVmlldyB0ZXN0IC0gZWRpdCBtb2RlJywgKCkgPT4ge1xuICAgIC8vIGdpdmVuXG4gICAgY29uc3QgcHJvcHMgPSBnZXRCYXNlUHJvcGVydGllc0FuZE1vY2tBY3Rpb25zKCk7XG4gICAgY3VycmVudEludmFsaWRhdGVkID0gZmFsc2U7XG4gICAgY3VycmVudEVkaXRlZCA9IGZhbHNlO1xuICAgIHByb3BzLm1vZGUgPSAnZWRpdCc7XG5cbiAgICAvLyB3aGVuXG4gICAgY29uc3QgY29tcG9uZW50ID0gcmVuZGVyZXIuY3JlYXRlKFxuICAgICAgPFZlcnNlQ2hlY2sgey4uLnByb3BzfSAvPixcbiAgICApO1xuXG4gICAgLy8gdGhlblxuICAgIGV4cGVjdChjb21wb25lbnQudG9KU09OKCkpLnRvTWF0Y2hTbmFwc2hvdCgpO1xuICB9KTtcbn0pO1xuXG4vL1xuLy8gaGVscGVyc1xuLy9cblxuZnVuY3Rpb24gYWRkTW9ja0FjdGlvbnMocHJvcHMpIHtcbiAgcHJvcHMuYWN0aW9ucyA9IHtcbiAgICBoYW5kbGVHb1RvTmV4dDogKCkgPT4gamVzdC5mbigpLFxuICAgIGhhbmRsZUdvVG9QcmV2aW91czogKCkgPT4gamVzdC5mbigpLFxuICAgIGhhbmRsZU9wZW5EaWFsb2c6ICgpID0+IGplc3QuZm4oKSxcbiAgICBoYW5kbGVDbG9zZURpYWxvZzogKCkgPT4gamVzdC5mbigpLFxuICAgIHNraXBUb05leHQ6ICgpID0+IGplc3QuZm4oKSxcbiAgICBza2lwVG9QcmV2aW91czogKCkgPT4gamVzdC5mbigpLFxuICAgIGNoYW5nZVNlbGVjdGlvbnNJbkxvY2FsU3RhdGU6ICgpID0+IGplc3QuZm4oKSxcbiAgICBjaGFuZ2VNb2RlOiAoKSA9PiBqZXN0LmZuKCksXG4gICAgaGFuZGxlQ29tbWVudDogKCkgPT4gamVzdC5mbigpLFxuICAgIGNoZWNrQ29tbWVudDogKCkgPT4gamVzdC5mbigpLFxuICAgIGNhbmNlbENvbW1lbnQ6ICgpID0+IGplc3QuZm4oKSxcbiAgICBzYXZlQ29tbWVudDogKCkgPT4gamVzdC5mbigpLFxuICAgIGhhbmRsZVRhZ3NDaGVja2JveDogKCkgPT4gamVzdC5mbigpLFxuICAgIGhhbmRsZUVkaXRWZXJzZTogKCkgPT4gamVzdC5mbigpLFxuICAgIGNoZWNrVmVyc2U6ICgpID0+IGplc3QuZm4oKSxcbiAgICBjYW5jZWxFZGl0VmVyc2U6ICgpID0+IGplc3QuZm4oKSxcbiAgICBzYXZlRWRpdFZlcnNlOiAoKSA9PiBqZXN0LmZuKCksXG4gICAgdmFsaWRhdGVTZWxlY3Rpb25zOiAoKSA9PiBqZXN0LmZuKCksXG4gICAgdG9nZ2xlQm9va21hcms6ICgpID0+IGplc3QuZm4oKSxcbiAgICBvcGVuQWxlcnREaWFsb2c6ICgpID0+IGplc3QuZm4oKSxcbiAgICBzZWxlY3RNb2RhbFRhYjogKCkgPT4gamVzdC5mbigpLFxuICAgIGNhbmNlbFNlbGVjdGlvbjogKCkgPT4gamVzdC5mbigpLFxuICAgIGNsZWFyU2VsZWN0aW9uOiAoKSA9PiBqZXN0LmZuKCksXG4gICAgc2F2ZVNlbGVjdGlvbjogKCkgPT4gamVzdC5mbigpLFxuICB9O1xuICByZXR1cm4ge1xuICAgIC4uLnByb3BzLFxuICAgIHRyYW5zbGF0ZTogbW9ja190cmFuc2xhdGUsXG4gICAgY2FuY2VsU2VsZWN0aW9uOiAoKSA9PiBqZXN0LmZuKCksXG4gICAgY2xlYXJTZWxlY3Rpb246ICgpID0+IGplc3QuZm4oKSxcbiAgICBzYXZlU2VsZWN0aW9uOiAoKSA9PiBqZXN0LmZuKCksXG4gICAgdG9nZ2xlTm90aGluZ1RvU2VsZWN0OiAoKSA9PiBqZXN0LmZuKCksXG4gICAgZ29Ub05leHRPclByZXZpb3VzOiAnbmV4dCcsXG4gICAgZmluZElmVmVyc2VFZGl0ZWQ6IGplc3QuZm4oKCkgPT4gKCBjdXJyZW50RWRpdGVkKSksXG4gICAgZmluZElmVmVyc2VJbnZhbGlkYXRlZDogamVzdC5mbigoKSA9PiAoY3VycmVudEludmFsaWRhdGVkKSksXG4gICAgbWFuaWZlc3Q6IHsgbGFuZ3VhZ2VGb250OiAnZGVmYXVsdCcgfSxcbiAgfTtcbn1cblxuZnVuY3Rpb24gZ2V0QmFzZVByb3BlcnRpZXNBbmRNb2NrQWN0aW9ucygpIHtcbiAgLy8gY2xvbmUgcHJvcGVydGllcyBzbyB3ZSBjYW4gbW9kaWZ5IGJlZm9yZSB0ZXN0XG4gIGxldCBwcm9wcyA9IGJhc2VfcHJvcHM7XG4gIGNvbnNvbGUubG9nKGJhc2VfcHJvcHMpO1xuICBjb25zb2xlLmxvZygnYmFzZV9wcm9wcycpO1xuICBwcm9wcyA9IGFkZE1vY2tBY3Rpb25zKHByb3BzKTtcbiAgcmV0dXJuIHByb3BzO1xufVxuIl19