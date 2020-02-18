import React from "react";
import { View, TouchableOpacity, Text, StyleSheet,Dimensions } from "react-native";
import FormInput from "../../components/FormInput";
import FormButton from "../../components/FormButton";
import { NavigationActions } from 'react-navigation';

import { Colors } from "../../ui";

const screenWidth = Math.round(Dimensions.get("window").width);
const screenHeight = Math.round(Dimensions.get("window").height);

class LoginScreen extends React.Component {
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
    this.props.navigation.dispath(this.navigateAction);
  };

  render(){
    const { navigate } = this.props.navigation;
    const { username, password, savedDataLoaded } = this.state;

    return (
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: Colors.mainColor
        }}
      >
        <View style={styles.mainContent}>
                <Text style={styles.title}>Log in</Text>
                <FormInput
                  style={styles.input}
                  value={username}
                  placeholder="Name / Email"
                  onChange={username => {
                    this.setState({ username });
                  }}
                />
                <FormInput
                  style={styles.input}
                  value={password}
                  placeholder="Password"
                  secureTextEntry={true}
                  onChange={password => this.setState({ password })}
                />
                <FormButton
                  onPress={() => navigate('MainTabs')}
                  containerStyle={styles.loginButton}
                  textStyle={styles.textLogin}
                  text="LOG IN"
                />
                
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
    color: "white",
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
export default LoginScreen;
