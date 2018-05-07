import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { HeaderComponent, Modal, modalStyle } from "./ComponentName";
import MapView, { Marker, Callout } from "react-native-maps";
import MapViewDirection from "react-native-maps-directions";
var i = 1;
const { width, height } = Dimensions.get("window");
const ASPECT_RATIO = width / height;
const _latitudeDelta = 0.003;
const _longitudeDelta = _latitudeDelta * ASPECT_RATIO;
const defaultRegion = {
  latitude: 21.00621419889564,
  longitude: 105.84312636405228,
  latitudeDelta: _latitudeDelta,
  longitudeDelta: _longitudeDelta
};
const GOOGLE_MAPS_APIKEY = "AIzaSyAatpW72rPm7gBN_0sMlBXk-0GCzZmy7cI";

export default class Watering extends Component {
  static navigationOptions = {
    drawerLabel: "Tưới cây",
    drawerIcon: () => {
      // <Icon name="home" size={30} color="black" />
      return (
        <Image
          source={require("../image/watering.png")}
          style={{ paddingLeft: 6, width: 40, height: 27, tintColor: "black" }}
        />
      );
    }
  };
  defaultModal = (
    <View style={styles.modalContainer}>
      <View style={styles.modalItem}>
        <Image
          source={require("../image/tree.png")}
          style={styles.modalImage}
        />
        <Text style={styles.modalText}>Cây đã được tưới</Text>
      </View>
      <View style={styles.modalItem}>
        <Image
          source={require("../image/forest.png")}
          style={styles.modalImage}
        />
        <Text style={styles.modalText}>Cây đã được tưới</Text>
      </View>
      <View style={styles.modalItem}>
        <Image
          source={require("../image/treeVang.png")}
          style={styles.modalImage}
        />
        <Text style={styles.modalText}>Cây chưa được tưới</Text>
      </View>
      <View style={styles.modalItem}>
        <Image
          source={require("../image/treeRed.png")}
          style={styles.modalImage}
        />
        <Text style={styles.modalText}>Cây sắp hết nước</Text>
      </View>
      <View style={styles.modalItem}>
        <Image
          source={require("../image/treeBlack.png")}
          style={styles.modalImage}
        />
        <Text style={styles.modalText}>Cây đã chết</Text>
      </View>
      <View style={[styles.modalItem, { width: "100%" }]}>
        <Text
          style={{
            width: "40%",
            fontSize: 18,
            color: "#0091ea",
            textAlign: "center"
          }}
          onPress={() => this.modal.setModalVisible(false)}
        >
          Xác nhận
        </Text>
        <Text
          style={{
            width: "60%",
            fontSize: 18,
            color: "#0091ea",
            textAlign: "center"
          }}
          onPress={() => {
            this.modal.setModalVisible(false);
            this.main.setShowModalWater(false);
          }}
        >
          Không nhắc lại
        </Text>
      </View>
    </View>
  );
  constructor(props) {
    super(props);
    this.state = {
      region: defaultRegion,
      origin: defaultRegion,
      destination: null,
      hide2: true,
      hide3: true,
      tuoinuoc: false,
      modalContent: this.defaultModal
    };
    this.main = props.screenProps.main;
    this.originWater = [];
  }
  thongBaoHetNuoc = () => {
    this.setState(
      {
        modalContent: (
          <View style={styles.modalContainer}>
            <View style={modalStyle.header}>
              <Text style={modalStyle.title}>Thông báo</Text>
            </View>
            <View style={modalStyle.body}>
              <View style={modalStyle.item}>
                <Text style={modalStyle.message}>
                  Bình của bạn không đủ nước, hãy đi lấy nước
                </Text>
              </View>
              <Text
                style={modalStyle.button}
                onPress={() => {
                  this.modal.close();
                  this.props.navigation.navigate("FindWater");
                }}
              >
                Lấy nước
              </Text>
              <Text
                style={modalStyle.button}
                onPress={() => this.modal.close()}
              >
                Không tưới nữa
              </Text>
            </View>
          </View>
        )
      },
      () => {
        this.modal.open();
      }
    );
  };
  thongBaoTuoiCay = (need, coordinate, index) => {
    this.setState(
      {
        modalContent: (
          <View style={styles.modalContainer}>
            <View style={modalStyle.header}>
              <Text style={modalStyle.title}>Xác nhận</Text>
            </View>
            <View style={modalStyle.body}>
              <Text style={modalStyle.message}>
                Bạn thật sự muốn tưới cây này chứ?
              </Text>
              <Text
                style={modalStyle.button}
                onPress={() => {
                  if (this.main.state.water >= need) {
                    this.main.setWater(this.main.state.water - need/2);
                    this.setState(
                      {
                        destination: coordinate
                      });
                    setTimeout(() => {
                      this.main.posCay[index].image = 1;
                      this.main.setCayCanTuoi();
                    }, 8000);
                  } else {
                    this.thongBaoHetNuoc();
                  }
                  this.modal.close();
                }}
              >
                Đồng ý
              </Text>
              <Text
                style={modalStyle.button}
                onPress={() => this.modal.close()}
              >
                Không
              </Text>
              <Text
                style={[modalStyle.button, { color: "green" }]}
                onPress={() => {
                  this.setState({
                    hide2: false
                  });
                }}
              >
                Không nhắc lại
              </Text>
            </View>
          </View>
        )
      },
      () => {
        this.modal.open();
      }
    );
  };
  direction = (pos, index) => {
    let coordinate = pos.coordinate;
    let status = pos.image;
    let refName = pos.name;
    let need = pos.luongnuoc;
    if (status == 1 || status == 2) {
    } else {
      if (status == 3 || status == 4) {
        if (this.state.hide2) {
          this.thongBaoTuoiCay(100 - need, coordinate, index);
        } else {
          if (this.main.state.water >= need) {
            this.main.setWater(this.main.state.water - need/2);
            this.setState(
              {
                destination: coordinate
              });
            setTimeout(() => {
              this.main.posCay[index].image = 1;
              this.main.setCayCanTuoi();
            }, 8000);
          } else {
            this.thongBaoHetNuoc();
          }
        }
      } else {
        if (this.state.hide3) {
          alert("Đã báo cáo!");
          this.modal.close();
        } else {
          this.modal.close();
        }
      }
    }
    this.refs[refName].hideCallout();
  };
  changeUser = coordinate => {
  };
  changeRegion = region => {
  };
  show = () => {
    this.setState({
      hide2: true,
      hide3: true
    });
  };
  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      position => {
        console.log(position);
      },
      error => {
        console.log(error);
      },
      { enableHighAccuracy: true, timeout: 10000 }
    );
    if (this.modal) this.modal.setModalVisible(true);
  }
  userLocation = coordinate => {
    this.setState({
      origin: coordinate
    });
  };
  render() {
    const posCay = this.main.posCay;
    return (
      <View style={{ flex: 1, width: "100%" }}>
        <HeaderComponent
          {...this.props}
          title="Tưới cây"
          btnRight={this.show}
        />

        <View style={styles.container}>
          {this.main.state.showModalWater ? (
            <Modal onRef={ref => (this.modal = ref)}>
              {this.state.modalContent}
            </Modal>
          ) : null}

          <View style={styles.vTop}>
            <Text style={{ color: "black", fontSize: 18 }}>
              Lượng nước còn lại:{" "}
            </Text>
            <Text
              style={{
                color: "black",
                backgroundColor:
                  this.main.state.water >= 75
                    ? "#76ff03"
                    : this.main.state.water >= 50
                      ? "#ffff00"
                      : this.main.state.water >= 20
                        ? "#ff5722"
                        : "white",
                width: `${this.main.state.water / 2}%`,
                height: "92%",
                fontSize: 18,
                fontWeight: "bold",
                textAlign: "center"
              }}
            >
              {this.main.state.water}%
            </Text>
          </View>
          <MapView
            style={styles.vMap}
            initialRegion={this.state.region}
            showsUserLocation={true}
            moveOnMarkerPress={false}
            followsUserLocation={true}
            maxZoomLevel={19}
            minZoomLevel={17}
            onUserLocationChange={this.userLocation}
            showsMyLocationButton={false}
            loadingEnabled={true}
            onRegionChange={this.changeRegion}
            onUserLocationChange={this.changeUser}
          >
            {posCay.map((pos, index) => {
              return (
                <MapView.Marker
                  ref={pos.name}
                  coordinate={pos.coordinate}
                  key={pos.key}
                  centerOffset={{ x: 0.5, y: 0.5 }}
                >
                  <Image
                    source={
                      pos.image == 1
                        ? require("../image/tree.png")
                        : pos.image == 2
                          ? require("../image/forest.png")
                          : pos.image == 3
                            ? require("../image/treeVang.png")
                            : pos.image == 4
                              ? require("../image/treeRed.png")
                              : pos.image == 5
                                ? require("../image/treeBlack.png")
                                : pos.image
                    }
                    style={{
                      width: 50,
                      height: 50
                    }}
                  />
                  <MapView.Callout
                    ref={`${pos.name}Callout`}
                    onPress={() => this.direction(pos, index)}
                  >
                    <View style={styles.treeContainer}>
                      <Text
                        style={{
                          width: "90%",
                          height: 30,
                          fontWeight: "bold",
                          textAlign: "center",
                          borderBottomColor: "black",
                          borderBottomWidth: 1
                        }}
                      >
                        {pos.title}
                      </Text>
                      {pos.image == 1 ? (
                        <View style={styles.treeView}>
                          <Text>Cây đã được tưới</Text>
                          <Text>Lượng nước còn lại: {pos.luongnuoc}%</Text>
                        </View>
                      ) : pos.image == 2 ? (
                        <View style={styles.treeView}>
                          <Text>Cây đã được tưới</Text>
                          <Text>Lượng nước còn lại: {pos.luongnuoc}%</Text>
                        </View>
                      ) : pos.image == 3 ? (
                        <View style={styles.treeView}>
                          <Text>Cây chưa được tưới</Text>
                          <Text>Lượng nước còn lại: {pos.luongnuoc}%</Text>
                          <TouchableOpacity
                            style={styles.treeBtn}
                            onPress={() => alert("test")}
                          >
                            <Text>Tưới nước</Text>
                          </TouchableOpacity>
                        </View>
                      ) : pos.image == 4 ? (
                        <View style={styles.treeView}>
                          <Text>Cây sắp hết nước</Text>
                          <Text>Lượng nước còn lại: {pos.luongnuoc}%</Text>
                          <TouchableOpacity
                            style={styles.treeBtn}
                            onPress={() => alert("test")}
                          >
                            <Text>Tưới nước</Text>
                          </TouchableOpacity>
                        </View>
                      ) : pos.image == 5 ? (
                        <View style={styles.treeView}>
                          <Text>Cây đã chết</Text>
                          <Text>Lượng nước còn lại: {pos.luongnuoc}%</Text>
                          <TouchableOpacity
                            style={styles.treeDie}
                            onPress={() => alert("test")}
                          >
                            <Text style={{ color: "white" }}>
                              Báo cáo cây chết
                            </Text>
                          </TouchableOpacity>
                        </View>
                      ) : null}
                    </View>
                  </MapView.Callout>
                </MapView.Marker>
              );
            })}
            {this.state.destination ? (
              <MapViewDirection
                origin={this.state.origin}
                destination={this.state.destination}
                mode="walking"
                language="vi"
                apikey={GOOGLE_MAPS_APIKEY}
                strokeWidth={7}
                strokeColor="#1e88e5"
              />
            ) : null}
          </MapView>
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
    alignItems: "center",
    justifyContent: "center"
  },
  vTop: {
    width: "100%",
    height: 36,
    alignItems: "center",
    flexDirection: "row"
  },
  vMap: {
    width: "100%",
    flex: 1
  },
  treeContainer: {
    width: 200,
    height: 150,
    alignItems: "center",
    backgroundColor: "white"
  },
  treeView: {
    width: "100%",
    alignItems: "center",
    marginTop: 5
  },
  treeBtn: {
    width: "50%",
    height: 40,
    backgroundColor: "#ff6d00",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 15,
    borderRadius: 5
  },
  treeDie: {
    width: "70%",
    height: 40,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 15,
    borderRadius: 5
  },
  modalItem: {
    height: 50,
    width: 240,
    marginTop: 5,
    marginLeft: 5,
    flexDirection: "row",
    alignItems: "center"
  },
  modalImage: {
    width: 42,
    height: 42
  },
  modalText: {
    marginLeft: 7,
    fontSize: 17
  },
  modalContainer: {
    width: "86%",
    backgroundColor: "white",
    flexDirection: "row",
    flexWrap: "wrap",
    borderRadius: 5
  }
});
