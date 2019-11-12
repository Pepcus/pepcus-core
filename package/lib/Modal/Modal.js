"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _noScroll = _interopRequireDefault(require("no-scroll"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _Backdrop = _interopRequireDefault(require("../Backdrop"));

var _Portal = _interopRequireDefault(require("../Portal"));

var _transitions = require("../../constants/transitions");

var _theme = require("../../utils/theme");

var _ModalManager = _interopRequireDefault(require("./ModalManager"));

var ModalStyled = _styledComponents.default.div.withConfig({
  displayName: "Modal__ModalStyled",
  componentId: "cgziqe-0"
})(["background-clip:padding-box;background:#fff;box-shadow:0 12px 15px 0 rgba(0,0,0,0.25);max-width:768px;padding:10px;position:relative;", ";"], (0, _theme.getThemeProps)('Modal.styles'));

var Modal =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2.default)(Modal, _React$Component);
  (0, _createClass2.default)(Modal, null, [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps, prevState) {
      if (!prevState.show && nextProps.open) {
        return {
          show: true
        };
      }

      return null;
    }
  }]);

  function Modal(props) {
    var _this;

    (0, _classCallCheck2.default)(this, Modal);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Modal).call(this, props));

    _this.handleOpen = function () {
      var manager = _this.props.manager;
      manager.add((0, _assertThisInitialized2.default)(_this));

      _this.blockScroll();

      document.addEventListener('keydown', _this.handleKeyDown);
    };

    _this.handleClose = function () {
      var manager = _this.props.manager;
      manager.remove((0, _assertThisInitialized2.default)(_this));

      _this.unblockScroll();

      document.removeEventListener('keydown', _this.handleKeyDown);
    };

    _this.handleBackdropClick = function (event) {
      var _this$props = _this.props,
          onBackdropClick = _this$props.onBackdropClick,
          onClose = _this$props.onClose,
          closeOnBackdropClick = _this$props.closeOnBackdropClick;

      if (_this.shouldClose === null) {
        _this.shouldClose = true;
      }

      if (!_this.shouldClose) {
        _this.shouldClose = null;
        return;
      }

      if (typeof onBackdropClick === 'function') {
        onBackdropClick(event);
      }

      if (closeOnBackdropClick) {
        typeof onClose === 'function' && onClose(event);
      }

      _this.shouldClose = null;
    };

    _this.handleKeyDown = function (event) {
      var _this$props2 = _this.props,
          manager = _this$props2.manager,
          onEscKeyDown = _this$props2.onEscKeyDown,
          onClose = _this$props2.onClose,
          closeOnEsc = _this$props2.closeOnEsc;

      if (event.keyCode !== 27 || !manager.isTopModal((0, _assertThisInitialized2.default)(_this))) {
        return;
      }

      if (typeof onEscKeyDown === 'function') {
        onEscKeyDown(event);
      }

      if (closeOnEsc) {
        typeof onClose === 'function' && onClose(event);
      }
    };

    _this.handleModalEvent = function () {
      _this.shouldClose = false;
    };

    _this.handleEntered = function () {
      var onEntered = _this.props.onEntered;

      if (typeof onEntered === 'function') {
        onEntered();
      }
    };

    _this.handleExited = function () {
      var onExited = _this.props.onExited;

      if (typeof onExited === 'function') {
        onExited();
      }

      _this.setState(function () {
        return {
          show: false
        };
      });

      _this.unblockScroll();
    };

    _this.unblockScroll = function () {
      var manager = _this.props.manager;

      if (manager.getModals().length === 0) {
        _noScroll.default.off();
      }
    };

    _this.blockScroll = function () {
      _noScroll.default.on();
    };

    _this.state = {
      show: props.open
    };
    _this.shouldClose = null;
    return _this;
  }

  (0, _createClass2.default)(Modal, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var open = this.props.open;

      if (open) {
        this.handleOpen();
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      var show = this.state.show;
      var open = this.props.open;

      if (prevState.show && !show) {
        this.handleClose();
      } else if (!prevProps.open && open) {
        this.handleOpen();
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      var open = this.props.open;

      if (open) {
        this.handleClose();
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props3 = this.props,
          BackdropComponent = _this$props3.BackdropComponent,
          BackdropProps = _this$props3.BackdropProps,
          ContentComponent = _this$props3.ContentComponent,
          ContentProps = _this$props3.ContentProps,
          children = _this$props3.children,
          container = _this$props3.container,
          open = _this$props3.open,
          timeout = _this$props3.timeout,
          style = _this$props3.style;
      var show = this.state.show;

      if (!show) {
        return null;
      }

      return _react.default.createElement(_Portal.default, {
        container: container
      }, _react.default.createElement(BackdropComponent, Object.assign({
        appear: true,
        in: open,
        onBackdropClick: this.handleBackdropClick,
        onEntered: this.handleEntered,
        onExited: this.handleExited,
        timeout: timeout
      }, BackdropProps), _react.default.createElement(ContentComponent, Object.assign({
        onClick: this.handleModalEvent,
        onMouseDown: this.handleModalEvent,
        onMouseUp: this.handleModalEvent,
        style: style
      }, ContentProps), children)));
    }
  }]);
  return Modal;
}(_react.default.Component);

Modal.defaultProps = {
  BackdropComponent: _Backdrop.default,
  BackdropProps: {},
  ContentComponent: ModalStyled,
  ContentProps: {},
  children: null,
  closeOnBackdropClick: true,
  closeOnEsc: true,
  container: null,
  manager: new _ModalManager.default(),
  onBackdropClick: null,
  onClose: null,
  onEntered: null,
  onEscKeyDown: null,
  onExited: null,
  open: false,
  style: null,
  timeout: _transitions.DURATION.regular
};
Modal.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * The Backdrop Component which will be rendered behind the Modal.
   */
  BackdropComponent: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.func, _propTypes.default.object]),

  /**
   * Properties for the `Backdrop` component.
   */
  BackdropProps: _propTypes.default.object,

  /**
   * The Content Component which holds all of the Modal's content / children.
   */
  ContentComponent: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.func, _propTypes.default.object]),

  /**
   * The props passed down to the `ContentComponent`.
   */
  ContentProps: _propTypes.default.object,

  /**
   * Children for the Modal.
   */
  children: _propTypes.default.node,

  /**
   * Should the Modal close on the Backdrop click?
   */
  closeOnBackdropClick: _propTypes.default.bool,

  /**
   * If `true`, the modal will close on `esc` keydown.
   */
  closeOnEsc: _propTypes.default.bool,

  /**
   * The container to append the Modal to.
   */
  container: _propTypes.default.oneOfType([_propTypes.default.object, _propTypes.default.func]),

  /**
   * A modal manager used to track and manage the state of open modals.
   */
  manager: _propTypes.default.object,

  /**
   * Callback fired upon the Backdrop click.
   */
  onBackdropClick: _propTypes.default.func,

  /**
   * Callback fired when the component requests to be closed.
   */
  onClose: _propTypes.default.func,

  /**
   * Callback fired when the Modal enters the DOM.
   */
  onEntered: _propTypes.default.func,

  /**
   * Callback fired upon the `esc` keydown event.
   */
  onEscKeyDown: _propTypes.default.func,

  /**
   * Callback fired when the Modal exits the DOM.
   */
  onExited: _propTypes.default.func,

  /**
   * If `true`, the modal is open.
   */
  open: _propTypes.default.bool,

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
var _default = Modal;
exports.default = _default;