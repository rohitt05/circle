/* eslint-disable prettier/prettier */
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import user from '../../assets/data/user.json';

// Define the type for the props for CustomInput
interface ICustomInput {
  label: string;
  placeholder: string;
  multiline?: boolean;
}

const CustomInput = ({label, placeholder, multiline = false}: ICustomInput) => {
  return (
    <View style={styles.inputContainer}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        placeholder={placeholder}
        placeholderTextColor="#888"
        style={[styles.input, multiline && styles.multilineInput]}
        multiline={multiline}
      />
    </View>
  );
};

const EditProfileScreen = () => {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.editPageContainer}>
        <Image source={{uri: user.profileImage}} style={styles.profileImage} />
        <Text style={styles.changeProfileText}>Change Profile Picture</Text>
        <CustomInput label="Name" placeholder="Enter your name" />
        <CustomInput label="Username" placeholder="Enter your username" />
        <CustomInput label="Link" placeholder="Add link here" />
        <CustomInput label="Bio" placeholder="Write about yourself" multiline />
      </ScrollView>
      <TouchableOpacity style={styles.updateButton}>
        <Text style={styles.updateButtonText}>Update</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  editPageContainer: {
    alignItems: 'center',
    padding: 20,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 30,
    marginTop: 20,
    borderWidth: 2,
    borderColor: '#D3DBDB',
  },
  changeProfileText: {
    fontSize: 18,
    color: '#D3DBDB',
    padding: 10,
    marginTop: 10,
    fontWeight: 'bold',
  },
  inputContainer: {
    alignSelf: 'stretch',
    marginVertical: 10,
    paddingHorizontal: 10,
  },
  label: {
    fontSize: 16,
    color: '#D3DBDB',
    marginBottom: 5,
  },
  input: {
    height: 40,
    borderColor: '#555',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    color: '#fff',
    backgroundColor: '#222',
  },
  multilineInput: {
    height: 80,
    textAlignVertical: 'top', // Ensure the text starts at the top of the input
  },
  updateButton: {
    backgroundColor: '#1B204C',
    padding: 15,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 20,
    borderRadius: 10,
  },
  updateButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default EditProfileScreen;
