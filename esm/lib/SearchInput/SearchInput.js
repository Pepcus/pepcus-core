import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import _objectSpread from "@babel/runtime/helpers/objectSpread";
import PropTypes from 'prop-types';
import React from 'react';
import _get from 'lodash/get';
import styled from 'styled-components';
import Box from "../Box";
import { SearchIcon, ClearIcon } from "../SvgIcon";
import { getThemeProps } from "../../utils/theme";
const SearchInputStyled = styled.input.withConfig({
  displayName: "SearchInput__SearchInputStyled",
  componentId: "bygdrb-0"
})(["background-color:", ";border:none;box-shadow:none;color:rgba(127,143,164,1);display:block;font-size:14px;height:100%;line-height:1.5;min-height:34px;padding:6px;width:100%;&:focus{outline:none;border:none;box-shadow:none;}&::placeholder{color:rgba(166,179,190,1);}&[disabled],&[readonly]{background-color:#e1e5e9 !important;border-color:transparent;box-shadow:none;cursor:not-allowed;user-select:none;}"], getThemeProps('palette.common.white'));
const SearchInputButton = styled.button.withConfig({
  displayName: "SearchInput__SearchInputButton",
  componentId: "bygdrb-1"
})(["background:transparent;border:0px;color:#c4ccd3;font-size:16px;line-height:1;outline:0;padding:5px 10px 5px 10px;text-decoration:none;width:35px;svg{transition:color 0.15s ease-in;}&:hover{cursor:pointer;color:#98a6b2;}&:focus{outline:none;border:none;box-shadow:none;}&:disabled{background-color:#e1e5e9 !important;border-color:transparent;box-shadow:none;cursor:not-allowed;user-select:none;&:hover{color:#c4ccd3;cursor:not-allowed;}}"]);
const SearchInputContainer = styled(Box).withConfig({
  displayName: "SearchInput__SearchInputContainer",
  componentId: "bygdrb-2"
})(["align-items:stretch;color:#7f8fa4;display:flex;font-size:14px;justify-content:space-between;line-height:1.5;min-height:36px;overflow:hidden;padding:0;transition:border-color 0.2s ease-in-out,box-shadow 0.2s ease-in-out;width:100%;", ";", ";", ";", ";"], ({
  focused,
  theme
}) => focused && _objectSpread({}, getThemeProps('effects.inputFocus')({
  theme
})['&:focus']), getThemeProps('effects.inputFocus'), ({
  disabled
}) => disabled && {
  backgroundColor: '#e1e5e9 !important',
  borderColor: 'transparent !important',
  boxShadow: 'none !important',
  cursor: 'not-allowed',
  userSelect: 'none'
}, getThemeProps('SearchInput.styles'));

class SearchInput extends React.Component {
  constructor(props) {
    super(props);

    this.clearSearchValue = () => {
      this.setState(() => ({
        searchSpec: ''
      }));
    };

    this.handleInputBtnClick = e => {
      e.preventDefault();
      const searchSpec = this.state.searchSpec;
      const onCancel = this.props.onCancel; // If there is no `searchSpec` present, just return.

      if (!searchSpec) {
        return;
      } else {
        // Update the state with the empty `searchSpec`.
        this.setState(() => ({
          searchSpec: ''
        })); // Invoke the `onCancel` callback.

        typeof onCancel === 'function' && onCancel(e); // Return

        return;
      }
    };

    this.handleInputOnChange = e => {
      const onChange = this.props.onChange; // Extract the value from the current event

      const value = _get(e, 'target.value'); // Update the state with the new search spec.


      this.setState(() => ({
        searchSpec: value
      })); // Invoke the `onChange` callback.

      typeof onChange === 'function' && onChange(value); // Return

      return;
    };

    this.handleInputOnFocus = () => {
      this.setState(() => ({
        inputFocused: true
      }));
    };

    this.handleInputOnBlur = () => {
      this.setState(() => ({
        inputFocused: false
      }));
    };

    const _value = this.props.value;
    this.state = {
      inputFocused: false,
      searchSpec: _value
    };
  }

  render() {
    const _this$state = this.state,
          inputFocused = _this$state.inputFocused,
          searchSpec = _this$state.searchSpec;

    const _this$props = this.props,
          disabled = _this$props.disabled,
          onCancel = _this$props.onCancel,
          onClick = _this$props.onClick,
          inputRef = _this$props.inputRef,
          inputProps = _objectWithoutProperties(_this$props, ["disabled", "onCancel", "onClick", "inputRef"]);

    return React.createElement(SearchInputContainer, {
      disabled: disabled,
      focused: inputFocused,
      margin: "0",
      padding: "0",
      readOnly: disabled
    }, React.createElement(SearchInputButton, {
      disabled: disabled,
      onClick: this.handleInputBtnClick
    }, !searchSpec && React.createElement(SearchIcon, {
      style: {
        color: 'inherit',
        width: 15,
        height: 15
      }
    }), searchSpec && React.createElement(ClearIcon, {
      style: {
        color: 'inherit',
        width: 20,
        height: 20
      }
    })), React.createElement(SearchInputStyled, Object.assign({}, inputProps, {
      disabled: disabled,
      onBlur: this.handleInputOnBlur,
      onChange: this.handleInputOnChange,
      onFocus: this.handleInputOnFocus,
      readOnly: disabled,
      ref: inputRef,
      value: searchSpec
    })));
  }

}

SearchInput.defaultProps = {
  disabled: false,
  inputRef: null,
  onCancel: null,
  onChange: null,
  onClick: null,
  value: ''
};
SearchInput.propTypes = process.env.NODE_ENV !== "production" ? {
  disabled: PropTypes.bool,
  inputRef: PropTypes.func,
  onCancel: PropTypes.func,
  onChange: PropTypes.func,
  onClick: PropTypes.func,
  value: PropTypes.string
} : {};
export default SearchInput;