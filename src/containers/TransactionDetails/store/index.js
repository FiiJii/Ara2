import { createResource } from 'redux-rest-resource';
import { AUTH_HEADERS as headers, TRANSACTION_DETAILS_URL } from '../../../constants';

export const {types, actions, rootReducer} = createResource({
  name: 'transactionDetail',
  url: TRANSACTION_DETAILS_URL,
  headers,
  stripTrailingSlashes: false
});
