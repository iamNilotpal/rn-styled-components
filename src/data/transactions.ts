import currencyFormatter from 'currency-formatter';
import { formatOptions } from '../constants/formatOptions';
import randomId from '../utils/randomIdGenerator';

import taxi from '../assets/icons/taxi.png';
import shopping from '../assets/icons/buying.png';
import plane from '../assets/icons/plane.png';
import { theme } from '../constants/theme';

export const TRANSACTIONS = [
  {
    id: randomId(),
    title: 'Taxi',
    subtitle: 'Uber car',
    date: '14 Jun 2020',
    amount: currencyFormatter.format(86, formatOptions),
    art: {
      icon: taxi,
      backgroundColor: theme.grayMedium,
    },
  },
  {
    title: 'Shopping',
    subtitle: 'Ali express',
    date: '14 Jun 2020',
    amount: currencyFormatter.format(286, formatOptions),
    art: {
      icon: shopping,
      backgroundColor: theme.accent,
    },
  },
  {
    title: 'Travel',
    subtitle: 'Emirates',
    date: '14 Jun 2020',
    amount: currencyFormatter.format(586, formatOptions),
    art: {
      icon: plane,
      backgroundColor: theme.tertiary,
    },
  },
];
