import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export const ColorBox = ({ colorName, hexCode }) => {
  const boxColor = { backgroundColor: hexCode };
  const textStyle = {
    color:
      parseInt(hexCode.replace('#', ''), 16) > 0xffffff / 1.1
        ? 'black'
        : 'white',
  };

  return (
    <View style={[styles.container, boxColor]}>
      <Text style={[styles.text, textStyle]}>
        {colorName}: {hexCode}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    borderRadius: 3,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 1,
    elevation: 2,
  },
  text: {
    fontWeight: 'bold',
    color: 'white',
  },
});
