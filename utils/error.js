"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.extractErrorMessage = extractErrorMessage;
exports.catchError = catchError;

var _Error = _interopRequireDefault(require("../lib/Error"));

var _lodash = require("./lodash");

/**
 * Extract the error message from a given Error.
 *
 * @method extractErrorMessage
 * @param  {Error}             error The given Error
 * @return {string}
 */
function extractErrorMessage(error) {
  // Extract the data from the response object.
  // (if it is an API call)
  var data = (0, _lodash.get)(error, 'data') || (0, _lodash.get)(error, 'response.data'); // Create an error message, defaulting to the error.message.

  var message = error.message || 'error occurred'; // If the data is not present, then just return the error's message;

  if (!data) {
    return message;
  } // If the data has an `error_description` then let's build the message


  if (data.error_description) {
    // Extract the name from the error.
    var name = data.error || 'Error'; // Extract the description from the error.

    var description = data.error_description; // Build the error message with the name and description.

    message = "".concat(name, " : ").concat(description);
  } else {
    // Otherwise, build the error message from the given `data.message`.
    message = data.message;
  } // If there are extra error details present, then let's update the message.


  if (data.errorDetails && Array.isArray(data.errorDetails) && data.errorDetails.length > 0) {
    // We'll just append the extra details based on their `field` and `message`.
    message = data.errorDetails.reduce(function (res, _ref) {
      var _ref$field = _ref.field,
          field = _ref$field === void 0 ? '' : _ref$field,
          _ref$message = _ref.message,
          message = _ref$message === void 0 ? '' : _ref$message;
      var fieldMsg = "".concat(field, ": ").concat(message); // Check if `res` is valid, only then add line-breaks to the final message.

      return res ? "".concat(res, "<br />").concat(fieldMsg) : fieldMsg;
    }, "");
  } // Finally, return the message.


  return message || error.message;
}
/**
 * Catch an error and throw its `error.message` if relevant.
 *
 * @method catchError
 * @param {Error}     error The error to catch
 * @param {string}    name  Optional name for the Error
 */


function catchError(error) {
  var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'Error';

  if (error instanceof Error) {
    // Extract the error message.
    var message = extractErrorMessage(error); // Throw a new Custom Error with the passed in name.

    throw new _Error.default(message, name);
  }
}