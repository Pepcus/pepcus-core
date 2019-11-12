"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parseAsNumber = exports.formatNumberWithDelimiter = void 0;

/**
 * Format a given number based on the number of spaces and delimiter provided.
 *
 * @method formatNumberWithDelimiter
 * @param  {number}                  [num=0]         The number to format
 * @param  {number}                  [spaces=3]      The number of spaces to insert delimiter
 * @param  {string}                  [delimiter=','] The delimiter to use
 * @return {string}                                  The formatted number
 */
var formatNumberWithDelimiter = function formatNumberWithDelimiter() {
  var num = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  var spaces = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 3;
  var delimiter = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : ',';

  if (!num) {
    return 0;
  } // Build the RegExp.


  var regex = "(.)(?=(\\d{".concat(spaces, "})+$)"); // Return the formatted number.

  return String(Number.parseInt(num, 10)).replace(new RegExp(regex, 'g'), "$1".concat(delimiter));
};
/**
 * Parse a value out as a number
 *
 * @method parseAsNumber
 * @param  {Any}         value The value to parse
 * @return {Any|number}        The value
 */


exports.formatNumberWithDelimiter = formatNumberWithDelimiter;

var parseAsNumber = function parseAsNumber(value) {
  if (value === '') {
    return undefined;
  } // "1." isn't considered a number, even if JavaScript parses it fine.
  // The user is most likely entereing in a floating point integer.


  if (/\.$/.test(value)) {
    return value;
  } // "1.0" isn't considered a number, but a floating point number (float).
  // We should return the string, to allow for float inputs.


  if (/\.0$/.test(value)) {
    return value;
  } // If we're truly working with a number and not a float,
  // let's parse it via Number() and see if it is a valid Number.


  var num = Number(value);
  var isNumber = typeof num === 'number' && !Number.isNaN(num); // Fantastic, it's a number!
  // Now we should return it as a string so that it doesn't conflict
  // with the user entering in a currency symbol or any other value.

  if (/\.\d*0$/.test(value)) {
    return value;
  } // Return the valid number or the passed in value in the end.


  return isNumber ? num : value;
};

exports.parseAsNumber = parseAsNumber;