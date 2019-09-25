"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mergeObjects = void 0;

var _deepmerge = _interopRequireDefault(require("deepmerge"));

/**
 * Merge multiple objects together.
 *
 * @method mergeObjects
 * @param  {Array}      objects Pick up all of the objects to merge
 * @return {Object}             The final merged object
 */
var mergeObjects = function mergeObjects() {
  for (var _len = arguments.length, objects = new Array(_len), _key = 0; _key < _len; _key++) {
    objects[_key] = arguments[_key];
  }

  return _deepmerge.default.all([].concat(objects), {
    arrayMerge: function arrayMerge(dest, src) {
      return src;
    }
  });
};

exports.mergeObjects = mergeObjects;