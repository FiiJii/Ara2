import * as types from "./types";

const loginInit = (bool) => ({
    type: types.ACCESS_LOGIN_INIT,
    payload: {
      fetching: true,
      bool
    }
});

const loginFinish = (data,token,bool) => ({
  type: types.ACCESS_LOGIN_FINISH,
  payload: {
    data,
    token,
    bool
  }
})

const logoutReset = () => ({
  type: types.USER_LOGOUT
})

export {
  loginInit,
  loginFinish,
  logoutReset
}
