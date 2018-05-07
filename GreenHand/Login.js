import React, { Component } from "react";
import {
  StyleSheet,
  View,
  ScrollView,
  Text,
  Image,
  TextInput,
  TouchableHighlight,
  ActivityIndicator,
  Dimensions
} from "react-native";
import { StackNavigator } from "react-navigation";
import Icon from "react-native-vector-icons/FontAwesome";
import SignUp from "./SignUp";
const widthDevice = Dimensions.get("window").width;
const heightDevice = Dimensions.get("window").height;
export default class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: "",
      password: "",
      isCommit: false
    };
  }
  login = () => {
    this.setState(
      {
        isCommit: true
      },
      () => {
        setTimeout(() => {
          let user = this.state.user;
          let password = this.state.password;
          if (user === "admin") {
            if (password == "admin") {
              this.setState(
                {
                  isCommit: false
                },
                () =>
                  setTimeout(() => {
                    this.props.screenName("Main");
                  }, 50)
              );
            } else {
              alert("Bạn đã nhập sai mật khẩu!: admin");
              this.setState({
                isCommit: false
              });
            }
          } else {
            alert("Tài khoản không tồn tại!: admin");
            this.setState({
              isCommit: false
            });
          }
        }, 2000);
      }
    );
  };
  userSubmit = () => {
    this.refs.password.focus();
  };
  changeUser = value => {
    this.setState({
      user: value
    });
  };
  changePassword = value => {
    this.setState({
      password: value
    });
  };
  loginView = () => {
    this.refs.loginView.scrollTo({ x: 0, y: 0, animated: true });
  };
  render() {
    return (
      <ScrollView
        style={{ flex: 1 }}
        pagingEnabled={true}
        horizontal={true}
        ref="loginView"
      >
        <ScrollView style={{ width: widthDevice, flex: 1 }}>
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
                  <Icon name="user" size={32} color="black" />
                </View>
                <TextInput
                  ref="user"
                  placeholder="Tài khoản"
                  placeholderTextColor="#90a4ae"
                  underlineColorAndroid="transparent"
                  returnKeyType="next"
                  style={styles.input}
                  onChangeText={this.changeUser}
                  onEndEditing={this.userSubmit}
                  autoFocus={true}
                  autoCapitalize="none"
                />
              </View>
              <View style={styles.vInput}>
                <View style={styles.icon}>
                  <Icon name="unlock-alt" size={32} color="black" />
                </View>
                <TextInput
                  ref="password"
                  placeholder="Mật khẩu"
                  placeholderTextColor="#90a4ae"
                  underlineColorAndroid="transparent"
                  secureTextEntry
                  style={styles.input}
                  onEndEditing={this.login}
                  onChangeText={this.changePassword}
                  autoCapitalize="none"
                />
              </View>
              <TouchableHighlight style={styles.btn} onPress={this.login}>
                {this.state.isCommit ? (
                  <ActivityIndicator size="large" color="white" />
                ) : (
                  <Text
                    style={{
                      textAlign: "center",
                      color: "white",
                      fontSize: 20
                    }}
                  >
                    ĐĂNG NHẬP
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
              Bạn chưa phải thành viên?
            </Text>
            <TouchableHighlight
              style={{
                alignItems: "center",
                marginBottom: 5,
                paddingBottom: 10
              }}
              onPress={() => {
                this.refs.loginView.scrollTo({
                  x: widthDevice,
                  y: 0,
                  animated: true
                });
              }}
            >
              <Text
                style={{
                  textAlign: "center",
                  color: "#00C99D",
                  fontWeight: "bold"
                }}
              >
                Đăng ký
              </Text>
            </TouchableHighlight>
          </View>
        </ScrollView>
        <View style={{ width: widthDevice, flex: 1 }}>
          <SignUp loginScreen={this.loginView} />
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 500,
    backgroundColor: "white",
    width: widthDevice,
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
    height: 400,
    zIndex: 2,
    marginBottom: 10
  },
  vContext: {
    height: 100,
    justifyContent: "flex-end"
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
