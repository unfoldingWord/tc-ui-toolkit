"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf3 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _memoizeOne = _interopRequireDefault(require("memoize-one"));

var _lodash = _interopRequireDefault(require("lodash"));

var _Menu = _interopRequireDefault(require("../Menu"));

var _MenuFilter = _interopRequireDefault(require("./MenuFilter"));

var _MenuHeader = _interopRequireDefault(require("./MenuHeader"));

/**
 * Renders filtered menu.
 * This receives the same properties as the {@link Menu} in addition to some filtering options.
 * @param {object[]} filters - an array of filters
 * @param {string} title - the menu title
 *
 */
var FilteredMenu = /*#__PURE__*/function (_React$Component) {
  (0, _inherits2["default"])(FilteredMenu, _React$Component);

  function FilteredMenu() {
    var _getPrototypeOf2;

    var _this;

    (0, _classCallCheck2["default"])(this, FilteredMenu);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = (0, _possibleConstructorReturn2["default"])(this, (_getPrototypeOf2 = (0, _getPrototypeOf3["default"])(FilteredMenu)).call.apply(_getPrototypeOf2, [this].concat(args)));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "state", {
      filtersOpen: false,
      selectedFilters: []
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleOpenFilters", function () {
      _this.setState(function (state) {
        return {
          filtersOpen: !state.filtersOpen
        };
      });
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleToggleFilter", function (filter) {
      var selectedFilters = _this.state.selectedFilters;
      var currentIndex = selectedFilters.findIndex(function (selected) {
        return selected.id === filter.id;
      });
      var newChecked = (0, _toConsumableArray2["default"])(selectedFilters);

      if (currentIndex === -1) {
        newChecked.push(filter);
      } else {
        newChecked.splice(currentIndex, 1);
      }

      _this.setState({
        selectedFilters: newChecked
      });
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "normalizeFilters", (0, _memoizeOne["default"])(function (filters) {
      var normalized = [];

      for (var i = 0, len = filters.length; i < len; i++) {
        var filter = Object.assign({}, {
          value: true,
          disables: [],
          id: filters[i].key
        }, filters[i]);
        normalized.push(filter);
      }

      return normalized;
    }));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "filter", (0, _memoizeOne["default"])(function (entries, filters) {
      var groups = _lodash["default"].cloneDeep(entries); // filter children


      groups.map(function (group) {
        group.children = group.children.filter(function (entry) {
          for (var i = 0, len = filters.length; i < len; i++) {
            if (Boolean(entry[filters[i].key]) === filters[i].value) {
              return true;
            }
          }

          return filters.length === 0;
        });
        return group;
      }); // filter empty groups

      return groups.filter(function (entry) {
        return entry.children.length > 0;
      });
    }));
    return _this;
  }

  (0, _createClass2["default"])(FilteredMenu, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          filters = _this$props.filters,
          active = _this$props.active,
          entries = _this$props.entries,
          height = _this$props.height,
          title = _this$props.title,
          onItemClick = _this$props.onItemClick,
          width = _this$props.width,
          statusIcons = _this$props.statusIcons,
          emptyNotice = _this$props.emptyNotice,
          targetLanguageFont = _this$props.targetLanguageFont;
      var _this$state = this.state,
          selectedFilters = _this$state.selectedFilters,
          filtersOpen = _this$state.filtersOpen;
      var normalizedFilters = this.normalizeFilters(filters);
      var filteredEntries = this.filter(entries, selectedFilters); // fallback to filter icons

      var menuStatusIcons = statusIcons !== undefined ? statusIcons : filters;
      return _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(_Menu["default"], {
        header: filters.length ? _react["default"].createElement(_MenuFilter["default"], {
          onToggle: this.handleToggleFilter,
          onOpen: this.handleOpenFilters,
          open: filtersOpen,
          title: title,
          filters: normalizedFilters,
          selected: selectedFilters
        }) : _react["default"].createElement(_MenuHeader["default"], {
          title: title
        }),
        width: width,
        emptyNotice: emptyNotice,
        statusIcons: menuStatusIcons,
        entries: filteredEntries,
        active: active,
        height: height,
        onItemClick: onItemClick,
        targetLanguageFont: targetLanguageFont
      }));
    }
  }]);
  return FilteredMenu;
}(_react["default"].Component);

