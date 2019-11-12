import PropTypes from 'prop-types';
import styled, { css, keyframes } from 'styled-components';
import { getThemeProps } from "../../utils/theme";
const rotate360 = keyframes(["from{transform:rotate(0deg);}to{transform:rotate(360deg);}"]);
const LoadingIcon = styled.div.withConfig({
  displayName: "LoadingIcon",
  componentId: "sc-1ayyhr-0"
})(["", ";", ";"], ({
  animate,
  animationDuration
}) => {
  // Determine the CSS
  const animation = props => animate ? css(["", " ", " linear infinite;"], rotate360, props.animationDuration) : null;

  return css(["animation:", ";height:25px;width:25px;"], animation);
}, getThemeProps('LoadingIcon.styles'));
LoadingIcon.propTypes = {
  /**
   * If `true`, the icon will animate in a 360 degree rotation.
   */
  animate: PropTypes.bool,

  /**
   * The duration for the animation of the icon.
   */
  animationDuration: PropTypes.string
};
LoadingIcon.defaultProps = {
  animate: true,
  animationDuration: '1.5s'
};
export default LoadingIcon;