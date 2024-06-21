/* eslint-disable prettier/prettier */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {Image, StyleSheet, Text, Pressable, View} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {IPost} from '../../types/models';
import DoublePressable from '../DoublePressable';
import Carousel from '../Carousel';
import VideoPlayer from '../VideoPlayer';
import VideoCarousel from '../VideoCarousel';
import Thoughts from '../Thoughts';

interface IFeedPost {
  post: IPost;
}

const FeedPost: React.FC<IFeedPost> = ({post}) => {
  const [isCaptionExpanded, setIsCaptionExpanded] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [aspectRatio, setAspectRatio] = useState<number | undefined>(undefined);

  const toggleCaptionExpanded = () => {
    setIsCaptionExpanded(!isCaptionExpanded);
  };

  const toggleLike = () => {
    setIsLiked(v => !v);
  };

  const handleImageLoad = (event: any) => {
    const {width, height} = event.nativeEvent.source;
    setAspectRatio(width / height);
  };

  let content = null;

  if (!post || !post.user) {
    return null;
  }

  if (post.image) {
    content = (
      <DoublePressable onDoublePress={toggleLike}>
        <Image
          source={{uri: post.image || 'default_image_url'}}
          style={[styles.contentImage, aspectRatio ? {aspectRatio} : null]}
          resizeMode="cover"
          onLoad={handleImageLoad}
          accessibilityLabel="Post Image"
        />
      </DoublePressable>
    );
  } else if (post.images) {
    content = <Carousel images={post.images} onDoublePress={toggleLike} />;
  } else if (post.video) {
    content = (
      <View style={styles.videoContainer}>
        <DoublePressable onDoublePress={toggleLike}>
          <VideoPlayer uri={post.video} />
        </DoublePressable>
      </View>
    );
  } else if (post.videos) {
    // Corrected to check for `post.videos`
    content = <VideoCarousel videos={post.videos} onDoublePress={toggleLike} />;
  } else if (post.thought) {
    content = (
      <DoublePressable onDoublePress={toggleLike}>
        <Thoughts thought={post?.thought} />
      </DoublePressable>
    );
  }

  return (
    <View style={styles.mainPostContainer}>
      {/* Header */}
      <View style={styles.headerSection}>
        <View style={styles.headerBox}>
          <Image
            source={{
              uri: post.user.profileImage || 'default_profile_image_url',
            }}
            style={styles.profilePicture}
            resizeMode="cover"
            accessibilityLabel="User Profile Picture"
          />
          <View style={styles.nameOfUserBox}>
            <Text style={styles.textName}>{post.user.name}</Text>
            <Text style={styles.textUserName}>@{post.user.username}</Text>
          </View>
          <View style={styles.threeDotBox}>
            <Text style={styles.hrOfPost}>{post.minHrAgo}</Text>
            <Entypo name="dots-three-vertical" size={18} color="gray" />
          </View>
        </View>
      </View>

      {/* Caption */}
      {!post.thought && post.caption && (
        <View style={styles.captionBox}>
          <Text
            numberOfLines={isCaptionExpanded ? 0 : 2}
            style={styles.captionText}>
            {post.caption}
          </Text>
          {post.caption && post.caption.length > 90 && (
            <Text style={styles.moreText} onPress={toggleCaptionExpanded}>
              {isCaptionExpanded ? 'less' : 'more'}
            </Text>
          )}
        </View>
      )}

      {/* Content */}
      <View style={styles.contentBox}>
        {content}

        {/* Interaction Bar */}
        <View style={styles.blurBar}>
          <View style={styles.threeIcon}>
            <Pressable onPress={toggleLike}>
              <Entypo
                name={isLiked ? 'heart' : 'heart-outlined'}
                size={26}
                color={isLiked ? '#D3DBDB' : 'white'}
                style={styles.icon}
                accessibilityLabel="Like Button"
              />
            </Pressable>
            <Text style={styles.noOfLikeLine}>{post.noOfLikes}</Text>
            <FontAwesome5
              name="comment"
              size={23}
              color="white"
              style={styles.icon}
              accessibilityLabel="Comment Button"
            />
            <Text style={styles.noOfLikeLine}>{post.noOfComments}</Text>
            <Ionicons
              name="arrow-redo-outline"
              size={24}
              color="white"
              style={styles.icon}
              accessibilityLabel="Share Button"
            />
          </View>
          <View style={styles.saveBox}>
            <MaterialCommunityIcons
              name="bookmark-multiple-outline"
              size={24}
              color="white"
              accessibilityLabel="Save Button"
            />
          </View>
        </View>
      </View>

      {/* Likes and Comments Count */}
      <View style={styles.noOfLikeCommentContainer}>
        {/* <View style={styles.noOfLikeBox}>
          <Text style={styles.noOfLikeLine}>
            {post.likes} likes & {post.noOfComments} comments
          </Text>
        </View> */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainPostContainer: {
    backgroundColor: 'rgba(0, 0, 0, 0.94)',
    borderRadius: 30,
    margin: 5,
  },
  headerSection: {},
  headerBox: {
    paddingTop: 10,
    paddingLeft: 10,
    paddingRight: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  profilePicture: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  nameOfUserBox: {
    marginHorizontal: 10,
  },
  textName: {
    color: 'white',
    fontWeight: '700',
    fontSize: 16,
  },
  textUserName: {
    color: 'gray',
  },
  threeDotBox: {
    marginLeft: 'auto',
    flexDirection: 'row',
    alignItems: 'center',
  },
  hrOfPost: {
    color: 'gray',
  },
  captionBox: {
    margin: 10,
  },
  captionText: {
    fontSize: 16,
    color: '#e6e6e6',
  },
  moreText: {
    color: 'blue',
  },
  contentBox: {
    padding: 10,
  },
  contentImage: {
    width: '100%',
    borderRadius: 30,
  },
  videoContainer: {
    // aspectRatio: 16 / 9, // Fixed aspect ratio for video player
    borderRadius: 30,
    overflow: 'hidden',
  },
  blurBar: {
    flexDirection: 'row',
    padding: 15,
    backgroundColor: 'rgba(26, 26, 46, 0.7)',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    justifyContent: 'space-between',
    marginTop: -55,
  },
  threeIcon: {
    flexDirection: 'row',
  },
  icon: {
    marginHorizontal: 10,
  },
  saveBox: {},
  noOfLikeCommentContainer: {
    marginBottom: 10,
  },
  noOfLikeBox: {
    marginLeft: 20,
  },
  noOfLikeLine: {
    fontSize: 16,
    color: 'white',
    marginRight: 5,
  },
});

export default FeedPost;
