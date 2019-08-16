import PropTypes from 'prop-types';
import React, { Component } from 'react';
import _get from 'lodash/get';

import Col from 'lib/Col';
import Row from 'lib/Row';
import TextArea from 'lib/TextArea';

import { callFunc, getHandler } from 'utils/actions';
import FormGroupTitle from './FormGroupTitle';

class LegislationNotesField extends Component {
    constructor(props) {
        super(props);

        const { formData } = this.props;

        this.state = {
            formData,
            typingTimeout: null
        };
    }

    handleOnChange = evt => {
        const notes = evt.target.value;

        if (this.state.typingTimeout !== null) {
            clearTimeout(this.state.typingTimeout);
        }

        const typingTimeout = setTimeout(() => {
            this.setState(
                () => ({ formData: notes }),
                () => {
                    if (notes.length <= 2000) {
                        this.saveNotes(notes);
                    }
                }
            );
        }, 1000);

        this.setState({
            typingTimeout: typingTimeout
        });
    }


    handleOnBlur = evt => {
        const notes = this.state.formData;
        this.saveNotes(notes);
    }

    saveNotes = _notes => {
        const { formContext } = this.props;
        const { handlers = {} } = formContext;
        const updateNotes = getHandler(handlers, 'updateNotes');

        callFunc(updateNotes, {
            notes: _notes
        });
    }

    render() {
        const { formData } = this.state;
        const { idSchema, required, schema } = this.props;
        let id = _get(idSchema, '$id', '');
        const title = _get(schema, 'title');
        const titleHelptext = _get(schema, 'helpText');
        const notesStyles = {
            overflowY: 'scroll'
        };

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
                    <TextArea
                        defaultValue={formData}
                        maxLength="2000"
                        onChange={this.handleOnChange}
                        onBlur={this.handleOnBlur}
                        placeholder="Type your note here"
                        rows={5}
                        style={notesStyles}
                    />
                </Col>
            </Row>
        );
    }
}

LegislationNotesField.propTypes = {
    formContext: PropTypes.object,
    formData   : PropTypes.oneOfType([PropTypes.array, PropTypes.object, PropTypes.string]),
    idSchema   : PropTypes.object,
    options    : PropTypes.object,
    required   : PropTypes.bool,
    schema     : PropTypes.object,
    uiSchema   : PropTypes.object
};

LegislationNotesField.defaultProps = {
    formContext: null,
    formData   : null,
    idSchema   : null,
    options    : null,
    required   : null,
    schema     : null,
    uiSchema   : null
};

export default LegislationNotesField;
