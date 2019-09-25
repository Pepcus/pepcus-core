"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.checkObjectKeys = void 0;

var _isEmpty2 = _interopRequireDefault(require("lodash/isEmpty"));

/**
 * Check the keys of an object to match the values provided in the keys map.
 *
 * @method checkObjectKeys
 * @param  {Object}          [object={}]   The object to check the keys map against
 * @param  {Object}          [keysMap={}]  The keys map to check the object for
 * @param  {Object}          [handlers={}] A map of action handlers in case the keysMap is a string
 * @return {boolean|Function}
 */
var checkObjectKeys = function checkObjectKeys() {
  var object = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var keysMap = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var handlers = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

  // Return back the `boolean` value if present.
  // NOTE: Edge case, should not be set explicitely.
  if (typeof keysMap === 'boolean') {
    return keysMap;
  } // Return `false` if no keys are found.


  if ((0, _isEmpty2.default)(keysMap)) {
    return false;
  } // If the keysMap is a `string`, let's look for it in the handlers.


  if (typeof keysMap === 'string' && handlers && keysMap in handlers) {
    return handlers[keysMap](object);
  } // Determine if the required keysMap values match
  // their counterparts in  the current `object` data set.


  return !(0, _isEmpty2.default)(object) && Object.keys(keysMap).every(function (key) {
    return Boolean(key in object) && Boolean(object[key] === keysMap[key]);
  });
};

exports.checkObjectKeys = checkObjectKeys;