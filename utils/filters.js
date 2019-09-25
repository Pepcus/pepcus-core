"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateListFilter = updateListFilter;
exports.removeListFilter = removeListFilter;
exports.clearAllSelectedFilters = clearAllSelectedFilters;

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

/**
 * Update a given filter for the ListFilters
 *
 * @method updateListFilter
 * @param  {Array}          filtersList    The original list of filters
 * @param  {Object}         newFilter      The new filter info
 * @return {Array}
 */
function updateListFilter(filtersList, newFilter) {
  // Extract info from the new filter object.
  var data = newFilter.data,
      parentId = newFilter.parentId; // Create an empty list of new filters.

  var updatedFiltersList = []; // If data and parentId are valid, update the filters list.

  if (data && data.length > 0 && parentId) {
    updatedFiltersList = filtersList.reduce(function (res, val) {
      if (parentId === val.id) {
        return [].concat((0, _toConsumableArray2.default)(res), [(0, _objectSpread2.default)({}, val, {
          selected: (0, _toConsumableArray2.default)(data)
        })]);
      }

      return [].concat((0, _toConsumableArray2.default)(res), [val]);
    }, []);
  } // Return the updated list of filters.


  return updatedFiltersList;
}
/**
 * Remove a given filter from the ListFilters
 *
 * @method removeListFilter
 * @param  {Array}          filtersList    The original list of filters
 * @param  {Object}         filterToRemove The filter to remove
 * @return {Array}
 */


function removeListFilter(filtersList, filterToRemove) {
  // Extract info from the new filter object.
  var id = filterToRemove.id,
      parentId = filterToRemove.parentId; // Create an empty list of new filters.

  var updatedFiltersList = []; // If we have a valid `parentId`, rebuild the filters list.

  if (parentId) {
    updatedFiltersList = filtersList.reduce(function (res, val) {
      if (parentId === val.id) {
        return [].concat((0, _toConsumableArray2.default)(res), [(0, _objectSpread2.default)({}, val, {
          selected: val.selected.filter(function (selected) {
            return selected.id !== id;
          })
        })]);
      }

      return [].concat((0, _toConsumableArray2.default)(res), [val]);
    }, []);
  } // Return the updated list of filters.


  return updatedFiltersList;
}
/**
 * Clear the selected list from a given ListFilters
 *
 * @method clearAllSelectedFilters
 * @param  {Array}                 filtersList The current list of filters.
 * @return {Array}
 */


function clearAllSelectedFilters(filtersList) {
  // Reset the `selected` key for each filter to an empty Array.
  return filtersList.map(function (filter) {
    return (0, _objectSpread2.default)({}, filter, {
      selected: []
    });
  });
}