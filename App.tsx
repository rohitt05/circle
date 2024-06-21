/* eslint-disable eslint-comments/no-unused-disable */
/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import 'react-native-gesture-handler';
import {StyleSheet, View, FlatList, Dimensions} from 'react-native';
import HomeScreen from './src/screens/HomeScreen/HomeScreen';
import CommentScreen from './src/screens/CommentScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import EditProfileScreen from './src/screens/EditProfileScreen';

const {height} = Dimensions.get('window');

const App = () => {
  return (
    <View style={styles.app}>
      {/* <HomeScreen /> */}
      {/* <CommentScreen /> */}
      {/* <ProfileScreen /> */}
      {/* <TopTabNavigation /> */}
      <EditProfileScreen />
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
