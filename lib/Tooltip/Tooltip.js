"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _isEmpty2 = _interopRequireDefault(require("lodash/isEmpty"));

var _omit2 = _interopRequireDefault(require("lodash/omit"));

var _Fade = _interopRequireDefault(require("../Fade"));

var _Popper = _interopRequireDefault(require("../Popper"));

var _RootRef = _interopRequireDefault(require("../RootRef"));

var _generate = require("../../utils/generate");

var _theme = require("../../utils/theme");

var _component = require("../../utils/component");

var _TooltipStyled = _interopRequireDefault(require("./TooltipStyled"));

var Tooltip =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2.default)(Tooltip, _React$Component);

  // If we have a controlled Tooltip.
  // Reference to the Tooltip's children.
  // Timers.
  // Internal state,
  // doesn't do a re-render().
  function Tooltip(props) {
    var _this;

    (0, _classCallCheck2.default)(this, Tooltip);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Tooltip).call(this, props)); // We have a controlled Tooltip if the parent is providing the `props.open`.

    _this.isControlled = null;
    _this.childRef = null;
    _this.enterTimer = null;
    _this.leaveTimer = null;
    _this.internalState = {
      hover: false,
      focus: false
    };

    _this.getContentComponent = function () {
      var _this$props = _this.props,
          content = _this$props.content,
          tooltip = _this$props.tooltip,
          tooltipProps = _this$props.tooltipProps,
          tooltipsList = _this$props.tooltipsList; // Find the content component from the list of components.

      var ContentComponent = !(0, _isEmpty2.default)(tooltip) && tooltip.id && tooltipsList[tooltip.id]; // Determine whether the found component is a valid react component.
      // This validation excludes HTML tagNames, and strings, it must be a functional stateless or statefull or styled component.

      var valid = _react.default.isValidElement(ContentComponent) || (0, _component.isReactComponent)(ContentComponent); // If needed, we can assign a ref for the wrapped or regular React component.

      var componentRef = valid && (ContentComponent.WrappedComponent || ContentComponent);
      return {
        Component: valid ? _react.default.createElement(ContentComponent, Object.assign({}, tooltipProps, (0, _omit2.default)(tooltip, ['id']))) : _react.default.createElement('div', null, content),
        componentRef: componentRef
      };
    };

    _this.handleEnter = function (event) {
      var _this$props2 = _this.props,
          children = _this$props2.children,
          enterDelay = _this$props2.enterDelay;
      var childProps = children.props;

      if (event.type === 'focus') {
        _this.internalState.focus = true;

        if (typeof childProps.onFocus === 'function') {
          childProps.onFocus(event);
        }
      }

      if (event.type === 'mouseenter') {
        _this.internalState.hover = true;

        if (typeof childProps.onMouseEnter === 'function') {
          childProps.onMouseEnter(event);
        }
      } // Remove the title from the child.
      // We don't want the native browser tooltip to show up.


      _this.childRef.setAttribute('title', ''); // Clear timeouts for enter and leave delay.


      clearTimeout(_this.enterTimer);
      clearTimeout(_this.leaveTimer); // If there is an `enterDelay`, then set a timeout to open the Tooltip.

      if (enterDelay) {
        event.persist();
        _this.enterTimer = setTimeout(function () {
          _this.handleOpen(event);
        }, enterDelay);
      } else {
        _this.handleOpen(event);
      }
    };

    _this.handleOpen = function (event) {
      var onOpen = _this.props.onOpen;

      if (!_this.isControlled) {
        _this.setState({
          open: true
        });
      }

      if (typeof onOpen === 'function') {
        onOpen(event, true);
      }
    };

    _this.handleLeave = function (event) {
      var _this$props3 = _this.props,
          children = _this$props3.children,
          leaveDelay = _this$props3.leaveDelay;
      var childProps = children.props;

      if (event.type === 'blur') {
        _this.internalState.focus = false;

        if (typeof childProps.onBlur === 'function') {
          childProps.onBlur(event);
        }
      }

      if (event.type === 'mouseleave') {
        _this.internalState.hover = false;

        if (typeof childProps.onMouseLeave === 'function') {
          childProps.onMouseLeave(event);
        }
      } // Clear Timeouts.


      clearTimeout(_this.enterTimer);
      clearTimeout(_this.leaveTimer); // If there is an `leaveDelay`, then set a timeout to open the Tooltip.

      if (leaveDelay) {
        event.persist();
        _this.leaveTimer = setTimeout(function () {
          _this.handleClose(event);
        }, leaveDelay);
      } else {
        _this.handleClose(event);
      }
    };

    _this.handleClose = function (event) {
      var onClose = _this.props.onClose;

      if (_this.internalState.focus || _this.internalState.hover) {
        return;
      }

      if (!_this.isControlled) {
        _this.setState({
          open: false
        });
      }

      if (typeof onClose === 'function') {
        onClose(event, false);
      }
    };

    _this.assignChildRef = function (node) {
      return _this.childRef = node;
    };

    _this.isControlled = props.open != null;
    _this.state = {
      open: !_this.isControlled ? false : null
    };
    return _this;
  }

  (0, _createClass2.default)(Tooltip, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var open = this.props.open; // If we have a controlled Tooltip, then we should render immediately.

      if (open) {
        this.forceUpdate();
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
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

  }, {
    key: "render",
    value: function render() {
      var _this$props4 = this.props,
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
      var openState = this.state.open; // Determine the Content Component.

      var ContentComponent = this.getContentComponent(); // Get the default timeout for the tooltip.

      var timeout = typeof timeoutProps === 'number' ? timeoutProps : (0, _theme.getThemeProps)('transitions.duration.none')(); // If we have a controlled Tooltip, then set it to the `props.open`,
      // otherwise, use the internal `this.state.open`.

      var open = this.isControlled ? openProps : openState; // What will we do with a blank tooltip?

      if ((0, _isEmpty2.default)(ContentComponent.Component)) {
        open = false;
      } // Build the props for the Children


      var childProps = {
        'aria-describedby': id || "tooltip_".concat((0, _generate.genID)()),
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

      return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_RootRef.default, {
        rootRef: this.assignChildRef
      }, _react.default.cloneElement(children, childProps)), _react.default.createElement(_Popper.default, Object.assign({
        anchorEl: this.childRef,
        id: childProps['aria-describedby'],
        open: open,
        placement: placement,
        timeout: timeout,
        transition: true
      }, PopperProps), function (_ref) {
        var childPlacement = _ref.placement,
            childTransitionProps = _ref.TransitionProps;
        return _react.default.createElement(TransitionComponent, Object.assign({
          direction: childPlacement.split('-')[0],
          timeout: timeout
        }, childTransitionProps, TransitionProps), _react.default.createElement(_TooltipStyled.default, Object.assign({
          arrowSize: arrowSize,
          margin: margin,
          open: open,
          padding: padding,
          placement: childPlacement,
          color: color
        }, (0, _omit2.default)(tooltip, ['id'])), ContentComponent.Component));
      }));
    }
  }]);
  return Tooltip;
}(_react.default.Component);

