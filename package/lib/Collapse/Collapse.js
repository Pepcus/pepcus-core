"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _Transition = _interopRequireDefault(require("react-transition-group/Transition"));

var _transitions = require("../../constants/transitions");

var _transitions2 = require("../../utils/transitions");

var _actions = require("../../utils/actions");

var _CollapseStyled = _interopRequireDefault(require("./CollapseStyled"));

var _CollapseWrapper = _interopRequireDefault(require("./CollapseWrapper"));

var _CollapseWrapperInner = _interopRequireDefault(require("./CollapseWrapperInner"));

/**
 * Collapse from the top of the given child element.
 *
 * @method      Collapse
 * @param       {Object} props Component props
 * @constructor
 */
function Collapse(props) {
  var children = props.children,
      collapsedHeight = props.collapsedHeight,
      inProps = props.in,
      onEnter = props.onEnter,
      onEntered = props.onEntered,
      onEntering = props.onEntering,
      onExit = props.onExit,
      onExiting = props.onExiting,
      onMount = props.onMount,
      role = props.role,
      timeout = props.timeout,
      rest = (0, _objectWithoutProperties2.default)(props, ["children", "collapsedHeight", "in", "onEnter", "onEntered", "onEntering", "onExit", "onExiting", "onMount", "role", "timeout"]); // Create a ref for the wrapper to extract it's height.

  var wrapperRef = _react.default.useRef(); // Call the `onMount` function when the component is successfully mounted.


  _react.default.useEffect(function () {
    // Call the `onMount` func.
    (0, _actions.callFunc)(onMount, wrapperRef);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
  // EXPANDING
  // Handle the enter state.


  function handleOnEnter(element, isAppearing) {
    // Update the height of the element to match that of the collapsed height.
    element.style.height = collapsedHeight; // Call the callback if present.

    (0, _actions.callFunc)(onEnter, element, isAppearing);
  } // Handle the entering state.


  function handleOnEntering(element, isAppearing) {
    // Determine the current height of the inner wrapper (the main content).
    var wrapperHeight = wrapperRef.current ? wrapperRef.current.clientHeight : 0; // Extract the requested duration, timeout, for the transition.

    var _getTransitionProps = (0, _transitions2.getTransitionProps)(props, {
      mode: 'enter'
    }),
        transitionDuration = _getTransitionProps.duration; // Update the transition duration based on the supplied `timeout` property.


    element.style.transitionDuration = typeof transitionDuration === 'string' ? transitionDuration : "".concat(transitionDuration, "ms"); // Update the height of the element with that of the inner wrapper (the main content).

    element.style.height = "".concat(wrapperHeight, "px"); // Call the callback if present.

    (0, _actions.callFunc)(onEntering, element, isAppearing);
  } // Handle the entered state.


  function handleOnEntered(element, isAppearing) {
    // Update the height of the element to 'auto' since the collapse-in transition has completed.
    element.style.height = 'auto'; // Call the callback if present.

    (0, _actions.callFunc)(onEntered, element, isAppearing);
  } // COLLAPSING
  // Handle the exit state.


  function handleOnExit(element) {
    // Determine the current height of the inner wrapper (the main content).
    var wrapperHeight = wrapperRef.current ? wrapperRef.current.clientHeight : 0; // Update the height of the element with that of the inner wrapper (the main content).

    element.style.height = "".concat(wrapperHeight, "px"); // Reading a dimension property from an HTML element triggers a reflow.

    element.offsetHeight; // eslint-disable-line no-unused-expressions
    // Call the callback if present.

    (0, _actions.callFunc)(onExit, element);
  } // Handle the exiting state.


  function handleOnExiting(element) {
    // Extracting this variable triggers a reflow.
    var _height = element.offsetHeight; // eslint-disable-line no-unused-vars
    // Extract the requested duration, timeout, for the transition.

    var _getTransitionProps2 = (0, _transitions2.getTransitionProps)(props, {
      mode: 'enter'
    }),
        transitionDuration = _getTransitionProps2.duration; // Update the transition duration based on the supplied `timeout` property.


    element.style.transitionDuration = typeof transitionDuration === 'string' ? transitionDuration : "".concat(transitionDuration, "ms"); // Update the height of the element to match that of the collapsed height.

    element.style.height = collapsedHeight; // Call the callback if present.

    (0, _actions.callFunc)(onExiting, element);
  } // Render the Collapse.


  return _react.default.createElement(_Transition.default, Object.assign({
    "aria-expanded": role ? inProps : null,
    in: inProps,
    onEnter: handleOnEnter,
    onEntered: handleOnEntered,
    onEntering: handleOnEntering,
    onExit: handleOnExit,
    onExiting: handleOnExiting,
    timeout: timeout
  }, rest), function (state, childrenProps) {
    return _react.default.createElement(_CollapseStyled.default, Object.assign({
      entered: state === 'entered',
      isHidden: state === 'exited' && !inProps && collapsedHeight === '0px',
      minHeight: collapsedHeight
    }, childrenProps), _react.default.createElement(_CollapseWrapper.default, {
      ref: wrapperRef
    }, _react.default.createElement(_CollapseWrapperInner.default, null, children)));
  });
}

Collapse.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * A single element for the Transition to render.
   */
  children: _propTypes.default.node,

  /**
   * The height of the container when it is collapsed.
   */
  collapsedHeight: _propTypes.default.string,

  /**
   * If `true`, the transition will kick in.
   */
  in: _propTypes.default.bool,
  onEnter: _propTypes.default.func,
  onEntered: _propTypes.default.func,
  onEntering: _propTypes.default.func,
  onExit: _propTypes.default.func,
  onExiting: _propTypes.default.func,
  onMount: _propTypes.default.func,
  role: _propTypes.default.bool,

  /**
   * The duration for the transition, in milliseconds.
   */
  timeout: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.shape({
    enter: _propTypes.default.number,
    exit: _propTypes.default.number
  })])
} : {};
Collapse.defaultProps = {
  children: null,
  collapsedHeight: '0px',
  in: false,
  onEnter: null,
  onEntered: null,
  onEntering: null,
  onExit: null,
  onExiting: null,
  onMount: null,
  role: null,
  timeout: _transitions.DURATION.long
};
var _default = Collapse;
exports.default = _default;