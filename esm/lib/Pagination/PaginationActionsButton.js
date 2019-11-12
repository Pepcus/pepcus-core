import styled from 'styled-components';
import Button from "../Button";
import { themeGet } from "../../utils/theme";
const PaginationActionsButton = styled(Button).withConfig({
  displayName: "PaginationActionsButton",
  componentId: "sc-5vbrpe-0"
})(["align-items:center;display:flex;font-size:12px;height:30px;justify-content:center;min-height:30px;min-width:auto;padding:5px;width:45px;", ";"], themeGet('PaginationActionsButton.styles'));
export default PaginationActionsButton;