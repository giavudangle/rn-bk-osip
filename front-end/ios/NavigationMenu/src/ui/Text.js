import React from "react";
import { Text as TextRN, StyleSheet } from "react-native";

const customStyle = {
  // fontFamily: "Quicksand",
  color: "#333"
};

export default (Text = props => (
  <TextRN {...props} style={[customStyle, props.style]}>
    {props.children}
  </TextRN>
));
