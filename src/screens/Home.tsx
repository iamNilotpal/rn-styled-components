import React from 'react';
import styled from 'styled-components/native';
import { theme } from '../constants/theme';

import CardList from '../components/Cards/CardList';
import AppContainer from '../layout/AppContainer';
import TransactionList from '../components/Transactions/TransactionList';

const Home: React.FC = () => {
  return (
    <AppContainer>
      <Container>
        <CardList />
        <TransactionList />
      </Container>
    </AppContainer>
  );
};

const Container = styled.View`
  width: 100%;
  flex: 1;
  background-color: ${theme.white};
`;

export default Home;
