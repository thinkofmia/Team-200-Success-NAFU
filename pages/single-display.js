import React from 'react';
import { StyleSheet, Text, Image } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

export default function SingleDisplay() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Image
          style={styles.profilePic}
          source={{
            uri:
              'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWy1rhx6EXXOp-o6Jh89UM-FYySA8Ic34LFQ&usqp=CAU',
          }}
        />
        <Text>Link to events</Text>
      </View>
    );
  }

const styles=StyleSheet.create({
  text: {
    fontWeight: "bold"
  },
  profilePic: {
    height: 120,
    width: 120,
    borderRadius: 60,
    alignSelf: 'center',
    marginTop: 10,
    borderColor: 'white',
    borderWidth: 2,
  },
})