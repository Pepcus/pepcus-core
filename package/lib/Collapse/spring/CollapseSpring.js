"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireWildcard(require("react"));

var _reactSpring = require("react-spring");

var _CollapseSpringStyled = _interopRequireDefault(require("./CollapseSpringStyled"));

var _CollapseSpringWrapper = _interopRequireDefault(require("./CollapseSpringWrapper"));

/**
 * Collapse from the top of the given child element.
 *
 * @method      Collapse
 * @param       {Object} props Component props
 * @constructor
 */
function Collapse(props) {
  var children = props.children,
      collapsedHeightProps = props.collapsedHeight,
      inProps = props.in,
      rest = (0, _objectWithoutProperties2.default)(props, ["children", "collapsedHeight", "in"]); // Create a ref for the wrapper to extract it's height.

  var wrapperRef = (0, _react.useRef)(); // Update the height of the animatedProps.

  (0, _react.useEffect)(function () {
    // Extract the height of the wrapper.
    var height = wrapperRef.current.clientHeight; // Update the animated props with the new height, or the passed in `collapsedHeight`.

    setAnimatedProps({
      height: inProps ? height : collapsedHeight
    });
  }, // Make sure to only run when the `in` props change.
  [inProps]); // Fix the `collapsedHeight` in case sent in props was not a number.

  var collapsedHeight = typeof collapsedHeightProps === 'number' ? collapsedHeightProps : 0; // Create the animated spring transition.

  var _useSpring = (0, _reactSpring.useSpring)(function () {
    return (0, _objectSpread2.default)({
      from: {
        height: 0
      },
      config: (0, _objectSpread2.default)({
        tension: 200
      }, rest.config)
    }, rest);
  }),
      _useSpring2 = (0, _slicedToArray2.default)(_useSpring, 2),
      animatedProps = _useSpring2[0],
      setAnimatedProps = _useSpring2[1]; // Render the Collapse.


  return _react.default.createElement(_CollapseSpringStyled.default, {
    style: animatedProps
  }, _react.default.createElement(_CollapseSpringWrapper.default, {
    ref: wrapperRef
  }, children));
}

Collapse.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * A single element for the Transition to render.
   */
  children: _propTypes.default.oneOfType([_propTypes.default.element, _propTypes.default.func]),

  /**
   * The height of the container when it is collapsed.
   */
  collapsedHeight: _propTypes.default.number,

  /**
   * If `true`, the transition will kick in.
   */
  in: _propTypes.default.bool
} : {};
Collapse.defaultProps = {
  children: null,
  collapsedHeight: 0,
  in: false
};
var _default = Collapse;
exports.default = _default;