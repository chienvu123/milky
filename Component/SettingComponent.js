import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  TextInput,
  TouchableHighlight
} from "react-native";
import { HeaderComponent, Modal } from "./ComponentName";

export default class SettingComponent extends Component {
  static navigationOptions = {
    drawerLabel: "Cài đặt",
    drawerIcon: () => {
      return (
        <Image
          source={require("../image/settings.png")}
          style={{ paddingLeft: 6, width: 30, height: 30, tintColor: "black" }}
        />
      );
    }
  };
  componentDidMount() {
    this.modal.setModalVisible(true);
  }
  render() {
    return (
      <View style={{ flex: 1, width: "100%" }}>
        <HeaderComponent {...this.props} title="Nguồn nước" />
        <View style={styles.container}>
          <Text onPress={() => this.modal.setModalVisible(true)}>Cài đặt</Text>
        </View>
        <Modal onRef={ref => (this.modal = ref)}>
          <View
            style={{ height: "60%", width: "80%", backgroundColor: "white" }}
          >
            <Text>fdsfsd</Text>
          </View>
        </Modal>
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
