import _objectSpread from "@babel/runtime/helpers/objectSpread";
import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { Input, Row, Col, Select } from "../..";
import FormGroupTitle from "./FormGroupTitle";
import DescriptionField from "./DescriptionField";
import { callFunc, getHandler, get } from "../../../utils";

function LocationField(props) {
  const id = props.id,
        disabled = props.disabled,
        handlers = props.formContext.handlers,
        formData = props.formData,
        schema = props.schema; // actions

  const onValidateZipcode = getHandler(handlers, 'onValidateZipcode'); // get the `zipAddresses` data to build the default list of options

  const zipAddressesData = get(schema, 'zipAddresses'); // build the default options for `city, `county` and `state`

  const cityOptions = buildSelectOptions(zipAddressesData, 'city'); // build the `county` options

  const countyOptions = buildSelectOptions(zipAddressesData, 'county'); // build the `state` options

  const stateOptions = buildSelectOptions(zipAddressesData, 'state'); // update the selected options

  const _useState = useState({
    city: cityOptions,
    county: countyOptions,
    state: stateOptions
  }),
        _useState2 = _slicedToArray(_useState, 2),
        selectOptions = _useState2[0],
        setSelectOptions = _useState2[1]; // initial data component state


  const _useState3 = useState(_objectSpread({}, formData)),
        _useState4 = _slicedToArray(_useState3, 2),
        initialData = _useState4[0],
        setInitialData = _useState4[1]; // fields to set the default values


  const zip = initialData.zip; // input ids

  const zipId = `${id}__zip`;

  function handleSelectOnChange(type) {
    return function (option) {
      const onChange = props.onChange; // get the value

      const value = get(option, 'value', ''); // Build the updated location.

      const updatedLoc = _objectSpread({}, initialData, {
        [type]: value
      }); // Update the location.


      setInitialData(prevLoc => _objectSpread({}, prevLoc, {
        [type]: value
      })); // update the the form

      callFunc(onChange, updatedLoc);
    };
  } // handle the onBlur event


  async function _onBlur(e) {
    const value = e.target.value;

    try {
      const onChange = props.onChange; // validate the zipcode

      const addresses = await onValidateZipcode(value); // make the result is an array

      if (Array.isArray(addresses)) {
        // build the `city` options
        const cityOptions = buildSelectOptions(addresses, 'city'); // build the `county` options

        const countyOptions = buildSelectOptions(addresses, 'county'); // build the `state` options

        const stateOptions = buildSelectOptions(addresses, 'state'); // update the selected options

        setSelectOptions({
          city: cityOptions,
          county: countyOptions,
          state: stateOptions
        }); // update the fields for the `locationLookup`

        initialData['zip'] = value;
        initialData['city'] = addresses[0].city;
        initialData['state'] = addresses[0].state;
        initialData['county'] = addresses[0].county; // update the form

        callFunc(onChange, initialData);
      }
    } catch (err) {
      return [];
    }
  }
  /**
   * Remove duplicate counties when building the county options for the select field
   *
   * @param {Array} arr List of objects
   * @param {Array} key The object key to use to create the options
   * @return {Array} Return Array of objects for the select options
   */


  function buildSelectOptions(arr, key) {
    if (!Array.isArray(arr)) {
      return;
    } // get the list of counties


    const options = arr.map(item => item[key]); // filter out the array from duplication, for example state: [CA, CA]

    return options.filter((item, index) => {
      return options.indexOf(item) >= index;
    }).map(value => ({
      label: value,
      value: value
    }));
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

  return React.createElement(React.Fragment, null, React.createElement(Row, {
    width: "auto"
  }, React.createElement(Col, {
    size: 12
  }, React.createElement(FormGroupTitle, {
    id: zipId,
    title: "Zip",
    required: true
  }), React.createElement(Input, {
    id: zipId,
    type: "text",
    defaultValue: zip,
    disabled: disabled,
    onBlur: _onBlur,
    required: true
  }), React.createElement(DescriptionField, {
    id: zipId,
    description: "Please provide a valid 5 digit zip code. A valid zip code will populate City, County and State automatically for the provided zip code."
  }))), React.createElement(Row, {
    width: "auto",
    margin: "10px -8px"
  }, React.createElement(Col, {
    size: 12
  }, React.createElement(FormGroupTitle, {
    id: `${id}__city`,
    required: true,
    title: "City"
  }), React.createElement(Select, {
    id: `${id}__city`,
    options: selectOptions.city,
    value: getValueForField('city'),
    onChange: handleSelectOnChange('city'),
    required: true
  }))), React.createElement(Row, {
    width: "auto",
    margin: "10px -8px"
  }, React.createElement(Col, {
    size: 6
  }, React.createElement(FormGroupTitle, {
    id: `${id}__county`,
    required: true,
    title: "County"
  }), React.createElement(Select, {
    id: `${id}__county`,
    options: selectOptions.county,
    value: getValueForField('county'),
    onChange: handleSelectOnChange('county'),
    placeholder: "--Please choose a county--",
    required: true
  })), React.createElement(Col, {
    size: 6
  }, React.createElement(FormGroupTitle, {
    id: `${id}__state`,
    required: true,
    title: "State"
  }), React.createElement(Select, {
    id: `${id}__state`,
    options: selectOptions.state,
    value: getValueForField('state'),
    onChange: handleSelectOnChange('state'),
    placeholder: "--Please choose a state",
    required: true
  }))));
}

LocationField.propTypes = process.env.NODE_ENV !== "production" ? {
  id: PropTypes.string,
  disabled: PropTypes.bool,
  required: PropTypes.bool,
  formData: PropTypes.object,
  formContext: PropTypes.object,
  onChange: PropTypes.func.isRequired,
  schema: PropTypes.object.isRequired
} : {};
LocationField.defaultProps = {
  id: null,
  disabled: false,
  required: false,
  formData: null,
  formContext: null
};
export default LocationField;