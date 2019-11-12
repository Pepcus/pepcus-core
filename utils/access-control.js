"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _recompose = require("recompose");

/**
 * An HOC to determine if we should render the passed in `WrappedComponent` based on it's `acl` prop, for now.
 *
 * @method accessControlHOC
 * @param  {Function}       WrappedComponent The component to render
 * @return {Function}                        The upgraded composed component
 */
function accessControlHOC(WrappedComponent) {
  /**
   * An AccessControl HOC to render the `WrappedComponent`
   *
   * @type {Function}
   */
  var AccessControl = _react.default.forwardRef(function (props, ref) {
    var acl = props.acl; // Render the component based on the `acl` prop.

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
  }; // Set the `displayName` of the newly created component to be
  // `accessControl(WrappedComponent.displayName)`.
  // This will help in clearly expressing the relationship between this
  // `WrappedComponent` and the `accessControl` HOC.

  AccessControl.displayName = (0, _recompose.wrapDisplayName)(WrappedComponent, 'accessControl'); // Return the composed component.

  return AccessControl;
}

var _default = accessControlHOC;
exports.default = _default;