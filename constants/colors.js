"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PALETTE = exports.COLORS = void 0;

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var _polished = require("polished");

/**
 * Define a set of ROOT_COLORS,
 * that the rest of the colors will be built off of.
 *
 * @type {Object}
 */
var ROOT_COLORS = {
  AZURE: '#1E95EE',
  BLACK: '#000000',
  DARK: '#2D2D2D',
  DARKER: '#1A1A1A',
  ERROR: '#E62C14',
  FOCUS: (0, _polished.rgba)('#1E95EE', 0.5),
  GOLD: '#DFBB0B',
  INPUT: '#1E1E1E',
  // => darken(0.8, '#EAEAEA'),
  INPUT_DISABLED: '#E1E5E9',
  LIGHT: '#7F8FA4',
  LIGHTER: '#E6EAEE',
  LIGHT_2: '#A6B3BE',
  MUTED: '#EAEAEA',
  ORCHID: '#B86DC9',
  PLACEHOLDER: '#9E9E9E',
  // => darken(0.3, '#EAEAEA'),
  PRE_ADDED: '#6BDFB8',
  PRE_DELETED: '#FF8983',
  PRIMARY: '#114E8F',
  SECONDARY: '#2DA1F8',
  SUCCESS: '#2DA438',
  TEXT: '#848484',
  TOOLBAR: '#F4F7F9',
  WARNING: '#F57F17',
  // from the old thr apps
  // WARNING       : '#F76B1C', // ravenjs
  WHITE: '#FFFFFF'
};
/**
 * Define a set of default colors for the theme,
 * built on the ROOT_COLORS defined above.
 *
 * @type {Object}
 */

var COLORS = (0, _objectSpread2.default)({}, ROOT_COLORS, {
  ACTIVE: (0, _polished.rgba)(ROOT_COLORS.BLACK, 0.54),
  DISABLED: (0, _polished.rgba)(ROOT_COLORS.BLACK, 0.26),
  DISABLED_BG: (0, _polished.rgba)(ROOT_COLORS.BLACK, 0.12),
  // DIVIDER           : rgba(ROOT_COLORS.BLACK, 0.2),
  DIVIDER: ROOT_COLORS.MUTED,
  HOVER: (0, _polished.rgba)(ROOT_COLORS.BLACK, 0.08),
  SELECTED: (0, _polished.rgba)(ROOT_COLORS.BLACK, 0.14),
  TEXT_DARK: (0, _polished.darken)(0.3, ROOT_COLORS.MUTED),
  PRIMARY_GRADIENT: "linear-gradient(to top, ".concat(ROOT_COLORS.PRIMARY, ", #0C60A1)"),
  SECONDARY_GRADIENT: "linear-gradient(to top, #1991EB, ".concat(ROOT_COLORS.SECONDARY, ")"),
  WARNING_GRADIENT: "linear-gradient(to bottom, #F9AB44, #F9AB44 1%, ".concat(ROOT_COLORS.WARNING, ")"),
  ERROR_GRADIENT: "linear-gradient(to bottom, #CE1C32, #FF5267 1%, ".concat(ROOT_COLORS.ERROR, ")"),
  SUCCESS_GRADIENT: "linear-gradient(to bottom, ".concat((0, _polished.lighten)(0.2, ROOT_COLORS.SUCCESS), ", ").concat(ROOT_COLORS.SUCCESS, ")"),
  LIGHT_GRADIENT: "linear-gradient(to bottom, ".concat(ROOT_COLORS.LIGHT, ", ").concat((0, _polished.darken)(0.2, ROOT_COLORS.LIGHT), ")"),
  PAGINATION_BUTTON_GRADIENT: "linear-gradient(to top, #f2f4f7, #ffffff)"
});
/**
 * Define the theme's color palette,
 * built on the COLORS defined above.
 *
 * @type {Object}
 */

