"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _wrapNativeSuper2 = _interopRequireDefault(require("@babel/runtime/helpers/wrapNativeSuper"));

/**
 * A default 'custom' RavenJS Error
 *
 * @class
 * @extends Error
 */
var RavenjsError =
/*#__PURE__*/
function (_Error) {
  (0, _inherits2.default)(RavenjsError, _Error);

  function RavenjsError() {
    var _this;

    var message = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    var errorName = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
    (0, _classCallCheck2.default)(this, RavenjsError);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(RavenjsError).call(this, message)); // Re-define the `message` property on the default Error Class.

    Object.defineProperty((0, _assertThisInitialized2.default)(_this), 'message', {
      configurable: true,
      enumerable: false,
      value: message,
      writable: true
    }); // Update the name of the default Error Class,
    // based on the passed in name, or the current constructor's name.

    Object.defineProperty((0, _assertThisInitialized2.default)(_this), 'name', {
      configurable: true,
      enumerable: false,
      value: errorName || _this.constructor.name,
      writable: true
    }); // If applicable, capture the stack trace.

    if (Error.hasOwnProperty('captureStackTrace')) {
      Error.captureStackTrace((0, _assertThisInitialized2.default)(_this), _this.constructor);
      return (0, _possibleConstructorReturn2.default)(_this);
    } // Re-define the stack trace.


    Object.defineProperty((0, _assertThisInitialized2.default)(_this), 'stack', {
      configurable: true,
      enumerable: false,
      value: new Error(message).stack,
      writable: true
    });
    return _this;
  }

  return RavenjsError;
}((0, _wrapNativeSuper2.default)(Error));

var _default = RavenjsError;
exports.default = _default;