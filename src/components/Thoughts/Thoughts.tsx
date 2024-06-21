/* eslint-disable prettier/prettier */
import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

interface ThoughtProps {
  thought?: string;
}

const Thoughts = ({thought}: ThoughtProps) => {
  return (
    <View style={styles.container}>
      {thought ? (
        <View style={styles.thoughtContainer}>
          <FontAwesome
            name="quote-left"
            size={30}
            color="#FFD700"
            style={styles.icon}
          />
          <Text style={styles.thoughtText}>{thought}</Text>
        </View>
      ) : (
        <Text style={styles.noThoughtText}>No thought available</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1B204C',
    padding: 30,
    borderRadius: 30,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.8,
    shadowRadius: 4,
    elevation: 5,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 60,
  },
  thoughtContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    padding: 10,
  },
  icon: {
    marginTop: -10, // Move the icon slightly above the text
  },
  thoughtText: {
    color: '#E0E5E6',
    fontSize: 18,
    fontStyle: 'italic',
    fontWeight: '500',
    textAlign: 'left',
    paddingHorizontal: 10,
    flex: 1,
    lineHeight: 25,
  },
  noThoughtText: {
    color: '#E0E5E6',
    fontSize: 18,
    textAlign: 'center',
  },
});

export default Thoughts;
