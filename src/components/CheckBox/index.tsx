import React from "react";
import {
  CheckBox as ElementsCheckBox,
  CheckBoxProps,
} from "react-native-elements";
import { styles } from "./styles";

type Props = CheckBoxProps & {
  title: string;
};

export default function CheckBox({ ...rest }: Props) {
  return (
    <ElementsCheckBox
      checkedColor="#D3455B"
      uncheckedColor="#C4CED6"
      textStyle={{ color: "#D3455B", textDecorationLine: "underline" }}
      containerStyle={styles.checkBox}
      {...rest}
    />
  );
}
