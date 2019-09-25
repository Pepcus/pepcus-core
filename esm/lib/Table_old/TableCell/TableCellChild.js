import styled from 'styled-components';
import { getThemeProps } from "../../../utils/theme";
const TableCellChild = styled.div.withConfig({
  displayName: "TableCellChild",
  componentId: "sc-1s8ib7p-0"
})(["flex:1 1 70%;display:inline-block;", ";", ";"], ({
  noDataAvailable
}) => noDataAvailable && {
  width: '100%'
}, getThemeProps('TableCellChild.styles'));
export default TableCellChild;