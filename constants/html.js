"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.VALID_ATTRIBUTES_LIST = void 0;

var _reactAttributes = _interopRequireDefault(require("./react-attributes.json"));

/**
 * List of valid HTML element attributes.
 *
 * @type {Array}
 * @see  {@link https://reactjs.org/docs/dom-elements.html}
 * @see  {@link https://github.com/jackyho112/react-html-attributes}
 */
var VALID_ATTRIBUTES_LIST = _reactAttributes.default;
exports.VALID_ATTRIBUTES_LIST = VALID_ATTRIBUTES_LIST;