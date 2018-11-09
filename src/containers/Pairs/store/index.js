import { createResource } from 'redux-rest-resource';
import { AUTH_HEADERS as headers, BOT_NEW_TRANSACTION_URL } from '../../../constants';

export const {types, actions, rootReducer} = createResource({
  name: 'pair',
  url: BOT_NEW_TRANSACTION_URL,
  headers,
  stripTrailingSlashes: false
});
