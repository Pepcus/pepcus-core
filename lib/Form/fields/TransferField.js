import React from 'react';
import PropTypes from 'prop-types';
import _get from 'lodash/get';
import _isEmpty from 'lodash/isEmpty';

import Box from 'lib/Box';
import Transfer from 'components/Transfer';
import Typography from 'lib/Typography';

import FormGroupContent from './FormGroupContent';
import TitleField from './TitleField';

function TransferField(props) {
    const { formContext, idSchema, onChange, required, schema, uiSchema } = props;
    // Extract the config
    const config = _get(uiSchema, 'ui:options.config');
    // Extract the actual name of the field from the `idSchema`
    let name = _get(idSchema, '$id', '');
    // Extract the title.
    const title = _get(schema, 'title');
    // Determine if we are rendering a formGroup.
    const formGroup = _get(schema, 'formGroup', false);
    // Extract the action handlers from the `formContext`
    const actions = _get(formContext, 'handlers', {});
    // Catch case if the config object is not defined.
    if (_isEmpty(config)) {
        // Update the name
        name = name.replace('root_', '');
        // Render a message stating that the config is not defined.
        return (
            <Box borderRadius="0" borderWidth="0" margin="0" padding="7.5px">
                <Typography gutterBottom="0">
                    Please check the <code>ui:options.config</code> property for the{' '}
                    <code>{name}</code> field type. It should be defined with a <code>schema</code>{' '}
                    and an <code>oAuthToken</code> key.
                </Typography>
            </Box>
        );
    }
    // Extract the `schema` and `oAuthToken`
    const { oAuthToken = '', schema: transferSchema = {} } = config;
    // NOTE: We're passing in a `baseUrl` to the `Transfer` component, to re-render it,
    // when the baseURL changes.
    const baseUrl = _get(transferSchema, 'apis.request.baseURL');
    // Render the `Transfer` component.
    return (
        <div>
            <TitleField title={title} />
            {formGroup ? (
                <FormGroupContent schema={schema}>
                    <Transfer
                        actions={actions}
                        baseUrl={baseUrl}
                        boxProps={{
                            borderRadius: '0',
                            borderWidth : '0',
                            margin      : '0',
                            padding     : '0'
                        }}
                        oAuthToken={oAuthToken}
                        onChange={onChange}
                        required={required}
                        schema={transferSchema}
                    />
                </FormGroupContent>
            ) : (
                <Transfer
                    actions={actions}
                    baseUrl={baseUrl}
                    oAuthToken={oAuthToken}
                    onChange={onChange}
                    required={required}
                    schema={transferSchema}
                />
            )}
        </div>
    );
}

TransferField.propTypes = {
    /**
     * The `formContext` which gets passed
     * down to react-jsonschema-form.
     */
    formContext: PropTypes.object.isRequired,
    /**
     * An object containing the id for this object,
     * and ids for it's properties.
     */
    idSchema   : PropTypes.object.isRequired,
    /**
     * The `onChange` handler for the field.
     */
    onChange   : PropTypes.func,
    /**
     * Should the TransferField be a required field?
     */
    required   : PropTypes.bool,
    /**
     * The `schema` for the form.
     */
    schema     : PropTypes.object.isRequired,
    /**
     * The `uiSchema` for the form.
     */
    uiSchema   : PropTypes.object.isRequired
};

TransferField.defaultProps = {
    onChange: null,
    required: false
};

export default TransferField;
