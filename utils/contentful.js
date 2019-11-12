"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.normalizeContentfulField = normalizeContentfulField;
exports.normalizeInsightCategoriesList = normalizeInsightCategoriesList;

var _objectSpread2 = _interopRequireDefault(require("@babel/runtime/helpers/objectSpread"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _get2 = _interopRequireDefault(require("lodash/get"));

var _isEmpty2 = _interopRequireDefault(require("lodash/isEmpty"));

/**
 * Normalize a given contentful field by extracting specific keys from it.
 *
 * @method normalizeContentfulField
 * @param  {Array}                  data     The list of field props
 * @param  {Array}                  keysList The list of keys to extract
 * @return {Array}                           The extracted field
 */
function normalizeContentfulField(data, keysList) {
  try {
    // Data and Keys must be a list of items.
    if (!Array.isArray(data) || !Array.isArray(keysList)) {
      // throw new Error('The requested data and keys must be of type Array.');
      return null;
    } // For each of the fields, get the requested key.


    return data.map(function (field) {
      var updatedField = {}; // Go through all the requested keys and extract them.

      keysList.forEach(function (_ref) {
        var key = _ref.key,
            label = _ref.label,
            defaultValue = _ref.defaultValue;
        updatedField[label] = (0, _get2.default)(field, key, defaultValue);
      }); // Return the updated field.

      return updatedField;
    });
  } catch (e) {
    return null;
  }
}
/**
 * Normalize the list of categories for the Insights widget.
 *
 * @method normalizeInsightCategoriesList
 * @param  {Array}                        list The original list of categories
 * @return {Array}                             The updated list
 */


function normalizeInsightCategoriesList(list) {
  try {
    // Make a copy of the original categories.
    var categories = (0, _toConsumableArray2.default)(list[0].fields.categories); // Normalize the categories list.

    var normalizedCategories = normalizeContentfulField(categories, [{
      key: 'sys.id',
      label: 'id'
    }, {
      key: 'fields.name',
      label: 'name'
    }, {
      key: 'fields.topics',
      label: 'topics',
      defaultValue: []
    }]).filter(function (cat) {
      return !(0, _isEmpty2.default)(cat.topics);
    }); // Normalize the categories topics list.

    var normalizeCategoriesWithTopics = normalizedCategories.map(function (cat) {
      return (0, _objectSpread2.default)({}, cat, {
        topics: normalizeContentfulField(cat.topics, [{
          key: 'fields.name',
          label: 'name'
        }, {
          key: 'sys.id',
          label: 'id'
        }])
      });
    }); // Return the normalized categories list.

    return normalizeCategoriesWithTopics;
  } catch (e) {
    return null;
  }
}