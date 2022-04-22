import React, {useState} from 'react';
import {View, ScrollView} from 'react-native';
import {Text} from 'react-native-elements';
import { styles } from './styles'
import Input from '../../components/Input';
import Button from '../../components/Button';
import CheckBox from '../../components/CheckBox';
import Overlay from '../../components/Overlay';

export default function CreateNewAccount({navigation}) {
    const [overlay, setOverlay] = useState(false);
    const toLoginScreen = () => {
        navigation.navigate("Login");
    }
    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.contentContainer}>
                <Text
                    style={{alignSelf:'flex-start', color:'#283744', paddingLeft:10, paddingBottom:15, paddingTop:15}}
                    h4
                >
                    Criar Uma Nova Conta
                </Text>

                <Input
                    label="Nome Completo"
                />
                <Input
                    label="E-mail"
                    type='email'
                />
                <Input
                    label="CPF"
                    type='cpf'  
                />
                <Input
                    label="Data de Nascimento"
                    type="data"
                />
                <Input
                    label="Tipo Sanguíneo"
                />
                <Input
                    label="CEP"
                    type="cep"
                />
                <Input
                    label="Senha"
                    type="password"
                />
                <Input
                    label="Confirmação de Senha"
                    type="password"
                />

                <CheckBox
                    title="Aceite de termos"
                />
        
                <Button
                    title="Cadastrar no APP"
                    onPress={()=>setOverlay(true)}
                />

                <Overlay 
                    isVisible={overlay}
                    pressFunction={toLoginScreen}
                />
            </ScrollView>
        </View>

    )
}