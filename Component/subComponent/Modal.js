import React, { Component } from "react";
import { Text, TouchableOpacity, View, StyleSheet } from "react-native";

export default class Modal extends Component {
  state = {
    modalVisible: false
  };

  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }
  open = () => {
    this.setState({ modalVisible: true });
  };
  close = () => {
    this.setState({ modalVisible: false });
  };
  componentDidMount() {
    this.props.onRef(this);
  }
  render() {
    return this.state.modalVisible ? (
      <View
        style={{
          height: "100%",
          width: "100%",
          position: "absolute",
          zIndex: 100
        }}
      >
        <View style={styles.modalContainer}>
          <TouchableOpacity
            style={styles.view}
            onPress={() => this.setModalVisible(false)}
          />
          {this.props.children}
        </View>
      </View>
    ) : null;
  }
}

const styles = StyleSheet.create({
  modalContainer: {
    backgroundColor: "rgba(0,0,0, 0.4)",
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center"
  },
  view: {
    height: "100%",
    width: "100%",
    position: "absolute",
    top: 0
  }
});
