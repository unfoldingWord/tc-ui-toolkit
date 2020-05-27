"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _GroupsMenuFilterBubble = _interopRequireDefault(require("../GroupsMenuFilterBubble"));

var CollapsedFilter = function CollapsedFilter(_ref) {
  var translate = _ref.translate,
      filters = _ref.filters,
      setFilter = _ref.setFilter;
  var bubbles = [];

  if (filters.invalidated) {
    bubbles.push(_react["default"].createElement(_GroupsMenuFilterBubble["default"], {
      onPress: function onPress(name) {
        return setFilter(name, false);
      },
      key: "invalidated",
      name: "invalidated",
      text: translate('menu.invalidated')
    }));
  }

  if (filters.reminders) {
    bubbles.push(_react["default"].createElement(_GroupsMenuFilterBubble["default"], {
      onPress: function onPress(name) {
        return setFilter(name, false);
      },
      key: "reminders",
      name: "reminders",
      text: translate('menu.bookmarks')
    }));
  }

  if (filters.selections) {
    bubbles.push(_react["default"].createElement(_GroupsMenuFilterBubble["default"], {
      onPress: function onPress(name) {
        return setFilter(name, false);
      },
      key: "selections",
      name: "selections",
      text: translate('menu.selected')
    }));
  }

  if (filters.noSelections) {
    bubbles.push(_react["default"].createElement(_GroupsMenuFilterBubble["default"], {
      onPress: function onPress(name) {
        return setFilter(name, false);
      },
      key: "noSelections",
      name: "noSelections",
      text: translate('menu.no_selection')
    }));
  }

  if (filters.verseEdits) {
    bubbles.push(_react["default"].createElement(_GroupsMenuFilterBubble["default"], {
      onPress: function onPress(name) {
        return setFilter(name, false);
      },
      key: "verseEdits",
      name: "verseEdits",
      text: translate('menu.verse_edit')
    }));
  }

  if (filters.comments) {
    bubbles.push(_react["default"].createElement(_GroupsMenuFilterBubble["default"], {
      onPress: function onPress(name) {
        return setFilter(name, false);
      },
      key: "comments",
      name: "comments",
      text: translate('menu.comments'),
      setFilter: setFilter
    }));
  }

  return _react["default"].createElement("div", {
    id: "groups-menu-filter",
    className: "bubbles-wrapper"
  }, bubbles);
};

