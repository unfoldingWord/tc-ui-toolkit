"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactBootstrap = require("react-bootstrap");

var _InvalidatedIcon = _interopRequireDefault(require("./svgIcons/InvalidatedIcon"));

var IconIndicators = function IconIndicators(_ref) {
  var isVerseEdited = _ref.isVerseEdited,
      selections = _ref.selections,
      bookmarkEnabled = _ref.bookmarkEnabled,
      translate = _ref.translate,
      invalidated = _ref.invalidated,
      comment = _ref.comment,
      nothingToSelect = _ref.nothingToSelect;

  function getInvalidatedIcon() {
    if (invalidated) {
      return _react["default"].createElement("div", {
        key: "invalidated",
        className: 'glyphicon glyphicon-invalidated',
        style: {
          margin: '0px 20px'
        }
      }, _react["default"].createElement(_InvalidatedIcon["default"], {
        height: 16,
        width: 16,
        color: "#ffffff"
      }));
    }
  }

  var title;

  if (selections.length > 0) {
    title = translate('icons.selections_found');
  } else if (nothingToSelect) {
    title = translate('no_selection_needed');
  } else {
    title = translate('icons.no_selections_found');
  }

  return _react["default"].createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'flex-end'
    }
  }, getInvalidatedIcon(), _react["default"].createElement(_reactBootstrap.Glyphicon, {
    glyph: "ok",
    style: {
      margin: '0px 20px',
      color: 'var(--reverse-color)',
      opacity: selections.length > 0 || nothingToSelect ? 1 : 0.2
    },
    title: title
  }), _react["default"].createElement(_reactBootstrap.Glyphicon, {
    glyph: "pencil",
    style: {
      margin: '0px 20px',
      color: 'var(--reverse-color)',
      opacity: isVerseEdited ? 1 : 0.2
    },
    title: isVerseEdited ? translate('icons.verse_edits_found') : translate('icons.no_verse_edits_found')
  }), _react["default"].createElement(_reactBootstrap.Glyphicon, {
    glyph: "comment",
    style: {
      margin: '0px 20px',
      color: 'var(--reverse-color)',
      opacity: comment && comment.length > 0 ? 1 : 0.2
    },
    title: comment && comment.length > 0 ? translate('icons.comments_found') : translate('icons.no_comments_found')
  }), _react["default"].createElement(_reactBootstrap.Glyphicon, {
    glyph: "bookmark",
    style: {
      margin: '0px 20px',
      color: 'var(--reverse-color)',
      opacity: bookmarkEnabled ? 1 : 0.2
    },
    title: bookmarkEnabled ? translate('icons.bookmarked') : translate('icons.not_bookmarked')
  }));
};

