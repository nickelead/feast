import 'react-native-gesture-handler';
import React from 'react';
import { ColorPalette, Home } from '../screens';
import { createStackNavigator } from '@react-navigation/stack';

const MainStack = createStackNavigator();

export const MainPage = () => {
  return (
    <MainStack.Navigator>
      <MainStack.Screen name="Home" component={Home} />
      <MainStack.Screen
        name="ColorPalette"
        component={ColorPalette}
        options={({ route }) => ({ title: route.params.paletteName })}
      />
    </MainStack.Navigator>
  );
};
