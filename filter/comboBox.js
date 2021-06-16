import React, { Component } from 'react';
import { Dropdown } from 'react-native-material-dropdown-v2';
import { StyleSheet } from 'react-native';
import { filterData } from '../scripts/filter';



export default class ComboBox extends Component {
  
    render() {
      let data = [{
        value: 'Sort by Price: Descending',
      }, {
        value: 'Sort by Price: Ascending',
      }, {
        value: 'Sort by Date: Latest',
      }, {
        value: 'Sort by Date: Oldest',
      }
    ];
    
   
      return (
        <Dropdown style = {styles.dropdown}
          data={data}
          value = {global.filterOption}
          onChangeText = {(value) => {
            global.filterOption = value;
            global.displayFeed = filterData(global.fakeFeed, global.filterOption, global.userPreferences);
        }}
        />
      );
    }
    
  }

const styles = StyleSheet.create({
  dropdown: {
    height: 30,
    width: 300,
    marginTop: 10,
    padding: 10,
    textAlign:'left'
  }})