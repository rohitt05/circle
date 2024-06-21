/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {View, Text, StyleSheet, Image, Pressable} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {IComment} from '../../types/models';

interface ICommentProps {
  comment: IComment;
  includeDetails?: boolean;
}

const Comment: React.FC<ICommentProps> = ({
  comment,
  includeDetails = false,
}) => {
  const [isLiked, setIsLiked] = useState(false);

  const toggleLike = () => {
    setIsLiked(prevState => !prevState);
  };

  return (
    <View style={styles.commentContainer}>
      <View style={styles.comment}>
        {includeDetails && (
          <Image
            source={{uri: comment.user.profileImage}}
            style={styles.commentUserImage}
          />
        )}
        <View style={styles.commentDetails}>
          <Text style={styles.commentUserName}>{comment.user.username}</Text>
          <Text style={styles.commentText}>{comment.comment}</Text>
          {includeDetails && (
            <View style={styles.secondaryCommentContainer}>
              <Text style={styles.secondaryCommentText}>2d</Text>
              <Text style={styles.secondaryCommentText}>100 likes</Text>
              <Text style={styles.secondaryCommentText}>reply</Text>
            </View>
          )}
        </View>
        <Pressable onPress={toggleLike} hitSlop={5}>
          <AntDesign
            name={isLiked ? 'heart' : 'hearto'}
            style={styles.icon}
            color={isLiked ? '#D3DBDB' : 'white'}
          />
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  commentContainer: {
    backgroundColor: '#000',
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  comment: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  commentUserImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  commentDetails: {
    flex: 1,
    marginLeft: 10,
  },
  commentUserName: {
    fontWeight: 'bold',
    marginBottom: 2,
    fontSize: 16,
    color: 'white',
  },
  commentText: {
    color: 'white',
    fontSize: 14,
    lineHeight: 18,
  },
  secondaryCommentContainer: {
    flexDirection: 'row',
    marginTop: 5,
  },
  secondaryCommentText: {
    color: 'gray',
    marginRight: 10,
    fontSize: 12,
  },
  icon: {
    marginLeft: 'auto',
    fontSize: 18,
  },
});

export default Comment;
