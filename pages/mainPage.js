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
  Image

} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

const screenWidth = Dimensions.get("window").width;
const numColumns = 14;
const tileSize = 7*screenWidth/16;

const Item = ({ item, onPress, backgroundColor, textColor }) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
    <Image
          style={styles.thumbnails}
          source={{
            uri:
                item.image
          }}
        />
    <Text style={[styles.title, textColor]}>{item.title}</Text>
  </TouchableOpacity>
);

export default function MainPage({navigation}) {
  const [selectedId, setSelectedId] = useState(null);

  //global.selectedArticle = selectedId;

  const renderItem = ({ item }) => {
      const backgroundColor = item.id === selectedId ?  "#fcfff7" : "#21a0a0";
      const color = item.id === selectedId ? 'black' : 'black';
  
      return (
        <Item
          item={item}
          onPress={() => {global.fakeArticle = item; navigation.navigate('SingleDisplay')}}
          backgroundColor={{ backgroundColor }}
          textColor={{ color }}
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
      alignContent: "center"
    },
    title: {
      padding: 5,
      flex: 1,
      textAlign: 'center',
    },
    thumbnails: {
      width: "100%",
      height: "70%",
    },
  });
  