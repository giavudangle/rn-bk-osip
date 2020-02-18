import React from "react";
import { StyleSheet, Dimensions } from "react-native";
import { TabView, SceneMap, TabBar } from "react-native-tab-view";
// import { connect } from "react-redux";

// import { bindUserActions } from "../../../redux/actions/user";
// import { channingActions } from "../../../helpers";
import { Text } from "../../ui";

// import { Navigation } from "react-native-navigation";

import GeneralEvent from "./general";
import RegisteredEvent from "./registered";

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
      { key: "nearby", title: "Events" },
      { key: "popular", title: "Registered Events" }
    ],
    error: null
  };

  NearbyRoute = () => <GeneralEvent navigation = {this.props.navigation}/>;
  PopularRoute = () => <RegisteredEvent navigation = {this.props.navigation}/>;

  _renderLabel = ({ route }) => <Text>{route.title}</Text>;

  render(){
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
    // fontFamily: "Quicksand"
  },
  tabBarBackground: {
    backgroundColor: "white"
  }
});

export default EventScreen;
