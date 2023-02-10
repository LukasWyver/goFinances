import React from 'react';
import { View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { ThemeProvider } from 'styled-components';

import theme from './src/global/styles/theme';
import Dashboard from './src/screens/Dashboard';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <StatusBar style="light" backgroundColor={theme.colors.primary} />          
      <Dashboard />      
    </ThemeProvider>
  );
}