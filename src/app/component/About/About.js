import React, {Component} from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import HttpService from './../../Config/HttpService';

export default class About extends Component {
    static navigationOptions = ({ navigation }) => ({
        title: 'About',
        headerTitleStyle : {textAlign: 'center',alignSelf:'center'},
        headerLeft: null,
        headerStyle:{
                backgroundColor:'red',
        },
        drawerIcon: () => <Icon name='newspaper-o' size={20}/>,
    });

    onComponentUpdate() {
        HttpService('http://google.com').then((response) => {
            response.json()
        })
        .catch((error) => {
            callbackFn(error, undefined);
            console.error(error);
        });
        
    }
    
  render() {
    return (
     <View>
       <Text>TIntro Pages: Intro pages are shown just one time application is loaded. Once skipped or read it cannot be
            visitedhe Washington Post</Text>
     </View>
    );
  }
}

AppRegistry.registerComponent('About',() => About);