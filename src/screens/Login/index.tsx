import React from "react";
import { View } from "react-native";
import { Text, Image } from "react-native-elements";
import { styles } from "./styles";
import TextInput from "../../components/Input";
import Button from "../../components/Button";

import { useAuth } from "../../hooks/auth";

export default function Login({ navigation }) {
  const newAccount = () => {
    navigation.navigate("CreateNewAccount");
  };

  const { signIn } = useAuth();

  return (
    <View style={styles.container}>
      <Image
        source={require("../../images/logo.jpg")}
        style={{ width: 250, height: 210, marginBottom: 55 }}
      />
      <TextInput label="E-Mail" type="email" />
      <TextInput label="Senha" type="password" />
      <Text
        style={{
          color: "#D24258",
          textDecorationLine: "underline",
          alignSelf: "flex-end",
          marginRight: 15,
        }}
      >
        Esqueceu a senha?
      </Text>

      <Button
        title="Entrar"
        onPress={() =>
          signIn({
            login: "ovo@ovo.com",
            password: "biscoito",
          })
        }
      />

      <Button title="Criar uma nova conta" main={false} onPress={newAccount} />
    </View>
  );
}
