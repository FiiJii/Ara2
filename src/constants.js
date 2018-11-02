export const BASE_URL = 'http://api-trading.arawato.co';
export const API_URL = BASE_URL+'/api/';
export const BOTS_URL = API_URL+'config/bot/';
export const BOT_CURRENCIES_URL = API_URL+'config/bot/:botId/coins/';
export const BOT_NEW_TRANSACTION_URL = API_URL+'config/currency/averages/';
export const BOT_PAIRS_URL = API_URL+'config/bot/:botId/pairs/';
export const CURRENCIES_URL = API_URL+'config/currency/';
export const TRANSACTION_DETAILS_URL = API_URL+'trading/transaction_details/';

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
];

export const CURRENCIES_FILTERS = [
  {
    text: 'USD',
    value: 'usdt'
  },
  {
    text: 'BTC',
    value: 'btc'
  },
  {
    text: 'LTC',
    value: 'ltc'
  }
];
export const ALL_FILTERS = 'all';

export const PARITIES_TABLE_HEADERS = [
  'Symbol',
  'Name',
  '%changes 24h',
  'Last',
  'Bid',
  'Ask',
  'Volume',
  '$Volume',
  'Avg Tx Vol 60s',
  'Avg Tx Vol 1hr',
  'Avg Tx Vol 6hr',
  'Avg Tx Vol 12hr',
  'Avg Tx Vol 24hr',
  'R/V',
];
export const TRANSACTIONS_TABLE_HEADERS = [
  'Time',
  'Symbol',
  'Name',
  'TX Ref ID',
  '$ Action',
  'Tx Size (Amount)',
  'Fees',
];

export const CURRENCY_FORMATTER = new Intl.NumberFormat('en-GB', {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 0,
  maximumFractionDigits: 0
});

export const ACTIVE_PAIR = 'active';
