"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.calculateLastPage = void 0;

/**
 * Calculate the last page of a pagination component
 *
 * @method calculateLastPage
 * @param  {number}          count        The total count of items
 * @param  {number}          itemsPerPage The amount of items per page
 * @return {number}                       The calculated last page
 */
var calculateLastPage = function calculateLastPage(count, itemsPerPage) {
  return Math.max(0, Math.ceil(count / itemsPerPage)) || 1;
};

exports.calculateLastPage = calculateLastPage;