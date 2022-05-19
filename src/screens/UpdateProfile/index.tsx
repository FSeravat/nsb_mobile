import React from "react";
import { View, ScrollView } from "react-native";
import { Text } from "react-native-elements";
import { styles } from "./styles";
import Input from "../../components/Input";
import Button from "../../components/Button";
import Dropdown from "../../components/Select";

export default function UpdateProfile({ navigation }) {
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
        <Input label="Nome Completo" />
        <Dropdown data={gender} label="Sexo" />
        <Input label="Tipo Sanguíneo" />
        <Input label="E-mail" type="email" />
        <Input label="CPF" type="cpf" />
        <Input label="Data de Nascimento" type="data" />
        <Input label="CEP" type="cep" />
        <Input label="Senha" type="password" />
        <Input label="Confirmação de Senha" type="password" />

        <Button title="Atualizar Perfil" onPress={mainScreen} />
      </ScrollView>
    </View>
  );
}
