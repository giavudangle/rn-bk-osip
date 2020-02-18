import React from "react";
import { View } from "react-native";
import { TextInput } from "../ui";

export default class FormInput extends React.Component {
  static defaultProps = {
    style: {},
    textColor: "white",
    secureTextEntry: false,
    selectionColor: "white",
    clearButtonMode: "always",
    placeholderTextColor: "white",
    onChange: e => {
      // console.log("e", e);
    }
  };

  render() {
    const {
      style,
      placeholder,
      value,
      secureTextEntry,
      selectionColor,
      clearButtonMode,
      onChange,
      placeholderTextColor
    } = this.props;

    return (
      <View>
        <TextInput
          style={style}
          value={value}
          clearButtonMode={clearButtonMode}
          autoCapitalize="none"
          clearTextOnFocus
          placeholder={placeholder}
          placeholderTextColor={placeholderTextColor}
          selectionColor={selectionColor}
          secureTextEntry={secureTextEntry}
          onChangeText={onChange}
        />
      </View>
    );
  }
}
