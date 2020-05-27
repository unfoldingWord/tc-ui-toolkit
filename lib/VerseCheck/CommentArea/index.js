"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactBootstrap = require("react-bootstrap");

require("./CommentArea.styles.css");

var _editHelpers = require("../../VerseEditor/helpers/editHelpers");

var CommentArea = function CommentArea(_ref) {
  var comment = _ref.comment,
      translate = _ref.translate,
      handleComment = _ref.handleComment,
      checkIfCommentChanged = _ref.checkIfCommentChanged;
  return _react["default"].createElement("div", {
    className: "comment-area"
  }, _react["default"].createElement("div", {
    style: {
      fontWeight: 'bold'
    }
  }, _react["default"].createElement(_reactBootstrap.Glyphicon, {
    glyph: "comment",
    style: {
      marginRight: '5px'
    }
  }), translate('comment')), _react["default"].createElement(_reactBootstrap.FormGroup, {
    style: {
      flex: 'auto',
      display: 'flex'
    },
    controlId: "formControlsTextarea"
  }, _react["default"].createElement(_reactBootstrap.FormControl, {
    autoFocus: true,
    onFocus: _editHelpers.moveCursorToEnd,
    componentClass: "textarea",
    type: "text",
    defaultValue: comment,
    style: {
      flex: 'auto'
    },
    onBlur: handleComment,
    onInput: checkIfCommentChanged
  })));
};

