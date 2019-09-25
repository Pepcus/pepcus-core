"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.warning = exports.WARNING_PREFIX = void 0;

var _warning = _interopRequireDefault(require("warning"));

/**
 * A prefix for the warning statement.
 *
 * @type {String}
 */
var WARNING_PREFIX = 'RavenJS:';
/**
 * Soft wrapper over the `warning` module.
 * Accepts a list of warning messages, and adds a
 * simple prefix to the log.
 *
 * @method warning
 * @param  {boolean} condition     A shouldBeTrue condition
 * @param  {Array}   [messages=[]] List of messages to display to user
 * @return {Log}
 */

exports.WARNING_PREFIX = WARNING_PREFIX;

var warning = function warning(condition) {
  var messages = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  return (0, _warning.default)(condition, "".concat(WARNING_PREFIX, " ").concat(messages.join('\n') || 'unknown error.'));
};

exports.warning = warning;