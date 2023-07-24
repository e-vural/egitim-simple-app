import React, { PropsWithChildren } from "react";
import { SafeAreaView, View, ViewProps } from "react-native";

interface PageContainerProps extends ViewProps{
  disableSafeArea?: boolean;
}

export const PageContainer = (props: PropsWithChildren<PageContainerProps>) => {

  if (!props.disableSafeArea) {
    return (
      // @ts-ignore
      <SafeAreaView {...props} style={{ flex: 1, ...props.style}} >
        {props.children}
      </SafeAreaView>
    );
  } else {

    return (
      // @ts-ignore
      <View {...props} style={{ flex: 1,...props.style }} >
        {props.children}
      </View>
    );
  }

};

