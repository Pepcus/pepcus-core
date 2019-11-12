"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.get = get;
exports.isEmpty = isEmpty;

/**
 * Get the value at the given path of an object.
 *
 * NOTE: This is a quick and simple alternative to `lodash/get`.
 *
 * @method get
 * @param  {Object}       obj             The main object
 * @param  {string|Array} path            The path to traverse through the object
 * @param  {*}            [fallback=null] The fallback value
 * @return {*}
 */
function get(obj, path) {
  var fallback = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

  // Path must be defined.
  if (!path || path.length === 0) {
    return null;
  } // Split path into an Array object type.


  var splitPath = typeof path === 'string' ? path.split('.') : Array.isArray(path) ? path : [path]; // Redue to the requested value key.

  var value = splitPath.reduce(function (acc, key) {
    return acc && acc[key] ? acc[key] : fallback;
  }, obj); // Return the value.

  return value;
}
/**
 * Checks if a given value is an empty object, collection, map, or set.
 *
 * NOTE: This is a quick and simple alternative to `lodash/isEmpty`.
 *
 * @method isEmpty
 * @param  {*}       value The value to check
 * @return {boolean}       Is the value empty?
 */


function isEmpty(value) {
  // Check for the new ES6 data sets.
  if (value instanceof Map || value instanceof Set) {
    return !value.size;
  } // Check for empty values.


  return [Object, Array].includes((value || {}).constructor) && !Object.entries(value || {}).length;
}