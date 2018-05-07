import React, { Component } from "react";
import {
  StyleSheet,
  View,
  ScrollView,
  Text,
  Image,
  TextInput,
  TouchableHighlight,
  ActivityIndicator
} from "react-native";
import { Stacknavigation } from "react-navigation";
import Icon from "react-native-vector-icons/FontAwesome";

export default class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      user: "",
      password: "",
      comfirm: "",
      isCommit: false
    };
  }
  signup = () => {
    this.setState(
      {
        isCommit: true
      },
      () => {
        setTimeout(() => {
          let user = this.state.user;
          let password = this.state.password;
          let comfirm = this.state.comfirm;
          let name = this.state.name;
          if (user != "") {
            if (password != comfirm) {
              if (user != "chienvu123") {
                this.setState(
                  {
                    isCommit: false
                  },
                  () => {
                    alert("Đăng ký thành công");
                    setTimeout(() => {
                      this.props.loginScreen();
                    }, 50);
                  }
                );
              } else {
                this.setState(
                  {
                    isCommit: false
                  },
                  () => {
                    alert("Tài khoản đã tồn tại");
                  }
                );
              }
            } else {
              this.setState(
                {
                  isCommit: false
                },
                () => {
                  alert("Xác nhận mật khẩu không trùng!");
                }
              );
            }
          } else {
            this.setState(
              {
                isCommit: false
              },
              () => {
                alert("Bạn không được để trống tài khoản!");
              }
            );
          }
        }, 2000);
      }
    );
  };
  changeUser = value => {
    this.setState({
      user: value
    });
  };
  changeName = value => {
    this.setState({
      name: value
    });
  };
  changeComfirm = value => {
    this.setState({
      comfirm: value
    });
  };
  changePassword = value => {
    this.setState({
      password: value
    });
  };
  render() {
    return (
      <ScrollView style={{ flex: 1, width: "99%" }}>
        <View style={styles.container}>
          <View style={styles.vlogo}>
            <Image
              source={require("../image/app-logo.png")}
              style={{ width: 130, height: 130, marginTop: 30 }}
            />
            <Text style={styles.logo}>The Green Hand</Text>
          </View>
          <View style={styles.vlogin}>
            <View style={styles.vInput}>
              <View style={styles.icon}>
                <Icon name="male" size={32} color="black" />
              </View>
              <TextInput
                placeholder="Họ và tên"
                placeholderTextColor="#90a4ae"
                underlineColorAndroid="transparent"
                returnKeyType="next"
                style={styles.input}
                onChangeText={this.changeName}
              />
            </View>
            <View style={styles.vInput}>
              <View style={styles.icon}>
                <Icon name="user" size={32} color="black" />
              </View>
              <TextInput
                placeholder="Tài khoản"
                placeholderTextColor="#90a4ae"
                underlineColorAndroid="transparent"
                returnKeyType="next"
                style={styles.input}
                onChangeText={this.changeUser}
              />
            </View>
            <View style={styles.vInput}>
              <View style={styles.icon}>
                <Icon name="unlock-alt" size={32} color="black" />
              </View>
              <TextInput
                placeholder="Mật khẩu"
                placeholderTextColor="#90a4ae"
                underlineColorAndroid="transparent"
                secureTextEntry
                style={styles.input}
                onChangeText={this.changePassword}
                returnKeyType="next"
              />
            </View>
            <View style={styles.vInput}>
              <View style={styles.icon}>
                <Icon name="unlock-alt" size={32} color="black" />
              </View>
              <TextInput
                placeholder="Xác nhận mật khẩu"
                placeholderTextColor="#90a4ae"
                underlineColorAndroid="transparent"
                secureTextEntry
                returnKeyType="done"
                style={styles.input}
                onChangeText={this.changeComfirm}
              />
            </View>
            <TouchableHighlight style={styles.btn} onPress={this.signup}>
              {this.state.isCommit ? (
                <ActivityIndicator size="large" color="white" />
              ) : (
                <Text
                  style={{ textAlign: "center", color: "white", fontSize: 20 }}
                >
                  ĐĂNG KÝ
                </Text>
              )}
            </TouchableHighlight>
          </View>
        </View>
        <View style={styles.vContext}>
          <Text
            style={{
              color: "grey",
              fontWeight: "bold",
              textAlign: "center"
            }}
          >
            Bạn có tài khoản rồi?
          </Text>
          <TouchableHighlight
            style={{ alignItems: "center", marginBottom: 5, paddingBottom: 10 }}
            onPress={() => this.props.loginScreen()}
          >
            <Text
              style={{
                textAlign: "center",
                color: "#00C99D",
                fontWeight: "bold"
              }}
            >
              Đăng nhập
            </Text>
          </TouchableHighlight>
        </View>
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    width: "99%",
    marginBottom: 10
  },
  vlogo: {
    flex: 2,
    alignItems: "center"
  },
  vlogin: {
    flex: 2,
    alignItems: "center",
    paddingTop: 20,
    zIndex: 2,
    marginBottom: 10
  },
  vContext: {
    height: 50,
    marginTop: 20
  },
  logo: {
    fontSize: 33,
    textAlign: "center",
    paddingTop: 5
  },
  vInput: {
    flexDirection: "row",
    height: 50,
    width: "80%",
    backgroundColor: "rgba(0,0,0,0.07)",
    marginBottom: 15,
    alignItems: "center",
    opacity: 0.7,
    borderRadius: 5
  },
  icon: {
    width: 45,
    height: 36,
    alignItems: "center",
    justifyContent: "center",
    borderRightWidth: 1,
    borderRightColor: "black"
  },
  input: {
    padding: 5,
    paddingLeft: 10,
    width: "85%",
    height: 40,
    color: "black",
    fontStyle: "italic"
  },
  btn: {
    marginTop: 10,
    alignItems: "center",
    borderRadius: 30,
    height: 50,
    width: "80%",
    backgroundColor: "#00C99D",
    justifyContent: "center",
    marginBottom: 10
  }
});
