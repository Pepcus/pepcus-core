"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _faCheckSquare = require("@fortawesome/free-solid-svg-icons/faCheckSquare");

var _faMinusSquare = require("@fortawesome/free-solid-svg-icons/faMinusSquare");

var _faSquare = require("@fortawesome/free-regular-svg-icons/faSquare");

var _FaIcon = _interopRequireDefault(require("../FaIcon"));

var _SwitchBase = _interopRequireDefault(require("../SwitchBase"));

var _theme = require("../../utils/theme");

/**
 * Generate the checkbox icon based on the given type.
 *
 * @method getCheckboxIcon
 * @param  {string}        type One of `active`, `inactive`, or `indeterminate`
 * @return {Function}           A React functional component
 */
function getCheckboxIcon(type) {
  var icon; // Update the icon based on the given `type`.

  switch (type) {
    case 'active':
      {
        icon = _faCheckSquare.faCheckSquare;
        break;
      }

    case 'indeterminate':
      {
        icon = _faMinusSquare.faMinusSquare;
        break;
      }

    default:
      {
        icon = _faSquare.faSquare;
        break;
      }
  } // Return a React functional component.


  return function CheckboxIcon(config) {
    var checked = config.checked,
        colorProps = config.color,
        inactiveColor = config.inactiveColor,
        isDisabled = config.isDisabled,
        rest = (0, _objectWithoutProperties2.default)(config, ["checked", "color", "inactiveColor", "isDisabled"]); // Determine the color of the Icon based on the `checked` value.

    var color = checked ? colorProps : inactiveColor; // Render the Icon

    return _react.default.createElement(_FaIcon.default, Object.assign({
      icon: icon,
      color: color,
      disabled: isDisabled
    }, rest));
  };
}

var CheckboxStyled = (0, _styledComponents.default)(_SwitchBase.default).withConfig({
  displayName: "Checkbox__CheckboxStyled",
  componentId: "sc-1iskmv5-0"
})(["cursor:pointer;position:relative;", ";"], (0, _theme.themeGet)('Checkbox.styles'));

function Checkbox(props) {
  var checkedIcon = props.checkedIcon,
      icon = props.icon,
      indeterminate = props.indeterminate,
      indeterminateIcon = props.indeterminateIcon,
      inputProps = props.inputProps,
      other = (0, _objectWithoutProperties2.default)(props, ["checkedIcon", "icon", "indeterminate", "indeterminateIcon", "inputProps"]);
  return _react.default.createElement(CheckboxStyled, Object.assign({
    IconProps: (0, _objectSpread2.default)({
      height: '19px',
      width: '19px'
    }, other),
    checkedIcon: indeterminate ? indeterminateIcon : checkedIcon,
    inputProps: (0, _objectSpread2.default)({
      'data-indeterminate': indeterminate
    }, inputProps),
    icon: indeterminate ? indeterminateIcon : icon
  }, other));
}

Checkbox.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * If `true`, the component is marked as checked.
   */
  checked: _propTypes.default.bool,

  /**
   * The icon to display when the component is checked.
   */
  checkedIcon: _propTypes.default.func,

  /**
   * Apply themed styling to Checkbox in `active` state.
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
   * Apply themed styling to Checkbox in `inactive` state.
   *
   * Colors can be defined in `theme.palette`.
   */
  inactiveColor: _propTypes.default.string,

  /**
   * If set `true`, the icon appears indeterminate.
   */
  indeterminate: _propTypes.default.bool,

  /**
   * The Icon to display when the component is indeterminate.
   */
  indeterminateIcon: _propTypes.default.func,

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
Checkbox.defaultProps = {
  checked: false,
  checkedIcon: getCheckboxIcon('active'),
  color: 'primary',
  disabled: false,
  icon: getCheckboxIcon(),
  id: null,
  inactiveColor: null,
  indeterminate: null,
  indeterminateIcon: getCheckboxIcon('indeterminate'),
  inputProps: null,
  inputRef: null,
  onChange: null,
  type: 'checkbox',
  value: ''
};
var _default = Checkbox;
exports.default = _default;