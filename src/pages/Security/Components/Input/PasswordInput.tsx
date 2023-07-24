import React from "react";
import { TextInput } from "react-native";
import BaseInput, { BaseInputProps } from "../../../../components/UI/Input/BaseInput";
import { PasswordInputStyle, UsernameInputStyle } from "./SecurityInputStyle";

export const PasswordInput = (props: BaseInputProps) => {

  return (
    // @ts-ignore
    <BaseInput style={{ ...PasswordInputStyle }} placeholder={"Şifreniz"}/>
  );
};


