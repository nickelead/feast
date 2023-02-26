import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { MainPage } from './pages';
import { AddPaletteModal } from './screens';

const RootStack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator mode={'modal'}>
        <RootStack.Screen
          name="Main"
          component={MainPage}
          options={{ headerShown: false }}
        />
        <RootStack.Screen name="AddPaletteModal" component={AddPaletteModal} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default App;
