import { createResource } from 'redux-rest-resource';
import { BOTS_URL } from '../../../constants';

export const {types, actions, rootReducer} = createResource({
  name: 'bot',
  url: BOTS_URL,
  headers: {
    Authorization: 'Bearer ' + localStorage.getItem("access_token")
  },
  stripTrailingSlashes: false
});
