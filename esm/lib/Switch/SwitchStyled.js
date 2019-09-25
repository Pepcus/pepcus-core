import styled, { css } from 'styled-components';
const SwitchStyled = styled.div.withConfig({
  displayName: "SwitchStyled",
  componentId: "sc-1d4att9-0"
})(["", ";"], ({
  isDisabled
}) => css(["align-items:center;cursor:", ";display:flex;max-height:25px;max-width:55px;opacity:", ";position:relative;vertical-align:middle;z-index:1;margin:", ";"], isDisabled ? 'not-allowed' : 'pointer', isDisabled ? 0.5 : null, ({
  margin
}) => margin || 'inherit'));
export default SwitchStyled;