import React from 'react';
import { FlatList } from 'react-native';

import { CARDS } from '../../data/cards';
import Card from './Card';

const CardList: React.FC = () => {
  return (
    <FlatList
      data={CARDS}
      contentContainerStyle={{
        marginTop: 20,
        paddingHorizontal: 10,
        marginBottom: -100,
      }}
      showsHorizontalScrollIndicator={false}
      snapToAlignment="center"
      keyExtractor={item => item.id}
      renderItem={({ item, index }) => (
        <Card {...item} marginRight={index !== CARDS.length - 1 ? 20 : 0} />
      )}
      horizontal
    />
  );
};

export default CardList;
