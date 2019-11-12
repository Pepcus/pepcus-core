import PropTypes from 'prop-types';
import styled from 'styled-components';
import { getThemeProps } from "../../utils/theme";
const MenuContent = styled.ul.withConfig({
  displayName: "MenuContent",
  componentId: "nyei8j-0"
})(["background-color:#fff;border-radius:3px;border:1px solid #c4ccd3;box-shadow:0 6px 12px rgba(0,0,0,0.175);list-style:none;margin:", "px 0 0;min-width:160px;overflow:hidden;padding:0;", ";"], ({
  distanceFromContainer
}) => distanceFromContainer, getThemeProps('MenuContent.styles'));
MenuContent.propTypes = {
  /**
   * A dynamic margin for the MenuContent
   */
  distanceFromContainer: PropTypes.number
};
MenuContent.defaultProps = {
  distanceFromContainer: 0
};
export default MenuContent;