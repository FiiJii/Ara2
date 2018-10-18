import { createResource } from 'redux-rest-resource';
import { CURRENCIES_URL } from '../../../constants';

export const {types, actions, rootReducer} = createResource({
  name: 'currency',
  url: CURRENCIES_URL,
  pluralName: 'currencies',
  headers: {
    Authorization: 'Bearer ' + localStorage.getItem("access_token")
  }
});
