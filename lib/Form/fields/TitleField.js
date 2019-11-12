"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _theme = require("../../../utils/theme");

var TitleFieldStyled = _styledComponents.default.label.withConfig({
  displayName: "TitleField__TitleFieldStyled",
  componentId: "sc-1sffnve-0"
})(["color:#848484;font-size:14px;font-weight:400;margin:0 0 10px 15px;padding:0;", ";", ";"], (0, _theme.getThemeProps)('TitleField.styles'), function (_ref) {
  var root = _ref.root,
      theme = _ref.theme;
  var rootStyles = (0, _theme.getThemeProps)('TitleField.styles.root', null, {
    theme: theme
  });
  return root ? rootStyles : null;
});

function TitleField(_ref2) {
  var id = _ref2.id,
      title = _ref2.title,
      rest = (0, _objectWithoutProperties2.default)(_ref2, ["id", "title"]);
  return title && _react.default.createElement(TitleFieldStyled, Object.assign({}, rest, {
    htmlFor: id
  }), title);
}

TitleField.propTypes = process.env.NODE_ENV !== "production" ? {
  id: _propTypes.default.string,
  title: _propTypes.default.string
} : {};
TitleField.defaultProps = {
  id: null,
  title: null
};
var _default = TitleField;
exports.default = _default;