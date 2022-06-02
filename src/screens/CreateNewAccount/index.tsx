import React, { useState } from "react";
import { View, ScrollView } from "react-native";
import { Text } from "react-native-elements";
import { styles } from "./styles";
import Input from "../../components/Input";
import Button from "../../components/Button";
import CheckBox from "../../components/CheckBox";
import Overlay from "../../components/Overlay";
import Dropdown from "../../components/Select";
import PrivacyPolicy from "../../components/PrivacyPolicy";

export default function CreateNewAccount({ navigation }) {
  const [overlay, setOverlay] = useState(false);
  const [showPrivacyPolicy, setShowPrivacyPolicy] = useState(false);
  const [checked, setChecked] = useState(false);
  const toLoginScreen = () => {
    navigation.navigate("Login");
  };
  const validateForm = () => {
    toLoginScreen();
  };
  const gender = [
    { label: "Masculino", value: "m" },
    { label: "Feminino", value: "f" },
  ];
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.contentContainer}>
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
          Criar Uma Nova Conta
        </Text>

        <Input label="Nome Completo" />
        <Dropdown data={gender} label="Sexo" />
        <Input label="E-mail" type="email" />
        <Input label="CPF" type="cpf" />
        <Input label="Data de Nascimento" type="data" />
        <Input label="Tipo Sanguíneo" />
        <Input label="CEP" type="cep" />
        <Input label="Senha" type="password" />
        <Input label="Confirmação de Senha" type="password" />

        <CheckBox
          title="Aceite de termos"
          checked={checked}
          onIconPress={() => setChecked(!checked)}
          onPress={() => setShowPrivacyPolicy(true)}
        />

        <Button title="Cadastrar no APP" onPress={() => setOverlay(true)} />

        <Overlay isVisible={overlay} pressFunction={validateForm} />

        <PrivacyPolicy
          isVisible={showPrivacyPolicy}
          pressFunction={() => {
            setShowPrivacyPolicy(false);
            setChecked(true);
          }}
        />
      </ScrollView>
    </View>
  );
}
