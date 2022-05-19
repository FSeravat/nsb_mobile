import React from "react";
import { View, Text } from "react-native";
import { Card as CardElement } from "react-native-elements";
import { styles } from "./styles";
import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";

type CardProps = {
  type?: "notification" | "location";
};

export default function Card({ type = "location", title }: CardProps) {
  return (
    <View>
      <CardElement>
        {type === "location" ? (
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
        ) : (
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
        )}
      </CardElement>
    </View>
  );
}
