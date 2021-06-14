import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, Image, Linking, Button } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import * as WebBrowser from 'expo-web-browser';

export default function SingleDisplay({navigation}) {
  return (
    <View style={styles.container}>
        <Text style={styles.eventsHeader}>{global.fakeArticle.title}</Text>
        <View style={styles.imgBackground}>
          <Image
            style={styles.eventsImage}
            source={{
              uri:
              global.fakeArticle.image
            }}
          />
        </View>
        <View style={styles.flexContainer}>
            <Text style={styles.eventsText}>{global.fakeArticle.text}</Text>
            <Button onPress={() => Linking.openURL(global.fakeArticle.link)} title="Link to Party"/>
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