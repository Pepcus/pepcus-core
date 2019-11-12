import styled from 'styled-components';
import { getThemeProps } from "../../utils/theme";
const MenuItem = styled.li.withConfig({
  displayName: "MenuItem",
  componentId: "sc-1pnaqcd-0"
})(["margin:0;padding:0;width:100%;", ";"], getThemeProps('MenuItem.styles'));
MenuItem.propTypes = {};
MenuItem.defaultProps = {};
export default MenuItem;