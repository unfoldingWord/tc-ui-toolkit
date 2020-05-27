"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

var TcUiToolkit = _interopRequireWildcard(require("./index"));

describe('tc-ui-toolkit', function () {
  it('should have exports', function () {
    expect((0, _typeof2["default"])(TcUiToolkit)).toEqual('object');
  });
  it('should not do undefined exports', function () {
    Object.keys(TcUiToolkit).forEach(function (exportKey) {
      return expect(Boolean(TcUiToolkit[exportKey])).toBeTruthy();
    });
  });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9pbmRleC50ZXN0LmpzIl0sIm5hbWVzIjpbImRlc2NyaWJlIiwiaXQiLCJleHBlY3QiLCJUY1VpVG9vbGtpdCIsInRvRXF1YWwiLCJPYmplY3QiLCJrZXlzIiwiZm9yRWFjaCIsImV4cG9ydEtleSIsIkJvb2xlYW4iLCJ0b0JlVHJ1dGh5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOztBQUVBQSxRQUFRLENBQUMsZUFBRCxFQUFrQixZQUFNO0FBQzlCQyxFQUFBQSxFQUFFLENBQUMscUJBQUQsRUFBd0IsWUFBTTtBQUM5QkMsSUFBQUEsTUFBTSwwQkFBUUMsV0FBUixFQUFOLENBQTJCQyxPQUEzQixDQUFtQyxRQUFuQztBQUNELEdBRkMsQ0FBRjtBQUlBSCxFQUFBQSxFQUFFLENBQUMsaUNBQUQsRUFBb0MsWUFBTTtBQUMxQ0ksSUFBQUEsTUFBTSxDQUFDQyxJQUFQLENBQVlILFdBQVosRUFBeUJJLE9BQXpCLENBQWlDLFVBQUFDLFNBQVM7QUFBQSxhQUN4Q04sTUFBTSxDQUFDTyxPQUFPLENBQUNOLFdBQVcsQ0FBQ0ssU0FBRCxDQUFaLENBQVIsQ0FBTixDQUF3Q0UsVUFBeEMsRUFEd0M7QUFBQSxLQUExQztBQUdELEdBSkMsQ0FBRjtBQUtELENBVk8sQ0FBUiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFRjVWlUb29sa2l0IGZyb20gJy4vaW5kZXgnO1xuXG5kZXNjcmliZSgndGMtdWktdG9vbGtpdCcsICgpID0+IHtcbiAgaXQoJ3Nob3VsZCBoYXZlIGV4cG9ydHMnLCAoKSA9PiB7XG4gICAgZXhwZWN0KHR5cGVvZiBUY1VpVG9vbGtpdCkudG9FcXVhbCgnb2JqZWN0Jyk7XG4gIH0pO1xuXG4gIGl0KCdzaG91bGQgbm90IGRvIHVuZGVmaW5lZCBleHBvcnRzJywgKCkgPT4ge1xuICAgIE9iamVjdC5rZXlzKFRjVWlUb29sa2l0KS5mb3JFYWNoKGV4cG9ydEtleSA9PlxuICAgICAgZXhwZWN0KEJvb2xlYW4oVGNVaVRvb2xraXRbZXhwb3J0S2V5XSkpLnRvQmVUcnV0aHkoKSxcbiAgICApO1xuICB9KTtcbn0pO1xuIl19