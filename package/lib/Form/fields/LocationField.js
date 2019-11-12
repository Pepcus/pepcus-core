"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _objectSpread4 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireWildcard(require("react"));

var _ = require("../..");

var _FormGroupTitle = _interopRequireDefault(require("./FormGroupTitle"));

var _DescriptionField = _interopRequireDefault(require("./DescriptionField"));

var _utils = require("../../../utils");

function LocationField(props) {
  var id = props.id,
      disabled = props.disabled,
      handlers = props.formContext.handlers,
      formData = props.formData,
      schema = props.schema; // actions

  var onValidateZipcode = (0, _utils.getHandler)(handlers, 'onValidateZipcode'); // get the `zipAddresses` data to build the default list of options

  var zipAddressesData = (0, _utils.get)(schema, 'zipAddresses'); // build the default options for `city, `county` and `state`

  var cityOptions = buildSelectOptions(zipAddressesData, 'city'); // build the `county` options

  var countyOptions = buildSelectOptions(zipAddressesData, 'county'); // build the `state` options

  var stateOptions = buildSelectOptions(zipAddressesData, 'state'); // update the selected options

  var _useState = (0, _react.useState)({
    city: cityOptions,
    county: countyOptions,
    state: stateOptions
  }),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      selectOptions = _useState2[0],
      setSelectOptions = _useState2[1]; // initial data component state


  var _useState3 = (0, _react.useState)((0, _objectSpread4.default)({}, formData)),
      _useState4 = (0, _slicedToArray2.default)(_useState3, 2),
      initialData = _useState4[0],
      setInitialData = _useState4[1]; // fields to set the default values


  var zip = initialData.zip; // input ids

  var zipId = "".concat(id, "__zip");

  function handleSelectOnChange(type) {
    return function (option) {
      var onChange = props.onChange; // get the value

      var value = (0, _utils.get)(option, 'value', ''); // Build the updated location.

      var updatedLoc = (0, _objectSpread4.default)({}, initialData, (0, _defineProperty2.default)({}, type, value)); // Update the location.

      setInitialData(function (prevLoc) {
        return (0, _objectSpread4.default)({}, prevLoc, (0, _defineProperty2.default)({}, type, value));
      }); // update the the form

      (0, _utils.callFunc)(onChange, updatedLoc);
    };
  } // handle the onBlur event


  function _onBlur(_x) {
    return _onBlur2.apply(this, arguments);
  }
  /**
   * Remove duplicate counties when building the county options for the select field
   *
   * @param {Array} arr List of objects
   * @param {Array} key The object key to use to create the options
   * @return {Array} Return Array of objects for the select options
   */


  function _onBlur2() {
    _onBlur2 = (0, _asyncToGenerator2.default)(
    /*#__PURE__*/
    _regenerator.default.mark(function _callee(e) {
      var value, onChange, addresses, _cityOptions, _countyOptions, _stateOptions;

      return _regenerator.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              value = e.target.value;
              _context.prev = 1;
              onChange = props.onChange; // validate the zipcode

              _context.next = 5;
              return onValidateZipcode(value);

            case 5:
              addresses = _context.sent;

              // make the result is an array
              if (Array.isArray(addresses)) {
                // build the `city` options
                _cityOptions = buildSelectOptions(addresses, 'city'); // build the `county` options

                _countyOptions = buildSelectOptions(addresses, 'county'); // build the `state` options

                _stateOptions = buildSelectOptions(addresses, 'state'); // update the selected options

                setSelectOptions({
                  city: _cityOptions,
                  county: _countyOptions,
                  state: _stateOptions
                }); // update the fields for the `locationLookup`

                initialData['zip'] = value;
                initialData['city'] = addresses[0].city;
                initialData['state'] = addresses[0].state;
                initialData['county'] = addresses[0].county; // update the form

                (0, _utils.callFunc)(onChange, initialData);
              }

              _context.next = 12;
              break;

            case 9:
              _context.prev = 9;
              _context.t0 = _context["catch"](1);
              return _context.abrupt("return", []);

            case 12:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[1, 9]]);
    }));
    return _onBlur2.apply(this, arguments);
  }

  function buildSelectOptions(arr, key) {
    if (!Array.isArray(arr)) {
      return;
    } // get the list of counties


    var options = arr.map(function (item) {
      return item[key];
    }); // filter out the array from duplication, for example state: [CA, CA]

    return options.filter(function (item, index) {
      return options.indexOf(item) >= index;
    }).map(function (value) {
      return {
        label: value,
        value: value
      };
    });
  }
  /**
   * Returns value for the given field name from initialData object
   *
   * @param   {string}    fieldName    Name of the field for which data needs to be retrieved
   * @return  {Object}
   */


  function getValueForField(fieldName) {
    return initialData[fieldName] ? {
      label: initialData[fieldName],
      value: initialData[fieldName]
    } : undefined;
  }

  return _react.default.createElement(_react.default.Fragment, null, _react.default.createElement(_.Row, {
    width: "auto"
  }, _react.default.createElement(_.Col, {
    size: 12
  }, _react.default.createElement(_FormGroupTitle.default, {
    id: zipId,
    title: "Zip",
    required: true
  }), _react.default.createElement(_.Input, {
    id: zipId,
    type: "text",
    defaultValue: zip,
    disabled: disabled,
    onBlur: _onBlur,
    required: true
  }), _react.default.createElement(_DescriptionField.default, {
    id: zipId,
    description: "Please provide a valid 5 digit zip code. A valid zip code will populate City, County and State automatically for the provided zip code."
  }))), _react.default.createElement(_.Row, {
    width: "auto",
    margin: "10px -8px"
  }, _react.default.createElement(_.Col, {
    size: 12
  }, _react.default.createElement(_FormGroupTitle.default, {
    id: "".concat(id, "__city"),
    required: true,
    title: "City"
  }), _react.default.createElement(_.Select, {
    id: "".concat(id, "__city"),
    options: selectOptions.city,
    value: getValueForField('city'),
    onChange: handleSelectOnChange('city'),
    required: true
  }))), _react.default.createElement(_.Row, {
    width: "auto",
    margin: "10px -8px"
  }, _react.default.createElement(_.Col, {
    size: 6
  }, _react.default.createElement(_FormGroupTitle.default, {
    id: "".concat(id, "__county"),
    required: true,
    title: "County"
  }), _react.default.createElement(_.Select, {
    id: "".concat(id, "__county"),
    options: selectOptions.county,
    value: getValueForField('county'),
    onChange: handleSelectOnChange('county'),
    placeholder: "--Please choose a county--",
    required: true
  })), _react.default.createElement(_.Col, {
    size: 6
  }, _react.default.createElement(_FormGroupTitle.default, {
    id: "".concat(id, "__state"),
    required: true,
    title: "State"
  }), _react.default.createElement(_.Select, {
    id: "".concat(id, "__state"),
    options: selectOptions.state,
    value: getValueForField('state'),
    onChange: handleSelectOnChange('state'),
    placeholder: "--Please choose a state",
    required: true
  }))));
}

LocationField.propTypes = process.env.NODE_ENV !== "production" ? {
  id: _propTypes.default.string,
  disabled: _propTypes.default.bool,
  required: _propTypes.default.bool,
  formData: _propTypes.default.object,
  formContext: _propTypes.default.object,
  onChange: _propTypes.default.func.isRequired,
  schema: _propTypes.default.object.isRequired
} : {};
LocationField.defaultProps = {
  id: null,
  disabled: false,
  required: false,
  formData: null,
  formContext: null
};
var _default = LocationField;
exports.default = _default;