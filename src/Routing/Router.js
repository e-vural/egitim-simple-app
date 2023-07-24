import React from "react";
import { View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { LoginScreen, RegisterScreen } from "../pages/Security";




const Stack = createNativeStackNavigator();

const SecurityStack = () => {
  return(
    <Stack.Navigator initialRouteName="LoginScreen">
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
    </Stack.Navigator>
  )
}
const Router = (props) => {
  return (
    <NavigationContainer>
      <SecurityStack/>
    </NavigationContainer>
  );
};

export default Router;
