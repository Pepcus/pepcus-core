"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _theme = require("../../utils/theme");

var rotate360 = (0, _styledComponents.keyframes)(["from{transform:rotate(0deg);}to{transform:rotate(360deg);}"]);

var LoadingIcon = _styledComponents.default.div.withConfig({
  displayName: "LoadingIcon",
  componentId: "sc-1ayyhr-0"
})(["", ";", ";"], function (_ref) {
  var animate = _ref.animate,
      animationDuration = _ref.animationDuration;

  // Determine the CSS
  var animation = function animation(props) {
    return animate ? (0, _styledComponents.css)(["", " ", " linear infinite;"], rotate360, props.animationDuration) : null;
  };

  return (0, _styledComponents.css)(["animation:", ";height:25px;width:25px;"], animation);
}, (0, _theme.getThemeProps)('LoadingIcon.styles'));

LoadingIcon.propTypes = {
  /**
   * If `true`, the icon will animate in a 360 degree rotation.
   */
  animate: _propTypes.default.bool,

  /**
   * The duration for the animation of the icon.
   */
  animationDuration: _propTypes.default.string
};
LoadingIcon.defaultProps = {
  animate: true,
  animationDuration: '1.5s'
};
var _default = LoadingIcon;
exports.default = _default;