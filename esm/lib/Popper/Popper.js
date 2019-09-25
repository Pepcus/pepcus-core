import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import _objectSpread from "@babel/runtime/helpers/objectSpread";

/* eslint-disable react/no-find-dom-node */
import React from 'react';
import PropTypes from 'prop-types';
import PopperJS from 'popper.js';
import ReactDOM from 'react-dom';
import Portal from "../Portal";
import { getAnchorEl } from "../../utils/component";

class Popper extends React.Component {
  static getDerivedStateFromProps(nextProps) {
    if (nextProps.open) {
      return {
        exited: false
      };
    }

    if (!nextProps.transition) {
      return {
        exited: true
      };
    }

    return null;
  }

  constructor(props) {
    super(props);
    this.popper = null;
    this.isCmpMounted = null;

    this.componentDidMount = () => {
      this.isCmpMounted = true;
    };

    this.handleRendered = () => {
      const _this$props = this.props,
            anchorEl = _this$props.anchorEl,
            open = _this$props.open,
            placement = _this$props.placement,
            disable = _this$props.disable;
      const popperNode = ReactDOM.findDOMNode(this);
      const popperOptions = {};

      if (this.popper) {
        this.popper.destroy();
        this.popper = null;
      }

      if (!anchorEl || !popperNode || !open) {
        return;
      }

      this.popper = new PopperJS(getAnchorEl(anchorEl), popperNode, _objectSpread({
        placement
      }, popperOptions, {
        modifiers: _objectSpread({}, disable ? {} : {
          preventOverflow: {
            boundariesElement: 'window'
          }
        }, popperOptions.modifiers),
        onCreate: this.handlePopperUpdate,
        onUpdate: this.handlePopperUpdate
      }));
    };

    this.handlePopperUpdate = popperData => {
      const placement = this.state.placement;

      if (popperData.placement !== placement) {
        this.isCmpMounted && this.setState(() => ({
          placement: popperData.placement
        }));
      }
    };

    this.handleExited = () => {
      this.isCmpMounted && this.setState(() => ({
        exited: true
      }));
      this.handleClose();
    };

    this.handleClose = () => {
      const timeout = this.props.timeout;

      if (!this.popper) {
        return;
      }

      if (timeout) {
        const ms = typeof timeout === 'number' ? timeout : timeout.exit;
        setTimeout(() => {
          this.isCmpMounted && this.setState(() => ({
            exited: true
          }));

          if (this.popper) {
            this.popper.destroy();
            this.popper = null;
          }
        }, ms);
      } else {
        this.isCmpMounted && this.setState(() => ({
          exited: true
        }));
        this.popper.destroy();
        this.popper = null;
      }
    };

    const _open = this.props.open;
    this.state = {
      exited: !_open
    };
  }

  componentDidUpdate(prevProps, prevState) {
    const _this$props2 = this.props,
          open = _this$props2.open,
          anchorEl = _this$props2.anchorEl,
          disable = _this$props2.disable,
          placement = _this$props2.placement;

    if (prevProps.open && !open) {
      this.handleClose();
    }

    if (prevProps.anchorEl !== anchorEl || prevProps.disable !== disable || prevProps.placement !== placement) {
      this.handleRendered();
    }
  }

  componentWillUnmount() {
    this.isCmpMounted = false;
    this.handleClose();
  }

  render() {
    const _this$props3 = this.props,
          anchorEl = _this$props3.anchorEl,
          children = _this$props3.children,
          container = _this$props3.container,
          disable = _this$props3.disable,
          keepMounted = _this$props3.keepMounted,
          open = _this$props3.open,
          placementProps = _this$props3.placement,
          transition = _this$props3.transition,
          other = _objectWithoutProperties(_this$props3, ["anchorEl", "children", "container", "disable", "keepMounted", "open", "placement", "transition"]);

    const _this$state = this.state,
          exited = _this$state.exited,
          placement = _this$state.placement;

    if (!keepMounted && !open && (!transition || exited)) {
      return null;
    }

    const childProps = {
      placement: placement || placementProps
    };

    if (transition) {
      childProps.TransitionProps = {
        in: open,
        onExited: this.handleExited
      };
    }

    return React.createElement(Portal, {
      onMount: this.handleRendered,
      disable: disable,
      container: container
    }, React.createElement("div", Object.assign({
      role: "tooltip",
      style: {
        position: 'absolute'
      }
    }, other), typeof children === 'function' ? children(childProps) : children));
  }

}

Popper.defaultProps = {
  anchorEl: null,
  children: null,
  container: null,
  disable: false,
  keepMounted: false,
  open: false,
  placement: 'bottom',
  timeout: null,
  transition: false
};
Popper.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * The DOM element that is used to position the Popper.
   */
  anchorEl: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),

  /**
   * The children of Popper.
   */
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),

  /**
   * The `container` will be passed to the Portal component.
   */
  container: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),

  /**
   * Disable the React portal behavior.
   * Only the children will be rendered.
   */
  disable: PropTypes.bool,

  /**
   * Always keep the children mounted in the DOM.
   */
  keepMounted: PropTypes.bool,

  /**
   * If `true`, Popper will be visible.
   */
  open: PropTypes.bool,

  /**
   * The placement of the Popper relative to its `anchorEl`.
   */
  placement: PropTypes.oneOf(['bottom', 'bottom-end', 'bottom-start', 'left', 'left-end', 'left-start', 'right', 'right-end', 'right-start', 'top', 'top-end', 'top-start']),

  /**
   * The duration for the transition, in milliseconds.
   */
  timeout: PropTypes.oneOfType([PropTypes.number, PropTypes.shape({
    enter: PropTypes.number,
    exit: PropTypes.number
  })]),

  /**
   * Should we allow transitions?
   */
  transition: PropTypes.bool
} : {};
export default Popper;