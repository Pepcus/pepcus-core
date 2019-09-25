"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _SwitchBase = _interopRequireDefault(require("../SwitchBase"));

var _SvgIcon = require("../SvgIcon");

var _theme = require("../../constants/theme");

var _theme2 = require("../../utils/theme");

var CheckboxIconActive = (0, _styledComponents.default)(_SvgIcon.CheckboxIcon).withConfig({
  displayName: "Checkbox__CheckboxIconActive",
  componentId: "sc-1sn42dw-0"
})(["color:", ";height:17px;width:17px;", ";"], function (_ref) {
  var theme = _ref.theme,
      color = _ref.color;
  return (0, _theme2.getThemeProps)("palette.".concat(color, ".color"), _theme.THEME.palette.primary.color, {
    theme: theme
  });
}, (0, _theme2.getThemeProps)('Checkbox.active.styles'));
var CheckboxIconInActive = (0, _styledComponents.default)(_SvgIcon.CheckboxEmptyIcon).withConfig({
  displayName: "Checkbox__CheckboxIconInActive",
  componentId: "sc-1sn42dw-1"
})(["height:17px;width:17px;", ";"], (0, _theme2.getThemeProps)('Checkbox.inactive.styles'));
var Checkbox = (0, _styledComponents.default)(_SwitchBase.default).withConfig({
  displayName: "Checkbox",
  componentId: "sc-1sn42dw-2"
})(["cursor:pointer;margin-top:4px;position:relative;", ";"], (0, _theme2.getThemeProps)('Checkbox.styles'));
Checkbox.propTypes = {
  /**
   * If `true`, the component is marked as checked.
   */
  checked: _propTypes.default.bool,

  /**
   * The icon to display when the component is checked.
   */
  checkedIcon: _propTypes.default.node,

  /**
   * @ignore
   */
  className: _propTypes.default.string,

  /**
   * Apply themed styling to Checkbox.
   *
   * Colors can be defined in `theme.palette`.
   */
  color: _propTypes.default.string,

  /**
   * If `true`, the Button will be disabled.
   */
  disabled: _propTypes.default.bool,

  /**
   * The Icon to display when the component is unchecked.
   */
  icon: _propTypes.default.node,

  /**
   * The id for the `input` element.
   */
  id: _propTypes.default.string,

  /**
   * The attributes for the `input` element.
   */
  inputProps: _propTypes.default.object,

  /**
   * Attaches a React ref to the native input component.
   * Can use a `node => this.ref = node` function, or a `React.createRef()` object.
   */
  inputRef: _propTypes.default.oneOfType([_propTypes.default.func, _propTypes.default.object]),

  /**
   * @ignore
   */
  name: _propTypes.default.string,

  /**
   * @ignore
   */
  onBlur: _propTypes.default.func,

  /**
   * Callback fired when the internal state is changed.
   */
  onChange: _propTypes.default.func,

  /**
   * @ignore
   */
  onFocus: _propTypes.default.func,

  /**
   * The `type` of internal input.
   */
  type: _propTypes.default.string,

  /**
   * The value of the internal input component.
   */
  value: _propTypes.default.string
};
Checkbox.defaultProps = {
  checked: null,
  checkedIcon: _react.default.createElement(CheckboxIconActive, null),
  className: '',
  color: 'primary',
  disabled: false,
  icon: _react.default.createElement(CheckboxIconInActive, null),
  id: null,
  inputProps: null,
  inputRef: null,
  name: '',
  onBlur: null,
  onChange: null,
  onFocus: null,
  type: 'checkbox',
  value: ''
};
var _default = Checkbox;
exports.default = _default;