import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect, useRef } from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
  Dimensions,
  Image,
  TouchableHighlight,
  Animated

} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ComboBox from '../filter/comboBox';
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';

import { checkBookmarked } from '../scripts/filter';

const screenWidth = Dimensions.get("window").width;
const tileSize = 9*screenWidth/20;
const tileHeight = 9*screenWidth/20;

const FadeInView = (props) => {
  const fadeAnim = useRef(new Animated.Value(0)).current  // Initial value for opacity: 0

  React.useEffect(() => {
    Animated.timing(
      fadeAnim,
      {
        toValue: 1,
        duration: 700,
      }
    ).start();
  }, [fadeAnim])

  return (
    <Animated.View                 // Special animatable View
      style={{
        ...props.style,
        opacity: fadeAnim,         // Bind opacity to animated value
      }}
    >
      {props.children}
    </Animated.View>
  );
}

const Item = ({ item, onPress, backgroundColor, textColor, bookmarkFill, changeState, bookmarkBoolean}) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
    <Image
          style={styles.thumbnails}
          source={{
            uri:
                item.image
          }}
        />
    <View style={styles.textContent}>
      <TouchableHighlight onPress={() => {
        pushPopBookmarkedArticle(item, bookmarkBoolean)}
    }>
        <Ionicons size={30} color="#f9f4e1" style={styles.bookmarks} name={bookmarkFill['bmFill']}/>
      </TouchableHighlight>
      <Text ellipsizeMode = "tail" numberOfLines = {3} style={[styles.title, textColor]} >
        {item.title} </Text>
    </View>
    <View style={styles.textContent}>
        <Text ellipsizeMode = "tail" style={[styles.details, textColor]} >
          {item.price == 0 ? "Free" : item.price <20 ? "$" : item.price <100 ? "$$" : "$$$"
          } 
        </Text>
        <Text ellipsizeMode = "tail" style={[styles.details, textColor]} >
          {item.date.getDate()}/{item.date.getMonth()+1}/{item.date.getFullYear()}
        </Text>
      </View>
  </TouchableOpacity>
);

export function pushPopBookmarkedArticle(item, bookmarkBoolean){
  let itemList = global.bookmarkedArticles;
  // console.log("itemid", item.id);
  let itemExists = checkItemExists(itemList, item)
  // console.log("item exsits?", itemExists);
  if (!itemExists){
    itemList.push(item);
  } else {
    let itemIndex = getIndexOf(itemList, item);
    itemList.splice(itemIndex, 1);
  }
  // console.log('see global', itemList);
  console.log("see bookmark list ids: ", getAllIDs(itemList));
  
};

function getAllIDs(itemList){
  let idList = itemList.map((item) => {
    return item.id;
  });
  return idList;
}

function getIndexOf(itemList, item){
  return itemList.indexOf(item, 0);
}

function checkItemExists(itemList, item){
  let idList = getAllIDs(itemList);
  if (idList.includes(item.id)){
    return true;
  }
  return false;
}

export default function MainPage({navigation}) {
  const [selectedId, setSelectedId] = useState(null);
  const [setBookmark, setSelectedBookmark] = useState(false);
  const [, updateState] = React.useState();
  const forceUpdate = React.useCallback(() => updateState({}), []);

  
  setTimeout(
    () => forceUpdate(),
    600
  )
  //global.selectedArticle = selectedId;

  const renderItem = ({ item }) => {
      const backgroundColor = item.id === selectedId ?  "#fcfff7" : "#a3bcf9";
      const color = item.id === selectedId ? 'black' : '#f9f4e1';
      const bookmarked = checkBookmarked(item);
      const bmFill = bookmarked ? 'ios-bookmark' : 'ios-bookmark-outline';
      
      
      return (
        <Item
          item={item}
          onPress={() => {global.fakeArticle = item; navigation.navigate('SingleDisplay')}}
          backgroundColor={{ backgroundColor }}
          textColor={{ color }}
          bookmarkFill={{ bmFill }}
          changeState={{ setSelectedBookmark }}
          bookmarkBoolean={{ bookmarked }}
        />
      );
    };

return (
  <View style={styles.container}>
    <GestureRecognizer
    onSwipeUp={(state) => {
      console.log(state);
    }}
    onSwipeDown={(state) => {
      console.log(state)
    }}
    onSwipeLeft={(state) => {
      console.log(state);
      

    }}
    onSwipeRight={(state) => {
      console.log(state);
      navigation.navigate('Home');
    }}
    >
    <FadeInView>
    <Text style={styles.bookmarkHeader}>Bookmarks</Text>
      <FlatList 
          data={global.bookmarkedArticles} 
          renderItem={renderItem}
          keyExtractor={item => item.id}
          extraData={selectedId}
          numColumns={2}
          changeState={setSelectedBookmark}
    />
    </FadeInView>
    </GestureRecognizer>
  </View>
  );
  }
  
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: '#f9f4e1',
        alignItems: 'center',
        justifyContent: 'center',
      },
      item: {
        backgroundColor: "#dc8db9",
      textAlign: 'center',
      marginVertical: 8,
      marginHorizontal: 8,
      height: tileHeight, 
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
        flex: 0.9,
        textAlign: 'center',
        fontSize: 13,
        fontWeight: "bold"
      },
      thumbnails: {
        width: "100%",
        height: "65%",
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
      },
      textContent: {
        display: 'flex',
        flexDirection: 'row'
      },
      bookmarkHeader: {
        fontWeight: "bold",
        fontSize: 25,
        alignContent: "center",
        alignSelf: "center",
        paddingBottom: 20,
        paddingTop: 70,
        color: "#799cf6"
      },
      details: {
        fontSize: 11,
        flex: 0.9,
        textAlign: 'center',
      }
    });
    