import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
} from "react-native";
import { HeaderComponent } from "./ComponentName";

export default class InfoAccountComponent extends Component {
  static navigationOptions = {
    drawerLabel: "Thông tin tài khoản",
    drawerIcon: () => {
      return (
        <Image
          source={require("../image/userinfo.png")}
          style={{ paddingLeft: 6, width: 30, height: 30, tintColor: "black" }}
        />
      );
    }
  };
  render() {
    return (
      <View style={{ flex: 1, width: "100%" }}>
        <HeaderComponent {...this.props} title="Nguồn nước" />
        <View style={styles.container}>
          <Text>Thông tin tài khoản</Text>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    width: "99%",
    alignItems: "center",
    justifyContent: "center"
  }
});