Tooltip.defaultProps = {
  PopperProps: {},
  TransitionComponent: _Fade.default,
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
  PopperProps: _propTypes.default.object,

  /**
   * A Transition Component.
   */
  TransitionComponent: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.func, _propTypes.default.object]),

  /**
   * Properties passed down to the `TransitionComponent` component.
   */
  TransitionProps: _propTypes.default.object,

  /**
   * The size of the Tooltip Arrow.
   */
  arrowSize: _propTypes.default.number,

  /**
   * The main reference component.
   */
  children: _propTypes.default.node,

  /**
   * Apply themed styling to Tooltip.
   *
   * Colors can be defined in `theme.palette`.
   */
  color: _propTypes.default.string,

  /**
   * The main content of the Tooltip
   */
  content: _propTypes.default.node,

  /**
   * Do not respond to focus events.
   */
  disableFocusListener: _propTypes.default.bool,

  /**
   * Do not respond to hover events.
   */
  disableHoverListener: _propTypes.default.bool,

  /**
   * The number of milliseconds to wait before showing the Tooltip.
   */
  enterDelay: _propTypes.default.number,

  /**
   * Helps resolve the accessibility issue on readers / etc.
   * Fallbacks to an autogenerated ID.
   */
  id: _propTypes.default.string,

  /**
   * The number of milliseconds to wait before hiding the Tooltip.
   */
  leaveDelay: _propTypes.default.number,

  /**
   * The distance from the Tooltip to its container.
   */
  margin: _propTypes.default.number,

  /**
   * Event fired when the Tooltip is ready to be closed.
   */
  onClose: _propTypes.default.func,

  /**
   * Event fired when the Tooltip is ready to be opened.
   */
  onOpen: _propTypes.default.func,

  /**
   * If `true`, the Tooltip gets displayed.
   */
  open: _propTypes.default.bool,

  /**
   * The padding for the rendered Tooltip container.
   */
  padding: _propTypes.default.string,

  /**
   * The placement of the Tooltip.
   * This goes directly with placements defined in `Popper.js`.
   */
  placement: _propTypes.default.oneOf(['top-start', 'top', 'top-end', 'right-start', 'right', 'right-end', 'bottom-start', 'bottom', 'bottom-end', 'left-start', 'left', 'left-end']),

  /**
   * Add a timeout for the tooltip to show / hide itself (animation delay).
   */
  timeout: _propTypes.default.number,

  /**
   * The Tooltip's title.
   */
  title: _propTypes.default.node,

  /**
   * Info about the tooltip which is to be rendered via the `tooltipsList`.
   */
  tooltip: _propTypes.default.object,

  /**
   * The props passed to the tooltip, if a `tooltipId` is present.
   */
  tooltipProps: _propTypes.default.object,

  /**
   * A list of tooltip components.
   */
  tooltipsList: _propTypes.default.object
} : {};
var _default = Tooltip;
exports.default = _default;