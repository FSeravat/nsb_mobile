import { StyleSheet } from "react-native";
import Constants from "expo-constants";

export const styles = StyleSheet.create({
  header: {
    backgroundColor: "#E9A2AD",
    marginTop: Constants.statusBarHeight,
    minHeight: 100,
    paddingBottom: 15,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  headerLeft: {
    width: "50%",
  },
  switchContainer: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 15,
    marginBottom: 15,
  },
  notificationContainer: {
    maxHeight: 300,
  },
  footerContainer: {},
});
