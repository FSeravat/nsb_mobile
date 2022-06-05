import React, { useState } from "react";
import { View } from "react-native";
import { Image, Text } from "react-native-elements";
import { styles } from "./styles";
import { Divider } from "react-native-elements";
import ArrowBack from "../../components/BackButton";

export default function Notification({ navigation }) {
  const data = {
    bloodType: "O+",
    bloodBank: "HEMOBA",
    adress: "LADEIRA DO HOSPITAL GERAL, BROTAS",
    startDate: "25/05/2022",
    finalDate: "23/06/2022",
    name: "JOELBER SANTOS",
  };
  return (
    <View style={styles.container}>
      <View style={{ marginBottom: 15 }}>
        <ArrowBack />
      </View>
      <View style={styles.card}>
        <View style={styles.containerHeader}>
          <Text style={styles.textHeader}>
            PRECISAMOS DE SANGUE, PRECISAMOS DE VOCÊ.
          </Text>
          {/* <Image
            source={require("../../images/blood-sample.jpg")}
            resizeMode="contain"
            style={{ height: 100 }}
          /> */}
          <Divider
            orientation="vertical"
            style={{
              borderWidth: 2,
              borderColor: "white",
              marginVertical: 25,
            }}
          />
        </View>

        <View style={styles.containerText}>
          <Text style={styles.text}>TIPO: {data.bloodType}</Text>
          <Text style={styles.text}>RECEPTOR: {data.name}</Text>
          <Text style={styles.text}>
            DATA: {data.startDate} a {data.finalDate}
          </Text>
          <Text style={styles.text}>LOCAL DA DOAÇÃO:</Text>
          <Text style={styles.text}>{data.bloodBank}</Text>
          <Text style={styles.text}>{data.adress}</Text>

          <Divider
            orientation="vertical"
            style={{
              borderWidth: 2,
              borderColor: "white",
              marginVertical: 25,
              width: "60%",
            }}
          />
        </View>
      </View>
    </View>
  );
}
