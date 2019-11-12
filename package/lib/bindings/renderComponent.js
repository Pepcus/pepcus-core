"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

/**
 * Render a simple react component to the given selector.
 * TODO: Add styled-components theme, redux, etc., when needed.
 *
 * @method renderComponent
 * @param  {Component}       Component The component to render
 * @param  {Object}          props     The properties to pass to the rendered Component
 * @param  {string}          selector  The ID selector used to find the DOM node for the Component
 */
var renderComponent = function renderComponent(Component, props, selector) {
  // The target can be a string, in that case we will use the
  // `document.getElementById()` to grab it, otherwise if
  // the use passed in an actual DOM node then use that node.
  var target = typeof selector === 'string' ? document.getElementById(selector) : selector; // Render the requested component.

  _reactDom.default.render(_react.default.createElement(Component, props), target);
};

var _default = renderComponent;
exports.default = _default;