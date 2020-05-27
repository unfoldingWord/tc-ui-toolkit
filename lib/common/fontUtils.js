"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getFontClassName = getFontClassName;

/**
 * Returns the class name for a given target language font.
 * @param {string} languageFont - User selected font for target Language.
 */
function getFontClassName(languageFont) {
  return languageFont && languageFont !== 'default' ? "".concat(languageFont, "-text") : '';
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21tb24vZm9udFV0aWxzLmpzIl0sIm5hbWVzIjpbImdldEZvbnRDbGFzc05hbWUiLCJsYW5ndWFnZUZvbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7OztBQUlPLFNBQVNBLGdCQUFULENBQTBCQyxZQUExQixFQUF3QztBQUM3QyxTQUFPQSxZQUFZLElBQUlBLFlBQVksS0FBSyxTQUFqQyxhQUFnREEsWUFBaEQsYUFBc0UsRUFBN0U7QUFDRCIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogUmV0dXJucyB0aGUgY2xhc3MgbmFtZSBmb3IgYSBnaXZlbiB0YXJnZXQgbGFuZ3VhZ2UgZm9udC5cbiAqIEBwYXJhbSB7c3RyaW5nfSBsYW5ndWFnZUZvbnQgLSBVc2VyIHNlbGVjdGVkIGZvbnQgZm9yIHRhcmdldCBMYW5ndWFnZS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldEZvbnRDbGFzc05hbWUobGFuZ3VhZ2VGb250KSB7XG4gIHJldHVybiBsYW5ndWFnZUZvbnQgJiYgbGFuZ3VhZ2VGb250ICE9PSAnZGVmYXVsdCcgPyBgJHtsYW5ndWFnZUZvbnR9LXRleHRgIDogJyc7XG59XG4iXX0=