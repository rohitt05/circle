/* eslint-disable prettier/prettier */
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Linking,
  ScrollView,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import user from '../../assets/data/user.json';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import TopTabNavigation from '../../components/Navigation/TopTabNavigation';

const ProfileScreen = () => {
  // Handle press to open user link
  const handlePress = () => {
    Linking.openURL(user.link);
  };

  // Render profile image and edit profile button
  const renderProfileImageAndEdit = () => (
    <View style={styles.profileImageContainer}>
      <Image
        source={{uri: user.profileImage}}
        style={styles.userProfileImage}
      />
      <TouchableOpacity style={styles.editContainer} onPress={() => {}}>
        <Text style={styles.editText}>Edit Profile</Text>
        <FontAwesome6
          name="user-pen"
          size={16}
          color="#4E5788"
          style={styles.editIcon}
        />
      </TouchableOpacity>
    </View>
  );

  // Render user stats boxes (Posts, Circle, Followers, Following)
  const renderUserStats = () => (
    <View style={styles.userStatsContainer}>
      <View style={styles.userStatsBox}>
        <Text style={styles.userStatNumber}>{user.posts.length}</Text>
        <Text style={styles.userStatName}>Posts</Text>
      </View>
      <View style={styles.userStatsBox}>
        <Text style={styles.userStatNumber}>{user.circle.length}</Text>
        <Text style={styles.userStatName}>Circle</Text>
      </View>
      <View style={styles.userStatsBox}>
        <Text style={styles.userStatNumber}>{user.followers.length}</Text>
        <Text style={styles.userStatName}>Followers</Text>
      </View>
      <View style={styles.userStatsBox}>
        <Text style={styles.userStatNumber}>{user.following.length}</Text>
        <Text style={styles.userStatName}>Following</Text>
      </View>
    </View>
  );

  return (
    <ScrollView style={styles.profileScreenContainer}>
      {/* User details section */}
      <View style={styles.userDetailsPart}>
        {/* Back and setting icons */}
        <View style={styles.backAndSettingIconBar}>
          <TouchableOpacity style={styles.iconButton}>
            <Ionicons name="arrow-back" size={25} color="#fff" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton}>
            <Entypo
              name="sound-mix"
              size={25}
              color="#fff"
              style={styles.rotatedIcon}
            />
          </TouchableOpacity>
        </View>

        {/* User profile image and edit */}
        <View style={styles.userDetailsBox}>
          {renderProfileImageAndEdit()}
          <View style={styles.userNameDetails}>
            <Text style={styles.nameOfUser}>{user.name}</Text>
            <Text style={styles.username}>@{user.username}</Text>

            {/* Buttons: Add to Circle and Message */}
            <View style={styles.buttonBoxContainer}>
              <LinearGradient
                colors={['#2C2F60', '#4E5788']}
                style={styles.gradientButton}>
                <TouchableOpacity style={styles.actionButton}>
                  <Text style={styles.actionButtonText}>Add to Circle</Text>
                </TouchableOpacity>
              </LinearGradient>
              <LinearGradient
                colors={['#2C2F60', '#4E5788']}
                style={styles.gradientButton}>
                <TouchableOpacity style={styles.actionButton}>
                  <Text style={styles.actionButtonText}>Message</Text>
                </TouchableOpacity>
              </LinearGradient>
            </View>

            {/* Follow button */}
            <View style={styles.followButton}>
              <LinearGradient
                colors={['#1B204C', '#4E5788']}
                style={styles.gradientButton}>
                <TouchableOpacity style={styles.followactionButton}>
                  <Text style={styles.followactionButtonText}>Follow</Text>
                </TouchableOpacity>
              </LinearGradient>
            </View>
          </View>
        </View>

        {/* User bio and link */}
        <View style={styles.userBioLinkBox}>
          <Text style={styles.userBioText}>{user.bio}</Text>
          <TouchableOpacity onPress={handlePress}>
            <Text style={styles.userLinkText}>{user.link}</Text>
          </TouchableOpacity>
        </View>

        {/* User stats */}
        {renderUserStats()}
      </View>

      {/* TopTabNavigation */}
      <View style={styles.topTabNavContainer}>
        <TopTabNavigation />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  profileScreenContainer: {
    flex: 1,
    backgroundColor: 'black',
  },
  userDetailsPart: {
    backgroundColor: '#1B204C',
    padding: 20,
    borderRadius: 35,
    margin: 1,
    top: 5,
  },
  backAndSettingIconBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  iconButton: {
    padding: 0,
    marginTop: -5,
  },
  rotatedIcon: {
    transform: [{rotate: '90deg'}],
  },
  userDetailsBox: {
    flexDirection: 'row',
    top: 5,
  },
  profileImageContainer: {
    flexDirection: 'column',
  },
  userProfileImage: {
    width: 100,
    aspectRatio: 1,
    borderRadius: 20,
    marginRight: 20,
  },
  userNameDetails: {
    left: 20,
    flex: 1,
  },
  nameOfUser: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  username: {
    color: 'gray',
    fontSize: 14,
    top: 2,
  },
  buttonBoxContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 15,
  },
  gradientButton: {
    borderRadius: 30,
    overflow: 'hidden',
    marginHorizontal: 5,
    right: 10,
  },
  actionButton: {
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 30,
    alignItems: 'center',
  },
  actionButtonText: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
  },
  followButton: {
    paddingVertical: 8,
    paddingHorizontal: 15,
  },
  followactionButton: {
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 30,
    alignItems: 'center',
  },
  followactionButtonText: {
    fontSize: 14,
    color: 'white',
    fontWeight: 'bold',
  },
  userBioLinkBox: {
    padding: 10,
    top: 3,
  },
  userBioText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 16,
  },
  userLinkText: {
    color: '#D3D3D3',
    textAlign: 'center',
    fontSize: 16,
    textDecorationLine: 'underline',
  },
  userStatsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    top: 10,
    paddingBottom: 10,
  },
  userStatsBox: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  userStatNumber: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  userStatName: {
    color: '#D3D3D3',
    fontSize: 16,
    fontWeight: 'light',
  },
  editContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 15,
    left: 5,
  },
  editText: {
    color: '#4E5788',
    fontSize: 14,
    // textDecorationLine: 'underline',
  },
  editIcon: {
    marginLeft: 5, // Adjust margin as needed
    marginTop: -2,
  },
  topTabNavContainer: {
    flex: 1,
    // paddingTop: 10,
    // borderRadius: 30,
  },
});

export default ProfileScreen;
