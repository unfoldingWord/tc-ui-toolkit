"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactBootstrap = require("react-bootstrap");

var _GroupsMenuFilterOption = _interopRequireDefault(require("../GroupsMenuFilterOption"));

var _InvalidatedIcon = _interopRequireDefault(require("../InvalidatedIcon"));

var ExpandedFilter = function ExpandedFilter(_ref) {
  var filters = _ref.filters,
      setFilter = _ref.setFilter,
      translate = _ref.translate;
  var options = [];
  options.push(_react["default"].createElement(_GroupsMenuFilterOption["default"], {
    onCheck: function onCheck(name, value) {
      return setFilter(name, value);
    },
    key: "invalidated",
    name: "invalidated",
    checked: filters.invalidated,
    setFilter: setFilter,
    icon: _react["default"].createElement(_InvalidatedIcon["default"], {
      width: 16,
      height: 16,
      color: "#fff"
    }),
    text: translate('menu.invalidated')
  }));
  options.push(_react["default"].createElement(_GroupsMenuFilterOption["default"], {
    onCheck: function onCheck(name, value) {
      return setFilter(name, value);
    },
    key: "reminders",
    name: "reminders",
    checked: filters.reminders,
    setFilter: setFilter,
    icon: _react["default"].createElement(_reactBootstrap.Glyphicon, {
      glyph: "bookmark"
    }),
    text: translate('menu.bookmarks')
  }));
  options.push(_react["default"].createElement(_GroupsMenuFilterOption["default"], {
    onCheck: function onCheck(name, value) {
      return setFilter(name, value);
    },
    key: "selections",
    name: "selections",
    checked: filters.selections,
    disabled: filters.noSelections,
    setFilter: setFilter,
    icon: _react["default"].createElement(_reactBootstrap.Glyphicon, {
      glyph: "ok"
    }),
    text: translate('menu.selected')
  }));
  options.push(_react["default"].createElement(_GroupsMenuFilterOption["default"], {
    onCheck: function onCheck(name, value) {
      return setFilter(name, value);
    },
    key: "noSelections",
    name: "noSelections",
    checked: filters.noSelections,
    disabled: filters.selections,
    setFilter: setFilter,
    icon: _react["default"].createElement(_reactBootstrap.Glyphicon, {
      glyph: "ban-circle"
    }),
    text: translate('menu.no_selection')
  }));
  options.push(_react["default"].createElement(_GroupsMenuFilterOption["default"], {
    onCheck: function onCheck(name, value) {
      return setFilter(name, value);
    },
    key: "verseEdits",
    name: "verseEdits",
    checked: filters.verseEdits,
    setFilter: setFilter,
    icon: _react["default"].createElement(_reactBootstrap.Glyphicon, {
      glyph: "pencil"
    }),
    text: translate('menu.verse_edit')
  }));
  options.push(_react["default"].createElement(_GroupsMenuFilterOption["default"], {
    onCheck: function onCheck(name, value) {
      return setFilter(name, value);
    },
    key: "comments",
    name: "comments",
    checked: filters.comments,
    setFilter: setFilter,
    icon: _react["default"].createElement(_reactBootstrap.Glyphicon, {
      glyph: "comment"
    }),
    text: translate('menu.comments')
  }));
  return _react["default"].createElement("div", {
    id: "groups-menu-filter",
    className: "options-wrapper"
  }, options);
};

