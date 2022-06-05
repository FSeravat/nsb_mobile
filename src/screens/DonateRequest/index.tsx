import React, { useRef, useState } from "react";
import { View } from "react-native";
import { Text } from "react-native-elements";
import { styles } from "./styles";
import Input from "../../components/Input_Unform";
import Button from "../../components/Button";
import Picker from "../../components/Picker_Unform";
import ArrowBack from "../../components/BackButton";

import { SubmitHandler, FormHandles } from "@unform/core";
import { Form as FormComponent } from "@unform/mobile";

interface FormData {
  name: string;
  email: string;
}

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

  const formRef = useRef<FormHandles>(null);
  const handleSubmit: SubmitHandler<FormData> = (data) => {
    console.log(formRef.current?.getData());
  };

  return (
    <View style={styles.container}>
      <ArrowBack />
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
      <FormComponent ref={formRef} onSubmit={handleSubmit}>
        <Input name="name" label="Receptor" />
        <Picker
          placeHolder="A+"
          name="bloodType"
          items={selectBloodType}
          label="Tipo sanguíneo"
        />
        <Picker
          placeHolder="Hemoba"
          name="bloodBank"
          items={selectBloodBank}
          label="Banco de sangue"
        />
        <Input name="startDate" label="Data Inicial" type="data" />
        <Input name="finalDate" label="Data Final" />
        <View style={{ marginVertical: 10 }}>
          <Button
            title="Enviar notificação"
            onPress={() => formRef.current?.submitForm()}
          />
        </View>
      </FormComponent>
    </View>
  );
}
