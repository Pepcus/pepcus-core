"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.buildDataViewJapiApiParams = buildDataViewJapiApiParams;
exports.fetchAPIData = exports.extractAPIConfig = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _get2 = _interopRequireDefault(require("lodash/get"));

var _isEmpty2 = _interopRequireDefault(require("lodash/isEmpty"));

var _axios = _interopRequireDefault(require("axios"));

var _qs = _interopRequireDefault(require("qs"));

var _sorting = require("./sorting");

/**
 * Create a local axios instance.
 *
 * @type {Object}
 */
var AXIOS_INSTANCE = _axios.default.create({
  paramsSerializer: function paramsSerializer(params) {
    return _qs.default.stringify(params, {
      arrayFormat: 'repeat'
    });
  }
});
/**
 * An identity func for axios 'success' interceptor
 *
 * @method _successInterceptIdentity
 * @param  {Object}                  config The axios config object
 * @return {Object}
 */


var _successInterceptIdentity = function _successInterceptIdentity(config) {
  return config;
}; // const __errorInterceptIdentity = error => Promise.reject(error);

/**
 * An identity func for axios 'error' interceptor
 *
 * @method _errorInterceptIdentity
 * @param  {Object}                error The axios error
 * @return {Promise}
 */


function _errorInterceptIdentity(_x) {
  return _errorInterceptIdentity2.apply(this, arguments);
}
/**
 * Extract the requested API config from the given list of API configs, using the provided request `type`.
 *
 * @method extractAPIConfig
 * @param  {Array}          apis          The list of API requests
 * @param  {string}         [type='data'] The `dataType` key
 * @return {Object}                       The api request
 */


function _errorInterceptIdentity2() {
  _errorInterceptIdentity2 = (0, _asyncToGenerator2.default)(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee2(error) {
    var originalRequest, invalidTokenErrorThrown, refreshTokenFunc, updatedToken;
    return _regenerator.default.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            // Capture the original request.
            // NOTE: We want reference the config instead of making a copy.
            originalRequest = error.config; // Do we have a invalid token error?

            invalidTokenErrorThrown = error.response && (error.response.status === 401 || error.response.status === 403) && error.response.data.error === 'invalid_token'; // Throw an error if we are re-trying a previous request.

            if (!(originalRequest && originalRequest.__isRetryRequest)) {
              _context2.next = 5;
              break;
            }

            throw error;

          case 5:
            // In case this request fails, let's add a `__isRetryRequest` flag to the config.
            if (originalRequest) {
              originalRequest.__isRetryRequest = true;
            } // Catch the `invalid_token` error for an expired JWT token.


            if (!invalidTokenErrorThrown) {
              _context2.next = 19;
              break;
            }

            // Extract the `refreshToken` function call.
            refreshTokenFunc = (0, _get2.default)(error, 'config.refreshToken'); // Only invoke the `refreshTokenFunc` if it's a function and defined.

            if (!(refreshTokenFunc && typeof refreshTokenFunc === 'function')) {
              _context2.next = 16;
              break;
            }

            _context2.next = 11;
            return refreshTokenFunc(error);

          case 11:
            updatedToken = _context2.sent;
            // Update the headers of the previous API call with the new JWT token.
            originalRequest.headers['Authorization'] = "Bearer ".concat(updatedToken); // Redo the last API call.

            return _context2.abrupt("return", (0, _axios.default)(originalRequest));

          case 16:
            throw error;

          case 17:
            _context2.next = 20;
            break;

          case 19:
            throw error;

          case 20:
            _context2.next = 25;
            break;

          case 22:
            _context2.prev = 22;
            _context2.t0 = _context2["catch"](0);
            return _context2.abrupt("return", Promise.reject(_context2.t0));

          case 25:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 22]]);
  }));
  return _errorInterceptIdentity2.apply(this, arguments);
}

