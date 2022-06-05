import React, { useRef, useState } from "react";
import { View } from "react-native";
import { Text, Image } from "react-native-elements";
import { styles } from "./styles";
import Input from "../../components/Input_Unform";
import Button from "../../components/Button";

import { SubmitHandler, FormHandles } from "@unform/core";
import { Form as FormComponent } from "@unform/mobile";

import { useAuth } from "../../hooks/auth";

interface FormData {
  name: string;
  email: string;
}

export default function Login({ navigation }) {
  const newAccount = () => {
    navigation.navigate("CreateNewAccount");
  };

  const { signIn } = useAuth();

  const formRef = useRef<FormHandles>(null);
  const handleSubmit: SubmitHandler<FormData> = (data) => {
    console.log(formRef.current?.getData());
    signIn({
      login: formRef.current?.getData().email,
      password: formRef.current?.getData().password,
    });
  };

  return (
    <View style={styles.container}>
      <Image
        containerStyle={{ alignSelf: "center" }}
        source={require("../../images/logo.jpg")}
        style={{ width: 250, height: 210, marginBottom: 55 }}
      />
      <FormComponent ref={formRef} onSubmit={handleSubmit}>
        <Input name="email" label="E-Mail" type="email" />
        <Input name="password" label="Senha" type="password" />
        <View style={{ marginVertical: 10 }}>
          <Button
            title="Entrar"
            onPress={() => formRef.current?.submitForm()}
          />
          <Button
            title="Criar uma nova conta"
            main={false}
            onPress={newAccount}
          />
        </View>
      </FormComponent>
    </View>
  );
}
