import _get from 'lodash/get';
import { css } from 'styled-components';
import SvgIcon from "../../SvgIcon";
import { getThemeProps } from "../../../utils/theme";
import { mergeObjects } from "../../../utils/merge";
const TableCellCSS = css(["align-items:baseline;border-top:1px solid ", ";display:flex;padding:16px 12px;position:relative;text-align:left;transition:color 0.15s ease-in-out,background-color 0.15s ease-in-out;vertical-align:middle;", ";", ";", "{transform:", ";}", ";"], getThemeProps('palette.common.lighter'), ({
  theme
}) => theme.media.up('sm')`
        display: table-cell;
    `, getThemeProps('TableCell.styles'), SvgIcon, props => {
  const order = _get(props, 'order');

  const orderBy = _get(props, 'orderBy');

  const colId = _get(props, 'col.id');

  return orderBy === colId && order === 'desc' ? 'rotate(180deg)' : 'rotate(0deg)';
}, ({
  cellProps,
  orientation,
  position,
  theme
}) => {
  const cellType = cellProps.type || 'default';
  const orientationModePortrait = _get(orientation, 'mode') === 'portrait';
  const dynamicStyles = {};
  const portraitStyles = orientationModePortrait ? getThemeProps('TableCell.styles.portrait', null, {
    theme
  }) : {};
  const positionStyles = getThemeProps(`TableCell.${position}.styles`, null, {
    theme
  });
  const cellTypeStyles = getThemeProps(`TableCell.${cellType}.styles`, {}, {
    theme
  });
  return mergeObjects(dynamicStyles, portraitStyles, cellTypeStyles, positionStyles);
});
export default TableCellCSS;