IconIndicators.propTypes = {
  translate: _propTypes["default"].func.isRequired,
  invalidated: _propTypes["default"].bool.isRequired,
  isVerseEdited: _propTypes["default"].bool.isRequired,
  selections: _propTypes["default"].array,
  comment: _propTypes["default"].string,
  bookmarkEnabled: _propTypes["default"].bool,
  nothingToSelect: _propTypes["default"].bool
};
var _default = IconIndicators;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9WZXJzZUNoZWNrL0ljb25JbmRpY2F0b3JzL2luZGV4LmpzIl0sIm5hbWVzIjpbIkljb25JbmRpY2F0b3JzIiwiaXNWZXJzZUVkaXRlZCIsInNlbGVjdGlvbnMiLCJib29rbWFya0VuYWJsZWQiLCJ0cmFuc2xhdGUiLCJpbnZhbGlkYXRlZCIsImNvbW1lbnQiLCJub3RoaW5nVG9TZWxlY3QiLCJnZXRJbnZhbGlkYXRlZEljb24iLCJtYXJnaW4iLCJ0aXRsZSIsImxlbmd0aCIsImRpc3BsYXkiLCJqdXN0aWZ5Q29udGVudCIsImNvbG9yIiwib3BhY2l0eSIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsImZ1bmMiLCJpc1JlcXVpcmVkIiwiYm9vbCIsImFycmF5Iiwic3RyaW5nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFFQSxJQUFNQSxjQUFjLEdBQUcsU0FBakJBLGNBQWlCLE9BUWpCO0FBQUEsTUFQSkMsYUFPSSxRQVBKQSxhQU9JO0FBQUEsTUFOSkMsVUFNSSxRQU5KQSxVQU1JO0FBQUEsTUFMSkMsZUFLSSxRQUxKQSxlQUtJO0FBQUEsTUFKSkMsU0FJSSxRQUpKQSxTQUlJO0FBQUEsTUFISkMsV0FHSSxRQUhKQSxXQUdJO0FBQUEsTUFGSkMsT0FFSSxRQUZKQSxPQUVJO0FBQUEsTUFESkMsZUFDSSxRQURKQSxlQUNJOztBQUNKLFdBQVNDLGtCQUFULEdBQThCO0FBQzVCLFFBQUlILFdBQUosRUFBaUI7QUFDZixhQUNFO0FBQUssUUFBQSxHQUFHLEVBQUMsYUFBVDtBQUNFLFFBQUEsU0FBUyxFQUFFLGlDQURiO0FBRUUsUUFBQSxLQUFLLEVBQUU7QUFBRUksVUFBQUEsTUFBTSxFQUFFO0FBQVY7QUFGVCxTQUdFLGdDQUFDLDJCQUFEO0FBQ0UsUUFBQSxNQUFNLEVBQUUsRUFEVjtBQUVFLFFBQUEsS0FBSyxFQUFFLEVBRlQ7QUFHRSxRQUFBLEtBQUssRUFBQztBQUhSLFFBSEYsQ0FERjtB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LENBQTNCO2VBVWVwQixjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyBHbHlwaGljb24gfSBmcm9tICdyZWFjdC1ib290c3RyYXAnO1xuaW1wb3J0IEludmFsaWRhdGVkSWNvbiBmcm9tICcuL3N2Z0ljb25zL0ludmFsaWRhdGVkSWNvbic7XG5cbmNvbnN0IEljb25JbmRpY2F0b3JzID0gKHtcbiAgaXNWZXJzZUVkaXRlZCxcbiAgc2VsZWN0aW9ucyxcbiAgYm9va21hcmtFbmFibGVkLFxuICB0cmFuc2xhdGUsXG4gIGludmFsaWRhdGVkLFxuICBjb21tZW50LFxuICBub3RoaW5nVG9TZWxlY3QsXG59KSA9PiB7XG4gIGZ1bmN0aW9uIGdldEludmFsaWRhdGVkSWNvbigpIHtcbiAgICBpZiAoaW52YWxpZGF0ZWQpIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYga2V5PSdpbnZhbGlkYXRlZCdcbiAgICAgICAgICBjbGFzc05hbWU9eydnbHlwaGljb24gZ2x5cGhpY29uLWludmFsaWRhdGVkJ31cbiAgICAgICAgICBzdHlsZT17eyBtYXJnaW46ICcwcHggMjBweCcgfX0+XG4gICAgICAgICAgPEludmFsaWRhdGVkSWNvblxuICAgICAgICAgICAgaGVpZ2h0PXsxNn1cbiAgICAgICAgICAgIHdpZHRoPXsxNn1cbiAgICAgICAgICAgIGNvbG9yPScjZmZmZmZmJ1xuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICBsZXQgdGl0bGU7XG5cbiAgaWYgKHNlbGVjdGlvbnMubGVuZ3RoID4gMCkge1xuICAgIHRpdGxlID0gdHJhbnNsYXRlKCdpY29ucy5zZWxlY3Rpb25zX2ZvdW5kJyk7XG4gIH0gZWxzZSBpZiAobm90aGluZ1RvU2VsZWN0KSB7XG4gICAgdGl0bGUgPSB0cmFuc2xhdGUoJ25vX3NlbGVjdGlvbl9uZWVkZWQnKTtcbiAgfSBlbHNlIHtcbiAgICB0aXRsZSA9IHRyYW5zbGF0ZSgnaWNvbnMubm9fc2VsZWN0aW9uc19mb3VuZCcpO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywganVzdGlmeUNvbnRlbnQ6ICdmbGV4LWVuZCcgfX0+XG4gICAgICB7Z2V0SW52YWxpZGF0ZWRJY29uKCl9XG4gICAgICA8R2x5cGhpY29uXG4gICAgICAgIGdseXBoPVwib2tcIlxuICAgICAgICBzdHlsZT17e1xuICAgICAgICAgIG1hcmdpbjogJzBweCAyMHB4JyxcbiAgICAgICAgICBjb2xvcjogJ3ZhcigtLXJldmVyc2UtY29sb3IpJyxcbiAgICAgICAgICBvcGFjaXR5OiBzZWxlY3Rpb25zLmxlbmd0aCA+IDAgfHwgbm90aGluZ1RvU2VsZWN0ID8gMSA6IDAuMixcbiAgICAgICAgfX1cbiAgICAgICAgdGl0bGU9e3RpdGxlfVxuICAgICAgLz5cbiAgICAgIDxHbHlwaGljb25cbiAgICAgICAgZ2x5cGg9XCJwZW5jaWxcIlxuICAgICAgICBzdHlsZT17e1xuICAgICAgICAgIG1hcmdpbjogJzBweCAyMHB4JyxcbiAgICAgICAgICBjb2xvcjogJ3ZhcigtLXJldmVyc2UtY29sb3IpJyxcbiAgICAgICAgICBvcGFjaXR5OiBpc1ZlcnNlRWRpdGVkID8gMSA6IDAuMixcbiAgICAgICAgfX1cbiAgICAgICAgdGl0bGU9e2lzVmVyc2VFZGl0ZWQgPyB0cmFuc2xhdGUoJ2ljb25zLnZlcnNlX2VkaXRzX2ZvdW5kJykgOiB0cmFuc2xhdGUoJ2ljb25zLm5vX3ZlcnNlX2VkaXRzX2ZvdW5kJyl9XG4gICAgICAvPlxuICAgICAgPEdseXBoaWNvblxuICAgICAgICBnbHlwaD1cImNvbW1lbnRcIlxuICAgICAgICBzdHlsZT17e1xuICAgICAgICAgIG1hcmdpbjogJzBweCAyMHB4JyxcbiAgICAgICAgICBjb2xvcjogJ3ZhcigtLXJldmVyc2UtY29sb3IpJyxcbiAgICAgICAgICBvcGFjaXR5OiBjb21tZW50ICYmIGNvbW1lbnQubGVuZ3RoID4gMCA/IDEgOiAwLjIsXG4gICAgICAgIH19XG4gICAgICAgIHRpdGxlPXtjb21tZW50ICYmIGNvbW1lbnQubGVuZ3RoID4gMCA/IHRyYW5zbGF0ZSgnaWNvbnMuY29tbWVudHNfZm91bmQnKSA6IHRyYW5zbGF0ZSgnaWNvbnMubm9fY29tbWVudHNfZm91bmQnKX1cbiAgICAgIC8+XG4gICAgICA8R2x5cGhpY29uXG4gICAgICAgIGdseXBoPVwiYm9va21hcmtcIlxuICAgICAgICBzdHlsZT17e1xuICAgICAgICAgIG1hcmdpbjogJzBweCAyMHB4JyxcbiAgICAgICAgICBjb2xvcjogJ3ZhcigtLXJldmVyc2UtY29sb3IpJyxcbiAgICAgICAgICBvcGFjaXR5OiBib29rbWFya0VuYWJsZWQgPyAxIDogMC4yLFxuICAgICAgICB9fVxuICAgICAgICB0aXRsZT17Ym9va21hcmtFbmFibGVkID8gdHJhbnNsYXRlKCdpY29ucy5ib29rbWFya2VkJykgOiB0cmFuc2xhdGUoJ2ljb25zLm5vdF9ib29rbWFya2VkJyl9XG4gICAgICAvPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuSWNvbkluZGljYXRvcnMucHJvcFR5cGVzID0ge1xuICB0cmFuc2xhdGU6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIGludmFsaWRhdGVkOiBQcm9wVHlwZXMuYm9vbC5pc1JlcXVpcmVkLFxuICBpc1ZlcnNlRWRpdGVkOiBQcm9wVHlwZXMuYm9vbC5pc1JlcXVpcmVkLFxuICBzZWxlY3Rpb25zOiBQcm9wVHlwZXMuYXJyYXksXG4gIGNvbW1lbnQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGJvb2ttYXJrRW5hYmxlZDogUHJvcFR5cGVzLmJvb2wsXG4gIG5vdGhpbmdUb1NlbGVjdDogUHJvcFR5cGVzLmJvb2wsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBJY29uSW5kaWNhdG9ycztcbiJdfQ==