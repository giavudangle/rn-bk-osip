import React, { Component } from "react";
import { View, StyleSheet, ScrollView, RefreshControl } from "react-native";
// import { connect } from "react-redux";

import Post from "../../components/Post";
// import StdioInput from "../../../components/StdioInput";
// import { channingActions } from "../../../helpers";
// import { bindDialogActions } from "../../../redux/actions/dialog";
// import { bindPostActions } from "../../../redux/actions/post";

class GeneralEvent extends Component {
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
    const postData = [
      {
        id: "",
        title: "Mùa Hè Xanh",
        content: "Chiến dịch vào mùa hè, mùa hè tình nguyện",
        numberOfUserRegister: "23",
        maximumNumberRegister: "50",
        timeStamp: "",
        media: {
          path: {
            thumnail: "http://www.cadivi-vn.com/vnt_upload/news/06_2018/IMG_8709.jpg"
          }
        },
        user:{
          username: "doankhoioisp",
          firstName: "Khối",
          lastName: "Đoàn",
          profilePicture: {
            thumnail: "https://static.laodong.vn/Storage/NewsPortal/2019/6/16/739322/Tiep-Suc-Mua-Thi.jpg?w=960&crop=auto&scale=both"
          },
          id: "",
        }
      },
      {
        id: "",
        title: "Mùa Hè Xanh",
        content: "Chiến dịch vào mùa hè, mùa hè tình nguyện",
        numberOfUserRegister: "23",
        maximumNumberRegister: "50",
        timeStamp: "",
        media: {
          path: {
            thumnail: "https://static.laodong.vn/Storage/NewsPortal/2019/6/16/739322/Tiep-Suc-Mua-Thi.jpg?w=960&crop=auto&scale=both"
          }
        },
        user:{
          username: "doankhoioisp",
          firstName: "Khối",
          lastName: "Đoàn",
          profilePicture: {
            thumnail: "https://static.laodong.vn/Storage/NewsPortal/2019/6/16/739322/Tiep-Suc-Mua-Thi.jpg?w=960&crop=auto&scale=both"
          },
          id: "",
        }
      },
      {
        id: "",
        title: "Xuân tình nguyện",
        content: "Chiến dịch vào mùa xuân, mùa xuân tình nguyện",
        numberOfUserRegister: "23",
        maximumNumberRegister: "50",
        timeStamp: "",
        media: {
          path: {
            thumnail: "https://images.hcmcpv.org.vn/res/news/2019/06/29-06-2019-sinh-vien-nhieu-truong-ra-quan-chien-dich-tinh-nguyen-mua-he-xanh-40082689.jpg"
          }
        },
        user:{
          username: "doankhoioisp",
          firstName: "Khối",
          lastName: "Đoàn",
          profilePicture: {
            thumnail: "https://static.laodong.vn/Storage/NewsPortal/2019/6/16/739322/Tiep-Suc-Mua-Thi.jpg?w=960&crop=auto&scale=both"
          },
          id: "",
        }
      },
      {
        id: "",
        title: "Mùa Hè Xanh",
        content: "Chiến dịch vào mùa hè, mùa hè tình nguyện",
        numberOfUserRegister: "23",
        maximumNumberRegister: "50",
        timeStamp: "",
        media: {
          path: {
            thumnail: "http://image.baodongkhoi.vn/fckeditor/upload/2018/20180706/images/sinh-vien.jpg"
          }
        },
        user:{
          username: "doankhoioisp",
          firstName: "Khối",
          lastName: "Đoàn",
          profilePicture: {
            thumnail: "https://static.laodong.vn/Storage/NewsPortal/2019/6/16/739322/Tiep-Suc-Mua-Thi.jpg?w=960&crop=auto&scale=both"
          },
          id: "",
        }
      },
      {
        id: "",
        title: "Xuân tình nguyện",
        content: "Chiến dịch vào mùa xuân, mùa xuân tình nguyện",
        numberOfUserRegister: "23",
        maximumNumberRegister: "50",
        timeStamp: "",
        media: {
          path: {
            thumnail: "http://1.bp.blogspot.com/-DjLLApPBcu0/VqZUWk1NHHI/AAAAAAAAFeM/gRbDHLHqXIQ/s1600/avatar%2Btet%2B1.jpg"
          }
        },
        user:{
          username: "doankhoioisp",
          firstName: "Khối",
          lastName: "Đoàn",
          profilePicture: {
            thumnail: "https://static.laodong.vn/Storage/NewsPortal/2019/6/16/739322/Tiep-Suc-Mua-Thi.jpg?w=960&crop=auto&scale=both"
          },
          id: "",
        }
      },
      
    ]
    // const { posts, isRefreshPostNearby } = this.props;
    const isRefreshPostNearby = false;
    let isFitLeft = true;
    let isFitRight = false;
    const posts = [
      {},{},{},{},{},{},{},{}
    ]
    const isCloseToBottom = ({
      layoutMeasurement,
      contentOffset,
      contentSize
    }) => {
      const paddingToBottom = 100;
      return (
        layoutMeasurement.height + contentOffset.y >=
        contentSize.height - paddingToBottom
      );
    };
    return (
      <View style={styles.container}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          onScrollBeginDrag={({ nativeEvent }) => {
            this.setState({ onScrollBeginPos: nativeEvent.contentOffset.y });
          }}
          onScrollEndDrag={({ nativeEvent }) => {
            const y = nativeEvent.contentOffset.y;
            if (y - this.state.onScrollBeginPos >= 100) {
              this.onScrollUp();
            }
            if (y - this.state.onScrollBeginPos <= -100) {
              this.onScrollDown();
            }
          }}
          refreshControl={
            <RefreshControl
              refreshing={this.state.refreshing}
              onRefresh={this._onRefresh}
            />
          }
          onScroll={({ nativeEvent }) => {
            if (isCloseToBottom(nativeEvent) && !isRefreshPostNearby) {
              this._onEndReach();
            }
          }}
          scrollEventThrottle={400}
        >
          <View style={styles.postsContainer}>
            <View style={styles.col}>
              {postData.map((post, index) => {
                if (index % 2 == 0) {
                  isFitLeft = !isFitLeft;
                  return (
                    <Post
                      parentScreenId={this.props.parentScreenId}
                      fitHeight={isFitLeft}
                      key={index}
                      data={post}
                      navigation={this.props.navigation}
                    />
                  );
                }
              })}
            </View>
            <View style={styles.col}>
              {postData.map((post, index) => {
                if (index % 2 == 1) {
                  isFitRight = !isFitRight;
                  return (
                    <Post
                      parentScreenId={this.props.parentScreenId}
                      fitHeight={isFitRight}
                      key={index}
                      data={post}
                      navigation={this.props.navigation}
                    />
                  );
                }
              })}
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

// function mapStateToProps(state) {
//   return {
//     posts: state.post.postsNearBy.items,
//     isRefreshPostNearby: state.post.postsNearBy.isRefresh,
//     currentPosition: state.me.position
//   };
// }

// function mapDispatchToProps(dispatch) {
//   return channingActions({}, dispatch, bindDialogActions, bindPostActions);
// }

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(Nearby);
export default GeneralEvent;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingHorizontal: 10,
    paddingTop: 10
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
