"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sanitizeMarkup = void 0;

var _dompurify = _interopRequireDefault(require("dompurify"));

/**
 * Sanitize a given markup using DOM-Purify.
 *
 * @method sanitizeMarkup
 * @param  {string}       html        HTML string to sanitize
 * @param  {Object}       [config={}] DOMPurify config
 * @return {string}
 */
var sanitizeMarkup = function sanitizeMarkup(html) {
  var config = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return {
    __html: _dompurify.default.sanitize(html, config)
  };
};

exports.sanitizeMarkup = sanitizeMarkup;