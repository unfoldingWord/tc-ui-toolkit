"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _reactTestRenderer = _interopRequireDefault(require("react-test-renderer"));

var _enzyme = require("enzyme");

var _Bookmark = _interopRequireDefault(require("./Bookmark"));

describe('Tests for Bookmark', function () {
  it('renders bookmark not selected correctly', function () {
    var onChange = jest.fn();
    var props = {
      value: 'bookmark',
      label: 'Bookmark',
      onChange: onChange,
      checked: false
    };

    var tree = _reactTestRenderer["default"].create(_react["default"].createElement(_Bookmark["default"], props)).toJSON();

    expect(tree).toMatchSnapshot();
  });
  it('renders bookmark selected correctly', function () {
    var onChange = jest.fn();
    var props = {
      value: 'bookmark',
      label: 'Bookmark',
      onChange: onChange,
      checked: true
    };

    var tree = _reactTestRenderer["default"].create(_react["default"].createElement(_Bookmark["default"], props)).toJSON();

    expect(tree).toMatchSnapshot();
  });
  it('Test that checking the bookmark switch calls the given function', function () {
    var onChange = jest.fn();
    var props = {
      value: 'bookmark',
      label: 'Bookmark',
      onChange: onChange,
      checked: true
    };
    var wrapper = (0, _enzyme.mount)(_react["default"].createElement(_Bookmark["default"], props));
    wrapper.find('input[value="bookmark"]').simulate('change', {
      target: {
        checked: !props.checked
      }
    });
    expect(onChange).toHaveBeenCalled();
  });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9Cb29rbWFyay9Cb29rbWFyay50ZXN0LmpzIl0sIm5hbWVzIjpbImRlc2NyaWJlIiwiaXQiLCJvbkNoYW5nZSIsImplc3QiLCJmbiIsInByb3BzIiwidmFsdWUiLCJsYWJlbCIsImNoZWNrZWQiLCJ0cmVlIiwicmVuZGVyZXIiLCJjcmVhdGUiLCJ0b0pTT04iLCJleHBlY3QiLCJ0b01hdGNoU25hcHNob3QiLCJ3cmFwcGVyIiwiZmluZCIsInNpbXVsYXRlIiwidGFyZ2V0IiwidG9IYXZlQmVlbkNhbGxlZCJdLCJtYXBwaW5ncyI6Ijs7OztBQUFBOztBQUNBOztBQUNBOztBQUNBOztBQUVBQSxRQUFRLENBQUMsb0JBQUQsRUFBdUIsWUFBTTtBQUNuQ0MsRUFBQUEsRUFBRSxDQUFDLHlDQUFELEVBQTRDLFlBQU07QUFDbEQsUUFBTUMsUUFBUSxHQUFHQyxJQUFJLENBQUNDLEVBQUwsRUFBakI7QUFDQSxRQUFNQyxLQUFLLEdBQUc7QUFDWkMsTUFBQUEsS0FBSyxFQUFFLFVBREs7QUFFWkMsTUFBQUEsS0FBSyxFQUFFLFVBRks7QUFHWkwsTUFBQUEsUUFBUSxFQUFSQSxRQUhZO0FBSVpNLE1BQUFBLE9BQU8sRUFBRTtBQUpHLEtBQWQ7O0FBTUEsUUFBTUMsSUFBSSxHQUFHQyw4QkFBU0MsTUFBVCxDQUNYLGdDQUFDLG9CQUFELEVBQWNOLEtBQWQsQ0FEVyxFQUVYTyxNQUZXLEVBQWI7O0FBR0FDLElBQUFBLE1BQU0sQ0FBQ0osSUFBRCxDQUFOLENBQWFLLGVBQWI7QUFDRCxHQVpDLENBQUY7QUFjQWIsRUFBQUEsRUFBRSxDQUFDLHFDQUFELEVBQXdDLFlBQU07QUFDOUMsUUFBTUMsUUFBUSxHQUFHQyxJQUFJLENBQUNDLEVBQUwsRUFBakI7QUFDQSxRQUFNQyxLQUFLLEdBQUc7QUFDWkMsTUFBQUEsS0FBSyxFQUFFLFVBREs7QUFFWkMsTUFBQUEsS0FBSyxFQUFFLFVBRks7QUFHWkwsTUFBQUEsUUFBUSxFQUFSQSxRQUhZO0FBSVpNLE1BQUFBLE9BQU8sRUFBRTtBQUpHLEtBQWQ7O0FBTUEsUUFBTUMsSUFBSSxHQUFHQyw4QkFBU0MsTUFBVCxDQUNYLGdDQUFDLG9CQUFELEVBQWNOLEtBQWQsQ0FEVyxFQUVYTyxNQUZXLEVBQWI7O0FBR0FDLElBQUFBLE1BQU0sQ0FBQ0osSUFBRCxDQUFOLENBQWFLLGVBQWI7QUFDRCxHQVpDLENBQUY7QUFjQWIsRUFBQUEsRUFBRSxDQUFDLGlFQUFELEVBQW9FLFlBQU07QUFDMUUsUUFBTUMsUUFBUSxHQUFHQyxJQUFJLENBQUNDLEVBQUwsRUFBakI7QUFDQSxRQUFNQyxLQUFLLEdBQUc7QUFDWkMsTUFBQUEsS0FBSyxFQUFFLFVBREs7QUFFWkMsTUFBQUEsS0FBSyxFQUFFLFVBRks7QUFHWkwsTUFBQUEsUUFBUSxFQUFFQSxRQUhFO0FBSVpNLE1BQUFBLE9BQU8sRUFBRTtBQUpHLEtBQWQ7QUFNQSxRQUFNTyxPQUFPLEdBQUcsbUJBQ2QsZ0NBQUMsb0JBQUQsRUFBY1YsS0FBZCxDQURjLENBQWhCO0FBR0FVLElBQUFBLE9BQU8sQ0FBQ0MsSUFBUixDQUFhLHlCQUFiLEVBQXdDQyxRQUF4QyxDQUFpRCxRQUFqRCxFQUEyRDtBQUFFQyxNQUFBQSxNQUFNLEVBQUU7QUFBRVYsUUFBQUEsT0FBTyxFQUFFLENBQUNILEtBQUssQ0FBQ0c7QUFBbEI7QUFBVixLQUEzRDtBQUNBSyxJQUFBQSxNQUFNLENBQUNYLFFBQUQsQ0FBTixDQUFpQmlCLGdCQUFqQjtBQUNELEdBYkMsQ0FBRjtBQWNELENBM0NPLENBQVIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHJlbmRlcmVyIGZyb20gJ3JlYWN0LXRlc3QtcmVuZGVyZXInO1xuaW1wb3J0IHsgbW91bnQgfSBmcm9tICdlbnp5bWUnO1xuaW1wb3J0IEJvb2ttYXJrIGZyb20gJy4vQm9va21hcmsnO1xuXG5kZXNjcmliZSgnVGVzdHMgZm9yIEJvb2ttYXJrJywgKCkgPT4ge1xuICBpdCgncmVuZGVycyBib29rbWFyayBub3Qgc2VsZWN0ZWQgY29ycmVjdGx5JywgKCkgPT4ge1xuICAgIGNvbnN0IG9uQ2hhbmdlID0gamVzdC5mbigpO1xuICAgIGNvbnN0IHByb3BzID0ge1xuICAgICAgdmFsdWU6ICdib29rbWFyaycsXG4gICAgICBsYWJlbDogJ0Jvb2ttYXJrJyxcbiAgICAgIG9uQ2hhbmdlLFxuICAgICAgY2hlY2tlZDogZmFsc2UsXG4gICAgfTtcbiAgICBjb25zdCB0cmVlID0gcmVuZGVyZXIuY3JlYXRlKFxuICAgICAgPEJvb2ttYXJrIHsuLi5wcm9wc30gLz4sXG4gICAgKS50b0pTT04oKTtcbiAgICBleHBlY3QodHJlZSkudG9NYXRjaFNuYXBzaG90KCk7XG4gIH0pO1xuXG4gIGl0KCdyZW5kZXJzIGJvb2ttYXJrIHNlbGVjdGVkIGNvcnJlY3RseScsICgpID0+IHtcbiAgICBjb25zdCBvbkNoYW5nZSA9IGplc3QuZm4oKTtcbiAgICBjb25zdCBwcm9wcyA9IHtcbiAgICAgIHZhbHVlOiAnYm9va21hcmsnLFxuICAgICAgbGFiZWw6ICdCb29rbWFyaycsXG4gICAgICBvbkNoYW5nZSxcbiAgICAgIGNoZWNrZWQ6IHRydWUsXG4gICAgfTtcbiAgICBjb25zdCB0cmVlID0gcmVuZGVyZXIuY3JlYXRlKFxuICAgICAgPEJvb2ttYXJrIHsuLi5wcm9wc30gLz4sXG4gICAgKS50b0pTT04oKTtcbiAgICBleHBlY3QodHJlZSkudG9NYXRjaFNuYXBzaG90KCk7XG4gIH0pO1xuXG4gIGl0KCdUZXN0IHRoYXQgY2hlY2tpbmcgdGhlIGJvb2ttYXJrIHN3aXRjaCBjYWxscyB0aGUgZ2l2ZW4gZnVuY3Rpb24nLCAoKSA9PiB7XG4gICAgY29uc3Qgb25DaGFuZ2UgPSBqZXN0LmZuKCk7XG4gICAgY29uc3QgcHJvcHMgPSB7XG4gICAgICB2YWx1ZTogJ2Jvb2ttYXJrJyxcbiAgICAgIGxhYmVsOiAnQm9va21hcmsnLFxuICAgICAgb25DaGFuZ2U6IG9uQ2hhbmdlLFxuICAgICAgY2hlY2tlZDogdHJ1ZSxcbiAgICB9O1xuICAgIGNvbnN0IHdyYXBwZXIgPSBtb3VudChcbiAgICAgIDxCb29rbWFyayB7Li4ucHJvcHN9IC8+LFxuICAgICk7XG4gICAgd3JhcHBlci5maW5kKCdpbnB1dFt2YWx1ZT1cImJvb2ttYXJrXCJdJykuc2ltdWxhdGUoJ2NoYW5nZScsIHsgdGFyZ2V0OiB7IGNoZWNrZWQ6ICFwcm9wcy5jaGVja2VkIH0gfSk7XG4gICAgZXhwZWN0KG9uQ2hhbmdlKS50b0hhdmVCZWVuQ2FsbGVkKCk7XG4gIH0pO1xufSk7XG4iXX0=