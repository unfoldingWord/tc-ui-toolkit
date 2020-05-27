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

var _deepEqual = _interopRequireDefault(require("deep-equal"));

var windowSelectionHelpers = _interopRequireWildcard(require("../helpers/windowSelectionHelpers"));

var selectionHelpers = _interopRequireWildcard(require("../helpers/selectionHelpers"));

var stringHelpers = _interopRequireWildcard(require("../helpers/stringHelpers"));

var _fontUtils = require("../../common/fontUtils");

// helpers
var RenderSelectionTextComponent = /*#__PURE__*/function (_Component) {
  (0, _inherits2["default"])(RenderSelectionTextComponent, _Component);

  function RenderSelectionTextComponent() {
    (0, _classCallCheck2["default"])(this, RenderSelectionTextComponent);
    return (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(RenderSelectionTextComponent).apply(this, arguments));
  }

  (0, _createClass2["default"])(RenderSelectionTextComponent, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      // track when the selections change to prevent false clicks of removals
      this.renderTimestamp = Date.now();
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      // track when the selections change to prevent false clicks of removals
      if (!(0, _deepEqual["default"])(this.props.selections, nextProps.selections)) {
        this.renderTimestamp = Date.now();
      }
    }
  }, {
    key: "getSelectionText",
    value: function getSelectionText(verseText) {
      var selection = windowSelectionHelpers.getSelectionFromCurrentWindowSelection(verseText);
      this.addSelection(selection);
    }
  }, {
    key: "addSelection",
    value: function addSelection(selection) {
      var _this$props = this.props,
          selections = _this$props.selections,
          verseText = _this$props.verseText,
          translate = _this$props.translate,
          openAlertDialog = _this$props.openAlertDialog,
          changeSelectionsInLocalState = _this$props.changeSelectionsInLocalState;
      selections = selectionHelpers.addSelectionToSelections(selection, selections, verseText); // this is a good place to preview selections before saved in state

      if (selections.length <= this.props.maximumSelections) {
        changeSelectionsInLocalState(selections);
      } else {
        var message = translate('select_too_many', {
          maximum: this.props.maximumSelections
        });
        openAlertDialog(message);
      }
    }
  }, {
    key: "removeSelection",
    value: function removeSelection(selection) {
      var _this$props2 = this.props,
          selections = _this$props2.selections,
          verseText = _this$props2.verseText,
          changeSelectionsInLocalState = _this$props2.changeSelectionsInLocalState;
      var newSelections = selectionHelpers.removeSelectionFromSelections(selection, selections, verseText);
      changeSelectionsInLocalState(newSelections);
    }
  }, {
    key: "inDisplayBox",
    value: function inDisplayBox(insideDisplayBox) {
      var verseText = this.props.verseText;
      this.setState({
        inBox: insideDisplayBox
      });

      if (!insideDisplayBox && Math.abs(window.getSelection().extentOffset - window.getSelection().baseOffset) > 0) {
        this.getSelectionText(verseText);
      }
    }
  }, {
    key: "verseTextSpans",
    value: function verseTextSpans(selections, verseText) {
      var _this = this;

      var verseTextSpans; // return

      var stringSplices = selectionHelpers.selectionsToStringSplices(verseText, selections);
      verseTextSpans = stringSplices.map(function (stringSplice, index) {
        var selectMode = _this.props.mode === 'select'; // use selectMode to conditionally use highlight and remove

        var style = {
          color: 'black'
        };

        var callback = function callback() {};

        if (stringSplice.selected) {
          style.backgroundColor = 'var(--highlight-color)';

          if (selectMode) {
            style.cursor = 'pointer'; // only show hand if in select mode

            callback = function callback() {
              var timePassed = Date.now() - _this.renderTimestamp; // see how long between now and last selection


              var isRealClick = timePassed > 100; // if the click happened quicker than 100ms, it was likely false click

              if (isRealClick) {
                _this.removeSelection(stringSplice);
              } // actually remove since it was likely a real click

            };
          }
        }

        var fontClass = (0, _fontUtils.getFontClassName)(_this.props.targetLanguageFont);
        return _react["default"].createElement("span", {
          key: index,
          className: fontClass,
          style: style,
          onClick: callback
        }, stringSplice.text);
      });
      return verseTextSpans;
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props3 = this.props,
          verseText = _this$props3.verseText,
          selections = _this$props3.selections,
          targetLanguageFont = _this$props3.targetLanguageFont; // normalize whitespace for text rendering in order to display highlights with more than one space since html selections show one space

      verseText = stringHelpers.normalizeString(verseText);
      var fontClass = (0, _fontUtils.getFontClassName)(targetLanguageFont);

      var verseTextSpans = _react["default"].createElement("span", {
        className: fontClass
      }, verseText);

      if (selections && selections.length > 0) {
        verseTextSpans = this.verseTextSpans(selections, verseText);
      }

      return _react["default"].createElement("div", {
        onMouseUp: function onMouseUp() {
          return _this2.getSelectionText(verseText);
        },
        onMouseLeave: function onMouseLeave() {
          return _this2.inDisplayBox(false);
        },
        onMouseEnter: function onMouseEnter() {
          return _this2.inDisplayBox(true);
        }
      }, verseTextSpans);
    }
  }]);
  return RenderSelectionTextComponent;
}(_react.Component);

