import React from "react";
import {
  View,
  StyleSheet,
  Image,
  TouchableHighlight,
  Animated,
  SectionList
} from "react-native";
import { Dimensions, TouchableOpacity } from "react-native";
// import { connect } from "react-redux";
// import { bindLoadingActions } from "../../../redux/actions/loading";
// import { bindToastActions } from "../../../redux/actions/toast";
// import { bindMeActions } from "../../../redux/actions/me";

// import { HONOR } from "../../../../assets/images";
// import { Navigation } from "react-native-navigation";
// import { AppNavigation } from "../../../navigation";

// import { channingActions } from "../../../helpers";
// import { bindUserActions } from "../../../redux/actions/user";

import { Text, Colors } from "../../ui";
import PostLocation from "./postLocation";
// import Utils from "../../helpers/Utils";
// import _ from "lodash";

const screenWidth = Math.round(Dimensions.get("window").width);
const screenHeight = Math.round(Dimensions.get("window").height);

const HEADER_SCROLL_DISTANCE = 300;
const HEADER_MAX_HEIGHT = 300;
const HEADER_MIN_HEIGHT = 100;

const profilePictureSize = screenWidth * 0.3;

class ProfileScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      info: null,
      postUserId: [{},{},{},{},{}],
      currIndex: 0,
      isRefreshing: false,
      userInfo: undefined,
      onScrollBeginPos: 0,
      isEndScroll: true,
      isSmallMode: false,
      timestamp: new Date()
    };

    // Navigation.events().bindComponent(this);
    this.scrollY = new Animated.Value(0);
    this.renderSwipe = this.renderSwipe.bind(this);
  }

  // goToProfileView = data => {
  //   AppNavigation.pushScreen.ProfileView(this.props.componentId, data);
  // };

  // componentDidAppear() {
  //   console.log("[DB] External data:", this.props.data);
  //   this.props.meActions.fetchInfo();

  //   const { data: externalData, info: meInfo, userActions } = this.props;

  //   // Reset data
  //   this.setState({ postUserId: [] });

  //   const userId = !_.isEmpty(externalData) ? externalData : meInfo._id;
  //   console.log("[DB] UserID", userId);
  //   userActions.getAllPostByUserId(userId).then(response => {
  //     console.log("[DB]", response.data);
  //     this.setState({ postUserId: [...response.data] });
  //   });

  //   if (!_.isEmpty(externalData)) {
  //     userActions.getPersonalInformationById(userId).then(response => {
  //       this.setState({ userInfo: response });
  //     });
  //   } else {
  //     this.setState({ userInfo: this.props.info });
  //   }
  // }

  // componentDidUpdate(prevProps, prevState) {
  //   const { userInfo } = this.state;
  //   const { info } = this.props;

  //   if (!userInfo) return;

  //   if (userInfo._id == info._id && !_.isEqual(userInfo, info)) {
  //     this.setState({ userInfo: info });
  //   }

  //   if (!_.isEqual(prevProps.info, info)) {
  //     this.setState({
  //       profilePhoto: _.get(info.profilePicture, "original", ""),
  //       timestamp: new Date()
  //     });
  //   }
  // }

  // navigationButtonPressed() {
  //   AppNavigation.pushScreen.AccountSetting(this.props.componentId);
  // }

  // gotoFollower(data) {
  //   AppNavigation.pushScreen.ProfileFollowers(this.props.componentId, data);
  // }

  // gotoFollowing(data) {
  //   AppNavigation.pushScreen.ProfileFollowing(this.props.componentId, data);
  // }

  // onPress = data => {
  //   AppNavigation.pushScreen.ProfileGalleryScrollView(
  //     this.props.componentId,
  //     data
  //   );
  // };

  renderSwipe({ item }) {
    return <PostLocation element={item} componentId={this.props.componentId} />;
  }

  // _onRefresh = () => {};

  // unfollowing = followUserId => {
  //   const { userActions, meActions } = this.props;

  //   userActions
  //     .unfollow(followUserId)
  //     .then(() => {
  //       console.log("Unfollow Done");
  //       meActions.fetchInfo();
  //     })
  //     .catch(error => {
  //       console.log("Unfollow Fail", error);
  //     });
  // };

  // following = followUserId => {
  //   const { userActions, meActions, toastActions } = this.props;
  //   userActions
  //     .follow(followUserId)
  //     .then(response => {
  //       if (response.status == 200) {
  //         toastActions.show("Follow Success!");
  //         meActions.fetchInfo();
  //       } else {
  //         toastActions.show("Follow fail!");
  //       }
  //     })
  //     .catch(error => {
  //       console.log("Follow Fail", error);
  //       toastActions.show("Follow Fail...!");
  //     });
  // };

  _renderProfilePicture = userInfo => {
    const left = this.createAnim(0, -screenWidth / 2 + profilePictureSize / 2);
    const top = this.createAnim(0, -30);
    const scale = this.createAnim(1, 0.55);

    const containerStyle = {
      left,
      top,
      transform: [{ scale }],
      ...styles.profilePictureContainer
    };

    const uri = { uri: "https://scontent.fsgn2-4.fna.fbcdn.net/v/t1.0-9/14141551_2077382895820762_2525630861476907753_n.jpg?_nc_cat=101&_nc_ohc=OnnlRr2qxl8AQkr_wKYgmO1W-IxhXlBUZhlibh3wQKRTN24NZQcN63R-w&_nc_ht=scontent.fsgn2-4.fna&oh=5c3c04590392473cdf6c0728556c090d&oe=5E81391E" };
    // if (this.props.info.following === undefined) return null;
    // if (userInfo === undefined) return null;

    return (
      <Animated.View style={containerStyle}>
        <Image source={uri} style={styles.profilePicture} />
        <Text style={styles.boldText}>
          An Lý
        </Text>
        {!this.state.isSmallMode ? (
          <Text style={styles.text}>@an</Text>
        ) : null}
      </Animated.View>
    );
  };

  _onEndReach = () => {
    console.log("on end reach");
  };

  _renderHeaderSmall = userInfo => {
    const left = this.createAnim(screenWidth, screenWidth * 0.23);
    const style = {
      left,
      ...styles.headerSmallContainer
    };

    const item = {
      width: "25%",
      alignItems: "center"
    };

    const itemHasCross = {
      ...item,
      borderLeftWidth: 0.5,
      borderLeftColor: "#fff"
    };

    return (
      <Animated.View style={style}>
        <View style={item}>
          <Text style={styles.boldText}>2</Text>
          <Text style={styles.text}>Ticks</Text>
        </View>
        <TouchableOpacity
          activeOpacity={1}
          style={itemHasCross}
          // onPress={() => this.gotoFollowing(userInfo.following)}
        >
          <Text style={styles.boldText}>3</Text>
          <Text style={styles.text}>Following</Text>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={1}
          style={itemHasCross}
          // onPress={() => this.gotoFollower(userInfo.follower)}
        >
          <Text style={styles.boldText}>4</Text>
          <Text style={styles.text}>Followers</Text>
        </TouchableOpacity>
      </Animated.View>
    );
  };
  _renderHeaderLarge = userInfo => {
    const styleRow = {
      width: "100%",
      flexDirection: "row",
      borderTopColor: "#fff",
      borderTopWidth: 0.5
    };
    var silver = 100,
      gold = 150,
      platinum = 250,
      diamond = 500,
      titan = 1000;
    var point = 12;
    if (point <= silver) {
      var rank = "SILVER";
    } else if (point <= gold) {
      var rank = "GOLD";
    } else if (point <= platinum) {
      var rank = "PLATINUM";
    } else if (point <= diamond) {
      var rank = "DIAMOND";
    } else {
      var rank = "TITAN";
    }
    return (
      <View style={styles.headerLargeContainer}>
        <View style={[styleRow, { marginTop: 170 }]}>
          <View style={styles.detailItem}>
            <Text style={styles.boldText}>123</Text>
            <Text style={styles.text}>Ticks</Text>
          </View>
          <TouchableOpacity
            activeOpacity={1}
            style={styles.leftBorder}
            // onPress={() => this.gotoFollowing(userInfo)}
          >
            <Text style={styles.boldText}>55</Text>
            <Text style={styles.text}>Following</Text>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={1}
            style={styles.leftBorder}
            // onPress={() => this.gotoFollower(userInfo)}
          >
            <Text style={styles.boldText}>2</Text>
            <Text style={styles.text}>Followers</Text>
          </TouchableOpacity>
        </View>

        <View style={styleRow}>
          <View style={styles.detailItem}>
            <Text style={styles.textYellow}>{rank} </Text>
            <Text style={styles.boldText}>member</Text>
          </View>
          <View style={styles.leftBorder}>
            <Text style={styles.honerText}>
              1 point
            </Text>
            {/* <Image
              source={HONOR}
              resizeMode="stretch"
              style={{ marginLeft: 10, width: 20, height: 30 }}
            /> */}
          </View>
        </View>
      </View>
    );
  };

  createAnim = (start, end) =>
    this.scrollY.interpolate({
      inputRange: [0, HEADER_SCROLL_DISTANCE],
      outputRange: [start, end],
      extrapolate: "clamp"
    });

  openLargeHeader = () => {
    this.onScrollDown();
    this.sectionList.scrollToLocation({
      animated: true,
      sectionIndex: 0,
      itemIndex: 0,
      viewPosition: 0
    });
  };

  onScrollUp = () => {
    this.setState({ isSmallMode: true });
    Animated.timing(this.scrollY, {
      toValue: 300,
      duration: 300
    }).start();
  };

  onScrollDown = () => {
    this.setState({ isSmallMode: false });
    Animated.timing(this.scrollY, {
      toValue: 0,
      duration: 300
    }).start();
  };

  render() {
    const { userInfo, postUserId } = this.state;

    // if (userInfo === undefined) return null;
    // if (this.props.info.following === undefined) return null;

    // const isFollow =
    //   this.props.info.following.filter(e => e._id === userInfo._id).length > 0;
    // console.log("This is user", userInfo);
    // const isHideGallery =
    //   userInfo._id !== this.props.info._id &&
    //   !userInfo.isPublished &&
    //   !isFollow;
    const height = this.createAnim(HEADER_MAX_HEIGHT, HEADER_MIN_HEIGHT);
    // const isFollow =
    //   this.props.info.following.filter(e => e._id === userInfo._id).length > 0;
    // const isHideFollow = userInfo._id !== this.props.info._id;
    const data = [{},{},{},{},{},{}];
    return (
      <View style={styles.container} key={this.state.timestamp}>
        <TouchableHighlight onPress={this.openLargeHeader} activeOpacity={1}>
          <Animated.View style={[styles.headerContainer, { height }]}>
            {this._renderProfilePicture(userInfo)}
            {this._renderHeaderSmall(userInfo)}
            {this._renderHeaderLarge(userInfo)}
          </Animated.View>
        </TouchableHighlight>
        {!this.state.isSmallMode ? (
          false ? (
            true ? (
              <TouchableOpacity
                style={{
                  position: "absolute",
                  top: 10,
                  right: 10,
                  width: 100,
                  height: 25,
                  backgroundColor: Colors.mainColor,
                  borderColor: "#fff",
                  borderWidth: 1,
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: 20,
                  zIndex: 89999
                }}
                // onPress={() => this.unfollowing(userInfo._id)}
              >
                <Text style={{ color: "#fff" }}>Unfollow</Text>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                style={{
                  position: "absolute",
                  top: 10,
                  right: 10,
                  width: 100,
                  height: 25,
                  backgroundColor: "white",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: 20
                }}
                // onPress={() => this.unfollowing(userInfo._id)}
                // onPress={() => this.following(userInfo._id)}
              >
                <Text style={{ color: Colors.mainColor }}>Follow</Text>
              </TouchableOpacity>
            )
          ) : null
        ) : null}
        {false ? (
          <View style={styles.unpublish}>
            <Text>
              Profile is unpublish. Please follow user to view profile
            </Text>
    
          </View>
        ) : (
          <Animated.View style={styles.container}>
              <SectionList
              ref={sectionList => {
                this.sectionList = sectionList;
              }}
              onScrollBeginDrag={({ nativeEvent }) => {
                this.setState({
                  isEndScroll: false,
                  onScrollBeginPos: nativeEvent.contentOffset.y
                });
              }}
              // onScroll={({ nativeEvent }) => {
              //   if (this.state.isEndScroll) return;
              //   const y = nativeEvent.contentOffset.y;
              //   if (y - this.state.onScrollBeginPos >= 50) {
              //     this.setState({ isEndScroll: true });
              //     this.onScrollUp();
              //   }
              //   if (y - this.state.onScrollBeginPos <= -50) {
              //     this.setState({ isEndScroll: true });
              //     this.onScrollDown();
              //   }
              // }}
              data={postUserId}
              sections={[{ title: "", data: postUserId }]}
              scrollEventThrottle={1}
              onScroll={Animated.event([
                { nativeEvent: { contentOffset: { y: this.scrollY } } }
              ])}

              keyExtractor={this.eventsKeyExtractor}
              renderItem={this.renderSwipe}
              indicatorStyle="default"
            />
             
          </Animated.View>
        )}
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    info: state.me.data,
    allPostsByUserId: state.user.allPostsByUserId
  };
}

