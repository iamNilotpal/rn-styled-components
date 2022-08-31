import React from 'react';
import { StyleProp, TextProps, ViewStyle } from 'react-native';

import styled from 'styled-components/native';
import { theme } from '../../constants/theme';
import RegularText from '../Shared/Text/RegularText';

type GreetingProps = {
  greeting: string;
  username: string;
  itemStyle?: StyleProp<ViewStyle>;
  greetingStyle?: StyleProp<TextProps>;
  usernameStyle?: StyleProp<TextProps>;
};

const Greeting: React.FC<GreetingProps> = ({
  greeting,
  username,
  greetingStyle,
  usernameStyle,
  itemStyle,
}) => {
  return (
    <Container style={itemStyle}>
      <GreetingText style={greetingStyle}>{greeting}</GreetingText>
      <Username style={usernameStyle}>{username}</Username>
    </Container>
  );
};

const Container = styled.View`
  padding: 20px 5px;
  box-shadow: none;
  border: none;
`;

const GreetingText = styled(RegularText)`
  color: ${theme.grayMedium};
  font-size: 13px;
  font-weight: 500;
`;

const Username = styled(RegularText)`
  font-weight: bold;
  font-size: 20px;
  text-transform: uppercase;
  color: ${theme.grayDark};
`;

export default Greeting;
