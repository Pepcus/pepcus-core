"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _polished = require("polished");

var _theme = require("../../constants/theme");

var _theme2 = require("../../utils/theme");

var _Button = _interopRequireDefault(require("./Button"));

var ButtonSecondary = (0, _styledComponents.default)(_Button.default).withConfig({
  displayName: "ButtonSecondary",
  componentId: "sc-17gdbmb-0"
})(["background-color:transparent;background-image:linear-gradient(to top,#f2f4f7,#ffffff);border-radius:5px;border:1px solid ", ";color:", ";&:hover{background-color:", ";}&:disabled{background-color:", ";}", ";"], _theme.THEME.palette.common.lighter, _theme.THEME.palette.text.light, (0, _polished.darken)(0.05, '#f2f4f7'), (0, _polished.darken)(0.075, '#f2f4f7'), (0, _theme2.getThemeProps)('ButtonSecondary.styles'));
ButtonSecondary.propTypes = {
  /**
   * The content of the button.
   */
  children: _propTypes.default.node,

  /**
   * @ignore
   */
  className: _propTypes.default.string,

  /**
   * Apply themed styling to Button.
   *
   * Colors can be defined in `theme.palette`.
   */
  color: _propTypes.default.string,

  /**
   * Do not apply a minimum width to the button.
   */
  noMinWidth: _propTypes.default.bool,

  /**
   * Default onClick handler for the button
   */
  onClick: _propTypes.default.func,

  /**
   * Give the button a set width.
   */
  width: _propTypes.default.string
};
ButtonSecondary.defaultProps = {
  children: null,
  className: '',
  color: 'primary',
  noMinWidth: false,
  onClick: function onClick() {},
  width: null
};
var _default = ButtonSecondary;
exports.default = _default;