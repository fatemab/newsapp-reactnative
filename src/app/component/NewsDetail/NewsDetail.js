import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, FlatList, TouchableOpacity, ImageBackground, Image } from 'react-native';

let navigationParam = {};
export default class NewsDetail extends Component {
    state = {
        newsDetail: {}
    }
    static navigationOptions = ({ navigation }) => {
        navigationParam = navigation.state.params.detailNews
    }

    componentWillMount() {
        this.setState({
            newsDetail: navigationParam
        })
    }

    render() {
        return (
            <View style={styles.container}>
                <ImageBackground style={styles.backdrop} source={{ uri: this.state.newsDetail.urlToImage }}>
                    <Text style={styles.titleText}>{this.state.newsDetail.title}</Text>
                </ImageBackground>

                <View style={styles.boxContainer}>
                    <View style={styles.box}>
                        <Text style={styles.boxTitle}>Author</Text>
                        <Text style={styles.boxSubTitle}>{this.state.newsDetail.author}</Text>
                    </View>

                    <View style={styles.box}>
                        <Text style={styles.boxTitle}>Published Date</Text>
                        <Text style={styles.boxSubTitle}>{this.state.newsDetail.publishedAt}</Text>
                    </View>

                    <View style={styles.box}>
                        <Text style={styles.boxTitle}>Source</Text>
                        <Image style={styles.boxSubTitle} source={require("./../../img/Web.png")}></Image>                    
                    </View>
                </View>

                <View style={{margin: 10}}>
                    <Text style={{fontWeight: 'bold', fontSize:20, marginBottom:10 }}>{this.state.newsDetail.title}</Text>
                    <Text>{this.state.newsDetail.description}</Text>
                </View>
            </View>
        );
    }
}
var styles = StyleSheet.create({
    container: {    
        backgroundColor: 'white',  
        width:'100%',
        height:'100%'  
    },
    backdrop: {
        width: "100%",
        height: 180
    },
    titleText: {
        position: 'absolute',
        bottom: 0,
        fontSize: 16,
        textAlign: 'left',
        backgroundColor: 'rgba(0,0,0,0)',
        color: 'white',
        fontWeight: 'bold'
    },
    boxContainer: {
        height: 70,    
        flexDirection: 'row',        
        backgroundColor: 'white'              
    },
    box: {                
        backgroundColor: '#ededed',
        marginLeft: '1%',
        width:'32%', 
        height:'100%'         
    },
    boxTitle: {
        textAlign:'center',
        marginTop:5
    },
    boxSubTitle: {
        textAlign:'center',
        alignSelf: 'center',
        fontWeight:'bold'
    }
});

AppRegistry.registerComponent('NewsDetail', () => NewsDetail);


