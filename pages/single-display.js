import React, { useState, useEffect, useRef } from 'react';
import { Animated, View, StyleSheet, Text, Image, Linking, Button, ScrollView, TouchableHighlight
, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
//import TopNavigation from './top-navigation';

import { checkBookmarked } from '../scripts/filter';
import { pushPopBookmarkedArticle } from './bookmarksPage';

// define some constant
const BANNER_H = 350;

const HomeScreen = () => {
  const [, updateState] = React.useState();
  const forceUpdate = React.useCallback(() => updateState({}), []);

  const scrollA = useRef(new Animated.Value(0)).current;
  const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
  ];
  const bookmarked = checkBookmarked(global.fakeArticle);

  return (
    <View>
      <Animated.ScrollView 
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {y: scrollA}}}],
          {useNativeDriver: true},
        )}
        scrollEventThrottle={16}
        >
          <View style={styles.bannerContainer}>
            <Animated.Image 
              style = {styles.banner(scrollA)}
              source={{
                uri: global.fakeArticle.image
              }}
            />
          </View>
          <View style={styles.flexContainer}>
              <Text style={styles.eventsHeader}>{global.fakeArticle.title}</Text>
              
              <TouchableHighlight style={styles.bookmarkWrapper} onPress={() => {
                      pushPopBookmarkedArticle(global.fakeArticle, bookmarked);
                      setTimeout(
                        () => forceUpdate(),
                        600
                      );
                    }
                  }>
                  <Ionicons size={30} color="#6f8576" style={styles.bookmarks} name={bookmarked ? 'ios-bookmark' : 'ios-bookmark-outline'}/>
              </TouchableHighlight>
              <Text style={styles.subHeader}>
                <Text>Price: ${global.fakeArticle.price}</Text>{"\n"}
                <Text> Date: {global.fakeArticle.date.getDate()} {monthNames[global.fakeArticle.date.getMonth()]} {global.fakeArticle.date.getFullYear()}</Text>{"\n"}
                <Text> Category: {global.fakeArticle.category}</Text>
              </Text>
              <Text style={styles.eventsText}>{global.fakeArticle.text}</Text>
              <TouchableOpacity style={styles.linkButton}
              onPress={() => Linking.openURL(global.fakeArticle.link)} title="Link to event">
                <Text style = {styles.link}> Link to event </Text>
              </TouchableOpacity>
          </View>
      </Animated.ScrollView>
    </View>
  );
};

/*
export default function SingleDisplay({navigation}) {
  return (
      <View style={styles.container}>
        
        <View style={styles.imgBackground}>
            <Image
              style={styles.eventsImage}
              source={{
                uri: global.fakeArticle.image
              }}
            />
        </View>
          
        <ScrollView style={styles.scrollView}>
          
          <View style={styles.flexContainer}>
              <Text style={styles.eventsHeader}>{global.fakeArticle.title}</Text>
              <Ionicons size={30} color="#4F8EF7" style={styles.bookmarks} name='ios-bookmarks' />
              <Text style={styles.eventsText}>{global.fakeArticle.date}</Text>
              <Text style={styles.eventsText}>{global.fakeArticle.text}</Text>
              <Button onPress={() => Linking.openURL(global.fakeArticle.link)} title="Link to Party"/>
          </View>
        </ScrollView>
      </View>
    );
  }
  */

const styles=StyleSheet.create({
  bannerContainer: {
    marginTop: -1000,
    paddingTop: 1000,
    alignItems: 'center',
    overflow: 'hidden',
  },

  banner: scrollA => ({
    height: BANNER_H,
    width: '150%',
    transform: [
      {
        translateY: scrollA.interpolate({
          inputRange: [-BANNER_H, 0, BANNER_H, BANNER_H + 1],
          outputRange: [-BANNER_H / 2, 0, BANNER_H * 0.75, BANNER_H * 0.75],
        }),
      },
      {
        scale: scrollA.interpolate({
          inputRange: [-BANNER_H, 0, BANNER_H, BANNER_H + 1],
          outputRange: [2, 1, 0.5, 0.5],
        }),
      },
    ],
  }),

  bookmarks: {
    width: 50,
    height: 50,
    marginTop: 10,
    marginLeft: 0,
  },
  bookmarkWrapper: {
    marginBottom: 0,
    marginLeft: 0,
    fontSize: 16,
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: "center",
  },
  /*
  imgBackground:{
    width: "100%",
    height: "50%",
    backgroundColor: "blue",
  },
  */
  flexContainer: {
      display: "flex",
      backgroundColor: "#f9f4e1"
  },
  eventsHeader: {
    position: 'relative',
    fontSize: 30,
    fontWeight: "bold",
    marginTop: 20,
    textAlign: 'center',
    padding: 10,
  },
  /*
  linkText: {
      color: "blue",
      fontWeight: "bold",
  },*/
  eventsText: {
    paddingBottom: 10,
    paddingLeft: 10,
    paddingRight: 10,
    fontSize: 15,
    marginTop: 20,
    textAlign: 'justify',
  },
  subHeader : {
    paddingBottom: 0,
    marginLeft: 0,
    marginRight: 15,
    fontSize: 15,
    marginTop: 0,
    textAlign: 'center',
    fontWeight: "bold",
  },
  /*
  eventsImage: {
    height: "100%",
    width: "100%",
    alignSelf: 'center',
    borderColor: 'white',
    borderWidth: 5,
  },*/
  container: {
    flex: 1,
    backgroundColor: '#f9f4e1',
    alignItems: 'center',
    justifyContent: 'center',
  },
  link :{ 
    alignItems: "center",
    color: "#f9f4e1",
    alignSelf: "center",
    justifyContent: "center"
  },
  linkButton :{
    backgroundColor: "#6f8576",
    color: "#6f8576" ,
    width: "100%" ,
    height: 40,
    justifyContent: "center" 
  }
  
})

export default HomeScreen;