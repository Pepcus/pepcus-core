"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _AsyncReactSelectWidget = _interopRequireDefault(require("./AsyncReactSelectWidget"));

var _BaseInputPicklist = _interopRequireDefault(require("./BaseInputPicklist"));

var _CheckboxWidget = _interopRequireDefault(require("./CheckboxWidget"));

var _DocSendFromWidget = _interopRequireDefault(require("./DocSendFromWidget"));

var _HandbookSearchWidget = _interopRequireDefault(require("./HandbookSearchWidget"));

var _RadioWidget = _interopRequireDefault(require("./RadioWidget"));

var _ReactSelectWidget = _interopRequireDefault(require("./ReactSelectWidget"));

var _TextAreaWidget = _interopRequireDefault(require("./TextAreaWidget"));

var widgets = {
  AsyncSelectWidget: _AsyncReactSelectWidget.default,
  BaseInput: _BaseInputPicklist.default,
  CheckboxWidget: _CheckboxWidget.default,
  DocSendFromWidget: _DocSendFromWidget.default,
  HandbookSearchWidget: _HandbookSearchWidget.default,
  RadioWidget: _RadioWidget.default,
  SelectWidget: _ReactSelectWidget.default,
  textarea: _TextAreaWidget.default
};
var _default = widgets;
exports.default = _default;