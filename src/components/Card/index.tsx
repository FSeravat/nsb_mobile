import { Feather, FontAwesome5, MaterialIcons } from '@expo/vector-icons';
import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { Card as CardElement } from 'react-native-elements';

import { styles } from './styles';

type CardProps = {
  type?: "notification" | "location" | "request";
  data?: Data;
  onDelete?: () => void;
  onEdit?: () => void;
};

type Data = {
  blood_type: string;
  receiver: string;
  start_date: string;
  end_date: string;
  blood_bank_id: string;
  blood_bank: BloodBankProps;
};

type BloodBankProps = {
  name: string;
};

export default function Card({
  type = "location",
  data = {
    blood_type: "",
    blood_bank_id: "",
    receiver: "",
    start_date: "",
    end_date: "",
    blood_bank: { name: "" },
  },
  onDelete,
  onEdit,
}: CardProps) {
  const renderView = () => {
    switch (type) {
      case "location":
        return (
          <View style={styles.Card}>
            <FontAwesome5 name="map-marked" size={50} color="#D3455B" />
            <View style={styles.Body}>
              <Text style={styles.Title}>Onde doar?</Text>
              <Text style={styles.Description}>
                Saiba quais bancos de sangue estão próximo e seu nível de
                estoque de sangue.
              </Text>
            </View>
          </View>
        );
        break;
      case "request":
        const [startDate, setStartDate] = useState("");
        const [endDate, setEndDate] = useState("");
        useEffect(() => {
          async function loadDateValues() {
            let date = format(new Date(data.start_date), "dd/MM/Y");
            setStartDate(date);
            date = format(new Date(data.end_date), "dd/MM/Y");
            setEndDate(date);
          }

          loadDateValues();
        }, []);
        return (
          <View style={styles.RequestCard}>
            <View>
              <View style={styles.RequestIcon}>
                <TouchableOpacity style={{ paddingRight: 15 }} onPress={onEdit}>
                  <Feather name="edit" size={20} color="#D3455B" />
                </TouchableOpacity>
                <TouchableOpacity onPress={onDelete}>
                  <FontAwesome5 name="trash" size={20} color="#D3455B" />
                </TouchableOpacity>
              </View>
              <Text style={styles.Request}>
                Tipo Sanguíneo: {data.blood_type}
              </Text>
              <Text style={styles.Request}>Receptor: {data.receiver}</Text>
              <Text style={styles.Request}>
                Banco de Sangue: {data.blood_bank.name}
              </Text>
              <Text style={styles.Request}>Data Inicial: {startDate}</Text>
              <Text style={styles.Request}>Data Final: {endDate}</Text>
            </View>
          </View>
        );
        break;
      case "notification":
        return (
          <View style={styles.Card}>
            <MaterialIcons name="message" size={50} color="#D3455B" />
            <View style={styles.Body}>
              <Text style={styles.Title}>Solicitar doação</Text>
              <Text style={styles.Description}>
                Envie um informativo para todos os usuários de que você precisa
                de uma doação de determinado tipo de sangue.
              </Text>
            </View>
          </View>
        );
    }
  };
  return (
    <View>
      <CardElement>{renderView()}</CardElement>
    </View>
  );
}
