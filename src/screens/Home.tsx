import React from 'react';
import { Text } from 'react-native';
import styled from 'styled-components/native';
import { theme } from '../constants/theme';
import AppContainer from '../layout/AppContainer';

const Home: React.FC = () => {
  return (
    <AppContainer>
      <Container></Container>
    </AppContainer>
  );
};

const Container = styled.View`
  width: 100%;
  flex: 1;
  background-color: ${theme.white};
`;

export default Home;
