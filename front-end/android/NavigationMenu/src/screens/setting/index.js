import React from "react";
// import Icon from "react-native-vector-icons/Ionicons";
// import { connect } from "react-redux";
import { View, StyleSheet, TouchableHighlight } from "react-native";

import { Text } from "../../ui";
// import { bindLoadingActions } from "../../../redux/actions/loading";
// import { channingActions } from "../../../helpers";
// import { AppNavigation } from "../../../navigation";
// import { bindMeActions } from "../../../redux/actions/me";
// import { bindDialogActions } from "../../../redux/actions/dialog";

// import { ClientEventSystem } from "../../../client-events";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  }
});

class SettingScreen extends React.Component {
  constructor(props) { 
    super(props);
    this.onLogOut = this.onLogOut.bind(this);
  }

  componentDidMount() {}

  logOut() {
    const { meActions, dialogActions } = this.props;
    
    meActions.logout().then(() => {
      ClientEventSystem.disconnect();
      AppNavigation.navToLogin();
    });
  }
  onLogOut = () => {
    const { meActions, dialogActions } = this.props;
    dialogActions.showConfirm("Are you sure to want to log out?","", () => this.logOut())
    // ClientEventSystem.disconnect();
    // meActions.logout().then(() => {
    //   AppNavigation.navToLogin();
    // });
  };

  editProfile = () => {
    AppNavigation.pushScreen.AccountEditInfo(this.props.componentId);
  };

  changePassword = () => {
    AppNavigation.pushScreen.AccountChangePassword(this.props.componentId);
  };

  privacyPolicy = () => {
    AppNavigation.pushScreen.PrivacyPolicy(this.props.componentId);
  };

  termOfUse = () => {
    AppNavigation.pushScreen.TermOfUse(this.props.componentId);
  };

  changePrivacy = () => {
    AppNavigation.pushScreen.AccountChangePrivacy(this.props.componentId);
    //AppNavigation.pushScreen.AccountChangePrivacy(this.props.componentId);
  };

  _renderItem = (icon, text, onPress) => (
    <TouchableHighlight
    activeOpacity={1}
      style={{
        flexDirection: "row",
        alignItems: "center",
        padding: 10
      }}
      underlayColor="rgba(242,242,242,1.0)"
      onPress={onPress}
    >
      <>
        {/* <Icon
          name={icon}
          backgroundColor="rgba(255,255,255,0)"
          color="#333"
          size={30}
        /> */}
        <Text style={{ paddingLeft: 10 }}>{text}</Text>
      </>
    </TouchableHighlight>
  );

  render() {
    return (
      <View style={styles.container}>
        <View style={{ padding: 10 }}>
          <Text style={{ fontSize: 20 }}>Account Settings</Text>
          <Text style={{ fontSize: 15 }}>Manage your account information.</Text>
        </View>

        {this._renderItem("md-contact", "Edit Profile", this.editProfile)}
        {this._renderItem("md-key", "Change Password", this.changePassword)}
        {this._renderItem("ios-people", "Account Privacy", this.changePrivacy)}
        {this._renderItem("md-paper", "Term of Use", this.termOfUse)}
        {this._renderItem("md-eye-off", "Privacy Policy", this.privacyPolicy)}

        {this._renderItem("ios-log-out", "Log Out", this.onLogOut)}
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return channingActions({}, dispatch, bindMeActions, bindLoadingActions, bindDialogActions);
} 

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(ProfileSettingScreen);
export default SettingScreen;