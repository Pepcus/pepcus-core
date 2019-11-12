"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.stopPropagation = exports.preventDefault = void 0;

/**
 * Prevent the default action the browser makes on the passed in event.
 *
 * @method preventDefault
 * @param  {Object}       event The synthetic event object
 * @return {Any}
 */
var preventDefault = function preventDefault(event) {
  return typeof event.preventDefault === 'function' ? event.preventDefault() : null;
};
/**
 * Stop the passed in event from bubbling up the event chain.
 *
 * @method stopPropagation
 * @param  {Object}        event The synthetic event object
 * @return {Any}
 */


exports.preventDefault = preventDefault;

var stopPropagation = function stopPropagation(event) {
  return typeof event.stopPropagation === 'function' ? event.stopPropagation() : null;
};

exports.stopPropagation = stopPropagation;