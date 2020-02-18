import React from "react";
import { TextInput as TextInputRN } from "react-native";

const customStyle = {
  // fontFamily: "Quicksand",
  color: "#333"
};

export default (TextInput = props => (
  <TextInputRN {...props} style={[customStyle, props.style]}>
    {props.children}
  </TextInputRN>
));
