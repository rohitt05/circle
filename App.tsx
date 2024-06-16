/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import {StyleSheet, View, FlatList, Dimensions} from 'react-native';
import HomeScreen from './src/screens/HomeScreen/HomeScreen';

const {height} = Dimensions.get('window');

const App = () => {
  return (
    <View style={styles.app}>
      <HomeScreen />
    </View>
  );
};

const styles = StyleSheet.create({
  app: {
    flex: 1,
    position: 'relative',
  },
});

export default App;
