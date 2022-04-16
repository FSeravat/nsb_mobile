import React from 'react';
import {View, ScrollView} from 'react-native';
import {Text} from 'react-native-elements';
import { styles } from './styles'
import Input from '../../components/Input';
import Button from '../../components/Button';

export default function CreateNewAccount({/*navigation*/ }) {
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
        
                <Button
                    title="Cadastrar no APP"
                />
            </ScrollView>
        </View>

    )
}