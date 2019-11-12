"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.THEME = exports.createBreakpoints = void 0;

var _shadows = require("../utils/shadows");

var _transitions = require("../utils/transitions");

var _media = require("../utils/media");

var _breakpoints = require("./breakpoints");

var _colors = require("./colors");

var _effects = require("./effects");

var _grid = require("./grid");

var _typography = require("./typography");

/**
 * Create breakpoints for the current theme
 *
 * @method createBreakpoints
 * @return {Object}          The map containing all of the breakpoint functions and values.
 */
var createBreakpoints = function createBreakpoints() {
  return {
    keys: _breakpoints.KEYS,
    unit: _breakpoints.UNIT,
    values: _breakpoints.VALUES
  };
};
/**
 * The default theme for the application
 *
 * @type {Object}
 */


exports.createBreakpoints = createBreakpoints;
var THEME = {
  // build the breakpoints and its utilities
  breakpoints: createBreakpoints(),
  // define the set of default colors
  colors: _colors.COLORS,
  // build the CSS in JS transitions / effects
  effects: _effects.CSS_EFFECTS,
  // build the grid properties
  grid: _grid.GRID,
  // build the media utilities
  media: (0, _media.generateMedia)(),
  // build the color palette
  palette: _colors.PALETTE,
  // build the transitions utilities
  transitions: (0, _transitions.createTransitions)(),
  // build the typographic styles
  typography: _typography.TYPOGRAPHY,
  // build the shadows
  shadows: (0, _shadows.createDirectionalShadows)(),
  DescriptionField: {
    styles: {
      root: {
        padding: '0 0 5px',
        borderBottom: "1px solid ".concat(_colors.COLORS.DIVIDER),
        marginBottom: '10px !important'
      }
    }
  },
  TitleField: {
    styles: {
      root: {
        color: _colors.COLORS.BLACK,
        fontSize: '20px',
        marginLeft: 0
      }
    }
  },
  TableRow: {
    styles: {
      backgroundColor: _colors.COLORS.WHITE,
      selected: {
        backgroundColor: '#E1E5E9'
      },
      zebra: {
        backgroundColor: '#FAFAFA'
      }
    }
  },
  TableCell: {
    styles: {
      portrait: {
        display: 'flex !important',
        '&:first-of-type': {
          borderTop: 'none'
        }
      }
    },
    body: {
      styles: {}
    },
    head: {
      styles: {
        backgroundColor: '#f5f8fa',
        borderTop: 'none',
        color: '#6C8193',
        fontSize: '14px',
        padding: '10px'
      }
    },
    sortable: {
      styles: {
        backgroundColor: '#f5f8fa',
        borderTop: 'none',
        color: '#6C8193',
        cursor: 'pointer',
        fontSize: '14px',
        padding: '10px'
      }
    }
  }
};
exports.THEME = THEME;