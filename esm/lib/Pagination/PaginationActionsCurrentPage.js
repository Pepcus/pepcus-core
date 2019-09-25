import styled from 'styled-components';
import Input from "../Input";
import { getThemeProps } from "../../utils/theme";
const PaginationActionsCurrentPage = styled(Input).withConfig({
  displayName: "PaginationActionsCurrentPage",
  componentId: "sc-1i6zcag-0"
})(["border-radius:4px;color:", ";display:inline-block;height:30px !important;margin:0 15px;min-height:30px;padding:0;text-align:center;width:55px;", ";"], getThemeProps('palette.text.dark'), getThemeProps('PaginationActionsCurrentPage.styles'));
export default PaginationActionsCurrentPage;