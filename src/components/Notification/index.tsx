import { AntDesign, Entypo, FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { Image, Text } from 'react-native-elements';

import { styles } from './styles';

const defaultImage = require("../../images/logo.jpg");
type NotificationProps = {
  image?: any;
  description?: String;
  navigateTo?: () => void;
};

export default function Notification({
  image = defaultImage,
  description = "Into pede ajuda para elevar número de doadores de sangue.",
  navigateTo,
}: NotificationProps) {
  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={navigateTo}>
      <View style={styles.container}>
        <Image
          source={image}
          style={{ width: 150, height: 100 }}
          height={undefined}
          width={undefined}
        ></Image>
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
