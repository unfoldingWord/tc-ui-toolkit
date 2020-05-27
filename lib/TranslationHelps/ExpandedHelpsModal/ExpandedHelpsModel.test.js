"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _styles = require("@material-ui/core/styles");

var _enzyme = require("enzyme");

var _index = _interopRequireDefault(require("./index"));

describe('Test ExpandedHelpsModal component', function () {
  test('Test initial display', function () {
    var theme = (0, _styles.createMuiTheme)({
      typography: {
        useNextVariants: true
      },
      scrollbarThumb: {
        borderRadius: '10px'
      }
    });
    var expectedTitle = 'Title';
    var wrapper = (0, _enzyme.mount)(_react["default"].createElement(_styles.MuiThemeProvider, {
      theme: theme
    }, _react["default"].createElement(_index["default"], {
      show: true,
      onHide: function onHide() {},
      title: expectedTitle,
      article: 'Test article',
      translate: function translate(k) {
        return k;
      }
    })));
    expect(wrapper.find('.tool-bar-title').text(expectedTitle));
  });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9UcmFuc2xhdGlvbkhlbHBzL0V4cGFuZGVkSGVscHNNb2RhbC9FeHBhbmRlZEhlbHBzTW9kZWwudGVzdC5qcyJdLCJuYW1lcyI6WyJkZXNjcmliZSIsInRlc3QiLCJ0aGVtZSIsInR5cG9ncmFwaHkiLCJ1c2VOZXh0VmFyaWFudHMiLCJzY3JvbGxiYXJUaHVtYiIsImJvcmRlclJhZGl1cyIsImV4cGVjdGVkVGl0bGUiLCJ3cmFwcGVyIiwiayIsImV4cGVjdCIsImZpbmQiLCJ0ZXh0Il0sIm1hcHBpbmdzIjoiOzs7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBRUFBLFFBQVEsQ0FBQyxtQ0FBRCxFQUFzQyxZQUFNO0FBQ2xEQyxFQUFBQSxJQUFJLENBQUMsc0JBQUQsRUFBeUIsWUFBTTtBQUNqQyxRQUFNQyxLQUFLLEdBQUcsNEJBQWU7QUFDM0JDLE1BQUFBLFVBQVUsRUFBRTtBQUFFQyxRQUFBQSxlQUFlLEVBQUU7QUFBbkIsT0FEZTtBQUUzQkMsTUFBQUEsY0FBYyxFQUFFO0FBQUVDLFFBQUFBLFlBQVksRUFBRTtBQUFoQjtBQUZXLEtBQWYsQ0FBZDtBQUtBLFFBQU1DLGFBQWEsR0FBRyxPQUF0QjtBQUNBLFFBQU1DLE9BQU8sR0FBRyxtQkFDZCxnQ0FBQyx3QkFBRDtBQUFrQixNQUFBLEtBQUssRUFBRU47QUFBekIsT0FDRSxnQ0FBQyxpQkFBRDtBQUNFLE1BQUEsSUFBSSxFQUFFLElBRFI7QUFFRSxNQUFBLE1BQU0sRUFBRSxrQkFBTSxDQUFFLENBRmxCO0FBR0UsTUFBQSxLQUFLLEVBQUVLLGFBSFQ7QUFJRSxNQUFBLE9BQU8sRUFBRSxjQUpYO0FBS0UsTUFBQSxTQUFTLEVBQUUsbUJBQUFFLENBQUM7QUFBQSxlQUFJQSxDQUFKO0FBQUE7QUFMZCxNQURGLENBRGMsQ0FBaEI7QUFVQUMsSUFBQUEsTUFBTSxDQUFDRixPQUFPLENBQUNHLElBQVIsQ0FBYSxpQkFBYixFQUFnQ0MsSUFBaEMsQ0FBcUNMLGFBQXJDLENBQUQsQ0FBTjtBQUNELEdBbEJHLENBQUo7QUFtQkQsQ0FwQk8sQ0FBUiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBNdWlUaGVtZVByb3ZpZGVyLCBjcmVhdGVNdWlUaGVtZSB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XG5pbXBvcnQgeyBtb3VudCB9IGZyb20gJ2VuenltZSc7XG5pbXBvcnQgRXhwYW5kZWRIZWxwc01vZGFsIGZyb20gJy4vaW5kZXgnO1xuXG5kZXNjcmliZSgnVGVzdCBFeHBhbmRlZEhlbHBzTW9kYWwgY29tcG9uZW50JywgKCkgPT4ge1xuICB0ZXN0KCdUZXN0IGluaXRpYWwgZGlzcGxheScsICgpID0+IHtcbiAgICBjb25zdCB0aGVtZSA9IGNyZWF0ZU11aVRoZW1lKHtcbiAgICAgIHR5cG9ncmFwaHk6IHsgdXNlTmV4dFZhcmlhbnRzOiB0cnVlIH0sXG4gICAgICBzY3JvbGxiYXJUaHVtYjogeyBib3JkZXJSYWRpdXM6ICcxMHB4JyB9LFxuICAgIH0pO1xuXG4gICAgY29uc3QgZXhwZWN0ZWRUaXRsZSA9ICdUaXRsZSc7XG4gICAgY29uc3Qgd3JhcHBlciA9IG1vdW50KFxuICAgICAgPE11aVRoZW1lUHJvdmlkZXIgdGhlbWU9e3RoZW1lfT5cbiAgICAgICAgPEV4cGFuZGVkSGVscHNNb2RhbFxuICAgICAgICAgIHNob3c9e3RydWV9XG4gICAgICAgICAgb25IaWRlPXsoKSA9PiB7fX1cbiAgICAgICAgICB0aXRsZT17ZXhwZWN0ZWRUaXRsZX1cbiAgICAgICAgICBhcnRpY2xlPXsnVGVzdCBhcnRpY2xlJ31cbiAgICAgICAgICB0cmFuc2xhdGU9e2sgPT4ga31cbiAgICAgICAgLz5cbiAgICAgIDwvTXVpVGhlbWVQcm92aWRlcj4pO1xuICAgIGV4cGVjdCh3cmFwcGVyLmZpbmQoJy50b29sLWJhci10aXRsZScpLnRleHQoZXhwZWN0ZWRUaXRsZSkpO1xuICB9KTtcbn0pO1xuIl19