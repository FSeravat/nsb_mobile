import React from 'react'
import {Button as ElementsButton, ButtonProps} from 'react-native-elements'
import { styles } from './styles'

type Props = ButtonProps & {
  main?: true | false
}

export default function Button ({main=true, ...rest }: Props) {
  return (
      <ElementsButton
        type={ main ? 'solid':'outline'}
        buttonStyle={main ? styles.mainButton:styles.secundaryButton}
        containerStyle={styles.elementsContainer}
        titleStyle={main ? { color: 'white' } : { color: '#D24258' }}
          {...rest}
      />

  )
}