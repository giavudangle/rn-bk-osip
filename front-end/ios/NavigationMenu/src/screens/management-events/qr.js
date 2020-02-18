import React, { Component } from "react";
import { View, StyleSheet, ScrollView, RefreshControl } from "react-native";
import QRCode from 'react-native-qrcode-svg';

import Post from "../../components/Post";

class QRScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
      data: null,
      refreshing: false,
      onScrollBeginPos: 0
    };

  }

  updateSearch = search => {
    this.setState({ search });
  };

  componentDidMount() {
    // const { postActions } = this.props;
    // postActions.fetchNearBy(true);
  }

  _onRefresh = () => {
    // const { postActions } = this.props;
    // this.setState({ refreshing: true });
    // postActions.fetchNearBy(true).then(() => {
    //   this.setState({ refreshing: false });
    // });
  };

  componentDidAppear() {
    // const { postActions } = this.props;
    // this.setState({ refreshing: true });
    // postActions.fetchNearBy(true).then(() => {
    //   this.setState({ refreshing: false });
    // });
  }
  
  _onEndReach = () => {
    // if (this.state.search != "") return null;
    // const { postActions } = this.props;
    // postActions.fetchNearBy();
  };

  requestSearch(keyword) {
    // const { postActions } = this.props;
    // if (!keyword) {
    //   postActions.fetchNearBy(true);
    // } else {
    //   postActions.getPostByKeyword(keyword).then(response => {
    //     this.setState({ places: response });
    //   });
    // }
  }

  onScrollUp = () => {
    console.log("onScrollUp");
  };

  onScrollDown = () => {
    console.log("onScrollDown");
  };

  render() {
    
    return (
      <View style={styles.container}>
         <QRCode
            value="AutoBK"
            // logo={{
            //   url:
            //     'https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/HCMUT_official_logo.png/760px-HCMUT_official_logo.png',
            // }}
            logoSize={30}
            logoMargin={2}
            logoBorderRadius={15}
            logoBackgroundColor="white"
            size={300}
          />
      </View>
    );
  }
}

export default QRScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingHorizontal: 10,
    paddingTop: 10,
    justifyContent:'center',
    alignItems:'center'
  },
  col: {
    width: "49%",
    alignItems: "center"
  },
  postsContainer: {
    flexDirection: "row",
    justifyContent: "space-between"
  }
});
