import {BASE_URL} from '../../constants';
import * as actions from "./actions";
// Esta función se encarga de realizar la llamada al api para obtener la lista de las configuraciones de seguridad
const loginSuccess = (_username, _password, successLogin) => (dispatch) => {
  dispatch(actions.loginInit(false))
  let boddy = new FormData()
  boddy.append('username',_username)
  boddy.append('password', _password)
  let options= {
    method: 'POST',
    body: boddy,
    headers: {
      'Accept': 'application/json'
    }
  }
  console.log(options);
  fetch(BASE_URL+'/api/auth/token/',options)
  .then((response) =>{
    console.log(response);
    if(response.status > 200 ){
      if(response.status === 400){
        console.log('Usuario inexistente');
      }
    }else{
      console.log(response);
      return  response.json()
    }
  })
  .then((response) => {
    console.log(response);

    if(response !==undefined){
      dispatch(actions.loginFinish(response.access,response.refresh,true))
      localStorage.setItem("access_token", response.access);
      successLogin(true)
    }
  })
  .catch((err) => {
    console.log(err);
  })
}

export {
    loginSuccess,
};
