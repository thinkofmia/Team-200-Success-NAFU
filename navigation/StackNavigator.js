import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import SingleDisplay from '../pages/single-display';
import MainPage from "../pages/mainPage";
import Preferences from "../pages/preferences";
import Settings from "../pages/settingsPage";
import Bookmarks from "../pages/bookmarksPage";

const Stack = createStackNavigator();

const MainStackNavigator = () => {
    return (
        <Stack.Navigator headerMode='none'>
        <Stack.Screen name="Home" component={MainPage} />
        <Stack.Screen 
          name="SingleDisplay" 
          component={SingleDisplay}/>
    </Stack.Navigator>
    );
  }
  
  const BookmarksStackNavigator = () => {
    return (
      <Stack.Navigator headerMode='none'>
        <Stack.Screen name="Bookmarks" component={Bookmarks} />
      </Stack.Navigator>
    );
  }

  const SettingsStackNavigator = () => {
    return (
      <Stack.Navigator headerMode='none'>
        <Stack.Screen name="Preferences" component={Preferences}/>
        <Stack.Screen name="Settings" component={Settings} />
      </Stack.Navigator>
    );
  }
  
  export { MainStackNavigator, BookmarksStackNavigator, SettingsStackNavigator };
