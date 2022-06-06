import { useField } from '@unform/core';
import React, { useCallback, useEffect, useRef } from 'react';
import { Text, TextInput, TextInputProps } from 'react-native';

import { styles } from './styles';

export type InputProps = TextInputProps & {
  name: string;
  label: string;
  type?: "text" | "email" | "password" | "cpf" | "data" | "cep";
  rawText?: string;
};

interface InputReference extends TextInput {
  value: string;
}

const keyboardType = (value: string) => {
  if (value === "email") return "email-address";
  if (value === "cpf" || value === "data" || value === "cep") return "numeric";
  return "default";
};

export default function Input({
  rawText,
  type = "text",
  name,
  label,
  onChangeText,
  ...rest
}: InputProps) {
  const inputRef = useRef<InputReference>(null);

  const { fieldName, registerField, defaultValue = "", error } = useField(name);

  useEffect(() => {
    if (inputRef.current) inputRef.current.value = defaultValue;
  }, [defaultValue]);

  useEffect(() => {
    registerField<string>({
      name: fieldName,
      ref: inputRef.current,
      getValue() {
        if (rawText) return rawText;

        if (inputRef.current) return inputRef.current.value;

        return "";
      },
      setValue(ref, value) {
        if (inputRef.current) {
          inputRef.current.setNativeProps({ text: value });
          inputRef.current.value = value;
        }
      },
      clearValue() {
        if (inputRef.current) {
          inputRef.current.setNativeProps({ text: "" });
          inputRef.current.value = "";
        }
      },
    });
  }, [fieldName, rawText, registerField]);

  const handleChangeText = useCallback(
    (value: string) => {
      if (inputRef.current) inputRef.current.value = value;

      if (onChangeText) onChangeText(value);
    },
    [onChangeText]
  );

  return (
    <>
      {label && <Text style={styles.text}>{label}</Text>}

      <TextInput
        ref={inputRef}
        onChangeText={handleChangeText}
        defaultValue={defaultValue}
        keyboardType={keyboardType(type)}
        secureTextEntry={type === "password" ? true : false}
        style={styles.input}
        {...rest}
      />
    </>
  );
}
