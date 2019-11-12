import styled from 'styled-components';
import Box from "../Box";
import { THEME } from "../../constants/theme"; // Define styles for the AccordionHeader.

const AccordionHeaderStyled = styled(Box).withConfig({
  displayName: "AccordionHeaderStyled",
  componentId: "xwkbj1-0"
})(["cursor:pointer;transition:", ";"], THEME.transitions.create('background-color'));
export default AccordionHeaderStyled;