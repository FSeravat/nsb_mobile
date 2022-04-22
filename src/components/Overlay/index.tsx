import React from 'react'
import {Overlay as ElementsOverlay, OverlayProps, Text} from 'react-native-elements'
import Button from '../Button'
import { styles } from './styles'

type Props = OverlayProps & {
  pressFunction?:any
}

export default function Overlay ({pressFunction ,...rest}: Props) {
  return (
      <ElementsOverlay
        overlayStyle={styles.overlay}
        {...rest}
      >
        <Text
          style={styles.textTitle}
        >
          Tudo Certo !
        </Text>
        <Text
          style={styles.text}
        >
          Sua conta foi criada com sucesso. Em breve você receberá um email de confirmação
        </Text>

        <Button
          title="Ok"
          onPress={pressFunction}
        />
      </ElementsOverlay>

  )
}