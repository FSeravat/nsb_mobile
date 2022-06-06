import { SimpleLineIcons } from '@expo/vector-icons';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Switch } from '@rneui/themed';
import React, { useState } from 'react';
import { ScrollView, TouchableOpacity, View } from 'react-native';
import { Divider, Text } from 'react-native-elements';

import Card from '../../../components/Card';
import Notification from '../../../components/Notification';
import { useAuth } from '../../../hooks/auth';
import { AppStackParams } from '../../app.routes';
import { styles } from './styles';

const donateImage = require("../../../images/doação.jpg");

type MainProps = NativeStackScreenProps<AppStackParams, "Main">;

const Main: React.FC<MainProps> = ({ navigation }) => {
  const [able, setAble] = useState(true);

  const { user, signOut } = useAuth();

  const toUpdateScreen = () => {
    navigation.navigate("UpdateProfile");
  };
  const toRequests = () => {
    navigation.navigate("Requests");
  };
  return (
    <View style={{ backgroundColor: "white", flex: 1 }}>
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <Text
            style={{
              color: "#FEFAFB",
              fontSize: 22,
              paddingTop: 10,
              paddingLeft: 15,
              paddingRight: 15,
            }}
          >
            {user.name}
          </Text>
          <TouchableOpacity
            style={{ flexDirection: "row" }}
            onPress={toUpdateScreen}
          >
            <SimpleLineIcons
              name="settings"
              size={20}
              color="#4B5C6B"
              style={{
                marginLeft: 15,
                marginVertical: 15,
              }}
            />
            <Text
              style={{
                color: "#4B5C6B",
                fontSize: 18,
                paddingTop: 13,
                paddingLeft: 5,
                textDecorationLine: "underline",
                alignSelf: "baseline",
              }}
            >
              Editar perfil
            </Text>
          </TouchableOpacity>
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
            {user.blood_type}
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
            image={donateImage}
            description="Hemoba pede ajuda para elevar o estoque de sangue do tipo A+."
          />
          <Notification
            image={donateImage}
            description="STS pede ajuda para elevar o estoque de sangue do tipo B+."
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
        </View>
      </View>
    </View>
  );
};

export default Main;
