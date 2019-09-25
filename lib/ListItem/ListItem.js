"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ListItemStyled = exports.default = void 0;

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _colors = require("../../constants/colors");

var _theme = require("../../utils/theme");

var ListItemStyled = _styledComponents.default.li.withConfig({
  displayName: "ListItem__ListItemStyled",
  componentId: "v0m0c1-0"
})(["align-items:center;box-sizing:border-box;display:flex;justify-content:flex-start;position:relative;text-align:left;text-decoration:none;width:100%;transition:opacity 0.2s ease-in-out,background 0.2s ease-in-out,color 0.2s ease-in-out,border-color 0.2s ease-in-out;", ";", ";"], function (_ref) {
  var active = _ref.active,
      backgroundColorProps = _ref.backgroundColor,
      borderColorProps = _ref.borderColor,
      borderRadius = _ref.borderRadius,
      button = _ref.button,
      colorProps = _ref.color,
      dense = _ref.dense,
      disabled = _ref.disabled,
      divider = _ref.divider,
      margin = _ref.margin,
      padding = _ref.padding,
      theme = _ref.theme;
  var mutedColor = (0, _theme.themeGet)("palette.muted.dark", _colors.COLORS.MUTED);
  var backgroundColor = (0, _theme.themeGet)("palette.".concat(backgroundColorProps, ".color"), _colors.COLORS.MUTED);
  var borderColor = (0, _theme.themeGet)("palette.".concat(borderColorProps, ".borderColor"), _colors.COLORS.MUTED);
  var color = (0, _theme.themeGet)("palette.".concat(colorProps, ".color"), 'inherit'); // Define the styles for the `active` state.

  var activeCSS = (0, _styledComponents.css)(["background:", ";border-color:", ";color:", ";"], backgroundColor, borderColor, color); // Define the styles for the `button` type list item.

  var buttonCSS = (0, _styledComponents.css)(["cursor:pointer;&:hover{background:", ";border-color:", ";color:", ";}"], backgroundColor, borderColor, color); // Define the styles if we don't want the extra padding.

  var denseCSS = (0, _styledComponents.css)(["padding:", ";"], padding || '10px'); // Define the styles for the `disabled` state.

  var disabledCSS = (0, _styledComponents.css)(["color:", ";cursor:not-allowed;user-select:none;&:hover{color:", ";}"], mutedColor, mutedColor); // Define the styles if we want to add a border to the list item.

  var dividerCSS = (0, _styledComponents.css)(["background-clip:padding-box;border-color:", ";border-style:solid;border-width:1px;margin-bottom:-1px;"], borderColor); // Return the dynamic styles.

  return (0, _styledComponents.css)(["color:", ";margin:", ";padding:", ";&:first-child{border-top-left-radius:", ";border-top-right-radius:", ";}&:last-child{border-bottom-left-radius:", ";border-bottom-right-radius:", ";}", ";", ";", ";", ";", ";"], color, margin, padding || '12px 20px', borderRadius, borderRadius, borderRadius, borderRadius, divider && dividerCSS, button && buttonCSS, dense && denseCSS, active && activeCSS, disabled && disabledCSS);
}, (0, _theme.themeGet)('ListItem.styles'));
/**
 * Items to be rendered inside a List.
 *
 * @method      ListItem
 * @constructor
 */


exports.ListItemStyled = ListItemStyled;

var ListItem = _react.default.forwardRef(function (props, ref) {
  var children = props.children,
      rest = (0, _objectWithoutProperties2.default)(props, ["children"]);
  return _react.default.createElement(ListItemStyled, Object.assign({
    as: "li"
  }, rest, {
    ref: ref
  }), children);
});

ListItem.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * If `true`, the list-item will be set to active.
   */
  active: _propTypes.default.bool,

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
   * Sets the `border-width` css property.
   */
  borderWidth: _propTypes.default.string,

  /**
   * If `true`, the list-item will be rendered as a button.
   */
  button: _propTypes.default.bool,

  /**
   * The content of the component.
   */
  children: _propTypes.default.node,

  /**
   * Set the color of the ListItem component.
   *
   * Color(s) can be set in `theme.palette`.
   */
  color: _propTypes.default.string,

  /**
   * If `true`, the list-item will set to disabled.
   */
  disabled: _propTypes.default.bool,

  /**
   * If `true`, a 1px border is added to the bottom of the list-item.
   */
  divider: _propTypes.default.bool,

  /**
   * Sets the `margin` css property.
   */
  margin: _propTypes.default.string,

  /**
   * Sets the `padding` css property.
   */
  padding: _propTypes.default.string
} : {};
ListItem.defaultProps = {
  active: false,
  backgroundColor: null,
  borderColor: 'muted',
  borderRadius: '0',
  borderWidth: '0',
  button: false,
  children: null,
  color: null,
  disabled: false,
  divider: false,
  margin: '0',
  padding: null
};
ListItem.displayName = 'ListItem';
var _default = ListItem;
exports.default = _default;