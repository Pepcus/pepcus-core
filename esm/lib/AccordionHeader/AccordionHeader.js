import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import PropTypes from 'prop-types';
import React from 'react';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons/faChevronRight';
import Col from "../Col";
import FaIcon from "../FaIcon";
import Row from "../Row";
import { THEME } from "../../constants/theme";
import AccordionHeaderStyled from "./AccordionHeaderStyled";
/**
 * The header component for the Accordion.
 *
 * @method      AccordionHeader
 * @param       {Object}        props Component props
 * @constructor
 */

function AccordionHeader(props) {
  const children = props.children,
        expanded = props.expanded,
        Icon = props.icon,
        iconPosition = props.iconPosition,
        onChange = props.onChange,
        rest = _objectWithoutProperties(props, ["children", "expanded", "icon", "iconPosition", "onChange"]); // Build the styles for the `FaIcon`.


  const faIconStyles = {
    transition: THEME.transitions.create('transform'),
    transform: expanded ? 'rotate(90deg)' : null
  }; // Render the AccordionHeader.

  return React.createElement(AccordionHeaderStyled, Object.assign({
    borderRadius: "0",
    margin: "0",
    padding: "12px 15px"
  }, rest, {
    onClick: onChange
  }), React.createElement(Row, {
    alignItems: "center"
  }, iconPosition === 'left' && React.createElement(Col, {
    size: "30px",
    padding: "0 0 0 10px"
  }, Icon ? React.createElement(Icon, {
    expanded: expanded,
    iconPosition: iconPosition,
    faIconStyles: faIconStyles
  }) : React.createElement(FaIcon, {
    icon: faChevronRight,
    height: "16px",
    width: "16px",
    style: faIconStyles
  })), React.createElement(Col, null, children), iconPosition === 'right' && React.createElement(Col, {
    size: "30px",
    padding: "0 10px 0 0"
  }, Icon ? React.createElement(Icon, {
    expanded: expanded,
    iconPosition: iconPosition,
    faIconStyles: faIconStyles
  }) : React.createElement(FaIcon, {
    icon: faChevronRight,
    height: "16px",
    width: "16px",
    style: faIconStyles
  }))));
}

AccordionHeader.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * The content of the AccordionHeader.
   */
  children: PropTypes.node,

  /**
   * Either collapse or expand the Accordion.
   */
  expanded: PropTypes.bool,

  /**
   * Should we render the icon on the left? right? or not at all?
   */
  iconPosition: PropTypes.oneOf(['right', 'left', 'none']),

  /**
   * The Icon component for the Accordion from the rendering component.
   */
  icon: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),

  /**
   * Callback fired when the Accordion expands/collapses.
   */
  onChange: PropTypes.func
} : {};
AccordionHeader.defaultProps = {
  children: null,
  expanded: null,
  iconPosition: 'left',
  icon: null,
  onChange: null
};
export default AccordionHeader;