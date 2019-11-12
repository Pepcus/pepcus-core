"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _Box = _interopRequireDefault(require("../Box"));

var _Row = _interopRequireDefault(require("../Row"));

var _theme = require("../../utils/theme");

var AlertStyled = (0, _styledComponents.default)(_Box.default).withConfig({
  displayName: "Alert__AlertStyled",
  componentId: "wnie6l-0"
})(["", ";"], function (_ref) {
  var backgroundColor = _ref.backgroundColor,
      borderColor = _ref.borderColor;
  return (0, _styledComponents.css)(["background-color:", ";border-color:", ";position:relative;"], (0, _theme.themeGet)("palette.".concat(backgroundColor, ".backgroundColor"), backgroundColor), (0, _theme.themeGet)("palette.".concat(borderColor, ".borderColor"), borderColor));
});

var Alert = _react.default.forwardRef(function (props, ref) {
  var children = props.children,
      rest = (0, _objectWithoutProperties2.default)(props, ["children"]);
  return _react.default.createElement(AlertStyled, Object.assign({
    padding: "12px 20px"
  }, rest, {
    ref: ref
  }), _react.default.createElement(_Row.default, {
    alignItems: "left",
    justify: "left",
    gutter: false
  }, children));
});

Alert.propTypes = process.env.NODE_ENV !== "production" ? {
  children: _propTypes.default.node
} : {};
Alert.defaultProps = {
  children: null
};
var _default = Alert;
exports.default = _default;