import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
} from "react-native";
import { HeaderComponent, Modal } from "./ComponentName";
import Statist from "./subComponent/statistic";
export default class StatisticComponent extends Component {
  static navigationOptions = {
    drawerLabel: "Thống kê",
    drawerIcon: () => {
      // <Icon name="home" size={30} color="black" />
      return (
        <Image
          source={require("../image/graph.png")}
          style={{ width: 30, height: 30, tintColor: "black" }}
        />
      );
    }
  };
  componentDidMount() {
    if (this.modal) this.modal.open();
  }
  render() {
    return (
      <View style={{ flex: 1, width: "100%" }}>
        <HeaderComponent {...this.props} title="Thống kê" />
        {this.props.screenProps.main.state.showModalStatistic ? (
          <Modal onRef={ref => (this.modal = ref)}>
            <View
              style={{
                width: "86%",
                height: "50%",
                backgroundColor: "white",
                borderRadius: 5,
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              <View style={styles.modalItem}>
                <View
                  style={{ width: 42, height: 42, backgroundColor: "green" }}
                />
                <Text style={styles.modalText}>Số cây đã đủ nước</Text>
              </View>
              <View style={styles.modalItem}>
                <View
                  style={{ width: 42, height: 42, backgroundColor: "red" }}
                />
                <Text style={styles.modalText}>Số cây chưa tưới</Text>
              </View>
              <View style={styles.modalItem}>
                <View
                  style={{ width: 42, height: 42, backgroundColor: "black" }}
                />
                <Text style={styles.modalText}>Số cây đã chết</Text>
              </View>
              <View style={[styles.modalItem, { width: "100%" }]}>
                <Text style={styles.btn} onPress={() => this.modal.close()}>
                  Xác nhận
                </Text>
                <Text
                  style={[styles.btn, { width: "60%" }]}
                  onPress={() => {
                    this.modal.close();
                    this.props.screenProps.main.setShowModalStatistic(false);
                  }}
                >
                  Không nhắc lại
                </Text>
              </View>
            </View>
          </Modal>
        ) : null}

        <View style={styles.container}>
          <Statist {...this.props} />
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    width: "100%",
    alignItems: "center"
  },
  modalItem: {
    flexDirection: "row",
    height: 50,
    width: "80%",
    alignItems: "center",
    marginVertical: 10
  },
  modalText: {
    fontSize: 20,
    color: "black",
    margin: 5
  },
  btn: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#0091ea",
    marginTop: 15,
    marginBottom: 15,
    textAlign: "center",
    width: "40%"
  }
});
