import React from "react";
import { createAppContainer} from "react-navigation";
import {createBottomTabNavigator} from "react-navigation-tabs";
import {Icon, TabBar} from '../components/tab-nagivation';
import {
  // Login,
  News,
  Event,
  ManagementEvent,
  Profile,
  Setting
} from "../screens";
import {QRButton} from '../components/tab-nagivation'
const TabNavigator = createBottomTabNavigator({
    News: {
      screen: News,
      navigationOptions: {
        tabBarLabel: 'News',
        tabBarIcon: ({ tintColor }) => <Icon name="home" color={tintColor} />
      }
    },
    Event: {
      screen: Event,
      navigationOptions: {
        tabBarLabel: 'Event',
        tabBarIcon: ({ tintColor }) => <Icon name="search" color={tintColor} />
      }
    },
    ManagementEvent: {
      screen: ManagementEvent,
      navigationOptions: {
        tabBarLabel: ' ',
        tabBarIcon:({tintColor}) =>  <QRButton color={tintColor}/>
      }
    },
    Profile: {
      screen: Profile,
      navigationOptions: {
        tabBarLabel: 'Profile',
        tabBarIcon: ({ tintColor }) => <Icon name="profile" color={tintColor} />
      }
    },
    Setting: {
      screen: Setting,
      navigationOptions: {
        tabBarLabel: 'Setting',
        tabBarIcon: ({ tintColor }) => <Icon name="profile" color={tintColor} />
      }
    }
  },
  {
    initialRouteName:'Event',
    tabBarComponent: TabBar,
    tabBarOptions: {
      activeTintColor: "#4F4F4F",
      inactiveTintColor: "#ddd"
    },
    
  },
);

export default createAppContainer(TabNavigator);