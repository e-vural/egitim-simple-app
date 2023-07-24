import React from "react";
import { TextInput, TextInputProps } from "react-native";


export interface BaseInputProps extends TextInputProps{

}
const BaseInput = (props : BaseInputProps) => {
  return (
    <TextInput {...props} />
  );
};

export default BaseInput;
