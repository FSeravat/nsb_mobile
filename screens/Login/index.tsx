import React, { useState } from 'react';
import { View } from 'react-native';
import { Input, Button, Text, Image } from 'react-native-elements';
import { styles } from './styles'

export default function Login({/*navigation*/ }) {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [check, setCheck] = useState({email:false, password:false});

    function validateEmail(value:string):boolean{
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    function validatePasswor(value:string):boolean{
        const re = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/
        return re.test(value);
    }

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