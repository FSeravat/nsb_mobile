import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { FormHandles, SubmitHandler } from '@unform/core';
import { Form as FormComponent } from '@unform/mobile';
import React, { useRef, useState } from 'react';
import { Alert, View } from 'react-native';
import { Image } from 'react-native-elements';

import Button from '../../../components/Button';
import Input from '../../../components/Input_Unform';
import { useAuth } from '../../../hooks/auth';
import { AuthStackParams } from '../../auth.routes';
import { styles } from './styles';

const logoImage = require("../../../images/logo.jpg");

interface FormData {
  email: string;
  password: string;
}

type LoginProps = NativeStackScreenProps<AuthStackParams, "Login">;

const Login: React.FC<LoginProps> = ({ navigation }) => {
  const newAccount = () => {
    navigation.navigate("CreateNewAccount");
  };

  const { signIn } = useAuth();

  const formRef = useRef<FormHandles>(null);

  const handleSubmit: SubmitHandler<FormData> = async (data) => {
    try {
      await signIn(data);
    } catch (error: any) {
      Alert.alert(
        error.response.data.message ||
          "Houve um erro ao tentar realizar o login, tente novamente mais tarde"
      );
    }
  };

  return (
    <View style={styles.container}>
      <Image
        containerStyle={{ alignSelf: "center" }}
        source={logoImage}
        style={{ width: 250, height: 210, marginBottom: 55 }}
        height={undefined}
        width={undefined}
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
};

export default Login;
