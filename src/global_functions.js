import { CURRENCY_FORMATTER } from './constants';

export const formatCurrency = (value) => {
  return CURRENCY_FORMATTER.format(value);
}
