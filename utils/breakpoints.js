"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getBreakpointSize = exports.between = exports.down = exports.up = void 0;

var _breakpoints = require("../constants/breakpoints");

/**
 * Breakpoints for keys and above, i.e. min-width: 600px
 *
 * @method up
 * @param  {string} key The key to target for the breakpoint
 * @return {string}     The breakpoint string
 */
var up = function up(key) {
  // Check to see if the provided 'key' is a valid value or not,
  // if so then we will fetch it from the VALUES map, otherwise put it
  // in as a regular key (number). This helps catch custom values when needed.
  var val = typeof _breakpoints.VALUES[key] === 'number' ? _breakpoints.VALUES[key] : key;
  return "@media (min-width: ".concat(val).concat(_breakpoints.UNIT, ")");
};
/**
 * Breakpoints for key and below, i.e min-width: 599.98px
 *
 * @method down
 * @param  {string} key The key to target for the breakpoint
 * @return {string}     The breakpoint string
 */


exports.up = up;

var down = function down(key) {
  // Calculate the end index of the current key in the list of keys.
  var endIdx = _breakpoints.KEYS.indexOf(key) + 1; // Fetch the upper bound from the values map via the endIdx key.

  var upperBound = _breakpoints.VALUES[_breakpoints.KEYS[endIdx]]; // If the end index is the same as the keys length, then we have
  // reached the end of the keys list and there are no more keys
  // to go up to. Thus we will return the up('xs'), since
  // 'xl' and down applies to all keys, which outputs `@media (min-width: 0px)`

  if (endIdx === _breakpoints.KEYS.length) {
    return up('xs');
  } // Lastly, we will check to see if the upper bound is defined, valid, and the
  // index is greater than 0 (meaning the key exists), if so we will fetch
  // the value from the values map, otherwise we will put it in as the
  // requested key (number). This helps catch custom values when needed.


  var val = typeof upperBound === 'number' && endIdx > 0 ? upperBound : key;
  return "@media (max-width: ".concat(val - _breakpoints.STEP).concat(_breakpoints.UNIT, ")");
};
/**
 * Breakpoint for in between two keys, i.e. min-width: 600px and max-width: 959.98px
 *
 * @method between
 * @param  {string} start The start key to target for the breakpoint
 * @param  {string} end   The end key to target for the breakpoint
 * @return {string}       The breakpoint string
 */


exports.down = down;

var between = function between(start, end) {
  // Calculate the end index of the last (end) key in the list of keys.
  var endIdx = _breakpoints.KEYS.indexOf(end) + 1; // If the end index is the same as the keys length, then we have
  // reached the end of the keys list and there are no more keys
  // to go up to. Thus we will return the up(start).

  if (endIdx === _breakpoints.KEYS.length) {
    return up(start);
  } // Otherwise we will return the asked for between media query.


  return "@media (min-width: ".concat(_breakpoints.VALUES[start]).concat(_breakpoints.UNIT, ")") + " and " + "(max-width: ".concat(_breakpoints.VALUES[end] - _breakpoints.STEP).concat(_breakpoints.UNIT, ")");
};
/**
 * Get a specific breakpoint size from a given breakpoints map
 *
 * @method getBreakpointSize
 * @param  {string}          value    The value to extract size for
 * @param  {Object}          [map={}] The map of breakpoint values
 * @return {string}
 */


exports.between = between;

var getBreakpointSize = function getBreakpointSize(value) {
  var map = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  if (value in map) {
    return map[value];
  } else if (typeof value === 'number') {
    return value;
  }

  return '0';
};

exports.getBreakpointSize = getBreakpointSize;