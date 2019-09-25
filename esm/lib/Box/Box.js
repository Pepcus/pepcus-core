import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { themeGet } from "../../utils/theme";
const BoxCSS = css(["background-color:", ";border-color:", ";", ";", ";"], themeGet('palette.common.white'), themeGet('palette.common.lighter'), themeGet('Box.styles'), ({
  backgroundColor,
  borderColor,
  borderRadius,
  borderStyle,
  borderWidth,
  boxShadow,
  elevation,
  elevationDirection,
  height,
  margin,
  maxHeight,
  maxWidth,
  overflow,
  padding,
  position,
  width
}) => css(["background-color:", ";border-color:", ";border-radius:", ";border-style:", ";border-width:", ";box-shadow:", ";height:", ";margin:", ";max-height:", ";max-width:", ";overflow:", ";padding:", ";position:", ";width:", ";"], themeGet(`palette.${backgroundColor}.color`, backgroundColor), themeGet(`palette.${borderColor}.color`, borderColor), borderRadius || '4px', borderStyle || 'solid', borderWidth || '1px', themeGet(`shadows[${elevationDirection}][${elevation}]`, boxShadow), height || null, margin || '0 0 15px 0', maxHeight || null, maxWidth || null, overflow || null, padding || '16px 12px', position, width || null));
const Box = styled.div.withConfig({
  displayName: "Box",
  componentId: "sc-1jw3ebm-0"
})(["", ";"], BoxCSS);
Box.propTypes = {
  /**
   * Sets the `background-color` css property.
   */
  backgroundColor: PropTypes.string,

  /**
   * Sets the `border-color` css property.
   */
  borderColor: PropTypes.string,

  /**
   * Sets the `border-radius` css property.
   */
  borderRadius: PropTypes.string,

  /**
   * Sets the `border-style` css property.
   */
  borderStyle: PropTypes.string,

  /**
   * Sets the `border-width` css property.
   */
  borderWidth: PropTypes.string,

  /**
   * Sets the `box-shadow` css property.
   */
  boxShadow: PropTypes.string,

  /**
   * Shadow depth for the box.
   * Accepts values between 0 and 24.
   */
  elevation: PropTypes.number,

  /**
   * Direction for the shadow depth for the box.
   * Accepts either `top` or `bottom`.
   */
  elevationDirection: PropTypes.oneOf(['top', 'bottom']),

  /**
   * Sets the `height` css property.
   */
  height: PropTypes.string,

  /**
   * Sets the `margin` css property.
   */
  margin: PropTypes.string,

  /**
   * Sets the `max-height` css property.
   */
  maxHeight: PropTypes.string,

  /**
   * Sets the `max-width` css property.
   */
  maxWeight: PropTypes.string,

  /**
   * Sets the `overflow` css property.
   */
  overflow: PropTypes.string,

  /**
   * Sets the `padding` css property.
   */
  padding: PropTypes.string,

  /**
   * Sets the `position` css property.
   */
  position: PropTypes.string,

  /**
   * Sets the `width` css property.
   */
  width: PropTypes.string
};
Box.defaultProps = {
  backgroundColor: null,
  borderColor: null,
  borderRadius: null,
  borderStyle: null,
  borderWidth: null,
  boxShadow: null,
  elevation: 0,
  elevationDirection: 'bottom',
  height: null,
  margin: null,
  maxHeight: null,
  maxWidth: null,
  overflow: null,
  padding: null,
  position: null,
  width: '100%'
};
export default Box;