import styled from 'styled-components';
import InputStyles from "../Input/InputStyles";
import { themeGet } from "../../utils/theme";
const TextAreaStyled = styled.textarea.withConfig({
  displayName: "TextArea__TextAreaStyled",
  componentId: "sc-3e92te-0"
})(["", ";height:unset;max-height:225px;max-width:100%;min-height:119px;min-width:100%;overflow:auto;padding:6px 15px;resize:", ";", ";"], InputStyles, ({
  resize
}) => resize || 'vertical', themeGet('TextArea.styles'));
export default TextAreaStyled;