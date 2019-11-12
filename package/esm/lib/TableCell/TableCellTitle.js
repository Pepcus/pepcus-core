import styled from 'styled-components';
import _get from 'lodash/get';
import { getThemeProps } from "../../utils/theme";
const TableCellTitle = styled.div.withConfig({
  displayName: "TableCellTitle",
  componentId: "i3t933-0"
})(["color:#848484;display:block;flex:1 1 30%;padding-right:15px;text-align:right;", ";", ";"], getThemeProps('TableCellTitle.styles'), ({
  orientation
}) => ({
  display: _get(orientation, 'mode', 'landscape') === 'portrait' ? 'block' : 'none'
}));
export default TableCellTitle;