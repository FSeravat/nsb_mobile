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
import { bloodTypes, genders } from '../../../helpers/staticDatas';
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
  const { user, signOut, setUser } = useAuth();

  const formRef = useRef<FormHandles>(null);

  const handleSubmit: SubmitHandler<FormData> = async (data) => {
    if (!data.gender || !data.blood_type) {
      Alert.alert(`${!data.gender ? "Sexo" : "Tipo de Sanguíneo"} obrigatório`);
      return;
    }

    try {
      const response = await api.put("user/users", data);
      setUser(response.data);
      Alert.alert("Conta atualizada com sucesso.");

      navigation.navigate("Main");
    } catch (error: any) {
      Alert.alert(
        error.response.data.message || "Não foi possivel conectar ao servidor."
      );
    }
  };

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
        <FormComponent
          initialData={{
            ...user,
            street: user.address.street,
            number: user.address.number,
            complement: user.address.complement,
            district: user.address.district,
            city: user.address.city,
            state: user.address.state,
            zip_code: user.address.zip_code,
          }}
          ref={formRef}
          onSubmit={handleSubmit}
        >
          <Input label="Nome Completo" name="name" />
          <Picker items={genders} label="Sexo" name="gender" />
          <Picker items={bloodTypes} label="Tipo Sanguíneo" name="blood_type" />
          <Input label="E-mail" type="email" name="email" />

          <InputMask type="cpf" name="cpf" label="CPF" />
          {/* <InputMask
            type="datetime"
            label="Data de Nascimento"
            name="birthDate"
          /> */}
          <Input name="street" label="Rua" />
          <Input name="number" label="Número" />
          <Input name="complement" label="Complemento" />
          <Input name="district" label="Bairro" />
          <Input name="city" label="Cidade" />
          <Input name="state" label="Estado" />
          <InputMask label="CEP" type="zip-code" name="zip_code" />
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
