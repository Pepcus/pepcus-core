"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.normalizeSplitString = normalizeSplitString;

/**
 * Normalize a given `string` and split it up based on a given `strToSplitWith`.
 *
 * @method normalizeSplitString
 * @param  {string}             [str=null]             The string to normalize
 * @param  {string}             [strToReplace='']      The string to replace inside of the str
 * @param  {string}             [strToSplitWith='___'] The string to split the replaced str
 * @return {Array}                                     The list of normalized split strings
 */
function normalizeSplitString() {
  var str = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  var strToReplace = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  var strToSplitWith = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '___';
  // Build the regex with the `strToReplace`.
  var regex = new RegExp("(".concat(strToReplace, ")"), 'g'); // Replace and split the `str` based on the given regex,
  // then split it up based on the `strToSplitWith` string.

  return str ? String(str).replace(regex, '').split(strToSplitWith) : [];
}