"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.unicodeTrim = unicodeTrim;
exports.joinContiguousRanges = joinContiguousRanges;
exports.normalizeString = exports.selectionArray = exports.addSelectionToSelections = exports.removeSelectionFromSelections = exports.optimizeSelections = exports.rangesToSelections = exports.optimizeRanges = exports.selectionsToStringSplices = exports.selectionsToRanges = exports.spliceStringOnRanges = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _xregexp = _interopRequireDefault(require("xregexp"));

var _lodash = _interopRequireDefault(require("lodash"));

var stringHelpers = _interopRequireWildcard(require("./stringHelpers"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/**
 * @description - Splice string into array of ranges, flagging what is selected
 * @param {array} ranges - array of ranges [[int,int],...]
 * @returns {array} - array of objects [obj,...]
 */
var spliceStringOnRanges = function spliceStringOnRanges(string, ranges) {
  var selectionArray = []; // response

  var remainingString = string; // shift the range since the loop is destructive by working on the remainingString and not original string

  var rangeShift = 0; // start the range shift at the first character

  ranges.forEach(function (range) {
    var firstCharacterPosition = range[0] - rangeShift; // original range start - the rangeShift

    var beforeSelection = remainingString.slice(0, firstCharacterPosition); // save all the text before the selection

    if (beforeSelection) {
      // only add to the array if string isn't empty
      selectionArray.push({
        text: beforeSelection,
        selected: false
      });
    }

    var shiftedRangeStart = range[0] - rangeShift; // range start - the rangeShift

    var shiftedRangeEnd = range[1] + 1 - rangeShift; // range end - rangeShift + 1 to include last character

    var selection = remainingString.slice(shiftedRangeStart, shiftedRangeEnd); // save the text in the selection

    var stringBeforeRange = string.slice(0, range[0]);
    var occurrence = stringHelpers.occurrencesInString(stringBeforeRange, selection) + 1;
    var occurrences = stringHelpers.occurrencesInString(string, selection);
    var selectionObject = {
      text: selection,
      selected: true,
      occurrence: occurrence,
      occurrences: occurrences
    };
    selectionArray.push(selectionObject); // add the selection to the response array
    // next iteration is using remaining string

    var lastCharacterPosition = range[1] - rangeShift + 1; // original range end position - the rangeShift + 1 to not include the last range character in the remaining string

    remainingString = remainingString.slice(lastCharacterPosition); // update the remainingString to after the range
    // shift the range up to last char of substring (before+sub)

    rangeShift += beforeSelection.length; // adjust the rangeShift by the length prior to the selection

    rangeShift += selection.length; // adjust the rangeShift by the length of the selection itself
  });

  if (remainingString) {
    // only add to the array if string isn't empty
    selectionArray.push({
      text: remainingString,
      selected: false
    });
  }

  return selectionArray;
};
/**
 * @description - This converts ranges to array of selection objects
 * @param {string} string - text used to get the ranges of
 * @param {array} selections - array of selections [obj,...]
 * @returns {array} - array of range objects
 */


exports.spliceStringOnRanges = spliceStringOnRanges;

var selectionsToRanges = function selectionsToRanges(string, selections) {
  var ranges = []; // response

  selections.forEach(function (selection) {
    if (string && string.includes(selection.text)) {
      // conditions to prevent errors
      var splitArray = string.split(selection.text); // split the string to get the text between occurrences

      var beforeSelection = splitArray.slice(0, selection.occurrence).join(selection.text); // get the text before the selection to handle multiple occurrences

      var start = beforeSelection.length; // the start position happens at the length of the string that comes before it

      var end = start + selection.text.length - 1; // the end position happens at the end of the selection text, but length doesn't account for 0 based position start

      var range = [start, end]; // new range

      ranges.push(range); // add the new range
    }
  });
  return ranges;
};
/**
 * @description - Splice string into array of substrings, flagging what is selected
 * @param {string} string - text used to get the ranges of
 * @param {array} selections - array of selections [obj,...]
 * @returns {array} - array of objects
 */


exports.selectionsToRanges = selectionsToRanges;

var selectionsToStringSplices = function selectionsToStringSplices(string, selections) {
  var splicedStringArray = []; // response

  selections = optimizeSelections(string, selections); // optimize them before converting

  var ranges = selectionsToRanges(string, selections); // convert the selections to ranges

  splicedStringArray = spliceStringOnRanges(string, ranges); // splice the string on the ranges

  return splicedStringArray; // return the spliced string
};
/**
 * @description - This abstracts complex handling of ranges such as order, deduping, concatenating, overlaps
 * @param {array}  ranges - array of ranges [[int,int],...]
 * @returns {array} - array of optimized ranges [[int,int],...]
 */


exports.selectionsToStringSplices = selectionsToStringSplices;

var optimizeRanges = function optimizeRanges(ranges) {
  var optimizedRanges = []; // response

  if (ranges.length === 1) {
    return ranges;
  } // if there's only one, return it


  ranges = _lodash["default"].sortBy(ranges, function (range) {
    return range[1];
  }); // order ranges by end char index as secondary

  ranges = _lodash["default"].sortBy(ranges, function (range) {
    return range[0];
  }); // order ranges by start char index as primary

  ranges = _lodash["default"].uniq(ranges); // remove duplicates
  // combine overlapping and contiguous ranges

  var runningRange = []; // the running range to merge overlapping and contiguous ranges

  ranges.forEach(function (currentRange, index) {
    var currentStart = currentRange[0],
        currentEnd = currentRange[1];
    var runningStart = runningRange[0],
        runningEnd = runningRange[1];

    if (currentStart >= runningStart && currentStart <= runningEnd + 1) {
      // the start occurs in the running range and +1 handles contiguous
      if (currentEnd >= runningStart && currentEnd <= runningEnd) {// if the start occurs inside running range then let's check the end
        // if the end occurs inside the running range then it's inside it and doesn't matter
      } else {
        // the end doesn't occur inside the running range
        runningRange[1] = runningEnd = currentEnd; // extend running range
      }
    } else {
      // the start does not occur in the running range
      if (runningRange.length !== 0) {
        optimizedRanges.push(runningRange);
      } // the running range is closed push it to optimizedRanges


      runningRange = currentRange; // reset the running range to this one
    }

    if (ranges.length === index + 1 && runningEnd - runningStart >= 0) {
      // this is the last one and it isn't blank
      optimizedRanges.push(runningRange); // push the last one to optimizedRanges
    }
  });
  return optimizedRanges;
};
/**
 * @description - This converts ranges to array of selection objects
 * @param {string} string - text used to get the ranges of
 * @param {array} ranges - array of ranges [[int,int],...]
 * @returns {array} - array of selection objects
 */


exports.optimizeRanges = optimizeRanges;

var rangesToSelections = function rangesToSelections(string, ranges) {
  var selections = [];
  ranges.forEach(function (range) {
    var start = range[0],
        end = range[1]; // set the start and end point

    var length = end - start + 1; // get the length of the sub string

    var subString = string.substr(start, length); // get text of the sub string

    var beforeText = string.substr(0, start); // get the string prior to the range

    var beforeMatches = stringHelpers.occurrencesInString(beforeText, subString); // get occurrences prior to range

    var occurrence = beforeMatches + 1; // get number of this occurrence

    var occurrences = stringHelpers.occurrencesInString(string, subString); // get occurrences in string

    var selection = {
      text: subString,
      occurrence: occurrence,
      occurrences: occurrences
    };

    if (occurrences > 0) {
      // there are some edge cases where empty strings get through but don't have occurrences
      selections.push(selection);
    }
  });
  return selections;
};
/**
 * after text has been trimmed, need to update occurrence and occurrences since they may have changed
 * @param {String} string - verse string
 * @param {Object} selection - current selection to update
 * @param {String} trimmedText - new selection.text after trimming
 */


exports.rangesToSelections = rangesToSelections;

function updateTrimmedTextOccurence(string, selection, trimmedText) {
  var originalRanges = selectionsToRanges(string, [selection]);

  if (originalRanges) {
    var offset = selection.text.indexOf(trimmedText); // get offset of trimmed from non-trimmed

    var originalRange = originalRanges[0];
    var newStartPosition = originalRange[0] + offset;
    var occurrence = selection.occurrence;
    var maxOccurrences = stringHelpers.occurrencesInString(string, trimmedText) + 1; // when to stop searching

    var ranges = [];
    var reachedEnd = false;

    do {
      // repeatedly try new occurrence values until it matches the trimmed text position or we go out of bounds
      var newSelection = [_objectSpread({}, selection, {
        occurrence: occurrence,
        text: trimmedText
      })];
      ranges = selectionsToRanges(string, newSelection);

      if (ranges) {
        var range = ranges[0];

        if (range[0] === newStartPosition) {
          // if selection for this occurrence is at correct position, we use it
          var optimizedSelections = rangesToSelections(string, ranges); // clean up occurrences

          if (optimizedSelections) {
            // if found, we use updated values for occurrence(s)
            selection.occurrence = optimizedSelections[0].occurrence;
            selection.occurrences = optimizedSelections[0].occurrences;
          }

          ranges = null; // done searching
        } else {
          occurrence++;
          reachedEnd = occurrence >= maxOccurrences; // likely failed because original selection had invalid occurrence
        }
      }
    } while (!reachedEnd && ranges);
  }
}
/**
 * trim various unicode spaces from leading and trailing edges
 * @param {string} text - string to trim
 * @return {string} trimmed text
 */


function unicodeTrim(text) {
  var match;

  do {
    // remove leading or trailing unicode whitespace characters as well as:
    //    const ZERO_WIDTH_SPACE = '\u200B';
    //    const ZERO_WIDTH_JOINER = '\u2060';
    var regex = (0, _xregexp["default"])(/^[\t-\r \xA0\u1680\u2000-\u200B\u2028\u2029\u202F\u205F\u2060\u3000\uFEFF]+|[\t-\r \xA0\u1680\u2000-\u200B\u2028\u2029\u202F\u205F\u2060\u3000\uFEFF]+$/g);
    match = regex.exec(text);

    if (match) {
      var atStart = match.index === 0;

      if (atStart) {
        var whiteSpaceLen = match[0].length;
        text = text.substr(whiteSpaceLen);
      } else {
        text = text.substr(0, match.index);
      }
    }
  } while (match);

  return text;
}
/**
 * join contiguous ranges (of selections) and return new ranges array
 * @param {string} text - verse text
 * @param {Array} ranges
 * @return {Array}
 */


function joinContiguousRanges(text, ranges) {
  var outputRanges = ranges;

  if (ranges) {
    outputRanges = [];

    for (var i = 0, l = ranges.length; i < l; i++) {
      var range = ranges[i];

      if (i >= 1) {
        // skip over first range
        var lastPos = outputRanges.length - 1;
        var lastRange = outputRanges[lastPos];
        var gapStart = lastRange[1] + 1;
        var charactersBetween = range[0] - gapStart;
        var inBetween = text.substr(gapStart, charactersBetween);
        inBetween = unicodeTrim(inBetween);

        if (!inBetween.length) {
          // if only white space
          lastRange[1] = range[1]; // join this range with previous range

          range = null;
        }
      }

      if (range) {
        outputRanges.push(range);
      }
    }
  }

  return outputRanges;
}
/**
 * @description - This abstracts complex handling of selections such as order, deduping, concatenating, overlapping ranges
 * @param {string} string - the text selections are found in
 * @param {array}  selections - array of selection objects [Obj,...]
 * @returns {array} - array of selection objects
 */


var optimizeSelections = function optimizeSelections(string, selections) {
  var optimizedSelections; // return
  // filter out empty selections and trim whitespace

  selections = selections.filter(function (selection) {
    var selectedText = selection.text;
    var trimmedText = unicodeTrim(selectedText);
    var whiteSpaceSelected = !trimmedText.length;

    if (!whiteSpaceSelected && trimmedText !== selectedText) {
      // if whitespace removed, update selection text
      updateTrimmedTextOccurence(string, selection, trimmedText);
      selection.text = trimmedText;
    }

    return !whiteSpaceSelected;
  });
  var ranges = selectionsToRanges(string, selections); // get char ranges of each selection

  ranges = optimizeRanges(ranges); // optimize the ranges

  ranges = joinContiguousRanges(string, ranges);
  optimizedSelections = rangesToSelections(string, ranges); // convert optimized ranges into selections

  return optimizedSelections;
};
/**
 * @description - Removes a selection if found in the array of selections
 * @param {Object} selection - the selection to remove
 * @param {Array}  selections - array of selection objects [Obj,...]
 * @param {string} string - the text selections are found in
 * @returns {Array} - array of selection objects
 */


exports.optimizeSelections = optimizeSelections;

var removeSelectionFromSelections = function removeSelectionFromSelections(selection, selections, string) {
  selections = Array.from(selections);
  selections = selections.filter(function (_selection) {
    return !(_selection.occurrence === selection.occurrence && _selection.text === selection.text);
  });
  selections = optimizeSelections(string, selections);
  return selections;
};
/**
 * @description - Adds a selection if found in the array of selections
 * @param {Object} selection - the selection to remove
 * @param {Array}  selections - array of selection objects [Obj,...]
 * @param {string} string - the text selections are found in
 * @returns {Array} - array of selection objects
 */


exports.removeSelectionFromSelections = removeSelectionFromSelections;

var addSelectionToSelections = function addSelectionToSelections(selection, selections, string) {
  selections = Array.from(selections);
  selections.push(selection);
  selections = optimizeSelections(string, selections);
  return selections;
};
/**
 * Splice string into array of substrings, flagging what is selected
 * @param {String} string - text used to get the ranges of
 * @param {array} selections - array of selections [obj,...]
 * @returns {array} - array of objects
 */


exports.addSelectionToSelections = addSelectionToSelections;

var selectionArray = function selectionArray(string, selections) {
  var selectionArray = [];
  var ranges = selectionsToRanges(string, selections);
  selectionArray = spliceStringOnRanges(string, ranges);
  return selectionArray;
};
/**
 * @description Function that normalizes a string including whitespace
 * @param {String} string - the string to normalize
 * @preturns {String} - The returned normalized string
 */


exports.selectionArray = selectionArray;

var normalizeString = function normalizeString(string) {
  string = string.replace(/\s+/g, ' ');
  return string;
};

exports.normalizeString = normalizeString;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9WZXJzZUNoZWNrL2hlbHBlcnMvc2VsZWN0aW9uSGVscGVycy5qcyJdLCJuYW1lcyI6WyJzcGxpY2VTdHJpbmdPblJhbmdlcyIsInN0cmluZyIsInJhbmdlcyIsInNlbGVjdGlvbkFycmF5IiwicmVtYWluaW5nU3RyaW5nIiwicmFuZ2VTaGlmdCIsImZvckVhY2giLCJyYW5nZSIsImZpcnN0Q2hhcmFjdGVyUG9zaXRpb24iLCJiZWZvcmVTZWxlY3Rpb24iLCJzbGljZSIsInB1c2giLCJ0ZXh0Iiwic2VsZWN0ZWQiLCJzaGlmdGVkUmFuZ2VTdGFydCIsInNoaWZ0ZWRSYW5nZUVuZCIsInNlbGVjdGlvbiIsInN0cmluZ0JlZm9yZVJhbmdlIiwib2NjdXJyZW5jZSIsInN0cmluZ0hlbHBlcnMiLCJvY2N1cnJlbmNlc0luU3RyaW5nIiwib2NjdXJyZW5jZXMiLCJzZWxlY3Rpb25PYmplY3QiLCJsYXN0Q2hhcmFjdGVyUG9zaXRpb24iLCJsZW5ndGgiLCJzZWxlY3Rpb25zVG9SYW5nZXMiLCJzZWxlY3Rpb25zIiwiaW5jbHVkZXMiLCJzcGxpdEFycmF5Iiwic3BsaXQiLCJqb2luIiwic3RhcnQiLCJlbmQiLCJzZWxlY3Rpb25zVG9TdHJpbmdTcGxpY2VzIiwic3BsaWNlZFN0cmluZ0FycmF5Iiwib3B0aW1pemVTZWxlY3Rpb25zIiwib3B0aW1pemVSYW5nZXMiLCJvcHRpbWl6ZWRSYW5nZXMiLCJfIiwic29ydEJ5IiwidW5pcSIsInJ1bm5pbmdSYW5nZSIsImN1cnJlbnRSYW5nZSIsImluZGV4IiwiY3VycmVudFN0YXJ0IiwiY3VycmVudEVuZCIsInJ1bm5pbmdTdGFydCIsInJ1bm5pbmdFbmQiLCJyYW5nZXNUb1NlbGVjdGlvbnMiLCJzdWJTdHJpbmciLCJzdWJzdHIiLCJiZWZvcmVUZXh0IiwiYmVmb3JlTWF0Y2hlcyIsInVwZGF0ZVRyaW1tZWRUZXh0T2NjdXJlbmNlIiwidHJpbW1lZFRleHQiLCJvcmlnaW5hbFJhbmdlcyIsIm9mZnNldCIsImluZGV4T2YiLCJvcmlnaW5hbFJhbmdlIiwibmV3U3RhcnRQb3NpdGlvbiIsIm1heE9jY3VycmVuY2VzIiwicmVhY2hlZEVuZCIsIm5ld1NlbGVjdGlvbiIsIm9wdGltaXplZFNlbGVjdGlvbnMiLCJ1bmljb2RlVHJpbSIsIm1hdGNoIiwicmVnZXgiLCJleGVjIiwiYXRTdGFydCIsIndoaXRlU3BhY2VMZW4iLCJqb2luQ29udGlndW91c1JhbmdlcyIsIm91dHB1dFJhbmdlcyIsImkiLCJsIiwibGFzdFBvcyIsImxhc3RSYW5nZSIsImdhcFN0YXJ0IiwiY2hhcmFjdGVyc0JldHdlZW4iLCJpbkJldHdlZW4iLCJmaWx0ZXIiLCJzZWxlY3RlZFRleHQiLCJ3aGl0ZVNwYWNlU2VsZWN0ZWQiLCJyZW1vdmVTZWxlY3Rpb25Gcm9tU2VsZWN0aW9ucyIsIkFycmF5IiwiZnJvbSIsIl9zZWxlY3Rpb24iLCJhZGRTZWxlY3Rpb25Ub1NlbGVjdGlvbnMiLCJub3JtYWxpemVTdHJpbmciLCJyZXBsYWNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFDQTs7QUFFQTs7Ozs7O0FBRUE7Ozs7O0FBS08sSUFBTUEsb0JBQW9CLEdBQUcsU0FBdkJBLG9CQUF1QixDQUFDQyxNQUFELEVBQVNDLE1BQVQsRUFBb0I7QUFDdEQsTUFBSUMsY0FBYyxHQUFHLEVBQXJCLENBRHNELENBQzdCOztBQUN6QixNQUFJQyxlQUFlLEdBQUdILE1BQXRCLENBRnNELENBR3REOztBQUNBLE1BQUlJLFVBQVUsR0FBRyxDQUFqQixDQUpzRCxDQUlsQzs7QUFFcEJILEVBQUFBLE1BQU0sQ0FBQ0ksT0FBUCxDQUFlLFVBQVVDLEtBQVYsRUFBaUI7QUFDOUIsUUFBTUMsc0JBQXNCLEdBQUdELEtBQUssQ0FBQyxDQUFELENBQUwsR0FBU0YsVUFBeEMsQ0FEOEIsQ0FDc0I7O0FBQ3BELFFBQU1JLGVBQWUsR0FBR0wsZUFBZSxDQUFDTSxLQUFoQixDQUFzQixDQUF0QixFQUF5QkYsc0JBQXpCLENBQXhCLENBRjhCLENBRTRDOztBQUUxRSxRQUFJQyxlQUFKLEVBQXFCO0FBQUU7QUFDckJOLE1BQUFBLGNBQWMsQ0FBQ1EsSUFBZixDQUFvQjtBQUFFQyxRQUFBQSxJQUFJLEVBQUVILGVBQVI7QUFBeUJJLFFBQUFBLFFBQVEsRUFBRTtBQUFuQyxPQUFwQjtBQUNEOztBQUVELFFBQU1DLGlCQUFpQixHQUFHUCxLQUFLLENBQUMsQ0FBRCxDQUFMLEdBQVNGLFVBQW5DLENBUjhCLENBUWlCOztBQUMvQyxRQUFNVSxlQUFlLEdBQUdSLEtBQUssQ0FBQyxDQUFELENBQUwsR0FBUyxDQUFULEdBQVdGLFVBQW5DLENBVDhCLENBU2lCOztBQUMvQyxRQUFNVyxTQUFTLEdBQUdaLGVBQWUsQ0FBQ00sS0FBaEIsQ0FBc0JJLGlCQUF0QixFQUF5Q0MsZUFBekMsQ0FBbEIsQ0FWOEIsQ0FVK0M7O0FBQzdFLFFBQU1FLGlCQUFpQixHQUFHaEIsTUFBTSxDQUFDUyxLQUFQLENBQWEsQ0FBYixFQUFlSCxLQUFLLENBQUMsQ0FBRCxDQUFwQixDQUExQjtBQUNBLFFBQU1XLFVBQVUsR0FBR0MsYUFBYSxDQUFDQyxtQkFBZCxDQUFrQ0gsaUJBQWxDLEVBQXFERCxTQUFyRCxJQUFrRSxDQUFyRjtBQUNBLFFBQU1LLFdBQVcsR0FBR0YsYUFBYSxDQUFDQyxtQkFBZCxDQUFrQ25CLE1BQWxDLEVBQTBDZSxTQUExQyxDQUFwQjtBQUNBLFFBQU1NLGVBQWUsR0FBRztBQUN0QlYsTUFBQUEsSUFBSSxFQUFFSSxTQURnQjtBQUV0QkgsTUFBQUEsUUFBUSxFQUFFLElBRlk7QUFHdEJLLE1BQUFBLFVBQVUsRUFBRUEsVUFIVTtBQUl0QkcsTUFBQUEsV0FBVyxFQUFFQTtBQUpTLEtBQXhCO0FBTUFsQixJQUFBQSxjQUFjLENBQUNRLElBQWYsQ0FBb0JXLGVBQXBCLEVBcEI4QixDQW9CUTtBQUN0Qzs7QUFDQSxRQUFNQyxxQkFBcUIsR0FBR2hCLEtBQUssQ0FBQyxDQUFELENBQUwsR0FBU0YsVUFBVCxHQUFvQixDQUFsRCxDQXRCOEIsQ0FzQnVCOztBQUNyREQsSUFBQUEsZUFBZSxHQUFHQSxlQUFlLENBQUNNLEtBQWhCLENBQXNCYSxxQkFBdEIsQ0FBbEIsQ0F2QjhCLENBdUJrQztBQUNoRTs7QUFDQWxCLElBQUFBLFVBQVUsSUFBSUksZUFBZSxDQUFDZSxNQUE5QixDQXpCOEIsQ0F5QlE7O0FBQ3RDbkIsSUFBQUEsVUFBVSxJQUFJVyxTQUFTLENBQUNRLE1BQXhCLENBMUI4QixDQTBCRTtBQUNqQyxHQTNCRDs7QUE2QkEsTUFBSXBCLGVBQUosRUFBcUI7QUFBRTtBQUNyQkQsSUFBQUEsY0FBYyxDQUFDUSxJQUFmLENBQW9CO0FBQUVDLE1BQUFBLElBQUksRUFBRVIsZUFBUjtBQUF5QlMsTUFBQUEsUUFBUSxFQUFFO0FBQW5DLEtBQXBCO0FBQ0Q7O0FBQ0QsU0FBT1YsY0FBUDtBQUNELENBdkNNO0FBd0NQOzs7Ozs7Ozs7O0FBTU8sSUFBTXNCLGtCQUFrQixHQUFHLFNBQXJCQSxrQkFBcUIsQ0FBQ3hCLE1BQUQsRUFBU3lCLFVBQVQsRUFBd0I7QUFDeEQsTUFBSXhCLE1BQU0sR0FBRyxFQUFiLENBRHdELENBQ3ZDOztBQUVqQndCLEVBQUFBLFVBQVUsQ0FBQ3BCLE9BQVgsQ0FBb0IsVUFBQVUsU0FBUyxFQUFJO0FBQy9CLFFBQUlmLE1BQU0sSUFBSUEsTUFBTSxDQUFDMEIsUUFBUCxDQUFnQlgsU0FBUyxDQUFDSixJQUExQixDQUFkLEVBQStDO0FBQUU7QUFDL0MsVUFBTWdCLFVBQVUsR0FBRzNCLE1BQU0sQ0FBQzRCLEtBQVAsQ0FBYWIsU0FBUyxDQUFDSixJQUF2QixDQUFuQixDQUQ2QyxDQUNJOztBQUNqRCxVQUFNSCxlQUFlLEdBQUdtQixVQUFVLENBQUNsQixLQUFYLENBQWlCLENBQWpCLEVBQW1CTSxTQUFTLENBQUNFLFVBQTdCLEVBQXlDWSxJQUF6QyxDQUE4Q2QsU0FBUyxDQUFDSixJQUF4RCxDQUF4QixDQUY2QyxDQUUwQzs7QUFDdkYsVUFBTW1CLEtBQUssR0FBR3RCLGVBQWUsQ0FBQ2UsTUFBOUIsQ0FINkMsQ0FHUDs7QUFDdEMsVUFBTVEsR0FBRyxHQUFHRCxLQUFLLEdBQUdmLFNBQVMsQ0FBQ0osSUFBVixDQUFlWSxNQUF2QixHQUFnQyxDQUE1QyxDQUo2QyxDQUlFOztBQUMvQyxVQUFNakIsS0FBSyxHQUFHLENBQUN3QixLQUFELEVBQU9DLEdBQVAsQ0FBZCxDQUw2QyxDQUtsQjs7QUFDM0I5QixNQUFBQSxNQUFNLENBQUNTLElBQVAsQ0FBWUosS0FBWixFQU42QyxDQU16QjtBQUNyQjtBQUNGLEdBVEQ7QUFVQSxTQUFPTCxNQUFQO0FBQ0QsQ0FkTTtBQWdCUDs7Ozs7Ozs7OztBQU1PLElBQU0rQix5QkFBeUIsR0FBRyxTQUE1QkEseUJBQTRCLENBQUNoQyxNQUFELEVBQVN5QixVQUFULEVBQXdCO0FBQy9ELE1BQUlRLGtCQUFrQixHQUFHLEVBQXpCLENBRCtELENBQ2xDOztBQUM3QlIsRUFBQUEsVUFBVSxHQUFHUyxrQkFBa0IsQ0FBQ2xDLE1BQUQsRUFBU3lCLFVBQVQsQ0FBL0IsQ0FGK0QsQ0FFVjs7QUFDckQsTUFBTXhCLE1BQU0sR0FBR3VCLGtCQUFrQixDQUFDeEIsTUFBRCxFQUFTeUIsVUFBVCxDQUFqQyxDQUgrRCxDQUdSOztBQUN2RFEsRUFBQUEsa0JBQWtCLEdBQUdsQyxvQkFBb0IsQ0FBQ0MsTUFBRCxFQUFTQyxNQUFULENBQXpDLENBSitELENBSUo7O0FBQzNELFNBQU9nQyxrQkFBUCxDQUwrRCxDQUtwQztBQUM1QixDQU5NO0FBUVA7Ozs7Ozs7OztBQUtPLElBQU1FLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUIsQ0FBQ2xDLE1BQUQsRUFBWTtBQUN4QyxNQUFJbUMsZUFBZSxHQUFHLEVBQXRCLENBRHdDLENBQ2Q7O0FBRTFCLE1BQUluQyxNQUFNLENBQUNzQixNQUFQLEtBQWtCLENBQXRCLEVBQXlCO0FBQ3ZCLFdBQU90QixNQUFQO0FBQ0QsR0FMdUMsQ0FLdEM7OztBQUNGQSxFQUFBQSxNQUFNLEdBQUdvQyxtQkFBRUMsTUFBRixDQUFTckMsTUFBVCxFQUFpQixVQUFVSyxLQUFWLEVBQWlCO0FBQ3pDLFdBQU9BLEtBQUssQ0FBQyxDQUFELENBQVo7QUFDRCxHQUZRLENBQVQsQ0FOd0MsQ0FRcEM7O0FBQ0pMLEVBQUFBLE1BQU0sR0FBR29DLG1CQUFFQyxNQUFGLENBQVNyQyxNQUFULEVBQWlCLFVBQVVLLEtBQVYsRUFBaUI7QUFDekMsV0FBT0EsS0FBSyxDQUFDLENBQUQsQ0FBWjtBQUNELEdBRlEsQ0FBVCxDQVR3QyxDQVdwQzs7QUFDSkwsRUFBQUEsTUFBTSxHQUFHb0MsbUJBQUVFLElBQUYsQ0FBT3RDLE1BQVAsQ0FBVCxDQVp3QyxDQVlmO0FBQ3pCOztBQUNBLE1BQUl1QyxZQUFZLEdBQUcsRUFBbkIsQ0Fkd0MsQ0FjakI7O0FBRXZCdkMsRUFBQUEsTUFBTSxDQUFDSSxPQUFQLENBQWdCLFVBQUNvQyxZQUFELEVBQWVDLEtBQWYsRUFBeUI7QUFDdkMsUUFBTUMsWUFBWSxHQUFHRixZQUFZLENBQUMsQ0FBRCxDQUFqQztBQUFBLFFBQXNDRyxVQUFVLEdBQUdILFlBQVksQ0FBQyxDQUFELENBQS9EO0FBQ0EsUUFBSUksWUFBWSxHQUFHTCxZQUFZLENBQUMsQ0FBRCxDQUEvQjtBQUFBLFFBQW9DTSxVQUFVLEdBQUdOLFlBQVksQ0FBQyxDQUFELENBQTdEOztBQUVBLFFBQUlHLFlBQVksSUFBSUUsWUFBaEIsSUFBZ0NGLFlBQVksSUFBSUcsVUFBVSxHQUFDLENBQS9ELEVBQWtFO0FBQUU7QUFDbEUsVUFBSUYsVUFBVSxJQUFJQyxZQUFkLElBQThCRCxVQUFVLElBQUlFLFVBQWhELEVBQTRELENBQUU7QUFDNUQ7QUFDRCxPQUZELE1BRU87QUFBRTtBQUNQTixRQUFBQSxZQUFZLENBQUMsQ0FBRCxDQUFaLEdBQWtCTSxVQUFVLEdBQUdGLFVBQS9CLENBREssQ0FDc0M7QUFDNUM7QUFDRixLQU5ELE1BTU87QUFBRTtBQUNQLFVBQUlKLFlBQVksQ0FBQ2pCLE1BQWIsS0FBd0IsQ0FBNUIsRUFBK0I7QUFDN0JhLFFBQUFBLGVBQWUsQ0FBQzFCLElBQWhCLENBQXFCOEIsWUFBckI7QUFDRCxPQUhJLENBR0g7OztBQUNGQSxNQUFBQSxZQUFZLEdBQUdDLFlBQWYsQ0FKSyxDQUl3QjtBQUM5Qjs7QUFFRCxRQUFJeEMsTUFBTSxDQUFDc0IsTUFBUCxLQUFrQm1CLEtBQUssR0FBRyxDQUExQixJQUErQkksVUFBVSxHQUFHRCxZQUFiLElBQTZCLENBQWhFLEVBQW1FO0FBQUU7QUFDbkVULE1BQUFBLGVBQWUsQ0FBQzFCLElBQWhCLENBQXFCOEIsWUFBckIsRUFEaUUsQ0FDN0I7QUFDckM7QUFDRixHQXBCRDtBQXFCQSxTQUFPSixlQUFQO0FBQ0QsQ0F0Q007QUF3Q1A7Ozs7Ozs7Ozs7QUFNTyxJQUFNVyxrQkFBa0IsR0FBRyxTQUFyQkEsa0JBQXFCLENBQUMvQyxNQUFELEVBQVNDLE1BQVQsRUFBb0I7QUFDcEQsTUFBSXdCLFVBQVUsR0FBRyxFQUFqQjtBQUVBeEIsRUFBQUEsTUFBTSxDQUFDSSxPQUFQLENBQWdCLFVBQUFDLEtBQUssRUFBSTtBQUN2QixRQUFNd0IsS0FBSyxHQUFHeEIsS0FBSyxDQUFDLENBQUQsQ0FBbkI7QUFBQSxRQUF3QnlCLEdBQUcsR0FBR3pCLEtBQUssQ0FBQyxDQUFELENBQW5DLENBRHVCLENBQ2lCOztBQUN4QyxRQUFNaUIsTUFBTSxHQUFHUSxHQUFHLEdBQUdELEtBQU4sR0FBYyxDQUE3QixDQUZ1QixDQUVTOztBQUNoQyxRQUFNa0IsU0FBUyxHQUFHaEQsTUFBTSxDQUFDaUQsTUFBUCxDQUFjbkIsS0FBZCxFQUFxQlAsTUFBckIsQ0FBbEIsQ0FIdUIsQ0FHeUI7O0FBQ2hELFFBQU0yQixVQUFVLEdBQUdsRCxNQUFNLENBQUNpRCxNQUFQLENBQWMsQ0FBZCxFQUFpQm5CLEtBQWpCLENBQW5CLENBSnVCLENBSXFCOztBQUM1QyxRQUFNcUIsYUFBYSxHQUFHakMsYUFBYSxDQUFDQyxtQkFBZCxDQUFrQytCLFVBQWxDLEVBQThDRixTQUE5QyxDQUF0QixDQUx1QixDQUt5RDs7QUFDaEYsUUFBTS9CLFVBQVUsR0FBR2tDLGFBQWEsR0FBRyxDQUFuQyxDQU51QixDQU1lOztBQUN0QyxRQUFNL0IsV0FBVyxHQUFHRixhQUFhLENBQUNDLG1CQUFkLENBQWtDbkIsTUFBbEMsRUFBMENnRCxTQUExQyxDQUFwQixDQVB1QixDQU9tRDs7QUFDMUUsUUFBTWpDLFNBQVMsR0FBRztBQUNoQkosTUFBQUEsSUFBSSxFQUFFcUMsU0FEVTtBQUVoQi9CLE1BQUFBLFVBQVUsRUFBRUEsVUFGSTtBQUdoQkcsTUFBQUEsV0FBVyxFQUFFQTtBQUhHLEtBQWxCOztBQU1BLFFBQUlBLFdBQVcsR0FBRyxDQUFsQixFQUFxQjtBQUFFO0FBQ3JCSyxNQUFBQSxVQUFVLENBQUNmLElBQVgsQ0FBZ0JLLFNBQWhCO0FBQ0Q7QUFDRixHQWpCRDtBQWtCQSxTQUFPVSxVQUFQO0FBQ0QsQ0F0Qk07QUF3QlA7Ozs7Ozs7Ozs7QUFNQSxTQUFTMkIsMEJBQVQsQ0FBb0NwRCxNQUFwQyxFQUE0Q2UsU0FBNUMsRUFBdURzQyxXQUF2RCxFQUFvRTtBQUNsRSxNQUFJQyxjQUFjLEdBQUc5QixrQkFBa0IsQ0FBQ3hCLE1BQUQsRUFBUyxDQUFDZSxTQUFELENBQVQsQ0FBdkM7O0FBRUEsTUFBSXVDLGNBQUosRUFBb0I7QUFDbEIsUUFBTUMsTUFBTSxHQUFHeEMsU0FBUyxDQUFDSixJQUFWLENBQWU2QyxPQUFmLENBQXVCSCxXQUF2QixDQUFmLENBRGtCLENBQ2tDOztBQUNwRCxRQUFNSSxhQUFhLEdBQUdILGNBQWMsQ0FBQyxDQUFELENBQXBDO0FBQ0EsUUFBTUksZ0JBQWdCLEdBQUdELGFBQWEsQ0FBQyxDQUFELENBQWIsR0FBbUJGLE1BQTVDO0FBQ0EsUUFBSXRDLFVBQVUsR0FBR0YsU0FBUyxDQUFDRSxVQUEzQjtBQUNBLFFBQU0wQyxjQUFjLEdBQUd6QyxhQUFhLENBQUNDLG1CQUFkLENBQWtDbkIsTUFBbEMsRUFBMENxRCxXQUExQyxJQUF5RCxDQUFoRixDQUxrQixDQUtpRTs7QUFDbkYsUUFBSXBELE1BQU0sR0FBRyxFQUFiO0FBQ0EsUUFBSTJELFVBQVUsR0FBRyxLQUFqQjs7QUFFQSxPQUFHO0FBQUU7QUFDSCxVQUFNQyxZQUFZLEdBQUcsbUJBQ2hCOUMsU0FEZ0I7QUFFbkJFLFFBQUFBLFVBQVUsRUFBVkEsVUFGbUI7QUFHbkJOLFFBQUFBLElBQUksRUFBRTBDO0FBSGEsU0FBckI7QUFLQXBELE1BQUFBLE1BQU0sR0FBR3VCLGtCQUFrQixDQUFDeEIsTUFBRCxFQUFTNkQsWUFBVCxDQUEzQjs7QUFFQSxVQUFJNUQsTUFBSixFQUFZO0FBQ1YsWUFBTUssS0FBSyxHQUFHTCxNQUFNLENBQUMsQ0FBRCxDQUFwQjs7QUFFQSxZQUFJSyxLQUFLLENBQUMsQ0FBRCxDQUFMLEtBQWFvRCxnQkFBakIsRUFBbUM7QUFBRTtBQUNuQyxjQUFNSSxtQkFBbUIsR0FBR2Ysa0JBQWtCLENBQUMvQyxNQUFELEVBQVNDLE1BQVQsQ0FBOUMsQ0FEaUMsQ0FDK0I7O0FBRWhFLGNBQUk2RCxtQkFBSixFQUF5QjtBQUFFO0FBQ3pCL0MsWUFBQUEsU0FBUyxDQUFDRSxVQUFWLEdBQXVCNkMsbUJBQW1CLENBQUMsQ0FBRCxDQUFuQixDQUF1QjdDLFVBQTlDO0FBQ0FGLFlBQUFBLFNBQVMsQ0FBQ0ssV0FBVixHQUF3QjBDLG1CQUFtQixDQUFDLENBQUQsQ0FBbkIsQ0FBdUIxQyxXQUEvQztBQUNEOztBQUNEbkIsVUFBQUEsTUFBTSxHQUFHLElBQVQsQ0FQaUMsQ0FPbEI7QUFDaEIsU0FSRCxNQVFPO0FBQ0xnQixVQUFBQSxVQUFVO0FBQ1YyQyxVQUFBQSxVQUFVLEdBQUkzQyxVQUFVLElBQUkwQyxjQUE1QixDQUZLLENBRXdDO0FBQzlDO0FBQ0Y7QUFDRixLQXhCRCxRQXdCUyxDQUFDQyxVQUFELElBQWUzRCxNQXhCeEI7QUF5QkQ7QUFDRjtBQUVEOzs7Ozs7O0FBS08sU0FBUzhELFdBQVQsQ0FBcUJwRCxJQUFyQixFQUEyQjtBQUNoQyxNQUFJcUQsS0FBSjs7QUFFQSxLQUFHO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsUUFBTUMsS0FBSyxHQUFHLHlCQUFRLDBKQUFSLENBQWQ7QUFDQUQsSUFBQUEsS0FBSyxHQUFHQyxLQUFLLENBQUNDLElBQU4sQ0FBV3ZELElBQVgsQ0FBUjs7QUFFQSxRQUFJcUQsS0FBSixFQUFXO0FBQ1QsVUFBTUcsT0FBTyxHQUFHSCxLQUFLLENBQUN0QixLQUFOLEtBQWdCLENBQWhDOztBQUVBLFVBQUl5QixPQUFKLEVBQWE7QUFDWCxZQUFNQyxhQUFhLEdBQUdKLEtBQUssQ0FBQyxDQUFELENBQUwsQ0FBU3pDLE1BQS9CO0FBQ0FaLFFBQUFBLElBQUksR0FBR0EsSUFBSSxDQUFDc0MsTUFBTCxDQUFZbUIsYUFBWixDQUFQO0FBQ0QsT0FIRCxNQUdPO0FBQ0x6RCxRQUFBQSxJQUFJLEdBQUdBLElBQUksQ0FBQ3NDLE1BQUwsQ0FBWSxDQUFaLEVBQWVlLEtBQUssQ0FBQ3RCLEtBQXJCLENBQVA7QUFDRDtBQUNGO0FBQ0YsR0FqQkQsUUFpQlNzQixLQWpCVDs7QUFtQkEsU0FBT3JELElBQVA7QUFDRDtBQUVEOzs7Ozs7OztBQU1PLFNBQVMwRCxvQkFBVCxDQUE4QjFELElBQTlCLEVBQW9DVixNQUFwQyxFQUE0QztBQUNqRCxNQUFJcUUsWUFBWSxHQUFHckUsTUFBbkI7O0FBRUEsTUFBSUEsTUFBSixFQUFZO0FBQ1ZxRSxJQUFBQSxZQUFZLEdBQUcsRUFBZjs7QUFFQSxTQUFLLElBQUlDLENBQUMsR0FBRyxDQUFSLEVBQVdDLENBQUMsR0FBR3ZFLE1BQU0sQ0FBQ3NCLE1BQTNCLEVBQW1DZ0QsQ0FBQyxHQUFHQyxDQUF2QyxFQUEwQ0QsQ0FBQyxFQUEzQyxFQUErQztBQUM3QyxVQUFJakUsS0FBSyxHQUFHTCxNQUFNLENBQUNzRSxDQUFELENBQWxCOztBQUVBLFVBQUlBLENBQUMsSUFBSSxDQUFULEVBQVk7QUFBRTtBQUNaLFlBQU1FLE9BQU8sR0FBR0gsWUFBWSxDQUFDL0MsTUFBYixHQUFzQixDQUF0QztBQUNBLFlBQU1tRCxTQUFTLEdBQUdKLFlBQVksQ0FBQ0csT0FBRCxDQUE5QjtBQUNBLFlBQU1FLFFBQVEsR0FBR0QsU0FBUyxDQUFDLENBQUQsQ0FBVCxHQUFlLENBQWhDO0FBQ0EsWUFBTUUsaUJBQWlCLEdBQUd0RSxLQUFLLENBQUMsQ0FBRCxDQUFMLEdBQVdxRSxRQUFyQztBQUNBLFlBQUlFLFNBQVMsR0FBR2xFLElBQUksQ0FBQ3NDLE1BQUwsQ0FBWTBCLFFBQVosRUFBc0JDLGlCQUF0QixDQUFoQjtBQUNBQyxRQUFBQSxTQUFTLEdBQUdkLFdBQVcsQ0FBQ2MsU0FBRCxDQUF2Qjs7QUFFQSxZQUFJLENBQUNBLFNBQVMsQ0FBQ3RELE1BQWYsRUFBdUI7QUFBRTtBQUN2Qm1ELFVBQUFBLFNBQVMsQ0FBQyxDQUFELENBQVQsR0FBZXBFLEtBQUssQ0FBQyxDQUFELENBQXBCLENBRHFCLENBQ0k7O0FBQ3pCQSxVQUFBQSxLQUFLLEdBQUcsSUFBUjtBQUNEO0FBQ0Y7O0FBRUQsVUFBSUEsS0FBSixFQUFXO0FBQ1RnRSxRQUFBQSxZQUFZLENBQUM1RCxJQUFiLENBQWtCSixLQUFsQjtBQUNEO0FBQ0Y7QUFDRjs7QUFFRCxTQUFPZ0UsWUFBUDtBQUNEO0FBRUQ7Ozs7Ozs7O0FBTU8sSUFBTXBDLGtCQUFrQixHQUFHLFNBQXJCQSxrQkFBcUIsQ0FBQ2xDLE1BQUQsRUFBU3lCLFVBQVQsRUFBd0I7QUFDeEQsTUFBSXFDLG1CQUFKLENBRHdELENBQy9CO0FBRXpCOztBQUNBckMsRUFBQUEsVUFBVSxHQUFHQSxVQUFVLENBQUNxRCxNQUFYLENBQW1CLFVBQUEvRCxTQUFTLEVBQUk7QUFDM0MsUUFBTWdFLFlBQVksR0FBR2hFLFNBQVMsQ0FBQ0osSUFBL0I7QUFDQSxRQUFNMEMsV0FBVyxHQUFHVSxXQUFXLENBQUNnQixZQUFELENBQS9CO0FBQ0EsUUFBTUMsa0JBQWtCLEdBQUcsQ0FBQzNCLFdBQVcsQ0FBQzlCLE1BQXhDOztBQUVBLFFBQUksQ0FBQ3lELGtCQUFELElBQXdCM0IsV0FBVyxLQUFLMEIsWUFBNUMsRUFBMkQ7QUFBRTtBQUMzRDNCLE1BQUFBLDBCQUEwQixDQUFDcEQsTUFBRCxFQUFTZSxTQUFULEVBQW9Cc0MsV0FBcEIsQ0FBMUI7QUFDQXRDLE1BQUFBLFNBQVMsQ0FBQ0osSUFBVixHQUFpQjBDLFdBQWpCO0FBQ0Q7O0FBQ0QsV0FBTyxDQUFDMkIsa0JBQVI7QUFDRCxHQVZZLENBQWI7QUFZQSxNQUFJL0UsTUFBTSxHQUFHdUIsa0JBQWtCLENBQUN4QixNQUFELEVBQVN5QixVQUFULENBQS9CLENBaEJ3RCxDQWdCSDs7QUFDckR4QixFQUFBQSxNQUFNLEdBQUdrQyxjQUFjLENBQUNsQyxNQUFELENBQXZCLENBakJ3RCxDQWlCdkI7O0FBQ2pDQSxFQUFBQSxNQUFNLEdBQUdvRSxvQkFBb0IsQ0FBQ3JFLE1BQUQsRUFBU0MsTUFBVCxDQUE3QjtBQUNBNkQsRUFBQUEsbUJBQW1CLEdBQUdmLGtCQUFrQixDQUFDL0MsTUFBRCxFQUFTQyxNQUFULENBQXhDLENBbkJ3RCxDQW1CRTs7QUFDMUQsU0FBTzZELG1CQUFQO0FBQ0QsQ0FyQk07QUF1QlA7Ozs7Ozs7Ozs7O0FBT08sSUFBTW1CLDZCQUE2QixHQUFHLFNBQWhDQSw2QkFBZ0MsQ0FBQ2xFLFNBQUQsRUFBWVUsVUFBWixFQUF3QnpCLE1BQXhCLEVBQW1DO0FBQzlFeUIsRUFBQUEsVUFBVSxHQUFHeUQsS0FBSyxDQUFDQyxJQUFOLENBQVcxRCxVQUFYLENBQWI7QUFDQUEsRUFBQUEsVUFBVSxHQUFHQSxVQUFVLENBQUNxRCxNQUFYLENBQWtCLFVBQUFNLFVBQVU7QUFBQSxXQUN2QyxFQUFFQSxVQUFVLENBQUNuRSxVQUFYLEtBQTBCRixTQUFTLENBQUNFLFVBQXBDLElBQWtEbUUsVUFBVSxDQUFDekUsSUFBWCxLQUFvQkksU0FBUyxDQUFDSixJQUFsRixDQUR1QztBQUFBLEdBQTVCLENBQWI7QUFHQWMsRUFBQUEsVUFBVSxHQUFHUyxrQkFBa0IsQ0FBQ2xDLE1BQUQsRUFBU3lCLFVBQVQsQ0FBL0I7QUFDQSxTQUFPQSxVQUFQO0FBQ0QsQ0FQTTtBQVNQOzs7Ozs7Ozs7OztBQU9PLElBQU00RCx3QkFBd0IsR0FBRyxTQUEzQkEsd0JBQTJCLENBQUN0RSxTQUFELEVBQVlVLFVBQVosRUFBd0J6QixNQUF4QixFQUFtQztBQUN6RXlCLEVBQUFBLFVBQVUsR0FBR3lELEtBQUssQ0FBQ0MsSUFBTixDQUFXMUQsVUFBWCxDQUFiO0FBQ0FBLEVBQUFBLFVBQVUsQ0FBQ2YsSUFBWCxDQUFnQkssU0FBaEI7QUFDQVUsRUFBQUEsVUFBVSxHQUFHUyxrQkFBa0IsQ0FBQ2xDLE1BQUQsRUFBU3lCLFVBQVQsQ0FBL0I7QUFDQSxTQUFPQSxVQUFQO0FBQ0QsQ0FMTTtBQU9QOzs7Ozs7Ozs7O0FBTU8sSUFBTXZCLGNBQWMsR0FBRyx3QkFBQ0YsTUFBRCxFQUFTeUIsVUFBVCxFQUF3QjtBQUNwRCxNQUFJdkIsY0FBYyxHQUFHLEVBQXJCO0FBQ0EsTUFBSUQsTUFBTSxHQUFHdUIsa0JBQWtCLENBQUN4QixNQUFELEVBQVN5QixVQUFULENBQS9CO0FBQ0F2QixFQUFBQSxjQUFjLEdBQUdILG9CQUFvQixDQUFDQyxNQUFELEVBQVNDLE1BQVQsQ0FBckM7QUFDQSxTQUFPQyxjQUFQO0FBQ0QsQ0FMTTtBQU9QOzs7Ozs7Ozs7QUFLTyxJQUFNb0YsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixDQUFDdEYsTUFBRCxFQUFZO0FBQ3pDQSxFQUFBQSxNQUFNLEdBQUdBLE1BQU0sQ0FBQ3VGLE9BQVAsQ0FBZSxNQUFmLEVBQXVCLEdBQXZCLENBQVQ7QUFDQSxTQUFPdkYsTUFBUDtBQUNELENBSE0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeFJlZ0V4cCBmcm9tICd4cmVnZXhwJztcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XG4vLyBoZWxwZXJzXG5pbXBvcnQgKiBhcyBzdHJpbmdIZWxwZXJzIGZyb20gJy4vc3RyaW5nSGVscGVycyc7XG5cbi8qKlxuICogQGRlc2NyaXB0aW9uIC0gU3BsaWNlIHN0cmluZyBpbnRvIGFycmF5IG9mIHJhbmdlcywgZmxhZ2dpbmcgd2hhdCBpcyBzZWxlY3RlZFxuICogQHBhcmFtIHthcnJheX0gcmFuZ2VzIC0gYXJyYXkgb2YgcmFuZ2VzIFtbaW50LGludF0sLi4uXVxuICogQHJldHVybnMge2FycmF5fSAtIGFycmF5IG9mIG9iamVjdHMgW29iaiwuLi5dXG4gKi9cbmV4cG9ydCBjb25zdCBzcGxpY2VTdHJpbmdPblJhbmdlcyA9IChzdHJpbmcsIHJhbmdlcykgPT4ge1xuICB2YXIgc2VsZWN0aW9uQXJyYXkgPSBbXTsgLy8gcmVzcG9uc2VcbiAgdmFyIHJlbWFpbmluZ1N0cmluZyA9IHN0cmluZztcbiAgLy8gc2hpZnQgdGhlIHJhbmdlIHNpbmNlIHRoZSBsb29wIGlzIGRlc3RydWN0aXZlIGJ5IHdvcmtpbmcgb24gdGhlIHJlbWFpbmluZ1N0cmluZyBhbmQgbm90IG9yaWdpbmFsIHN0cmluZ1xuICB2YXIgcmFuZ2VTaGlmdCA9IDA7IC8vIHN0YXJ0IHRoZSByYW5nZSBzaGlmdCBhdCB0aGUgZmlyc3QgY2hhcmFjdGVyXG5cbiAgcmFuZ2VzLmZvckVhY2goZnVuY3Rpb24gKHJhbmdlKSB7XG4gICAgY29uc3QgZmlyc3RDaGFyYWN0ZXJQb3NpdGlvbiA9IHJhbmdlWzBdLXJhbmdlU2hpZnQ7IC8vIG9yaWdpbmFsIHJhbmdlIHN0YXJ0IC0gdGhlIHJhbmdlU2hpZnRcbiAgICBjb25zdCBiZWZvcmVTZWxlY3Rpb24gPSByZW1haW5pbmdTdHJpbmcuc2xpY2UoMCwgZmlyc3RDaGFyYWN0ZXJQb3NpdGlvbik7IC8vIHNhdmUgYWxsIHRoZSB0ZXh0IGJlZm9yZSB0aGUgc2VsZWN0aW9uXG5cbiAgICBpZiAoYmVmb3JlU2VsZWN0aW9uKSB7IC8vIG9ubHkgYWRkIHRvIHRoZSBhcnJheSBpZiBzdHJpbmcgaXNuJ3QgZW1wdHlcbiAgICAgIHNlbGVjdGlvbkFycmF5LnB1c2goeyB0ZXh0OiBiZWZvcmVTZWxlY3Rpb24sIHNlbGVjdGVkOiBmYWxzZSB9KTtcbiAgICB9XG5cbiAgICBjb25zdCBzaGlmdGVkUmFuZ2VTdGFydCA9IHJhbmdlWzBdLXJhbmdlU2hpZnQ7IC8vIHJhbmdlIHN0YXJ0IC0gdGhlIHJhbmdlU2hpZnRcbiAgICBjb25zdCBzaGlmdGVkUmFuZ2VFbmQgPSByYW5nZVsxXSsxLXJhbmdlU2hpZnQ7IC8vIHJhbmdlIGVuZCAtIHJhbmdlU2hpZnQgKyAxIHRvIGluY2x1ZGUgbGFzdCBjaGFyYWN0ZXJcbiAgICBjb25zdCBzZWxlY3Rpb24gPSByZW1haW5pbmdTdHJpbmcuc2xpY2Uoc2hpZnRlZFJhbmdlU3RhcnQsIHNoaWZ0ZWRSYW5nZUVuZCk7IC8vIHNhdmUgdGhlIHRleHQgaW4gdGhlIHNlbGVjdGlvblxuICAgIGNvbnN0IHN0cmluZ0JlZm9yZVJhbmdlID0gc3RyaW5nLnNsaWNlKDAscmFuZ2VbMF0pO1xuICAgIGNvbnN0IG9jY3VycmVuY2UgPSBzdHJpbmdIZWxwZXJzLm9jY3VycmVuY2VzSW5TdHJpbmcoc3RyaW5nQmVmb3JlUmFuZ2UsIHNlbGVjdGlvbikgKyAxO1xuICAgIGNvbnN0IG9jY3VycmVuY2VzID0gc3RyaW5nSGVscGVycy5vY2N1cnJlbmNlc0luU3RyaW5nKHN0cmluZywgc2VsZWN0aW9uKTtcbiAgICBjb25zdCBzZWxlY3Rpb25PYmplY3QgPSB7XG4gICAgICB0ZXh0OiBzZWxlY3Rpb24sXG4gICAgICBzZWxlY3RlZDogdHJ1ZSxcbiAgICAgIG9jY3VycmVuY2U6IG9jY3VycmVuY2UsXG4gICAgICBvY2N1cnJlbmNlczogb2NjdXJyZW5jZXMsXG4gICAgfTtcbiAgICBzZWxlY3Rpb25BcnJheS5wdXNoKHNlbGVjdGlvbk9iamVjdCk7IC8vIGFkZCB0aGUgc2VsZWN0aW9uIHRvIHRoZSByZXNwb25zZSBhcnJheVxuICAgIC8vIG5leHQgaXRlcmF0aW9uIGlzIHVzaW5nIHJlbWFpbmluZyBzdHJpbmdcbiAgICBjb25zdCBsYXN0Q2hhcmFjdGVyUG9zaXRpb24gPSByYW5nZVsxXS1yYW5nZVNoaWZ0KzE7IC8vIG9yaWdpbmFsIHJhbmdlIGVuZCBwb3NpdGlvbiAtIHRoZSByYW5nZVNoaWZ0ICsgMSB0byBub3QgaW5jbHVkZSB0aGUgbGFzdCByYW5nZSBjaGFyYWN0ZXIgaW4gdGhlIHJlbWFpbmluZyBzdHJpbmdcbiAgICByZW1haW5pbmdTdHJpbmcgPSByZW1haW5pbmdTdHJpbmcuc2xpY2UobGFzdENoYXJhY3RlclBvc2l0aW9uKTsgLy8gdXBkYXRlIHRoZSByZW1haW5pbmdTdHJpbmcgdG8gYWZ0ZXIgdGhlIHJhbmdlXG4gICAgLy8gc2hpZnQgdGhlIHJhbmdlIHVwIHRvIGxhc3QgY2hhciBvZiBzdWJzdHJpbmcgKGJlZm9yZStzdWIpXG4gICAgcmFuZ2VTaGlmdCArPSBiZWZvcmVTZWxlY3Rpb24ubGVuZ3RoOyAvLyBhZGp1c3QgdGhlIHJhbmdlU2hpZnQgYnkgdGhlIGxlbmd0aCBwcmlvciB0byB0aGUgc2VsZWN0aW9uXG4gICAgcmFuZ2VTaGlmdCArPSBzZWxlY3Rpb24ubGVuZ3RoOyAvLyBhZGp1c3QgdGhlIHJhbmdlU2hpZnQgYnkgdGhlIGxlbmd0aCBvZiB0aGUgc2VsZWN0aW9uIGl0c2VsZlxuICB9KTtcblxuICBpZiAocmVtYWluaW5nU3RyaW5nKSB7IC8vIG9ubHkgYWRkIHRvIHRoZSBhcnJheSBpZiBzdHJpbmcgaXNuJ3QgZW1wdHlcbiAgICBzZWxlY3Rpb25BcnJheS5wdXNoKHsgdGV4dDogcmVtYWluaW5nU3RyaW5nLCBzZWxlY3RlZDogZmFsc2UgfSk7XG4gIH1cbiAgcmV0dXJuIHNlbGVjdGlvbkFycmF5O1xufTtcbi8qKlxuICogQGRlc2NyaXB0aW9uIC0gVGhpcyBjb252ZXJ0cyByYW5nZXMgdG8gYXJyYXkgb2Ygc2VsZWN0aW9uIG9iamVjdHNcbiAqIEBwYXJhbSB7c3RyaW5nfSBzdHJpbmcgLSB0ZXh0IHVzZWQgdG8gZ2V0IHRoZSByYW5nZXMgb2ZcbiAqIEBwYXJhbSB7YXJyYXl9IHNlbGVjdGlvbnMgLSBhcnJheSBvZiBzZWxlY3Rpb25zIFtvYmosLi4uXVxuICogQHJldHVybnMge2FycmF5fSAtIGFycmF5IG9mIHJhbmdlIG9iamVjdHNcbiAqL1xuZXhwb3J0IGNvbnN0IHNlbGVjdGlvbnNUb1JhbmdlcyA9IChzdHJpbmcsIHNlbGVjdGlvbnMpID0+IHtcbiAgdmFyIHJhbmdlcyA9IFtdOyAvLyByZXNwb25zZVxuXG4gIHNlbGVjdGlvbnMuZm9yRWFjaCggc2VsZWN0aW9uID0+IHtcbiAgICBpZiAoc3RyaW5nICYmIHN0cmluZy5pbmNsdWRlcyhzZWxlY3Rpb24udGV4dCkpIHsgLy8gY29uZGl0aW9ucyB0byBwcmV2ZW50IGVycm9yc1xuICAgICAgY29uc3Qgc3BsaXRBcnJheSA9IHN0cmluZy5zcGxpdChzZWxlY3Rpb24udGV4dCk7IC8vIHNwbGl0IHRoZSBzdHJpbmcgdG8gZ2V0IHRoZSB0ZXh0IGJldHdlZW4gb2NjdXJyZW5jZXNcbiAgICAgIGNvbnN0IGJlZm9yZVNlbGVjdGlvbiA9IHNwbGl0QXJyYXkuc2xpY2UoMCxzZWxlY3Rpb24ub2NjdXJyZW5jZSkuam9pbihzZWxlY3Rpb24udGV4dCk7IC8vIGdldCB0aGUgdGV4dCBiZWZvcmUgdGhlIHNlbGVjdGlvbiB0byBoYW5kbGUgbXVsdGlwbGUgb2NjdXJyZW5jZXNcbiAgICAgIGNvbnN0IHN0YXJ0ID0gYmVmb3JlU2VsZWN0aW9uLmxlbmd0aDsgLy8gdGhlIHN0YXJ0IHBvc2l0aW9uIGhhcHBlbnMgYXQgdGhlIGxlbmd0aCBvZiB0aGUgc3RyaW5nIHRoYXQgY29tZXMgYmVmb3JlIGl0XG4gICAgICBjb25zdCBlbmQgPSBzdGFydCArIHNlbGVjdGlvbi50ZXh0Lmxlbmd0aCAtIDE7IC8vIHRoZSBlbmQgcG9zaXRpb24gaGFwcGVucyBhdCB0aGUgZW5kIG9mIHRoZSBzZWxlY3Rpb24gdGV4dCwgYnV0IGxlbmd0aCBkb2Vzbid0IGFjY291bnQgZm9yIDAgYmFzZWQgcG9zaXRpb24gc3RhcnRcbiAgICAgIGNvbnN0IHJhbmdlID0gW3N0YXJ0LGVuZF07IC8vIG5ldyByYW5nZVxuICAgICAgcmFuZ2VzLnB1c2gocmFuZ2UpOyAvLyBhZGQgdGhlIG5ldyByYW5nZVxuICAgIH1cbiAgfSk7XG4gIHJldHVybiByYW5nZXM7XG59O1xuXG4vKipcbiAqIEBkZXNjcmlwdGlvbiAtIFNwbGljZSBzdHJpbmcgaW50byBhcnJheSBvZiBzdWJzdHJpbmdzLCBmbGFnZ2luZyB3aGF0IGlzIHNlbGVjdGVkXG4gKiBAcGFyYW0ge3N0cmluZ30gc3RyaW5nIC0gdGV4dCB1c2VkIHRvIGdldCB0aGUgcmFuZ2VzIG9mXG4gKiBAcGFyYW0ge2FycmF5fSBzZWxlY3Rpb25zIC0gYXJyYXkgb2Ygc2VsZWN0aW9ucyBbb2JqLC4uLl1cbiAqIEByZXR1cm5zIHthcnJheX0gLSBhcnJheSBvZiBvYmplY3RzXG4gKi9cbmV4cG9ydCBjb25zdCBzZWxlY3Rpb25zVG9TdHJpbmdTcGxpY2VzID0gKHN0cmluZywgc2VsZWN0aW9ucykgPT4ge1xuICB2YXIgc3BsaWNlZFN0cmluZ0FycmF5ID0gW107IC8vIHJlc3BvbnNlXG4gIHNlbGVjdGlvbnMgPSBvcHRpbWl6ZVNlbGVjdGlvbnMoc3RyaW5nLCBzZWxlY3Rpb25zKTsgLy8gb3B0aW1pemUgdGhlbSBiZWZvcmUgY29udmVydGluZ1xuICBjb25zdCByYW5nZXMgPSBzZWxlY3Rpb25zVG9SYW5nZXMoc3RyaW5nLCBzZWxlY3Rpb25zKTsgLy8gY29udmVydCB0aGUgc2VsZWN0aW9ucyB0byByYW5nZXNcbiAgc3BsaWNlZFN0cmluZ0FycmF5ID0gc3BsaWNlU3RyaW5nT25SYW5nZXMoc3RyaW5nLCByYW5nZXMpOyAvLyBzcGxpY2UgdGhlIHN0cmluZyBvbiB0aGUgcmFuZ2VzXG4gIHJldHVybiBzcGxpY2VkU3RyaW5nQXJyYXk7IC8vIHJldHVybiB0aGUgc3BsaWNlZCBzdHJpbmdcbn07XG5cbi8qKlxuICogQGRlc2NyaXB0aW9uIC0gVGhpcyBhYnN0cmFjdHMgY29tcGxleCBoYW5kbGluZyBvZiByYW5nZXMgc3VjaCBhcyBvcmRlciwgZGVkdXBpbmcsIGNvbmNhdGVuYXRpbmcsIG92ZXJsYXBzXG4gKiBAcGFyYW0ge2FycmF5fSAgcmFuZ2VzIC0gYXJyYXkgb2YgcmFuZ2VzIFtbaW50LGludF0sLi4uXVxuICogQHJldHVybnMge2FycmF5fSAtIGFycmF5IG9mIG9wdGltaXplZCByYW5nZXMgW1tpbnQsaW50XSwuLi5dXG4gKi9cbmV4cG9ydCBjb25zdCBvcHRpbWl6ZVJhbmdlcyA9IChyYW5nZXMpID0+IHtcbiAgbGV0IG9wdGltaXplZFJhbmdlcyA9IFtdOyAvLyByZXNwb25zZVxuXG4gIGlmIChyYW5nZXMubGVuZ3RoID09PSAxKSB7XG4gICAgcmV0dXJuIHJhbmdlcztcbiAgfSAvLyBpZiB0aGVyZSdzIG9ubHkgb25lLCByZXR1cm4gaXRcbiAgcmFuZ2VzID0gXy5zb3J0QnkocmFuZ2VzLCBmdW5jdGlvbiAocmFuZ2UpIHtcbiAgICByZXR1cm4gcmFuZ2VbMV07XG4gIH0pOyAvLyBvcmRlciByYW5nZXMgYnkgZW5kIGNoYXIgaW5kZXggYXMgc2Vjb25kYXJ5XG4gIHJhbmdlcyA9IF8uc29ydEJ5KHJhbmdlcywgZnVuY3Rpb24gKHJhbmdlKSB7XG4gICAgcmV0dXJuIHJhbmdlWzBdO1xuICB9KTsgLy8gb3JkZXIgcmFuZ2VzIGJ5IHN0YXJ0IGNoYXIgaW5kZXggYXMgcHJpbWFyeVxuICByYW5nZXMgPSBfLnVuaXEocmFuZ2VzKTsgLy8gcmVtb3ZlIGR1cGxpY2F0ZXNcbiAgLy8gY29tYmluZSBvdmVybGFwcGluZyBhbmQgY29udGlndW91cyByYW5nZXNcbiAgbGV0IHJ1bm5pbmdSYW5nZSA9IFtdOyAvLyB0aGUgcnVubmluZyByYW5nZSB0byBtZXJnZSBvdmVybGFwcGluZyBhbmQgY29udGlndW91cyByYW5nZXNcblxuICByYW5nZXMuZm9yRWFjaCggKGN1cnJlbnRSYW5nZSwgaW5kZXgpID0+IHtcbiAgICBjb25zdCBjdXJyZW50U3RhcnQgPSBjdXJyZW50UmFuZ2VbMF0sIGN1cnJlbnRFbmQgPSBjdXJyZW50UmFuZ2VbMV07XG4gICAgbGV0IHJ1bm5pbmdTdGFydCA9IHJ1bm5pbmdSYW5nZVswXSwgcnVubmluZ0VuZCA9IHJ1bm5pbmdSYW5nZVsxXTtcblxuICAgIGlmIChjdXJyZW50U3RhcnQgPj0gcnVubmluZ1N0YXJ0ICYmIGN1cnJlbnRTdGFydCA8PSBydW5uaW5nRW5kKzEpIHsgLy8gdGhlIHN0YXJ0IG9jY3VycyBpbiB0aGUgcnVubmluZyByYW5nZSBhbmQgKzEgaGFuZGxlcyBjb250aWd1b3VzXG4gICAgICBpZiAoY3VycmVudEVuZCA+PSBydW5uaW5nU3RhcnQgJiYgY3VycmVudEVuZCA8PSBydW5uaW5nRW5kKSB7IC8vIGlmIHRoZSBzdGFydCBvY2N1cnMgaW5zaWRlIHJ1bm5pbmcgcmFuZ2UgdGhlbiBsZXQncyBjaGVjayB0aGUgZW5kXG4gICAgICAgIC8vIGlmIHRoZSBlbmQgb2NjdXJzIGluc2lkZSB0aGUgcnVubmluZyByYW5nZSB0aGVuIGl0J3MgaW5zaWRlIGl0IGFuZCBkb2Vzbid0IG1hdHRlclxuICAgICAgfSBlbHNlIHsgLy8gdGhlIGVuZCBkb2Vzbid0IG9jY3VyIGluc2lkZSB0aGUgcnVubmluZyByYW5nZVxuICAgICAgICBydW5uaW5nUmFuZ2VbMV0gPSBydW5uaW5nRW5kID0gY3VycmVudEVuZDsgLy8gZXh0ZW5kIHJ1bm5pbmcgcmFuZ2VcbiAgICAgIH1cbiAgICB9IGVsc2UgeyAvLyB0aGUgc3RhcnQgZG9lcyBub3Qgb2NjdXIgaW4gdGhlIHJ1bm5pbmcgcmFuZ2VcbiAgICAgIGlmIChydW5uaW5nUmFuZ2UubGVuZ3RoICE9PSAwKSB7XG4gICAgICAgIG9wdGltaXplZFJhbmdlcy5wdXNoKHJ1bm5pbmdSYW5nZSk7XG4gICAgICB9IC8vIHRoZSBydW5uaW5nIHJhbmdlIGlzIGNsb3NlZCBwdXNoIGl0IHRvIG9wdGltaXplZFJhbmdlc1xuICAgICAgcnVubmluZ1JhbmdlID0gY3VycmVudFJhbmdlOyAvLyByZXNldCB0aGUgcnVubmluZyByYW5nZSB0byB0aGlzIG9uZVxuICAgIH1cblxuICAgIGlmIChyYW5nZXMubGVuZ3RoID09PSBpbmRleCArIDEgJiYgcnVubmluZ0VuZCAtIHJ1bm5pbmdTdGFydCA+PSAwKSB7IC8vIHRoaXMgaXMgdGhlIGxhc3Qgb25lIGFuZCBpdCBpc24ndCBibGFua1xuICAgICAgb3B0aW1pemVkUmFuZ2VzLnB1c2gocnVubmluZ1JhbmdlKTsgLy8gcHVzaCB0aGUgbGFzdCBvbmUgdG8gb3B0aW1pemVkUmFuZ2VzXG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIG9wdGltaXplZFJhbmdlcztcbn07XG5cbi8qKlxuICogQGRlc2NyaXB0aW9uIC0gVGhpcyBjb252ZXJ0cyByYW5nZXMgdG8gYXJyYXkgb2Ygc2VsZWN0aW9uIG9iamVjdHNcbiAqIEBwYXJhbSB7c3RyaW5nfSBzdHJpbmcgLSB0ZXh0IHVzZWQgdG8gZ2V0IHRoZSByYW5nZXMgb2ZcbiAqIEBwYXJhbSB7YXJyYXl9IHJhbmdlcyAtIGFycmF5IG9mIHJhbmdlcyBbW2ludCxpbnRdLC4uLl1cbiAqIEByZXR1cm5zIHthcnJheX0gLSBhcnJheSBvZiBzZWxlY3Rpb24gb2JqZWN0c1xuICovXG5leHBvcnQgY29uc3QgcmFuZ2VzVG9TZWxlY3Rpb25zID0gKHN0cmluZywgcmFuZ2VzKSA9PiB7XG4gIGxldCBzZWxlY3Rpb25zID0gW107XG5cbiAgcmFuZ2VzLmZvckVhY2goIHJhbmdlID0+IHtcbiAgICBjb25zdCBzdGFydCA9IHJhbmdlWzBdLCBlbmQgPSByYW5nZVsxXTsgLy8gc2V0IHRoZSBzdGFydCBhbmQgZW5kIHBvaW50XG4gICAgY29uc3QgbGVuZ3RoID0gZW5kIC0gc3RhcnQgKyAxOyAvLyBnZXQgdGhlIGxlbmd0aCBvZiB0aGUgc3ViIHN0cmluZ1xuICAgIGNvbnN0IHN1YlN0cmluZyA9IHN0cmluZy5zdWJzdHIoc3RhcnQsIGxlbmd0aCk7IC8vIGdldCB0ZXh0IG9mIHRoZSBzdWIgc3RyaW5nXG4gICAgY29uc3QgYmVmb3JlVGV4dCA9IHN0cmluZy5zdWJzdHIoMCwgc3RhcnQpOyAvLyBnZXQgdGhlIHN0cmluZyBwcmlvciB0byB0aGUgcmFuZ2VcbiAgICBjb25zdCBiZWZvcmVNYXRjaGVzID0gc3RyaW5nSGVscGVycy5vY2N1cnJlbmNlc0luU3RyaW5nKGJlZm9yZVRleHQsIHN1YlN0cmluZyk7IC8vIGdldCBvY2N1cnJlbmNlcyBwcmlvciB0byByYW5nZVxuICAgIGNvbnN0IG9jY3VycmVuY2UgPSBiZWZvcmVNYXRjaGVzICsgMTsgLy8gZ2V0IG51bWJlciBvZiB0aGlzIG9jY3VycmVuY2VcbiAgICBjb25zdCBvY2N1cnJlbmNlcyA9IHN0cmluZ0hlbHBlcnMub2NjdXJyZW5jZXNJblN0cmluZyhzdHJpbmcsIHN1YlN0cmluZyk7IC8vIGdldCBvY2N1cnJlbmNlcyBpbiBzdHJpbmdcbiAgICBjb25zdCBzZWxlY3Rpb24gPSB7XG4gICAgICB0ZXh0OiBzdWJTdHJpbmcsXG4gICAgICBvY2N1cnJlbmNlOiBvY2N1cnJlbmNlLFxuICAgICAgb2NjdXJyZW5jZXM6IG9jY3VycmVuY2VzLFxuICAgIH07XG5cbiAgICBpZiAob2NjdXJyZW5jZXMgPiAwKSB7IC8vIHRoZXJlIGFyZSBzb21lIGVkZ2UgY2FzZXMgd2hlcmUgZW1wdHkgc3RyaW5ncyBnZXQgdGhyb3VnaCBidXQgZG9uJ3QgaGF2ZSBvY2N1cnJlbmNlc1xuICAgICAgc2VsZWN0aW9ucy5wdXNoKHNlbGVjdGlvbik7XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIHNlbGVjdGlvbnM7XG59O1xuXG4vKipcbiAqIGFmdGVyIHRleHQgaGFzIGJlZW4gdHJpbW1lZCwgbmVlZCB0byB1cGRhdGUgb2NjdXJyZW5jZSBhbmQgb2NjdXJyZW5jZXMgc2luY2UgdGhleSBtYXkgaGF2ZSBjaGFuZ2VkXG4gKiBAcGFyYW0ge1N0cmluZ30gc3RyaW5nIC0gdmVyc2Ugc3RyaW5nXG4gKiBAcGFyYW0ge09iamVjdH0gc2VsZWN0aW9uIC0gY3VycmVudCBzZWxlY3Rpb24gdG8gdXBkYXRlXG4gKiBAcGFyYW0ge1N0cmluZ30gdHJpbW1lZFRleHQgLSBuZXcgc2VsZWN0aW9uLnRleHQgYWZ0ZXIgdHJpbW1pbmdcbiAqL1xuZnVuY3Rpb24gdXBkYXRlVHJpbW1lZFRleHRPY2N1cmVuY2Uoc3RyaW5nLCBzZWxlY3Rpb24sIHRyaW1tZWRUZXh0KSB7XG4gIGxldCBvcmlnaW5hbFJhbmdlcyA9IHNlbGVjdGlvbnNUb1JhbmdlcyhzdHJpbmcsIFtzZWxlY3Rpb25dKTtcblxuICBpZiAob3JpZ2luYWxSYW5nZXMpIHtcbiAgICBjb25zdCBvZmZzZXQgPSBzZWxlY3Rpb24udGV4dC5pbmRleE9mKHRyaW1tZWRUZXh0KTsgLy8gZ2V0IG9mZnNldCBvZiB0cmltbWVkIGZyb20gbm9uLXRyaW1tZWRcbiAgICBjb25zdCBvcmlnaW5hbFJhbmdlID0gb3JpZ2luYWxSYW5nZXNbMF07XG4gICAgY29uc3QgbmV3U3RhcnRQb3NpdGlvbiA9IG9yaWdpbmFsUmFuZ2VbMF0gKyBvZmZzZXQ7XG4gICAgbGV0IG9jY3VycmVuY2UgPSBzZWxlY3Rpb24ub2NjdXJyZW5jZTtcbiAgICBjb25zdCBtYXhPY2N1cnJlbmNlcyA9IHN0cmluZ0hlbHBlcnMub2NjdXJyZW5jZXNJblN0cmluZyhzdHJpbmcsIHRyaW1tZWRUZXh0KSArIDE7IC8vIHdoZW4gdG8gc3RvcCBzZWFyY2hpbmdcbiAgICBsZXQgcmFuZ2VzID0gW107XG4gICAgbGV0IHJlYWNoZWRFbmQgPSBmYWxzZTtcblxuICAgIGRvIHsgLy8gcmVwZWF0ZWRseSB0cnkgbmV3IG9jY3VycmVuY2UgdmFsdWVzIHVudGlsIGl0IG1hdGNoZXMgdGhlIHRyaW1tZWQgdGV4dCBwb3NpdGlvbiBvciB3ZSBnbyBvdXQgb2YgYm91bmRzXG4gICAgICBjb25zdCBuZXdTZWxlY3Rpb24gPSBbe1xuICAgICAgICAuLi5zZWxlY3Rpb24sXG4gICAgICAgIG9jY3VycmVuY2UsXG4gICAgICAgIHRleHQ6IHRyaW1tZWRUZXh0LFxuICAgICAgfV07XG4gICAgICByYW5nZXMgPSBzZWxlY3Rpb25zVG9SYW5nZXMoc3RyaW5nLCBuZXdTZWxlY3Rpb24pO1xuXG4gICAgICBpZiAocmFuZ2VzKSB7XG4gICAgICAgIGNvbnN0IHJhbmdlID0gcmFuZ2VzWzBdO1xuXG4gICAgICAgIGlmIChyYW5nZVswXSA9PT0gbmV3U3RhcnRQb3NpdGlvbikgeyAvLyBpZiBzZWxlY3Rpb24gZm9yIHRoaXMgb2NjdXJyZW5jZSBpcyBhdCBjb3JyZWN0IHBvc2l0aW9uLCB3ZSB1c2UgaXRcbiAgICAgICAgICBjb25zdCBvcHRpbWl6ZWRTZWxlY3Rpb25zID0gcmFuZ2VzVG9TZWxlY3Rpb25zKHN0cmluZywgcmFuZ2VzKTsgLy8gY2xlYW4gdXAgb2NjdXJyZW5jZXNcblxuICAgICAgICAgIGlmIChvcHRpbWl6ZWRTZWxlY3Rpb25zKSB7IC8vIGlmIGZvdW5kLCB3ZSB1c2UgdXBkYXRlZCB2YWx1ZXMgZm9yIG9jY3VycmVuY2UocylcbiAgICAgICAgICAgIHNlbGVjdGlvbi5vY2N1cnJlbmNlID0gb3B0aW1pemVkU2VsZWN0aW9uc1swXS5vY2N1cnJlbmNlO1xuICAgICAgICAgICAgc2VsZWN0aW9uLm9jY3VycmVuY2VzID0gb3B0aW1pemVkU2VsZWN0aW9uc1swXS5vY2N1cnJlbmNlcztcbiAgICAgICAgICB9XG4gICAgICAgICAgcmFuZ2VzID0gbnVsbDsgLy8gZG9uZSBzZWFyY2hpbmdcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBvY2N1cnJlbmNlKys7XG4gICAgICAgICAgcmVhY2hlZEVuZCA9IChvY2N1cnJlbmNlID49IG1heE9jY3VycmVuY2VzKTsgLy8gbGlrZWx5IGZhaWxlZCBiZWNhdXNlIG9yaWdpbmFsIHNlbGVjdGlvbiBoYWQgaW52YWxpZCBvY2N1cnJlbmNlXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IHdoaWxlICghcmVhY2hlZEVuZCAmJiByYW5nZXMpO1xuICB9XG59XG5cbi8qKlxuICogdHJpbSB2YXJpb3VzIHVuaWNvZGUgc3BhY2VzIGZyb20gbGVhZGluZyBhbmQgdHJhaWxpbmcgZWRnZXNcbiAqIEBwYXJhbSB7c3RyaW5nfSB0ZXh0IC0gc3RyaW5nIHRvIHRyaW1cbiAqIEByZXR1cm4ge3N0cmluZ30gdHJpbW1lZCB0ZXh0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1bmljb2RlVHJpbSh0ZXh0KSB7XG4gIGxldCBtYXRjaDtcblxuICBkbyB7XG4gICAgLy8gcmVtb3ZlIGxlYWRpbmcgb3IgdHJhaWxpbmcgdW5pY29kZSB3aGl0ZXNwYWNlIGNoYXJhY3RlcnMgYXMgd2VsbCBhczpcbiAgICAvLyAgICBjb25zdCBaRVJPX1dJRFRIX1NQQUNFID0gJ1xcdTIwMEInO1xuICAgIC8vICAgIGNvbnN0IFpFUk9fV0lEVEhfSk9JTkVSID0gJ1xcdTIwNjAnO1xuICAgIGNvbnN0IHJlZ2V4ID0geFJlZ0V4cCgvXltcXHNcXHUyMDBCXFx1MjA2MF0rfFtcXHNcXHUyMDBCXFx1MjA2MF0rJC9ndSk7XG4gICAgbWF0Y2ggPSByZWdleC5leGVjKHRleHQpO1xuXG4gICAgaWYgKG1hdGNoKSB7XG4gICAgICBjb25zdCBhdFN0YXJ0ID0gbWF0Y2guaW5kZXggPT09IDA7XG5cbiAgICAgIGlmIChhdFN0YXJ0KSB7XG4gICAgICAgIGNvbnN0IHdoaXRlU3BhY2VMZW4gPSBtYXRjaFswXS5sZW5ndGg7XG4gICAgICAgIHRleHQgPSB0ZXh0LnN1YnN0cih3aGl0ZVNwYWNlTGVuKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRleHQgPSB0ZXh0LnN1YnN0cigwLCBtYXRjaC5pbmRleCk7XG4gICAgICB9XG4gICAgfVxuICB9IHdoaWxlIChtYXRjaCk7XG5cbiAgcmV0dXJuIHRleHQ7XG59XG5cbi8qKlxuICogam9pbiBjb250aWd1b3VzIHJhbmdlcyAob2Ygc2VsZWN0aW9ucykgYW5kIHJldHVybiBuZXcgcmFuZ2VzIGFycmF5XG4gKiBAcGFyYW0ge3N0cmluZ30gdGV4dCAtIHZlcnNlIHRleHRcbiAqIEBwYXJhbSB7QXJyYXl9IHJhbmdlc1xuICogQHJldHVybiB7QXJyYXl9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBqb2luQ29udGlndW91c1Jhbmdlcyh0ZXh0LCByYW5nZXMpIHtcbiAgbGV0IG91dHB1dFJhbmdlcyA9IHJhbmdlcztcblxuICBpZiAocmFuZ2VzKSB7XG4gICAgb3V0cHV0UmFuZ2VzID0gW107XG5cbiAgICBmb3IgKGxldCBpID0gMCwgbCA9IHJhbmdlcy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIGxldCByYW5nZSA9IHJhbmdlc1tpXTtcblxuICAgICAgaWYgKGkgPj0gMSkgeyAvLyBza2lwIG92ZXIgZmlyc3QgcmFuZ2VcbiAgICAgICAgY29uc3QgbGFzdFBvcyA9IG91dHB1dFJhbmdlcy5sZW5ndGggLSAxO1xuICAgICAgICBjb25zdCBsYXN0UmFuZ2UgPSBvdXRwdXRSYW5nZXNbbGFzdFBvc107XG4gICAgICAgIGNvbnN0IGdhcFN0YXJ0ID0gbGFzdFJhbmdlWzFdICsgMTtcbiAgICAgICAgY29uc3QgY2hhcmFjdGVyc0JldHdlZW4gPSByYW5nZVswXSAtIGdhcFN0YXJ0O1xuICAgICAgICBsZXQgaW5CZXR3ZWVuID0gdGV4dC5zdWJzdHIoZ2FwU3RhcnQsIGNoYXJhY3RlcnNCZXR3ZWVuKTtcbiAgICAgICAgaW5CZXR3ZWVuID0gdW5pY29kZVRyaW0oaW5CZXR3ZWVuKTtcblxuICAgICAgICBpZiAoIWluQmV0d2Vlbi5sZW5ndGgpIHsgLy8gaWYgb25seSB3aGl0ZSBzcGFjZVxuICAgICAgICAgIGxhc3RSYW5nZVsxXSA9IHJhbmdlWzFdOyAvLyBqb2luIHRoaXMgcmFuZ2Ugd2l0aCBwcmV2aW91cyByYW5nZVxuICAgICAgICAgIHJhbmdlID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAocmFuZ2UpIHtcbiAgICAgICAgb3V0cHV0UmFuZ2VzLnB1c2gocmFuZ2UpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBvdXRwdXRSYW5nZXM7XG59XG5cbi8qKlxuICogQGRlc2NyaXB0aW9uIC0gVGhpcyBhYnN0cmFjdHMgY29tcGxleCBoYW5kbGluZyBvZiBzZWxlY3Rpb25zIHN1Y2ggYXMgb3JkZXIsIGRlZHVwaW5nLCBjb25jYXRlbmF0aW5nLCBvdmVybGFwcGluZyByYW5nZXNcbiAqIEBwYXJhbSB7c3RyaW5nfSBzdHJpbmcgLSB0aGUgdGV4dCBzZWxlY3Rpb25zIGFyZSBmb3VuZCBpblxuICogQHBhcmFtIHthcnJheX0gIHNlbGVjdGlvbnMgLSBhcnJheSBvZiBzZWxlY3Rpb24gb2JqZWN0cyBbT2JqLC4uLl1cbiAqIEByZXR1cm5zIHthcnJheX0gLSBhcnJheSBvZiBzZWxlY3Rpb24gb2JqZWN0c1xuICovXG5leHBvcnQgY29uc3Qgb3B0aW1pemVTZWxlY3Rpb25zID0gKHN0cmluZywgc2VsZWN0aW9ucykgPT4ge1xuICBsZXQgb3B0aW1pemVkU2VsZWN0aW9uczsgLy8gcmV0dXJuXG5cbiAgLy8gZmlsdGVyIG91dCBlbXB0eSBzZWxlY3Rpb25zIGFuZCB0cmltIHdoaXRlc3BhY2VcbiAgc2VsZWN0aW9ucyA9IHNlbGVjdGlvbnMuZmlsdGVyKCBzZWxlY3Rpb24gPT4ge1xuICAgIGNvbnN0IHNlbGVjdGVkVGV4dCA9IHNlbGVjdGlvbi50ZXh0O1xuICAgIGNvbnN0IHRyaW1tZWRUZXh0ID0gdW5pY29kZVRyaW0oc2VsZWN0ZWRUZXh0KTtcbiAgICBjb25zdCB3aGl0ZVNwYWNlU2VsZWN0ZWQgPSAhdHJpbW1lZFRleHQubGVuZ3RoO1xuXG4gICAgaWYgKCF3aGl0ZVNwYWNlU2VsZWN0ZWQgJiYgKHRyaW1tZWRUZXh0ICE9PSBzZWxlY3RlZFRleHQpKSB7IC8vIGlmIHdoaXRlc3BhY2UgcmVtb3ZlZCwgdXBkYXRlIHNlbGVjdGlvbiB0ZXh0XG4gICAgICB1cGRhdGVUcmltbWVkVGV4dE9jY3VyZW5jZShzdHJpbmcsIHNlbGVjdGlvbiwgdHJpbW1lZFRleHQpO1xuICAgICAgc2VsZWN0aW9uLnRleHQgPSB0cmltbWVkVGV4dDtcbiAgICB9XG4gICAgcmV0dXJuICF3aGl0ZVNwYWNlU2VsZWN0ZWQ7XG4gIH0pO1xuXG4gIGxldCByYW5nZXMgPSBzZWxlY3Rpb25zVG9SYW5nZXMoc3RyaW5nLCBzZWxlY3Rpb25zKTsgLy8gZ2V0IGNoYXIgcmFuZ2VzIG9mIGVhY2ggc2VsZWN0aW9uXG4gIHJhbmdlcyA9IG9wdGltaXplUmFuZ2VzKHJhbmdlcyk7IC8vIG9wdGltaXplIHRoZSByYW5nZXNcbiAgcmFuZ2VzID0gam9pbkNvbnRpZ3VvdXNSYW5nZXMoc3RyaW5nLCByYW5nZXMpO1xuICBvcHRpbWl6ZWRTZWxlY3Rpb25zID0gcmFuZ2VzVG9TZWxlY3Rpb25zKHN0cmluZywgcmFuZ2VzKTsgLy8gY29udmVydCBvcHRpbWl6ZWQgcmFuZ2VzIGludG8gc2VsZWN0aW9uc1xuICByZXR1cm4gb3B0aW1pemVkU2VsZWN0aW9ucztcbn07XG5cbi8qKlxuICogQGRlc2NyaXB0aW9uIC0gUmVtb3ZlcyBhIHNlbGVjdGlvbiBpZiBmb3VuZCBpbiB0aGUgYXJyYXkgb2Ygc2VsZWN0aW9uc1xuICogQHBhcmFtIHtPYmplY3R9IHNlbGVjdGlvbiAtIHRoZSBzZWxlY3Rpb24gdG8gcmVtb3ZlXG4gKiBAcGFyYW0ge0FycmF5fSAgc2VsZWN0aW9ucyAtIGFycmF5IG9mIHNlbGVjdGlvbiBvYmplY3RzIFtPYmosLi4uXVxuICogQHBhcmFtIHtzdHJpbmd9IHN0cmluZyAtIHRoZSB0ZXh0IHNlbGVjdGlvbnMgYXJlIGZvdW5kIGluXG4gKiBAcmV0dXJucyB7QXJyYXl9IC0gYXJyYXkgb2Ygc2VsZWN0aW9uIG9iamVjdHNcbiAqL1xuZXhwb3J0IGNvbnN0IHJlbW92ZVNlbGVjdGlvbkZyb21TZWxlY3Rpb25zID0gKHNlbGVjdGlvbiwgc2VsZWN0aW9ucywgc3RyaW5nKSA9PiB7XG4gIHNlbGVjdGlvbnMgPSBBcnJheS5mcm9tKHNlbGVjdGlvbnMpO1xuICBzZWxlY3Rpb25zID0gc2VsZWN0aW9ucy5maWx0ZXIoX3NlbGVjdGlvbiA9PlxuICAgICEoX3NlbGVjdGlvbi5vY2N1cnJlbmNlID09PSBzZWxlY3Rpb24ub2NjdXJyZW5jZSAmJiBfc2VsZWN0aW9uLnRleHQgPT09IHNlbGVjdGlvbi50ZXh0KSxcbiAgKTtcbiAgc2VsZWN0aW9ucyA9IG9wdGltaXplU2VsZWN0aW9ucyhzdHJpbmcsIHNlbGVjdGlvbnMpO1xuICByZXR1cm4gc2VsZWN0aW9ucztcbn07XG5cbi8qKlxuICogQGRlc2NyaXB0aW9uIC0gQWRkcyBhIHNlbGVjdGlvbiBpZiBmb3VuZCBpbiB0aGUgYXJyYXkgb2Ygc2VsZWN0aW9uc1xuICogQHBhcmFtIHtPYmplY3R9IHNlbGVjdGlvbiAtIHRoZSBzZWxlY3Rpb24gdG8gcmVtb3ZlXG4gKiBAcGFyYW0ge0FycmF5fSAgc2VsZWN0aW9ucyAtIGFycmF5IG9mIHNlbGVjdGlvbiBvYmplY3RzIFtPYmosLi4uXVxuICogQHBhcmFtIHtzdHJpbmd9IHN0cmluZyAtIHRoZSB0ZXh0IHNlbGVjdGlvbnMgYXJlIGZvdW5kIGluXG4gKiBAcmV0dXJucyB7QXJyYXl9IC0gYXJyYXkgb2Ygc2VsZWN0aW9uIG9iamVjdHNcbiAqL1xuZXhwb3J0IGNvbnN0IGFkZFNlbGVjdGlvblRvU2VsZWN0aW9ucyA9IChzZWxlY3Rpb24sIHNlbGVjdGlvbnMsIHN0cmluZykgPT4ge1xuICBzZWxlY3Rpb25zID0gQXJyYXkuZnJvbShzZWxlY3Rpb25zKTtcbiAgc2VsZWN0aW9ucy5wdXNoKHNlbGVjdGlvbik7XG4gIHNlbGVjdGlvbnMgPSBvcHRpbWl6ZVNlbGVjdGlvbnMoc3RyaW5nLCBzZWxlY3Rpb25zKTtcbiAgcmV0dXJuIHNlbGVjdGlvbnM7XG59O1xuXG4vKipcbiAqIFNwbGljZSBzdHJpbmcgaW50byBhcnJheSBvZiBzdWJzdHJpbmdzLCBmbGFnZ2luZyB3aGF0IGlzIHNlbGVjdGVkXG4gKiBAcGFyYW0ge1N0cmluZ30gc3RyaW5nIC0gdGV4dCB1c2VkIHRvIGdldCB0aGUgcmFuZ2VzIG9mXG4gKiBAcGFyYW0ge2FycmF5fSBzZWxlY3Rpb25zIC0gYXJyYXkgb2Ygc2VsZWN0aW9ucyBbb2JqLC4uLl1cbiAqIEByZXR1cm5zIHthcnJheX0gLSBhcnJheSBvZiBvYmplY3RzXG4gKi9cbmV4cG9ydCBjb25zdCBzZWxlY3Rpb25BcnJheSA9IChzdHJpbmcsIHNlbGVjdGlvbnMpID0+IHtcbiAgbGV0IHNlbGVjdGlvbkFycmF5ID0gW107XG4gIGxldCByYW5nZXMgPSBzZWxlY3Rpb25zVG9SYW5nZXMoc3RyaW5nLCBzZWxlY3Rpb25zKTtcbiAgc2VsZWN0aW9uQXJyYXkgPSBzcGxpY2VTdHJpbmdPblJhbmdlcyhzdHJpbmcsIHJhbmdlcyk7XG4gIHJldHVybiBzZWxlY3Rpb25BcnJheTtcbn07XG5cbi8qKlxuICogQGRlc2NyaXB0aW9uIEZ1bmN0aW9uIHRoYXQgbm9ybWFsaXplcyBhIHN0cmluZyBpbmNsdWRpbmcgd2hpdGVzcGFjZVxuICogQHBhcmFtIHtTdHJpbmd9IHN0cmluZyAtIHRoZSBzdHJpbmcgdG8gbm9ybWFsaXplXG4gKiBAcHJldHVybnMge1N0cmluZ30gLSBUaGUgcmV0dXJuZWQgbm9ybWFsaXplZCBzdHJpbmdcbiAqL1xuZXhwb3J0IGNvbnN0IG5vcm1hbGl6ZVN0cmluZyA9IChzdHJpbmcpID0+IHtcbiAgc3RyaW5nID0gc3RyaW5nLnJlcGxhY2UoL1xccysvZywgJyAnKTtcbiAgcmV0dXJuIHN0cmluZztcbn07XG4iXX0=