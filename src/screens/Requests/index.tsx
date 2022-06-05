import React, { useState } from "react";
import { ScrollView, View, Text } from "react-native";
import { styles } from "./styles";
import Button from "../../components/Button";
import Card from "../../components/Card";
import ArrowBack from "../../components/BackButton";

export default function Resquests({ navigation }) {
  const toDonateRequest = () => {
    navigation.navigate("DonateRequest");
  };
  const [requests, setRequests] = useState([
    {
      bloodType: "O+",
      name: "Joelber Santos",
      bloodBank: "Hemoba",
      startDate: "23/05/2022",
      finalDate: "23/06/2022",
    },
  ]);

  return (
    <View style={styles.container}>
      <ScrollView>
        <ArrowBack />
        {requests.map((a, i) => {
          return (
            <Card
              key={i}
              type="request"
              data={a}
              remove={() => {
                let newArr = Array.from(requests);
                newArr.splice(i, 1);
                setRequests(newArr);
              }}
            ></Card>
          );
        })}
      </ScrollView>
      <Button title="Nova solicitação" onPress={toDonateRequest} />
    </View>
  );
}
