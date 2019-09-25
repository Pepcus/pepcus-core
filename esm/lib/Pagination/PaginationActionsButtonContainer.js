import styled from 'styled-components';
import { getThemeProps } from "../../utils/theme";
import PaginationActionsButton from "./PaginationActionsButton";
const PaginationActionsButtonContainer = styled.div.withConfig({
  displayName: "PaginationActionsButtonContainer",
  componentId: "sc-5e1a0n-0"
})(["align-items:center;display:flex;justify-content:flex-start;", "{&:first-of-type{border-bottom-right-radius:0;border-right:0;border-top-right-radius:0;}&:last-of-type{border-bottom-left-radius:0;border-top-left-radius:0;}}", ";"], PaginationActionsButton, getThemeProps('PaginationActionsButtonContainer.styles'));
export default PaginationActionsButtonContainer;