function mapDispatchToProps(dispatch) {
  return channingActions(
    {},
    dispatch,
    bindUserActions,
    bindLoadingActions,
    bindMeActions,
    bindToastActions
  );
}

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(ProfileScreen);
export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f2f2f2"
  },
  headerContainer: {
    width: "100%",
    backgroundColor: "#7D153F"
  },
  profilePictureContainer: {
    position: "absolute",
    width: "100%",
    alignItems: "center"
  },
  profilePicture: {
    width: profilePictureSize,
    height: profilePictureSize,
    borderRadius: profilePictureSize / 2,
    borderWidth: 2,
    borderColor: "#fff",
    margin: 5
  },
  headerSmallContainer: {
    top: 25,
    position: "absolute",
    width: "100%",
    flexDirection: "row"
  },
  headerLargeContainer: {
    flex: 1,
    padding: 10
  },
  text: { color: "white", fontSize: 12 },
  textBig: { color: "white", fontSize: 15 },
  textYellow: { color: "yellow", fontSize: 18 },
  honerText: { color: "white", fontSize: 18 },
  allPostOfUser: {
    flex: 1
  },
  detailsContainer: {
    width: "100%",
    padding: 10,
    borderTopWidth: 0.5,
    borderTopColor: "white",
    marginLeft: 20,
    marginRight: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  detailItem: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  boldText: {
    color: "white",
    fontWeight: "bold",
    fontSize: screenWidth * 0.05
  },
  circle: {
    width: (screenWidth * 30) / 100,
    height: (screenWidth * 30) / 100,
    borderRadius: (screenWidth * 30) / 200,
    borderWidth: 1,
    borderColor: "yellow",
    alignItems: "center",
    justifyContent: "center"
  },
  personImg: {
    width: (screenWidth * 30) / 100 - 10,
    height: (screenWidth * 30) / 100 - 10,
    borderRadius: (screenWidth * 30) / 200 - 5,
    borderWidth: 1,
    borderColor: "white"
  },
  img: {
    width: "100%",
    height: "100%"
  },
  leftBorder: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    borderLeftWidth: 0.5,
    borderLeftColor: "white",
    marginTop: 5,
    marginBottom: 5
  },
  item1: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    borderRightWidth: 0.5,
    borderColor: "white",
    margin: 10
  },
  item2: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row"
  },
  headGallery: {
    height: 20,
    width: "100%",
    backgroundColor: "white",
    flexDirection: "row"
  },
  locationText: {
    color: "#7D153F",
    fontSize: 12,
    marginLeft: 10,
    fontWeight: "bold"
  },
  dateText: {
    marginRight: 10,
    alignSelf: "center",
    flex: 1
  },
  unpublish: {
    width: "100%",
    padding: 20,
    justifyContent: "center",
    alignItems: "center"
  }
});