FilteredMenu.propTypes = {
  filters: _propTypes["default"].array.isRequired,
  title: _propTypes["default"].string.isRequired,
  entries: _propTypes["default"].arrayOf(_propTypes["default"].object),
  active: _propTypes["default"].object,
  height: _propTypes["default"].any,
  onItemClick: _propTypes["default"].func,
  width: _propTypes["default"].number,
  emptyNotice: _propTypes["default"].string,
  targetLanguageFont: _propTypes["default"].string,
  statusIcons: _propTypes["default"].arrayOf(_propTypes["default"].object)
};
FilteredMenu.defaultProps = {
  emptyNotice: 'No results found'
};

var _default = _react["default"].memo(FilteredMenu);

exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9Hcm91cGVkTWVudS9GaWx0ZXJlZE1lbnUvaW5kZXguanMiXSwibmFtZXMiOlsiRmlsdGVyZWRNZW51IiwiZmlsdGVyc09wZW4iLCJzZWxlY3RlZEZpbHRlcnMiLCJzZXRTdGF0ZSIsInN0YXRlIiwiZmlsdGVyIiwiY3VycmVudEluZGV4IiwiZmluZEluZGV4Iiwic2VsZWN0ZWQiLCJpZCIsIm5ld0NoZWNrZWQiLCJwdXNoIiwic3BsaWNlIiwiZmlsdGVycyIsIm5vcm1hbGl6ZWQiLCJpIiwibGVuIiwibGVuZ3RoIiwiT2JqZWN0IiwiYXNzaWduIiwidmFsdWUiLCJkaXNhYmxlcyIsImtleSIsImVudHJpZXMiLCJncm91cHMiLCJfIiwiY2xvbmVEZWVwIiwibWFwIiwiZ3JvdXAiLCJjaGlsZHJlbiIsImVudHJ5IiwiQm9vbGVhbiIsInByb3BzIiwiYWN0aXZlIiwiaGVpZ2h0IiwidGl0bGUiLCJvbkl0ZW1DbGljayIsIndpZHRoIiwic3RhdHVzSWNvbnMiLCJlbXB0eU5vdGljZSIsInRhcmdldExhbmd1YWdlRm9udCIsIm5vcm1hbGl6ZWRGaWx0ZXJzIiwibm9ybWFsaXplRmlsdGVycyIsImZpbHRlcmVkRW50cmllcyIsIm1lbnVTdGF0dXNJY29ucyIsInVuZGVmaW5lZCIsImhhbmRsZVRvZ2dsZUZpbHRlciIsImhhbmRsZU9wZW5GaWx0ZXJzIiwiUmVhY3QiLCJDb21wb25lbnQiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJhcnJheSIsImlzUmVxdWlyZWQiLCJzdHJpbmciLCJhcnJheU9mIiwib2JqZWN0IiwiYW55IiwiZnVuYyIsIm51bWJlciIsImRlZmF1bHRQcm9wcyIsIm1lbW8iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFFQTs7Ozs7OztJQU9NQSxZOzs7Ozs7Ozs7Ozs7Ozs7OEZBQ0k7QUFDTkMsTUFBQUEsV0FBVyxF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JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgbWVtb2l6ZSBmcm9tICdtZW1vaXplLW9uZSc7XG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IE1lbnUgZnJvbSAnLi4vTWVudSc7XG5pbXBvcnQgTWVudUZpbHRlciBmcm9tICcuL01lbnVGaWx0ZXInO1xuaW1wb3J0IE1lbnVIZWFkZXIgZnJvbSAnLi9NZW51SGVhZGVyJztcblxuLyoqXG4gKiBSZW5kZXJzIGZpbHRlcmVkIG1lbnUuXG4gKiBUaGlzIHJlY2VpdmVzIHRoZSBzYW1lIHByb3BlcnRpZXMgYXMgdGhlIHtAbGluayBNZW51fSBpbiBhZGRpdGlvbiB0byBzb21lIGZpbHRlcmluZyBvcHRpb25zLlxuICogQHBhcmFtIHtvYmplY3RbXX0gZmlsdGVycyAtIGFuIGFycmF5IG9mIGZpbHRlcnNcbiAqIEBwYXJhbSB7c3RyaW5nfSB0aXRsZSAtIHRoZSBtZW51IHRpdGxlXG4gKlxuICovXG5jbGFzcyBGaWx0ZXJlZE1lbnUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBzdGF0ZSA9IHtcbiAgICBmaWx0ZXJzT3BlbjogZmFsc2UsXG4gICAgc2VsZWN0ZWRGaWx0ZXJzOiBbXSxcbiAgfTtcblxuICAvKipcbiAgICogSGFuZGxlcyBvcGVuaW5nIHRoZSBmaWx0ZXIgbWVudVxuICAgKi9cbiAgaGFuZGxlT3BlbkZpbHRlcnMgPSAoKSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZShzdGF0ZSA9PiAoeyBmaWx0ZXJzT3BlbjogIXN0YXRlLmZpbHRlcnNPcGVuIH0pKTtcbiAgfTtcblxuICAvKipcbiAgICogSGFuZGxlcyB0b2dnbGluZyBhIGZpbHRlclxuICAgKiBAcGFyYW0ge29iamVjdH0gZmlsdGVyIC0gdGhlIGZpbHRlciBiZWluZyB0b2dnbGVkXG4gICAqL1xuICBoYW5kbGVUb2dnbGVGaWx0ZXIgPSBmaWx0ZXIgPT4ge1xuICAgIGNvbnN0IHsgc2VsZWN0ZWRGaWx0ZXJzIH0gPSB0aGlzLnN0YXRlO1xuICAgIGNvbnN0IGN1cnJlbnRJbmRleCA9IHNlbGVjdGVkRmlsdGVycy5maW5kSW5kZXgoc2VsZWN0ZWQgPT4gKHNlbGVjdGVkLmlkID09PSBmaWx0ZXIuaWQpKTtcbiAgICBjb25zdCBuZXdDaGVja2VkID0gWy4uLnNlbGVjdGVkRmlsdGVyc107XG5cbiAgICBpZiAoY3VycmVudEluZGV4ID09PSAtMSkge1xuICAgICAgbmV3Q2hlY2tlZC5wdXNoKGZpbHRlcik7XG4gICAgfSBlbHNlIHtcbiAgICAgIG5ld0NoZWNrZWQuc3BsaWNlKGN1cnJlbnRJbmRleCwgMSk7XG4gICAgfVxuXG4gICAgdGhpcy5zZXRTdGF0ZSh7IHNlbGVjdGVkRmlsdGVyczogbmV3Q2hlY2tlZCB9KTtcbiAgfTtcblxuICAvKipcbiAgICogQXBwbGllcyBkZWZhdWx0IGtleSB2YWx1ZXMgdG8gdGhlIGZpbHRlcnMuXG4gICAqIFRoaXMgcHJlcGFyZXMgZmlsdGVycyBmb3IgdXNlIGluIHRoZSBmaWx0ZXJlZCBtZW51LlxuICAgKiBAcGFyYW0ge1tdfSBmaWx0ZXJzIC0gYW4gYXJyYXkgb2YgZmlsdGVyIG9iamVjdHNcbiAgICogQHJldHVybnMge1tdfSAtIGFuIGFycmF5IG9mIG5vcm1hbGl6ZWQgZmlsdGVyIG9iamVjdHMuXG4gICAqL1xuICBub3JtYWxpemVGaWx0ZXJzID0gbWVtb2l6ZShmaWx0ZXJzID0+IHtcbiAgICBjb25zdCBub3JtYWxpemVkID0gW107XG5cbiAgICBmb3IgKGxldCBpID0gMCwgbGVuID0gZmlsdGVycy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgY29uc3QgZmlsdGVyID0gT2JqZWN0LmFzc2lnbihcbiAgICAgICAge30sXG4gICAgICAgIHtcbiAgICAgICAgICB2YWx1ZTogdHJ1ZSwgZGlzYWJsZXM6IFtdLCBpZDogZmlsdGVyc1tpXS5rZXksXG4gICAgICAgIH0sXG4gICAgICAgIGZpbHRlcnNbaV0sXG4gICAgICApO1xuICAgICAgbm9ybWFsaXplZC5wdXNoKGZpbHRlcik7XG4gICAgfVxuICAgIHJldHVybiBub3JtYWxpemVkO1xuICB9KTtcblxuICAvKipcbiAgICogRXhlY3V0ZXMgYWxsIG9mIHRoZSBlbmFibGVkIGZpbHRlcnMuXG4gICAqIEZpbHRlcmluZyBpcyBwZXJmb3JtZWQgYnkgc2hhbGxvdyBtYXRjaGluZyBhZ2FpbnN0IHRoZSBmaWx0ZXIgYHZhbHVlYC5cbiAgICogRmlsdGVycyBhcmUgZXZhbHVhdGVkIGFzIFwib3JcIlxuICAgKiBAcHJvcGVydHkgZW50cmllcyAtIHRoZSBtZW51IGVudHJpZXNcbiAgICogQHByb3BlcnR5IHtzdHJpbmdbXX0gZmlsdGVycyAtIHRoZSBmaWx0ZXJlcyB0aGF0IHdpbGwgYmUgYXBwbGllZFxuICAgKiBAcmV0dXJucyB7W119IC0gdGhlIGZpbHRlcmVkIGVudHJpZXNcbiAgICovXG4gIGZpbHRlciA9IG1lbW9pemUoKGVudHJpZXMsIGZpbHRlcnMpID0+IHtcbiAgICBjb25zdCBncm91cHMgPSBfLmNsb25lRGVlcChlbnRyaWVzKTtcblxuICAgIC8vIGZpbHRlciBjaGlsZHJlblxuICAgIGdyb3Vwcy5tYXAoZ3JvdXAgPT4ge1xuICAgICAgZ3JvdXAuY2hpbGRyZW4gPSBncm91cC5jaGlsZHJlbi5maWx0ZXIoZW50cnkgPT4ge1xuICAgICAgICBmb3IgKGxldCBpID0gMCwgbGVuID0gZmlsdGVycy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgIGlmIChCb29sZWFuKGVudHJ5W2ZpbHRlcnNbaV0ua2V5XSkgPT09IGZpbHRlcnNbaV0udmFsdWUpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmlsdGVycy5sZW5ndGggPT09IDA7XG4gICAgICB9KTtcbiAgICAgIHJldHVybiBncm91cDtcbiAgICB9KTtcblxuICAgIC8vIGZpbHRlciBlbXB0eSBncm91cHNcbiAgICByZXR1cm4gZ3JvdXBzLmZpbHRlcihlbnRyeSA9PiBlbnRyeS5jaGlsZHJlbi5sZW5ndGggPiAwKTtcbiAgfSk7XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIGZpbHRlcnMsXG4gICAgICBhY3RpdmUsXG4gICAgICBlbnRyaWVzLFxuICAgICAgaGVpZ2h0LFxuICAgICAgdGl0bGUsXG4gICAgICBvbkl0ZW1DbGljayxcbiAgICAgIHdpZHRoLFxuICAgICAgc3RhdHVzSWNvbnMsXG4gICAgICBlbXB0eU5vdGljZSxcbiAgICAgIHRhcmdldExhbmd1YWdlRm9udCxcbiAgICB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB7IHNlbGVjdGVkRmlsdGVycywgZmlsdGVyc09wZW4gfSA9IHRoaXMuc3RhdGU7XG4gICAgY29uc3Qgbm9ybWFsaXplZEZpbHRlcnMgPSB0aGlzLm5vcm1hbGl6ZUZpbHRlcnMoZmlsdGVycyk7XG4gICAgY29uc3QgZmlsdGVyZWRFbnRyaWVzID0gdGhpcy5maWx0ZXIoZW50cmllcywgc2VsZWN0ZWRGaWx0ZXJzKTtcblxuICAgIC8vIGZhbGxiYWNrIHRvIGZpbHRlciBpY29uc1xuICAgIGNvbnN0IG1lbnVTdGF0dXNJY29ucyA9IHN0YXR1c0ljb25zICE9PSB1bmRlZmluZWQgPyBzdGF0dXNJY29ucyA6IGZpbHRlcnM7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICA8TWVudVxuICAgICAgICAgIGhlYWRlcj17XG4gICAgICAgICAgICBmaWx0ZXJzLmxlbmd0aCA/IChcbiAgICAgICAgICAgICAgPE1lbnVGaWx0ZXJcbiAgICAgICAgICAgICAgICBvblRvZ2dsZT17dGhpcy5oYW5kbGVUb2dnbGVGaWx0ZXJ9XG4gICAgICAgICAgICAgICAgb25PcGVuPXt0aGlzLmhhbmRsZU9wZW5GaWx0ZXJzfVxuICAgICAgICAgICAgICAgIG9wZW49e2ZpbHRlcnNPcGVufVxuICAgICAgICAgICAgICAgIHRpdGxlPXt0aXRsZX1cbiAgICAgICAgICAgICAgICBmaWx0ZXJzPXtub3JtYWxpemVkRmlsdGVyc31cbiAgICAgICAgICAgICAgICBzZWxlY3RlZD17c2VsZWN0ZWRGaWx0ZXJzfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgPE1lbnVIZWFkZXIgdGl0bGU9e3RpdGxlfSAvPlxuICAgICAgICAgICAgKVxuICAgICAgICAgIH1cbiAgICAgICAgICB3aWR0aD17d2lkdGh9XG4gICAgICAgICAgZW1wdHlOb3RpY2U9e2VtcHR5Tm90aWNlfVxuICAgICAgICAgIHN0YXR1c0ljb25zPXttZW51U3RhdHVzSWNvbnN9XG4gICAgICAgICAgZW50cmllcz17ZmlsdGVyZWRFbnRyaWVzfVxuICAgICAgICAgIGFjdGl2ZT17YWN0aXZlfVxuICAgICAgICAgIGhlaWdodD17aGVpZ2h0fVxuICAgICAgICAgIG9uSXRlbUNsaWNrPXtvbkl0ZW1DbGlja31cbiAgICAgICAgICB0YXJnZXRMYW5ndWFnZUZvbnQ9e3RhcmdldExhbmd1YWdlRm9udH1cbiAgICAgICAgLz5cbiAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgKTtcbiAgfVxufVxuXG5GaWx0ZXJlZE1lbnUucHJvcFR5cGVzID0ge1xuICBmaWx0ZXJzOiBQcm9wVHlwZXMuYXJyYXkuaXNSZXF1aXJlZCxcbiAgdGl0bGU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgZW50cmllczogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLm9iamVjdCksXG4gIGFjdGl2ZTogUHJvcFR5cGVzLm9iamVjdCxcbiAgaGVpZ2h0OiBQcm9wVHlwZXMuYW55LFxuICBvbkl0ZW1DbGljazogUHJvcFR5cGVzLmZ1bmMsXG4gIHdpZHRoOiBQcm9wVHlwZXMubnVtYmVyLFxuICBlbXB0eU5vdGljZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgdGFyZ2V0TGFuZ3VhZ2VGb250OiBQcm9wVHlwZXMuc3RyaW5nLFxuICBzdGF0dXNJY29uczogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLm9iamVjdCksXG59O1xuXG5GaWx0ZXJlZE1lbnUuZGVmYXVsdFByb3BzID0geyBlbXB0eU5vdGljZTogJ05vIHJlc3VsdHMgZm91bmQnIH07XG5cbmV4cG9ydCBkZWZhdWx0IFJlYWN0Lm1lbW8oRmlsdGVyZWRNZW51KTtcbiJdfQ==