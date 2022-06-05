import React, { useRef, useState } from "react";
import { SubmitHandler, FormHandles } from "@unform/core";
import { Form as FormComponent } from "@unform/mobile";
import Input from "../../components/Input_Unform";
import InputMask from "../../components/InputMask_Unform";
import { ScrollView, View } from "react-native";
import { Text } from "react-native-elements";
import { styles } from "./styles";
import Picker from "../../components/Picker_Unform";
import CheckBox from "../../components/CheckBox";
import Overlay from "../../components/Overlay";
import PrivacyPolicy from "../../components/PrivacyPolicy";
import Button from "../../components/Button";
import ArrowBack from "../../components/BackButton";

interface FormData {
  name: string;
  email: string;
}

const gender = [
  { label: "Masculino", value: "m" },
  { label: "Feminino", value: "f" },
];

export default function CreateNewAccount({ navigation }) {
  const [checked, setChecked] = useState(false);
  const [overlay, setOverlay] = useState(false);
  const [showPrivacyPolicy, setShowPrivacyPolicy] = useState(false);
  const formRef = useRef<FormHandles>(null);
  const handleSubmit: SubmitHandler<FormData> = (data) => {
    console.log(formRef.current?.getData());
    navigation.navigate("Login");
  };
  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.contentContainer}
        showsVerticalScrollIndicator={false}
      >
        <ArrowBack />
        <Text
          style={{
            alignSelf: "flex-start",
            color: "#283744",
            paddingBottom: 15,
            paddingTop: 15,
          }}
          h4
        >
          Criar Uma Nova Conta
        </Text>
        <FormComponent ref={formRef} onSubmit={handleSubmit}>
          <Input name="name" label="Nome Completo" />
          <Picker placeHolder="m" name="gender" label="Sexo" items={gender} />
          <Input name="email" label="E-mail" type="email" />
          <InputMask name="cpf" label="CPF" type="cpf" />
          <InputMask
            name="birthDate"
            label="Data de Nascimento"
            type="datetime"
          />
          <Input name="bloodType" label="Tipo Sanguíneo" />
          <InputMask name="cep" label="CEP" type="zip-code" />
          <Input name="password" label="Senha" type="password" />
          <Input
            name="confirmPassword"
            label="Confirmação de Senha"
            type="password"
          />
          <CheckBox
            title="Aceite de termos"
            checked={checked}
            onIconPress={() => setChecked(!checked)}
            onPress={() => setShowPrivacyPolicy(true)}
          />
          <Button title="Cadastrar no APP" onPress={() => setOverlay(true)} />
          <Overlay
            isVisible={overlay}
            pressFunction={() => formRef.current?.submitForm()}
          />
          <PrivacyPolicy
            isVisible={showPrivacyPolicy}
            pressFunction={() => {
              setShowPrivacyPolicy(false);
              setChecked(true);
            }}
          />
        </FormComponent>
      </ScrollView>
    </View>
  );
}
