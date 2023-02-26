import React, { useCallback } from 'react';
import { Switch, Text, View, StyleSheet } from 'react-native';

export const ColorSwitch = ({ colorName, isSelected, onChange }) => {
  const handleChange = useCallback(
    newSelected => {
      onChange({ newSelected, colorName });
    },
    [colorName, onChange],
  );

  return (
    <View style={styles.line}>
      <Text style={styles.text}>{colorName}</Text>
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
  },
  text: {},
});
