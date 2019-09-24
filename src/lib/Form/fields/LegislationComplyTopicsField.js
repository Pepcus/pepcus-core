import PropTypes from 'prop-types';
import React, { Component } from 'react';
import _get from 'lodash/get';

import Col from 'lib/Col';
import Row from 'lib/Row';
import Select from 'lib/Select';

import { callFunc, getHandler } from 'utils/actions';
import FormGroupTitle from './FormGroupTitle';

class LegislationComplyTopicsField extends Component {
    constructor(props) {
        super(props);

        const { formData } = this.props;

        this.state = {
            defaultOptions : {},
            formattedTopics: {},
            formData
        };
    }

    componentWillMount = () => {
        const { formData, uiSchema } = this.props;
        const options = this._getUiOptions(uiSchema);
        const { hrTopics } = options;
        this.updateState(formData, hrTopics);
    };

    /**
     * Get the `ui:options` for the current field.
     *
     * @method _getUiOptions
     * @private
     * @param  {Object}      schema The schema to extract the options from
     * @return {Object}             The extracted options
     */
    _getUiOptions = schema => _get(schema, 'ui:options', {});

    handleOnChange = options => {
        const newTopics = options.map(function(option) {
            return { value: option.value };
        });

        const formattedTopics = options.map(function(topic) {
            const newTopic = { value: topic.value, label: topic.value };
            return newTopic;
        });
        this.setState({
            formattedTopics,
            formData: newTopics
        });
    }


    handleOnBlur = evt => {
        var currentTarget = evt.currentTarget;
        const { formContext } = this.props;
        const { handlers = {} } = formContext;
        const updateTopics = getHandler(handlers, 'updateTopics');
        let topics = this.state.formData;

        setTimeout(function() {
            if (!currentTarget.contains(document.activeElement)) {
                callFunc(updateTopics, {
                    topics
                });
            }
        }, 0);
    }

    updateState = (formData, hrTopics) => {
        const formattedTopics = formData.map(function(topic) {
            const newTopic = { value: topic.value, label: topic.value };
            return newTopic;
        });

        const defaultOptions = hrTopics.map(function(option) {
            option.label = option.value;
            return option;
        });

        this.setState({
            defaultOptions,
            formattedTopics
        });
    }

    render() {
        const { defaultOptions, formattedTopics } = this.state;
        const { idSchema, required, schema } = this.props;
        let id = _get(idSchema, '$id', '');
        const title = _get(schema, 'title');
        const titleHelptext = _get(schema, 'helpText');

        return (
            <Row width="auto">
                <Col size={12}>
                    <FormGroupTitle
                        helpText={titleHelptext}
                        id={id}
                        required={required}
                        title={title}
                    />
                </Col>
                <Col size={12} style={{ position: 'relative' }}>
                    <Select
                        defaultValue={formattedTopics}
                        isMulti
                        isClearable={false}
                        minControlHeight={30}
                        onBlur={this.handleOnBlur}
                        onChange={this.handleOnChange}
                        options={defaultOptions}
                        placeholder=""
                    />
                </Col>
            </Row>
        );
    }
}

LegislationComplyTopicsField.propTypes = {
    formContext: PropTypes.object,
    formData   : PropTypes.oneOfType([PropTypes.array, PropTypes.object, PropTypes.string]),
    idSchema   : PropTypes.object,
    options    : PropTypes.object,
    required   : PropTypes.bool,
    schema     : PropTypes.object,
    uiSchema   : PropTypes.object
};

LegislationComplyTopicsField.defaultProps = {
    formContext: null,
    formData   : null,
    idSchema   : null,
    options    : null,
    required   : null,
    schema     : null,
    uiSchema   : null
};

export default LegislationComplyTopicsField;
