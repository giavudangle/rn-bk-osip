import React from "react";
import { StyleSheet, Dimensions } from "react-native";
import { TabView, SceneMap, TabBar } from "react-native-tab-view";
// import { connect } from "react-redux";

// import { bindUserActions } from "../../../redux/actions/user";
// import { channingActions } from "../../../helpers";
import { Text } from "../../ui";

// import { Navigation } from "react-native-navigation";

import GeneralEvent from "./general";
import SpecialEvent from "./special";

// import Popular from "./popular";

import { Colors } from "../../ui";

const screenWidth = Math.round(Dimensions.get("window").width);
const screenHeight = Math.round(Dimensions.get("window").height);

class EventScreen extends React.Component {
  constructor(props) {
    super(props);

    // this.state = {
    //   username: "",
    //   password: "",
    //   locationReady: true,
    //   token: "",

    //   savedDataLoaded: false
    // };
  }
  state = {
    index: 0,
    routes: [
      { key: "nearby", title: "General Events" },
      { key: "popular", title: "Special Events" }
    ],
    error: null
  };

  NearbyRoute = () => <GeneralEvent/>;
  PopularRoute = () => <SpecialEvent />;

  _renderLabel = ({ route }) => <Text>{route.title}</Text>;

  render(){
    // const { navigate } = this.props.navigation;
    // const { username, password, savedDataLoaded } = this.state;

    return (
      <TabView
      navigationState={this.state}
      renderScene={SceneMap({
        nearby: this.NearbyRoute,
        popular: this.PopularRoute
      })}
      onIndexChange={index => this.setState({ index })}
      initialLayout={{ width: Dimensions.get("window").width }}
      renderTabBar={props => (
        <TabBar
          {...props}
          renderLabel={this._renderLabel}
          indicatorStyle={styles.tabBarBorder}
          style={styles.tabBarBackground}
          labelStyle={styles.tabBarText}
        />
      )}
    />
    );
  }
  
}

const styles = StyleSheet.create({
  tabBarBorder: {
    backgroundColor: "#ddd"
  },
  tabBarText: {
    color: "black",
    fontFamily: "Quicksand"
  },
  tabBarBackground: {
    backgroundColor: "white"
  }
});

export default EventScreen;
