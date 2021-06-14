import React, { useState, useEffect } from 'react';
import { FlatList, StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

const Item = ({ item, onPress }) => (
  <TouchableOpacity style={styles.item} onPress={onPress}>
    <Image
          style={styles.thumbnails}
          source={{
            uri:
                item.image
          }}
        />
    <Text style={styles.title}>{item.title}</Text>
  </TouchableOpacity>
);

export default function Bookmarks({navigation}) {

  const renderItem = ({ item }) => {
    return ( 
      <Item
        item={item}
        onPress={() => navigation.navigate('SingleDisplay')}
      />
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
          data={global.bookmarked}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          extraData={selectedId}
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
        backgroundColor: 'darkblue',
        width: "90%",
        height: 360,
        textAlign: 'center',
        marginVertical: 8,
        marginHorizontal: 16,
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
      },
    });
    