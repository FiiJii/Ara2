import { LOGIN_URL } from '../../constants';
import * as actions from "./actions";

// Esta función se encarga de realizar la llamada al api para obtener la lista de las configuraciones de seguridad
const login = (_username, _password, successLogin) => (dispatch) => {
  dispatch(actions.loginInit(false));

  let body = new FormData();

  body.append('username',_username);
  body.append('password', _password);

  let options = {
    body,
    headers: {
      'Accept': 'application/json'
    },
    method: 'POST'
  }

  fetch(LOGIN_URL, options).then((response) =>{
    if (response.status <= 200 ) {
      return  response.json();
    }
  }).then((response) => {
    if (response !== undefined) {
      dispatch(actions.loginFinish(response.access,response.refresh,true));
      localStorage.setItem("access_token", response.access);
      successLogin(true);
    }
  }).catch((err) => {
  });
}

export {
  login,
};
