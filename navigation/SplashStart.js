import React, {Component} from 'react';
import { View, ImageBackground, Image } from 'react-native';
import TabNavigator from "./TabNavigator";

const bg = require('../assets/white-bg.jpg');
const logo = require('../assets/NAFUlogo.png');

export default function SplashStart({navigation}) { 
    setTimeout(()=>{
        navigation.replace("BottomTabNavigator");
    }, 2000);

    return(
        <ImageBackground 
            source={bg}
            style={{height:'100%', width:'100%'}}>
            <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
                <Image 
                    source={logo}
                    style={{height:500, width:500, marginLeft:50}}
                ></Image>
            </View>
        </ImageBackground>
    );
}

