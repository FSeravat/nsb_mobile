import React, { useState } from "react";
import { View } from "react-native";
import { styles } from "./styles";
import Map from "../../components/Map";
import { Text } from "react-native-elements";

const key: string = "ef564fad5b063c451d0e9f326b60211d";
const adress: string = "Av. Juracy Magalhães Júnior, 2096";
var lat = 0;
var lon = 0;
fetch(
  "http://api.positionstack.com/v1/forward?access_key=" +
    key +
    "&query=" +
    adress
)
  .then((response) => response.json())
  .then((data) => {
    var obj = { lat: Number, lng: Number };
    obj.lat = data.data[0].latitude;
    obj.lng = data.data[0].longitude;
    lat = data.data[0].latitude;
    lon = data.data[0].longitude;
  });
export default function DonateRequest({ navigation }) {
  return (
    <View style={styles.container}>
      <Text
        style={{
          alignSelf: "flex-start",
          color: "#283744",
          paddingLeft: 10,
          paddingBottom: 15,
          paddingTop: 15,
        }}
        h4
      >
        Onde doar ?
      </Text>
      <Map latitude={lat} longitude={lon} />
    </View>
  );
}
