import React from "react";
import { 
  createAppContainer, 
  createSwitchNavigator
  } from "react-navigation";
import {createBottomTabNavigator} from "react-navigation-tabs";
import {createStackNavigator} from "react-navigation-stack";
import {Icon, TabBar} from '../components/tab-nagivation';
import {
  Login,
  News,
  Event,
  ManagementEvent,
  RegisterEvent,
  Profile,
  Setting
} from "../screens";
import {QRButton} from '../components/tab-nagivation'

const NewsStack = createStackNavigator({
  Event: {
    screen: News,
    navigationOptions: {
      headerTitle: "News",
    }
  },
  RegisterEvent: {
    screen: RegisterEvent,
    navigationOptions: {
      // headerTitle: "Login",
      header: null
    }
  },
});

const EventStack = createStackNavigator({
  Event: {
    screen: Event,
    navigationOptions: {
      headerTitle: "Event",
    }
  },
  RegisterEvent: {
    screen: RegisterEvent,
    navigationOptions: {
      // headerTitle: "Login",
      header: null
    }
  },
});

const ManagementEventStack = createStackNavigator({
  Event: {
    screen: ManagementEvent,
    navigationOptions: {
      headerTitle: "Management Event",
    }
  },
  RegisterEvent: {
    screen: RegisterEvent,
    navigationOptions: {
      // headerTitle: "Login",
      header: null
    }
  },
});

const ProfileStack = createStackNavigator({
  Event: {
    screen: Profile,
    navigationOptions: {
      headerTitle: "Profile",
    }
  },
  RegisterEvent: {
    screen: RegisterEvent,
    navigationOptions: {
      // headerTitle: "Login",
      header: null
    }
  },
});

const SettingStack = createStackNavigator({
  Event: {
    screen: Setting,
    navigationOptions: {
      headerTitle: "Setting",
    }
  },
  RegisterEvent: {
    screen: RegisterEvent,
    navigationOptions: {
      // headerTitle: "Login",
      header: null
    }
  },
});

const TabNavigator = createBottomTabNavigator({
    News: {
      screen: NewsStack,
      navigationOptions: {
        tabBarLabel: "",
        tabBarIcon: ({ tintColor }) => <Icon name="newspaper" color={tintColor} />
      }
    },
    Event: {
      screen: EventStack,
      navigationOptions: {
        tabBarLabel: 'Event',
        tabBarIcon: ({ tintColor }) => <Icon name="run" color={tintColor} />
      }
    },
    ManagementEvent: {
      screen: ManagementEventStack,
      navigationOptions: {
        tabBarLabel: ' ',
        tabBarIcon:({tintColor}) =>  <QRButton color={tintColor}/>
      }
    },
    Profile: {
      screen: ProfileStack,
      navigationOptions: {
        tabBarLabel: 'Profile',
        tabBarIcon: ({ tintColor }) => <Icon name="account-box" color={tintColor} />
      }
    },
    Setting: {
      screen: SettingStack,
      navigationOptions: {
        tabBarLabel: 'Setting',
        tabBarIcon: ({ tintColor }) => <Icon name="settings" color={tintColor} />
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
 
const App = createSwitchNavigator(
  {
  Login: {
    screen: Login
  },
  MenuTab: {
    screen: TabNavigator
  },
 },
 {
  initialRouteName: 'Login',
}
);

export default createAppContainer(App);