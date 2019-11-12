"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _styled = require("../../utils/styled");

var _theme = require("../../utils/theme");

var _proptypes = require("../../utils/proptypes");

var Container = _styledComponents.default.div.withConfig({
  displayName: "Container",
  componentId: "imckkr-0"
})(["margin-left:auto;margin-right:auto;position:relative;width:100%;", ";", ";"], function (_ref) {
  var margin = _ref.margin,
      padding = _ref.padding,
      theme = _ref.theme,
      width = _ref.width;
  return (0, _styledComponents.css)(["", ";", ";", ";"], (0, _styled.renderStyle)('width', width, theme), (0, _styled.renderStyle)('padding', padding, theme), (0, _styled.renderStyle)('margin', margin, theme));
}, (0, _theme.getThemeProps)('Container.styles'));

Container.propTypes = {
  /**
   * @ignore
   */
  className: _propTypes.default.string,

  /**
   * Add a specific padding to the container.
   */
  padding: (0, _proptypes.responsiveProptypes)(_propTypes.default.oneOfType([_propTypes.default.string])),

  /**
   * Add a specific margin to the container.
   */
  margin: (0, _proptypes.responsiveProptypes)(_propTypes.default.oneOfType([_propTypes.default.string])),

  /**
   * Add a specific width to the container.
   */
  width: (0, _proptypes.responsiveProptypes)(_propTypes.default.oneOfType([_propTypes.default.string]))
};
Container.defaultProps = {
  className: '',
  padding: '',
  margin: '',
  width: {
    sm: '540px',
    md: '720px',
    lg: '960px',
    xl: '1140px'
  }
};
var _default = Container;
exports.default = _default;