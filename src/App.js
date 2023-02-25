import React from 'react';
import { View, Text, SafeAreaView, StyleSheet } from 'react-native';
import ColorBox from './components/ColorBox';

const App = () => {
  return (
    <SafeAreaView>
      <View style={styles.top}>
        <Text style={styles.heading}>
          Here are some boxes of different colours
        </Text>
        <ColorBox text={'Cyan'} color={'#2aa198'} />
        <ColorBox text={'Blue'} color={'#268bd2'} />
        <ColorBox text={'Magenta'} color={'#d33682'} />
        <ColorBox text={'Orange'} color={'#cb4b16'} />
      </View>
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
  },
});

export default App;
