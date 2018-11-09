import React from 'react';
import Label from '../form/Label';
import InputContainer from '../form/InputContainer';
import Number from '../form/Number';
import Radio from '../form/Radio';
import Switch from '../form/Switch';
import { CHECKED_INPUT_TYPES, INPUT_NUMBER_TYPE, INPUT_RADIO_TYPE, INPUT_SWITCH_TYPE } from '../../constants';

class FormComponent extends React.Component {
  _handleInputChange(e) {
    const { checked, name, type, value } = e.target;
    let form = this.getFormState();

    form[name] = CHECKED_INPUT_TYPES.includes(type) ? checked : value;

    this.saveFormState(form);
  }

  _renderInputs(inputsSettings) {
    const { length } = inputsSettings;
    let inputs = [];

    inputsSettings.forEach(({type, ...settings}, key) => {
      let input = null;

      inputs.push(
        <Label key={key}>{settings.label}</Label>
      );

      switch (type) {
        case INPUT_NUMBER_TYPE:
          input = this._renderNumber(settings);
          break;
        case INPUT_RADIO_TYPE:
          input = this._renderRadioInput(settings);
          break;
        case INPUT_SWITCH_TYPE:
          input = this._renderSwicthInput(settings);
          break;
        default:
      }

      inputs.push(
        <InputContainer key={key+length}>{input}</InputContainer>
      );
    });

    return inputs;
  }

  _renderNumber(settings) {
    const form = this.getFormState();
    const value = form[settings.name];
    settings.value = settings.trunc ? Math.trunc(value) : value;
    settings.onChange = this._handleInputChange.bind(this);

    return (<Number {...settings}/>);
  }

  _renderRadioInput(settings) {
    const form = this.getFormState();
    const value = form[settings.name];
    let radios = [];

    settings.options.forEach((radio, key) => {
      radio.checked = value === radio.value;
      radio.name = settings.name;
      radio.onChange = this._handleInputChange.bind(this);

      radios.push(
        <Radio key={key} {...radio}/>
      );
    });

    return radios;
  }

  _renderSwicthInput(settings) {
    const form = this.getFormState();
    const checked = form[settings.name];
    settings.checked = checked;
    settings.onChange = this._handleInputChange.bind(this);

    return (<Switch {...settings}/>);
  }

  getFormState = () => {
    if (this.formState) {
      return this.state[this.formState];
    }
    return {};
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
