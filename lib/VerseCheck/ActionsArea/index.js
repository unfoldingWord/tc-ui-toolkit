"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactBootstrap = require("react-bootstrap");

var _deepEqual = _interopRequireDefault(require("deep-equal"));

var _Checkbox = _interopRequireDefault(require("@material-ui/core/Checkbox"));

var _styles = require("@material-ui/core/styles");

var _FormControlLabel = _interopRequireDefault(require("@material-ui/core/FormControlLabel"));

var _Info = _interopRequireDefault(require("@material-ui/icons/Info"));

var _reactTooltip = _interopRequireDefault(require("react-tooltip"));

var _Bookmark = _interopRequireDefault(require("../../Bookmark"));

require("./ActionsArea.styles.css");

// components
// css
var styles = {
  formControl: {
    margin: '0'
  },
  label: {
    color: 'var(--accent-color-dark)',
    fontWeight: 'normal',
    fontSize: 14
  },
  checkBoxRoot: {
    'padding': '12px 5px',
    'color': 'var(--accent-color-dark)',
    '&$checked': {
      color: 'var(--accent-color-dark)'
    }
  },
  checked: {},
  icon: {
    color: 'var(--accent-color-dark)',
    verticalAlign: 'middle',
    margin: '5px',
    width: 30,
    height: 30,
    cursor: 'pointer'
  }
};

var isSelectionsSaveDisable = function isSelectionsSaveDisable(localNothingToSelect, nothingToSelect, newSelections, selections) {
  if (newSelections.length > 0 || newSelections.length === 0 && !(0, _deepEqual["default"])(newSelections, selections)) {
    return (0, _deepEqual["default"])(newSelections, selections);
  }

  return localNothingToSelect === nothingToSelect;
};
/* eslint-disable react/prop-types */


var ChangeModeArea = function ChangeModeArea(_ref) {
  var translate = _ref.translate,
      bookmarkEnabled = _ref.bookmarkEnabled,
      toggleBookmark = _ref.toggleBookmark,
      changeMode = _ref.changeMode;
  return _react["default"].createElement("div", {
    className: "actions-area"
  }, _react["default"].createElement(_Bookmark["default"], {
    value: "bookmark",
    color: "primary",
    checked: bookmarkEnabled,
    label: translate('bookmark'),
    onChange: toggleBookmark
  }), _react["default"].createElement("div", {
    style: {
      display: 'flex',
      marginLeft: 'auto'
    }
  }, _react["default"].createElement("button", {
    style: {
      width: '140px',
      marginRight: '5px'
    },
    className: "btn-second",
    onClick: function onClick() {
      return changeMode('select');
    }
  }, _react["default"].createElement(_reactBootstrap.Glyphicon, {
    glyph: "ok",
    style: {
      marginRight: '10px'
    }
  }), translate('select')), _react["default"].createElement("button", {
    style: {
      width: '140px',
      marginRight: '5px'
    },
    className: "btn-second",
    onClick: function onClick() {
      return changeMode('edit');
    }
  }, _react["default"].createElement(_reactBootstrap.Glyphicon, {
    glyph: "pencil",
    style: {
      marginRight: '10px'
    }
  }), translate('edit_verse')), _react["default"].createElement("button", {
    style: {
      width: '140px'
    },
    className: "btn-second",
    onClick: function onClick() {
      return changeMode('comment');
    }
  }, _react["default"].createElement(_reactBootstrap.Glyphicon, {
    glyph: "comment",
    style: {
      marginRight: '10px'
    }
  }), translate('comment'))));
};

var ConfirmEditVerseArea = function ConfirmEditVerseArea(_ref2) {
  var translate = _ref2.translate,
      tags = _ref2.tags,
      cancelEditVerse = _ref2.cancelEditVerse,
      saveEditVerse = _ref2.saveEditVerse;
  return _react["default"].createElement("div", {
    className: "actions-area"
  }, _react["default"].createElement("button", {
    className: "btn-second",
    onClick: cancelEditVerse
  }, translate('cancel')), _react["default"].createElement("button", {
    className: "btn-prime",
    disabled: !tags.length,
    onClick: saveEditVerse
  }, _react["default"].createElement(_reactBootstrap.Glyphicon, {
    glyph: "ok",
    style: {
      marginRight: '10px'
    }
  }), translate('save')));
};

var ConfirmCommentArea = function ConfirmCommentArea(_ref3) {
  var translate = _ref3.translate,
      isCommentChanged = _ref3.isCommentChanged,
      cancelComment = _ref3.cancelComment,
      saveComment = _ref3.saveComment;
  return _react["default"].createElement("div", {
    className: "actions-area"
  }, _react["default"].createElement("button", {
    className: "btn-second",
    onClick: cancelComment
  }, translate('cancel')), _react["default"].createElement("button", {
    className: "btn-prime",
    disabled: !isCommentChanged,
    onClick: saveComment
  }, _react["default"].createElement(_reactBootstrap.Glyphicon, {
    glyph: "ok",
    style: {
      marginRight: '10px'
    }
  }), translate('save')));
};

var ConfirmSelectionArea = function ConfirmSelectionArea(_ref4) {
  var classes = _ref4.classes,
      translate = _ref4.translate,
      localNothingToSelect = _ref4.localNothingToSelect,
      newSelections = _ref4.newSelections,
      nothingToSelect = _ref4.nothingToSelect,
      selections = _ref4.selections,
      toggleNothingToSelect = _ref4.toggleNothingToSelect,
      cancelSelection = _ref4.cancelSelection,
      clearSelection = _ref4.clearSelection,
      saveSelection = _ref4.saveSelection;
  return _react["default"].createElement("div", {
    className: "selection-actions-area"
  }, _react["default"].createElement("div", {
    className: "flex-row"
  }, _react["default"].createElement(_FormControlLabel["default"], {
    value: "end",
    control: _react["default"].createElement(_Checkbox["default"], {
      checked: localNothingToSelect,
      disabled: newSelections && newSelections.length > 0,
      onChange: function onChange(event) {
        return toggleNothingToSelect(event.target.checked);
      },
      value: "nothingToSelect",
      color: "primary",
      classes: {
        root: classes.checkBoxRoot,
        checked: classes.checked
      }
    }),
    label: translate('no_selection_needed'),
    classes: {
      root: classes.formControl,
      label: classes.label
    }
  }), _react["default"].createElement("div", {
    "data-tip": translate('nothing_to_select_description'),
    "data-place": "top",
    "data-effect": "float",
    "data-type": "dark",
    "data-class": "selection-tooltip",
    "data-delay-hide": "100",
    style: {
      verticalAlign: 'super',
      fontSize: '0.8em'
    }
  }, _react["default"].createElement(_Info["default"], {
    classes: {
      root: classes.icon
    }
  }), _react["default"].createElement(_reactTooltip["default"], null))), _react["default"].createElement("div", {
    style: {
      whiteSpace: 'nowrap'
    }
  }, _react["default"].createElement("button", {
    className: "btn-second",
    style: {
      marginLeft: '0px',
      width: '140px',
      marginRight: '5px',
      alignSelf: 'flex-start'
    },
    onClick: cancelSelection
  }, translate('cancel')), _react["default"].createElement("button", {
    className: "btn-second",
    style: {
      width: '140px',
      marginRight: '5px'
    },
    disabled: newSelections.length > 0 ? false : true,
    onClick: clearSelection
  }, _react["default"].createElement(_reactBootstrap.Glyphicon, {
    glyph: "erase",
    style: {
      marginRight: '10px'
    }
  }), translate('clear_selection')), _react["default"].createElement("button", {
    className: "btn-prime",
    style: {
      width: '140px',
      marginRight: '5px'
    },
    disabled: isSelectionsSaveDisable(localNothingToSelect, nothingToSelect, newSelections, selections),
    onClick: saveSelection
  }, _react["default"].createElement(_reactBootstrap.Glyphicon, {
    glyph: "ok",
    style: {
      marginRight: '10px'
    }
  }), translate('save'))));
};
/* eslint-enable react/prop-types */


