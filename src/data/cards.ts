import currencyFormatter from 'currency-formatter';
import { formatOptions } from '../constants/formatOptions';
import randomId from '../utils/randomIdGenerator';

export const CARDS = [
  {
    id: randomId(),
    name: 'Master',
    image: require('../assets/cards/mc.png'),
    accountNumber: '8399049174',
    totalBalance: currencyFormatter.format(20000, formatOptions),
  },
  {
    id: randomId(),
    name: 'Visa',
    image: require('../assets/cards/visa_white.png'),
    accountNumber: '9706114648',
    totalBalance: currencyFormatter.format(35000, formatOptions),
  },
  {
    id: randomId(),
    name: 'Master',
    image: require('../assets/cards/mc.png'),
    accountNumber: '4239872339',
    totalBalance: currencyFormatter.format(67000, formatOptions),
  },
  {
    id: randomId(),
    name: 'Visa',
    image: require('../assets/cards/visa_white.png'),
    accountNumber: '9706114648',
    totalBalance: currencyFormatter.format(19030, formatOptions),
  },
];
