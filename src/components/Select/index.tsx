import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { Dropdown as DropdownComponent, DropdownProps } from 'react-native-element-dropdown';
import { styles } from './styles';

type Props = DropdownProps & {
  data:Object
}

export default function Dropdown({data, label ,...rest}: Props){
  const [value,setValue] = useState(null)
  return (
    <View>
      <Text style={styles.text}>{label}</Text>
      <DropdownComponent 
        style={styles.dropdown}
        data={data}
        labelField="label"
        valueField="value"
        placeholder={data[0].label}
        value={data[0].value}
        onChange={item => {setValue(item.value);}}
        {...rest}
      />
    </View>
  );
};