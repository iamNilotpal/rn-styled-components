import React from 'react';
import { StatusBar } from 'react-native';
import RootStack from './src/navigation/RootStack';

const App = () => (
  <>
    <StatusBar hidden />
    <RootStack />
  </>
);

export default App;
