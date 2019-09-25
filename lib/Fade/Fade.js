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

var _Transition = _interopRequireDefault(require("react-transition-group/Transition"));

var _get2 = _interopRequireDefault(require("lodash/get"));

var _transitions = require("../../constants/transitions");

var _transitions2 = require("../../utils/transitions");

var _theme = require("../../constants/theme");

/**
 * Transition styles for the Fade transition
 *
 * @type {Object}
 */
var transitionStyles = {
  entering: {
    opacity: 1
  },
  entered: {
    opacity: 1
  }
};
/**
 * Fade in from transparent to opaque.
 *
 * @method      Fade
 * @param       {Object} props Component props
 * @constructor
 */

function Fade(props) {
  var children = props.children,
      inProps = props.in,
      onEnter = props.onEnter,
      onExit = props.onExit,
      rest = (0, _objectWithoutProperties2.default)(props, ["children", "in", "onEnter", "onExit"]); // Handle the enter state.

  function handleOnEnter(element, isAppearing) {
    // Reset the transition each time.
    (0, _transitions2.resetTransition)(element); // Extract the transition props from the current props.
    // These include timeout / duration.

    var transitionProps = (0, _transitions2.getTransitionProps)(props, {
      mode: 'enter'
    }); // Update the transition of the component with the 'enter' transition props.

    element.style.transition = _theme.THEME.transitions.create('opacity', transitionProps); // Call the callback if present.

    typeof onEnter === 'function' && onEnter(element, isAppearing);
  } // Handle the exit state.


  function handleOnExit(element) {
    // Extract the transition props from the current props.
    // These include timeout / duration.
    var transitionProps = (0, _transitions2.getTransitionProps)(props, {
      mode: 'exit'
    }); // Update the transition of the component with the 'exit' transition props.

    element.style.transition = _theme.THEME.transitions.create('opacity', transitionProps); // Call the callback if present.

    typeof onExit === 'function' && onExit(element);
  } // Determine the children styles.


  var childrenStyles = (0, _get2.default)(children, 'props.style', {}); // Render the Fade.

  return _react.default.createElement(_Transition.default, Object.assign({
    appear: true,
    in: inProps,
    onEnter: handleOnEnter,
    onExit: handleOnExit
  }, rest), function (state, childrenProps) {
    return _react.default.cloneElement(children, (0, _objectSpread2.default)({
      style: (0, _objectSpread2.default)({
        opacity: 0,
        visibility: state === 'exited' && !inProps ? 'hidden' : undefined
      }, transitionStyles[state], childrenStyles)
    }, childrenProps));
  });
}

Fade.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * A single element for the Transition to render.
   */
  children: _propTypes.default.node,

  /**
   * If `true`, the transition will kick in.
   */
  in: _propTypes.default.bool,
  onEnter: _propTypes.default.func,
  onExit: _propTypes.default.func,

  /**
   * The duration for the transition, in milliseconds.
   */
  timeout: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.shape({
    enter: _propTypes.default.number,
    exit: _propTypes.default.number
  })])
} : {};
Fade.defaultProps = {
  children: null,
  in: false,
  onEnter: null,
  onExit: null,
  timeout: _transitions.DURATION.long
};
var _default = Fade;
exports.default = _default;