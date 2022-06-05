import React from "react";
import { Input as ElementsInput, InputProps } from "react-native-elements";
import { styles } from "./styles";

type Props = InputProps & {
  type?: "text" | "email" | "password" | "cpf" | "data" | "cep";
};

const keyboardType = (value: string) => {
  if (value === "email") return "email-address";
  if (value === "cpf" || value === "data" || value === "cep") return "numeric";
  return "default";
};

export default function Input({ type = "text", ...rest }: Props) {
  return (
    <ElementsInput
      inputStyle={styles.input}
      inputContainerStyle={{ borderBottomWidth: 0 }}
      keyboardType={keyboardType(type)}
      secureTextEntry={type === "password" ? true : false}
      {...rest}
    />
  );
}
