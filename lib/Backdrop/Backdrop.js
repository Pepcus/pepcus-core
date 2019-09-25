"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _rgba = _interopRequireDefault(require("polished/lib/color/rgba"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Fade = _interopRequireDefault(require("../Fade"));

var _theme = require("../../utils/theme");

var BackdropStyled = _styledComponents.default.div.withConfig({
  displayName: "Backdrop__BackdropStyled",
  componentId: "sc-1fnlix7-0"
})(["align-items:center;bottom:0;display:flex;justify-content:center;left:0;position:", ";right:0;top:0;user-select:none;z-index:1000;", ";", ";"], function (_ref) {
  var position = _ref.position;
  return position || 'fixed';
}, (0, _theme.getThemeProps)('Backdrop.styles'), function (_ref2) {
  var theme = _ref2.theme,
      color = _ref2.color,
      opacity = _ref2.opacity;
  var backgroundColor = (0, _rgba.default)((0, _theme.getThemeProps)("palette.".concat(color, ".color"), '#2D2D2D', {
    theme: theme
  }), opacity);
  return {
    backgroundColor: backgroundColor
  };
});
/**
 * Increment the transition duration for inner transition to take effect.
 *
 * @method incrementInnerDuration
 * @param  {number|Object}        duration The transition duration
 * @return {number|Object}
 */


var incrementInnerDuration = function incrementInnerDuration(duration) {
  var INNER_DURATION = 350;

  if (typeof duration === 'number') {
    return duration + INNER_DURATION;
  }

  if (duration && (0, _typeof2.default)(duration) === 'object') {
    return {
      enter: duration.enter + INNER_DURATION,
      exit: duration.exit + INNER_DURATION
    };
  }

  return INNER_DURATION;
};

var Backdrop = function Backdrop(_ref3) {
  var TransitionComponent = _ref3.TransitionComponent,
      children = _ref3.children,
      onBackdropClick = _ref3.onBackdropClick,
      opacity = _ref3.opacity,
      open = _ref3.open,
      position = _ref3.position,
      transitionDuration = _ref3.transitionDuration,
      color = _ref3.color,
      other = (0, _objectWithoutProperties2.default)(_ref3, ["TransitionComponent", "children", "onBackdropClick", "opacity", "open", "position", "transitionDuration", "color"]);
  return _react.default.createElement(_Fade.default, Object.assign({
    appear: true,
    in: open,
    timeout: transitionDuration
  }, other), _react.default.createElement(BackdropStyled, {
    "aria-hidden": "true",
    onClick: onBackdropClick,
    opacity: opacity,
    position: position,
    color: color
  }, _react.default.createElement(TransitionComponent, {
    appear: true,
    in: true,
    timeout: incrementInnerDuration(transitionDuration)
  }, children)));
};

Backdrop.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * A Transition Component.
   */
  TransitionComponent: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.func, _propTypes.default.object]),

  /**
   * The main content for the backdrop.
   */
  children: _propTypes.default.node,

  /**
   * Apply themed styling to Backdrop.
   *
   * Colors can be defined in `theme.palette`.
   */
  color: _propTypes.default.string,

  /**
   * Callback fired on backdrop click event.
   */
  onBackdropClick: _propTypes.default.func,

  /**
   * The opacity of the background color.
   */
  opacity: _propTypes.default.number,

  /**
   * If `true`, the Backdrop is open.
   */
  open: _propTypes.default.bool,

  /**
   * Sets the 'position' css property.
   */
  position: _propTypes.default.oneOf(['absolute', 'fixed', 'relative']),

  /**
   * The duration for the transition, in milliseconds.
   */
  transitionDuration: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.shape({
    enter: _propTypes.default.number,
    exit: _propTypes.default.number
  })])
} : {};
Backdrop.defaultProps = {
  TransitionComponent: _Fade.default,
  children: null,
  color: 'dark',
  onBackdropClick: function onBackdropClick() {},
  opacity: 0.5,
  open: false,
  position: 'fixed',
  transitionDuration: 0
};
var _default = Backdrop;
exports.default = _default;