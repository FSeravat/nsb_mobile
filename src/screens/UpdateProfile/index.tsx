import React, { useRef, useState } from "react";
import { View, ScrollView, TouchableOpacity } from "react-native";
import { Text } from "react-native-elements";
import { styles } from "./styles";
import Input from "../../components/Input_Unform";
import Button from "../../components/Button";
import Picker from "../../components/Picker_Unform";

import { MaterialIcons } from "@expo/vector-icons";
import { useAuth } from "../../hooks/auth";
import ArrowBack from "../../components/BackButton";

import { SubmitHandler, FormHandles } from "@unform/core";
import { Form as FormComponent } from "@unform/mobile";

interface FormData {
  name: string;
  email: string;
}

export default function UpdateProfile({ navigation }) {
  const { user, signOut } = useAuth();
  const formRef = useRef<FormHandles>(null);
  const handleSubmit: SubmitHandler<FormData> = (data) => {
    console.log(formRef.current?.getData());
    mainScreen();
  };
  const gender = [
    { label: "Masculino", value: "m" },
    { label: "Feminino", value: "f" },
  ];
  const mainScreen = () => {
    navigation.navigate("Main");
  };
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginBottom: 15,
          }}
        >
          <View style={{ alignSelf: "flex-start" }}>
            <ArrowBack />
          </View>
          <TouchableOpacity
            onPress={() => signOut()}
            style={{ alignSelf: "center" }}
          >
            <MaterialIcons
              name="logout"
              size={40}
              color="black"
              style={{ alignSelf: "flex-end" }}
            />
          </TouchableOpacity>
        </View>
        <Text
          style={{
            alignSelf: "flex-start",
            color: "#283744",
            paddingLeft: 10,
            paddingBottom: 15,
          }}
          h4
        >
          Atualizar Perfil
        </Text>
        <FormComponent ref={formRef} onSubmit={handleSubmit}>
          <Input label="Nome Completo" name="name" />
          <Picker placeHolder="m" items={gender} label="Sexo" name="gender" />
          <Input label="Tipo Sanguíneo" name="bloodType" />
          <Input label="E-mail" type="email" name="email" />
          <Input label="CPF" type="cpf" name="cpf" />
          <Input label="Data de Nascimento" type="data" name="birthDate" />
          <Input label="CEP" type="cep" name="cep" />
          <Input label="Senha" type="password" name="password" />
          <Input
            label="Confirmação de Senha"
            type="password"
            name="confirmPassword"
          />
          <View style={{ marginVertical: 10 }}>
            <Button
              title="Atualizar Perfil"
              onPress={() => formRef.current?.submitForm()}
            />
          </View>
        </FormComponent>
      </ScrollView>
    </View>
  );
}
