import styled from 'styled-components';
import { themeGet } from "../../utils/theme";
/**
 * The `body` component for the Table.
 *
 * @constructor
 */

const TableBody = styled.tbody.withConfig({
  displayName: "TableBody",
  componentId: "sc-10rliy8-0"
})(["", ";"], themeGet('TableBody.styles'));
export default TableBody;