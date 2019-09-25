"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _ArrayFieldTemplate = _interopRequireDefault(require("./ArrayFieldTemplate"));

var _DescriptionField = _interopRequireDefault(require("./DescriptionField"));

var _FileUploadField = _interopRequireDefault(require("./FileUploadField"));

var _FormGroup = _interopRequireDefault(require("./FormGroup"));

var _FormGroupTitle = _interopRequireDefault(require("./FormGroupTitle"));

var _HandbookSearchField = _interopRequireDefault(require("./HandbookSearchField"));

var _LegislationComplyTopicsField = _interopRequireDefault(require("./LegislationComplyTopicsField"));

var _LegislationEffectiveDateField = _interopRequireDefault(require("./LegislationEffectiveDateField"));

var _LegislationLinkField = _interopRequireDefault(require("./LegislationLinkField"));

var _LegislationNotesField = _interopRequireDefault(require("./LegislationNotesField"));

var _LegislationPublishToField = _interopRequireDefault(require("./LegislationPublishToField"));

var _LocationField = _interopRequireDefault(require("./LocationField"));

var _ObjectFieldTemplate = _interopRequireDefault(require("./ObjectFieldTemplate"));

var _TitleField = _interopRequireDefault(require("./TitleField"));

var fields = {
  ArrayFieldTemplate: _ArrayFieldTemplate.default,
  DescriptionField: _DescriptionField.default,
  FieldTemplate: _FormGroup.default,
  FileUploadField: _FileUploadField.default,
  FormGroupTitleField: _FormGroupTitle.default,
  HandbookSearchField: _HandbookSearchField.default,
  LegislationComplyTopicsField: _LegislationComplyTopicsField.default,
  LegislationEffectiveDateField: _LegislationEffectiveDateField.default,
  LegislationLinkField: _LegislationLinkField.default,
  LegislationNotesField: _LegislationNotesField.default,
  LegislationPublishToField: _LegislationPublishToField.default,
  LocationField: _LocationField.default,
  ObjectFieldTemplate: _ObjectFieldTemplate.default,
  TitleField: _TitleField.default
};
var _default = fields;
exports.default = _default;