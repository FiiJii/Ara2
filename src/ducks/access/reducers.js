import { combineReducers } from "redux";
import * as types from "./types";

const loginReducer = ( state = {fetching: false}, action ) => {
  switch( action.type ) {
    case types.ACCESS_LOGIN_INIT:
      return {
        fetching: true,
        bool: action.payload.bool
      };
    case types.ACCESS_LOGIN_FINISH:
      return {
        fetching: false,
        data: action.payload.data,
        token: action.payload.token,
        bool: action.payload.bool
      };
    default: return state;
  }
}

const accessReducer = combineReducers({
  access: loginReducer
});

export default accessReducer;
