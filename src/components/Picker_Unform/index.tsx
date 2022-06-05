import React, { useEffect, useRef, useState } from "react";
import { View, Text } from "react-native";
import Picker, { PickerSelectProps } from "react-native-picker-select";
import { useField } from "@unform/core";
import { styles } from "./styles";

interface Props extends Omit<PickerSelectProps, "onValueChange"> {
  name: string;
  label: string;
  placeHolder: string;
}

export default function RNPickerSelect({
  placeHolder,
  name,
  label,
  items,
  ...rest
}: Props) {
  const pickerRef = useRef(null);
  const {
    fieldName,
    registerField,
    defaultValue = placeHolder,
  } = useField(name);

  const [selectedValue, setSelectedValue] = useState(defaultValue);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: pickerRef.current,
      getValue: (ref) => {
        return ref.props.value || "";
      },
      clearValue: (ref) => {
        ref.props.onValueChange(ref.props.placeholder.value);
      },
      setValue: (_, value: string) => {
        setSelectedValue(value);
      },
    });
  }, [fieldName, registerField]);

  return (
    <View>
      {label && <Text style={styles.text}>{label}</Text>}
      <View style={styles.inputAndroid}>
        <Picker
          style={{
            inputAndroid: { color: "black" },
            placeholder: { color: "black" },
          }}
          useNativeAndroidPickerStyle={false}
          ref={pickerRef}
          value={selectedValue}
          onValueChange={setSelectedValue}
          items={items}
          placeholder={{}}
          {...rest}
        />
      </View>
    </View>
  );
}
