"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

/**
 * A simple Modal Manager which provides proper state management for modals.
 */
var ModalManager = function ModalManager() {
  var _this = this;

  (0, _classCallCheck2.default)(this, ModalManager);

  this.getModals = function () {
    return _this.modals;
  };

  this.add = function (modal) {
    if (_this.modals.indexOf(modal) === -1) {
      _this.modals.push(modal);
    }
  };

  this.remove = function (modal) {
    var idx = _this.modals.indexOf(modal);

    if (idx !== -1) {
      _this.modals.splice(idx, 1);
    }
  };

  this.isTopModal = function (modal) {
    return Boolean(_this.modals.length && _this.modals[_this.modals.length - 1] === modal);
  };

  // Construct an empty list of modals
  this.modals = [];
}
/**
 * Get the current list of modals from the manager
 *
 * @method getModals
 * @return {Array}   The list of modals
 */
;

var _default = ModalManager;
exports.default = _default;