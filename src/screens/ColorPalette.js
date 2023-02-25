import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import { ColorBox } from '../components';

export const ColorPalette = ({ route }) => {
  const { colors } = route.params;
  return (
    <FlatList
      style={styles.top}
      data={colors}
      keyExtractor={({ hexCode }) => hexCode}
      renderItem={({ item }) => (
        <ColorBox colorName={item.colorName} hexCode={item.hexCode} />
      )}
    />
  );
};

const styles = StyleSheet.create({
  top: {
    padding: 10,
    backgroundColor: 'white',
  },
});
