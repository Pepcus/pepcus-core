"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _react = _interopRequireDefault(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _fromPairs2 = _interopRequireDefault(require("lodash/fromPairs"));

var _isEmpty2 = _interopRequireDefault(require("lodash/isEmpty"));

var _ngcomponent = _interopRequireDefault(require("ngcomponent"));

var _styledComponents = require("styled-components");

var _theme = require("../../utils/theme");

var _component = require("../../utils/component");

/* eslint-disable react/forbid-foreign-prop-types */

/**
 * Bind a React JS Component to an Angular 1.x Component
 *
 * NOTE: The React Component must have all of its `propTypes`
 * defined in order to have Angular create the correct bindings.
 *
 * @method bindToAngular
 * @param  {Component}       Component        The React Component to bind
 * @param  {Array}           [bindings=[]]    The list of extra props passesd down to the component
 * @param  {Array}           [injectables=[]] Angular $injectables
 * @param  {Object|Function} [theme={}]       A `theme` object or function to generate a `theme` obj
 * @return {Object}                           The Angular Component
 */
var bindToAngular = function bindToAngular(Component) {
  var bindings = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  var injectables = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
  var theme = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
  // Determine if we are dealing with a valid react element,
  // or a styled-component.
  // TODO: Replace external dependency helpers with internal functions.
  var isValid = (0, _component.isReactComponent)(Component); // If no valid React element / component is found, then return.

  if (!isValid) {
    return;
  } // Extract a list of the `Component` propTypes (keys).


  var propTypes = Component.propTypes && Object.keys(Component.propTypes) || []; // Build the Angular `bindings` for the component,
  // by concatenating the `Component` propTypes and
  // the extra bindings passed in via the `bindToAngular` func call.

  var ngBindings = [].concat(propTypes, bindings || []);
  /**
   * The new Angular Component class
   *
   * @class
   * @extends ngComponent
   */

  var Class =
  /*#__PURE__*/
  function (_ngComponent) {
    (0, _inherits2.default)(Class, _ngComponent);

    function Class($element) {
      var _this;

      for (var _len = arguments.length, injectedProps = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        injectedProps[_key - 1] = arguments[_key];
      }

      (0, _classCallCheck2.default)(this, Class);
      _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Class).call(this)); // Define the Angular $element.

      _this.$element = $element; // Extra props that'll be passed down to the React Component.

      _this.injectedProps = {}; // Build a default `theme`.

      _this.theme = {}; // Build those extra props.

      injectables.forEach(function (name, idx) {
        return _this.injectedProps[name] = injectedProps[idx];
      }); // Update the default `theme`.
      // If the theme depends on some Angular $injectables,
      // then we can transform the `theme` into a function and pass in
      // all of the added $injectables.

      if (typeof theme === 'function') {
        // The theme will be the output of the passed in function.
        var componentTheme = theme(_this.injectedProps); // Only update the `theme` if there is an object present, and it's not empty.

        _this.theme = (0, _typeof2.default)(componentTheme) === 'object' && !(0, _isEmpty2.default)(componentTheme) ? (0, _theme.generateTheme)(componentTheme) : (0, _theme.generateTheme)({});
      } else {
        // Use the passed in `theme`.
        _this.theme = (0, _theme.generateTheme)(theme);
      }

      return _this;
    }

    (0, _createClass2.default)(Class, [{
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        _reactDom.default.unmountComponentAtNode(this.$element[0]);
      }
    }, {
      key: "render",
      value: function render() {
        _reactDom.default.render(_react.default.createElement(_styledComponents.ThemeProvider, {
          theme: this.theme
        }, _react.default.createElement(Component, Object.assign({}, this.props, this.injectedProps))), this.$element[0]);
      }
    }], [{
      key: "$$ngIsClass",
      get: function get() {
        return true;
      }
    }]);
    return Class;
  }(_ngcomponent.default); // Build the Angular Component's controller.


  var controller = [].concat('$element', injectables || [], Class); // Return the Angular JS Component.

  return {
    // Attach each of the `Component` propTypes and the extra bindings,
    // as this Angular Component's bindings.
    bindings: (0, _fromPairs2.default)(ngBindings.map(function (name) {
      return [name, '<'];
    })),
    // Attach the controller defined above.
    controller: controller
  };
};

var _default = bindToAngular;
exports.default = _default;