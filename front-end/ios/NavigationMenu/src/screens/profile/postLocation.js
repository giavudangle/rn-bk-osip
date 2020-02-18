import React from "react";
import { View, StyleSheet, Image, ScrollView } from "react-native";
import { Dimensions, TouchableOpacity } from "react-native";
// import { connect } from "react-redux";
import {
  // GalleryTemplate,
  generateGalleryTemplate
} from "../../components/GalleryTemplate";
// import DatePicker from "react-native-datepicker";
// import Utils from "../../../helpers/Utils";

// import { channingActions } from "../../../helpers";
// import { HONOR } from "../../../../assets/images";
import { Text, Colors } from "../../ui";
// import { Navigation } from "react-native-navigation";
// import { AppNavigation } from "../../../navigation";

// import { bindUserActions } from "../../../redux/actions/user";
// import Swiper from "react-native-swiper";
import Carousel, { Pagination } from "react-native-snap-carousel";

const screenWidth = Math.round(Dimensions.get("window").width);

class PostLocation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      element: [{},{},{}],
      activeSlide: "0",
      place: this.props.element.place,
      index: 0,
      isClicked: false
    };
    this.onPress = this.onPress.bind(this);
  }

  onPress = () => {
    AppNavigation.pushScreen.ProfileGalleryScrollView(
      this.props.componentId,
      this.state.element[this.state.index].posts
    );
  };

  _renderItem = ({ item, index }) => {
    return (
      <View style={styles.container} key={index}>
        {generateGalleryTemplate(item.posts, this.onPress)}
      </View>
    );
  };
  get pagination() {
    const { element, index } = this.state;
    if (3 == 1)
      return (
        <View
          style={{
            height: 30,
            width: "100%",
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <View
            style={{
              width: 8,
              height: 8,
              borderRadius: 4,
              backgroundColor: "#7D153F"
            }}
          />
        </View>
      );
    else
      return (
        <Pagination
          dotsLength={3}
          activeDotIndex={1}
          tappableDots={true}
          containerStyle={{
            backgroundColor: "#fff",
            paddingVertical: 0,
            height: 30
          }}
          dotColor="#7D153F"
          inactiveDotColor="#7D153F"
          dotStyle={{
            width: 8,
            height: 8,
            borderRadius: 5,
            margin: 0,
            padding: 0,
            top: 0,
            backgroundColor: "rgba(0, 0, 0, 0.80)"
          }}
          inactiveDotStyle={
            {
              // Define styles for inactive dots here
            }
          }
          inactiveDotOpacity={0.4}
          inactiveDotScale={0.6}
        />
      );
  }

  render() {
    // if (this.props.element == null) return null;
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: "#fff",
          borderTopWidth: 0.25,
          borderBottomWidth: 0.25,
          borderTopColor: Colors.borderColor,
          borderBottomColor: Colors.borderColor,
          marginBottom: 10
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            paddingRight: 10,
            paddingLeft: 10,
            height: 45
          }}
        >
          <View style={{ width: "70%" }}>
            <Text style={styles.locationText} numberOfLines={1}>
              Đoàn khối OISP
            </Text>
          </View>
          <Text style={styles.dateText}>
            {/* {this.state.element[this.state.index]._id.date} */}
            10/12/2020
          </Text>
        </View>
        <Carousel
          data={this.state.element}
          ref={ref => (this.carousel = ref)}
          renderItem={this._renderItem}
          sliderWidth={screenWidth}
          itemWidth={screenWidth}
          onSnapToItem={index => this.setState({ index: index })}
        />
        {this.pagination}
      </View>
    );
  }
}
function mapStateToProps(state) {
  return {
    currentPosition: state.me.position,
    meId: state.me.data._id
  };
}

function mapDispatchToProps(dispatch) {
  return channingActions({}, dispatch);
}
// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(PostLocation);
export default PostLocation;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  body1: {
    flex: 1,
    backgroundColor: "#7D153F"
  },
  body2: {
    flex: 1
  },
  details: {
    flex: 1,
    borderTopWidth: 0.5,
    borderTopColor: "white",
    marginLeft: 20,
    marginRight: 20,
    flexDirection: "row",
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
    alignItems: "center",
    justifyContent: "center",
    borderLeftWidth: 0.5,
    borderLeftColor: "white",
    marginTop: 10,
    marginBottom: 10
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
    fontSize: 15
    // fontWeight: "bold"
  },
  dateText: {
    color: "#7D153F",
    fontSize: 15
    // fontWeight: "bold"
  }
});
