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
import ComboBox from '../filter/comboBox';

import { checkBookmarked } from '../scripts/filter';

const screenWidth = Dimensions.get("window").width;
const tileSize = 7*screenWidth/16;

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
        pushPopBookmarkedArticle(item, changeState, bookmarkBoolean)}
    }>
        <Ionicons size={30} color="#fff" style={styles.bookmarks} name={bookmarkFill['bmFill']}/>
      </TouchableHighlight>
      <Text ellipsizeMode = "tail" numberOfLines = {2} style={[styles.title, textColor]} >
        {item.title} </Text>
    </View>
  </TouchableOpacity>
);

export function pushPopBookmarkedArticle(item, changeState, bookmarkBoolean){
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
  changeState.setSelectedBookmark(!bookmarkBoolean.setBookmark);
  
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
      const backgroundColor = item.id === selectedId ?  "#fcfff7" : "#374a67";
      const color = item.id === selectedId ? 'black' : '#d7dfea';
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
      <FlatList 
          data={global.bookmarkedArticles} 
          renderItem={renderItem}
          keyExtractor={item => item.id}
          extraData={selectedId}
          numColumns={2}
          changeState={setSelectedBookmark}
    />
  </View>
  );
  }
  
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: '#ccf5f5',
        alignItems: 'center',
        justifyContent: 'center',
      },
      item: {
        backgroundColor: 'darkblue',
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
        fontSize: 15,
        textAlign: 'center',
        color: "white",
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
    