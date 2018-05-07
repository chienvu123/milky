import React, { Component } from "react";
import { StyleSheet, View, ScrollView, Text, Animated } from "react-native";
import { Stacknavigation } from "react-navigation";
import Icon from "react-native-vector-icons/FontAwesome";
const color = {
  soCayCanTuoi: "red",
  soCayDaTuoi: "green",
  soCayChet: "black"
};
const widthCay = 50;
const heightCay = 155;
export default class Statist extends Component {
  
  
  constructor(props){
    super(props);
    var animatedView = [];
    this.state = {
      soCayCanTuoi: 0.3 + this.props.screenProps.main.state.soCayCanTuoi / 10,
      soCayDaTuoi: 1.3 + this.props.screenProps.main.state.soCayDaTuoi / 10,
      soCayChet: 0.2,
      animatedView11 : new Animated.Value(1),
      animatedView12 : new Animated.Value(1),
      animatedView21 : new Animated.Value(1),
      animatedView22 : new Animated.Value(1),
      animatedView23 : new Animated.Value(1),
    };
  }
  staggerAnimation = () => {
    Animated.stagger(20, [
      Animated.timing(this.state.animatedView11,
        {
          toValue: heightCay * (this.state.soCayDaTuoi - 1.3),
          duration: 400
        }
      ),
      Animated.timing(this.state.animatedView12,
        {
          toValue: heightCay * (this.state.soCayCanTuoi - 0.3),
          duration: 400
        }
      ),
      Animated.timing(this.state.animatedView21,
        {
          toValue: heightCay * this.state.soCayDaTuoi,
          duration: 400
        }
      ),
      Animated.timing(this.state.animatedView22,
        {
          toValue: heightCay * this.state.soCayCanTuoi,
          duration: 400
        }
      ),
      Animated.timing(this.state.animatedView23,
        {
          toValue: heightCay * this.state.soCayChet,
          duration: 400
        }
      )
    ]).start();
  }
  componentDidMount(){
    this.staggerAnimation();
  }
  render() {
    return (
      <ScrollView
        style={{ flex: 1, width: "100%" }}
        showsVerticalScrollIndicator={false}
      >
        <View style={{ width: "100%", alignItems: "center", marginBottom: 10 }}>
          <Text style={styles.title}>Biểu đồ thống kê cây hôm nay</Text>
          <View style={styles.vStatis}>
            <View>
              <Text style={styles.text}>
                {this.props.screenProps.main.state.soCayDaTuoi}
              </Text>
              <Animated.View
                style={[
                  styles.vCayDaTuoi,
                  { height: this.state.animatedView11 }
                ]}
              />
            </View>
            <View>
              <Text style={styles.text}>
                {this.props.screenProps.main.state.soCayCanTuoi}
              </Text>
              <Animated.View
                style={[
                  styles.vCayCanTuoi,
                  { height: this.state.animatedView12 }
                ]}
              />
            </View>
            <View>
              <Text style={styles.text}>
                0
              </Text>
              <View style={[styles.vCayChet, { height: 4 }]} />
            </View>
          </View>
        </View>
        <View
          style={{
            width: "90%",
            height: 1,
            backgroundColor: "grey",
            marginTop: 45,
            marginBottom: 45,
            marginLeft: "5%"
          }}
        />
        <View style={{ width: "100%", alignItems: "center", marginBottom: 10 }}>
        <Text style={styles.title}>Biểu đồ thống kê cây tuần này</Text>
          <View style={styles.vStatis}>
            <View>
              <Text style={styles.text}>
                {this.props.screenProps.main.state.soCayDaTuoi + 13}
              </Text>
              <Animated.View
                style={[
                  styles.vCayDaTuoi,
                  { height: this.state.animatedView21 }
                ]}
              />
            </View>
            <View>
              <Text style={styles.text}>
                {this.props.screenProps.main.state.soCayCanTuoi + 3}
              </Text>
              <Animated.View
                style={[
                  styles.vCayCanTuoi,
                  { height: this.state.animatedView22 }
                ]}
              />
            </View>
            <View>
              <Text style={styles.text}>
                2
              </Text>
              <Animated.View
                style={[
                  styles.vCayChet,
                  { height: this.state.animatedView23 }
                ]}
              />
            </View>
          </View>
        </View>
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    width: "100%"
  },
  title:{
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  vStatis: {
    height: 300,
    width: "90%",
    justifyContent: "space-around",
    alignItems: "flex-end",
    backgroundColor: "rgba(0,255,255,0.1)",
    borderBottomColor: "black",
    borderBottomWidth: 1,
    borderLeftWidth: 1,
    borderLeftColor: "black",
    borderRightWidth: 1,
    borderRightColor: "black",
    flexDirection: "row"
  },
  vCayChet: {
    backgroundColor: color.soCayChet,
    width: widthCay
  },
  vCayCanTuoi: {
    backgroundColor: color.soCayCanTuoi,
    width: widthCay
  },
  vCayDaTuoi: {
    backgroundColor: color.soCayDaTuoi,
    width: widthCay
  },
  text: {
    width: "100%",
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
    color: 'black'
  }
});
