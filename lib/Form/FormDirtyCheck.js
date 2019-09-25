"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _isEqual2 = _interopRequireDefault(require("lodash/isEqual"));

/**
 * For form dirty check operations
 *
 * RJSF (react-jsonschema-form) by default do not provide a functionality to identify
 * whether the form is dirty/pristine.
 * So, this class will be the utility for RJSF wrapper <Form>.
 *
 * Additionally,
 * we need to handle a flag 'isDataInitialized' as the RJSF's form automatically
 * triggers a onChange callback initially. To not consider that as a dirty(change) operation,
 * we considered it a data initialization callback. And then further onChange calls
 * will decide the form's dirty state by comparing the initial and current form data.
 *
 * @type {class}
 */
var FormDirtyCheck = function FormDirtyCheck() {
  var _this = this;

  (0, _classCallCheck2.default)(this, FormDirtyCheck);
  this.isDataInitialized = false;
  this.isDirty = false;
  this.initialFormData = {};
  this.formData = {};

  this.isFormDataChanged = function () {
    return (0, _isEqual2.default)(_this.formData, _this.initialFormData);
  };

  this.onChange = function (_ref) {
    var formData = _ref.formData;
    _this.formData = formData;

    if (_this.isDataInitialized) {
      _this.isDirty = !_this.isFormDataChanged();
    } else {
      _this.initialFormData = formData;
      _this.isDataInitialized = true;
    }
  };

  this.setInitialFormData = function (formData) {
    _this.initialFormData = formData;
  };

  this.setFormData = function (formData) {
    _this.formData = formData;
  };

  this.isFormDirty = function () {
    return _this.isDirty;
  };
};

var _default = FormDirtyCheck;
exports.default = _default;