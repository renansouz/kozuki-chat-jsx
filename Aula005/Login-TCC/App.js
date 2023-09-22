import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import Routes from './src/routes'
import Welcome from './src/pages/welcome';

export default function App() {
  return (
    <NavigationContainer>
      <Routes />
    </NavigationContainer>

  );
}