import { createResource } from 'redux-rest-resource';
import { BOT_NEW_TRANSACTION_URL } from '../../../constants';

export const {types, actions, rootReducer} = createResource({
  name: 'pair',
  url: BOT_NEW_TRANSACTION_URL,
  headers: {
    Authorization: 'Bearer ' + localStorage.getItem("access_token")
  },
  stripTrailingSlashes: false
});