CommentArea.propTypes = {
  translate: _propTypes["default"].func.isRequired,
  comment: _propTypes["default"].string.isRequired,
  handleComment: _propTypes["default"].func.isRequired,
  checkIfCommentChanged: _propTypes["default"].func.isRequired
};
var _default = CommentArea;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9WZXJzZUNoZWNrL0NvbW1lbnRBcmVhL2luZGV4LmpzIl0sIm5hbWVzIjpbIkNvbW1lbnRBcmVhIiwiY29tbWVudCIsInRyYW5zbGF0ZSIsImhhbmRsZUNvbW1lbnQiLCJjaGVja0lmQ29tbWVudENoYW5nZWQiLCJmb250V2VpZ2h0IiwibWFyZ2luUmlnaHQiLCJmbGV4IiwiZGlzcGxheSIsIm1vdmVDdXJzb3JUb0VuZCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsImZ1bmMiLCJpc1JlcXVpcmVkIiwic3RyaW5nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFHQTs7QUFDQTs7QUFFQSxJQUFNQSxXQUFXLEdBQUcsU0FBZEEsV0FBYztBQUFBLE1BQ2xCQyxPQURrQixRQUNsQkEsT0FEa0I7QUFBQSxNQUVsQkMsU0FGa0IsUUFFbEJBLFNBRmtCO0FBQUEsTUFHbEJDLGFBSGtCLFFBR2xCQSxhQUhrQjtBQUFBLE1BSWxCQyxxQkFKa0IsUUFJbEJBLHFCQUprQjtBQUFBLFNBTWxCO0FBQUssSUFBQSxTQUFTLEVBQUM7QUFBZixLQUNFO0FBQUssSUFBQSxLQUFLLEVBQUU7QUFBRUMsTUFBQUEsVUFBVSxFQUFFO0FBQWQ7QUFBWixLQUNFLGdDQUFDLHlCQUFEO0FBQVcsSUFBQSxLQUFLLEVBQUMsU0FBakI7QUFBMkIsSUFBQSxLQUFLLEVBQUU7QUFBRUMsTUFBQUEsV0FBVyxFQUFFO0FBQWY7QUFBbEMsSUFERixFQUVHSixTQUFTLENBQUMsU0FBRCxDQUZaLENBREYsRUFLRSxnQ0FBQyx5QkFBRDtBQUFXLElBQUEsS0FBSyxFQUFFO0FBQUVLLE1BQUFBLElBQUksRUFBRSxNQUFSO0FBQWdCQyxNQUFBQSxPQUFPLEVBQUU7QUFBekIsS0FBbEI7QUFBcUQsSUFBQSxTQUFTLEVBQUM7QUFBL0QsS0FDRSxnQ0FBQywyQkFBRDtBQUNFLElBQUEsU0FBUyxNQURYO0FBRUUsSUFBQSxPQUFPLEVBQUVDLDRCQUZYO0FBR0UsSUFBQSxjQUFjLEVBQUMsVUFIakI7QUFJRSxJQUFBLElBQUksRUFBQyxNQUpQO0FBS0UsSUFBQSxZQUFZLEVBQUVSLE9BTGhCO0FBTUUsSUFBQSxLQUFLLEVBQUU7QUFBRU0sTUFBQUEsSUFBSSxFQUFFO0FBQVIsS0FOVDtBQU9FLElBQUEsTUFBTSxFQUFFSixhQVBWO0FBUUUsSUFBQSxPQUFPLEVBQUVDO0FBUlgsSUFERixDQUxGLENBTmtCO0FBQUEsQ0FBcEI7O0FBMEJBSixXQUFXLENBQUNVLFNBQVosR0FBd0I7QUFDdEJSLEVBQUFBLFNBQVMsRUFBRVMsc0JBQVVDLElBQVYsQ0FBZUMsVUFESjtBQUV0QlosRUFBQUEsT0FBTyxFQUFFVSxzQkFBVUcsTUFBVixDQUFpQkQsVUFGSjtBQUd0QlYsRUFBQUEsYUFBYSxFQUFFUSxzQkFBVUMsSUFBVixDQUFlQyxVQUhSO0FBSXRCVCxFQUFBQSxxQkFBcUIsRUFBRU8sc0JBQVVDLElBQVYsQ0FBZUM7QUFKaEIsQ0FBeEI7ZUFPZWIsVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHtcbiAgRm9ybUdyb3VwLCBGb3JtQ29udHJvbCwgR2x5cGhpY29uLFxufSBmcm9tICdyZWFjdC1ib290c3RyYXAnO1xuaW1wb3J0ICcuL0NvbW1lbnRBcmVhLnN0eWxlcy5jc3MnO1xuaW1wb3J0IHsgbW92ZUN1cnNvclRvRW5kIH0gZnJvbSAnLi4vLi4vVmVyc2VFZGl0b3IvaGVscGVycy9lZGl0SGVscGVycyc7XG5cbmNvbnN0IENvbW1lbnRBcmVhID0gKHtcbiAgY29tbWVudCxcbiAgdHJhbnNsYXRlLFxuICBoYW5kbGVDb21tZW50LFxuICBjaGVja0lmQ29tbWVudENoYW5nZWQsXG59KSA9PiAoXG4gIDxkaXYgY2xhc3NOYW1lPSdjb21tZW50LWFyZWEnPlxuICAgIDxkaXYgc3R5bGU9e3sgZm9udFdlaWdodDogJ2JvbGQnIH19PlxuICAgICAgPEdseXBoaWNvbiBnbHlwaD0nY29tbWVudCcgc3R5bGU9e3sgbWFyZ2luUmlnaHQ6ICc1cHgnIH19IC8+XG4gICAgICB7dHJhbnNsYXRlKCdjb21tZW50Jyl9XG4gICAgPC9kaXY+XG4gICAgPEZvcm1Hcm91cCBzdHlsZT17eyBmbGV4OiAnYXV0bycsIGRpc3BsYXk6ICdmbGV4JyB9fSBjb250cm9sSWQ9XCJmb3JtQ29udHJvbHNUZXh0YXJlYVwiPlxuICAgICAgPEZvcm1Db250cm9sXG4gICAgICAgIGF1dG9Gb2N1c1xuICAgICAgICBvbkZvY3VzPXttb3ZlQ3Vyc29yVG9FbmR9XG4gICAgICAgIGNvbXBvbmVudENsYXNzPSd0ZXh0YXJlYSdcbiAgICAgICAgdHlwZT0ndGV4dCdcbiAgICAgICAgZGVmYXVsdFZhbHVlPXtjb21tZW50fVxuICAgICAgICBzdHlsZT17eyBmbGV4OiAnYXV0bycgfX1cbiAgICAgICAgb25CbHVyPXtoYW5kbGVDb21tZW50fVxuICAgICAgICBvbklucHV0PXtjaGVja0lmQ29tbWVudENoYW5nZWR9XG4gICAgICAvPlxuICAgIDwvRm9ybUdyb3VwPlxuICA8L2Rpdj5cbik7XG5cbkNvbW1lbnRBcmVhLnByb3BUeXBlcyA9IHtcbiAgdHJhbnNsYXRlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICBjb21tZW50OiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gIGhhbmRsZUNvbW1lbnQ6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIGNoZWNrSWZDb21tZW50Q2hhbmdlZDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENvbW1lbnRBcmVhO1xuIl19