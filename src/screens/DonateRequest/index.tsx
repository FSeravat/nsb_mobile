import React, { useState } from "react";
import { View } from "react-native";
import { Text } from "react-native-elements";
import { styles } from "./styles";
import Input from "../../components/Input";
import Button from "../../components/Button";
import Dropdown from "../../components/Select";

export default function DonateRequest({ route, navigation }) {
  const navigateTo = () => {
    navigation.navigate("Requests");
  };
  const bloodType = [
    { label: "A+", value: "A+" },
    { label: "A-", value: "A-" },
    { label: "B+", value: "B+" },
    { label: "B-", value: "B-" },
    { label: "AB+", value: "AB+" },
    { label: "AB-", value: "AB-" },
    { label: "O+", value: "O+" },
    { label: "O-", value: "O-" },
  ];

  const bloodBank = [
    { label: "Hemoba", value: "Hemoba" },
    { label: "STS", value: "STS" },
  ];
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
        Solicitar doação
      </Text>
      <Input
        label="Receptor"
        value={route.params == undefined ? "" : route.params.name}
      />
      <Dropdown
        data={bloodType}
        label="Tipo sanguíneo"
        value={route.params == undefined ? "" : route.params.bloodType}
      />
      <Dropdown
        data={bloodBank}
        label="Banco de sangue"
        value={route.params == undefined ? "" : route.params.bloodBank}
      />
      <Input
        label="Data Inicial"
        type="data"
        value={route.params == undefined ? "" : route.params.startDate}
      />
      <Input
        label="Data Final"
        type="data"
        value={route.params == undefined ? "" : route.params.finalDate}
      />
      <Button title="Enviar notificação" onPress={navigateTo} />
    </View>
  );
}
