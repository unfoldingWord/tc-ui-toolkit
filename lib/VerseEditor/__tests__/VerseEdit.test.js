"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _enzymeToJson = _interopRequireDefault(require("enzyme-to-json"));

var _enzyme = require("enzyme");

var _VerseEditor = _interopRequireDefault(require("../VerseEditor"));

/* eslint-env jest */
var mock_translate = function mock_translate(text, params) {
  if (params) {
    text += ': ' + JSON.stringify(params);
  }

  return text;
};

describe('VerseEditor component:', function () {
  test('should render', function () {
    // given
    var props = getBasePropertiesAndMockActions(); // when

    var wrapper = (0, _enzyme.shallow)(_react["default"].createElement(_VerseEditor["default"], props)); // then

    expect((0, _enzymeToJson["default"])(wrapper)).toMatchSnapshot();
  });
}); //
// helpers
//

function getBasePropertiesAndMockActions() {
  var props = {
    open: true,
    verseTitle: 'Rom 3:11',
    verseText: 'Dummy Text',
    translate: mock_translate,
    onCancel: function onCancel() {
      return jest.fn();
    },
    onSubmit: function onSubmit() {
      return jest.fn();
    },
    targetLanguage: 'Klingon'
  };
  return props;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9WZXJzZUVkaXRvci9fX3Rlc3RzX18vVmVyc2VFZGl0LnRlc3QuanMiXSwibmFtZXMiOlsibW9ja190cmFuc2xhdGUiLCJ0ZXh0IiwicGFyYW1zIiwiSlNPTiIsInN0cmluZ2lmeSIsImRlc2NyaWJlIiwidGVzdCIsInByb3BzIiwiZ2V0QmFzZVByb3BlcnRpZXNBbmRNb2NrQWN0aW9ucyIsIndyYXBwZXIiLCJleHBlY3QiLCJ0b01hdGNoU25hcHNob3QiLCJvcGVuIiwidmVyc2VUaXRsZSIsInZlcnNlVGV4dCIsInRyYW5zbGF0ZSIsIm9uQ2FuY2VsIiwiamVzdCIsImZuIiwib25TdWJtaXQiLCJ0YXJnZXRMYW5ndWFnZSJdLCJtYXBwaW5ncyI6Ijs7OztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUpBO0FBTUEsSUFBTUEsY0FBYyxHQUFHLFNBQWpCQSxjQUFpQixDQUFDQyxJQUFELEVBQU9DLE1BQVAsRUFBa0I7QUFDdkMsTUFBSUEsTUFBSixFQUFZO0FBQ1ZELElBQUFBLElBQUksSUFBSSxPQUFPRSxJQUFJLENBQUNDLFNBQUwsQ0FBZUYsTUFBZixDQUFmO0FBQ0Q7O0FBQ0QsU0FBT0QsSUFBUDtBQUNELENBTEQ7O0FBT0FJLFFBQVEsQ0FBQyx3QkFBRCxFQUEyQixZQUFNO0FBQ3ZDQyxFQUFBQSxJQUFJLENBQUMsZUFBRCxFQUFrQixZQUFNO0FBQzFCO0FBQ0EsUUFBTUMsS0FBSyxHQUFHQywrQkFBK0IsRUFBN0MsQ0FGMEIsQ0FJMUI7O0FBQ0EsUUFBTUMsT0FBTyxHQUFHLHFCQUNkLGdDQUFDLHVCQUFELEVBQWlCRixLQUFqQixDQURjLENBQWhCLENBTDBCLENBUzFCOztBQUNBRyxJQUFBQSxNQUFNLENBQUMsOEJBQU9ELE9BQVAsQ0FBRCxDQUFOLENBQXdCRSxlQUF4QjtBQUNELEdBWEcsQ0FBSjtBQVlELENBYk8sQ0FBUixDLENBZUE7QUFDQTtBQUNBOztBQUVBLFNBQVNILCtCQUFULEdBQTJDO0FBQ3pDLE1BQU1ELEtBQUssR0FBRztBQUNaSyxJQUFBQSxJQUFJLEVBQUUsSUFETTtBQUVaQyxJQUFBQSxVQUFVLEVBQUUsVUFGQTtBQUdaQyxJQUFBQSxTQUFTLEVBQUUsWUFIQztBQUlaQyxJQUFBQSxTQUFTLEVBQUVmLGNBSkM7QUFLWmdCLElBQUFBLFFBQVEsRUFBRTtBQUFBLGFBQU1DLElBQUksQ0FBQ0MsRUFBTCxFQUFOO0FBQUEsS0FMRTtBQU1aQyxJQUFBQSxRQUFRLEVBQUU7QUFBQSxhQUFNRixJQUFJLENBQUNDLEVBQUwsRUFBTjtBQUFBLEtBTkU7QUFPWkUsSUFBQUEsY0FBYyxFQUFFO0FBUEosR0FBZDtBQVVBLFNBQU9iLEtBQVA7QUFDRCIsInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1lbnYgamVzdCAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB0b0pzb24gZnJvbSAnZW56eW1lLXRvLWpzb24nO1xuaW1wb3J0IHsgc2hhbGxvdyB9IGZyb20gJ2VuenltZSc7XG5pbXBvcnQgVmVyc2VFZGl0b3IgZnJvbSAnLi4vVmVyc2VFZGl0b3InO1xuXG5jb25zdCBtb2NrX3RyYW5zbGF0ZSA9ICh0ZXh0LCBwYXJhbXMpID0+IHtcbiAgaWYgKHBhcmFtcykge1xuICAgIHRleHQgKz0gJzogJyArIEpTT04uc3RyaW5naWZ5KHBhcmFtcyk7XG4gIH1cbiAgcmV0dXJuIHRleHQ7XG59O1xuXG5kZXNjcmliZSgnVmVyc2VFZGl0b3IgY29tcG9uZW50OicsICgpID0+IHtcbiAgdGVzdCgnc2hvdWxkIHJlbmRlcicsICgpID0+IHtcbiAgICAvLyBnaXZlblxuICAgIGNvbnN0IHByb3BzID0gZ2V0QmFzZVByb3BlcnRpZXNBbmRNb2NrQWN0aW9ucygpO1xuXG4gICAgLy8gd2hlblxuICAgIGNvbnN0IHdyYXBwZXIgPSBzaGFsbG93KFxuICAgICAgPFZlcnNlRWRpdG9yIHsuLi5wcm9wc30gLz4sXG4gICAgKTtcblxuICAgIC8vIHRoZW5cbiAgICBleHBlY3QodG9Kc29uKHdyYXBwZXIpKS50b01hdGNoU25hcHNob3QoKTtcbiAgfSk7XG59KTtcblxuLy9cbi8vIGhlbHBlcnNcbi8vXG5cbmZ1bmN0aW9uIGdldEJhc2VQcm9wZXJ0aWVzQW5kTW9ja0FjdGlvbnMoKSB7XG4gIGNvbnN0IHByb3BzID0ge1xuICAgIG9wZW46IHRydWUsXG4gICAgdmVyc2VUaXRsZTogJ1JvbSAzOjExJyxcbiAgICB2ZXJzZVRleHQ6ICdEdW1teSBUZXh0JyxcbiAgICB0cmFuc2xhdGU6IG1vY2tfdHJhbnNsYXRlLFxuICAgIG9uQ2FuY2VsOiAoKSA9PiBqZXN0LmZuKCksXG4gICAgb25TdWJtaXQ6ICgpID0+IGplc3QuZm4oKSxcbiAgICB0YXJnZXRMYW5ndWFnZTogJ0tsaW5nb24nLFxuICB9O1xuXG4gIHJldHVybiBwcm9wcztcbn1cbiJdfQ==