import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
  Dimensions
} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

export default function MainPage({navigation}) {
    return (
      <View style={styles.container}>
        <Text>This is the main page!</Text>
        <Button
          title="Drinking Polar Bear (Event)"
          onPress={() => navigation.navigate('SingleDisplay')}
        />
        <Button
          title="Select Your Preferences"
          onPress={() => navigation.navigate('Preferences')}
        />
        <StatusBar style="auto" />
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
  });
  