import React, { Component } from "react";
import {
  ScrollView,
  View,
  Dimensions,
  StyleSheet,
  Image,
  TouchableOpacity,
  Text
} from "react-native";
import { DrawerNavigator, DrawerItems, SafeAreaView } from "react-navigation";
import {
  MainScreen,
  WorkHistory,
  Watering,
  Statistic,
  FindWater,
  InfoAccount,
  Setting
} from "./Main/ScreenName";
import MainComponent from "../Component/MainComponent";
import WorkingHistoryComponent from "../Component/WorkingHistoryComponent";
import WateringComponent from "../Component/WateringComponent";
import StatisticComponent from "../Component/StatisticComponent";
import FindWaterComponent from "../Component/FindWaterComponent";
import InfoAccountComponent from "../Component/InfoAccountComponent";
import SettingComponent from "../Component/SettingComponent";
var { height, width } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    height: 150,
    width: "100%",
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: "grey"
  },
  icon: {
    width: 50,
    height: 50,
    justifyContent: "center",
    paddingLeft: 5,
    marginLeft: 0,
    marginRight: 0
  }
});
const CustomComponent = props => (
  <ScrollView style={{ flex: 1, width: "100%" }}>
    <View style={styles.container}>
      <Image source={require('../image/logo-text.png')} style={{height: 50, width: 200}}/>
    </View>
    <SafeAreaView style={{ flex: 1 }}>
      <DrawerItems {...props} />
    </SafeAreaView>
    <TouchableOpacity
      style={{ flexDirection: "row", height: 50, width: "100%" }}
      onPress={() => {
        props.screenProps.screenName("Login");
      }}
    >
      <View style={styles.icon}>
        <Image
          source={require("../image/log-out.png")}
          style={{ marginLeft: 5, width: 30, height: 30, tintColor: "black" }}
        />
      </View>
      <Text
        style={{
          textAlignVertical: "center",
          height: 50,
          marginLeft: 15,
          fontWeight: "bold",
          color: "black"
        }}
      >
        Đăng xuất
      </Text>
    </TouchableOpacity>
  </ScrollView>
);
let Drawer = DrawerNavigator(
  {
    MainScreen: {
      screen: MainComponent
    },
    WorkHistory: {
      screen: WorkingHistoryComponent
    },
    Watering: {
      screen: WateringComponent
    },
    Statistic: {
      screen: StatisticComponent
    },
    FindWater: {
      screen: FindWaterComponent
    },
    Setting: {
      screen: SettingComponent
    },
    InfoAccount: {
      screen: InfoAccountComponent
    }
  },
  {
    initialRouteName: MainScreen,
    drawerWidth: 250,
    drawerPosition: "left",
    drawerOpenRoute: "DrawerOpen",
    drawerCloseRoute: "DrawerClose",
    drawerToggleRoute: "DrawerToggle",
    contentComponent: CustomComponent,
    contentOptions: {
      activeTintColor: "#00C99D",
      iconContainerStyle: {
        width: 50,
        height: 50,
        justifyContent: "center",
        paddingLeft: 5,
        marginLeft: 0,
        marginRight: 0
      },
      itemsContainerStyle: {
        borderBottomWidth: 1,
        borderBottomColor: "grey",
        marginLeft: 0
      }
    }
  }
);
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
export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      region: defaultRegion,
      soCayCanTuoi: 6,
      soCayDaTuoi: 1,
      water: 100,
      showModalWater: true,
      showModalStatistic: true
    };
    this.posCay = posCay;
  }
  setWater = water => {
    this.setState({
      water: water
    });
  };
  setShowModalWater = visible => {
    this.setState({
      showModalWater: visible
    });
  };
  setShowModalStatistic = visible => {
    this.setState({
      showModalStatistic: visible
    });
  };
  setCayCanTuoi = () => {
    this.setState({
      soCayCanTuoi: this.state.soCayCanTuoi - 1,
      soCayDaTuoi: this.state.soCayDaTuoi + 1
    });
  };
  render() {
    return (
      <Drawer
        screenProps={{
          screenName: name => this.props.screenName(name),
          main: this
        }}
      />
    );
  }
}
const posCay = [
  {
    coordinate: { longitude: 105.84170244634151, latitude: 21.006687445369757 },
    name: "cayso3",
    title: "Cây số 3",
    description: "Thông tin cây số 3",
    key: 3,
    image: 2,
    luongnuoc: 80
  },
  {
    coordinate: { longitude: 105.84165886044502, latitude: 21.006202305115714 },
    name: "cayso5",
    title: "Cây số 5",
    description: "Thông tin cây số 5",
    key: 5,
    image: 3,
    luongnuoc: 50
  },
  {
    coordinate: { longitude: 105.84208432585001, latitude: 21.00553687791786 },
    name: "cayso10",
    title: "Cây số 10",
    description: "Thông tin cây số 10",
    key: 10,
    image: 4,
    luongnuoc: 25
  },
  {
    coordinate: { longitude: 105.84212020039558, latitude: 21.006037983059144 },
    name: "cayso11",
    title: "Cây số 11",
    description: "Thông tin cây số 11",
    key: 11,
    image: 1,
    luongnuoc: 96
  },
  {
    coordinate: { longitude: 105.8426945284009, latitude: 21.006833300131287 },
    name: "cayso15",
    title: "Cây số 15",
    description: "Thông tin cây số 15",
    key: 15,
    image: 5,
    luongnuoc: 0
  },
  {
    coordinate: { longitude: 105.84342710673809, latitude: 21.0068502017468 },
    name: "cayso18",
    title: "Cây số 18",
    description: "Thông tin cây số 18",
    key: 18,
    image: 2,
    luongnuoc: 80
  },
  {
    coordinate: { longitude: 105.84396589547396, latitude: 21.006817024499725 },
    name: "cayso20",
    title: "Cây số 20",
    description: "Thông tin cây số 20",
    key: 20,
    image: 4,
    luongnuoc: 25
  },
  {
    coordinate: { longitude: 105.84391292184593, latitude: 21.00637382585031 },
    name: "cayso21",
    title: "Cây số 21",
    description: "Thông tin cây số 21",
    key: 21,
    image: 2,
    luongnuoc: 80
  },
  {
    coordinate: { longitude: 105.84430620074272, latitude: 21.006407629183492 },
    name: "cayso22",
    title: "Cây số 22",
    description: "Thông tin cây số 22",
    key: 22,
    image: 1,
    luongnuoc: 100
  },
  {
    coordinate: { longitude: 105.8440225571394, latitude: 21.005591965136265 },
    name: "cayso25",
    title: "Cây số 25",
    description: "Thông tin cây số 25",
    key: 25,
    image: 3,
    luongnuoc: 55
  },
  {
    coordinate: { longitude: 105.84329936653377, latitude: 21.005252364630834 },
    name: "cayso28",
    title: "Cây số 28",
    description: "Thông tin cây số 28",
    key: 28,
    image: 1,
    luongnuoc: 95
  },
  {
    coordinate: { longitude: 105.84415230900049, latitude: 21.0052207520099 },
    name: "cayso30",
    title: "Cây số 30",
    description: "Thông tin cây số 30",
    key: 30,
    image: 5,
    luongnuoc: 0
  },
  {
    coordinate: { longitude: 105.84294565021992, latitude: 21.004163133831764 },
    name: "cayso35",
    title: "Cây số 35",
    description: "Thông tin cây số 35",
    key: 35,
    image: 3,
    luongnuoc: 50
  },
  {
    coordinate: { longitude: 105.84397226572037, latitude: 21.00403981237245 },
    name: "cayso36",
    title: "Cây số 36",
    description: "Thông tin cây số 36",
    key: 36,
    image: 2,
    luongnuoc: 70
  },
  {
    coordinate: { longitude: 105.8450585603714, latitude: 21.006537834543504 },
    name: "cayso40",
    title: "Cây số 40",
    description: "Thông tin cây số 40",
    key: 40,
    image: 4,
    luongnuoc: 28
  },
  {
    coordinate: { longitude: 105.84176816046238, latitude: 21.00485986686264 },
    name: "cayso41",
    title: "Cây số 41",
    description: "Thông tin cây số 41",
    key: 41,
    image: 1,
    luongnuoc: 99
  },
  {
    coordinate: { longitude: 105.8419532328844, latitude: 21.00448552193685 },
    name: "cayso42",
    title: "Cây số 42",
    description: "Thông tin cây số 42",
    key: 42,
    image: 2,
    luongnuoc: 78
  }
];
