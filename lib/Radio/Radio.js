"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _faCircle = require("@fortawesome/free-regular-svg-icons/faCircle");

var _faDotCircle = require("@fortawesome/free-solid-svg-icons/faDotCircle");

var _FaIcon = _interopRequireDefault(require("../FaIcon"));

var _SwitchBase = _interopRequireDefault(require("../SwitchBase"));

var _theme = require("../../utils/theme");

/**
 * Generate the radio icon based on the given type.
 *
 * @method getRadioIcon
 * @param  {string}       type One of `checked` or null
 * @return {Function}          A React functional component
 */
function getRadioIcon(type) {
  var icon = type === 'checked' ? _faDotCircle.faDotCircle : _faCircle.faCircle; // Return a React functional component.

  return function RadioIcon(config) {
    var checked = config.checked,
        colorProps = config.color,
        inactiveColor = config.inactiveColor,
        isDisabled = config.isDisabled,
        rest = (0, _objectWithoutProperties2.default)(config, ["checked", "color", "inactiveColor", "isDisabled"]); // Determine the color of the Icon based on the `checked` value.

    var color = checked ? colorProps : inactiveColor; // Render the Icon.

    return _react.default.createElement(_FaIcon.default, Object.assign({
      icon: icon,
      color: color,
      disabled: isDisabled
    }, rest));
  };
}

var RadioStyled = (0, _styledComponents.default)(_SwitchBase.default).withConfig({
  displayName: "Radio__RadioStyled",
  componentId: "gb85ag-0"
})(["cursor:pointer;position:relative;", ";"], (0, _theme.themeGet)('Radio.styled'));

function Radio(props) {
  var checkedIcon = props.checkedIcon,
      icon = props.icon,
      other = (0, _objectWithoutProperties2.default)(props, ["checkedIcon", "icon"]);
  return _react.default.createElement(RadioStyled, Object.assign({
    checkedIcon: checkedIcon,
    icon: icon,
    height: "16px",
    width: "16px"
  }, other));
}

Radio.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * If `true`, the component is marked as checked.
   */
  checked: _propTypes.default.bool,

  /**
   * The icon to display when the component is checked.
   */
  checkedIcon: _propTypes.default.func,

  /**
   * Apply themed styling to Radio in `active` state.
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
  icon: _propTypes.default.func,

  /**
   * The id for the `input` element.
   */
  id: _propTypes.default.string,

  /**
   * Apply themed styling to Radio in `inactive` state.
   *
   * Colors can be defined in `theme.palette`.
   */
  inactiveColor: _propTypes.default.string,

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
   * Callback fired when the internal state is changed.
   */
  onChange: _propTypes.default.func,

  /**
   * The `type` of internal input.
   */
  type: _propTypes.default.string,

  /**
   * The value of the internal input component.
   */
  value: _propTypes.default.string
} : {};
Radio.defaultProps = {
  checked: false,
  checkedIcon: getRadioIcon('checked'),
  color: 'secondary',
  disabled: false,
  icon: getRadioIcon(),
  id: null,
  inactiveColor: null,
  inputProps: null,
  inputRef: null,
  onChange: null,
  type: 'radio',
  value: ''
};
var _default = Radio;
exports.default = _default;