import React, { Component } from 'react';
import { AppRegistry, View } from 'react-native';
import { TabNavigator, StackNavigator, DrawerNavigator, NavigationAction } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';
import Header from './../component/Header/Header';
import Landing from './../component/Landing/Landing';
import Newpaper from './../component/Newspaper/Newspaper';
import NewsDetail from './../component/NewsDetail/NewsDetail';
import About from './../component/About/About';

export const RouteStack = StackNavigator({
    Landing: {
        screen: Landing,
        navigationOptions: ({ navigation }) => ({
            title: 'Choose Newspaper',
            headerTitleStyle: {
                color: 'white',
                alignSelf: 'center'
            },
            headerLeft: <Icon name='bars' size={20} style={{marginLeft:20, color:'white'}} />,
            headerStyle: {
                backgroundColor: 'red',
            }
        }),
    },
    Newspaper: {
        screen: Newpaper,
        navigationOptions: ({ navigation }) => ({
            title: `${navigation.state.params.newspaperName}`,
            headerTitleStyle: {
                color: 'white',
                alignSelf: 'center'
            },
            headerLeft: <Icon name='arrow-left' size={20} style={{marginLeft:20, color:'white'}} />,
          
            headerStyle: {
                backgroundColor: 'red',
            }
        }),
    },
    NewsDetail: {
        screen: NewsDetail,
        navigationOptions: ({ navigation }) => ({
            title: `${navigation.state.params.detailNews.title}`,
            headerTitleStyle: {
                color: 'white',
                alignSelf: 'center'
            },
            headerLeft: <Icon name='arrow-left' size={20} style={{marginLeft:20, color:'white'}} />,
          
            headerStyle: {
                backgroundColor: 'red',
            }
        }),
    }

})

export const pageNavigation = StackNavigator(
    {
        Landing: {
            screen: Landing,
            navigationOptions: ({ navigation }) => ({
                headerLeft: <Icon name="bars" onPress={() => navigation.navigate('DrawerToggle')} />,
            }),
        },
        Newspaper: {
            screen: Newpaper,
            navigationOptions: ({ navigation }) => ({
                headerLeft: <Icon name="bars" onPress={() => navigation.navigate('DrawerToggle')} />,
            }),
        }
    }
)
// export default DrawerNavigator(
//   {
//     Home: {
//         screen: Landing,
//         navigationOptions: {
//           title: 'Choose NewsPaper' 
//         }
//     },
//     About : {
//         screen: About,
//         navigationOptions: {
//           title: 'About' 
//         }
//     }
//   },
//   {
//     drawerPosition: 'left'
//   }
// )
/*export const MenuButton = (
	<View>
		<TouchableOpacity onPress={() => {  } }>
			<Icon name="bars" style={{color: 'white', padding: 10, marginLeft:10, fontSize: 20}}
                onPress={() => this.props.navigate('DrawerOpen')}/>
		</TouchableOpacity>
	</View>
);*/

export const Tabs = TabNavigator({
    Landing: {
        screen: pageNavigation,
        navigationOptions: {
            tabBarLabel: 'Choose Newpaper',
            tabBarIcon: () => <Icon name="newspaper-o" size={25} />
        }
    },
    Header: {
        screen: Header,
        navigationOptions: {
            tabBarLabel: 'Header',
            tabBarIcon: () => <Icon name='bars' size={20} />
        }
    }
}, {
        tabBarPosition: "bottom",
        swipeEnabled: true,
        animationEnabled: true,
        lazy: true,
        tabBarOptions: {
            showLabel: true,
            showIcon: true,
            upperCaseLabel: false,
            scrollEnabled: false
        }
    })

AppRegistry.registerComponent('Router', () => Router);