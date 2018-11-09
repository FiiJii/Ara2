import React from 'react';
import BasicLayout from '../../layouts/BasicLayout';
import Button from '../../components/login/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import FormComponent from '../../components/base/FormComponent';
import FormGroup from '../../components/login/FormGroup';
import Input from '../../components/login/Input';
import InputsContainer from '../../components/login/InputsContainer';
import LoginContainer from '../../components/login/LoginContainer';
import Title from '../../components/general/Title';
import TotalCenter from '../../components/general/TotalCenter';
import { LOGIN_FORM_INPUTS } from '../../constants';
import { connect } from 'react-redux';
import { login } from '../../ducks/access';

class Login extends FormComponent {
  constructor(props){
    super(props);
    this.state = {
      email: "",
      password:"",
      loading: false
    };
  }

  login = () => {
    const { email, password } = this.state;

    if (email === "" || password === "") {
      return;
    } else {
      this.setState({loading: true}, () => this.props.login(
        this.state.email,
        this.state.password,
        this._handleLoginSuccess.bind(this)
      ));
    }
  }

  _handleKeyPress(e) {
    let tecla = (document.all) ? e.keyCode : e.which;

    if (tecla === 13) {
      this.login();
    }
  }

  _handleLoginSuccess(bool) {
    if (bool === true) {
      this.props.history.push('/dashboard');
      this.setState({
        email: "",
        password: "",
        loading: false
      });
    }
  }

  render() {
    return (
      <BasicLayout history={this.props.history}>
        <LoginContainer>
          <FormGroup>
            <Title centered={true} textTransform="uppercase" thinText="bot" thickText="trading"/>
            <InputsContainer>
              {LOGIN_FORM_INPUTS.map(({name, ...props}, key) => (
                <TotalCenter key={key}>
                  <Input
                    name={name}
                    onChange={this._handleInputChange.bind(this)}
                    onKeyPress={this._handleKeyPress.bind(this)}
                    value={this.state[name]}
                    {...props}
                  />
                </TotalCenter>
              ))}
            </InputsContainer>
            <TotalCenter>
              {
                this.state.loading === true ?
                  <CircularProgress/> :
                  <Button type="button" onClick={this.login}>ENTER</Button>
              }
            </TotalCenter>
          </FormGroup>
        </LoginContainer>
      </BasicLayout>
    );
  }
}

export default connect(null, {login})(Login);
