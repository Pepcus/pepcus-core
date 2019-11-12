"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addSchemaValue = void 0;

var _cloneDeep2 = _interopRequireDefault(require("lodash/cloneDeep"));

var _set2 = _interopRequireDefault(require("lodash/set"));

/**
 * Add a single value to a given schema.
 *
 * @method addSchemaValue
 * @param  {Object}       [schema={}]    The schema to update
 * @param  {string}       [path='']      The path at which to update
 * @param  {Any}          [value=null]   The value to add @ the path
 * @param  {boolean}      [mutate=true] Should we mutate the schema?
 * @return {Object}
 */
var addSchemaValue = function addSchemaValue() {
  var schema = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var path = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  var value = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  var mutate = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;

  // Do we really want to mutate the schema?
  if (mutate) {
    // By default `lodash/set` mutates the passed in object.
    return (0, _set2.default)(schema, path, value);
  } // Make a deep copy of the schema.


  var schemaClone = (0, _cloneDeep2.default)(schema); // Mutate the copied schema with the required value @ path.

  (0, _set2.default)(schemaClone, path, value); // Return the updated copied schema. Mutation free.

  return schemaClone;
};

exports.addSchemaValue = addSchemaValue;