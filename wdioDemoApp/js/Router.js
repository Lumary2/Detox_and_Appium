import React, {Component} from 'react';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Home from './screens/Home';
import PictureView from './screens/PictureView';
import Forms from './screens/Forms';
import Login from './screens/Login';
import Swipe from './screens/Swipe';

const TabNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        tabBarLabel: 'Home',
        tabBarAccessibilityLabel: 'Home',
        tabBarIcon: ({tintColor}) => (
          <Icon name={'home-outline'} size={26} style={{color: tintColor}} />
        ),
      },
    },
    PictureView: {
      screen: PictureView,
      navigationOptions: {
        tabBarLabel: 'PictureView',
        tabBarAccessibilityLabel: 'PictureView',
        tabBarIcon: ({tintColor}) => (
          <Icon name={'web'} size={26} style={{color: tintColor}} />
        ),
      },
    },
    Login: {
      screen: Login,
      navigationOptions: {
        tabBarLabel: 'Login',
        tabBarAccessibilityLabel: 'Login',
        tabBarIcon: ({tintColor}) => (
          <Icon name={'login'} size={26} style={{color: tintColor}} />
        ),
      },
    },
    Forms: {
      screen: Forms,
      navigationOptions: {
        tabBarLabel: 'Forms',
        tabBarAccessibilityLabel: 'Forms',
        tabBarIcon: ({tintColor}) => (
          <Icon name={'pencil'} size={26} style={{color: tintColor}} />
        ),
      },
    },
    Swipe: {
      screen: Swipe,
      navigationOptions: {
        tabBarLabel: 'Swipe',
        tabBarAccessibilityLabel: 'Swipe',
        tabBarIcon: ({tintColor}) => (
          <Icon
            name={'arrow-split-vertical'}
            size={26}
            style={{color: tintColor}}
          />
        ),
      },
    },
  },
  {
    swipeEnabled: true,
    tabBarOptions: {
      activeTintColor: '#ea5906',
      inactiveTintColor: 'rgba(255, 255, 255, 0.8)',
      labelStyle: {
        fontSize: 14,
        fontWeight: '100',
      },
      style: {
        backgroundColor: '#000',
        borderTopWidth: 5,
        borderTopColor: '#ea5906',
        paddingTop: 5,
        height: 60,
      },
      tabStyle: {
        width: 100,
      },
    },
  },
);
const Router = createAppContainer(TabNavigator);

class NavigationContainer extends Component {
  render() {
    return <Router />;
  }
}

export default NavigationContainer;
