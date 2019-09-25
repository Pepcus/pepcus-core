"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.renderTypographyType = exports.renderPaletteColor = exports.renderRightOffset = exports.renderLeftOffset = exports.renderColumnGutter = exports.renderRowGutter = exports.renderCSSColSize = exports.renderTableCellSize = exports.verifyCSSColSize = exports.verifyCSSFlexOrder = exports.verifyCSSValueCurry = void 0;

var _theme = require("./theme");

/**
 * Calculate the width based on the given column count
 *
 * @method _calcWidth
 * @private
 * @param  {number}   width       The desired width
 * @param  {number}   columnCount The total number of column count
 * @return {number}
 */
var _calcWidth = function _calcWidth(width, columnCount) {
  return Math.round(width / columnCount * 10e6) / 10e4;
};
/**
 * Round the given `gutterWidth` to the nearest even number.
 * We need to round the `gutterWidth` to evenly space and spread the spacing
 * around the `<Row />` and `<Col />`.
 *
 * @method _roundGutterWidth
 * @private
 * @param  {number}          gutterWidth The current gutter width
 * @return {number}
 */


var _roundGutterWidth = function _roundGutterWidth(gutterWidth) {
  return 2 * Math.round(gutterWidth / 2);
};
/**
 * Verify a CSS valule exists within a given list of allowed values, via a 'curry' fn.
 *
 * @method verifyCSSValueCurry
 * @param  {Array}             allowedList The list of allowed values
 * @return {Function}
 */


var verifyCSSValueCurry = function verifyCSSValueCurry(allowedList) {
  return function (value) {
    return allowedList.includes(value);
  };
};
/**
 * Verify a given CSS value for the 'flex-order' property.
 *
 * @method verifyCSSFlexOrder
 * @param  {string}           value The value to verify
 * @return {boolean}
 */


exports.verifyCSSValueCurry = verifyCSSValueCurry;

var verifyCSSFlexOrder = function verifyCSSFlexOrder(value) {
  return Boolean(!Number.isNaN(value) && typeof value === 'number');
};
/**
 * Verify a given CSS column size, based on the defined `columnCount`
 *
 * @method verifyCSSColSize
 * @param  {string}         value The CSS value to verify
 * @param  {string}         name  The CSS property name
 * @param  {Object}         theme The current theme
 * @return {boolean}
 */


exports.verifyCSSFlexOrder = verifyCSSFlexOrder;

var verifyCSSColSize = function verifyCSSColSize(value, name, theme) {
  // Extract the defined colum count from the theme
  var columnCount = (0, _theme.getThemeProps)('grid.columns', 12, {
    theme: theme
  }); // If the value is a number, then:
  // 1. Should be greater than `1`.
  // 2. Should be less than the defined `columnCount` or `12`.

  if (typeof value === 'number' && !Number.isNaN(value)) {
    return Boolean(value >= 1 && value <= columnCount);
  } // The value is either a `string` or a `boolean` value.


  return typeof value === 'string' || typeof value === 'boolean';
};
/**
 * Calculate the CSS table cell size based on the given `columnCount` from the theme.
 *
 * @method renderTableCellSize
 * @param  {string}            value The CSS value to check
 * @param  {string}            name  The CSS property name (not needed for this method)
 * @param  {Object}            theme The current theme
 * @return {string}
 */


exports.verifyCSSColSize = verifyCSSColSize;

var renderTableCellSize = function renderTableCellSize(value, name, theme) {
  // Extract the defined column count from the theme.
  var columnCount = (0, _theme.getThemeProps)('grid.columns', 12, {
    theme: theme
  }); // Determine the styles when sizing the table.

  if (typeof value === 'number' && value <= columnCount) {
    // Round to the significant 6 numbers.
    var width = "".concat(_calcWidth(value, columnCount), "%"); // Determine the styles for the numerical table size.

    return "\n            width: ".concat(width, ";\n        ");
  } else if (typeof value === 'number') {
    return "\n            width: ".concat(value, "px;\n        ");
  } else if (typeof value === 'string') {
    return "\n            width: ".concat(value, ";\n        ");
  } // Return empty string otherwise.


  return '';
};
/**
 * Calculate the CSS column size based on the given `columnCount` from the theme.
 *
 * @method renderCSSColSize
 * @param  {string}         value The CSS value to check
 * @param  {string}         name  The CSS property name (not needed for this method)
 * @param  {Object}         theme The current theme
 * @return {string}
 */


exports.renderTableCellSize = renderTableCellSize;

