import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
} from "react-native";
import { HeaderComponent } from "./ComponentName";
import MapView, { Marker, Callout } from "react-native-maps";
import MapViewDirection from "react-native-maps-directions";

const GOOGLE_MAPS_APIKEY = "AIzaSyAatpW72rPm7gBN_0sMlBXk-0GCzZmy7cI";

export default class FindWaterComponent extends Component {
  static navigationOptions = {
    drawerLabel: "Tìm nguồn nước",
    drawerIcon: () => {
      return (
        <Image
          source={require("../image/water.png")}
          style={{ paddingLeft: 6, width: 24, height: 35, tintColor: "black" }}
        />
      );
    }
  };
  constructor(props) {
    super(props);
    this.main = props.screenProps.main;
    this.state = {
      destination: null
    };
  }
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
  direction = pos => {
    this.setState({
      destination: pos.coordinate
    });
    this.refs[pos.key].hideCallout();
    setTimeout(() => this.main.setWater(100), 15000);
  };
  render() {
    return (
      <View style={{ flex: 1, width: "100%" }}>
        <HeaderComponent {...this.props} title="Nguồn nước" />
        <View style={styles.container}>
          <View style={styles.vTop}>
            <Text style={{ color: "black", fontSize: 18 }}>
              Lượng nước còn lại:{" "}
            </Text>
            <Text
              style={{
                color: "black",
                width: `${this.main.state.water / 2}%`,
                backgroundColor:
                  this.main.state.water >= 75
                    ? "#76ff03"
                    : this.main.state.water >= 50
                      ? "#ffff00"
                      : this.main.state.water >= 20
                        ? "#ff5722"
                        : "white",
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
            initialRegion={this.main.state.region}
            showsUserLocation={true}
            moveOnMarkerPress={false}
            followsUserLocation={true}
            maxZoomLevel={19}
            minZoomLevel={17}
            showsMyLocationButton={false}
            loadingEnabled={true}
            onRegionChange={this.changeRegion}
            onUserLocationChange={this.changeUser}
          >
            {originWater.map(caseCade => {
              return (
                <MapView.Marker
                  ref={caseCade.key}
                  coordinate={caseCade.coordinate}
                  key={caseCade.key}
                  centerOffset={{ x: 0.5, y: 0.5 }}
                >
                  <Image
                    source={require("../image/hydrant.png")}
                    style={{
                      width: 50,
                      height: 50
                    }}
                  />
                  <MapView.Callout
                    ref={`${caseCade.key}Callout`}
                    onPress={() => this.direction(caseCade)}
                  >
                    <View style={{ width: 200 }}>
                      <Text>Bạn muốn đến đây lấy nước?</Text>
                      <Text>Nhấn vào đây!</Text>
                    </View>
                  </MapView.Callout>
                </MapView.Marker>
              );
            })}
            {this.state.destination ? (
              <MapViewDirection
                origin={{
                  latitude: this.main.state.region.latitude,
                  longitude: this.main.state.region.longitude
                }}
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
  }
});

const originWater = [
  {
    key: "caseCade1",
    coordinate: { longitude: 105.8426060155034, latitude: 21.006065213583884 }
  },
  {
    key: "caseCade2",
    coordinate: { longitude: 105.843455940485, latitude: 21.004629187868076 }
  },
  {
    key: "caseCade3",
    coordinate: { longitude: 105.84362626075745, latitude: 21.00607898534163 }
  },
  {
    key: "caseCade4",
    coordinate: { longitude: 105.84223352372646, latitude: 21.006951298406978 }
  }
];
