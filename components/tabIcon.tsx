import { View } from "react-native";
import React from "react";

interface TabIconProps {
  Icon: any;
}

export const TabIcon = ({ Icon }: TabIconProps) => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Icon />
    </View>
  );
};
