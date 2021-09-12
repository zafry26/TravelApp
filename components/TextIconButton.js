import React from "react";
import { View, TouchableOpacity, Image, Text } from "react-native";
import { RectButton } from "react-native-gesture-handler";

import { COLORS, SIZES, FONTS, icons } from "../constants";

const TextIconButton = ({
  label,
  icon,
  customeContainerStyle,
  customeLabelStyle,
  onPress,
}) => {
  return (
    <TouchableOpacity
      style={{
        flexDirection: "row",
        height: 60,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: SIZES.radius,
        backgroundColor: COLORS.white,
        ...customeContainerStyle,
      }}
      onPress={onPress}
    >
      <Text
        style={{ marginRight: SIZES.base, ...FONTS.h2, ...customeLabelStyle }}
      >
        {label}
      </Text>
      <Image source={icon} style={{ width: 25, height: 25 }}></Image>
    </TouchableOpacity>
  );
};

export default TextIconButton;
