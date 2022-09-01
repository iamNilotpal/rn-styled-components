import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Welcome from '../screens/Welcome';
import Home from '../screens/Home';
import Greeting from '../components/Header/Greeting';
import Profile from '../components/Header/Profile';
import { theme } from '../constants/theme';
import avatar from '../assets/portraits/3.jpg';

export type RootStackParamList = {
  Welcome: undefined;
  Home: undefined;
  CardDetails: {
    image: string;
    accountNumber: string;
    totalBalance: string;
  };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          animation: 'slide_from_right',
          headerShown: false,
          headerTintColor: theme.secondary,
        }}>
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerShadowVisible: false,
            headerStyle: {
              backgroundColor: theme.white,
            },
            headerShown: true,
            headerTitle: '',
            headerLeft: () => (
              <Greeting greeting="Welcome back" username="Nilotpal" />
            ),
            headerRight: () => <Profile image={avatar} />,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootStack;
