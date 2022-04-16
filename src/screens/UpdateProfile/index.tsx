import React, { useState } from 'react';
import { View, Picker } from 'react-native';
import { Input, Text, Image, Button } from 'react-native-elements';
import { styles } from './styles'


export default function UpdateProfile({/*navigation*/ }) {
    const [name, setName] = useState("");
    const [bloodType, setBloodType] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPass, setConfirmPass] = useState("");
    const [CPF, setCPF] = useState("");
    const [birthday, setBirthday] = useState("");
    const [CEP, setCEP] = useState("");

    return (
        <View style={styles.container}>
            <Text
                style={{alignSelf:'flex-start', color:'#283744', paddingLeft:10, paddingBottom:15}}
                h4
                
            >
                Atualizar Perfil
            </Text>
            <Input
                label="Nome Completo"
                inputStyle={styles.input}
                inputContainerStyle={{borderBottomWidth:0}}
                onChangeText={value => setName(value)}
                
            />
            <Input
                label="Tipo Sanguíneo"
                inputStyle={styles.input}
                inputContainerStyle={{borderBottomWidth:0}}
                onChangeText={value => setBloodType(value)}
                
            />
            <Input
                label="E-mail"
                inputStyle={styles.input}
                inputContainerStyle={{borderBottomWidth:0}}
                onChangeText={value => setEmail(value)}
                keyboardType="email-address"
            />
            <Input
                label="CPF"
                inputStyle={styles.input}
                inputContainerStyle={{borderBottomWidth:0}}
                onChangeText={value => setCPF(value)}
                
            />
            <Input
                label="Data de Nascimento"
                inputStyle={styles.input}
                inputContainerStyle={{borderBottomWidth:0}}
                onChangeText={value => setBirthday(value)}  
            />
             <Input
                label="CEP"
                inputStyle={styles.input}
                inputContainerStyle={{borderBottomWidth:0}}
                onChangeText={value => setCEP(value)}  
            />
            <Input
                label="Senha"
                inputStyle={styles.input}
                inputContainerStyle={{borderBottomWidth:0}}
                onChangeText={value => setPassword(value)}
                secureTextEntry={true}
            />
            <Input
                label="Confirmação de Senha"
                inputStyle={styles.input}
                inputContainerStyle={{borderBottomWidth:0}}
                onChangeText={value => setConfirmPass(value)}  
            />
            
      

            <Button
                title="Atualizar Perfil"
                containerStyle={styles.elementsContainer}
                buttonStyle={styles.mainButton}
            />

           




        </View>

    )
}