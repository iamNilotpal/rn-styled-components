import React from 'react';

import styled from 'styled-components/native';
import { theme } from '../../../constants/theme';
import { TypographyProps } from '../../../types/typography';

const SmallText: React.FC<TypographyProps> = ({ children, style }) => {
  return <StyledText style={style}>{children}</StyledText>;
};

const StyledText = styled.Text`
  font-size: 13px;
  font-weight: 500;
  color: ${theme.gray};
`;

export default SmallText;
