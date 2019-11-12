"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf3 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _Fade = _interopRequireDefault(require("../Fade"));

var _Popper = _interopRequireDefault(require("../Popper"));

var _RootRef = _interopRequireDefault(require("../RootRef"));

var _generate = require("../../utils/generate");

var _theme = require("../../utils/theme");

var Popover =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2.default)(Popover, _React$Component);

  function Popover() {
    var _getPrototypeOf2;

    var _this;

    (0, _classCallCheck2.default)(this, Popover);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(Popover)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.anchorRef = null;

    _this.assignAnchorRef = function (node) {
      return _this.anchorRef = node;
    };

    return _this;
  }

  (0, _createClass2.default)(Popover, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var open = this.props.open; // If we have a controlled Popover, then we should render immediately.

      if (open) {
        this.forceUpdate();
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
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

  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
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

      var timeout = typeof timeoutProps === 'number' ? timeoutProps : (0, _theme.getThemeProps)('transitions.duration.regular')(); // Store the current open as the `openProps`.

      var open = openProps; // What will we do with a blank Popover?

      if (!anchor) {
        open = false;
      } // Build the props for the Anchor


      var anchorProps = {
        'aria-describedby': id || "Popover_".concat((0, _generate.genID)()),
        title: typeof title === 'string' ? title : null
      };
      return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_RootRef.default, {
        rootRef: this.assignAnchorRef
      }, _react.default.cloneElement(anchor, anchorProps)), _react.default.createElement(_Popper.default, Object.assign({
        anchorEl: this.anchorRef,
        id: anchorProps['aria-describedby'],
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
        }, childTransitionProps, TransitionProps), children({
          anchorRef: _this2.anchorRef,
          arrowSize: arrowSize,
          color: color,
          distanceFromContainer: distanceFromContainer,
          maxWidth: maxWidth,
          placement: childPlacement
        }));
      }));
    }
  }]);
  return Popover;
}(_react.default.Component);

Popover.defaultProps = {
  PopperProps: {},
  TransitionComponent: _Fade.default,
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
   * The main anchor of the Popover.
   */
  anchor: _propTypes.default.node,

  /**
   * The size of the Popover Arrow.
   */
  arrowSize: _propTypes.default.number,

  /**
   * The main reference component.
   */
  children: _propTypes.default.func,

  /**
   * Apply themed styling to Popover.
   *
   * Colors can be defined in `theme.palette`.
   */
  color: _propTypes.default.string,

  /**
   * The number of milliseconds to wait before showing the Popover.
   */
  enterDelay: _propTypes.default.number,

  /**
   * Helps resolve the accessibility issue on readers / etc.
   * Fallbacks to an auto-generated ID.
   */
  id: _propTypes.default.string,

  /**
   * The number of milliseconds to wait before hiding the Popover.
   */
  leaveDelay: _propTypes.default.number,

  /**
   * The distance from the Popover to its container.
   */
  distanceFromContainer: _propTypes.default.number,

  /**
   * The maxWidth for the rendered Popover container.
   */
  maxWidth: _propTypes.default.string,

  /**
   * Event fired when the Popover is ready to be closed.
   */
  onClose: _propTypes.default.func,

  /**
   * Event fired when the Popover is ready to be opened.
   */
  onOpen: _propTypes.default.func,

  /**
   * If `true`, the Popover gets displayed.
   */
  open: _propTypes.default.bool,

  /**
   * The placement of the Popover.
   * This goes directly with placements defined in `Popper.js`.
   */
  placement: _propTypes.default.oneOf(['top-start', 'top', 'top-end', 'right-start', 'right', 'right-end', 'bottom-start', 'bottom', 'bottom-end', 'left-start', 'left', 'left-end']),

  /**
   * The duration for the transition, in milliseconds.
   */
  timeout: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.shape({
    enter: _propTypes.default.number,
    exit: _propTypes.default.number
  })]),

  /**
   * The Popover's title.
   */
  title: _propTypes.default.node
} : {};
var _default = Popover;
exports.default = _default;