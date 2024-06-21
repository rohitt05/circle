/* eslint-disable prettier/prettier */
import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import user from '../../assets/data/user.json';

const ProfileThought = () => {
  // Filter posts with thoughts and format them for rendering
  const postsWithThoughts = user.posts.filter(post => post.thought);
  const formattedThoughts = postsWithThoughts.map(post => ({
    key: post.id.toString(), // Assuming each post has a unique ID
    thought: post.thought,
  }));

  // Render item for FlatList
  const renderItem = ({item}) => (
    <View style={styles.thoughtContainer}>
      <FontAwesome
        name="quote-left"
        size={16}
        color="#FFD700"
        style={styles.icon}
      />
      <Text style={styles.thoughtText}>{item.thought}</Text>
    </View>
  );

  return (
    <View style={styles.profileThoughtContainer}>
      <FlatList
        data={formattedThoughts} // Use formatted thoughts directly
        renderItem={renderItem} // Render each thought item
        keyExtractor={item => item.key} // Key extractor for list items
        contentContainerStyle={styles.listContainer} // Container style for list
      />
    </View>
  );
};

const styles = StyleSheet.create({
  profileThoughtContainer: {
    flex: 1,
    backgroundColor: 'black',
    paddingTop: 10,
    paddingHorizontal: 5,
  },
  listContainer: {
    paddingVertical: 10,
  },
  thoughtContainer: {
    flexDirection: 'row', // Align items horizontally
    alignItems: 'center', // Center align items vertically
    borderRadius: 25,
    backgroundColor: '#1B204C',
    padding: 20,
    marginVertical: 5,
  },
  icon: {
    marginRight: 5, // Add space between icon and text
    left: 5,
    marginTop: -15,
  },
  thoughtText: {
    color: 'white',
    left: 5,
    fontSize: 14,
  },
});

export default ProfileThought;
