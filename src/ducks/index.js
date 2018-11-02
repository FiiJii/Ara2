import { combineReducers, applyMiddleware, createStore  } from "redux";
import accessReducer from './access';
import thunk from 'redux-thunk';
import { rootReducer as currencies } from '../containers/Currencies/store';
import { rootReducer as bots } from '../containers/Bots/store';
import { rootReducer as botCurrencies } from '../containers/BotCurrencies/store';
import { rootReducer as botPairs } from '../containers/BotPairs/store';
import { rootReducer as pairs } from '../containers/Pairs/store';
import { rootReducer as transactionDetails } from '../containers/TransactionDetails/store';

const appReducer = combineReducers({
  accessReducer,
  currencies,
  bots,
  botCurrencies,
  botPairs,
  pairs,
  transactionDetails,
});

const rootReducer = (state, action) => {
  if(action.type === 'USER_LOGOUT') {
    state = {};
    localStorage.clear();
    return appReducer(state, action);
  }

  return appReducer(state, action);

}

export default () => {
  let store = createStore(rootReducer,applyMiddleware(thunk));
  return { store };
}
