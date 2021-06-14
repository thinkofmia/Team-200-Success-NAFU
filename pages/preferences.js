import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, Image, Linking, FlatList, TouchableOpacity } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

//Hardcoded topics
const PREFERENCES_TOPIC = [
    {
      title: 'Food',
      image: 'https://149366112.v2.pressablecdn.com/wp-content/uploads/2016/01/Polar-BearMain.jpg'
    },
    {
      title: 'Romance',
      image: 'https://images.ctfassets.net/pjshm78m9jt4/301580_header/10665ca84d607b41a4b7d1c8590751c3/importedImage301580_header'
    },
    {
      title: 'Sports',
      image: 'https://previews.123rf.com/images/cnuisin/cnuisin1802/cnuisin180200234/95217848-bear-polar-bear-surf-ocean-vector-illustration-character-cartoon-yellow-.jpg'
    },
    {
    title: 'Family',
    image: 'data:image/jpeg;base64,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'
    },
    {
        title: 'Movies',
        image: 'https://cdn3.vectorstock.com/i/1000x1000/93/22/cute-polar-bear-with-popconr-childish-character-vector-25099322.jpg'
      },
      {
      title: 'Travel', 
      image: 'https://biganimals.com/wp-content/uploads/polarBearsSwim.jpg'
      },
  ];

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

export default function Preferences({navigation}) {
    const [selectedId, setSelectedId] = useState(null);

    const renderItem = ({ item }) => {
        const backgroundColor = global.userPreferences.includes(item.title) ? "#6e3b6e" : "#f9c2ff";
        const color = global.userPreferences.includes(item.title) ? 'white' : 'black';
    
        return (
          <Item
            item={item}
            onPress={() => {
              if(!(global.userPreferences.includes(item.title))) global.userPreferences.push(item.title);
              else if (global.userPreference.indexOf(item.title) > -1) {global.userPreferences.splice(index, 1);
            }}}
            backgroundColor={{ backgroundColor }}
            textColor={{ color }}
          />
        );
      };

  return (
    <View style={styles.container}>
        <Text style={styles.eventsHeader}>Select your preferences</Text>
        <FlatList
            data={PREFERENCES_TOPIC}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            extraData={selectedId}
            numColumns={2}
      />
    </View>
    );
  }

const styles=StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  item: {
    backgroundColor: '#f9c2ff',
    width: "40%",
    height: 200,
    textAlign: 'center',
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
    textAlign: 'center',
  },
  thumbnails: {
    width: "100%",
    height: "70%",
  },
})