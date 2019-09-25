import _isEqual from 'lodash/isEqual';
/**
 * For form dirty check operations
 *
 * RJSF (react-jsonschema-form) by default do not provide a functionality to identify
 * whether the form is dirty/pristine.
 * So, this class will be the utility for RJSF wrapper <Form>.
 *
 * Additionally,
 * we need to handle a flag 'isDataInitialized' as the RJSF's form automatically
 * triggers a onChange callback initially. To not consider that as a dirty(change) operation,
 * we considered it a data initialization callback. And then further onChange calls
 * will decide the form's dirty state by comparing the initial and current form data.
 *
 * @type {class}
 */

class FormDirtyCheck {
  constructor() {
    this.isDataInitialized = false;
    this.isDirty = false;
    this.initialFormData = {};
    this.formData = {};

    this.isFormDataChanged = () => _isEqual(this.formData, this.initialFormData);

    this.onChange = ({
      formData
    }) => {
      this.formData = formData;

      if (this.isDataInitialized) {
        this.isDirty = !this.isFormDataChanged();
      } else {
        this.initialFormData = formData;
        this.isDataInitialized = true;
      }
    };

    this.setInitialFormData = formData => {
      this.initialFormData = formData;
    };

    this.setFormData = formData => {
      this.formData = formData;
    };

    this.isFormDirty = () => this.isDirty;
  }

}

export default FormDirtyCheck;