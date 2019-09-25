"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "AlertIcon", {
  enumerable: true,
  get: function get() {
    return _AlertIcon.default;
  }
});
Object.defineProperty(exports, "ArrowIcon", {
  enumerable: true,
  get: function get() {
    return _ArrowIcon.default;
  }
});
Object.defineProperty(exports, "CheckboxEmptyIcon", {
  enumerable: true,
  get: function get() {
    return _CheckboxEmptyIcon.default;
  }
});
Object.defineProperty(exports, "CheckboxIcon", {
  enumerable: true,
  get: function get() {
    return _CheckboxIcon.default;
  }
});
Object.defineProperty(exports, "CheckboxIndeterminateIcon", {
  enumerable: true,
  get: function get() {
    return _CheckboxIndeterminateIcon.default;
  }
});
Object.defineProperty(exports, "ChevronIcon", {
  enumerable: true,
  get: function get() {
    return _ChevronIcon.default;
  }
});
Object.defineProperty(exports, "ClearIcon", {
  enumerable: true,
  get: function get() {
    return _ClearIcon.default;
  }
});
Object.defineProperty(exports, "GearIcon", {
  enumerable: true,
  get: function get() {
    return _GearIcon.default;
  }
});
Object.defineProperty(exports, "GridIcon", {
  enumerable: true,
  get: function get() {
    return _GridIcon.default;
  }
});
Object.defineProperty(exports, "KeyIcon", {
  enumerable: true,
  get: function get() {
    return _KeyIcon.default;
  }
});
Object.defineProperty(exports, "MenuIcon", {
  enumerable: true,
  get: function get() {
    return _MenuIcon.default;
  }
});
Object.defineProperty(exports, "PhoneIcon", {
  enumerable: true,
  get: function get() {
    return _PhoneIcon.default;
  }
});
Object.defineProperty(exports, "SearchIcon", {
  enumerable: true,
  get: function get() {
    return _SearchIcon.default;
  }
});
Object.defineProperty(exports, "TrashIcon", {
  enumerable: true,
  get: function get() {
    return _TrashIcon.default;
  }
});
exports.default = void 0;

var _SvgIcon = _interopRequireDefault(require("./SvgIcon"));

var _AlertIcon = _interopRequireDefault(require("./types/AlertIcon"));

var _ArrowIcon = _interopRequireDefault(require("./types/ArrowIcon"));

var _CheckboxEmptyIcon = _interopRequireDefault(require("./types/CheckboxEmptyIcon"));

var _CheckboxIcon = _interopRequireDefault(require("./types/CheckboxIcon"));

var _CheckboxIndeterminateIcon = _interopRequireDefault(require("./types/CheckboxIndeterminateIcon"));

var _ChevronIcon = _interopRequireDefault(require("./types/ChevronIcon"));

var _ClearIcon = _interopRequireDefault(require("./types/ClearIcon"));

var _GearIcon = _interopRequireDefault(require("./types/GearIcon"));

var _GridIcon = _interopRequireDefault(require("./types/GridIcon"));

var _KeyIcon = _interopRequireDefault(require("./types/KeyIcon"));

var _MenuIcon = _interopRequireDefault(require("./types/MenuIcon"));

var _PhoneIcon = _interopRequireDefault(require("./types/PhoneIcon"));

var _SearchIcon = _interopRequireDefault(require("./types/SearchIcon"));

var _TrashIcon = _interopRequireDefault(require("./types/TrashIcon"));

// Import in the rest of the icons

/**
 * All of the SVG Icon types map with an easier to read key names.
 *
 * @type {Object}
 */
var types = {
  alert: _AlertIcon.default,
  arrow: _ArrowIcon.default,
  checkbox: _CheckboxIcon.default,
  checkboxEmpty: _CheckboxEmptyIcon.default,
  checkboxIndeterminate: _CheckboxIndeterminateIcon.default,
  chevron: _ChevronIcon.default,
  clear: _ClearIcon.default,
  gear: _GearIcon.default,
  grid: _GridIcon.default,
  key: _KeyIcon.default,
  menu: _MenuIcon.default,
  phone: _PhoneIcon.default,
  search: _SearchIcon.default,
  trash: _TrashIcon.default
};
/**
 * Add the types to the SVG Icon default export.
 *
 * @type {Object}
 */

_SvgIcon.default.types = types; // Default export the SvgIcon

var _default = _SvgIcon.default;
exports.default = _default;