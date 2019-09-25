"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.filterProps = exports.renderStyle = exports.css = void 0;

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

var _flatten2 = _interopRequireDefault(require("lodash/flatten"));

var _omitBy2 = _interopRequireDefault(require("lodash/omitBy"));

var _styledComponents = require("styled-components");

var _html = require("../constants/html");

var _theme = require("./theme");

function _templateObject3() {
  var data = (0, _taggedTemplateLiteral2.default)(["\n              ", ";\n          "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = (0, _taggedTemplateLiteral2.default)(["\n                          ", ";\n                      "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2.default)(["\n                              ", ";\n                          "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

/**
 * Valdate a given styled component's CSS property value.
 *
 * @method _checkValue
 * @private
 * @param  {Function} [checker=null] A function to check the validity of the value
 * @return {boolean}
 */
var _checkValue = function _checkValue() {
  var checker = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }

  return typeof checker === 'function' ? checker.apply(void 0, args) : true;
};
/**
 * Transform a given styled component's CSS property value.
 *
 * @method _transformValue
 * @private
 * @param  {Function}      [transform=null] A transformer function, MUST return a single templateString
 * @param  {string}        value            The CSS property value to transform and render
 * @param  {string}        name             The CSS property name
 * @return {string}
 */


var _transformValue = function _transformValue() {
  var transform = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  var value = arguments.length > 1 ? arguments[1] : undefined;
  var name = arguments.length > 2 ? arguments[2] : undefined;

  for (var _len2 = arguments.length, args = new Array(_len2 > 3 ? _len2 - 3 : 0), _key2 = 3; _key2 < _len2; _key2++) {
    args[_key2 - 3] = arguments[_key2];
  }

  return value && (typeof transform === 'function' ? transform.apply(void 0, [value, name].concat(args)) : "".concat(name, ": ").concat(value));
};
/**
 * A wrapper on top of styled-component's `css` helper,
 * helps with extra interpolations, if necessary.
 *
 * @method css
 * @param  {Array}         templateStringsList List of template strings
 * @param  {Interpolation} interpolations      Interpolations within templateStrings
 * @return {Array}                             The flattened css styles list
 */


var css = function css(templateStringsList) {
  for (var _len3 = arguments.length, interpolations = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
    interpolations[_key3 - 1] = arguments[_key3];
  }

  return (0, _flatten2.default)(_styledComponents.css.apply(void 0, [templateStringsList].concat(interpolations)));
};
/**
 * Render some allowed styles for the styled components.
 *
 * @method renderStyle
 * @param  {string}    [name='']             The name of the CSS style property
 * @param  {string}    [value='']            The CSS style value to check for and render
 * @param  {Object}    [theme={}]            The current theme
 * @param  {Function}  [valueCheck=null]     A function to check the validity of the value
 * @param  {Function}  [valueTransform=null] A function to transform the final output of the value
 * @return {Array}
 */


exports.css = css;

var renderStyle = function renderStyle() {
  var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var value = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  var theme = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var valueCheck = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
  var valueTransform = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : null;

  // If we have a value of type `object`,
  // we need to grab the current `breakpointValues`,
  // and add a `media` mixin for each of the asked for values.
  if (value != null && (0, _typeof2.default)(value) === 'object') {
    // Extract the breakpoint values from the current theme.
    var breakpointKeys = (0, _theme.getThemeProps)('breakpoints.keys', {}, {
      theme: theme
    });
    var breakpointValues = (0, _theme.getThemeProps)('breakpoints.values', {}, {
      theme: theme
    }); // Extract the `media` mixin from the theme.

    var media = (0, _theme.getThemeProps)('media', {}, {
      theme: theme
    }); // Sort the value keys in the order defined in the breakpoints.

    var sortedKeys = Object.keys(value).sort(function (a, b) {
      return breakpointKeys.indexOf(a) - breakpointKeys.indexOf(b);
    }); // We'll return a map of css properties.

    return sortedKeys.reduce(function (accum, key) {
      // Only accept breakpoint keys if they've been added to the
      // theme's `breakpoints.values`
      if (Object.hasOwnProperty.call(breakpointValues, key)) {
        // For `xs` type breakpoint, we don't need to use the `media` mixin.
        // CSS is mobile first.
        if (key === 'xs') {
          return _checkValue(valueCheck, value[key], name, theme) ? css(_templateObject(), _transformValue(valueTransform, value[key], name, theme)) : '';
        } // Otherwise, use the `media` mixin for the given breakpoint value.


        var query = _checkValue(valueCheck, value[key], name, theme) ? media.up(key)(_templateObject2(), _transformValue(valueTransform, value[key], name, theme)) : ''; // Add the CSS values to the accumulator.

        accum = [].concat((0, _toConsumableArray2.default)(accum), (0, _toConsumableArray2.default)(query));
      } // Return the accumulator.


      return accum;
    }, []);
  } // If value is not of type `object`,
  // let's check for it in the passed in `allowedList`,
  // if value is allowed, then let's render that style.


  return _checkValue(valueCheck, value, name, theme) ? css(_templateObject3(), _transformValue(valueTransform, value, name, theme)) : '';
};
/**
 * Filter the given props from appearing as element
 * attributes in the DOM tree.
 * This helps to avoid adding extraneous DOM attributes
 * (valid or invalid HTML element attributes)
 * when building a styled-component.
 *
 * @method filterProps
 * @param  {Object}    [props={}]      The current props of the component
 * @return {Object}                    The filtered props
 */


exports.renderStyle = renderStyle;

var filterProps = function filterProps() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return (0, _omitBy2.default)(props, function (value, key) {
    return !_html.VALID_ATTRIBUTES_LIST.includes(key);
  });
};

exports.filterProps = filterProps;