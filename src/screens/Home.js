import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { SOLARIZED, FRONTEND_MASTERS, RAINBOW } from '../constants';

export const Home = ({ navigation }) => {
  return (
    <View>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('ColorPalette', {
            colors: SOLARIZED,
            paletteName: 'Solarized',
          })
        }>
        <Text>Solarized</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('ColorPalette', {
            colors: FRONTEND_MASTERS,
            paletteName: 'Frontend Masters',
          })
        }>
        <Text>Frontend Masters</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('ColorPalette', {
            colors: RAINBOW,
            paletteName: 'Rainbow',
          })
        }>
        <Text>Rainbow</Text>
      </TouchableOpacity>
    </View>
  );
};
