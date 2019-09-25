"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createTransitions = exports.getAutoHeightDuration = exports.createNewTransition = exports.getTransitionProps = exports.resetTransition = void 0;

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _get2 = _interopRequireDefault(require("lodash/get"));

var _transitions = require("../constants/transitions");

/**
 * Reset a transition to its starting position.
 *
 * @method resetTransition
 * @param  {Node}        node The transition to reset
 * @return {Func}
 */
var resetTransition = function resetTransition(node) {
  return node.scrollTop;
};
/**
 * Get the duration and delay props for a given transition.
 *
 * @method getTransitionProps
 * @param  {Object}           [props={}]   The current props
 * @param  {Object}           [options={}] The current options
 * @return {Object}
 */


exports.resetTransition = resetTransition;

var getTransitionProps = function getTransitionProps() {
  var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var timeout = props.timeout,
      _props$style = props.style,
      style = _props$style === void 0 ? {} : _props$style; // Extract the transition duration and delay.

  var transitionDuration = (0, _get2.default)(style, 'transitionDuration', 0);
  var transitionDelay = (0, _get2.default)(style, 'transitionDelay', 0); // Extract the timeout mode if present.

  var modeTimeout = (0, _get2.default)(timeout, options.mode); // Build the duration for the transition.

  var duration = transitionDuration || typeof timeout === 'number' ? timeout : modeTimeout; // Build the delay for the transition.

  var delay = transitionDelay;
  return {
    duration: duration,
    delay: delay
  };
};
/**
 * Create a new transition for a given element and props.
 *
 * @method createNewTransition
 * @param  {Array}             [animProps=['all']] The different animations to create
 * @param  {Object}            [animOptions={}]    The animation options
 * @return {string}                                The final animation
 */


exports.getTransitionProps = getTransitionProps;

var createNewTransition = function createNewTransition() {
  var animProps = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : ['all'];
  var animOptions = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var _animOptions$duration = animOptions.duration,
      durationOption = _animOptions$duration === void 0 ? _transitions.DURATION.regular : _animOptions$duration,
      _animOptions$easing = animOptions.easing,
      easingOption = _animOptions$easing === void 0 ? _transitions.EASING.easeInOut : _animOptions$easing,
      _animOptions$delay = animOptions.delay,
      delayOption = _animOptions$delay === void 0 ? 0 : _animOptions$delay; // Convert the props to an Array if not already one.

  var props = Array.isArray(animProps) ? (0, _toConsumableArray2.default)(animProps) : [animProps]; // Format the animation duration by rounding it up and adding `ms` string to it.

  var animDuration = typeof durationOption === 'string' ? durationOption : "".concat(Math.round(durationOption), "ms"); // Format the animation delay by rounding it up and adding `ms` string to it.

  var animDelay = typeof delayOption === 'string' ? delayOption : "".concat(Math.round(delayOption), "ms"); // Build the animation based on the given props.

  var animation = props.map(function (animType) {
    return "".concat(animType, " ").concat(animDuration, " ").concat(easingOption, " ").concat(animDelay);
  }).join(',');
  return animation;
};
/**
 * Determine the 'auto-height' duration for a given HTML element.
 *
 * @method getAutoHeightDuration
 * @param  {number}              height The height of the HTML element to determine the duration for
 * @return {number}
 */


exports.createNewTransition = createNewTransition;

var getAutoHeightDuration = function getAutoHeightDuration(height) {
  // Return 0 if no height is defined
  if (!height) {
    return 0;
  } // Divide the height by 36


  var heightConstant = height / 36; // @see {@link https://www.wolframalpha.com/input/?i=(4+%2B+15+*+(x+%2F+36+)+**+0.25+%2B+(x+%2F+36)+%2F+5)+*+10}

  return Math.round((4 + 15 * Math.pow(heightConstant, 0.25) + heightConstant / 5) * 10);
};
/**
 * Create transitions for the current theme.
 *
 * @method createTransitions
 * @return {Object}          The map container all of the transitions functions and values
 */


exports.getAutoHeightDuration = getAutoHeightDuration;

var createTransitions = function createTransitions() {
  return {
    easing: _transitions.EASING,
    duration: _transitions.DURATION,
    create: createNewTransition,
    getAutoHeightDuration: getAutoHeightDuration
  };
};

exports.createTransitions = createTransitions;