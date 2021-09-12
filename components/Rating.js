import React from "react";
import { View, Text, ImageBackground, Image, Animated } from "react-native";
import { COLORS, SIZES, FONTS, icons } from "../constants";

const Rating = ({ containerStyle, rate }) => {
  const starComponents = [];

  for (var i = 0; i < rate; i++) {
    starComponents.push(
      <Image
        key={`full-${i}`}
        source={icons.star}
        resizeMode="cover"
        style={{ marginLeft: i == 0 ? 0 : 5 }}
      ></Image>
    );
  }
  return (
    <View style={{ flexDirection: "row", ...containerStyle }}>
      {starComponents}
    </View>
  );
};

export default Rating;
