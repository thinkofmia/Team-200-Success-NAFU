import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, Image, Linking, Button } from 'react-native';

export default function Settings({navigation}) {
  return (
    <View style={styles.container}>
        <Text style={styles.eventsHeader}>What events are you interested in?</Text>
        <Button
          title="select"
          onPress={() => navigation.navigate('Preferences')}
        />
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
    backgroundColor: "#fff",
    alignItems: 'center',
    justifyContent: 'center',
  },
})