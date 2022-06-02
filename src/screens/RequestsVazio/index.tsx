import React, { useState } from "react";
import { ScrollView, View, Text } from "react-native";
import { styles } from "./styles";
import Button from "../../components/Button";
import Card from "../../components/Card";

export default function ResquestsVazio({ navigation }) {
  const toDonateRequest = () => {
    navigation.navigate("DonateRequest");
  };
  const [requests, setRequests] = useState([]);

  return (
    <View style={styles.container}>
      <ScrollView>
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
