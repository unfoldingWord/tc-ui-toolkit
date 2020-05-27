"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.generateMenuData = generateMenuData;
exports.generateMenuItem = generateMenuItem;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/**
 * Helper utility to generate data for the menu.
 * @param {[]} index - the group index
 * @param {object} data - the group data
 * @param {string} progressKey - the key by which the group progress will be measured
 * @param {function} [onProcessItem=null] - an optional callback to perform additional processing on a menu item. This is executed before the `progressKey` is evaluated.
 * @param {string} progressKey2 - the secondary key by which the group progress will be measured
 * @returns {[]} the menu data
 */
function generateMenuData(index, data, progressKey) {
  var onProcessItem = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
  var progressKey2 = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : null;
  var menu = [];
  var dataKeys = Object.keys(data);

  for (var i = 0, len = index.length; i < len; i++) {
    var entry = index[i];

    if (dataKeys.includes(entry.id)) {
      // generate menu group
      var group = data[entry.id];
      var gl = group.length;
      var children = new Array(gl);

      for (var j = 0; j < gl; j++) {
        var item = processMenuItem(group[j]);
        children[j] = onProcessItem ? onProcessItem(item) : item;
      }

      menu.push({
        title: entry.name,
        progress: calculateProgress(children, progressKey, progressKey2),
        id: entry.id,
        children: children
      });
    }
  }

  return menu;
}
/**
 * Produces a valid menu item from a context id or a group data entry.
 * This is useful for pre-processing the active entry.
 * @param {object} contextId - a context id or group data entry.
 * @param {function} [onProcessItem=null] - an optional preprocessor
 * @returns {object}
 */


function generateMenuItem(contextId) {
  var onProcessItem = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  // TRICKY: determine if this is a contextId or group data entry.
  var item;

  if (contextId.hasOwnProperty('contextId')) {
    item = contextId;
  } else {
    item = {
      contextId: contextId
    };
  } // perform pre-processing


  if (typeof onProcessItem === 'function') {
    return onProcessItem(processMenuItem(item));
  } else {
    return processMenuItem(item);
  }
}
/**
 * Calculates the progress over an array of objects
 * @param {object[]} data - an array of objects
 * @param {string} progressKey - the key used to check the completion status of each object
 * @param {string} progressKey2 - the secondary key used to check the completion status of each object
 * @returns {number} - returns a number between 0 and 100 inclusive
 */


function calculateProgress(data, progressKey, progressKey2) {
  var total = data.length;
  var completed = 0;

  for (var i = 0, len = data.length; i < len; i++) {
    if (data[i][progressKey] || progressKey2 && data[i][progressKey2]) {
      completed++;
    }
  }

  return completed / total * 100;
}
/**
 * Performs some default child generation operations.
 * For advanced menu item customization you should provide a callback to {@link generateMenuData}
 * @param {object} data - the menu item data
 * @returns {object} - the formatted menu item data
 */


