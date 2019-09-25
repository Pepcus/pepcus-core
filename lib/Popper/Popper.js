"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _popper = _interopRequireDefault(require("popper.js"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _Portal = _interopRequireDefault(require("../Portal"));

var _component = require("../../utils/component");

/* eslint-disable react/no-find-dom-node */
var Popper =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2.default)(Popper, _React$Component);
  (0, _createClass2.default)(Popper, null, [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps) {
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
  }]);

  function Popper(props) {
    var _this;

    (0, _classCallCheck2.default)(this, Popper);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Popper).call(this, props));
    _this.popper = null;
    _this.isCmpMounted = null;

    _this.componentDidMount = function () {
      _this.isCmpMounted = true;
    };

    _this.handleRendered = function () {
      var _this$props = _this.props,
          anchorEl = _this$props.anchorEl,
          open = _this$props.open,
          placement = _this$props.placement,
          disable = _this$props.disable;

      var popperNode = _reactDom.default.findDOMNode((0, _assertThisInitialized2.default)(_this));

      var popperOptions = {};

      if (_this.popper) {
        _this.popper.destroy();

        _this.popper = null;
      }

      if (!anchorEl || !popperNode || !open) {
        return;
      }

      _this.popper = new _popper.default((0, _component.getAnchorEl)(anchorEl), popperNode, (0, _objectSpread2.default)({
        placement: placement
      }, popperOptions, {
        modifiers: (0, _objectSpread2.default)({}, disable ? {} : {
          preventOverflow: {
            boundariesElement: 'window'
          }
        }, popperOptions.modifiers),
        onCreate: _this.handlePopperUpdate,
        onUpdate: _this.handlePopperUpdate
      }));
    };

    _this.handlePopperUpdate = function (popperData) {
      var placement = _this.state.placement;

      if (popperData.placement !== placement) {
        _this.isCmpMounted && _this.setState(function () {
          return {
            placement: popperData.placement
          };
        });
      }
    };

    _this.handleExited = function () {
      _this.isCmpMounted && _this.setState(function () {
        return {
          exited: true
        };
      });

      _this.handleClose();
    };

    _this.handleClose = function () {
      var timeout = _this.props.timeout;

      if (!_this.popper) {
        return;
      }

      if (timeout) {
        var ms = typeof timeout === 'number' ? timeout : timeout.exit;
        setTimeout(function () {
          _this.isCmpMounted && _this.setState(function () {
            return {
              exited: true
            };
          });

          if (_this.popper) {
            _this.popper.destroy();

            _this.popper = null;
          }
        }, ms);
      } else {
        _this.isCmpMounted && _this.setState(function () {
          return {
            exited: true
          };
        });

        _this.popper.destroy();

        _this.popper = null;
      }
    };

    var _open = _this.props.open;
    _this.state = {
      exited: !_open
    };
    return _this;
  }

  (0, _createClass2.default)(Popper, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      var _this$props2 = this.props,
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
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.isCmpMounted = false;
      this.handleClose();
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props3 = this.props,
          anchorEl = _this$props3.anchorEl,
          children = _this$props3.children,
          container = _this$props3.container,
          disable = _this$props3.disable,
          keepMounted = _this$props3.keepMounted,
          open = _this$props3.open,
          placementProps = _this$props3.placement,
          transition = _this$props3.transition,
          other = (0, _objectWithoutProperties2.default)(_this$props3, ["anchorEl", "children", "container", "disable", "keepMounted", "open", "placement", "transition"]);
      var _this$state = this.state,
          exited = _this$state.exited,
          placement = _this$state.placement;

      if (!keepMounted && !open && (!transition || exited)) {
        return null;
      }

      var childProps = {
        placement: placement || placementProps
      };

      if (transition) {
        childProps.TransitionProps = {
          in: open,
          onExited: this.handleExited
        };
      }

      return _react.default.createElement(_Portal.default, {
        onMount: this.handleRendered,
        disable: disable,
        container: container
      }, _react.default.createElement("div", Object.assign({
        role: "tooltip",
        style: {
          position: 'absolute'
        }
      }, other), typeof children === 'function' ? children(childProps) : children));
    }
  }]);
  return Popper;
}(_react.default.Component);

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
  anchorEl: _propTypes.default.oneOfType([_propTypes.default.object, _propTypes.default.func]),

  /**
   * The children of Popper.
   */
  children: _propTypes.default.oneOfType([_propTypes.default.node, _propTypes.default.func]),

  /**
   * The `container` will be passed to the Portal component.
   */
  container: _propTypes.default.oneOfType([_propTypes.default.object, _propTypes.default.func]),

  /**
   * Disable the React portal behavior.
   * Only the children will be rendered.
   */
  disable: _propTypes.default.bool,

  /**
   * Always keep the children mounted in the DOM.
   */
  keepMounted: _propTypes.default.bool,

  /**
   * If `true`, Popper will be visible.
   */
  open: _propTypes.default.bool,

  /**
   * The placement of the Popper relative to its `anchorEl`.
   */
  placement: _propTypes.default.oneOf(['bottom', 'bottom-end', 'bottom-start', 'left', 'left-end', 'left-start', 'right', 'right-end', 'right-start', 'top', 'top-end', 'top-start']),

  /**
   * The duration for the transition, in milliseconds.
   */
  timeout: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.shape({
    enter: _propTypes.default.number,
    exit: _propTypes.default.number
  })]),

  /**
   * Should we allow transitions?
   */
  transition: _propTypes.default.bool
} : {};
var _default = Popper;
exports.default = _default;