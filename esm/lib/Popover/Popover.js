import PropTypes from 'prop-types';
import React from 'react';
import Fade from "../Fade";
import Popper from "../Popper";
import RootRef from "../RootRef";
import { genID } from "../../utils/generate";
import { getThemeProps } from "../../utils/theme";

class Popover extends React.Component {
  constructor(...args) {
    super(...args);
    this.anchorRef = null;

    this.assignAnchorRef = node => this.anchorRef = node;
  }

  componentDidMount() {
    const open = this.props.open; // If we have a controlled Popover, then we should render immediately.

    if (open) {
      this.forceUpdate();
    }
  }

  componentWillUnmount() {
    // Clear out all of the timeouts.
    clearTimeout(this.enterTimer);
    clearTimeout(this.leaveTimer);
  }
  /**
   * Assign a `ref` to the anchor node.
   *
   * @method assignAnchorRef
   * @param  {React}       node The react DOM node
   * @return {Ref}
   */


  render() {
    const _this$props = this.props,
          PopperProps = _this$props.PopperProps,
          TransitionComponent = _this$props.TransitionComponent,
          TransitionProps = _this$props.TransitionProps,
          anchor = _this$props.anchor,
          arrowSize = _this$props.arrowSize,
          children = _this$props.children,
          color = _this$props.color,
          id = _this$props.id,
          distanceFromContainer = _this$props.distanceFromContainer,
          maxWidth = _this$props.maxWidth,
          openProps = _this$props.open,
          placement = _this$props.placement,
          timeoutProps = _this$props.timeout,
          title = _this$props.title; // Get the default timeout for the Popover.

    const timeout = typeof timeoutProps === 'number' ? timeoutProps : getThemeProps('transitions.duration.regular')(); // Store the current open as the `openProps`.

    let open = openProps; // What will we do with a blank Popover?

    if (!anchor) {
      open = false;
    } // Build the props for the Anchor


    const anchorProps = {
      'aria-describedby': id || `Popover_${genID()}`,
      title: typeof title === 'string' ? title : null
    };
    return React.createElement(React.Fragment, null, React.createElement(RootRef, {
      rootRef: this.assignAnchorRef
    }, React.cloneElement(anchor, anchorProps)), React.createElement(Popper, Object.assign({
      anchorEl: this.anchorRef,
      id: anchorProps['aria-describedby'],
      open: open,
      placement: placement,
      timeout: timeout,
      transition: true
    }, PopperProps), ({
      placement: childPlacement,
      TransitionProps: childTransitionProps
    }) => React.createElement(TransitionComponent, Object.assign({
      direction: childPlacement.split('-')[0],
      timeout: timeout
    }, childTransitionProps, TransitionProps), children({
      anchorRef: this.anchorRef,
      arrowSize,
      color,
      distanceFromContainer,
      maxWidth,
      placement: childPlacement
    }))));
  }

}

Popover.defaultProps = {
  PopperProps: {},
  TransitionComponent: Fade,
  TransitionProps: {},
  anchor: null,
  arrowSize: 7.5,
  children: null,
  color: 'dark',
  distanceFromContainer: 5,
  enterDelay: 0,
  id: null,
  leaveDelay: 0,
  maxWidth: '400px',
  onClose: null,
  onOpen: null,
  open: null,
  placement: 'top',
  timeout: null,
  title: ''
};
Popover.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * Properties passed down to the `Popper.js` component.
   */
  PopperProps: PropTypes.object,

  /**
   * A Transition Component.
   */
  TransitionComponent: PropTypes.oneOfType([PropTypes.string, PropTypes.func, PropTypes.object]),

  /**
   * Properties passed down to the `TransitionComponent` component.
   */
  TransitionProps: PropTypes.object,

  /**
   * The main anchor of the Popover.
   */
  anchor: PropTypes.node,

  /**
   * The size of the Popover Arrow.
   */
  arrowSize: PropTypes.number,

  /**
   * The main reference component.
   */
  children: PropTypes.func,

  /**
   * Apply themed styling to Popover.
   *
   * Colors can be defined in `theme.palette`.
   */
  color: PropTypes.string,

  /**
   * The number of milliseconds to wait before showing the Popover.
   */
  enterDelay: PropTypes.number,

  /**
   * Helps resolve the accessibility issue on readers / etc.
   * Fallbacks to an auto-generated ID.
   */
  id: PropTypes.string,

  /**
   * The number of milliseconds to wait before hiding the Popover.
   */
  leaveDelay: PropTypes.number,

  /**
   * The distance from the Popover to its container.
   */
  distanceFromContainer: PropTypes.number,

  /**
   * The maxWidth for the rendered Popover container.
   */
  maxWidth: PropTypes.string,

  /**
   * Event fired when the Popover is ready to be closed.
   */
  onClose: PropTypes.func,

  /**
   * Event fired when the Popover is ready to be opened.
   */
  onOpen: PropTypes.func,

  /**
   * If `true`, the Popover gets displayed.
   */
  open: PropTypes.bool,

  /**
   * The placement of the Popover.
   * This goes directly with placements defined in `Popper.js`.
   */
  placement: PropTypes.oneOf(['top-start', 'top', 'top-end', 'right-start', 'right', 'right-end', 'bottom-start', 'bottom', 'bottom-end', 'left-start', 'left', 'left-end']),

  /**
   * The duration for the transition, in milliseconds.
   */
  timeout: PropTypes.oneOfType([PropTypes.number, PropTypes.shape({
    enter: PropTypes.number,
    exit: PropTypes.number
  })]),

  /**
   * The Popover's title.
   */
  title: PropTypes.node
} : {};
export default Popover;