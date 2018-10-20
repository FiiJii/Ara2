import { createResource } from 'redux-rest-resource';
import { BOT_NEW_TRANSACTION_LIST } from '../../../constants'

export const {types, actions, rootReducer} = createResource({
  name: 'bot_transactions',
  url: BOT_NEW_TRANSACTION_LIST,
  headers: {
    Authorization: 'Bearer ' + localStorage.getItem("access_token")
  }
})