var renderCSSColSize = function renderCSSColSize(value, name, theme) {
  // Extract the defined column count from the theme.
  var columnCount = (0, _theme.getThemeProps)('grid.columns', 12, {
    theme: theme
  }); // Determine the styles when sizing the column.

  if (value === '*') {
    return "\n            flex-basis: 0;\n            flex-grow: 1;\n            max-width: 100%;\n        ";
  } // Determine the styles for setting the column size to `auto`.


  if (value === 'auto') {
    return "\n            flex-basis: auto;\n            flex-grow: 0;\n            max-width: none;\n        ";
  } // Determine the defined numerical column size.


  if (typeof value === 'number') {
    // Round to the significant 6 numbers.
    var width = "".concat(_calcWidth(value, columnCount), "%"); // Determine the styles for the numerical column size.

    return "\n            flex-basis: ".concat(width, ";\n            flex-grow: 0;\n            max-width: ").concat(width, ";\n        ");
  } // Pass in a string value, useful for '50%' type values.


  if (typeof value === 'string') {
    return "\n            flex-basis: ".concat(value, ";\n            flex-grow: 0;\n            max-width: ").concat(value, ";\n        ");
  } // Return empty string otherwise.


  return '';
};
/**
 * Render a gutter for the `Row`
 *
 * @method renderRowGutter
 * @param  {string}        value The CSS value to render
 * @param  {string}        name  The CSS property name
 * @param  {Object}        theme The current theme
 * @return {string}
 */


exports.renderCSSColSize = renderCSSColSize;

var renderRowGutter = function renderRowGutter(value, name, theme) {
  var gutterWidth = _roundGutterWidth((0, _theme.getThemeProps)('grid.gutterWidth', 0, {
    theme: theme
  }));

  return "\n        margin-left: -".concat(gutterWidth / 2, "px;\n        margin-right: -").concat(gutterWidth / 2, "px;\n    ");
};
/**
 * Render a gutter for the `Col`
 *
 * @method renderColumnGutter
 * @param  {string}           value The CSS value to render
 * @param  {string}           name  The CSS property name
 * @param  {Object}           theme The current theme
 * @return {string}
 */


exports.renderRowGutter = renderRowGutter;

var renderColumnGutter = function renderColumnGutter(value, name, theme) {
  var gutterWidth = _roundGutterWidth((0, _theme.getThemeProps)('grid.gutterWidth', 0, {
    theme: theme
  }));

  return "\n        padding-left: ".concat(gutterWidth / 2, "px;\n        padding-right: ").concat(gutterWidth / 2, "px;\n    ");
};
/**
 * Render a left offset for a styled component
 *
 * @method renderLeftOffset
 * @param  {string}         value The CSS value to render
 * @param  {string}         name  The CSS property name
 * @param  {Object}         theme The current theme
 * @return {string}
 */


exports.renderColumnGutter = renderColumnGutter;

var renderLeftOffset = function renderLeftOffset(value, name, theme) {
  // Extract the defined column count from the theme.
  var columnCount = (0, _theme.getThemeProps)('grid.columns', 12, {
    theme: theme
  }); // Only render an offset if the value is a `number`,
  // and less than the given `columnCount`.

  if (typeof value === 'number' && value <= columnCount) {
    return "\n            margin-left: ".concat(_calcWidth(value, columnCount), "%;\n        ");
  } // Return an empty string otherwise.


  return '';
};
/**
 * Render a right offset for a styled component
 *
 * @method renderRightOffset
 * @param  {string}          value The CSS value to render
 * @param  {string}          name  The CSS property name
 * @param  {Object}          theme The current theme
 * @return {string}
 */


exports.renderLeftOffset = renderLeftOffset;

var renderRightOffset = function renderRightOffset(value, name, theme) {
  // Extract the defined column count from the theme.
  var columnCount = (0, _theme.getThemeProps)('grid.columns', 12, {
    theme: theme
  }); // Only render an offset if the value is a `number`,
  // and less than the given `columnCount`.

  if (typeof value === 'number' && value <= columnCount) {
    return "\n            margin-right: ".concat(_calcWidth(value, columnCount), "%;\n        ");
  } // Return an empty string otherwise.


  return '';
};
/**
 * Render a color from the palette for a styled-component
 *
 * @method renderPaletteColor
 * @param  {string}           cssProperty The css property name
 * @param  {string}           paletteKey  The key for the paletee.${key}
 * @return {Function}
 */


exports.renderRightOffset = renderRightOffset;

var renderPaletteColor = function renderPaletteColor(cssProperty, paletteKey) {
  return function (value, name, theme) {
    // Extract the color from the theme palette.
    var color = (0, _theme.getThemeProps)("palette.".concat(value, ".").concat(paletteKey), value, {
      theme: theme
    }); // Only return the found color if `cssProperty` is present.

    if (cssProperty) {
      return "\n        ".concat(cssProperty, ": ").concat(color, ";\n    ");
    } // Return an empty string otherwise.


    return '';
  };
};
/**
 * Render a typographic style for a styled-component
 *
 * @method renderTypographyType
 * @param  {string}             value The CSS value to render
 * @param  {string}             name  The CSS property name
 * @param  {Object}             theme The current theme
 * @return {string}
 */


exports.renderPaletteColor = renderPaletteColor;

var renderTypographyType = function renderTypographyType(value, name, theme) {
  // Extract the typography styles from the theme.
  var type = (0, _theme.getThemeProps)("typography.".concat(value), null, {
    theme: theme
  }); // If the styles and value are present.

  if (type && value) {
    return type;
  } // Return an empty string otherwise.


  return '';
};

exports.renderTypographyType = renderTypographyType;