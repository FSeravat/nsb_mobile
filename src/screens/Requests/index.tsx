import React, { useState } from "react";
import { ScrollView, View } from "react-native";
import { styles } from "./styles";
import Button from "../../components/Button";
import Card from "../../components/Card";

export default function Resquests({ navigation }) {
  const toDonateRequest = () => {
    navigation.navigate("DonateRequest");
  };
  const [arrayData, setArrayData] = useState([
    {
      bloodType: "O+",
      name: "Joelber Santos",
      bloodBank: "Hemoba",
      startDate: "23/05/2022",
      finalDate: "23/06/2022",
    },
    // {
    //   bloodType: "B+",
    //   bloodBank: "Hemoba",
    //   name: "Diego Lincoln",
    //   startDate: "25/05/2022",
    //   finalDate: "25/06/2022",
    // },
    // {
    //   bloodType: "A+",
    //   name: "Felipe Costa Tavares",
    //   bloodBank: "Hemoba",
    //   startDate: "19/05/2022",
    //   finalDate: "19/07/2022",
    // },
  ]);
  return (
    <View style={styles.container}>
      <ScrollView>
        {arrayData.map((a, i) => {
          return (
            <Card
              type="request"
              data={a}
              remove={() => {
                let newArr = Array.from(arrayData);
                newArr.splice(i, 1);
                setArrayData(newArr);
              }}
            ></Card>
          );
        })}
      </ScrollView>
      <Button title="Nova solicitação" onPress={toDonateRequest} />
    </View>
  );
}
