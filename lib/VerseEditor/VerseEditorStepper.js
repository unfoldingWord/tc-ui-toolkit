"use strict";

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

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styles = require("@material-ui/core/styles");

var _Stepper = _interopRequireDefault(require("@material-ui/core/Stepper"));

var _Step = _interopRequireDefault(require("@material-ui/core/Step"));

var _StepLabel = _interopRequireDefault(require("@material-ui/core/StepLabel"));

var styles = {
  stepIcon: {
    '&$active': {
      color: 'var(--accent-color-dark)'
    },
    '&$completed': {
      color: 'var(--accent-color-dark)'
    }
  },
  active: {},
  completed: {},
  label: {
    fontSize: 14
  }
};
/**
 * Renders the steps for editing a verse
 * @property {object} [style] - custom style attributes
 * @property {int} stepIndex - the current step index
 * @property {string[]} steps - an array of steps
 */

var VerseEditorStepper = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2["default"])(VerseEditorStepper, _React$Component);

  function VerseEditorStepper() {
    (0, _classCallCheck2["default"])(this, VerseEditorStepper);
    return (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(VerseEditorStepper).apply(this, arguments));
  }

  (0, _createClass2["default"])(VerseEditorStepper, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          stepIndex = _this$props.stepIndex,
          steps = _this$props.steps,
          style = _this$props.style,
          classes = _this$props.classes;
      return _react["default"].createElement(_Stepper["default"], {
        activeStep: stepIndex,
        style: style
      }, steps.map(function (step, index) {
        return _react["default"].createElement(_Step["default"], {
          key: index
        }, _react["default"].createElement(_StepLabel["default"], {
          StepIconProps: {
            classes: {
              root: classes.stepIcon,
              active: classes.active,
              completed: classes.completed
            }
          },
          classes: {
            label: classes.label
          }
        }, step));
      }));
    }
  }]);
  return VerseEditorStepper;
}(_react["default"].Component);

VerseEditorStepper.propTypes = {
  style: _propTypes["default"].object,
  stepIndex: _propTypes["default"].number.isRequired,
  steps: _propTypes["default"].arrayOf(_propTypes["default"].string).isRequired,
  classes: _propTypes["default"].object
};

var _default = (0, _styles.withStyles)(styles)(VerseEditorStepper);

exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9WZXJzZUVkaXRvci9WZXJzZUVkaXRvclN0ZXBwZXIuanMiXSwibmFtZXMiOlsic3R5bGVzIiwic3RlcEljb24iLCJjb2xvciIsImFjdGl2ZSIsImNvbXBsZXRlZCIsImxhYmVsIiwiZm9udFNpemUiLCJWZXJzZUVkaXRvclN0ZXBwZXIiLCJwcm9wcyIsInN0ZXBJbmRleCIsInN0ZXBzIiwic3R5bGUiLCJjbGFzc2VzIiwibWFwIiwic3RlcCIsImluZGV4Iiwicm9vdCIsIlJlYWN0IiwiQ29tcG9uZW50IiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwib2JqZWN0IiwibnVtYmVyIiwiaXNSZXF1aXJlZCIsImFycmF5T2YiLCJzdHJpbmciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFFQSxJQUFNQSxNQUFNLEdBQUc7QUFDYkMsRUFBQUEsUUFBUSxFQUFFO0FBQ1IsZ0JBQVk7QUFBRUMsTUFBQUEsS0FBSyxFQUFFO0FBQVQsS0FESjtBQUVSLG1CQUFlO0FBQUVBLE1BQUFBLEtBQUssRUFBRTtBQUFUO0FBRlAsR0FERztBQUtiQyxFQUFBQSxNQUFNLEVBQUUsRUFMSztBQU1iQyxFQUFBQSxTQUFTLEVBQUUsRUFORTtBQU9iQyxFQUFBQSxLQUFLLEVBQUU7QUFBRUMsSUFBQUEsUUFBUSxFQUFFO0FBQVo7QUFQTSxDQUFmO0FBVUE7Ozs7Ozs7SUFNTUMsa0I7Ozs7Ozs7Ozs7NkJBQ0s7QUFBQSx3QkFHSCxLQUFLQyxLQUhGO0FBQUEsVUFFTEMsU0FGSyxlQUVMQSxTQUZLO0FBQUEsVUFFTUMsS0FGTixlQUVNQSxLQUZOO0FBQUEsVUFFYUMsS0FGYixlQUVhQSxLQUZiO0FBQUEsVUFFb0JDLE9BRnBCLGVBRW9CQSxPQUZwQjtBQUlQLGFBQ0UsZ0NBQUMsbUJBQUQ7QUFBUyxRQUFBLFVBQVUsRUFBRUgsU0FBckI7QUFBZ0MsUUFBQSxLQUFLLEVBQUVFO0FBQXZDLFNBQ0dELEtBQUssQ0FBQ0csR0FBTixDQUFVLFVBQUNDLElBQUQsRUFBT0MsS0FBUDtBQUFBLGVBQ1QsZ0NBQUMsZ0JBQUQ7QUFBTSxVQUFBLEdBQUcsRUFBRUE7QUFBWCxXQUNFLGdDQUFDLHFCQUFEO0FBQ0UsVUFBQSxhQUFhLEVBQUU7QUFDYkgsWUFBQUEsT0FBTyxFQUFFO0FBQ1BJLGNBQUFBLElBQUksRUFBRUosT0FBTyxDQUFDWCxRQURQO0FBRVBFLGNBQUFBLE1BQU0sRUFBRVMsT0FBTyxDQUFDVCxNQUZUO0FBR1BDLGNBQUFBLFNBQVMsRUFBRVEsT0FBTyxDQUFDUjtBQUhaO0FBREksV0FEakI7QUFRRSxVQUFBLE9BQU8sRUFBRTtBQUFFQyxZQUFBQSxLQUFLLEVBQUVPLE9BQU8sQ0FBQ1A7QUFBakI7QUFSWCxXQVNHUyxJQVRILENBREYsQ0FEUztBQUFBLE9BQVYsQ0FESCxDQURGO0FBbUJEOzs7RUF4QjhCRyxrQkFBTUMsUzs7QUEyQnZDWCxrQkFBa0IsQ0FBQ1ksU0FBbkIsR0FBK0I7QUFDN0JSLEVBQUFBLEtBQUssRUFBRVMsc0JBQVVDLE1BRFk7QUFFN0JaLEVBQUFBLFNBQVMsRUFBRVcsc0JBQVVFLE1BQVYsQ0FBaUJDLFVBRkM7QUFHN0JiLEVBQUFBLEtBQUssRUFBRVUsc0JBQVVJLE9BQVYsQ0FBa0JKLHNCQUFVSyxNQUE1QixFQUFvQ0YsVUFIZDtBQUk3QlgsRUFBQUEsT0FBTyxFQUFFUSxzQkFBVUM7QUFKVSxDQUEvQjs7ZUFPZSx3QkFBV3JCLE1BQVgsRUFBbUJPLGtCQUFuQixDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyB3aXRoU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcbmltcG9ydCBTdGVwcGVyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1N0ZXBwZXInO1xuaW1wb3J0IFN0ZXAgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvU3RlcCc7XG5pbXBvcnQgU3RlcExhYmVsIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1N0ZXBMYWJlbCc7XG5cbmNvbnN0IHN0eWxlcyA9IHtcbiAgc3RlcEljb246IHtcbiAgICAnJiRhY3RpdmUnOiB7IGNvbG9yOiAndmFyKC0tYWNjZW50LWNvbG9yLWRhcmspJyB9LFxuICAgICcmJGNvbXBsZXRlZCc6IHsgY29sb3I6ICd2YXIoLS1hY2NlbnQtY29sb3ItZGFyayknIH0sXG4gIH0sXG4gIGFjdGl2ZToge30sXG4gIGNvbXBsZXRlZDoge30sXG4gIGxhYmVsOiB7IGZvbnRTaXplOiAxNCB9LFxufTtcblxuLyoqXG4gKiBSZW5kZXJzIHRoZSBzdGVwcyBmb3IgZWRpdGluZyBhIHZlcnNlXG4gKiBAcHJvcGVydHkge29iamVjdH0gW3N0eWxlXSAtIGN1c3RvbSBzdHlsZSBhdHRyaWJ1dGVzXG4gKiBAcHJvcGVydHkge2ludH0gc3RlcEluZGV4IC0gdGhlIGN1cnJlbnQgc3RlcCBpbmRleFxuICogQHByb3BlcnR5IHtzdHJpbmdbXX0gc3RlcHMgLSBhbiBhcnJheSBvZiBzdGVwc1xuICovXG5jbGFzcyBWZXJzZUVkaXRvclN0ZXBwZXIgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgc3RlcEluZGV4LCBzdGVwcywgc3R5bGUsIGNsYXNzZXMsXG4gICAgfSA9IHRoaXMucHJvcHM7XG4gICAgcmV0dXJuIChcbiAgICAgIDxTdGVwcGVyIGFjdGl2ZVN0ZXA9e3N0ZXBJbmRleH0gc3R5bGU9e3N0eWxlfT5cbiAgICAgICAge3N0ZXBzLm1hcCgoc3RlcCwgaW5kZXgpID0+IChcbiAgICAgICAgICA8U3RlcCBrZXk9e2luZGV4fT5cbiAgICAgICAgICAgIDxTdGVwTGFiZWxcbiAgICAgICAgICAgICAgU3RlcEljb25Qcm9wcz17e1xuICAgICAgICAgICAgICAgIGNsYXNzZXM6IHtcbiAgICAgICAgICAgICAgICAgIHJvb3Q6IGNsYXNzZXMuc3RlcEljb24sXG4gICAgICAgICAgICAgICAgICBhY3RpdmU6IGNsYXNzZXMuYWN0aXZlLFxuICAgICAgICAgICAgICAgICAgY29tcGxldGVkOiBjbGFzc2VzLmNvbXBsZXRlZCxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICBjbGFzc2VzPXt7IGxhYmVsOiBjbGFzc2VzLmxhYmVsIH19PlxuICAgICAgICAgICAgICB7c3RlcH1cbiAgICAgICAgICAgIDwvU3RlcExhYmVsPlxuICAgICAgICAgIDwvU3RlcD5cbiAgICAgICAgKSl9XG4gICAgICA8L1N0ZXBwZXI+XG4gICAgKTtcbiAgfVxufVxuXG5WZXJzZUVkaXRvclN0ZXBwZXIucHJvcFR5cGVzID0ge1xuICBzdHlsZTogUHJvcFR5cGVzLm9iamVjdCxcbiAgc3RlcEluZGV4OiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4gIHN0ZXBzOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMuc3RyaW5nKS5pc1JlcXVpcmVkLFxuICBjbGFzc2VzOiBQcm9wVHlwZXMub2JqZWN0LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlcyhzdHlsZXMpKFZlcnNlRWRpdG9yU3RlcHBlcik7XG4iXX0=