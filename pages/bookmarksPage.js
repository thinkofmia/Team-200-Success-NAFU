import React, { useState, useEffect } from 'react';
import { FlatList, StyleSheet, Text, View, TouchableOpacity, Image, TouchableHighlight} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { changeBookmarkState } from './mainPage';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Item = ({ item, onPress }) => (
  <TouchableOpacity style={styles.item} onPress={onPress}>
    <Image
          style={styles.thumbnails}
          source={{
            uri:
                item.image
          }}
        />
    <View style={styles.textContent}>
      <Text style={styles.title}>{item.title}</Text>
      <TouchableHighlight>
        <Ionicons size={30} color="#4F8EF7" style={styles.bookmarks} name='ios-bookmarks' />
      </TouchableHighlight>
    </View>
  </TouchableOpacity>
);

export default function Bookmarks({navigation}) {

  const renderItem = ({ item }) => {
    return ( 
      <Item
        item={item}
        onPress={() => {global.fakeArticle = item;navigation.navigate('SingleDisplay');}}
      />
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
          data={global.bookmarkedArticle}
          renderItem={renderItem}
          keyExtractor={item => item.id}
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
        width: "90%",
        height: 360,
        textAlign: 'center',
        marginVertical: 8,
        marginHorizontal: 16,
        borderRadius: 15
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
    