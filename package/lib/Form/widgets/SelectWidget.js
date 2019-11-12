"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _Input = require("../../Input");

/**
 * Parse a value out as a number
 *
 * @method parseAsNumber
 * @param  {Any}         value The value to parse
 * @return {Any|number}        The value
 */
var parseAsNumber = function parseAsNumber(value) {
  if (value === '') {
    return undefined;
  } // "1." isn't considered a number, even if JavaScript parses it fine.
  // The user is most likely entereing in a floating point integer.


  if (/\.$/.test(value)) {
    return value;
  } // "1.0" isn't considered a number, but a floating point number (float).
  // We should return the string, to allow for float inputs.


  if (/\.0$/.test(value)) {
    return value;
  } // If we're truly working with a number and not a float,
  // let's parse it via Number() and see if it is a valid Number.


  var num = Number(value);
  var isNumber = typeof num === 'number' && !Number.isNaN(num); // Fantastic, it's a number!
  // Now we should return it as a string so that it doesn't conflict
  // with the user entering in a currency symbol or any other value.

  if (/\.\d*0$/.test(value)) {
    return value;
  } // Return the valid number or the passed in value in the end.


  return isNumber ? num : value;
};
/**
 * Get the select widgets value
 *
 * @method getSelectWidgetValue
 * @param  {Object}             schema The form schema
 * @param  {Any}                value  The value for the select widget
 * @return {Any}                       The final value
 */


var getSelectWidgetValue = function getSelectWidgetValue(_ref, value) {
  var type = _ref.type,
      items = _ref.items;
  var NUMBER_INT = ['number', 'integer'];

  if (value === '') {
    return undefined;
  } else if (type === 'array' && items && NUMBER_INT.includes(items.type)) {
    return value.map(parseAsNumber);
  } else if (type === 'boolean') {
    return value === 'true';
  } else if (type === 'number') {
    return parseAsNumber(value);
  }

  return value;
};
/**
 * Extract the select input value based on regular or multiple select
 *
 * @method getSelectInputValue
 * @param  {Event}              event    The synthetic event
 * @param  {boolean}            multiple The multiple select attr
 * @return {Any}                         The value
 */


var getSelectInputValue = function getSelectInputValue(event, multiple) {
  if (multiple) {
    return [].slice.call(event.target.options).filter(function (option) {
      return option.selected;
    }).map(function (option) {
      return option.value;
    });
  }

  return event.target.value;
};

function SelectWidget(props) {
  var autofocus = props.autofocus,
      disabled = props.disabled,
      id = props.id,
      multiple = props.multiple,
      onBlur = props.onBlur,
      _onChange = props.onChange,
      onFocus = props.onFocus,
      options = props.options,
      placeholder = props.placeholder,
      readonly = props.readonly,
      required = props.required,
      schema = props.schema,
      value = props.value;
  var enumOptions = options.enumOptions,
      enumDisabled = options.enumDisabled;
  var emptyValue = multiple ? [] : '';
  return _react.default.createElement(_Input.Select, {
    id: id,
    multiple: multiple,
    value: typeof value === 'undefined' ? emptyValue : value,
    required: required,
    disabled: disabled || readonly,
    autoFocus: autofocus,
    onBlur: onBlur && function (event) {
      var newValue = getSelectInputValue(event, multiple);
      onBlur(id, getSelectWidgetValue(schema, newValue));
    },
    onFocus: onFocus && function (event) {
      var newValue = getSelectInputValue(event, multiple);
      onFocus(id, getSelectWidgetValue(schema, newValue));
    },
    onChange: function onChange(event) {
      var newValue = getSelectInputValue(event, multiple);

      _onChange(getSelectWidgetValue(schema, newValue));
    }
  }, !multiple && !schema.default && _react.default.createElement(_Input.SelectOption, {
    value: "",
    disabled: true
  }, placeholder), enumOptions.map(function (_ref2, idx) {
    var value = _ref2.value,
        label = _ref2.label;
    var disabledOption = enumDisabled && enumDisabled.indexOf(value) !== -1;
    var key = "".concat(label, "_").concat(idx);
    return _react.default.createElement(_Input.SelectOption, {
      key: key,
      value: value,
      disabled: disabledOption
    }, label);
  }));
}

SelectWidget.propTypes = process.env.NODE_ENV !== "production" ? {
  autofocus: _propTypes.default.bool,
  disabled: _propTypes.default.bool,
  id: _propTypes.default.string.isRequired,
  multiple: _propTypes.default.bool,
  onBlur: _propTypes.default.func,
  onChange: _propTypes.default.func,
  onFocus: _propTypes.default.func,
  options: _propTypes.default.shape({
    enumOptions: _propTypes.default.array
  }).isRequired,
  placeholder: _propTypes.default.string,
  readonly: _propTypes.default.bool,
  required: _propTypes.default.bool,
  schema: _propTypes.default.object.isRequired,
  value: _propTypes.default.any
} : {};
SelectWidget.defaultProps = {
  autofocus: false,
  disabled: false,
  multiple: false,
  onBlur: null,
  onChange: null,
  onFocus: null,
  placeholder: 'Select an option',
  readonly: false,
  required: false,
  value: ''
};
var _default = SelectWidget;
exports.default = _default;