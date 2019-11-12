"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.calculateSort = void 0;

/**
 * Calculate a sorting order for the api calls
 *
 * @method calculateSort
 * @param  {string}      order   The order, either 'asc' or 'desc'
 * @param  {string}      orderBy The property to order
 * @return {string|null}         The final sort string, or null
 */
var calculateSort = function calculateSort(order, orderBy) {
  // If either order or orderBy is empty,
  // return null
  if (!order || !orderBy || typeof orderBy !== 'string') {
    return null;
  } // Return the + or - based on the order


  switch (order) {
    case 'asc':
      return "+".concat(orderBy);

    case 'desc':
      return "-".concat(orderBy);

    default:
      return null;
  }
};

exports.calculateSort = calculateSort;