// ./navigation/TabNavigator.js

import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from 'react-native-vector-icons/Ionicons';

import { MainStackNavigator, BookmarksStackNavigator, SettingsStackNavigator } from "./StackNavigator";

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={({ route }) => ({
        backgroundColor: 'red',
        gestureDirection: 'horizontal',
        cardStyleInterpolator: ({ current, layouts }) => {
          return {
            cardStyle: {
              transform: [
                {
                  translateX: current.progress.interpolate({
                    inputRange: [0, 1],
                    outputRange: [layouts.screen.width, 0],
                  }),
                },
              ],
            },
          };
        },
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Preferences') {
            iconName = focused ? 'add-circle' : 'add-circle-outline';
          } 
          else if (route.name === 'Home') {
            iconName = focused ? 'ios-home' : 'ios-home-outline';
          }
          else if (route.name === 'Bookmarks') {
            iconName = focused ? 'ios-bookmarks' : 'ios-bookmarks-outline';
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: '#658576',
        inactiveTintColor: '#658576',
      }}>
      <Tab.Screen name="Preferences" component={SettingsStackNavigator} />
      <Tab.Screen name="Home" component={MainStackNavigator} />
      <Tab.Screen name="Bookmarks" component={BookmarksStackNavigator} />  
    </Tab.Navigator>
  );
};



export default BottomTabNavigator;
