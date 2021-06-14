import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, Image, Linking, Button } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import * as WebBrowser from 'expo-web-browser';

const TEST_EVENT = {
    id : "1",
    title : "Polar Bear found drinking by West Coast Park",
    image : 'https://www.themebeta.com/media/cache/400x225/files/windows/images/201907/26/3872e0062b2df0aecdd5b6568f5e16d9.jpeg',
    text : "Wanna get drunk and groove with polar bears on a Monday Blues in a Post Covid Era? Join us and DJ Magnus as we set up a chilly bar for you in Magnus's Fusion Bar today. Register now!",
    link : 'https://steamcommunity.com/id/Magfuse'
}

export default function SingleDisplay({navigation}) {
  return (
    <View style={styles.container}>
        <Text style={styles.eventsHeader}>Polar Bear found drinking by West Coast Park</Text>
        <View style={styles.imgBackground}>
          <Image
            style={styles.eventsImage}
            source={{
              uri:
                'https://www.themebeta.com/media/cache/400x225/files/windows/images/201907/26/3872e0062b2df0aecdd5b6568f5e16d9.jpeg'
            }}
          />
        </View>
        <View style={styles.flexContainer}>
            <Text style={styles.eventsText}>Wanna get drunk and groove with polar bears on a Monday Blues in a Post Covid Era? Join us and DJ Magnus as we set up a chilly bar for you in <Text style={styles.linkText} onPress={() => Linking.openURL('https://steamcommunity.com/id/Magfuse')}>Magnus's Fusion Bar </Text>today. Register now!</Text>
            <Button onPress={() => Linking.openURL('https://steamcommunity.com/id/Magfuse')} title="Link to Party"/>
        </View>
    </View>
    );
  }

const styles=StyleSheet.create({
  imgBackground:{
    width: "90%",
    height: "50%",
    backgroundColor: "blue",
  },
  flexContainer: {
      display: "flex",
  },
  eventsHeader: {
    fontSize: 40,
    fontWeight: "bold",
    top: 0,
  },
  linkText: {
      color: "blue",
      fontWeight: "bold",
  },
  eventsText: {
    padding: 10,
    fontSize: 15,
    marginTop: 20,
  },
  eventsImage: {
    height: "100%",
    width: "100%",
    alignSelf: 'center',
    marginTop: 10,
    borderColor: 'white',
    borderWidth: 2,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})