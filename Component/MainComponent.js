import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  Animated,
  Easing,
  ScrollView
} from "react-native";
import { HeaderComponent, Modal } from "./ComponentName";
import { mainComponentStyle } from "./Style";
export default class MainComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fadeAnim: new Animated.Value(0.4),
      marginAnim: new Animated.Value(400)
    };
  }
  componentDidMount() {
    Animated.timing(this.state.marginAnim, {
      toValue: 0,
      duration: 500,
      easing: Easing.bounce
    }).start();
    const ani1 = Animated.timing(this.state.fadeAnim, {
      toValue: 1,
      duration: 700
    });
    const ani2 = Animated.timing(this.state.fadeAnim, {
      toValue: 0.4,
      duration: 700
    });
    const sequen = Animated.sequence([ani1, ani2]);
    Animated.loop(sequen).start();
  }
  infoWater = () => {
    this.modal2.open();
  };
  infoTree = () => {
    this.modal1.open();
  };
  watering = () => {
    this.props.navigation.navigate("Watering");
  };
  static navigationOptions = {
    drawerLabel: "Trang chính",
    drawerIcon: () => {
      return (
        <Image
          source={require("../image/main.png")}
          style={{ width: 30, height: 30, tintColor: "black" }}
        />
      );
    }
  };
  render() {
    return (
      <View style={{ flex: 1, width: "100%" }}>
        <HeaderComponent {...this.props} title="Trang chính" />
        <Modal onRef={ref => (this.modal1 = ref)}>
          <View style={styles.modalContainer}>
            <View>
              <View style={styles.modalItem}>
                <Image
                  source={require("../image/tree.png")}
                  style={styles.modalImage}
                />
                <Text style={{ fontSize: 21, color: "black", margin: 5 }}>
                  - Số cây đã tưới:{" "}
                  <Text style={{ fontWeight: "bold" }}>
                    {14 - this.props.screenProps.main.state.soCayCanTuoi}
                  </Text>
                </Text>
              </View>
              <View style={styles.modalItem}>
                <Image
                  source={require("../image/treeVang.png")}
                  style={styles.modalImage}
                />
                <Text style={{ fontSize: 21, color: "black", margin: 5 }}>
                  - Số cây cần tưới:{" "}
                  <Text style={{ fontWeight: "bold" }}>
                    {this.props.screenProps.main.state.soCayCanTuoi}
                  </Text>
                </Text>
              </View>
              <View style={styles.modalItem}>
                <Image
                  source={require("../image/treeBlack.png")}
                  style={styles.modalImage}
                />
                <Text style={{ fontSize: 21, color: "black", margin: 5 }}>
                  - Số cây chết: <Text style={{ fontWeight: "bold" }}>2</Text>
                </Text>
              </View>
              <View style={styles.modalItem}>
                <Text style={styles.btn} onPress={() => this.modal1.close()}>
                  Xác nhận
                </Text>
              </View>
            </View>
          </View>
        </Modal>
        <Modal onRef={ref => (this.modal2 = ref)}>
          <View style={styles.modalContainer}>
            <View>
              <View style={styles.modalItem}>
                <Image
                  source={require("../image/hydrant.png")}
                  style={styles.modalImage}
                />
                <Text style={{ fontSize: 21, color: "black", margin: 5 }}>
                  - Số vòi nước: <Text style={{ fontWeight: "bold" }}>4</Text>
                </Text>
              </View>
              <View style={styles.modalItem}>
                <Text style={styles.btn} onPress={() => this.modal2.close()}>
                  Xác nhận
                </Text>
              </View>
            </View>
          </View>
        </Modal>
        <ScrollView style={{ flex: 1, width: "100%" }}>
          <Animated.View
            style={[
              mainComponentStyle.container,
              { marginLeft: this.state.marginAnim }
            ]}
          >
            <View style={mainComponentStyle.top}>
              <View style={mainComponentStyle.top1}>
                <Text>Thông tin cây</Text>
                <TouchableOpacity
                  style={mainComponentStyle.top1Circle}
                  onPress={this.infoTree}
                >
                  <Image
                    source={require("../image/tree.png")}
                    style={{ tintColor: "white", width: 40, height: 40 }}
                  />
                </TouchableOpacity>
              </View>
              <View style={mainComponentStyle.top2}>
                <Text>Thông tin nguồn nước</Text>
                <TouchableOpacity
                  style={mainComponentStyle.top2Circle}
                  onPress={this.infoWater}
                >
                  <Image
                    source={require("../image/water.png")}
                    style={{ tintColor: "white", width: 33, height: 48 }}
                  />
                </TouchableOpacity>
              </View>
            </View>
            <View style={mainComponentStyle.mid}>
              <View style={mainComponentStyle.midCircle}>
                <Text style={mainComponentStyle.midText}>
                  {this.props.screenProps.main.state.soCayCanTuoi}
                </Text>
                <Text style={mainComponentStyle.midText}>Cây cần tưới</Text>
                <Image
                  source={require("../image/leaves.png")}
                  style={{ width: 110, height: 120, tintColor: "white" }}
                />
              </View>
            </View>
            <View style={mainComponentStyle.bot}>
              <Animated.View
                style={[
                  mainComponentStyle.botCircle,
                  { opacity: this.state.fadeAnim }
                ]}
              >
                <TouchableOpacity onPress={this.watering}>
                  <Image
                    source={require("../image/watering.png")}
                    style={{
                      tintColor: "white",
                      width: 50,
                      height: 36
                    }}
                  />
                </TouchableOpacity>
              </Animated.View>
              <Text>Tiến hành tưới cây</Text>
            </View>
          </Animated.View>
        </ScrollView>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  modalContainer: {
    height: "40%",
    width: "80%",
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5
  },
  modalItem: {
    height: 50,
    marginTop: 5,
    flexDirection: "row",
    alignItems: "center",
    marginLeft: "4%"
  },
  modalImage: {
    width: 42,
    height: 42
  },
  btn: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#0091ea",
    marginTop: 15,
    marginBottom: 15,
    textAlign: "center",
    width: "96%"
  }
});
