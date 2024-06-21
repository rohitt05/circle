/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import {View, Text, FlatList} from 'react-native';
import React from 'react';
import comments from '../../assets/data/comments.json';
import Comment from '../../components/Comment';
import Input from './Input';

const CommentScreen = () => {
  return (
    <View style={{flex: 1}}>
      <FlatList
        data={comments}
        renderItem={({item}) => <Comment comment={item} includeDetails />}
      />
      <Input />
    </View>
  );
};

export default CommentScreen;
