"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.media = exports.generateMedia = void 0;

var _styledComponents = require("styled-components");

var _breakpoints = require("../constants/breakpoints");

var _breakpoints2 = require("./breakpoints");

/**
 * Generate multiple media templates for styled-component's css.
 *
 * @method generateMedia
 * @param  {Object}      [breakpoints=VALUES] A map of breakpoint values
 * @return {Object}
 */
var generateMedia = function generateMedia() {
  var breakpoints = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _breakpoints.VALUES;

  /**
   * Breakpoint for a size and below, i.e. max-width: 640px
   *
   * @method down
   * @param  {string} key The key to target for the breakpoint
   * @return {Array}
   */
  var down = function down(key) {
    return function () {
      return (0, _styledComponents.css)(["@media (max-width:", "", "){", ";}"], (0, _breakpoints2.getBreakpointSize)(key, breakpoints) - 0.02, _breakpoints.UNIT, _styledComponents.css.apply(void 0, arguments));
    };
  };
  /**
   * Breakpoint for a size and above, i.e. min-width: 641px
   *
   * @method up
   * @param  {string} key The key to target for the breakpoint
   * @return {Array}
   */


  var up = function up(key) {
    return function () {
      return (0, _styledComponents.css)(["@media (min-width:", "", "){", ";}"], (0, _breakpoints2.getBreakpointSize)(key, breakpoints), _breakpoints.UNIT, _styledComponents.css.apply(void 0, arguments));
    };
  };
  /**
   * Breakpint for in-between two keys, i.e. min-width: 641px and max-width: 768px
   *
   * @method between
   * @param  {string} start The start key to target for the breakpoint
   * @param  {string} end   The end key to target for the breakpoint
   * @return {Array}
   */


  var between = function between(start, end) {
    return function () {
      return (0, _styledComponents.css)(["@media ( min-width:", "", " and max-width:", "", " ){", "}"], (0, _breakpoints2.getBreakpointSize)(start, breakpoints), _breakpoints.UNIT, (0, _breakpoints2.getBreakpointSize)(end, breakpoints) - 0.02, _breakpoints.UNIT, _styledComponents.css.apply(void 0, arguments));
    };
  }; // Return the 3 tagged template literal functions


  return {
    between: between,
    down: down,
    up: up
  };
};
/**
 * A helper object with already generated media templates, based on default theme.
 *
 * @type {Object}
 */


exports.generateMedia = generateMedia;
var media = generateMedia(_breakpoints.VALUES);
exports.media = media;