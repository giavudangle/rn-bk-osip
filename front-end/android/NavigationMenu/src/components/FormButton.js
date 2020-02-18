import React from "react";
import { TouchableOpacity } from "react-native";
import { Text } from "../ui";

export default class FormButton extends React.Component {
  static defaultProps = {
    containerStyle: {},
    textStyle: {},
    editable: true,
    icon: null,
    text: "",
    onPress: e => {
      // console.log("e", e);
    }
  };

  render() {
    const {
      containerStyle,
      textStyle,
      editable,
      onPress,
      icon,
      text
    } = this.props;

    return (
      <TouchableOpacity
        style={containerStyle}
        editable={editable}
        onPress={onPress}
        activeOpacity={1}
      >
        {icon}
        <Text style={textStyle}>{text}</Text>
      </TouchableOpacity>
    );
  }
}
