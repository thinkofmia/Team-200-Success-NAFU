import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
  Dimensions,
  Image,
  TouchableHighlight

} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

const screenWidth = Dimensions.get("window").width;
const numColumns = 14;
const tileSize = 7*screenWidth/16;
let fill = false;

const Item = ({ item, onPress, backgroundColor, textColor, bookmarkFill }) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
    <Image
          style={styles.thumbnails}
          source={{
            uri:
                item.image
          }}
        />
    <View style={styles.textContent}>
      <Text style={[styles.title, textColor]}>{item.title}</Text>
      <TouchableHighlight onPress={changeBookmarkState(item)}>
        <Ionicons size={30} color="#fff" style={styles.bookmarks} name={bookmarkFill['bmFill']} />
      </TouchableHighlight>
    </View>
  </TouchableOpacity>
);

function changeBookmarkState(item){
  fill = !fill;
  if (fill){
    global.bookmarkedArticle.push(item);
  }
};

export default function MainPage({navigation}) {
  const [selectedId, setSelectedId] = useState(null);

  //global.selectedArticle = selectedId;

  const renderItem = ({ item }) => {
      const backgroundColor = item.id === selectedId ?  "#fcfff7" : "#21a0a0";
      const color = item.id === selectedId ? 'black' : 'black';
      const bmFill = fill ? 'ios-bookmarks' : 'ios-bookmarks-outline';
  
      return (
        <Item
          item={item}
          onPress={() => {global.fakeArticle = item; navigation.navigate('SingleDisplay')}}
          backgroundColor={{ backgroundColor }}
          textColor={{ color }}
          bookmarkFill={{ bmFill }}
        />
      );
    };

return (
  <View style={styles.container}>
      <FlatList
          data={global.fakeFeed}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          extraData={selectedId}
          numColumns={2}
    />
  </View>
  );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    item: {
      backgroundColor: "#dc8db9",
      width: "40%",
      height: 360,
      textAlign: 'center',
      marginVertical: 8,
      marginHorizontal: 8,
      height: tileSize, 
      width: tileSize, 
      padding: 2,
      alignContent: "center",
      borderRadius: 15,
      shadowColor: "#000",
      shadowOffset: {width: 15, height: 15},
      shadowOpacity: 0.3,
      shadowRadius: 5
    },
    title: {
      padding: 5,
      flex: 1,
      textAlign: 'center',
    },
    thumbnails: {
      width: "100%",
      height: "70%",
      borderTopLeftRadius: 15,
      borderTopRightRadius: 15
    },
    textContent: {
      display: 'flex',
      flexDirection: 'row'
    }
  });
  