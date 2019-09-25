"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.formatJapiTimestamp = exports.formatDate = void 0;

var _format2 = _interopRequireDefault(require("date-fns/format"));

var _dateFnsTimezone = require("date-fns-timezone");

/**
 * Format a given timestamp into a human readable date format.
 *
 * @method formatDate
 * @param  {number|string}   timestamp  The timestamp to format
 * @param  {string}          dateFormat The date format to use
 * @param  {string}          timezone   The timezone format to use
 * @return {string}                     The formatted date
 */
var formatDate = function formatDate(timestamp, dateFormat, timezone) {
  return timezone ? (0, _dateFnsTimezone.formatToTimeZone)(timestamp, dateFormat || 'MM/DD/YYYY', {
    timeZone: timezone
  }) : (0, _format2.default)(timestamp, dateFormat || 'MM/DD/YYYY');
};
/**
 * If value is a number, we need to fix its length due to Java APIs returning a 10 digit timestamp.
 *
 * @param {number|string}     timestamp The timestamp to format
 * @return {string}                     The formmatted date
 */


exports.formatDate = formatDate;

var formatJapiTimestamp = function formatJapiTimestamp(timestamp) {
  if (typeof timestamp !== 'number') {
    throw new Error('Expect timestamp to be a number');
  }

  timestamp = String(timestamp).length >= 13 ? Number(timestamp) : Number(timestamp) * 1000;
  return formatDate(timestamp);
};

exports.formatJapiTimestamp = formatJapiTimestamp;