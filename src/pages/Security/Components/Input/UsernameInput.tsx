import React from "react";
import { TextInput } from "react-native";
import BaseInput, { BaseInputProps } from "../../../../components/UI/Input/BaseInput";
import { UsernameInputStyle } from "./SecurityInputStyle";

export const UsernameInput = (props: BaseInputProps) => {

  return (
    // @ts-ignore
    <BaseInput style={UsernameInputStyle} placeholder={"Kullanıcı Adınız"}/>
  );
};


