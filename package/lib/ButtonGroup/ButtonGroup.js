"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _Button = _interopRequireDefault(require("../Button"));

var _FaIcon = _interopRequireDefault(require("../FaIcon"));

var _Row = _interopRequireDefault(require("../Row"));

var _object = require("../../utils/object");

var _component = require("../../utils/component");

var _actions = require("../../utils/actions");

// CSS for the ButtonGroup if the `toggle` prop is set to `true`.
var ToggleCss = (0, _styledComponents.css)(["border-radius:0;&:nth-child(n):not(:last-child){border-right:none;}&:first-child{border-bottom-left-radius:4px;border-top-left-radius:4px;}&:last-child{border-bottom-right-radius:4px;border-top-right-radius:4px;}"]); // Non-toggle CSS for ButtonGroup.

var NonToggleCss = (0, _styledComponents.css)(["margin-right:", ";&:last-child{margin-right:0;}"], function (_ref) {
  var spacing = _ref.spacing;
  return spacing || '7.5px';
}); // The ButtonGroup Styled.

var ButtonGroupStyled = _styledComponents.default.div.withConfig({
  displayName: "ButtonGroup__ButtonGroupStyled",
  componentId: "sc-13jh253-0"
})(["align-items:center;display:flex;flex-direction:row;justify-content:flex-start;", "{", "};}"], _Button.default, function (_ref2) {
  var toggle = _ref2.toggle;
  return toggle ? ToggleCss : NonToggleCss;
});
/**
 * Render a group of buttons. Turn them into toggleable buttons via the `toggle` prop.
 *
 * @method      ButtonGroup
 * @constructor
 */


function ButtonGroup(_ref3) {
  var activeId = _ref3.activeId,
      activeProps = _ref3.activeProps,
      buttons = _ref3.buttons,
      className = _ref3.className,
      handlers = _ref3.handlers,
      inactiveProps = _ref3.inactiveProps,
      invokeWith = _ref3.invokeWith,
      toggle = _ref3.toggle;

  if (!buttons || buttons.length === 0) {
    return null;
  } // Update the handler refs in buttons, if present,
  // with the actual functions from the `handlers`.


  var buttonsWithHandlers = (0, _actions.replaceHandlerRefs)(buttons, handlers, 'onClick', invokeWith);
  /**
   * Build the button props based on the `activeId`
   *
   * @method      _getBtnProps
   * @param       {Object}      btn The props for the current button
   * @return      {Object}         The updated props for the button
   */

  function _getBtnProps(btn) {
    // Dynamically disable or enable the button (if needed).
    var disabled = (0, _object.checkObjectKeys)(invokeWith, btn.disabled, handlers); // If we don't have `toggle` turned on, there is no need to go foward.

    if (!toggle) {
      return (0, _objectSpread2.default)({}, btn, {
        disabled: disabled
      });
    } // Update the button props if the `toggle` is turned on.


    return activeId === btn.id ? (0, _objectSpread2.default)({}, btn, {
      disabled: disabled
    }, activeProps) : (0, _objectSpread2.default)({}, btn, {
      disabled: disabled
    }, inactiveProps);
  } // Render the Icon for the Button, if applicable.


  function renderIcon(BtnIcon, IconProps) {
    // Build the styles for the icon.
    var iconStyle = {
      marginRight: 5
    }; // If the Icon is a boolean and true,
    // then we want to render our FaIcon component.

    if (typeof BtnIcon === 'boolean' && BtnIcon) {
      return _react.default.createElement(_FaIcon.default, Object.assign({
        style: iconStyle
      }, IconProps));
    } else if ((0, _component.isReactComponent)(BtnIcon)) {
      // If the Icon is a valid React Component,
      // then render the Icon.
      return _react.default.createElement(BtnIcon, Object.assign({
        style: iconStyle
      }, IconProps));
    } // Don't render anything.


    return null;
  } // Return the `ButtonGroup`.


  return _react.default.createElement(ButtonGroupStyled, {
    className: className,
    toggle: toggle
  }, buttonsWithHandlers.map(function (_ref4, idx) {
    var IconProps = _ref4.IconProps,
        ButtonComponent = _ref4.buttonComponent,
        BtnIcon = _ref4.icon,
        label = _ref4.label,
        rowProps = _ref4.rowProps,
        btn = (0, _objectWithoutProperties2.default)(_ref4, ["IconProps", "buttonComponent", "icon", "label", "rowProps"]);

    // NOTE: This is a small array, and probably won't matter if we
    // re-render the children for now, so usage of array idx in key
    // should be fine.
    if (ButtonComponent) {
      return _react.default.createElement(ButtonComponent // eslint-disable-next-line react/no-array-index-key
      , Object.assign({
        key: "".concat(label, "__").concat(idx),
        label: label
      }, btn));
    }

    return (// eslint-disable-next-line react/no-array-index-key
      _react.default.createElement(_Button.default, Object.assign({
        type: "button"
      }, _getBtnProps(btn), {
        key: "".concat(label, "__").concat(idx)
      }), _react.default.createElement(_Row.default, Object.assign({
        as: "span",
        alignItems: "center",
        gutter: false,
        justify: "center",
        wrap: "nowrap"
      }, rowProps), renderIcon(BtnIcon, IconProps), label))
    );
  }));
}

ButtonGroup.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * The id of the active button, if the `toggle` prop is set to `true`.
   */
  activeId: _propTypes.default.string,

  /**
   * The props of the button in `active` state, if the `toggle` props is set to `true`.
   */
  activeProps: _propTypes.default.object,

  /**
   * The list of buttons to render.
   */
  buttons: _propTypes.default.array.isRequired,

  /**
   * @ignore
   */
  className: _propTypes.default.string,

  /**
   * The props of the button in `inactive` state, if the `toggle` props is set to `true`.
   */
  inactiveProps: _propTypes.default.object,

  /**
   * A map of action handlers for the buttons.
   */
  handlers: _propTypes.default.object,

  /**
   * Invoke each of the button onClick handlers with some data.
   */
  invokeWith: _propTypes.default.object,

  /**
   * Add a bit of margin between the rendered buttons.
   * NOTE: This only comes into play when the `toggle` prop is set to `false` (default).
   */
  spacing: _propTypes.default.string,

  /**
   * If set to `true`, turn the ButtonGroup into a ButtonToggle instead.
   */
  toggle: _propTypes.default.bool
} : {};
ButtonGroup.defaultProps = {
  activeId: null,
  activeProps: null,
  className: '',
  handlers: null,
  inactiveProps: null,
  invokeWith: null,
  spacing: null,
  toggle: false
};
var _default = ButtonGroup;
exports.default = _default;