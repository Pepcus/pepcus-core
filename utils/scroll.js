"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.scrollTo = scrollTo;

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var _smoothScrollIntoViewIfNeeded = _interopRequireDefault(require("smooth-scroll-into-view-if-needed"));

/**
 * Scroll to an element if its present.
 *
 * @method scrollTo
 * @param  {Element} [el=null]    An HTML element
 * @param  {Object}  [options={}] The options for the scrollTo feature
 */
function scrollTo() {
  var el = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  if (el) {
    // Scroll to the element if available.
    (0, _smoothScrollIntoViewIfNeeded.default)(el, (0, _objectSpread2.default)({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'nearest',
      scrollMode: 'if-needed'
    }, options));
  }
}