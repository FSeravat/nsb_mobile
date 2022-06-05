import React, { useState, useCallback, forwardRef } from "react";
import { TextInputMask, TextInputMaskProps } from "react-native-masked-text";
import Input from "../Input_Unform";

const InputMask = ({ type, ...rest }, inputRef: any) => {
  const [text, setText] = useState("");
  const [rawText, setRawText] = useState("");

  const handleChangeText = useCallback((maskedText, unmaskedText) => {
    setText(maskedText);
    setRawText(unmaskedText);
  }, []);

  return (
    <TextInputMask
      type={type}
      includeRawValueInChangeText
      value={text}
      onChangeText={handleChangeText}
      customTextInput={Input}
      customTextInputProps={{
        ref: inputRef,
        rawText,
        onInitialData: setText,
      }}
      {...rest}
    />
  );
};

export default forwardRef(InputMask);