function processMenuItem(data) {
  // TRICKY: use the context id to pre-populate some fields
  var _data$contextId = data.contextId,
      groupId = _data$contextId.groupId,
      _data$contextId$refer = _data$contextId.reference,
      bookId = _data$contextId$refer.bookId,
      chapter = _data$contextId$refer.chapter,
      verse = _data$contextId$refer.verse;
  var passageTitle = "".concat(bookId, " ").concat(chapter, ":").concat(verse);
  return _objectSpread({}, data, {
    groupId: groupId,
    itemId: passageTitle,
    title: passageTitle
  });
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9Hcm91cGVkTWVudS91dGlscy5qcyJdLCJuYW1lcyI6WyJnZW5lcmF0ZU1lbnVEYXRhIiwiaW5kZXgiLCJkYXRhIiwicHJvZ3Jlc3NLZXkiLCJvblByb2Nlc3NJdGVtIiwicHJvZ3Jlc3NLZXkyIiwibWVudSIsImRhdGFLZXlzIiwiT2JqZWN0Iiwia2V5cyIsImkiLCJsZW4iLCJsZW5ndGgiLCJlbnRyeSIsImluY2x1ZGVzIiwiaWQiLCJncm91cCIsImdsIiwiY2hpbGRyZW4iLCJBcnJheSIsImoiLCJpdGVtIiwicHJvY2Vzc01lbnVJdGVtIiwicHVzaCIsInRpdGxlIiwibmFtZSIsInByb2dyZXNzIiwiY2FsY3VsYXRlUHJvZ3Jlc3MiLCJnZW5lcmF0ZU1lbnVJdGVtIiwiY29udGV4dElkIiwiaGFzT3duUHJvcGVydHkiLCJ0b3RhbCIsImNvbXBsZXRlZCIsImdyb3VwSWQiLCJyZWZlcmVuY2UiLCJib29rSWQiLCJjaGFwdGVyIiwidmVyc2UiLCJwYXNzYWdlVGl0bGUiLCJpdGVtSWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7O0FBU08sU0FBU0EsZ0JBQVQsQ0FDTEMsS0FESyxFQUVMQyxJQUZLLEVBR0xDLFdBSEssRUFNTDtBQUFBLE1BRkFDLGFBRUEsdUVBRmdCLElBRWhCO0FBQUEsTUFEQUMsWUFDQSx1RUFEZSxJQUNmO0FBQ0EsTUFBTUMsSUFBSSxHQUFHLEVBQWI7QUFDQSxNQUFNQyxRQUFRLEdBQUdDLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZUCxJQUFaLENBQWpCOztBQUVBLE9BQUssSUFBSVEsQ0FBQyxHQUFHLENBQVIsRUFBV0MsR0FBRyxHQUFHVixLQUFLLENBQUNXLE1BQTVCLEVBQW9DRixDQUFDLEdBQUdDLEdBQXhDLEVBQTZDRCxDQUFDLEVBQTlDLEVBQWtEO0FBQ2hELFFBQU1HLEtBQUssR0FBR1osS0FBSyxDQUFDUyxDQUFELENBQW5COztBQUVBLFFBQUlILFFBQVEsQ0FBQ08sUUFBVCxD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QkMsS0FBM0IsQ0FBbEI7QUFFQSwyQkFDS25DLElBREw7QUFFRStCLElBQUFBLE9BQU8sRUFBUEEsT0FGRjtBQUdFTSxJQUFBQSxNQUFNLEVBQUVELFlBSFY7QUFJRWQsSUFBQUEsS0FBSyxFQUFFYztBQUpUO0FBTUQiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEhlbHBlciB1dGlsaXR5IHRvIGdlbmVyYXRlIGRhdGEgZm9yIHRoZSBtZW51LlxuICogQHBhcmFtIHtbXX0gaW5kZXggLSB0aGUgZ3JvdXAgaW5kZXhcbiAqIEBwYXJhbSB7b2JqZWN0fSBkYXRhIC0gdGhlIGdyb3VwIGRhdGFcbiAqIEBwYXJhbSB7c3RyaW5nfSBwcm9ncmVzc0tleSAtIHRoZSBrZXkgYnkgd2hpY2ggdGhlIGdyb3VwIHByb2dyZXNzIHdpbGwgYmUgbWVhc3VyZWRcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IFtvblByb2Nlc3NJdGVtPW51bGxdIC0gYW4gb3B0aW9uYWwgY2FsbGJhY2sgdG8gcGVyZm9ybSBhZGRpdGlvbmFsIHByb2Nlc3Npbmcgb24gYSBtZW51IGl0ZW0uIFRoaXMgaXMgZXhlY3V0ZWQgYmVmb3JlIHRoZSBgcHJvZ3Jlc3NLZXlgIGlzIGV2YWx1YXRlZC5cbiAqIEBwYXJhbSB7c3RyaW5nfSBwcm9ncmVzc0tleTIgLSB0aGUgc2Vjb25kYXJ5IGtleSBieSB3aGljaCB0aGUgZ3JvdXAgcHJvZ3Jlc3Mgd2lsbCBiZSBtZWFzdXJlZFxuICogQHJldHVybnMge1tdfSB0aGUgbWVudSBkYXRhXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZW5lcmF0ZU1lbnVEYXRhKFxuICBpbmRleCxcbiAgZGF0YSxcbiAgcHJvZ3Jlc3NLZXksXG4gIG9uUHJvY2Vzc0l0ZW0gPSBudWxsLFxuICBwcm9ncmVzc0tleTIgPSBudWxsLFxuKSB7XG4gIGNvbnN0IG1lbnUgPSBbXTtcbiAgY29uc3QgZGF0YUtleXMgPSBPYmplY3Qua2V5cyhkYXRhKTtcblxuICBmb3IgKGxldCBpID0gMCwgbGVuID0gaW5kZXgubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICBjb25zdCBlbnRyeSA9IGluZGV4W2ldO1xuXG4gICAgaWYgKGRhdGFLZXlzLmluY2x1ZGVzKGVudHJ5LmlkKSkge1xuICAgICAgLy8gZ2VuZXJhdGUgbWVudSBncm91cFxuICAgICAgY29uc3QgZ3JvdXAgPSBkYXRhW2VudHJ5LmlkXTtcbiAgICAgIGNvbnN0IGdsID0gZ3JvdXAubGVuZ3RoO1xuICAgICAgY29uc3QgY2hpbGRyZW4gPSBuZXcgQXJyYXkoZ2wpO1xuXG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGdsOyBqKyspIHtcbiAgICAgICAgY29uc3QgaXRlbSA9IHByb2Nlc3NNZW51SXRlbShncm91cFtqXSk7XG4gICAgICAgIGNoaWxkcmVuW2pdID0gb25Qcm9jZXNzSXRlbSA/IG9uUHJvY2Vzc0l0ZW0oaXRlbSkgOiBpdGVtO1xuICAgICAgfVxuICAgICAgbWVudS5wdXNoKHtcbiAgICAgICAgdGl0bGU6IGVudHJ5Lm5hbWUsXG4gICAgICAgIHByb2dyZXNzOiBjYWxjdWxhdGVQcm9ncmVzcyhjaGlsZHJlbiwgcHJvZ3Jlc3NLZXksIHByb2dyZXNzS2V5MiksXG4gICAgICAgIGlkOiBlbnRyeS5pZCxcbiAgICAgICAgY2hpbGRyZW4sXG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gbWVudTtcbn1cblxuXG5cbi8qKlxuICogUHJvZHVjZXMgYSB2YWxpZCBtZW51IGl0ZW0gZnJvbSBhIGNvbnRleHQgaWQgb3IgYSBncm91cCBkYXRhIGVudHJ5LlxuICogVGhpcyBpcyB1c2VmdWwgZm9yIHByZS1wcm9jZXNzaW5nIHRoZSBhY3RpdmUgZW50cnkuXG4gKiBAcGFyYW0ge29iamVjdH0gY29udGV4dElkIC0gYSBjb250ZXh0IGlkIG9yIGdyb3VwIGRhdGEgZW50cnkuXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBbb25Qcm9jZXNzSXRlbT1udWxsXSAtIGFuIG9wdGlvbmFsIHByZXByb2Nlc3NvclxuICogQHJldHVybnMge29iamVjdH1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdlbmVyYXRlTWVudUl0ZW0oY29udGV4dElkLCBvblByb2Nlc3NJdGVtID0gbnVsbCkge1xuICAvLyBUUklDS1k6IGRldGVybWluZSBpZiB0aGlzIGlzIGEgY29udGV4dElkIG9yIGdyb3VwIGRhdGEgZW50cnkuXG4gIGxldCBpdGVtO1xuXG4gIGlmIChjb250ZXh0SWQuaGFzT3duUHJvcGVydHkoJ2NvbnRleHRJZCcpKSB7XG4gICAgaXRlbSA9IGNvbnRleHRJZDtcbiAgfSBlbHNlIHtcbiAgICBpdGVtID0geyBjb250ZXh0SWQgfTtcbiAgfVxuXG4gIC8vIHBlcmZvcm0gcHJlLXByb2Nlc3NpbmdcbiAgaWYgKHR5cGVvZiBvblByb2Nlc3NJdGVtID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIG9uUHJvY2Vzc0l0ZW0ocHJvY2Vzc01lbnVJdGVtKGl0ZW0pKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gcHJvY2Vzc01lbnVJdGVtKGl0ZW0pO1xuICB9XG59XG5cbi8qKlxuICogQ2FsY3VsYXRlcyB0aGUgcHJvZ3Jlc3Mgb3ZlciBhbiBhcnJheSBvZiBvYmplY3RzXG4gKiBAcGFyYW0ge29iamVjdFtdfSBkYXRhIC0gYW4gYXJyYXkgb2Ygb2JqZWN0c1xuICogQHBhcmFtIHtzdHJpbmd9IHByb2dyZXNzS2V5IC0gdGhlIGtleSB1c2VkIHRvIGNoZWNrIHRoZSBjb21wbGV0aW9uIHN0YXR1cyBvZiBlYWNoIG9iamVjdFxuICogQHBhcmFtIHtzdHJpbmd9IHByb2dyZXNzS2V5MiAtIHRoZSBzZWNvbmRhcnkga2V5IHVzZWQgdG8gY2hlY2sgdGhlIGNvbXBsZXRpb24gc3RhdHVzIG9mIGVhY2ggb2JqZWN0XG4gKiBAcmV0dXJucyB7bnVtYmVyfSAtIHJldHVybnMgYSBudW1iZXIgYmV0d2VlbiAwIGFuZCAxMDAgaW5jbHVzaXZlXG4gKi9cbmZ1bmN0aW9uIGNhbGN1bGF0ZVByb2dyZXNzKGRhdGEsIHByb2dyZXNzS2V5LCBwcm9ncmVzc0tleTIpIHtcbiAgY29uc3QgdG90YWwgPSBkYXRhLmxlbmd0aDtcbiAgbGV0IGNvbXBsZXRlZCA9IDA7XG5cbiAgZm9yIChsZXQgaSA9IDAsIGxlbiA9IGRhdGEubGVuZ3RoOyBpIDwgbGVuOyBpICsrKSB7XG4gICAgaWYgKGRhdGFbaV1bcHJvZ3Jlc3NLZXldIHx8IChwcm9ncmVzc0tleTIgJiYgZGF0YVtpXVtwcm9ncmVzc0tleTJdKSkge1xuICAgICAgY29tcGxldGVkKys7XG4gICAgfVxuICB9XG4gIHJldHVybiAoY29tcGxldGVkIC8gdG90YWwpICogMTAwO1xufVxuXG4vKipcbiAqIFBlcmZvcm1zIHNvbWUgZGVmYXVsdCBjaGlsZCBnZW5lcmF0aW9uIG9wZXJhdGlvbnMuXG4gKiBGb3IgYWR2YW5jZWQgbWVudSBpdGVtIGN1c3RvbWl6YXRpb24geW91IHNob3VsZCBwcm92aWRlIGEgY2FsbGJhY2sgdG8ge0BsaW5rIGdlbmVyYXRlTWVudURhdGF9XG4gKiBAcGFyYW0ge29iamVjdH0gZGF0YSAtIHRoZSBtZW51IGl0ZW0gZGF0YVxuICogQHJldHVybnMge29iamVjdH0gLSB0aGUgZm9ybWF0dGVkIG1lbnUgaXRlbSBkYXRhXG4gKi9cbmZ1bmN0aW9uIHByb2Nlc3NNZW51SXRlbShkYXRhKSB7XG4gIC8vIFRSSUNLWTogdXNlIHRoZSBjb250ZXh0IGlkIHRvIHByZS1wb3B1bGF0ZSBzb21lIGZpZWxkc1xuICBjb25zdCB7XG4gICAgY29udGV4dElkOiB7XG4gICAgICBncm91cElkLFxuICAgICAgcmVmZXJlbmNlOiB7XG4gICAgICAgIGJvb2tJZCwgY2hhcHRlciwgdmVyc2UsXG4gICAgICB9LFxuICAgIH0sXG4gIH0gPSBkYXRhO1xuICBjb25zdCBwYXNzYWdlVGl0bGUgPSBgJHtib29rSWR9ICR7Y2hhcHRlcn06JHt2ZXJzZX1gO1xuXG4gIHJldHVybiB7XG4gICAgLi4uZGF0YSxcbiAgICBncm91cElkLFxuICAgIGl0ZW1JZDogcGFzc2FnZVRpdGxlLFxuICAgIHRpdGxlOiBwYXNzYWdlVGl0bGUsXG4gIH07XG59XG4iXX0=