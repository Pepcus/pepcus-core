import { css } from 'styled-components';
import { renderStyle } from "../../utils/styled";
import { renderTableCellSize, verifyCSSColSize } from "../../utils/css";
import { themeGet } from "../../utils/theme";
const TableCellCSS = css(["border-top:1px solid ", ";box-sizing:border-box;max-width:100%;padding:16px 12px;position:relative;text-align:", ";justify-content:", ";transition:color 0.15s ease-in-out,background-color 0.15s ease-in-out;vertical-align:middle;", ";", ";"], themeGet('palette.common.lighter'), ({
  align
}) => align || 'left', ({
  align
}) => align || 'left', themeGet('TableCell.styles'), ({
  cellType,
  sortSchema,
  size,
  theme,
  type
}) => {
  let headCss = '';
  let sortableCss = '';

  if (type === 'head') {
    headCss = css(["background-color:#f5f8fa;border-top:none;color:#6c8193;font-weight:", ";padding:10px 12px;", ";"], themeGet('typography.fontWeights.regular'), themeGet('TableCell.styles.head'));
  }

  if (cellType === 'sortable') {
    sortableCss = css(["cursor:pointer;> svg{margin-left:", ";margin-right:", ";transform:", ";}", ";"], sortSchema.iconPosition === 'right' ? '5px' : null, sortSchema.iconPosition === 'left' ? '5px' : null, sortSchema.order === 'desc' ? 'rotate(180deg)' : 'rotate(0deg)', themeGet('TableCell.styles.sortable'));
  }

  return css(["", ";", ";", ";"], headCss, sortableCss, renderStyle('size', size, theme, verifyCSSColSize, renderTableCellSize));
});
export default TableCellCSS;