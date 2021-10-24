import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";

const FutureForecast = (data) => {
  return (
    <View style={{ flexDirection: "row" }}>
      <FutureForecastItem currentData={data}></FutureForecastItem>
    </View>
  );
};

const FutureForecastItem = (data) => {
  //console.log(data);
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const dt = new Date(data?.currentData?.data?.date);
  const day = dt.getDay();

  const img = {
    uri: "https:" + data?.currentData?.data?.day?.condition.icon,
  };

  return (
    <View style={style.futureForecastItemContainer}>
      <Text style={style.day}>{days[day]}</Text>
      <Image source={img} style={style.image}></Image>

      <Text style={style.temp}>
        Avg Temp : {data?.currentData?.data?.day.avgtemp_c + " c"}
      </Text>
      <Text style={style.temp}>
        {" "}
        Avg Humidity : {data?.currentData?.data?.day.avghumidity + " %"}
      </Text>
    </View>
  );
};

const style = StyleSheet.create({
  image: {
    width: 100,
    height: 100,
  },
  futureForecastItemContainer: {
    flex: 1,
    backgroundColor: "#00000033",
    justifyContent: "center",
    //alignItems: "center",
    borderRadius: 10,
    borderColor: "#eee",
    borderWidth: 1,
    padding: 20,
    marginLeft: 5,
  },
  day: {
    fontSize: 20,
    color: "white",
    backgroundColor: "#3c3c44",
    padding: 10,
    textAlign: "center",
    borderRadius: 50,
    fontWeight: "200",
    marginBottom: 15,
  },
  temp: {
    fontSize: 16,
    color: "white",
    fontWeight: "100",
    textAlign: "center",
  },
  otherContainer: {
    paddingRight: 40,
  },
});

export default FutureForecast;
