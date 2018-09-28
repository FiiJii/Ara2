import { combineReducers } from "redux";

const loginReducer = ( state = {fetching: false}, action ) => {
      switch (action.type) {
        default: return state;
      }
  }
const accessReducer = combineReducers( {
    access: loginReducer
});

export default accessReducer;
