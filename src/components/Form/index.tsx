import React, { useRef } from "react";
import { SubmitHandler, FormHandles } from "@unform/core";
import { Text } from "react-native";
import { Form } from "@unform/mobile";
import Input from "../../components/Input_unform";

interface FormData {
  name: string;
  email: string;
}

export default function MyForm() {
  const formRef = useRef<FormHandles>(null);

  const handleSubmit: SubmitHandler<FormData> = (data) => {
    console.log(formRef);
  };

  return (
    <Form ref={formRef} onSubmit={handleSubmit}>
      <Input name="name" label="AA" />
      <Input name="email" label="BB" />
    </Form>
  );
}
