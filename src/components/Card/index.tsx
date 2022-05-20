import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Card as CardElement } from "react-native-elements";
import { styles } from "./styles";
import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

type CardProps = {
  type?: "notification" | "location" | "request";
  data?: Data;
  remove?: Function;
};

type Data = {
  bloodType: string;
  bloodBank: string;
  name: string;
  startDate: string;
  finalDate: string;
};

export default function Card({
  type = "location",
  data = {
    bloodType: "",
    bloodBank: "",
    name: "",
    startDate: "",
    finalDate: "",
  },
  remove,
}: CardProps) {
  const navigation = useNavigation();
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
        return (
          <View style={styles.RequestCard}>
            <View>
              <View style={styles.RequestIcon}>
                <TouchableOpacity
                  style={{ paddingRight: 15 }}
                  onPress={() => {
                    navigation.navigate("DonateRequest", data);
                  }}
                >
                  <Feather name="edit" size={20} color="#D3455B" />
                </TouchableOpacity>
                <TouchableOpacity onPress={remove}>
                  <FontAwesome5 name="trash" size={20} color="#D3455B" />
                </TouchableOpacity>
              </View>
              <Text style={styles.Request}>
                Tipo Sanguíneo: {data.bloodType}
              </Text>
              <Text style={styles.Request}>Receptor: {data.name}</Text>
              <Text style={styles.Request}>
                Banco de Sangue: {data.bloodBank}
              </Text>
              <Text style={styles.Request}>Data Inicial: {data.startDate}</Text>
              <Text style={styles.Request}>Data Final: {data.finalDate}</Text>
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
