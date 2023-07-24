import React from "react";
import { Text, TextPropsAndroid, TextPropsIOS } from "react-native";

interface TextProps extends TextPropsIOS,TextPropsAndroid{
  text: string
}
export const H1 = (props: TextProps) => {
  return (
    <Text style={{fontSize:15,color:"white"}} {...props}>
      {props.text}
    </Text>
  );
};
