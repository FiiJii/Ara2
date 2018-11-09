import { createResource } from 'redux-rest-resource';
import { AUTH_HEADERS as headers, BOT_PAIRS_URL } from '../../../constants';

export const {types, actions, rootReducer} = createResource({
  name: 'botPair',
  url: BOT_PAIRS_URL,
  headers,
  stripTrailingSlashes: false
});