exports.COLORS = COLORS;
var PALETTE = {
  COLORS: COLORS,
  action: {
    active: COLORS.ACTIVE,
    disabled: COLORS.DISABLED,
    disabledBackground: COLORS.DISABLED_BG,
    hover: COLORS.HOVER,
    hoverOpacity: 0.08,
    selected: COLORS.SELECTED
  },
  background: {
    color: '#E1E5E9',
    white: COLORS.WHITE
  },
  common: {
    black: COLORS.BLACK,
    dark: COLORS.DARK,
    darker: COLORS.DARKER,
    divider: COLORS.DIVIDER,
    input: COLORS.INPUT,
    inputDisabled: COLORS.INPUT_DISABLED,
    light: COLORS.LIGHT,
    lighter: COLORS.LIGHTER,
    placeholder: COLORS.PLACEHOLDER,
    toolbar: COLORS.TOOLBAR,
    white: COLORS.WHITE
  },
  primary: {
    color: COLORS.PRIMARY,
    dark: (0, _polished.darken)(0.3, COLORS.PRIMARY),
    light: (0, _polished.lighten)(0.2, COLORS.PRIMARY),
    text: COLORS.WHITE,
    gradientColor: COLORS.PRIMARY_GRADIENT,
    borderColor: COLORS.PRIMARY
  },
  secondary: {
    color: COLORS.SECONDARY,
    dark: (0, _polished.darken)(0.3, COLORS.PRIMARY),
    light: (0, _polished.lighten)(0.2, COLORS.PRIMARY),
    text: COLORS.WHITE,
    gradientColor: COLORS.SECONDARY_GRADIENT,
    borderColor: COLORS.SECONDARY
  },
  error: {
    color: COLORS.ERROR,
    dark: (0, _polished.darken)(0.3, COLORS.ERROR),
    light: (0, _polished.lighten)(0.2, COLORS.ERROR),
    text: COLORS.WHITE,
    gradientColor: COLORS.ERROR_GRADIENT,
    borderColor: COLORS.ERROR
  },
  warning: {
    color: COLORS.WARNING,
    dark: (0, _polished.darken)(0.3, COLORS.WARNING),
    light: (0, _polished.lighten)(0.2, COLORS.WARNING),
    text: COLORS.WHITE,
    gradientColor: COLORS.WARNING_GRADIENT,
    borderColor: COLORS.WARNING
  },
  success: {
    color: COLORS.SUCCESS,
    dark: (0, _polished.darken)(0.3, COLORS.SUCCESS),
    light: (0, _polished.lighten)(0.2, COLORS.SUCCESS),
    text: COLORS.WHITE,
    gradientColor: COLORS.SUCCESS_GRADIENT,
    borderColor: COLORS.SUCCESS
  },
  dark: {
    color: COLORS.BLACK,
    dark: (0, _polished.darken)(0.3, COLORS.BLACK),
    light: (0, _polished.lighten)(0.2, COLORS.BLACK),
    text: COLORS.WHITE,
    gradientColor: COLORS.BLACK,
    borderColor: COLORS.BLACK
  },
  light: {
    color: COLORS.LIGHT,
    dark: (0, _polished.darken)(0.3, COLORS.LIGHT),
    light: (0, _polished.lighten)(0.2, COLORS.LIGHT),
    text: COLORS.WHITE,
    gradientColor: COLORS.LIGHT_GRADIENT,
    borderColor: COLORS.LIGHT
  },
  white: {
    color: COLORS.WHITE,
    dark: (0, _polished.darken)(0.3, COLORS.WHITE),
    light: COLORS.WHITE,
    text: COLORS.DARK,
    gradientColor: COLORS.WHITE,
    borderColor: '#DDE1EF'
  },
  link: {
    color: COLORS.PRIMARY,
    dark: (0, _polished.darken)(0.3, COLORS.PRIMARY),
    light: (0, _polished.lighten)(0.2, COLORS.PRIMARY),
    text: COLORS.WHITE,
    gradientColor: COLORS.PRIMARY_GRADIENT,
    borderColor: COLORS.PRIMARY
  },
  muted: {
    color: COLORS.MUTED,
    dark: (0, _polished.darken)(0.3, COLORS.MUTED),
    light: (0, _polished.lighten)(0.2, COLORS.MUTED),
    text: COLORS.TEXT,
    gradientColor: COLORS.MUTED,
    borderColor: COLORS.MUTED
  },
  actions: {
    text: COLORS.DARK,
    gradientColor: '#FAFAFA',
    color: COLORS.PRIMARY_GRADIENT,
    hoverColor: COLORS.WHITE,
    borderColor: COLORS.MUTED
  },
  checkbox: {
    color: COLORS.PRIMARY
  },
  paginationButton: {
    text: COLORS.LIGHT,
    gradientColor: COLORS.PAGINATION_BUTTON_GRADIENT,
    color: COLORS.PRIMARY_GRADIENT,
    hoverColor: COLORS.WHITE,
    borderColor: COLORS.MUTED
  },
  text: {
    color: COLORS.TEXT,
    dark: COLORS.DARK,
    darker: COLORS.DARKER,
    light: COLORS.LIGHT,
    lighter: COLORS.LIGHTER
  },
  advancedSearch: {
    color: (0, _polished.lighten)(0.15, COLORS.TEXT),
    dark: (0, _polished.darken)(0.3, COLORS.MUTED),
    light: (0, _polished.lighten)(0.2, COLORS.MUTED),
    text: COLORS.TEXT,
    gradientColor: COLORS.MUTED,
    borderColor: COLORS.MUTED
  },
  policyNew: {
    color: '#F57F17'
  },
  policyMuted: {
    color: '#f5f5f5'
  },
  policy: {
    color: '#f5f5f5',
    link: '#1577C6'
  },
  errorAlert: {
    borderColor: '#f5c6cb',
    backgroundColor: '#f8d7da',
    color: '#721c24'
  }
};
exports.PALETTE = PALETTE;