import PropTypes from 'prop-types';
import React from 'react';
import _isEmpty from 'lodash/isEmpty';
import _omit from 'lodash/omit';
import Fade from "../Fade";
import Popper from "../Popper";
import RootRef from "../RootRef";
import { genID } from "../../utils/generate";
import { getThemeProps } from "../../utils/theme";
import { isReactComponent } from "../../utils/component";
import TooltipStyled from "./TooltipStyled";

class Tooltip extends React.Component {
  // If we have a controlled Tooltip.
  // Reference to the Tooltip's children.
  // Timers.
  // Internal state,
  // doesn't do a re-render().
  constructor(props) {
    super(props); // We have a controlled Tooltip if the parent is providing the `props.open`.

    this.isControlled = null;
    this.childRef = null;
    this.enterTimer = null;
    this.leaveTimer = null;
    this.internalState = {
      hover: false,
      focus: false
    };

    this.getContentComponent = () => {
      const _this$props = this.props,
            content = _this$props.content,
            tooltip = _this$props.tooltip,
            tooltipProps = _this$props.tooltipProps,
            tooltipsList = _this$props.tooltipsList; // Find the content component from the list of components.

      const ContentComponent = !_isEmpty(tooltip) && tooltip.id && tooltipsList[tooltip.id]; // Determine whether the found component is a valid react component.
      // This validation excludes HTML tagNames, and strings, it must be a functional stateless or statefull or styled component.

      const valid = React.isValidElement(ContentComponent) || isReactComponent(ContentComponent); // If needed, we can assign a ref for the wrapped or regular React component.

      const componentRef = valid && (ContentComponent.WrappedComponent || ContentComponent);
      return {
        Component: valid ? React.createElement(ContentComponent, Object.assign({}, tooltipProps, _omit(tooltip, ['id']))) : React.createElement('div', null, content),
        componentRef
      };
    };

    this.handleEnter = event => {
      const _this$props2 = this.props,
            children = _this$props2.children,
            enterDelay = _this$props2.enterDelay;
      const childProps = children.props;

      if (event.type === 'focus') {
        this.internalState.focus = true;

        if (typeof childProps.onFocus === 'function') {
          childProps.onFocus(event);
        }
      }

      if (event.type === 'mouseenter') {
        this.internalState.hover = true;

        if (typeof childProps.onMouseEnter === 'function') {
          childProps.onMouseEnter(event);
        }
      } // Remove the title from the child.
      // We don't want the native browser tooltip to show up.


      this.childRef.setAttribute('title', ''); // Clear timeouts for enter and leave delay.

      clearTimeout(this.enterTimer);
      clearTimeout(this.leaveTimer); // If there is an `enterDelay`, then set a timeout to open the Tooltip.

      if (enterDelay) {
        event.persist();
        this.enterTimer = setTimeout(() => {
          this.handleOpen(event);
        }, enterDelay);
      } else {
        this.handleOpen(event);
      }
    };

    this.handleOpen = event => {
      const onOpen = this.props.onOpen;

      if (!this.isControlled) {
        this.setState({
          open: true
        });
      }

      if (typeof onOpen === 'function') {
        onOpen(event, true);
      }
    };

    this.handleLeave = event => {
      const _this$props3 = this.props,
            children = _this$props3.children,
            leaveDelay = _this$props3.leaveDelay;
      const childProps = children.props;

      if (event.type === 'blur') {
        this.internalState.focus = false;

        if (typeof childProps.onBlur === 'function') {
          childProps.onBlur(event);
        }
      }

      if (event.type === 'mouseleave') {
        this.internalState.hover = false;

        if (typeof childProps.onMouseLeave === 'function') {
          childProps.onMouseLeave(event);
        }
      } // Clear Timeouts.


      clearTimeout(this.enterTimer);
      clearTimeout(this.leaveTimer); // If there is an `leaveDelay`, then set a timeout to open the Tooltip.

      if (leaveDelay) {
        event.persist();
        this.leaveTimer = setTimeout(() => {
          this.handleClose(event);
        }, leaveDelay);
      } else {
        this.handleClose(event);
      }
    };

    this.handleClose = event => {
      const onClose = this.props.onClose;

      if (this.internalState.focus || this.internalState.hover) {
        return;
      }

      if (!this.isControlled) {
        this.setState({
          open: false
        });
      }

      if (typeof onClose === 'function') {
        onClose(event, false);
      }
    };

    this.assignChildRef = node => this.childRef = node;

    this.isControlled = props.open != null;
    this.state = {
      open: !this.isControlled ? false : null
    };
  }

  componentDidMount() {
    const open = this.props.open; // If we have a controlled Tooltip, then we should render immediately.

    if (open) {
      this.forceUpdate();
    }
  }

  componentWillUnmount() {
    // Clearout all of the timeouts.
    clearTimeout(this.enterTimer);
    clearTimeout(this.leaveTimer);
  }
  /**
   * Get info about the tooltip's content component
   * if a `tooltipId` is present in the props,
   * otherwise we'll return the `content`.
   *
   * @method getContentComponent
   * @return {Object}            The info about the tooltip component
   */


