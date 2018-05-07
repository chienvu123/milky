import { StyleSheet } from "react-native";
const mainComponentStyle = StyleSheet.create({
  container: {
    backgroundColor: "white",
    width: "100%",
    alignItems: "center",
    justifyContent: "center"
  },
  top: {
    flexDirection: "row",
    height: 140,
    width: "100%",
    alignItems: "flex-end"
  },
  mid: {
    height: 265,
    width: "100%",
    alignItems: "center"
  },
  bot: {
    height: 140,
    width: "100%",
    alignItems: "center"
  },
  top1: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center"
  },
  top2: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center"
  },
  top1Circle: {
    height: 74,
    width: 74,
    borderRadius: 37,
    backgroundColor: "#00C99D",
    alignItems: "center",
    justifyContent: "center"
  },
  top2Circle: {
    height: 74,
    width: 74,
    borderRadius: 37,
    backgroundColor: "#00C99D",
    alignItems: "center",
    justifyContent: "center"
  },
  midCircle: {
    height: 240,
    width: 240,
    borderRadius: 120,
    backgroundColor: "#00C99D",
    alignItems: "center",
    justifyContent: "space-around"
  },
  midText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 22,
    textAlign: "center"
  },
  botCircle: {
    height: 74,
    width: 74,
    borderRadius: 37,
    backgroundColor: "#00C99D",
    alignItems: "center",
    justifyContent: "center"
  }
});

export { mainComponentStyle };
