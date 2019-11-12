"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.genID = void 0;

/**
 * Generate a random ID
 *
 * @method genID
 * @param  {number|string} [prefixOrLength=10] The length or prefix for the generated ID
 * @param  {string} [prefix='']                Add a prefix to the generated ID
 * @return {string}                            The generated ID
 */
var genID = function genID() {
  var prefixOrLength = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 10;
  var prefix = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  // Generate a random time.
  var randomTime = Math.random() * new Date().getTime(); // Use `btoa()` and convert from base-64 to ascii.

  var b64Rand = btoa(randomTime); // Check to see if we have a `prefix` as the first argument or the second.

  var strPrefix = typeof prefixOrLength === 'string' ? prefixOrLength : prefix; // Check to see if the first argument is a length.

  var strLength = typeof prefixOrLength === 'number' && prefixOrLength > 0 ? prefixOrLength : 10; // Double-check to make sure the length is not above 24 characters.
  // 24 characters is the max length for converting a `randomTime` via `btoa()`.

  strLength = strLength >= 24 ? 24 : strLength; // Return a slice of the randomy generated hash.

  return "".concat(strPrefix).concat(b64Rand.slice(0, strLength));
};

exports.genID = genID;