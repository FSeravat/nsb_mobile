import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { FormHandles, SubmitHandler } from '@unform/core';
import { Form as FormComponent } from '@unform/mobile';
import React, { useEffect, useRef, useState } from 'react';
import { Alert, View } from 'react-native';
import { Text } from 'react-native-elements';

import ArrowBack from '../../../components/BackButton';
import Button from '../../../components/Button';
import Input from '../../../components/Input_Unform';
import InputMask from '../../../components/InputMask_Unform';
import Picker from '../../../components/Picker_Unform';
import { bloodTypes } from '../../../helpers/staticDatas';
import api from '../../../services/api';
import { AppStackParams } from '../../app.routes';
import { styles } from './styles';

interface FormData {
  receiver: string;
  blood_type: string;
  blood_bank_id: string;
  start_date: string;
  end_date: string;
}

type EditDonateRequestProps = NativeStackScreenProps<
  AppStackParams,
  "EditDonateRequest"
>;

type BloodBankProps = {
  id: string;
  name: string;
  email: string;
  cnpj: string;
};

type SelectBloodBankProps = {
  label: string;
  value: string;
};

const EditDonateRequest: React.FC<EditDonateRequestProps> = ({
  route,
  navigation,
}) => {
  const [selectBloodBank, setSelectBloodBank] = useState<
    SelectBloodBankProps[]
  >([]);

  const formRef = useRef<FormHandles>(null);

  const handleSubmit: SubmitHandler<FormData> = async (data) => {
    try {
      await api.put("user/notifications/" + route.params.id, data);
      Alert.alert("Notificação atualizada com sucesso");
      navigation.navigate("Requests");
    } catch (error: any) {
      Alert.alert(
        error.response.data.message || "Não foi possível conectar ao servidor"
      );
    }
  };

  useEffect(() => {
    async function loadBloodBank() {
      var response = await api.get<BloodBankProps[]>("user/blood-banks");

      setSelectBloodBank(
        response.data.map((b) => ({ label: b.name, value: b.id }))
      );
    }

    loadBloodBank();
  }, []);

  return (
    <View style={styles.container}>
      <ArrowBack />
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
        Editar solicitação
      </Text>
      <FormComponent
        ref={formRef}
        onSubmit={handleSubmit}
        initialData={{
          receiver: route.params.receiver,
          blood_type: route.params.blood_type,
          start_date: route.params.start_date,
          blood_bank_id: route.params.blood_bank_id,
          end_date: route.params.end_date,
        }}
      >
        <Input name="receiver" label="Receptor" />
        <Picker name="blood_type" items={bloodTypes} label="Tipo sanguíneo" />
        <Picker
          name="blood_bank_id"
          items={selectBloodBank}
          label="Banco de sangue"
        />
        <InputMask name="start_date" label="Data Inicial" type="datetime" />
        <InputMask name="end_date" label="Data Final" type="datetime" />
        <View style={{ marginVertical: 10 }}>
          <Button
            title="Editar notificação"
            onPress={() => formRef.current?.submitForm()}
          />
        </View>
      </FormComponent>
    </View>
  );
};

export default EditDonateRequest;
