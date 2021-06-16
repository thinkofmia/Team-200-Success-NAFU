import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, Image, Linking, FlatList, TouchableOpacity } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { color } from 'react-native-reanimated';
import { filterData } from '../scripts/filter';

  const Item = ({ item, onPress, backgroundColor, textColor, fontWeight }) => (
    <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
      <Text style={[styles.title, textColor, fontWeight]}>{item}</Text>
    </TouchableOpacity>
  );

export default function Preferences({navigation}) {
    const [selectedId, setSelectedId] = useState(null);
    const [refreshPage, setRefreshPage] = useState("");
    const [, updateState] = React.useState();
    const forceUpdate = React.useCallback(() => updateState({}), []);

    const renderItem = ({ item }) => {
        const backgroundColor = global.userPreferences.includes(item) ? "#374a67" : "#616283";
        const color = global.userPreferences.includes(item) ? 'white' : '#fde8e9';
        const fontWeight = global.userPreferences.includes(item) ? 'bold' : 'normal';
    
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
            fontWeight = {{fontWeight}}       
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
    backgroundColor: '#fde8e9',
    alignItems: 'center',
    justifyContent: 'center',
    width: "100%",
  },
  list: {
    width: "90%",
  },
  item: {
    width: "90%",
    textAlign: 'center',
    justifyContent: "center",
    marginVertical: 10,
    marginHorizontal: 16,
    borderRadius: 40,
    height: 50
  },
  title: {
    fontSize: 25,
    textAlign: 'center',
    padding: 10
  },
  thumbnails: {
    width: "100%",
    height: "70%",
  },
  eventsHeader: {
    fontWeight: "bold",
    fontSize: 25,
    alignContent: "center",
    paddingBottom: 40,
    paddingTop: 40,
    color: "#374a67"
  },
})