import React from 'react';
import { StatusBar } from 'react-native';

import styled from 'styled-components/native';
import backgroundImage from '../assets/bgs/background_v1.png';
import { theme } from '../constants/theme';

import PrimaryButton from '../components/Shared/Button/PrimaryButton';
import BigText from '../components/Shared/Text/BigText';
import SmallText from '../components/Shared/Text/SmallText';
import AppContainer from '../layout/AppContainer';

const Welcome: React.FC = () => {
  const handlePress = () => {};

  return (
    <AppContainer>
      <Container>
        <StatusBar barStyle="light-content" />
        <TopSection>
          <Image source={backgroundImage} resizeMode="stretch" />
        </TopSection>
        <BottomSection>
          <BigText
            style={{
              width: '70%',
              marginTop: 10,
              color: theme.white,
            }}>
            Best way to track your money
          </BigText>
          <SmallText style={{ width: '60%', marginTop: 10, opacity: 0.7 }}>
            Best payment method, connects your money to your friends and family.
          </SmallText>
          <PrimaryButton
            btnStyles={{ marginTop: 50 }}
            textStyles={{ color: theme.grayDark }}
            onPress={handlePress}>
            Get Started
          </PrimaryButton>
        </BottomSection>
      </Container>
    </AppContainer>
  );
};

const Container = styled.View`
  flex: 1;
  width: 100%;
  background-color: ${theme.secondary};
`;

const TopSection = styled.View`
  width: 100%;
  flex: 1;
  max-height: 55%;
  height: 100%;
`;

const Image = styled.Image`
  width: 100%;
  height: 100%;
`;

const BottomSection = styled.View`
  width: 100%;
  flex: 1;
  padding: 25px;
  padding-bottom: 40px;
  background-color: 'red';
  justify-content: flex-end;
`;

export default Welcome;
