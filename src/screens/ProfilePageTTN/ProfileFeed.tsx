/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import MasonryList from 'react-native-masonry-list';
import user from '../../assets/data/user.json';

const ProfileFeed = () => {
  const images = user.posts
    .filter(post => post.images)
    .flatMap(post => post.images.map(image => ({uri: image})));

  return (
    <View style={styles.ProfileFeedImagesContainer}>
      {/* <Text style={styles.headerText}>Profile Feed</Text> */}
      <MasonryList
        images={images}
        columns={2}
        spacing={2}
        backgroundColor="black"
        imageContainerStyle={styles.imageContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  ProfileFeedImagesContainer: {
    flex: 1,
    backgroundColor: 'black',
    paddingTop: 10,
  },
  imageContainer: {
    borderRadius: 20,
    overflow: 'hidden',
  },
});

export default ProfileFeed;
