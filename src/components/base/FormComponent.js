import React from 'react';
import { CHECKED_INPUT_TYPES } from '../../constants';

class FormComponent extends React.Component {
  getFormState = () => {
    if (this.formState) {
      return this.state[this.formState];
    }
    return {};
  }

  _handleInputChange(e) {
    const { checked, name, type, value } = e.target;
    let form = this.getFormState();

    form[name] = CHECKED_INPUT_TYPES.includes(type) ? checked : value;

    this.saveFormState(form);
  }

  saveFormState = (form) => {
    if (this.formState) {
      this.setState({
        [this.formState]: form
      });
    }
    this.setState(form);
  }
}

export default FormComponent;
