import React, { useState } from "react";
import { View } from "react-native";
import { Text } from "react-native-elements";
import { styles } from "./styles";
import Input from "../../components/Input";
import Button from "../../components/Button";
import Dropdown from "../../components/Select";

export default function DonateRequest({ route, navigation }) {
  const [name, setName] =
    route.params == undefined ? useState("") : useState(route.params.name);
  const [bloodBank, setBloodBank] =
    route.params == undefined
      ? useState("Hemoba")
      : useState(route.params.bloodBank);
  const [bloodType, setBloodType] =
    route.params == undefined
      ? useState("A+")
      : useState(route.params.bloodType);
  const [startDate, setStartDate] =
    route.params == undefined ? useState("") : useState(route.params.startDate);
  const [finalDate, setFinalDate] =
    route.params == undefined ? useState("") : useState(route.params.finalDate);
  const navigateTo = () => {
    navigation.navigate("Requests", true);
  };
  const selectBloodType = [
    { label: "A+", value: "A+" },
    { label: "A-", value: "A-" },
    { label: "B+", value: "B+" },
    { label: "B-", value: "B-" },
    { label: "AB+", value: "AB+" },
    { label: "AB-", value: "AB-" },
    { label: "O+", value: "O+" },
    { label: "O-", value: "O-" },
  ];

  const selectBloodBank = [
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
        value={name}
        onChangeText={(value) => setName(value)}
      />
      <Dropdown
        data={selectBloodType}
        label="Tipo sanguíneo"
        value={bloodType}
        onChange={(value: any) => setBloodType(value.value)}
      />
      <Dropdown
        data={selectBloodBank}
        label="Banco de sangue"
        value={bloodBank}
        onChange={(value: any) => setBloodBank(value.value)}
      />
      <Input
        label="Data Inicial"
        type="data"
        value={startDate}
        onChangeText={(value) => {
          if (value.length == 2 || value.length == 5) value += "/";
          setStartDate(value);
        }}
      />
      <Input
        label="Data Final"
        type="data"
        value={finalDate}
        onChangeText={(value) => {
          if (value.length == 2 || value.length == 5) value += "/";
          setFinalDate(value);
        }}
      />
      <Button title="Enviar notificação" onPress={navigateTo} />
    </View>
  );
}
