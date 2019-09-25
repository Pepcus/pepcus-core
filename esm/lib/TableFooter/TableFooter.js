import styled from 'styled-components';
import { themeGet } from "../../utils/theme";
/**
 * The `footer` component for the Table.
 *
 * @constructor
 */

const TableFooter = styled.tfoot.withConfig({
  displayName: "TableFooter",
  componentId: "sc-1bp7qdm-0"
})(["", ";"], themeGet('TableFooter.styles'));
export default TableFooter;