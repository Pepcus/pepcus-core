"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _FaIcon = _interopRequireDefault(require("../FaIcon"));

var _Modal = _interopRequireDefault(require("../Modal"));

var _Row = _interopRequireDefault(require("../Row"));

var _Typography = _interopRequireDefault(require("../Typography"));

var _LoadingIcon = _interopRequireDefault(require("./LoadingIcon"));

var _LoadingModalContent = _interopRequireDefault(require("./LoadingModalContent"));

/**
 * A Loading component that gets attached to the `document.body`
 *
 * @method      Loading
 * @param       {Object} props
 * @constructor
 */
function Loading(props) {
  var BackdropProps = props.BackdropProps,
      animate = props.animate,
      color = props.color,
      icon = props.icon,
      loading = props.loading,
      noIcon = props.noIcon,
      noUpperCase = props.noUpperCase,
      text = props.text,
      rest = (0, _objectWithoutProperties2.default)(props, ["BackdropProps", "animate", "color", "icon", "loading", "noIcon", "noUpperCase", "text"]); // Build the loading text.

  var loadingText = text && (noUpperCase ? text : text.toUpperCase()) || 'loading';
  return _react.default.createElement(_Modal.default, Object.assign({
    BackdropProps: (0, _objectSpread2.default)({
      color: 'loading',
      opacity: 0.8
    }, BackdropProps),
    ContentComponent: _LoadingModalContent.default,
    open: loading
  }, rest), _react.default.createElement(_Row.default, {
    alignItems: "center",
    gutter: false,
    justify: "flex-start",
    width: "100%",
    wrap: "nowrap"
  }, !noIcon && _react.default.createElement(_LoadingIcon.default, {
    animate: animate
  }, _react.default.createElement(_FaIcon.default, Object.assign({
    color: color,
    icon: "cog",
    height: "25px",
    width: "25px"
  }, icon))), _react.default.createElement(_Typography.default, {
    color: color,
    gutterBottom: "0",
    gutterLeft: !noIcon && '10px',
    gutterTop: "0",
    type: "title"
  }, loadingText)));
}

Loading.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * Additional props for the internally rendered `Backdrop` Component.
   */
  BackdropProps: _propTypes.default.object,

  /**
   * If `true`, the loading icon will animate (rotate 360 degrees).
   */
  animate: _propTypes.default.bool,

  /**
   * Set the color of the internal `Typography` and `FaIcon` Component.
   *
   * Color(s) can be set in `theme.palette`.
   */
  color: _propTypes.default.string,

  /**
   * Additional props for the internally rendered `FaIcon` Component.
   */
  icon: _propTypes.default.object,

  /**
   * If `true`, the loading modal will show.
   */
  loading: _propTypes.default.bool,

  /**
   * If `true`, the loading icon won't be rendered.
   */
  noIcon: _propTypes.default.bool,

  /**
   * If `true`, the loading text will not be upper cased.
   */
  noUpperCase: _propTypes.default.bool,

  /**
   * The loading text to display next to the loading icon.
   */
  text: _propTypes.default.string
} : {};
Loading.defaultProps = {
  BackdropProps: null,
  animate: true,
  color: '#0C518A',
  icon: null,
  loading: false,
  noIcon: false,
  noUpperCase: false,
  text: 'loading'
};
var _default = Loading;
exports.default = _default;