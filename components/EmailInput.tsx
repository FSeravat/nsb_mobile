import React, { useState } from 'react';
import { View, ViewComponent } from 'react-native';
import { Input } from 'react-native-elements';

const [email, setEmail] = useState("");

/*function validateEmail(value: string): boolean {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

function validatePasswor(value: string): boolean {
    const re = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/
    return re.test(value);
}*/

const EmailInput = () =>{
    return (
        <View>
            <Input
                label= "E-mail"
                //inputStyle = { styles.input }
                inputContainerStyle = {{ borderBottomWidth: 0 }}
                onChangeText = { value => setEmail(value) }
                keyboardType = "email-address"
            />
        </View>
    );
}

export default EmailInput;