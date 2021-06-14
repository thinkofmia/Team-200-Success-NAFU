import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, Image, Linking, FlatList } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

//Hardcoded topics
const PREFERENCES_TOPIC = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'Food',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Romance',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Sports',
    },
    {
    id: 'asd8239-3da1-471f-bd96-145571e29d72',
    title: 'Family',
    },
  ];

  const Item = ({ title }) => (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );

export default function Preferences({navigation}) {
    const renderItem = ({ item }) => (
        <Item title={item.title} />
      );

  return (
    <View style={styles.container}>
        <Text style={styles.eventsHeader}>Preferences Here</Text>
        <FlatList
            data={PREFERENCES_TOPIC}
            renderItem={renderItem}
            keyExtractor={item => item.id}
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
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
})