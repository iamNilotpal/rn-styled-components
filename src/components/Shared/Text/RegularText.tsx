import React from 'react';

import styled from 'styled-components/native';
import { theme } from '../../../constants/theme';
import { TypographyProps } from '../../../types/typography';

const RegularText: React.FC<TypographyProps> = ({ children, style }) => {
  return <StyledText style={style}>{children}</StyledText>;
};

const StyledText = styled.Text`
  font-weight: 600;
  font-size: 16px;
  color: ${theme.gray};
`;

export default RegularText;
