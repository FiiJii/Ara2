import { createResource } from 'redux-rest-resource';
import { AUTH_HEADERS as headers, BOT_CURRENCIES_URL } from '../../../constants';

export const {types, actions, rootReducer} = createResource({
  name: 'botCurrency',
  url: BOT_CURRENCIES_URL,
  pluralName: 'botCurrencies',
  headers,
  stripTrailingSlashes: false
});
