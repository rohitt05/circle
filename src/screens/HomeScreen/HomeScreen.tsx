/* eslint-disable prettier/prettier */
import React from 'react';
import {StyleSheet, View, FlatList, Dimensions} from 'react-native';
import FeedPost from '../../components/FeedPost';
import posts from '../../assets/data/posts.json';

const {height} = Dimensions.get('window');

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.topSection} />
      <View style={styles.bottomSection} />
      <FlatList
        data={posts}
        renderItem={({item}) => <FeedPost post={item} />}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.flatListContent}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
  },
  topSection: {
    height: height * 0.35, // 35% of screen height
    backgroundColor: '#1B204C', // Dark color for the top section
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
  },
  bottomSection: {
    height: height * 0.65, // 65% of screen height
    backgroundColor: '#E0E5E6', // Light color for the bottom section
    position: 'absolute',
    top: height * 0.35, // Position below the top section
    left: 0,
    right: 0,
  },
  flatListContent: {
    paddingTop: height * 0.02, // Add some padding top for better spacing
  },
});

export default HomeScreen;
