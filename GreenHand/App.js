import React, { Component } from "react";
import { StyleSheet, View, Text, StatusBar } from "react-native";
import { StackNavigator } from "react-navigation";
import Welcome from "./Welcome";
import Login from "./Login";
import Main from "./Main";
import SignUp from "./SignUp";

export default class GreenApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      screen: <Welcome screenName={this.setScreen} />
    };
  }
  setScreen = screenName => {
    switch (screenName) {
      case "SignUp":
        return this.setState({
          screen: <SignUp screenName={this.setScreen} />
        });
      case "Login":
        return this.setState({ screen: <Login screenName={this.setScreen} /> });
      case "Main":
        return this.setState({ screen: <Main screenName={this.setScreen} /> });
    }
  };
  render() {
    return (
      <View style={{ flex: 1 }}>
        <StatusBar style={{ backgroundColor: "rgba(120,240,170,0.3)" }} />
        {this.state.screen}
      </View>
    );
  }
}
