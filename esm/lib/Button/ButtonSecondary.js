import PropTypes from 'prop-types';
import styled from 'styled-components';
import { darken } from 'polished';
import { THEME } from "../../constants/theme";
import { getThemeProps } from "../../utils/theme";
import Button from "./Button";
const ButtonSecondary = styled(Button).withConfig({
  displayName: "ButtonSecondary",
  componentId: "sc-17gdbmb-0"
})(["background-color:transparent;background-image:linear-gradient(to top,#f2f4f7,#ffffff);border-radius:5px;border:1px solid ", ";color:", ";&:hover{background-color:", ";}&:disabled{background-color:", ";}", ";"], THEME.palette.common.lighter, THEME.palette.text.light, darken(0.05, '#f2f4f7'), darken(0.075, '#f2f4f7'), getThemeProps('ButtonSecondary.styles'));
ButtonSecondary.propTypes = {
  /**
   * The content of the button.
   */
  children: PropTypes.node,

  /**
   * @ignore
   */
  className: PropTypes.string,

  /**
   * Apply themed styling to Button.
   *
   * Colors can be defined in `theme.palette`.
   */
  color: PropTypes.string,

  /**
   * Do not apply a minimum width to the button.
   */
  noMinWidth: PropTypes.bool,

  /**
   * Default onClick handler for the button
   */
  onClick: PropTypes.func,

  /**
   * Give the button a set width.
   */
  width: PropTypes.string
};
ButtonSecondary.defaultProps = {
  children: null,
  className: '',
  color: 'primary',
  noMinWidth: false,
  onClick: () => {},
  width: null
};
export default ButtonSecondary;