// import React from "react";
// import {
//   createAppContainer,
//   createSwitchNavigator
// } from "react-navigation";

// import {createStackNavigator} from "react-navigation-stack";
// import {createBottomTabNavigator} from "react-navigation-tabs";
// import { createDrawerNavigator } from 'react-navigation-drawer';

// import Example from "./src/screens/Example";
// import LoginScreen from "./src/screens/login";
// import NewScreen from "./src/screens/new";
// import EventScreen from "./src/screens/event";
// import ManagementEventsScreen from "./src/screens/management-events";
// import ProfileScreen from "./src/screens/profile";
// import SettingScreen from "./src/screens/setting";
// import Icon from 'react-native-ionicons'

// const AuthStack = createStackNavigator({
//   Login: {
//     screen: LoginScreen,
//     navigationOptions: {
//       // headerTitle: "Login",
//       header: null
//     }
//   },
//   CreateAccount: {
//     screen: Example,
//     navigationOptions: {
//       headerTitle: "Create Account"
//     }
//   },
//   ForgotPassword: {
//     screen: Example,
//     navigationOptions: {
//       headerTitle: "Forgot Password"
//     }
//   },
//   ResetPassword: {
//     screen: Example,
//     navigationOptions: {
//       headerTitle: "Reset Password"
//     }
//   }
// });

// const MainTabs = createBottomTabNavigator(
//   {
//     News: {
//       screen: NewScreen,
//       navigationOptions: {
//         tabBarLabel: "News"
//       }
//     },
//     Events: {
//       screen: EventScreen,
//       navigationOptions: {
//         tabBarLabel: "Events"
//       }
//     },
//     QR: {
//       screen: ManagementEventsScreen,
//       navigationOptions: {
//         tabBarLabel: "QR"
//       }
//     },
//     Profile: {
//       screen: ProfileScreen,
//       navigationOptions: {
//         tabBarLabel: "Profile"
//       }
//     },
//     Settings: {
//       screen: SettingScreen,
//       navigationOptions: {
//         tabBarLabel: "Setting"
//       }
//     }
//   },
//   {
//     defaultNavigationOptions: ({ navigation }) => ({
//       tabBarIcon: ({ focused, horizontal, tintColor }) => {
//         const { routeName } = navigation.state;
//         let iconName;
//         if (routeName === 'News') {
//           // Sometimes we want to add badges to some icons.
//           // You can check the implementation below.
//         } else if (routeName === 'Events') {
//           iconName = 'bookmarks';
//         } else if (routeName === 'QR') {
//           iconName = `ios-options`;
//         } else if (routeName === 'Profile') {
//           iconName = `ios-options`;
//         } else if (routeName === 'Settings') {
//           iconName = `ios-options`;
//         }
        

//         // You can return any component that you like here!
//         return <Icon android="md-add" size={25} color={tintColor} />;
//       },
//     }),
//     tabBarOptions: {
//       activeTintColor: 'tomato',
//       inactiveTintColor: 'gray',
//     },
//   }
// );

// const SettingsStack = createStackNavigator({
//   SettingsList: {
//     screen: Example,
//     navigationOptions: {
//       headerTitle: "Settings List"
//     }
//   },
//   Profile: {
//     screen: Example,
//     navigationOptions: {
//       headerTitle: "Profile"
//     }
//   }
// });

// const MainDrawer = createDrawerNavigator({
//   MainTabs: MainTabs,
//   Settings: SettingsStack
// });

// const AppModalStack = createStackNavigator(
//   {
//     App: MainDrawer,
//     Promotion1: {
//       screen: NewScreen
//     }
//   },
//   {
//     mode: "modal",
//     headerMode: "none"
//   }
// );

// const App = createSwitchNavigator({
//   Login: {
//     screen: LoginScreen
//   },
//   Auth: {
//     screen: AuthStack
//   },
//   App: {
//     screen: AppModalStack
//   }
// });

// export default createAppContainer(App);
// import { AppRegistry } from "react-native";
// import App from "./src/AppEntry";
// import { name as appName } from "./app.json";

// AppRegistry.registerComponent(appName, () => App);