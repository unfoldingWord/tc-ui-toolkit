"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getAlignedText = exports.getQuoteAsArray = void 0;
var ELLIPSIS = '…';
var DEFAULT_SEPARATOR = ' ';
/**
 * gets the quote as an array of occurrences
 * @param {Array|String} quote
 * @param {int} occurrenceToMatch
 * @return {Array}
 */

var getQuoteAsArray = function getQuoteAsArray(quote, occurrenceToMatch) {
  var quoteArray = quote;

  if (typeof quote === 'string') {
    // should only be string in case of single word quote, otherwise is an array
    quoteArray = quote.split(' ');
    quoteArray = quoteArray.map(function (word) {
      return {
        word: word,
        occurrence: occurrenceToMatch
      };
    });
  }

  return quoteArray;
};
/**
 * getAlignedText - returns a string of the text found in an array of verseObjects that matches the words to find
 *                  and their occurrence in the verse.
 * @param {Array} verseObjects
 * @param {Array|String} quote
 * @param {int} occurrenceToMatch
 * @param {boolean} isMatch - if true, all verseObjects will be considered a match and will be included in the returned text
 */


exports.getQuoteAsArray = getQuoteAsArray;

var getAlignedText = function getAlignedText(verseObjects, quote, occurrenceToMatch) {
  var isMatch = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  var text = '';

  if (!verseObjects || !quote || !occurrenceToMatch) {
    return text;
  }

  var wordsToMatch = getQuoteAsArray(quote, occurrenceToMatch);
  var separator = DEFAULT_SEPARATOR;
  var needsEllipsis = false;

  var _loop = function _loop(i, l) {
    var verseObject = verseObjects[i];
    var lastMatch = false;

    if (verseObject.type === 'milestone' || verseObject.type === 'word') {
      // It is a milestone or a word...we want to handle all of them.
      if (isMatch || wordsToMatch.find(function (item) {
        return verseObject.content === item.word && verseObject.occurrence === item.occurrence;
      })) {
        lastMatch = true; // We have a match (or previoiusly had a match in the parent) so we want to include all text that we find,

        if (needsEllipsis) {
          // Need to add an ellipsis to the separator since a previous match but not one right next to this one
          separator += ELLIPSIS + DEFAULT_SEPARATOR;
          needsEllipsis = false;
        }

        if (text) {
          // There has previously been text, so append the separator, either a space or punctuation
          text += separator;
        }

        separator = DEFAULT_SEPARATOR; // reset the separator for the next word

        if (verseObject.text) {
          // Handle type word, appending the text from this node
          text += verseObject.text;
        }

        if (verseObject.children) {
          // Handle children of type milestone, appending all the text of the children, isMatch is true
          text += getAlignedText(verseObject.children, wordsToMatch, occurrenceToMatch, true);
        }
      } else if (verseObject.children) {
        // Did not find a match, yet still need to go through all the children and see if there's match.
        // If there isn't a match here, i.e. childText is empty, and we have text, we still need
        // an ellipsis if a later match is found since there was some text here
        var childText = getAlignedText(verseObject.children, wordsToMatch, occurrenceToMatch, isMatch);

        if (childText) {
          lastMatch = true;

          if (needsEllipsis) {
            separator += ELLIPSIS + DEFAULT_SEPARATOR;
            needsEllipsis = false;
          }

          text += (text ? separator : '') + childText;
          separator = DEFAULT_SEPARATOR;
        } else if (text) {
          needsEllipsis = true;
        }
      }
    }

    if (lastMatch && verseObjects[i + 1] && verseObjects[i + 1].type === 'text' && text) {
      // Found some text that is a word separator/punctuation, e.g. the apostrophe between "God" and "s" for "God's"
      // We want to preserve this so we can show "God's" instead of "God ... s"
      if (separator === DEFAULT_SEPARATOR) {
        separator = '';
      }

      separator += verseObjects[i + 1].text;
    }
  };

  for (var i = 0, l = verseObjects.length; i < l; i++) {
    _loop(i, l);
  }

  return text;
};

