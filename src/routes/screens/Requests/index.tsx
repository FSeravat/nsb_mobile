import { useIsFocused } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useCallback, useEffect, useState } from 'react';
import { Alert, ScrollView, View } from 'react-native';

import ArrowBack from '../../../components/BackButton';
import Button from '../../../components/Button';
import Card from '../../../components/Card';
import api from '../../../services/api';
import { AppStackParams } from '../../app.routes';
import { styles } from './styles';

type RequestsProps = NativeStackScreenProps<AppStackParams, "Requests">;

type NotificationProps = {
  id: string;
  receiver: string;
  blood_type: string;
  blood_bank_id: string;
  start_date: string;
  end_date: string;
  blood_bank: BloodBankProps;
};

type BloodBankProps = {
  name: string;
};

const Requests: React.FC<RequestsProps> = ({ navigation }) => {
  const [notifications, setNotifications] = useState<NotificationProps[]>([]);
  const isFocused = useIsFocused();

  const toDonateRequest = () => {
    navigation.navigate("DonateRequest");
  };

  useEffect(() => {
    async function loadNotifications() {
      const response = await api.get<NotificationProps[]>("user/notifications");
      setNotifications(response.data);
    }

    if (isFocused) loadNotifications();
  }, [isFocused]);

  const handleDelete = useCallback((id: string) => {
    try {
      Alert.alert("Excluir Notificação", "Deseja excluir a notificação", [
        {
          text: "Não",
          style: "cancel",
        },
        {
          text: "Sim",
          onPress: async () => {
            await api.delete("user/notifications/" + id);
            const response = await api.get<NotificationProps[]>(
              "user/notifications"
            );
            setNotifications(response.data);
          },
        },
      ]);
    } catch (error) {
      Alert.alert("Não foi possível deletar a notificação.");
    }
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView>
        <ArrowBack />
        {notifications.map((a, i) => {
          return (
            <Card
              key={a.id}
              type="request"
              data={a}
              onEdit={() => navigation.navigate("EditDonateRequest")}
              onDelete={() => handleDelete(a.id)}
            ></Card>
          );
        })}
      </ScrollView>
      <Button title="Nova solicitação" onPress={toDonateRequest} />
    </View>
  );
};
export default Requests;
