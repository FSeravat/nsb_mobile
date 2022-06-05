import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignContent: "flex-start",
    justifyContent: "flex-start",
    paddingHorizontal: 25,
    paddingVertical: 45,
  },
  card: {
    backgroundColor: "#FF5757",
    width: "100%",
    height: 500,
    justifyContent: "center",
    paddingHorizontal: 25,
  },
  containerHeader: { maxWidth: "60%" },
  containerText: {},
  textHeader: {
    color: "white",
    alignSelf: "flex-start",
    fontSize: 25,
  },
  text: {
    color: "white",
    alignSelf: "flex-start",
    fontSize: 18,
  },
});
