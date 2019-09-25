import styled from 'styled-components';
import { getThemeProps } from "../../utils/theme";
import Key from "./Key";
const KeyItemStyled = styled.li.withConfig({
  displayName: "Item__KeyItemStyled",
  componentId: "uxeunx-0"
})(["align-items:center;display:flex;flex-direction:row;justify-content:flex-start;width:100%;", "{margin-right:10px;}", ";"], Key, getThemeProps('KeyValuePairsItem.styes'));
export default KeyItemStyled;