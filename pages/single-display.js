import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

export default function SingleDisplay({navigation}) {
  return (
    <View style={styles.container}>
        <View style={styles.imgBackground}>
          <Image
            style={styles.eventsImage}
            source={{
              uri:
                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWy1rhx6EXXOp-o6Jh89UM-FYySA8Ic34LFQ&usqp=CAU',
            }}
          />
        </View>
        <Text style={styles.eventsText}>Link to events</Text>
    </View>
    );
  }

const styles=StyleSheet.create({
  imgBackground:{
    width: "70%",
    backgroundColor: "blue",
  },
  eventsText: {
    fontWeight: "bold"
  },
  eventsImage: {
    height: 120,
    width: 120,
    borderRadius: 60,
    alignSelf: 'center',
    marginTop: 10,
    borderColor: 'white',
    borderWidth: 2,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})