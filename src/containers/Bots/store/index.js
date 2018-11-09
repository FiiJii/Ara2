import { createResource } from 'redux-rest-resource';
import { AUTH_HEADERS as headers, BOTS_URL } from '../../../constants';

export const {types, actions, rootReducer} = createResource({
  name: 'bot',
  url: BOTS_URL,
  headers,
  actions: {
    update: {
      method: 'PUT',
      url: BOTS_URL+":id/"
    }
  },
  stripTrailingSlashes: false
});
