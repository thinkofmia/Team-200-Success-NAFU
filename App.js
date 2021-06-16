import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

import SingleDisplay from './pages/single-display';
import MainPage from "./pages/mainPage";
import Preferences from "./pages/preferences";

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MainStackNavigator } from "./navigation/StackNavigator";
import BottomTabNavigator from "./navigation/TabNavigator";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Splash from "./navigation/SplashStart";

//Import external scripts
import './global';
import './scripts/filter'
// other code
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode='none'>
          <Stack.Screen name="Splash" component={Splash} />
          <Stack.Screen headerMode='none' name="BottomTabNavigator" component={BottomTabNavigator} />
      </Stack.Navigator>
      
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
