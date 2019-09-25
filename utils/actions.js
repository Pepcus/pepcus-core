"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.callFunc = callFunc;
exports.replaceHandlerRefs = exports.getHandler = void 0;

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var _isEmpty2 = _interopRequireDefault(require("lodash/isEmpty"));

/**
 * Get an action handler from a list of actions.
 *
 * @method getHandler
 * @param  {Object}   [actions={}]        The map of action handlers
 * @param  {string}   [handlerRef='']     The handler ref
 * @param  {Function} [defaultValue=null] The default value if handler is not found
 * @return {string}                       The found action handler ref
 */
var getHandler = function getHandler() {
  var actions = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var handlerRef = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  var defaultValue = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  return !(0, _isEmpty2.default)(actions) && handlerRef in actions ? actions[handlerRef] : defaultValue;
};
/**
 * Replace the `handlerRef` within a list of items with actual function calls.
 *
 * @method replaceHandlerRefs
 * @param  {Array}            [items=[]]        The list of items to update
 * @param  {Object}           [handlers={}]     The map of action handlers
 * @param  {string}           [refProp=null]    The prop for the `onClick` ref
 * @param  {Any}              [invokeWith=null] The data to invoke the `onClick` fn with
 * @return {Array}                              The original, updated list of items
 */


exports.getHandler = getHandler;

var replaceHandlerRefs = function replaceHandlerRefs() {
  var items = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var handlers = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var refProp = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  var invokeWith = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
  return items.map(function (item) {
    // Determine the `onClick` key
    var onClickKey = refProp && refProp in item ? refProp : 'onClick'; // Extract the handler via the `handlerRef` from the `item`.

    var onClick = onClickKey in item && typeof item[onClickKey] === 'function' ? item[onClickKey] : getHandler(handlers, item[onClickKey]); // Return the updated `item`.

    return (0, _objectSpread2.default)({}, item, {
      // Update the `onClick` functionality if the `invokeWith` is available.
      onClick: !(0, _isEmpty2.default)(invokeWith) && typeof onClick === 'function' ? function () {
        return onClick(invokeWith);
      } : onClick
    });
  });
};
/**
 * Call a function with some arguments.
 * NOTE: Only call the function if it's a valid 'function'.
 *
 * @method callFunc
 * @param  {Function} func The function to call
 * @param  {*}        args The arguments for the function
 * @return {*}
 */


exports.replaceHandlerRefs = replaceHandlerRefs;

function callFunc(func) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }

  return typeof func === 'function' ? func.apply(void 0, args) : null;
}