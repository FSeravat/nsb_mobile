import React, { useState } from 'react';
import { View } from 'react-native';
import { Input, Button, Text, Image } from 'react-native-elements';
import { styles } from './styles'

export default function Login({/*navigation*/ }) {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <View style={styles.container}>
            <Image
                source={{ uri: "https://www.al.sp.gov.br/repositorio/noticia/N-05-2020/fg248733.jpg" }}
                style={{ width: 250, height: 200, marginBottom:55 }}
            />
            <Input
                label="E-mail"
                inputStyle={styles.input}
                inputContainerStyle={{borderBottomWidth:0}}
                onChangeText={value => setEmail(value)}
                keyboardType="email-address"
            />

            <Input
                label="Senha"
                inputStyle={styles.input}
                inputContainerStyle={{borderBottomWidth:0}}
                onChangeText={value => setPassword(value)}
                secureTextEntry={true}
            />
            <Text
                style={{color:'#D24258',textDecorationLine:'underline',alignSelf:'flex-end',
                marginRight:15}}
                
            >
                Esqueceu a senha?
            </Text>
            

            <Button
                title="Entrar"
                containerStyle={styles.elementsContainer}
                buttonStyle={styles.mainButton}
            />

            <Button
                title="Criar uma nova conta"
                type="outline"
                buttonStyle={styles.secundaryButton}
                containerStyle={styles.elementsContainer}
                titleStyle={{ color: '#D24258' }}
                /*onPress={()=>navigation.navigate("RecoverPassword")}*/
            />

        </View>

    )
}