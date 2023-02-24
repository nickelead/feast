import React from 'react';
import { View, Text, SafeAreaView, StyleSheet } from 'react-native';

const App = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={[styles.container, styles.pink]}>
        <Text>Hello, world!</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 2,
  },
  pink: {
    backgroundColor: 'pink',
  },
  container: {
    backgroundColor: 'teal',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
});

export default App;
