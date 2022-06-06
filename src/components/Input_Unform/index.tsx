import { useField } from '@unform/core';
import React, { useEffect, useRef } from 'react';
import { Text, TextInput, TextInputProps } from 'react-native';

import { styles } from './styles';

interface InputProps extends TextInputProps {
  name: string;
  label: string;
  type?: "text" | "email" | "password" | "cpf" | "data" | "cep";
  rawText?: string;
}

interface InputValueReference {
  value: string;
}

const keyboardType = (value: string) => {
  if (value === "email") return "email-address";
  if (value === "cpf" || value === "data" || value === "cep") return "numeric";
  return "default";
};

export default function Input({
  type = "text",
  name,
  label,
  onChangeText,
  ...rest
}: InputProps) {
  const inputElementRef = useRef<any>(null);

  const { registerField, defaultValue = "", fieldName, error } = useField(name);
  const inputValueRef = useRef<InputValueReference>({ value: defaultValue });

  useEffect(() => {
    registerField<string>({
      name: fieldName,
      ref: inputValueRef.current,
      path: "value",
      setValue(ref: any, value) {
        inputValueRef.current.value = value;
        inputElementRef.current.setNativeProps({ text: value });
      },
      clearValue() {
        inputValueRef.current.value = "";
        inputElementRef.current.clear();
      },
    });
  }, [fieldName, registerField]);

  return (
    <>
      {label && <Text style={styles.text}>{label}</Text>}

      <TextInput
        style={styles.input}
        ref={inputElementRef}
        keyboardAppearance="light"
        defaultValue={defaultValue}
        keyboardType={keyboardType(type)}
        secureTextEntry={type === "password" ? true : false}
        onChangeText={(value) => {
          inputValueRef.current.value = value;
        }}
        {...rest}
      />
    </>
  );
}
