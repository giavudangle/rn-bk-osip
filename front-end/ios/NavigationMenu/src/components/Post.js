import React from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  ImageBackground
} from "react-native";
// import { connect } from "react-redux";

import {
  PEOPLE_WHITE_COLOR,
  HEART_WHITE_COLOR,
  PLAY_BUTTON
} from "../assets/images";
// import Utils from "../helpers/Utils";
// import { channingActions } from "../helpers";
// import { bindLoadingActions } from "../redux/actions/loading";
// import { bindPlaceActions } from "../redux/actions/place";
// import { bindToastActions } from "../redux/actions/toast";
// import { bindUserActions } from "../redux/actions/user";
import { Text, ProgressiveImage } from "../ui";
// import { AppNavigation } from "../navigation";
// import { bindPostActions } from "../redux/actions/post";

// import FormRating from "./FormRating";
import FormProfilePicture from "./FormProfilePicture";
import Icon from 'react-native-ionicons'

class Post extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      videoPaused: true
    };
  }

  // gotoGuestPage(data) {
  //   if (data.userPost._id === this.props.meId) {
  //     AppNavigation.popToRoot(this.props.parentScreenId);
  //     AppNavigation.selectTab(4);
  //   } else {
  //     const { toastActions } = this.props;
  //     // if (data.userPost.isPublished == false) {
  //     //   toastActions.show("Account unpublish");
  //     // } else {
  //     AppNavigation.pushScreen.Profile(
  //       this.props.parentScreenId,
  //       data.userPost._id
  //     );
  //     // }
  //   }
  // }

  // gotoPeopleInLocation = data => {
  //   const { placeActions, loadingActions } = this.props;
  //   // placeActions
  //   //   .fetchPeopleInPlace(placeId._id)
  //   //   .then(response => {
  //   //     loadingActions.hide();
  //   AppNavigation.pushScreen.PeopleInLocation(
  //     this.props.parentScreenId,
  //     data,
  //     data.placeId.name
  //   );
  //   // })
  //   // .catch(error => {
  //   //   console.log(error);
  //   //   if (error.status == 401)
  //   //     this.showAlert("Invalid", "Please check again!");
  //   //   console.log("Login Error", error.data.message);
  //   //   loadingActions.hide();
  //   // });
  // };

  render() {
    const {navigate} = this.props.navigation;
    const { fitHeight, data } = this.props;
    // const distance = Utils.getDistance(
    //   { longitude: currentPosition.long, latitude: currentPosition.lat },
    //   {
    //     longitude: data.placeId.location.coordinates[0],
    //     latitude: data.placeId.location.coordinates[1]
    //   }
    // );
    const height = fitHeight ? 1 : 2 / 3;
    // const contentType = this.props.data.media.type;

    const imageBackground = {
      uri: data.media.path.thumnail
    };

    return (
      <View style={styles.container}>
        <ProgressiveImage
          thumbnailSource={imageBackground}
          source={{
            uri: data.media.path.thumnail
          }}
          resizeMode="cover"
          style={[
            styles.backgroundImage,
            {
              aspectRatio: height,
              position: "absolute",
              borderRadius: 5
            }
          ]}
          imageStyle={{ borderRadius: 7 }}
        />
        <View style={[styles.backgroundImage, { aspectRatio: height }]}>
          <TouchableOpacity onPress={() => navigate('RegisterEvent')} activeOpacity={1}>
            <Text style={styles.placeName} numberOfLines={2}>
              {data.title}
            </Text>

            {/* <FormRating rate={data.rate} color="border" /> */}
          </TouchableOpacity>
          {/* <Icon android="md-add" size={25} />; */}

          {/* <TouchableOpacity
            activeOpacity={1}
            onPress={this.gotoPostDetail}
            style={styles.centerView}
          >
            {contentType === "video" ? (
              <Image
                source={PLAY_BUTTON}
                resizeMode="contain"
                style={{ width: 50, height: 50, opacity: 0.8 }}
              />
            ) : null}
          </TouchableOpacity> */}

          <View style={styles.postInfo}>
            <Text style={styles.textWhite}>DISTANCE</Text>
            <TouchableOpacity
              activeOpacity={1}
              onPress={() => navigate('RegisterEvent')}              
              style={styles.peopleInLocation}
            >
              {/* <Text style={styles.textWhite}>INTERACTUSER</Text> */}
              {/* <Image
                source={HEART_WHITE_COLOR}
                resizeMode="contain"
                style={{ width: 15, marginLeft: 3, marginRight: 3 }}
              /> */}
              <Text style={styles.textWhite}>{data.numberOfUserRegister+'/'+ data.maximumNumberRegister}</Text>
              <Image
                source={PEOPLE_WHITE_COLOR}
                resizeMode="contain"
                style={{ width: 15, marginLeft: 3, marginRight: 3 }}
              />
            </TouchableOpacity>
          </View>
        </View>

        <View style={{ flexDirection: "row" }}>
          <FormProfilePicture
            size={40}
            source={data.user.profilePicture.thumnail}
            onPress={() => navigate('RegisterEvent')}          
            />
          <View style={{ marginLeft: 5, flex: 1 }}>
            <View style={styles.row}>
              <View style={{ width: "70%" }}>
                <Text style={styles.userName} numberOfLines={1}>
                  {data.user.lastName + ' ' +data.user.firstName}
                </Text>
              </View>
              <View>
                <Text numberOfLines={1}>
                  TIME
                </Text>
              </View>
            </View>
            <Text numberOfLines={1}>{data.content}</Text>
          </View>
        </View>
      </View>
    );
  }
}

// function mapStateToProps(state) {
//   return {
//     currentPosition: state.me.position,
//     meId: state.me.data._id
//   };
// }

// function mapDispatchToProps(dispatch) {
//   return channingActions(
//     {},
//     dispatch,
//     bindUserActions,
//     bindLoadingActions,
//     bindPostActions,
//     bindPlaceActions,
//     bindToastActions
//   );
// }

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(Post);
export default Post;
const styles = StyleSheet.create({
  container: {
    width: "100%",
    padding: 2,
    borderColor: "#7D153F",
    borderWidth: 1,
    borderRadius: 7,
    marginBottom: 10
  },
  backgroundImage: {
    width: "100%",
    justifyContent: "space-between",
    backgroundColor: "rgba(0,0,0,0)",
    marginBottom: 5
  },
  placeName: {
    color: "white",
    marginTop: 5,
    marginLeft: 5,
    fontWeight: "bold"
  },
  centerView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  postInfo: {
    paddingHorizontal: 5,
    flexDirection: "row",
    width: "100%",
    alignItems: "center"
  },
  textWhite: { color: "white", fontSize: 15 },
  userName: { fontWeight: "bold", color: "black" },
  row: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  peopleInLocation: {
    flexDirection: "row",
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center"
  }
});
