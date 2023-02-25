import React from 'react';
import { FlatList, Text, SafeAreaView, StyleSheet } from 'react-native';
import { ColorBox } from './components';
import { COLORS } from './constants';

const App = () => {
  return (
    <SafeAreaView>
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
      {/*<ScrollView style={styles.top}>*/}
      {/*  <Text style={styles.heading}>*/}
      {/*    Here are some boxes of different colours*/}
      {/*  </Text>*/}
      {/*  <ColorBox colorName={'Cyan'} hexCode={'#2aa198'} />*/}
      {/*  <ColorBox colorName={'Blue'} hexCode={'#268bd2'} />*/}
      {/*  <ColorBox colorName={'Magenta'} hexCode={'#d33682'} />*/}
      {/*  <ColorBox colorName={'Orange'} hexCode={'#cb4b16'} />*/}
      {/*</ScrollView>*/}
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

export default App;
