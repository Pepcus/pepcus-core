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

var _get2 = _interopRequireDefault(require("lodash/get"));

var _MenuContent = _interopRequireDefault(require("../MenuContent"));

var _Popover = _interopRequireDefault(require("../Popover"));

var _SvgIcon = require("../SvgIcon");

var _Button = require("../Button");

var Menu =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2.default)(Menu, _React$Component);

  function Menu() {
    var _getPrototypeOf2;

    var _this;

    (0, _classCallCheck2.default)(this, Menu);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(Menu)).call.apply(_getPrototypeOf2, [this].concat(args)));
    _this.state = {
      open: false
    };
    _this.menuContentRef = _react.default.createRef();

    _this.handleMenuOpen = function (event) {
      event.preventDefault(); // Extract the `onOpen` prop.

      var onOpen = _this.props.onOpen; // Update the state to open the menu.

      _this.setState(function () {
        return {
          open: true
        };
      }, function () {
        // Add an event listener to the document for closing the menu.
        document.addEventListener('click', _this.handleMenuClose); // If there is a valid `onOpen` function, invoke it.

        typeof onOpen === 'function' && onOpen(event);
      });
    };

    _this.handleMenuClose = function (event) {
      var current = _this.menuContentRef.current; // Close the menu only if we click outside the menu's content.

      if (current && event.target && !current.contains(event.target)) {
        _this.closeMenu(event);
      }
    };

    _this.closeMenu = function (event) {
      // Extract the `onClose` prop.
      var onClose = _this.props.onClose; // Update the state to close the menu.

      _this.setState(function () {
        return {
          open: false
        };
      }, function () {
        // Remove the previously added event listener to the document.
        document.removeEventListener('click', _this.handleMenuClose); // If there is a valid `onClose` function, invoke it.

        typeof onClose === 'function' && onClose(event);
      });
    };

    _this.renderMenuAnchorChildren = function () {
      var _this$props = _this.props,
          ButtonComponent = _this$props.ButtonComponent,
          ButtonProps = _this$props.ButtonProps,
          IconComponent = _this$props.IconComponent,
          IconProps = _this$props.IconProps,
          iconPosition = _this$props.iconPosition;
      return _react.default.createElement(_react.default.Fragment, null, IconComponent && iconPosition === 'left' && _react.default.createElement(IconComponent, Object.assign({}, IconProps, {
        position: iconPosition
      })), (0, _get2.default)(ButtonComponent, 'props.children') || (0, _get2.default)(ButtonProps, 'children'), IconComponent && iconPosition === 'right' && _react.default.createElement(IconComponent, Object.assign({}, IconProps, {
        position: iconPosition
      })));
    };

    _this.renderMenuAnchor = function () {
      var _this$props2 = _this.props,
          ButtonComponent = _this$props2.ButtonComponent,
          ButtonProps = _this$props2.ButtonProps; // Clean the passed in props for the button component.

      var children = ButtonProps.children,
          cleanedButtonProps = (0, _objectWithoutProperties2.default)(ButtonProps, ["children"]); // Build the props for the button component.

      var btnProps = (0, _objectSpread2.default)({
        onClick: _this.handleMenuOpen
      }, cleanedButtonProps); // If we have a regular HTML DOM element, or a React functional component, render it.

      if (typeof ButtonComponent === 'string' || typeof ButtonComponent === 'function') {
        return _react.default.createElement(ButtonComponent, btnProps, _this.renderMenuAnchorChildren());
      } // Otherwise, clone the passed in element.


      return _react.default.cloneElement(ButtonComponent, btnProps, _this.renderMenuAnchorChildren());
    };

    return _this;
  }

  (0, _createClass2.default)(Menu, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var openState = this.state.open;
      var _this$props3 = this.props,
          ButtonComponent = _this$props3.ButtonComponent,
          ButtonProps = _this$props3.ButtonProps,
          ContentComponent = _this$props3.ContentComponent,
          ContentProps = _this$props3.ContentProps,
          IconComponent = _this$props3.IconComponent,
          IconProps = _this$props3.IconProps,
          children = _this$props3.children,
          iconPosition = _this$props3.iconPosition,
          openProps = _this$props3.open,
          dropdownProps = (0, _objectWithoutProperties2.default)(_this$props3, ["ButtonComponent", "ButtonProps", "ContentComponent", "ContentProps", "IconComponent", "IconProps", "children", "iconPosition", "open"]);
      var open = typeof openProps === 'boolean' ? openProps : openState;
      return _react.default.createElement(_Popover.default, Object.assign({
        anchor: this.renderMenuAnchor(),
        open: open
      }, dropdownProps), function (renderProps) {
        return _react.default.createElement(ContentComponent, Object.assign({
          ref: _this2.menuContentRef
        }, renderProps, ContentProps), children);
      });
    }
  }]);
  return Menu;
}(_react.default.Component);

Menu.defaultProps = {
  ButtonComponent: _react.default.createElement(_Button.MenuButton, null),
  ButtonProps: {},
  ContentComponent: _MenuContent.default,
  ContentProps: {},
  IconComponent: _SvgIcon.ChevronIcon,
  IconProps: {
    direction: 'down',
    style: {
      color: '#FFF',
      height: 20,
      width: 20
    }
  },
  children: null,
  distanceFromContainer: 5,
  iconPosition: 'right',
  onClose: null,
  onOpen: null,
  open: null,
  placement: 'bottom-start'
};
Menu.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * The Menu action button component.
   */
  ButtonComponent: _propTypes.default.element,

  /**
   * The props passed down to the `ButtonComponent`.
   */
  ButtonProps: _propTypes.default.object,

  /**
   * The Content Component which holds all of the Menu's content / children.
   */
  ContentComponent: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.func, _propTypes.default.object]),

  /**
   * The props passed down to the `ContentComponent`.
   */
  ContentProps: _propTypes.default.object,

  /**
   * The Component to render the Icon inside the Menu Anchor.
   */
  IconComponent: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.func, _propTypes.default.object]),

  /**
   * The props passed down to the `IconComponent`.
   */
  IconProps: _propTypes.default.object,

  /**
   * @ignore
   */
  children: _propTypes.default.node,

  /**
   * The distance from the Menu to its container.
   */
  distanceFromContainer: _propTypes.default.number,

  /**
   * The position of the icon.
   */
  iconPosition: _propTypes.default.oneOf(['left', 'right']),

  /**
   * Callback fired when the Menu is closed.
   */
  onClose: _propTypes.default.func,

  /**
   * Callback fired when the Menu is opened.
   */
  onOpen: _propTypes.default.func,

  /**
   * Make Menu a controlled component.
   */
  open: _propTypes.default.bool,

  /**
   * The placement of the Menu.
   * This goes directly with placements defined in `Popper.js`.
   */
  placement: _propTypes.default.oneOf(['top-start', 'top', 'top-end', 'right-start', 'right', 'right-end', 'bottom-start', 'bottom', 'bottom-end', 'left-start', 'left', 'left-end'])
} : {};
var _default = Menu;
exports.default = _default;