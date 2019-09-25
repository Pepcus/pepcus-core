"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.responsiveProptypes = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

/**
 * Generate responsive prop-types for a component.
 *
 * @method responsiveProptypes
 * @param  {Function}           [types=()=>{}] A PropTypes func
 * @return {Function}                          A responsive PropTypes func
 */
var responsiveProptypes = function responsiveProptypes() {
  var types = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : function () {};
  return _propTypes.default.oneOfType([types, _propTypes.default.shape({
    xs: types,
    sm: types,
    md: types,
    lg: types,
    xl: types
  })]);
};

exports.responsiveProptypes = responsiveProptypes;