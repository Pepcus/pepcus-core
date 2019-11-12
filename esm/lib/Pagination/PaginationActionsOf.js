import styled from 'styled-components';
import { getThemeProps } from "../../utils/theme";
const PaginationActionsOf = styled.span.withConfig({
  displayName: "PaginationActionsOf",
  componentId: "sc-1hpceeq-0"
})(["color:", ";", ";"], getThemeProps('palette.text.light'), getThemeProps('PaginationActionsOf.styles'));
export default PaginationActionsOf;