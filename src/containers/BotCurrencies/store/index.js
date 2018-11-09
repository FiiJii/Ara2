import { createResource } from 'redux-rest-resource';
import { BOT_CURRENCIES_URL } from '../../../constants';

export const {types, actions, rootReducer} = createResource({
  name: 'botCurrency',
  url: BOT_CURRENCIES_URL,
  pluralName: 'botCurrencies',
  headers: {
    Authorization: 'Bearer ' + localStorage.getItem("access_token")
  },
  actions: {
    update: {
      method: 'PUT'
    }
  },
  stripTrailingSlashes: false
});
