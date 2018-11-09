export const BASE_URL = 'http://api-trading.arawato.co';
export const API_URL = BASE_URL+'/api/';
export const LOGIN_URL = API_URL+'auth/token/';
export const BOTS_URL = API_URL+'config/bot/';
export const BOT_CURRENCIES_URL = API_URL+'config/bot/:botId/coins/';
export const BOT_NEW_TRANSACTION_URL = API_URL+'config/currency/averages/';
export const BOT_PAIRS_URL = API_URL+'config/bot/:botId/pairs/';
export const CURRENCIES_URL = API_URL+'config/currency/';
export const TRANSACTION_DETAILS_URL = API_URL+'trading/transaction_details/';

export const AUTH_HEADERS = {
  Authorization: 'Bearer ' + localStorage.getItem("access_token")
};

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

export const CURRENCIES_FILTERS = ['btc', 'usdt', 'eth'];
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

export const CHECKED_INPUT_TYPES = ['checkbox'];

export const LOGIN_FORM_INPUTS = [
  {
    name: 'email',
    placeholder: 'Username - Email',
    type: 'text'
  },
  {
    name: 'password',
    placeholder: 'Password',
    type: 'password'
  }
];

export const DEFAULT_BOT = {
  interval: 0,
  max_lost: 0,
};

export const SETTINGS_INPUTS = [
  {
    label: 'Active',
    name: 'bot_status',
    rounded: true,
    type: 'switch'
  },
  {
    label: 'Interval',
    min: 0,
    name: 'time_interval',
    step: 100,
    type: 'number'
  },
  {
    label: 'Max Lost ($)',
    min: 0,
    name: 'max_lost',
    step: 100,
    trunc: true,
    type: 'number'
  },
  {
    label: 'Verbosity',
    name: 'db_verbosity',
    options: [
      {
        label: 'Low',
        value: 'low'
      },
      {
        label: 'Medium',
        value: 'medium'
      },
      {
        label: 'High',
        value: 'high'
      }
    ],
    type: 'radio'
  }
];

export const INPUT_NUMBER_TYPE = 'number';
export const INPUT_RADIO_TYPE = 'radio';
export const INPUT_SWITCH_TYPE = 'switch';
