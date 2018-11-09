import { createResource } from 'redux-rest-resource';
import { AUTH_HEADERS as headers, CURRENCIES_URL } from '../../../constants';

export const {types, actions, rootReducer} = createResource({
  name: 'currency',
  url: CURRENCIES_URL,
  pluralName: 'currencies',
  headers,
  stripTrailingSlashes: false
});
