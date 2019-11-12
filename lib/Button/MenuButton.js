"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _theme = require("../../utils/theme");

var _Button = _interopRequireDefault(require("./Button"));

var MenuButton = (0, _styledComponents.default)(_Button.default).withConfig({
  displayName: "MenuButton",
  componentId: "sc-14bfpx3-0"
})(["align-items:center;border-radius:5px;border:none;display:flex;flex-direction:row;justify-content:space-between;padding:0 15px;", ";"], (0, _theme.getThemeProps)('MenuButton.styles'));
MenuButton.propTypes = {
  /**
   * The content of the button.
   */
  children: _propTypes.default.node,

  /**
   * @ignore
   */
  className: _propTypes.default.string,

  /**
   * Do not apply a minimum width to the button.
   */
  noMinWidth: _propTypes.default.bool,

  /**
   * Default onClick handler for the button
   */
  onClick: _propTypes.default.func,

  /**
   * Apply themed styling to Button.
   *
   * Variant(s) can be defined in `theme.palette`.
   */
  color: _propTypes.default.string,

  /**
   * Give the button a set width.
   */
  width: _propTypes.default.string
};
MenuButton.defaultProps = {
  children: null,
  className: '',
  noMinWidth: false,
  onClick: function onClick() {},
  color: 'primary',
  width: null
};
var _default = MenuButton;
exports.default = _default;