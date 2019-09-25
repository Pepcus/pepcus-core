import styled, { css } from 'styled-components';
const CollapseStyled = styled.div.withConfig({
  displayName: "CollapseStyled",
  componentId: "sc-1xlffoi-0"
})(["", ";"], ({
  entered,
  isHidden,
  minHeight,
  theme
}) => {
  // Build the `entered` styles
  const enteredCss = entered && css(["height:auto;overflow:visible;"]); // Build the `hidden` styles

  const hiddenCss = isHidden && css(["visibility:hidden;"]); // Return the component's styles

  return css(["height:0;min-height:", ";overflow:hidden;transition:", ";", ";", ";"], minHeight, theme.transitions.create('height'), enteredCss, hiddenCss);
});
export default CollapseStyled;