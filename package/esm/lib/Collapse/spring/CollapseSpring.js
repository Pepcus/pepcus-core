import _objectSpread from "@babel/runtime/helpers/objectSpread";
import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import PropTypes from 'prop-types';
import React, { useEffect, useRef } from 'react';
import { useSpring } from 'react-spring';
import CollapseStyled from "./CollapseSpringStyled";
import CollapseWrapper from "./CollapseSpringWrapper";
/**
 * Collapse from the top of the given child element.
 *
 * @method      Collapse
 * @param       {Object} props Component props
 * @constructor
 */

function Collapse(props) {
  const children = props.children,
        collapsedHeightProps = props.collapsedHeight,
        inProps = props.in,
        rest = _objectWithoutProperties(props, ["children", "collapsedHeight", "in"]); // Create a ref for the wrapper to extract it's height.


  const wrapperRef = useRef(); // Update the height of the animatedProps.

  useEffect(() => {
    // Extract the height of the wrapper.
    const height = wrapperRef.current.clientHeight; // Update the animated props with the new height, or the passed in `collapsedHeight`.

    setAnimatedProps({
      height: inProps ? height : collapsedHeight
    });
  }, // Make sure to only run when the `in` props change.
  [inProps]); // Fix the `collapsedHeight` in case sent in props was not a number.

  const collapsedHeight = typeof collapsedHeightProps === 'number' ? collapsedHeightProps : 0; // Create the animated spring transition.

  const _useSpring = useSpring(() => _objectSpread({
    from: {
      height: 0
    },
    config: _objectSpread({
      tension: 200
    }, rest.config)
  }, rest)),
        _useSpring2 = _slicedToArray(_useSpring, 2),
        animatedProps = _useSpring2[0],
        setAnimatedProps = _useSpring2[1]; // Render the Collapse.


  return React.createElement(CollapseStyled, {
    style: animatedProps
  }, React.createElement(CollapseWrapper, {
    ref: wrapperRef
  }, children));
}

Collapse.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * A single element for the Transition to render.
   */
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.func]),

  /**
   * The height of the container when it is collapsed.
   */
  collapsedHeight: PropTypes.number,

  /**
   * If `true`, the transition will kick in.
   */
  in: PropTypes.bool
} : {};
Collapse.defaultProps = {
  children: null,
  collapsedHeight: 0,
  in: false
};
export default Collapse;