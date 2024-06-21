/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';
import comments from '../../assets/data/comments.json';
import Comment from '../../components/Comment';
import Input from './Input';

const CommentScreen = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={comments}
        renderItem={({item}) => <Comment comment={item} includeDetails />}
        keyExtractor={item => item.id.toString()} // Assuming each comment has a unique 'id'
      />
      <Input />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default CommentScreen;
