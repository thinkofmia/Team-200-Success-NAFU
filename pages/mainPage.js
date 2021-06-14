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

  const renderItem = ({ item }) => {
      const backgroundColor = item.id === selectedId ? "darkblue" : "darkgreen";
      const color = item.id === selectedId ? 'white' : 'white';
  
      return (
        <Item
          item={item}
          onPress={() => navigation.navigate('SingleDisplay')}
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
      backgroundColor: 'darkblue',
      width: "40%",
      height: 360,
      textAlign: 'center',
      marginVertical: 8,
      marginHorizontal: 16,
    },
    title: {
      padding: 5,
      fontSize: 15,
      textAlign: 'center',
    },
    thumbnails: {
      width: "100%",
      height: "70%",
    },
  });
  