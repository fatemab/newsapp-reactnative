import React, {Component} from 'react';
import {AppRegistry, StyleSheet, Text, View, TouchableHighlight } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class Header extends Component {
  render() {
    return (
      <View style={styles.header}>    
        <Icon name='bars' size={24}/> 
          <Text style={styles.headerText}>Page Heading</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    backgroundColor: 'red',
    padding:5,
    height:40,
    flexDirection:'row'
  },
  headerText:{
    color: '#000000',
    textAlign: 'center',
    flex:0.8,
    fontSize:20
  }
});

AppRegistry.registerComponent('Header',() => Header);
