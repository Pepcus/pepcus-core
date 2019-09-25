import _objectSpread from "@babel/runtime/helpers/objectSpread";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import PropTypes from 'prop-types';
import React from 'react';
import Transition from 'react-transition-group/Transition';
import _get from 'lodash/get';
import { THEME } from "../../constants/theme";
import { getTransitionProps, resetTransition } from "../../utils/transitions";

const getScale = val => `scale(${val}, ${val ** 2})`;
/**
 * Transition styles for the Grow transition
 *
 * @type {Object}
 */


const transitionStyles = {
  entering: {
    opacity: 1,
    transform: getScale(1)
  },
  entered: {
    opacity: 1,
    transform: `${getScale(1)} translateZ(0)`
  }
};

class Grow extends React.Component {
  constructor(...args) {
    super(...args);
    this.autoTimeout = null;
    this.timer = null;

    this.componentWillUnmount = () => {
      clearTimeout(this.timer);
    };

    this.handleEnter = (node, isAppearing) => {
      const _this$props = this.props,
            onEnter = _this$props.onEnter,
            timeout = _this$props.timeout;
      let duration = 0;
      resetTransition(node);

      const _getTransitionProps = getTransitionProps(this.props, {
        mode: 'enter'
      }),
            transitionDuration = _getTransitionProps.duration,
            delay = _getTransitionProps.delay;

      if (timeout === 'auto') {
        duration = THEME.transitions.getAutoHeightDuration(node.clientHeight);
        this.autoTimeout = duration;
      } else {
        duration = transitionDuration;
      }

      node.style.transition = [THEME.transitions.create('opacity', {
        duration,
        delay
      }), THEME.transitions.create('transform', {
        duration: duration * 0.666,
        delay
      })];

      if (typeof onEnter === 'function') {
        onEnter(node, isAppearing);
      }
    };

    this.handleExit = node => {
      const _this$props2 = this.props,
            onExit = _this$props2.onExit,
            timeout = _this$props2.timeout;
      let duration = 0;

      const _getTransitionProps2 = getTransitionProps(this.props, {
        mode: 'exit'
      }),
            transitionDuration = _getTransitionProps2.duration,
            delay = _getTransitionProps2.delay;

      if (timeout === 'auto') {
        duration = THEME.transitions.getAutoHeightDuration(node.clientHeight);
        this.autoTimeout = duration;
      } else {
        duration = transitionDuration;
      }

      node.style.transition = [THEME.transitions.create('opacity', {
        duration,
        delay
      }), THEME.transitions.create('transform', {
        duration: duration * 0.666,
        delay: delay || duration * 0.333
      })];
      node.style.opacity = '0';
      node.style.transform = getScale(0.75);

      if (typeof onExit === 'function') {
        onExit(node);
      }
    };

    this.addEndListener = (node, done) => {
      const timeout = this.props.timeout;

      if (timeout === 'auto') {
        this.timer = setTimeout(done, this.autoTimeout || 0);
      }
    };
  }

  render() {
    const _this$props3 = this.props,
          children = _this$props3.children,
          onEnter = _this$props3.onEnter,
          onExit = _this$props3.onExit,
          styleProp = _this$props3.style,
          timeout = _this$props3.timeout,
          other = _objectWithoutProperties(_this$props3, ["children", "onEnter", "onExit", "style", "timeout"]);

    const childrenStyles = React.isValidElement(children) ? _get(children, 'props.style', {}) : {};

    const style = _objectSpread({}, styleProp, childrenStyles);

    return React.createElement(Transition, Object.assign({
      addEndListener: this.addEndListener,
      appear: true,
      onEnter: this.handleEnter,
      onExit: this.handleExit,
      timeout: timeout === 'auto' ? null : timeout
    }, other), (state, childProps) => React.cloneElement(children, _objectSpread({
      style: _objectSpread({
        opacity: 0,
        transform: getScale(0.75)
      }, transitionStyles[state], style)
    }, childProps)));
  }

}

Grow.defaultProps = {
  children: null,
  in: null,
  onEnter: null,
  onExit: null,
  style: null,
  timeout: 'auto'
};
Grow.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * A single element for the Transition to render.
   */
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.func]),

  /**
   * If `true`, the transition will kick in.
   */
  in: PropTypes.bool,

  /**
   * Callback fired before the `entering` status is applied.
   *
   * @param {HTMLElement} node
   * @param {boolean}     isAppearing
   */
  onEnter: PropTypes.func,

  /**
   * Callback fired before the `exiting` status is applied.
   *
   * @param {HTMLElement} node
   */
  onExit: PropTypes.func,

  /**
   * @ignore
   */
  style: PropTypes.object,

  /**
   * The duration for the transition, in milliseconds.
   */
  timeout: PropTypes.oneOfType([PropTypes.number, PropTypes.shape({
    enter: PropTypes.number,
    exit: PropTypes.number
  })])
} : {};
export default Grow;