var ActionsArea = function ActionsArea(_ref5) {
  var tags = _ref5.tags,
      mode = _ref5.mode,
      isCommentChanged = _ref5.isCommentChanged,
      selections = _ref5.selections,
      newSelections = _ref5.newSelections,
      bookmarkEnabled = _ref5.bookmarkEnabled,
      saveSelection = _ref5.saveSelection,
      cancelSelection = _ref5.cancelSelection,
      clearSelection = _ref5.clearSelection,
      translate = _ref5.translate,
      classes = _ref5.classes,
      localNothingToSelect = _ref5.localNothingToSelect,
      nothingToSelect = _ref5.nothingToSelect,
      toggleNothingToSelect = _ref5.toggleNothingToSelect,
      toggleBookmark = _ref5.toggleBookmark,
      changeMode = _ref5.changeMode,
      cancelEditVerse = _ref5.cancelEditVerse,
      saveEditVerse = _ref5.saveEditVerse,
      cancelComment = _ref5.cancelComment,
      saveComment = _ref5.saveComment;

  switch (mode) {
    case 'edit':
      return _react["default"].createElement(ConfirmEditVerseArea, {
        tags: tags,
        translate: translate,
        cancelEditVerse: cancelEditVerse,
        saveEditVerse: saveEditVerse
      });

    case 'comment':
      return _react["default"].createElement(ConfirmCommentArea, {
        translate: translate,
        isCommentChanged: isCommentChanged,
        cancelComment: cancelComment,
        saveComment: saveComment
      });

    case 'select':
      return _react["default"].createElement(ConfirmSelectionArea, {
        classes: classes,
        translate: translate,
        localNothingToSelect: localNothingToSelect,
        newSelections: newSelections,
        nothingToSelect: nothingToSelect,
        selections: selections,
        toggleNothingToSelect: toggleNothingToSelect,
        cancelSelection: cancelSelection,
        clearSelection: clearSelection,
        saveSelection: saveSelection
      });

    case 'default':
      return _react["default"].createElement(ChangeModeArea, {
        translate: translate,
        bookmarkEnabled: bookmarkEnabled,
        toggleBookmark: toggleBookmark,
        changeMode: changeMode
      });

    default:
      return _react["default"].createElement(ChangeModeArea, {
        translate: translate,
        bookmarkEnabled: bookmarkEnabled,
        toggleBookmark: toggleBookmark,
        changeMode: changeMode
      });
  }
};

ActionsArea.propTypes = {
  tags: _propTypes["default"].array.isRequired,
  mode: _propTypes["default"].string.isRequired,
  isCommentChanged: _propTypes["default"].bool.isRequired,
  selections: _propTypes["default"].array.isRequired,
  newSelections: _propTypes["default"].array.isRequired,
  bookmarkEnabled: _propTypes["default"].bool.isRequired,
  classes: _propTypes["default"].object.isRequired,
  localNothingToSelect: _propTypes["default"].bool.isRequired,
  nothingToSelect: _propTypes["default"].bool.isRequired,
  saveSelection: _propTypes["default"].func.isRequired,
  cancelSelection: _propTypes["default"].func.isRequired,
  clearSelection: _propTypes["default"].func.isRequired,
  translate: _propTypes["default"].func.isRequired,
  toggleNothingToSelect: _propTypes["default"].func.isRequired,
  toggleBookmark: _propTypes["default"].func.isRequired,
  changeMode: _propTypes["default"].func.isRequired,
  cancelEditVerse: _propTypes["default"].func.isRequired,
  saveEditVerse: _propTypes["default"].func.isRequired,
  cancelComment: _propTypes["default"].func.isRequired,
  saveComment: _propTypes["default"].func.isRequired
};

var _default = (0, _styles.withStyles)(styles)(ActionsArea);

exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9WZXJzZUNoZWNrL0FjdGlvbnNBcmVhL2luZGV4LmpzIl0sIm5hbWVzIjpbInN0eWxlcyIsImZvcm1Db250cm9sIiwibWFyZ2luIiwibGFiZWwiLCJjb2xvciIsImZvbnRXZWlnaHQiLCJmb250U2l6ZSIsImNoZWNrQm94Um9vdCIsImNoZWNrZWQiLCJpY29uIiwidmVydGljYWxBbGlnbiIsIndpZHRoIiwiaGVpZ2h0IiwiY3Vyc29yIiwiaXNTZWxlY3Rpb25zU2F2ZURpc2FibGUiLCJsb2NhbE5vdGhpbmdUb1NlbGVjdCIsIm5vdGhpbmdUb1NlbGVjdCIsIm5ld1NlbGVjdGlvbnMiLCJzZWxlY3Rpb25zIiwibGVuZ3RoIiwiQ2hhbmdlTW9kZUFyZWEiLCJ0cmFuc2xhdGUiLCJib29rbWFya0VuYWJsZWQiLCJ0b2dnbGVCb29rbWFyayIsImNoYW5nZU1vZGUiLCJkaXNwbGF5IiwibWFyZ2luTGVmdCIsIm1hcmdpblJpZ2h0IiwiQ29uZmlybUVkaXRWZXJzZUFyZWEiLCJ0YWdzIiwiY2FuY2VsRWRpdFZlcnNlIiwic2F2ZUVkaXRWZXJzZSIsIkNvbmZpcm1Db21tZW50QXJlYSIsImlzQ29tbWVudENoYW5nZWQiLCJjYW5jZWxDb21tZW50Iiwic2F2ZUNvbW1lbnQiLCJDb25maXJtU2VsZWN0aW9uQXJlYSIsImNsYXNzZXMiLCJ0b2dnbGVOb3RoaW5nVG9TZWxlY3QiLCJjYW5jZWxTZWxlY3Rpb24iLCJjbGVhclNlbGVjdGlvbiIsInNhdmVTZWxlY3Rpb24iLCJldmVudCIsInRhcmdldCIsInJvb3QiLCJ3aGl0ZVNwYWNlIiwiYWxpZ25TZWxmIiwiQWN0aW9uc0FyZWEiLCJtb2RlIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwiYXJyYXkiLCJpc1JlcXVpcmVkIiwic3RyaW5nIiwiYm9vbCIsIm9iamVjdCIsImZ1bmMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUVBOztBQUVBOztBQUhBO0FBRUE7QUFHQSxJQUFNQSxNQUFNLEdBQUc7QUFDYkMsRUFBQUEsV0FBVyxFQUFFO0FBQUVDLElBQUFBLE1BQU0sRUFBRTtBQUFWLEdBREE7QUFFYkMsRUFBQUEsS0FBSyxFQUFFO0FBQ0xDLElBQUFBLEtBQUssRUFBRSwwQkFERjtBQUVMQyxJQUFBQSxVQUFVLEVBQUUsUUFGUDtBQUdMQyxJQUFBQSxRQUFRLEVBQUU7QUFITCxHQUZNO0FBT2JDLEVBQUFBLFlBQVksRUFBRTtBQUNaLGVBQVcsVUFEQztBQUVaLGFBQVMsMEJBRkc7QUFHWixpQkFBYTtBQUFFSCxNQUFBQSxLQUFLLEVBQUU7QUFBVDtBQUhELEdBUEQ7QUFZYkksRUFBQUEsT0FBTyxFQUFFLEVBWkk7QUFhYkMsRUFBQUEsSUFBSSxFQUFFO0FBQ0pMLElBQUFBLEtBQUssRUFBRSwwQkFESDtBQUVKTSxJQUFBQSxhQUFhLEVBQUUsUUFGWDtBQUdKUixJQUFBQSxNQUFNLEVBQUUsS0FISjtBQUlKUyxJQUFBQSxLQUFLLEVBQUUsRUFKSDtBQUtKQyxJQUFBQSxNQUFNLEVBQUUsRUFMSjtBQU1KQyxJQUFBQSxNQUFNLEVBQUU7QUFOSjtBQWJPLENBQWY7O0FBd0JBLElBQU1DLHVCQUF1QixHQUFHLFNBQTFCQSx1QkFBMEIsQ0FBQ0Msb0JBQUQsRUFBdUJDLGVBQXZCLEVBQXdDQyxhQUF4QyxFQUF1REMsVUFBdkQsRUFBc0U7QUFDcEcsTUFBSUQsYUFBYSxDQUFDRSxNQUFkLEdBQXVCLENBQXZCLElBQTZCRixhQUFhLENBQUNFLE1BQWQsS0FBeUIsQ0FBekIsSUFBOEIsQ0FBQywyQkFBUUYsYUFBUixFQUF1QkMsVUFBdkIsQ0FBaEUsRUFBcUc7QUFDbkcsV0FBTywyQkFBUUQsYUFBUixFQUF1QkMsVUFBdkIsQ0FBUDtBQUNEOztBQUVELFNBQU9ILG9CQUFvQixLQUFLQyxlQUFoQztBQUNELENBTkQ7QUFRQTs7O0FBQ0EsSUFBTUksY0FBYyxHQUFHLFNBQWpCQSxjQUFpQjtBQUFBLE1BQ3JCQyxTQURxQixRQUNyQkEsU0FEcUI7QUFBQSxNQUVyQkMsZUFGcUIsUUFFckJBLGVBRnFCO0FBQUEsTUFHckJDLGNBSHFCLFFBR3JCQSxjQUhxQjtBQUFBLE1BSXJCQyxVQUpxQixRQUlyQkEsVUFKcUI7QUFBQSxTQU1yQjtBQUFLLElBQUEsU0FBUyxFQUFDO0FBQWYsS0FDRSxnQ0FBQyxvQkFBRDtBQUNFLElBQUEsS0FBSyxFQUFDLFVBRFI7QUFFRSxJQUFBLEtBQUssRUFBQyxTQUZSO0FBR0UsSUFBQSxPQUFPLEVBQUVGLGVBSFg7QUFJRSxJQUFBLEtBQUssRUFBRUQsU0FBUyxDQUFDLFVBQUQsQ0FKbEI7QUFLRSxJQUFBLFFBQVEsRUFBRUU7QUFMWixJQURGLEVBT0U7QUFBSyxJQUFBLEtBQUssRUFBRTtBQUFFRSxNQUFBQSxPQUFPLEVBQUUsTUFBWDtBQUFtQkMsTUFBQUEsVUFBVSxFQUFFO0FBQS9CO0FBQVosS0FDRTtBQUNFLElBQUEsS0FBSyxFQUFFO0FBQUVmLE1BQUFBLEtBQUssRUFBRSxPQUFUO0FBQWtCZ0IsTUFBQUEsV0FBVyxFQUFFO0FBQS9CLEtBRFQ7QUFFRSxJQUFBLFNBQVMsRUFBQyxZQUZaO0FBR0UsSUFBQSxPQUFPLEVBQUU7QUFBQSxhQUFNSCxVQUFVLENBQUMsUUFBRCxDQUFoQjtBQUFBO0FBSFgsS0FLRSxnQ0FBQyx5QkFBRDtBQUFXLElBQUEsS0FBSyxFQUFDLElBQWpCO0FBQXNCLElBQUEsS0FBSyxFQUFFO0FBQUVHLE1BQUFBLFdBQVcsRUFBRTtBQUFmO0FBQTdCLElBTEYsRUFNR04sU0FBUyxDQUFDLFFBQUQsQ0FOWixDQURGLEVBU0U7QUFDRSxJQUFBLEtBQUssRUFBRTtBQUFFVixNQUFBQSxLQUFLLEVBQUUsT0FBVDtBQUFrQmdCLE1BQUFBLFdBQVcsRUFBRTtBQUEvQixLQURUO0FBRUUsSUFBQSxTQUFTLEVBQUMsWUFGWjtBQUdFLElBQUEsT0FBTyxFQUFFO0FBQUEsYUFBTUgsVUFBVSxDQUFDLE1BQUQsQ0FBaEI7QUFBQTtBQUhYLEtBS0UsZ0NBQUMseUJBQUQ7QUFBVyxJQUFBLEtBQUssRUFBQyxRQUFqQjtBQUEwQixJQUFBLEtBQUssRUFBRTtBQUFFRyxNQUFBQSxXQUFXLEVBQUU7QUFBZjtBQUFqQyxJQUxGLEVBTUdOLFNBQVMsQ0FBQyxZQUFELENBTlosQ0FURixFQWlCRTtBQUNFLElBQUEsS0FBSyxFQUFFO0FBQUVWLE1BQUFBLEtBQUssRUFBRTtBQUFULEtBRFQ7QUFFRSxJQUFBLFNBQVMsRUFBQyxZQUZaO0FBR0UsSUFBQSxPQUFPLEVBQUU7QUFBQSxhQUFNYSxVQUFVLENBQUMsU0FBRCxDQUFoQjtBQUFBO0FBSFgsS0FLRSxnQ0FBQyx5QkFBRDtBQUFXLElBQUEsS0FBSyxFQUFDLFNBQWpCO0FBQTJCLElBQUEsS0FBSyxFQUFFO0FBQUVHLE1BQUFBLFdBQVcsRUFBRTtBQUFmO0FBQWxDLElBTEYsRUFNR04sU0FBUyxDQUFDLFNBQUQsQ0FOWixDQWpCRixDQVBGLENBTnFCO0FBQUEsQ0FBdkI7O0FBMENBLElBQU1PLG9CQUFvQixHQUFHLFNBQXZCQSxvQkFBdUI7QUFBQSxNQUMzQlAsU0FEMkIsU0FDM0JBLFNBRDJCO0FBQUEsTUFFM0JRLElBRjJCLFNBRTNCQSxJQUYyQjtBQUFBLE1BRzNCQyxlQUgyQixTQUczQkEsZUFIMkI7QUFBQSxNQUkzQkMsYUFKMkIsU0FJM0JBLGFBSjJCO0FBQUEsU0FNM0I7QUFBSyxJQUFBLFNBQVMsRUFBQztBQUFmLEtBQ0U7QUFDRSxJQUFBLFNBQVMsRUFBQyxZQURaO0FBRUUsSUFBQSxPQUFPLEVBQUVEO0FBRlgsS0FJR1QsU0FBUyxDQUFDLFFBQUQsQ0FKWixDQURGLEVBT0U7QUFBUSxJQUFBLFNBQVMsRUFBQyxXQUFsQjtBQUNFLElBQUEsUUFBUSxFQUFFLENBQUNRLElBQUksQ0FBQ1YsTUFEbEI7QUFFRSxJQUFBLE9BQU8sRUFBRVk7QUFGWCxLQUlFLGdDQUFDLHlCQUFEO0FBQVcsSUFBQSxLQUFLLEVBQUMsSUFBakI7QUFBc0IsSUFBQSxLQUFLLEVBQUU7QUFBRUosTUFBQUEsV0FBVyxFQUFFO0FBQWY7QUFBN0IsSUFKRixFQUtHTixTQUFTLENBQUMsTUFBRCxDQUxaLENBUEYsQ0FOMkI7QUFBQSxDQUE3Qjs7QUF1QkEsSUFBTVcsa0JBQWtCLEdBQUcsU0FBckJBLGtCQUFxQjtBQUFBLE1BQ3pCWCxTQUR5QixTQUN6QkEsU0FEeUI7QUFBQSxNQUV6QlksZ0JBRnlCLFNBRXpCQSxnQkFGeUI7QUFBQSxNQUd6QkMsYUFIeUIsU0FHekJBLGFBSHlCO0FBQUEsTUFJekJDLFdBSnlCLFNBSXpCQSxXQUp5QjtBQUFBLFNBTXpCO0FBQUssSUFBQSxTQUFTLEVBQUM7QUFBZixLQUNFO0FBQVEsSUFBQSxTQUFTLEVBQUMsWUFBbEI7QUFDRSxJQUFBLE9BQU8sRUFBRUQ7QUFEWCxLQUdHYixTQUFTLENBQUMsUUFBRCxDQUhaLENBREYsRUFNRTtBQUFRLElBQUEsU0FBUyxFQUFDLFdBQWxCO0FBQ0UsSUFBQSxRQUFRLEVBQUUsQ0FBQ1ksZ0JBRGI7QUFFRSxJQUFBLE9BQU8sRUFBRUU7QUFGWCxLQUlFLGdDQUFDLHlCQUFEO0FBQVcsSUFBQSxLQUFLLEVBQUMsSUFBakI7QUFBc0IsSUFBQSxLQUFLLEVBQUU7QUFBRVIsTUFBQUEsV0FBVyxFQUFFO0FBQWY7QUFBN0IsSUFKRixFQUtHTixTQUFTLENBQUMsTUFBRCxDQUxaLENBTkYsQ0FOeUI7QUFBQSxDQUEzQjs7QUFzQkEsSUFBTWUsb0JBQW9CLEdBQUcsU0FBdkJBLG9CQUF1QjtBQUFBLE1BQzNCQyxPQUQyQixTQUMzQkEsT0FEMkI7QUFBQSxNQUUzQmhCLFNBRjJCLFNBRTNCQSxTQUYyQjtBQUFBLE1BRzNCTixvQkFIMkIsU0FHM0JBLG9CQUgyQjtBQUFBLE1BSTNCRSxhQUoyQixTQUkzQkEsYUFKMkI7QUFBQSxNQUszQkQsZUFMMkIsU0FLM0JBLGVBTDJCO0FBQUEsTUFNM0JFLFVBTjJCLFNBTTNCQSxVQU4yQjtBQUFBLE1BTzNCb0IscUJBUDJCLFNBTzNCQSxxQkFQMkI7QUFBQSxNQVEzQkMsZUFSMkIsU0FRM0JBLGVBUjJCO0FBQUEsTUFTM0JDLGNBVDJCLFNBUzNCQSxjQVQyQjtBQUFBLE1BVTNCQyxhQVYyQixTQVUzQkEsYUFWMkI7QUFBQSxTQVkzQjtBQUFLLElBQUEsU0FBUyxFQUFDO0FBQWYsS0FDRTtBQUFLLElBQUEsU0FBUyxFQUFDO0FBQWYsS0FDRSxnQ0FBQyw0QkFBRDtBQUNFLElBQUEsS0FBSyxFQUFDLEtBRFI7QUFFRSxJQUFBLE9BQU8sRUFDTCxnQ0FBQyxvQkFBRDtBQUNFLE1BQUEsT0FBTyxFQUFFMUIsb0JBRFg7QUFFRSxNQUFBLFFBQVEsRUFBRUUsYUFBYSxJQUFJQSxhQUFhLENBQUNFLE1BQWQsR0FBdUIsQ0FGcEQ7QUFHRSxNQUFBLFFBQVEsRUFBRSxrQkFBQXVCLEtBQUs7QUFBQSxlQUFJSixxQkFBcUIsQ0FBQ0ksS0FBSyxDQUFDQyxNQUFOLENBQWFuQyxPQUFkLENBQXpCO0FBQUEsT0FIakI7QUFJRSxNQUFBLEtBQUssRUFBQyxpQkFKUjtBQUtFLE1BQUEsS0FBSyxFQUFDLFNBTFI7QUFNRSxNQUFBLE9BQU8sRUFBRTtBQUNQb0MsUUFBQUEsSUFBSSxFQUFFUCxPQUFPLENBQUM5QixZQURQO0FBRVBDLFFBQUFBLE9BQU8sRUFBRTZCLE9BQU8sQ0FBQzdCO0FBRlY7QUFOWCxNQUhKO0FBZUUsSUFBQSxLQUFLLEVBQUVhLFNBQVMsQ0FBQyxxQkFBRCxDQWZsQjtBQWdCRSxJQUFBLE9BQU8sRUFBRTtBQUNQdUIsTUFBQUEsSUFBSSxFQUFFUCxPQUFPLENBQUNwQyxXQURQO0FBRVBFLE1BQUFBLEtBQUssRUFBRWtDLE9BQU8sQ0FBQ2xDO0FBRlI7QUFoQlgsSUFERixFQXNCRTtBQUNFLGdCQUFVa0IsU0FBUyxDQUFDLCtCQUFELENBRHJCO0FBRUUsa0JBQVcsS0FGYjtBQUdFLG1CQUFZLE9BSGQ7QUFJRSxpQkFBVSxNQUpaO0FBS0Usa0JBQVcsbUJBTGI7QUFNRSx1QkFBZ0IsS0FObEI7QUFPRSxJQUFBLEtBQUssRUFBRTtBQUFFWCxNQUFBQSxhQUFhLEVBQUUsT0FBakI7QUFBMEJKLE1BQUFBLFFBQVEsRUFBRTtBQUFwQztBQVBULEtBU0UsZ0NBQUMsZ0JBQUQ7QUFBVSxJQUFBLE9BQU8sRUFBRTtBQUFFc0MsTUFBQUEsSUFBSSxFQUFFUCxPQUFPLENBQUM1QjtBQUFoQjtBQUFuQixJQVRGLEVBVUUsZ0NBQUMsd0JBQUQsT0FWRixDQXRCRixDQURGLEVBb0NFO0FBQUssSUFBQSxLQUFLLEVBQUU7QUFBRW9DLE1BQUFBLFVBQVUsRUFBRTtBQUFkO0FBQVosS0FDRTtBQUNFLElBQUEsU0FBUyxFQUFDLFlBRFo7QUFFRSxJQUFBLEtBQUssRUFBRTtBQUNMbkIsTUFBQUEsVUFBVSxFQUFFLEtBRFA7QUFDY2YsTUFBQUEsS0FBSyxFQUFFLE9BRHJCO0FBQzhCZ0IsTUFBQUEsV0FBVyxFQUFFLEtBRDNDO0FBQ2tEbUIsTUFBQUEsU0FBUyxFQUFFO0FBRDdELEtBRlQ7QUFLRSxJQUFBLE9BQU8sRUFBRVA7QUFMWCxLQU9HbEIsU0FBUyxDQUFDLFFBQUQsQ0FQWixDQURGLEVBVUU7QUFDRSxJQUFBLFNBQVMsRUFBQyxZQURaO0FBRUUsSUFBQSxLQUFLLEVBQUU7QUFBRVYsTUFBQUEsS0FBSyxFQUFFLE9BQVQ7QUFBa0JnQixNQUFBQSxXQUFXLEVBQUU7QUFBL0IsS0FGVDtBQUdFLElBQUEsUUFBUSxFQUFFVixhQUFhLENBQUNFLE1BQWQsR0FBdUIsQ0FBdkIsR0FBMkIsS0FBM0IsR0FBbUMsSUFIL0M7QUFJRSxJQUFBLE9BQU8sRUFBRXFCO0FBSlgsS0FNRSxnQ0FBQyx5QkFBRDtBQUFXLElBQUEsS0FBSyxFQUFDLE9BQWpCO0FBQXlCLElBQUEsS0FBSyxFQUFFO0FBQUViLE1BQUFBLFdBQVcsRUFBRTtBQUFmO0FBQWhDLElBTkYsRUFPR04sU0FBUyxDQUFDLGlCQUFELENBUFosQ0FWRixFQW1CRTtBQUNFLElBQUEsU0FBUyxFQUFDLFdBRFo7QUFFRSxJQUFBLEtBQUssRUFBRTtBQUFFVixNQUFBQSxLQUFLLEVBQUUsT0FBVDtBQUFrQmdCLE1BQUFBLFdBQVcsRUFBRTtBQUEvQixLQUZUO0FBR0UsSUFBQSxRQUFRLEVBQUViLHVCQUF1QixDQUFDQyxvQkFBRCxFQUF1QkMsZUFBdkIsRUFBd0NDLGFBQXhDLEVBQXVEQyxVQUF2RCxDQUhuQztBQUlFLElBQUEsT0FBTyxFQUFFdUI7QUFKWCxLQU1FLGdDQUFDLHlCQUFEO0FBQVcsSUFBQSxLQUFLLEVBQUMsSUFBakI7QUFBc0IsSUFBQSxLQUFLLEVBQUU7QUFBRWQsTUFBQUEsV0FBVyxFQUFFO0FBQWY7QUFBN0IsSUFORixFQU9HTixTQUFTLENBQUMsTUFBRCxDQVBaLENBbkJGLENBcENGLENBWjJCO0FBQUEsQ0FBN0I7QUErRUE7OztBQUVBLElBQU0wQixXQUFXLEdBQUcsU0FBZEEsV0FBYyxRQXFCZDtBQUFBLE1BcEJKbEIsSUFvQkksU0FwQkpBLElBb0JJO0FBQUEsTUFuQkptQixJQW1CSSxTQW5CSkEsSUFtQkk7QUFBQSxNQWxCSmYsZ0JBa0JJLFNBbEJKQSxnQkFrQkk7QUFBQSxNQWpCSmYsVUFpQkksU0FqQkpBLFVBaUJJO0FBQUEsTUFoQkpELGFBZ0JJLFNBaEJKQSxhQWdCSTtBQUFBLE1BZkpLLGVBZUksU0FmSkEsZUFlSTtBQUFBLE1BZEptQixhQWNJLFNBZEpBLGFBY0k7QUFBQSxNQWJKRixlQWFJLFNBYkpBLGVBYUk7QUFBQSxNQVpKQyxjQVlJLFNBWkpBLGNBWUk7QUFBQSxNQVhKbkIsU0FXSSxTQVhKQSxTQVdJO0FBQUEsTUFWSmdCLE9BVUksU0FWSkEsT0FVSTtBQUFBLE1BVEp0QixvQkFTSSxTQVRKQSxvQkFTSTtBQUFBLE1BUkpDLGVBUUksU0FSSkEsZUFRSTtBQUFBLE1BUEpzQixxQkFPSSxTQVBKQSxxQkFPSTtBQUFBLE1BTkpmLGNBTUksU0FOSkEsY0FNSTtBQUFBLE1BTEpDLFVBS0ksU0FMSkEsVUFLSTtBQUFBLE1BSkpNLGVBSUksU0FKSkEsZUFJSTtBQUFBLE1BSEpDLGFBR0ksU0FISkEsYUFHSTtBQUFBLE1BRkpHLGFBRUksU0FGSkEsYUFFSTtBQUFBLE1BREpDLFdBQ0ksU0FESkEsV0FDSTs7QUFDSixVQUFRYSxJQUFSO0FBQ0EsU0FBSyxNQUFMO0FBQ0UsYUFDRSxnQ0FBQyxvQkFBRDtBQUNFLFFBQUEsSUFBSSxFQUFFbkIsSUFEUjtBQUVFLFFBQUEsU0FBUyxFQUFFUixTQUZiO0FBR0UsUUFBQSxlQUFlLEVBQUVTLGVBSG5CO0FBSUUsUUFBQSxhQUFhLEVBQUVDO0FBSmpCLFFBREY7O0FBUUYsU0FBSyxTQUFMO0FBQ0UsYUFDRSxnQ0FBQyxrQkFBRDtBQUNFLFFBQUEsU0FBUyxFQUFFVixTQURiO0FBRUUsUUFBQSxnQkFBZ0IsRUFBRVksZ0JBRnBCO0FBR0UsUUFBQSxhQUFhLEVBQUVDLGFBSGpCO0FBSUUsUUFBQSxXQUFXLEVBQUVDO0FBSmYsUUFERjs7QUFRRixTQUFLLFFBQUw7QUFDRSxhQUNFLGdDQUFDLG9CQUFEO0FBQ0UsUUFBQSxPQUFPLEVBQUVFLE9BRFg7QUFFRSxRQUFBLFNBQVMsRUFBRWhCLFNBRmI7QUFHRSxRQUFBLG9CQUFvQixFQUFFTixvQkFIeEI7QUFJRSxRQUFBLGFBQWEsRUFBRUUsYUFKakI7QUFLRSxRQUFBLGVBQWUsRUFBRUQsZUFMbkI7QUFNRSxRQUFBLFVBQVUsRUFBRUUsVUFOZDtBQU9FLFFBQUEscUJBQXFCLEVBQUVvQixxQkFQekI7QUFRRSxRQUFBLGVBQWUsRUFBRUMsZUFSbkI7QUFTRSxRQUFBLGNBQWMsRUFBRUMsY0FUbEI7QUFVRSxRQUFBLGFBQWEsRUFBRUM7QUFWakIsUUFERjs7QUFjRixTQUFLLFNBQUw7QUFDRSxhQUNFLGdDQUFDLGNBQUQ7QUFDRSxRQUFBLFNBQVMsRUFBRXBCLFNBRGI7QUFFRSxRQUFBLGVBQWUsRUFBRUMsZUFGbkI7QUFHRSxRQUFBLGNBQWMsRUFBRUMsY0FIbEI7QUFJRSxRQUFBLFVBQVUsRUFBRUM7QUFKZCxRQURGOztBQVFGO0FBQ0UsYUFDRSxnQ0FBQyxjQUFEO0FBQ0UsUUFBQSxTQUFTLEVBQUVILFNBRGI7QUFFRSxRQUFBLGVBQWUsRUFBRUMsZUFGbkI7QUFHRSxRQUFBLGNBQWMsRUFBRUMsY0FIbEI7QUFJRSxRQUFBLFVBQVUsRUFBRUM7QUFKZCxRQURGO0FBNUNGO0FBcURELENBM0VEOztBQTZFQXVCLFdBQVcsQ0FBQ0UsU0FBWixHQUF3QjtBQUN0QnBCLEVBQUFBLElBQUksRUFBRXFCLHNCQUFVQyxLQUFWLENBQWdCQyxVQURBO0FBRXRCSixFQUFBQSxJQUFJLEVBQUVFLHNCQUFVRyxNQUFWLENBQWlCRCxVQUZEO0FBR3RCbkIsRUFBQUEsZ0JBQWdCLEVBQUVpQixzQkFBVUksSUFBVixDQUFlRixVQUhYO0FBSXRCbEMsRUFBQUEsVUFBVSxFQUFFZ0Msc0JBQVVDLEtBQVYsQ0FBZ0JDLFVBSk47QUFLdEJuQyxFQUFBQSxhQUFhLEVBQUVpQyxzQkFBVUMsS0FBVixDQUFnQkMsVUFMVDtBQU10QjlCLEVBQUFBLGVBQWUsRUFBRTRCLHNCQUFVSSxJQUFWLENBQWVGLFVBTlY7QUFPdEJmLEVBQUFBLE9BQU8sRUFBRWEsc0JBQVVLLE1BQVYsQ0FBaUJILFVBUEo7QUFRdEJyQyxFQUFBQSxvQkFBb0IsRUFBRW1DLHNCQUFVSSxJQUFWLENBQWVGLFVBUmY7QUFTdEJwQyxFQUFBQSxlQUFlLEVBQUVrQyxzQkFBVUksSUFBVixDQUFlRixVQVRWO0FBVXRCWCxFQUFBQSxhQUFhLEVBQUVTLHNCQUFVTSxJQUFWLENBQWVKLFVBVlI7QUFXdEJiLEVBQUFBLGVBQWUsRUFBRVcsc0JBQVVNLElBQVYsQ0FBZUosVUFYVjtBQVl0QlosRUFBQUEsY0FBYyxFQUFFVSxzQkFBVU0sSUFBVixDQUFlSixVQVpUO0FBYXRCL0IsRUFBQUEsU0FBUyxFQUFFNkIsc0JBQVVNLElBQVYsQ0FBZUosVUFiSjtBQWN0QmQsRUFBQUEscUJBQXFCLEVBQUVZLHNCQUFVTSxJQUFWLENBQWVKLFVBZGhCO0FBZXRCN0IsRUFBQUEsY0FBYyxFQUFFMkIsc0JBQVVNLElBQVYsQ0FBZUosVUFmVDtBQWdCdEI1QixFQUFBQSxVQUFVLEVBQUUwQixzQkFBVU0sSUFBVixDQUFlSixVQWhCTDtBQWlCdEJ0QixFQUFBQSxlQUFlLEVBQUVvQixzQkFBVU0sSUFBVixDQUFlSixVQWpCVjtBQWtCdEJyQixFQUFBQSxhQUFhLEVBQUVtQixzQkFBVU0sSUFBVixDQUFlSixVQWxCUjtBQW1CdEJsQixFQUFBQSxhQUFhLEVBQUVnQixzQkFBVU0sSUFBVixDQUFlSixVQW5CUjtBQW9CdEJqQixFQUFBQSxXQUFXLEVBQUVlLHNCQUFVTSxJQUFWLENBQWVKO0FBcEJOLENBQXhCOztlQXVCZSx3QkFBV3BELE1BQVgsRUFBbUIrQyxXQUFuQixDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyBHbHlwaGljb24gfSBmcm9tICdyZWFjdC1ib290c3RyYXAnO1xuaW1wb3J0IGlzRXF1YWwgZnJvbSAnZGVlcC1lcXVhbCc7XG5pbXBvcnQgQ2hlY2tib3ggZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ2hlY2tib3gnO1xuaW1wb3J0IHsgd2l0aFN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XG5pbXBvcnQgRm9ybUNvbnRyb2xMYWJlbCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Gb3JtQ29udHJvbExhYmVsJztcbmltcG9ydCBJbmZvSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvSW5mbyc7XG5pbXBvcnQgUmVhY3RUb29sdGlwIGZyb20gJ3JlYWN0LXRvb2x0aXAnO1xuLy8gY29tcG9uZW50c1xuaW1wb3J0IEJvb2ttYXJrIGZyb20gJy4uLy4uL0Jvb2ttYXJrJztcbi8vIGNzc1xuaW1wb3J0ICcuL0FjdGlvbnNBcmVhLnN0eWxlcy5jc3MnO1xuXG5jb25zdCBzdHlsZXMgPSB7XG4gIGZvcm1Db250cm9sOiB7IG1hcmdpbjogJzAnIH0sXG4gIGxhYmVsOiB7XG4gICAgY29sb3I6ICd2YXIoLS1hY2NlbnQtY29sb3ItZGFyayknLFxuICAgIGZvbnRXZWlnaHQ6ICdub3JtYWwnLFxuICAgIGZvbnRTaXplOiAxNCxcbiAgfSxcbiAgY2hlY2tCb3hSb290OiB7XG4gICAgJ3BhZGRpbmcnOiAnMTJweCA1cHgnLFxuICAgICdjb2xvcic6ICd2YXIoLS1hY2NlbnQtY29sb3ItZGFyayknLFxuICAgICcmJGNoZWNrZWQnOiB7IGNvbG9yOiAndmFyKC0tYWNjZW50LWNvbG9yLWRhcmspJyB9LFxuICB9LFxuICBjaGVja2VkOiB7fSxcbiAgaWNvbjoge1xuICAgIGNvbG9yOiAndmFyKC0tYWNjZW50LWNvbG9yLWRhcmspJyxcbiAgICB2ZXJ0aWNhbEFsaWduOiAnbWlkZGxlJyxcbiAgICBtYXJnaW46ICc1cHgnLFxuICAgIHdpZHRoOiAzMCxcbiAgICBoZWlnaHQ6IDMwLFxuICAgIGN1cnNvcjogJ3BvaW50ZXInLFxuICB9LFxufTtcblxuXG5jb25zdCBpc1NlbGVjdGlvbnNTYXZlRGlzYWJsZSA9IChsb2NhbE5vdGhpbmdUb1NlbGVjdCwgbm90aGluZ1RvU2VsZWN0LCBuZXdTZWxlY3Rpb25zLCBzZWxlY3Rpb25zKSA9PiB7XG4gIGlmIChuZXdTZWxlY3Rpb25zLmxlbmd0aCA+IDAgfHwgKG5ld1NlbGVjdGlvbnMubGVuZ3RoID09PSAwICYmICFpc0VxdWFsKG5ld1NlbGVjdGlvbnMsIHNlbGVjdGlvbnMpKSkge1xuICAgIHJldHVybiBpc0VxdWFsKG5ld1NlbGVjdGlvbnMsIHNlbGVjdGlvbnMpO1xuICB9XG5cbiAgcmV0dXJuIGxvY2FsTm90aGluZ1RvU2VsZWN0ID09PSBub3RoaW5nVG9TZWxlY3Q7XG59O1xuXG4vKiBlc2xpbnQtZGlzYWJsZSByZWFjdC9wcm9wLXR5cGVzICovXG5jb25zdCBDaGFuZ2VNb2RlQXJlYSA9ICh7XG4gIHRyYW5zbGF0ZSxcbiAgYm9va21hcmtFbmFibGVkLFxuICB0b2dnbGVCb29rbWFyayxcbiAgY2hhbmdlTW9kZSxcbn0pID0+IChcbiAgPGRpdiBjbGFzc05hbWU9J2FjdGlvbnMtYXJlYSc+XG4gICAgPEJvb2ttYXJrXG4gICAgICB2YWx1ZT0nYm9va21hcmsnXG4gICAgICBjb2xvcj0ncHJpbWFyeSdcbiAgICAgIGNoZWNrZWQ9e2Jvb2ttYXJrRW5hYmxlZH1cbiAgICAgIGxhYmVsPXt0cmFuc2xhdGUoJ2Jvb2ttYXJrJyl9XG4gICAgICBvbkNoYW5nZT17dG9nZ2xlQm9va21hcmt9IC8+XG4gICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIG1hcmdpbkxlZnQ6ICdhdXRvJyB9fT5cbiAgICAgIDxidXR0b25cbiAgICAgICAgc3R5bGU9e3sgd2lkdGg6ICcxNDBweCcsIG1hcmdpblJpZ2h0OiAnNXB4JyB9fVxuICAgICAgICBjbGFzc05hbWU9J2J0bi1zZWNvbmQnXG4gICAgICAgIG9uQ2xpY2s9eygpID0+IGNoYW5nZU1vZGUoJ3NlbGVjdCcpfVxuICAgICAgPlxuICAgICAgICA8R2x5cGhpY29uIGdseXBoPSdvaycgc3R5bGU9e3sgbWFyZ2luUmlnaHQ6ICcxMHB4JyB9fSAvPlxuICAgICAgICB7dHJhbnNsYXRlKCdzZWxlY3QnKX1cbiAgICAgIDwvYnV0dG9uPlxuICAgICAgPGJ1dHRvblxuICAgICAgICBzdHlsZT17eyB3aWR0aDogJzE0MHB4JywgbWFyZ2luUmlnaHQ6ICc1cHgnIH19XG4gICAgICAgIGNsYXNzTmFtZT0nYnRuLXNlY29uZCdcbiAgICAgICAgb25DbGljaz17KCkgPT4gY2hhbmdlTW9kZSgnZWRpdCcpfVxuICAgICAgPlxuICAgICAgICA8R2x5cGhpY29uIGdseXBoPSdwZW5jaWwnIHN0eWxlPXt7IG1hcmdpblJpZ2h0OiAnMTBweCcgfX0gLz5cbiAgICAgICAge3RyYW5zbGF0ZSgnZWRpdF92ZXJzZScpfVxuICAgICAgPC9idXR0b24+XG4gICAgICA8YnV0dG9uXG4gICAgICAgIHN0eWxlPXt7IHdpZHRoOiAnMTQwcHgnIH19XG4gICAgICAgIGNsYXNzTmFtZT0nYnRuLXNlY29uZCdcbiAgICAgICAgb25DbGljaz17KCkgPT4gY2hhbmdlTW9kZSgnY29tbWVudCcpfVxuICAgICAgPlxuICAgICAgICA8R2x5cGhpY29uIGdseXBoPSdjb21tZW50JyBzdHlsZT17eyBtYXJnaW5SaWdodDogJzEwcHgnIH19IC8+XG4gICAgICAgIHt0cmFuc2xhdGUoJ2NvbW1lbnQnKX1cbiAgICAgIDwvYnV0dG9uPlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbik7XG5cbmNvbnN0IENvbmZpcm1FZGl0VmVyc2VBcmVhID0gKHtcbiAgdHJhbnNsYXRlLFxuICB0YWdzLFxuICBjYW5jZWxFZGl0VmVyc2UsXG4gIHNhdmVFZGl0VmVyc2UsXG59KSA9PiAoXG4gIDxkaXYgY2xhc3NOYW1lPSdhY3Rpb25zLWFyZWEnPlxuICAgIDxidXR0b25cbiAgICAgIGNsYXNzTmFtZT0nYnRuLXNlY29uZCdcbiAgICAgIG9uQ2xpY2s9e2NhbmNlbEVkaXRWZXJzZX1cbiAgICA+XG4gICAgICB7dHJhbnNsYXRlKCdjYW5jZWwnKX1cbiAgICA8L2J1dHRvbj5cbiAgICA8YnV0dG9uIGNsYXNzTmFtZT0nYnRuLXByaW1lJ1xuICAgICAgZGlzYWJsZWQ9eyF0YWdzLmxlbmd0aH1cbiAgICAgIG9uQ2xpY2s9e3NhdmVFZGl0VmVyc2V9XG4gICAgPlxuICAgICAgPEdseXBoaWNvbiBnbHlwaD0nb2snIHN0eWxlPXt7IG1hcmdpblJpZ2h0OiAnMTBweCcgfX0gLz5cbiAgICAgIHt0cmFuc2xhdGUoJ3NhdmUnKX1cbiAgICA8L2J1dHRvbj5cbiAgPC9kaXY+XG4pO1xuXG5jb25zdCBDb25maXJtQ29tbWVudEFyZWEgPSAoe1xuICB0cmFuc2xhdGUsXG4gIGlzQ29tbWVudENoYW5nZWQsXG4gIGNhbmNlbENvbW1lbnQsXG4gIHNhdmVDb21tZW50LFxufSkgPT4gKFxuICA8ZGl2IGNsYXNzTmFtZT0nYWN0aW9ucy1hcmVhJz5cbiAgICA8YnV0dG9uIGNsYXNzTmFtZT0nYnRuLXNlY29uZCdcbiAgICAgIG9uQ2xpY2s9e2NhbmNlbENvbW1lbnR9XG4gICAgPlxuICAgICAge3RyYW5zbGF0ZSgnY2FuY2VsJyl9XG4gICAgPC9idXR0b24+XG4gICAgPGJ1dHRvbiBjbGFzc05hbWU9J2J0bi1wcmltZSdcbiAgICAgIGRpc2FibGVkPXshaXNDb21tZW50Q2hhbmdlZH1cbiAgICAgIG9uQ2xpY2s9e3NhdmVDb21tZW50fVxuICAgID5cbiAgICAgIDxHbHlwaGljb24gZ2x5cGg9J29rJyBzdHlsZT17eyBtYXJnaW5SaWdodDogJzEwcHgnIH19IC8+XG4gICAgICB7dHJhbnNsYXRlKCdzYXZlJyl9XG4gICAgPC9idXR0b24+XG4gIDwvZGl2PlxuKTtcblxuY29uc3QgQ29uZmlybVNlbGVjdGlvbkFyZWEgPSAoe1xuICBjbGFzc2VzLFxuICB0cmFuc2xhdGUsXG4gIGxvY2FsTm90aGluZ1RvU2VsZWN0LFxuICBuZXdTZWxlY3Rpb25zLFxuICBub3RoaW5nVG9TZWxlY3QsXG4gIHNlbGVjdGlvbnMsXG4gIHRvZ2dsZU5vdGhpbmdUb1NlbGVjdCxcbiAgY2FuY2VsU2VsZWN0aW9uLFxuICBjbGVhclNlbGVjdGlvbixcbiAgc2F2ZVNlbGVjdGlvbixcbn0pID0+IChcbiAgPGRpdiBjbGFzc05hbWU9J3NlbGVjdGlvbi1hY3Rpb25zLWFyZWEnPlxuICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4LXJvdyc+XG4gICAgICA8Rm9ybUNvbnRyb2xMYWJlbFxuICAgICAgICB2YWx1ZT1cImVuZFwiXG4gICAgICAgIGNvbnRyb2w9e1xuICAgICAgICAgIDxDaGVja2JveFxuICAgICAgICAgICAgY2hlY2tlZD17bG9jYWxOb3RoaW5nVG9TZWxlY3R9XG4gICAgICAgICAgICBkaXNhYmxlZD17bmV3U2VsZWN0aW9ucyAmJiBuZXdTZWxlY3Rpb25zLmxlbmd0aCA+IDB9XG4gICAgICAgICAgICBvbkNoYW5nZT17ZXZlbnQgPT4gdG9nZ2xlTm90aGluZ1RvU2VsZWN0KGV2ZW50LnRhcmdldC5jaGVja2VkKX1cbiAgICAgICAgICAgIHZhbHVlPVwibm90aGluZ1RvU2VsZWN0XCJcbiAgICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXG4gICAgICAgICAgICBjbGFzc2VzPXt7XG4gICAgICAgICAgICAgIHJvb3Q6IGNsYXNzZXMuY2hlY2tCb3hSb290LFxuICAgICAgICAgICAgICBjaGVja2VkOiBjbGFzc2VzLmNoZWNrZWQsXG4gICAgICAgICAgICB9fVxuICAgICAgICAgIC8+XG4gICAgICAgIH1cbiAgICAgICAgbGFiZWw9e3RyYW5zbGF0ZSgnbm9fc2VsZWN0aW9uX25lZWRlZCcpfVxuICAgICAgICBjbGFzc2VzPXt7XG4gICAgICAgICAgcm9vdDogY2xhc3Nlcy5mb3JtQ29udHJvbCxcbiAgICAgICAgICBsYWJlbDogY2xhc3Nlcy5sYWJlbCxcbiAgICAgICAgfX1cbiAgICAgIC8+XG4gICAgICA8ZGl2XG4gICAgICAgIGRhdGEtdGlwPXt0cmFuc2xhdGUoJ25vdGhpbmdfdG9fc2VsZWN0X2Rlc2NyaXB0aW9uJyl9XG4gICAgICAgIGRhdGEtcGxhY2U9XCJ0b3BcIlxuICAgICAgICBkYXRhLWVmZmVjdD1cImZsb2F0XCJcbiAgICAgICAgZGF0YS10eXBlPVwiZGFya1wiXG4gICAgICAgIGRhdGEtY2xhc3M9XCJzZWxlY3Rpb24tdG9vbHRpcFwiXG4gICAgICAgIGRhdGEtZGVsYXktaGlkZT1cIjEwMFwiXG4gICAgICAgIHN0eWxlPXt7IHZlcnRpY2FsQWxpZ246ICdzdXBlcicsIGZvbnRTaXplOiAnMC44ZW0nIH19XG4gICAgICA+XG4gICAgICAgIDxJbmZvSWNvbiBjbGFzc2VzPXt7IHJvb3Q6IGNsYXNzZXMuaWNvbiB9fSAvPlxuICAgICAgICA8UmVhY3RUb29sdGlwLz5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICAgIDxkaXYgc3R5bGU9e3sgd2hpdGVTcGFjZTogJ25vd3JhcCcgfX0+XG4gICAgICA8YnV0dG9uXG4gICAgICAgIGNsYXNzTmFtZT0nYnRuLXNlY29uZCdcbiAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICBtYXJnaW5MZWZ0OiAnMHB4Jywgd2lkdGg6ICcxNDBweCcsIG1hcmdpblJpZ2h0OiAnNXB4JywgYWxpZ25TZWxmOiAnZmxleC1zdGFydCcsXG4gICAgICAgIH19XG4gICAgICAgIG9uQ2xpY2s9e2NhbmNlbFNlbGVjdGlvbn1cbiAgICAgID5cbiAgICAgICAge3RyYW5zbGF0ZSgnY2FuY2VsJyl9XG4gICAgICA8L2J1dHRvbj5cbiAgICAgIDxidXR0b25cbiAgICAgICAgY2xhc3NOYW1lPSdidG4tc2Vjb25kJ1xuICAgICAgICBzdHlsZT17eyB3aWR0aDogJzE0MHB4JywgbWFyZ2luUmlnaHQ6ICc1cHgnIH19XG4gICAgICAgIGRpc2FibGVkPXtuZXdTZWxlY3Rpb25zLmxlbmd0aCA+IDAgPyBmYWxzZSA6IHRydWV9XG4gICAgICAgIG9uQ2xpY2s9e2NsZWFyU2VsZWN0aW9ufVxuICAgICAgPlxuICAgICAgICA8R2x5cGhpY29uIGdseXBoPSdlcmFzZScgc3R5bGU9e3sgbWFyZ2luUmlnaHQ6ICcxMHB4JyB9fSAvPlxuICAgICAgICB7dHJhbnNsYXRlKCdjbGVhcl9zZWxlY3Rpb24nKX1cbiAgICAgIDwvYnV0dG9uPlxuICAgICAgPGJ1dHRvblxuICAgICAgICBjbGFzc05hbWU9J2J0bi1wcmltZSdcbiAgICAgICAgc3R5bGU9e3sgd2lkdGg6ICcxNDBweCcsIG1hcmdpblJpZ2h0OiAnNXB4JyB9fVxuICAgICAgICBkaXNhYmxlZD17aXNTZWxlY3Rpb25zU2F2ZURpc2FibGUobG9jYWxOb3RoaW5nVG9TZWxlY3QsIG5vdGhpbmdUb1NlbGVjdCwgbmV3U2VsZWN0aW9ucywgc2VsZWN0aW9ucyl9XG4gICAgICAgIG9uQ2xpY2s9e3NhdmVTZWxlY3Rpb259XG4gICAgICA+XG4gICAgICAgIDxHbHlwaGljb24gZ2x5cGg9J29rJyBzdHlsZT17eyBtYXJnaW5SaWdodDogJzEwcHgnIH19IC8+XG4gICAgICAgIHt0cmFuc2xhdGUoJ3NhdmUnKX1cbiAgICAgIDwvYnV0dG9uPlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbik7XG4vKiBlc2xpbnQtZW5hYmxlIHJlYWN0L3Byb3AtdHlwZXMgKi9cblxuY29uc3QgQWN0aW9uc0FyZWEgPSAoe1xuICB0YWdzLFxuICBtb2RlLFxuICBpc0NvbW1lbnRDaGFuZ2VkLFxuICBzZWxlY3Rpb25zLFxuICBuZXdTZWxlY3Rpb25zLFxuICBib29rbWFya0VuYWJsZWQsXG4gIHNhdmVTZWxlY3Rpb24sXG4gIGNhbmNlbFNlbGVjdGlvbixcbiAgY2xlYXJTZWxlY3Rpb24sXG4gIHRyYW5zbGF0ZSxcbiAgY2xhc3NlcyxcbiAgbG9jYWxOb3RoaW5nVG9TZWxlY3QsXG4gIG5vdGhpbmdUb1NlbGVjdCxcbiAgdG9nZ2xlTm90aGluZ1RvU2VsZWN0LFxuICB0b2dnbGVCb29rbWFyayxcbiAgY2hhbmdlTW9kZSxcbiAgY2FuY2VsRWRpdFZlcnNlLFxuICBzYXZlRWRpdFZlcnNlLFxuICBjYW5jZWxDb21tZW50LFxuICBzYXZlQ29tbWVudCxcbn0pID0+IHtcbiAgc3dpdGNoIChtb2RlKSB7XG4gIGNhc2UgJ2VkaXQnOlxuICAgIHJldHVybiAoXG4gICAgICA8Q29uZmlybUVkaXRWZXJzZUFyZWFcbiAgICAgICAgdGFncz17dGFnc31cbiAgICAgICAgdHJhbnNsYXRlPXt0cmFuc2xhdGV9XG4gICAgICAgIGNhbmNlbEVkaXRWZXJzZT17Y2FuY2VsRWRpdFZlcnNlfVxuICAgICAgICBzYXZlRWRpdFZlcnNlPXtzYXZlRWRpdFZlcnNlfVxuICAgICAgLz5cbiAgICApO1xuICBjYXNlICdjb21tZW50JzpcbiAgICByZXR1cm4gKFxuICAgICAgPENvbmZpcm1Db21tZW50QXJlYVxuICAgICAgICB0cmFuc2xhdGU9e3RyYW5zbGF0ZX1cbiAgICAgICAgaXNDb21tZW50Q2hhbmdlZD17aXNDb21tZW50Q2hhbmdlZH1cbiAgICAgICAgY2FuY2VsQ29tbWVudD17Y2FuY2VsQ29tbWVudH1cbiAgICAgICAgc2F2ZUNvbW1lbnQ9e3NhdmVDb21tZW50fVxuICAgICAgLz5cbiAgICApO1xuICBjYXNlICdzZWxlY3QnOlxuICAgIHJldHVybiAoXG4gICAgICA8Q29uZmlybVNlbGVjdGlvbkFyZWFcbiAgICAgICAgY2xhc3Nlcz17Y2xhc3Nlc31cbiAgICAgICAgdHJhbnNsYXRlPXt0cmFuc2xhdGV9XG4gICAgICAgIGxvY2FsTm90aGluZ1RvU2VsZWN0PXtsb2NhbE5vdGhpbmdUb1NlbGVjdH1cbiAgICAgICAgbmV3U2VsZWN0aW9ucz17bmV3U2VsZWN0aW9uc31cbiAgICAgICAgbm90aGluZ1RvU2VsZWN0PXtub3RoaW5nVG9TZWxlY3R9XG4gICAgICAgIHNlbGVjdGlvbnM9e3NlbGVjdGlvbnN9XG4gICAgICAgIHRvZ2dsZU5vdGhpbmdUb1NlbGVjdD17dG9nZ2xlTm90aGluZ1RvU2VsZWN0fVxuICAgICAgICBjYW5jZWxTZWxlY3Rpb249e2NhbmNlbFNlbGVjdGlvbn1cbiAgICAgICAgY2xlYXJTZWxlY3Rpb249e2NsZWFyU2VsZWN0aW9ufVxuICAgICAgICBzYXZlU2VsZWN0aW9uPXtzYXZlU2VsZWN0aW9ufVxuICAgICAgLz5cbiAgICApO1xuICBjYXNlICdkZWZhdWx0JzpcbiAgICByZXR1cm4gKFxuICAgICAgPENoYW5nZU1vZGVBcmVhXG4gICAgICAgIHRyYW5zbGF0ZT17dHJhbnNsYXRlfVxuICAgICAgICBib29rbWFya0VuYWJsZWQ9e2Jvb2ttYXJrRW5hYmxlZH1cbiAgICAgICAgdG9nZ2xlQm9va21hcms9e3RvZ2dsZUJvb2ttYXJrfVxuICAgICAgICBjaGFuZ2VNb2RlPXtjaGFuZ2VNb2RlfVxuICAgICAgLz5cbiAgICApO1xuICBkZWZhdWx0OlxuICAgIHJldHVybiAoXG4gICAgICA8Q2hhbmdlTW9kZUFyZWFcbiAgICAgICAgdHJhbnNsYXRlPXt0cmFuc2xhdGV9XG4gICAgICAgIGJvb2ttYXJrRW5hYmxlZD17Ym9va21hcmtFbmFibGVkfVxuICAgICAgICB0b2dnbGVCb29rbWFyaz17dG9nZ2xlQm9va21hcmt9XG4gICAgICAgIGNoYW5nZU1vZGU9e2NoYW5nZU1vZGV9XG4gICAgICAvPlxuICAgICk7XG4gIH1cbn07XG5cbkFjdGlvbnNBcmVhLnByb3BUeXBlcyA9IHtcbiAgdGFnczogUHJvcFR5cGVzLmFycmF5LmlzUmVxdWlyZWQsXG4gIG1vZGU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgaXNDb21tZW50Q2hhbmdlZDogUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZCxcbiAgc2VsZWN0aW9uczogUHJvcFR5cGVzLmFycmF5LmlzUmVxdWlyZWQsXG4gIG5ld1NlbGVjdGlvbnM6IFByb3BUeXBlcy5hcnJheS5pc1JlcXVpcmVkLFxuICBib29rbWFya0VuYWJsZWQ6IFByb3BUeXBlcy5ib29sLmlzUmVxdWlyZWQsXG4gIGNsYXNzZXM6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcbiAgbG9jYWxOb3RoaW5nVG9TZWxlY3Q6IFByb3BUeXBlcy5ib29sLmlzUmVxdWlyZWQsXG4gIG5vdGhpbmdUb1NlbGVjdDogUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZCxcbiAgc2F2ZVNlbGVjdGlvbjogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgY2FuY2VsU2VsZWN0aW9uOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICBjbGVhclNlbGVjdGlvbjogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgdHJhbnNsYXRlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICB0b2dnbGVOb3RoaW5nVG9TZWxlY3Q6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIHRvZ2dsZUJvb2ttYXJrOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICBjaGFuZ2VNb2RlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICBjYW5jZWxFZGl0VmVyc2U6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIHNhdmVFZGl0VmVyc2U6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIGNhbmNlbENvbW1lbnQ6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIHNhdmVDb21tZW50OiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlcyhzdHlsZXMpKEFjdGlvbnNBcmVhKTtcbiJdfQ==