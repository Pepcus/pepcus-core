"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.canUseDOM = exports.getAnchorEl = exports.getContainer = exports.getDocumentOwner = exports.isReactComponent = exports.isFunctionalComponent = exports.isDOMTypeComponent = exports.isStyledComponent = exports.isClassComponent = void 0;

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

var _reactDom = require("react-dom");

var _styledComponents = require("styled-components");

/* eslint-disable react/no-find-dom-node */

/**
 * Determine if the Component is a React Class Component
 *
 * @method isClassComponent
 * @param  {Component}       Component The Component to check
 * @return {boolean}
 */
var isClassComponent = function isClassComponent(Component) {
  return Boolean(Component && Component.prototype && typeof Component.prototype.render === 'function');
};
/**
 * Determine of the Component is a Styled-Component.
 * Fallbacks to the `isStyledComponent` from 'styled-components'.
 *
 * @method isStyledComponent
 * @param  {Component}        Component The Component to check
 * @return {boolean}
 */


exports.isClassComponent = isClassComponent;
var isStyledComponent = _styledComponents.isStyledComponent;
/**
 * Determine if the Component is a React Element and HTML DOM type.
 * i.e. 'div', 'hr', 'p', 'h3', etc.
 *
 * @method isDOMTypeComponent
 * @param  {Component}  Component The Component to check
 * @return {boolean}
 */

exports.isStyledComponent = isStyledComponent;

var isDOMTypeComponent = function isDOMTypeComponent(Component) {
  return Boolean(typeof Component === 'string' && !Component.prototype);
};
/**
 * Determine if the Component is a React Element and a Composite (Functional) Component.
 * i.e. const Button = ({ width }) => <button width={width}>Hello</button>;
 *
 * @method isFunctionalComponent
 * @param  {Component}     Component The Component to check
 * @return {boolean}
 */


exports.isDOMTypeComponent = isDOMTypeComponent;

var isFunctionalComponent = function isFunctionalComponent(Component) {
  return Boolean(typeof Component === 'function' && !Component.prototype.render);
};
/**
 * Determine if the Component is a React Component,
 * functional, styled, or Class component
 *
 * @method isReactComponent
 * @param  {Component}  Component The Component to check
 * @return {boolean}
 */


exports.isFunctionalComponent = isFunctionalComponent;

var isReactComponent = function isReactComponent(Component) {
  return Boolean(isFunctionalComponent(Component) || isStyledComponent(Component) || isClassComponent(Component));
};
/**
 * Get the top-level `document` object for the given node.
 *
 * @see    {@link https://developer.mozilla.org/en-US/docs/Web/API/Node/ownerDocument}
 * @method getDocumentOwner
 * @param  {node}            node The node the document object for
 * @return {any}
 */


exports.isReactComponent = isReactComponent;

var getDocumentOwner = function getDocumentOwner(node) {
  return node && node.ownerDocument || document;
};
/**
 * Get the current container based on it being an Object, or a Functional Component
 *
 * @method getContainer
 * @param  {Object|Function}  container        The React Component
 * @param  {HTMLElement}      defaultContainer The default container
 * @return {HTMLElement}
 */


exports.getDocumentOwner = getDocumentOwner;

var getContainer = function getContainer(container, defaultContainer) {
  var el = typeof container === 'function' ? container() : container;
  return el && (0, _typeof2.default)(el) === 'object' && Object.hasOwnProperty.call(el, 'current') ? el.current || defaultContainer : (0, _reactDom.findDOMNode)(el) || defaultContainer;
};
/**
 * Get the anchor element for the given element.
 *
 * @method getAnchorEl
 * @param  {HTMLElement}  element The element to get the anchor for
 * @return {HTMLElement}
 */


exports.getContainer = getContainer;

var getAnchorEl = function getAnchorEl(element) {
  return typeof element === 'function' ? element() : element;
};
/**
 * Is the DOM available?
 *
 * @type {boolean}
 */


exports.getAnchorEl = getAnchorEl;
var canUseDOM = Boolean(typeof window !== 'undefined' && window.document && window.document.createElement);
exports.canUseDOM = canUseDOM;