import React, { Component } from 'react';
import { Dropdown } from 'react-native-material-dropdown-v2';
import { StyleSheet } from 'react-native';

export default class ComboBox extends Component {
    render() {
      let data = [{
        value: 'Banana',
      }, {
        value: 'Mango',
      }, {
        value: 'Pear',
      }];
   
      return (
        <Dropdown style = {styles.container}
          label='Favorite Fruit'
          data={data}
        />
      );
    }
  }

const styles = StyleSheet.create({
  container: {
    height: 20,
    width: 200,
    marginTop: 10,
    padding: 10
  }})