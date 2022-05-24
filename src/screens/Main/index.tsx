import React, { useState } from "react";
import {
  ScrollView,
  View,
  FlatList,
  SafeAreaView,
  TouchableOpacityBase,
  TouchableOpacity,
} from "react-native";
import { styles } from "./styles";
import { Text } from "react-native-elements";
import { Switch } from "@rneui/themed";
import { Divider } from "react-native-elements";
import Notification from "../../components/Notification";
import Card from "../../components/Card";
import Constants from "expo-constants";

export default function DonateRequest({ navigation }) {
  const [able, setAble] = useState(true);
  const [name, setName] = useState("Carolina Almeida Souza");
  const [bloodType, setbloodType] = useState("A+");
  const [qtdDonate, setqtdDonate] = useState(12);
  const toUpdateScreen = () => {
    navigation.navigate("UpdateProfile");
  };
  const toRequests = () => {
    navigation.navigate("Requests");
  };
  const toLocation = () => {
    navigation.navigate("Location");
  };
  return (
    <View style={{ backgroundColor: "white", flex: 1 }}>
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <Text
            style={{
              color: "#FEFAFB",
              fontSize: 20,
              paddingTop: 10,
              paddingLeft: 15,
              paddingRight: 15,
            }}
          >
            {name}
          </Text>
          <Text
            onPress={toUpdateScreen}
            style={{
              color: "#4B5C6B",
              fontSize: 20,
              paddingTop: 10,
              paddingLeft: 15,
              textDecorationLine: "underline",
            }}
          >
            Editar perfil
          </Text>
        </View>
        <Divider
          orientation="vertical"
          style={{ borderWidth: 2, borderColor: "#9EADBA", marginTop: 15 }}
        />
        <View style={{ flex: 1 }}>
          <Text
            style={{
              color: "#454754",
              fontSize: 13,
              paddingTop: 10,
              paddingLeft: 5,
            }}
          >
            TIPO SANGUÍNEO
          </Text>
          <Text
            style={{
              color: "#FFFFFF",
              fontSize: 20,
              paddingTop: 10,
              paddingLeft: 5,
              textAlign: "center",
            }}
          >
            {bloodType}
          </Text>
        </View>
        <Divider
          orientation="vertical"
          style={{ borderWidth: 2, borderColor: "#9EADBA", marginTop: 15 }}
        />
        <View style={{ flex: 1 }}>
          <Text
            style={{
              color: "#454754",
              fontSize: 13,
              paddingTop: 10,
              paddingLeft: 5,
            }}
          >
            DOAÇÕES REALIZADAS
          </Text>
          <Text
            style={{
              color: "#FFFFFF",
              fontSize: 20,
              paddingTop: 10,
              paddingLeft: 5,
              textAlign: "center",
            }}
          >
            {qtdDonate}
          </Text>
        </View>
      </View>
      <View>
        <View style={styles.switchContainer}>
          <Text style={{ color: "#293845", fontSize: 20 }}>
            Está disponivel para doar?
          </Text>
          <Switch
            color="#D3455B"
            value={able}
            onValueChange={(value) => setAble(value)}
          />
        </View>
        <View style={{ paddingHorizontal: 25 }}>
          <Text style={{ color: "#293845", fontSize: 20 }}>
            Ultimas notícias
          </Text>
          <Divider
            orientation="vertical"
            style={{ borderWidth: 2, borderColor: "#9EADBA" }}
          />
        </View>
        <ScrollView
          contentContainerStyle={{ paddingHorizontal: 25 }}
          style={styles.notificationContainer}
        >
          <Notification description="Joelber Santos solicita sangue do tipo O+ a ser doado no hemocentro Hemoba até o dia 23/06/2022." />
          <Notification
            image={require("../../images/doação.jpg")}
            description="Hemoba pede ajuda para elevar o estoque de sangue do tipo A+."
          />
        </ScrollView>
        <Divider
          orientation="vertical"
          style={{ borderWidth: 2, borderColor: "#9EADBA", marginVertical: 5 }}
        />
        <View style={styles.footerContainer}>
          <TouchableOpacity onPress={toRequests}>
            <Card type="notification"></Card>
          </TouchableOpacity>
          <TouchableOpacity onPress={toLocation}>
            <Card></Card>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
