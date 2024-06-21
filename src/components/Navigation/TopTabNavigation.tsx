/* eslint-disable prettier/prettier */
/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable semi */
import {StyleSheet} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import ProfileFeed from '../../screens/ProfilePageTTN/ProfileFeed';
import ProfileVideo from '../../screens/ProfilePageTTN/ProfileVideo';
import ProfileThought from '../../screens/ProfilePageTTN/ProfileThought';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

// Create the top tab navigator
const Tab = createMaterialTopTabNavigator();

function TabGroup() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarStyle: styles.tabBarStyle,
        tabBarIndicatorStyle: styles.tabBarIndicatorStyle,
        tabBarLabelStyle: styles.tabBarLabelStyle,
        tabBarActiveTintColor: '#fff', // Active tab label color
        tabBarInactiveTintColor: '#888', // Inactive tab label color
        tabBarIcon: ({color, size}) => {
          let iconName;
          let IconComponent;

          if (route.name === 'Images') {
            iconName = 'images-outline';
            IconComponent = Ionicons;
          } else if (route.name === 'Videos') {
            iconName = 'movie-open-star-outline';
            IconComponent = MaterialCommunityIcons;
          } else if (route.name === 'Thoughts') {
            iconName = 'typewriter';
            IconComponent = MaterialCommunityIcons;
          }

          // Return the icon component
          return <IconComponent name={iconName} size={24} color={color} />;
        },
        tabBarShowLabel: false, // Hide the tab labels
      })}
      style={styles.rootTopTabNavContainer}>
      <Tab.Screen name="Images" component={ProfileFeed} />
      <Tab.Screen name="Videos" component={ProfileVideo} />
      <Tab.Screen name="Thoughts" component={ProfileThought} />
    </Tab.Navigator>
  );
}

const Navigation = () => {
  return (
    <NavigationContainer>
      <TabGroup />
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  rootTopTabNavContainer: {
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
    top: 10,
  },
  tabBarStyle: {
    backgroundColor: 'black', // Tab bar background color
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
  },
  tabBarIndicatorStyle: {
    backgroundColor: 'white', // Indicator color
    height: 2, // Indicator height
  },
  tabBarLabelStyle: {
    fontSize: 14,
    fontWeight: 'bold',
  },
});

export default Navigation;
