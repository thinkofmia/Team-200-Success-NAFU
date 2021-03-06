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
    <Stack.Navigator headerMode='screen' screenOptions={{headerStyle:{ backgroundColor: '#658576' }}}> 
        <Stack.Screen 
          name="Home" 
          component={MainPage}
          options={{title: 'Home', headerShown: false}} 
          />

        <Stack.Screen 
          name="SingleDisplay" 
          component={SingleDisplay}
          options={{title: global.fakeArticle.title}}
          />
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
