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

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var SwitchBaseStyled = _styledComponents.default.div.withConfig({
  displayName: "SwitchBase__SwitchBaseStyled",
  componentId: "sc-1p2siik-0"
})(["display:inline-block;position:relative;"]);

var SwitchBaseInput = _styledComponents.default.input.withConfig({
  displayName: "SwitchBase__SwitchBaseInput",
  componentId: "sc-1p2siik-1"
})(["cursor:inherit;height:100%;left:0;margin:0;opacity:0;padding:0;position:absolute;top:0;width:100%;"]);

var SwitchBase =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2.default)(SwitchBase, _React$Component);

  function SwitchBase(props) {
    var _this;

    (0, _classCallCheck2.default)(this, SwitchBase);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(SwitchBase).call(this, props));

    _this.handleFocus = function (event) {
      var onFocus = _this.props.onFocus;
      var checked = _this.state.checked;

      if (typeof onFocus === 'function') {
        onFocus(event, checked);
      }
    };

    _this.handleBlur = function (event) {
      var onBlur = _this.props.onBlur;
      var checked = _this.state.checked;

      if (typeof onBlur === 'function') {
        onBlur(event, checked);
      }
    };

    _this.handleInputChange = function (event) {
      var onChange = _this.props.onChange;
      var checked = event.target.checked;

      if (!_this.isControlled) {
        _this.setState({
          checked: checked
        });
      }

      if (typeof onChange === 'function') {
        onChange(event, checked);
      }
    };

    var _this$props = _this.props,
        _checked = _this$props.checked,
        defaultChecked = _this$props.defaultChecked;
    _this.isControlled = _checked != null;
    _this.state = {};

    if (!_this.isControlled) {
      _this.state.checked = defaultChecked !== undefined ? defaultChecked : false;
    }

    return _this;
  }

  (0, _createClass2.default)(SwitchBase, [{
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          IconProps = _this$props2.IconProps,
          autoFocus = _this$props2.autoFocus,
          checkedProps = _this$props2.checked,
          checkedIcon = _this$props2.checkedIcon,
          isDisabled = _this$props2.isDisabled,
          icon = _this$props2.icon,
          id = _this$props2.id,
          inputProps = _this$props2.inputProps,
          inputRef = _this$props2.inputRef,
          name = _this$props2.name,
          onBlur = _this$props2.onBlur,
          onChange = _this$props2.onChange,
          onFocus = _this$props2.onFocus,
          readOnly = _this$props2.readOnly,
          required = _this$props2.required,
          tabIndex = _this$props2.tabIndex,
          type = _this$props2.type,
          useSameIcon = _this$props2.useSameIcon,
          value = _this$props2.value,
          other = (0, _objectWithoutProperties2.default)(_this$props2, ["IconProps", "autoFocus", "checked", "checkedIcon", "isDisabled", "icon", "id", "inputProps", "inputRef", "name", "onBlur", "onChange", "onFocus", "readOnly", "required", "tabIndex", "type", "useSameIcon", "value"]);
      var checkedState = this.state.checked;
      var checked = this.isControlled ? checkedProps : checkedState;
      var hasLabelFor = type === 'checkbox' || type === 'radio';
      var Icon = useSameIcon ? icon : checked ? checkedIcon : icon;
      var iconProps = (0, _objectSpread2.default)({
        checked: checked,
        isDisabled: isDisabled,
        readOnly: readOnly,
        required: required
      }, IconProps);
      return _react.default.createElement(SwitchBaseStyled, Object.assign({
        isDisabled: isDisabled,
        onBlur: this.handleBlur,
        onFocus: this.handleFocus
      }, other), _react.default.createElement(Icon, iconProps), _react.default.createElement(SwitchBaseInput, Object.assign({
        autoFocus: autoFocus,
        checked: checked,
        isDisabled: isDisabled,
        id: hasLabelFor && id,
        name: name,
        onChange: this.handleInputChange,
        readOnly: readOnly,
        ref: inputRef,
        required: required,
        tabIndex: tabIndex,
        type: type,
        value: value
      }, inputProps)));
    }
  }]);
  return SwitchBase;
}(_react.default.Component);

SwitchBase.defaultProps = {
  IconProps: null,
  autoFocus: null,
  checked: null,
  checkedIcon: function checkedIcon() {},
  defaultChecked: false,
  isDisabled: null,
  icon: function icon() {},
  id: null,
  inputProps: null,
  inputRef: null,
  name: '',
  onBlur: function onBlur() {},
  onChange: function onChange() {},
  onFocus: function onFocus() {},
  readOnly: null,
  required: null,
  tabIndex: null,
  type: 'checkbox',
  useSameIcon: null,
  value: ''
};
SwitchBase.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * Properties passed down to the `icon` component.
   */
  IconProps: _propTypes.default.object,

  /**
   * If `true`, the internal input will be automatically focused on mount.
   */
  autoFocus: _propTypes.default.bool,

  /**
   * If `true`, the component is marked as checked.
   */
  checked: _propTypes.default.bool,

  /**
   * The icon to display when the component is checked.
   */
  checkedIcon: _propTypes.default.oneOfType([_propTypes.default.func, _propTypes.default.object]),

  /**
   * Define the default checked value if not a controlled input.
   */
  defaultChecked: _propTypes.default.bool,

  /**
   * If `true`, the Button will be disabled.
   */
  isDisabled: _propTypes.default.bool,

  /**
   * The Icon to display when the component is unchecked.
   */
  icon: _propTypes.default.oneOfType([_propTypes.default.func, _propTypes.default.object]),

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
   * Set the element to be read-only.
   */
  readOnly: _propTypes.default.bool,

  /**
   * If `true`, the input will be required.
   */
  required: _propTypes.default.bool,

  /**
   * The tab-index of the internal input.
   */
  tabIndex: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.string]),

  /**
   * The `type` of internal input.
   */
  type: _propTypes.default.string,

  /**
   * If `true`, you can use the same `icon` for both the checked and un-checked states.
   * No need to pass in an extra `checkedIcon` prop to `SwitchBase`.
   */
  useSameIcon: _propTypes.default.bool,

  /**
   * The value of the internal input component.
   */
  value: _propTypes.default.string
} : {};
var _default = SwitchBase;
exports.default = _default;