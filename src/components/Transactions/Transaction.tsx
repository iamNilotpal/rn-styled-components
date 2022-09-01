import { View } from 'react-native';
import React from 'react';
import styled from 'styled-components/native';
import { theme } from '../../constants/theme';
import RegularText from '../Shared/Text/RegularText';
import SmallText from '../Shared/Text/SmallText';

type TransactionProps = {
  title: string;
  subtitle: string;
  date: string;
  amount: string;
  art: {
    icon: string;
    backgroundColor: string;
  };
};

const Transaction: React.FC<TransactionProps> = ({
  title,
  subtitle,
  art: { icon, backgroundColor },
  amount,
  date,
}) => {
  return (
    <Container>
      <Description>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <ColorFullView style={{ backgroundColor, marginRight: 10 }}>
            <Icon source={icon} resizeMode="cover" />
          </ColorFullView>
          <View>
            <RegularText style={{ color: theme.grayDark }}>{title}</RegularText>
            <SmallText style={{ color: theme.gray }}>{subtitle}</SmallText>
          </View>
        </View>
        <AmountDetails>
          <RegularText style={{ color: theme.grayDark, fontWeight: '700' }}>
            -{amount}
          </RegularText>
          <SmallText style={{ color: theme.grayMedium }}>{date}</SmallText>
        </AmountDetails>
      </Description>
    </Container>
  );
};

const Container = styled.View`
  width: 100%;
  justify-content: space-between;
  margin-bottom: 20px;
  border-radius: 10px;
`;

const Description = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

const AmountDetails = styled.View`
  justify-content: center;
  align-items: center;
`;

const ColorFullView = styled.View`
  width: 45px;
  height: 45px;
  border-radius: 8px;
  padding: 5px;
`;

const Icon = styled.Image`
  width: 100%;
  height: 100%;
`;

export default Transaction;
