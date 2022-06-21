import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { format } from 'date-fns';
import React, { useState } from 'react';
import { View } from 'react-native';
import { Divider, Text } from 'react-native-elements';

import ArrowBack from '../../../components/BackButton';
import { AppStackParams } from '../../app.routes';
import { styles } from './styles';

type NotificationProps = NativeStackScreenProps<AppStackParams, "Notification">;

const Notification: React.FC<NotificationProps> = ({ navigation, route }) => {
  const { ...notification } = route.params;

  return (
    <View style={styles.container}>
      <View style={{ marginBottom: 15 }}>
        <ArrowBack />
      </View>
      <View style={styles.card}>
        <View style={styles.containerHeader}>
          <Text style={styles.textHeader}>
            PRECISAMOS DE SANGUE, PRECISAMOS DE VOCÊ.
          </Text>
          <Divider
            orientation="vertical"
            style={{
              borderWidth: 2,
              borderColor: "white",
              marginVertical: 25,
            }}
          />
        </View>

        <View style={styles.containerText}>
          <Text style={styles.text}>TIPO: {notification.blood_type}</Text>
          <Text style={styles.text}>RECEPTOR: {notification.receiver}</Text>
          <Text style={styles.text}>
            DATA: {format(new Date(notification.start_date), "dd/MM/Y")} a{" "}
            {format(new Date(notification.end_date), "dd/MM/Y")}
          </Text>
          <Text style={styles.text}>LOCAL DA DOAÇÃO:</Text>
          <Text style={styles.text}>{notification.blood_bank.name}</Text>
          <Text style={styles.text}>
            {notification.blood_bank.address.district}
          </Text>

          <Divider
            orientation="vertical"
            style={{
              borderWidth: 2,
              borderColor: "white",
              marginVertical: 25,
              width: "60%",
            }}
          />
        </View>
      </View>
    </View>
  );
};
export default Notification;
