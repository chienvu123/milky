import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  TextInput,
  TouchableHighlight
} from "react-native";
import { HeaderComponent } from "./ComponentName";

export default class WorkingHistory extends Component {
  static navigationOptions = {
    drawerLabel: "Lịch sử làm việc",
    drawerIcon: () => {
      return (
        <Image
          source={require("../image/clock.png")}
          style={{ width: 30, height: 30, tintColor: "black" }}
        />
      );
    }
  };
  render() {
    return (
      <View style={{ flex: 1, width: "100%" }}>
        <HeaderComponent {...this.props} title="Lịch sử làm việc" />
        <View style={styles.container}>
          <Text>Lịch sử làm việc</Text>
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
