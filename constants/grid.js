"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GRID = exports.FLEX_WRAP = exports.FLEX_DIRECTION = exports.ALIGN_SELF = exports.ALIGN_CONTENT = exports.ALIGN_ITEMS = exports.JUSTIFY_CONTENT = exports.DISPLAY = exports.GUTTER = exports.GRID_SIZES = void 0;

/**
 * The default grid sizes, to be merged with 'XX' number of columns chosen by theme
 *
 * @type {Array}
 */
var GRID_SIZES = ['auto', true];
/**
 * Map of the responsive breakpoint keys along with their gutter values
 *
 * @type {Object}
 */

exports.GRID_SIZES = GRID_SIZES;
var GUTTER = {
  xs: '10px',
  sm: '10px',
  md: '20px',
  lg: '20px',
  xl: '20px'
};
/**
 * List of available css display values
 *
 * @type {Array}
 */

exports.GUTTER = GUTTER;
var DISPLAY = ['block', 'inline', 'table', 'flex', 'grid', 'none', 'inline-block', 'inline-flex', 'inline-grid'];
/**
 * List of available css 'justify-content' values
 *
 * @type {Array}
 */

exports.DISPLAY = DISPLAY;
var JUSTIFY_CONTENT = ['center', 'flex-end', 'flex-start', 'normal', 'space-around', 'space-between', 'space-evenly'];
/**
 * List of available css 'align-items' values
 *
 * @type {Array}
 */

exports.JUSTIFY_CONTENT = JUSTIFY_CONTENT;
var ALIGN_ITEMS = ['baseline', 'center', 'flex-end', 'flex-start', 'normal', 'stretch'];
/**
 * List of available css 'align-content' values
 *
 * @type {Array}
 */

exports.ALIGN_ITEMS = ALIGN_ITEMS;
var ALIGN_CONTENT = ['center', 'end', 'flex-end', 'flex-start', 'normal', 'start', 'stretch'];
/**
 * List of available css 'align-content' values
 *
 * @type {Array}
 */

exports.ALIGN_CONTENT = ALIGN_CONTENT;
var ALIGN_SELF = ['baseline', 'center', 'flex-end', 'flex-start', 'normal', 'stretch'];
/**
 * List of available css 'flex-direction' values
 *
 * @type {Array}
 */

exports.ALIGN_SELF = ALIGN_SELF;
var FLEX_DIRECTION = ['row', 'row-reverse', 'column', 'column-reverse'];
/**
 * List of available css 'flex-wrap' values
 *
 * @type {Array}
 */

exports.FLEX_DIRECTION = FLEX_DIRECTION;
var FLEX_WRAP = ['nowrap', 'wrap', 'wrap-reverse'];
/**
 * Define the set of grid properties for the theme.
 *
 * @type {Object}
 */

exports.FLEX_WRAP = FLEX_WRAP;
var GRID = {
  columns: 12,
  gutterWidth: 15,
  spacing: 8
};
exports.GRID = GRID;