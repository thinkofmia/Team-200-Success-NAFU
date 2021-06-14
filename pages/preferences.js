import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, Image, Linking } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

export default function Preferences({navigation}) {
  return (
    <View style={styles.container}>
        <Text style={styles.eventsHeader}>Preferences Here</Text>
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
})