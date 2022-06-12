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
import api from '../../../services/api';
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
  blood_type?: "A+" | "A-" | "B+" | "B-" | "AB+" | "AB-" | "O+" | "O-";
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
  birth_date: string;
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

  const handleSubmit: SubmitHandler<FormData> = async (data) => {
    if (!data.gender || !data.blood_type) {
      Alert.alert(`${!data.gender ? "Sexo" : "Tipo de Sanguíneo"} obrigatório`);
      return;
    }

    try {
      //const {birth_date, ...rest} = data
      console.log(data);
      await api.post("user/users", data);

      Alert.alert("Conta atualizada com sucesso.");

      navigation.navigate("Main");
    } catch (error: any) {
      Alert.alert(
        error.response.data.message || "Não foi possivel conectar ao servidor."
      );
    }
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
          <Input label="Nome Completo" name="name" value={user.name} />
          <Picker
            items={gender}
            label="Sexo"
            name="gender"
            value={user.gender}
          />
          <Picker
            items={selectBloodType}
            label="Tipo Sanguíneo"
            name="blood_type"
            value={user.blood_type}
          />
          <Input label="E-mail" type="email" name="email" value={user.email} />

          <InputMask type="cpf" name="cpf" label="CPF" value={user.cpf} />
          {/* <InputMask
            type="datetime"
            label="Data de Nascimento"
            name="birthDate"
          /> */}
          <Input name="street" label="Rua" value={user.address.street} />
          <Input name="number" label="Número" value={user.address.number} />
          <Input
            name="complement"
            label="Complemento"
            value={user.address.complement}
          />
          <Input name="district" label="Bairro" value={user.address.district} />
          <Input name="city" label="Cidade" value={user.address.city} />
          <Input name="state" label="Estado" value={user.address.state} />
          <InputMask
            label="CEP"
            type="zip-code"
            name="zip_code"
            value={user.address.zip_code}
          />
          {/* <Input
            label="Senha"
            type="password"
            name="password"
            value={user.password}
          />
          <Input
            label="Confirmação de Senha"
            type="password"
            name="confirmPassword"
            value={user.password}
          /> */}
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
