import React, { useState } from "react";
import { View } from "react-native";
import { styles } from "./styles";
import MapView, { MapViewProps } from "react-native-maps";
import { Marker } from "react-native-maps";

type MapProps = MapViewProps & {
  latitude: number;
  longitude: number;
};

export default function Map({ latitude, longitude, ...rest }: MapProps) {
  return (
    <View>
      <MapView
        style={styles.map}
        region={{
          latitude: latitude,
          longitude: longitude,
          latitudeDelta: 0,
          longitudeDelta: 0.005,
        }}
        {...rest}
      >
        <Marker coordinate={{ latitude: latitude, longitude: longitude }} />
      </MapView>
    </View>
  );
}
