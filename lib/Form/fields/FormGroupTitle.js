"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _isEmpty2 = _interopRequireDefault(require("lodash/isEmpty"));

var _faInfoCircle = require("@fortawesome/free-solid-svg-icons/faInfoCircle");

var _Row = _interopRequireDefault(require("../../Row"));

var _FaIcon = _interopRequireDefault(require("../../FaIcon"));

var _Tooltip = _interopRequireDefault(require("../../Tooltip"));

var _Typography = _interopRequireDefault(require("../../Typography"));

var _theme = require("../../../utils/theme");

var FormGroupTitleStyled = _styledComponents.default.label.withConfig({
  displayName: "FormGroupTitle__FormGroupTitleStyled",
  componentId: "sc-1s6nfk8-0"
})(["align-items:baseline;color:#15191d;display:flex;font-size:14px;font-weight:400;justify-content:space-between;margin:0;padding:0 5px 7.5px 5px;", ";"], (0, _theme.getThemeProps)('FormGroupTitle.styles'));

function FormGroupTitle(_ref) {
  var id = _ref.id,
      required = _ref.required,
      title = _ref.title,
      helpText = _ref.helpText;
  var _helpText$icon = helpText.icon,
      icon = _helpText$icon === void 0 ? {} : _helpText$icon,
      tooltip = (0, _objectWithoutProperties2.default)(helpText, ["icon"]);
  return title && _react.default.createElement(FormGroupTitleStyled, {
    htmlFor: id
  }, _react.default.createElement(_Row.default, {
    alignItems: "flex-start",
    gutter: false,
    margin: "0 5px 0 0",
    wrap: "nowrap"
  }, _react.default.createElement("span", {
    style: {
      marginRight: 5
    }
  }, title), (0, _typeof2.default)(helpText) === 'object' && !(0, _isEmpty2.default)(helpText) && _react.default.createElement(_Tooltip.default, tooltip, _react.default.createElement(_FaIcon.default, Object.assign({}, icon, {
    icon: _faInfoCircle.faInfoCircle
  })))), required && _react.default.createElement(_Typography.default, {
    as: "span",
    color: "error",
    type: "required",
    gutterBottom: "0"
  }, "Required"));
}

FormGroupTitle.propTypes = process.env.NODE_ENV !== "production" ? {
  helpText: _propTypes.default.object,
  id: _propTypes.default.string,
  title: _propTypes.default.string
} : {};
FormGroupTitle.defaultProps = {
  helpText: {},
  id: null,
  title: null
};
var _default = FormGroupTitle;
exports.default = _default;