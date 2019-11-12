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

var ButtonIcon = (0, _styledComponents.default)(_Button.default).withConfig({
  displayName: "ButtonIcon",
  componentId: "sc-1i7nsik-0"
})(["background:transparent;border-radius:50%;color:", ";font-size:12px;height:auto;padding:0;text-align:center;transition:background-color ", " ", ";width:auto;&:hover,&:active,&:disabled{background-color:transparent;}", ";"], (0, _theme.getThemeProps)('palette.text.color'), (0, _theme.getThemeProps)('palette.transitions.duration.short'), (0, _theme.getThemeProps)('palette.transitions.easing.easeInOut'), (0, _theme.getThemeProps)('ButtonSecondary.styles'));
ButtonIcon.propTypes = {
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
ButtonIcon.defaultProps = {
  children: null,
  className: '',
  color: 'primary',
  noMinWidth: false,
  onClick: function onClick() {},
  width: null
};
var _default = ButtonIcon;
exports.default = _default;