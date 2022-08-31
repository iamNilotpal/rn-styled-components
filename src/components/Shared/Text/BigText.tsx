import React from 'react';

import styled from 'styled-components/native';
import { theme } from '../../../constants/theme';
import { TypographyProps } from '../../../types/typography';

const BigText: React.FC<TypographyProps> = ({ children, style }) => {
  return <StyledText style={style}>{children}</StyledText>;
};

const StyledText = styled.Text`
  font-weight: bold;
  font-size: 40px;
  color: ${theme.gray};
`;

export default BigText;
