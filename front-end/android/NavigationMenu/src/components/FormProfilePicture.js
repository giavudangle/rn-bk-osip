import React from "react";
import { TouchableOpacity, Image } from "react-native";
import { Text } from "../ui";
// import Utils from "../helpers/Utils";

export default class FormProfilePicture extends React.Component {
  static defaultProps = {
    data: {},
    size: 30,
    editable: true,
    onPress: e => {
      const { editable } = this.props;
      editable && console.log("e", e);
    }
  };

  render() {
    const { source, size, editable, onPress } = this.props;

    const uri = source;

    return (
      <TouchableOpacity
        onPress={!!editable && onPress }
        underlayColor="rgba(0,0,0,1)"
        activeOpacity={1}
      >
        <Image
          source={{ uri }}
          resizeMode="cover"
          style={{
            width: size,
            height: size,
            borderRadius: size / 2,
            borderWidth: 1,
            borderColor: "white"
          }}
        />
      </TouchableOpacity>
    );
  }
}
