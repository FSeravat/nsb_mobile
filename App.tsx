import { NavigationContainer } from '@react-navigation/native';
import React from 'react';

import AppProvider from './src/hooks';
import Routes from './src/routes';

export default function App() {
  return (
    <NavigationContainer>
      <AppProvider>
        <Routes />
      </AppProvider>
    </NavigationContainer>
  );
}
