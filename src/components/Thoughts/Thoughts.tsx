/* eslint-disable prettier/prettier */
import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

interface ThoughtProps {
  thought?: string;
}

const Thoughts = ({thought}: ThoughtProps) => {
  return (
    <View style={styles.container}>
      {thought ? (
        <Text style={styles.thoughtText}>
          <Text style={styles.hifin}>" </Text>
          {thought}
        </Text>
      ) : (
        <Text>No thought available</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1B204C',
    padding: 50,

    borderRadius: 30,
    shadowColor: '#fff',
  },
  hifin: {
    fontWeight: 'bold',
    fontStyle: 'italic',
    fontSize: 30,
  },
  thoughtText: {
    color: '#E0E5E6', // Set the text color to white
    fontSize: 18,
    fontStyle: 'italic',
    fontWeight: '500',
    verticalAlign: 'middle',
    flex: 1,
    padding: 25,
    textAlign: 'auto',
  },
});

export default Thoughts;
