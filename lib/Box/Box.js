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

var BoxCSS = (0, _styledComponents.css)(["background-color:", ";border-color:", ";", ";", ";"], (0, _theme.themeGet)('palette.common.white'), (0, _theme.themeGet)('palette.common.lighter'), (0, _theme.themeGet)('Box.styles'), function (_ref) {
  var backgroundColor = _ref.backgroundColor,
      borderColor = _ref.borderColor,
      borderRadius = _ref.borderRadius,
      borderStyle = _ref.borderStyle,
      borderWidth = _ref.borderWidth,
      boxShadow = _ref.boxShadow,
      elevation = _ref.elevation,
      elevationDirection = _ref.elevationDirection,
      height = _ref.height,
      margin = _ref.margin,
      maxHeight = _ref.maxHeight,
      maxWidth = _ref.maxWidth,
      overflow = _ref.overflow,
      padding = _ref.padding,
      position = _ref.position,
      width = _ref.width;
  return (0, _styledComponents.css)(["background-color:", ";border-color:", ";border-radius:", ";border-style:", ";border-width:", ";box-shadow:", ";height:", ";margin:", ";max-height:", ";max-width:", ";overflow:", ";padding:", ";position:", ";width:", ";"], (0, _theme.themeGet)("palette.".concat(backgroundColor, ".color"), backgroundColor), (0, _theme.themeGet)("palette.".concat(borderColor, ".color"), borderColor), borderRadius || '4px', borderStyle || 'solid', borderWidth || '1px', (0, _theme.themeGet)("shadows[".concat(elevationDirection, "][").concat(elevation, "]"), boxShadow), height || null, margin || '0 0 15px 0', maxHeight || null, maxWidth || null, overflow || null, padding || '16px 12px', position, width || null);
});

var Box = _styledComponents.default.div.withConfig({
  displayName: "Box",
  componentId: "sc-1jw3ebm-0"
})(["", ";"], BoxCSS);

Box.propTypes = {
  /**
   * Sets the `background-color` css property.
   */
  backgroundColor: _propTypes.default.string,

  /**
   * Sets the `border-color` css property.
   */
  borderColor: _propTypes.default.string,

  /**
   * Sets the `border-radius` css property.
   */
  borderRadius: _propTypes.default.string,

  /**
   * Sets the `border-style` css property.
   */
  borderStyle: _propTypes.default.string,

  /**
   * Sets the `border-width` css property.
   */
  borderWidth: _propTypes.default.string,

  /**
   * Sets the `box-shadow` css property.
   */
  boxShadow: _propTypes.default.string,

  /**
   * Shadow depth for the box.
   * Accepts values between 0 and 24.
   */
  elevation: _propTypes.default.number,

  /**
   * Direction for the shadow depth for the box.
   * Accepts either `top` or `bottom`.
   */
  elevationDirection: _propTypes.default.oneOf(['top', 'bottom']),

  /**
   * Sets the `height` css property.
   */
  height: _propTypes.default.string,

  /**
   * Sets the `margin` css property.
   */
  margin: _propTypes.default.string,

  /**
   * Sets the `max-height` css property.
   */
  maxHeight: _propTypes.default.string,

  /**
   * Sets the `max-width` css property.
   */
  maxWeight: _propTypes.default.string,

  /**
   * Sets the `overflow` css property.
   */
  overflow: _propTypes.default.string,

  /**
   * Sets the `padding` css property.
   */
  padding: _propTypes.default.string,

  /**
   * Sets the `position` css property.
   */
  position: _propTypes.default.string,

  /**
   * Sets the `width` css property.
   */
  width: _propTypes.default.string
};
Box.defaultProps = {
  backgroundColor: null,
  borderColor: null,
  borderRadius: null,
  borderStyle: null,
  borderWidth: null,
  boxShadow: null,
  elevation: 0,
  elevationDirection: 'bottom',
  height: null,
  margin: null,
  maxHeight: null,
  maxWidth: null,
  overflow: null,
  padding: null,
  position: null,
  width: '100%'
};
var _default = Box;
exports.default = _default;