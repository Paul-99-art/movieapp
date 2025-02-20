import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppStack from './src/stacks/Appstack';

export default function App() {
  return (
    <NavigationContainer>
      <AppStack />
    </NavigationContainer>
  );
}