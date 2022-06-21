import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { FormHandles, SubmitHandler } from '@unform/core';
import { Form as FormComponent } from '@unform/mobile';
import React, { useRef, useState } from 'react';
import { Alert, ScrollView, View } from 'react-native';
import { Text } from 'react-native-elements';

import ArrowBack from '../../../components/BackButton';
import Button from '../../../components/Button';
import CheckBox from '../../../components/CheckBox';
import Input from '../../../components/Input_Unform';
import InputMask from '../../../components/InputMask_Unform';
import Picker from '../../../components/Picker_Unform';
import PrivacyPolicy from '../../../components/PrivacyPolicy';
import { bloodTypes, genders } from '../../../helpers/staticDatas';
import api from '../../../services/api';
import { AuthStackParams } from '../../auth.routes';
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

type CreateNewAccountProps = NativeStackScreenProps<
  AuthStackParams,
  "CreateNewAccount"
>;

const CreateNewAccount: React.FC<CreateNewAccountProps> = ({ navigation }) => {
  const [privacyAccept, setPrivacyAccept] = useState(false);
  const [showPrivacyPolicy, setShowPrivacyPolicy] = useState(false);

  const formRef = useRef<FormHandles>(null);

  const handleSubmit: SubmitHandler<FormData> = async (data) => {
    if (!data.gender || !data.blood_type) {
      Alert.alert(`${!data.gender ? "Sexo" : "Tipo sanguíneo"} obrigatório`);
      return;
    }

    if (!privacyAccept) {
      Alert.alert("É obrigatório aceitar os termos para relizar o cadastro");
      return;
    }

    try {
      //const {birth_date, ...rest} = data
      console.log(data);
      await api.post("user/users", data);

      Alert.alert("Conta criada com sucesso, você já pode realizar seu login");

      navigation.navigate("Login");
    } catch (error: any) {
      Alert.alert(
        error.response.data.message || "Não foi possível conectar ao servidor"
      );
    }
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
          Criar uma nova conta
        </Text>
        <FormComponent ref={formRef} onSubmit={handleSubmit}>
          <Input name="name" label="Nome completo" />
          <Picker name="gender" label="Sexo" items={genders} />
          <Picker name="blood_type" label="Tipo sanguíneo" items={bloodTypes} />
          <Input name="email" label="E-mail" type="email" />
          <InputMask name="cpf" label="CPF" type="cpf" />
          <Input name="street" label="Rua" />
          <Input name="number" label="Número" />
          <Input name="complement" label="Complemento" />
          <Input name="district" label="Bairro" />
          <Input name="city" label="Cidade" />
          <Input name="state" label="Estado" />
          <InputMask name="zip_code" label="CEP" type="zip-code" />
          <Input name="password" label="Senha" type="password" />
          <Input
            name="confirm_password"
            label="Confirmação de senha"
            type="password"
          />
          <CheckBox
            title="Aceite de termos"
            checked={privacyAccept}
            onIconPress={() => setPrivacyAccept(!privacyAccept)}
            onPress={() => setShowPrivacyPolicy(true)}
          />
          <PrivacyPolicy
            isVisible={showPrivacyPolicy}
            pressFunction={() => {
              setShowPrivacyPolicy(false);
              setPrivacyAccept(true);
            }}
          />
          <Button
            title="Cadastrar no APP"
            onPress={() => formRef.current?.submitForm()}
          />
        </FormComponent>
      </ScrollView>
    </View>
  );
};

export default CreateNewAccount;
