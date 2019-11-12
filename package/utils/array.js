"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.moveArrayItem = moveArrayItem;

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

/**
 * Move an item in the given Array from one idx to another,
 * without mutating the original array.
 *
 * @method moveArrayItem
 * @param  {Array}       array          The array to move items in
 * @param  {number}      fromIdx        The index to move item from
 * @param  {number}      toIdx          The new index to move item to
 * @param  {Any}         [newItem=null] The new item to add to the array
 * @return {Array}                      The updated array
 */
function moveArrayItem(array, fromIdx, toIdx) {
  var newItem = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
  // Remove the item from the array first.
  var itemRemovedArray = [].concat((0, _toConsumableArray2.default)(array.slice(0, fromIdx)), (0, _toConsumableArray2.default)(array.slice(fromIdx + 1, array.length))); // Add back in the item from the original array from the source index.

  return [].concat((0, _toConsumableArray2.default)(itemRemovedArray.slice(0, toIdx)), [newItem || array[fromIdx]], (0, _toConsumableArray2.default)(itemRemovedArray.slice(toIdx, itemRemovedArray.length)));
}