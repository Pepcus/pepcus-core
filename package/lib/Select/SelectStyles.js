"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var _polished = require("polished");

var _colors = require("../../constants/colors");

var _theme = require("../../utils/theme");

/**
 * Generate styles for the `Select` input, based on the given `theme`.
 *
 * @method getSelectStyles
 * @param  {Object}        theme The theme from the `ThemeProvider`
 * @return {Object}              The updated styles for the `Select` input
 */
var getSelectStyles = function getSelectStyles(_ref) {
  var borderRadius = _ref.borderRadius,
      boxShadow = _ref.boxShadow,
      customMenuPosition = _ref.customMenuPosition,
      elevation = _ref.elevation,
      elevationDirection = _ref.elevationDirection,
      maxHeight = _ref.maxHeight,
      maxWidth = _ref.maxWidth,
      minControlHeight = _ref.minControlHeight,
      minWidth = _ref.minWidth,
      theme = _ref.theme,
      width = _ref.width;
  // Extract some colors from theme.
  var darkColor = (0, _theme.themeGet)("palette.common.dark")({
    theme: theme
  });
  var inputColor = (0, _theme.themeGet)("palette.common.input")({
    theme: theme
  });
  var inputDisabledColor = (0, _theme.themeGet)("palette.common.inputDisabled")({
    theme: theme
  });
  var lighterColor = (0, _theme.themeGet)("palette.common.lighter")({
    theme: theme
  });
  var placeholderColor = (0, _theme.themeGet)("palette.common.placeholder")({
    theme: theme
  }); // Lighten / Darken the colors.

  var disabledColor = (0, _polished.lighten)(0.075, inputDisabledColor);
  var hoverColor = (0, _polished.lighten)(0.04, inputDisabledColor); // Return the select styles

  return {
    input: function input(provided, state) {
      return (0, _objectSpread2.default)({}, provided, {
        color: inputColor,
        input: {
          height: 'auto !important'
        }
      });
    },
    option: function option(provided, state) {
      var isDisabled = state.isDisabled,
          isSelected = state.isSelected; // Return the updated styles for the `option`.

      return (0, _objectSpread2.default)({}, provided, {
        '&:active': {
          backgroundColor: inputDisabledColor
        },
        '&:hover': {
          backgroundColor: isDisabled ? disabledColor : isSelected ? null : hoverColor,
          cursor: isDisabled ? 'not-allowed' : 'pointer'
        },
        '&:last-of-type': {
          borderBottomWidth: 0
        },
        backgroundColor: isDisabled ? disabledColor : isSelected ? inputDisabledColor : 'transparent',
        borderBottomStyle: 'solid',
        borderBottomWidth: 1,
        borderColor: lighterColor,
        color: isDisabled ? (0, _polished.lighten)(0.5, darkColor) : inputColor,
        lineHeight: 1.5,
        minHeight: 38,
        transition: 'border-color 0.2s ease-in-out, background-color 0.2s ease-in-out'
      });
    },
    control: function control(provided, state) {
      var isFocused = state.isFocused,
          isDisabled = state.isDisabled; // Build the `focused` styles for the control.

      var focused = isFocused ? {
        outline: 'none',
        borderColor: _colors.COLORS.PRIMARY,
        boxShadow: "inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px ".concat((0, _polished.rgba)(_colors.COLORS.PRIMARY, 0.6))
      } : null; // Return the updated styles for the `control`.

      return (0, _objectSpread2.default)({}, provided, {
        maxWidth: maxWidth,
        minHeight: minControlHeight || state.theme.spacing.controlHeight,
        minWidth: minWidth,
        width: width,
        '&:hover': {
          borderColor: isFocused ? _colors.COLORS.PRIMARY : (0, _theme.themeGet)('palette.common.lighter')({
            theme: theme
          })
        },
        transition: 'border-color 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
        borderColor: (0, _theme.themeGet)('palette.common.lighter')({
          theme: theme
        }),
        borderRadius: borderRadius || '4px',
        backgroundColor: isDisabled ? _colors.COLORS.INPUT_DISABLED : provided.backgroundColor
      }, focused);
    },
    menu: function menu(provided, state) {
      return (0, _objectSpread2.default)({}, provided, {
        borderColor: (0, _theme.themeGet)("palette.common.lighter")({
          theme: theme
        }),
        borderRadius: borderRadius || '4px',
        borderStyle: 'solid',
        borderWidth: '1px',
        boxShadow: (0, _theme.themeGet)("shadows[".concat(elevationDirection, "][").concat(elevation, "]"), boxShadow)({
          theme: theme
        }),
        marginTop: 4,
        position: customMenuPosition || 'absolute'
      });
    },
    menuList: function menuList(provided, state) {
      return (0, _objectSpread2.default)({}, provided, {
        padding: 0,
        minHeight: 38,
        maxHeight: maxHeight || 300
      });
    },
    loadingMessage: function loadingMessage(provided, state) {
      return (0, _objectSpread2.default)({}, provided, {
        alignItems: 'center',
        display: 'flex',
        justifyContent: 'center',
        minHeight: 38
      });
    },
    noOptionsMessage: function noOptionsMessage(provided, state) {
      return (0, _objectSpread2.default)({}, provided, {
        alignItems: 'center',
        display: 'flex',
        justifyContent: 'center',
        minHeight: 38
      });
    },
    placeholder: function placeholder(provided, state) {
      return (0, _objectSpread2.default)({}, provided, {
        color: placeholderColor
      });
    },
    singleValue: function singleValue(provided, state) {
      return (0, _objectSpread2.default)({}, provided, {
        color: inputColor
      });
    }
  };
};

var _default = getSelectStyles;
exports.default = _default;