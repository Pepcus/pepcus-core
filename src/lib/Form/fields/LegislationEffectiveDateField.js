import PropTypes from 'prop-types';
import React, { Component } from 'react';
import _get from 'lodash/get';

import Col from 'lib/Col';
import Row from 'lib/Row';
import DatePicker from 'lib/DatePicker';

import { callFunc, getHandler } from 'utils/actions';
import FormGroupTitle from './FormGroupTitle';

class LegislationEffectiveDateField extends Component {
    constructor(props) {
        super(props);

        const { formData } = this.props;
        const effectiveDate = formData ? new Date(formData) : '';

        this.state = {
            effectiveDate
        };
    }

    handleOnBlur = evt => {
        const { formContext } = this.props;
        const { handlers = {} } = formContext;
        const updateEffectiveDate = getHandler(handlers, 'updateEffectiveDate');
        const date = this.state.effectiveDate ? new Date(this.state.effectiveDate) : null;

        callFunc(updateEffectiveDate, {
            date
        });
    }

    handleOnChange = date => {
        this.setState({
            effectiveDate: date
        });
    }

    handleOnSelect = date => {}

    render() {
        const { effectiveDate } = this.state;
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
                    <DatePicker
                        onBlur={this.handleOnBlur}
                        onChange={this.handleOnChange}
                        onSelect={this.handleOnSelect}
                        selected={effectiveDate}
                    />
                </Col>
            </Row>
        );
    }
}

LegislationEffectiveDateField.propTypes = {
    formContext: PropTypes.object,
    formData   : PropTypes.oneOfType([PropTypes.array, PropTypes.object, PropTypes.string]),
    idSchema   : PropTypes.object,
    options    : PropTypes.object,
    required   : PropTypes.bool,
    schema     : PropTypes.object,
    uiSchema   : PropTypes.object
};

LegislationEffectiveDateField.defaultProps = {
    formContext: null,
    formData   : null,
    idSchema   : null,
    options    : null,
    required   : null,
    schema     : null,
    uiSchema   : null
};

export default LegislationEffectiveDateField;
