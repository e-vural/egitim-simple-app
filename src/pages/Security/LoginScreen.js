import React from "react";
import { PageContainer } from "../../components/UI/Container/PageContainer";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { ForceCenter } from "../../values/Style/GlobalStyle";
import { UsernameInput, PasswordInput } from "./Components/Input";
import { LoginButton } from "./Components/Button";
import { H1 } from "../../components/UI/Text/H1";
export const LoginScreen = () => {
  return (
    <PageContainer style={{ backgroundColor: "#4655F6", flexDirection: "column" }} disableSafeArea={true}>
      <View style={[{ flex: 1, ...ForceCenter.insideView }]}>
        <Image source={require("../../assets/img/logo.png")} />
      </View>
      <View style={{ flex: 2, ...ForceCenter.insideView }}>

        <View style={PageStyle.inputView}>
          <UsernameInput />
        </View>

        <View style={PageStyle.inputView}>
          <PasswordInput />
        </View>

        <View>
          <LoginButton />
        </View>

        <TouchableOpacity>
          <H1 text={"Hesabınız yok mu? Hesap oluşturmak için tıklayın"} />
        </TouchableOpacity>
      </View>

      <View style={[{ flex: 1 }]} />
    </PageContainer>
  );
};
const PageStyle = {
  inputView: {
    width: "80%",
    alignSelf: "center",
  },
};

