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

export default function DonateRequest({ navigation }) {
  const [able, setAble] = useState(true);
  const [name, setName] = useState("Felipe Costa Tavares");
  const [bloodType, setbloodType] = useState("A+");
  const [qtdDonate, setqtdDonate] = useState(15);
  const toUpdateScreen = () => {
    navigation.navigate("UpdateProfile");
  };
  const toDonateRequest = () => {
    navigation.navigate("DonateRequest");
  };
  return (
    <View>
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
          <Notification
            image={require("../../images/doação.jpg")}
            description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
          />
          <Notification />
          <Notification />
          <Notification />
        </ScrollView>
        <Divider
          orientation="vertical"
          style={{ borderWidth: 2, borderColor: "#9EADBA", marginVertical: 5 }}
        />
        <View style={styles.footerContainer}>
          <TouchableOpacity onPress={toDonateRequest}>
            <Card type="notification"></Card>
          </TouchableOpacity>
          <Card></Card>
        </View>
      </View>
    </View>
  );
}
