import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

import {Divider, Row, Typography} from 'lib';
import {SkusTooltip} from 'components';
import {callFunc, get, getHandler, isEmpty} from 'utils';

// `input` comp for the Company Config Field.
const CompanyConfigInput = styled.input``;
// Simple container for the tooltip content.
const SkuTooltipContainer = styled.div``;

/**
 * A checkbox form field for selecting a new configuration for a company / client.
 *
 * @method      CompanyConfigField
 * @param       {Object}           props Component props
 * @constructor
 */
function CompanyConfigField(props) {
    // Extract a few props.
    const { disabled, formContext, idSchema, onChange, readonly, schema, uiSchema } = props;
    const { handlers = {} } = formContext;
    const defaultVal = get(schema, 'default');
    // `use`Hooks
    const [checkedState, setCheckedState] = React.useState(defaultVal);
    // Build some internally used props.
    const id = get(idSchema, '$id', 'CompanyConfigField');
    const onPickRef = get(uiSchema, 'onPick');
    const configInfo = get(uiSchema, 'configInfo', {});
    const addonConfigInfo = get(uiSchema, 'addonConfigInfo');
    const onPickHandler = getHandler(handlers, onPickRef);
    const configName = get(configInfo, 'configurationName', 'Configuration Name');
    const addonConfigName = get(addonConfigInfo, 'configurationName', 'Add-On Configuration Name');
    const configType = get(configInfo, 'configurationType');
    const configTypeLabel =
        configType === 'master' ? '(Master)' : configType === 'alternate' ? '(Alternate)' : null;
    // Handle the `onChange` event of the checkbox input.
    async function handleOnChange(e) {
        try {
            const newVal = e.target.checked;
            // Update the local state.
            setCheckedState(newVal);
            // Call the form's onChange func.
            callFunc(onChange, newVal);
            // Call the passed in `onPick` func.
            await callFunc(onPickHandler, newVal, e);
            // Reset the local state back to checked.
            setCheckedState(!newVal);
        } catch (e) {
            return;
        }
    }
    // Render info about the add-on config.
    function renderAddonConfigInfo() {
        // If no add-on config info is present, no need to render anything.
        if (isEmpty(addonConfigInfo)) {
            return null;
        }
        // Otherwise, render the sku tooltip info about the add-on config.
        return (
            <>
                <Divider transparent />
                <Row alignItems="baseline" justify="flex-start" gutter={false}>
                    <CompanyConfigInput checked disabled onChange={() => {}} type="checkbox" />
                    <SkuTooltipContainer>
                        <SkusTooltip configuration={addonConfigInfo} placement="top-start">
                            <Typography as="span" gutterBottom="0" gutterLeft="10px">
                                {addonConfigName} (Add-On)
                            </Typography>
                        </SkusTooltip>
                    </SkuTooltipContainer>
                </Row>
            </>
        );
    }
    // Build the Company Config field.
    return (
        <Row gutter={false} direction="column">
            <Row alignItems="baseline" justify="flex-start" gutter={false}>
                <CompanyConfigInput
                    checked={checkedState}
                    disabled={disabled || readonly}
                    id={id}
                    onChange={handleOnChange}
                    type="checkbox"
                />
                <SkuTooltipContainer>
                    <SkusTooltip configuration={configInfo} placement="top-start">
                        <Typography as="span" gutterBottom="0" gutterLeft="10px">
                            {configName} {configTypeLabel}
                        </Typography>
                    </SkusTooltip>
                </SkuTooltipContainer>
            </Row>
            {renderAddonConfigInfo()}
        </Row>
    );
}

CompanyConfigField.propTypes = {
    disabled   : PropTypes.bool,
    formContext: PropTypes.object.isRequired,
    idSchema   : PropTypes.object.isRequired,
    onChange   : PropTypes.func.isRequired,
    readonly   : PropTypes.bool,
    schema     : PropTypes.object.isRequired,
    uiSchema   : PropTypes.object.isRequired
};

CompanyConfigField.defaultProps = {
    disabled: null,
    readonly: null
};

export default CompanyConfigField;
