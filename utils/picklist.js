"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getPicklistComponent = getPicklistComponent;

var _isEmpty2 = _interopRequireDefault(require("lodash/isEmpty"));

var _recompose = require("recompose");

var _react = require("react");

/**
 * Get information about the Picklist Component,
 * if the `picklist` exists in the provided `context`.
 *
 * @method getPicklistComponent
 * @param  {Array}              [context=[]] The list of picklists (context)
 * @param  {Object}             [props={}]   Props for each of the picklist component
 * @return {Object}                          The info about the Picklist Component
 */
function getPicklistComponent() {
  var context = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var props = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  // Find the picklist compoent from the context.
  var PicklistComponent = !(0, _isEmpty2.default)(props) && props.id && context.find(function (item) {
    return (0, _recompose.getDisplayName)(item).includes(props.id);
  }); // Determine whether the found component is a valid React Component.
  // This validation excludes HTML tagNames, and strings, it must be either
  // a functional stateless or statefull or styled component.

  var valid = (0, _react.isValidElement)(PicklistComponent) || (0, _recompose.isClassComponent)(PicklistComponent); // If needed, we can assign a `ref` for the wrapped or regular React Component.

  var PicklistRef = valid && (PicklistComponent.WrappedComponent || PicklistComponent);
  return {
    valid: valid,
    picklistProps: props,
    Component: PicklistComponent,
    componentRef: PicklistRef
  };
}