CollapsedFilter.propTypes = {
  filters: _propTypes["default"].object.isRequired,
  setFilter: _propTypes["default"].func.isRequired,
  translate: _propTypes["default"].func.isRequired
};
var _default = CollapsedFilter;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9Hcm91cE1lbnUvR3JvdXBzTWVudUZpbHRlci9Db2xsYXBzZWRGaWx0ZXIvaW5kZXguanMiXSwibmFtZXMiOlsiQ29sbGFwc2VkRmlsdGVyIiwidHJhbnNsYXRlIiwiZmlsdGVycyIsInNldEZpbHRlciIsImJ1YmJsZXMiLCJpbnZhbGlkYXRlZCIsInB1c2giLCJuYW1lIiwicmVtaW5kZXJzIiwic2VsZWN0aW9ucyIsIm5vU2VsZWN0aW9ucyIsInZlcnNlRWRpdHMiLCJjb21tZW50cyIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsIm9iamVjdCIsImlzUmVxdWlyZWQiLCJmdW5jIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFFQSxJQUFNQSxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLE9BSWxCO0FBQUEsTUFISkMsU0FHSSxRQUhKQSxTQUdJO0FBQUEsTUFGSkMsT0FFSSxRQUZKQSxPQUVJO0FBQUEsTUFESkMsU0FDSSxRQURKQSxTQUNJO0FBQ0osTUFBTUMsT0FBTyxHQUFHLEVBQWhCOztBQUVBLE1BQUlGLE9BQU8sQ0FBQ0csV0FBWixFQUF5QjtBQUN2QkQsSUFBQUEsT0FBTyxDQUFDRSxJQUFSLENBQWEsZ0NBQUMsa0NBQUQ7QUFDWCxNQUFBLE9BQU8sRUFBRSxpQkFBQ0MsSUFBRDtBQUFBLGVBQVVKLFNBQVMsQ0FBQ0ksSUFBRCxFQUFPLEtBQVAsQ0FBbkI7QUFBQSxPQURFO0FBRVgsTUFBQSxHQUFHLEVBQUMsYUFGTztBQUdYLE1BQUEsSUFBSSxFQUFDLGFBSE07QUFJWCxNQUFBLElBQUksRUFBRU4sU0FBUyxDQUFDLGtCQUFEO0FBSkosTUFBYjtBQUtEOztBQUVELE1BQUlDLE9BQU8sQ0FBQ00sU0FBWixFQUF1QjtBQUNyQkosSUFBQUEsT0FBTyxDQUFDRSxJQUFSLENBQWEsZ0NBQUMsa0NBQUQ7QUFDWCxNQUFBLE9BQU8sRUFBRSxpQkFBQ0MsSUFBRDtBQUFBLGVBQVVKLFNBQVMsQ0FBQ0ksSUFBRCxFQUFPLEtBQVAsQ0FBbkI7QUFBQSxPQURFO0FBRVgsTUFBQSxHQUFHLEVBQUMsV0FGTztBQUdYLE1BQUEsSUFBSSxFQUFDLFdBSE07QUFJWCxNQUFBLElBQUksRUFBRU4sU0FBUyxDQUFDLGdCQUFEO0FBSkosTUFBYjtBQUtEOztBQUVELE1BQUlDLE9BQU8sQ0FBQ08sVUFBWixFQUF3QjtBQUN0QkwsSUFBQUEsT0FBTyxDQUFDRSxJQUFSLENBQWEsZ0NBQUMsa0NBQUQ7QUFDWCxNQUFBLE9BQU8sRUFBRSxpQkFBQ0MsSUFBRDtBQUFBLGVBQVVKLFNBQVMsQ0FBQ0ksSUFBRCxFQUFPLEtBQVAsQ0FBbkI7QUFBQSxPQURFO0FBRVgsTUFBQSxHQUFHLEVBQUMsWUFGTztBQUdYLE1BQUEsSUFBSSxFQUFDLFlBSE07QUFJWCxNQUFBLElBQUksRUFBRU4sU0FBUyxDQUFDLGVBQUQ7QUFKSixNQUFiO0FBS0Q7O0FBRUQsTUFBSUMsT0FBTyxDQUFDUSxZQUFaLEVBQTBCO0FBQ3hCTixJQUFBQSxPQUFPLENBQUNFLElBQVIsQ0FBYSxnQ0FBQyxrQ0FBRDtBQUNYLE1BQUEsT0FBTyxFQUFFLGlCQUFDQyxJQUFEO0FBQUEsZUFBVUosU0FBUyxDQUFDSSxJQUFELEVBQU8sS0FBUCxDQUFuQjtBQUFBLE9BREU7QUFFWCxNQUFBLEdBQUcsRUFBQyxjQUZPO0FBR1gsTUFBQSxJQUFJLEVBQUMsY0FITTtBQUlYLE1BQUEsSUFBSSxFQUFFTixTQUFTLENBQUMsbUJBQUQ7QUFKSixNQUFiO0FBS0Q7O0FBRUQsTUFBSUMsT0FBTyxDQUFDUyxVQUFaLEVBQXdCO0FBQ3RCUCxJQUFBQSxPQUFPLENBQUNFLElBQVIsQ0FBYSxnQ0FBQyxrQ0FBRDtBQUNYLE1BQUEsT0FBTyxFQUFFLGlCQUFDQyxJQUFEO0FBQUEsZUFBVUosU0FBUyxDQUFDSSxJQUFELEVBQU8sS0FBUCxDQUFuQjtBQUFBLE9BREU7QUFFWCxNQUFBLEdBQUcsRUFBQyxZQUZPO0FBR1gsTUFBQSxJQUFJLEVBQUMsWUFITTtBQUlYLE1BQUEsSUFBSSxFQUFFTixTQUFTLENBQUMsaUJBQUQ7QUFKSixNQUFiO0FBS0Q7O0FBRUQsTUFBSUMsT0FBTyxDQUFDVSxRQUFaLEVBQXNCO0FBQ3BCUixJQUFBQSxPQUFPLENBQUNFLElBQVIsQ0FBYSxnQ0FBQyxrQ0FBRDtBQUNYLE1BQUEsT0FBTyxFQUFFLGlCQUFDQyxJQUFEO0FBQUEsZUFBVUosU0FBUyxDQUFDSSxJQUFELEVBQU8sS0FBUCxDQUFuQjtBQUFBLE9BREU7QUFFWCxNQUFBLEdBQUcsRUFBQyxVQUZPO0FBR1gsTUFBQSxJQUFJLEVBQUMsVUFITTtBQUlYLE1BQUEsSUFBSSxFQUFFTixTQUFTLENBQUMsZUFBRCxDQUpKO0FBS1gsTUFBQSxTQUFTLEVBQUVFO0FBTEEsTUFBYjtBQU1EOztBQUVELFNBQ0U7QUFBSyxJQUFBLEVBQUUsRUFBQyxvQkFBUjtBQUE2QixJQUFBLFNBQVMsRUFBQztBQUF2QyxLQUNHQyxPQURILENBREY7QUFLRCxDQTdERDs7QUErREFKLGVBQWUsQ0FBQ2EsU0FBaEIsR0FBNEI7QUFDMUJYLEVBQUFBLE9BQU8sRUFBRVksc0JBQVVDLE1BQVYsQ0FBaUJDLFVBREE7QUFFMUJiLEVBQUFBLFNBQVMsRUFBRVcsc0JBQVVHLElBQVYsQ0FBZUQsVUFGQTtBQUcxQmYsRUFBQUEsU0FBUyxFQUFFYSxzQkFBVUcsSUFBVixDQUFlRDtBQUhBLENBQTVCO2VBTWVoQixlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgR3JvdXBzTWVudUZpbHRlckJ1YmJsZSBmcm9tICcuLi9Hcm91cHNNZW51RmlsdGVyQnViYmxlJztcblxuY29uc3QgQ29sbGFwc2VkRmlsdGVyID0gKHtcbiAgdHJhbnNsYXRlLFxuICBmaWx0ZXJzLFxuICBzZXRGaWx0ZXIsXG59KSA9PiB7XG4gIGNvbnN0IGJ1YmJsZXMgPSBbXTtcblxuICBpZiAoZmlsdGVycy5pbnZhbGlkYXRlZCkge1xuICAgIGJ1YmJsZXMucHVzaCg8R3JvdXBzTWVudUZpbHRlckJ1YmJsZVxuICAgICAgb25QcmVzcz17KG5hbWUpID0+IHNldEZpbHRlcihuYW1lLCBmYWxzZSl9XG4gICAgICBrZXk9J2ludmFsaWRhdGVkJ1xuICAgICAgbmFtZT0naW52YWxpZGF0ZWQnXG4gICAgICB0ZXh0PXt0cmFuc2xhdGUoJ21lbnUuaW52YWxpZGF0ZWQnKX0gLz4pO1xuICB9XG5cbiAgaWYgKGZpbHRlcnMucmVtaW5kZXJzKSB7XG4gICAgYnViYmxlcy5wdXNoKDxHcm91cHNNZW51RmlsdGVyQnViYmxlXG4gICAgICBvblByZXNzPXsobmFtZSkgPT4gc2V0RmlsdGVyKG5hbWUsIGZhbHNlKX1cbiAgICAgIGtleT0ncmVtaW5kZXJzJ1xuICAgICAgbmFtZT0ncmVtaW5kZXJzJ1xuICAgICAgdGV4dD17dHJhbnNsYXRlKCdtZW51LmJvb2ttYXJrcycpfSAvPik7XG4gIH1cblxuICBpZiAoZmlsdGVycy5zZWxlY3Rpb25zKSB7XG4gICAgYnViYmxlcy5wdXNoKDxHcm91cHNNZW51RmlsdGVyQnViYmxlXG4gICAgICBvblByZXNzPXsobmFtZSkgPT4gc2V0RmlsdGVyKG5hbWUsIGZhbHNlKX1cbiAgICAgIGtleT0nc2VsZWN0aW9ucydcbiAgICAgIG5hbWU9J3NlbGVjdGlvbnMnXG4gICAgICB0ZXh0PXt0cmFuc2xhdGUoJ21lbnUuc2VsZWN0ZWQnKX0gLz4pO1xuICB9XG5cbiAgaWYgKGZpbHRlcnMubm9TZWxlY3Rpb25zKSB7XG4gICAgYnViYmxlcy5wdXNoKDxHcm91cHNNZW51RmlsdGVyQnViYmxlXG4gICAgICBvblByZXNzPXsobmFtZSkgPT4gc2V0RmlsdGVyKG5hbWUsIGZhbHNlKX1cbiAgICAgIGtleT0nbm9TZWxlY3Rpb25zJ1xuICAgICAgbmFtZT0nbm9TZWxlY3Rpb25zJ1xuICAgICAgdGV4dD17dHJhbnNsYXRlKCdtZW51Lm5vX3NlbGVjdGlvbicpfSAvPik7XG4gIH1cblxuICBpZiAoZmlsdGVycy52ZXJzZUVkaXRzKSB7XG4gICAgYnViYmxlcy5wdXNoKDxHcm91cHNNZW51RmlsdGVyQnViYmxlXG4gICAgICBvblByZXNzPXsobmFtZSkgPT4gc2V0RmlsdGVyKG5hbWUsIGZhbHNlKX1cbiAgICAgIGtleT0ndmVyc2VFZGl0cydcbiAgICAgIG5hbWU9J3ZlcnNlRWRpdHMnXG4gICAgICB0ZXh0PXt0cmFuc2xhdGUoJ21lbnUudmVyc2VfZWRpdCcpfSAvPik7XG4gIH1cblxuICBpZiAoZmlsdGVycy5jb21tZW50cykge1xuICAgIGJ1YmJsZXMucHVzaCg8R3JvdXBzTWVudUZpbHRlckJ1YmJsZVxuICAgICAgb25QcmVzcz17KG5hbWUpID0+IHNldEZpbHRlcihuYW1lLCBmYWxzZSl9XG4gICAgICBrZXk9J2NvbW1lbnRzJ1xuICAgICAgbmFtZT0nY29tbWVudHMnXG4gICAgICB0ZXh0PXt0cmFuc2xhdGUoJ21lbnUuY29tbWVudHMnKX1cbiAgICAgIHNldEZpbHRlcj17c2V0RmlsdGVyfSAvPik7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgaWQ9XCJncm91cHMtbWVudS1maWx0ZXJcIiBjbGFzc05hbWU9XCJidWJibGVzLXdyYXBwZXJcIj5cbiAgICAgIHtidWJibGVzfVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuQ29sbGFwc2VkRmlsdGVyLnByb3BUeXBlcyA9IHtcbiAgZmlsdGVyczogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxuICBzZXRGaWx0ZXI6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIHRyYW5zbGF0ZTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENvbGxhcHNlZEZpbHRlcjsiXX0=