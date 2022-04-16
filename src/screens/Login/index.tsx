import React from 'react';
import { View } from 'react-native';
import { Text, Image } from 'react-native-elements';
import { styles } from './styles'
import TextInput from '../../components/Input';
import Button from '../../components/Button';

export default function Login({/*navigation*/ }) {

    return (
        <View style={styles.container}>
            <Image
                source={{ uri: "https://www.al.sp.gov.br/repositorio/noticia/N-05-2020/fg248733.jpg" }}
                style={{ width: 250, height: 200, marginBottom:55 }}
            />
            <TextInput
                label='E-Mail'
                type='email'
            />
            <TextInput
                label='Senha'
                type='password'
            />
            <Text
                style={{color:'#D24258',textDecorationLine:'underline',alignSelf:'flex-end',
                marginRight:15}}
                
            >
                Esqueceu a senha?
            </Text>
            

            <Button
                title="Entrar"
                main={true}
            />

            <Button
                title="Criar uma nova conta"
                main={false}
            />

        </View>

    )
}