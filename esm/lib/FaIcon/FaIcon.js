import PropTypes from 'prop-types';
import React from 'react';
import styled, { css } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { renderStyle } from "../../utils/styled";
import { responsiveProptypes } from "../../utils/proptypes";
import { themeGet } from "../../utils/theme";
const FaIconStyled = styled(FontAwesomeIcon).withConfig({
  displayName: "FaIcon__FaIconStyled",
  componentId: "sc-1ox3biz-0"
})(["", ";", ";"], themeGet('FaIcon.styles'), ({
  color,
  height,
  margin,
  opacity,
  padding,
  theme,
  width
}) => css(["color:", ";", ";", ";", ";", ";", ";"], themeGet(`palette.${color}.color`, color || 'inherit'), renderStyle('height', height, theme, null, (val, name) => `${name}: ${val} !important;`), renderStyle('margin', margin, theme), renderStyle('opacity', opacity, theme), renderStyle('padding', padding, theme), renderStyle('width', width, theme, null, (val, name) => `${name}: ${val} !important;`)));
/**
 * Build a react-font-awesome icon!
 *
 * @method      FaIcon
 * @param       {Object} props The component props
 * @constructor
 */

function FaIcon(props) {
  // Render the font-awesome icon.
  return React.createElement(FaIconStyled, props);
}

FaIcon.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * Apply themed styling to FaIcon.
   *
   * Colors can be defined in `theme.palette`.
   */
  color: PropTypes.string,

  /**
   * Vertically align icons together by including support for a `fixed-width`.
   * @see {@link https://fontawesome.com/how-to-use/on-the-web/styling/fixed-width-icons}
   */
  fixedWidth: PropTypes.bool,

  /**
   * Defines the 'height' style property.
   */
  height: responsiveProptypes(PropTypes.string),

  /**
   * The name of the font-awesome icon, `trash-alt`. (string)
   * A React Object, that renders out the desired icon, `{faTrashAlt}`. (object)
   * An array of strings, where the first element is a `prefix`,
   * and second element is the icon name `{[ 'fab', 'apple' ]}`. (array)
   * @see {@link https://fontawesome.com/how-to-use/on-the-web/referencing-icons/basic-use}
   */
  icon: PropTypes.oneOfType([PropTypes.object, PropTypes.array, PropTypes.string]),

  /**
   * Defines the 'margin' style property.
   */
  margin: responsiveProptypes(PropTypes.string),

  /**
   * Defines the 'opacity' style property.
   */
  opacity: responsiveProptypes(PropTypes.number),

  /**
   * Defines the 'padding' style property.
   */
  padding: responsiveProptypes(PropTypes.string),

  /**
   * Defines the 'width' style property.
   */
  width: responsiveProptypes(PropTypes.string)
} : {};
FaIcon.defaultProps = {
  color: null,
  fixedWidth: true,
  height: null,
  icon: null,
  margin: null,
  opacity: null,
  padding: null,
  width: null
};
export default FaIcon;