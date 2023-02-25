import React from 'react';
import { Text, StyleSheet, FlatList } from 'react-native';
import { COLORS } from '../constants';
import { ColorBox } from '../components';

const ColorPalette = () => {
  return (
    <FlatList
      style={styles.top}
      data={COLORS}
      keyExtractor={({ hexCode }) => hexCode}
      renderItem={({ item }) => (
        <ColorBox colorName={item.colorName} hexCode={item.hexCode} />
      )}
      ListHeaderComponent={
        <Text style={styles.heading}>
          Here are some boxes of different colours
        </Text>
      }
    />
  );
};

const styles = StyleSheet.create({
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  top: {
    paddingTop: 50,
    paddingHorizontal: 10,
    paddingBottom: 10,
  },
});

export default ColorPalette;
