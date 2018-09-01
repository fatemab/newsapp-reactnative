import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, FlatList, TouchableOpacity, ImageBackground } from 'react-native';
import HttpService from './../../Config/HttpService';
let newspaperName = '';

export default class Newspaper extends Component {
    state = {
        newsData: []
    }

    static navigationOptions = ({ navigation }) => {
        newspaperName = `${navigation.state.params.newspaperName}`
    }

    componentWillMount() {
        const url = "https://newsapi.org/v2/top-headlines?country=us&apiKey=70bf750895c84d9b9a0af5f8e016d78b";
        news = [];
        HttpService(url, function (data) {
            data.articles.forEach(element => {
                if (element.source.name === newspaperName) {
                    news.push(element);
                }
            });

            this.setState({
                newsData: news
            })
            // console.error(this.state.newsData[0].title)
        }.bind(this))
    }

    detailNews = (item) => {
        this.props.navigation.navigate('NewsDetail',{detailNews: item})
    };

    renderRowItem = (itemData) => {
        return (
            <TouchableOpacity style={styles.container} onPress={() => this.detailNews(itemData.item)}>
                <ImageBackground
                    style={styles.backdrop}
                    source={{ uri: itemData.item.urlToImage }}>
                    <Text style={styles.titleText}>{itemData.item.title}</Text>
                    <Text style={styles.authorText}>{itemData.item.author}</Text>
                </ImageBackground>
            </TouchableOpacity>
        )
    }

    render() {
        return (
            <FlatList
                data={this.state.newsData}
                keyExtractor={(x, i) => i}
                renderItem={this.renderRowItem}
            />
        );
    }
}

var styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: '#000000',
        width: "100%"
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
    authorText: {
        position: 'absolute',
        top: 0,
        right:0,
        fontSize: 12,
        textAlign: 'right',
        backgroundColor: 'rgba(0,0,0,0)',
        color: 'white',
        fontWeight: 'bold'
    }
});

AppRegistry.registerComponent('Newspaper', () => Newspaper);