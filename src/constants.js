export const BASE_URL = 'http://api-trading.arawato.co'
export const API_URL = BASE_URL+'/api/'
export const CURRENCIES_URL = API_URL+'config/currency/'
export const BOTS_URL = API_URL+'config/bot/'
export const BOT_CURRENCIES_URL = API_URL+'config/bot/:botId/coins/'
export const BOT_NEW_TRANSACTION_LIST = API_URL+'trading/transaction_details/averages/'

export const MENU = [
  {
    text: 'HOME',
    route: 'dashboard'
  },
  {
    text: 'SETTINGS',
    route: 'settings'
  },
  {
    text: 'LOGOUT',
    route: ''
  }
]
