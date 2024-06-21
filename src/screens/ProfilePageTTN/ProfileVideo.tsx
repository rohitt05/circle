/* eslint-disable prettier/prettier */
import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import MasonryList from 'react-native-masonry-list';
import user from '../../assets/data/user.json';
import Video from 'react-native-video';

const ProfileVideo = () => {
  // Filter posts with videos and format them for rendering
  const postsWithVideos = user.posts.filter(
    post => post.videos && post.videos.length > 0,
  );
  const formattedVideos = postsWithVideos.flatMap(post =>
    post.videos.map(video => ({uri: video})),
  );

  // Custom video renderer for MasonryList
  const renderCustomVideo = ({item}) => (
    <TouchableOpacity activeOpacity={0.8} style={styles.videoContainer}>
      <Video
        source={{uri: item.uri}}
        style={styles.video}
        resizeMode="cover"
        controls={true}
        onError={error => console.log('Video Error: ', error)}
      />
    </TouchableOpacity>
  );

  console.log('Formatted Videos: ', formattedVideos); // Check formatted videos in console

  return (
    <View style={styles.profileVideoContainer}>
      <MasonryList
        images={formattedVideos} // Use formatted videos directly
        columns={2}
        spacing={2}
        backgroundColor="black"
        customImageComponent={({uri}) => (
          <TouchableOpacity activeOpacity={0.8} style={styles.videoContainer}>
            <Video
              source={{uri}}
              style={styles.video}
              resizeMode="cover"
              controls={true}
              onError={error => console.log('Video Error: ', error)}
            />
          </TouchableOpacity>
        )}
        imageContainerStyle={styles.videoContainer} // Apply similar styling as imageContainer in ProfileFeed
      />
    </View>
  );
};

const styles = StyleSheet.create({
  profileVideoContainer: {
    flex: 1,
    backgroundColor: 'black',
    paddingTop: 10,
    paddingHorizontal: 5,
  },
  videoContainer: {
    flex: 1,
    borderRadius: 20,
    overflow: 'hidden',
  },
  video: {
    width: '100%',
    aspectRatio: 1, // Square aspect ratio
  },
});

export default ProfileVideo;
