import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ActivityIndicator
} from "react-native";
import { StackNavigator } from "react-navigation";
let interval;
export default class WelcomeCopy extends Component {
  constructor(props) {
    super(props);
    this.state = {
      string: ".",
      number: 1
    };
  }
  setLoading() {
    let number = this.state.number;
    switch (number) {
      case 1:
        this.setState({
          string: "..",
          number: number + 1
        });
        break;
      case 2:
        this.setState({
          string: "...",
          number: number + 1
        });
        break;
      case 3:
        this.setState({
          string: ".",
          number: 1
        });
        break;
    }
  }
  componentDidMount() {
    interval = setInterval(() => {
      this.setLoading();
    }, 450);
    setTimeout(() => {
      clearInterval(interval);
      this.props.screenName("Login");
      //this.props.navigation.navigate('Login');
    }, 2250);
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.vlogo}>
          <Image
            source={require("../image/app-logo-white.png")}
            style={{ width: 130, height: 130 }}
          />
          <Text style={styles.welcome}>The Green Hand</Text>
        </View>
        <View style={styles.vloading}>
          <View style={styles.spinner}>
            <ActivityIndicator size="large" color="white" />
          </View>
          <Text style={styles.text}>
            Vui lòng chờ. Ứng dụng đang tải {this.state.string}
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#00C99D"
  },
  welcome: {
    fontSize: 36,
    textAlign: "center",
    paddingTop: 10,
    color: "white"
  },
  text: {
    fontSize: 18,
    color: "white",
    lineHeight: 30,
    paddingLeft: 15
  },
  vlogo: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30
  },
  vloading: {
    flex: 1
  },
  spinner: {
    alignItems: "center",
    marginTop: 30,
    marginBottom: 10
  }
});
