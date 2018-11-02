import { createResource } from 'redux-rest-resource';
import { BOT_PAIRS_URL } from '../../../constants';

export const {types, actions, rootReducer} = createResource({
  name: 'botPair',
  url: BOT_PAIRS_URL,
  headers: {
    Authorization: 'Bearer ' + localStorage.getItem("access_token")
  },
  stripTrailingSlashes: false
});