  render() {
    const _this$props4 = this.props,
          PopperProps = _this$props4.PopperProps,
          TransitionComponent = _this$props4.TransitionComponent,
          TransitionProps = _this$props4.TransitionProps,
          arrowSize = _this$props4.arrowSize,
          children = _this$props4.children,
          color = _this$props4.color,
          disableFocusListener = _this$props4.disableFocusListener,
          disableHoverListener = _this$props4.disableHoverListener,
          id = _this$props4.id,
          margin = _this$props4.margin,
          openProps = _this$props4.open,
          padding = _this$props4.padding,
          placement = _this$props4.placement,
          timeoutProps = _this$props4.timeout,
          title = _this$props4.title,
          tooltip = _this$props4.tooltip;
    const openState = this.state.open; // Determine the Content Component.

    const ContentComponent = this.getContentComponent(); // Get the default timeout for the tooltip.

    const timeout = typeof timeoutProps === 'number' ? timeoutProps : getThemeProps('transitions.duration.none')(); // If we have a controlled Tooltip, then set it to the `props.open`,
    // otherwise, use the internal `this.state.open`.

    let open = this.isControlled ? openProps : openState; // What will we do with a blank tooltip?

    if (_isEmpty(ContentComponent.Component)) {
      open = false;
    } // Build the props for the Children


    const childProps = {
      'aria-describedby': id || `tooltip_${genID()}`,
      title: typeof title === 'string' ? title : null
    }; // Add hover event listeners to the children props

    if (!disableHoverListener) {
      childProps.onMouseEnter = this.handleEnter;
      childProps.onMouseLeave = this.handleLeave;
    } // Add focus event listeners to the children props


    if (!disableFocusListener) {
      childProps.onFocus = this.handleEnter;
      childProps.onBlur = this.handleLeave;
    }

    return React.createElement(React.Fragment, null, React.createElement(RootRef, {
      rootRef: this.assignChildRef
    }, React.cloneElement(children, childProps)), React.createElement(Popper, Object.assign({
      anchorEl: this.childRef,
      id: childProps['aria-describedby'],
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
    }, childTransitionProps, TransitionProps), React.createElement(TooltipStyled, Object.assign({
      arrowSize: arrowSize,
      margin: margin,
      open: open,
      padding: padding,
      placement: childPlacement,
      color: color
    }, _omit(tooltip, ['id'])), ContentComponent.Component))));
  }

}

Tooltip.defaultProps = {
  PopperProps: {},
  TransitionComponent: Fade,
  TransitionProps: {},
  arrowSize: 7.5,
  children: null,
  color: 'dark',
  content: null,
  disableFocusListener: null,
  disableHoverListener: null,
  enterDelay: 0,
  id: null,
  leaveDelay: 0,
  margin: 5,
  onClose: null,
  onOpen: null,
  open: null,
  padding: null,
  placement: 'top',
  timeout: null,
  title: '',
  tooltip: null,
  tooltipProps: null,
  tooltipsList: null
};
Tooltip.propTypes = process.env.NODE_ENV !== "production" ? {
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
   * The size of the Tooltip Arrow.
   */
  arrowSize: PropTypes.number,

  /**
   * The main reference component.
   */
  children: PropTypes.node,

  /**
   * Apply themed styling to Tooltip.
   *
   * Colors can be defined in `theme.palette`.
   */
  color: PropTypes.string,

  /**
   * The main content of the Tooltip
   */
  content: PropTypes.node,

  /**
   * Do not respond to focus events.
   */
  disableFocusListener: PropTypes.bool,

  /**
   * Do not respond to hover events.
   */
  disableHoverListener: PropTypes.bool,

  /**
   * The number of milliseconds to wait before showing the Tooltip.
   */
  enterDelay: PropTypes.number,

  /**
   * Helps resolve the accessibility issue on readers / etc.
   * Fallbacks to an autogenerated ID.
   */
  id: PropTypes.string,

  /**
   * The number of milliseconds to wait before hiding the Tooltip.
   */
  leaveDelay: PropTypes.number,

  /**
   * The distance from the Tooltip to its container.
   */
  margin: PropTypes.number,

  /**
   * Event fired when the Tooltip is ready to be closed.
   */
  onClose: PropTypes.func,

  /**
   * Event fired when the Tooltip is ready to be opened.
   */
  onOpen: PropTypes.func,

  /**
   * If `true`, the Tooltip gets displayed.
   */
  open: PropTypes.bool,

  /**
   * The padding for the rendered Tooltip container.
   */
  padding: PropTypes.string,

  /**
   * The placement of the Tooltip.
   * This goes directly with placements defined in `Popper.js`.
   */
  placement: PropTypes.oneOf(['top-start', 'top', 'top-end', 'right-start', 'right', 'right-end', 'bottom-start', 'bottom', 'bottom-end', 'left-start', 'left', 'left-end']),

  /**
   * Add a timeout for the tooltip to show / hide itself (animation delay).
   */
  timeout: PropTypes.number,

  /**
   * The Tooltip's title.
   */
  title: PropTypes.node,

  /**
   * Info about the tooltip which is to be rendered via the `tooltipsList`.
   */
  tooltip: PropTypes.object,

  /**
   * The props passed to the tooltip, if a `tooltipId` is present.
   */
  tooltipProps: PropTypes.object,

  /**
   * A list of tooltip components.
   */
  tooltipsList: PropTypes.object
} : {};
export default Tooltip;