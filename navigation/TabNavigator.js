// ./navigation/TabNavigator.js

import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from 'react-native-vector-icons/Ionicons';

import { MainStackNavigator, BookmarksStackNavigator, SettingsStackNavigator } from "./StackNavigator";

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Settings') {
            iconName = focused ? 'ios-information-circle' : 'ios-information-circle-outline';
          } 
          else if (route.name === 'Home') {
            iconName = focused ? 'ios-home' : 'ios-home-outline';
          }
          else if (route.name === 'Bookmarks') {
            iconName = focused ? 'ios-bookmark' : 'ios-bookmark-outline';
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
      }}>
      <Tab.Screen name="Home" component={MainStackNavigator} />
      <Tab.Screen name="Bookmarks" component={BookmarksStackNavigator} />
      <Tab.Screen name="Settings" component={SettingsStackNavigator} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
