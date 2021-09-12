import React from "react";
import { View, Text, TouchableOpacity, image, Image } from "react-native";
import { color } from "react-native-reanimated";

import { COLORS, SIZES, FONTS, icons } from "../constants";

const HeaderBar = ({ title, leftOnPressed, right, containerStyle }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        paddingHorizontal: SIZES.padding,
        ...containerStyle,
      }}
    >
      <View style={{ alignItems: "flex-start" }}>
        <TouchableOpacity
          style={{
            alignItems: "center",
            justifyContent: "center",
            width: 50,
            height: 50,
            borderRadius: 25,
            backgroundColor: COLORS.transparentBlack,
          }}
          onPress={leftOnPressed}
        >
          <Image
            source={icons.left_arrow}
            resizeMode="contain"
            style={{ width: 20, height: 20, tintColor: COLORS.white }}
          ></Image>
        </TouchableOpacity>
      </View>

      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text style={{ color: COLORS.white, ...FONTS.h3 }}>{title}</Text>
      </View>

      <TouchableOpacity
        style={{
          width: 50,
          height: 50,
          borderRadius: 25,
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: right ? COLORS.transparentBlack : null,
        }}
      >
        {right && (
          <Image
            source={icons.settings}
            resizeMode="contain"
            style={{ width: 20, height: 20, tintColor: COLORS.white }}
          ></Image>
        )}
      </TouchableOpacity>
    </View>
  );
};

export default HeaderBar;
