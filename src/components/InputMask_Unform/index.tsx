import React, { forwardRef, useCallback, useState } from 'react';
import { TextInputMask, TextInputMaskProps } from 'react-native-masked-text';

import Input, { InputProps } from './Input';

type InputMaskProps = TextInputMaskProps & Omit<InputProps, "type">;

const InputMask = ({ type, ...rest }: InputMaskProps, inputRef: any) => {
  const [text, setText] = useState("");
  const [rawText, setRawText] = useState("");

  const handleChangeText = useCallback((maskedText, unmaskedText) => {
    setText(maskedText);
    setRawText(unmaskedText);
  }, []);

  return (
    <TextInputMask
      type={type}
      options={
        type === "datetime"
          ? {
              format: "DD/MM/YYYY",
            }
          : {}
      }
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
