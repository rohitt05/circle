/* eslint-disable prettier/prettier */
import {View, Text, Image, TextInput, StyleSheet} from 'react-native';
import React, {useState} from 'react';

const Input = () => {
  const [newComment, setNewComment] = useState('hello');

  const onPost = () => {
    console.warn('posting comment: ', newComment);
    setNewComment('');
  };

  return (
    <View style={styles.root}>
      <Image
        source={{uri: 'https://wallpaperaccess.com/full/840280.jpg'}}
        style={styles.inputProfileImage}
      />
      <View style={styles.inputContainer}>
        <TextInput
          value={newComment}
          onChangeText={setNewComment}
          placeholder="write your comment"
          placeholderTextColor="gray"
          style={styles.inputBox}
          multiline
        />
        <Text onPress={onPost} style={styles.buttonPost}>
          POST
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    padding: 5,
    borderTopWidth: 0.5,
    borderColor: '#D3DBDB',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  inputProfileImage: {
    width: 50,
    aspectRatio: 1,
    borderRadius: 25,
  },
  inputContainer: {
    flex: 1,
    marginLeft: 5,
    position: 'relative',
  },
  inputBox: {
    borderColor: '#D3DBDB',
    borderWidth: 1,
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 10,
    paddingRight: 60, // Ensure there's space for the POST button
    color: 'white',
  },
  buttonPost: {
    color: '#D3DBDB',
    position: 'absolute',
    right: 5,
    top: 5,
    fontWeight: '900',
    borderRadius: 10,
    backgroundColor: '#1B204C', // Optional: make the button background match the input box
    paddingHorizontal: 15, // Optional: add padding for better touch area
    paddingVertical: 10,
  },
});

export default Input;
