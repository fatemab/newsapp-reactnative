import React, { Component } from 'react';
import { AppRegistry, StyleSheet,TouchableOpacity, Text, FlatList, Image, Dimensions } from 'react-native';
import HttpService from './../../Config/HttpService';
import Icon from 'react-native-vector-icons/FontAwesome'

const margin = 5
const { width, height } = Dimensions.get('window');
const equalWidth = (width / 2 - (2 * margin));

export default class Landing extends Component {  
  state = {
    newspaperData: []
  }

  componentWillMount() {

    var newsPaperIcons = {
      "CNN": require("./../../img/cnn.png"),
      "The New York Times": require("./../../img/newyorkTimes.png"),
      "The Washington Post": require("./../../img/washingtonPost.png"),
      "Fox News": require("./../../img/foxnews.png")
    };

    let newsPaperName = [], newspapers = [];
    let url = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=70bf750895c84d9b9a0af5f8e016d78b';
    HttpService(url, function (data) {
      data.articles.forEach(function (value) {
        var name = value.source.name;
        if (newsPaperName.indexOf(name) === -1) {
          newsPaperName.push(name);
          var newspaper = {};
          newspaper.name = name;
          newspaper.icon = newsPaperIcons[name] ? newsPaperIcons[name] : require("./../../img/dummy.jpeg");
          newspapers.push(newspaper)
        }
      })
      this.setState({
        newspaperData: newspapers
      })
      //  console.error(this.state.newspaperData)         
    }.bind(this))
  }

  showAllNews = (name) => {
    this.props.navigation.navigate('Newspaper', { newspaperName: name })
  };

  renderRowItem = (itemData) => {
    return (
      <TouchableOpacity  style={styles.columns} onPress={() => this.showAllNews(itemData.item.name)}>
        <Image style={styles.newsIcon} source={itemData.item.icon} resizeMode='contain' />
        <Text style={styles.newsTitle}>{itemData.item.name}</Text>
      </TouchableOpacity >
    )
  }

  render() {
    return (

      <FlatList contentContainerStyle={styles.container}
        data={this.state.newspaperData}
        numColumns={2}
        keyExtractor={(x, i) => i}
        renderItem={this.renderRowItem}
      />

    );
  }
}

var styles = StyleSheet.create({
  container: {
    backgroundColor: 'white'
  },
  columns: {
    width: equalWidth,
    height: 180,
    margin: margin,
    justifyContent: 'center',
    alignItems: 'center'
  },
  newsIcon: {
    height: 120,
    width: equalWidth,
  },
  newsTitle: {
    fontSize: 16,
    color: 'black',
    fontWeight: 'bold'
  }
});

AppRegistry.registerComponent('Landing', () => Landing);
