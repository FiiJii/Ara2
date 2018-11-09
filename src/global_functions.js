import { CURRENCY_FORMATTER } from './constants';

export const formatCurrency = (value) => {
  return CURRENCY_FORMATTER.format(value);
};

export const coinMapper = coin => coin.name;

export const coinFilter = coin => coin.active;
