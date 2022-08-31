import React from 'react';
import { StyleProp, TextProps, ViewStyle } from 'react-native';

import styled from 'styled-components/native';
import { theme } from '../../constants/theme';

type GreetingProps = {
  image: string;
  profileStyles?: StyleProp<ViewStyle>;
  imgStyles?: StyleProp<TextProps>;
};

const Profile: React.FC<GreetingProps> = ({
  image,
  profileStyles,
  imgStyles,
}) => {
  return (
    <Container style={profileStyles}>
      <Image source={image} style={imgStyles} resizeMode="cover" />
    </Container>
  );
};

const Container = styled.View`
  width: 50px;
  height: 50px;
  padding: 3px;
  border-radius: 100px;
  margin-right: 5px;
  border: 2px solid ${theme.secondary};
`;

const Image = styled.Image`
  width: 100%;
  height: 100%;
  border-radius: 100px;
  box-shadow: 0px 15px 30px rgba(0, 0, 0, 0.25);
`;

export default Profile;
