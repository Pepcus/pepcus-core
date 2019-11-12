"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _faChevronRight = require("@fortawesome/free-solid-svg-icons/faChevronRight");

var _Col = _interopRequireDefault(require("../Col"));

var _FaIcon = _interopRequireDefault(require("../FaIcon"));

var _Row = _interopRequireDefault(require("../Row"));

var _theme = require("../../constants/theme");

var _AccordionHeaderStyled = _interopRequireDefault(require("./AccordionHeaderStyled"));

/**
 * The header component for the Accordion.
 *
 * @method      AccordionHeader
 * @param       {Object}        props Component props
 * @constructor
 */
function AccordionHeader(props) {
  var children = props.children,
      expanded = props.expanded,
      Icon = props.icon,
      iconPosition = props.iconPosition,
      onChange = props.onChange,
      rest = (0, _objectWithoutProperties2.default)(props, ["children", "expanded", "icon", "iconPosition", "onChange"]); // Build the styles for the `FaIcon`.

  var faIconStyles = {
    transition: _theme.THEME.transitions.create('transform'),
    transform: expanded ? 'rotate(90deg)' : null
  }; // Render the AccordionHeader.

  return _react.default.createElement(_AccordionHeaderStyled.default, Object.assign({
    borderRadius: "0",
    margin: "0",
    padding: "12px 15px"
  }, rest, {
    onClick: onChange
  }), _react.default.createElement(_Row.default, {
    alignItems: "center"
  }, iconPosition === 'left' && _react.default.createElement(_Col.default, {
    size: "30px",
    padding: "0 0 0 10px"
  }, Icon ? _react.default.createElement(Icon, {
    expanded: expanded,
    iconPosition: iconPosition,
    faIconStyles: faIconStyles
  }) : _react.default.createElement(_FaIcon.default, {
    icon: _faChevronRight.faChevronRight,
    height: "16px",
    width: "16px",
    style: faIconStyles
  })), _react.default.createElement(_Col.default, null, children), iconPosition === 'right' && _react.default.createElement(_Col.default, {
    size: "30px",
    padding: "0 10px 0 0"
  }, Icon ? _react.default.createElement(Icon, {
    expanded: expanded,
    iconPosition: iconPosition,
    faIconStyles: faIconStyles
  }) : _react.default.createElement(_FaIcon.default, {
    icon: _faChevronRight.faChevronRight,
    height: "16px",
    width: "16px",
    style: faIconStyles
  }))));
}

AccordionHeader.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * The content of the AccordionHeader.
   */
  children: _propTypes.default.node,

  /**
   * Either collapse or expand the Accordion.
   */
  expanded: _propTypes.default.bool,

  /**
   * Should we render the icon on the left? right? or not at all?
   */
  iconPosition: _propTypes.default.oneOf(['right', 'left', 'none']),

  /**
   * The Icon component for the Accordion from the rendering component.
   */
  icon: _propTypes.default.oneOfType([_propTypes.default.func, _propTypes.default.object]),

  /**
   * Callback fired when the Accordion expands/collapses.
   */
  onChange: _propTypes.default.func
} : {};
AccordionHeader.defaultProps = {
  children: null,
  expanded: null,
  iconPosition: 'left',
  icon: null,
  onChange: null
};
var _default = AccordionHeader;
exports.default = _default;