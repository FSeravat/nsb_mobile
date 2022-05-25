import React from "react";
import { TouchableOpacity, View } from "react-native";
import { Text, Image } from "react-native-elements";
import { styles } from "./styles";
import { FontAwesome } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
const defaultImage = require("../../images/logo.jpg");
import { useNavigation } from "@react-navigation/native";

type NotificationProps = {
  image?: any;
  description?: String;
};

export default function Notification({
  image = defaultImage,
  description = "Into pede ajuda para elevar número de doadores de sangue.",
}: NotificationProps) {
  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={() => navigation.navigate("Notification")}>
      <View style={styles.container}>
        <Image source={image} style={{ width: 150, height: 100 }}></Image>
        <View style={styles.newsContainer}>
          <Text style={styles.newsDescription}>{description}</Text>
          <View style={styles.newsShareContainer}>
            <Text style={styles.newsShareText}>Compartilhar:</Text>
            <FontAwesome
              name="whatsapp"
              size={17}
              color="black"
              style={{ paddingLeft: 5 }}
            />
            <Entypo
              name="facebook"
              size={17}
              color="black"
              style={{ paddingLeft: 5 }}
            />
            <Entypo
              name="twitter"
              size={17}
              color="black"
              style={{ paddingLeft: 5 }}
            />
            <AntDesign
              name="instagram"
              size={17}
              color="black"
              style={{ paddingLeft: 5 }}
            />
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}
