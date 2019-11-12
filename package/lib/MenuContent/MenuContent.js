"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _theme = require("../../utils/theme");

var MenuContent = _styledComponents.default.ul.withConfig({
  displayName: "MenuContent",
  componentId: "nyei8j-0"
})(["background-color:#fff;border-radius:3px;border:1px solid #c4ccd3;box-shadow:0 6px 12px rgba(0,0,0,0.175);list-style:none;margin:", "px 0 0;min-width:160px;overflow:hidden;padding:0;", ";"], function (_ref) {
  var distanceFromContainer = _ref.distanceFromContainer;
  return distanceFromContainer;
}, (0, _theme.getThemeProps)('MenuContent.styles'));

MenuContent.propTypes = {
  /**
   * A dynamic margin for the MenuContent
   */
  distanceFromContainer: _propTypes.default.number
};
MenuContent.defaultProps = {
  distanceFromContainer: 0
};
var _default = MenuContent;
exports.default = _default;