ExpandedFilter.propTypes = {
  filters: _propTypes["default"].object.isRequired,
  setFilter: _propTypes["default"].func.isRequired,
  translate: _propTypes["default"].func.isRequired
};
var _default = ExpandedFilter;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9Hcm91cE1lbnUvR3JvdXBzTWVudUZpbHRlci9FeHBhbmRlZEZpbHRlci9pbmRleC5qcyJdLCJuYW1lcyI6WyJFeHBhbmRlZEZpbHRlciIsImZpbHRlcnMiLCJzZXRGaWx0ZXIiLCJ0cmFuc2xhdGUiLCJvcHRpb25zIiwicHVzaCIsIm5hbWUiLCJ2YWx1ZSIsImludmFsaWRhdGVkIiwicmVtaW5kZXJzIiwic2VsZWN0aW9ucyIsIm5vU2VsZWN0aW9ucyIsInZlcnNlRWRpdHMiLCJjb21tZW50cyIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsIm9iamVjdCIsImlzUmVxdWlyZWQiLCJmdW5jIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFFQSxJQUFNQSxjQUFjLEdBQUcsU0FBakJBLGNBQWlCLE9BSWpCO0FBQUEsTUFISkMsT0FHSSxRQUhKQSxPQUdJO0FBQUEsTUFGSkMsU0FFSSxRQUZKQSxTQUVJO0FBQUEsTUFESkMsU0FDSSxRQURKQSxTQUNJO0FBQ0osTUFBTUMsT0FBTyxHQUFHLEVBQWhCO0FBRUFBLEVBQUFBLE9BQU8sQ0FBQ0MsSUFBUixDQUFhLGdDQUFDLGtDQUFEO0FBQ1gsSUFBQSxPQUFPLEVBQUUsaUJBQUNDLElBQUQsRUFBT0MsS0FBUDtBQUFBLGFBQWlCTCxTQUFTLENBQUNJLElBQUQsRUFBT0MsS0FBUCxDQUExQjtBQUFBLEtBREU7QUFFWCxJQUFBLEdBQUcsRUFBQyxhQUZPO0FBR1gsSUFBQSxJQUFJLEVBQUMsYUFITTtBQUlYLElBQUEsT0FBTyxFQUFFTixPQUFPLENBQUNPLFdBSk47QUFLWCxJQUFBLFNBQVMsRUFBRU4sU0FMQTtBQU1YLElBQUEsSUFBSSxFQUFFLGdDQUFDLDJCQUFEO0FBQWlCLE1BQUEsS0FBSyxFQUFFLEVBQXhCO0FBQTRCLE1BQUEsTUFBTSxFQUFFLEVBQXBDO0FBQXdDLE1BQUEsS0FBSyxFQUFDO0FBQTlDLE1BTks7QUFPWCxJQUFB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UUFKTjtBQUtYLElBQUEsU0FBUyxFQUFFWCxTQUxBO0FBTVgsSUFBQSxJQUFJLEVBQUUsZ0NBQUMseUJBQUQ7QUFBVyxNQUFBLEtBQUssRUFBQztBQUFqQixNQU5LO0FBT1gsSUFBQSxJQUFJLEVBQUVDLFNBQVMsQ0FBQyxlQUFEO0FBUEosSUFBYjtBQVNBLFNBQ0U7QUFBSyxJQUFBLEVBQUUsRUFBQyxvQkFBUjtBQUE2QixJQUFBLFNBQVMsRUFBQztBQUF2QyxLQUNHQyxPQURILENBREY7QUFLRCxDQXBFRDs7QUFzRUFKLGNBQWMsQ0FBQ2MsU0FBZixHQUEyQjtBQUN6QmIsRUFBQUEsT0FBTyxFQUFFYyxzQkFBVUMsTUFBVixDQUFpQkMsVUFERDtBQUV6QmYsRUFBQUEsU0FBUyxFQUFFYSxzQkFBVUcsSUFBVixDQUFlRCxVQUZEO0FBR3pCZCxFQUFBQSxTQUFTLEVBQUVZLHNCQUFVRyxJQUFWLENBQWVEO0FBSEQsQ0FBM0I7ZUFNZWpCLGMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IEdseXBoaWNvbiB9IGZyb20gJ3JlYWN0LWJvb3RzdHJhcCc7XG5pbXBvcnQgR3JvdXBzTWVudUZpbHRlck9wdGlvbiBmcm9tICcuLi9Hcm91cHNNZW51RmlsdGVyT3B0aW9uJztcbmltcG9ydCBJbnZhbGlkYXRlZEljb24gZnJvbSAnLi4vSW52YWxpZGF0ZWRJY29uJztcblxuY29uc3QgRXhwYW5kZWRGaWx0ZXIgPSAoe1xuICBmaWx0ZXJzLFxuICBzZXRGaWx0ZXIsXG4gIHRyYW5zbGF0ZSxcbn0pID0+IHtcbiAgY29uc3Qgb3B0aW9ucyA9IFtdO1xuXG4gIG9wdGlvbnMucHVzaCg8R3JvdXBzTWVudUZpbHRlck9wdGlvblxuICAgIG9uQ2hlY2s9eyhuYW1lLCB2YWx1ZSkgPT4gc2V0RmlsdGVyKG5hbWUsIHZhbHVlKX1cbiAgICBrZXk9XCJpbnZhbGlkYXRlZFwiXG4gICAgbmFtZT1cImludmFsaWRhdGVkXCJcbiAgICBjaGVja2VkPXtmaWx0ZXJzLmludmFsaWRhdGVkfVxuICAgIHNldEZpbHRlcj17c2V0RmlsdGVyfVxuICAgIGljb249ezxJbnZhbGlkYXRlZEljb24gd2lkdGg9ezE2fSBoZWlnaHQ9ezE2fSBjb2xvcj1cIiNmZmZcIiAvPn1cbiAgICB0ZXh0PXt0cmFuc2xhdGUoJ21lbnUuaW52YWxpZGF0ZWQnKX0gLz4pO1xuXG4gIG9wdGlvbnMucHVzaCg8R3JvdXBzTWVudUZpbHRlck9wdGlvblxuICAgIG9uQ2hlY2s9eyhuYW1lLCB2YWx1ZSkgPT4gc2V0RmlsdGVyKG5hbWUsIHZhbHVlKX1cbiAgICBrZXk9XCJyZW1pbmRlcnNcIlxuICAgIG5hbWU9XCJyZW1pbmRlcnNcIlxuICAgIGNoZWNrZWQ9e2ZpbHRlcnMucmVtaW5kZXJzfVxuICAgIHNldEZpbHRlcj17c2V0RmlsdGVyfVxuICAgIGljb249ezxHbHlwaGljb24gZ2x5cGg9XCJib29rbWFya1wiIC8+fVxuICAgIHRleHQ9e3RyYW5zbGF0ZSgnbWVudS5ib29rbWFya3MnKX0gLz4pO1xuXG4gIG9wdGlvbnMucHVzaCg8R3JvdXBzTWVudUZpbHRlck9wdGlvblxuICAgIG9uQ2hlY2s9eyhuYW1lLCB2YWx1ZSkgPT4gc2V0RmlsdGVyKG5hbWUsIHZhbHVlKX1cbiAgICBrZXk9XCJzZWxlY3Rpb25zXCJcbiAgICBuYW1lPVwic2VsZWN0aW9uc1wiXG4gICAgY2hlY2tlZD17ZmlsdGVycy5zZWxlY3Rpb25zfVxuICAgIGRpc2FibGVkPXtmaWx0ZXJzLm5vU2VsZWN0aW9uc31cbiAgICBzZXRGaWx0ZXI9e3NldEZpbHRlcn1cbiAgICBpY29uPXs8R2x5cGhpY29uIGdseXBoPVwib2tcIiAvPn1cbiAgICB0ZXh0PXt0cmFuc2xhdGUoJ21lbnUuc2VsZWN0ZWQnKX0gLz4pO1xuXG4gIG9wdGlvbnMucHVzaCg8R3JvdXBzTWVudUZpbHRlck9wdGlvblxuICAgIG9uQ2hlY2s9eyhuYW1lLCB2YWx1ZSkgPT4gc2V0RmlsdGVyKG5hbWUsIHZhbHVlKX1cbiAgICBrZXk9XCJub1NlbGVjdGlvbnNcIlxuICAgIG5hbWU9XCJub1NlbGVjdGlvbnNcIlxuICAgIGNoZWNrZWQ9e2ZpbHRlcnMubm9TZWxlY3Rpb25zfVxuICAgIGRpc2FibGVkPXtmaWx0ZXJzLnNlbGVjdGlvbnN9XG4gICAgc2V0RmlsdGVyPXtzZXRGaWx0ZXJ9XG4gICAgaWNvbj17PEdseXBoaWNvbiBnbHlwaD1cImJhbi1jaXJjbGVcIiAvPn1cbiAgICB0ZXh0PXt0cmFuc2xhdGUoJ21lbnUubm9fc2VsZWN0aW9uJyl9IC8+KTtcblxuICBvcHRpb25zLnB1c2goPEdyb3Vwc01lbnVGaWx0ZXJPcHRpb25cbiAgICBvbkNoZWNrPXsobmFtZSwgdmFsdWUpID0+IHNldEZpbHRlcihuYW1lLCB2YWx1ZSl9XG4gICAga2V5PVwidmVyc2VFZGl0c1wiXG4gICAgbmFtZT1cInZlcnNlRWRpdHNcIlxuICAgIGNoZWNrZWQ9e2ZpbHRlcnMudmVyc2VFZGl0c31cbiAgICBzZXRGaWx0ZXI9e3NldEZpbHRlcn1cbiAgICBpY29uPXs8R2x5cGhpY29uIGdseXBoPVwicGVuY2lsXCIgLz59XG4gICAgdGV4dD17dHJhbnNsYXRlKCdtZW51LnZlcnNlX2VkaXQnKX0gLz4pO1xuXG4gIG9wdGlvbnMucHVzaCg8R3JvdXBzTWVudUZpbHRlck9wdGlvblxuICAgIG9uQ2hlY2s9eyhuYW1lLCB2YWx1ZSkgPT4gc2V0RmlsdGVyKG5hbWUsIHZhbHVlKX1cbiAgICBrZXk9XCJjb21tZW50c1wiXG4gICAgbmFtZT1cImNvbW1lbnRzXCJcbiAgICBjaGVja2VkPXtmaWx0ZXJzLmNvbW1lbnRzfVxuICAgIHNldEZpbHRlcj17c2V0RmlsdGVyfVxuICAgIGljb249ezxHbHlwaGljb24gZ2x5cGg9XCJjb21tZW50XCIgLz59XG4gICAgdGV4dD17dHJhbnNsYXRlKCdtZW51LmNvbW1lbnRzJyl9IC8+KTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgaWQ9XCJncm91cHMtbWVudS1maWx0ZXJcIiBjbGFzc05hbWU9XCJvcHRpb25zLXdyYXBwZXJcIj5cbiAgICAgIHtvcHRpb25zfVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuRXhwYW5kZWRGaWx0ZXIucHJvcFR5cGVzID0ge1xuICBmaWx0ZXJzOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXG4gIHNldEZpbHRlcjogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgdHJhbnNsYXRlOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgRXhwYW5kZWRGaWx0ZXI7Il19