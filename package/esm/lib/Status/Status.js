import PropTypes from 'prop-types';
import styled from 'styled-components';
import { THEME } from "../../constants/theme";
import { getThemeProps } from "../../utils/theme";
const StatusStyled = styled.div.withConfig({
  displayName: "Status__StatusStyled",
  componentId: "sc-110dsdx-0"
})(["", ";", ";"], getThemeProps('Status.styles'), ({
  theme,
  color
}) => {
  const type = color || 'text';
  return {
    color: getThemeProps(`palette.${type}.color`, THEME.palette.dark.color, {
      theme
    })
  };
});
StatusStyled.propTypes = {
  /**
   * Apply themed styling to Status.
   *
   * Colors can be defined in `theme.palette`.
   */
  color: PropTypes.string
};
StatusStyled.defaultProps = {
  color: 'dark'
};
export default StatusStyled;