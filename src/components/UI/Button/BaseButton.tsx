import React, { PropsWithChildren } from "react";
import { Text, TextInput, TextInputProps, TouchableOpacity, TouchableOpacityProps } from "react-native";


export interface BaseButtonProps extends TouchableOpacityProps{
    text: string,
    textStyle?: object
}
const BaseButton = (props : PropsWithChildren<BaseButtonProps>) => {
  return (
    // @ts-ignore
    <TouchableOpacity  {...props}>
      <Text style={{color:"white",...props.textStyle}}>{props.text}</Text>
      {props.children}
    </TouchableOpacity>
  );
};

export default BaseButton;
