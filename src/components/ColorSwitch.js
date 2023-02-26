import React, { useCallback } from 'react';
import { Switch, Text, View, StyleSheet } from 'react-native';

export const ColorSwitch = ({ colorName, hexCode, isSelected, onChange }) => {
  const handleChange = useCallback(
    newSelected => {
      onChange({ newSelected, colorName });
    },
    [colorName, onChange],
  );

  return (
    <View style={styles.line}>
      <Text style={styles.text}>{colorName}</Text>
      <View style={[styles.color, { backgroundColor: hexCode }]} />
      <Switch value={isSelected} onValueChange={handleChange} />
    </View>
  );
};

const styles = StyleSheet.create({
  line: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'grey',
  },
  text: {
    width: 150,
  },
  color: {
    height: 30,
    width: 70,
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 1,
    elevation: 5,
  },
});
