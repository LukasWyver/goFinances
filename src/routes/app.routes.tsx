import React from 'react';
import { Platform } from 'react-native';
import { useTheme } from 'styled-components';
import { Feather } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Dashboard from '../screens/Dashboard';
import Register from '../screens/Register';

const BottomTabs = createBottomTabNavigator();

export default function AppRoutes() {
  const theme = useTheme();

  return (
    <BottomTabs.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: theme.colors.primary,
        tabBarInactiveTintColor: theme.colors.text,
        tabBarLabelPosition: 'beside-icon',
        tabBarStyle: {
          height: 88,
          paddingVertical: Platform.OS === 'ios' ? 20 : 0,
        }
      }}
    >
      <BottomTabs.Screen
        name='Listagem'
        component={Dashboard}
        options={{
          tabBarIcon: (({ size, color }) =>
            <Feather name="list" size={size} color={color} />
          )
        }}
      />
      <BottomTabs.Screen
        name='Cadastrar'
        component={Register}
        options={{
          tabBarIcon: (({ size, color }) =>
            <Feather name="dollar-sign" size={size} color={color} />
          )
        }}
      />
      <BottomTabs.Screen
        name='Resumo'
        component={Register}
        options={{
          tabBarIcon: (({ size, color }) =>
            <Feather name="pie-chart" size={size} color={color} />
          )
        }}
      />
    </BottomTabs.Navigator>
  )
}