import styled from 'styled-components';
import { getThemeProps } from "../../utils/theme";
const PaginationActionsLastPage = styled.span.withConfig({
  displayName: "PaginationActionsLastPage",
  componentId: "sc-84x73-0"
})(["color:", ";margin:0 10px;max-height:33px;text-align:center;", ";"], getThemeProps('palette.text.light'), getThemeProps('PaginationActionsLastPage.styles'));
export default PaginationActionsLastPage;