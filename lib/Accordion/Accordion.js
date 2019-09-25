"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Collapse = _interopRequireDefault(require("../Collapse"));

var _AccordionHeader = _interopRequireDefault(require("../AccordionHeader"));

var _AccordionContent = _interopRequireDefault(require("../AccordionContent"));

var _actions = require("../../utils/actions");

var _AccordionStyled = _interopRequireDefault(require("./AccordionStyled"));

/**
 * A Collapsible Panel with Header and Content Components.
 *
 * @method      Accordion
 * @param       {Object}  props Component props
 * @constructor
 */
var Accordion = (0, _react.forwardRef)(function (props, ref) {
  var CollapseProps = props.CollapseProps,
      ContentProps = props.ContentProps,
      HeaderProps = props.HeaderProps,
      children = props.children,
      Content = props.contentComponent,
      defaultExpanded = props.defaultExpanded,
      description = props.description,
      expandedProps = props.expanded,
      Header = props.headerComponent,
      onChange = props.onChange,
      rest = (0, _objectWithoutProperties2.default)(props, ["CollapseProps", "ContentProps", "HeaderProps", "children", "contentComponent", "defaultExpanded", "description", "expanded", "headerComponent", "onChange"]); // Determine if we're dealing with a controlled Accordion.

  var isControlled = expandedProps != null; // Determine the initial expanded state based on `defaultExpanded` being present or not.

  var initialExpandedState = defaultExpanded != null ? defaultExpanded : false; // `use`Hooks
  // Build the `expanded` state for the Accordion.

  var _useState = (0, _react.useState)(initialExpandedState),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      expandedState = _useState2[0],
      setExpandedState = _useState2[1]; // We will pass an onChange handler to the `Header` Component.


  function handleOnChange(event) {
    // Determine if we're dealing with a controlled Accordion.
    var expandedOnChange = isControlled ? expandedProps : expandedState; // If we're not controlled, then set the local state instead.

    if (!isControlled) {
      setExpandedState(!expandedOnChange);
    } // Either way, fire off the `onChange` from props.


    (0, _actions.callFunc)(onChange, event, !expandedOnChange);
  } // Is the Accordion expanded?


  var isExpanded = isControlled ? expandedProps : expandedState; // Render the Accordion and it's children.

  return _react.default.createElement(_AccordionStyled.default, Object.assign({
    elevation: 5,
    expanded: isExpanded,
    margin: "0",
    overflow: isExpanded ? 'visible' : 'hidden',
    padding: "0"
  }, rest, {
    ref: ref
  }), _react.default.createElement(Header, Object.assign({}, HeaderProps, {
    expanded: isExpanded,
    onChange: handleOnChange
  }), description), _react.default.createElement(_Collapse.default, Object.assign({}, CollapseProps, {
    in: isExpanded
  }), _react.default.createElement(Content, Object.assign({}, ContentProps, {
    expanded: isExpanded
  }), children)));
});
Accordion.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * Properties passed down to the `Collapse` component.
   */
  CollapseProps: _propTypes.default.object,

  /**
   * Properties passed down to the `Content` component.
   */
  ContentProps: _propTypes.default.object,

  /**
   * Properties passed down to the `Header` component.
   */
  HeaderProps: _propTypes.default.object,

  /**
   * The content of the Accordion.
   */
  children: _propTypes.default.node,

  /**
   * The content component for the Accordion.
   */
  contentComponent: _propTypes.default.oneOfType([_propTypes.default.func, _propTypes.default.object]),

  /**
   * If `true`, the Accordion will be expanded by default.
   */
  defaultExpanded: _propTypes.default.bool,

  /**
   * The description of the Accordion, in other words the `header` content.
   */
  description: _propTypes.default.node,

  /**
   * If `true`, the Accordion will be rendered in a disabled state.
   */
  disabled: _propTypes.default.bool,

  /**
   * Either collapse or expand the Accordion.
   */
  expanded: _propTypes.default.bool,

  /**
   * The header component for the Accordion.
   */
  headerComponent: _propTypes.default.oneOfType([_propTypes.default.func, _propTypes.default.object]),

  /**
   * Callback fired when the Accordion expands/collapses.
   */
  onChange: _propTypes.default.func,

  /**
   * Set to `true` if you're rendering a single Accordion component.
   */
  single: _propTypes.default.bool
} : {};
Accordion.defaultProps = {
  CollapseProps: null,
  ContentProps: null,
  HeaderProps: null,
  children: null,
  contentComponent: _AccordionContent.default,
  defaultExpanded: null,
  description: null,
  disabled: null,
  expanded: null,
  headerComponent: _AccordionHeader.default,
  onChange: null,
  single: null
};
Accordion.displayName = 'Accordion';
var _default = Accordion;
exports.default = _default;