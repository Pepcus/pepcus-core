"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf3 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _Transition = _interopRequireDefault(require("react-transition-group/Transition"));

var _get2 = _interopRequireDefault(require("lodash/get"));

var _theme = require("../../constants/theme");

var _transitions = require("../../utils/transitions");

var getScale = function getScale(val) {
  return "scale(".concat(val, ", ").concat(Math.pow(val, 2), ")");
};
/**
 * Transition styles for the Grow transition
 *
 * @type {Object}
 */


var transitionStyles = {
  entering: {
    opacity: 1,
    transform: getScale(1)
  },
  entered: {
    opacity: 1,
    transform: "".concat(getScale(1), " translateZ(0)")
  }
};

var Grow =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2.default)(Grow, _React$Component);

  function Grow() {
    var _getPrototypeOf2;

    var _this;

    (0, _classCallCheck2.default)(this, Grow);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(Grow)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.autoTimeout = null;
    _this.timer = null;

    _this.componentWillUnmount = function () {
      clearTimeout(_this.timer);
    };

    _this.handleEnter = function (node, isAppearing) {
      var _this$props = _this.props,
          onEnter = _this$props.onEnter,
          timeout = _this$props.timeout;
      var duration = 0;
      (0, _transitions.resetTransition)(node);

      var _getTransitionProps = (0, _transitions.getTransitionProps)(_this.props, {
        mode: 'enter'
      }),
          transitionDuration = _getTransitionProps.duration,
          delay = _getTransitionProps.delay;

      if (timeout === 'auto') {
        duration = _theme.THEME.transitions.getAutoHeightDuration(node.clientHeight);
        _this.autoTimeout = duration;
      } else {
        duration = transitionDuration;
      }

      node.style.transition = [_theme.THEME.transitions.create('opacity', {
        duration: duration,
        delay: delay
      }), _theme.THEME.transitions.create('transform', {
        duration: duration * 0.666,
        delay: delay
      })];

      if (typeof onEnter === 'function') {
        onEnter(node, isAppearing);
      }
    };

    _this.handleExit = function (node) {
      var _this$props2 = _this.props,
          onExit = _this$props2.onExit,
          timeout = _this$props2.timeout;
      var duration = 0;

      var _getTransitionProps2 = (0, _transitions.getTransitionProps)(_this.props, {
        mode: 'exit'
      }),
          transitionDuration = _getTransitionProps2.duration,
          delay = _getTransitionProps2.delay;

      if (timeout === 'auto') {
        duration = _theme.THEME.transitions.getAutoHeightDuration(node.clientHeight);
        _this.autoTimeout = duration;
      } else {
        duration = transitionDuration;
      }

      node.style.transition = [_theme.THEME.transitions.create('opacity', {
        duration: duration,
        delay: delay
      }), _theme.THEME.transitions.create('transform', {
        duration: duration * 0.666,
        delay: delay || duration * 0.333
      })];
      node.style.opacity = '0';
      node.style.transform = getScale(0.75);

      if (typeof onExit === 'function') {
        onExit(node);
      }
    };

    _this.addEndListener = function (node, done) {
      var timeout = _this.props.timeout;

      if (timeout === 'auto') {
        _this.timer = setTimeout(done, _this.autoTimeout || 0);
      }
    };

    return _this;
  }

  (0, _createClass2.default)(Grow, [{
    key: "render",
    value: function render() {
      var _this$props3 = this.props,
          children = _this$props3.children,
          onEnter = _this$props3.onEnter,
          onExit = _this$props3.onExit,
          styleProp = _this$props3.style,
          timeout = _this$props3.timeout,
          other = (0, _objectWithoutProperties2.default)(_this$props3, ["children", "onEnter", "onExit", "style", "timeout"]);
      var childrenStyles = _react.default.isValidElement(children) ? (0, _get2.default)(children, 'props.style', {}) : {};
      var style = (0, _objectSpread2.default)({}, styleProp, childrenStyles);
      return _react.default.createElement(_Transition.default, Object.assign({
        addEndListener: this.addEndListener,
        appear: true,
        onEnter: this.handleEnter,
        onExit: this.handleExit,
        timeout: timeout === 'auto' ? null : timeout
      }, other), function (state, childProps) {
        return _react.default.cloneElement(children, (0, _objectSpread2.default)({
          style: (0, _objectSpread2.default)({
            opacity: 0,
            transform: getScale(0.75)
          }, transitionStyles[state], style)
        }, childProps));
      });
    }
  }]);
  return Grow;
}(_react.default.Component);

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
  children: _propTypes.default.oneOfType([_propTypes.default.element, _propTypes.default.func]),

  /**
   * If `true`, the transition will kick in.
   */
  in: _propTypes.default.bool,

  /**
   * Callback fired before the `entering` status is applied.
   *
   * @param {HTMLElement} node
   * @param {boolean}     isAppearing
   */
  onEnter: _propTypes.default.func,

  /**
   * Callback fired before the `exiting` status is applied.
   *
   * @param {HTMLElement} node
   */
  onExit: _propTypes.default.func,

  /**
   * @ignore
   */
  style: _propTypes.default.object,

  /**
   * The duration for the transition, in milliseconds.
   */
  timeout: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.shape({
    enter: _propTypes.default.number,
    exit: _propTypes.default.number
  })])
} : {};
var _default = Grow;
exports.default = _default;