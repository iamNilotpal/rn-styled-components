import React from 'react';

import styled from 'styled-components/native';
import { theme } from '../../../constants/theme';
import { ButtonProps } from '../../../types/button';
import RegularText from '../Text/RegularText';

const PrimaryButton: React.FC<ButtonProps> = ({
  children,
  btnStyles,
  textStyles,
  onPress,
}) => {
  return (
    <Container
      style={[btnStyles, { elevation: 20 }]}
      onPress={onPress}
      activeOpacity={0.85}>
      <RegularText style={textStyles}>{children}</RegularText>
    </Container>
  );
};

const Container = styled.TouchableOpacity`
  align-items: center;
  background-color: ${theme.accent};
  width: 100%;
  padding: 20px;
  border-radius: 20px;
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.25);
`;

export default PrimaryButton;
