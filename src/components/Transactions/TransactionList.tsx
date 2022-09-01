import React from 'react';
import { FlatList, StyleSheet } from 'react-native';

import { theme } from '../../constants/theme';
import { TRANSACTIONS } from '../../data/transactions';
import RegularText from '../Shared/Text/RegularText';
import Transaction from './Transaction';

const TransactionList: React.FC = () => {
  return (
    <FlatList
      data={TRANSACTIONS}
      keyExtractor={item => item.title}
      ListHeaderComponent={() => (
        <RegularText style={styles.text}>Transactions</RegularText>
      )}
      renderItem={({ item }) => <Transaction {...item} />}
      contentContainerStyle={{
        paddingHorizontal: 20,
      }}
    />
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    fontWeight: '700',
    color: theme.grayDark,
    marginBottom: 20,
  },
});

export default TransactionList;
