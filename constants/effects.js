"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CSS_EFFECTS = void 0;

var _polished = require("polished");

var _colors = require("./colors");

/**
 * Build a set of default effects for the theme
 * NOTE: These effects are pure CSS transitions / effects, written in JS.
 *
 * @type {Object}
 */
var CSS_EFFECTS = {
  inputFocus: {
    '&:focus': {
      outline: 'none',
      borderColor: _colors.COLORS.PRIMARY,
      boxShadow: "inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px ".concat((0, _polished.rgba)(_colors.COLORS.PRIMARY, 0.6))
    }
  }
};
exports.CSS_EFFECTS = CSS_EFFECTS;