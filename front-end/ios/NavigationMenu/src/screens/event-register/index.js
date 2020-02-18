import React from "react";
import { View, TouchableOpacity, Text, StyleSheet,Dimensions,Image } from "react-native";
import FormInput from "../../components/FormInput";
import FormButton from "../../components/FormButton";
import { NavigationActions } from 'react-navigation';

import { Colors } from "../../ui";

const screenWidth = Math.round(Dimensions.get("window").width);
const screenHeight = Math.round(Dimensions.get("window").height);

class RegisterEventScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
      locationReady: true,
      token: "",

      savedDataLoaded: false
    };
  }



  onLogin = () => {
    // this.props.navigation.dispath(this.navigateAction);
  };

  render(){
    // const { navigate } = this.props.navigation;
    const { username, password, savedDataLoaded } = this.state;

    return (
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: 'white'
        }}
      >
        <View style={styles.mainContent}>
                <Text style={styles.title}>RegisterScreen</Text>
                
              </View>
      </View>
    );
  }
  
}
const styles = StyleSheet.create({
  mainContent: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  title: {
    fontSize: screenWidth * 0.1,
    color: "black",
    fontWeight: "bold"
  },
  input: {
    backgroundColor: "rgba(0,0,0,0)",
    width: "80%",
    aspectRatio: 8,
    borderRadius: 8,
    borderWidth: 0.5,
    borderColor: "white",
    margin: 8,
    color: "white",
    paddingLeft: 20,
    fontSize: 15
  },
  loginButton: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    color: "#7D153F",
    width: "80%",
    aspectRatio: 8,
    borderRadius: 8,
    margin: 8
  },
})
export default RegisterEventScreen;
