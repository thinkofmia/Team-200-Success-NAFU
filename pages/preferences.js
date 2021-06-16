import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, Image, Linking, FlatList, TouchableOpacity } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { filterData } from '../scripts/filter';

  const Item = ({ item, onPress, backgroundColor, textColor }) => (
    <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
      <Text style={[styles.title, textColor]}>{item}</Text>
    </TouchableOpacity>
  );

export default function Preferences({navigation}) {
    const [selectedId, setSelectedId] = useState(null);
    const [refreshPage, setRefreshPage] = useState("");
    const [, updateState] = React.useState();
    const forceUpdate = React.useCallback(() => updateState({}), []);

    const renderItem = ({ item }) => {
        const backgroundColor = global.userPreferences.includes(item) ? "#6e3b6e" : "#f9c2ff";
        const color = global.userPreferences.includes(item) ? 'white' : 'black';
    
        return (
          <Item
            item={item}
            onPress={() => {
              var index = global.userPreferences.indexOf(item);
              if (index > -1) {global.userPreferences.splice(index, 1);
            }
              else {global.userPreferences.push(item);}
              console.log(global.userPreferences);
              global.displayFeed = filterData(global.fakeFeed, global.filterOption, global.userPreferences);
              setRefreshPage("refresh");
              forceUpdate();
          }
          
        }
            backgroundColor={{ backgroundColor }}
            textColor={{ color }}
          />
        );
      };

  return (
    <View style={styles.container}>
        <Text style={styles.eventsHeader}>Select your preferences</Text>
        <FlatList
            style = {styles.list}
            data={global.preferenceList}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            extraData={selectedId}
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
    width: "100%",
  },
  list: {
    width: "90%",
  },
  item: {
    backgroundColor: '#f9c2ff',
    width: "90%",
    textAlign: 'center',
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 20,
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