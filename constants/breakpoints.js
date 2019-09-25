"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.STEP = exports.UNIT = exports.VALUES = exports.KEYS = void 0;

/**
 * List of responsive breakpoint keys in order.
 * i.e extra-small, small, medium, large, extra-large
 *
 * @type {Array}
 */
var KEYS = ['xs', 'sm', 'md', 'lg', 'xl'];
/**
 * Map of the responsive breakpoint keys along with their values
 *
 * @type {Object}
 */

exports.KEYS = KEYS;
var VALUES = {
  // NOTE: Values below have been taken from `sass/throne/bootstrap/_variables.scss` ng-app.
  xs: 0,
  sm: 480,
  md: 768,
  lg: 992,
  xl: 1200
}; // Old values
// export const VALUES = {
//     xs: 0,
//     sm: 600,
//     md: 960,
//     lg: 1280,
//     xl: 1920
// };
// Boostrap values
// export const VALUES = {
//   xs: 0,
//   sm: 576,
//   md: 768,
//   lg: 992,
//   xl: 1200
// }

/**
 * The units for computing the breakpoints
 *
 * @type {String}
 */

exports.VALUES = VALUES;
var UNIT = 'px';
/**
 * The steps to take when downshifting from breakpoints
 *
 * @type {Number}
 */

exports.UNIT = UNIT;
var STEP = 2 / 100;
exports.STEP = STEP;