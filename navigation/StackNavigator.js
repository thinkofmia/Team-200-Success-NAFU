import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import SingleDisplay from '../pages/single-display';
import MainPage from "../pages/mainPage";
import Preferences from "../pages/preferences";

const Stack = createStackNavigator();

const MainStackNavigator = () => {
    return (
        <Stack.Navigator>
        <Stack.Screen name="Home" component={MainPage}/>
        <Stack.Screen name="SingleDisplay" component={SingleDisplay}/>
        <Stack.Screen name="Preferences" component={Preferences}/>
    </Stack.Navigator>
    );
  }
  
  const BookmarksStackNavigator = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen name="Bookmarks" component={MainPage} />
      </Stack.Navigator>
    );
  }

  const SettingsStackNavigator = () => {
    return (
      <Stack.Navigator>
        <Stack.Screen name="Settings" component={Preferences} />
      </Stack.Navigator>
    );
  }
  
  export { MainStackNavigator, BookmarksStackNavigator, SettingsStackNavigator };
