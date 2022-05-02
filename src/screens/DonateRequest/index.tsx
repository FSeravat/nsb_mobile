import React, {useState} from 'react';
import {View} from 'react-native';
import {Text} from 'react-native-elements';
import { styles } from './styles'
import Input from '../../components/Input';
import Button from '../../components/Button';
import Dropdown from '../../components/Select';

export default function DonateRequest({ navigation }) {
    const toLoginScreen = () => {
        navigation.navigate("Login");
    }
    const bloodType = [
        { label: 'A+', value: 'A+' },
        { label: 'A-', value: 'A-' },
        { label: 'B+', value: 'B+' },
        { label: 'B-', value: 'B-' },
        { label: 'AB+', value: 'AB+' },
        { label: 'AB-', value: 'AB-' },
        { label: 'O+', value: 'O+' },
        { label: 'O-', value: 'O-' },
      ];
    
    const bloodBank = [
    { label: 'Hemoba', value: 'Hemoba' },
    { label: 'STS', value: 'STS' }
    ];
    return (
        <View style={styles.container}>
            <Text
                style={{
                    alignSelf:'flex-start', color:'#283744', 
                    paddingLeft:10, paddingBottom:15, paddingTop:15
                }}
                h4
            >
                Solicitar doação
            </Text>
            <Dropdown
                data={bloodType}
                label="Tipo sanguíneo"
            />
            <Input
                label="Receptor"
            />
            <Dropdown
                data={bloodBank}
                label="Banco de sangue"
            />
            <Button
                title="Enviar notificação"
                onPress={toLoginScreen}
            />
        </View>

    )
}