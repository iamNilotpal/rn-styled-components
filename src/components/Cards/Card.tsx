import { StyleProp, StyleSheet, ViewStyle } from 'react-native';
import React from 'react';
import styled from 'styled-components/native';

import background from '../../assets/bgs/background_transparent.png';
import RegularText from '../Shared/Text/RegularText';
import { theme } from '../../constants/theme';

type CardProps = {
  image: string;
  name: string;
  accountNumber: string;
  totalBalance: string;
  cardContainerStyles?: StyleProp<ViewStyle>;
  marginRight: number;
};

const Card: React.FC<CardProps> = ({
  image,
  accountNumber,
  totalBalance,
  marginRight,
}) => {
  return (
    <Container style={{ marginRight, elevation: 30 }}>
      <Image
        style={[StyleSheet.absoluteFillObject]}
        source={background}
        resizeMode="cover"
      />
      <RegularText
        style={{
          top: 30,
          left: 70,
          color: theme.white,
          fontWeight: 'bold',
          fontSize: 20,
        }}>
        {accountNumber}
      </RegularText>
      <BalanceContainer>
        <RegularText style={{ color: theme.grayLight, fontSize: 13 }}>
          Total Balance
        </RegularText>
        <RegularText
          style={{
            color: theme.white,
            fontWeight: 'bold',
            fontSize: 20,
          }}>
          {totalBalance}
        </RegularText>
      </BalanceContainer>
      <Image
        source={image}
        style={{ width: 70, height: 70, left: 260, top: 70 }}
        resizeMode="contain"
      />
    </Container>
  );
};

const Container = styled.View`
  width: 350px;
  height: 230px;
  border-radius: 20px;
  box-shadow: 0px 20px 40px rgba(0, 0, 0, 0.45);
  background-color: ${theme.tertiary};
`;

const Image = styled.Image`
  width: 100%;
  height: 100%;
  border-radius: 20px;
`;

const BalanceContainer = styled.View`
  top: 140px;
  left: 70px;
`;

export default Card;
