import React from 'react';

import styled from 'styled-components/native';
import { theme } from '../constants/theme';

type ContainerProps = { children: React.ReactNode };

const AppContainer: React.FC<ContainerProps> = ({ children }) => (
  <Container>{children}</Container>
);

const Container = styled.View`
  flex: 1;
  align-items: center;
  background-color: ${theme.white};
`;

export default AppContainer;
