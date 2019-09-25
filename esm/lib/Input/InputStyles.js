import { css } from 'styled-components';
import { themeGet } from "../../utils/theme";
/**
 * Define the CSS Styles for the Input Component
 */

const InputCss = css(["background-color:", ";border-color:", ";border-radius:4px;border-style:solid;border-width:1px;box-shadow:none;color:", ";display:block;font-size:14px;height:38px;line-height:1.5;padding:6px 15px;transition:border-color 0.2s ease-in-out,box-shadow 0.2s ease-in-out;width:100%;&::placeholder{color:", ";}", ";&[disabled],&[readonly]{background-color:#e1e5e9 !important;border-color:transparent;box-shadow:none;cursor:not-allowed;user-select:none;}", ";"], themeGet('palette.common.white'), themeGet('palette.common.lighter'), themeGet('palette.common.input'), themeGet('palette.common.placeholder'), themeGet('effects.inputFocus'), themeGet('Input.styles'));
export default InputCss;