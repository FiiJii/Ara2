import { combineReducers, applyMiddleware, createStore  } from "redux";
import accessReducer from './access'
import thunk from 'redux-thunk';

const appReducer = combineReducers({
  accessReducer
})

const rootReducer = (state, action) => {
  if(action.type === 'USER_LOGOUT') {
    state = {};
    localStorage.clear();
    return appReducer(state, action)
  }

  return appReducer(state, action)

}

export default () => {
  let store = createStore(rootReducer,applyMiddleware(thunk))
  return { store }
}
