import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const ColorBox = ({ text, color }) => {
  return (
    <View style={[styles.container, { backgroundColor: color }]}>
      <Text style={styles.text}>
        {text}: {color}
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
    backgroundColor: '#2aa198',
  },
  text: {
    fontWeight: 'bold',
    color: 'white',
  },
});
export default ColorBox;