exports.getAlignedText = getAlignedText;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9WZXJzZUNoZWNrL2hlbHBlcnMvY2hlY2tBcmVhSGVscGVycy5qcyJdLCJuYW1lcyI6WyJFTExJUFNJUyIsIkRFRkFVTFRfU0VQQVJBVE9SIiwiZ2V0UXVvdGVBc0FycmF5IiwicXVvdGUiLCJvY2N1cnJlbmNlVG9NYXRjaCIsInF1b3RlQXJyYXkiLCJzcGxpdCIsIm1hcCIsIndvcmQiLCJvY2N1cnJlbmNlIiwiZ2V0QWxpZ25lZFRleHQiLCJ2ZXJzZU9iamVjdHMiLCJpc01hdGNoIiwidGV4dCIsIndvcmRzVG9NYXRjaCIsInNlcGFyYXRvciIsIm5lZWRzRWxsaXBzaXMiLCJpIiwibCIsInZlcnNlT2JqZWN0IiwibGFzdE1hdGNoIiwidHlwZSIsImZpbmQiLCJpdGVtIiwiY29udGVudCIsImNoaWxkcmVuIiwiY2hpbGRUZXh0IiwibGVuZ3RoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxJQUFNQSxRQUFRLEdBQUcsR0FBakI7QUFDQSxJQUFNQyxpQkFBaUIsR0FBRyxHQUExQjtBQUVBOzs7Ozs7O0FBTU8sSUFBTUMsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixDQUFDQyxLQUFELEVBQVFDLGlCQUFSLEVBQThCO0FBQzNELE1BQUlDLFVBQVUsR0FBR0YsS0FBakI7O0FBRUEsTUFBSSxPQUFPQSxLQUFQLEtBQWdCLFFBQXBCLEVBQThCO0FBQUU7QUFDOUJFLElBQUFBLFVBQVUsR0FBR0YsS0FBSyxDQUFDRyxLQUFOLENBQVksR0FBWixDQUFiO0FBQ0FELElBQUFBLFVBQVUsR0FBR0EsVUFBVSxDQUFDRSxHQUFYLENBQWUsVUFBQUMsSUFBSTtBQUFBLGFBQUs7QUFBRUEsUUFBQUEsSUFBSSxFQUFKQSxJQUFGO0FBQVFDLFFBQUFBLFVBQVUsRUFBRUw7QUFBcEIsT0FBTDtBQUFBLEtBQW5CLENBQWI7QUFDRDs7QUFDRCxTQUFPQyxVQUFQO0FBQ0QsQ0FSTTtBQVVQOzs7Ozs7Ozs7Ozs7QUFRTyxJQUFNSyxjQUFjLEdBQUcsU0FBakJBLGNB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QXFDO0FBQ25DYyxRQUFBQSxTQUFTLEdBQUcsRUFBWjtBQUNEOztBQUNEQSxNQUFBQSxTQUFTLElBQUlKLFlBQVksQ0FBQ00sQ0FBQyxHQUFHLENBQUwsQ0FBWixDQUFvQkosSUFBakM7QUFDRDtBQXRFb0Y7O0FBV3ZGLE9BQUssSUFBSUksQ0FBQyxHQUFHLENBQVIsRUFBV0MsQ0FBQyxHQUFHUCxZQUFZLENBQUNnQixNQUFqQyxFQUF5Q1YsQ0FBQyxHQUFHQyxDQUE3QyxFQUFnREQsQ0FBQyxFQUFqRCxFQUFxRDtBQUFBLFVBQTVDQSxDQUE0QyxFQUFyQ0MsQ0FBcUM7QUE0RHBEOztBQUNELFNBQU9MLElBQVA7QUFDRCxDQXpFTSIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IEVMTElQU0lTID0gJ+KApic7XG5jb25zdCBERUZBVUxUX1NFUEFSQVRPUiA9ICcgJztcblxuLyoqXG4gKiBnZXRzIHRoZSBxdW90ZSBhcyBhbiBhcnJheSBvZiBvY2N1cnJlbmNlc1xuICogQHBhcmFtIHtBcnJheXxTdHJpbmd9IHF1b3RlXG4gKiBAcGFyYW0ge2ludH0gb2NjdXJyZW5jZVRvTWF0Y2hcbiAqIEByZXR1cm4ge0FycmF5fVxuICovXG5leHBvcnQgY29uc3QgZ2V0UXVvdGVBc0FycmF5ID0gKHF1b3RlLCBvY2N1cnJlbmNlVG9NYXRjaCkgPT4ge1xuICBsZXQgcXVvdGVBcnJheSA9IHF1b3RlO1xuXG4gIGlmICh0eXBlb2YgcXVvdGUgPT09J3N0cmluZycpIHsgLy8gc2hvdWxkIG9ubHkgYmUgc3RyaW5nIGluIGNhc2Ugb2Ygc2luZ2xlIHdvcmQgcXVvdGUsIG90aGVyd2lzZSBpcyBhbiBhcnJheVxuICAgIHF1b3RlQXJyYXkgPSBxdW90ZS5zcGxpdCgnICcpO1xuICAgIHF1b3RlQXJyYXkgPSBxdW90ZUFycmF5Lm1hcCh3b3JkID0+ICh7IHdvcmQsIG9jY3VycmVuY2U6IG9jY3VycmVuY2VUb01hdGNoIH0pKTtcbiAgfVxuICByZXR1cm4gcXVvdGVBcnJheTtcbn07XG5cbi8qKlxuICogZ2V0QWxpZ25lZFRleHQgLSByZXR1cm5zIGEgc3RyaW5nIG9mIHRoZSB0ZXh0IGZvdW5kIGluIGFuIGFycmF5IG9mIHZlcnNlT2JqZWN0cyB0aGF0IG1hdGNoZXMgdGhlIHdvcmRzIHRvIGZpbmRcbiAqICAgICAgICAgICAgICAgICAgYW5kIHRoZWlyIG9jY3VycmVuY2UgaW4gdGhlIHZlcnNlLlxuICogQHBhcmFtIHtBcnJheX0gdmVyc2VPYmplY3RzXG4gKiBAcGFyYW0ge0FycmF5fFN0cmluZ30gcXVvdGVcbiAqIEBwYXJhbSB7aW50fSBvY2N1cnJlbmNlVG9NYXRjaFxuICogQHBhcmFtIHtib29sZWFufSBpc01hdGNoIC0gaWYgdHJ1ZSwgYWxsIHZlcnNlT2JqZWN0cyB3aWxsIGJlIGNvbnNpZGVyZWQgYSBtYXRjaCBhbmQgd2lsbCBiZSBpbmNsdWRlZCBpbiB0aGUgcmV0dXJuZWQgdGV4dFxuICovXG5leHBvcnQgY29uc3QgZ2V0QWxpZ25lZFRleHQgPSAodmVyc2VPYmplY3RzLCBxdW90ZSwgb2NjdXJyZW5jZVRvTWF0Y2gsIGlzTWF0Y2g9ZmFsc2UpID0+IHtcbiAgbGV0IHRleHQgPSAnJztcblxuICBpZiAoISB2ZXJzZU9iamVjdHMgfHwgISBxdW90ZSB8fCAhIG9jY3VycmVuY2VUb01hdGNoKSB7XG4gICAgcmV0dXJuIHRleHQ7XG4gIH1cblxuICBjb25zdCB3b3Jkc1RvTWF0Y2ggPSBnZXRRdW90ZUFzQXJyYXkocXVvdGUsIG9jY3VycmVuY2VUb01hdGNoKTtcbiAgbGV0IHNlcGFyYXRvciA9IERFRkFVTFRfU0VQQVJBVE9SO1xuICBsZXQgbmVlZHNFbGxpcHNpcyA9IGZhbHNlO1xuXG4gIGZvciAobGV0IGkgPSAwLCBsID0gdmVyc2VPYmplY3RzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgIGNvbnN0IHZlcnNlT2JqZWN0ID0gdmVyc2VPYmplY3RzW2ldO1xuICAgIGxldCBsYXN0TWF0Y2ggPSBmYWxzZTtcblxuICAgIGlmICgodmVyc2VPYmplY3QudHlwZSA9PT0gJ21pbGVzdG9uZScgfHwgdmVyc2VPYmplY3QudHlwZSA9PT0gJ3dvcmQnKSkge1xuICAgICAgLy8gSXQgaXMgYSBtaWxlc3RvbmUgb3IgYSB3b3JkLi4ud2Ugd2FudCB0byBoYW5kbGUgYWxsIG9mIHRoZW0uXG4gICAgICBpZiAoaXNNYXRjaCB8fCB3b3Jkc1RvTWF0Y2guZmluZChpdGVtID0+ICh2ZXJzZU9iamVjdC5jb250ZW50ID09PSBpdGVtLndvcmQpICYmICh2ZXJzZU9iamVjdC5vY2N1cnJlbmNlID09PSBpdGVtLm9jY3VycmVuY2UpKSkge1xuICAgICAgICBsYXN0TWF0Y2ggPSB0cnVlO1xuXG4gICAgICAgIC8vIFdlIGhhdmUgYSBtYXRjaCAob3IgcHJldmlvaXVzbHkgaGFkIGEgbWF0Y2ggaW4gdGhlIHBhcmVudCkgc28gd2Ugd2FudCB0byBpbmNsdWRlIGFsbCB0ZXh0IHRoYXQgd2UgZmluZCxcbiAgICAgICAgaWYgKG5lZWRzRWxsaXBzaXMpIHtcbiAgICAgICAgICAvLyBOZWVkIHRvIGFkZCBhbiBlbGxpcHNpcyB0byB0aGUgc2VwYXJhdG9yIHNpbmNlIGEgcHJldmlvdXMgbWF0Y2ggYnV0IG5vdCBvbmUgcmlnaHQgbmV4dCB0byB0aGlzIG9uZVxuICAgICAgICAgIHNlcGFyYXRvciArPSBFTExJUFNJUytERUZBVUxUX1NFUEFSQVRPUjtcbiAgICAgICAgICBuZWVkc0VsbGlwc2lzID0gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGV4dCkge1xuICAgICAgICAgIC8vIFRoZXJlIGhhcyBwcmV2aW91c2x5IGJlZW4gdGV4dCwgc28gYXBwZW5kIHRoZSBzZXBhcmF0b3IsIGVpdGhlciBhIHNwYWNlIG9yIHB1bmN0dWF0aW9uXG4gICAgICAgICAgdGV4dCArPSBzZXBhcmF0b3I7XG4gICAgICAgIH1cbiAgICAgICAgc2VwYXJhdG9yID0gREVGQVVMVF9TRVBBUkFUT1I7IC8vIHJlc2V0IHRoZSBzZXBhcmF0b3IgZm9yIHRoZSBuZXh0IHdvcmRcblxuICAgICAgICBpZiAodmVyc2VPYmplY3QudGV4dCkge1xuICAgICAgICAgIC8vIEhhbmRsZSB0eXBlIHdvcmQsIGFwcGVuZGluZyB0aGUgdGV4dCBmcm9tIHRoaXMgbm9kZVxuICAgICAgICAgIHRleHQgKz0gdmVyc2VPYmplY3QudGV4dDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh2ZXJzZU9iamVjdC5jaGlsZHJlbikge1xuICAgICAgICAgIC8vIEhhbmRsZSBjaGlsZHJlbiBvZiB0eXBlIG1pbGVzdG9uZSwgYXBwZW5kaW5nIGFsbCB0aGUgdGV4dCBvZiB0aGUgY2hpbGRyZW4sIGlzTWF0Y2ggaXMgdHJ1ZVxuICAgICAgICAgIHRleHQgKz0gZ2V0QWxpZ25lZFRleHQodmVyc2VPYmplY3QuY2hpbGRyZW4sIHdvcmRzVG9NYXRjaCwgb2NjdXJyZW5jZVRvTWF0Y2gsIHRydWUpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKHZlcnNlT2JqZWN0LmNoaWxkcmVuKSB7XG4gICAgICAgIC8vIERpZCBub3QgZmluZCBhIG1hdGNoLCB5ZXQgc3RpbGwgbmVlZCB0byBnbyB0aHJvdWdoIGFsbCB0aGUgY2hpbGRyZW4gYW5kIHNlZSBpZiB0aGVyZSdzIG1hdGNoLlxuICAgICAgICAvLyBJZiB0aGVyZSBpc24ndCBhIG1hdGNoIGhlcmUsIGkuZS4gY2hpbGRUZXh0IGlzIGVtcHR5LCBhbmQgd2UgaGF2ZSB0ZXh0LCB3ZSBzdGlsbCBuZWVkXG4gICAgICAgIC8vIGFuIGVsbGlwc2lzIGlmIGEgbGF0ZXIgbWF0Y2ggaXMgZm91bmQgc2luY2UgdGhlcmUgd2FzIHNvbWUgdGV4dCBoZXJlXG4gICAgICAgIGxldCBjaGlsZFRleHQgPSBnZXRBbGlnbmVkVGV4dCh2ZXJzZU9iamVjdC5jaGlsZHJlbiwgd29yZHNUb01hdGNoLCBvY2N1cnJlbmNlVG9NYXRjaCwgaXNNYXRjaCk7XG5cbiAgICAgICAgaWYgKGNoaWxkVGV4dCkge1xuICAgICAgICAgIGxhc3RNYXRjaCA9IHRydWU7XG5cbiAgICAgICAgICBpZiAobmVlZHNFbGxpcHNpcykge1xuICAgICAgICAgICAgc2VwYXJhdG9yICs9IEVMTElQU0lTK0RFRkFVTFRfU0VQQVJBVE9SO1xuICAgICAgICAgICAgbmVlZHNFbGxpcHNpcyA9IGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgICB0ZXh0ICs9ICh0ZXh0P3NlcGFyYXRvcjonJykgKyBjaGlsZFRleHQ7XG4gICAgICAgICAgc2VwYXJhdG9yID0gREVGQVVMVF9TRVBBUkFUT1I7XG4gICAgICAgIH0gZWxzZSBpZiAodGV4dCkge1xuICAgICAgICAgIG5lZWRzRWxsaXBzaXMgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKCBsYXN0TWF0Y2ggJiYgdmVyc2VPYmplY3RzW2kgKyAxXSAmJiB2ZXJzZU9iamVjdHNbaSArIDFdLnR5cGUgPT09ICd0ZXh0JyAmJiB0ZXh0KSB7XG4gICAgICAvLyBGb3VuZCBzb21lIHRleHQgdGhhdCBpcyBhIHdvcmQgc2VwYXJhdG9yL3B1bmN0dWF0aW9uLCBlLmcuIHRoZSBhcG9zdHJvcGhlIGJldHdlZW4gXCJHb2RcIiBhbmQgXCJzXCIgZm9yIFwiR29kJ3NcIlxuICAgICAgLy8gV2Ugd2FudCB0byBwcmVzZXJ2ZSB0aGlzIHNvIHdlIGNhbiBzaG93IFwiR29kJ3NcIiBpbnN0ZWFkIG9mIFwiR29kIC4uLiBzXCJcbiAgICAgIGlmIChzZXBhcmF0b3IgPT09IERFRkFVTFRfU0VQQVJBVE9SKSB7XG4gICAgICAgIHNlcGFyYXRvciA9ICcnO1xuICAgICAgfVxuICAgICAgc2VwYXJhdG9yICs9IHZlcnNlT2JqZWN0c1tpICsgMV0udGV4dDtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHRleHQ7XG59O1xuIl19