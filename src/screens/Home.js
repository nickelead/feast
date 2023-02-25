import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import { PalettePreview } from '../components';
import { COLOR_PALETTES } from '../constants';

export const Home = () => {
  return (
    <FlatList
      style={styles.list}
      data={COLOR_PALETTES}
      keyExtractor={item => item.paletteName}
      renderItem={({ item }) => (
        <PalettePreview paletteName={item.paletteName} colors={item.colors} />
      )}
    />
  );
};

const styles = StyleSheet.create({
  list: {
    flex: 1,
    padding: 10,
    backgroundColor: 'white',
  },
});
