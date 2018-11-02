import { createResource } from 'redux-rest-resource';
import { TRANSACTION_DETAILS_URL } from '../../../constants';

export const {types, actions, rootReducer} = createResource({
  name: 'transactionDetail',
  url: TRANSACTION_DETAILS_URL,
  headers: {
    Authorization: 'Bearer ' + localStorage.getItem("access_token")
  },
  stripTrailingSlashes: false
});
