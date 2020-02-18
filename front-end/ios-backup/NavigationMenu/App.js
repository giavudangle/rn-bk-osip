import React from "react";
import {
  createAppContainer,
  createSwitchNavigator
} from "react-navigation";

import {createStackNavigator} from "react-navigation-stack";
import {createBottomTabNavigator} from "react-navigation-tabs";
import { createDrawerNavigator } from 'react-navigation-drawer';

import Example from "./screens/Example";
import Login from "./screens/login";
import SignIn from "./screens/sign-in";
import News from "./screens/news";

const AuthStack = createStackNavigator({
  Login: {
    screen: Login,
    navigationOptions: {
      headerTitle: "Login"
    }
  },
  SignIn: {
    screen: SignIn,
    navigationOptions: {
      headerTitle: "Sign In"
    }
  },
  CreateAccount: {
    screen: Example,
    navigationOptions: {
      headerTitle: "Create Account"
    }
  },
  ForgotPassword: {
    screen: Example,
    navigationOptions: {
      headerTitle: "Forgot Password"
    }
  },
  ResetPassword: {
    screen: Example,
    navigationOptions: {
      headerTitle: "Reset Password"
    }
  }
});

const FeedStack = createStackNavigator({
  Feed: {
    screen: Example,
    navigationOptions: {
      headerTitle: "Feed"
    }
  },
  Details: {
    screen: Example,
    navigationOptions: {
      headerTitle: "Details"
    }
  }
});

const SearchStack = createStackNavigator({
  Search: {
    screen: Example,
    navigationOptions: {
      headerTitle: "Search"
    }
  },
  Details: {
    screen: Example,
    navigationOptions: {
      headerTitle: "Details"
    }
  }
});

const DiscoverStack = createStackNavigator({
  Discover: {
    screen: Example,
    navigationOptions: {
      headerTitle: "Discover"
    }
  },
  Details: {
    screen: Example,
    navigationOptions: {
      headerTitle: "Details"
    }
  }
});

const MainTabs = createBottomTabNavigator({
  Feed: {
    screen: News,
    navigationOptions: {
      tabBarLabel: "Feed"
    }
  },
  Search: {
    screen: SearchStack,
    navigationOptions: {
      tabBarLabel: "Search"
    }
  },
  Discover: {
    screen: DiscoverStack,
    navigationOptions: {
      tabBarLabel: "Discover"
    }
  }
});

const SettingsStack = createStackNavigator({
  SettingsList: {
    screen: Example,
    navigationOptions: {
      headerTitle: "Settings List"
    }
  },
  Profile: {
    screen: Example,
    navigationOptions: {
      headerTitle: "Profile"
    }
  }
});

const MainDrawer = createDrawerNavigator({
  MainTabs: MainTabs,
  Settings: SettingsStack
});

const AppModalStack = createStackNavigator(
  {
    App: MainDrawer,
    Promotion1: {
      screen: News
    }
  },
  {
    mode: "modal",
    headerMode: "none"
  }
);

const App = createSwitchNavigator({
  Loading: {
    screen: Example
  },
  Auth: {
    screen: AuthStack
  },
  App: {
    screen: AppModalStack
  }
});

export default createAppContainer(App);
