"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getMergedThemeFromSchema = exports.generateTheme = exports.themeGet = exports.getThemeProps = void 0;

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

var _get2 = _interopRequireDefault(require("lodash/get"));

var _isEmpty2 = _interopRequireDefault(require("lodash/isEmpty"));

var _theme = require("../constants/theme");

var _merge = require("./merge");

/**
 * Get the value for a given theme path from props or default `THEME`
 *
 * @method _getValue
 * @param  {string}  path     The path to extract the value from
 * @param  {Any}     fallback The default value
 * @param  {Object}  props    The component's props
 * @return {Any}              The extracted value or interpolated function
 */
var _getValue = function _getValue(path, fallback, props) {
  // Extract the value from the given props.
  var valueFromProps = (0, _get2.default)(props, "theme.".concat(path), fallback); // Extract the value from the default `THEME`.

  var valueFromTheme = (0, _get2.default)(_theme.THEME, path, fallback); // Build the final value, checking to see if we have a
  // zero value '0' or empty string '' or any valid value (non null),
  // otherwise falling back to the valueFromTheme.

  var finalValue = valueFromProps || valueFromProps === 0 || valueFromProps === '' ? valueFromProps : valueFromTheme; // If the `finalValue` is an object and is empty,
  // then we want to default it back to the values from the default `THEME`.

  if ((0, _typeof2.default)(finalValue) === 'object' && (0, _isEmpty2.default)(finalValue)) {
    finalValue = valueFromTheme;
  } // Return the final value


  return finalValue;
};
/**
 * Get the theme props for a styled component.
 * Returns the value of `props.theme[path]` or the provided `fallback`.
 * If `props` argument is present, then it will extract the `path` from the props,
 * otherwise, it will return an interpolated `${props => {}}` function.
 *
 * @method getThemeProps
 * @param  {string}      [path='']       The path to extract the value from
 * @param  {Any}         [fallback=null] The default value
 * @param  {Object}      [props={}]      The component's props
 * @return {Any}                         The extracted value or interpolated function
 */


var getThemeProps = function getThemeProps() {
  var path = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var fallback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  var props = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

  // If no props are passed in, then we will return an
  // interpolated function, similar to that of styled-components,
  // which will try to extract the value from the current component props.
  if ((0, _isEmpty2.default)(props)) {
    return function (componentProps) {
      return _getValue(path, fallback, componentProps);
    };
  } // If props are available, then we will use them to extract the requested value.


  return _getValue(path, fallback, props);
};
/**
 * Get the value of a given props from the current component's theme.
 * Returns the value of `props.theme[path]` or the provided `fallback`.
 *
 * @method themeGet
 * @param  {string}   [path='']       The path to extract the value from
 * @param  {Any}      [fallback=null] The default value
 * @return {Function}
 */


exports.getThemeProps = getThemeProps;

var themeGet = function themeGet() {
  var path = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var fallback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  return function () {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref$theme = _ref.theme,
        theme = _ref$theme === void 0 ? _theme.THEME : _ref$theme;

    return _getValue(path, fallback, {
      theme: theme
    });
  };
};
/**
 * Theme helper, merges the default theme with the application provided theme.
 *
 * @method generateTheme
 * @param  {Object}      [theme={}] The provided theme
 * @return {Object}                 The merged theme
 */


exports.themeGet = themeGet;

var generateTheme = function generateTheme() {
  var theme = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return (0, _merge.mergeObjects)(_theme.THEME, theme);
};
/**
 * Theme helper, meges the theme from the `props` and `props.schema`.
 *
 * @method getMergedThemeFromSchema
 * @param  {Object}                 props The component's props
 * @return {Object}                       The updated theme
 */


exports.generateTheme = generateTheme;

var getMergedThemeFromSchema = function getMergedThemeFromSchema(props) {
  // Extract the theme out of the passed in props.
  var propsTheme = (0, _get2.default)(props, 'theme', {}); // Extract the theme out of the passed in schema.

  var schemaTheme = (0, _get2.default)(props, 'schema.theme', {}); // Merge the two themes, overwriting any array values where present.

  return (0, _merge.mergeObjects)(propsTheme, schemaTheme);
};

exports.getMergedThemeFromSchema = getMergedThemeFromSchema;