import styled from 'styled-components';
import { themeGet } from "../../utils/theme";
/**
 * The `header` component for the Table.
 *
 * @constructor
 */

const TableHead = styled.thead.withConfig({
  displayName: "TableHead",
  componentId: "sc-1datsph-0"
})(["", ";"], themeGet('TableHead.styles'));
export default TableHead;