import React from "react";
import { Text } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const IconModi = ({ name, color, style, ...props }) => {

  return  <Icon
  name={name}
  backgroundColor="rgba(255,255,255,0)"
  color="#333"
  size={25}
  />;
};

export default IconModi;
