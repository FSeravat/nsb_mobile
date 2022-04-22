import React from 'react'
import {CheckBox as ElementsCheckBox, CheckBoxProps} from 'react-native-elements'
import { styles } from './styles'

type Props = CheckBoxProps & {
  title:string;
}

export default function CheckBox ({ ...rest }: Props) {
  const [checked, setChecked] = React.useState(false);
  return (
      <ElementsCheckBox
          onIconPress={() => setChecked(!checked)}
          onPress={() => setChecked(!checked)}
          checked={checked}
          checkedColor="#D3455B"
          uncheckedColor='#C4CED6'
          textStyle={{color:"#86939E"}}
          containerStyle={styles.checkBox}
          {...rest}
      />

  )
}