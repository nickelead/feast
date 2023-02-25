import React from 'react';

import { SafeAreaView, StyleSheet, Text } from 'react-native';
import { ColorBox } from '../components';

export const FirstPage = () => {
  return (
    <SafeAreaView style={styles.top}>
      <Text style={styles.heading}>
        Here are some boxes of different colours
      </Text>
      <ColorBox colorName={'Cyan'} hexCode={'#2aa198'} />
      <ColorBox colorName={'Blue'} hexCode={'#268bd2'} />
      <ColorBox colorName={'Magenta'} hexCode={'#d33682'} />
      <ColorBox colorName={'Orange'} hexCode={'#cb4b16'} />
    </SafeAreaView>
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
