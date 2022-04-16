import React from 'react'
import {Input as ElementsInput, InputProps} from 'react-native-elements'
import { styles } from './styles'

type Props = InputProps & {
  type?: 'text' | 'email' | 'password'
}

export default function Input ({type, ...rest }: Props = {type: 'text'}) {
  return (
      <ElementsInput
        inputStyle={styles.input}
        inputContainerStyle={{borderBottomWidth:0}}
        keyboardType={type === 'email' ? 'email-address' :'default' }
        secureTextEntry={type === 'password' ? true: false}
        {...rest}
      />

  )
}