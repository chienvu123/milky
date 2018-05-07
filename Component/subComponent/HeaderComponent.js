import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity
} from "react-native";
import { Stacknavigation } from "react-navigation";
import Icon from "react-native-vector-icons/FontAwesome";

var d = new Date();
var dd = d.getDate();
if (dd < 10) {
  dd = `0` + dd;
}
var mm = d.getMonth() + 1;
var yy = d.getFullYear();
var weekday = new Array(7);
weekday[0] = "Chủ nhật";
weekday[1] = "Thứ 2";
weekday[2] = "Thứ 3";
weekday[3] = "Thứ 4";
weekday[4] = "Thứ 5";
weekday[5] = "Thứ 6";
weekday[6] = "Thứ 7";
var dayOfWeek = weekday[d.getDay()];
var days = dayOfWeek + ", ngày " + dd + " tháng " + mm + ", " + yy;
export default class HeaderComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false
    };
  }
  onPress = () => {
    let { navigate } = this.props.navigation;
    navigate("DrawerOpen");
  };
  rightPress = () => {
    this.setState({
      show: true
    });
  };
  showProps = () => {
    this.setState(
      {
        show: false
      },
      () => this.props.btnRight
    );
  };
  render() {
    return (
      <View style={styles.container}>
        <View style={{ flexDirection: "row", width: "100%" }}>
          <TouchableOpacity style={{ width: 40 }} onPress={this.onPress}>
            <Icon name="bars" size={28} color="white" />
          </TouchableOpacity>
          <Text style={styles.title}>{this.props.title}</Text>
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              justifyContent: "flex-end"
            }}
          >
            {this.props.btnRight ? (
              <TouchableOpacity
                style={{ width: 24, height: 36, alignItems: "center" }}
                onPress={this.rightPress}
              >
                <Icon name="ellipsis-v" size={26} color="white" />
              </TouchableOpacity>
            ) : (
              <Icon name="ellipsis-v" size={26} color="white" />
            )}

            {this.state.show ? (
              <TouchableOpacity
                onPress={this.showProps}
                style={styles.showProps}
              >
                <Text>Hiển thị thông báo</Text>
              </TouchableOpacity>
            ) : null}
          </View>
        </View>
        <View style={{ marginLeft: 47 }}>
          <Text style={{ color: "white", marginTop: 20 }}>{days}</Text>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    zIndex: -2,
    padding: 8,
    backgroundColor: "#00C99D",
    width: "100%",
    height: 100,
    shadowColor: "red",
    shadowOffset: { width: 0, height: 20 },
    shadowOpacity: 0.8
  },
  title: {
    fontWeight: "bold",
    marginLeft: 7,
    color: "white",
    fontSize: 16,
    textAlignVertical: "center"
  },
  showProps: {
    backgroundColor: "white",
    position: "absolute",
    top: 15,
    right: 5,
    padding: 5
  }
});
