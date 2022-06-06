import { MaterialIcons } from '@expo/vector-icons';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { FormHandles, SubmitHandler } from '@unform/core';
import { Form as FormComponent } from '@unform/mobile';
import React, { useRef, useState } from 'react';
import { Alert, ScrollView, TouchableOpacity, View } from 'react-native';
import { Text } from 'react-native-elements';

import ArrowBack from '../../../components/BackButton';
import Button from '../../../components/Button';
import Input from '../../../components/Input_Unform';
import InputMask from '../../../components/InputMask_Unform';
import Picker from '../../../components/Picker_Unform';
import { useAuth } from '../../../hooks/auth';
import { AppStackParams } from '../../app.routes';
import { styles } from './styles';

type FormData = {
  /**
   * Nome completo
   */
  name: string;
  /**
   * Sexo
   */
  gender?: "m" | "f";
  /**
   * Tipo de sangue
   */
  bloodType?: "A+" | "A-" | "B+" | "B-" | "AB+" | "AB-" | "O+" | "O-";
  /**
   * E-mail
   */
  email: string;
  /**
   * CPF
   */
  cpf: string;
  /**
   * Data de Nascimento
   */
  birthDate: string;
  /**
   * Senha
   */
  password: string;
  /**
   * Confirmação de senha
   */
  confirm_password: string;
  /**
   * Rua
   */
  street: string;
  /**
   * Número da residencia
   */
  number: string;
  /**
   * Complemento
   */
  complement: string;
  /**
   * Bairro
   */
  district: string;
  /**
   * Salvador
   */
  city: string;
  /**
   * Estado - UF
   */
  state: string;
  /**
   * CEP
   */
  zip_code: string;
};

type UpdateProfileProps = NativeStackScreenProps<
  AppStackParams,
  "UpdateProfile"
>;

const UpdateProfile: React.FC<UpdateProfileProps> = ({ navigation }) => {
  const { user, signOut } = useAuth();

  const formRef = useRef<FormHandles>(null);

  const handleSubmit: SubmitHandler<FormData> = (data) => {
    if (!data.gender || !data.bloodType) {
      Alert.alert(`${!data.gender ? "Sexo" : "Tipo de Sanguíneo"} obrigatório`);
      return;
    }

    navigation.navigate("Main");
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
  ].map((item) => ({ ...item, key: item.value }));

  const gender = [
    { label: "Masculino", value: "m" },
    { label: "Feminino", value: "f" },
  ].map((item) => ({ ...item, key: item.value }));

  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.contentContainer}
        showsVerticalScrollIndicator={false}
      >
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
          <Picker items={gender} label="Sexo" name="gender" />
          <Picker
            items={selectBloodType}
            label="Tipo Sanguíneo"
            name="bloodType"
          />
          <Input label="E-mail" type="email" name="email" />

          <InputMask type="cpf" name="cpf" label="CPF" />
          <InputMask
            type="datetime"
            label="Data de Nascimento"
            name="birthDate"
          />
          <InputMask label="CEP" type="zip-code" name="zip_code" />
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
};

export default UpdateProfile;