var extractAPIConfig = function extractAPIConfig(apis) {
  var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'data';
  return Array.isArray(apis) ? apis.find(function (api) {
    return Object.prototype.hasOwnProperty.call(api, 'dataType') && api.dataType === type;
  }) : apis;
};
/**
 * A soft wrapper around the `axios` library.
 * Provides extra perks of requesting certain `keys` from the `resp.data` object.
 * Helps deal with the overhead of having to go through the `resp.data` and finding
 * the keys you want in multiple statements, and more.
 *
 * @method fetchAPIData
 * @param  {Object}     [config={}]      The axios config object
 * @param  {Object}     [dataKeysMap={}] A map of keys and values to retreive from the fetched data
 * @return {Promise}                     The `fetchData()` Promise
 */


exports.extractAPIConfig = extractAPIConfig;

var fetchAPIData =
/*#__PURE__*/
function () {
  var _ref = (0, _asyncToGenerator2.default)(
  /*#__PURE__*/
  _regenerator.default.mark(function _callee() {
    var config,
        dataKeysMap,
        apiResp,
        resp,
        _args = arguments;
    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            config = _args.length > 0 && _args[0] !== undefined ? _args[0] : {};
            dataKeysMap = _args.length > 1 && _args[1] !== undefined ? _args[1] : {};
            _context.prev = 2;
            // Add in the interceptors for refreshing the JWT token.
            AXIOS_INSTANCE.interceptors.response.use(_successInterceptIdentity, _errorInterceptIdentity); // Make the requested `api` call.

            _context.next = 6;
            return AXIOS_INSTANCE(config);

          case 6:
            apiResp = _context.sent;
            // Create an empty response object.
            resp = {}; // If there is no `dataKeysList`, then we'll return the final data
            // from the API `response` object.

            if (!((0, _isEmpty2.default)(dataKeysMap) || (0, _typeof2.default)(dataKeysMap) !== 'object')) {
              _context.next = 11;
              break;
            }

            // In a generic `axios` request, the final response of the API
            // call is in the `resp.data` object. If present, return it,
            // otherwise return the full resp.
            resp.data = (0, _get2.default)(apiResp, 'data', apiResp); // Return the updated `response`.

            return _context.abrupt("return", resp);

          case 11:
            // If the `dataKeysMap` is present, we'll go through each of the keys,
            // find the corresponding data in the `resp` object, and update the
            // final `resp` object with them.
            Object.keys(dataKeysMap).forEach(function (keyName) {
              // Try to find the `data` for the requested `keyName`.
              var keyData = (0, _get2.default)(apiResp, "data.".concat(dataKeysMap[keyName]));
              resp[keyName] = keyData;
            }); // Return the updated `response`.

            return _context.abrupt("return", resp);

          case 15:
            _context.prev = 15;
            _context.t0 = _context["catch"](2);
            return _context.abrupt("return", Promise.reject(_context.t0));

          case 18:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[2, 15]]);
  }));

  return function fetchAPIData() {
    return _ref.apply(this, arguments);
  };
}();
/**
 * Build the data view API params for a given data view config.
 *
 * @method buildDataViewJapiApiParams
 * @param  {Object}                   [config={}] The given data view config
 * @return {Object}                               The set of params
 */


exports.fetchAPIData = fetchAPIData;

function buildDataViewJapiApiParams() {
  var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  try {
    var order = config.order,
        orderBy = config.orderBy,
        page = config.page,
        rowsPerPage = config.rowsPerPage,
        searchSpec = config.searchSpec,
        totalRows = config.totalRows; // Determine the maxPages count.

    var maxPages = rowsPerPage > 0 ? Math.ceil(totalRows / rowsPerPage) : 0; // Determine the offset.

    var offset = maxPages === 0 || maxPages < page ? 0 : (page - 1) * rowsPerPage; // Calculate the sort based on the given order.

    var sort = (0, _sorting.calculateSort)(order, orderBy); // Return the API params.

    return {
      limit: rowsPerPage,
      offset: offset,
      searchSpec: searchSpec,
      sort: sort
    };
  } catch (e) {
    // Return an empty object on error.
    return {};
  }
}