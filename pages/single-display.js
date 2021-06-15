import React, { useState, useEffect } from 'react';
import { Animated, View, StyleSheet, Text, Image, Linking, Button, ScrollView, FlatList } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function SingleDisplay({navigation}) {
  return (
      <View style={styles.container}>
          <Text style={styles.eventsHeader}>{global.fakeArticle.title}</Text>
          <View style={styles.imgBackground}>
            <Image
              style={styles.eventsImage}
              source={{
                uri: global.fakeArticle.image
              }}
            />
          </View>
          <Ionicons size={30} color="#4F8EF7" style={styles.bookmarks} name='ios-bookmarks' />
        <ScrollView style={styles.scrollView}>
          <View style={styles.flexContainer}>
              <Text style={styles.eventsText}>{global.fakeArticle.date}</Text>
              <Text style={styles.eventsText}>{global.fakeArticle.text}</Text>
              <Button onPress={() => Linking.openURL(global.fakeArticle.link)} title="Link to Party"/>
          </View>
          </ScrollView>
      </View>
    );
  }

const styles=StyleSheet.create({
  bookmarks: {
    width: 50,
    height: 50,
    marginTop: 0,
  },
  imgBackground:{
    width: "100%",
    height: "50%",
    backgroundColor: "blue",
  },
  flexContainer: {
      display: "flex",
  },
  eventsHeader: {
    fontSize: 30,
    fontWeight: "bold",
    marginTop: 50,
    textAlign: 'center',
  },
  linkText: {
      color: "blue",
      fontWeight: "bold",
  },
  eventsText: {
    paddingBottom: 10,
    paddingLeft: 5,
    fontSize: 15,
    marginTop: 0,
  },
  eventsImage: {
    height: "100%",
    width: "100%",
    alignSelf: 'center',
    borderColor: 'white',
    borderWidth: 5,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})