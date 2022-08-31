import React from 'react';
import { StyleProp, TextStyle, ViewStyle } from 'react-native';

export type ButtonProps = {
  children: React.ReactNode;
  onPress: () => void;
  btnStyles?: StyleProp<ViewStyle>;
  textStyles?: StyleProp<TextStyle>;
};
