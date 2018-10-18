import React, { Component } from 'react';
import { connect } from 'react-redux';
import CircularProgress from '@material-ui/core/CircularProgress';
import { loginSuccess } from '../../ducks/access';
import '../../styles/templates/login.css';


class Login extends Component {
  constructor(props){
    super(props)
    this.state={
      email: "",
      password:"",
      load: false
    }
  }
  loginActive = () => {
    if (this.state.email === "" && this.state.password === "") {
      console.log("hola");
      return
    }
    if (this.state.email === "" ) {
      console.log("email");
      return
    }
    // else{
    //   var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    //   if(!re.test(String(this.state.email).toLowerCase())){
    //     console.log("email-incorrecto");
    //     return
    //   }
    // }
    if (this.state.password === "" ) {
      console.log("password");
      return
    }
    this.props.loginSuccess(this.state.email,this.state.password, this.successLogin)
    this.setState({load: true})
  }
  successLogin = (bool) =>{
    if (bool === true) {
       this.props.history.push('/dashboard')
       this.setState({
         email: "",
         password:"",
         load: false
       })
    }
  }
    render() {
        return (
          <div className="container-login" history={this.props.history}>
            <div className="group-form">
              <p className="title-session text-white "><span className="title-ligth">BOT </span>TRADING.</p>
              <div className="margin-top total-center">
                <input
                  className="form-login"
                   type="text"
                   placeholder="Username - Email"
                   value={this.state.email}
                   onChange={(event) => this.setState({email: event.target.value})}
                   />
              </div>
              <div className="total-center">
                <input
                  className="form-login"
                  type="password"
                  placeholder="Password"
                  value={this.state.password}
                  onChange={(event) => this.setState({password: event.target.value})}
                  onKeyPress={this.loginActive}
                  />
              </div>
              {
                this.state.load === true ?
                <div className="total-center">
                  <CircularProgress/>
                </div>
                :
                <button type="button" className="button" onClick={this.loginActive}>ENTER</button>
              }
            </div>
          </div>
        )
    }
}
const mapStateToProps = (state) => {
  console.log(state);
  return {

  }
}
export default connect(mapStateToProps,{ loginSuccess })(Login)
