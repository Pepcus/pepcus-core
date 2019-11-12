"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.accessControl = accessControl;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _setDisplayName = _interopRequireDefault(require("recompose/setDisplayName"));

var _wrapDisplayName = _interopRequireDefault(require("recompose/wrapDisplayName"));

/**
 * A Higher Order Component (HOC) to determine
 * if we should render the passed in `WrappedComponent`
 * based on the current user's permissions set.
 *
 * @method accessControl
 * @param  {Function}    WrappedComponent The component to render
 * @return {Function}                     React Component
 */
function accessControl(WrappedComponent) {
  /**
   * An AccessControl HOC to render the `WrappedComponent`.
   *
   * @method      AccessControl
   * @param       {Object}      props The props for the WrappedComponent
   * @constructor
   */
  var AccessControl = _react.default.forwardRef(function (props, ref) {
    var acl = props.acl; // Based on the `acl` render the wrapped component.

    return acl ? _react.default.createElement(WrappedComponent, Object.assign({}, props, {
      ref: ref
    })) : null;
  });

  AccessControl.propTypes = process.env.NODE_ENV !== "production" ? {
    /**
     * If `false`, the wrapped component won't be rendered.
     */
    acl: _propTypes.default.bool
  } : {};
  AccessControl.defaultProps = {
    acl: false
  }; // Set the `displayName` of this newly created component to be
  // `accessControl(WrappedComponent.displayName)`.
  // this will help in clearly expressing the relationship between this
  // `WrappedComponent` and the `accessControl` HOC.

  (0, _setDisplayName.default)((0, _wrapDisplayName.default)(WrappedComponent, 'accessControl'))(AccessControl); // Return the composed component.

  return AccessControl;
}