import styled, { css } from 'styled-components';
import Box from "../Box";
import { THEME } from "../../constants/theme";
import AccordionHeaderStyled from "../AccordionHeader/AccordionHeaderStyled";
const AccordionStyled = styled(Box).withConfig({
  displayName: "AccordionStyled",
  componentId: "sc-1y2xodm-0"
})(["", ";"], ({
  expanded,
  single
}) => {
  // Build the AccordionHeader border-bottom CSS.
  const accordionHeaderBorderBottomCSS = !expanded && css(["border-bottom-width:0;transition:", ";"], THEME.transitions.create('border-bottom-width', {
    duration: 150
  })); // Styles when not rendering a single Accordion component.
  // Define the border-radius for the Accordion when rendered within a group.

  const notSingleAccordionCSS = !single && css(["&:not(:first-child):not(:last-child){border-radius:0;}&:not(:last-child)&:first-child{border-bottom-left-radius:0;border-bottom-right-radius:0;}&:not(:first-child)&:last-child{border-top-left-radius:0;border-top-right-radius:0;}&:not(:first-child)&:nth-child(n){border-top-width:0;}"]); // Return the updated css.

  return css(["", ";", "{border-top-width:0;border-right-width:0;border-left-width:0;", ";}"], notSingleAccordionCSS, AccordionHeaderStyled, accordionHeaderBorderBottomCSS);
});
export default AccordionStyled;