RenderSelectionTextComponent.propTypes = {
  mode: _propTypes["default"].string.isRequired,
  verseText: _propTypes["default"].string.isRequired,
  selections: _propTypes["default"].array.isRequired,
  translate: _propTypes["default"].func.isRequired,
  maximumSelections: _propTypes["default"].number.isRequired,
  changeSelectionsInLocalState: _propTypes["default"].func.isRequired,
  openAlertDialog: _propTypes["default"].func.isRequired,
  targetLanguageFont: _propTypes["default"].string
};
var _default = RenderSelectionTextComponent;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9WZXJzZUNoZWNrL1JlbmRlclNlbGVjdGlvblRleHRDb21wb25lbnQvaW5kZXguanMiXSwibmFtZXMiOlsiUmVuZGVyU2VsZWN0aW9uVGV4dENvbXBvbmVudCIsInJlbmRlclRpbWVzdGFtcCIsIkRhdGUiLCJub3ciLCJuZXh0UHJvcHMiLCJwcm9wcyIsInNlbGVjdGlvbnMiLCJ2ZXJzZVRleHQiLCJzZWxlY3Rpb24iLCJ3aW5kb3dTZWxlY3Rpb25IZWxwZXJzIiwiZ2V0U2VsZWN0aW9uRnJvbUN1cnJlbnRXaW5kb3dTZWxlY3Rpb24iLCJhZGRTZWxlY3Rpb24iLCJ0cmFuc2xhdGUiLCJvcGVuQWxlcnREaWFsb2ciLCJjaGFuZ2VTZWxlY3Rpb25zSW5Mb2NhbFN0YXRlIiwic2VsZWN0aW9uSGVscGVycyIsImFkZFNlbGVjdGlvblRvU2VsZWN0aW9ucyIsImxlbmd0aCIsIm1heGltdW1TZWxlY3Rpb25zIiwibWVzc2FnZSIsIm1heGltdW0iLCJuZXdTZWxlY3Rpb25zIiwicmVtb3ZlU2VsZWN0aW9uRnJvbVNlbGVjdGlvbnMiLCJpbnNpZGVEaXNwbGF5Qm94Iiwic2V0U3RhdGUiLCJpbkJveCIsIk1hdGgiLCJhYnMiLCJ3aW5kb3ciLCJnZXRTZWxlY3Rpb24iLCJleHRlbnRPZmZzZXQiLCJiYXNlT2Zmc2V0IiwiZ2V0U2VsZWN0aW9uVGV4dCIsInZlcnNlVGV4dFNwYW5zIiwic3RyaW5nU3BsaWNlcyIsInNlbGVjdGlvbnNUb1N0cmluZ1NwbGljZXMiLCJtYXAiLCJzdHJpbmdTcGxpY2UiLCJpbmRleCIsInNlbGVjdE1vZGUiLCJtb2RlIiwic3R5bGUiLCJjb2xvciIsImNhbGxiYWNrIiwic2VsZWN0ZWQiLCJiYWNrZ3JvdW5kQ29sb3IiLCJjdXJzb3IiLCJ0aW1lUGFzc2VkIiwiaXNSZWFsQ2xpY2siLCJyZW1vdmVTZWxlY3Rpb24iLCJmb250Q2xhc3MiLCJ0YXJnZXRMYW5ndWFnZUZvbnQiLCJ0ZXh0Iiwic3RyaW5nSGVscGVycyIsIm5vcm1hbGl6ZVN0cmluZyIsImluRGlzcGxheUJveCIsIkNvbXBvbmVudCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsInN0cmluZyIsImlzUmVxdWlyZWQiLCJhcnJheSIsImZ1bmMiLCJudW1iZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUNBOztBQUNBOztBQUVBOztBQUNBOztBQUNBOztBQUNBOztBQUpBO0lBTU1BLDRCOzs7Ozs7Ozs7O3lDQUNpQjtBQUNuQjtBQUNBLFdBQUtDLGVBQUwsR0FBdUJDLElBQUksQ0FBQ0MsR0FBTCxFQUF2QjtBQUNEOzs7OENBRXlCQyxTLEVBQVc7QUFDbkM7QUFDQSxVQUFJLENBQUMsMkJBQVEsS0FBS0MsS0FBTCxDQUFXQyxVQUFuQixFQUErQkYsU0FBUyxDQUFDRSxVQUF6QyxDQUFMLEVBQTJEO0FBQ3pELGFBQUtMLGVBQUwsR0FBdUJDLElBQUksQ0FBQ0MsR0FBTCxFQUF2QjtBQUNEO0FBQ0Y7OztxQ0FFZ0JJLFMsRUFBVztBQUMxQixVQUFNQyxTQUFTLEdBQUdDLHNCQUFzQixDQUFDQyxzQ0FBdkIsQ0FBOERILFNBQTlELENBQWxCO0FBQ0EsV0FBS0ksWUFBTCxDQUFrQkgsU0FBbEI7QUFDRDs7O2lDQUVZQSxTLEVBQVc7QUFBQSx3QkFPbEIsS0FBS0gsS0FQYTtBQUFBLFVBRXBCQyxVQUZvQixlQUVwQkEsVUFGb0I7QUFBQSxVQUdwQkMsU0FIb0IsZUFHcEJBLFNBSG9CO0FBQUEsVUFJcEJLLFNBSm9CLGVBSXBCQSxTQUpvQjtBQUFBLFVBS3BCQyxlQUxvQixlQUtwQkEsZUFMb0I7QUFBQSxVQU1wQkMsNEJBTm9CLGVBTXBCQSw0QkFOb0I7QUFRdEJSLE1BQUFBLFVBQVUsR0FBR1MsZ0JBQWdCLENBQUNDLHdCQUFqQixDQUEwQ1IsU0FBMUMsRUFBcURGLFVBQXJELEVBQWlFQyxTQUFqRSxDQUFiLENBUnNCLENBVXRCOztBQUNBLFVBQUlELFVBQVUsQ0FBQ1csTUFBWCxJQUFxQixLQUFLWixLQUFMLENBQVdhLGlCQUFw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QUFWLENBQWdCRCxVQUhXO0FBSXZDaEQsRUFBQUEsU0FBUyxFQUFFOEMsc0JBQVVJLElBQVYsQ0FBZUYsVUFKYTtBQUt2QzFDLEVBQUFBLGlCQUFpQixFQUFFd0Msc0JBQVVLLE1BQVYsQ0FBaUJILFVBTEc7QUFNdkM5QyxFQUFBQSw0QkFBNEIsRUFBRTRDLHNCQUFVSSxJQUFWLENBQWVGLFVBTk47QUFPdkMvQyxFQUFBQSxlQUFlLEVBQUU2QyxzQkFBVUksSUFBVixDQUFlRixVQVBPO0FBUXZDVCxFQUFBQSxrQkFBa0IsRUFBRU8sc0JBQVVDO0FBUlMsQ0FBekM7ZUFXZTNELDRCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgaXNFcXVhbCBmcm9tICdkZWVwLWVxdWFsJztcbi8vIGhlbHBlcnNcbmltcG9ydCAqIGFzIHdpbmRvd1NlbGVjdGlvbkhlbHBlcnMgZnJvbSAnLi4vaGVscGVycy93aW5kb3dTZWxlY3Rpb25IZWxwZXJzJztcbmltcG9ydCAqIGFzIHNlbGVjdGlvbkhlbHBlcnMgZnJvbSAnLi4vaGVscGVycy9zZWxlY3Rpb25IZWxwZXJzJztcbmltcG9ydCAqIGFzIHN0cmluZ0hlbHBlcnMgZnJvbSAnLi4vaGVscGVycy9zdHJpbmdIZWxwZXJzJztcbmltcG9ydCB7IGdldEZvbnRDbGFzc05hbWUgfSBmcm9tICcuLi8uLi9jb21tb24vZm9udFV0aWxzJztcblxuY2xhc3MgUmVuZGVyU2VsZWN0aW9uVGV4dENvbXBvbmVudCBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbXBvbmVudFdpbGxNb3VudCgpIHtcbiAgICAvLyB0cmFjayB3aGVuIHRoZSBzZWxlY3Rpb25zIGNoYW5nZSB0byBwcmV2ZW50IGZhbHNlIGNsaWNrcyBvZiByZW1vdmFsc1xuICAgIHRoaXMucmVuZGVyVGltZXN0YW1wID0gRGF0ZS5ub3coKTtcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMobmV4dFByb3BzKSB7XG4gICAgLy8gdHJhY2sgd2hlbiB0aGUgc2VsZWN0aW9ucyBjaGFuZ2UgdG8gcHJldmVudCBmYWxzZSBjbGlja3Mgb2YgcmVtb3ZhbHNcbiAgICBpZiAoIWlzRXF1YWwodGhpcy5wcm9wcy5zZWxlY3Rpb25zLCBuZXh0UHJvcHMuc2VsZWN0aW9ucykpIHtcbiAgICAgIHRoaXMucmVuZGVyVGltZXN0YW1wID0gRGF0ZS5ub3coKTtcbiAgICB9XG4gIH1cblxuICBnZXRTZWxlY3Rpb25UZXh0KHZlcnNlVGV4dCkge1xuICAgIGNvbnN0IHNlbGVjdGlvbiA9IHdpbmRvd1NlbGVjdGlvbkhlbHBlcnMuZ2V0U2VsZWN0aW9uRnJvbUN1cnJlbnRXaW5kb3dTZWxlY3Rpb24odmVyc2VUZXh0KTtcbiAgICB0aGlzLmFkZFNlbGVjdGlvbihzZWxlY3Rpb24pO1xuICB9XG5cbiAgYWRkU2VsZWN0aW9uKHNlbGVjdGlvbikge1xuICAgIGxldCB7XG4gICAgICBzZWxlY3Rpb25zLFxuICAgICAgdmVyc2VUZXh0LFxuICAgICAgdHJhbnNsYXRlLFxuICAgICAgb3BlbkFsZXJ0RGlhbG9nLFxuICAgICAgY2hhbmdlU2VsZWN0aW9uc0luTG9jYWxTdGF0ZSxcbiAgICB9ID0gdGhpcy5wcm9wcztcbiAgICBzZWxlY3Rpb25zID0gc2VsZWN0aW9uSGVscGVycy5hZGRTZWxlY3Rpb25Ub1NlbGVjdGlvbnMoc2VsZWN0aW9uLCBzZWxlY3Rpb25zLCB2ZXJzZVRleHQpO1xuXG4gICAgLy8gdGhpcyBpcyBhIGdvb2QgcGxhY2UgdG8gcHJldmlldyBzZWxlY3Rpb25zIGJlZm9yZSBzYXZlZCBpbiBzdGF0ZVxuICAgIGlmIChzZWxlY3Rpb25zLmxlbmd0aCA8PSB0aGlzLnByb3BzLm1heGltdW1TZWxlY3Rpb25zKSB7XG4gICAgICBjaGFuZ2VTZWxlY3Rpb25zSW5Mb2NhbFN0YXRlKHNlbGVjdGlvbnMpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBtZXNzYWdlID0gdHJhbnNsYXRlKCdzZWxlY3RfdG9vX21hbnknLCB7IG1heGltdW06IHRoaXMucHJvcHMubWF4aW11bVNlbGVjdGlvbnMgfSk7XG4gICAgICBvcGVuQWxlcnREaWFsb2cobWVzc2FnZSk7XG4gICAgfVxuICB9XG5cbiAgcmVtb3ZlU2VsZWN0aW9uKHNlbGVjdGlvbikge1xuICAgIGNvbnN0IHtcbiAgICAgIHNlbGVjdGlvbnMsXG4gICAgICB2ZXJzZVRleHQsXG4gICAgICBjaGFuZ2VTZWxlY3Rpb25zSW5Mb2NhbFN0YXRlLFxuICAgIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IG5ld1NlbGVjdGlvbnMgPSBzZWxlY3Rpb25IZWxwZXJzLnJlbW92ZVNlbGVjdGlvbkZyb21TZWxlY3Rpb25zKHNlbGVjdGlvbiwgc2VsZWN0aW9ucywgdmVyc2VUZXh0KTtcbiAgICBjaGFuZ2VTZWxlY3Rpb25zSW5Mb2NhbFN0YXRlKG5ld1NlbGVjdGlvbnMpO1xuICB9XG5cbiAgaW5EaXNwbGF5Qm94KGluc2lkZURpc3BsYXlCb3gpIHtcbiAgICBjb25zdCB7IHZlcnNlVGV4dCB9ID0gdGhpcy5wcm9wcztcbiAgICB0aGlzLnNldFN0YXRlKHsgaW5Cb3g6IGluc2lkZURpc3BsYXlCb3ggfSk7XG5cbiAgICBpZiAoIWluc2lkZURpc3BsYXlCb3ggJiYgTWF0aC5hYnMod2luZG93LmdldFNlbGVjdGlvbigpLmV4dGVudE9mZnNldCAtIHdpbmRvdy5nZXRTZWxlY3Rpb24oKS5iYXNlT2Zmc2V0KSA+IDApIHtcbiAgICAgIHRoaXMuZ2V0U2VsZWN0aW9uVGV4dCh2ZXJzZVRleHQpO1xuICAgIH1cbiAgfVxuXG4gIHZlcnNlVGV4dFNwYW5zKHNlbGVjdGlvbnMsIHZlcnNlVGV4dCkge1xuICAgIGxldCB2ZXJzZVRleHRTcGFuczsgLy8gcmV0dXJuXG4gICAgY29uc3Qgc3RyaW5nU3BsaWNlcyA9IHNlbGVjdGlvbkhlbHBlcnMuc2VsZWN0aW9uc1RvU3RyaW5nU3BsaWNlcyh2ZXJzZVRleHQsIHNlbGVjdGlvbnMpO1xuXG4gICAgdmVyc2VUZXh0U3BhbnMgPSBzdHJpbmdTcGxpY2VzLm1hcCgoc3RyaW5nU3BsaWNlLCBpbmRleCkgPT4ge1xuICAgICAgY29uc3Qgc2VsZWN0TW9kZSA9ICh0aGlzLnByb3BzLm1vZGUgPT09ICdzZWxlY3QnKTsgLy8gdXNlIHNlbGVjdE1vZGUgdG8gY29uZGl0aW9uYWxseSB1c2UgaGlnaGxpZ2h0IGFuZCByZW1vdmVcbiAgICAgIGxldCBzdHlsZSA9IHsgY29sb3I6ICdibGFjaycgfTtcblxuICAgICAgbGV0IGNhbGxiYWNrID0gKCkgPT4ge307XG5cbiAgICAgIGlmIChzdHJpbmdTcGxpY2Uuc2VsZWN0ZWQpIHtcbiAgICAgICAgc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3ZhcigtLWhpZ2hsaWdodC1jb2xvciknO1xuXG4gICAgICAgIGlmIChzZWxlY3RNb2RlKSB7XG4gICAgICAgICAgc3R5bGUuY3Vyc29yID0gJ3BvaW50ZXInOyAvLyBvbmx5IHNob3cgaGFuZCBpZiBpbiBzZWxlY3QgbW9kZVxuICAgICAgICAgIGNhbGxiYWNrID0gKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgdGltZVBhc3NlZCA9IERhdGUubm93KCkgLSB0aGlzLnJlbmRlclRpbWVzdGFtcDsgLy8gc2VlIGhvdyBsb25nIGJldHdlZW4gbm93IGFuZCBsYXN0IHNlbGVjdGlvblxuICAgICAgICAgICAgY29uc3QgaXNSZWFsQ2xpY2sgPSB0aW1lUGFzc2VkID4gMTAwOyAvLyBpZiB0aGUgY2xpY2sgaGFwcGVuZWQgcXVpY2tlciB0aGFuIDEwMG1zLCBpdCB3YXMgbGlrZWx5IGZhbHNlIGNsaWNrXG5cbiAgICAgICAgICAgIGlmIChpc1JlYWxDbGljaykge1xuICAgICAgICAgICAgICB0aGlzLnJlbW92ZVNlbGVjdGlvbihzdHJpbmdTcGxpY2UpO1xuICAgICAgICAgICAgfSAvLyBhY3R1YWxseSByZW1vdmUgc2luY2UgaXQgd2FzIGxpa2VseSBhIHJlYWwgY2xpY2tcbiAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGZvbnRDbGFzcyA9IGdldEZvbnRDbGFzc05hbWUodGhpcy5wcm9wcy50YXJnZXRMYW5ndWFnZUZvbnQpO1xuXG4gICAgICByZXR1cm4gKFxuICAgICAgICA8c3BhbiBrZXk9e2luZGV4fSBjbGFzc05hbWU9e2ZvbnRDbGFzc30gc3R5bGU9e3N0eWxlfSBvbkNsaWNrPXtjYWxsYmFja30+XG4gICAgICAgICAge3N0cmluZ1NwbGljZS50ZXh0fVxuICAgICAgICA8L3NwYW4+XG4gICAgICApO1xuICAgIH0pO1xuICAgIHJldHVybiB2ZXJzZVRleHRTcGFucztcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBsZXQge1xuICAgICAgdmVyc2VUZXh0LCBzZWxlY3Rpb25zLCB0YXJnZXRMYW5ndWFnZUZvbnQsXG4gICAgfSA9IHRoaXMucHJvcHM7XG4gICAgLy8gbm9ybWFsaXplIHdoaXRlc3BhY2UgZm9yIHRleHQgcmVuZGVyaW5nIGluIG9yZGVyIHRvIGRpc3BsYXkgaGlnaGxpZ2h0cyB3aXRoIG1vcmUgdGhhbiBvbmUgc3BhY2Ugc2luY2UgaHRtbCBzZWxlY3Rpb25zIHNob3cgb25lIHNwYWNlXG4gICAgdmVyc2VUZXh0ID0gc3RyaW5nSGVscGVycy5ub3JtYWxpemVTdHJpbmcodmVyc2VUZXh0KTtcbiAgICBjb25zdCBmb250Q2xhc3MgPSBnZXRGb250Q2xhc3NOYW1lKHRhcmdldExhbmd1YWdlRm9udCk7XG4gICAgbGV0IHZlcnNlVGV4dFNwYW5zID0gPHNwYW4gY2xhc3NOYW1lPXtmb250Q2xhc3N9Pnt2ZXJzZVRleHR9PC9zcGFuPjtcblxuICAgIGlmIChzZWxlY3Rpb25zICYmIHNlbGVjdGlvbnMubGVuZ3RoID4gMCkge1xuICAgICAgdmVyc2VUZXh0U3BhbnMgPSB0aGlzLnZlcnNlVGV4dFNwYW5zKHNlbGVjdGlvbnMsIHZlcnNlVGV4dCk7XG4gICAgfVxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IG9uTW91c2VVcD17KCkgPT4gdGhpcy5nZXRTZWxlY3Rpb25UZXh0KHZlcnNlVGV4dCl9IG9uTW91c2VMZWF2ZT17KCkgPT4gdGhpcy5pbkRpc3BsYXlCb3goZmFsc2UpfSBvbk1vdXNlRW50ZXI9eygpID0+IHRoaXMuaW5EaXNwbGF5Qm94KHRydWUpfT5cbiAgICAgICAge3ZlcnNlVGV4dFNwYW5zfVxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5SZW5kZXJTZWxlY3Rpb25UZXh0Q29tcG9uZW50LnByb3BUeXBlcyA9IHtcbiAgbW9kZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICB2ZXJzZVRleHQ6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgc2VsZWN0aW9uczogUHJvcFR5cGVzLmFycmF5LmlzUmVxdWlyZWQsXG4gIHRyYW5zbGF0ZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgbWF4aW11bVNlbGVjdGlvbnM6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgY2hhbmdlU2VsZWN0aW9uc0luTG9jYWxTdGF0ZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgb3BlbkFsZXJ0RGlhbG9nOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICB0YXJnZXRMYW5ndWFnZUZvbnQ6IFByb3BUeXBlcy5zdHJpbmcsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBSZW5kZXJTZWxlY3Rpb25UZXh0Q29tcG9uZW50O1xuIl19